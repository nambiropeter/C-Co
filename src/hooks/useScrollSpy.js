import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently under the fixed navigation bar so the nav
 * can show where the visitor is. Reads layout inside requestAnimationFrame to
 * keep scrolling smooth on low-powered phones.
 */
export function useScrollSpy(sectionIds, offset = 140) {
    const [activeId, setActiveId] = useState(sectionIds[0]);

    useEffect(() => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        if (!sections.length) return undefined;

        let frame = 0;

        const measure = () => {
            frame = 0;

            const atBottom =
                window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

            if (atBottom) {
                setActiveId(sections[sections.length - 1].id);
                return;
            }

            let current = sections[0].id;
            sections.forEach((section) => {
                if (section.getBoundingClientRect().top <= offset) {
                    current = section.id;
                }
            });

            setActiveId(current);
        };

        const schedule = () => {
            if (frame) return;
            frame = window.requestAnimationFrame(measure);
        };

        measure();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);

        return () => {
            if (frame) window.cancelAnimationFrame(frame);
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
        };
    }, [sectionIds, offset]);

    return activeId;
}
