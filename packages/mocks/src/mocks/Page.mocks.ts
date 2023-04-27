import { Page } from '@onex/types'
import { MOCK_COMMON_SITE } from './Site.mocks'

export const MOCK_PAGE: Page = {
  // Seo
  id: 0,
  seo_title: '',
  seo_description: '',
  seo: {
    title: '',
    description: '',
  },
  // Hero
  hero_src: '',
  hero_alt: '',
  overline: '',
  title: '',
  subtitle: '',
  html: '',
  // Sections
  sections: {
    hero: {
      hero_src: '',
      hero_alt: '',
      overline: '',
      title: '',
      subtitle: '',
      items: [],
    },
    summary: {
      hero_src: '',
      hero_alt: '',
      overline: '',
      title: '',
      subtitle: '',
      items: [],
    },
    benefits: {
      hero_src: '',
      hero_alt: '',
      overline: '',
      title: '',
      subtitle: '',
      items: [],
    },
    callout: {
      hero_src: '',
      hero_alt: '',
      overline: '',
      title: '',
      subtitle: '',
    },
    features: {
      hero_src: '',
      hero_alt: '',
      overline: '',
      title: '',
      subtitle: '',
      items: [],
    },
    halfGrids: {
      hero_src: '',
      hero_alt: '',
      overline: '',
      title: '',
      subtitle: '',
      items: [],
    },
    howItWorks: {
      hero_src: '',
      hero_alt: '',
      overline: '',
      title: '',
      subtitle: '',
      items: [],
    },
    checklist: {
      hero_src: '',
      hero_alt: '',
      overline: '',
      title: '',
      subtitle: '',
      items: [],
    },
    faqs: {
      hero_src: '',
      hero_alt: '',
      overline: '',
      title: '',
      subtitle: '',
      items: [],
    },
    cta: { hero_src: '', hero_alt: '', overline: '', title: '', subtitle: '' },
  },
}

