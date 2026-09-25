export default function ServicesSection({ services }) {
    return (
        <section id="services" className="reveal" aria-labelledby="services-title">
            <div className="container">
                <p className="section-kicker">Practice areas</p>
                <h2 className="sub-title" id="services-title">Services</h2>
                <p className="section-intro">
                    A focused set of services designed to help clients move confidently from risk to resolution.
                </p>
                <ul className="services-list">
                    {services.map((service, index) => (
                        <li key={service.title} className="service-card">
                            <span className="service-index" aria-hidden="true">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <i className={service.icon} aria-hidden="true"></i>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
