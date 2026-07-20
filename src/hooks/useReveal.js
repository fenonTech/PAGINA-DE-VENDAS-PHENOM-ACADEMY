import { useEffect, useRef, useState } from 'react';

let sharedObserver = null;

function getObserver() {
  if (sharedObserver) return sharedObserver;
  if (typeof IntersectionObserver === 'undefined') return null;

  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.dispatchEvent(new Event('reveal'));
          sharedObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  return sharedObserver;
}

/** Fade + slide-up reveal for an element as it enters the viewport, backed by one shared IntersectionObserver. */
export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const observer = getObserver();
    if (!el || !observer) {
      setVisible(true);
      return;
    }

    const onReveal = () => setVisible(true);
    el.addEventListener('reveal', onReveal);
    observer.observe(el);

    return () => {
      el.removeEventListener('reveal', onReveal);
      observer.unobserve(el);
    };
  }, []);

  return { ref, className: visible ? 'reveal is-visible' : 'reveal' };
}
