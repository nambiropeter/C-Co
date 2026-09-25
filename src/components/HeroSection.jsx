export default function HeroSection() {
    return (
        <section id="header" className="hero" aria-labelledby="hero-title">
            <div className="container">
                <div className="hero-grid reveal active">
                    <div className="hero-copy">
                        <p className="eyebrow">Nairobi counsel for Kenya and cross-border business</p>
                        <h1 id="hero-title">
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
        </section>
    );
}
