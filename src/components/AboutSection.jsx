export default function AboutSection({ activeTab, setActiveTab, tabContent }) {
    return (
        <div id="about" className="reveal">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img
                            src="/images/law4.png"
                            alt="Legal representation and consulting"
                            loading="lazy"
                        />
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">About Mamati And Company</h1>
                        <p>
                            Mamati and Company Advocates is a growing law firm based in Nairobi, Kenya.
                            We are dedicated to providing exceptional legal services tailored to the unique
                            needs of individuals, both natural and legal persons across Africa. We pride
                            ourselves on delivering comprehensive legal solutions with a focus on efficiency,
                            precision, and personalized client care. We understand that every business is
                            different, and we strive to offer strategic advice that helps our clients
                            navigate the complexities of the legal landscape with confidence.
                        </p>
                        <div className="tab-titles">
                            <button
                                className={`tab-links ${activeTab === 'personalized' ? 'active-link' : ''}`}
                                type="button"
                                onClick={() => setActiveTab('personalized')}
                            >
                                Personalized Legal Strategies
                            </button>
                            <button
                                className={`tab-links ${activeTab === 'client' ? 'active-link' : ''}`}
                                type="button"
                                onClick={() => setActiveTab('client')}
                            >
                                Client-Centric Approach
                            </button>
                            <button
                                className={`tab-links ${activeTab === 'architects' ? 'active-link' : ''}`}
                                type="button"
                                onClick={() => setActiveTab('architects')}
                            >
                                Architects of Tailored Solutions
                            </button>
                        </div>

                        <div className={`tab-contents ${activeTab === 'personalized' ? 'active-tab' : ''}`}>
                            <p>
                                <span>At Mamati and Company Advocates,</span>{' '}
                                {tabContent.personalized}
                            </p>
                        </div>
                        <div className={`tab-contents ${activeTab === 'client' ? 'active-tab' : ''}`}>
                            <p>
                                <span>We don't just provide legal services, </span>
                                {tabContent.client}
                            </p>
                        </div>
                        <div className={`tab-contents ${activeTab === 'architects' ? 'active-tab' : ''}`}>
                            <p>
                                <span>Our strength </span>
                                {tabContent.architects}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
