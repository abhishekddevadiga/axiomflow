/** Small typed DOM helpers shared by the interaction components. */
export const qs = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  root.querySelector<T>(sel);

export const qsa = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel));

export const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const noHover = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;

/** rAF-throttled scroll subscription. */
export function onScroll(fn: () => void): () => void {
  let ticking = false;
  const handler = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      fn();
      ticking = false;
    });
  };
  window.addEventListener('scroll', handler, { passive: true });
  fn();
  return () => window.removeEventListener('scroll', handler);
}

/** Debounced resize subscription. */
export function onResize(fn: () => void, delay = 140): () => void {
  let t: ReturnType<typeof setTimeout>;
  const handler = () => {
    clearTimeout(t);
    t = setTimeout(fn, delay);
  };
  window.addEventListener('resize', handler);
  return () => {
    clearTimeout(t);
    window.removeEventListener('resize', handler);
  };
}

/** Re-runs once webfonts settle, since they change measured geometry. */
export function afterFonts(fn: () => void): void {
  if (typeof document === 'undefined') return;
  const fonts = (document as Document & { fonts?: FontFaceSet }).fonts;
  if (fonts?.ready) void fonts.ready.then(fn);
  else window.addEventListener('load', fn, { once: true });
}
