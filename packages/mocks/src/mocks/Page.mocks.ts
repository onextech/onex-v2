import { Page } from '@onex/types'
import { routeConfig } from '@onex/common'

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
      overline: 'Get Started',
      title: 'Partnering with {appTitle}',
      subtitle:
        '{appTitle} partners with enterprise clients to create solutions to the toughest software problems. Focusing on JavaScript as our core technology, we utilize React, React Native, NodeJS, GraphQL, and the extended JavaScript ecosystem to build web apps, mobile apps, cloud services, open source software, and more. Our approach is tailored to each product, so we will always work with your team to select the technologies best suited to your needs. We excel in web, mobile and cloud platform development and can apply our expertise to your product, no matter where it is in the product lifecycle.',
    },
  },
}
export const MOCK_DESIGN_PAGE = {
  id: 1,
  // Seo
  seo_title: 'Design',
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
      overline: 'Get Started',
      title: 'Partnering with {appTitle}',
      subtitle:
        '{appTitle} partners with enterprise clients to create solutions to the toughest software problems. Focusing on JavaScript as our core technology, we utilize React, React Native, NodeJS, GraphQL, and the extended JavaScript ecosystem to build web apps, mobile apps, cloud services, open source software, and more. Our approach is tailored to each product, so we will always work with your team to select the technologies best suited to your needs. We excel in web, mobile and cloud platform development and can apply our expertise to your product, no matter where it is in the product lifecycle.',
    },
  },
}
export const MOCK_DIGITAL_PAGE = {
  id: 1,
  // Seo
  seo_title: 'Digital',
  seo_description: 'This page is all about the technology that we use',
  // Info
  title: 'One X Digital',
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
  title: 'One X Labs',
  subtitle: 'Discover the agile process we use to build digital products',
  // Sections
  sections: {
    hero: {
      overline: 'One X Labs',
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
      "Explore One X Group's Terms of Service, guidelines, and limitations. Stay informed, comply, and find peace of mind.",
    html:
      '<h3>Overview</h3>\n' +
      '<p>By accessing the website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>\n' +
      '<h3>Use License</h3>\n' +
      '<ol type="a">\n' +
      "<li>Permission is granted to temporarily download one copy of the materials (information or software) on One X Group Pte Ltd's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:\n" +
      '<ul>\n' +
      '<li>modify or copy the materials;</li>\n' +
      '<li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>\n' +
      "<li>attempt to decompile or reverse engineer any software contained on One X Group Pte Ltd's website;</li>\n" +
      '<li>remove any copyright or other proprietary notations from the materials; or</li>\n' +
      '<li>transfer the materials to another person or "mirror" the materials on any other server.</li>\n' +
      '</ul>\n' +
      '</li>\n' +
      '<li>This license shall automatically terminate if you violate any of these restrictions and may be terminated by One X Group Pte Ltd at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</li>\n' +
      '</ol>\n' +
      '<h3>Disclaimer</h3>\n' +
      '<ol type="a">\n' +
      "<li>The materials on One X Group Pte Ltd's website are provided on an 'as is' basis. One X Group Pte Ltd makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>\n" +
      '<li>Further, One X Group Pte Ltd does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</li>\n' +
      '</ol>\n' +
      '<h3>Limitations</h3>\n' +
      "<p>In no event shall One X Group Pte Ltd or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on One X Group Pte Ltd's website, even if One X Group Pte Ltd or a One X Group Pte Ltd authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>\n" +
      '<h3>Accuracy of materials</h3>\n' +
      "<p>The materials appearing on One X Group Pte Ltd's website could include technical, typographical, or photographic errors. One X Group Pte Ltd does not warrant that any of the materials on its website are accurate, complete or current. One X Group Pte Ltd may make changes to the materials contained on its website at any time without notice. However One X Group Pte Ltd does not make ay commitment to update the materials.</p>\n" +
      '<h3>Links</h3>\n' +
      "<p>One X Group Pte Ltd has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by One X Group Pte Ltd of the site. Use of any such linked website is at the user's own risk.</p>\n" +
      '<h3>Modifications</h3>\n' +
      '<p>One X Group Pte Ltd may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>\n' +
      '<h3>Governing Law</h3>\n' +
      '<p>These terms and conditions are governed by and construed in accordance with the laws of Singapore and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>',
  },
  {
    title: 'Privacy',
    slug: 'privacy',
    is_hidden_from_nav: true,
    seo_description:
      'We value your privacy. Discover how One X Group respects your personal information through data protection, consent and protecting your rights.',
    html:
      '<h3>Overview</h3>\n' +
      "<p>Your privacy is important to us. It is One X Group Pte Ltd's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.</p>\n" +
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
        hero_alt: 'about-nodes',
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
            avatar_alt: 'shape_circle_radial',
            overline: '01',
            title: 'Design a new product',
            subtitle:
              'We create human-centred designs focused on driving conversions and achieving business goals.',
          },
          {
            avatar_src: '/images/about_shape_squares.svg',
            avatar_alt: 'shape_circle_squares',
            overline: '02',
            title: 'Launch a new company',
            subtitle:
              'Launch your MVP at start-up speed with an expert team of designers and developers.',
          },
          {
            avatar_src: '/images/about_shape_square_with_circle.svg',
            avatar_alt: 'shape_square_with_circle',
            overline: '03',
            title: 'Scale up development',
            subtitle:
              'Our team works directly with you to boost your development speed and scale.',
          },
          {
            avatar_src: '/images/about_shape_circles.svg',
            avatar_alt: 'shape_circle',
            overline: '04',
            title: 'Improve a current system',
            subtitle:
              "Identify areas for automation and improve efficiency so you can spend more time on what's important.",
          },
        ],
      },
      cta: {
        hero_src: '/images/about_nodes_above_city.png',
        hero_alt: 'about_nodes_above_city',
        title: 'We Build Digital Solutions with Enterprises, for Enterprises',
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
        hero_alt: 'about_working_in_office',
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
      'We empower our clients to build a future ready business by combining strategy, technology and design. Partner with us to define your strategy, create exceptional experiences and digitally reinvent your business.',
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
        title: 'Custom Software Development',
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
        hero_alt: 'about_nodes_above_city',
        title: 'Custom Business Software Made for Market Leaders',
        subtitle:
          'We build modern system architectures and scalable applications that radically transform business performance.',
        buttonProps: { href: '{routes.SERVICES}' },
      },
      features: {
        overline: 'What we do',
        title: 'Our Approach',
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
        title: 'We Build Digital Solutions with Enterprises, for Enterprises',
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
  { title: 'Mission', slug: 'mission' },
  { title: 'News', slug: 'news' },
  { title: 'Resources', slug: 'resources' },
  { title: 'Newsletter', slug: 'newsletter' },
  { title: 'Ecosystem', slug: 'ecosystem' },
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
        hero_src: '/images/about_nodes.png',
        hero_alt: 'about-nodes',
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
        hero_src: '/images/about_man_with_laptop_in_city.png',
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
            avatar_alt: 'shape_circle_radial',
            overline: '01',
            title: 'User Interface Development',
            subtitle:
              'Create visually appealing and user-friendly interfaces that improve user experience and drive engagement.',
          },
          {
            avatar_src: '/images/about_shape_squares.svg',
            avatar_alt: 'shape_circle_squares',
            overline: '02',
            title: 'Modern Frontend Engineering',
            subtitle:
              'Develop rich user interfaces and experiences for web applications using modern technologies and frameworks.',
          },
          {
            avatar_src: '/images/about_shape_square_with_circle.svg',
            avatar_alt: 'shape_square_with_circle',
            overline: '03',
            title: 'Product Team Augmentation',
            subtitle:
              'Providing enterprises and product owners with the frontend development talent they need to achieve their goals.',
          },
          {
            avatar_src: '/images/about_shape_circles.svg',
            avatar_alt: 'shape_circle',
            overline: '04',
            title: 'Software Architecture R&D',
            subtitle:
              'Explore new techniques and technologies to design and develop robust and scalable software systems.',
          },
        ],
      },
      cta: {
        hero_src: '/images/about_nodes_above_city.png',
        hero_alt: 'about_nodes_above_city',
        title: 'We Build Digital Solutions with Enterprises, for Enterprises',
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
        hero_alt: 'about_working_in_office',
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
      "Experience exceptional Enterprise Frontend Development Services for your business. Our expert team delivers scalable, efficient, and visually stunning frontend solutions tailored to meet your enterprise's unique needs. Harnessing the latest technologies and frameworks, we create high-performance, user-friendly applications that enhance your digital presence and drive business growth.",
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
        hero_alt: 'about_nodes_above_city',
        title: 'Custom Business Software Made for Market Leaders',
        subtitle:
          'We build modern system architectures and scalable applications that radically transform business performance.',
        buttonProps: { href: '{routes.SERVICES}' },
      },
      features: {
        overline: 'What we do',
        title: 'Our Approach',
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
        hero_src: '/images/two_men_pointing_at_screen.png',
        hero_alt: 'software developers working on a laptop',
        overline: 'Get Started',
        title: 'Partnering with {appTitle}',
        subtitle:
          '{appTitle} partners with enterprise clients to create solutions to the toughest software problems. Focusing on JavaScript as our core technology, we utilize React, React Native, NodeJS, GraphQL, and the extended JavaScript ecosystem to build web apps, mobile apps, cloud services, open source software, and more. Our approach is tailored to each product, so we will always work with your team to select the technologies best suited to your needs. We excel in web, mobile and cloud platform development and can apply our expertise to your product, no matter where it is in the product lifecycle.',
      },
    },
  },
].map((page) => ({
  ...MOCK_PAGE,
  ...page,
}))

export const MOCK_PAGES = {
  GROUP: MOCK_GROUP_PAGES,
  TECH: MOCK_TECH_PAGES,
}
