import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import SeoSchema from './components/SeoSchema';
import SiteNav from './components/SiteNav';
import ServicesSection from './components/ServicesSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import {
    ABOUT_TABS,
    LEGAL_SERVICE_SCHEMA,
    NAV_ITEMS,
    NAV_SECTION_IDS,
    OFFICE_MAP_URL,
    ORGANIZATION_SCHEMA,
    PERSON_SCHEMA,
    SERVICES,
    STORIES,
    WEBSITE_SCHEMA
} from './data/siteContent';
import { useRevealObserver } from './hooks/useRevealObserver';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
    const [activeTab, setActiveTab] = useState(ABOUT_TABS[0].id);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const activeSection = useScrollSpy(NAV_SECTION_IDS);
    useRevealObserver();

    return (
        <>
            <a className="skip-link" href="#main-content">
                Skip to main content
            </a>
            <SiteNav
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                navItems={NAV_ITEMS}
                activeSection={activeSection}
            />
            <main id="main-content" tabIndex={-1}>
                <HeroSection />
                <AboutSection activeTab={activeTab} setActiveTab={setActiveTab} tabs={ABOUT_TABS} />
                <ServicesSection services={SERVICES} />
                <SuccessStoriesSection stories={STORIES} />
                <ContactSection officeMapUrl={OFFICE_MAP_URL} />
            </main>
            <Footer />
            <SeoSchema schema={[LEGAL_SERVICE_SCHEMA, ORGANIZATION_SCHEMA, PERSON_SCHEMA, WEBSITE_SCHEMA]} />
            <Analytics />
            <SpeedInsights />
        </>
    );
}

export default App;
