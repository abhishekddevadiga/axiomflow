'use client';

import { useEffect } from 'react';
import { qs, qsa, onResize, afterFonts } from '@/lib/dom';

/** Testimonial rail: native scroll-snap plus page dots that adapt to viewport. */
export default function Carousel() {
  useEffect(() => {
    const rail = qs<HTMLElement>('[data-tst-rail]');
    const dotsWrap = qs<HTMLElement>('[data-tst-dots]');
    const prev = qs<HTMLButtonElement>('[data-tst-prev]');
    const next = qs<HTMLButtonElement>('[data-tst-next]');
    if (!rail || !dotsWrap) return;

    const cards = qsa<HTMLElement>('.tst-card', rail);
    if (!cards.length) return;

    let pages = 1;
    let perPage = 1;
    let dots: HTMLButtonElement[] = [];

    const step = () => {
      const a = cards[0].getBoundingClientRect();
      const gap = cards.length > 1 ? cards[1].getBoundingClientRect().left - a.right : 0;
      return a.width + Math.max(0, gap);
    };

    const buildDots = () => {
      const s = step();
      perPage = Math.max(1, Math.round(rail.clientWidth / s));
      pages = Math.max(1, Math.ceil(cards.length / perPage));
      if (dots.length === pages) return;
      dotsWrap.innerHTML = '';
      dots = [];
      for (let i = 0; i < pages; i++) {
        const d = document.createElement('button');
        d.type = 'button';
        d.className = 'tst-dot';
        d.setAttribute('role', 'tab');
        d.setAttribute('aria-label', `Go to testimonial page ${i + 1}`);
        d.addEventListener('click', () =>
          rail.scrollTo({ left: i * perPage * step(), behavior: 'smooth' }),
        );
        dotsWrap.appendChild(d);
        dots.push(d);
      }
    };

    const sync = () => {
      const max = rail.scrollWidth - rail.clientWidth;
      let i = max <= 1 ? 0 : Math.round(rail.scrollLeft / Math.max(1, perPage * step()));
      i = Math.max(0, Math.min(pages - 1, i));
      dots.forEach((d, k) => {
        d.classList.toggle('on', k === i);
        d.setAttribute('aria-selected', k === i ? 'true' : 'false');
      });
      if (prev) prev.disabled = rail.scrollLeft <= 2;
      if (next) next.disabled = rail.scrollLeft >= max - 2;
    };

    const nudge = (dir: number) =>
      rail.scrollBy({ left: dir * perPage * step(), behavior: 'smooth' });

    const onPrev = () => nudge(-1);
    const onNext = () => nudge(1);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        nudge(1);
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        nudge(-1);
      }
    };

    let ticking = false;
    const onRailScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        sync();
        ticking = false;
      });
    };

    prev?.addEventListener('click', onPrev);
    next?.addEventListener('click', onNext);
    rail.addEventListener('keydown', onKey);
    rail.addEventListener('scroll', onRailScroll, { passive: true });

    buildDots();
    sync();
    afterFonts(() => {
      buildDots();
      sync();
    });
    const offResize = onResize(() => {
      buildDots();
      sync();
    });

    return () => {
      prev?.removeEventListener('click', onPrev);
      next?.removeEventListener('click', onNext);
      rail.removeEventListener('keydown', onKey);
      rail.removeEventListener('scroll', onRailScroll);
      offResize();
    };
  }, []);

  return null;
}
