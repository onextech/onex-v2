import merge from 'lodash/merge'
import getCategoryFromCrudItem from '../utils/getCategoryFromCrudItem'
import {
  MOCK_GROUP_SERVICE_CATEGORYS,
  MOCK_TECH_SERVICE_CATEGORYS,
} from './ServiceCategory.mocks'

export const MOCK_SERVICE_PAGE = {
  // Seo
  seo: {
    title: '{title} Service',
    description: 'This page is all about the technology that we use',
  },
  // Hero
  avatar_src: '/images/about_shape_circle_radial.svg',
  avatar_alt: '{title}',
  hero_src: '/images/about_working_in_office.png',
  hero_alt: 'working in office',
  overline: 'Service',
  title: 'React',
  subtitle:
    'Work with product experts with the know-how tested in 7+ industries.',
  // Sections
  sections: {
    summary: {
      title: 'Innovation that drives real impact.',
      items: [
        {
          title:
            'In the past decade, digital transformation and innovation completely changed the way the world does business. In the decade ahead, technological, social and environmental forces will make strategic innovation essential for the survival of any business operating at scale. For many organizations, however, innovation can feel like fumbling in the dark, leading to new products and industrys that don’t contribute to the health and longevity of the business. In an increasingly complex world, strategy and creativity are the keys to successful, impactful innovation.',
        },
        {
          title:
            'Strategic innovation requires organizations to have a deep understanding of the fundamental value propositions, offerings and objectives of their core business. From that foundation, they must identify the most valuable and viable paths for innovation based on their market position and internal capabilities. By aligning internal systems and stakeholders behind an innovation strategy crafted to achieve specific business impacts, organizations can empower growth and innovation from the inside out.',
        },
      ],
    },
    benefits: {
      overline: 'What we do',
      title: 'Our Suite of {title} Services',
      subtitle:
        "Whether designing and developing a new application for an ambitious idea, or upgrading an existing tool, we're the right team to help.",
      items: [
        {
          avatar_src: '/images/about_shape_circle_radial.svg',
          overline: '01',
          title: 'Design a new product',
          subtitle:
            'We create human-centred designs focused on driving conversions and achieving business goals.',
        },
        {
          avatar_src: '/images/about_shape_squares.svg',
          overline: '02',
          title: 'Launch a new company',
          subtitle:
            'We create human-centred designs focused on driving conversions and achieving business goals.',
        },
        {
          avatar_src: '/images/about_shape_square_with_circle.svg',
          overline: '03',
          title: 'Scale up development',
          subtitle:
            'We create human-centred designs focused on driving conversions and achieving business goals.',
        },
        {
          avatar_src: '/images/about_shape_circles.svg',
          overline: '04',
          title: 'Improve a current system',
          subtitle:
            'We create human-centred designs focused on driving conversions and achieving business goals.',
        },
      ],
    },
    callout: {
      hero_src: '/images/about_nodes_above_city.png',
      hero_alt: 'about_nodes_above_city',
      overline: '',
      title: 'We Design & Develop Custom Software for Businesses',
      subtitle:
        'Our team of consultants, designers and engineers live and breathe digital services to deliver best-in-class technological solutions.',
    },
    features: {
      overline: 'What we do',
      title: 'Our {title} Capabilities',
      subtitle:
        'To deliver products of the highest quality, we follow the best practices that include code review, pair programming, test-driven development, continuous integration, and automated testing.',
      items: [
        {
          fa_icon: 'fa-watch',
          title: 'Scale up development',
          subtitle:
            'Our team works directly with you to boost your development speed and scale.',
        },
        {
          fa_icon: 'fa-hand-holding-seedling',
          title: 'Improve a current system',
          subtitle:
            "Identify areas for automation and improve efficiency so you can spend more time on what's important.",
        },
        {
          fa_icon: 'fa-mug-hot',
          title: 'Food & Drinks',
          subtitle:
            'We create human-centred designs focused on driving conversions and achieving business goals.',
        },
        {
          fa_icon: 'fa-puzzle-piece',
          title: 'Live It Up',
          subtitle:
            'Launch your MVP at start-up speed with an expert team of designers and developers.',
        },
        {
          fa_icon: 'fa-guitar',
          title: 'Rewards',
          subtitle:
            'Our team works directly with you to boost your development speed and scale.',
        },
        {
          fa_icon: 'fa-table-tennis',
          title: 'Convenience',
          subtitle:
            "Identify areas for automation and improve efficiency so you can spend more time on what's important.",
        },
      ],
    },
    howItWorks: { overline: '', title: '', subtitle: '', items: [] },
    checklist: {
      overline: 'What we do',
      title: `Why {appTitle} for {title}`,
      subtitle:
        'To deliver products of the highest quality, we follow the best practices that include code review, pair programming, test-driven development, continuous integration, and automated testing.',
      items: [
        {
          title: 'Full suite of services',
        },
        {
          title: 'Unrivaled {title} knowledge',
        },
        {
          title: 'Quality and best practices baked in',
        },
        {
          title: 'Deep {title} community involvement',
        },
        {
          title: 'Support for {title} ongoing development',
        },
        {
          title: 'Hired by Fortune 500 brands',
        },
      ],
    },
    faqs: {
      overline: '',
      title: 'FAQs',
      subtitle:
        'Learn how we deliver effective, value-driven technological innovations for leading enterprises.',
      items: [
        {
          key: 'how-it-works-1',
          title: 'What are the advantages of developing web apps with {title}?',
          content:
            '{title} components allows to really embrace agile approach to ever-changing business requirements. It takes care of the inner workings of updating the browser and allows us to focus on developing the application’s features.',
        },
        {
          key: 'how-it-works-2',
          title: 'How can {title} development benefit my existing system?',
          content:
            "{title}'s sophisticated algorithms will help to boost system performance and improve user experience.",
        },
        {
          key: 'how-it-works-3',
          title: 'What is the future of {title}?',
          content:
            '{title} is the fastest growing library used to create user interface in modern single-page applications. It is the driving force behind products of the most successful companies like Airbnb, Instagram and Netflix.',
        },
      ],
    },
    cta: {
      hero_src: '/images/about_nodes_above_city.png',
      hero_alt: 'about_nodes_above_city',
      overline: 'Built on Strategy',
      title: 'Partnering with {appTitle}',
      subtitle:
        '{appTitle} partners with clients from startups to global MNCs to create solutions to the toughest software problems. Focusing on JavaScript as our core technology, we utilize {title}, React Native, NodeJS, GraphQL, and the extended JavaScript ecosystem to build web apps, mobile apps, cloud services, open source software, and more. Our approach is tailored to each product, so we will always work with your team to select the technologies best suited to your needs. We excel in web, mobile and cloud platform development and can apply our expertise to your product, no matter where it is in the product lifecycle.',
    },
  },
}

