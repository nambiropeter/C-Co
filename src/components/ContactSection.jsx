export default function ContactSection({ officeMapUrl }) {
    return (
        <div id="contact" className="reveal">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact</h1>
                        <p>
                            <i className="fa-solid fa-envelope"></i>
                            {'  '}chebosic@mamatiadvocates.net
                        </p>
                        <p>
                            <i className="fa-solid fa-phone"></i>
                            {'  '}+254 713 590 466
                        </p>
                    </div>
                    <div className="contact-right">
                        <h1 className="sub-title">Location</h1>
                        <p>
                            <a
                                href={officeMapUrl}
                                aria-label="Open Mamati and Company Advocates office location in Google Maps"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-solid fa-location-dot"></i>
                            </a>
                            <br />
                            Timau Plaza
                            <br />
                            6th Floor, wing B
                            <br />
                            P.O Box 1015 - 00200
                            <br />
                            Nairobi
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
