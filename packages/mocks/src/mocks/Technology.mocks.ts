import { Technology } from '@onex/types'
import merge from 'lodash/merge'

export const MOCK_TECH_TECHNOLOGY_PAGE = {
  // Seo
  seo: {
    title: '{title} Technology',
    description: 'This page is all about the technology that we use',
  },
  // Hero
  avatar_src: '/images/about_shape_circle_radial.svg',
  avatar_alt: '{title}',
  hero_src: '/images/about_working_in_office.png',
  hero_alt: 'working in office',
  overline: 'Technology',
  title: 'React',
  subtitle:
    'Work with product experts with the know-how tested in 7+ industries.',
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

export const MOCK_TECH_TECHNOLOGYS: Technology[] = [
  {
    avatar_src: '/images/technology_javascript.png',
    avatar_alt: 'JavaScript',
    title: 'JavaScript',
    slug: 'javascript',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    is_featured: true,
  },
  {
    avatar_src: '/images/technology_typescript.png',
    avatar_alt: 'Typescript',
    title: 'TypeScript',
    slug: 'typescript',
    subtitle:
      'Build or scale competitive products ready for future growth and millions of users.',
    is_featured: true,
  },
  {
    avatar_src: '/images/technology_react.png',
    avatar_alt: 'React',
    title: 'React',
    slug: 'react',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
    is_featured: true,
  },
  {
    avatar_src: '/images/technology_nextjs.png',
    avatar_alt: 'Next.js',
    avatar_width: 104,
    avatar_height: 62,
    title: 'Next.js',
    slug: 'nextjs',
    subtitle:
      'Reach the software flexibility needed to scale by optimizing your architecture.',
    is_featured: true,
  },
  {
    avatar_src: '/images/technology_node.png',
    avatar_alt: 'Node.js',
    avatar_width: 50,
    avatar_height: 55,
    title: 'Node.js',
    slug: 'nodejs',
    subtitle: 'Let certified engineers kick-start your cloud operations',
    is_featured: true,
  },
  {
    avatar_src: '/images/technology_webpack.png',
    avatar_alt: 'Webpack',
    title: 'Webpack',
    slug: 'webpack',
    subtitle:
      'Reach the software flexibility needed to scale by optimizing your architecture.',
    is_featured: true,
  },
  {
    avatar_src: '/images/technology_module_federation.png',
    avatar_alt: 'Module Federation',
    title: 'Module Federation',
    slug: 'module-federation',
    subtitle:
      'Reach the software flexibility needed to scale by optimizing your architecture.',
    is_featured: true,
  },
  {
    avatar_src: '/images/technology_nx.png',
    avatar_alt: 'Nx',
    title: 'Nx Monorepo',
    slug: 'nx-monorepo',
    subtitle:
      'Reach the software flexibility needed to scale by optimizing your architecture.',
    is_featured: true,
  },
  {
    avatar_src: '/images/technology_aws.png',
    avatar_alt: 'Aws',
    avatar_width: 90,
    avatar_height: 60,
    title: 'AWS',
    slug: 'aws',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
  },
  {
    avatar_src: '/images/technology_antd.png',
    avatar_alt: 'Ant Design',
    title: 'Ant Design',
    slug: 'ant-design',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
    is_hidden_from_nav: true,
  },
  {
    avatar_src: '/images/technology_mui.png',
    avatar_alt: 'Mui',
    title: 'MUI',
    slug: 'mui',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
    is_hidden_from_nav: true,
  },
  {
    avatar_src: '/images/technology_sass.png',
    avatar_alt: 'Sass',
    title: 'Sass',
    slug: 'saas',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
    is_hidden_from_nav: true,
  },
  {
    avatar_src: '/images/technology_vue.png',
    avatar_alt: 'Vue',
    title: 'Vue',
    slug: 'vue',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
    is_hidden_from_nav: true,
  },
  {
    avatar_src: '/images/technology_storybook.png',
    avatar_alt: 'Storybook',
    avatar_width: 50,
    title: 'Storybook',
    slug: 'storybook',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
    is_hidden_from_nav: true,
  },
].map((item, i) => {
  return merge({}, MOCK_TECH_TECHNOLOGY_PAGE, {
    id: i + 1,
    ...item,
  })
})

export const MOCK_TECHNOLOGYS = {
  TECH: MOCK_TECH_TECHNOLOGYS,
  GROUP: [],
}
