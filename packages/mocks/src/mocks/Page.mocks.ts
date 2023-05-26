import { Page } from '@onex/types'
import { routeConfig } from '@onex/common'
import merge from 'lodash/merge'

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
    leftGridSticky: {
      hero_src: '',
      hero_alt: '',
      overline: '',
      title: '',
      subtitle: '',
      items: [],
    },
    rightGridSticky: {
      hero_src: '',
      hero_alt: '',
      overline: '',
      title: '',
      subtitle: '',
      items: [],
    },
    gallery: {
      hero_src: '',
      hero_alt: '',
      overline: '',
      title: '',
      subtitle: '',
      items: [],
    },
  },
}

export const MOCK_DATA_PAGE = {
  id: 1,
  // Seo
  seo_title: 'Data',
  seo_description: 'This page is all about the technology that we use',
  // Info
  title: '{appTitle}',
  subtitle: 'We Data for Impact',
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
            'At the core of {appTitle} is a software engineering team specialising in ReactJS, GraphQL, NodeJS, and the extended JavaScript ecosystem.',
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
      hero_alt: 'Laser net over city',
      title: 'Custom Business Software Made for Market Leaders',
      subtitle:
        'We build modern system architectures and scalable applications that radically transform business performance.',
      buttonProps: { href: '{routes.SERVICES}' },
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
  },
}
export const MOCK_DESIGN_PAGE = {
  id: 1,
  // Seo
  seo_title: 'Design',
  seo_description: 'This page is all about the technology that we use',
  // Info
  title: '{appTitle}',
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
            'At the core of {appTitle} is a software engineering team specialising in ReactJS, GraphQL, NodeJS, and the extended JavaScript ecosystem.',
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
      hero_alt: 'Laser net over city',
      title: 'Custom Business Software Made for Market Leaders',
      subtitle:
        'We build modern system architectures and scalable applications that radically transform business performance.',
      buttonProps: { href: '{routes.SERVICES}' },
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
  },
}
export const MOCK_DIGITAL_PAGE = {
  id: 1,
  // Seo
  seo_title: 'Digital',
  seo_description: 'This page is all about the technology that we use',
  // Info
  title: '{appTitle}',
  subtitle: 'Discover the agile process we use to build digital products',
  // Sections
  sections: {
    hero: {
      overline: 'Digital',
      title: 'We Build Digital Solutions with Enterprises, for Enterprises',
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
      hero_alt: 'Laser net over city',
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
      hero_alt: 'Laser net over city',
      overline: 'Get Started',
      title: 'Partnering with {appTitle}',
      subtitle:
        '{appTitle} partners with enterprise clients to create solutions to the toughest software problems. Focusing on JavaScript as our core technology, we utilize React, React Native, NodeJS, GraphQL, and the extended JavaScript ecosystem to build web apps, mobile apps, cloud services, open source software, and more. Our approach is tailored to each product, so we will always work with your team to select the technologies best suited to your needs. We excel in web, mobile and cloud platform development and can apply our expertise to your product, no matter where it is in the product lifecycle.',
    },
    leftGridSticky: {
      hero_src: '/images/showcase_detail_sticky_1.jpg',
      hero_alt: 'showcase detail sticky 1',
      overline: 'overline',
      title: 'title',
      subtitle: 'subtitle',
    },
    rightGridSticky: {
      hero_src: '/images/showcase_detail_sticky_2.png',
      hero_alt: 'showcase detail sticky 2',
      overline: 'overline',
      title: 'title',
      subtitle: 'subtitle',
    },
    gallery: {
      overline: 'Get Started',
      title: 'Partnering with {appTitle}',
      subtitle:
        '{appTitle} partners with enterprise clients to create solutions to the toughest software problems. Focusing on JavaScript as our core technology, we utilize React, React Native, NodeJS, GraphQL, and the extended JavaScript ecosystem to build web apps, mobile apps, cloud services, open source software, and more. Our approach is tailored to each product, so we will always work with your team to select the technologies best suited to your needs. We excel in web, mobile and cloud platform development and can apply our expertise to your product, no matter where it is in the product lifecycle.',
      items: [
        {
          title: '/images/showcase_detail_gallery_1.png',
          titleProps: { alt: 'showcase detail gallery 1' },
        },
        {
          title: '/images/showcase_detail_gallery_2.png',
          titleProps: { alt: 'showcase detail gallery 2' },
        },
      ],
    },
  },
}
export const MOCK_VENTURES_PAGE = {
  id: 1,
  // Seo
  seo_title: 'Labs',
  seo_description: 'This page is all about the technology that we use',
  // Info
  title: '{appTitle}',
  subtitle: 'Discover the agile process we use to build digital products',
  // Sections
  sections: {
    hero: {
      overline: '{appTitle}',
      title: 'Corporate Innovation for Enterprises',
      subtitle:
        'We unleash the power of entrepreneurship to solve big problems with the world’s leading companies.',
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
      hero_alt: 'Laser net over city',
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
      hero_alt: 'Laser net over city',
      overline: 'Get Started',
      title: 'Partnering with {appTitle}',
      subtitle:
        '{appTitle} partners with enterprise clients to create solutions to the toughest software problems. Focusing on JavaScript as our core technology, we utilize React, React Native, NodeJS, GraphQL, and the extended JavaScript ecosystem to build web apps, mobile apps, cloud services, open source software, and more. Our approach is tailored to each product, so we will always work with your team to select the technologies best suited to your needs. We excel in web, mobile and cloud platform development and can apply our expertise to your product, no matter where it is in the product lifecycle.',
    },
    leftGridSticky: {
      hero_src: '/images/showcase_detail_sticky_1.jpg',
      hero_alt: 'showcase detail sticky 1',
      overline: 'overline',
      title: 'title',
      subtitle: 'subtitle',
    },
    rightGridSticky: {
      hero_src: '/images/showcase_detail_sticky_2.png',
      hero_alt: 'showcase detail sticky 2',
      overline: 'overline',
      title: 'title',
      subtitle: 'subtitle',
    },
    gallery: {
      overline: 'Get Started',
      title: 'Partnering with {appTitle}',
      subtitle:
        '{appTitle} partners with enterprise clients to create solutions to the toughest software problems. Focusing on JavaScript as our core technology, we utilize React, React Native, NodeJS, GraphQL, and the extended JavaScript ecosystem to build web apps, mobile apps, cloud services, open source software, and more. Our approach is tailored to each product, so we will always work with your team to select the technologies best suited to your needs. We excel in web, mobile and cloud platform development and can apply our expertise to your product, no matter where it is in the product lifecycle.',
      items: [
        {
          title: '/images/showcase_detail_gallery_1.png',
          titleProps: { alt: 'showcase detail gallery 1' },
        },
        {
          title: '/images/showcase_detail_gallery_2.png',
          titleProps: { alt: 'showcase detail gallery 2' },
        },
      ],
    },
  },
}

