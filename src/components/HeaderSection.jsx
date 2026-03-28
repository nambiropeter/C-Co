export default function HeaderSection({ isMenuOpen, setIsMenuOpen, navItems }) {
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div id="header">
            <div className="container">
                <nav>
                    <img
                        src="/images/logo40.jpg"
                        className="logo"
                        alt="Mamati and Company Advocates Logo"
                        width="140"
                        height="70"
                    />
                    <ul
                        id="nav-menu"
                        className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
                        aria-label="Main navigation"
                    >
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} onClick={closeMenu}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <button
                        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                        id="hamburger"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen ? 'true' : 'false'}
                        aria-controls="nav-menu"
                        type="button"
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
                <div className="header-text">
                    <h1>
                        <span>Mamati</span> and Company
                        <br />
                        Advocates
                    </h1>
                </div>
            </div>
        </div>
    );
}
