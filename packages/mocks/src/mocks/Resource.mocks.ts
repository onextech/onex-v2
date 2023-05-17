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
      title: 'Our Approach to {title}',
      subtitle:
        'To deliver products of the highest quality, we follow the best practices that include code review, pair programming, test-driven development, continuous integration, and automated testing.',
      items: [
        {
          fa_icon: 'fa-guitar',
          title: 'Achieve strategic team alignment',
          subtitle:
            'Our team works directly with you to boost your development speed and scale.',
        },
        {
          fa_icon: 'fa-table-tennis',
          title: 'Create transparency in business',
          subtitle:
            "Identify areas for automation and improve efficiency so you can spend more time on what's important.",
        },
        {
          fa_icon: 'fa-mug-hot',
          title: 'Overcome lack of organizational focus',
          subtitle:
            'We create human-centred designs focused on driving conversions and achieving business goals.',
        },
        {
          fa_icon: 'fa-puzzle-piece',
          title: 'Empower employee engagement',
          subtitle:
            'Launch your MVP at start-up speed with an expert team of designers and developers.',
        },
      ],
    },
    callout: {
      hero_src: '/images/about_nodes_above_city.png',
      hero_alt: 'about_nodes_above_city',
      overline: '',
      title: 'We Build Digital Solutions with Enterprises, for Enterprises',
      subtitle:
        'Our team of consultants, designers and engineers live and breathe digital services to deliver best-in-class technological solutions targeted at enterprise growth and digitalization.',
    },
    features: {
      overline: 'What we do',
      title: 'Our Approach to {title}',
      subtitle:
        'How to deliver products of the highest quality, we follow the best practices that include code review, pair programming, test-driven development, continuous integration, and automated testing.',
      items: [
        {
          fa_icon: 'fa-mug-hot',
          title: 'What is an OKR?',
          subtitle:
            'We create human-centred designs focused on driving conversions and achieving business goals.',
        },
        {
          fa_icon: 'fa-puzzle-piece',
          title: 'Why the OKR methodology?',
          subtitle:
            'Launch your MVP at start-up speed with an expert team of designers and developers.',
        },
        {
          fa_icon: 'fa-guitar',
          title: 'Achieve strategic team alignment',
          subtitle:
            'Our team works directly with you to boost your development speed and scale.',
        },
        {
          fa_icon: 'fa-table-tennis',
          title: 'Create transparency in business',
          subtitle:
            "Identify areas for automation and improve efficiency so you can spend more time on what's important.",
        },
        {
          fa_icon: 'fa-mug-hot',
          title: 'Overcome lack of organizational focus',
          subtitle:
            'We create human-centred designs focused on driving conversions and achieving business goals.',
        },
        {
          fa_icon: 'fa-puzzle-piece',
          title: 'Empower employee engagement',
          subtitle:
            'Launch your MVP at start-up speed with an expert team of designers and developers.',
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
      overline: 'Get Started',
      title: 'Partnering with {appTitle}',
      subtitle:
        '{appTitle} partners with enterprise clients to create solutions to the toughest software problems. Focusing on JavaScript as our core technology, we utilize React, React Native, NodeJS, GraphQL, and the extended JavaScript ecosystem to build web apps, mobile apps, cloud services, open source software, and more. Our approach is tailored to each product, so we will always work with your team to select the technologies best suited to your needs. We excel in web, mobile and cloud platform development and can apply our expertise to your product, no matter where it is in the product lifecycle.',
    },
  },
  // Images
  avatar_src: '/images/resource_book.png',
  avatar_alt: 'resource_book',
  hero_src: '/images/resource_book.png',
  hero_alt: 'working in office',
  // Author
  author_avatar_src: '/images/author_joel_koh.png',
  author_avatar_alt: 'about_shape_circle_radial',
  author_title: 'Joel Koh',
  author_job_title: 'Digital Lead',
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
