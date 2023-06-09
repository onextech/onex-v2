import merge from 'lodash/merge'
import { routeConfig } from '@onex/common'
import getCategoryFromCrudItem from '../utils/getCategoryFromCrudItem'
import {
  MOCK_DATA_SERVICE_CATEGORYS,
  MOCK_DESIGN_SERVICE_CATEGORYS,
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
  hero_alt: 'People working in office',
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
            'In the past decade, digital transformation and innovation completely changed the way the world does business. In the decade ahead, technological, social and environmental forces will make strategic innovation essential for the survival of any business operating at scale. For many organisations, however, innovation can feel like fumbling in the dark, leading to new products and industrys that don’t contribute to the health and longevity of the business. In an increasingly complex world, strategy and creativity are the keys to successful, impactful innovation.',
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
    callout: {
      hero_src: '/images/about_nodes_above_city.png',
      hero_alt: 'Laser net over city',
      overline: '',
      title: 'We Build Digital Solutions with Enterprises, for Enterprises',
      subtitle:
        'Our team of consultants, designers and engineers live and breathe digital services to deliver best-in-class technological solutions targeted at enterprise growth and digitalization.',
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
      overline: 'Why Us',
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
  },
}

export const MOCK_TECH_SERVICES = [
  {
    title: 'User Interface Development',
    slug: 'user-interface-development',
    category_id: 1,
    // Hero
    hero_src: 'https://source.unsplash.com/qC2n6RQU4Vw/1600x900',
    hero_alt: 'user interface development',
    subtitle:
      'Work with design and development experts to create beautiful, intuitive user interfaces for your business.',
    // Seo
    seo: {
      title: 'User Interface Development',
      description:
        'Accelerate development with our user interface development services. Create intuitive and visually appealing interfaces for seamless user experiences.',
    },
    // Sections
    sections: {
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
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'To create user interfaces of the highest quality, we follow the best practices that include user research, prototyping, usability testing, and accessibility testing.',
        items: [
          {
            fa_icon: 'fa-pencil-ruler',
            title: 'Custom design',
            subtitle:
              'We create custom designs tailored to your brand and target audience, ensuring that your interface stands out from the competition.',
          },
          {
            fa_icon: 'fa-desktop',
            title: 'Responsive development',
            subtitle:
              'We develop interfaces that work seamlessly across all devices, from desktop to mobile, to ensure that your customers can access your product from anywhere.',
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Usability testing',
            subtitle:
              'We conduct rigorous usability testing to ensure that your interface is easy to use and meets the needs of your customers.',
          },
          {
            fa_icon: 'fa-universal-access',
            title: 'Accessibility testing',
            subtitle:
              'We ensure that your interface is accessible to all users, regardless of their abilities or disabilities, by conducting thorough accessibility testing.',
          },
          {
            fa_icon: 'fa-search',
            title: 'SEO optimization',
            subtitle:
              'We optimize your interface for search engines, making it easier for your customers to find your product.',
          },
          {
            fa_icon: 'fa-code-branch',
            title: 'Collaboration',
            subtitle:
              'We work closely with your team to ensure that your interface meets your business objectives and delivers value to your customers.',
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
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our User Interface Development Service and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title:
              'Why is a high-quality user interface important for my business?',
            content:
              "A high-quality user interface can have a significant impact on your business's success. It can improve customer satisfaction, increase engagement, and even drive conversions.",
          },
          {
            key: 'faqs-2',
            title:
              'What are the benefits of working with your User Interface Development Service?',
            content:
              "At our User Interface Development Service, we specialize in creating beautiful, intuitive interfaces that are tailored to your business's unique needs. Our team of experts takes a user-centric approach to every project, ensuring that your interface not only looks great but also functions effectively and meets the needs of your customers. We also follow best practices for usability testing, accessibility testing, and SEO optimization, to ensure that your interface is easy to use, accessible to all users, and optimized for search engines.",
          },
          {
            key: 'faqs-3',
            title: 'How do you approach user interface design?',
            content:
              'We take a user-centric approach to user interface design, starting with user research to understand your target audience and their needs. From there, we create wireframes and prototypes to test and refine our design concepts. We also prioritize accessibility and usability testing throughout the development process, to ensure that your interface is easy to use and accessible to all users.',
          },
        ],
      },
    },
  },
  {
    title: 'API Integration Development',
    slug: 'api-integration-development',
    category_id: 1,
    // Hero
    hero_src: 'https://source.unsplash.com/pREq0ns_p_E/1600x900',
    hero_alt: 'Lights intertwined into a rope',
    subtitle:
      'Connect and streamline your systems with seamless API integration solutions.',
    // Seo
    seo: {
      title: 'API Integration Development',
      description:
        'Accelerate your development with expert API integration services. Seamlessly connect and enhance your applications with robust API solutions.',
    },
    // Sections
    sections: {
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
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We provide end-to-end API integration services, from design and development to testing and deployment.',
        items: [
          {
            fa_icon: 'fa-cogs',
            title: 'Custom API integration',
            subtitle:
              'We develop custom API integrations tailored to your specific requirements, ensuring seamless connectivity between your systems.',
          },
          {
            fa_icon: 'fa-exchange-alt',
            title: 'Third-party API integration',
            subtitle:
              'We help you integrate third-party APIs into your existing systems, enabling you to leverage the power of external services and tools.',
          },
          {
            fa_icon: 'fa-code',
            title: 'API design and development',
            subtitle:
              'Our team of experts designs and develops APIs that are secure, efficient, and easy to use.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'API security',
            subtitle:
              'We ensure the security of your API integrations, implementing best practices to protect your data and systems.',
          },
          {
            fa_icon: 'fa-sync',
            title: 'API maintenance',
            subtitle:
              'We provide ongoing maintenance and support for your API integrations, ensuring they remain up-to-date and perform optimally.',
          },
          {
            fa_icon: 'fa-rocket',
            title: 'Scalable solutions',
            subtitle:
              'We design API integration solutions that can scale with your business, ensuring that your systems can grow with your needs.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our API Integration Development Service and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title:
              'What is API integration and why is it important for my business?',
            content:
              'API (Application Programming Interface) integration is the process of connecting different software systems, applications, or platforms to enable seamless communication and data exchange between them. API integration is crucial for businesses as it helps streamline processes, reduce manual work, improve data accuracy, and facilitate better decision-making. By integrating different systems, your business can achieve better efficiency, increased productivity, and enhanced collaboration.',
          },
          {
            key: 'faqs-2',
            title:
              'What are the benefits of working with your API Integration Development Service?',
            content:
              'At our API Integration Development Service, we specialize in creating custom API integrations tailored to your specific needs. Our team of experienced developers ensures seamless connectivity between your systems, allowing you to streamline processes and improve efficiency. We also work closely with your team to understand your business goals and deliver an integration solution that meets your requirements and exceeds your expectations. In addition, we provide end-to-end services, including API design, development, testing, deployment, and maintenance, making the integration process as smooth as possible.',
          },
          {
            key: 'faqs-3',
            title: 'How do you approach API integration?',
            content:
              'Our approach to API integration starts with understanding your business requirements and goals. We then analyze your existing systems and identify the best way to integrate them to achieve the desired outcomes. Next, our team of experts designs and develops the APIs, ensuring they are secure, efficient, and easy to use. We also conduct thorough testing to ensure the integration works seamlessly and meets your needs. Finally, we provide ongoing maintenance and support to keep your API integrations up-to-date and performing optimally.',
          },
        ],
      },
    },
  },
  {
    category_id: 1,
    // Hero
    title: 'Design Library Development',
    slug: 'design-library-development',
    subtitle:
      'Partner with our experts to develop a comprehensive design library for your digital products.',
    hero_src: 'https://source.unsplash.com/PkbZahEG2Ng/1600x900',
    hero_alt: 'Library with stairs',
    // Seo
    seo: {
      title: 'Design Library Development',
      description:
        'Accelerate your development process with our design library development services. Create consistent and efficient user interfaces for your applications.',
    },
    // Sections
    sections: {
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
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'Our Design Library Development service encompasses a range of activities aimed at establishing and maintaining a robust design system for your organisation.',
        items: [
          {
            fa_icon: 'fa-pencil-ruler',
            title: 'Design research',
            subtitle:
              'We conduct in-depth research to understand your brand, target audience, and user interface requirements, ensuring that the design library reflects your unique identity and user needs.',
          },
          {
            fa_icon: 'fa-layer-group',
            title: 'Design system setup',
            subtitle:
              'We set up a comprehensive design system, including a library of reusable UI components, color palettes, typography guidelines, and design tokens.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Component development',
            subtitle:
              'Our team develops reusable design components with clean and maintainable code, ensuring consistency and efficiency in frontend development workflows.',
          },
          {
            fa_icon: 'fa-clone',
            title: 'Pattern documentation',
            subtitle:
              'We document design patterns and guidelines to provide clear instructions and examples for implementing consistent UI elements and interactions.',
          },
          {
            fa_icon: 'fa-paint-brush',
            title: 'Visual style definition',
            subtitle:
              'We define a cohesive visual style for your organisation, including color schemes, typography choices, iconography, and spacing guidelines.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Collaboration and training',
            subtitle:
              'We collaborate with your frontend development teams, providing training and support to ensure successful adoption and utilization of the design library.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Design Library Development Service and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is a design library important for my business?',
            content:
              'A design library streamlines the design and development process by providing a centralized repository of reusable components, design patterns, and guidelines. This helps your team create consistent, high-quality digital products faster and more efficiently. A design library also improves collaboration and ensures brand consistency across your digital products.',
          },
          {
            key: 'faqs-2',
            title:
              'What are the benefits of working with your Design Library Development Service?',
            content:
              'Our Design Library Development Service specializes in creating comprehensive design libraries tailored to your business needs. We work closely with you to understand your brand, design principles, and product requirements, and then develop a custom design library complete with reusable components, design patterns, and documentation. This enables your team to quickly and efficiently create new digital products while maintaining consistency and quality across your brand. We also assist in implementing your design library across your digital products, ensuring seamless integration and consistency.',
          },
          {
            key: 'faqs-3',
            title:
              'How do you ensure the design library is aligned with my brand guidelines?',
            content:
              'Our team of experts works closely with you to understand your brand guidelines, design principles, and product requirements. We then create reusable components and design patterns that adhere to your brand guidelines and are optimized for usability and accessibility. This ensures that your design library is aligned with your brand and helps maintain brand consistency across your digital products.',
          },
        ],
      },
    },
  },
  {
    category_id: 2,
    // Hero
    title: 'Application modernisation',
    slug: 'application-modernisation',
    subtitle:
      'Upgrade your legacy systems and applications to modern, scalable architectures to drive business growth and innovation.',
    hero_src: 'https://source.unsplash.com/jJT2r2n7lYA/1600x900',
    hero_alt: 'Aesthetic desk setup',
    // Seo
    seo: {
      title: 'Application modernisation',
      description:
        'modernise your applications with our frontend engineering services. Transform legacy systems into scalable, efficient, and user-friendly solutions.',
    },
    // Sections
    sections: {
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
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'To modernise your applications, we follow a comprehensive set of practices that include application assessment, architecture redesign, migration, and ongoing support.',
        items: [
          {
            fa_icon: 'fa-cogs',
            title: 'Application assessment',
            subtitle:
              'We assess your legacy applications to identify areas for improvement, evaluate technical debt, and prioritize modernisation efforts.',
          },
          {
            fa_icon: 'fa-layer-group',
            title: 'Architecture redesign',
            subtitle:
              'We redesign the application architecture to enhance scalability, modularity, and maintainability, ensuring it aligns with modern development practices.',
          },
          {
            fa_icon: 'fa-exchange-alt',
            title: 'Migration',
            subtitle:
              'We plan and execute a smooth migration process, including data migration, code refactoring, and integration with modern systems.',
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Performance optimization',
            subtitle:
              'We optimize application performance by identifying and resolving bottlenecks, improving response times, and implementing caching strategies.',
          },
          {
            fa_icon: 'fa-code-branch',
            title: 'Continuous improvement',
            subtitle:
              'We establish DevOps practices and implement automated testing, deployment, and monitoring to ensure ongoing improvement and stability of your modernised applications.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Collaboration',
            subtitle:
              'We work closely with your team, including business stakeholders and IT personnel, to ensure the modernisation process aligns with your business goals and requirements.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Application modernisation service and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title:
              'Why is application modernisation important for my business?',
            content:
              "Application modernisation is essential for businesses that want to stay competitive in today's fast-paced digital landscape. Upgrading legacy systems and applications enables you to improve performance, security, and maintainability, making it easier to innovate and scale. modernised applications can also lead to cost savings by reducing the resources needed to maintain outdated systems.",
          },
          {
            key: 'faqs-2',
            title:
              'What are the benefits of working with your Application modernisation service?',
            content:
              'Our Application modernisation service offers a comprehensive approach to modernising your legacy systems and applications, helping you to achieve your business goals more quickly and cost-effectively. Our team of experts has extensive experience in assessing, re-architecting, and migrating applications to modern, scalable architectures. We also leverage the latest technologies, development methodologies, and best practices to ensure that your modernised applications deliver maximum value to your business.',
          },
          {
            key: 'how-it-works-3',
            title: 'How do you approach application modernisation?',
            content:
              'We begin by assessing your existing systems and applications to identify opportunities for modernisation and establish priorities based on your business goals. We then develop a detailed roadmap outlining the steps needed to achieve your goals, setting milestones to track progress. Our team of experts re-architects your applications to leverage modern, scalable architectures, and we migrate your applications to the cloud to take advantage of flexible, scalable, and cost-effective infrastructure.',
          },
        ],
      },
    },
  },
  {
    category_id: 2,
    // Hero
    title: 'Performance Optimization',
    slug: 'performance-optimization',
    subtitle:
      'Improve your website speed, user experience, and search engine rankings with our performance optimization services.',
    hero_src: 'https://source.unsplash.com/M5tzZtFCOfs/1600x900',
    hero_alt: 'Collection of network cables',
    // Seo
    seo: {
      title: 'Performance Optimization',
      description:
        'Supercharge your frontend with microfrontend development. Build modular web apps for enhanced user experiences and faster development cycles.',
    },
    // Sections
    sections: {
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
              'Our team of experts will analyze your website, identify performance bottlenecks, and implement optimizations to ensure that your site loads quickly, runs smoothly, and provides a seamless experience for your users. With our performance optimization services, you can enjoy increased user satisfaction, higher engagement, and improved search engine rankings.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We use a combination of cutting-edge tools and best practices to optimize your website for performance, including code optimization, image optimization, and server configuration.',
        items: [
          {
            fa_icon: 'fa-clock',
            title: 'Page speed optimization',
            subtitle:
              'We optimize your website to load faster, ensuring a smooth user experience and improved search engine rankings.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Code optimization',
            subtitle:
              'We analyze and optimize your website code, reducing file sizes and improving overall performance.',
          },
          {
            fa_icon: 'fa-images',
            title: 'Image optimization',
            subtitle:
              'We optimize your images to reduce file sizes without sacrificing quality, improving your website load times.',
          },
          {
            fa_icon: 'fa-server',
            title: 'Server configuration',
            subtitle:
              'We optimize your server configuration to ensure that your website runs smoothly and efficiently.',
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Performance monitoring',
            subtitle:
              'We monitor your website performance to identify and address any issues that may arise, ensuring a consistently fast and smooth user experience.',
          },
          {
            fa_icon: 'fa-sync',
            title: 'Ongoing optimization',
            subtitle:
              'We provide ongoing optimization services to ensure that your website remains fast and efficient as it grows and evolves.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Performance Optimization Service and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is website performance important for my business?',
            content:
              'Website performance is crucial for user experience, engagement, and search engine rankings. Slow-loading pages can drive away potential customers, while poor performance can negatively impact your search engine rankings, making it harder for users to find your website.',
          },
          {
            key: 'faqs-2',
            title:
              'What are the benefits of working with your Performance Optimization Service?',
            content:
              'Our Performance Optimization Service helps you improve your website speed, user experience, and search engine rankings by identifying and addressing performance bottlenecks. We use a combination of cutting-edge tools and best practices to optimize your website, including code optimization, image optimization, and server configuration. With our performance optimization services, you can enjoy increased user satisfaction, higher engagement, and improved search engine rankings.',
          },
          {
            key: 'faqs-3',
            title: 'How do you optimize website performance?',
            content:
              'We optimize website performance by analyzing your website, identifying performance bottlenecks, and implementing optimizations to improve speed and user experience. This includes optimizing your code, images, and server configuration, as well as monitoring your website performance and providing ongoing optimization services to ensure that your site remains fast and efficient as it grows and evolves.',
          },
        ],
      },
    },
  },
  {
    category_id: 2,
    // Hero
    title: 'Microfrontend Development',
    slug: 'microfrontend-development',
    subtitle:
      'Empower your enterprise applications with scalable, maintainable, and efficient microfrontend architecture.',
    hero_src: 'https://source.unsplash.com/1600x900/?software-engineering',
    hero_alt: 'Zoomed in image of codes',
    // Seo
    seo: {
      title: 'Microfrontend Development',
      description:
        'Boost your frontend with microfrontend development. Scale applications, increase agility, and enhance user experiences with our expert services.',
    },
    // Sections
    sections: {
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
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'To build robust microfrontend applications, we follow a comprehensive set of practices that include module composition, independent deployment, shared libraries, and cross-team collaboration.',
        items: [
          {
            fa_icon: 'fa-cube',
            title: 'Module composition',
            subtitle:
              'We decompose your frontend application into modular microfrontend components, allowing independent development, testing, and deployment of each module.',
          },
          {
            fa_icon: 'fa-rocket',
            title: 'Independent deployment',
            subtitle:
              'We enable independent deployment of microfrontends, allowing teams to release updates and features without impacting the entire application.',
          },
          {
            fa_icon: 'fa-share-alt',
            title: 'Shared libraries',
            subtitle:
              'We develop shared libraries and design patterns to ensure consistency and code reuse across microfrontends, reducing duplication and improving development efficiency.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Integration and orchestration',
            subtitle:
              'We integrate and orchestrate microfrontends into a unified frontend application, providing seamless navigation, state management, and intercommunication between modules.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Cross-team collaboration',
            subtitle:
              'We facilitate collaboration between frontend development teams, ensuring alignment of architecture, standards, and best practices in building microfrontend applications.',
          },
          {
            fa_icon: 'fa-user-friends',
            title: 'Scalability and performance',
            subtitle:
              'We optimize the performance and scalability of microfrontend applications, leveraging caching, lazy loading, and dynamic module loading techniques.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Microfrontend Development Service and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title:
              'What are the benefits of using microfrontends for my enterprise applications?',
            content:
              'Microfrontends offer several benefits for enterprise applications, including improved scalability, maintainability, and development efficiency. By breaking down large frontend applications into smaller, more manageable pieces, microfrontends enable development teams to work independently, iterate faster, and deploy updates with minimal risk. They also promote the use of best practices in software engineering, leading to more modular, maintainable, and high-performing applications.',
          },
          {
            key: 'faqs-2',
            title: 'How does your Microfrontend Development Service work?',
            content:
              'Our Microfrontend Development Service offers end-to-end support for building enterprise-grade microfrontend applications. We start by helping you design a microfrontend architecture tailored to your specific needs and business goals. Our expert engineers then build modular, scalable, and efficient microfrontends using the latest technologies and best practices in frontend software engineering. We also specialize in dashboard development, integration with backend systems and APIs, and ongoing support and maintenance.',
          },
          {
            key: 'faqs-3',
            title:
              'What technologies and frameworks do you use for microfrontend development?',
            content:
              'Our team is well-versed in a wide range of frontend technologies and frameworks, including React, Angular, Vue, and Web Components. We also have experience with various microfrontend-specific tools and libraries, such as single-spa, Module Federation, and Bit. We work closely with you to choose the best technologies and frameworks for your specific application needs and business goals.',
          },
        ],
      },
    },
  },
  {
    category_id: 3,
    // Hero
    title: 'Staff Augmentation',
    slug: 'staff-augmentation',
    subtitle:
      'Expand your team with top-tier frontend software engineering and dashboard development experts, tailored to your enterprise needs.',
    hero_src: 'https://source.unsplash.com/1600x900/?staff-augmentation',
    hero_alt: 'Group discussion with laptops',
    // Seo
    seo: {
      title: 'Staff Augmentation',
      description:
        'Enhance your product team with our staff augmentation services. Access top talent to scale your development efforts and accelerate project delivery.',
    },
    // Sections
    sections: {
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
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'To augment your team effectively, we follow a comprehensive set of practices that include skill assessment, team integration, project management, and knowledge transfer.',
        items: [
          {
            fa_icon: 'fa-users',
            title: 'Skill assessment',
            subtitle:
              'We assess the skills and expertise required for your project to ensure the perfect match between your needs and our frontend engineers.',
          },
          {
            fa_icon: 'fa-handshake',
            title: 'Team integration',
            subtitle:
              'Our frontend engineers seamlessly integrate into your existing team, aligning with your development processes, communication channels, and project workflows.',
          },
          {
            fa_icon: 'fa-tasks',
            title: 'Project management',
            subtitle:
              'We collaborate closely with your project managers and stakeholders to ensure clear requirements, timely delivery, and effective project coordination.',
          },
          {
            fa_icon: 'fa-exchange-alt',
            title: 'Flexible engagement',
            subtitle:
              'We offer flexible engagement models, whether you need additional resources for a specific project or ongoing support for long-term collaboration.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'Skills expertise',
            subtitle:
              'Our frontend engineers possess expertise in various frontend technologies, including modern frameworks, libraries, and tools, ensuring the successful execution of your projects.',
          },
          {
            fa_icon: 'fa-graduation-cap',
            title: 'Knowledge transfer',
            subtitle:
              'We encourage knowledge sharing and provide documentation and training sessions to ensure the transfer of skills and expertise to your internal team.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Staff Augmentation service and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'What is staff augmentation?',
            content:
              'Staff augmentation is a flexible outsourcing strategy that allows you to add skilled professionals to your existing team on a short-term or long-term basis. It enables you to access specialized expertise and scale your team quickly, without the overhead of hiring full-time employees.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of staff augmentation?',
            content:
              'Staff augmentation offers several benefits, including cost savings, flexibility, access to specialized expertise, and reduced time-to-market. By augmenting your team with skilled professionals, you can quickly adapt to changing project requirements and ensure that your projects are completed on time and within budget.',
          },
          {
            key: 'faqs-3',
            title: 'Why should I choose your Staff Augmentation service?',
            content:
              'Our Staff Augmentation service provides you with top-tier frontend software engineering and dashboard development experts who are skilled in the latest technologies and best practices. We work closely with you to understand your unique our services accordingly, ensuring that you have the right professionals to help you achieve your project objectives.',
          },
        ],
      },
    },
  },
  {
    category_id: 3,
    // Hero
    title: 'Agile Development Teams',
    slug: 'agile-development-teams',
    subtitle:
      'Empower your business with our expert agile development teams, specializing in frontend software engineering and dashboard development.',
    hero_src: 'https://source.unsplash.com/Oalh2MojUuk/1600x900',
    hero_alt: 'Agile Development Team',
    // Seo
    seo: {
      title: 'Agile Development Teams',
      description:
        'Discover how our agile development teams can help your enterprise business succeed with frontend software engineering and dashboard development.',
    },
    // Sections
    sections: {
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
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'Our agile development teams bring expertise in frontend software engineering, dashboard development, and project management to deliver exceptional results for your enterprise projects.',
        items: [
          {
            fa_icon: 'fa-users',
            title: 'Dedicated teams',
            subtitle:
              'Our dedicated teams work exclusively on your projects, ensuring full focus and commitment to your business objectives.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Frontend software engineering',
            subtitle:
              'We specialize in developing high-quality frontend software solutions, using the latest technologies and best practices.',
          },
          {
            fa_icon: 'fa-chart-bar',
            title: 'Dashboard development',
            subtitle:
              'Our teams excel in creating intuitive, data-driven dashboards that help you make informed decisions and drive business growth.',
          },
          {
            fa_icon: 'fa-sync-alt',
            title: 'Agile methodologies',
            subtitle:
              'We follow agile methodologies, ensuring adaptability and flexibility to meet the changing needs of your enterprise projects.',
          },
          {
            fa_icon: 'fa-project-diagram',
            title: 'Project management',
            subtitle:
              'Our expert project managers oversee every aspect of your projects, ensuring seamless communication and timely delivery.',
          },
          {
            fa_icon: 'fa-handshake',
            title: 'Collaboration',
            subtitle:
              'We work closely with your team, fostering collaboration and knowledge-sharing to ensure the success of your projects.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Agile Development Teams service and how we can help your enterprise business succeed.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why are agile development teams important for my enterprise business?',
            content:
              'Development teams are crucial for enterprise businesses because they ensure faster delivery, adaptability to changing requirements, and improved collaboration. This results in higher-quality software solutions that align with your business goals and drive success.',
          },
          {
            key: 'faqs-2',
            title: 'What makes your Agile Development Teams stand out?',
            content:
              'Our Agile Development Teams stand out due to their expertise in frontend software engineering and dashboard development, dedication to your projects, and commitment to collaboration and communication. We work closely with your business to understand your unique requirements and deliver tailored solutions that drive success.',
          },
          {
            key: 'faqs-3',
            title: 'How do you ensure the success of my enterprise projects?',
            content:
              'We ensure the success of your enterprise projects by providing dedicated agile teams that specialize in frontend software engineering and dashboard development. Our expert project managers oversee every aspect of your projects, ensuring seamless communication, timely delivery, and alignment with your business goals.',
          },
        ],
      },
    },
  },
  {
    category_id: 3,
    // Hero
    title: 'Technical Leadership',
    slug: 'technical-leadership',
    subtitle:
      'Empower your software development projects with our experienced technical leaders and ensure success.',
    hero_src: 'https://source.unsplash.com/rxpThOwuVgE/1600x900',
    hero_alt: 'Man presenting to a group',
    // Seo
    seo: {
      title: 'Technical Leadership',
      description:
        'Enhance your product team with technical leadership. Leverage our expertise to drive innovation, streamline development, and achieve project success.',
    },
    // Sections
    sections: {
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
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'With our technical leadership services, we offer a range of capabilities that include architectural guidance, code reviews, performance optimization, team collaboration, and technical mentoring.',
        items: [
          {
            fa_icon: 'fa-layer-group',
            title: 'Architectural guidance',
            subtitle:
              'Our technical leaders provide architectural guidance to ensure the scalability, maintainability, and extensibility of your software projects.',
          },
          {
            fa_icon: 'fa-search-dollar',
            title: 'Code reviews',
            subtitle:
              'We conduct thorough code reviews to identify potential issues, ensure code quality, and promote best practices within your development team.',
          },
          {
            fa_icon: 'fa-tachometer-alt',
            title: 'Performance optimization',
            subtitle:
              'Our technical leaders optimize the performance of your software applications, ensuring fast response times, efficient resource utilization, and scalability.',
          },
          {
            fa_icon: 'fa-hands-helping',
            title: 'Team collaboration',
            subtitle:
              'We foster effective collaboration within your development team, promoting communication, knowledge sharing, and alignment towards project goals.',
          },
          {
            fa_icon: 'fa-chalkboard-teacher',
            title: 'Technical mentoring',
            subtitle:
              'Our technical leaders provide guidance, mentorship, and support to your developers, helping them enhance their technical skills and grow professionally.',
          },
          {
            fa_icon: 'fa-check-circle',
            title: 'Quality assurance',
            subtitle:
              'We ensure the quality of your software development projects by implementing best practices, testing strategies, and quality assurance processes.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Technical Leadership service and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title:
              'Why is technical leadership important for my software development projects?',
            content:
              'Technical leadership is crucial for the success of your software development projects, as it ensures that your projects are well-planned, organized, and executed. Technical leaders have a deep understanding of the latest technologies, best practices, and industry trends, and can guide your team through the complexities of frontend software engineering and dashboard development. They also foster a culture of collaboration, innovation, and continuous improvement, helping you build high-performing teams.',
          },
          {
            key: 'faqs-2',
            title:
              'What are the benefits of working with your Technical Leadership service?',
            content:
              'Our Technical Leadership service provides experienced leaders who can guide your team through the complexities of frontend software engineering and dashboard development, ensuring that your projects are delivered on time and within budget. Our technical leaders have a deep understanding of the latest technologies, best practices, and industry trends, and work closely with your team to ensure that your projects are built to the highest standards. They also foster a culture of collaboration, innovation, and continuous improvement, helping you build high-performing teams.',
          },
          {
            key: 'faqs-3',
            title: 'How do your technical leaders work with my team?',
            content:
              'Our technical leaders work closely with your team, providing guidance on software architecture, best practices, and industry trends. They also help you plan, organize, and execute your projects, ensuring that they are delivered on time and within budget. Additionally, they foster a culture of collaboration, innovation, and continuous improvement, helping you build high-performing teams.',
          },
        ],
      },
    },
  },
].map((item, i) => {
  return merge({}, MOCK_SERVICE_PAGE, {
    id: i + 1,
    overline: 'Service',
    // Category
    category: getCategoryFromCrudItem(item, MOCK_TECH_SERVICE_CATEGORYS),
    ...item,
  })
})

