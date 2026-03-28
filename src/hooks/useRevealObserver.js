import { useEffect } from 'react';

export function useRevealObserver() {
    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    } else {
                        entry.target.classList.remove('active');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -20% 0px'
            }
        );

        reveals.forEach((element) => observer.observe(element));

        return () => {
            reveals.forEach((element) => observer.unobserve(element));
            observer.disconnect();
        };
    }, []);
}
