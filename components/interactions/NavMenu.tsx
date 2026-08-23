'use client';

import { useEffect } from 'react';
import { qs } from '@/lib/dom';

/** Mobile sheet: scroll lock, escape, outside tap, and desktop-resize recovery. */
export default function NavMenu() {
  useEffect(() => {
    const burger = qs<HTMLButtonElement>('#burger');
    const menu = qs<HTMLElement>('#mobileMenu');
    if (!burger || !menu) return;

    const close = () => {
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Open menu');
      document.body.style.overflow = '';
    };
    const toggle = () => {
      const open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.style.overflow = open ? 'hidden' : '';
    };
    const onMenuClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a')) close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        close();
        burger.focus();
      }
    };
    const onDocClick = (e: MouseEvent) => {
      if (!menu.classList.contains('open')) return;
      const t = e.target as Node;
      if (!menu.contains(t) && !burger.contains(t)) close();
    };
    const onResizeWide = () => {
      if (window.innerWidth > 860 && menu.classList.contains('open')) close();
    };

    burger.addEventListener('click', toggle);
    menu.addEventListener('click', onMenuClick);
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onDocClick);
    window.addEventListener('resize', onResizeWide);

    return () => {
      burger.removeEventListener('click', toggle);
      menu.removeEventListener('click', onMenuClick);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onDocClick);
      window.removeEventListener('resize', onResizeWide);
      document.body.style.overflow = '';
    };
  }, []);

  return null;
}
