import { routeConfig } from '@onex/common'
import merge from 'lodash/merge'

import getCategoryFromCrudItem from '../utils/getCategoryFromCrudItem'
import {
  MOCK_AEL_SERVICE_CATEGORYS,
  MOCK_COASTAL_SERVICE_CATEGORYS,
  MOCK_DATA_SERVICE_CATEGORYS,
  MOCK_DESIGN_SERVICE_CATEGORYS,
  MOCK_DIGITAL_SERVICE_CATEGORYS,
  MOCK_FINX_SERVICE_CATEGORYS,
  MOCK_GOVX_SERVICE_CATEGORYS,
  MOCK_GROUP_SERVICE_CATEGORYS,
  MOCK_GVS_SERVICE_CATEGORYS,
  MOCK_SRI_SERVICE_CATEGORYS,
  MOCK_TECH_SERVICE_CATEGORYS,
} from './ServiceCategory.mocks'

export const MOCK_SERVICE_PAGE = {
  title: 'React',
  avatar_alt: '{title}',
  // Hero
  avatar_src: '/images/about_shape_circle_radial.svg',
  hero_alt: 'People working in office',
  hero_src: '/images/about_working_in_office.png',
  overline: 'Service',
  // Sections
  sections: {
    benefits: {
      title: 'Accelerate Product Delivery',
      center: true,
      items: [
        {
          title: 'Accelerate Development',
          fa_icon: 'fa-bolt',
          href: `${routeConfig.SERVICES}/accelerate-development`,
          subtitle:
            'Create visually appealing and user-friendly interfaces that improve user experience and drive engagement.',
        },
        {
          title: 'Modern Frontend Engineering',
          fa_icon: 'fa-code',
          href: `${routeConfig.SERVICES}/modern-frontend-engineering`,
          subtitle:
            'Develop rich user interfaces and experiences for web applications using modern technologies and frameworks.',
        },
        {
          title: 'Product Team Augmentation',
          fa_icon: 'fa-users',
          href: `${routeConfig.SERVICES}/product-team-augmentation`,
          subtitle:
            'Providing enterprises and product owners with the frontend development talent they need to achieve their goals.',
        },
      ],
      maxWidth: 'xl',
      overline: 'What we do',
      subtitle:
        '{appTitle} empowers enterprise businesses with leading-edge frontend development and best practices. Start in just weeks with our cloud-certified Node.js, React, and Typescript teams.',
    },
    callout: {
      title: 'We Build Digital Solutions with Enterprises, for Enterprises',
      hero_alt: 'Laser net over city',
      hero_src: '/images/about_nodes_above_city.png',
      overline: '',
      subtitle:
        'Our team of consultants, designers and engineers live and breathe digital services to deliver best-in-class technological solutions targeted at enterprise growth and digitalization.',
    },
    checklist: {
      title: `Why {appTitle} for {title}`,
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
      overline: 'Why Us',
      subtitle:
        'To deliver products of the highest quality, we follow the best practices that include code review, pair programming, test-driven development, continuous integration, and automated testing.',
    },
    cta: {
      title: 'Partnering with {appTitle}',
      hero_alt: 'Laser net over city',
      hero_src: '/images/about_nodes_above_city.png',
      overline: 'Get Started',
      subtitle:
        '{appTitle} partners with enterprise clients to create solutions to the toughest software problems. Focusing on JavaScript as our core technology, we utilize React, React Native, NodeJS, GraphQL, and the extended JavaScript ecosystem to build web apps, mobile apps, cloud services, open source software, and more. Our approach is tailored to each product, so we will always work with your team to select the technologies best suited to your needs. We excel in web, mobile and cloud platform development and can apply our expertise to your product, no matter where it is in the product lifecycle.',
    },
    faqs: {
      title: 'FAQs',
      items: [
        {
          id: 'how-it-works-1',
          title: 'What are the advantages of developing web apps with {title}?',
          content:
              'Developing web apps with {title} offers flexibility, scalability, and faster iteration. Its components streamline the process, making it easier to adapt to changing business needs while maintaining a focus on delivering key features efficiently.',
        },
        {
          id: 'how-it-works-2',
          title: 'How can {title} development benefit my existing system?',
          content:
            "{title}'s sophisticated algorithms will help to boost system performance and improve user experience.",
        },
        {
          id: 'how-it-works-3',
          title: 'What is the future of {title}?',
          content:
            '{title} is the fastest growing library used to create user interface in modern single-page applications. It is the driving force behind products of the most successful companies like Airbnb, Instagram and Netflix.',
        },
      ],
      overline: '',
      subtitle:
        'Learn how we deliver effective, value-driven technological innovations for leading enterprises.',
    },
    features: {
      title: 'Our {title} Capabilities',
      items: [
        {
          title: 'Scale up development',
          fa_icon: 'fa-watch',
          subtitle:
            'Our team works directly with you to boost your development speed and scale.',
        },
        {
          title: 'Improve a current system',
          fa_icon: 'fa-hand-holding-seedling',
          subtitle:
            "Identify areas for automation and improve efficiency so you can spend more time on what's important.",
        },
        {
          title: 'Food & Drinks',
          fa_icon: 'fa-mug-hot',
          subtitle:
            'We create human-centred designs focused on driving conversions and achieving business goals.',
        },
        {
          title: 'Live It Up',
          fa_icon: 'fa-puzzle-piece',
          subtitle:
            'Launch your MVP at start-up speed with an expert team of designers and developers.',
        },
        {
          title: 'Rewards',
          fa_icon: 'fa-guitar',
          subtitle:
            'Our team works directly with you to boost your development speed and scale.',
        },
        {
          title: 'Convenience',
          fa_icon: 'fa-table-tennis',
          subtitle:
            "Identify areas for automation and improve efficiency so you can spend more time on what's important.",
        },
      ],
      overline: 'What we do',
      subtitle:
        'To deliver products of the highest quality, we follow the best practices that include code review, pair programming, test-driven development, continuous integration, and automated testing.',
    },
    howItWorks: { title: '', items: [], overline: '', subtitle: '' },
    summary: {
      title: 'Innovation that drives real impact.',
      items: [
        {
          title:
            'In the past decade, digital transformation and innovation completely changed the way the world does business. In the decade ahead, technological, social and environmental forces will make strategic innovation essential for the survival of any business operating at scale. For many organisations, however, innovation can feel like fumbling in the dark, leading to new products and industrys that don’t contribute to the health and longevity of the business. In an increasingly complex world, strategy and creativity are the keys to successful, impactful innovation.',
        },
      ],
    },
  },
  // Seo
  seo: {
    title: '{title} Service',
    description: 'This page is all about the technology that we use',
  },
  subtitle:
    'Work with product experts with the know-how tested in 7+ industries.',
}

export const MOCK_TECH_SERVICES = [
  {
    title: 'User Interface Development',
    slug: 'user-interface-development',
    category_id: 1,
    hero_alt: 'user interface development',
    // Hero
    hero_src: '/unsplash/qC2n6RQU4Vw.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Accelerate Product Delivery',
        center: true,
        items: [
          {
            title: 'Accelerate Development',
            fa_icon: 'fa-bolt',
            href: `${routeConfig.SERVICES}/accelerate-development`,
            subtitle:
              'Create visually appealing and user-friendly interfaces that improve user experience and drive engagement.',
          },
          {
            title: 'Modern Frontend Engineering',
            fa_icon: 'fa-code',
            href: `${routeConfig.SERVICES}/modern-frontend-engineering`,
            subtitle:
              'Develop rich user interfaces and experiences for web applications using modern technologies and frameworks.',
          },
          {
            title: 'Product Team Augmentation',
            fa_icon: 'fa-users',
            href: `${routeConfig.SERVICES}/product-team-augmentation`,
            subtitle:
              'Providing enterprises and product owners with the frontend development talent they need to achieve their goals.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} empowers enterprise businesses with leading-edge frontend development and best practices. Start in just weeks with our cloud-certified Node.js, React, and Typescript teams.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is a high-quality user interface important for my business?',
            content:
              "A high-quality user interface can have a significant impact on your business's success. It can improve customer satisfaction, increase engagement, and even drive conversions.",
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your User Interface Development Service?',
            content:
              "At our User Interface Development Service, we specialize in creating beautiful, intuitive interfaces that are tailored to your business's unique needs. Our team of experts takes a user-centric approach to every project, ensuring that your interface not only looks great but also functions effectively and meets the needs of your customers. We also follow best practices for usability testing, accessibility testing, and SEO optimization, to ensure that your interface is easy to use, accessible to all users, and optimized for search engines.",
          },
          {
            id: 'faqs-3',
            title: 'How do you approach user interface design?',
            content:
              'We take a user-centric approach to user interface design, starting with user research to understand your target audience and their needs. From there, we create wireframes and prototypes to test and refine our design concepts. We also prioritize accessibility and usability testing throughout the development process, to ensure that your interface is easy to use and accessible to all users.',
          },
        ],
        subtitle:
          'Learn more about our User Interface Development Service and how we can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Custom design',
            fa_icon: 'fa-pencil-ruler',
            subtitle:
              'We create custom designs tailored to your brand and target audience, ensuring that your interface stands out from the competition.',
          },
          {
            title: 'Responsive development',
            fa_icon: 'fa-desktop',
            subtitle:
              'We develop interfaces that work seamlessly across all devices, from desktop to mobile, to ensure that your customers can access your product from anywhere.',
          },
          {
            title: 'Usability testing',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We conduct rigorous usability testing to ensure that your interface is easy to use and meets the needs of your customers.',
          },
          {
            title: 'Accessibility testing',
            fa_icon: 'fa-universal-access',
            subtitle:
              'We ensure that your interface is accessible to all users, regardless of their abilities or disabilities, by conducting thorough accessibility testing.',
          },
          {
            title: 'SEO optimization',
            fa_icon: 'fa-search',
            subtitle:
              'We optimize your interface for search engines, making it easier for your customers to find your product.',
          },
          {
            title: 'Collaboration',
            fa_icon: 'fa-code-branch',
            subtitle:
              'We work closely with your team to ensure that your interface meets your business objectives and delivers value to your customers.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'To create user interfaces of the highest quality, we follow the best practices that include user research, prototyping, usability testing, and accessibility testing.',
      },
      summary: {
        title: 'Creating user interfaces that leave a lasting impression.',
        items: [
          {
            title:
              "In today's digital age, user experience is everything. A high-quality user interface can make or break a product, and it can have a significant impact on your business's success. At our User Interface Development Service, we specialize in creating beautiful, intuitive interfaces that leave a lasting impression on your customers.",
          },
          {
            title:
              'We believe that a great user interface is more than just good looks. It should be designed with your customers in mind, making it easy for them to find what they need and complete their tasks efficiently. Our team of experts takes a user-centric approach to every project, ensuring that your interface is not only visually stunning but also functional and effective.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'User Interface Development',
      description:
        'Accelerate development with our user interface development services. Create intuitive and visually appealing interfaces for seamless user experiences.',
    },
    subtitle:
      'Work with design and development experts to create beautiful, intuitive user interfaces for your business.',
  },
  {
    title: 'API Integration Development',
    slug: 'api-integration-development',
    category_id: 1,
    hero_alt: 'Lights intertwined into a rope',
    // Hero
    hero_src: '/unsplash/pREq0ns_p_E.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'What is API integration and why is it important for my business?',
            content:
              'API (Application Programming Interface) integration is the process of connecting different software systems, applications, or platforms to enable seamless communication and data exchange between them. API integration is crucial for businesses as it helps streamline processes, reduce manual work, improve data accuracy, and facilitate better decision-making. By integrating different systems, your business can achieve better efficiency, increased productivity, and enhanced collaboration.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your API Integration Development Service?',
            content:
              'At our API Integration Development Service, we specialize in creating custom API integrations tailored to your specific needs. Our team of experienced developers ensures seamless connectivity between your systems, allowing you to streamline processes and improve efficiency. We also work closely with your team to understand your business goals and deliver an integration solution that meets your requirements and exceeds your expectations. In addition, we provide end-to-end services, including API design, development, testing, deployment, and maintenance, making the integration process as smooth as possible.',
          },
          {
            id: 'faqs-3',
            title: 'How do you approach API integration?',
            content:
              'Our approach to API integration starts with understanding your business requirements and goals. We then analyse your existing systems and identify the best way to integrate them to achieve the desired outcomes. Next, our team of experts designs and develops the APIs, ensuring they are secure, efficient, and easy to use. We also conduct thorough testing to ensure the integration works seamlessly and meets your needs. Finally, we provide ongoing maintenance and support to keep your API integrations up-to-date and performing optimally.',
          },
        ],
        subtitle:
          'Learn more about our API Integration Development Service and how we can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Custom API integration',
            fa_icon: 'fa-cogs',
            subtitle:
              'We develop custom API integrations tailored to your specific requirements, ensuring seamless connectivity between your systems.',
          },
          {
            title: 'Third-party API integration',
            fa_icon: 'fa-exchange-alt',
            subtitle:
              'We help you integrate third-party APIs into your existing systems, enabling you to leverage the power of external services and tools.',
          },
          {
            title: 'API design and development',
            fa_icon: 'fa-code',
            subtitle:
              'Our team of experts designs and develops APIs that are secure, efficient, and easy to use.',
          },
          {
            title: 'API security',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We ensure the security of your API integrations, implementing best practices to protect your data and systems.',
          },
          {
            title: 'API maintenance',
            fa_icon: 'fa-sync',
            subtitle:
              'We provide ongoing maintenance and support for your API integrations, ensuring they remain up-to-date and perform optimally.',
          },
          {
            title: 'Scalable solutions',
            fa_icon: 'fa-rocket',
            subtitle:
              'We design API integration solutions that can scale with your business, ensuring that your systems can grow with your needs.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We provide end-to-end API integration services, from design and development to testing and deployment.',
      },
      summary: {
        title: 'Efficient API integration for seamless connectivity.',
        items: [
          {
            title:
              'In an increasingly connected world, the ability to integrate different systems and platforms is essential. API integration allows your business to streamline processes, reduce manual work, and improve data accuracy. Our API Integration Development Service helps you connect your systems seamlessly, improving efficiency and enabling data-driven decision-making.',
          },
          {
            title:
              'Our team of experienced developers specializes in creating custom API integrations tailored to your specific requirements. We work closely with your team to understand your business goals and deliver an integration solution that meets your needs and exceeds your expectations.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'API Integration Development',
      description:
        'Accelerate your development with expert API integration services. Seamlessly connect and enhance your applications with robust API solutions.',
    },
    subtitle:
      'Connect and streamline your systems with seamless API integration solutions.',
  },
  {
    // Hero
    title: 'Design Library Development',
    slug: 'design-library-development',
    category_id: 1,
    hero_alt: 'Library with stairs',
    hero_src: '/unsplash/PkbZahEG2Ng.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is a design library important for my business?',
            content:
              'A design library streamlines the design and development process by providing a centralized repository of reusable components, design patterns, and guidelines. This helps your team create consistent, high-quality digital products faster and more efficiently. A design library also improves collaboration and ensures brand consistency across your digital products.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your Design Library Development Service?',
            content:
              'Our Design Library Development Service specializes in creating comprehensive design libraries tailored to your business needs. We work closely with you to understand your brand, design principles, and product requirements, and then develop a custom design library complete with reusable components, design patterns, and documentation. This enables your team to quickly and efficiently create new digital products while maintaining consistency and quality across your brand. We also assist in implementing your design library across your digital products, ensuring seamless integration and consistency.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure the design library is aligned with my brand guidelines?',
            content:
              'Our team of experts works closely with you to understand your brand guidelines, design principles, and product requirements. We then create reusable components and design patterns that adhere to your brand guidelines and are optimized for usability and accessibility. This ensures that your design library is aligned with your brand and helps maintain brand consistency across your digital products.',
          },
        ],
        subtitle:
          'Learn more about our Design Library Development Service and how we can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Design research',
            fa_icon: 'fa-pencil-ruler',
            subtitle:
              'We conduct in-depth research to understand your brand, target audience, and user interface requirements, ensuring that the design library reflects your unique identity and user needs.',
          },
          {
            title: 'Design system setup',
            fa_icon: 'fa-layer-group',
            subtitle:
              'We set up a comprehensive design system, including a library of reusable UI components, color palettes, typography guidelines, and design tokens.',
          },
          {
            title: 'Component development',
            fa_icon: 'fa-code',
            subtitle:
              'Our team develops reusable design components with clean and maintainable code, ensuring consistency and efficiency in frontend development workflows.',
          },
          {
            title: 'Pattern documentation',
            fa_icon: 'fa-clone',
            subtitle:
              'We document design patterns and guidelines to provide clear instructions and examples for implementing consistent UI elements and interactions.',
          },
          {
            title: 'Visual style definition',
            fa_icon: 'fa-paint-brush',
            subtitle:
              'We define a cohesive visual style for your organisation, including color schemes, typography choices, iconography, and spacing guidelines.',
          },
          {
            title: 'Collaboration and training',
            fa_icon: 'fa-users',
            subtitle:
              'We collaborate with your frontend development teams, providing training and support to ensure successful adoption and utilization of the design library.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our Design Library Development service encompasses a range of activities aimed at establishing and maintaining a robust design system for your organisation.',
      },
      summary: {
        title: 'Streamline your design process with a unified design library.',
        items: [
          {
            title:
              'A design library is a valuable asset for any business looking to create consistent, high-quality digital products. It serves as a centralized repository of design elements, components, and guidelines that can be easily accessed and reused across projects. At our Design Library Development Service, we specialize in creating comprehensive design libraries that streamline your design process, improve collaboration, and ensure brand consistency.',
          },
          {
            title:
              'Our team of experts works closely with you to understand your brand, design principles, and product requirements. We then develop a custom design library tailored to your needs, complete with reusable components, design patterns, and documentation. This enables your team to quickly and efficiently create new digital products while maintaining consistency and quality across your brand.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Design Library Development',
      description:
        'Accelerate your development process with our design library development services. Create consistent and efficient user interfaces for your applications.',
    },
    subtitle:
      'Partner with our experts to develop a comprehensive design library for your digital products.',
  },
  {
    // Hero
    title: 'Application Modernisation',
    slug: 'application-modernisation',
    category_id: 2,
    hero_alt: 'Aesthetic desk setup',
    hero_src: '/unsplash/jJT2r2n7lYA.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is application modernisation important for my business?',
            content:
              "Application modernisation is essential for businesses that want to stay competitive in today's fast-paced digital landscape. Upgrading legacy systems and applications enables you to improve performance, security, and maintainability, making it easier to innovate and scale. modernised applications can also lead to cost savings by reducing the resources needed to maintain outdated systems.",
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your Application modernisation service?',
            content:
              'Our Application modernisation service offers a comprehensive approach to modernising your legacy systems and applications, helping you to achieve your business goals more quickly and cost-effectively. Our team of experts has extensive experience in assessing, re-architecting, and migrating applications to modern, scalable architectures. We also leverage the latest technologies, development methodologies, and best practices to ensure that your modernised applications deliver maximum value to your business.',
          },
          {
            id: 'how-it-works-3',
            title: 'How do you approach application modernisation?',
            content:
              'We begin by assessing your existing systems and applications to identify opportunities for modernisation and establish priorities based on your business goals. We then develop a detailed roadmap outlining the steps needed to achieve your goals, setting milestones to track progress. Our team of experts re-architects your applications to leverage modern, scalable architectures, and we migrate your applications to the cloud to take advantage of flexible, scalable, and cost-effective infrastructure.',
          },
        ],
        subtitle:
          'Learn more about our Application modernisation service and how we can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Application assessment',
            fa_icon: 'fa-cogs',
            subtitle:
              'We assess your legacy applications to identify areas for improvement, evaluate technical debt, and prioritize modernisation efforts.',
          },
          {
            title: 'Architecture redesign',
            fa_icon: 'fa-layer-group',
            subtitle:
              'We redesign the application architecture to enhance scalability, modularity, and maintainability, ensuring it aligns with modern development practices.',
          },
          {
            title: 'Migration',
            fa_icon: 'fa-exchange-alt',
            subtitle:
              'We plan and execute a smooth migration process, including data migration, code refactoring, and integration with modern systems.',
          },
          {
            title: 'Performance optimization',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We optimize application performance by identifying and resolving bottlenecks, improving response times, and implementing caching strategies.',
          },
          {
            title: 'Continuous improvement',
            fa_icon: 'fa-code-branch',
            subtitle:
              'We establish DevOps practices and implement automated testing, deployment, and monitoring to ensure ongoing improvement and stability of your modernised applications.',
          },
          {
            title: 'Collaboration',
            fa_icon: 'fa-users',
            subtitle:
              'We work closely with your team, including business stakeholders and IT personnel, to ensure the modernisation process aligns with your business goals and requirements.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'To modernise your applications, we follow a comprehensive set of practices that include application assessment, architecture redesign, migration, and ongoing support.',
      },
      summary: {
        title: 'Transform your business with application modernisation.',
        items: [
          {
            title:
              'Legacy systems and applications can hold your business back, making it difficult to innovate and scale. Our Application modernisation service helps you upgrade outdated systems and applications to modern, scalable architectures that can drive business growth and fuel innovation.',
          },
          {
            title:
              'We take a comprehensive approach to application modernisation, working closely with your team to assess your existing systems, identify opportunities for improvement, and develop a detailed roadmap for modernisation. Our team of experts uses the latest technologies, development methodologies, and best practices to ensure that your modernised applications deliver maximum value to your business.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Application Modernisation',
      description:
        'modernise your applications with our frontend engineering services. Transform legacy systems into scalable, efficient, and user-friendly solutions.',
    },
    subtitle:
      'Upgrade your legacy systems and applications to modern, scalable architectures to drive business growth and innovation.',
  },
  {
    // Hero
    title: 'Performance Optimization',
    slug: 'performance-optimization',
    category_id: 2,
    hero_alt: 'Collection of network cables',
    hero_src: '/unsplash/M5tzZtFCOfs.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is website performance important for my business?',
            content:
              'Website performance is crucial for user experience, engagement, and search engine rankings. Slow-loading pages can drive away potential customers, while poor performance can negatively impact your search engine rankings, making it harder for users to find your website.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your Performance Optimization Service?',
            content:
              'Our Performance Optimization Service helps you improve your website speed, user experience, and search engine rankings by identifying and addressing performance bottlenecks. We use a combination of cutting-edge tools and best practices to optimize your website, including code optimization, image optimization, and server configuration. With our performance optimization services, you can enjoy increased user satisfaction, higher engagement, and improved search engine rankings.',
          },
          {
            id: 'faqs-3',
            title: 'How do you optimize website performance?',
            content:
              'We optimize website performance by analyzing your website, identifying performance bottlenecks, and implementing optimizations to improve speed and user experience. This includes optimizing your code, images, and server configuration, as well as monitoring your website performance and providing ongoing optimization services to ensure that your site remains fast and efficient as it grows and evolves.',
          },
        ],
        subtitle:
          'Learn more about our Performance Optimization Service and how we can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Page speed optimization',
            fa_icon: 'fa-clock',
            subtitle:
              'We optimize your website to load faster, ensuring a smooth user experience and improved search engine rankings.',
          },
          {
            title: 'Code optimization',
            fa_icon: 'fa-code',
            subtitle:
              'We analyse and optimize your website code, reducing file sizes and improving overall performance.',
          },
          {
            title: 'Image optimization',
            fa_icon: 'fa-images',
            subtitle:
              'We optimize your images to reduce file sizes without sacrificing quality, improving your website load times.',
          },
          {
            title: 'Server configuration',
            fa_icon: 'fa-server',
            subtitle:
              'We optimize your server configuration to ensure that your website runs smoothly and efficiently.',
          },
          {
            title: 'Performance monitoring',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We monitor your website performance to identify and address any issues that may arise, ensuring a consistently fast and smooth user experience.',
          },
          {
            title: 'Ongoing optimization',
            fa_icon: 'fa-sync',
            subtitle:
              'We provide ongoing optimization services to ensure that your website remains fast and efficient as it grows and evolves.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We use a combination of cutting-edge tools and best practices to optimize your website for performance, including code optimization, image optimization, and server configuration.',
      },
      summary: {
        title:
          'Optimizing your website for better performance and user experience.',
        items: [
          {
            title:
              "In today's competitive digital landscape, website performance is crucial to your online success. Slow-loading pages, unresponsive elements, and poor user experience can drive away potential customers and harm your search engine rankings. Our Performance Optimization Service is designed to help you improve your website speed, user experience, and overall performance.",
          },
          {
            title:
              'Our team of experts will analyse your website, identify performance bottlenecks, and implement optimizations to ensure that your site loads quickly, runs smoothly, and provides a seamless experience for your users. With our performance optimization services, you can enjoy increased user satisfaction, higher engagement, and improved search engine rankings.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Performance Optimization',
      description:
        'Supercharge your frontend with microfrontend development. Build modular web apps for enhanced user experiences and faster development cycles.',
    },
    subtitle:
      'Improve your website speed, user experience, and search engine rankings with our performance optimization services.',
  },
  {
    // Hero
    title: 'Microfrontend Development',
    slug: 'microfrontend-development',
    category_id: 2,
    hero_alt: 'Zoomed in image of codes',
    hero_src: '/unsplash/eDUKZFYY1K4.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'What are the benefits of using microfrontends for my enterprise applications?',
            content:
              'Microfrontends offer several benefits for enterprise applications, including improved scalability, maintainability, and development efficiency. By breaking down large frontend applications into smaller, more manageable pieces, microfrontends enable development teams to work independently, iterate faster, and deploy updates with minimal risk. They also promote the use of best practices in software engineering, leading to more modular, maintainable, and high-performing applications.',
          },
          {
            id: 'faqs-2',
            title: 'How does your Microfrontend Development Service work?',
            content:
              'Our Microfrontend Development Service offers end-to-end support for building enterprise-grade microfrontend applications. We start by helping you design a microfrontend architecture tailored to your specific needs and business goals. Our expert engineers then build modular, scalable, and efficient microfrontends using the latest technologies and best practices in frontend software engineering. We also specialize in dashboard development, integration with backend systems and APIs, and ongoing support and maintenance.',
          },
          {
            id: 'faqs-3',
            title:
              'What technologies and frameworks do you use for microfrontend development?',
            content:
              'Our team is well-versed in a wide range of frontend technologies and frameworks, including React, Angular, Vue, and Web Components. We also have experience with various microfrontend-specific tools and libraries, such as single-spa, Module Federation, and Bit. We work closely with you to choose the best technologies and frameworks for your specific application needs and business goals.',
          },
        ],
        subtitle:
          'Learn more about our Microfrontend Development Service and how we can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Module composition',
            fa_icon: 'fa-cube',
            subtitle:
              'We decompose your frontend application into modular microfrontend components, allowing independent development, testing, and deployment of each module.',
          },
          {
            title: 'Independent deployment',
            fa_icon: 'fa-rocket',
            subtitle:
              'We enable independent deployment of microfrontends, allowing teams to release updates and features without impacting the entire application.',
          },
          {
            title: 'Shared libraries',
            fa_icon: 'fa-share-alt',
            subtitle:
              'We develop shared libraries and design patterns to ensure consistency and code reuse across microfrontends, reducing duplication and improving development efficiency.',
          },
          {
            title: 'Integration and orchestration',
            fa_icon: 'fa-cogs',
            subtitle:
              'We integrate and orchestrate microfrontends into a unified frontend application, providing seamless navigation, state management, and intercommunication between modules.',
          },
          {
            title: 'Cross-team collaboration',
            fa_icon: 'fa-code',
            subtitle:
              'We facilitate collaboration between frontend development teams, ensuring alignment of architecture, standards, and best practices in building microfrontend applications.',
          },
          {
            title: 'Scalability and performance',
            fa_icon: 'fa-user-friends',
            subtitle:
              'We optimize the performance and scalability of microfrontend applications, leveraging caching, lazy loading, and dynamic module loading techniques.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'To build robust microfrontend applications, we follow a comprehensive set of practices that include module composition, independent deployment, shared libraries, and cross-team collaboration.',
      },
      summary: {
        title: 'Elevate your enterprise applications with microfrontends.',
        items: [
          {
            title:
              'Microfrontend architecture is revolutionizing the way enterprise applications are built and maintained. By breaking down large, monolithic frontend applications into smaller, more manageable pieces, microfrontends make it easier for development teams to collaborate, iterate, and scale their applications over time.',
          },
          {
            title:
              'Our Microfrontend Development Service specializes in helping enterprise clients leverage this powerful architecture to create modular, maintainable, and high-performing applications. With our deep expertise in frontend software engineering and dashboard development, we can help you transform your application landscape and drive business success.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Microfrontend Development',
      description:
        'Boost your frontend with microfrontend development. Scale applications, increase agility, and enhance user experiences with our expert services.',
    },
    subtitle:
      'Empower your enterprise applications with scalable, maintainable, and efficient microfrontend architecture.',
  },
  {
    title: 'Singpass Integration',
    slug: 'singpass-integration',
    category_id: 2,
    exclusive_locales: ['sg'],
    hero_alt: 'Gardens by the bay',
    // Hero
    hero_src: '/unsplash/taayxzJk5xY.jpg',
    is_hidden_from_nav: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'What if I need additional custom features in my Singpass integration?',
            content:
              'We are experienced in custom frontend development and can accommodate additional custom features in your Singpass integration. We will work with you to understand your needs and tailor the integration process accordingly.',
          },
          {
            id: 'faqs-2',
            title: 'How secure is Singpass integration?',
            content:
              'Singpass is a secure and government-verified platform for digital authentication. It enhances the security of your systems by reducing potential vulnerabilities related to password management. However, it is crucial to complement it with other security practices for maximum protection.',
          },
          {
            id: 'faqs-3',
            title:
              'Can Singpass integration be used for all types of enterprise systems?',
            content:
              'Singpass can be integrated into a wide variety of systems. However, the feasibility of integration depends on various factors, including the nature of your system, its infrastructure, and your specific business requirements. We recommend discussing your specific needs with our team for an accurate assessment.',
          },
        ],
        subtitle:
          'Find out more about our Singpass Integration Service and how it can streamline your business operations.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Secure Authentication',
            fa_icon: 'fa-lock',
            subtitle:
              'Integrating Singpass provides an additional layer of security, reducing potential risks linked to password management.',
          },
          {
            title: 'Custom Integration',
            fa_icon: 'fa-laptop-code',
            subtitle:
              'We offer custom integration services that align with your specific business requirements, ensuring the best fit for your system architecture.',
          },
          {
            title: 'User Experience',
            fa_icon: 'fa-user-check',
            subtitle:
              'Our integration process prioritises user experience, ensuring seamless navigation within your existing user interfaces.',
          },
          {
            title: 'Maintenance & Support',
            fa_icon: 'fa-tools',
            subtitle:
              'Our team offers continual support and maintenance post-integration, ensuring optimal performance of your system.',
          },
          {
            title: 'Protection',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'With  Singpass, you can uphold the highest standards of security and data privacy for your business, safeguarding sensitive user information from potential breaches.',
          },
          {
            title: 'Efficiency',
            fa_icon: 'fa-sync-alt',
            subtitle:
              'With Singpass, your users can authenticate seamlessly, speeding up access to your services without compromising security.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Efficient and secure integration of Singpass services into your business operations.',
      },
      summary: {
        title: 'Navigate the digital landscape with confidence using Singpass.',
        items: [
          {
            title:
              "In today's digital era, ensuring secure and seamless access to your business's online services is no longer an option, but a necessity. With an increasing demand for digital convenience, businesses must ensure their clients have easy access to their services while maintaining the highest standards of security and data protection.",
          },
          {
            title:
              "That's where our expertise comes into play. We specialize in integrating Singpass into your business systems, providing you with a trusted, government-verified authentication service widely recognized by millions of users in Singapore.",
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Singpass Integration',
      description:
        "Align your business with Singapore's Smart Nation initiative and stay ahead of the curve.",
    },
    subtitle:
      "Align your business with Singapore's Smart Nation initiative and stay ahead of the curve.",
  },
  {
    // Hero
    title: 'Staff Augmentation',
    slug: 'staff-augmentation',
    category_id: 3,
    hero_alt: 'Meeting session',
    hero_src: '/unsplash/gMsnXqILjp4.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'What is staff augmentation?',
            content:
              'Staff augmentation is a flexible outsourcing strategy that allows you to add skilled professionals to your existing team on a short-term or long-term basis. It enables you to access specialized expertise and scale your team quickly, without the overhead of hiring full-time employees.',
          },
          {
            id: 'faqs-2',
            title: 'What are the benefits of staff augmentation?',
            content:
              'Staff augmentation offers several benefits, including cost savings, flexibility, access to specialized expertise, and reduced time-to-market. By augmenting your team with skilled professionals, you can quickly adapt to changing project requirements and ensure that your projects are completed on time and within budget.',
          },
          {
            id: 'faqs-3',
            title: 'Why should I choose your Staff Augmentation service?',
            content:
              'Our Staff Augmentation service provides you with top-tier frontend software engineering and dashboard development experts who are skilled in the latest technologies and best practices. We work closely with you to understand your unique our services accordingly, ensuring that you have the right professionals to help you achieve your project objectives.',
          },
        ],
        subtitle:
          'Learn more about our Staff Augmentation service and how we can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Skill assessment',
            fa_icon: 'fa-users',
            subtitle:
              'We assess the skills and expertise required for your project to ensure the perfect match between your needs and our frontend engineers.',
          },
          {
            title: 'Team integration',
            fa_icon: 'fa-handshake',
            subtitle:
              'Our frontend engineers seamlessly integrate into your existing team, aligning with your development processes, communication channels, and project workflows.',
          },
          {
            title: 'Project management',
            fa_icon: 'fa-tasks',
            subtitle:
              'We collaborate closely with your project managers and stakeholders to ensure clear requirements, timely delivery, and effective project coordination.',
          },
          {
            title: 'Flexible engagement',
            fa_icon: 'fa-exchange-alt',
            subtitle:
              'We offer flexible engagement models, whether you need additional resources for a specific project or ongoing support for long-term collaboration.',
          },
          {
            title: 'Skills expertise',
            fa_icon: 'fa-users-cog',
            subtitle:
              'Our frontend engineers possess expertise in various frontend technologies, including modern frameworks, libraries, and tools, ensuring the successful execution of your projects.',
          },
          {
            title: 'Knowledge transfer',
            fa_icon: 'fa-graduation-cap',
            subtitle:
              'We encourage knowledge sharing and provide documentation and training sessions to ensure the transfer of skills and expertise to your internal team.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'To augment your team effectively, we follow a comprehensive set of practices that include skill assessment, team integration, project management, and knowledge transfer.',
      },
      summary: {
        title: 'Empower your team with the right expertise.',
        items: [
          {
            title:
              'In the competitive world of enterprise software development, having the right team is crucial. Our Staff Augmentation service provides you with top-tier frontend software engineering and dashboard development experts to help you tackle your most complex projects with ease.',
          },
          {
            title:
              "We understand that every enterprise has unique needs, and we work closely with you to ensure that our staff augmentation services are tailored to your specific requirements. Whether it's a short-term project or a long-term engagement, our skilled professionals are ready to join your team and contribute to your success.",
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Staff Augmentation',
      description:
        'Enhance your product team with our staff augmentation services. Access top talent to scale your development efforts and accelerate project delivery.',
    },
    subtitle:
      'Expand your team with top-tier frontend software engineering and dashboard development experts, tailored to your enterprise needs.',
  },
  {
    // Hero
    title: 'Agile Development Teams',
    slug: 'agile-development-teams',
    category_id: 3,
    hero_alt: 'Agile Development Team',
    hero_src: '/unsplash/Oalh2MojUuk.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why are agile development teams important for my enterprise business?',
            content:
              'Development teams are crucial for enterprise businesses because they ensure faster delivery, adaptability to changing requirements, and improved collaboration. This results in higher-quality software solutions that align with your business goals and drive success.',
          },
          {
            id: 'faqs-2',
            title: 'What makes your Agile Development Teams stand out?',
            content:
              'Our Agile Development Teams stand out due to their expertise in frontend software engineering and dashboard development, dedication to your projects, and commitment to collaboration and communication. We work closely with your business to understand your unique requirements and deliver tailored solutions that drive success.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the success of my enterprise projects?',
            content:
              'We ensure the success of your enterprise projects by providing dedicated agile teams that specialize in frontend software engineering and dashboard development. Our expert project managers oversee every aspect of your projects, ensuring seamless communication, timely delivery, and alignment with your business goals.',
          },
        ],
        subtitle:
          'Learn more about our Agile Development Teams service and how we can help your enterprise business succeed.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Dedicated teams',
            fa_icon: 'fa-users',
            subtitle:
              'Our dedicated teams work exclusively on your projects, ensuring full focus and commitment to your business objectives.',
          },
          {
            title: 'Frontend software engineering',
            fa_icon: 'fa-code',
            subtitle:
              'We specialize in developing high-quality frontend software solutions, using the latest technologies and best practices.',
          },
          {
            title: 'Dashboard development',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'Our teams excel in creating intuitive, data-driven dashboards that help you make informed decisions and drive business growth.',
          },
          {
            title: 'Agile methodologies',
            fa_icon: 'fa-sync-alt',
            subtitle:
              'We follow agile methodologies, ensuring adaptability and flexibility to meet the changing needs of your enterprise projects.',
          },
          {
            title: 'Project management',
            fa_icon: 'fa-project-diagram',
            subtitle:
              'Our expert project managers oversee every aspect of your projects, ensuring seamless communication and timely delivery.',
          },
          {
            title: 'Collaboration',
            fa_icon: 'fa-handshake',
            subtitle:
              'We work closely with your team, fostering collaboration and knowledge-sharing to ensure the success of your projects.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our agile development teams bring expertise in frontend software engineering, dashboard development, and project management to deliver exceptional results for your enterprise projects.',
      },
      summary: {
        title: 'Expert agile teams for your enterprise projects.',
        items: [
          {
            title:
              'In the fast-paced world of enterprise software development, having an agile team is essential for staying ahead of the competition. Our Agile Development Teams are skilled in frontend software engineering and dashboard development, ensuring your projects are delivered on time and with the highest quality.',
          },
          {
            title:
              'Our teams work closely with your business to understand your unique requirements and deliver tailored solutions that drive success. With a focus on collaboration, communication, and adaptability, our agile development teams ensure your projects are always on track and aligned with your business goals.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Agile Development Teams',
      description:
        'Discover how our agile development teams can help your enterprise business succeed with frontend software engineering and dashboard development.',
    },
    subtitle:
      'Empower your business with our expert agile development teams, specializing in frontend software engineering and dashboard development.',
  },
  {
    // Hero
    title: 'Technical Leadership',
    slug: 'technical-leadership',
    category_id: 3,
    hero_alt: 'Man presenting to a group',
    hero_src: '/unsplash/rxpThOwuVgE.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is technical leadership important for my software development projects?',
            content:
              'Technical leadership is crucial for the success of your software development projects, as it ensures that your projects are well-planned, organized, and executed. Technical leaders have a deep understanding of the latest technologies, best practices, and industry trends, and can guide your team through the complexities of frontend software engineering and dashboard development. They also foster a culture of collaboration, innovation, and continuous improvement, helping you build high-performing teams.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your Technical Leadership service?',
            content:
              'Our Technical Leadership service provides experienced leaders who can guide your team through the complexities of frontend software engineering and dashboard development, ensuring that your projects are delivered on time and within budget. Our technical leaders have a deep understanding of the latest technologies, best practices, and industry trends, and work closely with your team to ensure that your projects are built to the highest standards. They also foster a culture of collaboration, innovation, and continuous improvement, helping you build high-performing teams.',
          },
          {
            id: 'faqs-3',
            title: 'How do your technical leaders work with my team?',
            content:
              'Our technical leaders work closely with your team, providing guidance on software architecture, best practices, and industry trends. They also help you plan, organize, and execute your projects, ensuring that they are delivered on time and within budget. Additionally, they foster a culture of collaboration, innovation, and continuous improvement, helping you build high-performing teams.',
          },
        ],
        subtitle:
          'Learn more about our Technical Leadership service and how we can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Architectural guidance',
            fa_icon: 'fa-layer-group',
            subtitle:
              'Our technical leaders provide architectural guidance to ensure the scalability, maintainability, and extensibility of your software projects.',
          },
          {
            title: 'Code reviews',
            fa_icon: 'fa-search-dollar',
            subtitle:
              'We conduct thorough code reviews to identify potential issues, ensure code quality, and promote best practices within your development team.',
          },
          {
            title: 'Performance optimization',
            fa_icon: 'fa-tachometer-alt',
            subtitle:
              'Our technical leaders optimize the performance of your software applications, ensuring fast response times, efficient resource utilization, and scalability.',
          },
          {
            title: 'Team collaboration',
            fa_icon: 'fa-hands-helping',
            subtitle:
              'We foster effective collaboration within your development team, promoting communication, knowledge sharing, and alignment towards project goals.',
          },
          {
            title: 'Technical mentoring',
            fa_icon: 'fa-chalkboard-teacher',
            subtitle:
              'Our technical leaders provide guidance, mentorship, and support to your developers, helping them enhance their technical skills and grow professionally.',
          },
          {
            title: 'Quality assurance',
            fa_icon: 'fa-check-circle',
            subtitle:
              'We ensure the quality of your software development projects by implementing best practices, testing strategies, and quality assurance processes.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'With our technical leadership services, we offer a range of capabilities that include architectural guidance, code reviews, performance optimization, team collaboration, and technical mentoring.',
      },
      summary: {
        title: 'Driving success through technical expertise and leadership.',
        items: [
          {
            title:
              'In the fast-paced world of software development, having strong technical leadership is crucial to the success of your projects. Our Technical Leadership service provides experienced leaders who can guide your team through the complexities of frontend software engineering and dashboard development, ensuring that your projects are delivered on time and within budget.',
          },
          {
            title:
              'Our technical leaders have a deep understanding of the latest technologies, best practices, and industry trends. They work closely with your team to ensure that your projects are built to the highest standards, while also fostering a culture of collaboration, innovation, and continuous improvement.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Technical Leadership',
      description:
        'Enhance your product team with technical leadership. Leverage our expertise to drive innovation, streamline development, and achieve project success.',
    },
    subtitle:
      'Empower your software development projects with our experienced technical leaders and ensure success.',
  },
].map((item, i) => {
  return merge({}, MOCK_SERVICE_PAGE, {
    id: i + 1,
    // Category
    category: getCategoryFromCrudItem(item, MOCK_TECH_SERVICE_CATEGORYS),
    overline: 'Service',
    ...item,
  })
})

export const MOCK_GROUP_SERVICES = [
  {
    // Hero
    title: 'Product and Service Design',
    slug: 'product-and-service-design',
    category_id: 1,
    hero_alt: 'Person writing on a tablet',
    hero_src: '/unsplash/KxVlKiqQObU.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'What makes your Product and Service Design solutions stand out from the competition?',
            content:
              'Our Product and Service Design solutions stand out from the competition because of our specialization in frontend software engineering and dashboard development. We focus on creating digital experiences that are visually stunning, highly functional, and tailored to the unique needs of your enterprise clients. Our team of experts stays up-to-date with the latest frontend technologies and design principles, ensuring that your digital products are built to the highest standards.',
          },
          {
            id: 'faqs-2',
            title: 'What kind of clients do you work with?',
            content:
              'We primarily work with enterprise clients, helping them create exceptional digital experiences for their users. Our expertise in frontend software engineering and dashboard development allows us to deliver tailored solutions that cater to the specific needs of large organisations across various industries.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the quality of your digital products?',
            content:
              "To ensure the quality of our digital products, we follow a rigorous development process that includes in-depth research, prototyping, and testing. We work closely with your team to understand your clients' business objectives and user needs, which helps us create digital solutions that are both visually stunning and highly functional. Additionally, we prioritize performance optimization, ensuring that your digital products run smoothly and efficiently, even with large amounts of data.",
          },
        ],
        subtitle:
          'Learn more about our Product and Service Design service and how we can help your enterprise clients.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Creative ideation',
            fa_icon: 'fa-lightbulb',
            subtitle:
              'We generate unique and creative ideas that align with your business objectives and user needs, setting the foundation for successful product and service design.',
          },
          {
            title: 'Strategic planning',
            fa_icon: 'fa-cogs',
            subtitle:
              'We develop a strategic roadmap that outlines the steps and considerations needed to bring your product or service to life, ensuring alignment with your overall business strategy.',
          },
          {
            title: 'Concept prototyping',
            fa_icon: 'fa-pen-nib',
            subtitle:
              'We create interactive prototypes to visualize and validate the concepts, allowing for early feedback and iteration before moving into the development phase.',
          },
          {
            title: 'User research',
            fa_icon: 'fa-users',
            subtitle:
              'We conduct in-depth user research to understand the needs, preferences, and pain points of your target audience, informing the design process and ensuring user-centric solutions.',
          },
          {
            title: 'Usability testing',
            fa_icon: 'fa-check-circle',
            subtitle:
              'We conduct rigorous usability testing to evaluate the user experience and identify areas for improvement, ensuring a seamless and intuitive interaction with your product or service.',
          },
          {
            title: 'Data-driven insights',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We leverage data analytics and user feedback to gain valuable insights that inform iterative design decisions, optimizing the performance and effectiveness of your product or service.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'To design innovative products and services, we follow a comprehensive process that includes user research, ideation, prototyping, testing, and refinement.',
      },
      summary: {
        title: 'Crafting digital experiences that delight your customers.',
        items: [
          {
            title:
              'In the highly competitive world of enterprise software, creating digital experiences that truly stand out is crucial. Our Product and Service Design team specializes in frontend software engineering and dashboard development to ensure your clients get the best possible user experience.',
          },
          {
            title:
              "Our focus is on building intuitive and efficient digital solutions that cater to the unique needs of your enterprise clients. We work closely with you to understand your clients' business objectives and deliver tailored solutions that drive growth and enhance customer satisfaction.",
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Product and Service Design',
      description:
        'This page is all about providing top-notch product and service design solutions for your enterprise clients.',
    },
    subtitle:
      'Create exceptional digital experiences for your enterprise clients with our expertise in frontend software engineering and dashboard development.',
  },
  {
    // Hero
    title: 'Cyber Security',
    slug: 'cyber-security',
    category_id: 1,
    hero_alt: 'Cyber Security',
    hero_src: '/unsplash/X8kOj-k9MaA.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is cyber security important for my business?',
            content:
              "Cyber security is crucial for businesses of all sizes, as it protects sensitive information, maintains business continuity, and safeguards your organisation's reputation. Cyber attacks can lead to financial loss, legal repercussions, and damage to your brand image. By investing in cyber security, you can minimize the risk of potential threats and ensure the safety of your digital assets.",
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your Cyber Security Service?',
            content:
              'Working with our Cyber Security Service offers several benefits, including access to experienced cyber security experts, a custom security strategy tailored to your business, and comprehensive protection for your digital assets. We offer a wide range of services, from vulnerability assessments to incident response planning, ensuring that your organisation is well-prepared to defend against potential cyber threats.',
          },
          {
            id: 'faqs-3',
            title: 'How do you approach cyber security?',
            content:
              "We take a proactive approach to cyber security, working closely with your organisation to understand your unique needs and develop a custom security strategy. We utilize industry best practices, cutting-edge technology, and our team's extensive experience to safeguard your digital assets. Our services include vulnerability assessments, security strategy development, incident response planning, network security, cloud security, and security awareness training for your employees.",
          },
        ],
        subtitle:
          'Learn more about our Cyber Security services and how we can help protect your business from cyber threats.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Vulnerability assessments',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We identify potential vulnerabilities in your digital infrastructure and provide recommendations for mitigating risks.',
          },
          {
            title: 'Security strategy',
            fa_icon: 'fa-lock',
            subtitle:
              'We develop a custom security strategy tailored to your business, ensuring that your digital assets are protected against potential threats.',
          },
          {
            title: 'Incident response planning',
            fa_icon: 'fa-user-secret',
            subtitle:
              'We help you create a comprehensive incident response plan, allowing your business to respond effectively to cyber attacks and minimize potential damage.',
          },
          {
            title: 'Network security',
            fa_icon: 'fa-network-wired',
            subtitle:
              'We implement robust network security measures to protect your organisation from unauthorized access and data breaches.',
          },
          {
            title: 'Cloud security',
            fa_icon: 'fa-cloud',
            subtitle:
              'We ensure that your cloud-based assets are secure and compliant with industry standards and regulations.',
          },
          {
            title: 'Security awareness training',
            fa_icon: 'fa-users-cog',
            subtitle:
              'We provide security awareness training for your employees, ensuring that they understand their role in maintaining a secure digital environment.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We offer a comprehensive suite of cyber security services to help protect your business from cyber threats.',
      },
      summary: {
        title: 'Protecting your business from cyber threats.',
        items: [
          {
            title:
              "In today's interconnected world, cyber threats pose a significant risk to businesses of all sizes. Our Cyber Security service provides comprehensive protection for your digital assets, ensuring that your business remains secure and resilient against potential cyber attacks.",
          },
          {
            title:
              'Our team of experienced cyber security experts works closely with your organisation to develop a custom security strategy that meets your unique needs. From vulnerability assessments to incident response planning, we offer a full suite of services to help you safeguard your business against cyber threats.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Cyber Security Services',
      description:
        'This page is all about providing cyber security solutions to protect your business from cyber threats.',
    },
    subtitle:
      'Secure your digital assets with cutting-edge cyber security solutions tailored for your business.',
  },
  {
    // Hero
    title: 'Technical Feasibility Study',
    slug: 'technical-feasibility-study',
    category_id: 1,
    hero_alt: 'Feasibility Study',
    hero_src: '/unsplash/MX_6QAqaYfQ.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is a technical feasibility study important for my business?',
            content:
              'A technical feasibility study helps you identify potential challenges and risks associated with your software project before you invest significant resources. This enables you to make informed decisions, optimize your project plan, and ultimately improve the likelihood of success. It also helps you identify any gaps in your team capabilities or technology stack, allowing you to address these issues proactively.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your Technical Feasibility Study Service?',
            content:
              'Our team of experts has extensive experience in frontend software engineering and dashboard development, giving us the knowledge and insights needed to evaluate the technical feasibility of your project effectively. We provide in-depth analysis, risk assessment, technology evaluation, team capabilities assessment, and comprehensive documentation and reporting, ensuring that you have all the information you need to make informed decisions about your project. We also work closely with your team throughout the process, ensuring a seamless and effective collaboration.',
          },
          {
            id: 'faqs-3',
            title: 'How do you conduct a technical feasibility study?',
            content:
              'We start by gaining a deep understanding of your project requirements and objectives. We then analyse the potential challenges and risks associated with your project, evaluating the technical feasibility of your proposed solution. This involves assessing the technology stack and tools required, as well as your team capabilities and skills. Throughout the process, we provide insights and recommendations to help you optimize your project plan and mitigate potential risks. Finally, we deliver comprehensive documentation and reports on our findings, giving you the information you need to make informed decisions about your project.',
          },
        ],
        subtitle:
          'Learn more about our Technical Feasibility Study services and how we can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Technology assessments',
            fa_icon: 'fa-laptop-code',
            subtitle:
              'We evaluate the most suitable technologies and frameworks for your project, ensuring that it aligns with your technical requirements and objectives.',
          },
          {
            title: 'Risk analysis',
            fa_icon: 'fa-chart-pie',
            subtitle:
              'We identify and assess potential risks associated with your project, including technical, financial, and operational risks, to help you mitigate them effectively.',
          },
          {
            title: 'Cost estimations',
            fa_icon: 'fa-dollar-sign',
            subtitle:
              'We provide detailed cost estimations for your software projects, taking into account factors such as development time, resources, and technology choices.',
          },
          {
            title: 'Timeline projections',
            fa_icon: 'fa-clock',
            subtitle:
              'We establish realistic project timelines by evaluating development phases, resource allocation, and potential roadblocks.',
          },
          {
            title: 'Resource planning',
            fa_icon: 'fa-users',
            subtitle:
              'We help you determine the optimal team structure and skillset required to successfully execute your software projects.',
          },
          {
            title: 'Strategic recommendations',
            fa_icon: 'fa-lightbulb',
            subtitle:
              'Based on our comprehensive assessments, we provide strategic recommendations to help you make informed decisions about your software projects.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our Technical Feasibility Study services cover a wide range of aspects, including technology assessments, risk analysis, cost estimations, and more.',
      },
      summary: {
        title: 'Making informed decisions with confidence.',
        items: [
          {
            title:
              'A Technical Feasibility Study is a crucial step in the software development process, allowing you to evaluate the practicality and potential success of your projects. Our team of experts specializes in conducting comprehensive technical assessments that provide valuable insights into the feasibility, risks, and opportunities associated with your software projects.',
          },
          {
            title:
              "We understand the importance of making well-informed decisions in today's competitive landscape. Our in-depth evaluations empower you with the knowledge needed to navigate complex software projects and invest your resources wisely.",
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Technical Feasibility Study',
      description:
        'This page is about our Technical Feasibility Study services for evaluating the viability of your software projects.',
    },
    subtitle:
      'Our experts conduct in-depth technical assessments to evaluate the viability of your software projects and help you make informed decisions.',
  },
  {
    // Hero
    title: 'Sustainability Consulting',
    slug: 'sustainability-consulting',
    category_id: 1,
    hero_alt: 'Sustainability Consulting',
    hero_src: '/unsplash/4NhqyQeErP8.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is sustainability important in software development?',
            content:
              'Sustainability in software development is crucial as it helps reduce the environmental impact of digital products and services. By adopting eco-friendly practices, businesses can decrease energy consumption, minimize waste, and reduce carbon emissions, ultimately contributing to a greener planet. Additionally, sustainable software development can lead to cost savings, improved brand reputation, and increased customer loyalty.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your Sustainability Consulting Service?',
            content:
              'By working with our Sustainability Consulting Service, you can expect to receive expert guidance in creating environmentally responsible software solutions. Our team specializes in frontend software engineering and dashboard development, with a strong focus on sustainable technologies and practices. We help you identify the right technologies, develop data-driven dashboards, and provide ongoing support to ensure your solutions are both eco-friendly and effective. This collaboration will enable your business to achieve its sustainability goals while also driving growth and innovation.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure that the software solutions you develop are sustainable?',
            content:
              'We take a comprehensive approach to sustainability in software development. Our team stays up-to-date with the latest advancements in sustainable technology and follows best practices to ensure eco-friendliness. We collaborate with your team to identify the most appropriate technologies and strategies for your specific needs, develop data-driven dashboards to track sustainability performance, and balance environmental considerations with performance requirements. This approach ensures that the solutions we develop meet your sustainability goals without sacrificing effectiveness or user experience.',
          },
        ],
        subtitle:
          'Learn more about our Sustainability Consulting services and how we can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Sustainability assessment',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We conduct comprehensive assessments of your enterprise to identify areas for improvement and opportunities for sustainability integration.',
          },
          {
            title: 'Environmental impact reduction',
            fa_icon: 'fa-seedling',
            subtitle:
              "We develop strategies and initiatives to minimize your enterprise's environmental footprint, including energy conservation, waste reduction, and resource optimization.",
          },
          {
            title: 'Sustainable sourcing and supply chain management',
            fa_icon: 'fa-globe',
            subtitle:
              'We help optimize your supply chain to promote sustainable sourcing, responsible procurement, and ethical practices throughout the value chain.',
          },
          {
            title: 'Stakeholder engagement',
            fa_icon: 'fa-people-arrows',
            subtitle:
              'We facilitate dialogue and engagement with stakeholders, including employees, customers, and communities, to foster a culture of sustainability and collective action.',
          },
          {
            title: 'Social impact initiatives',
            fa_icon: 'fa-balance-scale',
            subtitle:
              'We support the development of social impact initiatives that contribute to the well-being of communities and address social inequalities.',
          },
          {
            title: 'Measurement and reporting',
            fa_icon: 'fa-flag-checkered',
            subtitle:
              'We establish performance metrics and reporting frameworks to track progress, measure impact, and communicate sustainability achievements to stakeholders.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'To drive sustainable change, we employ a range of strategies and practices, including assessment, goal-setting, implementation, and measurement.',
      },
      summary: {
        title: 'Creating sustainable software solutions for a better future.',
        items: [
          {
            title:
              "In today's world, businesses are becoming increasingly aware of their environmental impact and the importance of sustainability. At our Sustainability Consulting Service, we help you create environmentally responsible software solutions that not only contribute to a greener planet but also benefit your bottom line.",
          },
          {
            title:
              'Our team of experts is highly skilled in frontend software engineering and dashboard development, with a deep understanding of the latest sustainable technologies and practices. We work closely with your team to develop software solutions that are both eco-friendly and highly effective, helping you achieve your sustainability goals while also driving your business forward.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Sustainability Consulting',
      description:
        'This page is all about helping businesses create environmentally responsible software solutions.',
    },
    subtitle:
      'Helping you create environmentally responsible software solutions for your business.',
  },
  {
    title: 'Custom Software Development',
    slug: 'custom-software-development',
    category_id: 2,
    hero_alt: 'Custom software design on a computer screen',
    hero_src: '/unsplash/uv5_bsypFUM.jpg',
    // Sections
    sections: {
      challenges: {
        title: 'The Challenges Decision Makers Face',
        center: true,
        items: [
          {
            title: 'Managing Complex Project Technicalities',
            fa_icon: 'fa-laptop-code',
            subtitle:
              'Overseeing multiple projects with different teams and stakeholders is no easy task. It often results in confusion, delays, and missed deadlines that hinder progress.',
          },
          {
            title: 'Limited Budget and Resources',
            fa_icon: 'fa-database',
            subtitle:
              'With tight budgets and limited resources, maintaining quality while managing numerous digital products and campaigns becomes a constant struggle.',
          },
          {
            title: 'Finding Skilled Developers',
            fa_icon: 'fa-robot',
            subtitle:
              'The competition for talented developers and engineers makes hiring and retaining top talent harder than ever, further slowing down projects and stifling innovation.',
          },
        ],
        overline: 'Stakeholder Challenges',
        subtitle:
          'IT leaders are tasked with navigating a series of difficult challenges, from managing complex software projects and juggling tight budgets to securing experienced developers. These ongoing issues can quickly lead to frustration and burnout as they struggle to balance the demands of growth and innovation.',
      },
      facts: {
        overline: 'Facts',
        title: 'Key Information about {title}',
        subtitle: 'Leveraging our technical expertise and industry knowledge, we deliver custom solutions to power your unique business processes and drive high return on investment.',
        items: [
          {
            id: 'facts-1',
            title: 'Benefits of {title}',
            content: `Workflow Efficiency
              Custom software development brings you solutions tailored to your specific business needs.
              When you customize the software you use instead of leaning on generic off-the-shelf solutions, you can operate more efficiently by addressing each challenge you face with a solution crafted to your particular purpose.
              
              Strategic Data Use
              Customized software generates and organizes data in a way that aligns with your business objectives. This empowers teams to extract more meaningful insights and make strategic decisions based on accurate and accessible data.
              
              Seamless Connectivity and Collaboration
              Software systems need to speak to each other. Customizing a software solution allows for connectivity across technologies, teams, and departments. This leads to real-time information sharing that strengthens communication and boosts collaboration.
            `,
          },
          {
            id: 'facts-2',
            title: 'Understanding the {title} Process',
            content: "Custom software development starts with a deep dive into your business needs. We engage in close collaboration with your team to gather requirements, ensuring we understand your objectives thoroughly. This understanding forms the foundation for creating a solution that aligns perfectly with your business goals.\n\nUsing agile methodologies, we design, develop, and iterate on the solution with regular feedback. This ensures flexibility and timely delivery. Our process is adaptive, allowing us to continuously refine the software until it meets and exceeds your expectations.",
          },
          {
            id: 'facts-3',
            title: 'Who needs {title}?',
            content: "{title} is ideal for businesses with unique operational needs that cannot be met by off-the-shelf software. Companies looking to enhance workflow efficiency, enable seamless integration across departments, or leverage strategic data insights are prime candidates for custom solutions.\n\nWhether you're a startup scaling your operations or an enterprise seeking to refine and optimize existing processes, custom software provides the flexibility and personalization needed to tackle specific challenges. It's designed to fit your business model and drive success in a competitive market.",
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'What types of businesses can benefit from custom software development?',
            content:
              'Custom software development is ideal for businesses of all sizes across various industries that require specialized solutions to address unique operational challenges and goals.',
          },
          {
            id: 'faqs-2',
            title: 'What is your approach to custom software development?',
            content:
              'Our approach involves close collaboration with your team to understand your business objectives, followed by designing and developing a solution that is tailored to your specific needs. We follow agile methodologies to ensure flexibility and timely delivery.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the security of custom software?',
            content:
              'We prioritize security at every stage of development. Our team follows industry best practices and standards to safeguard your software against potential threats, ensuring compliance with relevant security regulations.',
          },
        ],
        subtitle:
          'Learn more about our Custom Software Development service and how it can benefit your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'PoC Development',
            fa_icon: 'fa-laptop-code',
            subtitle:
              'Accelerate innovation and minimize risk with our Proof of Concept Development Service for our clients.',
          },
          {
            title: 'Custom Application Development',
            fa_icon: 'fa-sync',
            subtitle:
              'Leverage our expertise in frontend software engineering and dashboard development to create powerful applications for your business.',
          },
          {
            title: 'Software Product Development',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'Enhance your software development process with our experienced team of frontend engineers and dashboard developers.',
          },
          {
            title: 'ERP Consulting',
            fa_icon: 'fa-robot',
            subtitle:
              'Maximize the potential of your enterprise software with our expert ERP consulting services.',
          },
          {
            title: 'Application Enhancement and Modernization',
            fa_icon: 'fa-database',
            subtitle:
              'We offer end-to-end application re-engineering services to modernise and optimize your legacy applications.',
          },
          {
            title: 'Custom Enterprise Application Development',
            fa_icon: 'fa-check-circle',
            subtitle:
              'Developing powerful frontend applications and dashboards for enterprise clients.',
          },
        ],
        overline: 'Our expertise',
        subtitle:
          'Leveraging our technical expertise and industry knowledge, we deliver custom solutions to power your unique business processes and drive high return on investment.',
      },
      summary: {
        overline: 'Summary',
        title: 'Transforming Businesses with {title} Services',
        items: [
          {
            title:
              '{appTitle}\'s {title} service is designed to create unique, scalable, and high-performance solutions that align with your business objectives. We specialize in building custom software that enhances productivity and supports business growth.',
          },
          {
            title:
              'From the initial concept to deployment and maintenance, we work closely with you to deliver software that meets your exact requirements, integrates seamlessly with your current systems, and drives operational efficiency.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Custom Software Development',
      description:
        'This page highlights our custom software development services, offering tailored solutions to meet the unique needs of businesses across various industries.',
    },
    subtitle:
      'Partner with us to build bespoke software solutions that cater specifically to your business needs and drive operational efficiency.',
  },
  {
    // Hero
    title: 'PoC Development',
    slug: 'poc-development',
    category_id: 2,
    hero_alt: 'Open book',
    hero_src: '/unsplash/FQvadXmA524.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'What is the purpose of developing a Proof of Concept (PoC)?',
            content:
              'Developing a Proof of Concept (PoC) allows organisations to validate their ideas and ensure they are feasible, cost-effective, and viable in the marketplace. A well-executed PoC can help minimize risks, accelerate innovation, and provide valuable insights that inform decision-making and future development.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your PoC Development Service?',
            content:
              'Our PoC Development Service specializes in frontend software engineering and dashboard development for enterprise clients. By working with us, you gain access to a team of experts dedicated to validating your ideas and creating tailored solutions that align with your business goals. Our collaborative approach ensures open communication and fosters a successful partnership, while our iterative development process allows for continuous improvement and adaptation.',
          },
          {
            id: 'faqs-3',
            title:
              'How long does it typically take to develop a Proof of Concept?',
            content:
              'The time required to develop a Proof of Concept can vary depending on the complexity of the project, the availability of resources, and the specific needs of your organisation. In general, a PoC can take anywhere from a few weeks to several months to complete. Our team works closely with you to establish a realistic timeline that aligns with your goals and expectations.',
          },
        ],
        subtitle:
          'Learn more about our PoC Development Service and how we can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Idea validation',
            fa_icon: 'fa-lightbulb',
            subtitle:
              'We help you validate your ideas and assess their feasibility through the development of proof-of-concepts.',
          },
          {
            title: 'Rapid prototyping',
            fa_icon: 'fa-cogs',
            subtitle:
              'We utilize rapid prototyping techniques to quickly create functional prototypes that bring your ideas to life.',
          },
          {
            title: 'Proof-of-concept development',
            fa_icon: 'fa-check-circle',
            subtitle:
              'We develop proof-of-concepts that demonstrate the core features and functionalities of your ideas.',
          },
          {
            title: 'Technical feasibility assessment',
            fa_icon: 'fa-code',
            subtitle:
              'We assess the technical feasibility and potential challenges of implementing your ideas through the development of proof-of-concepts.',
          },
          {
            title: 'Innovation acceleration',
            fa_icon: 'fa-rocket',
            subtitle:
              'We help accelerate innovation by providing tangible prototypes that can be presented to stakeholders and investors.',
          },
          {
            title: 'Collaborative approach',
            fa_icon: 'fa-comments',
            subtitle:
              'We collaborate closely with your team, incorporating feedback and iterating on the proof-of-concept to align with your vision and goals.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We employ industry best practices to develop proof-of-concepts that showcase the potential and viability of your ideas.',
      },
      summary: {
        title:
          'Validate ideas and drive innovation with Proof of Concept Development.',
        items: [
          {
            title:
              'In an ever-changing digital landscape, validating ideas quickly and effectively is essential for any organisation. Our Proof of Concept (PoC) Development Service helps enterprise clients bring their ideas to life, providing a comprehensive approach to frontend software engineering and dashboard development.',
          },
          {
            title:
              'We work closely with your team to understand your business goals and create tailored solutions that address your unique challenges. By developing PoCs, we help you minimize risk and accelerate innovation, allowing you to make data-driven decisions and adapt to evolving market demands.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'PoC Development',
      description:
        'This page is all about our PoC Development Service, which specializes in frontend software engineering and dashboard development for enterprise clients.',
    },
    subtitle:
      'Accelerate innovation and minimize risk with our Proof of Concept Development Service for enterprise clients.',
  },
  {
    // Hero
    title: 'Application Development',
    slug: 'application-development',
    category_id: 2,
    hero_alt: 'Phone homescreen with applications',
    hero_src: '/unsplash/9e9PD9blAto.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'What industries do you serve with your Application Development service?',
            content:
              'We serve a wide range of industries with our Application Development service, including finance, healthcare, retail, manufacturing, and more. Our team has the expertise and experience to create tailored solutions that address the unique challenges and requirements of your industry.',
          },
          {
            id: 'faqs-2',
            title:
              'What frontend technologies do you use for application development?',
            content:
              'Our team stays up-to-date with the latest frontend technologies and best practices. We primarily use popular and modern frameworks and libraries, such as React, Angular, and Vue.js, to develop high-quality, maintainable, and performant applications.',
          },
          {
            id: 'faqs-3',
            title: 'What is your development process?',
            content:
              'Our development process typically involves several stages: requirement gathering, planning, design, development, testing, and deployment. We work closely with your team throughout the process to ensure that the application meets your needs and expectations. Additionally, we follow an agile methodology, which allows us to iterate and improve the application based on feedback and changing requirements.',
          },
        ],
        subtitle:
          'Find out more about our Application Development service and how we can support your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Custom application development',
            fa_icon: 'fa-cogs',
            subtitle:
              'We develop custom enterprise applications tailored to your specific business requirements and goals.',
          },
          {
            title: 'Full-stack development',
            fa_icon: 'fa-code',
            subtitle:
              'We have expertise in both frontend and backend development, allowing us to deliver end-to-end solutions.',
          },
          {
            title: 'Enterprise integration',
            fa_icon: 'fa-users-cog',
            subtitle:
              'We seamlessly integrate your applications with existing systems to ensure data consistency and workflow optimization.',
          },
          {
            title: 'Cloud deployment',
            fa_icon: 'fa-cloud',
            subtitle:
              'We deploy applications on secure and scalable cloud platforms to ensure high performance and availability.',
          },
          {
            title: 'Security and compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize the security of your applications and ensure compliance with industry standards and regulations.',
          },
          {
            title: 'Agile development',
            fa_icon: 'fa-rocket',
            subtitle:
              'We follow agile development methodologies to deliver iterative and high-quality solutions within defined timelines.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We leverage cutting-edge technologies and industry best practices to develop robust and scalable applications.',
      },
      summary: {
        title:
          'Driving business innovation through tailored application development.',
        items: [
          {
            title:
              'In a rapidly evolving digital landscape, applications play a crucial role in driving business growth and innovation. Our Application Development service focuses on creating robust, scalable applications for enterprise clients, specializing in frontend software engineering and dashboard development.',
          },
          {
            title:
              'We understand the unique needs and challenges of enterprise-level applications and work closely with your team to develop custom solutions that align with your business goals. Our expertise in frontend technologies and dashboard development ensures your applications are visually appealing, highly functional, and deliver value to your users.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Application Development',
      description:
        'This page showcases our capabilities in developing high-quality applications for enterprise clients, with a focus on frontend software engineering and dashboard development.',
    },
    subtitle:
      'Leverage our expertise in frontend software engineering and dashboard development to create powerful applications for your enterprise.',
  },
  {
    // Hero
    title: 'Enterprise Applications',
    slug: 'enterprise-applications',
    category_id: 2,
    hero_alt: 'Laptop screen monitoring finances',
    hero_src: '/unsplash/744oGeqpxPQ.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why should I invest in custom enterprise applications?',
            content:
              'Custom enterprise applications provide several benefits, including increased efficiency, improved collaboration, enhanced data security, scalability, and the ability to adapt to your specific business needs. By investing in custom software solutions, you can gain a competitive edge, streamline processes, and drive innovation within your organisation.',
          },
          {
            id: 'faqs-2',
            title:
              'What industries do you serve with your Enterprise Application Development services?',
            content:
              'Our Enterprise Application Development services cater to a wide range of industries, including but not limited to finance, healthcare, manufacturing, logistics, retail, and telecommunications. We have experience working with diverse enterprises and can adapt our solutions to meet the unique requirements of your industry.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure the security and scalability of enterprise applications?',
            content:
              'Security and scalability are paramount in enterprise applications. We follow industry best practices and employ robust security measures to protect your sensitive data and ensure compliance with relevant regulations. Our development approach focuses on scalability, allowing your software to accommodate future growth and evolving business needs.',
          },
        ],
        subtitle:
          'Learn more about our Enterprise Application Development services and how we can help your business thrive.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Frontend software engineering',
            fa_icon: 'fa-code',
            subtitle:
              'Our team of skilled engineers uses modern frontend technologies and best practices to develop robust, maintainable, and high-performing applications.',
          },
          {
            title: 'Dashboard development',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We create custom dashboards that provide actionable insights and help you monitor the performance of your business processes and applications.',
          },
          {
            title: 'Responsive design',
            fa_icon: 'fa-desktop',
            subtitle:
              'We ensure that your applications and dashboards work seamlessly across all devices, providing an optimal user experience regardless of screen size.',
          },
          {
            title: 'Integration',
            fa_icon: 'fa-cogs',
            subtitle:
              'Our team can integrate your frontend applications with your existing backend systems, ensuring seamless communication and data exchange.',
          },
          {
            title: 'Collaboration',
            fa_icon: 'fa-users-cog',
            subtitle:
              'We work closely with your team throughout the development process, ensuring that your applications meet your business objectives and deliver value to your users.',
          },
          {
            title: 'Agile development',
            fa_icon: 'fa-rocket',
            subtitle:
              'We follow agile development methodologies to deliver iterative and high-quality solutions within defined timelines.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We specialize in frontend software engineering and dashboard development, delivering powerful applications that meet the demands of your enterprise.',
      },
      summary: {
        title: 'Empower your business with cutting-edge frontend applications.',
        items: [
          {
            title:
              'In the era of digital transformation, enterprises require powerful and scalable applications to streamline their processes and deliver the best possible user experience. Our Enterprise Applications service focuses on frontend software engineering and dashboard development for enterprise clients, ensuring that your business has the tools it needs to thrive.',
          },
          {
            title:
              'Our team of experts is skilled in modern frontend technologies and frameworks, and we are committed to delivering robust, maintainable, and high-performing applications tailored to the unique needs of your enterprise.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Enterprise Applications',
      description:
        'This page is all about creating high-quality frontend applications and dashboards for enterprise clients.',
    },
    subtitle:
      'Developing powerful frontend applications and dashboards for enterprise clients.',
  },
  {
    // Hero
    title: 'ERP Consulting',
    slug: 'erp-consulting',
    category_id: 2,
    hero_alt: 'Group of people working together',
    hero_src: '/unsplash/g1Kr4Ozfoac.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is ERP consulting important for my business?',
            content:
              'ERP consulting is essential for businesses that want to optimize their ERP systems, streamline operations, and improve overall efficiency. Our expert consultants can help you identify areas for improvement, provide implementation support, develop custom frontend solutions, and guide your team through change management processes.',
          },
          {
            id: 'faqs-2',
            title:
              'What industries can benefit from your ERP Consulting services?',
            content:
              'Our ERP Consulting services are suitable for businesses across a wide range of industries, including manufacturing, retail, healthcare, finance, and more. We have experience working with various ERP systems and can tailor our services to meet the unique needs of your business.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the success of an ERP implementation?',
            content:
              'We follow a structured approach to ERP implementation that involves assessing your current system, providing expert guidance and support throughout the implementation process, and assisting with change management. This approach helps minimize risks, maximize results, and ensure a smooth transition for your business.',
          },
        ],
        subtitle:
          'Learn more about our ERP Consulting Service and how we can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'ERP strategy development',
            fa_icon: 'fa-lightbulb',
            subtitle:
              'We help you define a comprehensive ERP strategy that aligns with your business objectives and supports future growth.',
          },
          {
            title: 'ERP selection and implementation',
            fa_icon: 'fa-cogs',
            subtitle:
              'We assist you in selecting the right ERP solution for your business and ensure seamless implementation for maximum efficiency.',
          },
          {
            title: 'Business process optimization',
            fa_icon: 'fa-users',
            subtitle:
              'We analyse and optimize your business processes to maximize the benefits of your ERP system and drive operational excellence.',
          },
          {
            title: 'Cloud ERP integration',
            fa_icon: 'fa-cloud',
            subtitle:
              'We help you leverage cloud-based ERP solutions to improve scalability, accessibility, and cost-effectiveness.',
          },
          {
            title: 'Data analytics and reporting',
            fa_icon: 'fa-chart-pie',
            subtitle:
              'We enable data-driven decision-making by implementing robust analytics and reporting capabilities within your ERP system.',
          },
          {
            title: 'Security and compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We ensure the security and compliance of your ERP system, protecting sensitive data and adhering to industry regulations.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We offer end-to-end ERP consulting services to enhance your business processes and drive digital transformation.',
      },
      summary: {
        title: 'Unlock the full potential of your enterprise software.',
        items: [
          {
            title:
              'Enterprise Resource Planning (ERP) systems are critical to the success of modern businesses. However, implementing and managing these complex systems can be challenging. Our ERP Consulting services help businesses like yours optimize their ERP software, streamline operations, and maximize efficiency.',
          },
          {
            title:
              'Our team of experts specializes in frontend software engineering and dashboard development, ensuring that your ERP system is not only powerful but also user-friendly. We work closely with your team to understand your unique needs and tailor our services to your specific requirements.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'ERP Consulting',
      description:
        'Our ERP Consulting services help businesses optimize their enterprise software and streamline operations.',
    },
    subtitle:
      'Maximize the potential of your enterprise software with our expert ERP consulting services.',
  },
  {
    // Hero
    title: 'CRM Consulting',
    slug: 'crm-consulting',
    category_id: 2,
    hero_alt: 'Open laptop',
    hero_src: '/unsplash/OtHEYbQXLFU.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is CRM consulting important for my business?',
            content:
              'CRM consulting is crucial for businesses looking to maximize the potential of their CRM system. Our expert consultants can help you develop a tailored CRM strategy, implement the system effectively, optimize its performance, and provide ongoing support and training for your team. This ensures your CRM investment supports your business objectives and delivers maximum value, driving growth and improving customer relationships.',
          },
          {
            id: 'faqs-2',
            title: 'What types of CRM systems do you specialize in?',
            content:
              'Our team of CRM consultants has extensive experience with a wide range of CRM systems and platforms. We specialize in frontend software engineering and dashboard development, which allows us to create custom solutions for various CRM systems, ensuring they align with your business needs and objectives.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the success of a CRM implementation?',
            content:
              'We follow a structured approach to CRM implementation, starting with the development of a tailored CRM strategy that aligns with your business goals. Our team provides expert guidance and support throughout the implementation process, minimizing risks and ensuring a smooth transition. We also offer custom development, performance optimization, training, and ongoing support to ensure the continued success of your CRM system.',
          },
        ],
        subtitle:
          'Learn more about our CRM Consulting Service and how we can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'CRM strategy development',
            fa_icon: 'fa-users',
            subtitle:
              'We help you define a comprehensive CRM strategy that aligns with your business objectives and supports your customer-centric approach.',
          },
          {
            title: 'CRM system selection and implementation',
            fa_icon: 'fa-cogs',
            subtitle:
              'We assist you in selecting the right CRM solution for your business and ensure seamless implementation for maximum effectiveness.',
          },
          {
            title: 'Sales and marketing automation',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We optimize your sales and marketing processes by implementing CRM automation features, enabling efficient lead management and targeted campaigns.',
          },
          {
            title: 'CRM integration',
            fa_icon: 'fa-cloud',
            subtitle:
              'We integrate your CRM system with other business tools and platforms to streamline data flow and enhance cross-functional collaboration.',
          },
          {
            title: 'Data management and analytics',
            fa_icon: 'fa-database',
            subtitle:
              'We help you manage and leverage customer data effectively, enabling data-driven decision-making and personalized customer experiences.',
          },
          {
            title: 'Security and privacy',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We ensure the security and privacy of your customer data, implementing robust measures to protect sensitive information.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We offer end-to-end CRM consulting services to help you build and maintain strong customer relationships.',
      },
      summary: {
        title: 'Unlock the full power of your CRM system.',
        items: [
          {
            title:
              'A well-implemented CRM system can be a game-changer for your business, improving customer relationships, increasing sales, and streamlining operations. Our CRM Consulting Service can help you unlock the full potential of your CRM system, ensuring it aligns with your unique business needs and objectives.',
          },
          {
            title:
              'Our team of experts specializes in frontend software engineering and dashboard development for enterprise clients. We can help you optimize your CRM system, develop custom solutions, and train your team to make the most of your CRM investment.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'CRM Consulting',
      description:
        'This page is all about maximizing the potential of your CRM system with our expert consulting services.',
    },
    subtitle:
      'Maximize the potential of your CRM system with our expert consulting services.',
  },
  {
    // Hero
    title: 'Application Re-engineering',
    slug: 'application-re-engineering',
    category_id: 2,
    hero_alt: 'Two people discussing',
    hero_src: '/unsplash/uOhBxB23Wao.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is Application Re-engineering important for my business?',
            content:
              'Application Re-engineering is essential to ensure that your software applications stay up-to-date with the latest technological advancements and user expectations. By optimizing, modernising, and revamping your applications, you can increase efficiency, reduce costs, enhance user experience, and maintain a competitive edge in the market.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your Application Re-engineering service?',
            content:
              'Our Application Re-engineering service focuses on frontend software engineering and dashboard development for enterprise clients. We work closely with you to analyse your existing applications, identify bottlenecks and areas for improvement, and provide innovative solutions to enhance their performance and user experience. By leveraging our expertise, your business can benefit from improved efficiency, reduced costs, and a more competitive position in the market.',
          },
          {
            id: 'faqs-3',
            title: 'How do you approach Application Re-engineering?',
            content:
              'We begin by analyzing your existing software applications to understand their current state and identify areas for improvement. We then work closely with your team to develop a plan for re-engineering, including code refactoring, performance optimization, user interface improvements, and dashboard development. Throughout the process, we prioritize communication and collaboration to ensure the re-engineered applications align with your business objectives and deliver value to your users.',
          },
        ],
        subtitle:
          'Learn more about our Application Re-engineering services and how they can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Legacy application assessment',
            fa_icon: 'fa-code-branch',
            subtitle:
              'We assess your existing applications to identify technological gaps, performance bottlenecks, and areas for improvement.',
          },
          {
            title: 'Application migration and modernisation',
            fa_icon: 'fa-refresh',
            subtitle:
              'We migrate your legacy applications to modern platforms and architectures, ensuring compatibility, scalability, and improved performance.',
          },
          {
            title: 'Functionality enhancement',
            fa_icon: 'fa-tools',
            subtitle:
              'We enhance the functionality of your legacy applications by introducing new features, improving workflows, and streamlining processes.',
          },
          {
            title: 'Scalability and performance optimization',
            fa_icon: 'fa-expand-arrows-alt',
            subtitle:
              'We optimize the performance and scalability of your applications to handle increased workloads and accommodate future growth.',
          },
          {
            title: 'User experience improvement',
            fa_icon: 'fa-user',
            subtitle:
              'We revamp the user interface and experience of your applications, making them more intuitive, user-friendly, and engaging.',
          },
          {
            title: 'Data migration and integration',
            fa_icon: 'fa-database',
            subtitle:
              'We migrate and integrate data from legacy systems into modern databases and applications, ensuring data integrity and accessibility.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We offer end-to-end application re-engineering services to modernise and optimize your legacy applications.',
      },
      summary: {
        title: 'Breathing new life into your software applications.',
        items: [
          {
            title:
              "In an ever-evolving digital landscape, outdated software applications can hinder your business growth and reduce efficiency. Our Application Re-engineering services are designed to help you optimize, modernise, and revamp your existing applications to meet today's technological demands and enhance user experience.",
          },
          {
            title:
              'Our team of experts specializes in frontend software engineering and dashboard development, focusing on enterprise clients. We work closely with you to identify bottlenecks, areas for improvement, and opportunities for innovation in your existing software applications, ultimately creating a more powerful and user-friendly solution.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Application Re-engineering',
      description:
        'Discover our Application Re-engineering services designed to optimize, modernise, and revamp your existing software applications.',
    },
    subtitle:
      'Revitalize your software applications with our expert re-engineering services to enhance performance and user experience.',
  },
  {
    // Hero
    title: 'Cloud Migration',
    slug: 'cloud-migration',
    category_id: 2,
    hero_alt: 'Motion blur tunnel',
    hero_src: '/unsplash/sb7RUrRMaC4.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why should my business consider migrating to the cloud?',
            content:
              'Migrating to the cloud can provide your business with numerous benefits, such as cost savings, increased agility, improved scalability, and enhanced security. It also enables your organisation to leverage the latest technologies and innovations, making it easier to stay competitive in the digital landscape.',
          },
          {
            id: 'faqs-2',
            title: 'What are the main challenges of cloud migration?',
            content:
              'Some of the main challenges of cloud migration include selecting the right cloud provider and service, ensuring data security and compliance, minimizing downtime during the transition, and effectively managing the new cloud environment. Our Cloud Migration service is designed to help you navigate these challenges and ensure a seamless, successful migration.',
          },
          {
            id: 'faqs-3',
            title: 'How long does a typical cloud migration process take?',
            content:
              "The duration of a cloud migration process varies depending on the size and complexity of your organisation's infrastructure, as well as the specific cloud solutions being implemented. Our team works closely with your organisation to develop a tailored migration plan, providing a clear timeline and roadmap for the transition.",
          },
        ],
        subtitle:
          'Learn more about our Cloud Migration services and how we can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Cloud assessment',
            fa_icon: 'fa-cloud',
            subtitle:
              'We assess your existing infrastructure and applications to identify the best cloud solutions for your business needs.',
          },
          {
            title: 'Migration planning',
            fa_icon: 'fa-tasks',
            subtitle:
              'We develop a tailored migration plan, outlining the steps, timeline, and resources needed to ensure a seamless transition to the cloud.',
          },
          {
            title: 'Implementation',
            fa_icon: 'fa-cogs',
            subtitle:
              'Our team executes the migration plan, ensuring minimal disruption to your business operations during the transition.',
          },
          {
            title: 'Post-migration support',
            fa_icon: 'fa-check-circle',
            subtitle:
              'We provide ongoing support and optimization to help you fully leverage the benefits of the cloud and maintain optimal performance.',
          },
          {
            title: 'Security and compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We ensure your cloud infrastructure adheres to industry best practices for security and compliance, safeguarding your data and applications.',
          },
          {
            title: 'Collaboration',
            fa_icon: 'fa-users',
            subtitle:
              'We work closely with your team, fostering collaboration and knowledge transfer to ensure your organisation is fully prepared to manage your new cloud environment.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our cloud migration services cover every aspect of the process, from planning and strategy to implementation and post-migration support.',
      },
      summary: {
        title:
          'Unlock the power of the cloud with our Cloud Migration services.',
        items: [
          {
            title:
              'The cloud offers a myriad of benefits, including cost savings, improved scalability, and increased agility. Our Cloud Migration service is designed to help your business transition to the cloud seamlessly, minimizing downtime and maximizing the return on your investment.',
          },
          {
            title:
              'Our team of experts has extensive experience in cloud migration, and we work closely with your organisation to develop a tailored migration plan that meets your unique needs. From assessing your existing infrastructure to planning and executing the migration, we provide comprehensive support every step of the way.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Cloud Migration',
      description:
        'This page is all about helping your business transition to the cloud with ease and efficiency.',
    },
    subtitle:
      'Simplify and streamline your transition to the cloud with our expert guidance and support.',
  },
  {
    // Hero
    title: 'Smart Team',
    slug: 'smart-team',
    category_id: 2,
    hero_alt: 'Group discussion in an office',
    hero_src: '/unsplash/mpN7xjKQ_Ns.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why should I choose your Smart Team service for my business?',
            content:
              'Our Smart Team service provides your business with highly skilled frontend engineers and dashboard developers who are experienced in working with enterprise clients. We are dedicated to understanding your unique needs and goals, delivering tailor-made solutions that drive results. Our team stays up-to-date with the latest industry trends and best practices, ensuring that your projects benefit from cutting-edge technologies and techniques.',
          },
          {
            id: 'faqs-2',
            title:
              'What frontend technologies and frameworks do your engineers specialize in?',
            content:
              'Our frontend engineers are proficient in a wide range of modern technologies and frameworks, including React, Angular, Vue.js, and more. They are experienced in working with HTML, CSS, JavaScript, and other frontend languages, ensuring that your user interfaces are responsive, performant, and visually stunning.',
          },
          {
            id: 'faqs-3',
            title: 'How does your team approach dashboard development?',
            content:
              'Our dashboard developers create intuitive, data-driven dashboards that provide valuable insights, helping you make informed decisions for your business. We work closely with your organisation to understand your data needs and goals, and we use the latest dashboard development tools and best practices to create custom solutions that meet your specific requirements.',
          },
        ],
        subtitle:
          'Learn more about our Smart Team service and how we can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Talent acquisition',
            fa_icon: 'fa-users',
            subtitle:
              'We acquire top talent with the right skills and expertise to complement your existing team or form a dedicated development team.',
          },
          {
            title: 'Innovation-driven development',
            fa_icon: 'fa-lightbulb',
            subtitle:
              'We foster an innovation-driven development culture to generate creative ideas and deliver software solutions that drive business growth.',
          },
          {
            title: 'Agile methodologies',
            fa_icon: 'fa-cogs',
            subtitle:
              'We embrace agile methodologies such as Scrum and Kanban to ensure flexibility, collaboration, and iterative development.',
          },
          {
            title: 'Full-stack development',
            fa_icon: 'fa-code',
            subtitle:
              'Our smart team covers full-stack development, from frontend to backend, ensuring comprehensive and efficient software solutions.',
          },
          {
            title: 'Security and quality assurance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize security and quality assurance throughout the software development lifecycle to deliver robust and reliable solutions.',
          },
          {
            title: 'Partnership and collaboration',
            fa_icon: 'fa-handshake',
            subtitle:
              'We foster a strong partnership and collaboration with your team, aligning our efforts to your business goals and ensuring a seamless development process.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our smart team solutions cover a wide range of capabilities to ensure successful enterprise software development.',
      },
      summary: {
        title: 'Empowering your development process with our expertise.',
        items: [
          {
            title:
              "In today's fast-paced digital landscape, having a skilled and experienced development team is crucial for success. Our Smart Team service provides enterprise clients with top-notch frontend engineers and dashboard developers, ensuring your projects are completed efficiently and effectively.",
          },
          {
            title:
              'Our team of experts is well-versed in the latest frontend technologies and dashboard development practices, enabling them to tackle even the most complex projects with ease. We work closely with your organisation to understand your specific needs and goals, delivering tailor-made solutions that drive results.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Smart Team',
      description:
        'This page is all about our Smart Team service, providing enterprise clients with expert frontend engineering and dashboard development.',
    },
    subtitle:
      'Enhance your software development process with our experienced team of frontend engineers and dashboard developers.',
  },
  {
    // Hero
    title: 'Data Science',
    slug: 'data-science',
    category_id: 3,
    hero_alt: 'Data Science',
    hero_src: '/unsplash/uqx6IiVp18E.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is data science important for my business?',
            content:
              'Data science enables you to make better decisions, optimize processes, and uncover new opportunities by analyzing and interpreting the data your business generates. By leveraging data science, you can gain actionable insights, improve customer experiences, and drive growth.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your Data Science service?',
            content:
              'Our team of experienced data scientists and analysts work closely with your organisation to understand your business needs and develop custom solutions that address those needs. We offer a comprehensive suite of data science services, including data analytics, machine learning, dashboard development, data management, and process optimization. By working with us, you can unlock the full potential of your data and drive better decision-making, optimized processes, and improved customer experiences.',
          },
          {
            id: 'faqs-3',
            title: 'How do you approach data science projects?',
            content:
              'We take a collaborative approach to data science projects, working closely with your team to understand your business objectives and tailor our solutions to your needs. Our process typically begins with data exploration and analysis, followed by the development and deployment of custom data models or dashboards. Throughout the project, we prioritize clear communication, knowledge sharing, and the integration of our solutions with your existing systems and processes.',
          },
        ],
        subtitle:
          'Learn more about our Data Science services and how we can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data analytics',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We analyse your data to identify patterns, trends, and opportunities, helping you make informed decisions and drive growth.',
          },
          {
            title: 'Machine learning',
            fa_icon: 'fa-brain',
            subtitle:
              'We apply advanced machine learning techniques to your data, enabling you to predict outcomes, automate processes, and uncover hidden insights.',
          },
          {
            title: 'Dashboard development',
            fa_icon: 'fa-tachometer-alt',
            subtitle:
              'We design and develop custom dashboards that provide you with a real-time view of your business metrics, enabling you to monitor performance and make data-driven decisions.',
          },
          {
            title: 'Data management',
            fa_icon: 'fa-database',
            subtitle:
              'We help you manage your data effectively by implementing best practices for data storage, processing, and security.',
          },
          {
            title: 'Process optimization',
            fa_icon: 'fa-cogs',
            subtitle:
              'We use data-driven insights to optimize your business processes, improving efficiency and reducing costs.',
          },
          {
            title: 'Collaboration',
            fa_icon: 'fa-users',
            subtitle:
              'We work closely with your team to ensure that our data science solutions align with your business objectives and deliver maximum value.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'To deliver data-driven insights, we offer a range of services, including data analytics, machine learning, and dashboard development.',
      },
      summary: {
        title: 'Empower your business with data-driven insights.',
        items: [
          {
            title:
              'In a world driven by data, harnessing the power of data can be the key to unlocking new opportunities and driving growth for your business. Our Data Science services help you make sense of your data and turn it into actionable insights, enabling better decision-making, optimized processes, and improved customer experiences.',
          },
          {
            title:
              'Our team of experienced data scientists and analysts work closely with your organisation to understand your business needs and develop custom solutions that address those needs. From predictive analytics to data visualization and dashboard development, we provide a comprehensive suite of services designed to help you make the most of your data.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Data Science',
      description:
        'This page is all about harnessing the power of data to drive better decision-making and optimize processes for your business.',
    },
    subtitle:
      'Leverage the power of data to drive better decision-making, optimize processes, and gain actionable insights for your business.',
  },
  {
    // Hero
    title: 'Data Strategy',
    slug: 'data-strategy',
    category_id: 3,
    hero_alt: 'Map with strings and pins',
    hero_src: '/unsplash/qWwpHwip31M.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is data strategy important for my business?',
            content:
              'Data strategy is crucial for businesses because it enables them to unlock the potential of their data and use it strategically to gain insights, make informed decisions, improve operational efficiency, and drive innovation. A well-defined data strategy aligns data initiatives with business goals and ensures data quality, governance, and security.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your Data Strategy service?',
            content:
              'By working with our Data Strategy service, you will benefit from our expertise in developing comprehensive data strategies tailored to your business needs. We have a deep understanding of data governance, integration, quality management, and analytics, and we can help you establish a data-driven culture within your organisation. Our goal is to empower you to leverage data effectively, optimize processes, and drive growth and innovation.',
          },
          {
            id: 'faqs-3',
            title: 'How do you approach data strategy development?',
            content:
              'We take a holistic approach to data strategy development, starting with a thorough assessment of your current data landscape, business goals, and challenges. Based on this analysis, we collaborate with your team to define a data strategy that aligns with your objectives. Our approach includes establishing data governance frameworks, designing data integration solutions, implementing data quality management processes, leveraging advanced analytics techniques, and creating a data-driven culture within your organisation.',
          },
        ],
        subtitle:
          'Learn more about our Data Strategy service and how it can transform your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data governance',
            fa_icon: 'fa-database',
            subtitle:
              'We help establish data governance frameworks to ensure data integrity, privacy, and compliance across your organisation.',
          },
          {
            title: 'Data integration',
            fa_icon: 'fa-link',
            subtitle:
              'We integrate data from various sources and systems, enabling a unified view of your data for enhanced insights and decision-making.',
          },
          {
            title: 'Data quality management',
            fa_icon: 'fa-check-double',
            subtitle:
              'We implement data quality processes and tools to cleanse, validate, and enhance the accuracy and reliability of your data.',
          },
          {
            title: 'Data analytics',
            fa_icon: 'fa-chart-pie',
            subtitle:
              'We leverage advanced analytics techniques and tools to extract actionable insights from your data and drive data-informed decision-making.',
          },
          {
            title: 'Data infrastructure',
            fa_icon: 'fa-cogs',
            subtitle:
              'We design and implement scalable and robust data infrastructure that supports your data strategy and enables efficient data processing and storage.',
          },
          {
            title: 'Data-driven culture',
            fa_icon: 'fa-users',
            subtitle:
              'We help foster a data-driven culture within your organisation, empowering teams to leverage data in their day-to-day operations and decision-making.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We follow industry best practices to develop comprehensive data strategies that include data governance, data integration, data quality management, and data analytics.',
      },
      summary: {
        title: 'Unlocking the power of data for your business.',
        items: [
          {
            title:
              "In today's data-driven world, businesses that harness the power of data have a competitive edge. At our Data Strategy service, we specialize in helping enterprises unlock the potential of their data and develop data-driven strategies that drive growth and innovation.",
          },
          {
            title:
              'We believe that data is more than just numbers and statistics. It holds valuable insights that can guide strategic decision-making, optimize processes, and improve customer experiences. Our team of experts combines technical expertise with business acumen to develop tailored data strategies that align with your organisational goals and deliver tangible results.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Data Strategy',
      description:
        'Discover the power of data strategy and how it can transform your business.',
    },
    subtitle:
      'Unlock the potential of your data with our expert data strategy services.',
  },
].map((item, i) => {
  return merge({}, MOCK_SERVICE_PAGE, {
    id: i + 1,
    // Category
    category: getCategoryFromCrudItem(item, MOCK_GROUP_SERVICE_CATEGORYS),
    ...item,
    sections: {
      ...item.sections,
      benefits: {
        title: 'Empowering Digital Transformation',
        center: true,
        items: [
          {
            title: 'Advisory',
            fa_icon: 'fa-people-group',
            href: `${routeConfig.SERVICES}/advisory`,
            subtitle:
              "Unlock growth and success with {appTitle}'s business advisory services.",
          },
          {
            title: 'Engineering',
            fa_icon: 'fa-cloud-binary',
            href: `${routeConfig.SERVICES}/engineering`,
            subtitle:
              'Engage our engineering services for insights, innovation, and data-driven decisions.',
          },
          {
            title: 'Data',
            fa_icon: 'fa-chart-mixed',
            href: `${routeConfig.SERVICES}/data`,
            subtitle:
              'Data services that drive growth. Gain insights, make informed decisions.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} drives enterprise success through strategic technology consulting and bespoke software solutions that unlock growth and efficiency.',
      },
      checklist: {
        title: `Why {appTitle} for {title}`,
        overline: 'Why Us',
        subtitle:
          'Unlocking the potential of enterprise technology through expert consulting and software development services tailored to drive your business growth.',
      },
      cta: {
        title: 'Partnering with {appTitle}',
        hero_alt: 'Laser net over city',
        hero_src: '/images/about_nodes_above_city.png',
        overline: 'Get Started',
        subtitle:
          '{appTitle} partners with enterprise clients to tackle the most challenging software hurdles. With a keen focus on bespoke enterprise software development, we leverage leading technologies and methodologies tailored to your business requirements. Our approach is meticulously customized for each project, promising seamless collaboration with your team to choose the most suitable technologies. We shine in enterprise software development and consulting, and we are equipped to apply our knowledge and skills to your project, no matter its current stage in the product lifecycle.',
      },
      showcase: {
        overline: 'Showcase',
        title: 'Our {title} Projects',
        subtitle:
          'Enhancing enterprise performance through exceptional technology consulting: Explore our portfolio showcasing our dedication to delivering impactful custom software development that drive business success.',
      },
      offerings: {
        title: '{title} Services from Concept to Completion',
        items: [
          {
            title: 'Custom Software Development',
            fa_icon: 'fa-laptop-code',
            subtitle: 'Build custom software tailored to business needs, including front-end interfaces and core back-end technology.',
            titleProps: { sx: { color: '#f66134' } },
          },
          {
            title: 'Mobile App Development',
            fa_icon: 'fa-mobile-alt',
            subtitle: 'Develop high performance, secure mobile applications for iOS and Android devices.',
            titleProps: { sx: { color: '#ffad02' } },
          },
          {
            title: 'QA and Testing',
            fa_icon: 'fa-sync',
            subtitle: 'Ensure technology products and services are robust and error-free through manual and automated QA.',
            titleProps: { sx: { color: '#1b73e8' } },
          },
          {
            title: 'AI and Data Science',
            fa_icon: 'fa-robot',
            subtitle: 'Identify and leverage hidden patterns in your data, using machine learning & data science principles.',
            titleProps: { sx: { color: '#34f6e6' } },
          },
          {
            title: 'UX/UI Design',
            fa_icon: 'fa-paint-brush',
            subtitle: 'Create beautiful, user-friendly designs for websites, mobile apps, and other human-machine interfaces.',
            titleProps: { sx: { color: '#15a97a' } },
          },
          {
            title: 'Platform and Infrastructure',
            fa_icon: 'fa-database',
            subtitle: 'Keep applications scalable and resilient with cybersecurity and DevOps experts.',
            titleProps: { sx: { color: '#f63a34' } },
          },
        ],
        overline: 'Our Offerings',
        subtitle:
          'Unlock unparalleled potential with our end-to-end custom software solutions, crafted to perfection.',
      },
      testimonial: {
        title: 'What Our Clients Say',
        subtitle: 'Discover how our clients have benefited from our expert technology consulting and {title} services.',
      },
      usps: {
        title: "What sets {appTitle} apart?",
        items: [
          {
            stat: '2,500+',
            title: "Top Talent",
            subtitle: "Leverage expertise from a talent pool of over 2,500 top technology experts across the globe."
          },
          {
            stat: '100+',
            title: "Clients Served",
            subtitle: "Empowering over 100 prestigious clients globally, including Fortune 500 companies.",
          },
          {
            stat: '200+',
            title: "Projects Delivered",
            subtitle: "Delivering excellence with 200+ projects, celebrated for excellence in software development and outsourcing."
          },
          {
            stat: '20+',
            title: "Years In-market",
            subtitle: "20+ years on the market, consistently driving forward innovation and digital excellence."
          },
          {
            stat: '18',
            title: "Global Service Centers",
            subtitle: "Active in eight countries, providing localized support and comprehensive solutions worldwide."
          },
          {
            title: "Innovative Solutions",
            fa_icon: "fa-lightbulb",
            subtitle: "Pioneering the use of advanced technologies to solve complex challenges and boost efficiency."
          },
          {
            title: "Industry Recognition",
            fa_icon: "fa-award",
            subtitle: "Featured as a Top Software Agency in 2023 by Clutch and recognized globally as a leader in technology outsourcing."
          },
          {
            title: "Certifications",
            fa_icon: "fa-certificate",
            subtitle: "Adhering to the highest standards with OWASP, Amazon Web Services (AWS), and Google certifications."
          },
        ],
        maxWidth: "xl",
        overline: "Difference",
        subtitle: "{appTitle} stands out by offering a unique blend of seasoned expertise, global presence, and recognized credibility to drive transformative outcomes."
      }
    },
  })
})

export const MOCK_DESIGN_SERVICES = [
  {
    // Hero
    title: 'UX Strategy Consulting',
    slug: 'ux-strategy-consulting',
    category_id: 1,
    hero_alt: 'Man explaining ideas at table',
    hero_src: '/unsplash/5QgIuuBxKwM.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is a strong UX strategy important?',
            content:
              'A well-defined UX strategy guides the design and development process, ensuring your product is aligned with user needs and business goals. It can lead to enhanced user satisfaction, increased engagement, and ultimately, greater business success.',
          },
          {
            id: 'faqs-2',
            title:
              'What can I expect from your UX Strategy Consulting service?',
            content:
              'Our service involves reviewing your current UX, identifying areas for improvement, and providing actionable strategies to enhance your user experience. We collaborate closely with your team, providing support and guidance throughout the implementation of these strategies.',
          },
          {
            id: 'faqs-3',
            title: 'How do you tailor your consulting to our specific needs?',
            content:
              'We start by understanding your business, your users, and your current UX. This allows us to provide tailored strategies that meet your unique needs and goals. We also offer ongoing support as you implement these strategies, helping you navigate any challenges that arise.',
          },
        ],
        subtitle:
          'Learn more about our UX Strategy Consulting service and how it can benefit your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'User-Centered Design',
            fa_icon: 'fa-user-check',
            subtitle:
              'We promote designs that prioritize the needs and expectations of your users.',
          },
          {
            title: 'Innovative Thinking',
            fa_icon: 'fa-lightbulb',
            subtitle:
              'We bring fresh ideas and perspectives to help you enhance your user experience.',
          },
          {
            title: 'Strategic Alignment',
            fa_icon: 'fa-align-center',
            subtitle:
              'We ensure your UX strategy aligns with your broader business objectives.',
          },
          {
            title: 'Communication & Collaboration',
            fa_icon: 'fa-comments',
            subtitle:
              'We believe in close collaboration and clear communication with your team throughout the process.',
          },
          {
            title: 'Guidance & Support',
            fa_icon: 'fa-hands-helping',
            subtitle:
              'We provide support and guidance for implementing the UX strategies we recommend.',
          },
          {
            title: 'Results-Oriented Approach',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We focus on delivering strategies that can drive measurable improvements in your user experience.',
          },
        ],
        overline: 'What We Do',
        subtitle:
          'We combine deep UX knowledge with a strategic approach to help you optimize your user experience.',
      },
      summary: {
        title:
          'We provide strategic consulting to help you create compelling, user-friendly experiences that drive business success.',
        items: [
          {
            title:
              'An effective user experience (UX) strategy can transform your product and business. With our UX Strategy Consulting service, we assist you in defining and implementing a UX strategy that aligns with your business objectives and enhances your customer interactions. Our team of experts has a deep understanding of user-centered design and UX best practices. We work collaboratively with you to identify opportunities for improvement, deliver actionable insights, and guide your team in implementing these strategies.',
          },
        ],
      },
    },
    subtitle:
      'Leverage our design expertise to formulate a user experience strategy that aligns with your business goals.',
  },
  {
    // Hero
    title: 'Design Thinking Workshop',
    slug: 'design-thinking-workshop',
    category_id: 1,
    hero_alt: 'Board with post-its',
    hero_src: '/unsplash/zoCDWPuiRuA.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is design thinking important for my business?',
            content:
              'Design thinking can bring a fresh perspective to problem-solving in your business. By empathizing with your customers, generating creative ideas, and quickly prototyping solutions, you can uncover new opportunities and respond to market changes more effectively.',
          },
          {
            id: 'faqs-2',
            title: 'What can I expect from your Design Thinking Workshop?',
            content:
              "Our workshops are designed to be collaborative, engaging, and productive. You'll work closely with our team of experts to understand your customers, brainstorm solutions, and prototype ideas. By the end of the workshop, you'll have a range of innovative solutions and a clear action plan for implementation.",
          },
          {
            id: 'faqs-3',
            title: 'Who should attend the Design Thinking Workshop?',
            content:
              'Anyone involved in product development, marketing, strategy, or customer experience would benefit from attending our workshop. Design thinking is a versatile approach that can be applied across various business functions.',
          },
        ],
        subtitle:
          'Understand more about our Design Thinking Workshop and how it can stimulate innovation in your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Empathy Mapping',
            fa_icon: 'fa-users',
            subtitle:
              'We dive deep into understanding your customer needs and behaviours to build solutions that truly resonate.',
          },
          {
            title: 'Ideation Sessions',
            fa_icon: 'fa-lightbulb',
            subtitle:
              'Through collaborative brainstorming, we generate creative ideas to solve your business challenges.',
          },
          {
            title: 'Rapid Prototyping',
            fa_icon: 'fa-shapes',
            subtitle:
              'We quickly transform ideas into tangible prototypes, allowing for immediate feedback and iterative refinement.',
          },
          {
            title: 'Action Plan',
            fa_icon: 'fa-clipboard-list',
            subtitle:
              'We create a detailed action plan for implementing the solutions generated during the workshop.',
          },
          {
            title: 'Feedback Incorporation',
            fa_icon: 'fa-comments',
            subtitle:
              'We incorporate feedback from prototypes, refining ideas and ensuring their practicality.',
          },
          {
            title: 'Result Analysis',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We analyse the results of implemented solutions, measuring success and suggesting improvements.',
          },
        ],
        overline: 'What We Do',
        subtitle:
          'Our Design Thinking Workshops include a comprehensive approach: Empathy mapping, Ideation sessions, and Rapid prototyping.',
      },
      summary: {
        title:
          'Providing a transformative approach for innovative problem-solving in your business.',
        items: [
          {
            title:
              'In an era defined by rapid technological advancement, remaining innovative and responsive to market changes is vital. We equip your enterprise with a transformative approach to problem-solving, merging creativity and strategic thinking. Our team of experts employ a holistic, user-centric approach, ensuring that the solutions generated during our workshops align with your user needs and preferences. We help your enterprise uncover insights, spark fresh ideas, and prototype innovative solutions.',
          },
        ],
      },
    },
    subtitle:
      'Engage with design specialists to discover innovative solutions tailored for your enterprise.',
  },
  {
    // Hero
    title: 'User Research and Insights',
    slug: 'user-research-insights',
    category_id: 1,
    hero_alt: 'People sticking post-its',
    hero_src: '/unsplash/w00FkE6e8zE.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is user research important?',
            content:
              'User research helps us understand user needs, behaviours, and pain points. These insights inform our design decisions, ensuring we create products that are useful, usable, and desirable.',
          },
          {
            id: 'faqs-2',
            title: 'What methods do you use for user research?',
            content:
              'We use a variety of methods, including user interviews, surveys, usability testing, and data analysis. The methods we choose depend on the research objectives and the stage of the product development process.',
          },
          {
            id: 'faqs-3',
            title:
              'How do the insights from user research inform your design process?',
            content:
              'The insights from user research help us understand what users want and need from a product. We use these insights to guide our design decisions, ensuring we create experiences that meet user needs and align with your business goals.',
          },
        ],
        subtitle:
          'Learn more about our User Research and Insights service and how we can help you better understand your users.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'User Interviews',
            fa_icon: 'fa-user-friends',
            subtitle:
              'We conduct in-depth user interviews to understand user needs, motivations, and pain points.',
          },
          {
            title: 'Surveys',
            fa_icon: 'fa-file-alt',
            subtitle:
              'We design and distribute surveys to gather quantitative data about user behaviours and preferences.',
          },
          {
            title: 'Usability Testing',
            fa_icon: 'fa-laptop-code',
            subtitle:
              'We conduct usability tests to understand how users interact with your product and identify areas of improvement.',
          },
          {
            title: 'Data Analysis',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We analyse the data collected to uncover actionable insights and inform our design decisions.',
          },
          {
            title: 'Insights and Recommendations',
            fa_icon: 'fa-clipboard-check',
            subtitle:
              'We provide detailed reports on our findings, along with actionable recommendations for design improvements.',
          },
          {
            title: 'User Persona Development',
            fa_icon: 'fa-users-cog',
            subtitle:
              'We create detailed user personas that guide our design process and ensure we create experiences that resonate with your target audience.',
          },
        ],
        overline: 'What We Do',
        subtitle:
          'We follow a systematic approach to user research, which includes user interviews, surveys, usability testing, and data analysis.',
      },
      summary: {
        title: 'Understanding what matters for those who matter. ',
        items: [
          {
            title:
              'We dive deep into market research and conduct comprehensive jobs-to-be-done discovery. By understanding your target audience and their needs, we lay the foundation for creating a user-centric design that aligns with your business goals. Through in-depth research, we gather valuable insights that shape the direction of the project and inform our design decisions.',
          },
        ],
      },
    },
    subtitle:
      'We identify underlying issues and key challenges from the perspectives of important stakeholders.',
  },
  {
    // Hero
    title: 'Application Testing & Usability Evaluation',
    slug: 'application-testing-usability-evaluation',
    category_id: 1,
    hero_alt: 'Man highlighting paper',
    hero_src: '/unsplash/gcsNOsPEXfs.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is application testing important for my business?',
            content:
              'Application testing is essential to ensure that your applications function correctly, provide a good user experience, and meet your business requirements. It helps identify and rectify issues before they impact your users, which can improve customer satisfaction and protect your business reputation.',
          },
          {
            id: 'faqs-2',
            title: 'What does usability evaluation involve?',
            content:
              'Usability evaluation involves assessing how user-friendly and intuitive your application is. This could include testing the interface, evaluating the user journey, and gathering user feedback. The goal is to ensure that users can easily navigate your application and successfully complete their intended tasks.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the quality of my application?',
            content:
              'Our team of experts conducts thorough testing and evaluation, using a combination of manual and automated testing techniques. We check functionality, usability, performance, and compatibility across different devices, browsers, and operating systems. We also conduct user experience evaluations to ensure your application is intuitive and user-friendly.',
          },
        ],
        subtitle:
          'Learn more about our Application Testing & Usability Evaluation Service and how we can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Functional Testing',
            fa_icon: 'fa-flask',
            subtitle:
              'We validate the functionality of your applications to ensure they operate according to your specifications.',
          },
          {
            title: 'Usability Testing',
            fa_icon: 'fa-user-check',
            subtitle:
              'We evaluate the user-friendliness of your applications, ensuring they meet user expectations and industry standards.',
          },
          {
            title: 'Bug and Error Identification',
            fa_icon: 'fa-bug',
            subtitle:
              'We diligently identify and document bugs and errors for your development team to address.',
          },
          {
            title: 'Performance Testing',
            fa_icon: 'fa-tasks',
            subtitle:
              'We test the performance of your applications under different loads to ensure consistent performance.',
          },
          {
            title: 'Compatibility Testing',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'We check the compatibility of your applications on different devices, browsers, and operating systems.',
          },
          {
            title: 'User Experience Evaluation',
            fa_icon: 'fa-users',
            subtitle:
              'We evaluate the overall user experience of your applications, ensuring they are intuitive and user-friendly.',
          },
        ],
        overline: 'What We Do',
        subtitle:
          'We offer a wide range of testing and evaluation services to ensure the quality and usability of your applications.',
      },
      summary: {
        title: 'Providing assurance for your product quality.',
        items: [
          {
            title:
              "In today's digital landscape, the quality and usability of your application can significantly impact your business success. We offer detailed testing to identify and rectify any potential issues, ensuring a high-quality user experience. Our team of specialists uses a user-centric approach, focusing on ensuring that your application meets the needs and preferences of your target audience. We help your enterprise deliver efficient, reliable, and robust applications.",
          },
        ],
      },
    },
    subtitle:
      'Ensure the highest quality and usability of your products with our comprehensive testing and evaluation services.',
  },
  {
    // Hero
    title: 'Enterprise UI Library',
    slug: 'enterprise-ui-library',
    category_id: 2,
    hero_alt: 'Colourful wavy design',
    hero_src: '/unsplash/hpIZ5T6SS-M.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is an Enterprise UI Library important?',
            content:
              'An Enterprise UI Library promotes consistency in the user experience across different products or platforms. It also helps speed up the design and development process by providing a set of reusable design components. Additionally, it helps facilitate better collaboration among designers, developers, and stakeholders.',
          },
          {
            id: 'faqs-2',
            title: 'What can I expect from your Enterprise UI Library service?',
            content:
              'You can expect a comprehensive and scalable UI library that includes a component library and a design system. These tools are designed to help your team design and develop more efficiently and consistently. We also monitor performance metrics to ensure that the library is effectively utilized and meets your business objectives.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the UI library is scalable?',
            content:
              'We build the UI library with scalability in mind. We use modular and flexible design principles to ensure that the design components can be easily adapted and expanded to meet the growing needs of your business. We also provide ongoing support to help you update and expand the library as needed.',
          },
        ],
        subtitle:
          'Learn more about our Enterprise UI Library service and how it can benefit your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Component Library',
            fa_icon: 'fa-cubes',
            subtitle:
              'We build a comprehensive library of reusable design components to promote consistency and streamline the design process.',
          },
          {
            title: 'Design System',
            fa_icon: 'fa-palette',
            subtitle:
              'We create a design system that includes style guides, design patterns, and other resources to guide your team in creating consistent user experiences.',
          },
          {
            title: 'Scalability',
            fa_icon: 'fa-expand-arrows-alt',
            subtitle:
              'We ensure that your UI library is scalable and can grow with your business.',
          },
          {
            title: 'Team Collaboration',
            fa_icon: 'fa-users-cog',
            subtitle:
              'We facilitate better collaboration among your designers, developers, and stakeholders by providing a shared resource.',
          },
          {
            title: 'Performance Metrics',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We monitor key performance indicators to measure the success and utilization of the UI library.',
          },
          {
            title: 'Partnership',
            fa_icon: 'fa-handshake',
            subtitle:
              'We work as an extension of your team, ensuring the UI library meets your business objectives and design needs.',
          },
        ],
        overline: 'What We Do',
        subtitle:
          'We create design libraries that help teams maintain consistency and speed up the design and development process.',
      },
      summary: {
        title:
          'Focusing on creating scalable design libraries that fit the specific needs of enterprise-level clients.',
        items: [
          {
            title:
              'Our Enterprise UI Library service is designed to provide leading enterprises with a comprehensive collection of design assets, templates, and resources to support their UI/UX design efforts. With our carefully curated design library, enterprises can leverage a wealth of pre-designed components, layouts, and style guides that align with industry best practices and design standards, enabling them to streamline their design processes, improve consistency across products, and accelerate the development of user-effective interfaces.',
          },
        ],
      },
    },
    subtitle:
      'Understanding design needs with a comprehensive, flexible design library capable of supporting business growth.',
  },
  {
    // Hero
    title: 'Design System Implementation',
    slug: 'design-system-implementation',
    category_id: 2,
    hero_alt: 'People pointing at laptop',
    hero_src: '/unsplash/FlPc9_VocJ4.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why are design systems important for my business?',
            content:
              'Design systems bring consistency and efficiency to the product design and development process. They streamline communication among teams, reduce design and technical debt, and ensure a unified, recognizable brand presentation across your products.',
          },
          {
            id: 'faqs-2',
            title:
              'What does the process of design system implementation look like?',
            content:
              'Our process involves understanding your brand and users, defining a comprehensive design language, maintaining visual consistency, creating a reusable component library, and focusing on usability. We also ensure the system is scalable to accommodate future business growth and needs.',
          },
          {
            id: 'faqs-3',
            title: 'How does a design system improve the user experience?',
            content:
              'Design systems promote consistency, which leads to better usability and a more predictable and recognizable user experience. They also streamline the design process, ensuring faster delivery of high-quality, user-centered designs.',
          },
        ],
        subtitle:
          'Learn more about our Design System Implementation Service and how we can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Design Language Definition',
            fa_icon: 'fa-palette',
            subtitle:
              'We define a comprehensive design language that represents your brand and meets the needs of your target audience.',
          },
          {
            title: 'Consistency Maintenance',
            fa_icon: 'fa-clipboard-check',
            subtitle:
              'We ensure consistency across your products to enhance the user experience and brand recognition.',
          },
          {
            title: 'Component Library Creation',
            fa_icon: 'fa-cubes',
            subtitle:
              'We create a reusable component library that streamlines your design and development process.',
          },
          {
            title: 'Usability Optimization',
            fa_icon: 'fa-user-cog',
            subtitle:
              'We focus on usability, making your products intuitive and user-friendly.',
          },
          {
            title: 'Scalability',
            fa_icon: 'fa-expand',
            subtitle:
              'We design scalable systems that grow with your business needs, ensuring long-term value.',
          },
          {
            title: 'Collaboration',
            fa_icon: 'fa-people-carry',
            subtitle:
              'We work closely with your team, ensuring the design system aligns with your business objectives and product requirements.',
          },
        ],
        overline: 'What We Do',
        subtitle:
          'To implement design systems of the highest quality, we rely on our extensive experience in product design and user experience development.',
      },
      summary: {
        title:
          'Aim to enhance the visual consistency and usability of your enterprise products.',
        items: [
          {
            title:
              'Design systems are instrumental in creating consistent, scalable, and efficient user experiences. We help you build a unified design language that streamlines your design process and enhances the usability of your enterprise products. Our team of experts uses a systematic approach, starting with understanding your brand and user needs, to create a design system that encapsulates your visual identity and promotes user-centric design.',
          },
        ],
      },
    },
    subtitle:
      'Build consistency, improve usability, and streamline your design process with our design system implementation service.',
  },
  {
    // Hero
    title: 'Design Principles & Guidelines',
    slug: 'design-principles-guidelines',
    category_id: 2,
    hero_alt: 'Design on screen',
    hero_src: '/unsplash/T6fDN60bMWY.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why are design principles and guidelines important?',
            content:
              'Design principles and guidelines provide a shared understanding and framework for making design decisions. They foster consistency, improve usability, and guide the creation of innovative, user-centered solutions.',
          },
          {
            id: 'faqs-2',
            title:
              'How does your service help establish these principles and guidelines?',
            content:
              'Our team works closely with you to understand your brand, your users, and your business objectives. We then define clear, user-centered design principles and translate these into actionable guidelines for your design team.',
          },
          {
            id: 'faqs-3',
            title: 'What is the benefit of user-centered design principles?',
            content:
              'User-centered design principles ensure that the needs and experiences of your users are at the forefront of all design decisions. This leads to improved user satisfaction, increased engagement, and ultimately, business success.',
          },
        ],
        subtitle:
          'Learn more about our Design Principles & Guidelines Service and how it can benefit your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Targeted Principles',
            fa_icon: 'fa-bullseye',
            subtitle:
              'We help define targeted design principles that align with your brand and audience needs.',
          },
          {
            title: 'Guidelines Creation',
            fa_icon: 'fa-book',
            subtitle:
              'We translate these principles into clear, actionable guidelines for your design team.',
          },
          {
            title: 'User-Centric Design',
            fa_icon: 'fa-users-cog',
            subtitle:
              'Our principles and guidelines always prioritize the needs and experiences of your users.',
          },
          {
            title: 'Consistency',
            fa_icon: 'fa-clipboard-check',
            subtitle:
              'Our principles promote consistency, ensuring a unified, recognizable user experience.',
          },
          {
            title: 'Innovation',
            fa_icon: 'fa-brain',
            subtitle:
              'By providing a clear design framework, we foster innovative, user-centered solutions.',
          },
          {
            title: 'Collaboration',
            fa_icon: 'fa-people-carry',
            subtitle:
              'We work closely with your team to ensure the principles and guidelines align with your business objectives and design vision.',
          },
        ],
        overline: 'What We Do',
        subtitle:
          'To establish effective design principles and guidelines, we bring together deep expertise in user experience design and a comprehensive understanding of your business context.',
      },
      summary: {
        title:
          'Ensure efficient, consistent, and high-quality product design with our carefully crafted design principles and guidelines.',
        items: [
          {
            title:
              'Design principles and guidelines are critical in guiding product design decisions and ensuring a consistent, high-quality user experience. Our service helps your organisation define these fundamental design tenets that align with your brand and meet your user needs. We believe that effective design principles are user-centered, clear, and adaptable. Our experienced team will work with you to define these principles and transform them into practical guidelines for your design team.',
          },
        ],
      },
    },
    subtitle:
      'Establish foundational design principles and guidelines that drive product design decisions and foster innovative solutions.',
  },
  {
    // Hero
    title: 'Dashboard Design',
    slug: 'dashboard-design',
    category_id: 3,
    hero_alt: 'Dashboard on screen',
    hero_src: '/unsplash/JKUTrJ4vK00.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is a well-designed dashboard important?',
            content:
              'A well-designed dashboard allows users to quickly understand and interact with data, supporting informed decision-making. It helps in monitoring key metrics, identifying trends, and spotting anomalies.',
          },
          {
            id: 'faqs-2',
            title: 'What can I expect from your Dashboard Design service?',
            content:
              'Our service delivers custom dashboards designed to meet your specific business needs. We ensure the dashboards are intuitive, visually appealing, and functional. This includes effective data visualization, responsive design, and a user-centric approach to design.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the dashboard meets our needs?',
            content:
              'We begin by understanding your business, your data, and your users. This informs our design process, ensuring we create a dashboard that aligns with your processes, presents your data effectively, and offers a great user experience.',
          },
        ],
        subtitle:
          'Learn more about our Dashboard Design service and how it can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data Visualization',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We design dashboard elements that present your data in a clear and compelling manner, using charts, graphs, and tables, to present information in easily digestible formats.',
          },
          {
            title: 'Functional Design',
            fa_icon: 'fa-cogs',
            subtitle:
              'We create dashboards that offer robust functionality, allowing users to drill down and interact with the data. Our goal is to create a dashboard that not only looks visually appealing but also delivers actionable insights to drive informed decision-making.',
          },
          {
            title: 'Information Architecture',
            fa_icon: 'fa-layer-group',
            subtitle:
              'We prioritize establishing a hierarchy of information that flows naturally, ensuring that users can easily navigate and locate the most important data points. We carefully organize the layout, considering factors such as data relevance, user priorities, and visual aesthetics. ',
          },
          {
            title: 'User-Centric Approach',
            fa_icon: 'fa-users-cog',
            subtitle:
              'We keep your end users in mind throughout the design process, ensuring the final product is intuitive and easy to navigate.',
          },
          {
            title: 'Responsive Design',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'Our dashboard layouts are designed to be fully responsive, adapting seamlessly to different screen sizes and devices, allowing users to experience a consistent and optimized interface that allows for efficient data exploration.',
          },
          {
            title: 'Partnership',
            fa_icon: 'fa-handshake',
            subtitle:
              'We work closely with you throughout the project, ensuring your business needs and goals are met.',
          },
        ],
        overline: 'What We Do',
        subtitle:
          'We bring together design, development, and data visualization expertise to deliver high-quality dashboards.',
      },
      summary: {
        title:
          'Offering clarity, supporting decision-making and enhancing productivity through well-designed enterprise platforms.',
        items: [
          {
            title:
              'We understand the importance of presenting summarized data in a clear and concise manner, allowing users to grasp key insights at a glance. We combine our expertise in UI/UX design, data visualization, and enterprise product design to create layouts that empower businesses with actionable insights. We enhance the usability, functionality, and visual appeal of enterprise platforms, driving improved decision-making and maximizing the value of their data.',
          },
        ],
      },
    },
    subtitle:
      'Creating exceptional dashboard layouts that offer a seamless and intuitive user experience.',
  },
  {
    // Hero
    title: 'Web & Mobile App Design',
    slug: 'web-mobile-app-design',
    category_id: 3,
    hero_alt: 'Mobile wireframes on paper',
    hero_src: '/unsplash/sv8oOQaUb-o.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is a good app design important for my business?',
            content:
              'A well-designed app can significantly improve the user experience, leading to increased customer satisfaction and loyalty. It can also improve usability, increase engagement, and ultimately, drive business success.',
          },
          {
            id: 'faqs-2',
            title: 'What is your approach to app design?',
            content:
              'Our approach to app design is user-centric. We start by understanding your target audience and their needs. From there, we create user journeys and prototypes, which we continually test and refine. We also ensure that the design is aligned with your business goals and meets the needs of your users.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure the app design is user-friendly and intuitive?',
            content:
              'We follow a user-centric design approach, which involves understanding the needs and behaviour of your users. We create user journeys, prototypes, and conduct usability tests to ensure the design is intuitive and easy to use. We also design with accessibility in mind, making sure the app can be used by everyone.',
          },
        ],
        subtitle:
          'Learn more about our Web & Mobile App Design Service and how it can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Responsive Design',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'We ensure our designs are fully responsive, adapting seamlessly to different devices, allowing your app to deliver a great experience anywhere.',
          },
          {
            title: 'User Journey Mapping',
            fa_icon: 'fa-compass',
            subtitle:
              'We map out the user journey to create an intuitive and seamless user experience.',
          },
          {
            title: 'Prototyping',
            fa_icon: 'fa-layer-group',
            subtitle:
              'We create detailed prototypes to bring our designs to life and test usability.',
          },
          {
            title: 'Accessibility',
            fa_icon: 'fa-universal-access',
            subtitle:
              'We design with accessibility in mind, ensuring your app can be used by everyone.',
          },
          {
            title: 'Innovation',
            fa_icon: 'fa-brain',
            subtitle:
              'We leverage the latest design trends and technologies to create innovative app designs.',
          },
          {
            title: 'Collaboration',
            fa_icon: 'fa-people-arrows',
            subtitle:
              'We work closely with your team to ensure that the design aligns with your business goals and meets your customers’ needs.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'To design web and mobile applications, we bring together our expertise in UX/UI design and a deep understanding of your business needs.',
      },
      summary: {
        title:
          'Creating seamless, intuitive app designs targeted at user needs',
        items: [
          {
            title:
              'In the era of digital transformation, a well-designed application is crucial for business success. Our Web & Mobile App Design service focuses on creating designs that are not only visually captivating but also user-friendly, functional, and aligned with your business goals. Our design approach is centered around the user, ensuring that each application we design is intuitive, efficient, and offers a great user experience. We understand that each business is unique, and we tailor our designs to meet your specific needs and objectives.',
          },
        ],
      },
    },
    subtitle:
      'Designing exceptional applications built to elevate the enterprise user experience.',
  },
  {
    // Hero
    title: 'UI/UX Revamp',
    slug: 'ui-ux-revamp',
    category_id: 3,
    hero_alt: 'People discussing wireframes',
    hero_src: '/unsplash/wusOJ-2uY6w.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is a UI/UX revamp important for my business?',
            content:
              'A UI/UX revamp can greatly improve the user experience, leading to increased user satisfaction and engagement. It can also help your product stay competitive by aligning with current design trends and user expectations.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your UI/UX Revamp Service?',
            content:
              'Our UI/UX Revamp Service specializes in modernising and enhancing your interfaces to improve user experience. We adopt a user-centered approach, ensuring the revamped design is not just visually appealing, but also functional and user-friendly. We also prioritize accessibility, allowing your design to be used by everyone.',
          },
          {
            id: 'faqs-3',
            title: 'How do you approach the UI/UX revamp process?',
            content:
              'We start by understanding your users and their needs. We then create modern, user-friendly designs and prototypes, which we rigorously test for usability and accessibility. We also work closely with your team throughout the process, ensuring the new design aligns with your business goals and objectives.',
          },
        ],
        subtitle:
          'Learn more about our UI/UX Revamp Service and how it can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Design modernisation',
            fa_icon: 'fa-sync',
            subtitle:
              'We modernise your design to align with current trends and user expectations, ensuring your product remains competitive.',
          },
          {
            title: 'Responsive design',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'We ensure your design works seamlessly across all devices for a consistent user experience.',
          },
          {
            title: 'User-centered design',
            fa_icon: 'fa-users',
            subtitle:
              'We put your users at the heart of the design process, creating designs that meet their needs and improve their experience.',
          },
          {
            title: 'Accessibility',
            fa_icon: 'fa-universal-access',
            subtitle:
              'We enhance the accessibility of your design, ensuring it can be used by everyone, regardless of their abilities or disabilities.',
          },
          {
            title: 'Prototyping & Testing',
            fa_icon: 'fa-layer-group',
            subtitle:
              'We create prototypes and conduct rigorous testing to ensure the revamped design is effective and user-friendly.',
          },
          {
            title: 'Collaboration',
            fa_icon: 'fa-handshake',
            subtitle:
              'We work closely with your team throughout the revamp process, ensuring the new design meets your business goals and objectives.',
          },
        ],
        overline: 'What We Do',
        subtitle:
          "We revamp your UI/UX design by adopting the latest design trends and technologies, ensuring your product aligns with your users' expectations.",
      },
      summary: {
        title: 'Revamping UI/UX for a better user experience.',
        items: [
          {
            title:
              'In this digital age, having a cutting-edge UI/UX design is crucial for the success of any business. At our UI/UX Revamp Service, we focus on modernising and enhancing your interfaces to create a more enjoyable and intuitive user experience. We understand that the user is at the heart of every design. Our approach prioritizes user needs and expectations, ensuring an end product that is not just visually appealing but also functional and user-friendly.',
          },
        ],
      },
    },
    subtitle:
      'Upgrade your business with an enhanced UI/UX design, created with the expertise of our specialized team.',
  },
  {
    // Hero
    title: 'Design Team Augmentation',
    slug: 'design-team-augmentation',
    category_id: 3,
    hero_alt: 'Man pointing to computer screen',
    hero_src: '/unsplash/bzqU01v-G54.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'What is Design Team Augmentation?',
            content:
              'Design Team Augmentation is a service that provides businesses with skilled design professionals who can seamlessly integrate into your existing team to help boost productivity, bring in specialized expertise, and drive innovation.',
          },
          {
            id: 'faqs-2',
            title: 'How can Design Team Augmentation benefit my business?',
            content:
              'Design Team Augmentation can provide numerous benefits. It can help increase your team’s capacity, bringing in experts who specialize in enterprise product design and user experience development. This can lead to faster project completion, innovative solutions, and ultimately, better business outcomes.',
          },
          {
            id: 'faqs-3',
            title: 'How does your Design Team Augmentation service work?',
            content:
              'We provide design professionals who can integrate into your team, understanding your project requirements and working towards your business goals. We offer flexibility, allowing you to scale up or down based on your needs. Our experts are skilled in enterprise product design and user experience development, providing you with high-quality solutions.',
          },
        ],
        subtitle:
          'Learn more about our Design Team Augmentation Service and how it can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Team Integration',
            fa_icon: 'fa-users-cog',
            subtitle:
              'Our professionals integrate seamlessly into your team, providing the additional support and skills necessary to drive your projects forward.',
          },
          {
            title: 'Enterprise Expertise',
            fa_icon: 'fa-briefcase',
            subtitle:
              'We bring specialized expertise in enterprise product design and user experience development to your projects.',
          },
          {
            title: 'Increased Productivity',
            fa_icon: 'fa-tasks',
            subtitle:
              'By supplementing your team, we increase productivity, allowing for faster project completion and improved results.',
          },
          {
            title: 'Innovative Solutions',
            fa_icon: 'fa-brain',
            subtitle:
              'Our team brings fresh ideas and perspectives, helping to drive innovative solutions for your business.',
          },
          {
            title: 'Flexibility',
            fa_icon: 'fa-clock',
            subtitle:
              'We provide resources on-demand, providing flexibility to scale up or down based on your project requirements.',
          },
          {
            title: 'Collaboration',
            fa_icon: 'fa-hands-helping',
            subtitle:
              'We work closely with your team to ensure our efforts align with your business goals and objectives.',
          },
        ],
        overline: 'What We Do',
        subtitle:
          'We supplement your team with expertise in enterprise product design and user experience development, ensuring your projects are completed with efficiency and excellence.',
      },
      summary: {
        title:
          'Expand your design capabilities with our experienced and highly-skilled team.',
        items: [
          {
            title:
              'We provide skilled professionals to integrate seamlessly into your team, enhancing your design capabilities and helping you meet project goals efficiently. Our experts specialize in enterprise product design and user experience development, bringing their wealth of experience to deliver innovative solutions tailored to your business needs.',
          },
        ],
      },
    },
    subtitle:
      'Boost your design projects by incorporating our specialized team into your existing infrastructure. Expand your design capabilities with our experienced and highly-skilled team.',
  },
].map((item, i) => {
  return merge({}, MOCK_SERVICE_PAGE, {
    id: i + 1,
    // Category
    category: getCategoryFromCrudItem(item, MOCK_DESIGN_SERVICE_CATEGORYS),
    ...item,
    sections: {
      ...item.sections,
      benefits: {
        title: 'Design Thinking for Enterprises',
        center: true,
        items: [
          {
            title: 'Design Strategy',
            fa_icon: 'fa-briefcase',
            href: `${routeConfig.SERVICES}/design-strategy`,
            subtitle:
              'Providing user-centric solutions at enterprise scale and speed.',
          },
          {
            title: 'Enterprise Design System',
            fa_icon: 'fa-gem',
            href: `${routeConfig.SERVICES}/enterprise-design-system`,
            subtitle:
              'Maximizing enterprise value through comprehensive system building.',
          },
          {
            title: 'UI/UX Design',
            fa_icon: 'fa-lightbulb',
            href: `${routeConfig.SERVICES}/ui-ux-design`,
            subtitle:
              'Emphasizing human-centered outcomes, creating relationship-driven experiences.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} empowers enterprise businesses with designs built to meet specific needs and requirements.',
      },
      checklist: {
        title: `Why {appTitle} for {title}`,
        overline: 'Why Us',
        subtitle:
          'Unlocking the potential of enterprise technology through personalized design thinking processes tailored to drive your business growth.',
      },
      cta: {
        title: 'Partnering with {appTitle}',
        hero_alt: 'Laser net over city',
        hero_src: '/images/about_nodes_above_city.png',
        overline: 'Get Started',
        subtitle:
          '{appTitle} collaborates with enterprises to create captivating and intuitive UI/UX designs for web and mobile interfaces. We excel at translating complex ideas into visually appealing and user-friendly interfaces, elevating your digital presence and driving customer satisfaction. Together, we create designs that leave a lasting impression and set your enterprise apart.',
      },
    },
    seo: {
      title: item.title,
      description: item.subtitle,
    },
  })
})

export const MOCK_DATA_SERVICES = [
  {
    title: 'Predictive Analytics',
    slug: 'predictive-analytics',
    // Hero
    category_id: 1,
    hero_alt: 'Sunrise lensball',
    hero_src: '/unsplash/xU5Mqq0Chck.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is predictive analytics important for my business?',
            content:
              'Predictive analytics can help your business anticipate future trends, identify opportunities, and make data-driven decisions. It provides a competitive edge by enabling you to understand customer behaviour, predict market trends, manage risks, and optimize operational efficiency.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of using your Predictive Analytics Service?',
            content:
              'We use a blend of data science expertise, advanced statistical techniques, and machine learning models to provide accurate predictive insights. Our team works closely with you to understand your specific business needs and tailor our solutions accordingly. We focus on transforming complex data into actionable insights that drive strategic planning and decision-making.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the accuracy of your predictions?',
            content:
              'Accuracy in predictive analytics is a result of quality data, appropriate model selection, and rigorous testing. We start with comprehensive data analysis to understand the patterns and trends. Then we choose or develop a predictive model that best suits your data and objectives. After making predictions, we validate our model against actual outcomes and refine it continuously to enhance its accuracy over time.',
          },
        ],
        subtitle:
          'Learn more about our Predictive Analytics Service and how we can empower your business decision making.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data Analysis',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We analyse your data to identify patterns and trends, providing a solid foundation for accurate predictions.',
          },
          {
            title: 'Machine Learning Models',
            fa_icon: 'fa-cogs',
            subtitle:
              'We apply machine learning models to your data, enhancing the accuracy of our predictive analytics.',
          },
          {
            title: 'Risk Management',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Our predictive models help you identify potential risks and develop strategies to mitigate them.',
          },
          {
            title: 'Insight Generation',
            fa_icon: 'fa-lightbulb',
            subtitle:
              'We transform complex data into actionable insights that can drive decision-making and strategic planning.',
          },
          {
            title: 'Continuous Optimization',
            fa_icon: 'fa-sync-alt',
            subtitle:
              'Our models are continuously updated and optimized to reflect changes in your data and ensure accurate predictions.',
          },
          {
            title: 'Collaborative Approach',
            fa_icon: 'fa-users-cog',
            subtitle:
              'We work closely with your team to understand your business objectives and tailor our predictive analytics to meet your specific needs.',
          },
        ],
        overline: 'What We Do',
        subtitle:
          'We are experts in extracting value from data, using advanced statistical techniques and machine learning models.',
      },
      summary: {
        title: 'Turning current data into actionable insights of the future.',
        items: [
          {
            title:
              'In a world powered by data, predictive analytics can make the difference between staying ahead or falling behind. With our predictive analytics services, we enable you to anticipate trends, predict future outcomes, and make data-driven decisions. We combine our expertise in data science, statistics, and machine learning to analyse current data and make accurate predictions about the future. This empowers your business to identify opportunities, mitigate risks, and create strategic plans for success.',
          },
        ],
      },
    },
    subtitle:
      'Leverage the power of data, statistical algorithms, and machine learning techniques for more accurate business forecasts.',
  },
  {
    title: 'AI Automation',
    slug: 'ai-automation',
    // Hero
    category_id: 1,
    hero_alt: '3D printer',
    hero_src: '/unsplash/UqCCSbAIaDU.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'What are the benefits of AI automation for enterprises?',
            content:
              'AI automation brings numerous benefits to enterprises, including increased operational efficiency, cost reduction, improved accuracy, enhanced customer experiences, and the ability to leverage data for strategic decision-making.',
          },
          {
            id: 'faqs-2',
            title: 'How can AI automation be implemented in my business?',
            content:
              'The implementation of AI automation in your business involves identifying suitable use cases, assessing data availability and quality, selecting appropriate AI technologies, and partnering with experts who can design and deploy tailored automation solutions.',
          },
          {
            id: 'faqs-3',
            title: 'What industries can benefit from AI automation?',
            content:
              'AI automation can benefit a wide range of industries, including finance, healthcare, manufacturing, retail, logistics, customer service, and more. Virtually any sector that deals with data-driven processes can leverage AI automation to gain efficiency and competitive advantages.',
          },
        ],
        subtitle:
          'Learn more about our AI Automation Service and how it can revolutionize your business processes.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Intelligent Process Automation',
            fa_icon: 'fa-robot',
            subtitle:
              'We implement AI-driven solutions that can understand, learn and adapt, automating complex business processes and tasks.',
          },
          {
            title: 'IT Operations Automation',
            fa_icon: 'fa-network-wired',
            subtitle:
              'We automate IT operations, improving efficiency and reducing the risk of errors.',
          },
          {
            title: 'Data Analysis Automation',
            fa_icon: 'fa-chart-line',
            subtitle:
              'Our AI solutions can automatically analyse large volumes of data, providing valuable insights and freeing up your team to focus on decision-making.',
          },
          {
            title: 'Customer Service Automation',
            fa_icon: 'fa-headset',
            subtitle:
              'We can automate your customer service operations, reducing response times and improving customer satisfaction.',
          },
          {
            title: 'Maintenance and Support',
            fa_icon: 'fa-tools',
            subtitle:
              'We offer ongoing maintenance and support, ensuring that your AI systems are always up-to-date and performing optimally.',
          },
          {
            title: 'Custom AI Solutions',
            fa_icon: 'fa-project-diagram',
            subtitle:
              'We design and implement custom AI solutions to meet your unique business needs and objectives.',
          },
        ],
        overline: 'What We Do',
        subtitle:
          'With our AI automation services, we help businesses reduce operational costs, increase efficiency, and stay competitive in the digital age.',
      },
      summary: {
        title: 'Unlock the potential of AI for streamlined automation.',
        items: [
          {
            title:
              'In the era of digital transformation, AI plays a pivotal role in automating and optimizing business processes. We specialize in harnessing the power of AI to streamline operations, improve efficiency, and drive innovation. We believe that AI automation goes beyond cost reduction; it empowers enterprises to unlock new opportunities and gain a competitive edge. Our team of experts combines cutting-edge AI technologies with deep industry knowledge to deliver tailored automation solutions that transform businesses.',
          },
        ],
      },
    },
    subtitle:
      'Leverage cutting-edge AI technologies to automate and streamline your business processes.',
  },
  {
    title: 'ChatGPT Integration',
    slug: 'chatgpt-integration',
    // Hero
    category_id: 1,
    hero_alt: 'ChatGPT logo',
    hero_src: '/unsplash/agFmImWyPso.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'What is ChatGPT?',
            content:
              'ChatGPT is an advanced language model developed by OpenAI that can generate human-like responses and hold context-rich conversations. It uses deep learning techniques to understand and generate text based on the input it receives.',
          },
          {
            id: 'faqs-2',
            title: 'How can ChatGPT benefit my applications?',
            content:
              'By integrating ChatGPT into your applications, you can provide natural and interactive conversational experiences to your users. ChatGPT can assist with tasks, answer questions, provide recommendations, and engage users in dynamic conversations, enhancing user satisfaction and improving overall user experience.',
          },
          {
            id: 'faqs-3',
            title: 'Is ChatGPT customizable for specific domains?',
            content:
              'Yes, ChatGPT can be customized for specific domains by training it on domain-specific datasets and fine-tuning the model. This allows ChatGPT to provide more accurate and relevant responses tailored to your application and industry.',
          },
        ],
        subtitle:
          'Learn more about our ChatGPT Integration Service and how it can enhance your applications.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Chatbot Development',
            fa_icon: 'fa-comments',
            subtitle:
              'Design and develop intelligent chatbots that can understand user queries, provide relevant responses, and perform actions.',
          },
          {
            title: 'Customer Support Automation',
            fa_icon: 'fa-comments-dollar',
            subtitle:
              'Automate customer support processes by integrating ChatGPT to handle frequently asked questions, provide instant assistance, and escalate complex issues to human agents when needed.',
          },
          {
            title: 'Healthcare Virtual Assistants',
            fa_icon: 'fa-medkit',
            subtitle:
              'Create virtual assistants powered by ChatGPT to assist healthcare professionals, patients, and caregivers by providing medical information, appointment scheduling, and personalized guidance.',
          },
          {
            title: 'Interactive Interfaces',
            fa_icon: 'fa-desktop',
            subtitle:
              'Build interactive conversational interfaces for applications, websites, and messaging platforms to enable seamless user interactions and personalized recommendations.',
          },
          {
            title: 'Developer Tools and APIs',
            fa_icon: 'fa-code',
            subtitle:
              'Provide developers with tools, APIs, and documentation for easy integration of ChatGPT into their applications and systems.',
          },
          {
            title: 'Customization and Training',
            fa_icon: 'fa-users',
            subtitle:
              'Tailor ChatGPT to your specific domain and requirements by training it on your custom datasets and fine-tuning the model for optimal performance.',
          },
        ],
        overline: 'What We Do',
        subtitle:
          'We offer a range of ChatGPT integration capabilities to enable seamless and dynamic conversational experiences.',
      },
      summary: {
        title: 'Transform your applications with ChatGPT.',
        items: [
          {
            title:
              'Conversational AI is revolutionizing customer experiences and business interactions. With our ChatGPT Integration Service, we specialize in incorporating ChatGPT, a powerful language model, into your applications to enable natural and engaging conversations with your users. We believe that effective communication plays a critical role in driving customer satisfaction and business success. Our team of experts leverages ChatGPT to create intelligent chatbots, virtual assistants, and other conversational interfaces that deliver personalized and context-aware interactions.',
          },
        ],
      },
    },
    subtitle: 'Enhance your digital capabilities with AI powered by ChatGPT.',
  },
  {
    title: 'Prompt Engineering',
    slug: 'prompt-engineering',
    // Hero
    category_id: 1,
    hero_alt: 'Miniature blocks and train tracks',
    hero_src: '/unsplash/ZJKE4XVlKIA.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is Prompt Engineering important for my business?',
            content:
              'Prompt Engineering can significantly enhance user engagement and satisfaction by providing personalized, context-aware prompts. These prompts can drive conversions and improve user experience, contributing to increased customer loyalty and business growth.',
          },
          {
            id: 'faqs-2',
            title: 'How does your Prompt Engineering service work?',
            content:
              'Our Prompt Engineering service leverages AI and deep learning to design and deliver intelligent prompts. We work closely with enterprise clients to understand their needs and customize our prompts accordingly. Our systems ensure timely delivery and context-awareness for maximum effectiveness and personalization.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the effectiveness of your prompts?',
            content:
              'We continually analyse the performance of our prompts and adjust our strategies based on the insights we gain. We also design our prompts to be user-centric, which increases their relevance and effectiveness.',
          },
        ],
        subtitle:
          'Learn more about our Prompt Engineering service and how it can benefit your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'AI-driven prompts',
            fa_icon: 'fa-brain',
            subtitle:
              'We utilize advanced AI algorithms to generate prompts that engage users and drive interactions.',
          },
          {
            title: 'Timely delivery',
            fa_icon: 'fa-clock',
            subtitle:
              'Our systems ensure that prompts are delivered at the most appropriate times for maximized effectiveness.',
          },
          {
            title: 'Context-aware',
            fa_icon: 'fa-sync',
            subtitle:
              'We design prompts that take into account the context of the user for increased personalization and relevance.',
          },
          {
            title: 'Performance optimization',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We constantly analyse the performance of our prompts and make adjustments to optimize their effectiveness.',
          },
          {
            title: 'User-centric design',
            fa_icon: 'fa-users-cog',
            subtitle:
              'We design prompts with the user in mind, ensuring a seamless and satisfying user experience.',
          },
          {
            title: 'Integration support',
            fa_icon: 'fa-puzzle-piece',
            subtitle:
              'We provide support for integrating our prompt systems into your existing workflows and infrastructure.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Harness the power of AI and data science to deliver intelligent, personalized prompts.',
      },
      summary: {
        title: 'Transforming interactions with intelligent prompts.',
        items: [
          {
            title:
              'In the age of personalization, intelligent prompts can significantly enhance user engagement and satisfaction. We design AI-powered prompts that are timely, relevant, and context-aware, creating a personalized experience for each user. Working with enterprise clients, we leverage deep learning and AI to create prompts that resonate with users and drive conversions. Our prompts are designed to feel natural, improving user experience and boosting customer loyalty.',
          },
        ],
      },
    },
    subtitle:
      'Leverage the power of AI to improve engagement and increase conversions with personalized, context-aware prompts. ',
  },
  {
    title: 'OpenAI API Integration',
    slug: 'openai-api-integration',
    // Hero
    category_id: 1,
    hero_alt: 'Colourful cubic components',
    hero_src: '/unsplash/_HnJfS6WhA8.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is OpenAI API Integration important for my business?',
            content:
              'OpenAI API Integration can significantly enhance your business capabilities by introducing AI-driven automation and insights. It can improve efficiency, drive innovation, and give you a competitive edge in the market.',
          },
          {
            id: 'faqs-2',
            title: 'How does your OpenAI API Integration service work?',
            content:
              'Our team of experts will work with you to understand your business needs and design an integration plan. We will then implement the OpenAI APIs into your existing systems, ensuring seamless integration and optimal performance. We also provide ongoing support and updates to ensure your systems stay up-to-date.',
          },
          {
            id: 'faqs-3',
            title:
              'What kind of support can I expect after the OpenAI API integration?',
            content:
              'We provide continuous support and maintenance post-integration. This includes performance monitoring, handling API updates and changes, and resolving any issues that may arise. Our goal is to ensure the integrated APIs continuously meet your business needs.',
          },
        ],
        subtitle:
          'Learn more about our OpenAI API Integration service and how it can benefit your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'System Integration',
            fa_icon: 'fa-cogs',
            subtitle:
              'We ensure seamless integration of OpenAI APIs into your existing systems and workflows.',
          },
          {
            title: 'AI Solutions',
            fa_icon: 'fa-brain',
            subtitle:
              'We help implement advanced AI capabilities to drive efficiency and innovation in your business processes.',
          },
          {
            title: 'Security & Compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize security and compliance in all our integration processes.',
          },
          {
            title: 'Performance Optimization',
            fa_icon: 'fa-tasks',
            subtitle:
              'We monitor and optimize the performance of the integrated APIs to ensure they meet your business needs.',
          },
          {
            title: 'Continuous Updates',
            fa_icon: 'fa-sync',
            subtitle:
              'We ensure your systems stay up-to-date with the latest API changes and features.',
          },
          {
            title: 'Client Support',
            fa_icon: 'fa-users-cog',
            subtitle:
              'We provide ongoing support and maintenance to ensure smooth operation.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Discover our wide range of capabilities for integrating the OpenAI API into your business systems.',
      },
      summary: {
        title: 'Driving business transformation with OpenAI.',
        items: [
          {
            title:
              'The integration of OpenAI APIs can revolutionize your business, enabling automated processes, advanced analytics, and more. Our services help businesses seamlessly incorporate these powerful AI capabilities into their existing systems. We understand the challenges that businesses face when implementing AI solutions. Our team of experts will work closely with you to understand your business needs and design an OpenAI API integration plan that maximizes the potential of AI for your business.',
          },
        ],
      },
    },
    subtitle:
      'Integrate cutting-edge AI solutions into your business processes.',
  },
  {
    title: 'ChatGPT Plugin Development',
    slug: 'chatgpt-plugin-development',
    // Hero
    category_id: 1,
    hero_alt: 'ChatGPT home page',
    hero_src: '/unsplash/MMUzS5Qzuus.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why should I consider developing ChatGPT plugins for my enterprise solutions?',
            content:
              'ChatGPT plugins can significantly enhance user experiences by enabling advanced conversational capabilities. They can be used for a variety of purposes, including customer support, knowledge management, process automation, and more. By developing custom ChatGPT plugins tailored to your enterprise needs, you can empower your organisation with intelligent conversational interfaces that streamline workflows, improve customer interactions, and drive business value.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of partnering with your ChatGPT Plugin Development service?',
            content:
              'Our ChatGPT Plugin Development service combines deep domain knowledge, AI expertise, and agile development methodologies to deliver custom plugins that enhance your enterprise data and AI solutions. By partnering with us, you can leverage our experience in developing ChatGPT plugins, ensuring seamless integration with your existing systems, personalized user experiences, scalability, multilingual support, and adherence to security and compliance standards. We work closely with your team to understand your requirements and deliver tailored solutions that meet your enterprise needs.',
          },
          {
            id: 'faqs-3',
            title: 'How does your team approach ChatGPT plugin development?',
            content:
              'We follow a collaborative and iterative approach to ChatGPT plugin development. Our team works closely with your organisation to understand your requirements, domain-specific challenges, and desired outcomes. We leverage our AI expertise to design and develop custom ChatGPT plugins that address your unique needs. Throughout the development process, we ensure seamless integration with your existing systems, data privacy, scalability, multilingual support, and compliance with industry regulations. We also provide ongoing support and maintenance to ensure the optimal performance of the ChatGPT plugins.',
          },
        ],
        subtitle:
          'Learn more about our ChatGPT Plugin Development service and how it can enhance your enterprise data and AI solutions.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Custom Plugin Development',
            fa_icon: 'fa-cogs',
            subtitle:
              'We specialize in developing custom ChatGPT plugins tailored to your enterprise requirements, enabling advanced conversational capabilities.',
          },
          {
            title: 'Data Integration',
            fa_icon: 'fa-database',
            subtitle:
              'We ensure seamless integration of ChatGPT plugins with your enterprise data systems, enabling access to relevant information and insights.',
          },
          {
            title: 'User Personalization',
            fa_icon: 'fa-users-cog',
            subtitle:
              'We implement user personalization features in ChatGPT plugins, enabling personalized user experiences and recommendations.',
          },
          {
            title: 'Scalable Architecture',
            fa_icon: 'fa-code',
            subtitle:
              'We design and develop ChatGPT plugins with a scalable architecture, allowing for future growth and increasing demand.',
          },
          {
            title: 'Multilingual Support',
            fa_icon: 'fa-comments',
            subtitle:
              'We enable multilingual support in ChatGPT plugins, allowing for conversations in multiple languages to cater to a global audience.',
          },
          {
            title: 'Security and Compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize security and compliance in ChatGPT plugin development, ensuring data privacy and adherence to industry regulations.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our ChatGPT Plugin Development service combines deep domain knowledge, AI expertise, and agile development methodologies to deliver custom plugins that enhance your enterprise data and AI solutions.',
      },
      summary: {
        title: 'Custom ChatGPT plugins for your enterprise needs.',
        items: [
          {
            title:
              'In the era of AI-driven interactions, ChatGPT can play a crucial role in enhancing user experience and engagement. We specialize in creating powerful plugins that seamlessly integrate with your business. Our team of experts follows a data-centric approach to create intelligent plugins that understand and respond to user queries effectively, delivering personalized experiences and driving meaningful interactions.',
          },
        ],
      },
    },
    subtitle:
      'Leverage our expertise to develop powerful ChatGPT plugins for your business.',
  },
  {
    title: 'Data Warehousing',
    slug: 'data-warehousing',
    // Hero
    category_id: 2,
    hero_alt: 'Fibre optic cable rack',
    hero_src: '/unsplash/8xnaQKWjDrM.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is a well-structured data warehouse important for my business?',
            content:
              'A well-structured data warehouse centralizes your data, improving accessibility and reliability. It enables efficient data analysis and reporting, leading to informed business decisions and strategies. Additionally, a well-managed data warehouse ensures data security and compliance with data regulations.',
          },
          {
            id: 'faqs-2',
            title: 'What are the benefits of your Data Warehousing Service?',
            content:
              'Our Data Warehousing Service offers a comprehensive approach to data management. We handle every aspect, from designing robust data architectures, integrating disparate data sources, managing the data lifecycle, to ensuring top-notch data security. We work closely with your team, providing consultation and training to enable effective use of your data warehouse.',
          },
          {
            id: 'faqs-3',
            title: 'What is your approach to data warehousing?',
            content:
              'We start by understanding your business needs and existing data infrastructure. Based on this, we design a tailored data architecture, followed by integrating data sources, transforming data for analysis, and implementing data security measures. We oversee the entire data lifecycle and provide expert consultation and training to your team.',
          },
        ],
        subtitle:
          'Learn more about our Data Warehousing Service and how we can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data Architecture',
            fa_icon: 'fa-database',
            subtitle:
              'We design robust data architectures that effectively manage large volumes of data.',
          },
          {
            title: 'Data Integration',
            fa_icon: 'fa-sync-alt',
            subtitle:
              'We ensure seamless integration of disparate data sources into a unified, accessible system.',
          },
          {
            title: 'Data Transformation',
            fa_icon: 'fa-cogs',
            subtitle:
              'We convert raw data into a more suitable format for reporting and analysis.',
          },
          {
            title: 'Data Security',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We implement strict security measures to safeguard your valuable data assets.',
          },
          {
            title: 'Data Lifecycle Management',
            fa_icon: 'fa-clock',
            subtitle:
              'We oversee the entire data lifecycle, from creation and maintenance to retirement.',
          },
          {
            title: 'Consultation and Training',
            fa_icon: 'fa-users-cog',
            subtitle:
              'We offer expert consultation and training to your team for effective data warehouse management.',
          },
        ],
        overline: 'What We Do',
        subtitle:
          'Our service covers every aspect of data warehousing to ensure your data is handled with utmost efficiency.',
      },
      summary: {
        title: 'Streamlining data storage and accessibility.',
        items: [
          {
            title:
              'In the era of data-driven decision making, a well-designed data warehouse is a powerful tool. We focus on building structured, efficient, and reliable data warehouses that cater to your specific business needs. We believe in the power of data to drive insights and innovation. Our team of data professionals works to align your data infrastructure with your business goals, ensuring seamless operation and maximum utility.',
          },
        ],
      },
    },
    subtitle:
      'Build a solid foundation for your data with our expert data warehousing solutions.',
  },
  {
    title: 'Data Pipeline Architecture',
    slug: 'data-pipeline-architecture',
    // Hero
    category_id: 2,
    hero_alt: 'Connected data blocks',
    hero_src: '/unsplash/KU9ABpm7eV8.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is a well-designed data pipeline crucial for my business?',
            content:
              'A well-designed data pipeline is essential for handling data effectively. It enables seamless data flow, accurate processing, secure storage, and ultimately, better decision-making. With a robust data pipeline, your business can achieve improved operational efficiency, quicker insights, and enhanced data-driven strategies.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of your Data Pipeline Architecture service?',
            content:
              'Our service offers end-to-end solutions for your data pipeline needs. From efficient data ingestion and processing to secure storage and performance optimization, we cover all aspects. Our team works closely with you, understanding your unique needs, and designs a data pipeline architecture that aligns with your business goals. We also provide consultation and training for effective management of your data infrastructure.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the scalability of the data pipeline?',
            content:
              'We understand that as your business grows, your data needs will also evolve. We design the data pipeline architecture with scalability as a priority. This includes choosing scalable data storage solutions, implementing mechanisms for efficient data processing even with increasing volumes, and ensuring that the architecture can accommodate additional data sources in the future.',
          },
        ],
        subtitle:
          'Learn more about our Data Pipeline Architecture service and how it can benefit your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data Ingestion',
            fa_icon: 'fa-arrow-circle-right',
            subtitle:
              'We facilitate seamless data ingestion from various sources into your data pipeline.',
          },
          {
            title: 'Data Processing',
            fa_icon: 'fa-cogs',
            subtitle:
              'We implement robust data processing mechanisms to cleanse, validate, and transform your data.',
          },
          {
            title: 'Data Storage',
            fa_icon: 'fa-database',
            subtitle:
              'We design reliable and scalable data storage solutions to house your processed data.',
          },
          {
            title: 'Data Security',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize data security, implementing rigorous protocols to protect your valuable data.',
          },
          {
            title: 'Performance Optimization',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We optimize your data pipeline for high performance, ensuring rapid data flow and processing.',
          },
          {
            title: 'Consultation and Training',
            fa_icon: 'fa-users-cog',
            subtitle:
              'We offer expert consultation and training to your team for efficient data pipeline management.',
          },
        ],
        overline: 'What We Do',
        subtitle:
          'From data ingestion to processing and storage, we cover all aspects of data pipeline architecture.',
      },
      summary: {
        title: 'Architecting the backbone of your data operations.',
        items: [
          {
            title:
              'We focus on engineering efficient data flows that allow your organisation to manage and utilize data effectively. In a world of data-driven decisions, a well-designed data pipeline is crucial. We prioritize scalability, reliability, and performance when designing your data pipeline architecture. Our team of experts ensures your data infrastructure aligns with your business goals and supports your growth.',
          },
        ],
      },
    },
    subtitle:
      'Engineer a streamlined, robust data flow for your organisation with our expert solutions.',
  },
  {
    title: 'Big Data Solutions',
    slug: 'big-data-solutions',
    // Hero
    category_id: 2,
    hero_alt: 'Multiple data screens',
    hero_src: '/unsplash/iM8dxccK1sY.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is big data important for my business?',
            content:
              'Big data can provide insights that enable you to make more informed decisions, identify new opportunities, improve customer service, and optimize operational efficiency. Effectively leveraging big data can lead to significant business growth and competitive advantage.',
          },
          {
            id: 'faqs-2',
            title:
              'What types of big data solutions does your company provide?',
            content:
              'Our big data solutions encompass a broad range of services including data management, data analytics, data processing, data security, data integration, and the integration of AI and machine learning technologies. We tailor our solutions based on your specific business needs and goals.',
          },
          {
            id: 'faqs-3',
            title: 'How can I be sure that my data is secure?',
            content:
              'We prioritize data security in all of our solutions. We implement stringent security measures and follow best practices in data encryption, access control, and compliance to ensure the privacy and protection of your data.',
          },
        ],
        subtitle:
          'Learn more about our Big Data Solutions Service and how it can benefit your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data management',
            fa_icon: 'fa-database',
            subtitle:
              'We ensure efficient data management, allowing for the secure storage, retrieval, and processing of large volumes of data.',
          },
          {
            title: 'Data analytics',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We provide advanced analytics capabilities, helping you to gain insights and drive decision-making from your data.',
          },
          {
            title: 'Data processing',
            fa_icon: 'fa-cogs',
            subtitle:
              'We design and implement robust data processing pipelines to handle complex and large-scale data efficiently.',
          },
          {
            title: 'Data security',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We implement stringent data security measures to ensure the protection and privacy of your data.',
          },
          {
            title: 'Data integration',
            fa_icon: 'fa-sync',
            subtitle:
              'We integrate data from disparate sources, providing a unified view of your business data.',
          },
          {
            title: 'AI and ML integration',
            fa_icon: 'fa-brain',
            subtitle:
              'We leverage AI and machine learning to extract valuable insights and automate processes, enhancing your business performance.',
          },
        ],
        overline: 'What We Do',
        subtitle:
          'We deliver end-to-end big data solutions tailored to your business needs, providing you with actionable insights and enabling data-driven decision-making.',
      },
      summary: {
        title: 'Making data work for your business.',
        items: [
          {
            title:
              'With the exponential growth in data, enterprises today are challenged by the need to extract actionable insights from these vast data sets. Our big data solutions are designed to help enterprises leverage the power of data to drive growth, efficiency, and innovation. We have a team of data experts who specialize in managing, processing, and analyzing large data sets. Using state-of-the-art technologies and techniques, we deliver solutions that enable businesses to access, analyse, and use their data effectively and efficiently.',
          },
        ],
      },
    },
    subtitle:
      'Harness the power of data to drive growth and innovation in your business with our big data solutions.',
  },
  {
    title: 'Data ETL',
    slug: 'data-etl',
    // Hero
    category_id: 2,
    hero_alt: '3D illustration of blocks in a blockchain',
    hero_src: '/unsplash/_rZnChsIFuQ.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'What is the importance of ETL for my business?',
            content:
              "ETL is vital for data-driven decision making in businesses. It helps collect data from various sources, clean and organize it, and store it in a manner that's optimized for analysis. This facilitates accurate, timely insights that can drive business strategy.",
          },
          {
            id: 'faqs-2',
            title: 'How can your Data ETL service help my business?',
            content:
              'Our Data ETL service helps businesses streamline their data workflows. We ensure that data is extracted from various sources, transformed into a consistent format, and loaded into a target system efficiently. This prepares the data for analysis and reporting, enabling businesses to make informed decisions based on accurate data.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure data security during the ETL process?',
            content:
              'Data security is a top priority in our ETL processes. We use secure methods for data extraction, transformation, and loading. We also enforce strict access controls and use encryption to protect sensitive data.',
          },
        ],
        subtitle:
          'Find answers to common questions about our Data ETL service.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data extraction',
            fa_icon: 'fa-cloud-download-alt',
            subtitle:
              'We extract data from various sources, ensuring it is accurate, relevant, and ready for transformation.',
          },
          {
            title: 'Data transformation',
            fa_icon: 'fa-cogs',
            subtitle:
              'We transform data into a consistent format that can be easily analysed and understood.',
          },
          {
            title: 'Data loading',
            fa_icon: 'fa-database',
            subtitle:
              'We efficiently load transformed data into your target system or data warehouse for further use.',
          },
          {
            title: 'Data security',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize data security, ensuring your data remains protected throughout the ETL process.',
          },
          {
            title: 'Data integration',
            fa_icon: 'fa-sync-alt',
            subtitle:
              'We facilitate seamless data integration, ensuring your data sources work together effectively.',
          },
          {
            title: 'Performance optimization',
            fa_icon: 'fa-tachometer-alt',
            subtitle:
              'We optimize ETL processes for performance, ensuring your data workflows run smoothly and efficiently.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our comprehensive suite of ETL services is designed to help businesses optimize their data workflows.',
      },
      summary: {
        title: 'Streamlining data extraction, transformation, and loading.',
        items: [
          {
            title:
              'Data ETL (Extraction, Transformation, and Loading) is a crucial process for any data-driven organisation. It involves extracting data from disparate sources, transforming it into a consistent format, and loading it into a target database or data warehouse for analysis and reporting. We specialize in designing and implementing ETL processes that are efficient, reliable, and scalable. We work closely with enterprise clients to understand their data needs and craft ETL solutions that enable them to leverage their data more effectively.',
          },
        ],
      },
    },
    subtitle:
      'Optimize your data workflow with our efficient, reliable, and scalable ETL solutions.',
  },
  {
    title: 'Data Roadmap Development',
    slug: 'data-roadmap-development',
    // Hero
    category_id: 3,
    hero_alt: 'Winding road in forested area',
    hero_src: '/unsplash/vv-oEGlN-4E.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is a data roadmap important for my business?',
            content:
              'A data roadmap provides a strategic framework for your data initiatives, aligning them with your business objectives. It outlines the steps needed to achieve your data goals and provides a clear vision of your data future. This helps ensure efficient use of resources, facilitates better decision making, and accelerates business growth.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your Data Roadmap Development Service?',
            content:
              'Our Data Roadmap Development Service specializes in crafting detailed, scalable data roadmaps. We work closely with you, understanding your business vision and data landscape, to align your data initiatives with your business objectives. Our comprehensive approach ensures you have a clear data strategy, effective project planning, suitable performance metrics, and continuous roadmap iterations for sustained growth.',
          },
          {
            id: 'faqs-3',
            title: 'How do you develop a data roadmap?',
            content:
              'We start by understanding your business objectives and existing data landscape. From there, we define a clear data strategy and outline the data initiatives needed to achieve this strategy. We then craft a detailed, scalable roadmap, plan your data projects, define key performance indicators, and provide advice on suitable data technologies. We also continuously revisit and update the roadmap based on changes in your business, technology, or performance metrics.',
          },
        ],
        subtitle:
          'Learn more about our Data Roadmap Development Service and how it can benefit your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data Strategy Formulation',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We work with you to define a clear data strategy that aligns with your business objectives and guides your data initiatives.',
          },
          {
            title: 'Roadmap Development',
            fa_icon: 'fa-road',
            subtitle:
              "We create a detailed, scalable data roadmap that outlines your data initiatives and how they'll be executed.",
          },
          {
            title: 'Project Planning',
            fa_icon: 'fa-tasks',
            subtitle:
              'We help you plan your data projects, defining clear objectives, timelines, and responsibilities.',
          },
          {
            title: 'Performance Metrics',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We define key performance indicators to measure the success of your data initiatives and adjust the roadmap as needed.',
          },
          {
            title: 'Technological Advice',
            fa_icon: 'fa-tools',
            subtitle:
              'We provide advice on the best data technologies and tools that align with your data strategy and roadmap.',
          },
          {
            title: 'Roadmap Iteration',
            fa_icon: 'fa-sync',
            subtitle:
              'We continuously revisit and update your data roadmap based on business changes, technological advancements, and performance metrics.',
          },
        ],
        overline: 'What We Do',
        subtitle:
          'We provide a range of services to ensure the development of an efficient and effective data roadmap.',
      },
      summary: {
        title: 'Crafting data roadmaps that accelerate business growth.',
        items: [
          {
            title:
              'In a data-driven era, an effective data roadmap is pivotal for successful business strategy. We specialize in creating detailed, scalable data roadmaps that align with your business objectives. Our experts understand the importance of a well-planned data strategy. We work closely with your teams, understanding your business vision and existing data landscape, to craft roadmaps that guide your data initiatives and drive growth.',
          },
        ],
      },
    },
    subtitle:
      'Expert guidance to craft an effective data roadmap aligned with your enterprise goals.',
  },
  {
    title: 'Business Intelligence Consulting',
    slug: 'business-intelligence-consulting',
    // Hero
    category_id: 3,
    hero_alt: 'Businessman using laptop',
    hero_src: '/unsplash/774sCXD0dDU.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is business intelligence important for my enterprise?',
            content:
              'Business Intelligence (BI) provides crucial insights into your operations, customer behaviour, and market trends. It allows you to make data-driven decisions, optimize processes, and drive business growth. Without BI, your decisions are likely based on intuition rather than evidence, which can lead to inefficiencies and missed opportunities.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your Business Intelligence Consulting Service?',
            content:
              'We offer comprehensive BI consulting services, helping you manage your data, implement the right BI tools, and generate actionable insights. Our team of experts works closely with your organisation, providing tailored solutions that align with your business objectives. We also provide training and support, ensuring your team is equipped to leverage your BI infrastructure effectively.',
          },
          {
            id: 'faqs-3',
            title: 'How do you approach business intelligence consulting?',
            content:
              'We start by understanding your business objectives, data landscape, and current challenges. We then provide expert guidance on managing your data, choosing and implementing BI tools, and interpreting data outputs. We also offer training to foster a data-driven culture within your organisation, ensuring your team can effectively use your BI tools and interpret the insights they provide.',
          },
        ],
        subtitle:
          'Learn more about our Business Intelligence Consulting Service and how it can benefit your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data Analytics',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We utilize sophisticated data analysis techniques to uncover patterns and trends in your data.',
          },
          {
            title: 'Data Management',
            fa_icon: 'fa-database',
            subtitle:
              "We help you manage your data effectively to ensure it's always ready for analysis.",
          },
          {
            title: 'Data Infrastructure',
            fa_icon: 'fa-cogs',
            subtitle:
              'We guide you in building a robust data infrastructure that supports your business intelligence needs.',
          },
          {
            title: 'BI Tools Implementation',
            fa_icon: 'fa-tools',
            subtitle:
              'We implement leading BI tools tailored to your specific needs, ensuring you have the right technology in place.',
          },
          {
            title: 'Insight Generation',
            fa_icon: 'fa-lightbulb',
            subtitle:
              'We transform raw data into actionable insights that inform business strategy and decision-making.',
          },
          {
            title: 'Training and Support',
            fa_icon: 'fa-users',
            subtitle:
              'We provide training and ongoing support to foster a data-driven culture within your organisation.',
          },
        ],
        overline: 'What We Do',
        subtitle:
          'We offer a comprehensive range of services to help you maximize the value of your data.',
      },
      summary: {
        title: 'Transforming data into actionable business insights.',
        items: [
          {
            title:
              'Given the competitive landscape enterprises find themselves in, making informed decisions is key to success. Our consulting service leverages cutting-edge technologies and proven methodologies to turn your data into meaningful insights. We work closely with your team to understand your business objectives and challenges. Our consultants provide expert guidance to help you make the most of your data, fostering a data-driven culture within your organisation.',
          },
        ],
      },
    },
    subtitle:
      'Utilize data-driven insights to drive decision making and business growth.',
  },
  {
    title: 'Data Scraping',
    slug: 'data-scraping',
    // Hero
    category_id: 3,
    hero_alt: 'Website Analytics Page',
    hero_src: '/unsplash/shr_Xn8S8QU.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is data scraping important for my business?',
            content:
              'Data scraping allows your business to gather large amounts of data from various sources. This data, when analysed, can provide valuable insights to help drive strategic business decisions, understand market trends, and deliver enhanced customer experiences.',
          },
          {
            id: 'faqs-2',
            title: 'What are the benefits of your Data Scraping service?',
            content:
              'Our Data Scraping service enables you to access precise and relevant data swiftly and efficiently. Our expert team ensures that the data gathered is accurate, reliable, and tailored to your specific business needs. We follow best practices in data privacy, making sure all the data collected is handled in compliance with data protection regulations.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the quality of scraped data?',
            content:
              'We use advanced tools and techniques to ensure the data we extract is of the highest quality. This includes cross-validation methods and automated checks for data accuracy. Additionally, our ongoing maintenance ensures your data remains up-to-date and relevant.',
          },
        ],
        subtitle:
          'Explore frequently asked questions about our Data Scraping services and understand how we can support your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data extraction',
            fa_icon: 'fa-cloud-download-alt',
            subtitle:
              'We extract data from various online sources, ensuring it is comprehensive and precise to meet your business requirements.',
          },
          {
            title: 'Web scraping',
            fa_icon: 'fa-code',
            subtitle:
              'We use state-of-the-art technologies to scrape web data accurately and efficiently, delivering it in your preferred format.',
          },
          {
            title: 'Database creation',
            fa_icon: 'fa-database',
            subtitle:
              'We organize the extracted data into clean, structured databases for easy access and analysis.',
          },
          {
            title: 'Data analysis',
            fa_icon: 'fa-chart-pie',
            subtitle:
              'Our team of data scientists will analyse your data to identify patterns, trends, and insights that can drive your business growth.',
          },
          {
            title: 'Data privacy',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We ensure all data is handled in compliance with data protection regulations, safeguarding your business and customer information.',
          },
          {
            title: 'Ongoing maintenance',
            fa_icon: 'fa-sync',
            subtitle:
              'We provide ongoing maintenance and support to ensure your data remains updated and reliable.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our data scraping services encompass a range of capabilities that enable businesses to extract, process, and leverage data effectively.',
      },
      summary: {
        title: 'Focus on data that can drive your business success.',
        items: [
          {
            title:
              'In an increasingly data-driven world, it is vital for businesses to extract, analyse, and derive insights from vast amounts of data. We help businesses gather valuable data, enabling them to make informed decisions and stay ahead in the competitive landscape. Using advanced tools and technologies, we ensure the data extracted is accurate, reliable, and relevant. Our team of data professionals work closely with clients to understand their specific requirements and deliver tailored solutions that drive measurable results.',
          },
        ],
      },
    },
    subtitle: 'Leverage our expertise to extract and analyse data that matter.',
  },
  {
    title: 'Data Visualisation',
    slug: 'data-visualisation',
    // Hero
    category_id: 3,
    hero_alt: 'Data filters',
    hero_src: '/unsplash/4QVqSh4VvP4.jpg',
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is data visualization important for my business?',
            content:
              'Data visualization can help businesses understand complex data and identify new patterns and trends. It allows for easier data interpretation, facilitates quicker decision-making, and helps communicate insights in a clear and effective manner.',
          },
          {
            id: 'faqs-2',
            title: 'What kind of data can be visualized?',
            content:
              'Almost any type of data can be visualized, provided it is structured appropriately. This includes sales data, customer data, performance data, market research data, and much more. The goal is to transform raw, complex data into visual insights that inform decision-making.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the accuracy of visualized data?',
            content:
              'We implement rigorous data management practices to ensure the data being visualized is accurate and up-to-date. This includes data cleaning, validation, and regular updates. We also work closely with our clients to understand their data and ensure it is presented accurately.',
          },
        ],
        subtitle:
          'Get answers to frequently asked questions about our Data Visualization service.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Interactive dashboards',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We create interactive dashboards that allow you to explore and interact with your data, facilitating better understanding and decision-making.',
          },
          {
            title: 'Data storytelling',
            fa_icon: 'fa-project-diagram',
            subtitle:
              'We transform complex data into engaging visual stories that reveal key insights and guide strategic decisions.',
          },
          {
            title: 'Customized reports',
            fa_icon: 'fa-chart-pie',
            subtitle:
              'We design and develop tailored reports that present data in a clear, concise, and visually appealing manner.',
          },
          {
            title: 'Data management',
            fa_icon: 'fa-database',
            subtitle:
              'We ensure your data is organized and structured properly for effective visualization.',
          },
          {
            title: 'Visual analytics',
            fa_icon: 'fa-eye',
            subtitle:
              'Our team performs visual analytics to reveal hidden patterns, trends, and insights in your data.',
          },
          {
            title: 'Consulting and strategy',
            fa_icon: 'fa-cogs',
            subtitle:
              'We provide data visualization consulting and strategy services to ensure your data visualization efforts align with your business objectives.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We offer a suite of data visualization services tailored to help businesses make the most of their data.',
      },
      summary: {
        title: 'Turning raw data into visual stories.',
        items: [
          {
            title:
              'As data continues to play an increasingly important role in business decision-making, the ability to understand and communicate data is more crucial than ever. We help enterprises turn raw data into easily understandable, visual stories that drive decision-making through using cutting-edge visualization tools and techniques to present data in a visually engaging, understandable format that reveals patterns, trends, and insights.',
          },
        ],
      },
    },
    subtitle:
      'Transform your complex data into visually engaging, understandable insights with our data visualization expertise.',
  },
].map((item, i) => {
  return merge({}, MOCK_SERVICE_PAGE, {
    id: i + 1,
    // Category
    category: getCategoryFromCrudItem(item, MOCK_DATA_SERVICE_CATEGORYS),
    ...item,
    sections: {
      ...item.sections,
      benefits: {
        title: 'Harnessing the Power of AI for Enterprises',
        center: true,
        items: [
          {
            title: 'Data Strategy',
            fa_icon: 'fa-chart-line',
            href: `${routeConfig.SERVICES}/data-strategy`,
            subtitle:
              'Crafting holistic data management plans, governance, and value analysis to empower data-driven decision-making.',
          },
          {
            title: 'Data Engineering',
            fa_icon: 'fa-cogs',
            href: `${routeConfig.SERVICES}/data-engineering`,
            subtitle:
              'Designing robust data warehousing, integration, and big data solutions for efficient storage, retrieval, and analysis.',
          },
          {
            title: 'AI Solutions',
            fa_icon: 'fa-brain',
            href: `${routeConfig.SERVICES}/ai-solutions`,
            subtitle:
              'Building tailored AI models, automating processes, and providing strategic advisory for transformative business intelligence.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} empowers enterprises businesses with state-of-the-art technologies to create solutions built for the digital age.',
      },
      checklist: {
        title: `Why {appTitle} for {title}`,
        overline: 'Why Us',
        subtitle:
          'Igniting enterprise transformation through personalized data solutions focused on driving your business success.',
      },
      cta: {
        title: 'Partnering with {appTitle}',
        hero_alt: 'Laser net over city',
        hero_src: '/images/about_nodes_above_city.png',
        overline: 'Get Started',
        subtitle:
          "{appTitle} collaborates with enterprises to leverage data and AI for competitive advantage. Utilising future-proof technologies such as Python, JavaScript, SQL, ChatGPT, and Tableau, we provide customized data science services and AI solutions. Transforming raw data into actionable insights and automating complex processes, our expertise in data science and AI helps you unlock your data's potential and excel in the digital landscape.",
      },
    },
    seo: {
      title: item.title,
      description: item.subtitle,
    },
  })
})

export const MOCK_DIGITAL_SERVICES = [
  {
    title: 'Customer Journey Mapping',
    slug: 'customer-journey-mapping',
    category_id: 1,
    hero_alt: 'Customer journey visualization',
    // Hero
    hero_src: '/unsplash/1V5zGGTYXVc.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Enterprise-Level Digital Marketing Solutions',
        center: true,
        items: [
          {
            title: 'Enterprise Digital Strategy',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/enterprise-digital-strategy`,
            subtitle:
              'Crafting tailored digital strategies to propel enterprise growth and drive success in the digital landscape.',
          },
          {
            title: 'Specialized B2B Digital Marketing',
            fa_icon: 'fa-briefcase',
            href: `${routeConfig.SERVICES}/specialized-b2b-digital-marketing`,
            subtitle:
              'Unleashing B2B marketing potential with specialized strategies that generate targeted leads and foster meaningful connections.',
          },
          {
            title: 'Advanced Web Development & Analytics',
            fa_icon: 'fa-code',
            href: `${routeConfig.SERVICES}/advanced-web-development-and-analytics`,
            subtitle:
              'Leveraging technology and data-driven insights to create dynamic websites and optimize user experiences for measurable results.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} provides enterprise businesses with tailored digital solutions to engage audiences and achieve business goals.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is understanding the customer journey important for my business?',
            content:
              'Understanding the customer journey helps your business to improve customer experience, optimize marketing efforts, and ultimately, increase conversions. It enables you to identify potential pain points in the customer journey and make necessary improvements.',
          },
          {
            id: 'faqs-2',
            title: 'How does your Customer Journey Mapping service work?',
            content:
              'Our service begins with data analysis to understand customer behaviour and preferences. We then identify key touchpoints in the customer journey and develop detailed customer personas. After mapping out the customer journey visually, we provide targeted recommendations for improvement at each touchpoint. The customer journey is then continually monitored and optimized based on performance data and customer feedback.',
          },
          {
            id: 'faqs-3',
            title: 'What is a touchpoint in the customer journey?',
            content:
              'A touchpoint is any interaction between a customer and a business. This can occur at any stage of the customer journey, from initial awareness and discovery to purchase and post-purchase support. Touchpoints can occur across various channels, both online and offline, and they play a crucial role in shaping the customer’s overall experience with a business.',
          },
        ],
        subtitle:
          'Learn more about our Customer Journey Mapping service and how we can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data Analysis',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We leverage robust data analytics tools to interpret and present data that provides actionable insights.',
          },
          {
            title: 'Touchpoint Identification',
            fa_icon: 'fa-map-marked-alt',
            subtitle:
              'We identify key customer-business interactions to understand and optimize these crucial points.',
          },
          {
            title: 'Customer Persona Development',
            fa_icon: 'fa-users',
            subtitle:
              'We develop detailed customer personas to better understand your target audience and cater to their specific needs.',
          },
          {
            title: 'Journey Visualization',
            fa_icon: 'fa-project-diagram',
            subtitle:
              'We visually map out the customer journey to provide a clear and comprehensive understanding of the customer experience.',
          },
          {
            title: 'Targeted Improvements',
            fa_icon: 'fa-bullseye',
            subtitle:
              'We provide targeted recommendations to improve customer experience at each touchpoint.',
          },
          {
            title: 'Continuous Optimization',
            fa_icon: 'fa-sync',
            subtitle:
              'We continually monitor and optimize the customer journey based on performance data and customer feedback.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'To optimize customer journeys, we follow best practices that include data analysis, touchpoint identification, customer persona development, and more.',
      },
      summary: {
        title:
          'Understanding the customer journey for optimal customer engagement.',
        items: [
          {
            title:
              'The customer journey is the complete sum of experiences that customers go through when interacting with your company and brand. A thorough understanding and optimization of this journey is crucial to enhancing customer satisfaction, engagement, and ultimately, conversions.',
          },
          {
            title:
              'We strive to identify key interactions that the customer has with the business. By understanding these touchpoints, we can improve the overall customer experience, optimize marketing efforts and ultimately boost your company’s bottom line.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Customer Journey Mapping',
      description:
        'Comprehensively understand and optimize your customer journey to enhance engagement and conversions.',
    },
    subtitle:
      'Comprehensively understand and optimize your customer journey to enhance engagement and conversions.',
  },
  {
    title: 'Omnichannel CRM Integration',
    slug: 'omnichannel-crm-integration',
    category_id: 1,
    hero_alt: 'Customer using digital payment',
    // Hero
    hero_src: '/unsplash/Xn5FbEM9564.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Enterprise-Level Digital Marketing Solutions',
        center: true,
        items: [
          {
            title: 'Enterprise Digital Strategy',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/enterprise-digital-strategy`,
            subtitle:
              'Crafting tailored digital strategies to propel enterprise growth and drive success in the digital landscape.',
          },
          {
            title: 'Specialized B2B Digital Marketing',
            fa_icon: 'fa-briefcase',
            href: `${routeConfig.SERVICES}/specialized-b2b-digital-marketing`,
            subtitle:
              'Unleashing B2B marketing potential with specialized strategies that generate targeted leads and foster meaningful connections.',
          },
          {
            title: 'Advanced Web Development & Analytics',
            fa_icon: 'fa-code',
            href: `${routeConfig.SERVICES}/advanced-web-development-and-analytics`,
            subtitle:
              'Leveraging technology and data-driven insights to create dynamic websites and optimize user experiences for measurable results.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} provides enterprise businesses with tailored digital solutions to engage audiences and achieve business goals.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is Omnichannel CRM Integration important for my business?',
            content:
              'Omnichannel CRM Integration allows for a seamless customer experience across all channels. By having a unified view of customer interactions, your business can provide consistent messaging and service, improve customer understanding, and enhance overall customer relationships.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your Omnichannel CRM Integration Service?',
            content:
              'We specialize in Omnichannel CRM Integration, helping businesses consolidate their customer data from various sources into a unified view. This not only improves the customer experience but also enables better decision-making through robust analytics. Furthermore, we provide ongoing support and maintenance to ensure your CRM system continues to function optimally.',
          },
          {
            id: 'faqs-3',
            title: 'How do you approach Omnichannel CRM Integration?',
            content:
              'We start by understanding your business, its various customer touchpoints, and the systems currently in place. We then design a solution tailored to your needs, which involves consolidating your data sources, synchronizing your systems, implementing advanced analytics, and automating processes where possible. We also provide ongoing support and maintenance for your integrated CRM system.',
          },
        ],
        subtitle:
          'Learn more about our Omnichannel CRM Integration service and how we can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data Consolidation',
            fa_icon: 'fa-database',
            subtitle:
              'We bring together disparate data sources to provide a comprehensive view of your customer interactions.',
          },
          {
            title: 'System Synchronization',
            fa_icon: 'fa-sync-alt',
            subtitle:
              'We ensure that all your systems are interconnected, providing real-time updates across all channels.',
          },
          {
            title: 'Advanced Analytics',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We provide robust analytics to help you understand your customers and enhance your decision-making process.',
          },
          {
            title: 'Process Automation',
            fa_icon: 'fa-cogs',
            subtitle:
              'We help automate various processes to improve efficiency and reduce the risk of human error.',
          },
          {
            title: 'Customer Centricity',
            fa_icon: 'fa-users',
            subtitle:
              'We place your customers at the heart of our solutions, ensuring that your CRM system serves to enhance customer relationships.',
          },
          {
            title: 'Ongoing Support',
            fa_icon: 'fa-life-ring',
            subtitle:
              'We provide ongoing support and maintenance to ensure your CRM system continues to function optimally.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'To ensure effective Omnichannel CRM integration, we follow best practices including data consolidation, system synchronization, advanced analytics, and more.',
      },
      summary: {
        title:
          'Streamlining communication and data for superior customer relationships.',
        items: [
          {
            title:
              'Omnichannel CRM integration allows for a seamless customer experience, whether the customer interacts with your business in person, on your website, through a social network, or via customer service. We help bring together disparate data sources for a single customer view.',
          },
          {
            title:
              'This empowers your business to provide consistent messaging and service, improve customer understanding, and enhance overall customer relationships.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Omnichannel CRM Integration',
      description:
        'Integrate your CRM system across all channels for a unified and seamless customer experience.',
    },
    subtitle:
      'Integrate your CRM system across all channels for a unified and seamless customer experience.',
  },
  {
    title: 'Enterprise Social Media Strategy',
    slug: 'enterprise-social-media-strategy',
    category_id: 1,
    hero_alt: 'Social media logos',
    // Hero
    hero_src: '/unsplash/15r9RAOy38Q.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Enterprise-Level Digital Marketing Solutions',
        center: true,
        items: [
          {
            title: 'Enterprise Digital Strategy',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/enterprise-digital-strategy`,
            subtitle:
              'Crafting tailored digital strategies to propel enterprise growth and drive success in the digital landscape.',
          },
          {
            title: 'Specialized B2B Digital Marketing',
            fa_icon: 'fa-briefcase',
            href: `${routeConfig.SERVICES}/specialized-b2b-digital-marketing`,
            subtitle:
              'Unleashing B2B marketing potential with specialized strategies that generate targeted leads and foster meaningful connections.',
          },
          {
            title: 'Advanced Web Development & Analytics',
            fa_icon: 'fa-code',
            href: `${routeConfig.SERVICES}/advanced-web-development-and-analytics`,
            subtitle:
              'Leveraging technology and data-driven insights to create dynamic websites and optimize user experiences for measurable results.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} provides enterprise businesses with tailored digital solutions to engage audiences and achieve business goals.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is a tailored social media strategy important for my enterprise?',
            content:
              'A tailored social media strategy is crucial in shaping your brand’s online presence, reaching your target audience effectively, and encouraging meaningful engagement. As an enterprise, it’s important that your social media activities reflect your business’s goals and values while also appealing to your specific audience demographics.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your Enterprise Social Media Strategy service?',
            content:
              'With our service, you get a team of digital marketing experts specializing in B2B enterprise-level businesses. We leverage our understanding of the unique needs of enterprises to create a social media strategy that is tailored to your business. From performance analysis and targeting to content planning and distribution, we ensure your social media presence aligns with your overall marketing strategy and business objectives.',
          },
          {
            id: 'faqs-3',
            title: 'How do you approach social media strategy for enterprises?',
            content:
              'We start by understanding your business, its goals, and its target audience. We then analyse your current social media performance, and based on this analysis, we develop a strategy that includes content planning, targeting, distribution, and ROI measurement. We ensure this strategy aligns with your overall marketing strategy and business objectives, and we provide regular reports to measure its effectiveness.',
          },
        ],
        subtitle:
          'Learn more about our Enterprise Social Media Strategy service and how it can benefit your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Performance Analysis',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We perform detailed social media analytics to understand your current performance and identify areas of improvement.',
          },
          {
            title: 'Targeting Strategy',
            fa_icon: 'fa-bullseye',
            subtitle:
              'We develop effective targeting strategies to ensure your content reaches your key audience demographics.',
          },
          {
            title: 'Content Planning',
            fa_icon: 'fa-clipboard-list',
            subtitle:
              'We assist in planning and curating content that resonates with your audience and promotes brand engagement.',
          },
          {
            title: 'Distribution Strategy',
            fa_icon: 'fa-share-alt',
            subtitle:
              'We devise a distribution strategy that optimizes your content’s reach across various social media platforms.',
          },
          {
            title: 'Integration',
            fa_icon: 'fa-sync-alt',
            subtitle:
              'We ensure your social media strategy is integrated with your overall marketing strategy for a cohesive brand message.',
          },
          {
            title: 'ROI Measurement',
            fa_icon: 'fa-search-dollar',
            subtitle:
              'We provide detailed reports to measure the return on investment of your social media activities.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We provide a comprehensive set of services to ensure your enterprise’s social media presence is impactful, engaging, and aligned with your overall business strategy.',
      },
      summary: {
        title: 'Crafting tailored social media strategies for your enterprise.',
        items: [
          {
            title:
              "In today's digital landscape, social media is an integral part of any business marketing strategy. However, as an enterprise-level business, it is crucial that your social media presence reflects your brand and engages with your audience in a meaningful and effective way.",
          },
          {
            title:
              'Leveraging our expertise in B2B digital marketing, we understand the unique needs of your enterprise and can help you shape your online presence accordingly.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Enterprise Social Media Strategy',
      description:
        'Shape your online presence and engage your audience effectively with our tailored social media strategies.',
    },
    subtitle:
      'Shape your online presence and engage your audience effectively with our tailored social media strategies.',
  },
  {
    title: 'Digital Marketing Roadmap Development',
    slug: 'digital-marketing-roadmap-development',
    category_id: 1,
    hero_alt: 'Guy holding compass',
    // Hero
    hero_src: '/unsplash/xu2WYJek5AI.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Enterprise-Level Digital Marketing Solutions',
        center: true,
        items: [
          {
            title: 'Enterprise Digital Strategy',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/enterprise-digital-strategy`,
            subtitle:
              'Crafting tailored digital strategies to propel enterprise growth and drive success in the digital landscape.',
          },
          {
            title: 'Specialized B2B Digital Marketing',
            fa_icon: 'fa-briefcase',
            href: `${routeConfig.SERVICES}/specialized-b2b-digital-marketing`,
            subtitle:
              'Unleashing B2B marketing potential with specialized strategies that generate targeted leads and foster meaningful connections.',
          },
          {
            title: 'Advanced Web Development & Analytics',
            fa_icon: 'fa-code',
            href: `${routeConfig.SERVICES}/advanced-web-development-and-analytics`,
            subtitle:
              'Leveraging technology and data-driven insights to create dynamic websites and optimize user experiences for measurable results.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} provides enterprise businesses with tailored digital solutions to engage audiences and achieve business goals.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why do I need a digital marketing roadmap?',
            content:
              'A digital marketing roadmap serves as a strategic guide for your marketing efforts. It aligns your marketing initiatives with your business objectives, ensures you have a clear plan to follow, and allows you to measure and optimize your performance over time.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your Digital Marketing Roadmap Development service?',
            content:
              'Working with us, you benefit from our expertise in B2B digital marketing and web development. We understand the unique challenges and needs of enterprise-level businesses and can help you develop a robust and effective digital marketing roadmap that aligns with your business objectives.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you approach developing a digital marketing roadmap?',
            content:
              'We start by understanding your business, its goals, and its target audience. We then conduct a comprehensive market analysis to identify opportunities and challenges. Based on this understanding, we help you establish clear, measurable goals and devise a robust digital marketing strategy. We also develop a detailed action plan, ensure alignment with your overall business strategy, and establish key performance indicators for continuous improvement.',
          },
        ],
        subtitle:
          'Learn more about our Digital Marketing Roadmap Development service and how it can benefit your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Market Analysis',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We conduct comprehensive market analysis to understand your current digital footprint and identify opportunities for growth.',
          },
          {
            title: 'Goal Setting',
            fa_icon: 'fa-object-group',
            subtitle:
              'We help you establish clear, measurable goals aligned with your business objectives to guide your digital marketing initiatives.',
          },
          {
            title: 'Strategy Development',
            fa_icon: 'fa-tasks',
            subtitle:
              'We devise a robust digital marketing strategy tailored to your business, taking into account your target audience, business goals, and market trends.',
          },
          {
            title: 'Action Plan',
            fa_icon: 'fa-calendar-alt',
            subtitle:
              'We develop a detailed action plan outlining the tasks, timelines, and resources needed to execute your digital marketing strategy.',
          },
          {
            title: 'Integration',
            fa_icon: 'fa-sync-alt',
            subtitle:
              'We ensure your digital marketing roadmap aligns with your overall business strategy, providing a cohesive approach to achieve your goals.',
          },
          {
            title: 'Performance Metrics',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We establish key performance indicators to monitor and measure the success of your digital marketing initiatives, allowing for continuous improvement.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We provide a range of services designed to help your enterprise develop a robust and effective digital marketing roadmap.',
      },
      summary: {
        title: 'Crafting your path to digital marketing success.',
        items: [
          {
            title:
              "In today's rapidly evolving digital landscape, a clear and well-planned digital marketing roadmap is essential. It serves as a strategic guide that aligns your marketing initiatives with your business objectives, ensuring you stay on track to achieve your goals.",
          },
          {
            title:
              'We specialize in developing comprehensive digital marketing roadmaps for enterprise-level businesses. Through understanding the unique needs and challenges of your enterprise, we can help you strategize your marketing initiatives effectively.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Digital Marketing Roadmap Development',
      description:
        'Build a robust and effective marketing roadmap for your enterprise.',
    },
    subtitle:
      'Build a robust and effective marketing roadmap for your enterprise.',
  },
  {
    title: 'B2B Lead Generation',
    slug: 'b2b-lead-generation',
    category_id: 2,
    hero_alt: 'Guy looking at laptop',
    // Hero
    hero_src: '/unsplash/goFBjlQiZFU.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Enterprise-Level Digital Marketing Solutions',
        center: true,
        items: [
          {
            title: 'Enterprise Digital Strategy',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/enterprise-digital-strategy`,
            subtitle:
              'Crafting tailored digital strategies to propel enterprise growth and drive success in the digital landscape.',
          },
          {
            title: 'Specialized B2B Digital Marketing',
            fa_icon: 'fa-briefcase',
            href: `${routeConfig.SERVICES}/specialized-b2b-digital-marketing`,
            subtitle:
              'Unleashing B2B marketing potential with specialized strategies that generate targeted leads and foster meaningful connections.',
          },
          {
            title: 'Advanced Web Development & Analytics',
            fa_icon: 'fa-code',
            href: `${routeConfig.SERVICES}/advanced-web-development-and-analytics`,
            subtitle:
              'Leveraging technology and data-driven insights to create dynamic websites and optimize user experiences for measurable results.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} provides enterprise businesses with tailored digital solutions to engage audiences and achieve business goals.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is B2B lead generation important for my business?',
            content:
              'A steady stream of qualified B2B leads is crucial to maintain and grow your business. It provides your sales team with potential customers to engage and convert, directly influencing your revenue and business growth.',
          },
          {
            id: 'faqs-2',
            title: 'How does your B2B lead generation service work?',
            content:
              'Our B2B lead generation service combines strategic digital marketing techniques such as email marketing, content marketing, SEO, PPC, and LinkedIn marketing. We devise data-driven strategies, develop targeted campaigns, create engaging content, and use advanced analytics to identify, engage, and convert potential leads.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the quality of the leads generated?',
            content:
              'We focus on generating high-quality, qualified leads that match your target customer profile. We achieve this by gaining a deep understanding of your business, industry, and customers, which enables us to create highly targeted marketing campaigns that attract leads with a genuine interest in your products or services.',
          },
        ],
        subtitle:
          'Find out more about our B2B Lead Generation service and how it can propel your business growth.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data-driven strategy',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We devise data-backed strategies to identify your target audience and their unique needs, allowing us to deliver targeted marketing campaigns.',
          },
          {
            title: 'Content marketing',
            fa_icon: 'fa-laptop',
            subtitle:
              'We create high-quality, informative content that positions your business as an industry leader and helps attract and engage potential leads.',
          },
          {
            title: 'SEO and PPC',
            fa_icon: 'fa-search-dollar',
            subtitle:
              'By combining organic search engine optimization strategies with paid advertising, we maximize your visibility to attract high-intent leads.',
          },
          {
            title: 'Performance tracking',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We consistently monitor and measure the performance of your lead generation efforts, adjusting strategies as needed to ensure the best results.',
          },
          {
            title: 'Web Development',
            fa_icon: 'fa-globe',
            subtitle:
              'We build responsive, SEO-friendly websites that provide a smooth user experience and help attract potential leads.',
          },
          {
            title: 'Conversion rate optimization',
            fa_icon: 'fa-rocket',
            subtitle:
              'We optimize your landing pages, forms, and CTAs to increase conversions and drive a steady stream of leads into your sales pipeline.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Leveraging our expertise in digital marketing, we offer a range of B2B lead generation services.',
      },
      summary: {
        title: 'Supercharging your B2B sales pipeline.',
        items: [
          {
            title:
              'In the competitive world of B2B sales, having a robust pipeline filled with high-quality leads is critical. We combine strategic digital marketing techniques with comprehensive analytics to identify, engage, and convert your target audience.',
          },
          {
            title:
              'Our dedicated team harness the power of advanced technologies to drive results. We create tailored strategies that align with your unique business goals, ensuring a consistent flow of qualified leads into your sales pipeline.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'B2B Lead Generation',
      description:
        'Partner with our digital experts to maximize your B2B lead generation and accelerate your sales process.',
    },
    subtitle:
      'Partner with our digital experts to maximize your B2B lead generation and accelerate your sales process.',
  },
  {
    title: 'Advanced Technical SEO',
    slug: 'advanced-technical-seo',
    category_id: 2,
    hero_alt: 'SEO in colorful alphabets',
    // Hero
    hero_src: '/unsplash/l5if0iQfV4c.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Enterprise-Level Digital Marketing Solutions',
        center: true,
        items: [
          {
            title: 'Enterprise Digital Strategy',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/enterprise-digital-strategy`,
            subtitle:
              'Crafting tailored digital strategies to propel enterprise growth and drive success in the digital landscape.',
          },
          {
            title: 'Specialized B2B Digital Marketing',
            fa_icon: 'fa-briefcase',
            href: `${routeConfig.SERVICES}/specialized-b2b-digital-marketing`,
            subtitle:
              'Unleashing B2B marketing potential with specialized strategies that generate targeted leads and foster meaningful connections.',
          },
          {
            title: 'Advanced Web Development & Analytics',
            fa_icon: 'fa-code',
            href: `${routeConfig.SERVICES}/advanced-web-development-and-analytics`,
            subtitle:
              'Leveraging technology and data-driven insights to create dynamic websites and optimize user experiences for measurable results.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} provides enterprise businesses with tailored digital solutions to engage audiences and achieve business goals.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is Advanced Technical SEO important?',
            content:
              'Advanced Technical SEO is crucial for ensuring that search engines can access, crawl, interpret and index your website without any problems. By addressing technical issues, you can enhance your site visibility and performance in search results, leading to more organic traffic and conversions.',
          },
          {
            id: 'faqs-2',
            title: 'What kind of businesses need Advanced Technical SEO?',
            content:
              'Any business that wants to improve its online visibility and performance can benefit from Advanced Technical SEO. It is particularly important for businesses with large and complex websites, as these can present more technical issues that could affect search engine accessibility and indexation.',
          },
          {
            id: 'faqs-3',
            title: 'How does Advanced Technical SEO differ from regular SEO?',
            content:
              'While regular SEO often focuses on keyword optimization and link building, Advanced Technical SEO goes deeper into the technical aspects of your website. It involves optimizing your site structure, code, link structure, mobile SEO, and site security for better performance and visibility in search results.',
          },
        ],
        subtitle:
          'Learn more about our Advanced Technical SEO services and how they can benefit your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Performance Optimization',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We ensure that your website is optimized for speed and performance, creating a seamless user experience that keeps people engaged.',
          },
          {
            title: 'Site Structure Analysis',
            fa_icon: 'fa-sitemap',
            subtitle:
              'We analyse your site structure and make improvements to ensure that search engines can crawl and index your site efficiently.',
          },
          {
            title: 'Code Optimization',
            fa_icon: 'fa-code',
            subtitle:
              'We optimize your site code for SEO, addressing any technical issues that could be affecting your site visibility and performance in search results.',
          },
          {
            title: 'Link Structure Analysis',
            fa_icon: 'fa-link',
            subtitle:
              "We review your site's internal and external link structure, optimizing it for better crawlability and user navigation.",
          },
          {
            title: 'Mobile SEO',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'We ensure that your site is fully optimized for mobile, providing a high-quality user experience across all devices.',
          },
          {
            title: 'Security Optimization',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We ensure that your site is secure and trustworthy, building confidence among users and search engines alike.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We leverage cutting-edge tools and proven strategies to ensure your website performs at its best.',
      },
      summary: {
        title: 'Optimizing your website for better search engine performance.',
        items: [
          {
            title:
              'Advanced Technical SEO is about maximizing website visibility and enhancing its performance in organic search results. With our expertise, we ensure that search engines can crawl, interpret and index your site efficiently.',
          },
          {
            title:
              'Our approach goes beyond basic on-page SEO. We delve deeper into the technical aspects of your website, addressing issues that could affect search engine accessibility, indexation, and the overall user experience.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Advanced Technical SEO',
      description:
        'Maximize your site visibility and improve performance with our Advanced Technical SEO services.',
    },
    subtitle:
      'Maximize your site visibility and improve performance with our Advanced Technical SEO services.',
  },
  {
    title: 'Customized Account-Based Marketing',
    slug: 'customized-account-based-marketing',
    category_id: 2,
    hero_alt: 'Guy looking at data on monitor',
    // Hero
    hero_src: '/unsplash/21GWwco-JBQ.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Enterprise-Level Digital Marketing Solutions',
        center: true,
        items: [
          {
            title: 'Enterprise Digital Strategy',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/enterprise-digital-strategy`,
            subtitle:
              'Crafting tailored digital strategies to propel enterprise growth and drive success in the digital landscape.',
          },
          {
            title: 'Specialized B2B Digital Marketing',
            fa_icon: 'fa-briefcase',
            href: `${routeConfig.SERVICES}/specialized-b2b-digital-marketing`,
            subtitle:
              'Unleashing B2B marketing potential with specialized strategies that generate targeted leads and foster meaningful connections.',
          },
          {
            title: 'Advanced Web Development & Analytics',
            fa_icon: 'fa-code',
            href: `${routeConfig.SERVICES}/advanced-web-development-and-analytics`,
            subtitle:
              'Leveraging technology and data-driven insights to create dynamic websites and optimize user experiences for measurable results.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} provides enterprise businesses with tailored digital solutions to engage audiences and achieve business goals.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'What is Account-Based Marketing?',
            content:
              'Account-Based Marketing (ABM) is a strategic approach to marketing that concentrates resources on a set of target accounts within a market. It uses personalized campaigns designed to engage each account, basing the marketing message on the specific attributes and needs of the account.',
          },
          {
            id: 'faqs-2',
            title:
              'How does Customized Account-Based Marketing benefit my business?',
            content:
              'Customized Account-Based Marketing allows you to focus on the accounts that are most likely to generate revenue for your business. By personalizing your marketing strategy for each target account, you can create more relevant and impactful interactions. This not only improves engagement but also drives better marketing ROI.',
          },
          {
            id: 'faqs-3',
            title:
              'What is involved in your Customized Account-Based Marketing service?',
            content:
              'Our Customized Account-Based Marketing service involves identifying high-value target accounts, gaining deep insights about these accounts, creating personalized marketing strategies, coordinating these strategies across channels, aligning with sales efforts, and measuring and optimizing performance.',
          },
        ],
        subtitle:
          'Learn more about our Customized Account-Based Marketing services and how they can help your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Account Identification',
            fa_icon: 'fa-user-tie',
            subtitle:
              'We use a mix of data and insights to identify the high-value accounts that are most likely to drive revenue for your business.',
          },
          {
            title: 'Insights and Personalization',
            fa_icon: 'fa-brain',
            subtitle:
              'We uncover deep insights about your target accounts and use these to deliver personalized marketing messages that resonate.',
          },
          {
            title: 'Sales and Marketing Alignment',
            fa_icon: 'fa-sync',
            subtitle:
              'We ensure tight alignment between sales and marketing, coordinating efforts to engage your target accounts effectively.',
          },
          {
            title: 'Multichannel Coordination',
            fa_icon: 'fa-layer-group',
            subtitle:
              'We coordinate marketing efforts across multiple channels, ensuring a consistent, personalized experience for your target accounts.',
          },
          {
            title: 'Measurement and Analysis',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We measure the effectiveness of our ABM strategies, using insights to continually optimize and improve.',
          },
          {
            title: 'Continual Optimization',
            fa_icon: 'fa-cogs',
            subtitle:
              "We constantly optimize our ABM strategies based on performance data, ensuring we're always delivering the best possible results.",
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our Account-Based Marketing capabilities leverage data and technology to create highly targeted, personalized marketing strategies.',
      },
      summary: {
        title:
          'Personalized marketing strategies for your high-value accounts.',
        items: [
          {
            title:
              'In the B2B world, one-size-fits-all approaches often fall short. We create personalized marketing strategies that speak directly to the unique needs and pain points of your key decision-makers.',
          },
          {
            title:
              'Our ABM strategies are not just personalized, they are also coordinated across channels and aligned with sales for the most effective results. We leverage data and insights to deliver the right message, to the right account, at the right time.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Customized Account-Based Marketing',
      description:
        'Drive success with our tailor-made Account-Based Marketing (ABM) strategies designed specifically for your business needs.',
    },
    subtitle:
      'Drive success with our tailor-made Account-Based Marketing (ABM) strategies designed specifically for your business needs.',
  },
  {
    title: 'SEM Management',
    slug: 'sem-management',
    category_id: 2,
    hero_alt: 'Google search console screen',
    // Hero
    hero_src: '/unsplash/VCtI-0qlVgA.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Enterprise-Level Digital Marketing Solutions',
        center: true,
        items: [
          {
            title: 'Enterprise Digital Strategy',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/enterprise-digital-strategy`,
            subtitle:
              'Crafting tailored digital strategies to propel enterprise growth and drive success in the digital landscape.',
          },
          {
            title: 'Specialized B2B Digital Marketing',
            fa_icon: 'fa-briefcase',
            href: `${routeConfig.SERVICES}/specialized-b2b-digital-marketing`,
            subtitle:
              'Unleashing B2B marketing potential with specialized strategies that generate targeted leads and foster meaningful connections.',
          },
          {
            title: 'Advanced Web Development & Analytics',
            fa_icon: 'fa-code',
            href: `${routeConfig.SERVICES}/advanced-web-development-and-analytics`,
            subtitle:
              'Leveraging technology and data-driven insights to create dynamic websites and optimize user experiences for measurable results.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} provides enterprise businesses with tailored digital solutions to engage audiences and achieve business goals.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'What is SEM and how can it benefit my business?',
            content:
              'Search Engine Marketing (SEM) is a form of Internet marketing that involves promoting websites by increasing their visibility in search engine results pages. This is achieved primarily through paid advertising. SEM can benefit your business by increasing your online visibility, driving more traffic to your website, and improving your chances of converting that traffic into leads and sales.',
          },
          {
            id: 'faqs-2',
            title: 'What does your SEM Management service include?',
            content:
              'Our SEM Management service is comprehensive, encompassing SEM strategy development, paid search advertising, SEO integration, keyword management, performance tracking, and continuous optimization. We manage your SEM campaigns end-to-end, with the goal of maximizing your visibility in search engine results pages and driving more quality traffic to your website.',
          },
          {
            id: 'faqs-3',
            title: 'How do you measure the success of SEM campaigns?',
            content:
              'We measure the success of SEM campaigns using a variety of metrics, including clicks, impressions, click-through rates (CTR), conversion rates, cost per click (CPC), and overall return on ad spend (ROAS). We provide regular reports to keep you informed of your campaign performance and the results we’re achieving.',
          },
        ],
        subtitle:
          'Learn more about our SEM Management services and how they can benefit your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Paid Search Advertising',
            fa_icon: 'fa-search-dollar',
            subtitle:
              'We manage your PPC campaigns, optimizing your ad spend to drive quality traffic and leads to your website.',
          },
          {
            title: 'SEM Strategy',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We develop a tailored SEM strategy that aligns with your business goals and maximizes ROI.',
          },
          {
            title: 'SEO Integration',
            fa_icon: 'fa-search',
            subtitle:
              'We integrate SEO strategies into your SEM efforts, improving organic search results and boosting overall performance.',
          },
          {
            title: 'Keyword Management',
            fa_icon: 'fa-project-diagram',
            subtitle:
              'We conduct thorough keyword research and ongoing keyword management to target the terms that will drive the most valuable traffic.',
          },
          {
            title: 'Performance Tracking',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We monitor campaign performance closely, making data-driven adjustments to optimize results.',
          },
          {
            title: 'Continuous Optimization',
            fa_icon: 'fa-cogs',
            subtitle:
              'We continually optimize your SEM campaigns, testing and refining to improve performance over time.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our SEM Management service is comprehensive, encompassing strategy, implementation, and optimization to deliver exceptional results.',
      },
      summary: {
        title: 'Amplify your online visibility and reach more customers.',
        items: [
          {
            title:
              'In the world of digital marketing, Search Engine Marketing (SEM) plays a pivotal role in making your business stand out from the crowd. Our SEM Management service focuses on improving your visibility in search engine results pages, driving more high-quality traffic to your website, and ultimately converting that traffic into sales.',
          },
          {
            title:
              'We leverage a combination of paid search, SEO strategies, and comprehensive analytics to ensure that your business gets noticed by the people who matter most to your bottom line – your customers.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'SEM Management',
      description:
        'Maximize your online presence with our professional SEM management services.',
    },
    subtitle:
      'Maximize your online presence with our professional SEM management services.',
  },
  {
    title: 'Enterprise Corporate Website Development',
    slug: 'enterprise-corporate-website-development',
    category_id: 3,
    hero_alt: 'Man using mac',
    // Hero
    hero_src: '/unsplash/Imc-IoZDMXc.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Enterprise-Level Digital Marketing Solutions',
        center: true,
        items: [
          {
            title: 'Enterprise Digital Strategy',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/enterprise-digital-strategy`,
            subtitle:
              'Crafting tailored digital strategies to propel enterprise growth and drive success in the digital landscape.',
          },
          {
            title: 'Specialized B2B Digital Marketing',
            fa_icon: 'fa-briefcase',
            href: `${routeConfig.SERVICES}/specialized-b2b-digital-marketing`,
            subtitle:
              'Unleashing B2B marketing potential with specialized strategies that generate targeted leads and foster meaningful connections.',
          },
          {
            title: 'Advanced Web Development & Analytics',
            fa_icon: 'fa-code',
            href: `${routeConfig.SERVICES}/advanced-web-development-and-analytics`,
            subtitle:
              'Leveraging technology and data-driven insights to create dynamic websites and optimize user experiences for measurable results.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} provides enterprise businesses with tailored digital solutions to engage audiences and achieve business goals.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is a well-developed corporate website important for my business?',
            content:
              'A well-developed corporate website serves as the digital face of your enterprise. It enhances your brand’s online presence, helps you reach a wider audience, and offers a platform for you to effectively communicate with your customers. It also improves your business credibility and can significantly boost customer engagement and conversion rates.',
          },
          {
            id: 'faqs-2',
            title:
              'What technologies do you use for corporate website development?',
            content:
              'Our team of experienced developers are skilled in a wide range of modern technologies, including but not limited to HTML5, CSS3, JavaScript, React, Angular, Node.js, PHP, and more. We choose the most suitable technology stack based on your business requirements and the project scope.',
          },
          {
            id: 'faqs-3',
            title: 'Can you redesign my existing corporate website?',
            content:
              'Yes, we can. Our team is proficient in both creating new websites from scratch and redesigning existing ones. We can evaluate your current website, understand your new requirements, and redesign your website to better align with your business objectives while enhancing its functionality and user experience.',
          },
        ],
        subtitle:
          'Learn more about our Enterprise Corporate Website Development services and how we can enhance your online presence.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Custom Design',
            fa_icon: 'fa-drafting-compass',
            subtitle:
              'We design intuitive and user-friendly interfaces that align with your brand and engage your target audience.',
          },
          {
            title: 'Robust Development',
            fa_icon: 'fa-cogs',
            subtitle:
              'We develop high-performing, scalable websites that can handle the demands of your enterprise business.',
          },
          {
            title: 'Responsive Design',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'We ensure your website looks great and performs well on all devices, providing a seamless user experience across platforms.',
          },
          {
            title: 'Security',
            fa_icon: 'fa-lock',
            subtitle:
              'We prioritize security in our development process to protect your site and data from potential threats.',
          },
          {
            title: 'SEO Best Practices',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We incorporate SEO best practices to improve your website’s visibility and attract more organic traffic.',
          },
          {
            title: 'Ongoing Support & Maintenance',
            fa_icon: 'fa-sync-alt',
            subtitle:
              'We provide ongoing support and maintenance services to keep your website up-to-date and running smoothly.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We combine our technical proficiency, design prowess, and strategic thinking to deliver high-performing enterprise websites.',
      },
      summary: {
        title: 'Delivering web solutions to drive your business forward.',
        items: [
          {
            title:
              'In the digital realm, your corporate website acts as the front door to your business. An intuitive, engaging, and robust corporate website is a vital tool to communicate with your existing customers, potential clients, and the wider market.',
          },
          {
            title:
              'Our team of skilled web developers and designers craft tailor-made websites that align with your business goals, and are scalable to evolve with your growing needs.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Enterprise Corporate Website Development',
      description:
        'Build scalable, robust, and user-friendly websites designed to match the needs of your enterprise business.',
    },
    subtitle:
      'Build scalable, robust, and user-friendly websites designed to match the needs of your enterprise business.',
  },
  {
    title: 'Advanced CMS Customization',
    slug: 'advanced-cms-customization',
    category_id: 3,
    hero_alt: 'Web management system',
    // Hero
    hero_src: '/unsplash/59yRYIHWtzY.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Enterprise-Level Digital Marketing Solutions',
        center: true,
        items: [
          {
            title: 'Enterprise Digital Strategy',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/enterprise-digital-strategy`,
            subtitle:
              'Crafting tailored digital strategies to propel enterprise growth and drive success in the digital landscape.',
          },
          {
            title: 'Specialized B2B Digital Marketing',
            fa_icon: 'fa-briefcase',
            href: `${routeConfig.SERVICES}/specialized-b2b-digital-marketing`,
            subtitle:
              'Unleashing B2B marketing potential with specialized strategies that generate targeted leads and foster meaningful connections.',
          },
          {
            title: 'Advanced Web Development & Analytics',
            fa_icon: 'fa-code',
            href: `${routeConfig.SERVICES}/advanced-web-development-and-analytics`,
            subtitle:
              'Leveraging technology and data-driven insights to create dynamic websites and optimize user experiences for measurable results.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} provides enterprise businesses with tailored digital solutions to engage audiences and achieve business goals.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'What is the benefit of customizing my CMS?',
            content:
              'Customizing your CMS allows you to tailor it to the specific needs of your business. This can enhance your workflow, improve your team’s productivity, and ultimately lead to better business outcomes.',
          },
          {
            id: 'faqs-2',
            title: 'What types of CMS do you specialize in?',
            content:
              'Our team has extensive experience with a variety of CMS platforms, including WordPress, Drupal, Joomla, and many others. We’ll work with you to understand your needs and determine the best CMS for your business.',
          },
          {
            id: 'faqs-3',
            title: 'How does the customization process work?',
            content:
              'We start by understanding your business, your goals, and your needs. From there, we’ll suggest customizations that we believe will best serve you. Once we’ve agreed on a plan, we’ll work diligently to implement these customizations and test them thoroughly to ensure they work as expected.',
          },
        ],
        subtitle: 'Learn more about our Advanced CMS Customization services.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Platform Integration',
            fa_icon: 'fa-laptop-code',
            subtitle:
              'We integrate your CMS with other enterprise platforms, creating a unified system that boosts efficiency and collaboration.',
          },
          {
            title: 'Functionality Extension',
            fa_icon: 'fa-cogs',
            subtitle:
              'We extend your CMS functionality to match your specific needs, enhancing its utility and user-friendliness.',
          },
          {
            title: 'Security Enhancement',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We reinforce the security of your CMS, protecting your valuable data from threats and vulnerabilities.',
          },
          {
            title: 'Migration & Upgrade',
            fa_icon: 'fa-cloud-upload-alt',
            subtitle:
              'We assist with CMS migrations and upgrades, ensuring a smooth transition with minimal business disruption.',
          },
          {
            title: 'User Role Management',
            fa_icon: 'fa-user-cog',
            subtitle:
              'We set up custom user roles and permissions, ensuring the right level of access for each member of your team.',
          },
          {
            title: 'Performance Optimization',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We optimize your CMS for better performance, enhancing load times and overall user experience.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We offer a wide range of advanced CMS customization services.',
      },
      summary: {
        title: 'Tailoring CMS to power your digital infrastructure.',
        items: [
          {
            title:
              "A Content Management System (CMS) is an integral part of most modern businesses. Whether it's for managing content, handling customer data, or orchestrating complex workflows, a CMS can become the digital backbone of your enterprise.",
          },
          {
            title:
              'We understand that no two businesses are the same, and thus, off-the-shelf CMS solutions often fall short. Our team of skilled developers customizes your CMS to not only enhance its capabilities but also ensure it aligns perfectly with your business model, workflows, and strategic goals.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Advanced CMS Customization',
      description:
        'Enhance your business operations with our advanced CMS customization services.',
    },
    subtitle:
      'Enhance your business operations with our advanced CMS customization services.',
  },
  {
    title: 'Landing Page Optimization & Analytics',
    slug: 'landing-page-optimization-and-analytics',
    category_id: 3,
    hero_alt: 'Landing page',
    // Hero
    hero_src: '/unsplash/JVSgcV8_vb4.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Enterprise-Level Digital Marketing Solutions',
        center: true,
        items: [
          {
            title: 'Enterprise Digital Strategy',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/enterprise-digital-strategy`,
            subtitle:
              'Crafting tailored digital strategies to propel enterprise growth and drive success in the digital landscape.',
          },
          {
            title: 'Specialized B2B Digital Marketing',
            fa_icon: 'fa-briefcase',
            href: `${routeConfig.SERVICES}/specialized-b2b-digital-marketing`,
            subtitle:
              'Unleashing B2B marketing potential with specialized strategies that generate targeted leads and foster meaningful connections.',
          },
          {
            title: 'Advanced Web Development & Analytics',
            fa_icon: 'fa-code',
            href: `${routeConfig.SERVICES}/advanced-web-development-and-analytics`,
            subtitle:
              'Leveraging technology and data-driven insights to create dynamic websites and optimize user experiences for measurable results.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} provides enterprise businesses with tailored digital solutions to engage audiences and achieve business goals.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is landing page optimization important?',
            content:
              'Landing page optimization is essential for improving the effectiveness of your online marketing campaigns. A well-optimized landing page can increase conversions, lower customer acquisition costs, and improve your return on investment.',
          },
          {
            id: 'faqs-2',
            title:
              'What kind of businesses can benefit from landing page optimization?',
            content:
              'Any business that relies on online marketing to generate leads or sales can benefit from landing page optimization. This includes e-commerce stores, B2B companies, service providers, and more.',
          },
          {
            id: 'faqs-3',
            title: 'What does the optimization process involve?',
            content:
              'The optimization process involves various strategies, such as improving the page design and layout, optimizing the page for SEO, enhancing the page load speed, and analyzing user behaviour data to understand how visitors interact with the page and identify areas of improvement.',
          },
        ],
        subtitle:
          'Learn more about our Landing Page Optimization & Analytics services.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Conversion Rate Optimization',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We implement strategies to enhance your landing page and improve its conversion rate, helping turn more visitors into customers.',
          },
          {
            title: 'Website Heatmap',
            fa_icon: 'fa-eye',
            subtitle:
              'We use heatmaps to visualize how users interact with your landing page, helping us identify and improve areas that aren’t performing as well as they could be.',
          },
          {
            title: 'Website Scrollmap',
            fa_icon: 'fa-scroll',
            subtitle:
              'We analyse scrollmaps to understand how far users scroll on your landing page and adjust your page layout and content accordingly.',
          },
          {
            title: 'Click Tracking Analysis',
            fa_icon: 'fa-mouse-pointer',
            subtitle:
              'We monitor and analyse user click behaviour to understand what elements of your landing page are attracting attention and which aren’t.',
          },
          {
            title: 'Page Speed Optimization',
            fa_icon: 'fa-tachometer-alt',
            subtitle:
              'We optimize your landing page for speed, ensuring a fast and smooth user experience.',
          },
          {
            title: 'SEO Optimization',
            fa_icon: 'fa-search',
            subtitle:
              'We optimize your landing page for search engines, helping you rank higher and attract more organic traffic.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We provide a comprehensive suite of services to optimize your landing pages.',
      },
      summary: {
        title: 'Optimizing landing pages for success.',
        items: [
          {
            title:
              'The performance of your landing page is crucial to your business success. As the first point of contact with potential customers, it needs to make a strong impression. Our services help ensure your landing page not only captivates visitors but also motivates them to take action.',
          },
          {
            title:
              'We use a data-driven approach, relying on robust analytics to understand visitor behaviour and identify areas of improvement. From page design and content to load speed and SEO, we optimize every element of your landing page to enhance its performance and maximize conversions.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Landing Page Optimization & Analytics',
      description:
        'Maximize your landing page performance and conversions with our comprehensive optimization and analytics services.',
    },
    subtitle:
      'Maximize your landing page performance and conversions with our comprehensive optimization and analytics services.',
  },
  {
    title: 'Advanced Data Analytics & Business Intelligence',
    slug: 'advanced-data-analytics-and-business-intelligence',
    category_id: 3,
    hero_alt: 'Circular artistic design',
    // Hero
    hero_src: '/unsplash/Glel-RswQqM.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Enterprise-Level Digital Marketing Solutions',
        center: true,
        items: [
          {
            title: 'Enterprise Digital Strategy',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/enterprise-digital-strategy`,
            subtitle:
              'Crafting tailored digital strategies to propel enterprise growth and drive success in the digital landscape.',
          },
          {
            title: 'Specialized B2B Digital Marketing',
            fa_icon: 'fa-briefcase',
            href: `${routeConfig.SERVICES}/specialized-b2b-digital-marketing`,
            subtitle:
              'Unleashing B2B marketing potential with specialized strategies that generate targeted leads and foster meaningful connections.',
          },
          {
            title: 'Advanced Web Development & Analytics',
            fa_icon: 'fa-code',
            href: `${routeConfig.SERVICES}/advanced-web-development-and-analytics`,
            subtitle:
              'Leveraging technology and data-driven insights to create dynamic websites and optimize user experiences for measurable results.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} provides enterprise businesses with tailored digital solutions to engage audiences and achieve business goals.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is data analytics important for my business?',
            content:
              'Data analytics is critical for businesses today. It allows you to understand your customers better, optimize your operations, and make data-driven decisions. With data analytics, you can spot trends, forecast future scenarios, and stay ahead of the competition.',
          },
          {
            id: 'faqs-2',
            title: 'What are the benefits of business intelligence?',
            content:
              'Business Intelligence (BI) can transform your business data into actionable insights. BI tools and techniques can help you monitor key business metrics, understand your customers, improve decision making, and drive operational efficiency and growth.',
          },
          {
            id: 'faqs-3',
            title:
              'How can data analytics and business intelligence work together?',
            content:
              'Data analytics and business intelligence work hand-in-hand. While data analytics involves analyzing large data sets to uncover hidden patterns, trends, and insights, business intelligence helps present these insights in an easily understandable format. Together, they can help your business make informed decisions and strategies.',
          },
        ],
        subtitle:
          'Learn more about our Advanced Data Analytics & Business Intelligence services.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data Management',
            fa_icon: 'fa-database',
            subtitle:
              'We help manage your data assets efficiently, ensuring data quality and consistency across the organisation.',
          },
          {
            title: 'Data Visualization',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'Our data visualization tools help you understand complex data with ease, enabling quicker and smarter decision making.',
          },
          {
            title: 'Predictive Analytics',
            fa_icon: 'fa-brain',
            subtitle:
              'We apply advanced analytics techniques to forecast future trends and help you stay one step ahead.',
          },
          {
            title: 'Business Intelligence',
            fa_icon: 'fa-chart-pie',
            subtitle:
              'We provide business intelligence solutions that help you monitor key business metrics, spot trends, and make data-driven decisions.',
          },
          {
            title: 'Automation',
            fa_icon: 'fa-cogs',
            subtitle:
              'We help automate repetitive tasks and processes, freeing up your team to focus on strategic initiatives.',
          },
          {
            title: 'Data Security',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We ensure the integrity and security of your data, implementing stringent data protection measures.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our services are designed to help you transform your data into actionable insights.',
      },
      summary: {
        title: 'Harnessing the power of data for business success.',
        items: [
          {
            title:
              'In the age of digital business, data is a valuable asset that can give your organisation a competitive edge. We help businesses leverage data to make informed decisions, drive operational efficiency, and accelerate growth.',
          },
          {
            title:
              'With our sophisticated data analytics tools and techniques, we help you analyse and interpret complex data sets, uncover hidden patterns, and derive valuable insights that can guide your business strategies.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Advanced Data Analytics & Business Intelligence',
      description:
        'Leverage data to drive business growth and stay ahead of the competition.',
    },
    subtitle:
      'Leverage data to drive business growth and stay ahead of the competition.',
  },
].map((item, i) => {
  return merge({}, MOCK_SERVICE_PAGE, {
    id: i + 1,
    // Category
    category: getCategoryFromCrudItem(item, MOCK_DIGITAL_SERVICE_CATEGORYS),
    overline: 'Service',
    ...item,
    sections: {
      ...item.sections,
      checklist: {
        ...MOCK_SERVICE_PAGE.sections.checklist,
        subtitle:
          'To deliver digital solutions of the highest quality, we follow the best practices that include in-depth market research, cutting-edge technology adoption, agile development methodologies, data privacy, and continuous optimization.',
      },
    },
  })
})

export const MOCK_FINX_SERVICES = [
  {
    title: 'Digital Roadmap Development',
    slug: 'digital-roadmap-development',
    category_id: 1,
    hero_alt: 'Toy car on map',
    // Hero
    hero_src: '/unsplash/p7pEokZap1o.jpg',
    // Sections
    sections: {
      benefits: {
        title:
          'Driving Finance Industry Transformation through Digital Innovation and Growth',
        center: true,
        items: [
          {
            title: 'Digital Transformation Consulting',
            fa_icon: 'fa-rocket',
            href: `${routeConfig.SERVICES}/digital-transformation-consulting`,
            subtitle:
              'Harness the power of technology to streamline processes, enhance customer experiences, and drive innovation.',
          },
          {
            title: 'Investment Analysis & Management',
            fa_icon: 'fa-analytics',
            href: `${routeConfig.SERVICES}/investment-analysis-and-management`,
            subtitle:
              'Maximize investments and ensure compliance with advanced financial analytics and management solutions.',
          },
          {
            title: 'Wealth Management',
            fa_icon: 'fa-wallet',
            href: `${routeConfig.SERVICES}/wealth-management`,
            subtitle:
              'Deliver personalized wealth management experiences and drive financial growth with comprehensive services.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} ignites your business with unparalleled speed, precision, and knowledge, driving transformative growth and success.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is a digital roadmap important for finance companies?',
            content:
              'A digital roadmap provides a clear direction and plan for implementing digital initiatives that drive growth, enhance operational efficiency, and deliver superior customer experiences in the ever-changing finance industry.',
          },
          {
            id: 'faqs-2',
            title:
              'How can your Digital Roadmap Development service benefit my finance business?',
            content:
              'Our service combines industry expertise, strategic planning, and data-driven insights to create a tailored digital roadmap that aligns with your business goals, mitigates risks, and maximizes the potential of digital transformation in the finance industry.',
          },
          {
            id: 'faqs-3',
            title: 'What is the process of developing a digital roadmap?',
            content:
              'We collaborate closely with your team, conducting in-depth analysis, assessing risks, facilitating stakeholder alignment, and leveraging our expertise to create a comprehensive digital roadmap that guides your finance business towards successful digital transformation.',
          },
        ],
        subtitle:
          'Learn more about our Digital Roadmap Development service and how it can drive digital transformation in the finance industry.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Strategic Vision',
            fa_icon: 'fa-lightbulb',
            subtitle:
              'We help you define a clear strategic vision for your digital transformation journey, aligning it with your business goals and objectives.',
          },
          {
            title: 'Roadmap Planning',
            fa_icon: 'fa-gears',
            subtitle:
              'We create a detailed roadmap that outlines the necessary steps, milestones, and timelines to implement digital initiatives successfully.',
          },
          {
            title: 'Risk Assessment',
            fa_icon: 'fa-balance-scale',
            subtitle:
              'We conduct a thorough assessment of potential risks and challenges associated with the digital transformation process, ensuring proactive mitigation strategies.',
          },
          {
            title: 'Stakeholder Alignment',
            fa_icon: 'fa-users',
            subtitle:
              'We facilitate collaboration and alignment among key stakeholders, ensuring buy-in and support for the digital roadmap implementation.',
          },
          {
            title: 'Digital Ecosystem Integration',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We provide guidance on integrating digital solutions, technologies, and platforms into your existing ecosystem, maximizing their impact.',
          },
          {
            title: 'Partnership and Vendor Selection',
            fa_icon: 'fa-handshake',
            subtitle:
              'We assist in identifying and selecting suitable technology partners and vendors to support your digital transformation initiatives.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our Digital Roadmap Development service combines industry expertise, data-driven insights, and strategic planning to deliver a roadmap that enables you to embrace digital innovation and drive business growth.',
      },
      summary: {
        title: 'Guiding your digital transformation journey.',
        items: [
          {
            title:
              "In today's digital landscape, having a well-defined digital roadmap is crucial for companies to stay competitive and adapt to market changes. We understand the unique challenges faced by finance industry players, and we will work closely with you to analyse your business, identify opportunities for digital transformation, and create a roadmap tailored to your specific goals and objectives.",
          },
          {
            title:
              'By leveraging emerging technologies and industry best practices, we empower your organisation to navigate the digital landscape with confidence and achieve sustainable success.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Digital Roadmap Development',
      description:
        'Define and execute a comprehensive digital roadmap that aligns with your business goals and drives transformation in the finance industry.',
    },
    subtitle:
      'Define and execute a comprehensive digital roadmap that aligns with your business goals and drives transformation in the finance industry.',
  },
  {
    title: 'FinTech Digital Strategy',
    slug: 'fintech-digital-strategy',
    category_id: 1,
    hero_alt: 'Cashless payment',
    // Hero
    hero_src: '/unsplash/0IVop5v4MMU.jpg',
    // Sections
    sections: {
      benefits: {
        title:
          'Driving Finance Industry Transformation through Digital Innovation and Growth',
        center: true,
        items: [
          {
            title: 'Digital Transformation Consulting',
            fa_icon: 'fa-rocket',
            href: `${routeConfig.SERVICES}/digital-transformation-consulting`,
            subtitle:
              'Harness the power of technology to streamline processes, enhance customer experiences, and drive innovation.',
          },
          {
            title: 'Investment Analysis & Management',
            fa_icon: 'fa-analytics',
            href: `${routeConfig.SERVICES}/investment-analysis-and-management`,
            subtitle:
              'Maximize investments and ensure compliance with advanced financial analytics and management solutions.',
          },
          {
            title: 'Wealth Management',
            fa_icon: 'fa-wallet',
            href: `${routeConfig.SERVICES}/wealth-management`,
            subtitle:
              'Deliver personalized wealth management experiences and drive financial growth with comprehensive services.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} ignites your business with unparalleled speed, precision, and knowledge, driving transformative growth and success.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is a digital strategy important for financial institutions?',
            content:
              'In the evolving financial landscape, a well-defined digital strategy is crucial. It enables financial institutions to adapt to changing customer expectations, regulatory changes, and emerging technologies. An effective digital strategy can improve operational efficiency, customer experience, compliance, and profitability.',
          },
          {
            id: 'faqs-2',
            title:
              'How can your FinTech Digital Strategy service help my business?',
            content:
              'Our service combines deep industry knowledge, technical expertise, and strategic insight to deliver tailored digital solutions. We help you leverage technology to improve operations, customer experiences, and revenue streams. From strategic consulting to implementation, we provide end-to-end support for your digital transformation journey.',
          },
          {
            id: 'faqs-3',
            title:
              'What technologies do you leverage in your digital solutions?',
            content:
              'We leverage a variety of technologies based on your specific needs. These may include cloud computing, data analytics, AI and machine learning, automation, cybersecurity measures, and more. Our goal is to leverage the right mix of technologies that align with your strategic objectives and operational needs.',
          },
        ],
        subtitle:
          'Learn more about our FinTech Digital Strategy service and how it can empower your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Strategic Insight',
            fa_icon: 'fa-brain',
            subtitle:
              'We provide strategic guidance to help financial firms navigate the complexities of digital transformation.',
          },
          {
            title: 'Digital Transformation',
            fa_icon: 'fa-digital-tachograph',
            subtitle:
              'We empower financial institutions to leverage digital technologies and improve their operations, customer experiences, and revenue streams.',
          },
          {
            title: 'Data Analysis & Insights',
            fa_icon: 'fa-chart-pie',
            subtitle:
              'We leverage data analytics to provide actionable insights that drive informed decision-making and improved business outcomes.',
          },
          {
            title: 'Cloud Strategy',
            fa_icon: 'fa-cloud',
            subtitle:
              'We help institutions implement effective cloud strategies to enhance scalability, flexibility, and security in their operations.',
          },
          {
            title: 'Cybersecurity',
            fa_icon: 'fa-lock',
            subtitle:
              'We ensure your digital strategy incorporates robust security measures to protect against cyber threats and comply with regulatory standards.',
          },
          {
            title: 'Automation & AI',
            fa_icon: 'fa-robot',
            subtitle:
              'We leverage automation and AI to drive process efficiency, cost reduction, and improved customer service.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We combine technology expertise, industry knowledge, and strategic acumen to deliver comprehensive digital solutions for the finance industry.',
      },
      summary: {
        title:
          'Transforming the financial industry through digital innovation.',
        items: [
          {
            title:
              'In the rapidly evolving financial landscape, staying ahead of the curve is crucial. Our expert team brings together a deep understanding of financial operations, regulatory environment, and customer expectations to help clients navigate their digital transformation journey effectively. ',
          },
          {
            title:
              'We prioritize delivering practical and sustainable digital strategies that can drive growth, efficiency, and competitive advantage.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'FinTech Digital Strategy',
      description:
        'Innovative digital solutions and strategic consulting services tailored for the financial industry.',
    },
    subtitle:
      'Innovative digital solutions and strategic consulting services tailored for the financial industry.',
  },
  {
    title: 'AI-Powered Business Process Automation',
    slug: 'ai-powered-business-process-automation',
    category_id: 2,
    hero_alt: '3d rendered blocks',
    // Hero
    hero_src: '/unsplash/PWv5NWEGeVE.jpg',
    // Sections
    sections: {
      benefits: {
        title:
          'Driving Finance Industry Transformation through Digital Innovation and Growth',
        center: true,
        items: [
          {
            title: 'Digital Transformation Consulting',
            fa_icon: 'fa-rocket',
            href: `${routeConfig.SERVICES}/digital-transformation-consulting`,
            subtitle:
              'Harness the power of technology to streamline processes, enhance customer experiences, and drive innovation.',
          },
          {
            title: 'Investment Analysis & Management',
            fa_icon: 'fa-analytics',
            href: `${routeConfig.SERVICES}/investment-analysis-and-management`,
            subtitle:
              'Maximize investments and ensure compliance with advanced financial analytics and management solutions.',
          },
          {
            title: 'Wealth Management',
            fa_icon: 'fa-wallet',
            href: `${routeConfig.SERVICES}/wealth-management`,
            subtitle:
              'Deliver personalized wealth management experiences and drive financial growth with comprehensive services.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} ignites your business with unparalleled speed, precision, and knowledge, driving transformative growth and success.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is AI-Powered Business Process Automation important for my business?',
            content:
              'AI-powered automation can greatly enhance the efficiency of your business operations. It can automate repetitive tasks, streamline workflows, and provide insights for continual optimization. This can result in significant cost savings and improved customer experiences.',
          },
          {
            id: 'faqs-2',
            title: 'How can your service help my financial institution?',
            content:
              'We provide tailored AI-powered automation solutions designed specifically for the finance sector. These solutions can automate various operations, from data analysis to customer service, leading to enhanced efficiency and improved customer experiences.',
          },
          {
            id: 'faqs-3',
            title:
              'What technologies do you leverage for your AI-Powered Business Process Automation service?',
            content:
              'Our solutions utilize cutting-edge technologies like machine learning, AI, robotic process automation (RPA), cloud computing, and more. The specific technologies used depend on the requirements of the task to be automated.',
          },
        ],
        subtitle:
          'Learn more about our AI-Powered Business Process Automation service and how it can enhance your business operations.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Intelligent Automation',
            fa_icon: 'fa-brain',
            subtitle:
              'We provide intelligent automation solutions that integrate AI technologies to optimize various business processes.',
          },
          {
            title: 'Robotic Process Automation',
            fa_icon: 'fa-robot',
            subtitle:
              'We implement Robotic Process Automation (RPA) to automate repetitive tasks and streamline workflows.',
          },
          {
            title: 'Performance Analytics',
            fa_icon: 'fa-chart-line',
            subtitle:
              'Our solutions offer in-depth performance analytics, providing insights to continually optimize business operations.',
          },
          {
            title: 'Cloud-Based Automation',
            fa_icon: 'fa-cloud',
            subtitle:
              'We design cloud-based automation solutions for increased scalability, flexibility, and efficiency.',
          },
          {
            title: 'Process Optimization',
            fa_icon: 'fa-cogs',
            subtitle:
              'Our team helps in optimizing your existing processes to maximize the effectiveness of automation.',
          },
          {
            title: 'Security and Compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We ensure our automation solutions comply with industry standards and enhance the security of your processes.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We offer AI-driven solutions that automate and optimize business processes, leading to enhanced efficiency and reduced costs.',
      },
      summary: {
        title: 'Revolutionizing business operations with AI-driven automation.',
        items: [
          {
            title:
              'We look to introduce advanced automation solutions into the finance sector. Our expertise lies in integrating AI technologies to improve business operations, streamline workflows, and enhance customer experiences.',
          },
          {
            title:
              'Leveraging AI-powered automation can lead to tremendous operational efficiency and cost reduction, and help financial institutions adapt to the dynamic digital environment.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'AI-Powered Business Process Automation',
      description:
        'Delivering top-notch AI-powered automation solutions designed to streamline operations in the finance sector.',
    },
    subtitle:
      'Delivering top-notch AI-powered automation solutions designed to streamline operations in the finance sector.',
  },
  {
    title: 'Workflow Management and Optimization',
    slug: 'workflow-management-and-optimization',
    category_id: 2,
    hero_alt: 'Man looking at laptop',
    // Hero
    hero_src: '/unsplash/mVV0s8ZvEm4.jpg',
    // Sections
    sections: {
      benefits: {
        title:
          'Driving Finance Industry Transformation through Digital Innovation and Growth',
        center: true,
        items: [
          {
            title: 'Digital Transformation Consulting',
            fa_icon: 'fa-rocket',
            href: `${routeConfig.SERVICES}/digital-transformation-consulting`,
            subtitle:
              'Harness the power of technology to streamline processes, enhance customer experiences, and drive innovation.',
          },
          {
            title: 'Investment Analysis & Management',
            fa_icon: 'fa-analytics',
            href: `${routeConfig.SERVICES}/investment-analysis-and-management`,
            subtitle:
              'Maximize investments and ensure compliance with advanced financial analytics and management solutions.',
          },
          {
            title: 'Wealth Management',
            fa_icon: 'fa-wallet',
            href: `${routeConfig.SERVICES}/wealth-management`,
            subtitle:
              'Deliver personalized wealth management experiences and drive financial growth with comprehensive services.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} ignites your business with unparalleled speed, precision, and knowledge, driving transformative growth and success.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is Workflow Management and Optimization crucial for my business?',
            content:
              'Workflow Management and Optimization is key to increasing efficiency and productivity in your organisation. It helps in streamlining operations, eliminating bottlenecks, reducing errors, and ensuring that your team can focus on strategic tasks. This not only improves operational efficiency but also leads to cost savings.',
          },
          {
            id: 'faqs-2',
            title: 'How can your service enhance my financial operations?',
            content:
              "Our expert team analyses your existing workflows, identifies areas for improvement, and implements bespoke solutions tailored to your organisation's needs. We also utilize task automation and advanced analytics to increase efficiency. In addition, we design workflows to enhance collaboration and ensure compliance with regulatory standards in the finance industry.",
          },
          {
            id: 'faqs-3',
            title: 'What does the workflow optimization process involve?',
            content:
              'Our workflow optimization process involves a thorough analysis of your current workflows, identification of bottlenecks and areas for improvement, and the implementation of changes. This may include process automation, reorganisation of tasks, implementation of new technologies, and training of staff. The goal is to make your workflows more efficient and effective.',
          },
        ],
        subtitle:
          'Learn more about our Workflow Management and Optimization service and how it can benefit your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Workflow Optimization',
            fa_icon: 'fa-cogs',
            subtitle:
              'We analyse your current processes to identify areas of improvement and streamline workflows for better efficiency.',
          },
          {
            title: 'Task Automation',
            fa_icon: 'fa-tasks',
            subtitle:
              'Our team implements automation solutions to handle routine tasks, enabling your staff to focus on strategic initiatives.',
          },
          {
            title: 'Performance Analytics',
            fa_icon: 'fa-chart-line',
            subtitle:
              'Leverage our advanced analytics tools to measure the effectiveness of your workflows and identify areas for further improvement.',
          },
          {
            title: 'Collaborative Workflows',
            fa_icon: 'fa-users',
            subtitle:
              'We design workflows that enhance collaboration, ensuring all team members can contribute effectively.',
          },
          {
            title: 'Business Process Management',
            fa_icon: 'fa-briefcase',
            subtitle:
              'We apply effective business process management strategies to align your operations with your business goals.',
          },
          {
            title: 'Compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Our workflows are designed to help you meet regulatory compliance standards specific to the finance industry.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our expert solutions streamline operations and increase efficiency by optimizing workflows across your organisation.',
      },
      summary: {
        title: 'Boost efficiency and productivity with optimized workflows.',
        items: [
          {
            title:
              'In the rapidly evolving financial industry, effective workflow management is essential for success. We offer bespoke solutions that streamline operations, enhance productivity, and enable your business to achieve its goals more efficiently.',
          },
          {
            title:
              'By optimizing workflows, we help you eliminate bottlenecks, reduce errors, and ensure that your team can focus on strategic tasks. ',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Workflow Management and Optimization',
      description:
        'Streamline your financial operations and enhance productivity with our expert workflow management and optimization solutions.',
    },
    subtitle:
      'Streamline your financial operations and enhance productivity with our expert workflow management and optimization solutions.',
  },
  {
    title: 'Automated Portfolio Optimization',
    slug: 'automated-portfolio-optimization',
    category_id: 3,
    hero_alt: 'Textured background',
    // Hero
    hero_src: '/unsplash/Fixg8KipOg8.jpg',
    // Sections
    sections: {
      benefits: {
        title:
          'Driving Finance Industry Transformation through Digital Innovation and Growth',
        center: true,
        items: [
          {
            title: 'Digital Transformation Consulting',
            fa_icon: 'fa-rocket',
            href: `${routeConfig.SERVICES}/digital-transformation-consulting`,
            subtitle:
              'Harness the power of technology to streamline processes, enhance customer experiences, and drive innovation.',
          },
          {
            title: 'Investment Analysis & Management',
            fa_icon: 'fa-analytics',
            href: `${routeConfig.SERVICES}/investment-analysis-and-management`,
            subtitle:
              'Maximize investments and ensure compliance with advanced financial analytics and management solutions.',
          },
          {
            title: 'Wealth Management',
            fa_icon: 'fa-wallet',
            href: `${routeConfig.SERVICES}/wealth-management`,
            subtitle:
              'Deliver personalized wealth management experiences and drive financial growth with comprehensive services.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} ignites your business with unparalleled speed, precision, and knowledge, driving transformative growth and success.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is Automated Portfolio Optimization important for my business?',
            content:
              'Automated Portfolio Optimization is crucial in the dynamic world of finance, as it can enhance your returns and reduce risk. By leveraging advanced algorithms and machine learning, it can monitor market trends and adjust portfolio allocations in real time, ensuring your financial performance is maximized.',
          },
          {
            id: 'faqs-2',
            title: 'How can your service improve my asset management?',
            content:
              "Our Automated Portfolio Optimization service utilizes sophisticated algorithms and machine learning to optimize your portfolios. It monitors market trends and adjusts portfolio allocations in real time to maximize returns and reduce risk. We also provide advanced analytics tools to measure your portfolio's performance and identify areas for improvement.",
          },
          {
            id: 'faqs-3',
            title: 'What does your service include?',
            content:
              "Our service includes automated portfolio optimization using advanced algorithms and machine learning, real-time portfolio adjustment based on market trends, performance analytics, risk management, and tailored solutions to suit your organisation's unique needs and risk profile.",
          },
        ],
        subtitle:
          'Learn more about our Automated Portfolio Optimization service and how it can revolutionize your asset management.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Advanced Algorithms',
            fa_icon: 'fa-brain',
            subtitle:
              'We employ sophisticated algorithms to optimize portfolio allocations and enhance returns.',
          },
          {
            title: 'Machine Learning',
            fa_icon: 'fa-robot',
            subtitle:
              'Our systems use machine learning to monitor market trends and adjust portfolio allocations in real time.',
          },
          {
            title: 'Performance Analytics',
            fa_icon: 'fa-chart-line',
            subtitle:
              'Leverage our advanced analytics tools to measure the performance of your portfolios and identify areas for further improvement.',
          },
          {
            title: 'Risk Management',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Our solutions are designed with risk management in mind, aiming to maximize returns while mitigating risk.',
          },
          {
            title: 'Automated Operations',
            fa_icon: 'fa-cogs',
            subtitle:
              'With our automated solutions, your portfolios are optimized 24/7, ensuring you never miss a market opportunity.',
          },
          {
            title: 'Customization',
            fa_icon: 'fa-tasks',
            subtitle:
              'We provide tailored solutions that cater to the unique needs and risk profile of your organisation.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our advanced solutions utilize machine learning and sophisticated algorithms to optimize your portfolios and enhance your financial performance.',
      },
      summary: {
        title:
          'Enhancing asset management with automated portfolio optimization.',
        items: [
          {
            title:
              'In the complex world of finance, portfolio optimization is key to asset management success. We leverage advanced algorithms and machine learning to optimize your portfolios, improve returns, and reduce risk.',
          },
          {
            title:
              'Our automated systems monitor market trends and adjust portfolio allocations in real time to maximize your financial performance.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Automated Portfolio Optimization',
      description:
        'Revolutionize your asset management with our automated portfolio optimization solutions.',
    },
    subtitle:
      'Revolutionize your asset management with our automated portfolio optimization solutions.',
  },
  {
    title: 'AI-Driven Investment Analysis',
    slug: 'ai-driven-investment-analysis',
    category_id: 3,
    hero_alt: '3d abstract sphere floating in the air',
    // Hero
    hero_src: '/unsplash/g_WPAiUc1Us.jpg',
    // Sections
    sections: {
      benefits: {
        title:
          'Driving Finance Industry Transformation through Digital Innovation and Growth',
        center: true,
        items: [
          {
            title: 'Digital Transformation Consulting',
            fa_icon: 'fa-rocket',
            href: `${routeConfig.SERVICES}/digital-transformation-consulting`,
            subtitle:
              'Harness the power of technology to streamline processes, enhance customer experiences, and drive innovation.',
          },
          {
            title: 'Investment Analysis & Management',
            fa_icon: 'fa-analytics',
            href: `${routeConfig.SERVICES}/investment-analysis-and-management`,
            subtitle:
              'Maximize investments and ensure compliance with advanced financial analytics and management solutions.',
          },
          {
            title: 'Wealth Management',
            fa_icon: 'fa-wallet',
            href: `${routeConfig.SERVICES}/wealth-management`,
            subtitle:
              'Deliver personalized wealth management experiences and drive financial growth with comprehensive services.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} ignites your business with unparalleled speed, precision, and knowledge, driving transformative growth and success.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is AI-Driven Investment Analysis important for my business?',
            content:
              'AI-Driven Investment Analysis can significantly enhance your investment decisions. By analyzing vast amounts of financial data and predicting market trends, it provides actionable insights and helps you make data-driven decisions. This not only maximizes your investment returns but also saves time and resources.',
          },
          {
            id: 'faqs-2',
            title: 'What does your service include?',
            content:
              'Our service includes AI-driven analysis of market trends and investment opportunities, predictive analytics, evaluation of potential investments, automated data processing, customized solutions based on your specific strategies and goals, and decision support to help you manage your investments more effectively.',
          },
          {
            id: 'faqs-3',
            title: 'How does AI enhance investment decisions?',
            content:
              'AI enhances investment decisions by processing and analyzing vast amounts of financial data quickly and accurately. It provides predictive analytics to forecast market trends, evaluates potential investments based on a variety of factors, and provides actionable insights to guide your investment decisions.',
          },
        ],
        subtitle:
          'Learn more about our AI-Driven Investment Analysis service and how it can empower your investment decisions.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'AI Analysis',
            fa_icon: 'fa-brain',
            subtitle:
              'Our advanced AI tools analyse market trends and investment opportunities.',
          },
          {
            title: 'Predictive Analytics',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'Leverage our predictive analytics to forecast market trends and maximize your investment returns.',
          },
          {
            title: 'Investment Evaluation',
            fa_icon: 'fa-search-dollar',
            subtitle:
              'Our AI tools evaluate potential investments based on a variety of factors to provide actionable insights.',
          },
          {
            title: 'Automated Data Processing',
            fa_icon: 'fa-robot',
            subtitle:
              'Our systems can process vast amounts of financial data quickly and accurately, saving you time and resources.',
          },
          {
            title: 'Customization',
            fa_icon: 'fa-tasks',
            subtitle:
              'We provide customized solutions tailored to your specific investment strategies and goals.',
          },
          {
            title: 'Decision Support',
            fa_icon: 'fa-clipboard-check',
            subtitle:
              'Our AI tools help you make data-driven decisions and manage your investments more effectively.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our AI-driven tools provide advanced analysis and predictive analytics to help you make informed investment decisions.',
      },
      summary: {
        title: 'Empowering investments with Artificial Intelligence.',
        items: [
          {
            title:
              'In the fast-paced world of finance, making informed investment decisions can be challenging. Our services utilize advanced AI tools to analyse market trends, evaluate investment opportunities, and provide actionable insights.',
          },
          {
            title:
              'We leverage AI and machine learning technologies to process vast amounts of financial data and provide predictive analytics, helping you make data-driven decisions and maximize your investment returns.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'AI-Driven Investment Analysis',
      description:
        'Uncover hidden opportunities and make smarter investment decisions with our AI-powered analysis tools.',
    },
    subtitle:
      'Uncover hidden opportunities and make smarter investment decisions with our AI-powered analysis tools.',
  },
  {
    title: 'AI-Enabled Regulatory Reporting',
    slug: 'ai-enabled-regulatory-reporting',
    category_id: 4,
    hero_alt: 'Cubic 3d art',
    // Hero
    hero_src: '/unsplash/wNsHBf_bTBo.jpg',
    // Sections
    sections: {
      benefits: {
        title:
          'Driving Finance Industry Transformation through Digital Innovation and Growth',
        center: true,
        items: [
          {
            title: 'Digital Transformation Consulting',
            fa_icon: 'fa-rocket',
            href: `${routeConfig.SERVICES}/digital-transformation-consulting`,
            subtitle:
              'Harness the power of technology to streamline processes, enhance customer experiences, and drive innovation.',
          },
          {
            title: 'Investment Analysis & Management',
            fa_icon: 'fa-analytics',
            href: `${routeConfig.SERVICES}/investment-analysis-and-management`,
            subtitle:
              'Maximize investments and ensure compliance with advanced financial analytics and management solutions.',
          },
          {
            title: 'Wealth Management',
            fa_icon: 'fa-wallet',
            href: `${routeConfig.SERVICES}/wealth-management`,
            subtitle:
              'Deliver personalized wealth management experiences and drive financial growth with comprehensive services.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} ignites your business with unparalleled speed, precision, and knowledge, driving transformative growth and success.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is AI-Enabled Regulatory Reporting important for my business?',
            content:
              'AI-Enabled Regulatory Reporting simplifies the complex process of regulatory reporting, reduces errors, increases efficiency, and ensures timely compliance. This allows your team to focus on strategic tasks, enhancing overall productivity.',
          },
          {
            id: 'faqs-2',
            title: 'How does your service improve regulatory reporting?',
            content:
              'Our service uses AI to automate data extraction, validation, and report generation. This reduces manual efforts, increases accuracy, and ensures timely reporting. We also provide tools for tracking regulatory changes, ensuring your reports are always up-to-date.',
          },
          {
            id: 'faqs-3',
            title: 'How does AI simplify the regulatory reporting process?',
            content:
              'AI simplifies regulatory reporting by automating tasks like data extraction and validation, reducing manual efforts and risk of errors. It also facilitates automatic generation of reports and tracking of regulatory changes, ensuring accuracy and timeliness.',
          },
        ],
        subtitle:
          'Learn more about our AI-Enabled Regulatory Reporting service and how it can simplify your regulatory reporting process.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Automated Data Extraction',
            fa_icon: 'fa-robot',
            subtitle:
              'Our AI-powered tools automate data extraction, reducing manual efforts and risk of errors.',
          },
          {
            title: 'Data Validation',
            fa_icon: 'fa-check-double',
            subtitle:
              'We automate the validation process to ensure that your reports are accurate and reliable.',
          },
          {
            title: 'Automated Report Generation',
            fa_icon: 'fa-file-alt',
            subtitle:
              'Our AI tools generate reports automatically, ensuring timely compliance with regulatory requirements.',
          },
          {
            title: 'Time Efficiency',
            fa_icon: 'fa-clock',
            subtitle:
              'With automated processes, you can significantly cut down the time spent on regulatory reporting.',
          },
          {
            title: 'Compliance Tracking',
            fa_icon: 'fa-search',
            subtitle:
              'We provide tools for tracking regulatory changes, ensuring your reports are always up-to-date.',
          },
          {
            title: 'Risk Mitigation',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'By automating reporting and compliance tracking, we help you mitigate regulatory risks.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We leverage AI to simplify regulatory reporting, reduce errors, and increase efficiency.',
      },
      summary: {
        title:
          'Transforming regulatory reporting with Artificial Intelligence.',
        items: [
          {
            title:
              'Regulatory reporting can be a complex and time-consuming process. Our AI-powered tools help you automate data extraction, validation, and report generation, ensuring accurate and timely reports.',
          },
          {
            title:
              'This enables your team to focus on strategic tasks, enhancing overall productivity.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'AI-Enabled Regulatory Reporting',
      description:
        'Leverage our AI solutions to simplify, enhance accuracy and speed up your regulatory reporting process.',
    },
    subtitle:
      'Leverage our AI solutions to simplify, enhance accuracy and speed up your regulatory reporting process.',
  },
  {
    title: 'Compliance Risk Assessment',
    slug: 'compliance-risk-assessment',
    category_id: 4,
    hero_alt: 'Dice on table',
    // Hero
    hero_src: '/unsplash/_Mpp6YZytzg.jpg',
    // Sections
    sections: {
      benefits: {
        title:
          'Driving Finance Industry Transformation through Digital Innovation and Growth',
        center: true,
        items: [
          {
            title: 'Digital Transformation Consulting',
            fa_icon: 'fa-rocket',
            href: `${routeConfig.SERVICES}/digital-transformation-consulting`,
            subtitle:
              'Harness the power of technology to streamline processes, enhance customer experiences, and drive innovation.',
          },
          {
            title: 'Investment Analysis & Management',
            fa_icon: 'fa-analytics',
            href: `${routeConfig.SERVICES}/investment-analysis-and-management`,
            subtitle:
              'Maximize investments and ensure compliance with advanced financial analytics and management solutions.',
          },
          {
            title: 'Wealth Management',
            fa_icon: 'fa-wallet',
            href: `${routeConfig.SERVICES}/wealth-management`,
            subtitle:
              'Deliver personalized wealth management experiences and drive financial growth with comprehensive services.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} ignites your business with unparalleled speed, precision, and knowledge, driving transformative growth and success.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is Compliance Risk Assessment important for my business?',
            content:
              'Compliance Risk Assessment is critical to understanding and managing the potential compliance risks associated with your operations. Effective risk management can help prevent regulatory violations, financial losses, and damage to your reputation.',
          },
          {
            id: 'faqs-2',
            title:
              'What is included in your Compliance Risk Assessment service?',
            content:
              'Our service includes identifying and evaluating compliance risks, providing strategies for risk mitigation, continuous monitoring of evolving risks, and consultation on risk management strategy. We also offer training to ensure your team is equipped to manage compliance risks effectively.',
          },
          {
            id: 'faqs-3',
            title:
              'How can your service help if we are already facing regulatory issues?',
            content:
              'If you are already facing regulatory issues, our Compliance Risk Assessment service can help you understand the root cause and implement remedial measures. We will guide you through necessary steps to mitigate current risks, avoid future regulatory breaches, and restore compliance.',
          },
        ],
        subtitle:
          'Find out more about our Compliance Risk Assessment service and how it can help you.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Risk Identification',
            fa_icon: 'fa-search',
            subtitle:
              'We help you identify potential compliance risks associated with your financial operations.',
          },
          {
            title: 'Risk Evaluation',
            fa_icon: 'fa-balance-scale',
            subtitle:
              'Our team evaluates the potential impact and likelihood of identified risks materializing.',
          },
          {
            title: 'Risk Mitigation',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We provide strategies to mitigate identified risks, ensuring you operate within regulatory boundaries.',
          },
          {
            title: 'Continuous Monitoring',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We offer continuous monitoring services to manage evolving risks and regulatory changes.',
          },
          {
            title: 'Consultation',
            fa_icon: 'fa-hands-helping',
            subtitle:
              'Our experts provide consultation and guidance on your compliance risk management strategy.',
          },
          {
            title: 'Training',
            fa_icon: 'fa-book',
            subtitle:
              'We provide training to ensure your team understands compliance risks and how to manage them.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We provide a comprehensive suite of services to assist you in managing your compliance risks effectively.',
      },
      summary: {
        title: 'Navigating compliance risks with confidence.',
        items: [
          {
            title:
              'Compliance risks can have significant impacts on your business. We provide effective solutions that help you navigate these challenges confidently.',
          },
          {
            title:
              'We help identify, assess, and mitigate compliance risks, ensuring you are always ahead of regulatory changes and minimizing potential penalties.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Compliance Risk Assessment',
      description:
        'Streamline your compliance management and minimize risks with our tailored solutions.',
    },
    subtitle:
      'Streamline your compliance management and minimize risks with our tailored solutions.',
  },
  {
    title: 'Automated Legal Document Review',
    slug: 'automated-legal-document-review',
    category_id: 4,
    hero_alt: 'Stack of books',
    // Hero
    hero_src: '/unsplash/XN4T2PVUUgk.jpg',
    // Sections
    sections: {
      benefits: {
        title:
          'Driving Finance Industry Transformation through Digital Innovation and Growth',
        center: true,
        items: [
          {
            title: 'Digital Transformation Consulting',
            fa_icon: 'fa-rocket',
            href: `${routeConfig.SERVICES}/digital-transformation-consulting`,
            subtitle:
              'Harness the power of technology to streamline processes, enhance customer experiences, and drive innovation.',
          },
          {
            title: 'Investment Analysis & Management',
            fa_icon: 'fa-analytics',
            href: `${routeConfig.SERVICES}/investment-analysis-and-management`,
            subtitle:
              'Maximize investments and ensure compliance with advanced financial analytics and management solutions.',
          },
          {
            title: 'Wealth Management',
            fa_icon: 'fa-wallet',
            href: `${routeConfig.SERVICES}/wealth-management`,
            subtitle:
              'Deliver personalized wealth management experiences and drive financial growth with comprehensive services.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} ignites your business with unparalleled speed, precision, and knowledge, driving transformative growth and success.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why should I automate legal document review?',
            content:
              'Automating legal document review not only saves time and resources but also enhances accuracy, as it eliminates the risk of human error. It can help streamline your legal operations and free your legal team to focus on more strategic tasks.',
          },
          {
            id: 'faqs-2',
            title: 'What types of documents can your service review?',
            content:
              'Our service is designed to handle a wide variety of legal documents, including contracts, agreements, and regulatory documents. Contact us for more specific information regarding your needs.',
          },
          {
            id: 'faqs-3',
            title:
              'How accurate is your Automated Legal Document Review service?',
            content:
              "Our service leverages advanced AI and machine learning technologies, designed to ensure high accuracy and consistency in document review. However, as with any automated system, it's recommended to have final reviews conducted by legal professionals.",
          },
        ],
        subtitle:
          'Learn more about our Automated Legal Document Review service and how it can streamline your legal operations.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Intelligent Automation',
            fa_icon: 'fa-robot',
            subtitle:
              'We leverage advanced AI and machine learning technologies to automate the review of your legal documents.',
          },
          {
            title: 'Accuracy & Consistency',
            fa_icon: 'fa-clipboard-check',
            subtitle:
              'Our automated review ensures consistent results, minimizing the risk of human error.',
          },
          {
            title: 'Time-saving',
            fa_icon: 'fa-clock',
            subtitle:
              'Our service helps you save valuable time by automating the tedious process of document review.',
          },
          {
            title: 'Cost-effective',
            fa_icon: 'fa-money-check-alt',
            subtitle:
              'By reducing manual effort, our service helps lower the costs associated with legal document review.',
          },
          {
            title: 'Compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We ensure that your legal documents comply with applicable laws and regulations.',
          },
          {
            title: 'Resource Management',
            fa_icon: 'fa-users-cog',
            subtitle:
              'Enable your legal team to focus on strategic tasks by eliminating routine manual review.',
          },
        ],
        overline: 'What we offer',
        subtitle:
          'Our robust automated legal document review service is designed to help you manage your legal operations more efficiently.',
      },
      summary: {
        title: 'Automate and optimize your legal document review process.',
        items: [
          {
            title:
              'We believe in the power of automation and its potential to revolutionize the legal industry. We leverage cutting-edge technology to automate and optimize your legal document review process, saving you valuable time and resources.',
          },
          {
            title:
              'With our service, you can expect enhanced accuracy, faster turnaround times, and lower costs. Empower your legal team to focus on more strategic tasks, while we take care of the routine.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Automated Legal Document Review',
      description:
        'Revolutionizing the legal landscape with intelligent automation.',
    },
    subtitle:
      'Revolutionizing the legal landscape with intelligent automation.',
  },
  {
    title: 'AI-Driven Asset Allocation',
    slug: 'ai-driven-asset-allocation',
    category_id: 5,
    hero_alt: 'Textured background',
    // Hero
    hero_src: '/unsplash/af5vFlDUHeg.jpg',
    // Sections
    sections: {
      benefits: {
        title:
          'Driving Finance Industry Transformation through Digital Innovation and Growth',
        center: true,
        items: [
          {
            title: 'Digital Transformation Consulting',
            fa_icon: 'fa-rocket',
            href: `${routeConfig.SERVICES}/digital-transformation-consulting`,
            subtitle:
              'Harness the power of technology to streamline processes, enhance customer experiences, and drive innovation.',
          },
          {
            title: 'Investment Analysis & Management',
            fa_icon: 'fa-analytics',
            href: `${routeConfig.SERVICES}/investment-analysis-and-management`,
            subtitle:
              'Maximize investments and ensure compliance with advanced financial analytics and management solutions.',
          },
          {
            title: 'Wealth Management',
            fa_icon: 'fa-wallet',
            href: `${routeConfig.SERVICES}/wealth-management`,
            subtitle:
              'Deliver personalized wealth management experiences and drive financial growth with comprehensive services.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} ignites your business with unparalleled speed, precision, and knowledge, driving transformative growth and success.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why should I use AI for asset allocation?',
            content:
              'AI-driven asset allocation uses machine learning and data analytics to optimize asset allocation strategies. This approach can analyse vast amounts of data, identify patterns, and forecast market trends more accurately, enabling smarter and more profitable investment decisions.',
          },
          {
            id: 'faqs-2',
            title: 'What types of assets can your service allocate?',
            content:
              "Our AI-Driven Asset Allocation service can handle a wide range of asset types, including stocks, bonds, real estate, and more. The system can be customized to suit your company's specific needs and preferences.",
          },
          {
            id: 'faqs-3',
            title: 'How does your service handle risk management?',
            content:
              'Our service evaluates potential risks using AI algorithms, aiding in the development of robust risk management strategies. By predicting potential market downturns and other risk factors, we help mitigate losses and optimize returns.',
          },
        ],
        subtitle:
          'Learn more about our AI-Driven Asset Allocation service and how it can benefit your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Advanced AI Technology',
            fa_icon: 'fa-brain',
            subtitle:
              'We utilize state-of-the-art AI technology to analyse market trends and inform asset allocation decisions.',
          },
          {
            title: 'Predictive Analytics',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'Our service provides predictive analytics for future market trends, facilitating data-driven decision making.',
          },
          {
            title: 'Risk Assessment',
            fa_icon: 'fa-balance-scale',
            subtitle:
              'Our AI algorithms evaluate potential risks, aiding in the development of robust risk management strategies.',
          },
          {
            title: 'Portfolio Optimization',
            fa_icon: 'fa-coins',
            subtitle:
              'We optimize your asset portfolio to align with your financial goals and risk tolerance.',
          },
          {
            title: 'Dynamic Reallocation',
            fa_icon: 'fa-sync-alt',
            subtitle:
              'Our system allows for dynamic asset reallocation in response to changing market conditions.',
          },
          {
            title: 'Regulatory Compliance',
            fa_icon: 'fa-user-shield',
            subtitle:
              'Our service is designed to meet all regulatory requirements, ensuring peace of mind.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Harnessing the power of AI, we help companies make informed asset allocation decisions for superior portfolio performance.',
      },
      summary: {
        title: 'Revolutionizing asset allocation with AI.',
        items: [
          {
            title:
              'In the rapidly evolving financial world, traditional asset allocation strategies might not yield the desired results. We apply machine learning and data analytics to optimize these strategies, providing your company with a competitive edge.',
          },
          {
            title:
              'By identifying patterns in vast amounts of financial data, our AI-driven approach can forecast market trends more accurately, enabling smarter and more profitable investment decisions.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'AI-Driven Asset Allocation',
      description:
        'Harnessing the power of AI to optimize asset allocation strategies.',
    },
    subtitle:
      'Harnessing the power of AI to optimize asset allocation strategies.',
  },
  {
    title: 'Predictive Customer behaviour Analysis',
    slug: 'predictive-customer-behaviour-analysis',
    category_id: 5,
    hero_alt: '3d illustration of geometric stuff made in a blender.',
    // Hero
    hero_src: '/unsplash/AnG9sri3WdI.jpg',
    // Sections
    sections: {
      benefits: {
        title:
          'Driving Finance Industry Transformation through Digital Innovation and Growth',
        center: true,
        items: [
          {
            title: 'Digital Transformation Consulting',
            fa_icon: 'fa-rocket',
            href: `${routeConfig.SERVICES}/digital-transformation-consulting`,
            subtitle:
              'Harness the power of technology to streamline processes, enhance customer experiences, and drive innovation.',
          },
          {
            title: 'Investment Analysis & Management',
            fa_icon: 'fa-analytics',
            href: `${routeConfig.SERVICES}/investment-analysis-and-management`,
            subtitle:
              'Maximize investments and ensure compliance with advanced financial analytics and management solutions.',
          },
          {
            title: 'Wealth Management',
            fa_icon: 'fa-wallet',
            href: `${routeConfig.SERVICES}/wealth-management`,
            subtitle:
              'Deliver personalized wealth management experiences and drive financial growth with comprehensive services.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} ignites your business with unparalleled speed, precision, and knowledge, driving transformative growth and success.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'How can Predictive Customer behaviour Analysis benefit my business?',
            content:
              "Predictive Customer behaviour Analysis can provide valuable insights into your customers' future behaviours, enabling you to optimize product offerings, enhance customer experience, improve retention, and increase profitability. By understanding and anticipating customer behaviours, you can make more informed decisions and strategically plan your business operations.",
          },
          {
            id: 'faqs-2',
            title:
              'What data do you need to perform Predictive Customer behaviour Analysis?',
            content:
              "Our analysis is based on a variety of customer data, including demographics, transaction history, browsing behaviour, and more. The more data we have, the more accurate our predictions can be. However, we ensure all data is handled with strict adherence to privacy regulations and your company's data policies.",
          },
          {
            id: 'faqs-3',
            title: 'How accurate are the predictions from your service?',
            content:
              'While no predictive analysis can guarantee 100% accuracy, our service uses advanced machine learning algorithms and robust data processing techniques to provide highly reliable predictions. Furthermore, as we continually refine our models with new data, the accuracy of our predictions typically improves over time.',
          },
        ],
        subtitle:
          'Learn more about our Predictive Customer behaviour Analysis service and how it can drive your business growth.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Customer Segmentation',
            fa_icon: 'fa-chart-line',
            subtitle:
              'Our service clusters customers into distinct groups based on their behaviours, preferences, and more, enabling personalized engagement.',
          },
          {
            title: 'Churn Prediction',
            fa_icon: 'fa-bullseye',
            subtitle:
              'We identify customers who are likely to churn, allowing proactive actions to increase retention.',
          },
          {
            title: 'Purchase Prediction',
            fa_icon: 'fa-shopping-cart',
            subtitle:
              'Predict future buying behaviours to optimize product offerings and increase sales.',
          },
          {
            title: 'Customer Lifetime Value Prediction',
            fa_icon: 'fa-user-circle',
            subtitle:
              'Determine the predicted revenue that a customer can generate during their lifetime with your company.',
          },
          {
            title: 'Personalized Marketing',
            fa_icon: 'fa-users-cog',
            subtitle:
              'Utilize customer behaviour insights to personalize marketing efforts and improve conversion rates.',
          },
          {
            title: 'Compliance and Privacy',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Ensure that all predictive analysis adheres to the highest standards of data privacy and regulatory compliance.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Offering a comprehensive range of customer behaviour predictive analysis services to support your business.',
      },
      summary: {
        title: 'Transforming customer data into actionable insights.',
        items: [
          {
            title:
              'In the competitive finance industry, understanding and predicting customer behaviour is key to success. We apply machine learning algorithms to customer data, providing powerful insights that can drive business growth.',
          },
          {
            title:
              'From predicting future buying patterns to identifying potential churn, our service provides the predictive insights needed to optimize customer experiences, improve retention, and increase profitability.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Predictive Customer behaviour Analysis',
      description:
        'Utilizing advanced AI algorithms to predict customer behaviours and improve business outcomes.',
    },
    subtitle:
      'Utilizing advanced AI algorithms to predict customer behaviours and improve business outcomes.',
  },
  {
    title: 'Personalized Product Recommendation Systems',
    slug: 'personalized-product-recommendations-systems',
    category_id: 5,
    hero_alt: 'iPhone homescreen',
    // Hero
    hero_src: '/unsplash/pu3bAmgHWj4.jpg',
    // Sections
    sections: {
      benefits: {
        title:
          'Driving Finance Industry Transformation through Digital Innovation and Growth',
        center: true,
        items: [
          {
            title: 'Digital Transformation Consulting',
            fa_icon: 'fa-rocket',
            href: `${routeConfig.SERVICES}/digital-transformation-consulting`,
            subtitle:
              'Harness the power of technology to streamline processes, enhance customer experiences, and drive innovation.',
          },
          {
            title: 'Investment Analysis & Management',
            fa_icon: 'fa-analytics',
            href: `${routeConfig.SERVICES}/investment-analysis-and-management`,
            subtitle:
              'Maximize investments and ensure compliance with advanced financial analytics and management solutions.',
          },
          {
            title: 'Wealth Management',
            fa_icon: 'fa-wallet',
            href: `${routeConfig.SERVICES}/wealth-management`,
            subtitle:
              'Deliver personalized wealth management experiences and drive financial growth with comprehensive services.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} ignites your business with unparalleled speed, precision, and knowledge, driving transformative growth and success.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is a personalized product recommendation system important?',
            content:
              'Personalized product recommendations can significantly improve customer engagement by providing a tailored shopping experience. They can help increase conversions, boost customer loyalty, and drive additional revenue by promoting relevant products to customers.',
          },
          {
            id: 'faqs-2',
            title: 'What kind of data is needed for the system?',
            content:
              "Our system uses a variety of customer data, including transaction history, browsing behaviour, and personal demographics. We use this data to understand customer preferences and make personalized product recommendations. All data is handled with strict adherence to privacy regulations and your company's data policies.",
          },
          {
            id: 'faqs-3',
            title: 'How can I measure the impact of the recommendation system?',
            content:
              'We provide detailed analytics and reporting features that allow you to measure key metrics such as conversion rates, average order value, and customer engagement. These insights can help you understand the impact of the recommendation system on your business performance.',
          },
        ],
        subtitle:
          'Learn more about our Personalized Product Recommendation Systems and how they can benefit your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'AI-Powered Recommendations',
            fa_icon: 'fa-chart-line',
            subtitle:
              'Our system uses AI and machine learning to provide accurate, real-time product recommendations for each individual customer.',
          },
          {
            title: 'Adaptive Learning',
            fa_icon: 'fa-brain',
            subtitle:
              'Our system learns from each interaction, continually refining its recommendations to improve relevance over time.',
          },
          {
            title: 'System Integration',
            fa_icon: 'fa-cogs',
            subtitle:
              'We ensure seamless integration with your existing digital platforms for a smooth user experience.',
          },
          {
            title: 'Data Privacy & Security',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize customer data privacy and system security to keep your business and your customers safe.',
          },
          {
            title: 'Analytics & Reporting',
            fa_icon: 'fa-chart-pie',
            subtitle:
              'We provide detailed analytics to help you understand the performance and impact of your recommendation system.',
          },
          {
            title: 'Consulting & Support',
            fa_icon: 'fa-users-cog',
            subtitle:
              'Our team of experts offers ongoing consulting and support to help you maximize the value of your recommendation system.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We provide a full suite of services to build, implement, and enhance your personalized product recommendation system.',
      },
      summary: {
        title:
          'Elevating customer experience with personalized recommendations.',
        items: [
          {
            title:
              'As the financial landscape grows increasingly competitive, it’s more important than ever to offer tailored experiences to your customers. We leverage advanced machine learning algorithms to analyse customer data and provide highly relevant product suggestions.',
          },
          {
            title:
              'Our systems adapt to evolving customer preferences, helping financial businesses like yours improve customer engagement, increase conversions, and maximize revenue.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Personalized Product Recommendation Systems',
      description:
        'Drive customer engagement and revenue by leveraging AI-powered personalized recommendations.',
    },
    subtitle:
      'Drive customer engagement and revenue by leveraging AI-powered personalized recommendations.',
  },
  {
    title: 'Engineering Staff Augmentation',
    slug: 'engineering-staff-augmentation',
    category_id: 6,
    hero_alt: 'Two people discussing',
    // Hero
    hero_src: '/unsplash/uOhBxB23Wao.jpg',
    // Sections
    sections: {
      benefits: {
        title:
          'Driving Finance Industry Transformation through Digital Innovation and Growth',
        center: true,
        items: [
          {
            title: 'Digital Transformation Consulting',
            fa_icon: 'fa-rocket',
            href: `${routeConfig.SERVICES}/digital-transformation-consulting`,
            subtitle:
              'Harness the power of technology to streamline processes, enhance customer experiences, and drive innovation.',
          },
          {
            title: 'Investment Analysis & Management',
            fa_icon: 'fa-analytics',
            href: `${routeConfig.SERVICES}/investment-analysis-and-management`,
            subtitle:
              'Maximize investments and ensure compliance with advanced financial analytics and management solutions.',
          },
          {
            title: 'Wealth Management',
            fa_icon: 'fa-wallet',
            href: `${routeConfig.SERVICES}/wealth-management`,
            subtitle:
              'Deliver personalized wealth management experiences and drive financial growth with comprehensive services.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} ignites your business with unparalleled speed, precision, and knowledge, driving transformative growth and success.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'What is Engineering Staff Augmentation?',
            content:
              'Engineering Staff Augmentation is a flexible outsourcing strategy that allows you to hire tech talent globally and manage your augmented team directly. You are the one to choose your team members and manage their work, while the staffing company handles all administrative and HR processes.',
          },
          {
            id: 'faqs-2',
            title: 'How quickly can I scale my team with Staff Augmentation?',
            content:
              'The time to scale depends on your specific needs. However, with our extensive network and efficient onboarding processes, we can often introduce new team members within a few days to a few weeks.',
          },
          {
            id: 'faqs-3',
            title:
              'What if the provided engineer or team doesn’t meet my expectations?',
            content:
              "Your satisfaction is our priority. If you're not satisfied with the performance of an engineer or a team we’ve provided, we will work with you to find a suitable replacement.",
          },
        ],
        subtitle:
          'Learn more about our Engineering Staff Augmentation service and how it can benefit your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Talent Acquisition',
            fa_icon: 'fa-user-plus',
            subtitle:
              'We identify and onboard skilled engineers that fit your specific project needs and team culture.',
          },
          {
            title: 'Seamless Integration',
            fa_icon: 'fa-sync-alt',
            subtitle:
              'Our engineers integrate into your existing team, processes, and communication channels for maximum efficiency.',
          },
          {
            title: 'Scale Rapidly',
            fa_icon: 'fa-chart-line',
            subtitle:
              'Quickly scale up or down based on project requirements, helping you manage costs effectively.',
          },
          {
            title: 'Wide Range of Expertise',
            fa_icon: 'fa-cogs',
            subtitle:
              'Our pool of engineers has a broad spectrum of expertise, covering numerous technologies and industries.',
          },
          {
            title: 'Flexible Engagement',
            fa_icon: 'fa-clock',
            subtitle:
              'We offer both short-term and long-term engagements to suit your project timelines and budget.',
          },
          {
            title: 'Support and Guidance',
            fa_icon: 'fa-hands-helping',
            subtitle:
              'Our relationship managers ensure smooth operations and are always ready to address any issues or queries.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We provide a full suite of services to help you meet your engineering needs.',
      },
      summary: {
        title: 'Flexible, scalable team expansion to meet your goals.',
        items: [
          {
            title:
              'We provide skilled engineers who can seamlessly integrate with your existing teams and processes, boosting your capabilities and allowing you to scale effortlessly.',
          },
          {
            title:
              'Whether you need a single engineer or a whole team, for a month or a year, we offer flexible engagement models that align with your business needs and goals.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Engineering Staff Augmentation',
      description:
        'Supplement your team with expert engineers to accelerate your digital transformation.',
    },
    subtitle:
      'Supplement your team with expert engineers to accelerate your digital transformation.',
  },
  {
    title: 'Generative AI Solutions',
    slug: 'generative-ai-solutions',
    category_id: 6,
    hero_alt: 'Shapes in a ball',
    // Hero
    hero_src: '/unsplash/I02k89RVzB4.jpg',
    // Sections
    sections: {
      benefits: {
        title:
          'Driving Finance Industry Transformation through Digital Innovation and Growth',
        center: true,
        items: [
          {
            title: 'Digital Transformation Consulting',
            fa_icon: 'fa-rocket',
            href: `${routeConfig.SERVICES}/digital-transformation-consulting`,
            subtitle:
              'Harness the power of technology to streamline processes, enhance customer experiences, and drive innovation.',
          },
          {
            title: 'Investment Analysis & Management',
            fa_icon: 'fa-analytics',
            href: `${routeConfig.SERVICES}/investment-analysis-and-management`,
            subtitle:
              'Maximize investments and ensure compliance with advanced financial analytics and management solutions.',
          },
          {
            title: 'Wealth Management',
            fa_icon: 'fa-wallet',
            href: `${routeConfig.SERVICES}/wealth-management`,
            subtitle:
              'Deliver personalized wealth management experiences and drive financial growth with comprehensive services.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} ignites your business with unparalleled speed, precision, and knowledge, driving transformative growth and success.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'What is generative AI?',
            content:
              'Generative AI refers to the use of artificial intelligence techniques, such as deep learning and reinforcement learning, to generate new content, ideas, or solutions. It enables machines to create original and valuable outputs, leading to automated creativity and intelligent problem-solving.',
          },
          {
            id: 'faqs-2',
            title:
              'How can generative AI benefit my business in the finance industry?',
            content:
              'Generative AI can bring numerous benefits to the finance industry. It can automate time-consuming tasks, generate personalized product recommendations, optimize trading strategies, detect fraud, and enhance risk assessment models. By leveraging generative AI, businesses in finance can drive innovation, improve operational efficiency, and gain a competitive edge.',
          },
          {
            id: 'faqs-3',
            title:
              'Do I need a large amount of data to implement generative AI solutions?',
            content:
              'The amount of data required for generative AI solutions depends on the specific application and complexity of the problem. While more data can often lead to better results, it is possible to develop effective generative AI models even with limited data. Our team will work closely with you to determine the data requirements and develop tailored solutions based on your available data.',
          },
        ],
        subtitle:
          'Learn more about our Generative AI Solutions and how they can transform your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Automated Creativity',
            fa_icon: 'fa-lightbulb',
            subtitle:
              'Unlock new possibilities by leveraging generative AI to automate creative processes and generate unique ideas.',
          },
          {
            title: 'Intelligent Problem-Solving',
            fa_icon: 'fa-cogs',
            subtitle:
              'Solve complex problems efficiently by utilizing generative AI algorithms that can explore and optimize solution spaces.',
          },
          {
            title: 'Custom Model Development',
            fa_icon: 'fa-cube',
            subtitle:
              'We develop custom generative AI models tailored to your specific business requirements and data.',
          },
          {
            title: 'Domain Expertise',
            fa_icon: 'fa-brain',
            subtitle:
              'Our team combines expertise in generative AI with deep domain knowledge to deliver impactful solutions in the finance industry.',
          },
          {
            title: 'Data Analysis and Modeling',
            fa_icon: 'fa-database',
            subtitle:
              'We provide comprehensive data analysis and modeling services to support generative AI initiatives.',
          },
          {
            title: 'Scalable Deployment',
            fa_icon: 'fa-globe',
            subtitle:
              'We ensure that your generative AI solutions are deployed efficiently and can scale to meet your growing needs.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We deliver cutting-edge generative AI solutions tailored to your business needs.',
      },
      summary: {
        title: 'Unlocking new possibilities with generative AI.',
        items: [
          {
            title:
              'Generative AI is revolutionizing various industries, including finance, by automating creative processes and providing novel solutions to complex problems.',
          },
          {
            title:
              'Our team of experts combines advanced machine learning techniques with domain-specific knowledge to develop tailored generative AI solutions that can automate tasks, generate personalized recommendations, optimize processes, and much more.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Generative AI Solutions',
      description:
        'Discover how our generative AI solutions can transform your business by enabling automated creativity and intelligent problem-solving.',
    },
    subtitle:
      'Discover how our generative AI solutions can transform your business by enabling automated creativity and intelligent problem-solving.',
  },
  {
    title: 'ChatGPT API Development',
    slug: 'chatgpt-api-development',
    category_id: 6,
    hero_alt: 'OpenAI homescreen',
    // Hero
    hero_src: '/unsplash/UF3vfhV04SA.jpg',
    // Sections
    sections: {
      benefits: {
        title:
          'Driving Finance Industry Transformation through Digital Innovation and Growth',
        center: true,
        items: [
          {
            title: 'Digital Transformation Consulting',
            fa_icon: 'fa-rocket',
            href: `${routeConfig.SERVICES}/digital-transformation-consulting`,
            subtitle:
              'Harness the power of technology to streamline processes, enhance customer experiences, and drive innovation.',
          },
          {
            title: 'Investment Analysis & Management',
            fa_icon: 'fa-analytics',
            href: `${routeConfig.SERVICES}/investment-analysis-and-management`,
            subtitle:
              'Maximize investments and ensure compliance with advanced financial analytics and management solutions.',
          },
          {
            title: 'Wealth Management',
            fa_icon: 'fa-wallet',
            href: `${routeConfig.SERVICES}/wealth-management`,
            subtitle:
              'Deliver personalized wealth management experiences and drive financial growth with comprehensive services.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} ignites your business with unparalleled speed, precision, and knowledge, driving transformative growth and success.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'What is ChatGPT?',
            content:
              'ChatGPT is a state-of-the-art language model developed by OpenAI that excels in generating human-like text responses in a conversational setting. It can be used to build chatbots, virtual assistants, and other conversational AI applications.',
          },
          {
            id: 'faqs-2',
            title: 'How can ChatGPT benefit my business?',
            content:
              'By leveraging ChatGPT, businesses can automate customer support, improve response times, personalize interactions, and scale their customer service efforts. It enables efficient handling of frequently asked questions, provides 24/7 availability, and enhances customer satisfaction.',
          },
          {
            id: 'faqs-3',
            title: 'What industries can benefit from ChatGPT API development?',
            content:
              'ChatGPT API development can benefit a wide range of industries, including finance, e-commerce, healthcare, telecommunications, and more. Any business that interacts with customers can leverage ChatGPT to enhance their customer support, sales, and engagement processes.',
          },
        ],
        subtitle:
          'Learn more about our ChatGPT API Development services and how they can elevate your customer interactions.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Chatbot Development',
            fa_icon: 'fa-cogs',
            subtitle:
              'Build intelligent chatbots powered by our ChatGPT API to automate customer support, sales interactions, and more.',
          },
          {
            title: 'API Integration',
            fa_icon: 'fa-server',
            subtitle:
              'Integrate our ChatGPT API seamlessly into your existing systems, applications, and platforms.',
          },
          {
            title: 'Custom Application Development',
            fa_icon: 'fa-laptop-code',
            subtitle:
              'We develop custom applications and interfaces that leverage the capabilities of our ChatGPT API.',
          },
          {
            title: 'Data Management and Training',
            fa_icon: 'fa-database',
            subtitle:
              'Ensure optimal performance of your ChatGPT models through data management, training, and continuous improvement.',
          },
          {
            title: 'Intent Recognition',
            fa_icon: 'fa-lightbulb',
            subtitle:
              "Enhance your chatbot's understanding of user intent with advanced intent recognition capabilities.",
          },
          {
            title: 'Security and Compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize the security and compliance of your ChatGPT API implementation, ensuring data protection and privacy.',
          },
        ],
        overline: 'What we offer',
        subtitle:
          'We deliver robust ChatGPT API solutions tailored to your business needs.',
      },
      summary: {
        title: 'Transforming customer interactions with ChatGPT.',
        items: [
          {
            title:
              'Conversational AI has become a game-changer in customer interactions, enabling businesses to provide personalized and efficient support at scale.',
          },
          {
            title:
              'Our team of experts leverages the latest advancements in natural language processing and deep learning to create ChatGPT models that can understand user intent, generate human-like responses, and provide meaningful conversational experiences.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'ChatGPT API Development',
      description:
        'Unlock the power of conversational AI with our ChatGPT API development services.',
    },
    subtitle:
      'Unlock the power of conversational AI with our ChatGPT API development services.',
  },
].map((item, i) => {
  return merge({}, MOCK_SERVICE_PAGE, {
    id: i + 1,
    // Category
    category: getCategoryFromCrudItem(item, MOCK_FINX_SERVICE_CATEGORYS),
    overline: 'Service',
    ...item,
    sections: {
      ...item.sections,
      checklist: {
        ...MOCK_SERVICE_PAGE.sections.checklist,
        subtitle:
          'To deliver financial solutions of the highest quality, we follow the best practices that include thorough financial analysis, regulatory compliance, risk management, data security, and continuous improvement.',
      },
    },
  })
})

export const MOCK_GOVX_SERVICES = [
  {
    title: 'E-Government Platform Development',
    slug: 'egovernment-platform-development',
    category_id: 1,
    hero_alt: 'Lincoln memorial',
    // Hero
    hero_src: '/unsplash/K_GxWa69dMw.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'What is the importance of e-government platforms?',
            content:
              "E-Government platforms are integral to modernizing public sector services, improving accessibility, streamlining operations, and enhancing transparency and accountability. These platforms also play a vital role in meeting citizens' evolving digital expectations.",
          },
          {
            id: 'faqs-2',
            title:
              'What sets your E-Government Platform Development services apart?',
            content:
              'Our E-Government Platform Development services are unique due to our comprehensive approach, which incorporates user-centric design, cutting-edge technology, stringent security measures, and a deep understanding of public sector requirements.',
          },
          {
            id: 'faqs-3',
            title:
              'How does your team ensure the security and privacy of the platform?',
            content:
              'We prioritize security and privacy in our platform development process. We adhere to all the best practices and regulations, including data encryption, secure coding practices, and routine security testing, to ensure the highest level of security and data privacy.',
          },
        ],
        subtitle:
          'Learn more about our E-Government Platform Development Service and how we can help transform your public sector enterprise.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Custom platform development',
            fa_icon: 'fa-laptop-code',
            subtitle:
              'We develop custom digital platforms tailored to meet the unique needs of public sector enterprises.',
          },
          {
            title: 'Data privacy and security',
            fa_icon: 'fa-user-shield',
            subtitle:
              'We ensure the highest level of data privacy and security, adhering to all the regulations and best practices.',
          },
          {
            title: 'Cloud-based solutions',
            fa_icon: 'fa-cloud-upload-alt',
            subtitle:
              'We create flexible and scalable cloud-based solutions, enabling seamless service delivery across all devices.',
          },
          {
            title: 'Mobile-first approach',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'We prioritize a mobile-first approach, ensuring your platform is easily accessible to all users, regardless of their device.',
          },
          {
            title: 'AI and automation',
            fa_icon: 'fa-robot',
            subtitle:
              'We incorporate AI and automation into our platforms to improve service delivery and streamline operations.',
          },
          {
            title: 'User-centric design',
            fa_icon: 'fa-users-cog',
            subtitle:
              'We place users at the heart of our design process, creating platforms that are intuitive, accessible, and user-friendly.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our approach to e-government platform development is comprehensive, focusing on efficiency, security, and most importantly, user engagement.',
      },
      summary: {
        title:
          'Empowering the public sector with innovative digital solutions.',
        items: [
          {
            title:
              'The public sector is evolving, and so are the digital needs of citizens. We specialize in creating robust, reliable, and user-friendly platforms that cater to the diverse needs of the public sector.',
          },
          {
            title:
              'Our team of experts understand the unique challenges faced by the public sector and develop tailored solutions that are not only technologically advanced but also focused on enhancing user experience and accessibility.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'E-Government Platform Development',
      description:
        'Building digital platforms that streamline government operations and improve public service delivery.',
    },
    subtitle:
      'Building digital platforms that streamline government operations and improve public service delivery.',
  },
  {
    title: 'Citizen Engagement Tools',
    slug: 'citizen-engagement-tools',
    category_id: 1,
    hero_alt: 'Town hall meeting',
    // Hero
    hero_src: '/unsplash/cw-cj_nFa14.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is citizen engagement important in the public sector?',
            content:
              'Active citizen engagement is key to effective governance. It allows public sector institutions to understand citizen needs better, gain valuable feedback, and make informed decisions. Moreover, engaged citizens are more likely to contribute positively to community activities, policymaking, and public affairs.',
          },
          {
            id: 'faqs-2',
            title:
              'How can our public sector institution benefit from your Citizen Engagement Tools service?',
            content:
              'Our Citizen Engagement Tools service can help your institution foster meaningful relationships with citizens. By using our tools, you can facilitate interactive communication, gain valuable insights, make data-driven decisions, and enhance your services. Moreover, our emphasis on security and accessibility ensures that your digital platforms are trusted and accessible to all.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure the security and accessibility of your tools?',
            content:
              'We adhere to industry best practices for data security and privacy. All our tools are designed with robust security measures to protect sensitive information. Furthermore, we focus on making our solutions accessible to all citizens, ensuring inclusivity in the digital transformation journey.',
          },
        ],
        subtitle:
          'Learn more about our Citizen Engagement Tools service and how it can benefit your institution.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Interactive communication platforms',
            fa_icon: 'fa-comments',
            subtitle:
              'Our solutions foster active dialogue between citizens and institutions, enabling real-time feedback and discussions.',
          },
          {
            title: 'Mobile-first approach',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'We design our solutions with a mobile-first approach, ensuring seamless experiences across all devices.',
          },
          {
            title: 'Data-driven insights',
            fa_icon: 'fa-database',
            subtitle:
              'Leverage actionable insights from citizens to make data-driven decisions that enhance your services.',
          },
          {
            title: 'Robust security',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize security to protect sensitive citizen data and build trust in your digital platforms.',
          },
          {
            title: 'User-centric design',
            fa_icon: 'fa-user-friends',
            subtitle:
              'Our solutions are designed with the user at the center, ensuring high usability and user satisfaction.',
          },
          {
            title: 'Cloud solutions',
            fa_icon: 'fa-cloud-upload-alt',
            subtitle:
              'Leverage the power of cloud technologies for scalable, high-performance citizen engagement solutions.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We offer a comprehensive suite of digital solutions designed to boost citizen engagement and transform public sector institutions.',
      },
      summary: {
        title: 'Empowering public sector enterprises through technology.',
        items: [
          {
            title:
              'In an increasingly digital world, fostering meaningful connections with citizens is a paramount task for public sector institutions. We equip your institution with cutting-edge digital solutions to enhance interactions and foster better relationships with your citizens.',
          },
          {
            title:
              'We focus on creating accessible, intuitive, and secure digital platforms that empower citizens and make interactions with public sector institutions seamless.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Citizen Engagement Tools',
      description:
        'Delivering strategic solutions to enhance engagement between public sector institutions and citizens.',
    },
    subtitle:
      'Delivering strategic solutions to enhance engagement between public sector institutions and citizens.',
  },
  {
    title: 'Automated Reporting',
    slug: 'automated-reporting',
    category_id: 1,
    hero_alt: 'Guy looking at graphs',
    // Hero
    hero_src: '/unsplash/nApaSgkzaxg.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is automated reporting important for my business?',
            content:
              'Automated reporting reduces the time and effort spent on manual data collection and report generation. It provides real-time insights, enables quick decision making, reduces the risk of errors, and ensures the right people get the right information at the right time.',
          },
          {
            id: 'faqs-2',
            title: 'What types of reports can be automated?',
            content:
              'Almost any type of report can be automated, including sales reports, financial reports, operational reports, and marketing analytics reports. The automation can be customized based on your specific needs and preferences.',
          },
          {
            id: 'faqs-3',
            title: 'How secure is your Automated Reporting service?',
            content:
              'We prioritize data security. We use secure data transmission methods, encryption, and comply with all relevant privacy regulations. We also conduct regular security audits to ensure your data remains safe.',
          },
        ],
        subtitle:
          'Learn more about our Automated Reporting service and how it can revolutionize your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data Aggregation',
            fa_icon: 'fa-database',
            subtitle:
              'We extract and compile data from various sources to provide comprehensive reports.',
          },
          {
            title: 'Real-Time Reporting',
            fa_icon: 'fa-clock',
            subtitle:
              'Get immediate insights with real-time reporting and make quick, informed decisions.',
          },
          {
            title: 'Data Visualization',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We provide visually appealing and easy-to-understand charts, graphs, and dashboards.',
          },
          {
            title: 'Custom Report Generation',
            fa_icon: 'fa-code',
            subtitle:
              'Our system generates customized reports based on your specific needs and preferences.',
          },
          {
            title: 'Automated Distribution',
            fa_icon: 'fa-envelope',
            subtitle:
              'We automate report distribution, ensuring key personnel receive timely information.',
          },
          {
            title: 'Schedule Reports',
            fa_icon: 'fa-sync',
            subtitle:
              'Set up scheduled reports for regular intervals, ensuring consistent data flow.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our Automated Reporting service streamlines your reporting process, enabling efficient data analysis and decision making.',
      },
      summary: {
        title: 'Revolutionizing reporting through automation.',
        items: [
          {
            title:
              'In the fast-paced world of business, having quick access to accurate, up-to-date information is crucial. We specialize in developing automated reporting systems that facilitate prompt, data-driven decisions. Our team works with you to understand your specific reporting needs.',
          },
          {
            title:
              'We then employ cutting-edge technology to design and implement an automated reporting system that delivers the right data to the right people at the right time.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Automated Reporting',
      description:
        'Harness our expertise to streamline your reporting process, enabling quick, data-driven decision making.',
    },
    subtitle:
      'Harness our expertise to streamline your reporting process, enabling quick, data-driven decision making.',
  },
  {
    title: 'Intelligent Document Search',
    slug: 'intelligent-document-search',
    category_id: 2,
    hero_alt: 'Sorted files',
    // Hero
    hero_src: '/unsplash/8EzNkvLQosk.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is an Intelligent Document Search system important for my business?',
            content:
              'An Intelligent Document Search system significantly reduces the time and effort required to find specific information in large document repositories. It ensures swift and accurate data retrieval, thereby enhancing productivity and informed decision-making.',
          },
          {
            id: 'faqs-2',
            title: 'What types of documents can your system search?',
            content:
              'Our system is capable of searching a wide range of document types including PDFs, Word documents, Excel files, and more. We can customize the search capabilities based on your specific needs.',
          },
          {
            id: 'faqs-3',
            title: 'How secure is your Intelligent Document Search service?',
            content:
              'Data security is our top priority. We ensure that only authorized personnel can access your documents. Our system also includes secure data transmission methods, encryption, and compliance with relevant privacy regulations.',
          },
        ],
        subtitle:
          'Learn more about our Intelligent Document Search service and how it can enhance your business efficiency.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Advanced Search Algorithms',
            fa_icon: 'fa-search-plus',
            subtitle:
              'We utilize cutting-edge algorithms to ensure rapid and precise document search.',
          },
          {
            title: 'Document Indexing',
            fa_icon: 'fa-folder-open',
            subtitle:
              'Our system indexes your documents, making data retrieval swift and efficient.',
          },
          {
            title: 'Custom Search Parameters',
            fa_icon: 'fa-cogs',
            subtitle:
              'We offer customized search parameters to cater to your specific data needs.',
          },
          {
            title: 'Cloud-Based System',
            fa_icon: 'fa-cloud-upload-alt',
            subtitle:
              'Our cloud-based search system ensures data accessibility from anywhere, anytime.',
          },
          {
            title: 'Secure Access',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize data security, ensuring that your documents are accessed by authorized personnel only.',
          },
          {
            title: 'Real-Time Updates',
            fa_icon: 'fa-sync-alt',
            subtitle:
              'Our system provides real-time updates, ensuring that your search results are always current.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our Intelligent Document Search service ensures efficient and accurate data retrieval, fueling your business insights.',
      },
      summary: {
        title: 'Empowering your business with smart document search.',
        items: [
          {
            title:
              'In the digital era, finding specific information in vast document repositories can be a challenge. We assist businesses through utilizing advanced algorithms to ensure quick and accurate retrieval of data.',
          },
          {
            title:
              'We work closely with you to understand your unique data requirements and create a tailored search system. This significantly enhances your productivity, decision-making, and overall business efficiency.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Intelligent Document Search',
      description:
        'Create advanced document search systems, ensuring efficient retrieval of relevant information.',
    },
    subtitle:
      'Create advanced document search systems, ensuring efficient retrieval of relevant information.',
  },
  {
    title: 'Virtual Assistant Development',
    slug: 'virtual-assistant-development',
    category_id: 2,
    hero_alt: 'Digital humans',
    // Hero
    hero_src: '/unsplash/A9TTeuTGrug.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is a virtual assistant important for my business?',
            content:
              'A virtual assistant can automate various tasks, free up resources, improve customer interaction, and provide 24/7 service. This leads to enhanced productivity, efficiency, and customer satisfaction.',
          },
          {
            id: 'faqs-2',
            title:
              'What capabilities can I expect from the virtual assistant you develop?',
            content:
              'Our virtual assistants leverage AI and machine learning to understand and respond to user queries in real-time. They continually learn from interactions to improve their responses. We can also customize their capabilities based on your specific needs.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure data privacy with your virtual assistants?',
            content:
              'We prioritize data privacy and security in our virtual assistant development. We follow best practices and comply with relevant regulations to ensure that your user data is always protected.',
          },
        ],
        subtitle:
          'Learn more about our Virtual Assistant Development service and how it can enhance your business efficiency.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'AI-Driven Assistants',
            fa_icon: 'fa-robot',
            subtitle:
              'We leverage advanced AI technology to create virtual assistants that understand and respond to user interactions.',
          },
          {
            title: 'Machine Learning',
            fa_icon: 'fa-brain',
            subtitle:
              'Our virtual assistants learn from interactions, continually improving their responses and effectiveness.',
          },
          {
            title: 'Natural Language Processing',
            fa_icon: 'fa-comments',
            subtitle:
              'Our solutions understand and respond to user inputs in a natural, human-like manner.',
          },
          {
            title: 'Real-Time Interactions',
            fa_icon: 'fa-sync',
            subtitle:
              'Our virtual assistants provide real-time responses to user queries, enhancing customer satisfaction.',
          },
          {
            title: 'Customization',
            fa_icon: 'fa-cogs',
            subtitle:
              'We customize our solutions based on your business needs, ensuring maximum relevance and efficiency.',
          },
          {
            title: 'Data Privacy',
            fa_icon: 'fa-lock',
            subtitle:
              'We prioritize data privacy and security, ensuring your user data is always protected.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We create intelligent virtual assistants tailored to your business needs.',
      },
      summary: {
        title: 'Boosting efficiency with AI-powered virtual assistants.',
        items: [
          {
            title:
              'As the digital landscape evolves, businesses need efficient tools to stay competitive. We offer AI-driven solutions that automate tasks, streamline processes, and enhance customer interaction.',
          },
          {
            title:
              'Our team designs virtual assistants that understand, learn, and respond in a human-like manner, significantly improving your service efficiency and customer satisfaction.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Virtual Assistant Development',
      description:
        'Empower your digital landscape with our advanced, AI-driven virtual assistant development services.',
    },
    subtitle:
      'Empower your digital landscape with our advanced, AI-driven virtual assistant development services.',
  },
  {
    title: 'AI-Driven Policy Analysis',
    slug: 'ai-driven-policy-analysis',
    category_id: 2,
    hero_alt: 'Computer chip in shape of human head',
    // Hero
    hero_src: '/unsplash/gakXaqzGad0.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'How can AI-driven policy analysis enhance our policymaking process?',
            content:
              'AI-driven policy analysis can offer insights and predictions that human analysis may miss. By leveraging data in a systematic way, AI can identify trends, predict outcomes, and provide actionable guidance for policymakers.',
          },
          {
            id: 'faqs-2',
            title: 'What kind of data does your AI use for analysis?',
            content:
              'Our AI solutions can handle a wide variety of data, including demographic data, economic indicators, social metrics, and more. We tailor our data sources to the specific policy domain and decision-making context.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the security of our data?',
            content:
              'We take data security seriously. Our systems adhere to industry-standard security practices, including encryption at rest and in transit. We also comply with all relevant data protection regulations.',
          },
        ],
        subtitle:
          'Learn more about our AI-Driven Policy Analysis service and how it can help guide policymaking.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data Analysis',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We leverage AI to analyse a broad spectrum of data, identifying trends and patterns crucial for effective policymaking.',
          },
          {
            title: 'Predictive Modeling',
            fa_icon: 'fa-brain',
            subtitle:
              'Our AI models predict potential policy outcomes, supporting informed decision-making.',
          },
          {
            title: 'Policy Guidance',
            fa_icon: 'fa-compass',
            subtitle:
              'We provide clear, actionable guidance based on our AI-driven policy analysis.',
          },
          {
            title: 'Data Management',
            fa_icon: 'fa-database',
            subtitle:
              'Our solutions ensure efficient and secure data management, crucial for any AI-driven service.',
          },
          {
            title: 'Custom Solutions',
            fa_icon: 'fa-cogs',
            subtitle:
              'We offer custom solutions tailored to specific policy domains and decision-making contexts.',
          },
          {
            title: 'Secure and Compliant',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize data security and regulatory compliance in all our services.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our suite of AI-driven tools and services is designed to support robust policy analysis.',
      },
      summary: {
        title: 'Leveraging AI for effective policy analysis.',
        items: [
          {
            title:
              'In the complex landscape of public policy, data-driven decision making is crucial. We leverage cutting-edge AI technologies to deliver insightful analysis and recommendations.',
          },
          {
            title:
              'With a focus on accuracy and usability, our AI-driven analysis tools help policymakers cut through the noise, understanding the potential impacts of their decisions in clear, actionable terms.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'AI-Driven Policy Analysis',
      description:
        'Utilize advanced AI to guide and enhance your policymaking process.',
    },
    subtitle:
      'Utilize advanced AI to guide and enhance your policymaking process.',
  },
  {
    title: 'Public Sector Predictive Analytics',
    slug: 'public-sector-predictive-analytics',
    category_id: 3,
    hero_alt: 'Data analytics charts',
    // Hero
    hero_src: '/unsplash/-WXQm_NTK0U.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'How can predictive analytics enhance our decision-making process?',
            content:
              'Predictive analytics leverages historical and current data to forecast future events, trends, and behaviours. This allows you to make proactive, data-driven decisions. For example, it can help you identify potential risks, opportunities, and areas of improvement, guiding your strategic planning and resource allocation.',
          },
          {
            id: 'faqs-2',
            title:
              'What kind of data do your predictive analytics solutions use?',
            content:
              'Our predictive analytics solutions can analyse a wide range of data, depending on your specific needs and objectives. This could include demographic data, economic indicators, operational data, and more. We work with you to identify the most relevant data sources for your strategic goals.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the security of our data?',
            content:
              'We take data security seriously. Our systems adhere to industry-standard security practices, including encryption at rest and in transit. We also comply with all relevant data protection regulations.',
          },
        ],
        subtitle:
          'Learn more about our Public Sector Predictive Analytics service and how it can inform your decision-making process.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Advanced Predictive Models',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We develop advanced predictive models to forecast future events and trends.',
          },
          {
            title: 'Data Management',
            fa_icon: 'fa-database',
            subtitle: 'We ensure efficient and secure management of your data.',
          },
          {
            title: 'Strategic Insights',
            fa_icon: 'fa-brain',
            subtitle:
              'We turn data into actionable insights to inform strategic decision-making.',
          },
          {
            title: 'Custom Solutions',
            fa_icon: 'fa-cogs',
            subtitle:
              'We provide solutions tailored to the unique needs of public sector organisations.',
          },
          {
            title: 'Security and Compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize data security and regulatory compliance in all our solutions.',
          },
          {
            title: 'Collaborative Approach',
            fa_icon: 'fa-handshake',
            subtitle:
              'We work closely with your team to align our analytics solutions with your strategic objectives.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Leveraging data to forecast trends and inform strategic decision-making in the public sector.',
      },
      summary: {
        title: 'Driving public sector decisions with predictive analytics.',
        items: [
          {
            title:
              'In the public sector, predictive analytics can turn data into actionable insights, informing decisions and policies. Our predictive analytics services empower you to leverage data-driven insights in your decision-making process.',
          },
          {
            title:
              'Using advanced predictive models, we help you forecast future events and trends, allowing you to make strategic, forward-thinking decisions.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Public Sector Predictive Analytics',
      description:
        'Leverage predictive analytics to make data-driven decisions in the public sector.',
    },
    subtitle:
      'Leverage predictive analytics to make data-driven decisions in the public sector.',
  },
  {
    title: 'AI-Powered Compliance Monitoring',
    slug: 'ai-powered-compliance-monitoring',
    category_id: 3,
    hero_alt: 'Lady justice',
    // Hero
    hero_src: '/unsplash/yCdPU73kGSc.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'How can AI enhance compliance monitoring?',
            content:
              'AI can streamline compliance monitoring by automating manual tasks, improving accuracy, and providing real-time insights. This not only reduces the resources needed for compliance management but also enables the early detection of potential compliance issues, allowing for timely remediation.',
          },
          {
            id: 'faqs-2',
            title:
              'What makes your AI-Powered Compliance Monitoring service unique?',
            content:
              'Our AI-Powered Compliance Monitoring service is tailored to the unique compliance requirements of your organisation. We leverage advanced AI algorithms to provide real-time monitoring, proactive alerts, and comprehensive reporting, thereby improving the efficiency and effectiveness of your compliance management process.',
          },
          {
            id: 'faqs-3',
            title: 'What type of compliance can your service monitor?',
            content:
              'Our AI-Powered Compliance Monitoring service can be customized to monitor various types of compliance, including regulatory compliance, internal policy compliance, and industry-specific compliance. We work closely with your team to understand your compliance landscape and tailor our solution accordingly.',
          },
        ],
        subtitle:
          'Find out more about our AI-Powered Compliance Monitoring service and how it can benefit your organisation.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Intelligent Monitoring',
            fa_icon: 'fa-brain',
            subtitle:
              'Our AI algorithms monitor compliance in real-time, detecting anomalies and potential issues.',
          },
          {
            title: 'Proactive Alerts',
            fa_icon: 'fa-bell',
            subtitle:
              'Get proactive alerts on potential compliance issues, allowing for timely remediation.',
          },
          {
            title: 'Comprehensive Reporting',
            fa_icon: 'fa-chart-pie',
            subtitle:
              'Generate comprehensive compliance reports with in-depth insights at a click.',
          },
          {
            title: 'Custom Solutions',
            fa_icon: 'fa-cogs',
            subtitle:
              'We provide AI-powered compliance solutions tailored to your organisation’s needs.',
          },
          {
            title: 'Regulatory Updates',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Stay updated with regulatory changes with our AI-powered monitoring system.',
          },
          {
            title: 'Collaborative Approach',
            fa_icon: 'fa-handshake',
            subtitle:
              'We work closely with your team to understand your compliance landscape and needs.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Innovating compliance management in the public sector with artificial intelligence.',
      },
      summary: {
        title: 'Enhancing compliance monitoring with Artificial Intelligence.',
        items: [
          {
            title:
              'Regulatory compliance is a key challenge for the public sector. With our services, we streamline the process, helping you detect and manage compliance issues proactively. Our AI-powered solutions enhance accuracy, reduce manual efforts, and provide real-time insights, allowing you to focus on strategic tasks.',
          },
          {
            title:
              'We tailor our solutions to the unique regulatory landscape and compliance requirements of your organisation.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'AI-Powered Compliance Monitoring',
      description:
        'Efficiently monitor and ensure compliance in the public sector through utilizing AI technologies.',
    },
    subtitle:
      'Efficiently monitor and ensure compliance in the public sector through utilizing AI technologies.',
  },
  {
    title: 'Public Sentiment Analysis',
    slug: 'public-sentiment-analysis',
    category_id: 3,
    hero_alt: 'Empty meeting seats',
    // Hero
    hero_src: '/unsplash/7OxV_qDiGRI.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is public sentiment analysis important for government agencies?',
            content:
              'Public sentiment analysis provides government agencies with valuable insights into public perception, attitudes, and concerns. By understanding public sentiment, agencies can make informed decisions, improve communication strategies, and address public concerns effectively.',
          },
          {
            id: 'faqs-2',
            title: 'How do you collect and analyse public sentiment data?',
            content:
              'We collect public sentiment data from various sources, including social media platforms, news articles, and online forums. Advanced analytics techniques, such as natural language processing and machine learning, are applied to analyse the data and extract valuable insights. We employ sentiment analysis algorithms, opinion mining techniques, and text analytics to uncover patterns, sentiments, and key themes.',
          },
          {
            id: 'faqs-3',
            title: 'Can public sentiment analysis help in crisis management?',
            content:
              'Yes, public sentiment analysis is instrumental in crisis management. By monitoring public sentiment during a crisis, government agencies can assess the impact of the crisis on public perception, identify misinformation or rumours, and develop effective communication strategies to address concerns and restore public trust.',
          },
        ],
        subtitle:
          'Find answers to commonly asked questions about our Public Sentiment Analysis service.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Sentiment Analysis',
            fa_icon: 'fa-chart-line',
            subtitle:
              'Analyse public sentiment and opinion to understand public perception and attitudes.',
          },
          {
            title: 'Social Media Monitoring',
            fa_icon: 'fa-globe',
            subtitle:
              'Track and analyse social media data to uncover insights and trends.',
          },
          {
            title: 'Opinion Mining',
            fa_icon: 'fa-comments',
            subtitle:
              'Extract opinions, emotions, and key themes from text data to identify patterns and sentiments.',
          },
          {
            title: 'Reputation Management',
            fa_icon: 'fa-bullhorn',
            subtitle:
              'Monitor and manage your organisation’s online reputation based on public sentiment.',
          },
          {
            title: 'Insightful Reporting',
            fa_icon: 'fa-lightbulb',
            subtitle:
              'Generate comprehensive reports and visualizations to communicate key findings.',
          },
          {
            title: 'Audience Segmentation',
            fa_icon: 'fa-users',
            subtitle:
              'Segment the public audience based on sentiment, demographics, and behaviour.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Harness the power of advanced analytics to analyse public sentiment and opinion.',
      },
      summary: {
        title: 'Uncover actionable insights from public sentiment.',
        items: [
          {
            title:
              'Understanding public sentiment and opinion is crucial for government agencies and organisations in the public sector. We leverage advanced analytics and natural language processing to analyse social media data and other sources, helping you gain valuable insights to inform decision-making.',
          },
          {
            title:
              'Our team of experts applies state-of-the-art techniques to track and analyse public sentiment, allowing you to monitor trends, identify emerging issues, and measure public response to policies and initiatives.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Public Sentiment Analysis',
      description:
        'Leverage advanced analytics to gain insights into public sentiment and opinion.',
    },
    subtitle:
      'Leverage advanced analytics to gain insights into public sentiment and opinion.',
  },
].map((item, i) => {
  return merge({}, MOCK_SERVICE_PAGE, {
    id: i + 1,
    // Category
    category: getCategoryFromCrudItem(item, MOCK_GOVX_SERVICE_CATEGORYS),
    overline: 'Service',
    ...item,
    sections: {
      ...item.sections,
      checklist: {
        ...MOCK_SERVICE_PAGE.sections.checklist,
        subtitle:
          'To deliver governmental solutions of the highest quality, we follow the best practices that include comprehensive policy analysis, legal compliance, data privacy, and continuous innovation.',
      },
    },
  })
})

export const MOCK_AEL_SERVICES = [
  {
    title: 'E-Government Platform Development',
    slug: 'egovernment-platform-development',
    category_id: 1,
    hero_alt: 'Lincoln memorial',
    // Hero
    hero_src: '/unsplash/K_GxWa69dMw.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'What is the importance of e-government platforms?',
            content:
              "E-Government platforms are integral to modernizing public sector services, improving accessibility, streamlining operations, and enhancing transparency and accountability. These platforms also play a vital role in meeting citizens' evolving digital expectations.",
          },
          {
            id: 'faqs-2',
            title:
              'What sets your E-Government Platform Development services apart?',
            content:
              'Our E-Government Platform Development services are unique due to our comprehensive approach, which incorporates user-centric design, cutting-edge technology, stringent security measures, and a deep understanding of public sector requirements.',
          },
          {
            id: 'faqs-3',
            title:
              'How does your team ensure the security and privacy of the platform?',
            content:
              'We prioritize security and privacy in our platform development process. We adhere to all the best practices and regulations, including data encryption, secure coding practices, and routine security testing, to ensure the highest level of security and data privacy.',
          },
        ],
        subtitle:
          'Learn more about our E-Government Platform Development Service and how we can help transform your public sector enterprise.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Custom platform development',
            fa_icon: 'fa-laptop-code',
            subtitle:
              'We develop custom digital platforms tailored to meet the unique needs of public sector enterprises.',
          },
          {
            title: 'Data privacy and security',
            fa_icon: 'fa-user-shield',
            subtitle:
              'We ensure the highest level of data privacy and security, adhering to all the regulations and best practices.',
          },
          {
            title: 'Cloud-based solutions',
            fa_icon: 'fa-cloud-upload-alt',
            subtitle:
              'We create flexible and scalable cloud-based solutions, enabling seamless service delivery across all devices.',
          },
          {
            title: 'Mobile-first approach',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'We prioritize a mobile-first approach, ensuring your platform is easily accessible to all users, regardless of their device.',
          },
          {
            title: 'AI and automation',
            fa_icon: 'fa-robot',
            subtitle:
              'We incorporate AI and automation into our platforms to improve service delivery and streamline operations.',
          },
          {
            title: 'User-centric design',
            fa_icon: 'fa-users-cog',
            subtitle:
              'We place users at the heart of our design process, creating platforms that are intuitive, accessible, and user-friendly.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our approach to e-government platform development is comprehensive, focusing on efficiency, security, and most importantly, user engagement.',
      },
      summary: {
        title:
          'Empowering the public sector with innovative digital solutions.',
        items: [
          {
            title:
              'The public sector is evolving, and so are the digital needs of citizens. We specialize in creating robust, reliable, and user-friendly platforms that cater to the diverse needs of the public sector.',
          },
          {
            title:
              'Our team of experts understand the unique challenges faced by the public sector and develop tailored solutions that are not only technologically advanced but also focused on enhancing user experience and accessibility.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'E-Government Platform Development',
      description:
        'Building digital platforms that streamline government operations and improve public service delivery.',
    },
    subtitle:
      'Building digital platforms that streamline government operations and improve public service delivery.',
  },
  {
    title: 'Citizen Engagement Tools',
    slug: 'citizen-engagement-tools',
    category_id: 1,
    hero_alt: 'Town hall meeting',
    // Hero
    hero_src: '/unsplash/cw-cj_nFa14.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is citizen engagement important in the public sector?',
            content:
              'Active citizen engagement is key to effective governance. It allows public sector institutions to understand citizen needs better, gain valuable feedback, and make informed decisions. Moreover, engaged citizens are more likely to contribute positively to community activities, policymaking, and public affairs.',
          },
          {
            id: 'faqs-2',
            title:
              'How can our public sector institution benefit from your Citizen Engagement Tools service?',
            content:
              'Our Citizen Engagement Tools service can help your institution foster meaningful relationships with citizens. By using our tools, you can facilitate interactive communication, gain valuable insights, make data-driven decisions, and enhance your services. Moreover, our emphasis on security and accessibility ensures that your digital platforms are trusted and accessible to all.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure the security and accessibility of your tools?',
            content:
              'We adhere to industry best practices for data security and privacy. All our tools are designed with robust security measures to protect sensitive information. Furthermore, we focus on making our solutions accessible to all citizens, ensuring inclusivity in the digital transformation journey.',
          },
        ],
        subtitle:
          'Learn more about our Citizen Engagement Tools service and how it can benefit your institution.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Interactive communication platforms',
            fa_icon: 'fa-comments',
            subtitle:
              'Our solutions foster active dialogue between citizens and institutions, enabling real-time feedback and discussions.',
          },
          {
            title: 'Mobile-first approach',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'We design our solutions with a mobile-first approach, ensuring seamless experiences across all devices.',
          },
          {
            title: 'Data-driven insights',
            fa_icon: 'fa-database',
            subtitle:
              'Leverage actionable insights from citizens to make data-driven decisions that enhance your services.',
          },
          {
            title: 'Robust security',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize security to protect sensitive citizen data and build trust in your digital platforms.',
          },
          {
            title: 'User-centric design',
            fa_icon: 'fa-user-friends',
            subtitle:
              'Our solutions are designed with the user at the center, ensuring high usability and user satisfaction.',
          },
          {
            title: 'Cloud solutions',
            fa_icon: 'fa-cloud-upload-alt',
            subtitle:
              'Leverage the power of cloud technologies for scalable, high-performance citizen engagement solutions.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We offer a comprehensive suite of digital solutions designed to boost citizen engagement and transform public sector institutions.',
      },
      summary: {
        title: 'Empowering public sector enterprises through technology.',
        items: [
          {
            title:
              'In an increasingly digital world, fostering meaningful connections with citizens is a paramount task for public sector institutions. We equip your institution with cutting-edge digital solutions to enhance interactions and foster better relationships with your citizens.',
          },
          {
            title:
              'We focus on creating accessible, intuitive, and secure digital platforms that empower citizens and make interactions with public sector institutions seamless.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Citizen Engagement Tools',
      description:
        'Delivering strategic solutions to enhance engagement between public sector institutions and citizens.',
    },
    subtitle:
      'Delivering strategic solutions to enhance engagement between public sector institutions and citizens.',
  },
  {
    title: 'Automated Reporting',
    slug: 'automated-reporting',
    category_id: 1,
    hero_alt: 'Guy looking at graphs',
    // Hero
    hero_src: '/unsplash/nApaSgkzaxg.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is automated reporting important for my business?',
            content:
              'Automated reporting reduces the time and effort spent on manual data collection and report generation. It provides real-time insights, enables quick decision making, reduces the risk of errors, and ensures the right people get the right information at the right time.',
          },
          {
            id: 'faqs-2',
            title: 'What types of reports can be automated?',
            content:
              'Almost any type of report can be automated, including sales reports, financial reports, operational reports, and marketing analytics reports. The automation can be customized based on your specific needs and preferences.',
          },
          {
            id: 'faqs-3',
            title: 'How secure is your Automated Reporting service?',
            content:
              'We prioritize data security. We use secure data transmission methods, encryption, and comply with all relevant privacy regulations. We also conduct regular security audits to ensure your data remains safe.',
          },
        ],
        subtitle:
          'Learn more about our Automated Reporting service and how it can revolutionize your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data Aggregation',
            fa_icon: 'fa-database',
            subtitle:
              'We extract and compile data from various sources to provide comprehensive reports.',
          },
          {
            title: 'Real-Time Reporting',
            fa_icon: 'fa-clock',
            subtitle:
              'Get immediate insights with real-time reporting and make quick, informed decisions.',
          },
          {
            title: 'Data Visualization',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We provide visually appealing and easy-to-understand charts, graphs, and dashboards.',
          },
          {
            title: 'Custom Report Generation',
            fa_icon: 'fa-code',
            subtitle:
              'Our system generates customized reports based on your specific needs and preferences.',
          },
          {
            title: 'Automated Distribution',
            fa_icon: 'fa-envelope',
            subtitle:
              'We automate report distribution, ensuring key personnel receive timely information.',
          },
          {
            title: 'Schedule Reports',
            fa_icon: 'fa-sync',
            subtitle:
              'Set up scheduled reports for regular intervals, ensuring consistent data flow.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our Automated Reporting service streamlines your reporting process, enabling efficient data analysis and decision making.',
      },
      summary: {
        title: 'Revolutionizing reporting through automation.',
        items: [
          {
            title:
              'In the fast-paced world of business, having quick access to accurate, up-to-date information is crucial. We specialize in developing automated reporting systems that facilitate prompt, data-driven decisions. Our team works with you to understand your specific reporting needs.',
          },
          {
            title:
              'We then employ cutting-edge technology to design and implement an automated reporting system that delivers the right data to the right people at the right time.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Automated Reporting',
      description:
        'Harness our expertise to streamline your reporting process, enabling quick, data-driven decision making.',
    },
    subtitle:
      'Harness our expertise to streamline your reporting process, enabling quick, data-driven decision making.',
  },
  {
    title: 'Intelligent Document Search',
    slug: 'intelligent-document-search',
    category_id: 2,
    hero_alt: 'Sorted files',
    // Hero
    hero_src: '/unsplash/8EzNkvLQosk.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is an Intelligent Document Search system important for my business?',
            content:
              'An Intelligent Document Search system significantly reduces the time and effort required to find specific information in large document repositories. It ensures swift and accurate data retrieval, thereby enhancing productivity and informed decision-making.',
          },
          {
            id: 'faqs-2',
            title: 'What types of documents can your system search?',
            content:
              'Our system is capable of searching a wide range of document types including PDFs, Word documents, Excel files, and more. We can customize the search capabilities based on your specific needs.',
          },
          {
            id: 'faqs-3',
            title: 'How secure is your Intelligent Document Search service?',
            content:
              'Data security is our top priority. We ensure that only authorized personnel can access your documents. Our system also includes secure data transmission methods, encryption, and compliance with relevant privacy regulations.',
          },
        ],
        subtitle:
          'Learn more about our Intelligent Document Search service and how it can enhance your business efficiency.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Advanced Search Algorithms',
            fa_icon: 'fa-search-plus',
            subtitle:
              'We utilize cutting-edge algorithms to ensure rapid and precise document search.',
          },
          {
            title: 'Document Indexing',
            fa_icon: 'fa-folder-open',
            subtitle:
              'Our system indexes your documents, making data retrieval swift and efficient.',
          },
          {
            title: 'Custom Search Parameters',
            fa_icon: 'fa-cogs',
            subtitle:
              'We offer customized search parameters to cater to your specific data needs.',
          },
          {
            title: 'Cloud-Based System',
            fa_icon: 'fa-cloud-upload-alt',
            subtitle:
              'Our cloud-based search system ensures data accessibility from anywhere, anytime.',
          },
          {
            title: 'Secure Access',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize data security, ensuring that your documents are accessed by authorized personnel only.',
          },
          {
            title: 'Real-Time Updates',
            fa_icon: 'fa-sync-alt',
            subtitle:
              'Our system provides real-time updates, ensuring that your search results are always current.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our Intelligent Document Search service ensures efficient and accurate data retrieval, fueling your business insights.',
      },
      summary: {
        title: 'Empowering your business with smart document search.',
        items: [
          {
            title:
              'In the digital era, finding specific information in vast document repositories can be a challenge. We assist businesses through utilizing advanced algorithms to ensure quick and accurate retrieval of data.',
          },
          {
            title:
              'We work closely with you to understand your unique data requirements and create a tailored search system. This significantly enhances your productivity, decision-making, and overall business efficiency.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Intelligent Document Search',
      description:
        'Create advanced document search systems, ensuring efficient retrieval of relevant information.',
    },
    subtitle:
      'Create advanced document search systems, ensuring efficient retrieval of relevant information.',
  },
  {
    title: 'Virtual Assistant Development',
    slug: 'virtual-assistant-development',
    category_id: 2,
    hero_alt: 'Digital humans',
    // Hero
    hero_src: '/unsplash/A9TTeuTGrug.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is a virtual assistant important for my business?',
            content:
              'A virtual assistant can automate various tasks, free up resources, improve customer interaction, and provide 24/7 service. This leads to enhanced productivity, efficiency, and customer satisfaction.',
          },
          {
            id: 'faqs-2',
            title:
              'What capabilities can I expect from the virtual assistant you develop?',
            content:
              'Our virtual assistants leverage AI and machine learning to understand and respond to user queries in real-time. They continually learn from interactions to improve their responses. We can also customize their capabilities based on your specific needs.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure data privacy with your virtual assistants?',
            content:
              'We prioritize data privacy and security in our virtual assistant development. We follow best practices and comply with relevant regulations to ensure that your user data is always protected.',
          },
        ],
        subtitle:
          'Learn more about our Virtual Assistant Development service and how it can enhance your business efficiency.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'AI-Driven Assistants',
            fa_icon: 'fa-robot',
            subtitle:
              'We leverage advanced AI technology to create virtual assistants that understand and respond to user interactions.',
          },
          {
            title: 'Machine Learning',
            fa_icon: 'fa-brain',
            subtitle:
              'Our virtual assistants learn from interactions, continually improving their responses and effectiveness.',
          },
          {
            title: 'Natural Language Processing',
            fa_icon: 'fa-comments',
            subtitle:
              'Our solutions understand and respond to user inputs in a natural, human-like manner.',
          },
          {
            title: 'Real-Time Interactions',
            fa_icon: 'fa-sync',
            subtitle:
              'Our virtual assistants provide real-time responses to user queries, enhancing customer satisfaction.',
          },
          {
            title: 'Customization',
            fa_icon: 'fa-cogs',
            subtitle:
              'We customize our solutions based on your business needs, ensuring maximum relevance and efficiency.',
          },
          {
            title: 'Data Privacy',
            fa_icon: 'fa-lock',
            subtitle:
              'We prioritize data privacy and security, ensuring your user data is always protected.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We create intelligent virtual assistants tailored to your business needs.',
      },
      summary: {
        title: 'Boosting efficiency with AI-powered virtual assistants.',
        items: [
          {
            title:
              'As the digital landscape evolves, businesses need efficient tools to stay competitive. We offer AI-driven solutions that automate tasks, streamline processes, and enhance customer interaction.',
          },
          {
            title:
              'Our team designs virtual assistants that understand, learn, and respond in a human-like manner, significantly improving your service efficiency and customer satisfaction.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Virtual Assistant Development',
      description:
        'Empower your digital landscape with our advanced, AI-driven virtual assistant development services.',
    },
    subtitle:
      'Empower your digital landscape with our advanced, AI-driven virtual assistant development services.',
  },
  {
    title: 'AI-Driven Policy Analysis',
    slug: 'ai-driven-policy-analysis',
    category_id: 2,
    hero_alt: 'Computer chip in shape of human head',
    // Hero
    hero_src: '/unsplash/gakXaqzGad0.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'How can AI-driven policy analysis enhance our policymaking process?',
            content:
              'AI-driven policy analysis can offer insights and predictions that human analysis may miss. By leveraging data in a systematic way, AI can identify trends, predict outcomes, and provide actionable guidance for policymakers.',
          },
          {
            id: 'faqs-2',
            title: 'What kind of data does your AI use for analysis?',
            content:
              'Our AI solutions can handle a wide variety of data, including demographic data, economic indicators, social metrics, and more. We tailor our data sources to the specific policy domain and decision-making context.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the security of our data?',
            content:
              'We take data security seriously. Our systems adhere to industry-standard security practices, including encryption at rest and in transit. We also comply with all relevant data protection regulations.',
          },
        ],
        subtitle:
          'Learn more about our AI-Driven Policy Analysis service and how it can help guide policymaking.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data Analysis',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We leverage AI to analyse a broad spectrum of data, identifying trends and patterns crucial for effective policymaking.',
          },
          {
            title: 'Predictive Modeling',
            fa_icon: 'fa-brain',
            subtitle:
              'Our AI models predict potential policy outcomes, supporting informed decision-making.',
          },
          {
            title: 'Policy Guidance',
            fa_icon: 'fa-compass',
            subtitle:
              'We provide clear, actionable guidance based on our AI-driven policy analysis.',
          },
          {
            title: 'Data Management',
            fa_icon: 'fa-database',
            subtitle:
              'Our solutions ensure efficient and secure data management, crucial for any AI-driven service.',
          },
          {
            title: 'Custom Solutions',
            fa_icon: 'fa-cogs',
            subtitle:
              'We offer custom solutions tailored to specific policy domains and decision-making contexts.',
          },
          {
            title: 'Secure and Compliant',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize data security and regulatory compliance in all our services.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our suite of AI-driven tools and services is designed to support robust policy analysis.',
      },
      summary: {
        title: 'Leveraging AI for effective policy analysis.',
        items: [
          {
            title:
              'In the complex landscape of public policy, data-driven decision making is crucial. We leverage cutting-edge AI technologies to deliver insightful analysis and recommendations.',
          },
          {
            title:
              'With a focus on accuracy and usability, our AI-driven analysis tools help policymakers cut through the noise, understanding the potential impacts of their decisions in clear, actionable terms.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'AI-Driven Policy Analysis',
      description:
        'Utilize advanced AI to guide and enhance your policymaking process.',
    },
    subtitle:
      'Utilize advanced AI to guide and enhance your policymaking process.',
  },
  {
    title: 'Public Sector Predictive Analytics',
    slug: 'public-sector-predictive-analytics',
    category_id: 3,
    hero_alt: 'Data analytics charts',
    // Hero
    hero_src: '/unsplash/-WXQm_NTK0U.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'How can predictive analytics enhance our decision-making process?',
            content:
              'Predictive analytics leverages historical and current data to forecast future events, trends, and behaviours. This allows you to make proactive, data-driven decisions. For example, it can help you identify potential risks, opportunities, and areas of improvement, guiding your strategic planning and resource allocation.',
          },
          {
            id: 'faqs-2',
            title:
              'What kind of data do your predictive analytics solutions use?',
            content:
              'Our predictive analytics solutions can analyse a wide range of data, depending on your specific needs and objectives. This could include demographic data, economic indicators, operational data, and more. We work with you to identify the most relevant data sources for your strategic goals.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the security of our data?',
            content:
              'We take data security seriously. Our systems adhere to industry-standard security practices, including encryption at rest and in transit. We also comply with all relevant data protection regulations.',
          },
        ],
        subtitle:
          'Learn more about our Public Sector Predictive Analytics service and how it can inform your decision-making process.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Advanced Predictive Models',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We develop advanced predictive models to forecast future events and trends.',
          },
          {
            title: 'Data Management',
            fa_icon: 'fa-database',
            subtitle: 'We ensure efficient and secure management of your data.',
          },
          {
            title: 'Strategic Insights',
            fa_icon: 'fa-brain',
            subtitle:
              'We turn data into actionable insights to inform strategic decision-making.',
          },
          {
            title: 'Custom Solutions',
            fa_icon: 'fa-cogs',
            subtitle:
              'We provide solutions tailored to the unique needs of public sector organisations.',
          },
          {
            title: 'Security and Compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize data security and regulatory compliance in all our solutions.',
          },
          {
            title: 'Collaborative Approach',
            fa_icon: 'fa-handshake',
            subtitle:
              'We work closely with your team to align our analytics solutions with your strategic objectives.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Leveraging data to forecast trends and inform strategic decision-making in the public sector.',
      },
      summary: {
        title: 'Driving public sector decisions with predictive analytics.',
        items: [
          {
            title:
              'In the public sector, predictive analytics can turn data into actionable insights, informing decisions and policies. Our predictive analytics services empower you to leverage data-driven insights in your decision-making process.',
          },
          {
            title:
              'Using advanced predictive models, we help you forecast future events and trends, allowing you to make strategic, forward-thinking decisions.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Public Sector Predictive Analytics',
      description:
        'Leverage predictive analytics to make data-driven decisions in the public sector.',
    },
    subtitle:
      'Leverage predictive analytics to make data-driven decisions in the public sector.',
  },
  {
    title: 'AI-Powered Compliance Monitoring',
    slug: 'ai-powered-compliance-monitoring',
    category_id: 3,
    hero_alt: 'Lady justice',
    // Hero
    hero_src: '/unsplash/yCdPU73kGSc.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'How can AI enhance compliance monitoring?',
            content:
              'AI can streamline compliance monitoring by automating manual tasks, improving accuracy, and providing real-time insights. This not only reduces the resources needed for compliance management but also enables the early detection of potential compliance issues, allowing for timely remediation.',
          },
          {
            id: 'faqs-2',
            title:
              'What makes your AI-Powered Compliance Monitoring service unique?',
            content:
              'Our AI-Powered Compliance Monitoring service is tailored to the unique compliance requirements of your organisation. We leverage advanced AI algorithms to provide real-time monitoring, proactive alerts, and comprehensive reporting, thereby improving the efficiency and effectiveness of your compliance management process.',
          },
          {
            id: 'faqs-3',
            title: 'What type of compliance can your service monitor?',
            content:
              'Our AI-Powered Compliance Monitoring service can be customized to monitor various types of compliance, including regulatory compliance, internal policy compliance, and industry-specific compliance. We work closely with your team to understand your compliance landscape and tailor our solution accordingly.',
          },
        ],
        subtitle:
          'Find out more about our AI-Powered Compliance Monitoring service and how it can benefit your organisation.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Intelligent Monitoring',
            fa_icon: 'fa-brain',
            subtitle:
              'Our AI algorithms monitor compliance in real-time, detecting anomalies and potential issues.',
          },
          {
            title: 'Proactive Alerts',
            fa_icon: 'fa-bell',
            subtitle:
              'Get proactive alerts on potential compliance issues, allowing for timely remediation.',
          },
          {
            title: 'Comprehensive Reporting',
            fa_icon: 'fa-chart-pie',
            subtitle:
              'Generate comprehensive compliance reports with in-depth insights at a click.',
          },
          {
            title: 'Custom Solutions',
            fa_icon: 'fa-cogs',
            subtitle:
              'We provide AI-powered compliance solutions tailored to your organisation’s needs.',
          },
          {
            title: 'Regulatory Updates',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Stay updated with regulatory changes with our AI-powered monitoring system.',
          },
          {
            title: 'Collaborative Approach',
            fa_icon: 'fa-handshake',
            subtitle:
              'We work closely with your team to understand your compliance landscape and needs.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Innovating compliance management in the public sector with artificial intelligence.',
      },
      summary: {
        title: 'Enhancing compliance monitoring with Artificial Intelligence.',
        items: [
          {
            title:
              'Regulatory compliance is a key challenge for the public sector. With our services, we streamline the process, helping you detect and manage compliance issues proactively. Our AI-powered solutions enhance accuracy, reduce manual efforts, and provide real-time insights, allowing you to focus on strategic tasks.',
          },
          {
            title:
              'We tailor our solutions to the unique regulatory landscape and compliance requirements of your organisation.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'AI-Powered Compliance Monitoring',
      description:
        'Efficiently monitor and ensure compliance in the public sector through utilizing AI technologies.',
    },
    subtitle:
      'Efficiently monitor and ensure compliance in the public sector through utilizing AI technologies.',
  },
  {
    title: 'Public Sentiment Analysis',
    slug: 'public-sentiment-analysis',
    category_id: 3,
    hero_alt: 'Empty meeting seats',
    // Hero
    hero_src: '/unsplash/7OxV_qDiGRI.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is public sentiment analysis important for government agencies?',
            content:
              'Public sentiment analysis provides government agencies with valuable insights into public perception, attitudes, and concerns. By understanding public sentiment, agencies can make informed decisions, improve communication strategies, and address public concerns effectively.',
          },
          {
            id: 'faqs-2',
            title: 'How do you collect and analyse public sentiment data?',
            content:
              'We collect public sentiment data from various sources, including social media platforms, news articles, and online forums. Advanced analytics techniques, such as natural language processing and machine learning, are applied to analyse the data and extract valuable insights. We employ sentiment analysis algorithms, opinion mining techniques, and text analytics to uncover patterns, sentiments, and key themes.',
          },
          {
            id: 'faqs-3',
            title: 'Can public sentiment analysis help in crisis management?',
            content:
              'Yes, public sentiment analysis is instrumental in crisis management. By monitoring public sentiment during a crisis, government agencies can assess the impact of the crisis on public perception, identify misinformation or rumours, and develop effective communication strategies to address concerns and restore public trust.',
          },
        ],
        subtitle:
          'Find answers to commonly asked questions about our Public Sentiment Analysis service.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Sentiment Analysis',
            fa_icon: 'fa-chart-line',
            subtitle:
              'Analyse public sentiment and opinion to understand public perception and attitudes.',
          },
          {
            title: 'Social Media Monitoring',
            fa_icon: 'fa-globe',
            subtitle:
              'Track and analyse social media data to uncover insights and trends.',
          },
          {
            title: 'Opinion Mining',
            fa_icon: 'fa-comments',
            subtitle:
              'Extract opinions, emotions, and key themes from text data to identify patterns and sentiments.',
          },
          {
            title: 'Reputation Management',
            fa_icon: 'fa-bullhorn',
            subtitle:
              'Monitor and manage your organisation’s online reputation based on public sentiment.',
          },
          {
            title: 'Insightful Reporting',
            fa_icon: 'fa-lightbulb',
            subtitle:
              'Generate comprehensive reports and visualizations to communicate key findings.',
          },
          {
            title: 'Audience Segmentation',
            fa_icon: 'fa-users',
            subtitle:
              'Segment the public audience based on sentiment, demographics, and behaviour.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Harness the power of advanced analytics to analyse public sentiment and opinion.',
      },
      summary: {
        title: 'Uncover actionable insights from public sentiment.',
        items: [
          {
            title:
              'Understanding public sentiment and opinion is crucial for government agencies and organisations in the public sector. We leverage advanced analytics and natural language processing to analyse social media data and other sources, helping you gain valuable insights to inform decision-making.',
          },
          {
            title:
              'Our team of experts applies state-of-the-art techniques to track and analyse public sentiment, allowing you to monitor trends, identify emerging issues, and measure public response to policies and initiatives.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Public Sentiment Analysis',
      description:
        'Leverage advanced analytics to gain insights into public sentiment and opinion.',
    },
    subtitle:
      'Leverage advanced analytics to gain insights into public sentiment and opinion.',
  },
].map((item, i) => {
  return merge({}, MOCK_SERVICE_PAGE, {
    id: i + 1,
    // Category
    category: getCategoryFromCrudItem(item, MOCK_AEL_SERVICE_CATEGORYS),
    overline: 'Service',
    ...item,
    sections: {
      ...item.sections,
      checklist: {
        ...MOCK_SERVICE_PAGE.sections.checklist,
        subtitle:
          'To deliver governmental solutions of the highest quality, we follow the best practices that include comprehensive policy analysis, legal compliance, data privacy, and continuous innovation.',
      },
    },
  })
})
export const MOCK_SRI_SERVICES = [
  {
    title: 'E-Government Platform Development',
    slug: 'egovernment-platform-development',
    category_id: 1,
    hero_alt: 'Lincoln memorial',
    // Hero
    hero_src: '/unsplash/K_GxWa69dMw.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'What is the importance of e-government platforms?',
            content:
              "E-Government platforms are integral to modernizing public sector services, improving accessibility, streamlining operations, and enhancing transparency and accountability. These platforms also play a vital role in meeting citizens' evolving digital expectations.",
          },
          {
            id: 'faqs-2',
            title:
              'What sets your E-Government Platform Development services apart?',
            content:
              'Our E-Government Platform Development services are unique due to our comprehensive approach, which incorporates user-centric design, cutting-edge technology, stringent security measures, and a deep understanding of public sector requirements.',
          },
          {
            id: 'faqs-3',
            title:
              'How does your team ensure the security and privacy of the platform?',
            content:
              'We prioritize security and privacy in our platform development process. We adhere to all the best practices and regulations, including data encryption, secure coding practices, and routine security testing, to ensure the highest level of security and data privacy.',
          },
        ],
        subtitle:
          'Learn more about our E-Government Platform Development Service and how we can help transform your public sector enterprise.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Custom platform development',
            fa_icon: 'fa-laptop-code',
            subtitle:
              'We develop custom digital platforms tailored to meet the unique needs of public sector enterprises.',
          },
          {
            title: 'Data privacy and security',
            fa_icon: 'fa-user-shield',
            subtitle:
              'We ensure the highest level of data privacy and security, adhering to all the regulations and best practices.',
          },
          {
            title: 'Cloud-based solutions',
            fa_icon: 'fa-cloud-upload-alt',
            subtitle:
              'We create flexible and scalable cloud-based solutions, enabling seamless service delivery across all devices.',
          },
          {
            title: 'Mobile-first approach',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'We prioritize a mobile-first approach, ensuring your platform is easily accessible to all users, regardless of their device.',
          },
          {
            title: 'AI and automation',
            fa_icon: 'fa-robot',
            subtitle:
              'We incorporate AI and automation into our platforms to improve service delivery and streamline operations.',
          },
          {
            title: 'User-centric design',
            fa_icon: 'fa-users-cog',
            subtitle:
              'We place users at the heart of our design process, creating platforms that are intuitive, accessible, and user-friendly.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our approach to e-government platform development is comprehensive, focusing on efficiency, security, and most importantly, user engagement.',
      },
      summary: {
        title:
          'Empowering the public sector with innovative digital solutions.',
        items: [
          {
            title:
              'The public sector is evolving, and so are the digital needs of citizens. We specialize in creating robust, reliable, and user-friendly platforms that cater to the diverse needs of the public sector.',
          },
          {
            title:
              'Our team of experts understand the unique challenges faced by the public sector and develop tailored solutions that are not only technologically advanced but also focused on enhancing user experience and accessibility.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'E-Government Platform Development',
      description:
        'Building digital platforms that streamline government operations and improve public service delivery.',
    },
    subtitle:
      'Building digital platforms that streamline government operations and improve public service delivery.',
  },
  {
    title: 'Citizen Engagement Tools',
    slug: 'citizen-engagement-tools',
    category_id: 1,
    hero_alt: 'Town hall meeting',
    // Hero
    hero_src: '/unsplash/cw-cj_nFa14.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is citizen engagement important in the public sector?',
            content:
              'Active citizen engagement is key to effective governance. It allows public sector institutions to understand citizen needs better, gain valuable feedback, and make informed decisions. Moreover, engaged citizens are more likely to contribute positively to community activities, policymaking, and public affairs.',
          },
          {
            id: 'faqs-2',
            title:
              'How can our public sector institution benefit from your Citizen Engagement Tools service?',
            content:
              'Our Citizen Engagement Tools service can help your institution foster meaningful relationships with citizens. By using our tools, you can facilitate interactive communication, gain valuable insights, make data-driven decisions, and enhance your services. Moreover, our emphasis on security and accessibility ensures that your digital platforms are trusted and accessible to all.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure the security and accessibility of your tools?',
            content:
              'We adhere to industry best practices for data security and privacy. All our tools are designed with robust security measures to protect sensitive information. Furthermore, we focus on making our solutions accessible to all citizens, ensuring inclusivity in the digital transformation journey.',
          },
        ],
        subtitle:
          'Learn more about our Citizen Engagement Tools service and how it can benefit your institution.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Interactive communication platforms',
            fa_icon: 'fa-comments',
            subtitle:
              'Our solutions foster active dialogue between citizens and institutions, enabling real-time feedback and discussions.',
          },
          {
            title: 'Mobile-first approach',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'We design our solutions with a mobile-first approach, ensuring seamless experiences across all devices.',
          },
          {
            title: 'Data-driven insights',
            fa_icon: 'fa-database',
            subtitle:
              'Leverage actionable insights from citizens to make data-driven decisions that enhance your services.',
          },
          {
            title: 'Robust security',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize security to protect sensitive citizen data and build trust in your digital platforms.',
          },
          {
            title: 'User-centric design',
            fa_icon: 'fa-user-friends',
            subtitle:
              'Our solutions are designed with the user at the center, ensuring high usability and user satisfaction.',
          },
          {
            title: 'Cloud solutions',
            fa_icon: 'fa-cloud-upload-alt',
            subtitle:
              'Leverage the power of cloud technologies for scalable, high-performance citizen engagement solutions.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We offer a comprehensive suite of digital solutions designed to boost citizen engagement and transform public sector institutions.',
      },
      summary: {
        title: 'Empowering public sector enterprises through technology.',
        items: [
          {
            title:
              'In an increasingly digital world, fostering meaningful connections with citizens is a paramount task for public sector institutions. We equip your institution with cutting-edge digital solutions to enhance interactions and foster better relationships with your citizens.',
          },
          {
            title:
              'We focus on creating accessible, intuitive, and secure digital platforms that empower citizens and make interactions with public sector institutions seamless.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Citizen Engagement Tools',
      description:
        'Delivering strategic solutions to enhance engagement between public sector institutions and citizens.',
    },
    subtitle:
      'Delivering strategic solutions to enhance engagement between public sector institutions and citizens.',
  },
  {
    title: 'Automated Reporting',
    slug: 'automated-reporting',
    category_id: 1,
    hero_alt: 'Guy looking at graphs',
    // Hero
    hero_src: '/unsplash/nApaSgkzaxg.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is automated reporting important for my business?',
            content:
              'Automated reporting reduces the time and effort spent on manual data collection and report generation. It provides real-time insights, enables quick decision making, reduces the risk of errors, and ensures the right people get the right information at the right time.',
          },
          {
            id: 'faqs-2',
            title: 'What types of reports can be automated?',
            content:
              'Almost any type of report can be automated, including sales reports, financial reports, operational reports, and marketing analytics reports. The automation can be customized based on your specific needs and preferences.',
          },
          {
            id: 'faqs-3',
            title: 'How secure is your Automated Reporting service?',
            content:
              'We prioritize data security. We use secure data transmission methods, encryption, and comply with all relevant privacy regulations. We also conduct regular security audits to ensure your data remains safe.',
          },
        ],
        subtitle:
          'Learn more about our Automated Reporting service and how it can revolutionize your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data Aggregation',
            fa_icon: 'fa-database',
            subtitle:
              'We extract and compile data from various sources to provide comprehensive reports.',
          },
          {
            title: 'Real-Time Reporting',
            fa_icon: 'fa-clock',
            subtitle:
              'Get immediate insights with real-time reporting and make quick, informed decisions.',
          },
          {
            title: 'Data Visualization',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We provide visually appealing and easy-to-understand charts, graphs, and dashboards.',
          },
          {
            title: 'Custom Report Generation',
            fa_icon: 'fa-code',
            subtitle:
              'Our system generates customized reports based on your specific needs and preferences.',
          },
          {
            title: 'Automated Distribution',
            fa_icon: 'fa-envelope',
            subtitle:
              'We automate report distribution, ensuring key personnel receive timely information.',
          },
          {
            title: 'Schedule Reports',
            fa_icon: 'fa-sync',
            subtitle:
              'Set up scheduled reports for regular intervals, ensuring consistent data flow.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our Automated Reporting service streamlines your reporting process, enabling efficient data analysis and decision making.',
      },
      summary: {
        title: 'Revolutionizing reporting through automation.',
        items: [
          {
            title:
              'In the fast-paced world of business, having quick access to accurate, up-to-date information is crucial. We specialize in developing automated reporting systems that facilitate prompt, data-driven decisions. Our team works with you to understand your specific reporting needs.',
          },
          {
            title:
              'We then employ cutting-edge technology to design and implement an automated reporting system that delivers the right data to the right people at the right time.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Automated Reporting',
      description:
        'Harness our expertise to streamline your reporting process, enabling quick, data-driven decision making.',
    },
    subtitle:
      'Harness our expertise to streamline your reporting process, enabling quick, data-driven decision making.',
  },
  {
    title: 'Intelligent Document Search',
    slug: 'intelligent-document-search',
    category_id: 2,
    hero_alt: 'Sorted files',
    // Hero
    hero_src: '/unsplash/8EzNkvLQosk.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is an Intelligent Document Search system important for my business?',
            content:
              'An Intelligent Document Search system significantly reduces the time and effort required to find specific information in large document repositories. It ensures swift and accurate data retrieval, thereby enhancing productivity and informed decision-making.',
          },
          {
            id: 'faqs-2',
            title: 'What types of documents can your system search?',
            content:
              'Our system is capable of searching a wide range of document types including PDFs, Word documents, Excel files, and more. We can customize the search capabilities based on your specific needs.',
          },
          {
            id: 'faqs-3',
            title: 'How secure is your Intelligent Document Search service?',
            content:
              'Data security is our top priority. We ensure that only authorized personnel can access your documents. Our system also includes secure data transmission methods, encryption, and compliance with relevant privacy regulations.',
          },
        ],
        subtitle:
          'Learn more about our Intelligent Document Search service and how it can enhance your business efficiency.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Advanced Search Algorithms',
            fa_icon: 'fa-search-plus',
            subtitle:
              'We utilize cutting-edge algorithms to ensure rapid and precise document search.',
          },
          {
            title: 'Document Indexing',
            fa_icon: 'fa-folder-open',
            subtitle:
              'Our system indexes your documents, making data retrieval swift and efficient.',
          },
          {
            title: 'Custom Search Parameters',
            fa_icon: 'fa-cogs',
            subtitle:
              'We offer customized search parameters to cater to your specific data needs.',
          },
          {
            title: 'Cloud-Based System',
            fa_icon: 'fa-cloud-upload-alt',
            subtitle:
              'Our cloud-based search system ensures data accessibility from anywhere, anytime.',
          },
          {
            title: 'Secure Access',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize data security, ensuring that your documents are accessed by authorized personnel only.',
          },
          {
            title: 'Real-Time Updates',
            fa_icon: 'fa-sync-alt',
            subtitle:
              'Our system provides real-time updates, ensuring that your search results are always current.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our Intelligent Document Search service ensures efficient and accurate data retrieval, fueling your business insights.',
      },
      summary: {
        title: 'Empowering your business with smart document search.',
        items: [
          {
            title:
              'In the digital era, finding specific information in vast document repositories can be a challenge. We assist businesses through utilizing advanced algorithms to ensure quick and accurate retrieval of data.',
          },
          {
            title:
              'We work closely with you to understand your unique data requirements and create a tailored search system. This significantly enhances your productivity, decision-making, and overall business efficiency.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Intelligent Document Search',
      description:
        'Create advanced document search systems, ensuring efficient retrieval of relevant information.',
    },
    subtitle:
      'Create advanced document search systems, ensuring efficient retrieval of relevant information.',
  },
  {
    title: 'Virtual Assistant Development',
    slug: 'virtual-assistant-development',
    category_id: 2,
    hero_alt: 'Digital humans',
    // Hero
    hero_src: '/unsplash/A9TTeuTGrug.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is a virtual assistant important for my business?',
            content:
              'A virtual assistant can automate various tasks, free up resources, improve customer interaction, and provide 24/7 service. This leads to enhanced productivity, efficiency, and customer satisfaction.',
          },
          {
            id: 'faqs-2',
            title:
              'What capabilities can I expect from the virtual assistant you develop?',
            content:
              'Our virtual assistants leverage AI and machine learning to understand and respond to user queries in real-time. They continually learn from interactions to improve their responses. We can also customize their capabilities based on your specific needs.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure data privacy with your virtual assistants?',
            content:
              'We prioritize data privacy and security in our virtual assistant development. We follow best practices and comply with relevant regulations to ensure that your user data is always protected.',
          },
        ],
        subtitle:
          'Learn more about our Virtual Assistant Development service and how it can enhance your business efficiency.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'AI-Driven Assistants',
            fa_icon: 'fa-robot',
            subtitle:
              'We leverage advanced AI technology to create virtual assistants that understand and respond to user interactions.',
          },
          {
            title: 'Machine Learning',
            fa_icon: 'fa-brain',
            subtitle:
              'Our virtual assistants learn from interactions, continually improving their responses and effectiveness.',
          },
          {
            title: 'Natural Language Processing',
            fa_icon: 'fa-comments',
            subtitle:
              'Our solutions understand and respond to user inputs in a natural, human-like manner.',
          },
          {
            title: 'Real-Time Interactions',
            fa_icon: 'fa-sync',
            subtitle:
              'Our virtual assistants provide real-time responses to user queries, enhancing customer satisfaction.',
          },
          {
            title: 'Customization',
            fa_icon: 'fa-cogs',
            subtitle:
              'We customize our solutions based on your business needs, ensuring maximum relevance and efficiency.',
          },
          {
            title: 'Data Privacy',
            fa_icon: 'fa-lock',
            subtitle:
              'We prioritize data privacy and security, ensuring your user data is always protected.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We create intelligent virtual assistants tailored to your business needs.',
      },
      summary: {
        title: 'Boosting efficiency with AI-powered virtual assistants.',
        items: [
          {
            title:
              'As the digital landscape evolves, businesses need efficient tools to stay competitive. We offer AI-driven solutions that automate tasks, streamline processes, and enhance customer interaction.',
          },
          {
            title:
              'Our team designs virtual assistants that understand, learn, and respond in a human-like manner, significantly improving your service efficiency and customer satisfaction.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Virtual Assistant Development',
      description:
        'Empower your digital landscape with our advanced, AI-driven virtual assistant development services.',
    },
    subtitle:
      'Empower your digital landscape with our advanced, AI-driven virtual assistant development services.',
  },
  {
    title: 'AI-Driven Policy Analysis',
    slug: 'ai-driven-policy-analysis',
    category_id: 2,
    hero_alt: 'Computer chip in shape of human head',
    // Hero
    hero_src: '/unsplash/gakXaqzGad0.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'How can AI-driven policy analysis enhance our policymaking process?',
            content:
              'AI-driven policy analysis can offer insights and predictions that human analysis may miss. By leveraging data in a systematic way, AI can identify trends, predict outcomes, and provide actionable guidance for policymakers.',
          },
          {
            id: 'faqs-2',
            title: 'What kind of data does your AI use for analysis?',
            content:
              'Our AI solutions can handle a wide variety of data, including demographic data, economic indicators, social metrics, and more. We tailor our data sources to the specific policy domain and decision-making context.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the security of our data?',
            content:
              'We take data security seriously. Our systems adhere to industry-standard security practices, including encryption at rest and in transit. We also comply with all relevant data protection regulations.',
          },
        ],
        subtitle:
          'Learn more about our AI-Driven Policy Analysis service and how it can help guide policymaking.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data Analysis',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We leverage AI to analyse a broad spectrum of data, identifying trends and patterns crucial for effective policymaking.',
          },
          {
            title: 'Predictive Modeling',
            fa_icon: 'fa-brain',
            subtitle:
              'Our AI models predict potential policy outcomes, supporting informed decision-making.',
          },
          {
            title: 'Policy Guidance',
            fa_icon: 'fa-compass',
            subtitle:
              'We provide clear, actionable guidance based on our AI-driven policy analysis.',
          },
          {
            title: 'Data Management',
            fa_icon: 'fa-database',
            subtitle:
              'Our solutions ensure efficient and secure data management, crucial for any AI-driven service.',
          },
          {
            title: 'Custom Solutions',
            fa_icon: 'fa-cogs',
            subtitle:
              'We offer custom solutions tailored to specific policy domains and decision-making contexts.',
          },
          {
            title: 'Secure and Compliant',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize data security and regulatory compliance in all our services.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our suite of AI-driven tools and services is designed to support robust policy analysis.',
      },
      summary: {
        title: 'Leveraging AI for effective policy analysis.',
        items: [
          {
            title:
              'In the complex landscape of public policy, data-driven decision making is crucial. We leverage cutting-edge AI technologies to deliver insightful analysis and recommendations.',
          },
          {
            title:
              'With a focus on accuracy and usability, our AI-driven analysis tools help policymakers cut through the noise, understanding the potential impacts of their decisions in clear, actionable terms.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'AI-Driven Policy Analysis',
      description:
        'Utilize advanced AI to guide and enhance your policymaking process.',
    },
    subtitle:
      'Utilize advanced AI to guide and enhance your policymaking process.',
  },
  {
    title: 'Public Sector Predictive Analytics',
    slug: 'public-sector-predictive-analytics',
    category_id: 3,
    hero_alt: 'Data analytics charts',
    // Hero
    hero_src: '/unsplash/-WXQm_NTK0U.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'How can predictive analytics enhance our decision-making process?',
            content:
              'Predictive analytics leverages historical and current data to forecast future events, trends, and behaviours. This allows you to make proactive, data-driven decisions. For example, it can help you identify potential risks, opportunities, and areas of improvement, guiding your strategic planning and resource allocation.',
          },
          {
            id: 'faqs-2',
            title:
              'What kind of data do your predictive analytics solutions use?',
            content:
              'Our predictive analytics solutions can analyse a wide range of data, depending on your specific needs and objectives. This could include demographic data, economic indicators, operational data, and more. We work with you to identify the most relevant data sources for your strategic goals.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the security of our data?',
            content:
              'We take data security seriously. Our systems adhere to industry-standard security practices, including encryption at rest and in transit. We also comply with all relevant data protection regulations.',
          },
        ],
        subtitle:
          'Learn more about our Public Sector Predictive Analytics service and how it can inform your decision-making process.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Advanced Predictive Models',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We develop advanced predictive models to forecast future events and trends.',
          },
          {
            title: 'Data Management',
            fa_icon: 'fa-database',
            subtitle: 'We ensure efficient and secure management of your data.',
          },
          {
            title: 'Strategic Insights',
            fa_icon: 'fa-brain',
            subtitle:
              'We turn data into actionable insights to inform strategic decision-making.',
          },
          {
            title: 'Custom Solutions',
            fa_icon: 'fa-cogs',
            subtitle:
              'We provide solutions tailored to the unique needs of public sector organisations.',
          },
          {
            title: 'Security and Compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize data security and regulatory compliance in all our solutions.',
          },
          {
            title: 'Collaborative Approach',
            fa_icon: 'fa-handshake',
            subtitle:
              'We work closely with your team to align our analytics solutions with your strategic objectives.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Leveraging data to forecast trends and inform strategic decision-making in the public sector.',
      },
      summary: {
        title: 'Driving public sector decisions with predictive analytics.',
        items: [
          {
            title:
              'In the public sector, predictive analytics can turn data into actionable insights, informing decisions and policies. Our predictive analytics services empower you to leverage data-driven insights in your decision-making process.',
          },
          {
            title:
              'Using advanced predictive models, we help you forecast future events and trends, allowing you to make strategic, forward-thinking decisions.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Public Sector Predictive Analytics',
      description:
        'Leverage predictive analytics to make data-driven decisions in the public sector.',
    },
    subtitle:
      'Leverage predictive analytics to make data-driven decisions in the public sector.',
  },
  {
    title: 'AI-Powered Compliance Monitoring',
    slug: 'ai-powered-compliance-monitoring',
    category_id: 3,
    hero_alt: 'Lady justice',
    // Hero
    hero_src: '/unsplash/yCdPU73kGSc.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'How can AI enhance compliance monitoring?',
            content:
              'AI can streamline compliance monitoring by automating manual tasks, improving accuracy, and providing real-time insights. This not only reduces the resources needed for compliance management but also enables the early detection of potential compliance issues, allowing for timely remediation.',
          },
          {
            id: 'faqs-2',
            title:
              'What makes your AI-Powered Compliance Monitoring service unique?',
            content:
              'Our AI-Powered Compliance Monitoring service is tailored to the unique compliance requirements of your organisation. We leverage advanced AI algorithms to provide real-time monitoring, proactive alerts, and comprehensive reporting, thereby improving the efficiency and effectiveness of your compliance management process.',
          },
          {
            id: 'faqs-3',
            title: 'What type of compliance can your service monitor?',
            content:
              'Our AI-Powered Compliance Monitoring service can be customized to monitor various types of compliance, including regulatory compliance, internal policy compliance, and industry-specific compliance. We work closely with your team to understand your compliance landscape and tailor our solution accordingly.',
          },
        ],
        subtitle:
          'Find out more about our AI-Powered Compliance Monitoring service and how it can benefit your organisation.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Intelligent Monitoring',
            fa_icon: 'fa-brain',
            subtitle:
              'Our AI algorithms monitor compliance in real-time, detecting anomalies and potential issues.',
          },
          {
            title: 'Proactive Alerts',
            fa_icon: 'fa-bell',
            subtitle:
              'Get proactive alerts on potential compliance issues, allowing for timely remediation.',
          },
          {
            title: 'Comprehensive Reporting',
            fa_icon: 'fa-chart-pie',
            subtitle:
              'Generate comprehensive compliance reports with in-depth insights at a click.',
          },
          {
            title: 'Custom Solutions',
            fa_icon: 'fa-cogs',
            subtitle:
              'We provide AI-powered compliance solutions tailored to your organisation’s needs.',
          },
          {
            title: 'Regulatory Updates',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Stay updated with regulatory changes with our AI-powered monitoring system.',
          },
          {
            title: 'Collaborative Approach',
            fa_icon: 'fa-handshake',
            subtitle:
              'We work closely with your team to understand your compliance landscape and needs.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Innovating compliance management in the public sector with artificial intelligence.',
      },
      summary: {
        title: 'Enhancing compliance monitoring with Artificial Intelligence.',
        items: [
          {
            title:
              'Regulatory compliance is a key challenge for the public sector. With our services, we streamline the process, helping you detect and manage compliance issues proactively. Our AI-powered solutions enhance accuracy, reduce manual efforts, and provide real-time insights, allowing you to focus on strategic tasks.',
          },
          {
            title:
              'We tailor our solutions to the unique regulatory landscape and compliance requirements of your organisation.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'AI-Powered Compliance Monitoring',
      description:
        'Efficiently monitor and ensure compliance in the public sector through utilizing AI technologies.',
    },
    subtitle:
      'Efficiently monitor and ensure compliance in the public sector through utilizing AI technologies.',
  },
  {
    title: 'Public Sentiment Analysis',
    slug: 'public-sentiment-analysis',
    category_id: 3,
    hero_alt: 'Empty meeting seats',
    // Hero
    hero_src: '/unsplash/7OxV_qDiGRI.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is public sentiment analysis important for government agencies?',
            content:
              'Public sentiment analysis provides government agencies with valuable insights into public perception, attitudes, and concerns. By understanding public sentiment, agencies can make informed decisions, improve communication strategies, and address public concerns effectively.',
          },
          {
            id: 'faqs-2',
            title: 'How do you collect and analyse public sentiment data?',
            content:
              'We collect public sentiment data from various sources, including social media platforms, news articles, and online forums. Advanced analytics techniques, such as natural language processing and machine learning, are applied to analyse the data and extract valuable insights. We employ sentiment analysis algorithms, opinion mining techniques, and text analytics to uncover patterns, sentiments, and key themes.',
          },
          {
            id: 'faqs-3',
            title: 'Can public sentiment analysis help in crisis management?',
            content:
              'Yes, public sentiment analysis is instrumental in crisis management. By monitoring public sentiment during a crisis, government agencies can assess the impact of the crisis on public perception, identify misinformation or rumours, and develop effective communication strategies to address concerns and restore public trust.',
          },
        ],
        subtitle:
          'Find answers to commonly asked questions about our Public Sentiment Analysis service.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Sentiment Analysis',
            fa_icon: 'fa-chart-line',
            subtitle:
              'Analyse public sentiment and opinion to understand public perception and attitudes.',
          },
          {
            title: 'Social Media Monitoring',
            fa_icon: 'fa-globe',
            subtitle:
              'Track and analyse social media data to uncover insights and trends.',
          },
          {
            title: 'Opinion Mining',
            fa_icon: 'fa-comments',
            subtitle:
              'Extract opinions, emotions, and key themes from text data to identify patterns and sentiments.',
          },
          {
            title: 'Reputation Management',
            fa_icon: 'fa-bullhorn',
            subtitle:
              'Monitor and manage your organisation’s online reputation based on public sentiment.',
          },
          {
            title: 'Insightful Reporting',
            fa_icon: 'fa-lightbulb',
            subtitle:
              'Generate comprehensive reports and visualizations to communicate key findings.',
          },
          {
            title: 'Audience Segmentation',
            fa_icon: 'fa-users',
            subtitle:
              'Segment the public audience based on sentiment, demographics, and behaviour.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Harness the power of advanced analytics to analyse public sentiment and opinion.',
      },
      summary: {
        title: 'Uncover actionable insights from public sentiment.',
        items: [
          {
            title:
              'Understanding public sentiment and opinion is crucial for government agencies and organisations in the public sector. We leverage advanced analytics and natural language processing to analyse social media data and other sources, helping you gain valuable insights to inform decision-making.',
          },
          {
            title:
              'Our team of experts applies state-of-the-art techniques to track and analyse public sentiment, allowing you to monitor trends, identify emerging issues, and measure public response to policies and initiatives.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Public Sentiment Analysis',
      description:
        'Leverage advanced analytics to gain insights into public sentiment and opinion.',
    },
    subtitle:
      'Leverage advanced analytics to gain insights into public sentiment and opinion.',
  },
].map((item, i) => {
  return merge({}, MOCK_SERVICE_PAGE, {
    id: i + 1,
    // Category
    category: getCategoryFromCrudItem(item, MOCK_SRI_SERVICE_CATEGORYS),
    overline: 'Service',
    ...item,
    sections: {
      ...item.sections,
      checklist: {
        ...MOCK_SERVICE_PAGE.sections.checklist,
        subtitle:
          'To deliver governmental solutions of the highest quality, we follow the best practices that include comprehensive policy analysis, legal compliance, data privacy, and continuous innovation.',
      },
    },
  })
})
export const MOCK_GVS_SERVICES = [
  {
    title: 'E-Government Platform Development',
    slug: 'egovernment-platform-development',
    category_id: 1,
    hero_alt: 'Lincoln memorial',
    // Hero
    hero_src: '/unsplash/K_GxWa69dMw.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'What is the importance of e-government platforms?',
            content:
              "E-Government platforms are integral to modernizing public sector services, improving accessibility, streamlining operations, and enhancing transparency and accountability. These platforms also play a vital role in meeting citizens' evolving digital expectations.",
          },
          {
            id: 'faqs-2',
            title:
              'What sets your E-Government Platform Development services apart?',
            content:
              'Our E-Government Platform Development services are unique due to our comprehensive approach, which incorporates user-centric design, cutting-edge technology, stringent security measures, and a deep understanding of public sector requirements.',
          },
          {
            id: 'faqs-3',
            title:
              'How does your team ensure the security and privacy of the platform?',
            content:
              'We prioritize security and privacy in our platform development process. We adhere to all the best practices and regulations, including data encryption, secure coding practices, and routine security testing, to ensure the highest level of security and data privacy.',
          },
        ],
        subtitle:
          'Learn more about our E-Government Platform Development Service and how we can help transform your public sector enterprise.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Custom platform development',
            fa_icon: 'fa-laptop-code',
            subtitle:
              'We develop custom digital platforms tailored to meet the unique needs of public sector enterprises.',
          },
          {
            title: 'Data privacy and security',
            fa_icon: 'fa-user-shield',
            subtitle:
              'We ensure the highest level of data privacy and security, adhering to all the regulations and best practices.',
          },
          {
            title: 'Cloud-based solutions',
            fa_icon: 'fa-cloud-upload-alt',
            subtitle:
              'We create flexible and scalable cloud-based solutions, enabling seamless service delivery across all devices.',
          },
          {
            title: 'Mobile-first approach',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'We prioritize a mobile-first approach, ensuring your platform is easily accessible to all users, regardless of their device.',
          },
          {
            title: 'AI and automation',
            fa_icon: 'fa-robot',
            subtitle:
              'We incorporate AI and automation into our platforms to improve service delivery and streamline operations.',
          },
          {
            title: 'User-centric design',
            fa_icon: 'fa-users-cog',
            subtitle:
              'We place users at the heart of our design process, creating platforms that are intuitive, accessible, and user-friendly.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our approach to e-government platform development is comprehensive, focusing on efficiency, security, and most importantly, user engagement.',
      },
      summary: {
        title:
          'Empowering the public sector with innovative digital solutions.',
        items: [
          {
            title:
              'The public sector is evolving, and so are the digital needs of citizens. We specialize in creating robust, reliable, and user-friendly platforms that cater to the diverse needs of the public sector.',
          },
          {
            title:
              'Our team of experts understand the unique challenges faced by the public sector and develop tailored solutions that are not only technologically advanced but also focused on enhancing user experience and accessibility.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'E-Government Platform Development',
      description:
        'Building digital platforms that streamline government operations and improve public service delivery.',
    },
    subtitle:
      'Building digital platforms that streamline government operations and improve public service delivery.',
  },
  {
    title: 'Citizen Engagement Tools',
    slug: 'citizen-engagement-tools',
    category_id: 1,
    hero_alt: 'Town hall meeting',
    // Hero
    hero_src: '/unsplash/cw-cj_nFa14.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is citizen engagement important in the public sector?',
            content:
              'Active citizen engagement is key to effective governance. It allows public sector institutions to understand citizen needs better, gain valuable feedback, and make informed decisions. Moreover, engaged citizens are more likely to contribute positively to community activities, policymaking, and public affairs.',
          },
          {
            id: 'faqs-2',
            title:
              'How can our public sector institution benefit from your Citizen Engagement Tools service?',
            content:
              'Our Citizen Engagement Tools service can help your institution foster meaningful relationships with citizens. By using our tools, you can facilitate interactive communication, gain valuable insights, make data-driven decisions, and enhance your services. Moreover, our emphasis on security and accessibility ensures that your digital platforms are trusted and accessible to all.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure the security and accessibility of your tools?',
            content:
              'We adhere to industry best practices for data security and privacy. All our tools are designed with robust security measures to protect sensitive information. Furthermore, we focus on making our solutions accessible to all citizens, ensuring inclusivity in the digital transformation journey.',
          },
        ],
        subtitle:
          'Learn more about our Citizen Engagement Tools service and how it can benefit your institution.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Interactive communication platforms',
            fa_icon: 'fa-comments',
            subtitle:
              'Our solutions foster active dialogue between citizens and institutions, enabling real-time feedback and discussions.',
          },
          {
            title: 'Mobile-first approach',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'We design our solutions with a mobile-first approach, ensuring seamless experiences across all devices.',
          },
          {
            title: 'Data-driven insights',
            fa_icon: 'fa-database',
            subtitle:
              'Leverage actionable insights from citizens to make data-driven decisions that enhance your services.',
          },
          {
            title: 'Robust security',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize security to protect sensitive citizen data and build trust in your digital platforms.',
          },
          {
            title: 'User-centric design',
            fa_icon: 'fa-user-friends',
            subtitle:
              'Our solutions are designed with the user at the center, ensuring high usability and user satisfaction.',
          },
          {
            title: 'Cloud solutions',
            fa_icon: 'fa-cloud-upload-alt',
            subtitle:
              'Leverage the power of cloud technologies for scalable, high-performance citizen engagement solutions.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We offer a comprehensive suite of digital solutions designed to boost citizen engagement and transform public sector institutions.',
      },
      summary: {
        title: 'Empowering public sector enterprises through technology.',
        items: [
          {
            title:
              'In an increasingly digital world, fostering meaningful connections with citizens is a paramount task for public sector institutions. We equip your institution with cutting-edge digital solutions to enhance interactions and foster better relationships with your citizens.',
          },
          {
            title:
              'We focus on creating accessible, intuitive, and secure digital platforms that empower citizens and make interactions with public sector institutions seamless.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Citizen Engagement Tools',
      description:
        'Delivering strategic solutions to enhance engagement between public sector institutions and citizens.',
    },
    subtitle:
      'Delivering strategic solutions to enhance engagement between public sector institutions and citizens.',
  },
  {
    title: 'Automated Reporting',
    slug: 'automated-reporting',
    category_id: 1,
    hero_alt: 'Guy looking at graphs',
    // Hero
    hero_src: '/unsplash/nApaSgkzaxg.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is automated reporting important for my business?',
            content:
              'Automated reporting reduces the time and effort spent on manual data collection and report generation. It provides real-time insights, enables quick decision making, reduces the risk of errors, and ensures the right people get the right information at the right time.',
          },
          {
            id: 'faqs-2',
            title: 'What types of reports can be automated?',
            content:
              'Almost any type of report can be automated, including sales reports, financial reports, operational reports, and marketing analytics reports. The automation can be customized based on your specific needs and preferences.',
          },
          {
            id: 'faqs-3',
            title: 'How secure is your Automated Reporting service?',
            content:
              'We prioritize data security. We use secure data transmission methods, encryption, and comply with all relevant privacy regulations. We also conduct regular security audits to ensure your data remains safe.',
          },
        ],
        subtitle:
          'Learn more about our Automated Reporting service and how it can revolutionize your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data Aggregation',
            fa_icon: 'fa-database',
            subtitle:
              'We extract and compile data from various sources to provide comprehensive reports.',
          },
          {
            title: 'Real-Time Reporting',
            fa_icon: 'fa-clock',
            subtitle:
              'Get immediate insights with real-time reporting and make quick, informed decisions.',
          },
          {
            title: 'Data Visualization',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We provide visually appealing and easy-to-understand charts, graphs, and dashboards.',
          },
          {
            title: 'Custom Report Generation',
            fa_icon: 'fa-code',
            subtitle:
              'Our system generates customized reports based on your specific needs and preferences.',
          },
          {
            title: 'Automated Distribution',
            fa_icon: 'fa-envelope',
            subtitle:
              'We automate report distribution, ensuring key personnel receive timely information.',
          },
          {
            title: 'Schedule Reports',
            fa_icon: 'fa-sync',
            subtitle:
              'Set up scheduled reports for regular intervals, ensuring consistent data flow.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our Automated Reporting service streamlines your reporting process, enabling efficient data analysis and decision making.',
      },
      summary: {
        title: 'Revolutionizing reporting through automation.',
        items: [
          {
            title:
              'In the fast-paced world of business, having quick access to accurate, up-to-date information is crucial. We specialize in developing automated reporting systems that facilitate prompt, data-driven decisions. Our team works with you to understand your specific reporting needs.',
          },
          {
            title:
              'We then employ cutting-edge technology to design and implement an automated reporting system that delivers the right data to the right people at the right time.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Automated Reporting',
      description:
        'Harness our expertise to streamline your reporting process, enabling quick, data-driven decision making.',
    },
    subtitle:
      'Harness our expertise to streamline your reporting process, enabling quick, data-driven decision making.',
  },
  {
    title: 'Intelligent Document Search',
    slug: 'intelligent-document-search',
    category_id: 2,
    hero_alt: 'Sorted files',
    // Hero
    hero_src: '/unsplash/8EzNkvLQosk.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is an Intelligent Document Search system important for my business?',
            content:
              'An Intelligent Document Search system significantly reduces the time and effort required to find specific information in large document repositories. It ensures swift and accurate data retrieval, thereby enhancing productivity and informed decision-making.',
          },
          {
            id: 'faqs-2',
            title: 'What types of documents can your system search?',
            content:
              'Our system is capable of searching a wide range of document types including PDFs, Word documents, Excel files, and more. We can customize the search capabilities based on your specific needs.',
          },
          {
            id: 'faqs-3',
            title: 'How secure is your Intelligent Document Search service?',
            content:
              'Data security is our top priority. We ensure that only authorized personnel can access your documents. Our system also includes secure data transmission methods, encryption, and compliance with relevant privacy regulations.',
          },
        ],
        subtitle:
          'Learn more about our Intelligent Document Search service and how it can enhance your business efficiency.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Advanced Search Algorithms',
            fa_icon: 'fa-search-plus',
            subtitle:
              'We utilize cutting-edge algorithms to ensure rapid and precise document search.',
          },
          {
            title: 'Document Indexing',
            fa_icon: 'fa-folder-open',
            subtitle:
              'Our system indexes your documents, making data retrieval swift and efficient.',
          },
          {
            title: 'Custom Search Parameters',
            fa_icon: 'fa-cogs',
            subtitle:
              'We offer customized search parameters to cater to your specific data needs.',
          },
          {
            title: 'Cloud-Based System',
            fa_icon: 'fa-cloud-upload-alt',
            subtitle:
              'Our cloud-based search system ensures data accessibility from anywhere, anytime.',
          },
          {
            title: 'Secure Access',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize data security, ensuring that your documents are accessed by authorized personnel only.',
          },
          {
            title: 'Real-Time Updates',
            fa_icon: 'fa-sync-alt',
            subtitle:
              'Our system provides real-time updates, ensuring that your search results are always current.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our Intelligent Document Search service ensures efficient and accurate data retrieval, fueling your business insights.',
      },
      summary: {
        title: 'Empowering your business with smart document search.',
        items: [
          {
            title:
              'In the digital era, finding specific information in vast document repositories can be a challenge. We assist businesses through utilizing advanced algorithms to ensure quick and accurate retrieval of data.',
          },
          {
            title:
              'We work closely with you to understand your unique data requirements and create a tailored search system. This significantly enhances your productivity, decision-making, and overall business efficiency.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Intelligent Document Search',
      description:
        'Create advanced document search systems, ensuring efficient retrieval of relevant information.',
    },
    subtitle:
      'Create advanced document search systems, ensuring efficient retrieval of relevant information.',
  },
  {
    title: 'Virtual Assistant Development',
    slug: 'virtual-assistant-development',
    category_id: 2,
    hero_alt: 'Digital humans',
    // Hero
    hero_src: '/unsplash/A9TTeuTGrug.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is a virtual assistant important for my business?',
            content:
              'A virtual assistant can automate various tasks, free up resources, improve customer interaction, and provide 24/7 service. This leads to enhanced productivity, efficiency, and customer satisfaction.',
          },
          {
            id: 'faqs-2',
            title:
              'What capabilities can I expect from the virtual assistant you develop?',
            content:
              'Our virtual assistants leverage AI and machine learning to understand and respond to user queries in real-time. They continually learn from interactions to improve their responses. We can also customize their capabilities based on your specific needs.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure data privacy with your virtual assistants?',
            content:
              'We prioritize data privacy and security in our virtual assistant development. We follow best practices and comply with relevant regulations to ensure that your user data is always protected.',
          },
        ],
        subtitle:
          'Learn more about our Virtual Assistant Development service and how it can enhance your business efficiency.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'AI-Driven Assistants',
            fa_icon: 'fa-robot',
            subtitle:
              'We leverage advanced AI technology to create virtual assistants that understand and respond to user interactions.',
          },
          {
            title: 'Machine Learning',
            fa_icon: 'fa-brain',
            subtitle:
              'Our virtual assistants learn from interactions, continually improving their responses and effectiveness.',
          },
          {
            title: 'Natural Language Processing',
            fa_icon: 'fa-comments',
            subtitle:
              'Our solutions understand and respond to user inputs in a natural, human-like manner.',
          },
          {
            title: 'Real-Time Interactions',
            fa_icon: 'fa-sync',
            subtitle:
              'Our virtual assistants provide real-time responses to user queries, enhancing customer satisfaction.',
          },
          {
            title: 'Customization',
            fa_icon: 'fa-cogs',
            subtitle:
              'We customize our solutions based on your business needs, ensuring maximum relevance and efficiency.',
          },
          {
            title: 'Data Privacy',
            fa_icon: 'fa-lock',
            subtitle:
              'We prioritize data privacy and security, ensuring your user data is always protected.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We create intelligent virtual assistants tailored to your business needs.',
      },
      summary: {
        title: 'Boosting efficiency with AI-powered virtual assistants.',
        items: [
          {
            title:
              'As the digital landscape evolves, businesses need efficient tools to stay competitive. We offer AI-driven solutions that automate tasks, streamline processes, and enhance customer interaction.',
          },
          {
            title:
              'Our team designs virtual assistants that understand, learn, and respond in a human-like manner, significantly improving your service efficiency and customer satisfaction.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Virtual Assistant Development',
      description:
        'Empower your digital landscape with our advanced, AI-driven virtual assistant development services.',
    },
    subtitle:
      'Empower your digital landscape with our advanced, AI-driven virtual assistant development services.',
  },
  {
    title: 'AI-Driven Policy Analysis',
    slug: 'ai-driven-policy-analysis',
    category_id: 2,
    hero_alt: 'Computer chip in shape of human head',
    // Hero
    hero_src: '/unsplash/gakXaqzGad0.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'How can AI-driven policy analysis enhance our policymaking process?',
            content:
              'AI-driven policy analysis can offer insights and predictions that human analysis may miss. By leveraging data in a systematic way, AI can identify trends, predict outcomes, and provide actionable guidance for policymakers.',
          },
          {
            id: 'faqs-2',
            title: 'What kind of data does your AI use for analysis?',
            content:
              'Our AI solutions can handle a wide variety of data, including demographic data, economic indicators, social metrics, and more. We tailor our data sources to the specific policy domain and decision-making context.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the security of our data?',
            content:
              'We take data security seriously. Our systems adhere to industry-standard security practices, including encryption at rest and in transit. We also comply with all relevant data protection regulations.',
          },
        ],
        subtitle:
          'Learn more about our AI-Driven Policy Analysis service and how it can help guide policymaking.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data Analysis',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We leverage AI to analyse a broad spectrum of data, identifying trends and patterns crucial for effective policymaking.',
          },
          {
            title: 'Predictive Modeling',
            fa_icon: 'fa-brain',
            subtitle:
              'Our AI models predict potential policy outcomes, supporting informed decision-making.',
          },
          {
            title: 'Policy Guidance',
            fa_icon: 'fa-compass',
            subtitle:
              'We provide clear, actionable guidance based on our AI-driven policy analysis.',
          },
          {
            title: 'Data Management',
            fa_icon: 'fa-database',
            subtitle:
              'Our solutions ensure efficient and secure data management, crucial for any AI-driven service.',
          },
          {
            title: 'Custom Solutions',
            fa_icon: 'fa-cogs',
            subtitle:
              'We offer custom solutions tailored to specific policy domains and decision-making contexts.',
          },
          {
            title: 'Secure and Compliant',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize data security and regulatory compliance in all our services.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our suite of AI-driven tools and services is designed to support robust policy analysis.',
      },
      summary: {
        title: 'Leveraging AI for effective policy analysis.',
        items: [
          {
            title:
              'In the complex landscape of public policy, data-driven decision making is crucial. We leverage cutting-edge AI technologies to deliver insightful analysis and recommendations.',
          },
          {
            title:
              'With a focus on accuracy and usability, our AI-driven analysis tools help policymakers cut through the noise, understanding the potential impacts of their decisions in clear, actionable terms.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'AI-Driven Policy Analysis',
      description:
        'Utilize advanced AI to guide and enhance your policymaking process.',
    },
    subtitle:
      'Utilize advanced AI to guide and enhance your policymaking process.',
  },
  {
    title: 'Public Sector Predictive Analytics',
    slug: 'public-sector-predictive-analytics',
    category_id: 3,
    hero_alt: 'Data analytics charts',
    // Hero
    hero_src: '/unsplash/-WXQm_NTK0U.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'How can predictive analytics enhance our decision-making process?',
            content:
              'Predictive analytics leverages historical and current data to forecast future events, trends, and behaviours. This allows you to make proactive, data-driven decisions. For example, it can help you identify potential risks, opportunities, and areas of improvement, guiding your strategic planning and resource allocation.',
          },
          {
            id: 'faqs-2',
            title:
              'What kind of data do your predictive analytics solutions use?',
            content:
              'Our predictive analytics solutions can analyse a wide range of data, depending on your specific needs and objectives. This could include demographic data, economic indicators, operational data, and more. We work with you to identify the most relevant data sources for your strategic goals.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the security of our data?',
            content:
              'We take data security seriously. Our systems adhere to industry-standard security practices, including encryption at rest and in transit. We also comply with all relevant data protection regulations.',
          },
        ],
        subtitle:
          'Learn more about our Public Sector Predictive Analytics service and how it can inform your decision-making process.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Advanced Predictive Models',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We develop advanced predictive models to forecast future events and trends.',
          },
          {
            title: 'Data Management',
            fa_icon: 'fa-database',
            subtitle: 'We ensure efficient and secure management of your data.',
          },
          {
            title: 'Strategic Insights',
            fa_icon: 'fa-brain',
            subtitle:
              'We turn data into actionable insights to inform strategic decision-making.',
          },
          {
            title: 'Custom Solutions',
            fa_icon: 'fa-cogs',
            subtitle:
              'We provide solutions tailored to the unique needs of public sector organisations.',
          },
          {
            title: 'Security and Compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize data security and regulatory compliance in all our solutions.',
          },
          {
            title: 'Collaborative Approach',
            fa_icon: 'fa-handshake',
            subtitle:
              'We work closely with your team to align our analytics solutions with your strategic objectives.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Leveraging data to forecast trends and inform strategic decision-making in the public sector.',
      },
      summary: {
        title: 'Driving public sector decisions with predictive analytics.',
        items: [
          {
            title:
              'In the public sector, predictive analytics can turn data into actionable insights, informing decisions and policies. Our predictive analytics services empower you to leverage data-driven insights in your decision-making process.',
          },
          {
            title:
              'Using advanced predictive models, we help you forecast future events and trends, allowing you to make strategic, forward-thinking decisions.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Public Sector Predictive Analytics',
      description:
        'Leverage predictive analytics to make data-driven decisions in the public sector.',
    },
    subtitle:
      'Leverage predictive analytics to make data-driven decisions in the public sector.',
  },
  {
    title: 'AI-Powered Compliance Monitoring',
    slug: 'ai-powered-compliance-monitoring',
    category_id: 3,
    hero_alt: 'Lady justice',
    // Hero
    hero_src: '/unsplash/yCdPU73kGSc.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'How can AI enhance compliance monitoring?',
            content:
              'AI can streamline compliance monitoring by automating manual tasks, improving accuracy, and providing real-time insights. This not only reduces the resources needed for compliance management but also enables the early detection of potential compliance issues, allowing for timely remediation.',
          },
          {
            id: 'faqs-2',
            title:
              'What makes your AI-Powered Compliance Monitoring service unique?',
            content:
              'Our AI-Powered Compliance Monitoring service is tailored to the unique compliance requirements of your organisation. We leverage advanced AI algorithms to provide real-time monitoring, proactive alerts, and comprehensive reporting, thereby improving the efficiency and effectiveness of your compliance management process.',
          },
          {
            id: 'faqs-3',
            title: 'What type of compliance can your service monitor?',
            content:
              'Our AI-Powered Compliance Monitoring service can be customized to monitor various types of compliance, including regulatory compliance, internal policy compliance, and industry-specific compliance. We work closely with your team to understand your compliance landscape and tailor our solution accordingly.',
          },
        ],
        subtitle:
          'Find out more about our AI-Powered Compliance Monitoring service and how it can benefit your organisation.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Intelligent Monitoring',
            fa_icon: 'fa-brain',
            subtitle:
              'Our AI algorithms monitor compliance in real-time, detecting anomalies and potential issues.',
          },
          {
            title: 'Proactive Alerts',
            fa_icon: 'fa-bell',
            subtitle:
              'Get proactive alerts on potential compliance issues, allowing for timely remediation.',
          },
          {
            title: 'Comprehensive Reporting',
            fa_icon: 'fa-chart-pie',
            subtitle:
              'Generate comprehensive compliance reports with in-depth insights at a click.',
          },
          {
            title: 'Custom Solutions',
            fa_icon: 'fa-cogs',
            subtitle:
              'We provide AI-powered compliance solutions tailored to your organisation’s needs.',
          },
          {
            title: 'Regulatory Updates',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Stay updated with regulatory changes with our AI-powered monitoring system.',
          },
          {
            title: 'Collaborative Approach',
            fa_icon: 'fa-handshake',
            subtitle:
              'We work closely with your team to understand your compliance landscape and needs.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Innovating compliance management in the public sector with artificial intelligence.',
      },
      summary: {
        title: 'Enhancing compliance monitoring with Artificial Intelligence.',
        items: [
          {
            title:
              'Regulatory compliance is a key challenge for the public sector. With our services, we streamline the process, helping you detect and manage compliance issues proactively. Our AI-powered solutions enhance accuracy, reduce manual efforts, and provide real-time insights, allowing you to focus on strategic tasks.',
          },
          {
            title:
              'We tailor our solutions to the unique regulatory landscape and compliance requirements of your organisation.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'AI-Powered Compliance Monitoring',
      description:
        'Efficiently monitor and ensure compliance in the public sector through utilizing AI technologies.',
    },
    subtitle:
      'Efficiently monitor and ensure compliance in the public sector through utilizing AI technologies.',
  },
  {
    title: 'Public Sentiment Analysis',
    slug: 'public-sentiment-analysis',
    category_id: 3,
    hero_alt: 'Empty meeting seats',
    // Hero
    hero_src: '/unsplash/7OxV_qDiGRI.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is public sentiment analysis important for government agencies?',
            content:
              'Public sentiment analysis provides government agencies with valuable insights into public perception, attitudes, and concerns. By understanding public sentiment, agencies can make informed decisions, improve communication strategies, and address public concerns effectively.',
          },
          {
            id: 'faqs-2',
            title: 'How do you collect and analyse public sentiment data?',
            content:
              'We collect public sentiment data from various sources, including social media platforms, news articles, and online forums. Advanced analytics techniques, such as natural language processing and machine learning, are applied to analyse the data and extract valuable insights. We employ sentiment analysis algorithms, opinion mining techniques, and text analytics to uncover patterns, sentiments, and key themes.',
          },
          {
            id: 'faqs-3',
            title: 'Can public sentiment analysis help in crisis management?',
            content:
              'Yes, public sentiment analysis is instrumental in crisis management. By monitoring public sentiment during a crisis, government agencies can assess the impact of the crisis on public perception, identify misinformation or rumours, and develop effective communication strategies to address concerns and restore public trust.',
          },
        ],
        subtitle:
          'Find answers to commonly asked questions about our Public Sentiment Analysis service.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Sentiment Analysis',
            fa_icon: 'fa-chart-line',
            subtitle:
              'Analyse public sentiment and opinion to understand public perception and attitudes.',
          },
          {
            title: 'Social Media Monitoring',
            fa_icon: 'fa-globe',
            subtitle:
              'Track and analyse social media data to uncover insights and trends.',
          },
          {
            title: 'Opinion Mining',
            fa_icon: 'fa-comments',
            subtitle:
              'Extract opinions, emotions, and key themes from text data to identify patterns and sentiments.',
          },
          {
            title: 'Reputation Management',
            fa_icon: 'fa-bullhorn',
            subtitle:
              'Monitor and manage your organisation’s online reputation based on public sentiment.',
          },
          {
            title: 'Insightful Reporting',
            fa_icon: 'fa-lightbulb',
            subtitle:
              'Generate comprehensive reports and visualizations to communicate key findings.',
          },
          {
            title: 'Audience Segmentation',
            fa_icon: 'fa-users',
            subtitle:
              'Segment the public audience based on sentiment, demographics, and behaviour.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Harness the power of advanced analytics to analyse public sentiment and opinion.',
      },
      summary: {
        title: 'Uncover actionable insights from public sentiment.',
        items: [
          {
            title:
              'Understanding public sentiment and opinion is crucial for government agencies and organisations in the public sector. We leverage advanced analytics and natural language processing to analyse social media data and other sources, helping you gain valuable insights to inform decision-making.',
          },
          {
            title:
              'Our team of experts applies state-of-the-art techniques to track and analyse public sentiment, allowing you to monitor trends, identify emerging issues, and measure public response to policies and initiatives.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Public Sentiment Analysis',
      description:
        'Leverage advanced analytics to gain insights into public sentiment and opinion.',
    },
    subtitle:
      'Leverage advanced analytics to gain insights into public sentiment and opinion.',
  },
].map((item, i) => {
  return merge({}, MOCK_SERVICE_PAGE, {
    id: i + 1,
    // Category
    category: getCategoryFromCrudItem(item, MOCK_GVS_SERVICE_CATEGORYS),
    overline: 'Service',
    ...item,
    sections: {
      ...item.sections,
      checklist: {
        ...MOCK_SERVICE_PAGE.sections.checklist,
        subtitle:
          'To deliver governmental solutions of the highest quality, we follow the best practices that include comprehensive policy analysis, legal compliance, data privacy, and continuous innovation.',
      },
    },
  })
})
export const MOCK_COASTAL_SERVICES = [
  {
    title: 'E-Government Platform Development',
    slug: 'egovernment-platform-development',
    category_id: 1,
    hero_alt: 'Lincoln memorial',
    // Hero
    hero_src: '/unsplash/K_GxWa69dMw.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'What is the importance of e-government platforms?',
            content:
              "E-Government platforms are integral to modernizing public sector services, improving accessibility, streamlining operations, and enhancing transparency and accountability. These platforms also play a vital role in meeting citizens' evolving digital expectations.",
          },
          {
            id: 'faqs-2',
            title:
              'What sets your E-Government Platform Development services apart?',
            content:
              'Our E-Government Platform Development services are unique due to our comprehensive approach, which incorporates user-centric design, cutting-edge technology, stringent security measures, and a deep understanding of public sector requirements.',
          },
          {
            id: 'faqs-3',
            title:
              'How does your team ensure the security and privacy of the platform?',
            content:
              'We prioritize security and privacy in our platform development process. We adhere to all the best practices and regulations, including data encryption, secure coding practices, and routine security testing, to ensure the highest level of security and data privacy.',
          },
        ],
        subtitle:
          'Learn more about our E-Government Platform Development Service and how we can help transform your public sector enterprise.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Custom platform development',
            fa_icon: 'fa-laptop-code',
            subtitle:
              'We develop custom digital platforms tailored to meet the unique needs of public sector enterprises.',
          },
          {
            title: 'Data privacy and security',
            fa_icon: 'fa-user-shield',
            subtitle:
              'We ensure the highest level of data privacy and security, adhering to all the regulations and best practices.',
          },
          {
            title: 'Cloud-based solutions',
            fa_icon: 'fa-cloud-upload-alt',
            subtitle:
              'We create flexible and scalable cloud-based solutions, enabling seamless service delivery across all devices.',
          },
          {
            title: 'Mobile-first approach',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'We prioritize a mobile-first approach, ensuring your platform is easily accessible to all users, regardless of their device.',
          },
          {
            title: 'AI and automation',
            fa_icon: 'fa-robot',
            subtitle:
              'We incorporate AI and automation into our platforms to improve service delivery and streamline operations.',
          },
          {
            title: 'User-centric design',
            fa_icon: 'fa-users-cog',
            subtitle:
              'We place users at the heart of our design process, creating platforms that are intuitive, accessible, and user-friendly.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our approach to e-government platform development is comprehensive, focusing on efficiency, security, and most importantly, user engagement.',
      },
      summary: {
        title:
          'Empowering the public sector with innovative digital solutions.',
        items: [
          {
            title:
              'The public sector is evolving, and so are the digital needs of citizens. We specialize in creating robust, reliable, and user-friendly platforms that cater to the diverse needs of the public sector.',
          },
          {
            title:
              'Our team of experts understand the unique challenges faced by the public sector and develop tailored solutions that are not only technologically advanced but also focused on enhancing user experience and accessibility.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'E-Government Platform Development',
      description:
        'Building digital platforms that streamline government operations and improve public service delivery.',
    },
    subtitle:
      'Building digital platforms that streamline government operations and improve public service delivery.',
  },
  {
    title: 'Citizen Engagement Tools',
    slug: 'citizen-engagement-tools',
    category_id: 1,
    hero_alt: 'Town hall meeting',
    // Hero
    hero_src: '/unsplash/cw-cj_nFa14.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is citizen engagement important in the public sector?',
            content:
              'Active citizen engagement is key to effective governance. It allows public sector institutions to understand citizen needs better, gain valuable feedback, and make informed decisions. Moreover, engaged citizens are more likely to contribute positively to community activities, policymaking, and public affairs.',
          },
          {
            id: 'faqs-2',
            title:
              'How can our public sector institution benefit from your Citizen Engagement Tools service?',
            content:
              'Our Citizen Engagement Tools service can help your institution foster meaningful relationships with citizens. By using our tools, you can facilitate interactive communication, gain valuable insights, make data-driven decisions, and enhance your services. Moreover, our emphasis on security and accessibility ensures that your digital platforms are trusted and accessible to all.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure the security and accessibility of your tools?',
            content:
              'We adhere to industry best practices for data security and privacy. All our tools are designed with robust security measures to protect sensitive information. Furthermore, we focus on making our solutions accessible to all citizens, ensuring inclusivity in the digital transformation journey.',
          },
        ],
        subtitle:
          'Learn more about our Citizen Engagement Tools service and how it can benefit your institution.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Interactive communication platforms',
            fa_icon: 'fa-comments',
            subtitle:
              'Our solutions foster active dialogue between citizens and institutions, enabling real-time feedback and discussions.',
          },
          {
            title: 'Mobile-first approach',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'We design our solutions with a mobile-first approach, ensuring seamless experiences across all devices.',
          },
          {
            title: 'Data-driven insights',
            fa_icon: 'fa-database',
            subtitle:
              'Leverage actionable insights from citizens to make data-driven decisions that enhance your services.',
          },
          {
            title: 'Robust security',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize security to protect sensitive citizen data and build trust in your digital platforms.',
          },
          {
            title: 'User-centric design',
            fa_icon: 'fa-user-friends',
            subtitle:
              'Our solutions are designed with the user at the center, ensuring high usability and user satisfaction.',
          },
          {
            title: 'Cloud solutions',
            fa_icon: 'fa-cloud-upload-alt',
            subtitle:
              'Leverage the power of cloud technologies for scalable, high-performance citizen engagement solutions.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We offer a comprehensive suite of digital solutions designed to boost citizen engagement and transform public sector institutions.',
      },
      summary: {
        title: 'Empowering public sector enterprises through technology.',
        items: [
          {
            title:
              'In an increasingly digital world, fostering meaningful connections with citizens is a paramount task for public sector institutions. We equip your institution with cutting-edge digital solutions to enhance interactions and foster better relationships with your citizens.',
          },
          {
            title:
              'We focus on creating accessible, intuitive, and secure digital platforms that empower citizens and make interactions with public sector institutions seamless.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Citizen Engagement Tools',
      description:
        'Delivering strategic solutions to enhance engagement between public sector institutions and citizens.',
    },
    subtitle:
      'Delivering strategic solutions to enhance engagement between public sector institutions and citizens.',
  },
  {
    title: 'Automated Reporting',
    slug: 'automated-reporting',
    category_id: 1,
    hero_alt: 'Guy looking at graphs',
    // Hero
    hero_src: '/unsplash/nApaSgkzaxg.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is automated reporting important for my business?',
            content:
              'Automated reporting reduces the time and effort spent on manual data collection and report generation. It provides real-time insights, enables quick decision making, reduces the risk of errors, and ensures the right people get the right information at the right time.',
          },
          {
            id: 'faqs-2',
            title: 'What types of reports can be automated?',
            content:
              'Almost any type of report can be automated, including sales reports, financial reports, operational reports, and marketing analytics reports. The automation can be customized based on your specific needs and preferences.',
          },
          {
            id: 'faqs-3',
            title: 'How secure is your Automated Reporting service?',
            content:
              'We prioritize data security. We use secure data transmission methods, encryption, and comply with all relevant privacy regulations. We also conduct regular security audits to ensure your data remains safe.',
          },
        ],
        subtitle:
          'Learn more about our Automated Reporting service and how it can revolutionize your business.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data Aggregation',
            fa_icon: 'fa-database',
            subtitle:
              'We extract and compile data from various sources to provide comprehensive reports.',
          },
          {
            title: 'Real-Time Reporting',
            fa_icon: 'fa-clock',
            subtitle:
              'Get immediate insights with real-time reporting and make quick, informed decisions.',
          },
          {
            title: 'Data Visualization',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We provide visually appealing and easy-to-understand charts, graphs, and dashboards.',
          },
          {
            title: 'Custom Report Generation',
            fa_icon: 'fa-code',
            subtitle:
              'Our system generates customized reports based on your specific needs and preferences.',
          },
          {
            title: 'Automated Distribution',
            fa_icon: 'fa-envelope',
            subtitle:
              'We automate report distribution, ensuring key personnel receive timely information.',
          },
          {
            title: 'Schedule Reports',
            fa_icon: 'fa-sync',
            subtitle:
              'Set up scheduled reports for regular intervals, ensuring consistent data flow.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our Automated Reporting service streamlines your reporting process, enabling efficient data analysis and decision making.',
      },
      summary: {
        title: 'Revolutionizing reporting through automation.',
        items: [
          {
            title:
              'In the fast-paced world of business, having quick access to accurate, up-to-date information is crucial. We specialize in developing automated reporting systems that facilitate prompt, data-driven decisions. Our team works with you to understand your specific reporting needs.',
          },
          {
            title:
              'We then employ cutting-edge technology to design and implement an automated reporting system that delivers the right data to the right people at the right time.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Automated Reporting',
      description:
        'Harness our expertise to streamline your reporting process, enabling quick, data-driven decision making.',
    },
    subtitle:
      'Harness our expertise to streamline your reporting process, enabling quick, data-driven decision making.',
  },
  {
    title: 'Intelligent Document Search',
    slug: 'intelligent-document-search',
    category_id: 2,
    hero_alt: 'Sorted files',
    // Hero
    hero_src: '/unsplash/8EzNkvLQosk.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is an Intelligent Document Search system important for my business?',
            content:
              'An Intelligent Document Search system significantly reduces the time and effort required to find specific information in large document repositories. It ensures swift and accurate data retrieval, thereby enhancing productivity and informed decision-making.',
          },
          {
            id: 'faqs-2',
            title: 'What types of documents can your system search?',
            content:
              'Our system is capable of searching a wide range of document types including PDFs, Word documents, Excel files, and more. We can customize the search capabilities based on your specific needs.',
          },
          {
            id: 'faqs-3',
            title: 'How secure is your Intelligent Document Search service?',
            content:
              'Data security is our top priority. We ensure that only authorized personnel can access your documents. Our system also includes secure data transmission methods, encryption, and compliance with relevant privacy regulations.',
          },
        ],
        subtitle:
          'Learn more about our Intelligent Document Search service and how it can enhance your business efficiency.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Advanced Search Algorithms',
            fa_icon: 'fa-search-plus',
            subtitle:
              'We utilize cutting-edge algorithms to ensure rapid and precise document search.',
          },
          {
            title: 'Document Indexing',
            fa_icon: 'fa-folder-open',
            subtitle:
              'Our system indexes your documents, making data retrieval swift and efficient.',
          },
          {
            title: 'Custom Search Parameters',
            fa_icon: 'fa-cogs',
            subtitle:
              'We offer customized search parameters to cater to your specific data needs.',
          },
          {
            title: 'Cloud-Based System',
            fa_icon: 'fa-cloud-upload-alt',
            subtitle:
              'Our cloud-based search system ensures data accessibility from anywhere, anytime.',
          },
          {
            title: 'Secure Access',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize data security, ensuring that your documents are accessed by authorized personnel only.',
          },
          {
            title: 'Real-Time Updates',
            fa_icon: 'fa-sync-alt',
            subtitle:
              'Our system provides real-time updates, ensuring that your search results are always current.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our Intelligent Document Search service ensures efficient and accurate data retrieval, fueling your business insights.',
      },
      summary: {
        title: 'Empowering your business with smart document search.',
        items: [
          {
            title:
              'In the digital era, finding specific information in vast document repositories can be a challenge. We assist businesses through utilizing advanced algorithms to ensure quick and accurate retrieval of data.',
          },
          {
            title:
              'We work closely with you to understand your unique data requirements and create a tailored search system. This significantly enhances your productivity, decision-making, and overall business efficiency.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Intelligent Document Search',
      description:
        'Create advanced document search systems, ensuring efficient retrieval of relevant information.',
    },
    subtitle:
      'Create advanced document search systems, ensuring efficient retrieval of relevant information.',
  },
  {
    title: 'Virtual Assistant Development',
    slug: 'virtual-assistant-development',
    category_id: 2,
    hero_alt: 'Digital humans',
    // Hero
    hero_src: '/unsplash/A9TTeuTGrug.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is a virtual assistant important for my business?',
            content:
              'A virtual assistant can automate various tasks, free up resources, improve customer interaction, and provide 24/7 service. This leads to enhanced productivity, efficiency, and customer satisfaction.',
          },
          {
            id: 'faqs-2',
            title:
              'What capabilities can I expect from the virtual assistant you develop?',
            content:
              'Our virtual assistants leverage AI and machine learning to understand and respond to user queries in real-time. They continually learn from interactions to improve their responses. We can also customize their capabilities based on your specific needs.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure data privacy with your virtual assistants?',
            content:
              'We prioritize data privacy and security in our virtual assistant development. We follow best practices and comply with relevant regulations to ensure that your user data is always protected.',
          },
        ],
        subtitle:
          'Learn more about our Virtual Assistant Development service and how it can enhance your business efficiency.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'AI-Driven Assistants',
            fa_icon: 'fa-robot',
            subtitle:
              'We leverage advanced AI technology to create virtual assistants that understand and respond to user interactions.',
          },
          {
            title: 'Machine Learning',
            fa_icon: 'fa-brain',
            subtitle:
              'Our virtual assistants learn from interactions, continually improving their responses and effectiveness.',
          },
          {
            title: 'Natural Language Processing',
            fa_icon: 'fa-comments',
            subtitle:
              'Our solutions understand and respond to user inputs in a natural, human-like manner.',
          },
          {
            title: 'Real-Time Interactions',
            fa_icon: 'fa-sync',
            subtitle:
              'Our virtual assistants provide real-time responses to user queries, enhancing customer satisfaction.',
          },
          {
            title: 'Customization',
            fa_icon: 'fa-cogs',
            subtitle:
              'We customize our solutions based on your business needs, ensuring maximum relevance and efficiency.',
          },
          {
            title: 'Data Privacy',
            fa_icon: 'fa-lock',
            subtitle:
              'We prioritize data privacy and security, ensuring your user data is always protected.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We create intelligent virtual assistants tailored to your business needs.',
      },
      summary: {
        title: 'Boosting efficiency with AI-powered virtual assistants.',
        items: [
          {
            title:
              'As the digital landscape evolves, businesses need efficient tools to stay competitive. We offer AI-driven solutions that automate tasks, streamline processes, and enhance customer interaction.',
          },
          {
            title:
              'Our team designs virtual assistants that understand, learn, and respond in a human-like manner, significantly improving your service efficiency and customer satisfaction.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Virtual Assistant Development',
      description:
        'Empower your digital landscape with our advanced, AI-driven virtual assistant development services.',
    },
    subtitle:
      'Empower your digital landscape with our advanced, AI-driven virtual assistant development services.',
  },
  {
    title: 'AI-Driven Policy Analysis',
    slug: 'ai-driven-policy-analysis',
    category_id: 2,
    hero_alt: 'Computer chip in shape of human head',
    // Hero
    hero_src: '/unsplash/gakXaqzGad0.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'How can AI-driven policy analysis enhance our policymaking process?',
            content:
              'AI-driven policy analysis can offer insights and predictions that human analysis may miss. By leveraging data in a systematic way, AI can identify trends, predict outcomes, and provide actionable guidance for policymakers.',
          },
          {
            id: 'faqs-2',
            title: 'What kind of data does your AI use for analysis?',
            content:
              'Our AI solutions can handle a wide variety of data, including demographic data, economic indicators, social metrics, and more. We tailor our data sources to the specific policy domain and decision-making context.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the security of our data?',
            content:
              'We take data security seriously. Our systems adhere to industry-standard security practices, including encryption at rest and in transit. We also comply with all relevant data protection regulations.',
          },
        ],
        subtitle:
          'Learn more about our AI-Driven Policy Analysis service and how it can help guide policymaking.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Data Analysis',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We leverage AI to analyse a broad spectrum of data, identifying trends and patterns crucial for effective policymaking.',
          },
          {
            title: 'Predictive Modeling',
            fa_icon: 'fa-brain',
            subtitle:
              'Our AI models predict potential policy outcomes, supporting informed decision-making.',
          },
          {
            title: 'Policy Guidance',
            fa_icon: 'fa-compass',
            subtitle:
              'We provide clear, actionable guidance based on our AI-driven policy analysis.',
          },
          {
            title: 'Data Management',
            fa_icon: 'fa-database',
            subtitle:
              'Our solutions ensure efficient and secure data management, crucial for any AI-driven service.',
          },
          {
            title: 'Custom Solutions',
            fa_icon: 'fa-cogs',
            subtitle:
              'We offer custom solutions tailored to specific policy domains and decision-making contexts.',
          },
          {
            title: 'Secure and Compliant',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize data security and regulatory compliance in all our services.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Our suite of AI-driven tools and services is designed to support robust policy analysis.',
      },
      summary: {
        title: 'Leveraging AI for effective policy analysis.',
        items: [
          {
            title:
              'In the complex landscape of public policy, data-driven decision making is crucial. We leverage cutting-edge AI technologies to deliver insightful analysis and recommendations.',
          },
          {
            title:
              'With a focus on accuracy and usability, our AI-driven analysis tools help policymakers cut through the noise, understanding the potential impacts of their decisions in clear, actionable terms.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'AI-Driven Policy Analysis',
      description:
        'Utilize advanced AI to guide and enhance your policymaking process.',
    },
    subtitle:
      'Utilize advanced AI to guide and enhance your policymaking process.',
  },
  {
    title: 'Public Sector Predictive Analytics',
    slug: 'public-sector-predictive-analytics',
    category_id: 3,
    hero_alt: 'Data analytics charts',
    // Hero
    hero_src: '/unsplash/-WXQm_NTK0U.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'How can predictive analytics enhance our decision-making process?',
            content:
              'Predictive analytics leverages historical and current data to forecast future events, trends, and behaviours. This allows you to make proactive, data-driven decisions. For example, it can help you identify potential risks, opportunities, and areas of improvement, guiding your strategic planning and resource allocation.',
          },
          {
            id: 'faqs-2',
            title:
              'What kind of data do your predictive analytics solutions use?',
            content:
              'Our predictive analytics solutions can analyse a wide range of data, depending on your specific needs and objectives. This could include demographic data, economic indicators, operational data, and more. We work with you to identify the most relevant data sources for your strategic goals.',
          },
          {
            id: 'faqs-3',
            title: 'How do you ensure the security of our data?',
            content:
              'We take data security seriously. Our systems adhere to industry-standard security practices, including encryption at rest and in transit. We also comply with all relevant data protection regulations.',
          },
        ],
        subtitle:
          'Learn more about our Public Sector Predictive Analytics service and how it can inform your decision-making process.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Advanced Predictive Models',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We develop advanced predictive models to forecast future events and trends.',
          },
          {
            title: 'Data Management',
            fa_icon: 'fa-database',
            subtitle: 'We ensure efficient and secure management of your data.',
          },
          {
            title: 'Strategic Insights',
            fa_icon: 'fa-brain',
            subtitle:
              'We turn data into actionable insights to inform strategic decision-making.',
          },
          {
            title: 'Custom Solutions',
            fa_icon: 'fa-cogs',
            subtitle:
              'We provide solutions tailored to the unique needs of public sector organisations.',
          },
          {
            title: 'Security and Compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize data security and regulatory compliance in all our solutions.',
          },
          {
            title: 'Collaborative Approach',
            fa_icon: 'fa-handshake',
            subtitle:
              'We work closely with your team to align our analytics solutions with your strategic objectives.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Leveraging data to forecast trends and inform strategic decision-making in the public sector.',
      },
      summary: {
        title: 'Driving public sector decisions with predictive analytics.',
        items: [
          {
            title:
              'In the public sector, predictive analytics can turn data into actionable insights, informing decisions and policies. Our predictive analytics services empower you to leverage data-driven insights in your decision-making process.',
          },
          {
            title:
              'Using advanced predictive models, we help you forecast future events and trends, allowing you to make strategic, forward-thinking decisions.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Public Sector Predictive Analytics',
      description:
        'Leverage predictive analytics to make data-driven decisions in the public sector.',
    },
    subtitle:
      'Leverage predictive analytics to make data-driven decisions in the public sector.',
  },
  {
    title: 'AI-Powered Compliance Monitoring',
    slug: 'ai-powered-compliance-monitoring',
    category_id: 3,
    hero_alt: 'Lady justice',
    // Hero
    hero_src: '/unsplash/yCdPU73kGSc.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'How can AI enhance compliance monitoring?',
            content:
              'AI can streamline compliance monitoring by automating manual tasks, improving accuracy, and providing real-time insights. This not only reduces the resources needed for compliance management but also enables the early detection of potential compliance issues, allowing for timely remediation.',
          },
          {
            id: 'faqs-2',
            title:
              'What makes your AI-Powered Compliance Monitoring service unique?',
            content:
              'Our AI-Powered Compliance Monitoring service is tailored to the unique compliance requirements of your organisation. We leverage advanced AI algorithms to provide real-time monitoring, proactive alerts, and comprehensive reporting, thereby improving the efficiency and effectiveness of your compliance management process.',
          },
          {
            id: 'faqs-3',
            title: 'What type of compliance can your service monitor?',
            content:
              'Our AI-Powered Compliance Monitoring service can be customized to monitor various types of compliance, including regulatory compliance, internal policy compliance, and industry-specific compliance. We work closely with your team to understand your compliance landscape and tailor our solution accordingly.',
          },
        ],
        subtitle:
          'Find out more about our AI-Powered Compliance Monitoring service and how it can benefit your organisation.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Intelligent Monitoring',
            fa_icon: 'fa-brain',
            subtitle:
              'Our AI algorithms monitor compliance in real-time, detecting anomalies and potential issues.',
          },
          {
            title: 'Proactive Alerts',
            fa_icon: 'fa-bell',
            subtitle:
              'Get proactive alerts on potential compliance issues, allowing for timely remediation.',
          },
          {
            title: 'Comprehensive Reporting',
            fa_icon: 'fa-chart-pie',
            subtitle:
              'Generate comprehensive compliance reports with in-depth insights at a click.',
          },
          {
            title: 'Custom Solutions',
            fa_icon: 'fa-cogs',
            subtitle:
              'We provide AI-powered compliance solutions tailored to your organisation’s needs.',
          },
          {
            title: 'Regulatory Updates',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Stay updated with regulatory changes with our AI-powered monitoring system.',
          },
          {
            title: 'Collaborative Approach',
            fa_icon: 'fa-handshake',
            subtitle:
              'We work closely with your team to understand your compliance landscape and needs.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Innovating compliance management in the public sector with artificial intelligence.',
      },
      summary: {
        title: 'Enhancing compliance monitoring with Artificial Intelligence.',
        items: [
          {
            title:
              'Regulatory compliance is a key challenge for the public sector. With our services, we streamline the process, helping you detect and manage compliance issues proactively. Our AI-powered solutions enhance accuracy, reduce manual efforts, and provide real-time insights, allowing you to focus on strategic tasks.',
          },
          {
            title:
              'We tailor our solutions to the unique regulatory landscape and compliance requirements of your organisation.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'AI-Powered Compliance Monitoring',
      description:
        'Efficiently monitor and ensure compliance in the public sector through utilizing AI technologies.',
    },
    subtitle:
      'Efficiently monitor and ensure compliance in the public sector through utilizing AI technologies.',
  },
  {
    title: 'Public Sentiment Analysis',
    slug: 'public-sentiment-analysis',
    category_id: 3,
    hero_alt: 'Empty meeting seats',
    // Hero
    hero_src: '/unsplash/7OxV_qDiGRI.jpg',
    // Sections
    sections: {
      benefits: {
        title: 'Bridging the Gap in Public Sector Digitalization',
        center: true,
        items: [
          {
            title: 'Digital Service Delivery',
            fa_icon: 'fa-globe',
            href: `${routeConfig.SERVICES}/digital-service-delivery`,
            subtitle:
              'Partner with us to unleash your full potential and achieve digital excellence through our technology consulting services and expertise in enterprise software development.',
          },
          {
            title: 'AI Process Automation',
            fa_icon: 'fa-robot',
            href: `${routeConfig.SERVICES}/ai-process-automation`,
            subtitle:
              'Transform and automate complex processes by leveraging AI technologies to drive efficiency, accuracy, and cost savings for your organisation.',
          },
          {
            title: 'Advanced Public Sector Analytics',
            fa_icon: 'fa-chart-bar',
            href: `${routeConfig.SERVICES}/advanced-public-sector-analytics`,
            subtitle:
              'Uncover actionable insights and make data-driven decisions that optimize operations, enhance citizen services, and drive meaningful impact.',
          },
        ],
        maxWidth: 'xl',
        overline: 'What we do',
        subtitle:
          '{appTitle} bridges the public sector digitalization gap, empowering governments with transformative solutions to modernize operations, streamline processes, and enhance public services.',
      },
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is public sentiment analysis important for government agencies?',
            content:
              'Public sentiment analysis provides government agencies with valuable insights into public perception, attitudes, and concerns. By understanding public sentiment, agencies can make informed decisions, improve communication strategies, and address public concerns effectively.',
          },
          {
            id: 'faqs-2',
            title: 'How do you collect and analyse public sentiment data?',
            content:
              'We collect public sentiment data from various sources, including social media platforms, news articles, and online forums. Advanced analytics techniques, such as natural language processing and machine learning, are applied to analyse the data and extract valuable insights. We employ sentiment analysis algorithms, opinion mining techniques, and text analytics to uncover patterns, sentiments, and key themes.',
          },
          {
            id: 'faqs-3',
            title: 'Can public sentiment analysis help in crisis management?',
            content:
              'Yes, public sentiment analysis is instrumental in crisis management. By monitoring public sentiment during a crisis, government agencies can assess the impact of the crisis on public perception, identify misinformation or rumours, and develop effective communication strategies to address concerns and restore public trust.',
          },
        ],
        subtitle:
          'Find answers to commonly asked questions about our Public Sentiment Analysis service.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Sentiment Analysis',
            fa_icon: 'fa-chart-line',
            subtitle:
              'Analyse public sentiment and opinion to understand public perception and attitudes.',
          },
          {
            title: 'Social Media Monitoring',
            fa_icon: 'fa-globe',
            subtitle:
              'Track and analyse social media data to uncover insights and trends.',
          },
          {
            title: 'Opinion Mining',
            fa_icon: 'fa-comments',
            subtitle:
              'Extract opinions, emotions, and key themes from text data to identify patterns and sentiments.',
          },
          {
            title: 'Reputation Management',
            fa_icon: 'fa-bullhorn',
            subtitle:
              'Monitor and manage your organisation’s online reputation based on public sentiment.',
          },
          {
            title: 'Insightful Reporting',
            fa_icon: 'fa-lightbulb',
            subtitle:
              'Generate comprehensive reports and visualizations to communicate key findings.',
          },
          {
            title: 'Audience Segmentation',
            fa_icon: 'fa-users',
            subtitle:
              'Segment the public audience based on sentiment, demographics, and behaviour.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'Harness the power of advanced analytics to analyse public sentiment and opinion.',
      },
      summary: {
        title: 'Uncover actionable insights from public sentiment.',
        items: [
          {
            title:
              'Understanding public sentiment and opinion is crucial for government agencies and organisations in the public sector. We leverage advanced analytics and natural language processing to analyse social media data and other sources, helping you gain valuable insights to inform decision-making.',
          },
          {
            title:
              'Our team of experts applies state-of-the-art techniques to track and analyse public sentiment, allowing you to monitor trends, identify emerging issues, and measure public response to policies and initiatives.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Public Sentiment Analysis',
      description:
        'Leverage advanced analytics to gain insights into public sentiment and opinion.',
    },
    subtitle:
      'Leverage advanced analytics to gain insights into public sentiment and opinion.',
  },
].map((item, i) => {
  return merge({}, MOCK_SERVICE_PAGE, {
    id: i + 1,
    // Category
    category: getCategoryFromCrudItem(item, MOCK_COASTAL_SERVICE_CATEGORYS),
    overline: 'Service',
    ...item,
    sections: {
      ...item.sections,
      checklist: {
        ...MOCK_SERVICE_PAGE.sections.checklist,
        subtitle:
          'To deliver governmental solutions of the highest quality, we follow the best practices that include comprehensive policy analysis, legal compliance, data privacy, and continuous innovation.',
      },
    },
  })
})

export const MOCK_SERVICES = {
  AEL: [],
  COASTAL: MOCK_COASTAL_SERVICES,
  DATA: MOCK_DATA_SERVICES,
  DESIGN: MOCK_DESIGN_SERVICES,
  DIGITAL: MOCK_DIGITAL_SERVICES,
  FINX: MOCK_FINX_SERVICES,
  GOVX: MOCK_GOVX_SERVICES,
  GROUP: MOCK_GROUP_SERVICES,
  GVS: MOCK_GVS_SERVICES,
  SRI: MOCK_SRI_SERVICES,
  TECH: MOCK_TECH_SERVICES,
}
