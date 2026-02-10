
import placeholderPrj from '../assets/images/placeholderprj.webp';

export const caseStudies = [
    {
        id: '01',
        slug: 'real-estate-platform',
        title: 'Real Estate Platform',
        categories: ['Web App', 'Real Estate', 'UI/UX'],
        tags: 'Web Development • UI/UX Design',
        client: 'HomeFindr Inc.',
        year: '2024',
        duration: '6 months',
        image: placeholderPrj,
        description: 'A comprehensive platform revolutionizing how people buy, sell, and rent properties. We built a scalable solution with advanced search capabilities, virtual tours, and seamless agent communication.',
        challenge: 'The real estate market was fragmented with disjointed tools that created poor user experiences for both buyers and agents. HomeFindr faced a critical issue: their legacy system relied on spreadsheets and manual data entry, leading to outdated listings and frustrated users. They needed a unified, high-performance platform that could handle thousands of concurrent users while providing an intuitive experience for first-time buyers and seasoned agents alike.',
        solution: 'We engineered a robust, cloud-native architecture using React and Node.js to deliver a seamless browsing experience. KEY features include an interactive map-based search powered by Google Maps API, real-time property notifications via WebSockets, and a comprehensive CRM dashboard for agents to manage leads. We also implemented a virtual tour feature that increased engagement by 40%, allowing users to explore properties remotely with zero latency.',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Google Maps API'],
        testimonial: {
            quote: "This platform has completely transformed how our agents interact with clients. The seamless experience is exactly what we needed.",
            author: "Jane Doe — CEO, HomeFindr Inc."
        }
    },
    {
        id: '02',
        slug: 'healthcare-app',
        title: 'Healthcare App',
        categories: ['Mobile App', 'Healthcare', 'Secure'],
        tags: 'Mobile App • User Interface',
        client: 'MediCare Plus',
        year: '2023',
        duration: '8 months',
        image: placeholderPrj,
        description: 'A patient-centric mobile application streamlining appointment booking, telemedicine consultations, and medical record management.',
        challenge: 'Traditional healthcare systems suffer from inefficient workflows, long wait times, and cumbersome paper-based processes. MediCare Plus needed to securely digitize the entire patient journey—from booking appointments to receiving prescriptions—while strictly adhering to HIPAA regulations and ensuring that sensitive patient data remained protected against increasing cyber threats.',
        solution: 'We developed a secure, cross-platform mobile application using React Native, focusing on accessibility and ease of use. The app features end-to-end encrypted video consultations via WebRTC, a secure messaging system for doctor-patient communication, and real-time integration with existing hospital management systems (HMS). This reduced administrative overhead by 60% and significantly improved patient satisfaction scores.',
        technologies: ['React Native', 'Firebase', 'WebRTC', 'HealthKit'],
        testimonial: {
            quote: "Our patients love the new app. It's secure, fast, and incredibly easy to use for booking appointments.",
            author: "Dr. Smith — CTO, MediCare Plus"
        }
    },
    {
        id: '03',
        slug: 'travel-booking-app',
        title: 'Travel Booking App',
        categories: ['Mobile App', 'Travel', 'AI'],
        tags: 'Mobile App • UI/UX Design',
        client: 'Wanderlust Co.',
        year: '2024',
        duration: '5 months',
        image: placeholderPrj,
        description: 'An all-in-one travel companion for booking flights, hotels, and experiences with personalized AI-driven recommendations.',
        challenge: 'Travelers often struggle with juggling multiple apps for flights, accommodation, and itineraries, leading to a fragmented and stressful planning experience. Wanderlust Co. wanted to eliminate this friction by creating a "super app" that not only consolidated booking services but also provided intelligent, personalized recommendations based on user preferences and past behavior, all while working reliably in areas with poor internet connectivity.',
        solution: 'We built a vibrant, Flutter-based mobile application that serves as a complete travel concierge. The core innovation is an AI recommendation engine built with Python and TensorFlow that suggests personalized itineraries. We also implemented a robust offline-first architecture, allowing users to access their tickets, maps, and plans without data roaming. The result was a 30% increase in user retention and a seamless travel experience.',
        technologies: ['Flutter', 'Python', 'TensorFlow', 'Stripe API'],
        testimonial: {
            quote: "The AI recommendations are spot on. This app has simplified travel planning for thousands of our users.",
            author: "John Travel — Product Owner, Wanderlust Co."
        }
    },
    {
        id: '04',
        slug: 'fintech-dashboard',
        title: 'Hands off, Gabriela',
        categories: ['Web App', 'Finance', 'Data'],
        tags: 'Web Development • Branding',
        client: 'FinEdge Analytics',
        year: '2023',
        duration: '4 months',
        image: placeholderPrj,
        description: 'A powerful financial analytics dashboard providing real-time insights for investment firms and individual traders.',
        challenge: 'Financial traders require split-second data accuracy, but the client’s existing tools were slow and cluttered, leading to missed opportunities. The main challenge was to visualize massive datasets clearly and update them in real-time without overwhelming the browser or the user, ensuring that critical trends could be spotted instantly.',
        solution: 'We engineered a high-performance dashboard using Vue.js and D3.js for advanced data visualization. By implementing a WebSocket connection to a Go-based backend, we achieved sub-millisecond data updates. The interface was designed with a "dark mode first" approach to reduce eye strain during long trading sessions, resulting in a tool that is both powerful and comfortable to use for extended periods.',
        technologies: ['Vue.js', 'D3.js', 'Go', 'WebSocket'],
        testimonial: {
            quote: "The speed and clarity of this dashboard give our traders a significant edge in the market.",
            author: "Sarah Lee — Head of Trading, FinEdge"
        }
    },
    {
        id: '05',
        slug: 'ecommerce-engine',
        title: 'E-commerce Engine',
        categories: ['Web', 'E-commerce', 'Headless'],
        tags: 'Web Design • Marketing',
        client: 'RetailGiant',
        year: '2024',
        duration: '7 months',
        image: placeholderPrj,
        description: 'A robust and scalable headless e-commerce solution designed for high-volume retail brands with custom marketing integrations.',
        challenge: 'RetailGiant was outgrowing their monolithic e-commerce platform, which made it impossible to implement custom marketing campaigns or scale during peak shopping seasons like Black Friday. They needed a flexible, headless architecture that would allow their marketing team to launch unique landing pages instantly without developer intervention.',
        solution: 'We migrated them to a headless architecture using Shopify Plus as the backend and Next.js for the frontend. This decoupled approach allowed us to build a lightning-fast, fully custom storefront. We integrated a CMS for the marketing team and utilized GraphQL to fetch only the necessary data, improving page load speeds by over 50% and handling record-breaking traffic spikes with ease.',
        technologies: ['Next.js', 'Shopify Plus', 'GraphQL', 'Tailwind CSS'],
        testimonial: {
            quote: "Our conversion rates doubled after launching the new platform. The flexibility is unmatched.",
            author: "Mike Ross — CMO, RetailGiant"
        }
    },
    {
        id: '06',
        slug: 'social-network',
        title: 'Social Network',
        categories: ['Mobile', 'Social', 'Privacy'],
        tags: 'Mobile App • Social Media',
        client: 'ConnectPrivacy',
        year: '2023',
        duration: '9 months',
        image: placeholderPrj,
        description: 'A niche social networking platform focused on privacy, genuine community connections, and user data ownership.',
        challenge: 'In an era of data breaches and algorithmic manipulation, users were losing trust in major social platforms. ConnectPrivacy wanted to build a sanctuary—a social network that guaranteed user privacy, gave users full ownership of their data, and encouraged organic, non-algorithmic connection without the noise of targeted ads.',
        solution: 'We architected a privacy-first mobile application using React Native and a decentralized backend approach. We implemented end-to-end encryption for all messages and posts, ensuring that not even the platform administrators could read user data. The feed is strictly chronological, handing control back to the user. This ethical approach attracted over 100,000 active users in the first three months.',
        technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
        testimonial: {
            quote: "Finally, a social network that respects user privacy. The community has grown organically and rapidly.",
            author: "Alex Privacy — Founder, ConnectPrivacy"
        }
    },
];
