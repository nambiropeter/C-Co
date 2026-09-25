import { useEffect, useRef } from 'react';

const MOBILE_NAV_QUERY = '(max-width: 980px)';

export default function SiteNav({ isMenuOpen, setIsMenuOpen, navItems, activeSection }) {
    const navRef = useRef(null);
    const toggleRef = useRef(null);

    const closeMenu = () => setIsMenuOpen(false);

    // Dismiss the menu the way people expect on every device: Escape on a
    // keyboard, a tap outside on touch, and automatically once the viewport is
    // wide enough for the full nav bar again.
    useEffect(() => {
        if (!isMenuOpen) return undefined;

        const onKeyDown = (event) => {
            if (event.key !== 'Escape') return;
            setIsMenuOpen(false);
            toggleRef.current?.focus();
        };

        const onPointerDown = (event) => {
            if (navRef.current?.contains(event.target)) return;
            setIsMenuOpen(false);
        };

        const desktopNav = window.matchMedia(MOBILE_NAV_QUERY);
        const onBreakpointChange = (event) => {
            if (!event.matches) setIsMenuOpen(false);
        };

        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('pointerdown', onPointerDown);
        desktopNav.addEventListener('change', onBreakpointChange);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('pointerdown', onPointerDown);
            desktopNav.removeEventListener('change', onBreakpointChange);
        };
    }, [isMenuOpen, setIsMenuOpen]);

    return (
        <header className="site-header">
            <nav className="site-nav" aria-label="Main navigation" ref={navRef}>
                <a
                    className="brand"
                    href="#header"
                    onClick={closeMenu}
                    aria-label="Mamati and Company Advocates home"
                >
                    <img
                        src="/images/logo40.jpg"
                        className="logo"
                        alt="Mamati and Company Advocates Logo"
                        width="500"
                        height="250"
                    />
                    <span className="brand-text">Mamati and Company Advocates</span>
                </a>
                <div className="nav-actions">
                    <ul id="nav-menu" className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.slice(1);

                            return (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        onClick={closeMenu}
                                        className={isActive ? 'is-current' : undefined}
                                        aria-current={isActive ? 'true' : undefined}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            );
                        })}
                        <li className="nav-menu-cta">
                            <a className="nav-cta" href="#contact" onClick={closeMenu}>
                                Book a Consultation
                            </a>
                        </li>
                    </ul>
                    <a className="nav-cta nav-cta-bar" href="#contact" onClick={closeMenu}>
                        Book a Consultation
                    </a>
                    <button
                        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                        id="hamburger"
                        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={isMenuOpen ? 'true' : 'false'}
                        aria-controls="nav-menu"
                        type="button"
                        ref={toggleRef}
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        </header>
    );
}
