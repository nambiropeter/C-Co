export default function ContactSection({ officeMapUrl }) {
    return (
        <div id="contact" className="reveal">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <p className="section-kicker">Get in touch</p>
                        <h2 className="sub-title">Contact</h2>
                        <p className="contact-lead">
                            If you need clear next steps, reach out and the firm will respond with a practical path forward.
                        </p>
                        <p>
                            <i className="fa-solid fa-envelope"></i>
                            {'  '}chebosic@mamatiadvocates.net
                        </p>
                        <p>
                            <i className="fa-solid fa-phone"></i>
                            {'  '}+254 713 590 466
                        </p>
                        <div className="contact-actions">
                            <a className="primary-btn" href="mailto:chebosic@mamatiadvocates.net">
                                Email the firm
                            </a>
                            <a className="secondary-btn" href="tel:+254713590466">
                                Call now
                            </a>
                        </div>
                    </div>
                    <div className="contact-right">
                        <div className="location-card">
                            <p className="section-kicker">Location</p>
                            <h2 className="sub-title">Timau Plaza</h2>
                            <p>
                                6th Floor, Wing B
                                <br />
                                P.O Box 1015 - 00200
                                <br />
                                Nairobi, Kenya
                            </p>
                            <a
                                className="panel-link"
                                href={officeMapUrl}
                                aria-label="Open Mamati and Company Advocates office location in Google Maps"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Open in Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