const MOCK_COMMON_PAGES = [
  {
    title: 'Careers',
    slug: 'careers',
    subtitle:
      'Discover how you can join us and be part of a team at the forefront of digital innovation.',
    seo_description:
      "Join our team of thinkers and tinkerers to build tomorrow's technology today. Make an impact and bring great software to more people. Exciting career opportunities are available.",
  },
  {
    title: 'Contact',
    slug: 'contact',
    subtitle:
      'Get in touch with us to learn how we can help unlock new possibilities for your business',
    seo_description:
      'Get in touch with our dedicated team through our contact form, email or phone so that we can help serve you better.',
  },
  {
    title: 'Terms',
    slug: 'terms',
    is_hidden_from_nav: true,
    seo_description:
      "Explore {appTitle}'s Terms of Service, guidelines, and limitations. Stay informed, comply, and find peace of mind.",
    html:
      '<h3>Overview</h3>\n' +
      '<p>By accessing the website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>\n' +
      '<h3>Use License</h3>\n' +
      '<ol type="a">\n' +
      "<li>Permission is granted to temporarily download one copy of the materials (information or software) on {appTitle} Pte Ltd's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:\n" +
      '<ul>\n' +
      '<li>modify or copy the materials;</li>\n' +
      '<li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>\n' +
      "<li>attempt to decompile or reverse engineer any software contained on {appTitle} Pte Ltd's website;</li>\n" +
      '<li>remove any copyright or other proprietary notations from the materials; or</li>\n' +
      '<li>transfer the materials to another person or "mirror" the materials on any other server.</li>\n' +
      '</ul>\n' +
      '</li>\n' +
      '<li>This license shall automatically terminate if you violate any of these restrictions and may be terminated by {appTitle} Pte Ltd at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</li>\n' +
      '</ol>\n' +
      '<h3>Disclaimer</h3>\n' +
      '<ol type="a">\n' +
      "<li>The materials on {appTitle} Pte Ltd's website are provided on an 'as is' basis. {appTitle} Pte Ltd makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>\n" +
      '<li>Further, {appTitle} Pte Ltd does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</li>\n' +
      '</ol>\n' +
      '<h3>Limitations</h3>\n' +
      "<p>In no event shall {appTitle} Pte Ltd or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on {appTitle} Pte Ltd's website, even if {appTitle} Pte Ltd or a {appTitle} Pte Ltd authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>\n" +
      '<h3>Accuracy of materials</h3>\n' +
      "<p>The materials appearing on {appTitle} Pte Ltd's website could include technical, typographical, or photographic errors. {appTitle} Pte Ltd does not warrant that any of the materials on its website are accurate, complete or current. {appTitle} Pte Ltd may make changes to the materials contained on its website at any time without notice. However {appTitle} Pte Ltd does not make ay commitment to update the materials.</p>\n" +
      '<h3>Links</h3>\n' +
      "<p>{appTitle} Pte Ltd has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by {appTitle} Pte Ltd of the site. Use of any such linked website is at the user's own risk.</p>\n" +
      '<h3>Modifications</h3>\n' +
      '<p>{appTitle} Pte Ltd may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>\n' +
      '<h3>Governing Law</h3>\n' +
      '<p>These terms and conditions are governed by and construed in accordance with the laws of {localeTitle} and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>',
  },
  {
    title: 'Privacy',
    slug: 'privacy',
    is_hidden_from_nav: true,
    seo_description:
      'We value your privacy. Discover how {appTitle} respects your personal information through data protection, consent and protecting your rights.',
    html:
      '<h3>Overview</h3>\n' +
      "<p>Your privacy is important to us. It is {appTitle} Pte Ltd's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.</p>\n" +
      '<p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we&rsquo;re collecting it and how it will be used.</p>\n' +
      '<p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we&rsquo;ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</p>\n' +
      '<p>We don&rsquo;t share any personally identifying information publicly or with third-parties, except when required to by law.</p>\n' +
      '<p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>\n' +
      '<h3>Rights</h3>\n' +
      '<p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>\n' +
      '<p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>',
  },
  {
    title: 'Cookies',
    slug: 'cookies',
    is_hidden_from_nav: true,
    seo_description:
      "Discover more about our website's cookie policy and personalize, analyze and manage cookies to enhance your website experience",
    html:
      '<p>This website uses cookies. By continuing to use this website, you consent to the use of cookies in accordance with this Cookie Policy.</p>\n' +
      '<h3>What are cookies?</h3>\n' +
      "<p>Cookies are small files stored on your computer or mobile device by a website when you visit it. They enable the website to remember your actions and preferences (such as login, language, font size, and other display preferences) over a period of time, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.</p>\n" +
      '<h3>How do we use cookies?</h3>\n' +
      '<p>We use cookies to:</p>\n' +
      '<ul>\n' +
      '<li>Personalize your experience on our website;</li>\n' +
      '<li>Remember your preferences and settings;</li>\n' +
      '<li>Improve the performance and security of our website;</li>\n' +
      '<li>Analyze how you use our website and gather anonymous statistical data.</li>\n' +
      '</ul>\n' +
      '<h3>Types of cookies we use</h3>\n' +
      '<p>There are several types of cookies we use on this website:</p>\n' +
      '<ul>\n' +
      '<li><strong>Essential cookies:</strong> These cookies are necessary for the website to function properly. They are usually set in response to your actions, such as setting your privacy preferences, logging in, or filling out forms.</li>\n' +
      '<li><strong>Analytics cookies:</strong> These cookies help us analyze and understand how our website is being used, including which pages are visited the most, how long users spend on each page, and other statistical data. This information helps us improve the performance and relevance of our website.</li>\n' +
      '<li><strong>Marketing cookies:</strong> These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.</li>\n' +
      '</ul>\n' +
      '<h3>Managing cookies</h3>\n' +
      '<p>You can control and/or delete cookies as you wish. For more information, you can visit the <a href="https://www.allaboutcookies.org/">All About Cookies</a> website. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site, and some services and functionalities may not work.</p>\n' +
      '<p>For further details about our use of cookies and your choices regarding cookies, please refer to our <a href="/privacy">Privacy Policy</a>.</p>',
  },
].map((page) => ({
  ...MOCK_PAGE,
  href: `/${page.slug}`,
  ...page,
}))