export const MOCK_DIGITAL_PAGE = {
  id: 1,
  // Seo
  seo_title: '{appTitle}',
  seo_description: 'This page is all about the technology that we use',
  // Info
  title: 'One X Digital',
  subtitle: 'Discover the agile process we use to build digital products',
  // Sections
  sections: {
    hero: {
      overline: 'Digital',
      title: 'We Design & Develop Custom Software for Businesses',
      subtitle:
        'Maximise business growth through insight driven web digital. We put business first in everything we do.',
    },
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
      title: 'Our Suite of Services',
      subtitle:
        "Whether designing and developing a new application for an ambitious idea, or upgrading an existing tool, we're the right team to help.",
      maxWidth: 'lg',
      center: true,
      items: [
        {
          fa_icon: 'fa-mug-hot',
          title: 'Web Design',
          subtitle:
            'A conversion centred approach to creating web and product designs that drive action.',
        },
        {
          fa_icon: 'fa-mug-hot',
          title: 'Web Development',
          subtitle: 'Build tailor-made websites that drive leads and sales.',
        },
        {
          fa_icon: 'fa-mug-hot',
          title: 'Application Development',
          subtitle:
            'Accelerate business agility across your organisation with scalable enterprise apps.',
        },
      ],
    },
    halfGrids: {
      items: [
        {
          hero_src: '/images/digital_work_collage.png',
          hero_alt: 'Digital UI Collage',
          fullHeight: true,
          overline: 'What we do',
          title: 'We Design For Impact',
          subtitle:
            'At {appTitle}, we take a scientific approach to design, leveraging research to create intuitive user experiences that not only reinforces the brand, but also delivers the business value.',
        },
      ],
    },
    callout: {
      hero_src: '/images/digital_phone_prototyping.png',
      hero_alt: 'about_nodes_above_city',
      title: 'Custom Business Software Made for Market Leaders',
      subtitle:
        'We build modern system architectures and scalable applications that radically transform business performance.',
      buttonProps: { href: '{routes.SERVICES}' },
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
export const MOCK_DATA_PAGE = {
  id: 1,
  // Seo
  seo_title: '{appTitle}',
  seo_description: 'This page is all about the technology that we use',
  // Info
  title: 'One X Data',
  subtitle: 'Discover the agile process we use to build digital products',
  // Sections
  sections: {
    hero: {
      overline: 'Data',
      title: 'Data empowering the world’s decision makers.',
      subtitle: 'Drive better business and policy decisions.',
    },
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
      title: 'Our Suite of Services',
      subtitle:
        "Whether designing and developing a new application for an ambitious idea, or upgrading an existing tool, we're the right team to help.",
      maxWidth: 'lg',
      center: true,
      items: [
        {
          fa_icon: 'fa-mug-hot',
          title: 'Web Design',
          subtitle:
            'A conversion centred approach to creating web and product designs that drive action.',
        },
        {
          fa_icon: 'fa-mug-hot',
          title: 'Web Development',
          subtitle: 'Build tailor-made websites that drive leads and sales.',
        },
        {
          fa_icon: 'fa-mug-hot',
          title: 'Web Development',
          subtitle: 'Build tailor-made websites that drive leads and sales.',
        },
        {
          fa_icon: 'fa-mug-hot',
          title: 'Application Development',
          subtitle:
            'Accelerate business agility across your organisation with scalable enterprise apps.',
        },
      ],
    },
    halfGrids: {
      items: [
        {
          hero_src: '/images/digital_work_collage.png',
          hero_alt: 'Digital UI Collage',
          fullHeight: true,
          overline: 'What we do',
          title: 'We Design For Impact',
          subtitle:
            'At {appTitle}, we take a scientific approach to design, leveraging research to create intuitive user experiences that not only reinforces the brand, but also delivers the business value.',
        },
        {
          reverse: true,
          hero_src: '/images/digital_ipad.png',
          hero_alt: 'Design UI Collage',
          fullHeight: true,
          overline: 'What we do',
          title: 'We Develop Modern Technologies',
          subtitle:
            'At the core of One X Tech is a software engineering team specialising in ReactJS, GraphQL, NodeJS, and the extended JavaScript ecosystem.',
        },
        {
          hero_src: '/images/digital_dashboard.png',
          hero_alt: 'Digital UI Collage',
          fullHeight: true,
          overline: 'Our Services',
          title: 'Our Capabilities',
          subtitle:
            'We’re business software experts. We build disruptive digital capabilities for enterprise clients, driving lasting innovation and breakthrough engagement. We help you turn concepts into reliable and robust digital solutions, with tangible strategy, stunning design and an amazing user experience.',
        },
      ],
    },
    callout: {
      hero_src: '/images/digital_phone_prototyping.png',
      hero_alt: 'about_nodes_above_city',
      title: 'Custom Business Software Made for Market Leaders',
      subtitle:
        'We build modern system architectures and scalable applications that radically transform business performance.',
      buttonProps: { href: '{routes.SERVICES}' },
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
export const MOCK_DESIGN_PAGE = {
  id: 1,
  // Seo
  seo_title: '{appTitle}',
  seo_description: 'This page is all about the technology that we use',
  // Info
  title: 'One X Design',
  subtitle: 'We Design for Impact',
  // Sections
  sections: {
    hero: {
      overline: 'Design',
      title: 'We Design for Impact',
      subtitle:
        'Maximise business growth through insight driven web digital. We put business first in everything we do.',
    },
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
      maxWidth: 'lg',
      center: true,
      items: [
        {
          fa_icon: 'fa-mug-hot',
          title: 'Web Design',
          subtitle:
            'A conversion centred approach to creating web and product designs that drive action.',
        },
        {
          fa_icon: 'fa-mug-hot',
          title: 'Web Development',
          subtitle: 'Build tailor-made websites that drive leads and sales.',
        },
        {
          fa_icon: 'fa-mug-hot',
          title: 'Application Development',
          subtitle:
            'Accelerate business agility across your organisation with scalable enterprise apps.',
        },
        {
          fa_icon: 'fa-mug-hot',
          title: 'UI/UX Design',
          subtitle:
            'Accelerate business agility across your organisation with scalable enterprise apps.',
        },
      ],
    },
    halfGrids: {
      items: [
        {
          hero_src: '/images/digital_work_collage.png',
          hero_alt: 'Digital UI Collage',
          fullHeight: true,
          overline: 'What we do',
          title: 'We Design For Impact',
          subtitle:
            'At {appTitle}, we take a scientific approach to design, leveraging research to create intuitive user experiences that not only reinforces the brand, but also delivers the business value.',
        },
        {
          reverse: true,
          hero_src: '/images/digital_ipad.png',
          hero_alt: 'Design UI Collage',
          fullHeight: true,
          overline: 'What we do',
          title: 'We Develop Modern Technologies',
          subtitle:
            'At the core of One X Tech is a software engineering team specialising in ReactJS, GraphQL, NodeJS, and the extended JavaScript ecosystem.',
        },
        {
          hero_src: '/images/digital_dashboard.png',
          hero_alt: 'Digital UI Collage',
          fullHeight: true,
          overline: 'Our Services',
          title: 'Our Capabilities',
          subtitle:
            'We’re business software experts. We build disruptive digital capabilities for enterprise clients, driving lasting innovation and breakthrough engagement. We help you turn concepts into reliable and robust digital solutions, with tangible strategy, stunning design and an amazing user experience.',
        },
      ],
    },
    callout: {
      hero_src: '/images/digital_phone_prototyping.png',
      hero_alt: 'about_nodes_above_city',
      title: 'Custom Business Software Made for Market Leaders',
      subtitle:
        'We build modern system architectures and scalable applications that radically transform business performance.',
      buttonProps: { href: '{routes.SERVICES}' },
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

const MOCK_COMMON_PAGES = [
  { title: 'About Us', slug: 'about' },
  { title: 'Contact Us', slug: 'contact' },
  { title: 'Careers', slug: 'careers' },
  { title: 'Mission', slug: 'mission', seo_title: 'Our Mission' },
  {
    title: 'Terms',
    slug: 'terms',
    is_hidden_from_nav: true,
    html: '<div>Terms</div>',
  },
  {
    title: 'Privacy',
    slug: 'privacy',
    is_hidden_from_nav: true,
    html: '<div>Privacy</div>',
  },
  {
    title: 'Cookies',
    slug: 'cookies',
    is_hidden_from_nav: true,
    html: '<div>Cookies</div>',
  },
  { title: 'Design', slug: 'design' },
  { title: 'Data', slug: 'data' },
  { title: 'Digital', slug: 'digital' },
  { title: 'News', slug: 'news' },
  { title: 'Resources', slug: 'resources' },
  { title: 'Newsletter', slug: 'newsletter' },
  { title: 'Ecosystem', slug: 'ecosystem' },
].map((page) => ({
  ...MOCK_PAGE,
  href: `/${page.slug}`,
  subtitle:
    'Learn how we keep our employees happy and see our values, culture, and initiatives.',
  ...page,
}))

const MOCK_GROUP_PAGES = [
  ...MOCK_COMMON_PAGES,
  {
    title: 'Home',
    slug: 'home',
    subtitle: 'Discover the agile process we use to build digital products',
    seo_title: '{appTitle}',
    seo_description: 'This page is all about the technology that we use',
    sections: {
      hero: {
        overline: 'Greetings',
        title: 'We are the Growth Company',
        subtitle:
          'Maximise business growth through insight driven web digital. We put business first in everything we do.',
      },
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
        title: 'Our Suite of Services',
        subtitle:
          "Whether designing and developing a new application for an ambitious idea, or upgrading an existing tool, we're the right team to help.",
        maxWidth: 'lg',
        center: true,
        items: [
          {
            fa_icon: 'fa-mug-hot',
            title: 'Web Design',
            subtitle:
              'A conversion centred approach to creating web and product designs that drive action.',
          },
          {
            fa_icon: 'fa-mug-hot',
            title: 'Web Development',
            subtitle: 'Build tailor-made websites that drive leads and sales.',
          },
          {
            fa_icon: 'fa-mug-hot',
            title: 'Application Development',
            subtitle:
              'Accelerate business agility across your organisation with scalable enterprise apps.',
          },
        ],
      },
      halfGrids: {
        items: [
          {
            hero_src: '/images/digital_work_collage.png',
            hero_alt: 'Digital UI Collage',
            fullHeight: true,
            overline: 'What we do',
            title: 'We Design For Impact',
            subtitle:
              'At {appTitle}, we take a scientific approach to design, leveraging research to create intuitive user experiences that not only reinforces the brand, but also delivers the business value.',
          },
          {
            reverse: true,
            hero_src: '/images/digital_ipad.png',
            hero_alt: 'Design UI Collage',
            fullHeight: true,
            overline: 'What we do',
            title: 'We Develop Modern Technologies',
            subtitle:
              'At the core of One X Tech is a software engineering team specialising in ReactJS, GraphQL, NodeJS, and the extended JavaScript ecosystem.',
          },
          {
            hero_src: '/images/digital_dashboard.png',
            hero_alt: 'Digital UI Collage',
            fullHeight: true,
            overline: 'Our Services',
            title: 'Our Capabilities',
            subtitle:
              'We’re business software experts. We build disruptive digital capabilities for enterprise clients, driving lasting innovation and breakthrough engagement. We help you turn concepts into reliable and robust digital solutions, with tangible strategy, stunning design and an amazing user experience.',
          },
        ],
      },
      callout: {
        hero_src: '/images/digital_phone_prototyping.png',
        hero_alt: 'about_nodes_above_city',
        title: 'Custom Business Software Made for Market Leaders',
        subtitle:
          'We build modern system architectures and scalable applications that radically transform business performance.',
        buttonProps: { href: '{routes.SERVICES}' },
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
            title:
              'What are the advantages of developing web apps with {title}?',
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
  },
]

const MOCK_TECH_PAGES = [
  ...MOCK_COMMON_PAGES,
  {
    title: 'Home',
    slug: 'home',
    subtitle: 'Discover the agile process we use to build digital products',
    seo_title: '{appTitle}',
    seo_description: 'This page is all about the technology that we use',
    sections: {
      hero: {
        overline: 'One X Tech',
        title: 'Modernizing Enterprise User Experiences',
        subtitle:
          "{appTitle} provides high-performing, on-demand frontend teams for {localeTitle}'s leading companies.",
      },
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
        title: 'Speed Up Product Delivery',
        subtitle:
          '{appTitle} empowers enterprise businesses with leading-edge frontend development and best practices. Start in just weeks with our cloud-certified Node.js, React, and Typescript teams.',
        maxWidth: 'xl',
        center: true,
        items: [
          {
            fa_icon: 'fa-pen-paintbrush',
            title: 'User Interface Development',
            subtitle:
              'Create visually appealing and user-friendly interfaces that improve user experience and drive engagement.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Modern Frontend Engineering',
            subtitle:
              'Develop rich user interfaces and experiences for web applications using modern technologies and frameworks.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Product Team Augmentation',
            subtitle:
              'Providing enterprises and product owners with the frontend development talent they need to achieve their goals.',
          },
          {
            fa_icon: 'fa-object-group',
            title: 'Software Architecture R&D',
            subtitle:
              'Explore new techniques and technologies to design and develop robust and scalable software systems.',
          },
        ],
      },
      halfGrids: {
        items: [
          {
            hero_src: '/images/digital_work_collage.png',
            hero_alt: 'Digital UI Collage',
            fullHeight: true,
            overline: 'What we do',
            title: 'We Design For Impact',
            subtitle:
              'At {appTitle}, we take a scientific approach to design, leveraging research to create intuitive user experiences that not only reinforces the brand, but also delivers the business value.',
          },
          {
            reverse: true,
            hero_src: '/images/digital_ipad.png',
            hero_alt: 'Design UI Collage',
            fullHeight: true,
            overline: 'What we do',
            title: 'We Develop Modern Technologies',
            subtitle:
              'At the core of One X Tech is a software engineering team specialising in ReactJS, GraphQL, NodeJS, and the extended JavaScript ecosystem.',
          },
          {
            hero_src: '/images/digital_dashboard.png',
            hero_alt: 'Digital UI Collage',
            fullHeight: true,
            overline: 'Our Services',
            title: 'Our Capabilities',
            subtitle:
              'We’re business software experts. We build disruptive digital capabilities for enterprise clients, driving lasting innovation and breakthrough engagement. We help you turn concepts into reliable and robust digital solutions, with tangible strategy, stunning design and an amazing user experience.',
          },
        ],
      },
      callout: {
        hero_src: '/images/digital_phone_prototyping.png',
        hero_alt: 'about_nodes_above_city',
        title: 'Custom Business Software Made for Market Leaders',
        subtitle:
          'We build modern system architectures and scalable applications that radically transform business performance.',
        buttonProps: { href: '{routes.SERVICES}' },
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
            key: 'faq-1',
            title:
              'What experience and expertise do you have in frontend development?',
            content:
              'Our software development team has years of experience in building complex frontend applications for a range of industries. We have a deep understanding of frontend technologies such as React, Angular, and Vue, and we constantly stay up-to-date with the latest trends and best practices to ensure our clients receive top-quality solutions.',
          },
          {
            key: 'faq-2',
            title:
              'How do you ensure that the software you build meets our specific requirements?',
            content:
              'We take a collaborative approach to software development, working closely with our clients to understand their unique needs and goals. We begin each project with a discovery phase, during which we conduct research and analysis to gain a deep understanding of your business and industry. We then work with you to create a detailed project plan that outlines your requirements and sets clear goals and expectations.',
          },
          {
            key: 'faq-3',
            title: 'How do you ensure the quality of the software you develop?',
            content:
              'We have a rigorous quality assurance process in place that ensures the software we develop meets the highest standards. We perform extensive testing at every stage of the development process, using a combination of manual and automated testing to catch any bugs or issues early on. We also conduct regular code reviews and follow best practices to ensure the software we deliver is of the highest quality.',
          },
          {
            key: 'faq-4',
            title: 'What industries do you have experience working with?',
            content:
              'Our team has experience working with a wide range of industries, including finance, healthcare, e-commerce, and more. We have the knowledge and expertise to develop software solutions that meet the unique needs of each industry we work with, and we are committed to staying up-to-date with the latest trends and best practices in each field.',
          },
          {
            key: 'faq-5',
            title: 'How do you handle project management and communication?',
            content:
              'We use a variety of tools and techniques to ensure effective project management and communication throughout the development process. We use agile methodologies to break down projects into smaller, more manageable tasks, and we use project management software to track progress and communicate updates. We also schedule regular meetings with our clients to provide status updates and discuss any issues or concerns.',
          },
          {
            key: 'faq-6',
            title: 'How do you ensure the security and privacy of our data?',
            content:
              'We take data security and privacy very seriously and follow strict protocols to ensure the confidentiality and integrity of your data. We use secure coding practices and encryption techniques to protect your data from unauthorized access and ensure that your data is stored securely. We also follow industry best practices and compliance standards, such as HIPAA and GDPR, to ensure the highest levels of data security and privacy.',
          },
          {
            key: 'faq-7',
            title: 'What is your approach to project pricing and timelines?',
            content:
              'We work with our clients to create a detailed project plan that includes pricing and timelines. Our pricing is based on the complexity of the project, the technologies involved, and the level of customization required. We provide detailed cost estimates and timelines upfront, and we work closely with our clients to ensure that their projects are completed on time and within budget.',
          },
          {
            key: 'faq-8',
            title: 'What’s your experience in enterprise software development?',
            content:
              'We have a proven track record of delivering high-quality enterprise software solutions to our clients. We have experience working with large-scale enterprises in various industries, including finance, healthcare, and manufacturing. Our team of experienced developers, project managers, and business analysts have a deep understanding of the complex requirements of enterprise software and are well-equipped to handle the challenges that come with it. We follow a rigorous development process that ensures timely delivery, continuous communication with our clients, and a focus on delivering solutions that meet their specific business needs.',
          },
          {
            key: 'faq-9',
            title: 'What is your approach to project management?',
            content:
              'We follow an agile project management approach, with a focus on delivering high-quality software solutions on time and within budget. We provide regular progress updates and have an open line of communication with our clients throughout the entire development process.',
          },
          {
            key: 'faq-10',
            title:
              'What is your pricing model for frontend development services?',
            content:
              'Our pricing model is flexible and depends on the specific needs and requirements of each project. We offer both fixed-price and time-and-materials pricing options, and we work closely with our clients to determine the most cost-effective and efficient approach for their project.',
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
  },
].map((page) => ({
  ...MOCK_PAGE,
  ...page,
  href: `${MOCK_COMMON_SITE.company_absolute_url}/${page.slug}`,
}))

export const MOCK_PAGES = {
  GROUP: MOCK_GROUP_PAGES,
  TECH: MOCK_TECH_PAGES,
}
