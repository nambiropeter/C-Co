import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import HeaderSection from './components/HeaderSection';
import SeoSchema from './components/SeoSchema';
import ServicesSection from './components/ServicesSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import {
    LEGAL_SERVICE_SCHEMA,
    NAV_ITEMS,
    OFFICE_MAP_URL,
    ORGANIZATION_SCHEMA,
    PERSON_SCHEMA,
    SERVICES,
    STORIES,
    WEBSITE_SCHEMA,
    TAB_CONTENT
} from './data/siteContent';
import { useRevealObserver } from './hooks/useRevealObserver';

function App() {
    const [activeTab, setActiveTab] = useState('personalized');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useRevealObserver();

    return (
        <>
            <HeaderSection isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} navItems={NAV_ITEMS} />
            <AboutSection activeTab={activeTab} setActiveTab={setActiveTab} tabContent={TAB_CONTENT} />
            <ServicesSection services={SERVICES} />
            <SuccessStoriesSection stories={STORIES} />
            <ContactSection officeMapUrl={OFFICE_MAP_URL} />
            <Footer />
            <SeoSchema schema={[LEGAL_SERVICE_SCHEMA, ORGANIZATION_SCHEMA, PERSON_SCHEMA, WEBSITE_SCHEMA]} />
            <Analytics />
            <SpeedInsights />
        </>
    );
}

export default App;
