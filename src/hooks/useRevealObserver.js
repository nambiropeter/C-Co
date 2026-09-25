import { useEffect } from 'react';

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

/**
 * Fades sections in as they scroll into view.
 *
 * Content is visible by default in CSS and only hidden once this hook opts in,
 * so a failed bundle, a crawler, or a browser without IntersectionObserver
 * still shows the whole page. Each section reveals once and is then released:
 * re-hiding on scroll-up made long pages flicker on phones and tablets.
 */
export function useRevealObserver() {
    useEffect(() => {
        const root = document.documentElement;
        const reveals = Array.from(document.querySelectorAll('.reveal'));

        const prefersReducedMotion = window.matchMedia(REDUCED_MOTION).matches;
        if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
            reveals.forEach((element) => element.classList.add('active'));
            return undefined;
        }

        root.classList.add('js-reveal');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.08,
                rootMargin: '0px 0px -12% 0px'
            }
        );

        reveals.forEach((element) => observer.observe(element));

        // Safety net: if anything stops the observer from firing, never leave
        // the page blank.
        const failsafe = window.setTimeout(() => {
            reveals.forEach((element) => element.classList.add('active'));
        }, 3000);

        return () => {
            window.clearTimeout(failsafe);
            observer.disconnect();
            root.classList.remove('js-reveal');
        };
    }, []);
}
