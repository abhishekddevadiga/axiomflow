'use client';

import { useEffect } from 'react';
import { qs, prefersReduced, onResize } from '@/lib/dom';
import { REEL, type ReelItem } from '@/data/reel';

/**
 * The 3D arc marquee. Card transforms are derived from arithmetic on the track
 * offset rather than per-frame getBoundingClientRect, so the loop never causes
 * layout thrash. One set is repeated until it exceeds the widest viewport, then
 * rendered twice, so the wrap is seamless.
 */
export default function ReelEngine() {
  useEffect(() => {
    const reel = qs<HTMLElement>('[data-reel]');
    const track = qs<HTMLElement>('[data-reel-track]');
    if (!reel || !track || !REEL.length) return;

    const reduced = prefersReduced();
    const N = REEL.length;
    const cards: HTMLElement[] = [];
    let step = 0;
    let setW = 0;
    let setLen = N;
    let offset = 0;
    let CW = 0;
    const speed = 26;
    let target = speed;
    let current = speed;
    let last = 0;
    let raf: number | null = null;
    let visible = true;

    const media = (d: ReelItem) =>
      d.cls
        ? `<span class="px px-${d.cls}"></span>`
        : d.poster
          ? `<img src="${d.poster}" alt="" loading="lazy" decoding="async">`
          : '<span class="vid-art"></span>';

    CW = reel.clientWidth;
    const w0 = parseFloat(getComputedStyle(reel).getPropertyValue('--reel-w')) || 232;
    step = w0 + Math.max(14, Math.round(w0 * 0.09));

    /* build */
    {
      const frag = document.createDocumentFragment();
      const widest = Math.max(CW, window.screen?.width ?? 0, 1920);
      const reps = Math.max(1, Math.ceil((widest + 2 * step) / (N * step)));
      setLen = N * reps;
      setW = setLen * step;
      for (let pass = 0; pass < 2; pass++) {
        for (let i = 0; i < setLen; i++) {
          const d = REEL[i % N];
          const el = document.createElement('button');
          el.className = 'vid';
          el.type = 'button';
          el.setAttribute('aria-label', `Play video: ${d.title}`);
          el.dataset.idx = String(i % N);
          el.innerHTML =
            media(d) +
            (d.src ? `<video muted loop playsinline preload="none" src="${d.src}"></video>` : '') +
            '<span class="vid-scrim"></span>' +
            `<span class="vid-tag">${d.tag}</span>` +
            '<span class="vid-play"><svg viewBox="0 0 20 20"><path d="M5 3.5l12 6.5-12 6.5z"/></svg></span>' +
            `<span class="vid-title">${d.title}</span>`;
          frag.appendChild(el);
          cards.push(el);
        }
      }
      track.appendChild(frag);
    }

    const measure = () => {
      CW = reel.clientWidth;
      const w = parseFloat(getComputedStyle(reel).getPropertyValue('--reel-w')) || 232;
      step = w + Math.max(14, Math.round(w * 0.09));
      setW = setLen * step;
    };

    const place = () => {
      const half = CW / 2;
      for (let i = 0; i < cards.length; i++) {
        let x = i * step + offset;
        if (x < -step) x += setW * 2;
        const cx = x + step / 2;
        const t = (cx - half) / half;
        const ct = Math.max(-1.6, Math.min(1.6, t));
        const ang = -ct * (CW < 700 ? 16 : 26);
        const scale = 1 - Math.min(Math.abs(ct), 1) * 0.1;
        const z = -Math.abs(ct) * 70;
        const el = cards[i];
        if (x < -step * 1.6 || x > CW + step * 0.6) {
          if (el.style.visibility !== 'hidden') el.style.visibility = 'hidden';
          continue;
        }
        if (el.style.visibility === 'hidden') el.style.visibility = '';
        el.style.transform = `translate3d(${x}px,0,${z}px) rotateY(${ang}deg) scale(${scale})`;
      }
    };

    const frame = (ts: number) => {
      if (!last) last = ts;
      const dt = Math.min(64, ts - last) / 1000;
      last = ts;
      current += (target - current) * 0.06;
      offset -= current * dt;
      if (offset <= -setW) offset += setW;
      place();
      raf = requestAnimationFrame(frame);
    };
    const start = () => {
      if (!raf && visible) {
        last = 0;
        raf = requestAnimationFrame(frame);
      }
    };
    const stop = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = null;
      }
    };

    measure();
    offset = 0;
    place();

    if (reduced) {
      reel.style.overflowX = 'auto';
      reel.style.perspective = 'none';
      track.style.position = 'relative';
      track.style.width = `${setW}px`;
      cards.forEach((el, i) => {
        el.style.transform = `translate3d(${i * step}px,0,0)`;
        el.style.visibility = '';
      });
    } else {
      start();
    }

    const slow = () => {
      target = speed * 0.16;
    };
    const norm = () => {
      target = speed;
    };
    reel.addEventListener('touchstart', slow, { passive: true });
    reel.addEventListener('touchend', norm, { passive: true });
    reel.addEventListener('mouseenter', slow);
    reel.addEventListener('mouseleave', norm);
    reel.addEventListener('focusin', slow);
    reel.addEventListener('focusout', norm);

    let vio: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window && !reduced) {
      vio = new IntersectionObserver(
        (en) => {
          visible = en[0].isIntersecting;
          visible ? start() : stop();
        },
        { threshold: 0.05 },
      );
      vio.observe(reel);
    }
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVis);
    const offResize = onResize(() => {
      measure();
      place();
    });

    /* ---- lightbox -------------------------------------------------------- */
    const lb = qs<HTMLElement>('[data-lb]');
    const slot = qs<HTMLElement>('[data-lb-slot]');
    const lbTitle = qs('[data-lb-title]');
    const lbTag = qs('[data-lb-tag]');
    let lastFocus: HTMLElement | null = null;

    const closeLb = () => {
      if (!lb || !slot) return;
      lb.classList.remove('open');
      document.body.style.overflow = '';
      window.setTimeout(() => {
        lb.hidden = true;
        slot.innerHTML = '';
        lastFocus?.focus();
      }, 350);
    };
    const openLb = (i: number) => {
      const d = REEL[i];
      if (!lb || !slot) return;
      lastFocus = document.activeElement as HTMLElement;
      if (lbTitle) lbTitle.textContent = d.title;
      if (lbTag) lbTag.textContent = d.tag;
      slot.innerHTML = d.src
        ? `<video src="${d.src}" controls autoplay playsinline style="width:100%;height:100%;object-fit:cover"></video>`
        : d.cls
          ? `<span class="px px-${d.cls}" style="position:absolute"></span>`
          : '<span class="vid-art"></span>';
      lb.hidden = false;
      requestAnimationFrame(() => lb.classList.add('open'));
      document.body.style.overflow = 'hidden';
      qs<HTMLButtonElement>('[data-lb-close]', lb)?.focus();
    };

    const cardCleanups: Array<() => void> = [];
    cards.forEach((el) => {
      const v = el.querySelector('video');
      if (v) {
        const enter = () => {
          void v.play().then(() => el.classList.add('playing')).catch(() => {});
        };
        const leave = () => {
          el.classList.remove('playing');
          v.pause();
          v.currentTime = 0;
        };
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
        cardCleanups.push(() => {
          el.removeEventListener('mouseenter', enter);
          el.removeEventListener('mouseleave', leave);
        });
      }
      const click = () => openLb(Number(el.dataset.idx));
      el.addEventListener('click', click);
      cardCleanups.push(() => el.removeEventListener('click', click));
    });

    const lbClick = (e: MouseEvent) => {
      if (e.target === lb) closeLb();
    };
    const lbKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lb && !lb.hidden) closeLb();
    };
    lb?.addEventListener('click', lbClick);
    qs('[data-lb-close]', lb ?? document)?.addEventListener('click', closeLb);
    document.addEventListener('keydown', lbKey);

    return () => {
      stop();
      vio?.disconnect();
      offResize();
      document.removeEventListener('visibilitychange', onVis);
      document.removeEventListener('keydown', lbKey);
      lb?.removeEventListener('click', lbClick);
      reel.removeEventListener('touchstart', slow);
      reel.removeEventListener('touchend', norm);
      reel.removeEventListener('mouseenter', slow);
      reel.removeEventListener('mouseleave', norm);
      reel.removeEventListener('focusin', slow);
      reel.removeEventListener('focusout', norm);
      cardCleanups.forEach((fn) => fn());
      track.innerHTML = '';
    };
  }, []);

  return null;
}
