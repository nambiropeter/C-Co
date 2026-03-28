export default function ServicesSection({ services }) {
    return (
        <div id="services" className="reveal">
            <div className="container">
                <h1 className="sub-title">Services</h1>
                <div className="services-list">
                    {services.map((service) => (
                        <div key={service.title}>
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
