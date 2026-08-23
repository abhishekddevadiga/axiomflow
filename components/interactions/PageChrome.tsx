'use client';

import { useEffect } from 'react';
import { qs, qsa, onScroll, onResize, afterFonts, prefersReduced } from '@/lib/dom';

/**
 * Nav scrolled state, the top progress bar, the scroll-driven word fill on
 * statements, the thinking-track spine, and the shared `.rv` reveal observer.
 * Mounted once; operates on server-rendered markup so no section has to become
 * a Client Component just to animate.
 */
export default function PageChrome() {
  useEffect(() => {
    const reduced = prefersReduced();
    const nav = qs('.nav');
    const pbar = qs('#progressBar');

    /* ---- scroll-fill statements ---------------------------------------- */
    const fills = qsa('[data-fill]').map((el) => {
      if (!el.dataset.wrapped) {
        const walk = (node: HTMLElement) => {
          Array.from(node.childNodes).forEach((child) => {
            if (child.nodeType === 3) {
              const frag = document.createDocumentFragment();
              (child.textContent || '').split(/(\s+)/).forEach((tok) => {
                if (!tok) return;
                if (/^\s+$/.test(tok)) {
                  frag.appendChild(document.createTextNode(tok));
                  return;
                }
                const span = document.createElement('span');
                const owner = node.closest('.hl, .em');
                span.className =
                  'w' + (owner ? (owner.classList.contains('hl') ? ' hw' : ' ew') : '');
                span.textContent = tok;
                frag.appendChild(span);
              });
              child.parentNode?.replaceChild(frag, child);
            } else if (child.nodeType === 1) {
              walk(child as HTMLElement);
            }
          });
        };
        walk(el);
        el.dataset.wrapped = '1';
      }
      return { el, words: qsa('.w', el) };
    });

    const updateFills = () => {
      if (reduced) {
        fills.forEach(({ words }) => words.forEach((w) => w.classList.add('on')));
        return;
      }
      const vh = window.innerHeight;
      fills.forEach(({ el, words }) => {
        const r = el.getBoundingClientRect();
        const p = Math.max(0, Math.min(1, (vh * 0.85 - r.top) / (r.height + vh * 0.45)));
        const lit = Math.round(p * words.length);
        words.forEach((w, i) => w.classList.toggle('on', i < lit));
      });
    };

    /* ---- thinking track ------------------------------------------------- */
    const track = qs('[data-track]');
    const spineWrap = qs('.track-spine');
    const spine = qs('[data-spine]');
    const steps = qsa('[data-step]');
    let spineTop = 0;
    let spineH = 0;

    const layoutSpine = () => {
      if (!track || !spineWrap || steps.length < 2) return;
      const first = qs('.tstep-marker', steps[0]);
      const last = qs('.tstep-marker', steps[steps.length - 1]);
      if (!first || !last) return;
      const t = track.getBoundingClientRect().top;
      const a = first.getBoundingClientRect();
      const b = last.getBoundingClientRect();
      spineTop = a.top - t + a.height / 2;
      spineH = b.top - t + b.height / 2 - spineTop;
      spineWrap.style.top = `${spineTop}px`;
      spineWrap.style.bottom = 'auto';
      spineWrap.style.height = `${spineH}px`;
    };

    const updateTrack = () => {
      if (!track || !steps.length) return;
      if (reduced) {
        if (spine) spine.style.height = '100%';
        steps.forEach((s) => s.classList.add('lit'));
        return;
      }
      const line = window.innerHeight * 0.62;
      const t = track.getBoundingClientRect().top;
      if (spine && spineH > 0) {
        const pct = Math.max(0, Math.min(1, (line - (t + spineTop)) / spineH));
        spine.style.height = `${pct * 100}%`;
      }
      steps.forEach((s) => {
        const m = qs('.tstep-marker', s) ?? s;
        const r = m.getBoundingClientRect();
        s.classList.toggle('lit', r.top + r.height / 2 <= line);
      });
    };

    /* ---- reveal on scroll ----------------------------------------------- */
    const revealEls = qsa('.rv');
    const revealAll = () => revealEls.forEach((el) => el.classList.add('in'));
    let io: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window && !reduced) {
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add('in');
              io?.unobserve(en.target);
            }
          }),
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      );
      revealEls.forEach((el) => io?.observe(el));
    } else {
      revealAll();
    }
    /* failsafe: nothing that animates in may stay invisible */
    const failsafe = window.setTimeout(() => {
      revealEls.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 1.5) el.classList.add('in');
      });
    }, 2200);
    window.addEventListener('error', revealAll);

    /* ---- wire it up ------------------------------------------------------ */
    const tick = () => {
      nav?.classList.toggle('scrolled', window.scrollY > 8);
      updateTrack();
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (pbar && max > 0) pbar.style.width = `${(window.scrollY / max) * 100}%`;
      updateFills();
    };

    layoutSpine();
    const offScroll = onScroll(tick);
    const offResize = onResize(() => {
      layoutSpine();
      updateFills();
      updateTrack();
    });
    afterFonts(() => {
      layoutSpine();
      updateTrack();
    });

    return () => {
      offScroll();
      offResize();
      io?.disconnect();
      window.clearTimeout(failsafe);
      window.removeEventListener('error', revealAll);
    };
  }, []);

  return null;
}
