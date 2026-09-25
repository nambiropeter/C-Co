export const NAV_ITEMS = [
    { href: '#header', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#success', label: 'Stories' },
    { href: '#contact', label: 'Contact' }
];

export const NAV_SECTION_IDS = NAV_ITEMS.map((item) => item.href.slice(1));

export const CONTACT = {
    email: 'chebosic@mamatiadvocates.net',
    phoneDisplay: '+254 713 590 466',
    phoneDial: '+254713590466'
};

// Pre-generated responsive derivatives live in /public/images/optimized.
// `sizes` tells the browser how wide the image renders so it can pick the
// smallest file that still looks sharp on that device.
function responsiveImage(stem, widths, aspect) {
    const largest = widths[widths.length - 1];

    return {
        src: `/images/optimized/${stem}-${largest}.jpg`,
        webpSrcSet: widths.map((w) => `/images/optimized/${stem}-${w}.webp ${w}w`).join(', '),
        jpegSrcSet: widths.map((w) => `/images/optimized/${stem}-${w}.jpg ${w}w`).join(', '),
        width: largest,
        height: Math.round(largest / aspect)
    };
}

const PORTRAIT_ASPECT = 1587 / 2245;

export const ABOUT_PORTRAIT = responsiveImage('mamati', [640, 850], 850 / 1280);

// Story cards sit in a 3-up grid (1180px container), 2-up under 1100px and 1-up under 768px.
export const STORY_SIZES =
    '(max-width: 768px) calc(100vw - 40px), (max-width: 1100px) calc((100vw - 62px) / 2), (max-width: 1220px) calc((100vw - 84px) / 3), 378px';

export const ABOUT_PORTRAIT_SIZES = '(max-width: 1100px) calc(100vw - 40px), 568px';

export const ABOUT_TABS = [
    {
        id: 'personalized',
        label: 'Personalized Legal Strategies',
        lead: 'Chebosi Mamati works to keep matters practical,',
        body: 'We start by understanding the facts, the risks, and the outcome you actually need. Every strategy is built to be practical, specific, and aligned with the client’s commercial reality.'
    },
    {
        id: 'client',
        label: 'Client-Centric Approach',
        lead: 'Clients work with Chebosi for clarity and follow-through,',
        body: 'Clients work with us because communication is clear, advice is candid, and the process stays focused on progress. The goal is not just to advise, but to move the matter forward with confidence.'
    },
    {
        id: 'architects',
        label: 'Architects of Tailored Solutions',
        lead: 'His strength',
        body: 'We combine responsiveness with disciplined execution, so the legal work adapts as the matter evolves. That makes it easier to stay ahead of problems instead of reacting after the fact.'
    }
];

export const SERVICES = [
    {
        icon: 'fa-solid fa-handshake',
        title: 'Litigation & Dispute Resolution',
        description:
            'From negotiation and mediation to full litigation, we help clients resolve disputes with a clear strategy and a steady hand.'
    },
    {
        icon: 'fa-regular fa-building',
        title: 'Corporate & Transactional',
        description:
            'We support founders and established businesses with registrations, contracts, governance, and day-to-day commercial legal work.'
    },
    {
        icon: 'fa-solid fa-person-military-pointing',
        title: 'Intellectual Property',
        description:
            'We help protect brands, creative assets, and inventions through registration, enforcement, and practical IP advice.'
    },
    {
        icon: 'fa-solid fa-people-roof',
        title: 'Family & Private Client',
        description:
            'We handle family and personal matters with discretion, care, and a strong focus on protecting what matters most.'
    },
    {
        icon: 'fa-solid fa-file-signature',
        title: 'Conveyancing',
        description:
            'We support property transactions with due diligence, drafting, completion, and practical guidance that keeps the process moving.'
    }
];

export const STORIES = [
    {
        id: 'client-2024',
        image: responsiveImage('man6', [480, 900], PORTRAIT_ASPECT),
        alt: 'Client testimonial from a legal matter handled by Mamati and Company Advocates',
        title: 'Client, 2024',
        copy: '"Professional, responsive, and careful at every step of the matter."',
        icon: 'fa-solid fa-user'
    },
    {
        id: 'corporate-client',
        image: responsiveImage('company', [480, 900], PORTRAIT_ASPECT),
        alt: 'Corporate client testimonial for Mamati and Company Advocates',
        title: 'Corporate Client',
        copy: '"The firm communicates clearly, keeps matters moving, and always feels prepared."',
        extra: 'Company based in Kenya',
        icon: 'fa-solid fa-building'
    },
    {
        id: 'client-follow-through',
        image: responsiveImage('man6', [480, 900], PORTRAIT_ASPECT),
        alt: 'Another client testimonial highlighting care and follow-through',
        title: 'Client',
        copy: '"Careful advice, strong follow-through, and a level of patience that made a difficult process manageable."',
        icon: 'fa-solid fa-user'
    }
];

export const LEGAL_SERVICE_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Mamati and Company Advocates',
    description:
        'Leading law firm in Nairobi, Kenya specializing in litigation, corporate law, intellectual property, family law, and conveyancing.',
    serviceType: [
        'Litigation and dispute resolution',
        'Corporate and transactional law',
        'Intellectual property law',
        'Family and private client law',
        'Conveyancing'
    ],
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Timau Plaza, 6th Floor, Wing B',
        addressLocality: 'Nairobi',
        postalCode: '00200',
        addressCountry: 'KE'
    },
    telephone: '+254713590466',
    email: 'chebosic@mamatiadvocates.net',
    url: 'https://mamatiadvocates.net',
    priceRange: '$$',
    areaServed: {
        '@type': 'Country',
        name: 'Kenya'
    }
};

export const WEBSITE_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Mamati and Company Advocates',
    url: 'https://mamatiadvocates.net/',
    description:
    'Nairobi law firm serving businesses and individuals across Kenya with litigation, corporate, intellectual property, family, and conveyancing legal services.'
};

export const ORGANIZATION_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mamati and Company Advocates',
    url: 'https://mamatiadvocates.net/',
    logo: 'https://mamatiadvocates.net/images/logo40.jpg',
    contactPoint: [
        {
            '@type': 'ContactPoint',
            telephone: '+254713590466',
            contactType: 'customer service',
            areaServed: 'KE',
            availableLanguage: ['en']
        }
    ]
};

export const PERSON_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Chebosi Mamati',
    jobTitle: 'Senior Partner',
    worksFor: {
        '@type': 'Organization',
        name: 'Mamati and Company Advocates',
        url: 'https://mamatiadvocates.net/'
    },
    url: 'https://mamatiadvocates.net/',
    description:
        'Chebosi Mamati is the senior partner at Mamati and Company Advocates, focusing on practical legal solutions for clients in Kenya.',
    knowsAbout: [
        'Litigation and dispute resolution',
        'Corporate and transactional law',
        'Intellectual property law',
        'Family law',
        'Conveyancing'
    ]
};

export const OFFICE_MAP_URL =
    'https://www.google.com/maps/place/Timau+Plaza,+Nairobi/@-1.2923504,36.7872193,17z/data=!3m1!4b1!4m6!3m5!1s0x182f10a3834eafa1:0x1821034ff3107263!8m2!3d-1.2923504!4d36.7897942!16s%2Fg%2F12hl93d1z?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D';
