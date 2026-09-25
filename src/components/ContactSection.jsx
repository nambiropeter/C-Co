import { CONTACT } from '../data/siteContent';

export default function ContactSection({ officeMapUrl }) {
    return (
        <section id="contact" className="reveal" aria-labelledby="contact-title">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <p className="section-kicker">Get in touch</p>
                        <h2 className="sub-title" id="contact-title">Contact</h2>
                        <p className="contact-lead">
                            If you need clear next steps, reach out and the firm will respond with a practical path forward.
                        </p>
                        {/* Tappable on a phone, selectable everywhere else. */}
                        <p className="contact-line">
                            <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                        </p>
                        <p className="contact-line">
                            <i className="fa-solid fa-phone" aria-hidden="true"></i>
                            <a href={`tel:${CONTACT.phoneDial}`}>{CONTACT.phoneDisplay}</a>
                        </p>
                        <div className="contact-actions">
                            <a className="primary-btn" href={`mailto:${CONTACT.email}`}>
                                Email the firm
                            </a>
                            <a className="secondary-btn" href={`tel:${CONTACT.phoneDial}`}>
                                Call now
                            </a>
                        </div>
                    </div>
                    <div className="contact-right">
                        <div className="location-card">
                            <p className="section-kicker">Location</p>
                            <h2 className="sub-title">Timau Plaza</h2>
                            <address>
                                6th Floor, Wing B
                                <br />
                                P.O Box 1015 - 00200
                                <br />
                                Nairobi, Kenya
                            </address>
                            <a
                                className="panel-link"
                                href={officeMapUrl}
                                aria-label="Open Mamati and Company Advocates office location in Google Maps (opens in a new tab)"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Open in Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