const MOCK_GROUP_PAGES = [
  {
    title: 'About',
    slug: 'about',
    subtitle:
      'Learn more about the driving force behind our mission, vision, and purpose.',
    sections: {
      hero: {
        hero_src: '/images/about_hero.png',
        hero_alt: 'hero',
        overline: 'Greetings',
        title: 'We are {appTitle}, the Growth Company.',
        buttons: [
          {
            overline: 'What we do',
            title: 'Smarter Businesses',
            href: routeConfig.SHOWCASES,
          },
          {
            overline: 'Who we are',
            title: 'Business Software Experts',
            href: routeConfig.HOME,
          },
        ],
      },
      summary: {
        hero_src: '/images/about_nodes.png',
        hero_alt: 'Laser net',
        title:
          'We believe technology is the superpower that changes everything about business.',
        subtitle:
          '{appTitle} is a business technology partner, focused on building technological innovations for leading enterprises. We empower businesses with cutting-edge solutions by applying established and emerging technologies into their core business models.',
        buttons: [
          {
            overline: 'Who we are',
            title: 'Business Software Experts',
            href: routeConfig.CAREERS,
          },
        ],
      },
      callout: {
        hero_src: '/images/about_man_with_laptop_in_city.png',
        hero_alt: 'hero',
        title:
          'We are here to awaken the potential of a supercharged digital economy.',
        subtitle:
          'We deliver transformational outcomes for a demanding new digital world.',
        buttons: [
          {
            overline: 'Our Mission',
            title: 'Enabling Smarter Businesses',
            href: routeConfig.SERVICES,
          },
        ],
      },
      features: {
        hero_src: '/images/about_binary.png',
        hero_alt: 'about_binary',
        overline: 'What we do',
        title: 'We Transform Businesses',
        subtitle:
          'We assist enterprise clients in their digital transformation by applying established and emerging technologies into their core business models.',
        items: [
          {
            avatar_src: '/images/about_shape_circle_radial.svg',
            avatar_alt: 'Three circles',
            overline: '01',
            title: 'Design a new product',
            subtitle:
              'We create human-centred designs focused on driving conversions and achieving business goals.',
          },
          {
            avatar_src: '/images/about_shape_squares.svg',
            avatar_alt: 'Three squares',
            overline: '02',
            title: 'Launch a new company',
            subtitle:
              'Launch your MVP at start-up speed with an expert team of designers and developers.',
          },
          {
            avatar_src: '/images/about_shape_square_with_circle.svg',
            avatar_alt: 'Square with two circles',
            overline: '03',
            title: 'Scale up development',
            subtitle:
              'Our team works directly with you to boost your development speed and scale.',
          },
          {
            avatar_src: '/images/about_shape_circles.svg',
            avatar_alt: 'Three overlapping circles',
            overline: '04',
            title: 'Improve a current system',
            subtitle:
              "Identify areas for automation and improve efficiency so you can spend more time on what's important.",
          },
        ],
      },
      cta: {
        hero_src: '/images/about_nodes_above_city.png',
        title: 'We Design & Develop Custom Software for Enterprises',
        hero_alt: 'Laser net over city',
        subtitle:
          'Our team of consultants, designers and engineers live and breathe digital services to deliver best-in-class technological solutions targeted at enterprise growth and digitalization.',
        buttons: [
          {
            overline: 'Our Mission',
            title: 'Enabling Smarter Businesses',
            href: routeConfig.SERVICES,
          },
        ],
      },
      gallery: {
        overline: 'Our Clients',
        title: 'Let your customers take the reign',
        subtitle:
          'We assist enterprise clients in their digital transformation by applying established and emerging technologies into their core business models.',
      },
      stats: {
        hero_src: '/images/contact_world_map_in_dots.svg',
        hero_alt: 'contact_world_map_in_dots',
        overline: 'Our Locations',
        title: 'Accelerating Asia',
        subtitle:
          '{appTitle} is a global provider of business consulting services and IT solutions, enterprise application development and IT infrastructure services.',
        items: [
          {
            title: '100+',
            overline: 'Projects',
          },
          {
            title: '6+',
            overline: 'Years',
          },
          {
            title: '∞',
            overline: 'Possibilities',
            titleProps: {
              sx: {
                '&&': { fontSize: 'h2.fontSize' },
                width: '100%',
                height: 24,
                position: 'relative',
                top: -8,
                lineHeight: '1',
              },
            },
          },
        ],
        buttons: [
          {
            overline: 'Where we are',
            title: 'Locate an Office',
            href: routeConfig.CONTACT,
          },
        ],
      },
      secondaryHero: {
        hero_src: '/images/about_working_in_office.png',
        hero_alt: 'People working in an office',
        overline: 'Careers',
        title: 'Thinkers & Tinkerers Coming Together',
        subtitle:
          'We’ve assembled some of the brightest minds in business, technology and design. With our diversity of expertise, we’re able to deliver the highest quality software that our industry has seen.',
        buttons: [
          {
            overline: 'Careers',
            title: 'Explore Careers',
            href: routeConfig.CAREERS,
          },
        ],
      },
    },
  },
  ...MOCK_COMMON_PAGES,
  {
    is_hidden_from_nav: true,
    title: 'Home',
    slug: 'home',
    subtitle: 'Discover the agile process we use to build digital products',
    seo_title: '{appTitle} - Custom Software Development',
    seo_description:
      'Empower your business with strategic technology and design solutions. Define strategy, create exceptional experiences, and reinvent digitally.',
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
        title: 'Enterprise Technology Consulting',
        titleProps: {
          component: 'h1',
        },
        subtitle:
          'From ideation to implementation, we specialize in crafting customized software solutions that empower businesses to drive innovation, optimize processes, and achieve their strategic objectives. ',
        maxWidth: 'lg',
        center: true,
        items: [
          {
            fa_icon: 'fa-people-group',
            title: 'Advisory',
            subtitle:
              "Unlock growth and success with {appTitle}'s business advisory services.",
            href: `${routeConfig.SERVICES}/advisory`,
          },
          {
            fa_icon: 'fa-cloud-binary',
            title: 'Engineering',
            subtitle:
              'Engage our engineering services for insights, innovation, and data-driven decisions.',
            href: `${routeConfig.SERVICES}/engineering`,
          },
          {
            fa_icon: 'fa-chart-mixed',
            title: 'Data',
            subtitle:
              'Data services that drive growth. Gain insights, make informed decisions.',
            href: `${routeConfig.SERVICES}/data`,
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
              'At the core of {appTitle} is a software engineering team specialising in ReactJS, GraphQL, NodeJS, and the extended JavaScript ecosystem.',
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
        hero_alt: 'Laser net over city',
        title: 'Custom Business Software Made for Market Leaders',
        subtitle:
          'We build modern system architectures and scalable applications that radically transform business performance.',
        buttonProps: { href: '{routes.SERVICES}' },
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
              'What industries do you cater to with your technology consulting services?',
            content:
              'We serve a wide range of industries, including finance, healthcare, retail, manufacturing, and more. Our expertise in enterprise software development allows us to tailor solutions to meet the unique needs of each industry.',
          },
          {
            key: 'how-it-works-2',
            title:
              'What is the typical timeline for developing an enterprise software solution?',
            content:
              'The timeline for developing an enterprise software solution can vary depending on the complexity of the project and specific client requirements. We work closely with our clients to define project milestones and provide realistic timelines based on thorough analysis and planning. Our goal is to deliver high-quality solutions within a reasonable timeframe.',
          },
          {
            key: 'how-it-works-3',
            title:
              'Can you help us integrate our existing systems with the new software solutions?',
            content:
              'Absolutely. Our technology consulting services include seamless integration of new software solutions with your existing systems. We have experience working with various platforms and technologies, enabling us to create efficient and scalable integrations that streamline your business processes and enhance overall productivity.',
          },
          {
            key: 'how-it-works-4',
            title: 'What industries do you have experience working with?',
            content: 'We have experience working with a wide range of industries, including finance, healthcare, e-commerce, manufacturing, and more. Our team of experts understands the unique challenges and requirements of each industry and can tailor our solutions to meet your specific business needs.',
          },
          {
            key: 'how-it-works-5',
            title: 'How do you ensure the security and privacy of our data?',
            content: 'Data security and privacy are top priorities for us. We follow industry best practices and comply with data protection regulations to ensure the highest levels of security and privacy for your data. We implement robust security measures, conduct regular security audits, and provide secure hosting options to safeguard your valuable information.',
          },
          {
            key: 'how-it-works-6',
            title: 'What is your approach to project management and communication?',
            content: 'We believe in transparent and effective project management and communication. We assign dedicated project managers who act as a single point of contact throughout the project. They ensure regular communication, provide project updates, and address any concerns or queries promptly. We also utilize project management tools and methodologies to streamline collaboration and ensure successful project delivery.',
          },
          {
            key: 'how-it-works-7',
            title: 'How do you handle scalability and future growth considerations in your software solutions?',
            content: 'We design our software solutions with scalability and future growth in mind. We leverage flexible architectures and scalable technologies to accommodate future expansion and increasing user demands. Our team assesses your business requirements and anticipates future needs to develop solutions that can adapt and grow with your organization.',
          },
          {
            key: 'how-it-works-8',
            title: 'What is your approach to post-development support and maintenance?',
            content: 'Our relationship with clients extends beyond development. We offer comprehensive post-development support and maintenance services to ensure the smooth operation of your software solutions. We provide timely updates, bug fixes, performance optimization, and ongoing support to address any issues that may arise and ensure the long-term success of your software.',
          },
          {
            key: 'how-it-works-9',
            title: 'What sets One X Group apart from other technology consulting firms?',
            content: 'At One X Group, we distinguish ourselves through our deep industry expertise, commitment to excellence, and personalized approach. We take the time to understand your business, challenges, and goals, and we tailor our solutions to meet your specific needs. Our experienced team combines technical proficiency with a customer-centric mindset, ensuring that we deliver high-quality solutions that drive tangible business outcomes.',
          },
          {
            key: 'how-it-works-10',
            title: 'What is your pricing model for technology consulting services?',
            content: 'Our pricing model is flexible and depends on the scope and complexity of the project. We offer competitive rates and work closely with our clients to develop pricing structures that align with their budget and requirements. We provide transparent and detailed cost estimates upfront, ensuring there are no surprises along the way.',
          }
        ],
      },
      cta: {
        hero_src: '/images/about_nodes_above_city.png',
        title: 'We Design & Develop Custom Software for Enterprises',
        hero_alt: 'Laser net over city',
        subtitle:
          'Our team of consultants, designers and engineers live and breathe digital services to deliver best-in-class technological solutions targeted at enterprise growth and digitalization.',
        buttons: [
          {
            overline: 'Our Mission',
            title: 'Enabling Smarter Businesses',
            href: routeConfig.SERVICES,
          },
        ],
      },
    },
  },
  {
    title: 'Mission',
    slug: 'mission',
    subtitle: 'Find out how we seek to create change that matters.',
  },
  {
    title: 'News',
    slug: 'news',
    subtitle:
      'Stay up to date with the latest trends in the digital landscape.',
  },
  {
    title: 'Resources',
    slug: 'resources',
    subtitle:
      'Access our curated resource list for tips and tricks on how you can grow your business.',
  },
  { title: 'Newsletter', slug: 'newsletter', is_hidden_from_nav: true },
  { title: 'Ecosystem', slug: 'ecosystem', is_hidden_from_nav: true },
]

