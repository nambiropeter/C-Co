export default function AboutSection({ activeTab, setActiveTab, tabContent }) {
    return (
        <div id="about" className="reveal">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img
                            src="/images/Charles%20Mamati.jpeg"
                            alt="Chebosi Mamati, senior partner of Mamati and Company Advocates"
                            loading="lazy"
                        />
                    </div>
                    <div className="about-col-2">
                        <p className="section-kicker">About</p>
                        <h2 className="sub-title">About Chebosi Mamati</h2>
                        <p>
                            Chebosi Mamati is the senior partner of Mamati and Company Advocates. He leads the
                            firm with a clear, practical approach to legal work, combining careful judgment,
                            client focus, and a steady commitment to getting matters moving.
                        </p>
                        <p>
                            His work supports individuals, entrepreneurs, and established businesses through
                            responsive advice, disciplined execution, and strategies built around real-world
                            outcomes.
                        </p>
                        <div className="about-points">
                            <span>Practical leadership</span>
                            <span>Clear communication</span>
                            <span>Results-oriented execution</span>
                        </div>
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
                                <span>Chebosi Mamati works to keep matters practical,</span>{' '}
                                {tabContent.personalized}
                            </p>
                        </div>
                        <div className={`tab-contents ${activeTab === 'client' ? 'active-tab' : ''}`}>
                            <p>
                                <span>Clients work with Chebosi for clarity and follow-through, </span>
                                {tabContent.client}
                            </p>
                        </div>
                        <div className={`tab-contents ${activeTab === 'architects' ? 'active-tab' : ''}`}>
                            <p>
                                <span>His strength </span>
                                {tabContent.architects}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
