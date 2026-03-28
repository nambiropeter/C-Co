export const NAV_ITEMS = [
    { href: '#header', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#success', label: 'Stories' },
    { href: '#contact', label: 'Contact' }
];

export const TAB_CONTENT = {
    personalized:
        "At Mamati and Company Advocates, we prioritize understanding each client's unique needs and objectives. Our legal strategies are carefully crafted to perfectly align with your specific business goals and long-term vision.",
    client:
        "We don't just provide legal services, we're committed to building genuine partnerships with our clients. We take the time to deeply understand your business, ensuring every piece of advice serves your best interests.",
    architects:
        "Our strength lies in our ability to adapt and respond to your evolving needs. We're not just reactive legal counsel, but proactive problem-solvers who work alongside you to architect customized solutions that drive your continued growth and development."
};

export const SERVICES = [
    {
        icon: 'fa-solid fa-handshake',
        title: 'Litigation and Dispute Resolution',
        description:
            'We offer a wide array of Dispute Resolution Solutions, ranging from Mediation and Negotiation to the last option of Litigation, with an emphasis in assuring our clients the best possible outcome.'
    },
    {
        icon: 'fa-regular fa-building',
        title: 'Corporate And Transactional',
        description:
            "We provide tailored support to startups, offering comprehensive registration services for young entrepreneurs establishing businesses in Kenya. Our services include guidance on selecting the appropriate business structure, drafting and advising on relevant contracts and agreements, and delivering secretarial services to help clients navigate Nairobi's and Kenya's dynamic business environment."
    },
    {
        icon: 'fa-solid fa-person-military-pointing',
        title: 'Intellectual Property',
        description:
            'We offer our clients the most effective solutions to safeguard their unique creations, ideas, and designs. By facilitating IP registration, handling infringement claims, and supporting commercialization, we ensure that our clients can rest easy, knowing their work is thoroughly protected.'
    },
    {
        icon: 'fa-solid fa-people-roof',
        title: 'Family Law',
        description:
            "We provide comprehensive family law services, including guidance on property acquisition, asset management, and estate planning. Our goal is to support families in building and preserving their wealth, while also offering compassionate assistance through life's transitions such as custody arrangements and divorce."
    }
];

export const STORIES = [
    {
        image: '/images/man6.png',
        alt: 'Client testimonial',
        title: 'Client, 2024',
        copy: '"A professional legal practitioner who embeds risk mitigation in each step."',
        icon: 'fa-solid fa-user'
    },
    {
        image: '/images/company.png',
        alt: 'Corporate client testimonial',
        title: 'Client, 2024',
        copy: '"The level of professionalism from Mamati and Company is a breath of fresh air. We have enjoyed our work with him and look forward to working with him throughout 2024 and beyond."',
        extra: 'Company based in Kenya',
        icon: 'fa-solid fa-building'
    },
    {
        image: '/images/man6.png',
        alt: 'Client testimonial',
        title: 'Client',
        copy: '"Charles took me through my matter slowly and meticulously with care and support. His attention to detail, almost constant availability to pick up the phone and walk me through was something I would want everyone to experience from a lawyer in Nairobi and Kenya."',
        icon: 'fa-solid fa-user'
    }
];

export const LEGAL_SERVICE_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Mamati and Company Advocates',
    description:
        'Leading law firm in Nairobi, Kenya specializing in litigation, corporate law, intellectual property, and family law',
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

export const OFFICE_MAP_URL =
    'https://www.google.com/maps/place/Timau+Plaza,+Nairobi/@-1.2923504,36.7872193,17z/data=!3m1!4b1!4m6!3m5!1s0x182f10a3834eafa1:0x1821034ff3107263!8m2!3d-1.2923504!4d36.7897942!16s%2Fg%2F12hl93d1z?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D';
