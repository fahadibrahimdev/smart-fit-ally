import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'The Home of Fitness',
    subHeading: 'Find your tailored personal trainer with Smart Fit Ally',
    text: 'Introducing Smart Fit Ally. The app that allows you to connect to a personal trainer that is tailored around your needs and goals. Our smart booking system allows you to team with a personal trainer that best fits your locality, affordability and availability.',
    subText: 'Start your fitness journey - find a personal trainer near you',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'Your future trainer is at Smart Fit Ally',
    subHeading: 'GET STARTED TODAY!',
    features: [
        {
            title: 'Connect',
            description: 'The app will find a suitable trainer according to the availability of both parties, the needs of the trainee and the expertise of the personal trainer.',
            icon: 'gym-trainer'
        },
        {
            title: 'Give Feedback',
            description: 'Rate your experience after hiring a fitness trainer. ',
            icon: 'feedback'
        },
        {
            title: 'Secure Payment',
            description: 'Agree on a rate and pay/receive fees directly via the app. ',
            icon: 'secure-payment'
        },
        {
            title: 'Make your Profile ',
            description: 'Outline your fitness goals, your preferred fitness environment and time slot.',
            icon: 'make-profile'
        },
    ]
}

export const brandSelectionContent = {
    heading: 'Why Choose Fight Roots',
    descriptions: [
        'Smart Fit Ally is no ordinary fitness app - it\'s the future of personal training. It combines all avenues of fitness into one. Here, you can book, track progress and train. We don\'t pride ourselves in helping you find a personal trainer; we pride ourselves in helping you find your perfect personal trainer. '
    ],
    heading02: 'How do personal trainers benefit from Smart Fit Ally?',
    description02: [
        'At Smart Fit Ally the perks of being a PT are plentiful. We understand the comprehensive and detailed nature of personal trainers, therefore we have incorporated many features that allow you to grow and maintain your business. Here, you can set, view and manage your finances as all payments are made through the app. Better yet, you keep 100% of all payments made by your clients - in addition, you are not required to pay any monthly costs to stay on the app. We can confidently promise, you won\'t find a better app that allows you to.'
    ],
    list: [
        'Expose your business to potential clients',
        'Manage Finances (set goals, view earnings)',
        'Sell customised workout plans to clients',
        'Receive 100% payments through the app',
        'Smart calendar that shows availability',
        'Accept/Decline client requests',
        'All the above and more for absolutely free'
    ],
    listSummary: 'At Smart Fit Ally, we are for and by the trainers. Start your journey with us today!',
    image: '/images/trainer.webp',
    alt: 'Training'
}

export const benefitsContent = {
    heading: 'It’s not just the extra rep that matters, it\'s that extra feature too.',
    text: 'Smart Fit Ally goes the extra mile to make sure users have an easier time being consistent. We believe that with the right match clients and trainers are both motivated and result oriented.',
    benefits: [
        {
            title: 'Certified Trainers',
            description: 'Smart Fit Ally verifies and lists trainers with qualifications that are visible on their profiles.',
            icon: 'coach'
        },
        {
            title: 'Location Oriented ',
            description: 'Geolocation properties allow finding trainers and clients near your location. ',
            icon: 'exact-location'
        },
        {
            title: 'All in One',
            description: 'Smart Fit Ally is multi-faceted and serves as your one stop shop application for all your fitness goals. ',
            icon: 'dumbell-lock'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Can this app be used on more than one platform?',
            answer: 'The answer will be here......',

        },
        {
            question: 'Is this app compatible with Android os IOS?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'Who is this app for?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'No More Small Fixes, It is Time for Permanent Change!',
    text: 'Download the app now!'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-up',
    whyUsBtn: `Why ${siteName}?`
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