export const MOCK_TECH_SERVICES = [
  {
    title: 'Enterprise Applications',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    slug: 'enterprise-applications',
    category_id: 1,
  },
  {
    title: 'Digital Product Design',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    slug: 'digital-product-design',
    category_id: 1,
  },
  {
    title: 'Application Modernization',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    slug: 'application-modernization',
    category_id: 1,
  },
  {
    title: 'Research & Development',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    slug: 'research-development',
    category_id: 2,
  },
  {
    title: 'API Development',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    slug: 'api-development',
    category_id: 2,
  },
  {
    title: 'Microfrontend Development',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    slug: 'microfrontend-development',
    category_id: 2,
  },
  {
    title: 'Managed DevOps',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    slug: 'managed-devops',
    category_id: 3,
  },
  {
    title: 'Infrastructure Managed Services',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    slug: 'infrastructure-managed-services',
    category_id: 3,
  },
  {
    title: 'Cloud Strategy & Design',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    slug: 'cloud-strategy-design',
    category_id: 3,
  },
  {
    title: 'Digital Strategy',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    slug: 'digital-strategy',
    category_id: 4,
  },
  {
    title: 'Transformation & Delivery',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    slug: 'transformation-delivery',
    category_id: 4,
  },
  {
    title: 'Architecture Design',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    slug: 'architecture-design',
    category_id: 4,
  },
  {
    title: 'Staff Augmentation',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    slug: 'staff-augmentation',
    category_id: 5,
  },
  {
    title: 'Agile Development Teams',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    slug: 'agile-development-teams',
    category_id: 5,
  },
  {
    title: 'Technical Leadership',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    slug: 'managed-product-teams',
    category_id: 5,
  },
  {
    title: 'Performance Optimization',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    slug: 'performance-optimization',
    category_id: 6,
  },
  {
    title: 'Production Readiness',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    slug: 'production-readiness',
    category_id: 6,
  },
  {
    title: 'Testing Automation',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    slug: 'testing-automation',
    category_id: 6,
  },
].map((item, i) => {
  return merge({}, MOCK_SERVICE_PAGE, {
    id: i + 1,
    hero_src: '/images/about_working_in_office.png',
    hero_alt: 'working in office',
    // Category
    category: getCategoryFromCrudItem(item, MOCK_TECH_SERVICE_CATEGORYS),
    ...item,
  })
})

export const MOCK_GROUP_SERVICES = [
  {
    title: 'Chirashi Don Making',
    slug: 'chirashi-don-making',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 1,
    exclusive_locales: ['jp'],
  },
  {
    title: 'Growth Strategy',
    slug: 'growth-strategy',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 1,
  },
  {
    title: 'Innovation Strategy',
    slug: 'innovation-strategy',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 1,
  },
  {
    title: 'Commerce in a Digital World',
    slug: 'commerce-in-a-digital-world',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 1,
  },
  {
    title: 'Startup Growth',
    slug: 'startup-growth',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 2,
  },
  {
    title: 'Corporate Venture Building',
    slug: 'corporate-venture-building',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 2,
  },
  {
    title: 'Bring Purpose to Life',
    slug: 'bring-purpose-to-life',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 3,
  },
  {
    title: 'Sustainability',
    slug: 'sustainability',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 3,
  },
  {
    title: 'Brand Strategy, Design & Performance',
    slug: 'brand-strategy-design-performance',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 4,
  },
  {
    title: 'Content & Communication Strategy',
    slug: 'content-communication-strategy',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 4,
  },
  {
    title: 'Customer Research & Insights',
    slug: 'customer-research-insights',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 4,
  },
  {
    title: 'CX Strategy',
    slug: 'cx-strategy',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 5,
  },
  {
    title: 'Product Design & Build',
    slug: 'product-design-build',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 5,
  },
  {
    title: 'Service Design',
    slug: 'service-design',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 5,
  },
  {
    title: 'Marketing Strategy & Performance',
    slug: 'marketing-strategy-performance',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 6,
  },
  {
    title: 'Content & Asset Management',
    slug: 'content-asset-management',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 6,
  },
  {
    title: 'Membership & Loyalty',
    slug: 'membership-loyalty',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 6,
  },
].map((item, i) => {
  return merge({}, MOCK_SERVICE_PAGE, {
    id: i + 1,
    hero_src: '/images/about_working_in_office.png',
    hero_alt: 'working in office',
    // Category
    category: getCategoryFromCrudItem(item, MOCK_GROUP_SERVICE_CATEGORYS),
    ...item,
  })
})

export const MOCK_SERVICES = {
  GROUP: MOCK_GROUP_SERVICES,
  TECH: MOCK_TECH_SERVICES,
}