const MOCK_TECH_PAGES = [
  {
    title: 'About',
    slug: 'about',
    subtitle:
      'Learn more about the driving force behind our mission, vision, and purpose.',
    sections: {
      hero: {
        hero_src: '/images/about_hero.png',
        hero_alt: 'hero',
        overline: '{appTitle}',
        title: 'Delivering Modern Frontend Solutions for Enterprises',
        buttons: [
          {
            overline: 'What we do',
            title: 'Smarter Businesses',
            href: routeConfig.SERVICES,
          },
          {
            overline: 'Who we are',
            title: 'Business Software Experts',
            href: routeConfig.CAREERS,
          },
        ],
      },
      summary: {
        hero_src: '/images/about_banner_1.png',
        hero_alt: 'Laser net',
        title:
          'We believe in enhancing data-driven decision-making with intuitive dashboard frontends.',
        subtitle:
          '{appTitle} is a software development service provider, specialized in modern frontend development services for leading enterprises in {localeTitle}.',
        buttons: [
          {
            overline: 'Who we are',
            title: 'Business Software Experts',
            href: routeConfig.CAREERS,
          },
        ],
      },
      callout: {
        hero_src: '/images/about_banner_2.png',
        hero_alt: 'hero',
        title:
          'We are here to elevate enterprise digital capability with exceptional user experiences.',
        subtitle:
          'At our core, we believe in the power of outstanding user experiences to elevate enterprise digital capability to new heights, driving growth, and fostering meaningful connections between businesses and their users.',
        buttons: [
          {
            overline: 'Our Mission',
            title: 'Enabling Smarter Businesses',
            href: routeConfig.SERVICES,
          },
        ],
      },
      features: {
        hero_src: '/images/about_binary.png',
        hero_alt: 'about_binary',
        overline: 'What we do',
        title: 'Modernizing the Enterprise User Experience',
        subtitle:
          'We assist enterprise clients with their digital transformation through providing high-performing, on-demand frontend teams.',
        items: [
          {
            avatar_src: '/images/about_shape_circle_radial.svg',
            avatar_alt: 'Three circles',
            overline: '01',
            title: 'User Interface Development',
            subtitle:
              'Create visually appealing and user-friendly interfaces that improve user experience and drive engagement.',
          },
          {
            avatar_src: '/images/about_shape_squares.svg',
            avatar_alt: 'Three squares',
            overline: '02',
            title: 'Modern Frontend Engineering',
            subtitle:
              'Develop rich user interfaces and experiences for web applications using modern technologies and frameworks.',
          },
          {
            avatar_src: '/images/about_shape_square_with_circle.svg',
            avatar_alt: 'Square with two circles',
            overline: '03',
            title: 'Product Team Augmentation',
            subtitle:
              'Providing enterprises and product owners with the frontend development talent they need to achieve their goals.',
          },
          {
            avatar_src: '/images/about_shape_circles.svg',
            avatar_alt: 'Three overlapping circles',
            overline: '04',
            title: 'Software Architecture R&D',
            subtitle:
              'Explore new techniques and technologies to design and develop robust and scalable software systems.',
          },
        ],
      },
      cta: {
        hero_src: '/images/about_banner_3.png',
        title: 'We Build Digital Solutions with Enterprises, for Enterprises',
        hero_alt: 'Laser net over city',
        subtitle:
          'Our team of consultants, designers and engineers live and breathe digital services to deliver best-in-class technological solutions targeted at enterprise growth and digitalization.',
        buttons: [
          {
            overline: 'Our Mission',
            title: 'Enabling Smarter Businesses',
            href: routeConfig.SERVICES,
          },
        ],
      },
      gallery: {
        overline: 'Our Clients',
        title: 'Trusted by Product Teams at',
        subtitle:
          '{appTitle} empowers enterprise product teams with trusted frontend development expertise and exceptional dashboard user interfaces.',
      },
      stats: {
        hero_src: '/images/contact_world_map_in_dots.svg',
        hero_alt: 'contact_world_map_in_dots',
        overline: 'Our Locations',
        title: 'Global Frontend Delivery Services',
        subtitle:
          '{appTitle} stands at the forefront of global frontend development services, working hand-in-hand with enterprises to deliver innovative solutions that optimize user experiences and fuel their digital transformation journey.',
        items: [
          {
            title: '100+',
            overline: 'Projects',
          },
          {
            title: '6+',
            overline: 'Years',
          },
          {
            title: '∞',
            overline: 'Possibilities',
            titleProps: {
              sx: {
                '&&': { fontSize: 'h2.fontSize' },
                width: '100%',
                height: 24,
                position: 'relative',
                top: -8,
                lineHeight: '1',
              },
            },
          },
        ],
        buttons: [
          {
            overline: 'Where we are',
            title: 'Locate an Office',
            href: routeConfig.CONTACT,
          },
        ],
      },
      secondaryHero: {
        hero_src: '/images/about_working_in_office.png',
        hero_alt: 'People working in an office',
        overline: 'Careers',
        title: 'Empower Enterprises with Extraordinary Experiences',
        subtitle:
          'Step into {appTitle}, a vibrant hub at the forefront of modern frontend development and dashboard user experiences for enterprises. Be part of a team working to revolutionize user experiences and empower enterprises with extraordinary software solutions.',
        buttons: [
          {
            overline: 'Careers',
            title: 'Explore Careers',
            href: routeConfig.CAREERS,
          },
        ],
      },
    },
  },
  ...MOCK_COMMON_PAGES,
  {
    is_hidden_from_nav: true,
    title: 'Home',
    slug: 'home',
    subtitle: 'Discover the agile process we use to build digital products',
    seo_title: '{appTitle} - Enterprise Frontend Development Services',
    seo_description:
      "Get exceptional Enterprise Frontend Development Services. Scalable, efficient, and visually stunning solutions tailored to your enterprise's unique needs.",
    sections: {
      hero: {
        overline: '{appTitle}',
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
        title: 'Accelerate Product Delivery',
        subtitle:
          '{appTitle} empowers enterprise businesses with leading-edge frontend development and best practices. Start in just weeks with our cloud-certified Node.js, React, and Typescript teams.',
        maxWidth: 'xl',
        center: true,
        items: [
          {
            fa_icon: 'fa-bolt',
            title: 'Accelerate Development',
            subtitle:
              'Create visually appealing and user-friendly interfaces that improve user experience and drive engagement.',
            href: `${routeConfig.SERVICES}/accelerate-development`,
          },
          {
            fa_icon: 'fa-code',
            title: 'Modern Frontend Engineering',
            subtitle:
              'Develop rich user interfaces and experiences for web applications using modern technologies and frameworks.',
            href: `${routeConfig.SERVICES}/modern-frontend-engineering`,
          },
          {
            fa_icon: 'fa-users',
            title: 'Product Team Augmentation',
            subtitle:
              'Providing enterprises and product owners with the frontend development talent they need to achieve their goals.',
            href: `${routeConfig.SERVICES}/product-team-augmentation`,
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our Approach',
        subtitle:
          'Our steadfast and meticulous approach towards our work ensures the delivery of superior software solutions for enterprises seeking digital transformation.',
        items: [
          {
            fa_icon: 'fa-check',
            title: 'Agile Development Methodology',
            subtitle:
              'We follow an agile development approach, enabling us to quickly adapt to changing business needs and deliver software solutions with maximum efficiency.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Cutting-Edge Technologies',
            subtitle:
              'Our team of experts stays up-to-date with the latest technologies and tools, allowing us to leverage the most advanced solutions for your enterprise software development projects.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Customized Solutions',
            subtitle:
              "We understand that every business is unique, and we tailor our software solutions to meet your specific requirements, ensuring they align seamlessly with your organization's goals and processes.",
          },
          {
            fa_icon: 'fa-tasks',
            title: 'Streamlined Project Management',
            subtitle:
              'With our meticulous project management practices, we ensure smooth collaboration, transparent communication, and timely delivery of your software development projects.',
          },
          {
            fa_icon: 'fa-check-circle',
            title: 'Quality Assurance and Testing',
            subtitle:
              'We have a dedicated quality assurance team that performs rigorous testing throughout the development process, ensuring the reliability, security, and performance of your software solutions.',
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Scalability and Future-Proofing',
            subtitle:
              'Our software solutions are designed to be scalable, allowing your business to grow and adapt without limitations. We also consider future technologies and trends to future-proof your software and keep it ahead of the curve.',
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
              'At the core of {appTitle} is a software engineering team specialising in ReactJS, GraphQL, NodeJS, and the extended JavaScript ecosystem.',
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
        hero_alt: 'Laser net over city',
        title: 'Custom Business Software Made for Market Leaders',
        subtitle:
          'We build modern system architectures and scalable applications that radically transform business performance.',
        buttonProps: { href: '{routes.SERVICES}' },
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
        hero_src: '/images/two_men_pointing_at_screen.png',
        hero_alt: 'Software developers working on a laptop',
        overline: 'Get Started',
        title: 'Partnering with {appTitle}',
        subtitle:
          '{appTitle} partners with enterprise clients to create solutions to the toughest software problems. Focusing on JavaScript as our core technology, we utilize React, React Native, NodeJS, GraphQL, and the extended JavaScript ecosystem to build web apps, mobile apps, cloud services, open source software, and more. Our approach is tailored to each product, so we will always work with your team to select the technologies best suited to your needs. We excel in web, mobile and cloud platform development and can apply our expertise to your product, no matter where it is in the product lifecycle.',
      },
    },
  },
  {
    title: 'News',
    slug: 'news',
    subtitle:
      'Stay up to date with the latest trends in the digital landscape.',
  },
].map((page) => ({
  ...MOCK_PAGE,
  ...page,
}))

export const MOCK_DATA_PAGES = [
  {
    title: 'About',
    slug: 'about',
    seo_title: 'About',
    subtitle:
      'Learn more about the driving force behind our mission, vision, and purpose.',
    sections: {
      hero: {
        hero_src: '/images/about_hero.png',
        hero_alt: 'hero',
        overline: 'Greetings',
        title: 'Empowering Enterprises with Data-Driven Innovations',
        buttons: [
          {
            overline: 'What we do',
            title: 'Smarter Businesses',
            href: routeConfig.SHOWCASES,
          },
          {
            overline: 'Who we are',
            title: 'Business Software Experts',
            href: routeConfig.HOME,
          },
        ],
      },
      cta: {
        hero_src: '/images/about_banner_3.png',
        title: 'Enterprise-Driven Data to build Enterprise-Focused Solutions',
        hero_alt: 'Laser net over city',
        subtitle:
          'Our team of skilled consultants, designers, and engineers is dedicated to using leading data solutions to deliver transformative outcomes at an enterprise-scale.',
        buttons: [
          {
            overline: 'Our Mission',
            title: 'Enabling Smarter Businesses',
            href: routeConfig.SERVICES,
          },
        ],
      },
      summary: {
        hero_src: '/images/about_banner_1.png',
        hero_alt: 'Laser net',
        title:
          'We believe in harnessing the power of data to transform and digitalize enterprises.',
        subtitle:
          '{appTitle} is a leading data science service provider, specializing in delivering advanced analytics and AI solutions for enterprises in {localeTitle}.',
        buttons: [
          {
            overline: 'Who we are',
            title: 'Business Software Experts',
            href: routeConfig.CAREERS,
          },
        ],
      },
      callout: {
        hero_src: '/images/about_banner_2.png',
        hero_alt: 'hero',
        title: 'Unlocking the potential of data in the digital era.',
        subtitle:
          'We are dedicated to leveraging data science to fuel digital innovation and empower businesses to thrive in the data-driven economy.',
        buttons: [
          {
            overline: 'Our Mission',
            title: 'Enabling Smarter Businesses',
            href: routeConfig.SERVICES,
          },
        ],
      },
      features: {
        hero_src: '/images/about_binary.png',
        hero_alt: 'about_binary',
        overline: 'What we do',
        title: 'Transformational Data Solutions for Modern Enterprises ',
        subtitle:
          'We empower enterprise clients through cutting-edge data science solutions that drive innovation and growth in the digital landscape.',
        items: [
          {
            avatar_src: '/images/about_shape_circle_radial.svg',
            avatar_alt: 'Three circles',
            overline: '01',
            title: 'Advanced Data Analytics',
            subtitle:
              'Harness the power of your enterprise data with advanced analytics techniques, uncovering valuable insights to drive data-informed decision-making and optimize business processes.',
          },
          {
            avatar_src: '/images/about_shape_squares.svg',
            avatar_alt: 'Three squares',
            overline: '02',
            title: 'AI-Powered Solutions',
            subtitle:
              'Leverage the potential of artificial intelligence to develop intelligent systems, predictive models, and automated processes that revolutionize the way your enterprise operates.',
          },
          {
            avatar_src: '/images/about_shape_square_with_circle.svg',
            avatar_alt: 'Square with two circles',
            overline: '03',
            title: 'Data Strategy and Consulting',
            subtitle:
              'Our expert consultants work closely with your organization to develop tailored data strategies, ensuring data governance, privacy, and security while maximizing the value of your data assets.',
          },
          {
            avatar_src: '/images/about_shape_circles.svg',
            avatar_alt: 'Three overlapping circles',
            overline: '04',
            title: 'Machine Learning Algorithms',
            subtitle:
              'Utilize machine learning algorithms to build robust models that enhance forecasting accuracy, anomaly detection, recommendation systems, and other critical business applications.',
          },
        ],
      },
      gallery: {
        overline: 'Our Clients',
        title: 'Elevating Enterprise Digital Capabilities',
        subtitle: 'Transforming how enterprises work with data.',
      },
      stats: {
        hero_src: '/images/contact_world_map_in_dots.svg',
        hero_alt: 'contact_world_map_in_dots',
        overline: 'Our Locations',
        title: 'Global Data for Global Solutions',
        subtitle:
          'We stand at the forefront of global enterprise data science and AI solutions, working hand-in-hand with enterprises to deliver innovative data-driven solutions that fuel their digital transformation journey.',
        items: [
          {
            title: '100+',
            overline: 'Projects',
          },
          {
            title: '6+',
            overline: 'Years',
          },
          {
            title: '∞',
            overline: 'Possibilities',
            titleProps: {
              sx: {
                '&&': { fontSize: 'h2.fontSize' },
                width: '100%',
                height: 24,
                position: 'relative',
                top: -8,
                lineHeight: '1',
              },
            },
          },
        ],
        buttons: [
          {
            overline: 'Where we are',
            title: 'Locate an Office',
            href: routeConfig.CONTACT,
          },
        ],
      },
      secondaryHero: {
        hero_src: '/images/about_working_in_office.png',
        hero_alt: 'People working in an office',
        overline: 'Careers',
        title: 'Embrace the Data-Driven Future',
        subtitle:
          'We believe that embracing data and AI is the next step for businesses all over the world. If you are curious about the future of data and AI solutions, come join us at {appTitle} to be at the forefront of change.',
        buttons: [
          {
            overline: 'Careers',
            title: 'Explore Careers',
            href: routeConfig.CAREERS,
          },
        ],
      },
    },
  },
  ...MOCK_COMMON_PAGES,
  {
    is_hidden_from_nav: true,
    title: 'Home',
    slug: 'home',
    subtitle: 'Discover the agile process we use to design digital products',
    seo_title: '{appTitle} - Data for the Future',
    seo_description:
      '{appTitle} specializes in enterprise data and AI solutions for {localeTitle}’s leading companies.',
    sections: {
      hero: {
        hero_src: '/images/about_hero.png',
        hero_alt: 'Swirl of colors',
        overline: '{appTitle}',
        title: 'Digital Transformation with Enterprise-Scale AI',
        subtitle:
          '{appTitle} specializes in enterprise data and AI solutions for {localeTitle}’s leading companies.',
      },
      benefits: {
        overline: 'What we do',
        title: 'Harnessing the Power of AI for Enterprises',
        subtitle:
          '{appTitle} empowers enterprises businesses with state-of-the-art technologies to create solutions built for the digital age.',
        maxWidth: 'xl',
        center: true,
        items: [
          {
            fa_icon: 'fa-chart-line',
            title: 'Data Strategy',
            subtitle:
              'Crafting holistic data management plans, governance, and value analysis to empower data-driven decision-making.',
            href: `${routeConfig.SERVICES}/data-strategy`,
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Data Engineering',
            subtitle:
              'Designing robust data warehousing, integration, and big data solutions for efficient storage, retrieval, and analysis.',
            href: `${routeConfig.SERVICES}/data-engineering`,
          },
          {
            fa_icon: 'fa-brain',
            title: 'AI Solutions',
            subtitle:
              'Building tailored AI models, automating processes, and providing strategic advisory for transformative business intelligence.',
            href: `${routeConfig.SERVICES}/ai-solutions`,
          },
        ],
      },
      faqs: {
        overline: '',
        title: 'FAQs',
        subtitle:
          'Discover how we transform businesses with powerful data insights and advanced AI solutions.',
        items: [
            {
              key: 'data-science-1',
              title: 'What experience and expertise do you have in data science?',
              content: 'Our data science team has extensive experience in leveraging data to derive actionable insights and drive business outcomes. We have expertise in various data science techniques, including machine learning, statistical analysis, and data visualization. Our team stays updated with the latest advancements in the field to deliver cutting-edge data solutions to our clients.',
            },
            {
              key: 'data-science-2',
              title: 'How do you ensure that the data solutions you develop meet our specific requirements?',
              content: 'We take a collaborative approach to data science projects, working closely with our clients to understand their unique business needs and goals. We conduct thorough data analysis and exploration to gain insights into your data and identify relevant patterns. Based on this analysis, we develop customized data solutions that align with your specific requirements and deliver the desired outcomes.',
            },
            {
              key: 'data-science-3',
              title: 'How do you ensure the quality and accuracy of the data solutions you develop?',
              content: 'We have a robust quality assurance process in place to ensure the accuracy and reliability of the data solutions we develop. Our team follows rigorous data cleaning, preprocessing, and validation techniques to ensure the integrity of the data. We also conduct thorough testing and validation of our models and algorithms to ensure their performance and accuracy.',
            },
            {
              key: 'data-science-4',
              title: 'What industries do you have experience working with in terms of data science?',
              content: 'Our data science team has experience working with diverse industries, including finance, healthcare, retail, and manufacturing. We understand the unique challenges and requirements of different industries and have successfully delivered data solutions that address industry-specific needs. Our industry experience enables us to provide valuable insights and tailored data solutions to our clients.',
            },
            {
              key: 'data-science-5',
              title: 'How do you handle project management and communication during data science projects?',
              content: 'We follow a structured project management approach during data science projects. We work closely with our clients to define project objectives, milestones, and deliverables. We use project management tools to track progress, manage tasks, and facilitate communication. We schedule regular meetings and provide status updates to ensure transparent communication and collaboration throughout the project.',
            },
            {
              key: 'data-science-6',
              title: 'How do you ensure the security and privacy of our data during data science projects?',
              content: 'Data security and privacy are of utmost importance to us. We adhere to strict data protection protocols and follow industry best practices to ensure the security and confidentiality of your data. We implement robust data access controls, encryption techniques, and secure storage solutions to safeguard your data throughout the project lifecycle.',
            },
            {
              key: 'data-science-7',
              title: 'What is your approach to project pricing and timelines for data science services?',
              content: 'Our pricing model for data science services is based on the complexity of the project, the scope of work, and the level of customization required. We provide detailed cost estimates and timelines upfront, and we work closely with our clients to align our services with their budget and project goals. Our goal is to deliver high-quality data solutions within the agreed-upon timeline and budget.',
            },
            {
              key: 'data-science-8',
              title: 'What is your experience in developing enterprise data and AI solutions?',
              content: 'We have extensive experience in developing enterprise data and AI solutions for various industries. Our team has worked on projects involving data integration, data governance, predictive analytics, and AI-driven automation. We understand the challenges and opportunities that enterprises face in leveraging their data assets and strive to deliver solutions that drive business growth and transformation.',
            },
            {
              key: 'data-science-9',
              title: 'What is your approach to project management in data science projects?',
              content: 'We follow an agile project management approach in data science projects, allowing for flexibility and iterative development. We break down projects into manageable tasks and set achievable milestones. We prioritize close collaboration with our clients, seeking their input and feedback throughout the project. Regular progress updates and transparent communication ensure that the project stays on track and meets the desired objectives.',
            },
            {
              key: 'data-science-10',
              title: 'What is your pricing model for data science services and AI solutions?',
              content: 'Our pricing model for data science services and AI solutions is tailored to the specific requirements of each project. We offer flexible pricing options, including fixed-price and time-and-materials models. We work closely with our clients to understand their budget constraints and provide cost-effective solutions that deliver maximum value.',
            },
        ],
      },
      cta: {
        hero_src: '/images/two_men_pointing_at_screen.png',
        hero_alt: 'Software developers working on a laptop',
        overline: 'Get Started',
        title: 'Partnering with {appTitle}',
        subtitle:
          "{appTitle} collaborates with enterprise-level organizations to harness the power of data and artificial intelligence. We specialize in delivering tailored data science services and AI solutions that empower your business to make data-driven decisions and gain a competitive edge. Our approach centers around understanding your unique data challenges and customizing our solutions to meet those specific needs. We excel in transforming raw data into actionable insights and designing AI models that automate complex processes and enhance decision-making. Whether you're just beginning your data journey or looking to optimize existing data systems, our expertise in data science and AI can propel your business towards a future driven by data and intelligence. Together, we can unlock the potential of your data, enabling your enterprise to excel in the evolving digital landscape.",
      },
      features: {
        overline: 'What we do',
        title: 'Our Approach',
        subtitle:
          'Our data-focused approach ensures the delivery of robust data science and AI solutions for businesses ready to harness the power of their data and gain a competitive edge.',
        items: [
          {
            fa_icon: 'fa-database',
            title: 'Data Collection and Processing',
            subtitle:
              'We source, cleanse, and structure your data, turning raw information into valuable, usable assets ready for analysis and modeling.',
          },
          {
            fa_icon: 'fa-chart-bar',
            title: 'Data Analysis',
            subtitle:
              'We delve deep into your data, using statistical techniques and data mining to uncover hidden patterns, correlations, and insights that can inform strategic decisions.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Predictive Modeling',
            subtitle:
              'We utilize machine learning and AI algorithms to create predictive models, helping you forecast future trends, behaviors, and outcomes.',
          },
          {
            fa_icon: 'fa-brain',
            title: 'AI Solutions',
            subtitle:
              'We design and implement AI solutions that automate tasks, improve efficiency, and unlock new possibilities for your business. Our solutions range from machine learning models to natural language processing and computer vision applications.',
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Data Visualization',
            subtitle:
              'We present complex data findings in easy-to-understand visual formats, helping your team understand and make informed decisions based on the insights extracted from your data.',
          },
          {
            fa_icon: 'fa-cog',
            title: 'Solution Optimization',
            subtitle:
              'We conduct continuous testing and optimization of our data science and AI solutions to ensure they perform effectively, deliver accurate results, and meet your business objectives.',
          },
        ],
      },
    },
  },
].map((page) => merge({}, MOCK_DATA_PAGE, page))

export const MOCK_DESIGN_PAGES = [
  {
    title: 'About',
    slug: 'about',
    seo_title: 'About',
    subtitle:
      'Learn more about the driving force behind our mission, vision, and purpose.',
    sections: {
      hero: {
        hero_src: '/images/about_hero.png',
        hero_alt: 'hero',
        overline: 'Greetings',
        title: 'Designing Digital Innovations for Enterprises',
        buttons: [
          {
            overline: 'What we do',
            title: 'Smarter Businesses',
            href: routeConfig.SHOWCASES,
          },
          {
            overline: 'Who we are',
            title: 'Enterprise Design Experts',
            href: routeConfig.HOME,
          },
        ],
      },
      cta: {
        hero_src: '/images/about_banner_3.png',
        title: 'Transforming Enterprises with Exceptional Design Solutions',
        hero_alt: 'Laser net over city',
        subtitle:
          'Our team of skilled consultants, designers, and engineers is dedicated to delivering best-in-class UI/UX services tailored to meet the unique needs of enterprises.',
        buttons: [
          {
            overline: 'Our Mission',
            title: 'Enabling Smarter Businesses',
            href: routeConfig.SERVICES,
          },
        ],
      },
      summary: {
        hero_src: '/images/about_banner_1.png',
        hero_alt: 'Laser net',
        title:
          'We believe in creating designs that revolutionize the way enterprises think and operate.',
        subtitle:
          '{appTitle} is a UI/UX service provider, specialized in providing enterprise product designs and UX workshops for leading enterprises in {localeTitle}.',
        buttons: [
          {
            overline: 'Who we are',
            title: 'Enterprise Design Experts',
            href: routeConfig.CAREERS,
          },
        ],
      },
      callout: {
        hero_src: '/images/about_banner_2.png',
        hero_alt: 'hero',
        title: 'We are here to ignite the power of design in the digital era.',
        subtitle:
          'We are on a mission to unlock the full potential of the digital economy through exceptional UI/UX solutions.',
        buttons: [
          {
            overline: 'Our Mission',
            title: 'Enabling Smarter Businesses',
            href: routeConfig.SERVICES,
          },
        ],
      },
      features: {
        hero_src: '/images/about_binary.png',
        hero_alt: 'about_binary',
        overline: 'What we do',
        title: 'Re-Imagining Designs for Modern Enterprises',
        subtitle:
          'We assist enterprise clients in their digital transformation through targeted digital designs that solve problems at the speed and scale of the modern enterprise.',
        items: [
          {
            avatar_src: '/images/about_shape_circle_radial.svg',
            avatar_alt: 'Three circles',
            overline: '01',
            title: 'Optimize Existing User Interface',
            subtitle:
              'We conduct in-depth, user-centric analysis of your current design to identify areas for improvement and automation, enhancing efficiency and streamlining workflows for your team and users.',
          },
          {
            avatar_src: '/images/about_shape_squares.svg',
            avatar_alt: 'Three squares',
            overline: '02',
            title: 'Scaling Up the Business',
            subtitle:
              'We provide support and expertise to scale your design systems, ensuring a consistent and seamless experience for your expanding user base.',
          },
          {
            avatar_src: '/images/about_shape_square_with_circle.svg',
            avatar_alt: 'Square with two circles',
            overline: '03',
            title: 'Empowering Teams',
            subtitle:
              'Our interactive workshops equip product teams with the skills and knowledge to create exceptional user experiences, fostering a user-centric mindset within your organization.',
          },
          {
            avatar_src: '/images/about_shape_circles.svg',
            avatar_alt: 'Three overlapping circles',
            overline: '04',
            title: 'Building Unique User Experiences',
            subtitle:
              'We craft personalized designs that captivate users, driving engagement and conversions while aligning with your specific business goals.',
          },
        ],
      },
      gallery: {
        overline: 'Our Clients',
        title: 'Designing for Product Teams',
        subtitle:
          'Our designs seek to help clients focus on what really matters.',
      },
      stats: {
        hero_src: '/images/contact_world_map_in_dots.svg',
        hero_alt: 'contact_world_map_in_dots',
        overline: 'Our Locations',
        title: 'Designs that Work Anywhere, Everywhere',
        subtitle:
          'We stand at the forefront of global enterprise design development, working hand-in-hand with enterprises to deliver innovations that can fuel their digital transformation journey. ',
        items: [
          {
            title: '100+',
            overline: 'Projects',
          },
          {
            title: '6+',
            overline: 'Years',
          },
          {
            title: '∞',
            overline: 'Possibilities',
            titleProps: {
              sx: {
                '&&': { fontSize: 'h2.fontSize' },
                width: '100%',
                height: 24,
                position: 'relative',
                top: -8,
                lineHeight: '1',
              },
            },
          },
        ],
        buttons: [
          {
            overline: 'Where we are',
            title: 'Locate an Office',
            href: routeConfig.CONTACT,
          },
        ],
      },
      secondaryHero: {
        hero_src: '/images/about_working_in_office.png',
        hero_alt: 'People working in an office',
        overline: 'Careers',
        title: 'Design Thinking with A Purpose',
        subtitle:
          'We believe that designing with empathy and humility can bring meaningful impact to businesses all over the world. Join us at {appTitle} to design for change, to design for better. ',
        buttons: [
          {
            overline: 'Careers',
            title: 'Explore Careers',
            href: routeConfig.CAREERS,
          },
        ],
      },
    },
  },
  ...MOCK_COMMON_PAGES,
  {
    is_hidden_from_nav: true,
    title: 'Home',
    slug: 'home',
    subtitle: 'Discover the agile process we use to design digital products',
    seo_title: '{appTitle} - Building Leading-Edge Enterprise Designs',
    seo_description:
      "{appTitle} sets the standard for top-tier, intuitive design solutions for {localeTitle}'s leading companies.",
    sections: {
      hero: {
        overline: '{appTitle}',
        title: 'Building Leading-Edge Enterprise Designs',
        subtitle:
          "{appTitle} sets the standard for top-tier, intuitive design solutions for {localeTitle}'s leading companies..",
      },
      benefits: {
        overline: 'What we do',
        title: 'Delivering Enterprise-Scale Design Solutions',
        subtitle:
          '{appTitle} empowers enterprise businesses with designs built to meet specific needs and requirements.',
        maxWidth: 'xl',
        center: true,
        items: [
          {
            fa_icon: 'fa-briefcase',
            title: 'Design Strategy',
            subtitle:
              'Providing user-centric solutions at enterprise scale and speed.',
            href: `${routeConfig.SERVICES}/design-strategy`,
          },
          {
            fa_icon: 'fa-gem',
            title: 'Enterprise Design System',
            subtitle:
              'Maximizing enterprise value through comprehensive system building.',
            href: `${routeConfig.SERVICES}/enterprise-design-system`,
          },
          {
            fa_icon: 'fa-lightbulb',
            title: 'UI/UX Design',
            subtitle:
              'Emphasizing human-centered outcomes, creating relationship-driven experiences.',
            href: `${routeConfig.SERVICES}/ui-ux-design`,
          },
        ],
      },
      faqs: {
        overline: '',
        title: 'FAQs',
        subtitle:
          'Learn how we design effective, user-driven experiences for leading enterprises.',
        items: [
            {
              key: 'how-it-works-1',
              title: 'What experience and expertise do you have in UI/UX design?',
              content: 'Our design team has extensive experience in creating intuitive and visually appealing user interfaces and engaging user experiences. We have worked with various industries and have a deep understanding of UI/UX principles, best practices, and emerging trends. We stay updated with the latest design tools and technologies to deliver cutting-edge solutions.',
            },
            {
              key: 'how-it-works-2',
              title: 'How do you ensure that the designs you create meet our specific requirements?',
              content: 'We take a collaborative approach to UI/UX design, working closely with our clients to understand their unique needs, target audience, and business goals. We conduct thorough research and analysis to gather insights and create user personas. Our iterative design process involves wireframing, prototyping, and user testing to refine the designs and align them with your requirements.',
            },
            {
              key: 'how-it-works-3',
              title: 'How do you ensure the usability and effectiveness of the user interfaces you design?',
              content: 'Usability and effectiveness are at the core of our design philosophy. We focus on creating user-centric designs that prioritize ease of use, clear navigation, and intuitive interactions. We conduct user testing sessions to gather feedback and iterate on the designs, ensuring that they are optimized for seamless user experiences and achieve your desired goals.',
            },
            {
              key: 'how-it-works-4',
              title: 'What industries do you have experience working with in terms of UI/UX design?',
              content: 'Our design team has worked across various industries, including finance, healthcare, e-commerce, and more. We understand the unique requirements and challenges of different industries and tailor our designs to meet their specific needs. Our diverse industry experience allows us to bring valuable insights and deliver UI/UX solutions that drive results.',
            },
            {
              key: 'how-it-works-5',
              title: 'How do you collaborate with clients during the design process?',
              content: 'We believe in a collaborative approach where we work closely with our clients throughout the design process. We conduct regular meetings to gather requirements, provide updates, and seek feedback. We value your input and involve you in key design decisions to ensure that the final product aligns with your vision and meets your expectations.',
            },
            {
              key: 'how-it-works-6',
              title: 'How do you ensure the consistency and branding of our enterprise product designs?',
              content: 'We pay great attention to maintaining consistency and reflecting your branding throughout the design process. We create design systems and style guides that establish a cohesive visual language, including color schemes, typography, and UI components. This ensures consistency across different screens and interactions, strengthening your brand identity.',
            },
            {
              key: 'how-it-works-7',
              title: 'Can you assist us with user testing and gathering feedback on our existing product designs?',
              content: 'Absolutely. We offer user testing services to evaluate the usability and effectiveness of your existing product designs. We conduct user interviews, usability tests, and gather feedback to identify areas for improvement. Based on the insights gathered, we provide recommendations and iterative design solutions to enhance the user experience and drive better outcomes.',
            },
            {
              key: 'how-it-works-8',
              title: 'What is your approach to conducting UX workshops for enterprise clients?',
              content: 'Our UX workshops are tailored to meet the specific needs of enterprise clients. We combine theory and practical exercises to educate and empower your team with UX design principles, methodologies, and best practices. We facilitate interactive sessions where participants learn to apply UX techniques, such as user research, persona creation, wireframing, and prototyping, to solve real-world design challenges.',
            },
            {
              key: 'how-it-works-9',
              title: 'What is your approach to enterprise product design?',
              content: 'Our approach to enterprise product design is rooted in understanding your business objectives, target audience, and market landscape. We conduct thorough research to gain insights into user needs and pain points. We then craft intuitive and visually appealing designs that align with your brand identity and deliver exceptional user experiences. We iterate based on user feedback and ensure the scalability and adaptability of the designs to meet your evolving business requirements.',
            },
            {
              key: 'how-it-works-10',
              title: 'What is your pricing model for UI/UX design services and UX workshops?',
              content: 'Our pricing model for UI/UX design services and UX workshops depends on various factors such as project complexity, scope, and timeline. We offer tailored solutions to meet your specific requirements and budget. We provide detailed proposals and cost estimates upfront, and we work closely with you to ensure transparency and alignment throughout the engagement.',
            },
        ],
      },
      cta: {
        hero_src: '/images/two_men_pointing_at_screen.png',
        hero_alt: 'Software developers working on a laptop',
        overline: 'Get Started',
        title: 'Partnering with {appTitle}',
        subtitle:
          "{appTitle} collaborates with enterprise clients to create visually captivating and intuitive user experiences. With a strong focus on UI/UX design, we specialize in crafting engaging designs for web and mobile interfaces. Our approach is centered around understanding your unique product requirements and tailoring our design solutions to meet your specific needs. We excel in translating complex ideas into visually appealing and user-friendly interfaces, ensuring seamless interactions and optimal user engagement. Whether you're at the ideation stage or looking to enhance an existing product, our expertise in UI/UX design and enterprise product designs can elevate your digital presence and drive customer satisfaction. Together, we can create designs that leave a lasting impression and set your enterprise apart in the digital landscape.",
      },
      features: {
        overline: 'What we do',
        title: 'Our Approach',
        subtitle:
          'Our user-centric approach to every project ensures the delivery of superior UI/UX solutions for enterprises seeking to embark on a transformative digital journey.',
        items: [
          {
            fa_icon: 'fa-users',
            title: 'User Research',
            subtitle:
              'We dive deep into understanding your target audience, their needs, and behaviors to develop insights that drive the creation of user-centric designs.',
          },
          {
            fa_icon: 'fa-sitemap',
            title: 'Information Architecture',
            subtitle:
              'We carefully structure and organize information to ensure intuitive navigation and seamless user flow, enhancing usability and overall user experience.',
          },
          {
            fa_icon: 'fa-magic',
            title: 'Wireframing and Prototyping',
            subtitle:
              'Through iterative design processes, we create interactive wireframes and prototypes that allow you to visualize and test the user interface before development, allowing for on-the-spot ideation and adjustments to solutions.',
          },
          {
            fa_icon: 'fa-paint-brush',
            title: 'Visual Design',
            subtitle:
              'Our talented designers blend creativity with a deep understanding of branding and aesthetics to craft visually stunning interfaces that captivate and resonate with your target audience.',
          },
          {
            fa_icon: 'fa-expand-arrows-alt',
            title: 'Interaction Design',
            subtitle:
              'We pay meticulous attention to the interactions and animations within the user interface, creating intuitive and delightful experiences that make your product stand out from the competition.',
          },
          {
            fa_icon: 'fa-check-double',
            title: 'Usability Testing',
            subtitle:
              'We conduct thorough usability testing to gather feedback and insights from real users, refining and optimizing the user interface to maximize user satisfaction and achieve business goals.',
          },
        ],
      },
    },
  },
].map((page) => merge({}, MOCK_DESIGN_PAGE, page))

export const MOCK_PAGES = {
  GROUP: MOCK_GROUP_PAGES,
  TECH: MOCK_TECH_PAGES,
  DATA: MOCK_DATA_PAGES,
  DESIGN: MOCK_DESIGN_PAGES,
}
