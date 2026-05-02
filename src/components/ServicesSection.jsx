export default function ServicesSection({ services }) {
    return (
        <div id="services" className="reveal">
            <div className="container">
                <p className="section-kicker">Practice areas</p>
                <h2 className="sub-title">Services</h2>
                <p className="section-intro">
                    A focused set of services designed to help clients move confidently from risk to resolution.
                </p>
                <div className="services-list">
                    {services.map((service, index) => (
                        <div key={service.title} className="service-card">
                            <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
                            <i className={service.icon}></i>
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