export const MOCK_GROUP_SERVICES = [
  {
    // Hero
    title: 'Product and Service Design',
    slug: 'product-and-service-design',
    category_id: 1,
    subtitle:
      'Create exceptional digital experiences for your enterprise clients with our expertise in frontend software engineering and dashboard development.',
    hero_src: 'https://source.unsplash.com/KxVlKiqQObU/1600x900',
    hero_alt: 'Person writing on a tablet',
    // Seo
    seo: {
      title: 'Product and Service Design',
      description:
        'This page is all about providing top-notch product and service design solutions for your enterprise clients.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Crafting digital experiences that delight your customers.',
        items: [
          {
            title:
              'In the highly competitive world of enterprise software, creating digital experiences that truly stand out is crucial. Our Product and Service Design team specializes in frontend software engineering and dashboard development to ensure your clients get the best possible user experience.',
          },
          {
            title:
              'Our focus is on building intuitive and efficient digital solutions that cater to the unique needs of your enterprise clients. We work closely with you to understand your clients\' business objectives and deliver tailored solutions that drive growth and enhance customer satisfaction.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'To design innovative products and services, we follow a comprehensive process that includes user research, ideation, prototyping, testing, and refinement.',
        items: [
          {
            fa_icon: 'fa-lightbulb',
            title: 'Creative ideation',
            subtitle:
              'We generate unique and creative ideas that align with your business objectives and user needs, setting the foundation for successful product and service design.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Strategic planning',
            subtitle:
              'We develop a strategic roadmap that outlines the steps and considerations needed to bring your product or service to life, ensuring alignment with your overall business strategy.',
          },
          {
            fa_icon: 'fa-pen-nib',
            title: 'Concept prototyping',
            subtitle:
              'We create interactive prototypes to visualize and validate the concepts, allowing for early feedback and iteration before moving into the development phase.',
          },
          {
            fa_icon: 'fa-users',
            title: 'User research',
            subtitle:
              'We conduct in-depth user research to understand the needs, preferences, and pain points of your target audience, informing the design process and ensuring user-centric solutions.',
          },
          {
            fa_icon: 'fa-check-circle',
            title: 'Usability testing',
            subtitle:
              'We conduct rigorous usability testing to evaluate the user experience and identify areas for improvement, ensuring a seamless and intuitive interaction with your product or service.',
          },
          {
            fa_icon: 'fa-chart-bar',
            title: 'Data-driven insights',
            subtitle:
              'We leverage data analytics and user feedback to gain valuable insights that inform iterative design decisions, optimizing the performance and effectiveness of your product or service.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Product and Service Design service and how we can help your enterprise clients.',
        items: [
          {
            key: 'faqs-1',
            title: 'What makes your Product and Service Design solutions stand out from the competition?',
            content:
              'Our Product and Service Design solutions stand out from the competition because of our specialization in frontend software engineering and dashboard development. We focus on creating digital experiences that are visually stunning, highly functional, and tailored to the unique needs of your enterprise clients. Our team of experts stays up-to-date with the latest frontend technologies and design principles, ensuring that your digital products are built to the highest standards.',
          },
          {
            key: 'faqs-2',
            title: 'What kind of clients do you work with?',
            content:
              'We primarily work with enterprise clients, helping them create exceptional digital experiences for their users. Our expertise in frontend software engineering and dashboard development allows us to deliver tailored solutions that cater to the specific needs of large organisations across various industries.',
          },
          {
            key: 'faqs-3',
            title: 'How do you ensure the quality of your digital products?',
            content:
              'To ensure the quality of our digital products, we follow a rigorous development process that includes in-depth research, prototyping, and testing. We work closely with your team to understand your clients\' business objectives and user needs, which helps us create digital solutions that are both visually stunning and highly functional. Additionally, we prioritize performance optimization, ensuring that your digital products run smoothly and efficiently, even with large amounts of data.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Cyber Security',
    slug: 'cyber-security',
    category_id: 1,
    subtitle:
      'Secure your digital assets with cutting-edge cyber security solutions tailored for your business.',
    hero_src: 'https://source.unsplash.com/1600x900/?cyber-security',
    hero_alt: 'Cyber Security',
    // Seo
    seo: {
      title: 'Cyber Security Services',
      description:
        'This page is all about providing cyber security solutions to protect your business from cyber threats.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Protecting your business from cyber threats.',
        items: [
          {
            title:
              'In today\'s interconnected world, cyber threats pose a significant risk to businesses of all sizes. Our Cyber Security service provides comprehensive protection for your digital assets, ensuring that your business remains secure and resilient against potential cyber attacks.',
          },
          {
            title:
              'Our team of experienced cyber security experts works closely with your organisation to develop a custom security strategy that meets your unique needs. From vulnerability assessments to incident response planning, we offer a full suite of services to help you safeguard your business against cyber threats.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We offer a comprehensive suite of cyber security services to help protect your business from cyber threats.',
        items: [
          {
            fa_icon: 'fa-shield-alt',
            title: 'Vulnerability assessments',
            subtitle:
              'We identify potential vulnerabilities in your digital infrastructure and provide recommendations for mitigating risks.',
          },
          {
            fa_icon: 'fa-lock',
            title: 'Security strategy',
            subtitle:
              'We develop a custom security strategy tailored to your business, ensuring that your digital assets are protected against potential threats.',
          },
          {
            fa_icon: 'fa-user-secret',
            title: 'Incident response planning',
            subtitle:
              'We help you create a comprehensive incident response plan, allowing your business to respond effectively to cyber attacks and minimize potential damage.',
          },
          {
            fa_icon: 'fa-network-wired',
            title: 'Network security',
            subtitle:
              'We implement robust network security measures to protect your organisation from unauthorized access and data breaches.',
          },
          {
            fa_icon: 'fa-cloud',
            title: 'Cloud security',
            subtitle:
              'We ensure that your cloud-based assets are secure and compliant with industry standards and regulations.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'Security awareness training',
            subtitle:
              'We provide security awareness training for your employees, ensuring that they understand their role in maintaining a secure digital environment.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Cyber Security services and how we can help protect your business from cyber threats.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is cyber security important for my business?',
            content:
              'Cyber security is crucial for businesses of all sizes, as it protects sensitive information, maintains business continuity, and safeguards your organisation\'s reputation. Cyber attacks can lead to financial loss, legal repercussions, and damage to your brand image. By investing in cyber security, you can minimize the risk of potential threats and ensure the safety of your digital assets.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of working with your Cyber Security Service?',
            content:
              'Working with our Cyber Security Service offers several benefits, including access to experienced cyber security experts, a custom security strategy tailored to your business, and comprehensive protection for your digital assets. We offer a wide range of services, from vulnerability assessments to incident response planning, ensuring that your organisation is well-prepared to defend against potential cyber threats.',
          },
          {
            key: 'faqs-3',
            title: 'How do you approach cyber security?',
            content:
              'We take a proactive approach to cyber security, working closely with your organisation to understand your unique needs and develop a custom security strategy. We utilize industry best practices, cutting-edge technology, and our team\'s extensive experience to safeguard your digital assets. Our services include vulnerability assessments, security strategy development, incident response planning, network security, cloud security, and security awareness training for your employees.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Technical Feasibility Study',
    slug: 'technical-feasibility-study',
    category_id: 1,
    subtitle:
      'Our experts conduct in-depth technical assessments to evaluate the viability of your software projects and help you make informed decisions.',
    hero_src: 'https://source.unsplash.com/1600x900/?feasibility-study',
    hero_alt: 'Feasibility Study',
    // Seo
    seo: {
      title: 'Technical Feasibility Study',
      description:
        'This page is about our Technical Feasibility Study services for evaluating the viability of your software projects.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Making informed decisions with confidence.',
        items: [
          {
            title:
              'A Technical Feasibility Study is a crucial step in the software development process, allowing you to evaluate the practicality and potential success of your projects. Our team of experts specializes in conducting comprehensive technical assessments that provide valuable insights into the feasibility, risks, and opportunities associated with your software projects.',
          },
          {
            title:
              'We understand the importance of making well-informed decisions in today\'s competitive landscape. Our in-depth evaluations empower you with the knowledge needed to navigate complex software projects and invest your resources wisely.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'Our Technical Feasibility Study services cover a wide range of aspects, including technology assessments, risk analysis, cost estimations, and more.',
        items: [
          {
            fa_icon: 'fa-laptop-code',
            title: 'Technology assessments',
            subtitle:
              'We evaluate the most suitable technologies and frameworks for your project, ensuring that it aligns with your technical requirements and objectives.',
          },
          {
            fa_icon: 'fa-chart-pie',
            title: 'Risk analysis',
            subtitle:
              'We identify and assess potential risks associated with your project, including technical, financial, and operational risks, to help you mitigate them effectively.',
          },
          {
            fa_icon: 'fa-dollar-sign',
            title: 'Cost estimations',
            subtitle:
              'We provide detailed cost estimations for your software projects, taking into account factors such as development time, resources, and technology choices.',
          },
          {
            fa_icon: 'fa-clock',
            title: 'Timeline projections',
            subtitle:
              'We establish realistic project timelines by evaluating development phases, resource allocation, and potential roadblocks.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Resource planning',
            subtitle:
              'We help you determine the optimal team structure and skillset required to successfully execute your software projects.',
          },
          {
            fa_icon: 'fa-lightbulb',
            title: 'Strategic recommendations',
            subtitle:
              'Based on our comprehensive assessments, we provide strategic recommendations to help you make informed decisions about your software projects.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Technical Feasibility Study services and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is a technical feasibility study important for my business?',
            content:
              'A technical feasibility study helps you identify potential challenges and risks associated with your software project before you invest significant resources. This enables you to make informed decisions, optimize your project plan, and ultimately improve the likelihood of success. It also helps you identify any gaps in your team capabilities or technology stack, allowing you to address these issues proactively.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of working with your Technical Feasibility Study Service?',
            content:
              'Our team of experts has extensive experience in frontend software engineering and dashboard development, giving us the knowledge and insights needed to evaluate the technical feasibility of your project effectively. We provide in-depth analysis, risk assessment, technology evaluation, team capabilities assessment, and comprehensive documentation and reporting, ensuring that you have all the information you need to make informed decisions about your project. We also work closely with your team throughout the process, ensuring a seamless and effective collaboration.',
          },
          {
            key: 'faqs-3',
            title: 'How do you conduct a technical feasibility study?',
            content:
              'We start by gaining a deep understanding of your project requirements and objectives. We then analyze the potential challenges and risks associated with your project, evaluating the technical feasibility of your proposed solution. This involves assessing the technology stack and tools required, as well as your team capabilities and skills. Throughout the process, we provide insights and recommendations to help you optimize your project plan and mitigate potential risks. Finally, we deliver comprehensive documentation and reports on our findings, giving you the information you need to make informed decisions about your project.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Sustainability Consulting',
    slug: 'sustainability-consulting',
    category_id: 1,
    subtitle:
      'Helping you create environmentally responsible software solutions for your business.',
    hero_src: 'https://source.unsplash.com/1600x900/?sustainability,consulting',
    hero_alt: 'Sustainability Consulting',
    // Seo
    seo: {
      title: 'Sustainability Consulting',
      description:
        'This page is all about helping businesses create environmentally responsible software solutions.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Creating sustainable software solutions for a better future.',
        items: [
          {
            title:
              'In today\'s world, businesses are becoming increasingly aware of their environmental impact and the importance of sustainability. At our Sustainability Consulting Service, we help you create environmentally responsible software solutions that not only contribute to a greener planet but also benefit your bottom line.',
          },
          {
            title:
              'Our team of experts is highly skilled in frontend software engineering and dashboard development, with a deep understanding of the latest sustainable technologies and practices. We work closely with your team to develop software solutions that are both eco-friendly and highly effective, helping you achieve your sustainability goals while also driving your business forward.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'To drive sustainable change, we employ a range of strategies and practices, including assessment, goal-setting, implementation, and measurement.',
        items: [
          {
            fa_icon: 'fa-chart-line',
            title: 'Sustainability assessment',
            subtitle:
              'We conduct comprehensive assessments of your enterprise to identify areas for improvement and opportunities for sustainability integration.',
          },
          {
            fa_icon: 'fa-seedling',
            title: 'Environmental impact reduction',
            subtitle:
              'We develop strategies and initiatives to minimize your enterprise\'s environmental footprint, including energy conservation, waste reduction, and resource optimization.',
          },
          {
            fa_icon: 'fa-globe',
            title: 'Sustainable sourcing and supply chain management',
            subtitle:
              'We help optimize your supply chain to promote sustainable sourcing, responsible procurement, and ethical practices throughout the value chain.',
          },
          {
            fa_icon: 'fa-people-arrows',
            title: 'Stakeholder engagement',
            subtitle:
              'We facilitate dialogue and engagement with stakeholders, including employees, customers, and communities, to foster a culture of sustainability and collective action.',
          },
          {
            fa_icon: 'fa-balance-scale',
            title: 'Social impact initiatives',
            subtitle:
              'We support the development of social impact initiatives that contribute to the well-being of communities and address social inequalities.',
          },
          {
            fa_icon: 'fa-flag-checkered',
            title: 'Measurement and reporting',
            subtitle:
              'We establish performance metrics and reporting frameworks to track progress, measure impact, and communicate sustainability achievements to stakeholders.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Sustainability Consulting services and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is sustainability important in software development?',
            content:
              'Sustainability in software development is crucial as it helps reduce the environmental impact of digital products and services. By adopting eco-friendly practices, businesses can decrease energy consumption, minimize waste, and reduce carbon emissions, ultimately contributing to a greener planet. Additionally, sustainable software development can lead to cost savings, improved brand reputation, and increased customer loyalty.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of working with your Sustainability Consulting Service?',
            content:
              'By working with our Sustainability Consulting Service, you can expect to receive expert guidance in creating environmentally responsible software solutions. Our team specializes in frontend software engineering and dashboard development, with a strong focus on sustainable technologies and practices. We help you identify the right technologies, develop data-driven dashboards, and provide ongoing support to ensure your solutions are both eco-friendly and effective. This collaboration will enable your business to achieve its sustainability goals while also driving growth and innovation.',
          },
          {
            key: 'faqs-3',
            title: 'How do you ensure that the software solutions you develop are sustainable?',
            content:
              'We take a comprehensive approach to sustainability in software development. Our team stays up-to-date with the latest advancements in sustainable technology and follows best practices to ensure eco-friendliness. We collaborate with your team to identify the most appropriate technologies and strategies for your specific needs, develop data-driven dashboards to track sustainability performance, and balance environmental considerations with performance requirements. This approach ensures that the solutions we develop meet your sustainability goals without sacrificing effectiveness or user experience.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'PoC Development',
    slug: 'poc-development',
    subtitle:
      'Accelerate innovation and minimize risk with our Proof of Concept Development Service for enterprise clients.',
    hero_src: 'https://source.unsplash.com/RX_0vwSPiWs/1600x900',
    hero_alt: 'Open book',
    // Seo
    seo: {
      title: 'PoC Development',
      description:
        'This page is all about our PoC Development Service, which specializes in frontend software engineering and dashboard development for enterprise clients.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Validate ideas and drive innovation with Proof of Concept Development.',
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
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We employ industry best practices to develop proof-of-concepts that showcase the potential and viability of your ideas.',
        items: [
          {
            fa_icon: 'fa-lightbulb',
            title: 'Idea validation',
            subtitle:
              'We help you validate your ideas and assess their feasibility through the development of proof-of-concepts.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Rapid prototyping',
            subtitle:
              'We utilize rapid prototyping techniques to quickly create functional prototypes that bring your ideas to life.',
          },
          {
            fa_icon: 'fa-check-circle',
            title: 'Proof-of-concept development',
            subtitle:
              'We develop proof-of-concepts that demonstrate the core features and functionalities of your ideas.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Technical feasibility assessment',
            subtitle:
              'We assess the technical feasibility and potential challenges of implementing your ideas through the development of proof-of-concepts.',
          },
          {
            fa_icon: 'fa-rocket',
            title: 'Innovation acceleration',
            subtitle:
              'We help accelerate innovation by providing tangible prototypes that can be presented to stakeholders and investors.',
          },
          {
            fa_icon: 'fa-comments',
            title: 'Collaborative approach',
            subtitle:
              'We collaborate closely with your team, incorporating feedback and iterating on the proof-of-concept to align with your vision and goals.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our PoC Development Service and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'What is the purpose of developing a Proof of Concept (PoC)?',
            content:
              'Developing a Proof of Concept (PoC) allows organisations to validate their ideas and ensure they are feasible, cost-effective, and viable in the marketplace. A well-executed PoC can help minimize risks, accelerate innovation, and provide valuable insights that inform decision-making and future development.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of working with your PoC Development Service?',
            content:
              'Our PoC Development Service specializes in frontend software engineering and dashboard development for enterprise clients. By working with us, you gain access to a team of experts dedicated to validating your ideas and creating tailored solutions that align with your business goals. Our collaborative approach ensures open communication and fosters a successful partnership, while our iterative development process allows for continuous improvement and adaptation.',
          },
          {
            key: 'faqs-3',
            title: 'How long does it typically take to develop a Proof of Concept?',
            content:
              'The time required to develop a Proof of Concept can vary depending on the complexity of the project, the availability of resources, and the specific needs of your organisation. In general, a PoC can take anywhere from a few weeks to several months to complete. Our team works closely with you to establish a realistic timeline that aligns with your goals and expectations.',
          },
        ],
      },
    },
    category_id: 2
  },
  {
    // Hero
    title: 'Application Development',
    slug: 'application-development',
    subtitle:
      'Leverage our expertise in frontend software engineering and dashboard development to create powerful applications for your enterprise.',
    hero_src: 'https://source.unsplash.com/9e9PD9blAto/1600x900',
    hero_alt: 'Phone homescreen with applications',
    // Seo
    seo: {
      title: 'Application Development',
      description:
        'This page showcases our capabilities in developing high-quality applications for enterprise clients, with a focus on frontend software engineering and dashboard development.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Driving business innovation through tailored application development.',
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
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We leverage cutting-edge technologies and industry best practices to develop robust and scalable applications.',
        items: [
          {
            fa_icon: 'fa-cogs',
            title: 'Custom application development',
            subtitle:
              'We develop custom enterprise applications tailored to your specific business requirements and goals.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Full-stack development',
            subtitle:
              'We have expertise in both frontend and backend development, allowing us to deliver end-to-end solutions.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'Enterprise integration',
            subtitle:
              'We seamlessly integrate your applications with existing systems to ensure data consistency and workflow optimization.',
          },
          {
            fa_icon: 'fa-cloud',
            title: 'Cloud deployment',
            subtitle:
              'We deploy applications on secure and scalable cloud platforms to ensure high performance and availability.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Security and compliance',
            subtitle:
              'We prioritize the security of your applications and ensure compliance with industry standards and regulations.',
          },
          {
            fa_icon: 'fa-rocket',
            title: 'Agile development',
            subtitle:
              'We follow agile development methodologies to deliver iterative and high-quality solutions within defined timelines.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Find out more about our Application Development service and how we can support your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'What industries do you serve with your Application Development service?',
            content:
              'We serve a wide range of industries with our Application Development service, including finance, healthcare, retail, manufacturing, and more. Our team has the expertise and experience to create tailored solutions that address the unique challenges and requirements of your industry.',
          },
          {
            key: 'faqs-2',
            title: 'What frontend technologies do you use for application development?',
            content:
              'Our team stays up-to-date with the latest frontend technologies and best practices. We primarily use popular and modern frameworks and libraries, such as React, Angular, and Vue.js, to develop high-quality, maintainable, and performant applications.',
          },
          {
            key: 'faqs-3',
            title: 'What is your development process?',
            content:
              'Our development process typically involves several stages: requirement gathering, planning, design, development, testing, and deployment. We work closely with your team throughout the process to ensure that the application meets your needs and expectations. Additionally, we follow an agile methodology, which allows us to iterate and improve the application based on feedback and changing requirements.',
          },
        ],
      },
    },
    category_id: 2
  },
  {
    // Hero
    title: 'Enterprise Applications',
    slug: 'enterprise-applications',
    subtitle:
      'Developing powerful frontend applications and dashboards for enterprise clients.',
    hero_src: 'https://source.unsplash.com/744oGeqpxPQ/1600x900',
    hero_alt: 'Laptop screen monitoring finances',
    // Seo
    seo: {
      title: 'Enterprise Applications',
      description:
        'This page is all about creating high-quality frontend applications and dashboards for enterprise clients.',
    },
    // Sections
    sections: {
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
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We specialize in frontend software engineering and dashboard development, delivering powerful applications that meet the demands of your enterprise.',
        items: [
          {
            fa_icon: 'fa-code',
            title: 'Frontend software engineering',
            subtitle:
              'Our team of skilled engineers uses modern frontend technologies and best practices to develop robust, maintainable, and high-performing applications.',
          },
          {
            fa_icon: 'fa-chart-bar',
            title: 'Dashboard development',
            subtitle:
              'We create custom dashboards that provide actionable insights and help you monitor the performance of your business processes and applications.',
          },
          {
            fa_icon: 'fa-desktop',
            title: 'Responsive design',
            subtitle:
              'We ensure that your applications and dashboards work seamlessly across all devices, providing an optimal user experience regardless of screen size.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Integration',
            subtitle:
              'Our team can integrate your frontend applications with your existing backend systems, ensuring seamless communication and data exchange.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'Collaboration',
            subtitle:
              'We work closely with your team throughout the development process, ensuring that your applications meet your business objectives and deliver value to your users.',
          },
          {
            fa_icon: 'fa-rocket',
            title: 'Agile development',
            subtitle:
              'We follow agile development methodologies to deliver iterative and high-quality solutions within defined timelines.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Enterprise Application Development services and how we can help your business thrive.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why should I invest in custom enterprise applications?',
            content:
              'Custom enterprise applications provide several benefits, including increased efficiency, improved collaboration, enhanced data security, scalability, and the ability to adapt to your specific business needs. By investing in custom software solutions, you can gain a competitive edge, streamline processes, and drive innovation within your organisation.',
          },
          {
            key: 'faqs-2',
            title: 'What industries do you serve with your Enterprise Application Development services?',
            content:
              'Our Enterprise Application Development services cater to a wide range of industries, including but not limited to finance, healthcare, manufacturing, logistics, retail, and telecommunications. We have experience working with diverse enterprises and can adapt our solutions to meet the unique requirements of your industry.',
          },
          {
            key: 'faqs-3',
            title: 'How do you ensure the security and scalability of enterprise applications?',
            content:
              'Security and scalability are paramount in enterprise applications. We follow industry best practices and employ robust security measures to protect your sensitive data and ensure compliance with relevant regulations. Our development approach focuses on scalability, allowing your software to accommodate future growth and evolving business needs.',
          },
        ],
      },
    },
    category_id: 2
  },
  {
    // Hero
    title: 'ERP Consulting',
    slug: 'erp-consulting',
    subtitle:
      'Maximize the potential of your enterprise software with our expert ERP consulting services.',
    hero_src: 'https://source.unsplash.com/g1Kr4Ozfoac/1600x900',
    hero_alt: 'Group of people working together',
    // Seo
    seo: {
      title: 'ERP Consulting',
      description:
        'Our ERP Consulting services help businesses optimize their enterprise software and streamline operations.',
    },
    // Sections
    sections: {
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
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We offer end-to-end ERP consulting services to enhance your business processes and drive digital transformation.',
        items: [
          {
            fa_icon: 'fa-lightbulb',
            title: 'ERP strategy development',
            subtitle:
              'We help you define a comprehensive ERP strategy that aligns with your business objectives and supports future growth.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'ERP selection and implementation',
            subtitle:
              'We assist you in selecting the right ERP solution for your business and ensure seamless implementation for maximum efficiency.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Business process optimization',
            subtitle:
              'We analyze and optimize your business processes to maximize the benefits of your ERP system and drive operational excellence.',
          },
          {
            fa_icon: 'fa-cloud',
            title: 'Cloud ERP integration',
            subtitle:
              'We help you leverage cloud-based ERP solutions to improve scalability, accessibility, and cost-effectiveness.',
          },
          {
            fa_icon: 'fa-chart-pie',
            title: 'Data analytics and reporting',
            subtitle:
              'We enable data-driven decision-making by implementing robust analytics and reporting capabilities within your ERP system.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Security and compliance',
            subtitle:
              'We ensure the security and compliance of your ERP system, protecting sensitive data and adhering to industry regulations.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our ERP Consulting Service and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is ERP consulting important for my business?',
            content:
              'ERP consulting is essential for businesses that want to optimize their ERP systems, streamline operations, and improve overall efficiency. Our expert consultants can help you identify areas for improvement, provide implementation support, develop custom frontend solutions, and guide your team through change management processes.',
          },
          {
            key: 'faqs-2',
            title: 'What industries can benefit from your ERP Consulting services?',
            content:
              'Our ERP Consulting services are suitable for businesses across a wide range of industries, including manufacturing, retail, healthcare, finance, and more. We have experience working with various ERP systems and can tailor our services to meet the unique needs of your business.',
          },
          {
            key: 'faqs-3',
            title: 'How do you ensure the success of an ERP implementation?',
            content:
              'We follow a structured approach to ERP implementation that involves assessing your current system, providing expert guidance and support throughout the implementation process, and assisting with change management. This approach helps minimize risks, maximize results, and ensure a smooth transition for your business.',
          },
        ],
      },
    },
    category_id: 2
  },
  {
    // Hero
    title: 'CRM Consulting',
    slug: 'crm-consulting',
    subtitle:
      'Maximize the potential of your CRM system with our expert consulting services.',
    hero_src: 'https://source.unsplash.com/OtHEYbQXLFU/1600x900',
    hero_alt: 'Open laptop',
    // Seo
    seo: {
      title: 'CRM Consulting',
      description:
        'This page is all about maximizing the potential of your CRM system with our expert consulting services.',
    },
    // Sections
    sections: {
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
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We offer end-to-end CRM consulting services to help you build and maintain strong customer relationships.',
        items: [
          {
            fa_icon: 'fa-users',
            title: 'CRM strategy development',
            subtitle:
              'We help you define a comprehensive CRM strategy that aligns with your business objectives and supports your customer-centric approach.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'CRM system selection and implementation',
            subtitle:
              'We assist you in selecting the right CRM solution for your business and ensure seamless implementation for maximum effectiveness.',
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Sales and marketing automation',
            subtitle:
              'We optimize your sales and marketing processes by implementing CRM automation features, enabling efficient lead management and targeted campaigns.',
          },
          {
            fa_icon: 'fa-cloud',
            title: 'CRM integration',
            subtitle:
              'We integrate your CRM system with other business tools and platforms to streamline data flow and enhance cross-functional collaboration.',
          },
          {
            fa_icon: 'fa-database',
            title: 'Data management and analytics',
            subtitle:
              'We help you manage and leverage customer data effectively, enabling data-driven decision-making and personalized customer experiences.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Security and privacy',
            subtitle:
              'We ensure the security and privacy of your customer data, implementing robust measures to protect sensitive information.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our CRM Consulting Service and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is CRM consulting important for my business?',
            content:
              'CRM consulting is crucial for businesses looking to maximize the potential of their CRM system. Our expert consultants can help you develop a tailored CRM strategy, implement the system effectively, optimize its performance, and provide ongoing support and training for your team. This ensures your CRM investment supports your business objectives and delivers maximum value, driving growth and improving customer relationships.',
          },
          {
            key: 'faqs-2',
            title: 'What types of CRM systems do you specialize in?',
            content:
              'Our team of CRM consultants has extensive experience with a wide range of CRM systems and platforms. We specialize in frontend software engineering and dashboard development, which allows us to create custom solutions for various CRM systems, ensuring they align with your business needs and objectives.',
          },
          {
            key: 'faqs-3',
            title: 'How do you ensure the success of a CRM implementation?',
            content:
              'We follow a structured approach to CRM implementation, starting with the development of a tailored CRM strategy that aligns with your business goals. Our team provides expert guidance and support throughout the implementation process, minimizing risks and ensuring a smooth transition. We also offer custom development, performance optimization, training, and ongoing support to ensure the continued success of your CRM system.',
          },
        ],
      },
    },
    category_id: 2
  },
  {
    // Hero
    title: 'Application Re-engineering',
    slug: 'application-re-engineering',
    subtitle:
      'Revitalize your software applications with our expert re-engineering services to enhance performance and user experience.',
    hero_src: 'https://source.unsplash.com/uOhBxB23Wao/1600x900',
    hero_alt: 'Two people discussing',
    // Seo
    seo: {
      title: 'Application Re-engineering',
      description:
        'Discover our Application Re-engineering services designed to optimize, modernise, and revamp your existing software applications.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Breathing new life into your software applications.',
        items: [
          {
            title:
              'In an ever-evolving digital landscape, outdated software applications can hinder your business growth and reduce efficiency. Our Application Re-engineering services are designed to help you optimize, modernise, and revamp your existing applications to meet today\'s technological demands and enhance user experience.',
          },
          {
            title:
              'Our team of experts specializes in frontend software engineering and dashboard development, focusing on enterprise clients. We work closely with you to identify bottlenecks, areas for improvement, and opportunities for innovation in your existing software applications, ultimately creating a more powerful and user-friendly solution.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We offer end-to-end application re-engineering services to modernise and optimize your legacy applications.',
        items: [
          {
            fa_icon: 'fa-code-branch',
            title: 'Legacy application assessment',
            subtitle:
              'We assess your existing applications to identify technological gaps, performance bottlenecks, and areas for improvement.',
          },
          {
            fa_icon: 'fa-refresh',
            title: 'Application migration and modernisation',
            subtitle:
              'We migrate your legacy applications to modern platforms and architectures, ensuring compatibility, scalability, and improved performance.',
          },
          {
            fa_icon: 'fa-tools',
            title: 'Functionality enhancement',
            subtitle:
              'We enhance the functionality of your legacy applications by introducing new features, improving workflows, and streamlining processes.',
          },
          {
            fa_icon: 'fa-expand-arrows-alt',
            title: 'Scalability and performance optimization',
            subtitle:
              'We optimize the performance and scalability of your applications to handle increased workloads and accommodate future growth.',
          },
          {
            fa_icon: 'fa-user',
            title: 'User experience improvement',
            subtitle:
              'We revamp the user interface and experience of your applications, making them more intuitive, user-friendly, and engaging.',
          },
          {
            fa_icon: 'fa-database',
            title: 'Data migration and integration',
            subtitle:
              'We migrate and integrate data from legacy systems into modern databases and applications, ensuring data integrity and accessibility.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Application Re-engineering services and how they can help your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is Application Re-engineering important for my business?',
            content:
              'Application Re-engineering is essential to ensure that your software applications stay up to date with the latest technological advancements and user expectations. By optimizing, modernising, and revamping your applications, you can increase efficiency, reduce costs, enhance user experience, and maintain a competitive edge in the market.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of working with your Application Re-engineering service?',
            content:
              'Our Application Re-engineering service focuses on frontend software engineering and dashboard development for enterprise clients. We work closely with you to analyze your existing applications, identify bottlenecks and areas for improvement, and provide innovative solutions to enhance their performance and user experience. By leveraging our expertise, your business can benefit from improved efficiency, reduced costs, and a more competitive position in the market.',
          },
          {
            key: 'faqs-3',
            title: 'How do you approach Application Re-engineering?',
            content:
              'We begin by analyzing your existing software applications to understand their current state and identify areas for improvement. We then work closely with your team to develop a plan for re-engineering, including code refactoring, performance optimization, user interface improvements, and dashboard development. Throughout the process, we prioritize communication and collaboration to ensure the re-engineered applications align with your business objectives and deliver value to your users.',
          },
        ],
      },
    },
    category_id: 2
  },
  {
    // Hero
    title: 'Cloud Migration',
    slug: 'cloud-migration',
    subtitle:
      'Simplify and streamline your transition to the cloud with our expert guidance and support.',
    hero_src: 'https://source.unsplash.com/sb7RUrRMaC4/1600x900',
    hero_alt: 'Motion blur tunnel',
    // Seo
    seo: {
      title: 'Cloud Migration',
      description:
        'This page is all about helping your business transition to the cloud with ease and efficiency.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Unlock the power of the cloud with our Cloud Migration services.',
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
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'Our cloud migration services cover every aspect of the process, from planning and strategy to implementation and post-migration support.',
        items: [
          {
            fa_icon: 'fa-cloud',
            title: 'Cloud assessment',
            subtitle:
              'We assess your existing infrastructure and applications to identify the best cloud solutions for your business needs.',
          },
          {
            fa_icon: 'fa-tasks',
            title: 'Migration planning',
            subtitle:
              'We develop a tailored migration plan, outlining the steps, timeline, and resources needed to ensure a seamless transition to the cloud.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Implementation',
            subtitle:
              'Our team executes the migration plan, ensuring minimal disruption to your business operations during the transition.',
          },
          {
            fa_icon: 'fa-check-circle',
            title: 'Post-migration support',
            subtitle:
              'We provide ongoing support and optimization to help you fully leverage the benefits of the cloud and maintain optimal performance.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Security and compliance',
            subtitle:
              'We ensure your cloud infrastructure adheres to industry best practices for security and compliance, safeguarding your data and applications.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Collaboration',
            subtitle:
              'We work closely with your team, fostering collaboration and knowledge transfer to ensure your organisation is fully prepared to manage your new cloud environment.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Cloud Migration services and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why should my business consider migrating to the cloud?',
            content:
              'Migrating to the cloud can provide your business with numerous benefits, such as cost savings, increased agility, improved scalability, and enhanced security. It also enables your organisation to leverage the latest technologies and innovations, making it easier to stay competitive in the digital landscape.',
          },
          {
            key: 'faqs-2',
            title: 'What are the main challenges of cloud migration?',
            content:
              'Some of the main challenges of cloud migration include selecting the right cloud provider and service, ensuring data security and compliance, minimizing downtime during the transition, and effectively managing the new cloud environment. Our Cloud Migration service is designed to help you navigate these challenges and ensure a seamless, successful migration.',
          },
          {
            key: 'faqs-3',
            title: 'How long does a typical cloud migration process take?',
            content:
              'The duration of a cloud migration process varies depending on the size and complexity of your organisation\'s infrastructure, as well as the specific cloud solutions being implemented. Our team works closely with your organisation to develop a tailored migration plan, providing a clear timeline and roadmap for the transition.',
          },
        ],
      },
    },
    category_id: 2
  },
  {
    // Hero
    title: 'Smart Team',
    slug: 'smart-team',
    subtitle:
      'Enhance your software development process with our experienced team of frontend engineers and dashboard developers.',
    hero_src: 'https://source.unsplash.com/mpN7xjKQ_Ns/1600x900',
    hero_alt: 'Group discussion in an office',
    // Seo
    seo: {
      title: 'Smart Team',
      description:
        'This page is all about our Smart Team service, providing enterprise clients with expert frontend engineering and dashboard development.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Empowering your development process with our expertise.',
        items: [
          {
            title:
              'In today\'s fast-paced digital landscape, having a skilled and experienced development team is crucial for success. Our Smart Team service provides enterprise clients with top-notch frontend engineers and dashboard developers, ensuring your projects are completed efficiently and effectively.',
          },
          {
            title:
              'Our team of experts is well-versed in the latest frontend technologies and dashboard development practices, enabling them to tackle even the most complex projects with ease. We work closely with your organisation to understand your specific needs and goals, delivering tailor-made solutions that drive results.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'Our smart team solutions cover a wide range of capabilities to ensure successful enterprise software development.',
        items: [
          {
            fa_icon: 'fa-users',
            title: 'Talent acquisition',
            subtitle:
              'We acquire top talent with the right skills and expertise to complement your existing team or form a dedicated development team.',
          },
          {
            fa_icon: 'fa-lightbulb',
            title: 'Innovation-driven development',
            subtitle:
              'We foster an innovation-driven development culture to generate creative ideas and deliver software solutions that drive business growth.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Agile methodologies',
            subtitle:
              'We embrace agile methodologies such as Scrum and Kanban to ensure flexibility, collaboration, and iterative development.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Full-stack development',
            subtitle:
              'Our smart team covers full-stack development, from frontend to backend, ensuring comprehensive and efficient software solutions.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Security and quality assurance',
            subtitle:
              'We prioritize security and quality assurance throughout the software development lifecycle to deliver robust and reliable solutions.',
          },
          {
            fa_icon: 'fa-handshake',
            title: 'Partnership and collaboration',
            subtitle:
              'We foster a strong partnership and collaboration with your team, aligning our efforts to your business goals and ensuring a seamless development process.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Smart Team service and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why should I choose your Smart Team service for my business?',
            content:
              'Our Smart Team service provides your business with highly skilled frontend engineers and dashboard developers who are experienced in working with enterprise clients. We are dedicated to understanding your unique needs and goals, delivering tailor-made solutions that drive results. Our team stays up-to-date with the latest industry trends and best practices, ensuring that your projects benefit from cutting-edge technologies and techniques.',
          },
          {
            key: 'faqs-2',
            title: 'What frontend technologies and frameworks do your engineers specialize in?',
            content:
              'Our frontend engineers are proficient in a wide range of modern technologies and frameworks, including React, Angular, Vue.js, and more. They are experienced in working with HTML, CSS, JavaScript, and other frontend languages, ensuring that your user interfaces are responsive, performant, and visually stunning.',
          },
          {
            key: 'faqs-3',
            title: 'How does your team approach dashboard development?',
            content:
              'Our dashboard developers create intuitive, data-driven dashboards that provide valuable insights, helping you make informed decisions for your business. We work closely with your organisation to understand your data needs and goals, and we use the latest dashboard development tools and best practices to create custom solutions that meet your specific requirements.',
          },
        ],
      },
    },
    category_id: 2
  },
  {
    // Hero
    title: 'Data Science',
    slug: 'data-science',
    subtitle:
      'Leverage the power of data to drive better decision-making, optimize processes, and gain actionable insights for your business.',
    hero_src: 'https://source.unsplash.com/1600x900/?data-science',
    hero_alt: 'Data Science',
    // Seo
    seo: {
      title: 'Data Science',
      description:
        'This page is all about harnessing the power of data to drive better decision-making and optimize processes for your business.',
    },
    // Sections
    sections: {
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
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'To deliver data-driven insights, we offer a range of services, including data analytics, machine learning, and dashboard development.',
        items: [
          {
            fa_icon: 'fa-chart-bar',
            title: 'Data analytics',
            subtitle:
              'We analyze your data to identify patterns, trends, and opportunities, helping you make informed decisions and drive growth.',
          },
          {
            fa_icon: 'fa-brain',
            title: 'Machine learning',
            subtitle:
              'We apply advanced machine learning techniques to your data, enabling you to predict outcomes, automate processes, and uncover hidden insights.',
          },
          {
            fa_icon: 'fa-tachometer-alt',
            title: 'Dashboard development',
            subtitle:
              'We design and develop custom dashboards that provide you with a real-time view of your business metrics, enabling you to monitor performance and make data-driven decisions.',
          },
          {
            fa_icon: 'fa-database',
            title: 'Data management',
            subtitle:
              'We help you manage your data effectively by implementing best practices for data storage, processing, and security.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Process optimization',
            subtitle:
              'We use data-driven insights to optimize your business processes, improving efficiency and reducing costs.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Collaboration',
            subtitle:
              'We work closely with your team to ensure that our data science solutions align with your business objectives and deliver maximum value.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Data Science services and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is data science important for my business?',
            content:
              'Data science enables you to make better decisions, optimize processes, and uncover new opportunities by analyzing and interpreting the data your business generates. By leveraging data science, you can gain actionable insights, improve customer experiences, and drive growth.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of working with your Data Science service?',
            content:
              'Our team of experienced data scientists and analysts work closely with your organisation to understand your business needs and develop custom solutions that address those needs. We offer a comprehensive suite of data science services, including data analytics, machine learning, dashboard development, data management, and process optimization. By working with us, you can unlock the full potential of your data and drive better decision-making, optimized processes, and improved customer experiences.',
          },
          {
            key: 'faqs-3',
            title: 'How do you approach data science projects?',
            content:
              'We take a collaborative approach to data science projects, working closely with your team to understand your business objectives and tailor our solutions to your needs. Our process typically begins with data exploration and analysis, followed by the development and deployment of custom data models or dashboards. Throughout the project, we prioritize clear communication, knowledge sharing, and the integration of our solutions with your existing systems and processes.',
          },
        ],
      },
    },
    category_id: 3
  },
  {
    // Hero
    title: 'Data Strategy',
    slug: 'data-strategy',
    subtitle:
      'Unlock the potential of your data with our expert data strategy services.',
    hero_src: 'https://source.unsplash.com/qWwpHwip31M/1600x900',
    hero_alt: 'Map with strings and pins',
    // Seo
    seo: {
      title: 'Data Strategy',
      description:
        'Discover the power of data strategy and how it can transform your business.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Unlocking the power of data for your business.',
        items: [
          {
            title:
              'In today\'s data-driven world, businesses that harness the power of data have a competitive edge. At our Data Strategy service, we specialize in helping enterprises unlock the potential of their data and develop data-driven strategies that drive growth and innovation.',
          },
          {
            title:
              'We believe that data is more than just numbers and statistics. It holds valuable insights that can guide strategic decision-making, optimize processes, and improve customer experiences. Our team of experts combines technical expertise with business acumen to develop tailored data strategies that align with your organisational goals and deliver tangible results.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We follow industry best practices to develop comprehensive data strategies that include data governance, data integration, data quality management, and data analytics.',
        items: [
          {
            fa_icon: 'fa-database',
            title: 'Data governance',
            subtitle:
              'We help establish data governance frameworks to ensure data integrity, privacy, and compliance across your organisation.',
          },
          {
            fa_icon: 'fa-link',
            title: 'Data integration',
            subtitle:
              'We integrate data from various sources and systems, enabling a unified view of your data for enhanced insights and decision-making.',
          },
          {
            fa_icon: 'fa-check-double',
            title: 'Data quality management',
            subtitle:
              'We implement data quality processes and tools to cleanse, validate, and enhance the accuracy and reliability of your data.',
          },
          {
            fa_icon: 'fa-chart-pie',
            title: 'Data analytics',
            subtitle:
              'We leverage advanced analytics techniques and tools to extract actionable insights from your data and drive data-informed decision-making.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Data infrastructure',
            subtitle:
              'We design and implement scalable and robust data infrastructure that supports your data strategy and enables efficient data processing and storage.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Data-driven culture',
            subtitle:
              'We help foster a data-driven culture within your organisation, empowering teams to leverage data in their day-to-day operations and decision-making.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Data Strategy service and how it can transform your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is data strategy important for my business?',
            content:
              'Data strategy is crucial for businesses because it enables them to unlock the potential of their data and use it strategically to gain insights, make informed decisions, improve operational efficiency, and drive innovation. A well-defined data strategy aligns data initiatives with business goals and ensures data quality, governance, and security.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of working with your Data Strategy service?',
            content:
              'By working with our Data Strategy service, you will benefit from our expertise in developing comprehensive data strategies tailored to your business needs. We have a deep understanding of data governance, integration, quality management, and analytics, and we can help you establish a data-driven culture within your organisation. Our goal is to empower you to leverage data effectively, optimize processes, and drive growth and innovation.',
          },
          {
            key: 'faqs-3',
            title: 'How do you approach data strategy development?',
            content:
              'We take a holistic approach to data strategy development, starting with a thorough assessment of your current data landscape, business goals, and challenges. Based on this analysis, we collaborate with your team to define a data strategy that aligns with your objectives. Our approach includes establishing data governance frameworks, designing data integration solutions, implementing data quality management processes, leveraging advanced analytics techniques, and creating a data-driven culture within your organisation.',
          },
        ],
      },
    },
    category_id: 3
  }  
].map((item, i) => {
  return merge({}, MOCK_SERVICE_PAGE, {
    id: i + 1,
    // Category
    category: getCategoryFromCrudItem(item, MOCK_GROUP_SERVICE_CATEGORYS),
    ...item,
    sections: {
      ...item.sections,
      cta: {
        hero_src: '/images/about_nodes_above_city.png',
        hero_alt: 'Laser net over city',
        overline: 'Get Started',
        title: 'Partnering with {appTitle}',
        subtitle:
          '{appTitle} partners with enterprise clients to tackle the most challenging software hurdles. With a keen focus on bespoke enterprise software development, we leverage leading technologies and methodologies tailored to your business requirements. Our approach is meticulously customized for each project, promising seamless collaboration with your team to choose the most suitable technologies. We shine in enterprise software development and consulting, and we are equipped to apply our knowledge and skills to your project, no matter its current stage in the product lifecycle.',
      },
      benefits: {
        overline: 'What we do',
        title: 'Empowering Digital Transformation',
        subtitle:
          '{appTitle} drives enterprise success through strategic technology consulting and bespoke software solutions that unlock growth and efficiency.',
        maxWidth: 'xl',
        center: true,
        items: [
          {
            fa_icon: 'fa-people-group',
            title: 'Advisory',
            subtitle:
              'Unlock growth and success with {appTitle}\'s business advisory services.',
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
      checklist: {
        overline: 'Why Us',
        title: `Why {appTitle} for {title}`,
        subtitle:
          'Unlocking the potential of enterprise technology through expert consulting and software development services tailored to drive your business growth.',
      },
    }
  })
})

export const MOCK_DESIGN_SERVICES = [
  {
    // Hero
    title: 'UX Strategy Consulting',
    slug: 'ux-strategy-consulting',
    category_id: 1,
    subtitle: 'Leverage our design expertise to formulate a user experience strategy that aligns with your business goals.',
    hero_src: 'https://source.unsplash.com/5QgIuuBxKwM/1600x900',
    hero_alt: 'Man explaining ideas at table',
    // Sections
    sections: {
      summary: {
        title: 'We provide strategic consulting to help you create compelling, user-friendly experiences that drive business success.',
        items: [
          {
            title:
              'An effective user experience (UX) strategy can transform your product and business. With our UX Strategy Consulting service, we assist you in defining and implementing a UX strategy that aligns with your business objectives and enhances your customer interactions. Our team of experts has a deep understanding of user-centered design and UX best practices. We work collaboratively with you to identify opportunities for improvement, deliver actionable insights, and guide your team in implementing these strategies.',
          },
        ],
      },
      features: {
        overline: 'What We Do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We combine deep UX knowledge with a strategic approach to help you optimize your user experience.',
        items: [
          {
            fa_icon: 'fa-user-check',
            title: 'User-Centered Design',
            subtitle:
              'We promote designs that prioritize the needs and expectations of your users.',
          },
          {
            fa_icon: 'fa-lightbulb',
            title: 'Innovative Thinking',
            subtitle:
              'We bring fresh ideas and perspectives to help you enhance your user experience.',
          },
          {
            fa_icon: 'fa-align-center',
            title: 'Strategic Alignment',
            subtitle:
              'We ensure your UX strategy aligns with your broader business objectives.',
          },
          {
            fa_icon: 'fa-comments',
            title: 'Communication & Collaboration',
            subtitle:
              'We believe in close collaboration and clear communication with your team throughout the process.',
          },
          {
            fa_icon: 'fa-hands-helping',
            title: 'Guidance & Support',
            subtitle:
              'We provide support and guidance for implementing the UX strategies we recommend.',
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Results-Oriented Approach',
            subtitle:
              'We focus on delivering strategies that can drive measurable improvements in your user experience.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our UX Strategy Consulting service and how it can benefit your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is a strong UX strategy important?',
            content:
              'A well-defined UX strategy guides the design and development process, ensuring your product is aligned with user needs and business goals. It can lead to enhanced user satisfaction, increased engagement, and ultimately, greater business success.',
          },
          {
            key: 'faqs-2',
            title: 'What can I expect from your UX Strategy Consulting service?',
            content:
              'Our service involves reviewing your current UX, identifying areas for improvement, and providing actionable strategies to enhance your user experience. We collaborate closely with your team, providing support and guidance throughout the implementation of these strategies.',
          },
          {
            key: 'faqs-3',
            title: 'How do you tailor your consulting to our specific needs?',
            content:
              'We start by understanding your business, your users, and your current UX. This allows us to provide tailored strategies that meet your unique needs and goals. We also offer ongoing support as you implement these strategies, helping you navigate any challenges that arise.',
          },
        ],
      },
    }
  },
  {
    // Hero
    title: 'Design Thinking Workshop',
    slug: 'design-thinking-workshop',
    category_id: 1,
    subtitle: 'Engage with design specialists to discover innovative solutions tailored for your enterprise.',
    hero_src: 'https://source.unsplash.com/zoCDWPuiRuA/1600x900',
    hero_alt: 'Board with post-its',
    // Sections
    sections: {
      summary: {
        title: 'Providing a transformative approach for innovative problem-solving in your business.',
        items: [
          {
            title:
              'In an era defined by rapid technological advancement, remaining innovative and responsive to market changes is vital. We equip your enterprise with a transformative approach to problem-solving, merging creativity and strategic thinking. Our team of experts employ a holistic, user-centric approach, ensuring that the solutions generated during our workshops align with your user needs and preferences. We help your enterprise uncover insights, spark fresh ideas, and prototype innovative solutions.',
          },
        ],
      },
      features: {
        overline: 'What We Do',
        title: 'Our {title} Capabilities',
        subtitle:
          'Our Design Thinking Workshops include a comprehensive approach: Empathy mapping, Ideation sessions, and Rapid prototyping.',
        items: [
          {
            fa_icon: 'fa-users',
            title: 'Empathy Mapping',
            subtitle:
              'We dive deep into understanding your customer needs and behaviors to build solutions that truly resonate.',
          },
          {
            fa_icon: 'fa-lightbulb',
            title: 'Ideation Sessions',
            subtitle:
              'Through collaborative brainstorming, we generate creative ideas to solve your business challenges.',
          },
          {
            fa_icon: 'fa-shapes',
            title: 'Rapid Prototyping',
            subtitle:
              'We quickly transform ideas into tangible prototypes, allowing for immediate feedback and iterative refinement.',
          },
          {
            fa_icon: 'fa-clipboard-list',
            title: 'Action Plan',
            subtitle:
              'We create a detailed action plan for implementing the solutions generated during the workshop.',
          },
          {
            fa_icon: 'fa-comments',
            title: 'Feedback Incorporation',
            subtitle:
              'We incorporate feedback from prototypes, refining ideas and ensuring their practicality.',
          },
          {
            fa_icon: 'fa-chart-bar',
            title: 'Result Analysis',
            subtitle:
              'We analyze the results of implemented solutions, measuring success and suggesting improvements.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Understand more about our Design Thinking Workshop and how it can stimulate innovation in your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is design thinking important for my business?',
            content:
              'Design thinking can bring a fresh perspective to problem-solving in your business. By empathizing with your customers, generating creative ideas, and quickly prototyping solutions, you can uncover new opportunities and respond to market changes more effectively.',
          },
          {
            key: 'faqs-2',
            title: 'What can I expect from your Design Thinking Workshop?',
            content:
              'Our workshops are designed to be collaborative, engaging, and productive. You\'ll work closely with our team of experts to understand your customers, brainstorm solutions, and prototype ideas. By the end of the workshop, you\'ll have a range of innovative solutions and a clear action plan for implementation.',
          },
          {
            key: 'faqs-3',
            title: 'Who should attend the Design Thinking Workshop?',
            content:
              'Anyone involved in product development, marketing, strategy, or customer experience would benefit from attending our workshop. Design thinking is a versatile approach that can be applied across various business functions.',
          },
        ],
      },
    }
  },
  {
    // Hero
    title: 'User Research and Insights',
    slug: 'user-research-insights',
    category_id: 1,
    subtitle: 'We identify underlying issues and key challenges from the perspectives of important stakeholders.',
    hero_src: 'https://source.unsplash.com/w00FkE6e8zE/1600x900',
    hero_alt: 'People sticking post-its',
    // Sections
    sections: {
      summary: {
        title: 'Understanding what matters for those who matter. ',
        items: [
          {
            title:
              'We dive deep into market research and conduct comprehensive jobs-to-be-done discovery. By understanding your target audience and their needs, we lay the foundation for creating a user-centric design that aligns with your business goals. Through in-depth research, we gather valuable insights that shape the direction of the project and inform our design decisions.',
          },
        ],
      },
      features: {
        overline: 'What We Do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We follow a systematic approach to user research, which includes user interviews, surveys, usability testing, and data analysis.',
        items: [
          {
            fa_icon: 'fa-user-friends',
            title: 'User Interviews',
            subtitle:
              'We conduct in-depth user interviews to understand user needs, motivations, and pain points.',
          },
          {
            fa_icon: 'fa-file-alt',
            title: 'Surveys',
            subtitle:
              "We design and distribute surveys to gather quantitative data about user behaviors and preferences.",
          },
          {
            fa_icon: 'fa-laptop-code',
            title: 'Usability Testing',
            subtitle:
              'We conduct usability tests to understand how users interact with your product and identify areas of improvement.',
          },
          {
            fa_icon: 'fa-chart-bar',
            title: 'Data Analysis',
            subtitle:
              'We analyze the data collected to uncover actionable insights and inform our design decisions.',
          },
          {
            fa_icon: 'fa-clipboard-check',
            title: 'Insights and Recommendations',
            subtitle:
              'We provide detailed reports on our findings, along with actionable recommendations for design improvements.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'User Persona Development',
            subtitle:
              'We create detailed user personas that guide our design process and ensure we create experiences that resonate with your target audience.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our User Research and Insights service and how we can help you better understand your users.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is user research important?',
            content:
              'User research helps us understand user needs, behaviors, and pain points. These insights inform our design decisions, ensuring we create products that are useful, usable, and desirable.',
          },
          {
            key: 'faqs-2',
            title: 'What methods do you use for user research?',
            content:
              'We use a variety of methods, including user interviews, surveys, usability testing, and data analysis. The methods we choose depend on the research objectives and the stage of the product development process.',
          },
          {
            key: 'faqs-3',
            title: 'How do the insights from user research inform your design process?',
            content:
              'The insights from user research help us understand what users want and need from a product. We use these insights to guide our design decisions, ensuring we create experiences that meet user needs and align with your business goals.',
          },
        ],
      },
    }
  },
  {
    // Hero
    title: 'Application Testing & Usability Evaluation',
    slug: 'application-testing-usability-evaluation',
    category_id: 1,
    subtitle: 'Ensure the highest quality and usability of your products with our comprehensive testing and evaluation services.',
    hero_src: 'https://source.unsplash.com/gcsNOsPEXfs/1600x900',
    hero_alt: 'Man highlighting paper',
    // Sections
    sections: {
      summary: {
        title: 'Providing assurance for your product quality.',
        items: [
          {
            title:
              'In today\'s digital landscape, the quality and usability of your application can significantly impact your business success. We offer detailed testing to identify and rectify any potential issues, ensuring a high-quality user experience. Our team of specialists uses a user-centric approach, focusing on ensuring that your application meets the needs and preferences of your target audience. We help your enterprise deliver efficient, reliable, and robust applications.',
          },
        ],
      },
      features: {
        overline: 'What We Do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We offer a wide range of testing and evaluation services to ensure the quality and usability of your applications.',
        items: [
          {
            fa_icon: 'fa-flask',
            title: 'Functional Testing',
            subtitle:
              'We validate the functionality of your applications to ensure they operate according to your specifications.',
          },
          {
            fa_icon: 'fa-user-check',
            title: 'Usability Testing',
            subtitle:
              'We evaluate the user-friendliness of your applications, ensuring they meet user expectations and industry standards.',
          },
          {
            fa_icon: 'fa-bug',
            title: 'Bug and Error Identification',
            subtitle:
              'We diligently identify and document bugs and errors for your development team to address.',
          },
          {
            fa_icon: 'fa-tasks',
            title: 'Performance Testing',
            subtitle:
              'We test the performance of your applications under different loads to ensure consistent performance.',
          },
          {
            fa_icon: 'fa-mobile-alt',
            title: 'Compatibility Testing',
            subtitle:
              'We check the compatibility of your applications on different devices, browsers, and operating systems.',
          },
          {
            fa_icon: 'fa-users',
            title: 'User Experience Evaluation',
            subtitle:
              'We evaluate the overall user experience of your applications, ensuring they are intuitive and user-friendly.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Application Testing & Usability Evaluation Service and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is application testing important for my business?',
            content:
              'Application testing is essential to ensure that your applications function correctly, provide a good user experience, and meet your business requirements. It helps identify and rectify issues before they impact your users, which can improve customer satisfaction and protect your business reputation.',
          },
          {
            key: 'faqs-2',
            title: 'What does usability evaluation involve?',
            content:
              'Usability evaluation involves assessing how user-friendly and intuitive your application is. This could include testing the interface, evaluating the user journey, and gathering user feedback. The goal is to ensure that users can easily navigate your application and successfully complete their intended tasks.',
          },
          {
            key: 'faqs-3',
            title: 'How do you ensure the quality of my application?',
            content:
              'Our team of experts conducts thorough testing and evaluation, using a combination of manual and automated testing techniques. We check functionality, usability, performance, and compatibility across different devices, browsers, and operating systems. We also conduct user experience evaluations to ensure your application is intuitive and user-friendly.',
          },
        ],
      },
    }
  },
  {
    // Hero
    title: 'Enterprise UI Library',
    slug: 'enterprise-ui-library',
    category_id: 2,
    subtitle: 'Understanding design needs with a comprehensive, flexible design library capable of supporting business growth.',
    hero_src: 'https://source.unsplash.com/hpIZ5T6SS-M/1600x900',
    hero_alt: 'Colourful wavy design',
    // Sections
    sections: {
      summary: {
        title: 'Focusing on creating scalable design libraries that fit the specific needs of enterprise-level clients.',
        items: [
          {
            title:
              'Our Enterprise UI Library service is designed to provide leading enterprises with a comprehensive collection of design assets, templates, and resources to support their UI/UX design efforts. With our carefully curated design library, enterprises can leverage a wealth of pre-designed components, layouts, and style guides that align with industry best practices and design standards, enabling them to streamline their design processes, improve consistency across products, and accelerate the development of user-effective interfaces.',
          },
        ],
      },
      features: {
        overline: 'What We Do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We create design libraries that help teams maintain consistency and speed up the design and development process.',
        items: [
          {
            fa_icon: 'fa-cubes',
            title: 'Component Library',
            subtitle:
              'We build a comprehensive library of reusable design components to promote consistency and streamline the design process.',
          },
          {
            fa_icon: 'fa-palette',
            title: 'Design System',
            subtitle:
              'We create a design system that includes style guides, design patterns, and other resources to guide your team in creating consistent user experiences.',
          },
          {
            fa_icon: 'fa-expand-arrows-alt',
            title: 'Scalability',
            subtitle:
              'We ensure that your UI library is scalable and can grow with your business.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'Team Collaboration',
            subtitle:
              'We facilitate better collaboration among your designers, developers, and stakeholders by providing a shared resource.',
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Performance Metrics',
            subtitle:
              'We monitor key performance indicators to measure the success and utilization of the UI library.',
          },
          {
            fa_icon: 'fa-handshake',
            title: 'Partnership',
            subtitle:
              'We work as an extension of your team, ensuring the UI library meets your business objectives and design needs.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Enterprise UI Library service and how it can benefit your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is an Enterprise UI Library important?',
            content:
              'An Enterprise UI Library promotes consistency in the user experience across different products or platforms. It also helps speed up the design and development process by providing a set of reusable design components. Additionally, it helps facilitate better collaboration among designers, developers, and stakeholders.',
          },
          {
            key: 'faqs-2',
            title: 'What can I expect from your Enterprise UI Library service?',
            content:
              'You can expect a comprehensive and scalable UI library that includes a component library and a design system. These tools are designed to help your team design and develop more efficiently and consistently. We also monitor performance metrics to ensure that the library is effectively utilized and meets your business objectives.',
          },
          {
            key: 'faqs-3',
            title: 'How do you ensure the UI library is scalable?',
            content:
              'We build the UI library with scalability in mind. We use modular and flexible design principles to ensure that the design components can be easily adapted and expanded to meet the growing needs of your business. We also provide ongoing support to help you update and expand the library as needed.',
          },
        ],
      },
    }
  },
  {
    // Hero
    title: 'Design System Implementation',
    slug: 'design-system-implementation',
    category_id: 2,
    subtitle: 'Build consistency, improve usability, and streamline your design process with our design system implementation service.',
    hero_src: 'https://source.unsplash.com/FlPc9_VocJ4/1600x900',
    hero_alt: 'People pointing at laptop',
    // Sections
    sections: {
      summary: {
        title: 'Aim to enhance the visual consistency and usability of your enterprise products.',
        items: [
          {
            title:
              'Design systems are instrumental in creating consistent, scalable, and efficient user experiences. We help you build a unified design language that streamlines your design process and enhances the usability of your enterprise products. Our team of experts uses a systematic approach, starting with understanding your brand and user needs, to create a design system that encapsulates your visual identity and promotes user-centric design.',
          },
        ],
      },
      features: {
        overline: 'What We Do',
        title: 'Our {title} Capabilities',
        subtitle:
          'To implement design systems of the highest quality, we rely on our extensive experience in product design and user experience development.',
        items: [
          {
            fa_icon: 'fa-palette',
            title: 'Design Language Definition',
            subtitle:
              'We define a comprehensive design language that represents your brand and meets the needs of your target audience.',
          },
          {
            fa_icon: 'fa-clipboard-check',
            title: 'Consistency Maintenance',
            subtitle:
              'We ensure consistency across your products to enhance the user experience and brand recognition.',
          },
          {
            fa_icon: 'fa-cubes',
            title: 'Component Library Creation',
            subtitle:
              'We create a reusable component library that streamlines your design and development process.',
          },
          {
            fa_icon: 'fa-user-cog',
            title: 'Usability Optimization',
            subtitle:
              'We focus on usability, making your products intuitive and user-friendly.',
          },
          {
            fa_icon: 'fa-expand',
            title: 'Scalability',
            subtitle:
              'We design scalable systems that grow with your business needs, ensuring long-term value.',
          },
          {
            fa_icon: 'fa-people-carry',
            title: 'Collaboration',
            subtitle:
              'We work closely with your team, ensuring the design system aligns with your business objectives and product requirements.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Design System Implementation Service and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why are design systems important for my business?',
            content:
              'Design systems bring consistency and efficiency to the product design and development process. They streamline communication among teams, reduce design and technical debt, and ensure a unified, recognizable brand presentation across your products.',
          },
          {
            key: 'faqs-2',
            title: 'What does the process of design system implementation look like?',
            content:
              'Our process involves understanding your brand and users, defining a comprehensive design language, maintaining visual consistency, creating a reusable component library, and focusing on usability. We also ensure the system is scalable to accommodate future business growth and needs.',
          },
          {
            key: 'faqs-3',
            title: 'How does a design system improve the user experience?',
            content:
              'Design systems promote consistency, which leads to better usability and a more predictable and recognizable user experience. They also streamline the design process, ensuring faster delivery of high-quality, user-centered designs.',
          },
        ],
      },
    }
  },
  {
    // Hero
    title: 'Design Principles & Guidelines',
    slug: 'design-principles-guidelines',
    category_id: 2,
    subtitle: 'Establish foundational design principles and guidelines that drive product design decisions and foster innovative solutions.',
    hero_src: 'https://source.unsplash.com/T6fDN60bMWY/1600x900',
    hero_alt: 'Design on screen',
    // Sections
    sections: {
      summary: {
        title: 'Ensure efficient, consistent, and high-quality product design with our carefully crafted design principles and guidelines.',
        items: [
          {
            title:
              'Design principles and guidelines are critical in guiding product design decisions and ensuring a consistent, high-quality user experience. Our service helps your organisation define these fundamental design tenets that align with your brand and meet your user needs. We believe that effective design principles are user-centered, clear, and adaptable. Our experienced team will work with you to define these principles and transform them into practical guidelines for your design team.',
          },
        ],
      },
      features: {
        overline: 'What We Do',
        title: 'Our {title} Capabilities',
        subtitle:
          'To establish effective design principles and guidelines, we bring together deep expertise in user experience design and a comprehensive understanding of your business context.',
        items: [
          {
            fa_icon: 'fa-bullseye',
            title: 'Targeted Principles',
            subtitle:
              'We help define targeted design principles that align with your brand and audience needs.',
          },
          {
            fa_icon: 'fa-book',
            title: 'Guidelines Creation',
            subtitle:
              'We translate these principles into clear, actionable guidelines for your design team.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'User-Centric Design',
            subtitle:
              'Our principles and guidelines always prioritize the needs and experiences of your users.',
          },
          {
            fa_icon: 'fa-clipboard-check',
            title: 'Consistency',
            subtitle:
              'Our principles promote consistency, ensuring a unified, recognizable user experience.',
          },
          {
            fa_icon: 'fa-brain',
            title: 'Innovation',
            subtitle:
              'By providing a clear design framework, we foster innovative, user-centered solutions.',
          },
          {
            fa_icon: 'fa-people-carry',
            title: 'Collaboration',
            subtitle:
              'We work closely with your team to ensure the principles and guidelines align with your business objectives and design vision.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Design Principles & Guidelines Service and how it can benefit your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why are design principles and guidelines important?',
            content:
              'Design principles and guidelines provide a shared understanding and framework for making design decisions. They foster consistency, improve usability, and guide the creation of innovative, user-centered solutions.',
          },
          {
            key: 'faqs-2',
            title: 'How does your service help establish these principles and guidelines?',
            content:
              'Our team works closely with you to understand your brand, your users, and your business objectives. We then define clear, user-centered design principles and translate these into actionable guidelines for your design team.',
          },
          {
            key: 'faqs-3',
            title: 'What is the benefit of user-centered design principles?',
            content:
              'User-centered design principles ensure that the needs and experiences of your users are at the forefront of all design decisions. This leads to improved user satisfaction, increased engagement, and ultimately, business success.',
          },
        ],
      },
    }
  },
  {
    // Hero
    title: 'Dashboard Design',
    slug: 'dashboard-design',
    category_id: 3,
    subtitle: 'Creating exceptional dashboard layouts that offer a seamless and intuitive user experience.',
    hero_src: 'https://source.unsplash.com/JKUTrJ4vK00/1600x900',
    hero_alt: 'Dashboard on screen',
    // Sections
    sections: {
      summary: {
        title: 'Offering clarity, supporting decision-making and enhancing productivity through well-designed enterprise platforms.',
        items: [
          {
            title:
              'We understand the importance of presenting summarized data in a clear and concise manner, allowing users to grasp key insights at a glance. We combine our expertise in UI/UX design, data visualization, and enterprise product design to create layouts that empower businesses with actionable insights. We enhance the usability, functionality, and visual appeal of enterprise platforms, driving improved decision-making and maximizing the value of their data.',
          },
        ],
      },
      features: {
        overline: 'What We Do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We bring together design, development, and data visualization expertise to deliver high-quality dashboards.',
        items: [
          {
            fa_icon: 'fa-chart-bar',
            title: 'Data Visualization',
            subtitle:
              'We design dashboard elements that present your data in a clear and compelling manner, using charts, graphs, and tables, to present information in easily digestible formats.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Functional Design',
            subtitle:
              'We create dashboards that offer robust functionality, allowing users to drill down and interact with the data. Our goal is to create a dashboard that not only looks visually appealing but also delivers actionable insights to drive informed decision-making.',
          },
          {
            fa_icon: 'fa-layer-group',
            title: 'Information Architecture',
            subtitle:
              'We prioritize establishing a hierarchy of information that flows naturally, ensuring that users can easily navigate and locate the most important data points. We carefully organize the layout, considering factors such as data relevance, user priorities, and visual aesthetics. ',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'User-Centric Approach',
            subtitle:
              'We keep your end users in mind throughout the design process, ensuring the final product is intuitive and easy to navigate.',
          },
          {
            fa_icon: 'fa-mobile-alt',
            title: 'Responsive Design',
            subtitle:
              'Our dashboard layouts are designed to be fully responsive, adapting seamlessly to different screen sizes and devices, allowing users to experience a consistent and optimized interface that allows for efficient data exploration.',
          },
          {
            fa_icon: 'fa-handshake',
            title: 'Partnership',
            subtitle:
              'We work closely with you throughout the project, ensuring your business needs and goals are met.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Dashboard Design service and how it can help your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is a well-designed dashboard important?',
            content:
              'A well-designed dashboard allows users to quickly understand and interact with data, supporting informed decision-making. It helps in monitoring key metrics, identifying trends, and spotting anomalies.',
          },
          {
            key: 'faqs-2',
            title: 'What can I expect from your Dashboard Design service?',
            content:
              'Our service delivers custom dashboards designed to meet your specific business needs. We ensure the dashboards are intuitive, visually appealing, and functional. This includes effective data visualization, responsive design, and a user-centric approach to design.',
          },
          {
            key: 'faqs-3',
            title: 'How do you ensure the dashboard meets our needs?',
            content:
              'We begin by understanding your business, your data, and your users. This informs our design process, ensuring we create a dashboard that aligns with your processes, presents your data effectively, and offers a great user experience.',
          },
        ],
      },
    }
  },
  {
    // Hero
    title: 'Web & Mobile App Design',
    slug: 'web-mobile-app-design',
    category_id: 3,
    subtitle: 'Designing exceptional applications built to elevate the enterprise user experience.',
    hero_src: 'https://source.unsplash.com/sv8oOQaUb-o/1600x900',
    hero_alt: 'Mobile wireframes on paper',
    // Sections
    sections: {
      summary: {
        title: 'Creating seamless, intuitive app designs targeted at user needs',
        items: [
          {
            title:
              'In the era of digital transformation, a well-designed application is crucial for business success. Our Web & Mobile App Design service focuses on creating designs that are not only visually captivating but also user-friendly, functional, and aligned with your business goals. Our design approach is centered around the user, ensuring that each application we design is intuitive, efficient, and offers a great user experience. We understand that each business is unique, and we tailor our designs to meet your specific needs and objectives.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'To design web and mobile applications, we bring together our expertise in UX/UI design and a deep understanding of your business needs.',
        items: [
          {
            fa_icon: 'fa-mobile-alt',
            title: 'Responsive Design',
            subtitle:
              'We ensure our designs are fully responsive, adapting seamlessly to different devices, allowing your app to deliver a great experience anywhere.',
          },
          {
            fa_icon: 'fa-compass',
            title: 'User Journey Mapping',
            subtitle:
              'We map out the user journey to create an intuitive and seamless user experience.',
          },
          {
            fa_icon: 'fa-layer-group',
            title: 'Prototyping',
            subtitle:
              'We create detailed prototypes to bring our designs to life and test usability.',
          },
          {
            fa_icon: 'fa-universal-access',
            title: 'Accessibility',
            subtitle:
              'We design with accessibility in mind, ensuring your app can be used by everyone.',
          },
          {
            fa_icon: 'fa-brain',
            title: 'Innovation',
            subtitle:
              'We leverage the latest design trends and technologies to create innovative app designs.',
          },
          {
            fa_icon: 'fa-people-arrows',
            title: 'Collaboration',
            subtitle:
              'We work closely with your team to ensure that the design aligns with your business goals and meets your customers’ needs.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Web & Mobile App Design Service and how it can help your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is a good app design important for my business?',
            content:
              'A well-designed app can significantly improve the user experience, leading to increased customer satisfaction and loyalty. It can also improve usability, increase engagement, and ultimately, drive business success.',
          },
          {
            key: 'faqs-2',
            title: 'What is your approach to app design?',
            content:
              'Our approach to app design is user-centric. We start by understanding your target audience and their needs. From there, we create user journeys and prototypes, which we continually test and refine. We also ensure that the design is aligned with your business goals and meets the needs of your users.',
          },
          {
            key: 'faqs-3',
            title: 'How do you ensure the app design is user-friendly and intuitive?',
            content:
              'We follow a user-centric design approach, which involves understanding the needs and behavior of your users. We create user journeys, prototypes, and conduct usability tests to ensure the design is intuitive and easy to use. We also design with accessibility in mind, making sure the app can be used by everyone.',
          },
        ],
      },
    }
  },
  {
    // Hero
    title: 'UI/UX Revamp',
    slug: 'ui-ux-revamp',
    category_id: 3,
    subtitle: 'Upgrade your business with an enhanced UI/UX design, created with the expertise of our specialized team.',
    hero_src: 'https://source.unsplash.com/wusOJ-2uY6w/1600x900',
    hero_alt: 'People discussing wireframes',
    // Sections
    sections: {
      summary: {
        title: 'Revamping UI/UX for a better user experience.',
        items: [
          {
            title:
              'In this digital age, having a cutting-edge UI/UX design is crucial for the success of any business. At our UI/UX Revamp Service, we focus on modernising and enhancing your interfaces to create a more enjoyable and intuitive user experience. We understand that the user is at the heart of every design. Our approach prioritizes user needs and expectations, ensuring an end product that is not just visually appealing but also functional and user-friendly.',
          },
        ],
      },
      features: {
        overline: 'What We Do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We revamp your UI/UX design by adopting the latest design trends and technologies, ensuring your product aligns with your users\' expectations.',
        items: [
          {
            fa_icon: 'fa-sync',
            title: 'Design modernisation',
            subtitle:
              'We modernise your design to align with current trends and user expectations, ensuring your product remains competitive.',
          },
          {
            fa_icon: 'fa-mobile-alt',
            title: 'Responsive design',
            subtitle:
              'We ensure your design works seamlessly across all devices for a consistent user experience.',
          },
          {
            fa_icon: 'fa-users',
            title: 'User-centered design',
            subtitle:
              'We put your users at the heart of the design process, creating designs that meet their needs and improve their experience.',
          },
          {
            fa_icon: 'fa-universal-access',
            title: 'Accessibility',
            subtitle:
              'We enhance the accessibility of your design, ensuring it can be used by everyone, regardless of their abilities or disabilities.',
          },
          {
            fa_icon: 'fa-layer-group',
            title: 'Prototyping & Testing',
            subtitle:
              'We create prototypes and conduct rigorous testing to ensure the revamped design is effective and user-friendly.',
          },
          {
            fa_icon: 'fa-handshake',
            title: 'Collaboration',
            subtitle:
              'We work closely with your team throughout the revamp process, ensuring the new design meets your business goals and objectives.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our UI/UX Revamp Service and how it can help your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is a UI/UX revamp important for my business?',
            content:
              'A UI/UX revamp can greatly improve the user experience, leading to increased user satisfaction and engagement. It can also help your product stay competitive by aligning with current design trends and user expectations.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of working with your UI/UX Revamp Service?',
            content:
              'Our UI/UX Revamp Service specializes in modernising and enhancing your interfaces to improve user experience. We adopt a user-centered approach, ensuring the revamped design is not just visually appealing, but also functional and user-friendly. We also prioritize accessibility, allowing your design to be used by everyone.',
          },
          {
            key: 'faqs-3',
            title: 'How do you approach the UI/UX revamp process?',
            content:
              'We start by understanding your users and their needs. We then create modern, user-friendly designs and prototypes, which we rigorously test for usability and accessibility. We also work closely with your team throughout the process, ensuring the new design aligns with your business goals and objectives.',
          },
        ],
      },
    }
  },
  {
    // Hero
    title: 'Design Team Augmentation',
    slug: 'design-team-augmentation',
    category_id: 3,
    subtitle: 'Boost your design projects by incorporating our specialized team into your existing infrastructure. Expand your design capabilities with our experienced and highly-skilled team.',
    hero_src: 'https://source.unsplash.com/bzqU01v-G54/1600x900',
    hero_alt: 'Man pointing to computer screen',
    // Sections
    sections: {
      summary: {
        title: 'Expand your design capabilities with our experienced and highly-skilled team.',
        items: [
          {
            title:
              'We provide skilled professionals to integrate seamlessly into your team, enhancing your design capabilities and helping you meet project goals efficiently. Our experts specialize in enterprise product design and user experience development, bringing their wealth of experience to deliver innovative solutions tailored to your business needs.',
          },
        ],
      },
      features: {
        overline: 'What We Do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We supplement your team with expertise in enterprise product design and user experience development, ensuring your projects are completed with efficiency and excellence.',
        items: [
          {
            fa_icon: 'fa-users-cog',
            title: 'Team Integration',
            subtitle:
              'Our professionals integrate seamlessly into your team, providing the additional support and skills necessary to drive your projects forward.',
          },
          {
            fa_icon: 'fa-briefcase',
            title: 'Enterprise Expertise',
            subtitle:
              'We bring specialized expertise in enterprise product design and user experience development to your projects.',
          },
          {
            fa_icon: 'fa-tasks',
            title: 'Increased Productivity',
            subtitle:
              'By supplementing your team, we increase productivity, allowing for faster project completion and improved results.',
          },
          {
            fa_icon: 'fa-brain',
            title: 'Innovative Solutions',
            subtitle:
              'Our team brings fresh ideas and perspectives, helping to drive innovative solutions for your business.',
          },
          {
            fa_icon: 'fa-clock',
            title: 'Flexibility',
            subtitle:
              'We provide resources on-demand, providing flexibility to scale up or down based on your project requirements.',
          },
          {
            fa_icon: 'fa-hands-helping',
            title: 'Collaboration',
            subtitle:
              'We work closely with your team to ensure our efforts align with your business goals and objectives.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Design Team Augmentation Service and how it can help your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'What is Design Team Augmentation?',
            content:
              'Design Team Augmentation is a service that provides businesses with skilled design professionals who can seamlessly integrate into your existing team to help boost productivity, bring in specialized expertise, and drive innovation.',
          },
          {
            key: 'faqs-2',
            title: 'How can Design Team Augmentation benefit my business?',
            content:
              'Design Team Augmentation can provide numerous benefits. It can help increase your team’s capacity, bringing in experts who specialize in enterprise product design and user experience development. This can lead to faster project completion, innovative solutions, and ultimately, better business outcomes.',
          },
          {
            key: 'faqs-3',
            title: 'How does your Design Team Augmentation service work?',
            content:
              'We provide design professionals who can integrate into your team, understanding your project requirements and working towards your business goals. We offer flexibility, allowing you to scale up or down based on your needs. Our experts are skilled in enterprise product design and user experience development, providing you with high-quality solutions.',
          },
        ],
      },
    }
  },
].map((item, i) => {
  return merge({}, MOCK_SERVICE_PAGE, {
    id: i + 1,
    // Category
    category: getCategoryFromCrudItem(item, MOCK_DESIGN_SERVICE_CATEGORYS),
    ...item,
    seo: {
      title: item.title,
      description: item.subtitle
    },
    sections: {
      ...item.sections,
      cta: {
        hero_src: '/images/about_nodes_above_city.png',
        hero_alt: 'Laser net over city',
        overline: 'Get Started',
        title: 'Partnering with {appTitle}',
        subtitle:
          '{appTitle} collaborates with enterprises to create captivating and intuitive UI/UX designs for web and mobile interfaces. We excel at translating complex ideas into visually appealing and user-friendly interfaces, elevating your digital presence and driving customer satisfaction. Together, we create designs that leave a lasting impression and set your enterprise apart.',
      },
      benefits: {
        overline: 'What we do',
        title: 'Design Thinking for Enterprises',
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
      checklist: {
        overline: 'Why Us',
        title: `Why {appTitle} for {title}`,
        subtitle:
          'Unlocking the potential of enterprise technology through personalized design thinking processes tailored to drive your business growth.',
      },
    }
  })
})

export const MOCK_DATA_SERVICES = [
  {
    // Hero
    category_id: 1,
    title: 'Predictive Analytics',
    slug: 'predictive-analytics',
    subtitle: 'Leverage the power of data, statistical algorithms, and machine learning techniques for more accurate business forecasts.',
    hero_src: 'https://source.unsplash.com/xU5Mqq0Chck/1600x900',
    hero_alt: 'Sunrise lensball',
    // Sections
    sections: {
      summary: {
        title: 'Turning current data into actionable insights of the future.',
        items: [
          {
            title:
              'In a world powered by data, predictive analytics can make the difference between staying ahead or falling behind. With our predictive analytics services, we enable you to anticipate trends, predict future outcomes, and make data-driven decisions. We combine our expertise in data science, statistics, and machine learning to analyze current data and make accurate predictions about the future. This empowers your business to identify opportunities, mitigate risks, and create strategic plans for success.',
          },
        ],
      },
      features: {
        overline: 'What We Do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We are experts in extracting value from data, using advanced statistical techniques and machine learning models.',
        items: [
          {
            fa_icon: 'fa-chart-line',
            title: 'Data Analysis',
            subtitle:
              'We analyze your data to identify patterns and trends, providing a solid foundation for accurate predictions.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Machine Learning Models',
            subtitle:
              'We apply machine learning models to your data, enhancing the accuracy of our predictive analytics.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Risk Management',
            subtitle:
              'Our predictive models help you identify potential risks and develop strategies to mitigate them.',
          },
          {
            fa_icon: 'fa-lightbulb',
            title: 'Insight Generation',
            subtitle:
              'We transform complex data into actionable insights that can drive decision-making and strategic planning.',
          },
          {
            fa_icon: 'fa-sync-alt',
            title: 'Continuous Optimization',
            subtitle:
              'Our models are continuously updated and optimized to reflect changes in your data and ensure accurate predictions.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'Collaborative Approach',
            subtitle:
              'We work closely with your team to understand your business objectives and tailor our predictive analytics to meet your specific needs.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Predictive Analytics Service and how we can empower your business decision making.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is predictive analytics important for my business?',
            content:
              'Predictive analytics can help your business anticipate future trends, identify opportunities, and make data-driven decisions. It provides a competitive edge by enabling you to understand customer behavior, predict market trends, manage risks, and optimize operational efficiency.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of using your Predictive Analytics Service?',
            content:
              'We use a blend of data science expertise, advanced statistical techniques, and machine learning models to provide accurate predictive insights. Our team works closely with you to understand your specific business needs and tailor our solutions accordingly. We focus on transforming complex data into actionable insights that drive strategic planning and decision-making.',
          },
          {
            key: 'faqs-3',
            title: 'How do you ensure the accuracy of your predictions?',
            content:
              'Accuracy in predictive analytics is a result of quality data, appropriate model selection, and rigorous testing. We start with comprehensive data analysis to understand the patterns and trends. Then we choose or develop a predictive model that best suits your data and objectives. After making predictions, we validate our model against actual outcomes and refine it continuously to enhance its accuracy over time.',
          },
        ],
      },
    }
  },
  {
    // Hero
    category_id: 1,
    title: 'AI Automation',
    slug: 'ai-automation',
    subtitle: 'Leverage cutting-edge AI technologies to automate and streamline your business processes.',
    hero_src: 'https://source.unsplash.com/UqCCSbAIaDU/1600x900',
    hero_alt: '3D printer',
    // Sections
    sections: {
      summary: {
        title: 'Unlock the potential of AI for streamlined automation.',
        items: [
          {
            title:
              'In the era of digital transformation, AI plays a pivotal role in automating and optimizing business processes. We specialize in harnessing the power of AI to streamline operations, improve efficiency, and drive innovation. We believe that AI automation goes beyond cost reduction; it empowers enterprises to unlock new opportunities and gain a competitive edge. Our team of experts combines cutting-edge AI technologies with deep industry knowledge to deliver tailored automation solutions that transform businesses.',
          },
        ],
      },
      features: {
        overline: 'What We Do',
        title: 'Our {title} Capabilities',
        subtitle:
          'With our AI automation services, we help businesses reduce operational costs, increase efficiency, and stay competitive in the digital age.',
        items: [
          {
            fa_icon: 'fa-robot',
            title: 'Intelligent Process Automation',
            subtitle:
              'We implement AI-driven solutions that can understand, learn and adapt, automating complex business processes and tasks.',
          },
          {
            fa_icon: 'fa-network-wired',
            title: 'IT Operations Automation',
            subtitle:
              'We automate IT operations, improving efficiency and reducing the risk of errors.',
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Data Analysis Automation',
            subtitle:
              'Our AI solutions can automatically analyze large volumes of data, providing valuable insights and freeing up your team to focus on decision-making.',
          },
          {
            fa_icon: 'fa-headset',
            title: 'Customer Service Automation',
            subtitle:
              'We can automate your customer service operations, reducing response times and improving customer satisfaction.',
          },
          {
            fa_icon: 'fa-tools',
            title: 'Maintenance and Support',
            subtitle:
              'We offer ongoing maintenance and support, ensuring that your AI systems are always up to date and performing optimally.',
          },
          {
            fa_icon: 'fa-project-diagram',
            title: 'Custom AI Solutions',
            subtitle:
              'We design and implement custom AI solutions to meet your unique business needs and objectives.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our AI Automation Service and how it can revolutionize your business processes.',
        items: [
          {
            key: 'faqs-1',
            title: 'What are the benefits of AI automation for enterprises?',
            content:
              'AI automation brings numerous benefits to enterprises, including increased operational efficiency, cost reduction, improved accuracy, enhanced customer experiences, and the ability to leverage data for strategic decision-making.',
          },
          {
            key: 'faqs-2',
            title: 'How can AI automation be implemented in my business?',
            content:
              'The implementation of AI automation in your business involves identifying suitable use cases, assessing data availability and quality, selecting appropriate AI technologies, and partnering with experts who can design and deploy tailored automation solutions.',
          },
          {
            key: 'faqs-3',
            title: 'What industries can benefit from AI automation?',
            content:
              'AI automation can benefit a wide range of industries, including finance, healthcare, manufacturing, retail, logistics, customer service, and more. Virtually any sector that deals with data-driven processes can leverage AI automation to gain efficiency and competitive advantages.',
          },
        ],
      },
    }
  },
  {
    // Hero
    category_id: 1,
    title: 'ChatGPT Integration',
    slug: 'chatgpt-integration',
    subtitle: 'Enhance your digital capabilities with AI powered by ChatGPT.',
    hero_src: 'https://source.unsplash.com/agFmImWyPso/1600x900',
    hero_alt: 'ChatGPT logo',
    // Sections
    sections: {
      summary: {
        title: 'Transform your applications with ChatGPT.',
        items: [
          {
            title:
              'Conversational AI is revolutionizing customer experiences and business interactions. With our ChatGPT Integration Service, we specialize in incorporating ChatGPT, a powerful language model, into your applications to enable natural and engaging conversations with your users. We believe that effective communication plays a critical role in driving customer satisfaction and business success. Our team of experts leverages ChatGPT to create intelligent chatbots, virtual assistants, and other conversational interfaces that deliver personalized and context-aware interactions.',
          },
        ],
      },
      features: {
        overline: 'What We Do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We offer a range of ChatGPT integration capabilities to enable seamless and dynamic conversational experiences.',
        items: [
          {
            fa_icon: 'fa-comments',
            title: 'Chatbot Development',
            subtitle:
              'Design and develop intelligent chatbots that can understand user queries, provide relevant responses, and perform actions.',
          },
          {
            fa_icon: 'fa-comments-dollar',
            title: 'Customer Support Automation',
            subtitle:
              'Automate customer support processes by integrating ChatGPT to handle frequently asked questions, provide instant assistance, and escalate complex issues to human agents when needed.',
          },
          {
            fa_icon: 'fa-medkit',
            title: 'Healthcare Virtual Assistants',
            subtitle:
              'Create virtual assistants powered by ChatGPT to assist healthcare professionals, patients, and caregivers by providing medical information, appointment scheduling, and personalized guidance.',
          },
          {
            fa_icon: 'fa-desktop',
            title: 'Interactive Interfaces',
            subtitle:
              'Build interactive conversational interfaces for applications, websites, and messaging platforms to enable seamless user interactions and personalized recommendations.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Developer Tools and APIs',
            subtitle:
              'Provide developers with tools, APIs, and documentation for easy integration of ChatGPT into their applications and systems.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Customization and Training',
            subtitle:
              'Tailor ChatGPT to your specific domain and requirements by training it on your custom datasets and fine-tuning the model for optimal performance.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our ChatGPT Integration Service and how it can enhance your applications.',
        items: [
          {
            key: 'faqs-1',
            title: 'What is ChatGPT?',
            content:
              'ChatGPT is an advanced language model developed by OpenAI that can generate human-like responses and hold context-rich conversations. It uses deep learning techniques to understand and generate text based on the input it receives.',
          },
          {
            key: 'faqs-2',
            title: 'How can ChatGPT benefit my applications?',
            content:
              'By integrating ChatGPT into your applications, you can provide natural and interactive conversational experiences to your users. ChatGPT can assist with tasks, answer questions, provide recommendations, and engage users in dynamic conversations, enhancing user satisfaction and improving overall user experience.',
          },
          {
            key: 'faqs-3',
            title: 'Is ChatGPT customizable for specific domains?',
            content:
              'Yes, ChatGPT can be customized for specific domains by training it on domain-specific datasets and fine-tuning the model. This allows ChatGPT to provide more accurate and relevant responses tailored to your application and industry.',
          },
        ],
      },
    }
  },
  {
    // Hero
    category_id: 1,
    title: 'Prompt Engineering',
    slug: 'prompt-engineering',
    subtitle: 'Leverage the power of AI to improve engagement and increase conversions with personalized, context-aware prompts. ',
    hero_src: 'https://source.unsplash.com/ZJKE4XVlKIA/1600x900',
    hero_alt: 'Miniature blocks and train tracks',
    // Sections
    sections: {
      summary: {
        title: 'Transforming interactions with intelligent prompts.',
        items: [
          {
            title: 'In the age of personalization, intelligent prompts can significantly enhance user engagement and satisfaction. We design AI-powered prompts that are timely, relevant, and context-aware, creating a personalized experience for each user. Working with enterprise clients, we leverage deep learning and AI to create prompts that resonate with users and drive conversions. Our prompts are designed to feel natural, improving user experience and boosting customer loyalty.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'Harness the power of AI and data science to deliver intelligent, personalized prompts.',
        items: [
          {
            fa_icon: 'fa-brain',
            title: 'AI-driven prompts',
            subtitle:
              'We utilize advanced AI algorithms to generate prompts that engage users and drive interactions.',
          },
          {
            fa_icon: 'fa-clock',
            title: 'Timely delivery',
            subtitle:
              'Our systems ensure that prompts are delivered at the most appropriate times for maximized effectiveness.',
          },
          {
            fa_icon: 'fa-sync',
            title: 'Context-aware',
            subtitle:
              'We design prompts that take into account the context of the user for increased personalization and relevance.',
          },
          {
            fa_icon: 'fa-chart-bar',
            title: 'Performance optimization',
            subtitle:
              'We constantly analyze the performance of our prompts and make adjustments to optimize their effectiveness.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'User-centric design',
            subtitle:
              'We design prompts with the user in mind, ensuring a seamless and satisfying user experience.',
          },
          {
            fa_icon: 'fa-puzzle-piece',
            title: 'Integration support',
            subtitle:
              'We provide support for integrating our prompt systems into your existing workflows and infrastructure.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Prompt Engineering service and how it can benefit your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is Prompt Engineering important for my business?',
            content:
              'Prompt Engineering can significantly enhance user engagement and satisfaction by providing personalized, context-aware prompts. These prompts can drive conversions and improve user experience, contributing to increased customer loyalty and business growth.',
          },
          {
            key: 'faqs-2',
            title: 'How does your Prompt Engineering service work?',
            content:
              'Our Prompt Engineering service leverages AI and deep learning to design and deliver intelligent prompts. We work closely with enterprise clients to understand their needs and customize our prompts accordingly. Our systems ensure timely delivery and context-awareness for maximum effectiveness and personalization.',
          },
          {
            key: 'faqs-3',
            title: 'How do you ensure the effectiveness of your prompts?',
            content:
              'We continually analyze the performance of our prompts and adjust our strategies based on the insights we gain. We also design our prompts to be user-centric, which increases their relevance and effectiveness.',
          },
        ],
      },
    }
  },
  {
    // Hero
    category_id: 1,
    title: 'OpenAI API Integration',
    slug: 'openai-api-integration',
    subtitle: 'Integrate cutting-edge AI solutions into your business processes.',
    hero_src: 'https://source.unsplash.com/_HnJfS6WhA8/1600x900',
    hero_alt: 'Colourful cubic components',
    // Sections
    sections: {
      summary: {
        title: 'Driving business transformation with OpenAI.',
        items: [
          {
            title: 'The integration of OpenAI APIs can revolutionize your business, enabling automated processes, advanced analytics, and more. Our services help businesses seamlessly incorporate these powerful AI capabilities into their existing systems. We understand the challenges that businesses face when implementing AI solutions. Our team of experts will work closely with you to understand your business needs and design an OpenAI API integration plan that maximizes the potential of AI for your business.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'Discover our wide range of capabilities for integrating the OpenAI API into your business systems.',
        items: [
          {
            fa_icon: 'fa-cogs',
            title: 'System Integration',
            subtitle:
              'We ensure seamless integration of OpenAI APIs into your existing systems and workflows.',
          },
          {
            fa_icon: 'fa-brain',
            title: 'AI Solutions',
            subtitle:
              'We help implement advanced AI capabilities to drive efficiency and innovation in your business processes.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Security & Compliance',
            subtitle:
              'We prioritize security and compliance in all our integration processes.',
          },
          {
            fa_icon: 'fa-tasks',
            title: 'Performance Optimization',
            subtitle:
              'We monitor and optimize the performance of the integrated APIs to ensure they meet your business needs.',
          },
          {
            fa_icon: 'fa-sync',
            title: 'Continuous Updates',
            subtitle:
              'We ensure your systems stay up-to-date with the latest API changes and features.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'Client Support',
            subtitle:
              'We provide ongoing support and maintenance to ensure smooth operation.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our OpenAI API Integration service and how it can benefit your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is OpenAI API Integration important for my business?',
            content:
              'OpenAI API Integration can significantly enhance your business capabilities by introducing AI-driven automation and insights. It can improve efficiency, drive innovation, and give you a competitive edge in the market.',
          },
          {
            key: 'faqs-2',
            title: 'How does your OpenAI API Integration service work?',
            content:
              'Our team of experts will work with you to understand your business needs and design an integration plan. We will then implement the OpenAI APIs into your existing systems, ensuring seamless integration and optimal performance. We also provide ongoing support and updates to ensure your systems stay up-to-date.',
          },
          {
            key: 'faqs-3',
            title: 'What kind of support can I expect after the OpenAI API integration?',
            content:
              'We provide continuous support and maintenance post-integration. This includes performance monitoring, handling API updates and changes, and resolving any issues that may arise. Our goal is to ensure the integrated APIs continuously meet your business needs.',
          },
        ],
      },
    }
  },
  {
    // Hero
    category_id: 2,
    title: 'Data Warehousing',
    slug: 'data-warehousing',
    subtitle: 'Build a solid foundation for your data with our expert data warehousing solutions.',
    hero_src: 'https://source.unsplash.com/IlxX7xnbRF8/1600x900',
    hero_alt: 'Fibre optic cable rack',
    // Sections
    sections: {
      summary: {
        title: 'Streamlining data storage and accessibility.',
        items: [
          {
            title:
              'In the era of data-driven decision making, a well-designed data warehouse is a powerful tool. We focus on building structured, efficient, and reliable data warehouses that cater to your specific business needs. We believe in the power of data to drive insights and innovation. Our team of data professionals works to align your data infrastructure with your business goals, ensuring seamless operation and maximum utility.',
          },
        ],
      },
      features: {
        overline: 'What We Do',
        title: 'Our {title} Capabilities',
        subtitle:
          'Our service covers every aspect of data warehousing to ensure your data is handled with utmost efficiency.',
        items: [
          {
            fa_icon: 'fa-database',
            title: 'Data Architecture',
            subtitle:
              'We design robust data architectures that effectively manage large volumes of data.',
          },
          {
            fa_icon: 'fa-sync-alt',
            title: 'Data Integration',
            subtitle:
              'We ensure seamless integration of disparate data sources into a unified, accessible system.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Data Transformation',
            subtitle:
              'We convert raw data into a more suitable format for reporting and analysis.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Data Security',
            subtitle:
              'We implement strict security measures to safeguard your valuable data assets.',
          },
          {
            fa_icon: 'fa-clock',
            title: 'Data Lifecycle Management',
            subtitle:
              'We oversee the entire data lifecycle, from creation and maintenance to retirement.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'Consultation and Training',
            subtitle:
              'We offer expert consultation and training to your team for effective data warehouse management.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Data Warehousing Service and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is a well-structured data warehouse important for my business?',
            content:
              'A well-structured data warehouse centralizes your data, improving accessibility and reliability. It enables efficient data analysis and reporting, leading to informed business decisions and strategies. Additionally, a well-managed data warehouse ensures data security and compliance with data regulations.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of your Data Warehousing Service?',
            content:
              'Our Data Warehousing Service offers a comprehensive approach to data management. We handle every aspect, from designing robust data architectures, integrating disparate data sources, managing the data lifecycle, to ensuring top-notch data security. We work closely with your team, providing consultation and training to enable effective use of your data warehouse.',
          },
          {
            key: 'faqs-3',
            title: 'What is your approach to data warehousing?',
            content:
              'We start by understanding your business needs and existing data infrastructure. Based on this, we design a tailored data architecture, followed by integrating data sources, transforming data for analysis, and implementing data security measures. We oversee the entire data lifecycle and provide expert consultation and training to your team.',
          },
        ],
      },
    }
  },
  {
    // Hero
    category_id: 2,
    title: 'Data Pipeline Architecture',
    slug: 'data-pipeline-architecture',
    subtitle: 'Engineer a streamlined, robust data flow for your organisation with our expert solutions.',
    hero_src: 'https://source.unsplash.com/KU9ABpm7eV8/1600x900',
    hero_alt: 'Connected data blocks',
    // Sections
    sections: {
      summary: {
        title: 'Architecting the backbone of your data operations.',
        items: [
          {
            title:
              'We focus on engineering efficient data flows that allow your organisation to manage and utilize data effectively. In a world of data-driven decisions, a well-designed data pipeline is crucial. We prioritize scalability, reliability, and performance when designing your data pipeline architecture. Our team of experts ensures your data infrastructure aligns with your business goals and supports your growth.',
          },
        ],
      },
      features: {
        overline: 'What We Do',
        title: 'Our {title} Capabilities',
        subtitle:
          'From data ingestion to processing and storage, we cover all aspects of data pipeline architecture.',
        items: [
          {
            fa_icon: 'fa-arrow-circle-right',
            title: 'Data Ingestion',
            subtitle:
              'We facilitate seamless data ingestion from various sources into your data pipeline.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Data Processing',
            subtitle:
              'We implement robust data processing mechanisms to cleanse, validate, and transform your data.',
          },
          {
            fa_icon: 'fa-database',
            title: 'Data Storage',
            subtitle:
              'We design reliable and scalable data storage solutions to house your processed data.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Data Security',
            subtitle:
              'We prioritize data security, implementing rigorous protocols to protect your valuable data.',
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Performance Optimization',
            subtitle:
              'We optimize your data pipeline for high performance, ensuring rapid data flow and processing.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'Consultation and Training',
            subtitle:
              'We offer expert consultation and training to your team for efficient data pipeline management.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Data Pipeline Architecture service and how it can benefit your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is a well-designed data pipeline crucial for my business?',
            content:
              'A well-designed data pipeline is essential for handling data effectively. It enables seamless data flow, accurate processing, secure storage, and ultimately, better decision-making. With a robust data pipeline, your business can achieve improved operational efficiency, quicker insights, and enhanced data-driven strategies.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of your Data Pipeline Architecture service?',
            content:
              'Our service offers end-to-end solutions for your data pipeline needs. From efficient data ingestion and processing to secure storage and performance optimization, we cover all aspects. Our team works closely with you, understanding your unique needs, and designs a data pipeline architecture that aligns with your business goals. We also provide consultation and training for effective management of your data infrastructure.',
          },
          {
            key: 'faqs-3',
            title: 'How do you ensure the scalability of the data pipeline?',
            content:
              'We understand that as your business grows, your data needs will also evolve. We design the data pipeline architecture with scalability as a priority. This includes choosing scalable data storage solutions, implementing mechanisms for efficient data processing even with increasing volumes, and ensuring that the architecture can accommodate additional data sources in the future.',
          },
        ],
      },
    }
  },
  {
    // Hero
    category_id: 2,
    title: 'Big Data Solutions',
    slug: 'big-data-solutions',
    subtitle: 'Harness the power of data to drive growth and innovation in your business with our big data solutions.',
    hero_src: 'https://source.unsplash.com/iM8dxccK1sY/1600x900',
    hero_alt: 'Multiple data screens',
    // Sections
    sections: {
      summary: {
        title: 'Making data work for your business.',
        items: [
          {
            title:
              'With the exponential growth in data, enterprises today are challenged by the need to extract actionable insights from these vast data sets. Our big data solutions are designed to help enterprises leverage the power of data to drive growth, efficiency, and innovation. We have a team of data experts who specialize in managing, processing, and analyzing large data sets. Using state-of-the-art technologies and techniques, we deliver solutions that enable businesses to access, analyze, and use their data effectively and efficiently.',
          },
        ],
      },
      features: {
        overline: 'What We Do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We deliver end-to-end big data solutions tailored to your business needs, providing you with actionable insights and enabling data-driven decision-making.',
        items: [
          {
            fa_icon: 'fa-database',
            title: 'Data management',
            subtitle:
              'We ensure efficient data management, allowing for the secure storage, retrieval, and processing of large volumes of data.',
          },
          {
            fa_icon: 'fa-chart-bar',
            title: 'Data analytics',
            subtitle:
              'We provide advanced analytics capabilities, helping you to gain insights and drive decision-making from your data.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Data processing',
            subtitle:
              'We design and implement robust data processing pipelines to handle complex and large-scale data efficiently.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Data security',
            subtitle:
              'We implement stringent data security measures to ensure the protection and privacy of your data.',
          },
          {
            fa_icon: 'fa-sync',
            title: 'Data integration',
            subtitle:
              'We integrate data from disparate sources, providing a unified view of your business data.',
          },
          {
            fa_icon: 'fa-brain',
            title: 'AI and ML integration',
            subtitle:
              'We leverage AI and machine learning to extract valuable insights and automate processes, enhancing your business performance.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Big Data Solutions Service and how it can benefit your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is big data important for my business?',
            content:
              'Big data can provide insights that enable you to make more informed decisions, identify new opportunities, improve customer service, and optimize operational efficiency. Effectively leveraging big data can lead to significant business growth and competitive advantage.',
          },
          {
            key: 'faqs-2',
            title: 'What types of big data solutions does your company provide?',
            content:
              'Our big data solutions encompass a broad range of services including data management, data analytics, data processing, data security, data integration, and the integration of AI and machine learning technologies. We tailor our solutions based on your specific business needs and goals.',
          },
          {
            key: 'faqs-3',
            title: 'How can I be sure that my data is secure?',
            content:
              'We prioritize data security in all of our solutions. We implement stringent security measures and follow best practices in data encryption, access control, and compliance to ensure the privacy and protection of your data.',
          },
        ],
      },
    }
  },
  {
    // Hero
    category_id: 2,
    title: 'Data ETL',
    slug: 'data-etl',
    subtitle: 'Optimize your data workflow with our efficient, reliable, and scalable ETL solutions.',
    hero_src: 'https://source.unsplash.com/_rZnChsIFuQ/1600x900',
    hero_alt: '3D illustration of blocks in a blockchain',
    // Sections
    sections: {
      summary: {
        title: 'Streamlining data extraction, transformation, and loading.',
        items: [
          {
            title: 'Data ETL (Extraction, Transformation, and Loading) is a crucial process for any data-driven organisation. It involves extracting data from disparate sources, transforming it into a consistent format, and loading it into a target database or data warehouse for analysis and reporting. We specialize in designing and implementing ETL processes that are efficient, reliable, and scalable. We work closely with enterprise clients to understand their data needs and craft ETL solutions that enable them to leverage their data more effectively.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'Our comprehensive suite of ETL services is designed to help businesses optimize their data workflows.',
        items: [
          {
            fa_icon: 'fa-cloud-download-alt',
            title: 'Data extraction',
            subtitle:
              'We extract data from various sources, ensuring it is accurate, relevant, and ready for transformation.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Data transformation',
            subtitle:
              'We transform data into a consistent format that can be easily analyzed and understood.',
          },
          {
            fa_icon: 'fa-database',
            title: 'Data loading',
            subtitle:
              'We efficiently load transformed data into your target system or data warehouse for further use.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Data security',
            subtitle:
              'We prioritize data security, ensuring your data remains protected throughout the ETL process.',
          },
          {
            fa_icon: 'fa-sync-alt',
            title: 'Data integration',
            subtitle:
              'We facilitate seamless data integration, ensuring your data sources work together effectively.',
          },
          {
            fa_icon: 'fa-tachometer-alt',
            title: 'Performance optimization',
            subtitle:
              'We optimize ETL processes for performance, ensuring your data workflows run smoothly and efficiently.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Find answers to common questions about our Data ETL service.',
        items: [
          {
            key: 'faqs-1',
            title: 'What is the importance of ETL for my business?',
            content:
              'ETL is vital for data-driven decision making in businesses. It helps collect data from various sources, clean and organize it, and store it in a manner that\'s optimized for analysis. This facilitates accurate, timely insights that can drive business strategy.',
          },
          {
            key: 'faqs-2',
            title: 'How can your Data ETL service help my business?',
            content:
              'Our Data ETL service helps businesses streamline their data workflows. We ensure that data is extracted from various sources, transformed into a consistent format, and loaded into a target system efficiently. This prepares the data for analysis and reporting, enabling businesses to make informed decisions based on accurate data.',
          },
          {
            key: 'faqs-3',
            title: 'How do you ensure data security during the ETL process?',
            content:
              'Data security is a top priority in our ETL processes. We use secure methods for data extraction, transformation, and loading. We also enforce strict access controls and use encryption to protect sensitive data.',
          },
        ],
      },
    }
  },
  {
    // Hero
    category_id: 3,
    title: 'Data Roadmap Development',
    slug: 'data-roadmap-development',
    subtitle: 'Expert guidance to craft an effective data roadmap aligned with your enterprise goals.',
    hero_src: 'https://source.unsplash.com/vv-oEGlN-4E/1600x900',
    hero_alt: 'Winding road in forested area',
    // Sections
    sections: {
      summary: {
        title: 'Crafting data roadmaps that accelerate business growth.',
        items: [
          {
            title:
              'In a data-driven era, an effective data roadmap is pivotal for successful business strategy. We specialize in creating detailed, scalable data roadmaps that align with your business objectives. Our experts understand the importance of a well-planned data strategy. We work closely with your teams, understanding your business vision and existing data landscape, to craft roadmaps that guide your data initiatives and drive growth.',
          },
        ],
      },
      features: {
        overline: 'What We Do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We provide a range of services to ensure the development of an efficient and effective data roadmap.',
        items: [
          {
            fa_icon: 'fa-chart-line',
            title: 'Data Strategy Formulation',
            subtitle:
              'We work with you to define a clear data strategy that aligns with your business objectives and guides your data initiatives.',
          },
          {
            fa_icon: 'fa-road',
            title: 'Roadmap Development',
            subtitle:
              "We create a detailed, scalable data roadmap that outlines your data initiatives and how they'll be executed.",
          },
          {
            fa_icon: 'fa-tasks',
            title: 'Project Planning',
            subtitle:
              'We help you plan your data projects, defining clear objectives, timelines, and responsibilities.',
          },
          {
            fa_icon: 'fa-chart-bar',
            title: 'Performance Metrics',
            subtitle:
              'We define key performance indicators to measure the success of your data initiatives and adjust the roadmap as needed.',
          },
          {
            fa_icon: 'fa-tools',
            title: 'Technological Advice',
            subtitle:
              'We provide advice on the best data technologies and tools that align with your data strategy and roadmap.',
          },
          {
            fa_icon: 'fa-sync',
            title: 'Roadmap Iteration',
            subtitle:
              'We continuously revisit and update your data roadmap based on business changes, technological advancements, and performance metrics.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Data Roadmap Development Service and how it can benefit your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is a data roadmap important for my business?',
            content:
              'A data roadmap provides a strategic framework for your data initiatives, aligning them with your business objectives. It outlines the steps needed to achieve your data goals and provides a clear vision of your data future. This helps ensure efficient use of resources, facilitates better decision making, and accelerates business growth.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of working with your Data Roadmap Development Service?',
            content:
              'Our Data Roadmap Development Service specializes in crafting detailed, scalable data roadmaps. We work closely with you, understanding your business vision and data landscape, to align your data initiatives with your business objectives. Our comprehensive approach ensures you have a clear data strategy, effective project planning, suitable performance metrics, and continuous roadmap iterations for sustained growth.',
          },
          {
            key: 'faqs-3',
            title: 'How do you develop a data roadmap?',
            content:
              'We start by understanding your business objectives and existing data landscape. From there, we define a clear data strategy and outline the data initiatives needed to achieve this strategy. We then craft a detailed, scalable roadmap, plan your data projects, define key performance indicators, and provide advice on suitable data technologies. We also continuously revisit and update the roadmap based on changes in your business, technology, or performance metrics.',
          },
        ],
      },
    }
  },
  {
    // Hero
    category_id: 3,
    title: 'Business Intelligence Consulting',
    slug: 'business-intelligence-consulting',
    subtitle: 'Utilize data-driven insights to drive decision making and business growth.',
    hero_src: 'https://source.unsplash.com/774sCXD0dDU/1600x900',
    hero_alt: 'Businessman using laptop',
    // Sections
    sections: {
      summary: {
        title: 'Transforming data into actionable business insights.',
        items: [
          {
            title:
              'Given the competitive landscape enterprises find themselves in, making informed decisions is key to success. Our consulting service leverages cutting-edge technologies and proven methodologies to turn your data into meaningful insights. We work closely with your team to understand your business objectives and challenges. Our consultants provide expert guidance to help you make the most of your data, fostering a data-driven culture within your organisation.',
          },
        ],
      },
      features: {
        overline: 'What We Do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We offer a comprehensive range of services to help you maximize the value of your data.',
        items: [
          {
            fa_icon: 'fa-chart-line',
            title: 'Data Analytics',
            subtitle:
              'We utilize sophisticated data analysis techniques to uncover patterns and trends in your data.',
          },
          {
            fa_icon: 'fa-database',
            title: 'Data Management',
            subtitle:
              "We help you manage your data effectively to ensure it's always ready for analysis.",
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Data Infrastructure',
            subtitle:
              'We guide you in building a robust data infrastructure that supports your business intelligence needs.',
          },
          {
            fa_icon: 'fa-tools',
            title: 'BI Tools Implementation',
            subtitle:
              'We implement leading BI tools tailored to your specific needs, ensuring you have the right technology in place.',
          },
          {
            fa_icon: 'fa-lightbulb',
            title: 'Insight Generation',
            subtitle:
              'We transform raw data into actionable insights that inform business strategy and decision-making.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Training and Support',
            subtitle:
              'We provide training and ongoing support to foster a data-driven culture within your organisation.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Business Intelligence Consulting Service and how it can benefit your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is business intelligence important for my enterprise?',
            content:
              'Business Intelligence (BI) provides crucial insights into your operations, customer behavior, and market trends. It allows you to make data-driven decisions, optimize processes, and drive business growth. Without BI, your decisions are likely based on intuition rather than evidence, which can lead to inefficiencies and missed opportunities.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of working with your Business Intelligence Consulting Service?',
            content:
              'We offer comprehensive BI consulting services, helping you manage your data, implement the right BI tools, and generate actionable insights. Our team of experts works closely with your organisation, providing tailored solutions that align with your business objectives. We also provide training and support, ensuring your team is equipped to leverage your BI infrastructure effectively.',
          },
          {
            key: 'faqs-3',
            title: 'How do you approach business intelligence consulting?',
            content:
              'We start by understanding your business objectives, data landscape, and current challenges. We then provide expert guidance on managing your data, choosing and implementing BI tools, and interpreting data outputs. We also offer training to foster a data-driven culture within your organisation, ensuring your team can effectively use your BI tools and interpret the insights they provide.',
          },
        ],
      },
    }
  },
  {
    // Hero
    category_id: 3,
    title: 'Data Scraping',
    slug: 'data-scraping',
    subtitle: 'Leverage our expertise to extract and analyze data that matter.',
    hero_src: 'https://source.unsplash.com/shr_Xn8S8QU/1600x900',
    hero_alt: 'Website Analytics Page',
    // Sections
    sections: {
      summary: {
        title: 'Focus on data that can drive your business success.',
        items: [
          {
            title:
              'In an increasingly data-driven world, it is vital for businesses to extract, analyze, and derive insights from vast amounts of data. We help businesses gather valuable data, enabling them to make informed decisions and stay ahead in the competitive landscape. Using advanced tools and technologies, we ensure the data extracted is accurate, reliable, and relevant. Our team of data professionals work closely with clients to understand their specific requirements and deliver tailored solutions that drive measurable results.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'Our data scraping services encompass a range of capabilities that enable businesses to extract, process, and leverage data effectively.',
        items: [
          {
            fa_icon: 'fa-cloud-download-alt',
            title: 'Data extraction',
            subtitle:
              'We extract data from various online sources, ensuring it is comprehensive and precise to meet your business requirements.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Web scraping',
            subtitle:
              'We use state-of-the-art technologies to scrape web data accurately and efficiently, delivering it in your preferred format.',
          },
          {
            fa_icon: 'fa-database',
            title: 'Database creation',
            subtitle:
              'We organize the extracted data into clean, structured databases for easy access and analysis.',
          },
          {
            fa_icon: 'fa-chart-pie',
            title: 'Data analysis',
            subtitle:
              'Our team of data scientists will analyze your data to identify patterns, trends, and insights that can drive your business growth.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Data privacy',
            subtitle:
              'We ensure all data is handled in compliance with data protection regulations, safeguarding your business and customer information.',
          },
          {
            fa_icon: 'fa-sync',
            title: 'Ongoing maintenance',
            subtitle:
              'We provide ongoing maintenance and support to ensure your data remains updated and reliable.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Explore frequently asked questions about our Data Scraping services and understand how we can support your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is data scraping important for my business?',
            content:
              'Data scraping allows your business to gather large amounts of data from various sources. This data, when analyzed, can provide valuable insights to help drive strategic business decisions, understand market trends, and deliver enhanced customer experiences.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of your Data Scraping service?',
            content:
              'Our Data Scraping service enables you to access precise and relevant data swiftly and efficiently. Our expert team ensures that the data gathered is accurate, reliable, and tailored to your specific business needs. We follow best practices in data privacy, making sure all the data collected is handled in compliance with data protection regulations.',
          },
          {
            key: 'faqs-3',
            title: 'How do you ensure the quality of scraped data?',
            content:
              'We use advanced tools and techniques to ensure the data we extract is of the highest quality. This includes cross-validation methods and automated checks for data accuracy. Additionally, our ongoing maintenance ensures your data remains up-to-date and relevant.',
          },
        ],
      },
    }
  },
  {
    // Hero
    category_id: 3,
    title: 'Data Visualisation',
    slug: 'data-visualisation',
    subtitle: 'Transform your complex data into visually engaging, understandable insights with our data visualization expertise.',
    hero_src: 'https://source.unsplash.com/4QVqSh4VvP4/1600x900',
    hero_alt: 'Data filters',
    // Sections
    sections: {
      summary: {
        title: 'Turning raw data into visual stories.',
        items: [
          {
            title:
              'As data continues to play an increasingly important role in business decision-making, the ability to understand and communicate data is more crucial than ever. We help enterprises turn raw data into easily understandable, visual stories that drive decision-making through using cutting-edge visualization tools and techniques to present data in a visually engaging, understandable format that reveals patterns, trends, and insights.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We offer a suite of data visualization services tailored to help businesses make the most of their data.',
        items: [
          {
            fa_icon: 'fa-chart-bar',
            title: 'Interactive dashboards',
            subtitle:
              'We create interactive dashboards that allow you to explore and interact with your data, facilitating better understanding and decision-making.',
          },
          {
            fa_icon: 'fa-project-diagram',
            title: 'Data storytelling',
            subtitle:
              'We transform complex data into engaging visual stories that reveal key insights and guide strategic decisions.',
          },
          {
            fa_icon: 'fa-chart-pie',
            title: 'Customized reports',
            subtitle:
              'We design and develop tailored reports that present data in a clear, concise, and visually appealing manner.',
          },
          {
            fa_icon: 'fa-database',
            title: 'Data management',
            subtitle:
              'We ensure your data is organized and structured properly for effective visualization.',
          },
          {
            fa_icon: 'fa-eye',
            title: 'Visual analytics',
            subtitle:
              'Our team performs visual analytics to reveal hidden patterns, trends, and insights in your data.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Consulting and strategy',
            subtitle:
              'We provide data visualization consulting and strategy services to ensure your data visualization efforts align with your business objectives.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Get answers to frequently asked questions about our Data Visualization service.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is data visualization important for my business?',
            content:
              'Data visualization can help businesses understand complex data and identify new patterns and trends. It allows for easier data interpretation, facilitates quicker decision-making, and helps communicate insights in a clear and effective manner.',
          },
          {
            key: 'faqs-2',
            title: 'What kind of data can be visualized?',
            content:
              'Almost any type of data can be visualized, provided it is structured appropriately. This includes sales data, customer data, performance data, market research data, and much more. The goal is to transform raw, complex data into visual insights that inform decision-making.',
          },
          {
            key: 'faqs-3',
            title: 'How do you ensure the accuracy of visualized data?',
            content:
              'We implement rigorous data management practices to ensure the data being visualized is accurate and up-to-date. This includes data cleaning, validation, and regular updates. We also work closely with our clients to understand their data and ensure it is presented accurately.',
          },
        ],
      },
    }
  },
].map((item, i) => {
  return merge({}, MOCK_SERVICE_PAGE, {
    id: i + 1,
    // Category
    category: getCategoryFromCrudItem(item, MOCK_DATA_SERVICE_CATEGORYS),
    ...item,
    seo: {
      title: item.title,
      description: item.subtitle
    },
    sections: {
      ...item.sections,
      cta: {
        hero_src: '/images/about_nodes_above_city.png',
        hero_alt: 'Laser net over city',
        overline: 'Get Started',
        title: 'Partnering with {appTitle}',
        subtitle:
          '{appTitle} collaborates with enterprises to leverage data and AI for competitive advantage. Utilising future-proof technologies such as Python, JavaScript, SQL, ChatGPT, and Tableau, we provide customized data science services and AI solutions. Transforming raw data into actionable insights and automating complex processes, our expertise in data science and AI helps you unlock your data\'s potential and excel in the digital landscape.',
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
      checklist: {
        overline: 'Why Us',
        title: `Why {appTitle} for {title}`,
        subtitle:
          'Igniting enterprise transformation through personalized data solutions focused on driving your business success.',
      },
    }
  })
})

export const MOCK_DIGITAL_SERVICES = MOCK_TECH_SERVICES

export const MOCK_FINX_SERVICES = MOCK_TECH_SERVICES

export const MOCK_GOVX_SERVICES = MOCK_TECH_SERVICES

export const MOCK_SERVICES = {
  GROUP: MOCK_GROUP_SERVICES,
  TECH: MOCK_TECH_SERVICES,
  DATA: MOCK_DATA_SERVICES,
  DESIGN: MOCK_DESIGN_SERVICES,
  DIGITAL: MOCK_DIGITAL_SERVICES,
  FINX: MOCK_FINX_SERVICES,
  GOVX: MOCK_GOVX_SERVICES,
}
