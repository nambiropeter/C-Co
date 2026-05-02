export const NAV_ITEMS = [
    { href: '#header', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#success', label: 'Stories' },
    { href: '#contact', label: 'Contact' }
];

export const TAB_CONTENT = {
    personalized:
        'We start by understanding the facts, the risks, and the outcome you actually need. Every strategy is built to be practical, specific, and aligned with the client\'s commercial reality.',
    client:
        'Clients work with us because communication is clear, advice is candid, and the process stays focused on progress. The goal is not just to advise, but to move the matter forward with confidence.',
    architects:
        'We combine responsiveness with disciplined execution, so the legal work adapts as the matter evolves. That makes it easier to stay ahead of problems instead of reacting after the fact.'
};

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
        image: '/images/man6.png',
        alt: 'Client testimonial from a legal matter handled by Mamati and Company Advocates',
        title: 'Client, 2024',
        copy: '"Professional, responsive, and careful at every step of the matter."',
        icon: 'fa-solid fa-user'
    },
    {
        image: '/images/company.png',
        alt: 'Corporate client testimonial for Mamati and Company Advocates',
        title: 'Corporate Client',
        copy: '"The firm communicates clearly, keeps matters moving, and always feels prepared."',
        extra: 'Company based in Kenya',
        icon: 'fa-solid fa-building'
    },
    {
        image: '/images/man6.png',
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
