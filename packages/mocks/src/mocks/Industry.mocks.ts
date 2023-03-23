import merge from 'lodash/merge'

export const MOCK_INDUSTRY_PAGE = {
  // Seo
  seo: {
    title: '{title} Industry',
    description: 'This page is all about the technology that we use',
  },
  // Hero
  avatar_src: '/images/about_shape_circle_radial.svg',
  avatar_alt: '{title}',
  hero_src: '/images/about_working_in_office.png',
  hero_alt: 'working in office',
  overline: 'Industry',
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
}

export const MOCK_GROUP_INDUSTRYS = [
  {
    title: 'Finance',
    subtitle:
      'Support in cloud adoption and automation for startups and finance institutions.',
    slug: 'financial-services',
    fa_icon: 'fa-cake-candles',
  },
  {
    title: 'Government',
    subtitle:
      'Support in cloud adoption and automation for startups and finance institutions.',
    slug: 'government',
    fa_icon: 'fa-cake-candles',
  },
  {
    title: 'Maritime',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
    slug: 'maritime',
    fa_icon: 'fa-cake-candles',
  },
  {
    title: 'Real Estate',
    subtitle: 'Let certified engineers kick-start your cloud operations',
    slug: 'real-estate',
    fa_icon: 'fa-cake-candles',
  },
].map((item, i) => {
  return merge({}, MOCK_INDUSTRY_PAGE, {
    id: i + 1,
    hero_src: '/images/about_working_in_office.png',
    hero_alt: 'working in office',
    ...item,
  })
})

export const MOCK_TECH_INDUSTRYS = [
  {
    title: 'Finance',
    subtitle:
      'Support in cloud adoption and automation for startups and finance institutions.',
    slug: 'financial-services',
    fa_icon: 'fa-cake-candles',
  },
  {
    title: 'Government',
    subtitle:
      'Support in cloud adoption and automation for startups and finance institutions.',
    slug: 'government',
    fa_icon: 'fa-cake-candles',
  },
  {
    title: 'Maritime',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
    slug: 'maritime',
    fa_icon: 'fa-cake-candles',
  },
  {
    title: 'Real Estate',
    subtitle: 'Let certified engineers kick-start your cloud operations',
    slug: 'real-estate',
    fa_icon: 'fa-cake-candles',
  },
].map((item, i) => {
  return merge({}, MOCK_INDUSTRY_PAGE, {
    id: i + 1,
    hero_src: '/images/about_working_in_office.png',
    hero_alt: 'working in office',
    ...item,
  })
})
