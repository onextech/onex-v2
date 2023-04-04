import sampleSize from 'lodash/sampleSize'
import { MOCK_GROUP_TAGS, MOCK_TECH_TAGS } from './Tag.mocks'

export const MOCK_TECH_RESOURCES = [
  {
    title: 'The 2023 OKR Guide',
    slug: 'the-2023-okr-guide',
    subtitle:
      'Learn how OKRs can turn your company strategy into a success. This guide breaks down the OKR framework and gives you access to templates, examples, and more to run OKRs at your business.',
  },
  {
    title:
      'Powering Up Your Frontend Development: Discover the Latest Trends and Techniques',
    slug: 'powering-up-your-frontend-development-discover-the-latest-trends-and-techniques',
    subtitle:
      'Learn how OKRs can turn your company strategy into a success. This guide breaks down the OKR framework and gives you access to templates, examples, and more to run OKRs at your business.',
  },
  {
    title:
      'Designing for Impact: How Frontend Development Can Boost Conversions and Revenue',
    slug: 'designing-for-impact: how-frontend-development-can-boost-conversions-and-revenue',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
  },
  {
    title:
      'Product Management in the Age of AI: Strategies for Incorporating Machine Learning into Your Roadmap',
    slug: 'product-management-in-the-age-of-ai-strategies-for-incorporating-machine-learning-into-your-roadmap',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
  },
  {
    title:
      'Accessibility in the Spotlight: Best Practices for Building Inclusive Products and Experiences',
    slug: 'accessibility-in-the-spotlight-best-practices-for-building-inclusive-products-and-experiences',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
  },
  {
    title:
      'The Future of Frontend Development: Trends, Challenges, and Opportunities for Enterprise Product Managers in 2023',
    slug: 'the-future-of-frontend-development-trends-challenges-and-opportunities-for-enterprise-product-managers-in-2023',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
  },
  {
    title:
      'Building Scalable Frontends: Best Practices for Managing Complex Enterprise Products',
    slug: 'building-scalable-frontends-best-practices-for-managing-complex-enterprise-products',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
  },
  {
    title:
      'Digital Transformation in Government: Modernising Public Services for the 21st Century',
    slug: 'digital-transformation-in-government-modernising-public-services-for-the-21-st-century',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
  },
  {
    title:
      'The New Era of Real Estate: How Technology Is Reshaping Buying, Selling, and Property Management',
    slug: 'the-new-era-of-real-estate-how-technology-is-reshaping-buying, selling, and-property-management',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
  },
  {
    title:
      'The Future of Finance: Embracing Automation and Analytics for Better Customer Experience',
    slug: 'the-future-of-finance-embracing-automation-and-analytics-for-better-customer-experience',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
  },
  {
    title:
      'Maritime Logistics in the Digital Age: Unlocking New Opportunities with Technology',
    slug: 'maritime-logistics-in-the-digital-age-unlocking-new-opportunities-with-technology',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
  },
  {
    title:
      'Government Data Analytics: Turning Insights into Actionable Solutions for the Public Good',
    slug: 'government-data-analytics-turning-insights-into-actionable-solutions-for-the-public-good',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
  },
  {
    title:
      'Innovation in Maritime: Emerging Trends and Technologies for Efficiency and Profitability',
    slug: 'innovation-in-maritime-emerging-trends-and-technologies-for-efficiency-and-profitability',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
  },
  {
    title:
      'Real Estate Investment in the Digital Age: How to Capitalize on the Latest Trends and Technologies',
    slug: 'real-estate-investment-in-the-digital-age-how-to-capitalize-on-the-latest-trends-and-technologies',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
  },
  {
    title:
      'The Future of Work in the Digital Age: Navigating the Challenges of a Remote Workforce',
    slug: 'the-future-of-work-in-the-digital-age-navigating-the-challenges-of-a-remote-workforce',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
  },
  {
    title:
      'The Impact of Fintech on Traditional Banking: Preparing the Workforce for Digital Disruption',
    slug: 'the-impact-of-fintech-on-traditional-banking-preparing-the-workforce-for-digital-disruption',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
  },
  {
    title:
      'The Role of DevOps in Enterprise Software Development: Best Practices and Emerging Trends',
    slug: 'the-role-of-dev-ops-in-enterprise-software-development-best-practices-and-emerging-trends',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
  },
  {
    title:
      'How to Build High-Performance Teams for Enterprise Product Management',
    slug: 'how-to-build-high-performance-teams-for-enterprise-product-management',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
  },
  {
    title:
      'Cybersecurity in the Digital Age: Protecting Your Enterprise Products and Customers from Emerging Threats',
    slug: 'cybersecurity-in-the-digital-age-protecting-your-enterprise-products-and-customers-from-emerging-threats',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
  },
].map((item, i) => ({
  id: i + 1,
  // Seo
  seo: {
    title: item.title,
    description: item.subtitle,
  },
  // Sections
  sections: {
    benefits: {
      overline: 'What we do',
      title: 'Our Suite of {title} Services',
      subtitle:
        "Whether designing and developing a new application for an ambitious idea, or upgrading an existing tool, we're the right team to help.",
      items: [
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
        {
          fa_icon: 'fa-mug-hot',
          title: 'Food & Drinks 2',
          subtitle:
            'We create human-centred designs focused on driving conversions and achieving business goals.',
        },
        {
          fa_icon: 'fa-puzzle-piece',
          title: 'Live It Up 2',
          subtitle:
            'Launch your MVP at start-up speed with an expert team of designers and developers.',
        },
        {
          fa_icon: 'fa-guitar',
          title: 'Rewards 2',
          subtitle:
            'Our team works directly with you to boost your development speed and scale.',
        },
        {
          fa_icon: 'fa-table-tennis',
          title: 'Convenience 2',
          subtitle:
            "Identify areas for automation and improve efficiency so you can spend more time on what's important.",
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
      title: 'Our Approach to {title}',
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
  // Images
  avatar_src: '/images/resource_book.png',
  avatar_alt: 'resource_book',
  hero_src: '/images/about_working_in_office.png',
  hero_alt: 'working in office',
  // Author
  author_avatar_src: '/images/about_shape_circle_radial.svg',
  author_avatar_alt: 'about_shape_circle_radial',
  author_title: 'Jared Palmer',
  author_job_title: 'CEO',
  // Tags
  tags: sampleSize(MOCK_TECH_TAGS, 3),
  // Html
  html:
    '<h4>Innovation that drives real impact.</h4>\n' +
    '\n' +
    '<p>In the past decade, digital transformation and innovation completely changed the way the world does business. In the decade ahead, technological, social and environmental forces will make strategic innovation essential for the survival of any business operating at scale. For many organizations, however, innovation can feel like fumbling in the dark, leading to new products and posts that don&rsquo;t contribute to the health and longevity of the business. In an increasingly complex world, strategy and creativity are the keys to successful, impactful innovation.</p>\n' +
    '\n' +
    '<p>Strategic innovation requires organizations to have a deep understanding of the fundamental value propositions, offerings and objectives of their core business. From that foundation, they must identify the most valuable and viable paths for innovation based on their market position and internal capabilities. By aligning internal systems and stakeholders behind an innovation strategy crafted to achieve specific business impacts, organizations can empower growth and innovation from the inside out.</p>\n',
  ...item,
}))

export const MOCK_GROUP_RESOURCES = MOCK_TECH_RESOURCES.map((item, i) => ({
  ...item,
  // Tags
  tags: sampleSize(MOCK_GROUP_TAGS, 3),
}))

export const MOCK_RESOURCES = {
  GROUP: MOCK_GROUP_RESOURCES,
  TECH: MOCK_TECH_RESOURCES,
}
