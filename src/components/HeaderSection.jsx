export default function HeaderSection({ isMenuOpen, setIsMenuOpen, navItems }) {
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div id="header">
            <div className="container">
                <nav className="site-nav">
                    <a className="brand" href="#header" onClick={closeMenu} aria-label="Mamati and Company Advocates home">
                        <img
                            src="/images/logo40.jpg"
                            className="logo"
                            alt="Mamati and Company Advocates Logo"
                            width="140"
                            height="70"
                        />
                        <span className="brand-text">Mamati and Company Advocates</span>
                    </a>
                    <div className="nav-actions">
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
                        <a className="nav-cta" href="#contact" onClick={closeMenu}>
                            Book a Consultation
                        </a>
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
                    </div>
                </nav>
                <div className="hero-grid reveal active">
                    <div className="hero-copy">
                        <p className="eyebrow">Nairobi counsel for Kenya and cross-border business</p>
                        <h1>
                            Clear guidance, practical solutions, and support you can count on.
                        </h1>
                        <p className="hero-lead">
                            Led by senior partner Chebosi Mamati, Mamati and Company Advocates brings
                            disciplined strategy, practical advice, and responsive client service to matters
                            that require accuracy and judgment.
                        </p>
                        <div className="hero-actions">
                            <a className="primary-btn" href="#contact">
                                Book a Consultation
                            </a>
                            <a className="secondary-btn" href="#services">
                                Explore Practice Areas
                            </a>
                        </div>
                        <div className="hero-metrics" aria-label="Firm highlights">
                            <div>
                                <strong>5</strong>
                                <span>Core practice areas</span>
                            </div>
                            <div>
                                <strong>Kenya</strong>
                                <span>Local insight, broad perspective</span>
                            </div>
                            <div>
                                <strong>Fast</strong>
                                <span>Clear communication at every stage</span>
                            </div>
                        </div>
                    </div>
                    <aside className="hero-panel" aria-label="Firm focus areas">
                        <p className="panel-label">Focused legal support</p>
                        <h2>Built for matters where precision matters.</h2>
                        <ul>
                            <li>Litigation and dispute resolution</li>
                            <li>Corporate and transactional work</li>
                            <li>Intellectual property protection</li>
                            <li>Family and private client matters</li>
                            <li>Conveyancing and property transactions</li>
                        </ul>
                        <a className="panel-link" href="#contact">
                            Speak with the firm
                        </a>
                    </aside>
                </div>
            </div>
        </div>
    );
}
