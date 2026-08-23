'use client';

import { useEffect } from 'react';
import { qs, qsa } from '@/lib/dom';

/** Inline validation, then the demo confirmation. Wire `onSubmit` to a real
 *  handler (Formspree, route handler, CRM) before launch. */
export default function ContactForm() {
  useEffect(() => {
    const form = qs<HTMLFormElement>('#contactForm');
    if (!form) return;
    const done = qs<HTMLElement>('#formDone');
    const cleanups: Array<() => void> = [];

    const required = qsa<HTMLInputElement>('[required]', form);
    required.forEach((input) => {
      const field = input.closest('.field');
      if (!field || field.querySelector('.field-err')) return;
      const err = document.createElement('p');
      err.className = 'field-err';
      err.id = `${input.id}-err`;
      err.setAttribute('role', 'alert');
      field.appendChild(err);
      input.setAttribute('aria-describedby', err.id);
      const clear = () => {
        if (field.classList.contains('invalid')) {
          field.classList.remove('invalid');
          input.setAttribute('aria-invalid', 'false');
        }
      };
      input.addEventListener('input', clear);
      cleanups.push(() => input.removeEventListener('input', clear));
    });

    const messageFor = (input: HTMLInputElement) => {
      if (!input.value.trim())
        return input.id === 'f-email'
          ? 'Please add your email so we can reply.'
          : 'Please add your name.';
      if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim()))
        return 'That email address does not look right.';
      return '';
    };

    const onSubmit = (e: SubmitEvent) => {
      e.preventDefault();
      let firstBad: HTMLInputElement | null = null;
      required.forEach((input) => {
        const field = input.closest('.field');
        const msg = messageFor(input);
        field?.classList.toggle('invalid', !!msg);
        input.setAttribute('aria-invalid', msg ? 'true' : 'false');
        const err = field?.querySelector('.field-err');
        if (err) err.textContent = msg;
        if (msg && !firstBad) firstBad = input;
      });
      if (firstBad) {
        (firstBad as HTMLInputElement).focus();
        return;
      }
      if (done) done.style.display = 'block';
    };

    form.addEventListener('submit', onSubmit);
    cleanups.push(() => form.removeEventListener('submit', onSubmit));
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
