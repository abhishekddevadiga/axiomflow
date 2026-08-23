'use client';

import { useEffect } from 'react';
import { qs, qsa, prefersReduced, noHover, onResize } from '@/lib/dom';

/**
 * Behaviour for the bento visuals, the content-system phases, the archive
 * folders, the work cards and the insights row. All of these operate on
 * server-rendered markup, so the sections themselves stay Server Components.
 */
export default function SectionBehaviours() {
  useEffect(() => {
    const reduced = prefersReduced();
    const touch = noHover();
    const cleanups: Array<() => void> = [];

    /* ---- capabilities: bento visuals perform once in view ---------------- */
    const bento = qsa('[data-bento]');
    if (bento.length) {
      if (reduced || !('IntersectionObserver' in window)) {
        bento.forEach((c) => c.classList.add('on'));
      } else {
        const io = new IntersectionObserver(
          (entries) =>
            entries.forEach((en) => {
              if (en.isIntersecting) {
                en.target.classList.add('on');
                io.unobserve(en.target);
              }
            }),
          { threshold: 0.35, rootMargin: '0px 0px -8% 0px' },
        );
        bento.forEach((c) => io.observe(c));
        cleanups.push(() => io.disconnect());
      }
    }

    /* ---- content system: phases light in sequence ------------------------ */
    const phases = qsa('[data-cp-phase]');
    const joins = qsa('[data-cp-join]');
    const nodes = qsa('[data-cp-node]');
    if (phases.length) {
      if (reduced || !('IntersectionObserver' in window)) {
        [...phases, ...joins].forEach((el) => el.classList.add('on'));
      } else {
        const io = new IntersectionObserver(
          (entries) =>
            entries.forEach((en) => {
              if (en.isIntersecting) {
                en.target.classList.add('on');
                io.unobserve(en.target);
              }
            }),
          { threshold: 0.22, rootMargin: '0px 0px -12% 0px' },
        );
        [...phases, ...joins].forEach((el) => io.observe(el));
        cleanups.push(() => io.disconnect());
      }
      nodes.forEach((n) => {
        const open = () => {
          const willOpen = !n.classList.contains('open');
          nodes.forEach((o) => {
            o.classList.remove('open');
            o.setAttribute('aria-expanded', 'false');
          });
          if (willOpen) {
            n.classList.add('open');
            n.setAttribute('aria-expanded', 'true');
          }
        };
        const key = (e: KeyboardEvent) => {
          if (e.key === 'Escape') {
            n.classList.remove('open');
            n.setAttribute('aria-expanded', 'false');
          }
        };
        n.addEventListener('click', open);
        n.addEventListener('keydown', key);
        cleanups.push(() => {
          n.removeEventListener('click', open);
          n.removeEventListener('keydown', key);
        });
      });
    }

    /* ---- archive folders: hover pops; touch pops on scroll-in ------------ */
    const folders = qsa('[data-folder]');
    folders.forEach((f) => {
      const on = () => f.classList.add('pop');
      const off = () => f.classList.remove('pop');
      f.addEventListener('focus', on);
      f.addEventListener('blur', off);
      cleanups.push(() => {
        f.removeEventListener('focus', on);
        f.removeEventListener('blur', off);
      });
    });
    if (folders.length && touch) {
      if (reduced || !('IntersectionObserver' in window)) {
        folders.forEach((f) => f.classList.add('pop'));
      } else {
        const io = new IntersectionObserver(
          (entries) =>
            entries.forEach((en) => {
              if (en.isIntersecting) {
                en.target.classList.add('pop');
                io.unobserve(en.target);
              }
            }),
          { threshold: 0.4 },
        );
        folders.forEach((f) => io.observe(f));
        cleanups.push(() => io.disconnect());
      }
    }

    /* ---- work cards: tap to reveal where hover does not exist ------------ */
    const works = qsa('[data-work]');
    works.forEach((el) => {
      const toggle = () => {
        const open = el.classList.toggle('open');
        el.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (open)
          works.forEach((o) => {
            if (o !== el) {
              o.classList.remove('open');
              o.setAttribute('aria-expanded', 'false');
            }
          });
      };
      const click = () => {
        if (touch) toggle();
      };
      const key = (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
        if (e.key === 'Escape') {
          el.classList.remove('open');
          el.setAttribute('aria-expanded', 'false');
        }
      };
      el.addEventListener('click', click);
      el.addEventListener('keydown', key);
      cleanups.push(() => {
        el.removeEventListener('click', click);
        el.removeEventListener('keydown', key);
      });
    });

    /* ---- insights: one expanded at a time -------------------------------- */
    const row = qs('[data-ins-row]');
    const items = row ? qsa('[data-ins]', row) : [];
    if (row && items.length) {
      const open = (el: Element) => items.forEach((x) => x.classList.toggle('on', x === el));
      items.forEach((el) => {
        const enter = () => {
          if (!touch) open(el);
        };
        const focus = () => open(el);
        const click = (e: Event) => {
          if (touch && !el.classList.contains('on')) {
            e.preventDefault();
            open(el);
          }
        };
        el.addEventListener('mouseenter', enter);
        el.addEventListener('focus', focus);
        el.addEventListener('click', click);
        cleanups.push(() => {
          el.removeEventListener('mouseenter', enter);
          el.removeEventListener('focus', focus);
          el.removeEventListener('click', click);
        });
      });
      const leave = () => {
        if (!touch) open(items[0]);
      };
      row.addEventListener('mouseleave', leave);
      cleanups.push(() => row.removeEventListener('mouseleave', leave));
    }

    /* ---- stat counters ---------------------------------------------------- */
    const counters = qsa('[data-count]');
    const runCounter = (el: HTMLElement) => {
      const target = parseInt(el.getAttribute('data-count') ?? '0', 10);
      if (reduced || !target) {
        el.textContent = String(target);
        return;
      }
      let t0: number | null = null;
      const tick = (t: number) => {
        if (!t0) t0 = t;
        const p = Math.min(1, (t - t0) / 900);
        el.textContent = String(Math.max(1, Math.round(target * (1 - Math.pow(1 - p, 3)))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if (counters.length) {
      if ('IntersectionObserver' in window) {
        const cio = new IntersectionObserver(
          (entries) =>
            entries.forEach((en) => {
              if (!en.isIntersecting) return;
              cio.unobserve(en.target);
              runCounter(en.target as HTMLElement);
            }),
          { threshold: 0.6 },
        );
        counters.forEach((c) => cio.observe(c));
        cleanups.push(() => cio.disconnect());
      } else {
        counters.forEach(runCounter);
      }
    }

    /* ---- industries tabs -------------------------------------------------- */
    const tabs = qsa('.ind-tab');
    const panels = qsa<HTMLElement>('.ind-panel');
    tabs.forEach((tab, i) => {
      const click = () => {
        tabs.forEach((t, j) => {
          t.setAttribute('aria-selected', j === i ? 'true' : 'false');
          if (panels[j]) panels[j].hidden = j !== i;
        });
      };
      const key = (e: KeyboardEvent) => {
        const d =
          e.key === 'ArrowDown' || e.key === 'ArrowRight'
            ? 1
            : e.key === 'ArrowUp' || e.key === 'ArrowLeft'
              ? -1
              : 0;
        if (!d) return;
        e.preventDefault();
        const n = (i + d + tabs.length) % tabs.length;
        tabs[n].click();
        tabs[n].focus();
      };
      tab.addEventListener('click', click);
      tab.addEventListener('keydown', key);
      cleanups.push(() => {
        tab.removeEventListener('click', click);
        tab.removeEventListener('keydown', key);
      });
    });

    /* ---- faq accordion ---------------------------------------------------- */
    const faqItems = qsa('.faq-item');
    faqItems.forEach((item) => {
      const q = qs('.faq-q', item);
      const a = qs<HTMLElement>('.faq-a', item);
      if (!q || !a) return;
      const toggle = () => {
        const open = item.classList.toggle('open');
        q.setAttribute('aria-expanded', open ? 'true' : 'false');
        a.style.maxHeight = open ? `${a.scrollHeight}px` : '0px';
      };
      q.addEventListener('click', toggle);
      cleanups.push(() => q.removeEventListener('click', toggle));
    });
    cleanups.push(
      onResize(() =>
        faqItems.forEach((item) => {
          const a = qs<HTMLElement>('.faq-a', item);
          if (a && item.classList.contains('open')) a.style.maxHeight = `${a.scrollHeight}px`;
        }),
      ),
    );

    /* ---- spin badge focuses the form ------------------------------------- */
    const badge = qs('#spinBadge');
    if (badge) {
      const jump = () => {
        const f = qs<HTMLInputElement>('#f-name');
        if (!f) return;
        f.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
        window.setTimeout(() => f.focus({ preventScroll: true }), reduced ? 0 : 450);
      };
      badge.addEventListener('click', jump);
      cleanups.push(() => badge.removeEventListener('click', jump));
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
