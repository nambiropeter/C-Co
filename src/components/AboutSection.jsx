import { useRef } from 'react';
import ResponsiveImage from './ResponsiveImage';
import { ABOUT_PORTRAIT, ABOUT_PORTRAIT_SIZES } from '../data/siteContent';

export default function AboutSection({ activeTab, setActiveTab, tabs }) {
    const tabRefs = useRef([]);

    // Standard tablist keyboard behaviour: arrows move between tabs, Home/End
    // jump to the ends. Without this the tabs are unreachable for anyone using
    // a keyboard, a switch device, or a screen reader.
    const onTabKeyDown = (event, index) => {
        const lastIndex = tabs.length - 1;
        let nextIndex = null;

        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
            nextIndex = index === lastIndex ? 0 : index + 1;
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
            nextIndex = index === 0 ? lastIndex : index - 1;
        } else if (event.key === 'Home') {
            nextIndex = 0;
        } else if (event.key === 'End') {
            nextIndex = lastIndex;
        }

        if (nextIndex === null) return;

        event.preventDefault();
        setActiveTab(tabs[nextIndex].id);
        tabRefs.current[nextIndex]?.focus();
    };

    return (
        <section id="about" className="reveal" aria-labelledby="about-title">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <ResponsiveImage
                            image={ABOUT_PORTRAIT}
                            sizes={ABOUT_PORTRAIT_SIZES}
                            alt="Chebosi Mamati, senior partner of Mamati and Company Advocates"
                        />
                    </div>
                    <div className="about-col-2">
                        <p className="section-kicker">About</p>
                        <h2 className="sub-title" id="about-title">About Chebosi Mamati</h2>
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

                        <div className="tab-titles" role="tablist" aria-label="How the firm works">
                            {tabs.map((tab, index) => {
                                const isActive = activeTab === tab.id;

                                return (
                                    <button
                                        key={tab.id}
                                        id={`tab-${tab.id}`}
                                        role="tab"
                                        type="button"
                                        className={`tab-links ${isActive ? 'active-link' : ''}`}
                                        aria-selected={isActive}
                                        aria-controls={`tabpanel-${tab.id}`}
                                        tabIndex={isActive ? 0 : -1}
                                        ref={(node) => {
                                            tabRefs.current[index] = node;
                                        }}
                                        onClick={() => setActiveTab(tab.id)}
                                        onKeyDown={(event) => onTabKeyDown(event, index)}
                                    >
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>

                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.id;

                            return (
                                <div
                                    key={tab.id}
                                    id={`tabpanel-${tab.id}`}
                                    role="tabpanel"
                                    aria-labelledby={`tab-${tab.id}`}
                                    tabIndex={0}
                                    hidden={!isActive}
                                    className={`tab-contents ${isActive ? 'active-tab' : ''}`}
                                >
                                    <p>
                                        <span>{tab.lead}</span> {tab.body}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
