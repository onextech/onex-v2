import merge from 'lodash/merge'
import { routeConfig } from '@onex/common'
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
      overline: 'Get Started',
      title: 'Partnering with {appTitle}',
      subtitle:
        '{appTitle} partners with enterprise clients to create solutions to the toughest software problems. Focusing on JavaScript as our core technology, we utilize {title}, React Native, NodeJS, GraphQL, and the extended JavaScript ecosystem to build web apps, mobile apps, cloud services, open source software, and more. Our approach is tailored to each product, so we will always work with your team to select the technologies best suited to your needs. We excel in web, mobile and cloud platform development and can apply our expertise to your product, no matter where it is in the product lifecycle.',
    },
  },
}

export const PRODUCT_AND_SERVICE_DESIGN_SERVICE_PAGE = {
  // Hero
  title: 'Product and Service Design',
  slug: 'product-and-service-design',
  subtitle:
    'Create exceptional digital experiences for your enterprise clients with our expertise in frontend software engineering and dashboard development.',
  hero_src: 'https://source.unsplash.com/1600x900/?product-design',
  hero_alt: 'Product Design',
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
        'Our team of experts is well-versed in the latest frontend technologies and design principles, ensuring that your digital products are both visually stunning and highly functional.',
      items: [
        {
          fa_icon: 'fa-pencil-ruler',
          title: 'Bespoke dashboard design',
          subtitle:
            'Our team creates custom dashboard designs that deliver vital information to your clients in a visually appealing and easily digestible format.',
        },
        {
          fa_icon: 'fa-desktop',
          title: 'Responsive frontend development',
          subtitle:
            "We develop user interfaces that work seamlessly across all devices, ensuring that your clients' users can access the digital products from anywhere.",
        },
        {
          fa_icon: 'fa-chart-line',
          title: 'Data visualization',
          subtitle:
            'We employ cutting-edge data visualization techniques to present complex data in an easily understandable manner, allowing your clients to make informed decisions.',
        },
        {
          fa_icon: 'fa-cogs',
          title: 'Efficient performance',
          subtitle:
            'We optimize the performance of your digital products, ensuring that they run smoothly and efficiently, even with large amounts of data.',
        },
        {
          fa_icon: 'fa-code-branch',
          title: 'Collaboration',
          subtitle:
            'We work closely with your team to ensure that our digital solutions align with your clients\' business objectives and deliver the desired outcomes.',
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
            'We primarily work with enterprise clients, helping them create exceptional digital experiences for their users. Our expertise in frontend software engineering and dashboard development allows us to deliver tailored solutions that cater to the specific needs of large organizations across various industries.',
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
}

export const MOCK_TECH_SERVICES = [
  {
    title: 'User Interface Development',
    slug: 'user-interface-development',
    category_id: 1,
    // Hero
    hero_src: 'https://source.unsplash.com/Nzmyp6LsgNM/1600x900',
    hero_alt: 'user interface development',
    subtitle:
      'Work with design and development experts to create beautiful, intuitive user interfaces for your business.',
    // Seo
    seo: {
      title: 'User Interface Development',
      description:
        'This page is all about creating high-quality user interfaces for your business.',
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
    hero_alt: 'api integration development',
    subtitle:
      'Connect and streamline your systems with seamless API integration solutions.',
    // Seo
    seo: {
      title: 'API Integration Development',
      description:
        'This page is all about providing top-notch API integration solutions for your business.',
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
    hero_alt: 'Design Library',
    // Seo
    seo: {
      title: 'Design Library Development',
      description:
        'This page is all about creating a design library that streamlines the design and development process for your business.',
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
          'Our Design Library Development service encompasses a range of activities aimed at establishing and maintaining a robust design system for your organization.',
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
              'We define a cohesive visual style for your organization, including color schemes, typography choices, iconography, and spacing guidelines.',
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
    title: 'Application Modernization',
    slug: 'application-modernization',
    subtitle:
      'Upgrade your legacy systems and applications to modern, scalable architectures to drive business growth and innovation.',
    hero_src: 'https://source.unsplash.com/jJT2r2n7lYA/1600x900',
    hero_alt: 'Application Modernization',
    // Seo
    seo: {
      title: 'Application Modernization',
      description:
        'This page is all about modernizing legacy systems and applications for your business.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Transform your business with application modernization.',
        items: [
          {
            title:
              'Legacy systems and applications can hold your business back, making it difficult to innovate and scale. Our Application Modernization service helps you upgrade outdated systems and applications to modern, scalable architectures that can drive business growth and fuel innovation.',
          },
          {
            title:
              'We take a comprehensive approach to application modernization, working closely with your team to assess your existing systems, identify opportunities for improvement, and develop a detailed roadmap for modernization. Our team of experts uses the latest technologies, development methodologies, and best practices to ensure that your modernized applications deliver maximum value to your business.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'To modernize your applications, we follow a comprehensive set of practices that include application assessment, architecture redesign, migration, and ongoing support.',
        items: [
          {
            fa_icon: 'fa-cogs',
            title: 'Application assessment',
            subtitle:
              'We assess your legacy applications to identify areas for improvement, evaluate technical debt, and prioritize modernization efforts.',
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
              'We establish DevOps practices and implement automated testing, deployment, and monitoring to ensure ongoing improvement and stability of your modernized applications.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Collaboration',
            subtitle:
              'We work closely with your team, including business stakeholders and IT personnel, to ensure the modernization process aligns with your business goals and requirements.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Application Modernization service and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title:
              'Why is application modernization important for my business?',
            content:
              "Application modernization is essential for businesses that want to stay competitive in today's fast-paced digital landscape. Upgrading legacy systems and applications enables you to improve performance, security, and maintainability, making it easier to innovate and scale. Modernized applications can also lead to cost savings by reducing the resources needed to maintain outdated systems.",
          },
          {
            key: 'faqs-2',
            title:
              'What are the benefits of working with your Application Modernization service?',
            content:
              'Our Application Modernization service offers a comprehensive approach to modernizing your legacy systems and applications, helping you to achieve your business goals more quickly and cost-effectively. Our team of experts has extensive experience in assessing, re-architecting, and migrating applications to modern, scalable architectures. We also leverage the latest technologies, development methodologies, and best practices to ensure that your modernized applications deliver maximum value to your business.',
          },
          {
            key: 'how-it-works-3',
            title: 'How do you approach application modernization?',
            content:
              'We begin by assessing your existing systems and applications to identify opportunities for modernization and establish priorities based on your business goals. We then develop a detailed roadmap outlining the steps needed to achieve your goals, setting milestones to track progress. Our team of experts re-architects your applications to leverage modern, scalable architectures, and we migrate your applications to the cloud to take advantage of flexible, scalable, and cost-effective infrastructure.',
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
    hero_alt: 'Performance Optimization',
    // Seo
    seo: {
      title: 'Performance Optimization',
      description:
        'This page is all about optimizing your website for better performance, user experience, and search engine rankings.',
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
    hero_alt: 'Microfrontend Development',
    // Seo
    seo: {
      title: 'Microfrontend Development',
      description:
        'This page is all about building enterprise-grade microfrontend applications for your business.',
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
    hero_alt: 'Staff Augmentation',
    // Seo
    seo: {
      title: 'Staff Augmentation',
      description:
        'This page is all about enhancing your team with skilled frontend software engineers and dashboard developers for your enterprise projects.',
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
            title:
              'Why are agile development teams important for my enterprise business content: development teams are crucial for enterprise businesses because they ensure faster delivery, adaptability to changing requirements, and improved collaboration. This results in higher-quality software solutions that align with your business goals and drive success.',
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
    hero_alt: 'Technical Leadership',
    // Seo
    seo: {
      title: 'Technical Leadership',
      description:
        'This page is all about providing technical leadership for your software development projects.',
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
    hero_src: 'https://source.unsplash.com/1600x900/?product-design',
    hero_alt: 'Product Design',
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
          'Our team of experts is well-versed in the latest frontend technologies and design principles, ensuring that your digital products are both visually stunning and highly functional.',
        items: [
          {
            fa_icon: 'fa-pencil-ruler',
            title: 'Bespoke dashboard design',
            subtitle:
              'Our team creates custom dashboard designs that deliver vital information to your clients in a visually appealing and easily digestible format.',
          },
          {
            fa_icon: 'fa-desktop',
            title: 'Responsive frontend development',
            subtitle:
              "We develop user interfaces that work seamlessly across all devices, ensuring that your clients' users can access the digital products from anywhere.",
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Data visualization',
            subtitle:
              'We employ cutting-edge data visualization techniques to present complex data in an easily understandable manner, allowing your clients to make informed decisions.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Efficient performance',
            subtitle:
              'We optimize the performance of your digital products, ensuring that they run smoothly and efficiently, even with large amounts of data.',
          },
          {
            fa_icon: 'fa-code-branch',
            title: 'Collaboration',
            subtitle:
              'We work closely with your team to ensure that our digital solutions align with your clients\' business objectives and deliver the desired outcomes.',
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
              'We primarily work with enterprise clients, helping them create exceptional digital experiences for their users. Our expertise in frontend software engineering and dashboard development allows us to deliver tailored solutions that cater to the specific needs of large organizations across various industries.',
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
              'Our team of experienced cyber security experts works closely with your organization to develop a custom security strategy that meets your unique needs. From vulnerability assessments to incident response planning, we offer a full suite of services to help you safeguard your business against cyber threats.',
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
              'We implement robust network security measures to protect your organization from unauthorized access and data breaches.',
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
              'Cyber security is crucial for businesses of all sizes, as it protects sensitive information, maintains business continuity, and safeguards your organization\'s reputation. Cyber attacks can lead to financial loss, legal repercussions, and damage to your brand image. By investing in cyber security, you can minimize the risk of potential threats and ensure the safety of your digital assets.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of working with your Cyber Security Service?',
            content:
              'Working with our Cyber Security Service offers several benefits, including access to experienced cyber security experts, a custom security strategy tailored to your business, and comprehensive protection for your digital assets. We offer a wide range of services, from vulnerability assessments to incident response planning, ensuring that your organization is well-prepared to defend against potential cyber threats.',
          },
          {
            key: 'faqs-3',
            title: 'How do you approach cyber security?',
            content:
              'We take a proactive approach to cyber security, working closely with your organization to understand your unique needs and develop a custom security strategy. We utilize industry best practices, cutting-edge technology, and our team\'s extensive experience to safeguard your digital assets. Our services include vulnerability assessments, security strategy development, incident response planning, network security, cloud security, and security awareness training for your employees.',
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
          'Our sustainability consulting services help you make informed decisions about the technologies and strategies needed to create eco-friendly software solutions.',
        items: [
          {
            fa_icon: 'fa-leaf',
            title: 'Sustainable technologies',
            subtitle:
              'We help you identify and implement the latest sustainable technologies and practices, ensuring that your software solutions are as eco-friendly as possible.',
          },
          {
            fa_icon: 'fa-chart-bar',
            title: 'Dashboard development',
            subtitle:
              'We specialize in creating intuitive, data-driven dashboards that help you monitor and track your sustainability performance, making it easy for you to stay on target and make informed decisions.',
          },
          {
            fa_icon: 'fa-hands-helping',
            title: 'Collaboration',
            subtitle:
              'We work closely with your team to ensure that our sustainability consulting services align with your business objectives and help you achieve your sustainability goals.',
          },
          {
            fa_icon: 'fa-lightbulb',
            title: 'Innovation',
            subtitle:
              'We stay up-to-date with the latest advancements in sustainable software development, ensuring that your solutions are cutting-edge and future-proof.',
          },
          {
            fa_icon: 'fa-balance-scale',
            title: 'Balancing sustainability and performance',
            subtitle:
              'We understand the importance of balancing sustainability with the need for high-performing software solutions. Our team will help you find the right balance to meet both your environmental and business objectives.',
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
    hero_src: 'https://source.unsplash.com/1600x900/?proof-of-concept',
    hero_alt: 'Proof of Concept Development',
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
              'In an ever-changing digital landscape, validating ideas quickly and effectively is essential for any organization. Our Proof of Concept (PoC) Development Service helps enterprise clients bring their ideas to life, providing a comprehensive approach to frontend software engineering and dashboard development.',
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
          'Leverage our expertise in frontend software engineering and dashboard development to create innovative PoCs and validate your ideas.',
        items: [
          {
            fa_icon: 'fa-lightbulb',
            title: 'Idea validation',
            subtitle:
              'We collaborate with your team to assess and validate your ideas, ensuring that they align with your business goals and target audience needs.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Frontend software engineering',
            subtitle:
              'Our team specializes in frontend software engineering, developing visually appealing and user-friendly solutions for a seamless user experience.',
          },
          {
            fa_icon: 'fa-tachometer-alt',
            title: 'Dashboard development',
            subtitle:
              'We create intuitive and data-driven dashboards that enable you to track performance metrics and make informed decisions about your projects.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Iterative approach',
            subtitle:
              'We follow an iterative approach to PoC development, incorporating feedback and making improvements at every stage to ensure the best possible outcomes.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Collaboration',
            subtitle:
              'We work closely with your team throughout the PoC development process, fostering collaboration and communication for a successful partnership.',
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
              'Developing a Proof of Concept (PoC) allows organizations to validate their ideas and ensure they are feasible, cost-effective, and viable in the marketplace. A well-executed PoC can help minimize risks, accelerate innovation, and provide valuable insights that inform decision-making and future development.',
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
              'The time required to develop a Proof of Concept can vary depending on the complexity of the project, the availability of resources, and the specific needs of your organization. In general, a PoC can take anywhere from a few weeks to several months to complete. Our team works closely with you to establish a realistic timeline that aligns with your goals and expectations.',
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
    hero_src: 'https://source.unsplash.com/1600x900/?application-development',
    hero_alt: 'Application Development',
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
          'Our team of skilled developers follows best practices and stays up-to-date with the latest technologies to provide you with top-notch application development services.',
        items: [
          {
            fa_icon: 'fa-cogs',
            title: 'Custom application development',
            subtitle:
              'We build custom applications tailored to your business needs, ensuring a perfect fit with your existing processes and systems.',
          },
          {
            fa_icon: 'fa-chart-bar',
            title: 'Dashboard development',
            subtitle:
              'We create visually appealing, interactive dashboards that provide insights and drive data-driven decision-making within your organization.',
          },
          {
            fa_icon: 'fa-desktop',
            title: 'Frontend software engineering',
            subtitle:
              'Our team specializes in frontend development, using modern technologies and best practices to create user-friendly, responsive applications.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'Collaborative approach',
            subtitle:
              'We work closely with your team, ensuring seamless communication and collaboration throughout the development process.',
          },
          {
            fa_icon: 'fa-cloud',
            title: 'Scalable solutions',
            subtitle:
              'Our applications are built with scalability in mind, allowing your business to grow and adapt to changing needs without compromising performance.',
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
    hero_src: 'https://source.unsplash.com/1600x900/?enterprise-application',
    hero_alt: 'Enterprise Application',
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
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Enterprise Applications service and how we can support your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'What types of enterprises can benefit from your services?',
            content:
              'Our Enterprise Applications service is suitable for businesses in various industries, including finance, healthcare, retail, manufacturing, and more. We have the expertise and experience to create tailored applications that address the unique challenges and requirements of your industry.',
          },
          {
            key: 'faqs-2',
            title: 'What technologies and frameworks do you use for frontend development?',
            content:
              'Our team of engineers is proficient in a variety of modern frontend technologies and frameworks, including but not limited to React, Angular, Vue.js, and TypeScript. We choose the most suitable technology stack based on your project requirements and preferences.',
          },
          {
            key: 'faqs-3',
            title: 'How do you ensure the quality and performance of the applications you develop?',
            content:
              'We follow industry best practices and adhere to strict coding standards to ensure the quality and performance of our applications. We also conduct thorough testing, including unit testing, integration testing, and performance testing, to ensure that your applications function flawlessly and meet the demands of your enterprise.',
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
    hero_src: 'https://source.unsplash.com/1600x900/?erp,consulting',
    hero_alt: 'ERP Consulting',
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
          'Our ERP Consulting services cover a wide range of areas, including system assessment, implementation support, and custom development.',
        items: [
          {
            fa_icon: 'fa-check',
            title: 'System assessment',
            subtitle:
              'We evaluate your existing ERP system to identify areas for improvement and provide recommendations to optimize its performance.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Implementation support',
            subtitle:
              'Our team provides expert guidance and support throughout the ERP implementation process, helping you minimize risks and maximize results.',
          },
          {
            fa_icon: 'fa-desktop',
            title: 'Custom development',
            subtitle:
              'We develop custom frontend solutions and dashboards tailored to your business needs, ensuring a seamless and user-friendly ERP experience.',
          },
          {
            fa_icon: 'fa-sync',
            title: 'System integration',
            subtitle:
              'We help you integrate your ERP system with other enterprise applications to streamline operations and improve data flow across your organization.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'Change management',
            subtitle:
              'We assist your team in adopting new processes and workflows related to your ERP system, ensuring a smooth transition and maximizing user adoption.',
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
    hero_src: 'https://source.unsplash.com/1600x900/?crm-consulting',
    hero_alt: 'CRM Consulting',
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
          'Our CRM Consulting services encompass a range of capabilities, from strategy and implementation to custom development and ongoing support.',
        items: [
          {
            fa_icon: 'fa-cogs',
            title: 'CRM strategy',
            subtitle:
              'We help you develop a CRM strategy tailored to your business needs and objectives, ensuring your system supports your growth and success.',
          },
          {
            fa_icon: 'fa-wrench',
            title: 'Implementation support',
            subtitle:
              'Our team provides expert guidance and support throughout the CRM implementation process, minimizing risks and ensuring a smooth transition.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Custom development',
            subtitle:
              'We specialize in frontend software engineering and dashboard development, creating custom solutions that enhance your CRM system and improve user experience.',
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Performance optimization',
            subtitle:
              'We help you optimize your CRM system, ensuring it delivers maximum value to your business and drives continuous improvement.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'Training and support',
            subtitle:
              'Our team provides comprehensive training and ongoing support, empowering your team to make the most of your CRM investment.',
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
    hero_src: 'https://source.unsplash.com/1600x900/?software-reengineering',
    hero_alt: 'Software Re-engineering',
    // Seo
    seo: {
      title: 'Application Re-engineering',
      description:
        'Discover our Application Re-engineering services designed to optimize, modernize, and revamp your existing software applications.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Breathing new life into your software applications.',
        items: [
          {
            title:
              'In an ever-evolving digital landscape, outdated software applications can hinder your business growth and reduce efficiency. Our Application Re-engineering services are designed to help you optimize, modernize, and revamp your existing applications to meet today\'s technological demands and enhance user experience.',
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
          'We leverage our expertise in frontend software engineering and dashboard development to deliver top-notch Application Re-engineering services.',
        items: [
          {
            fa_icon: 'fa-code',
            title: 'Code refactoring',
            subtitle:
              'We analyze and restructure your existing code to improve its readability, maintainability, and overall performance.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Performance optimization',
            subtitle:
              'We identify and eliminate performance bottlenecks, ensuring your applications run faster and more efficiently.',
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Dashboard development',
            subtitle:
              'We create custom dashboards that provide valuable insights and enhance the user experience of your applications.',
          },
          {
            fa_icon: 'fa-laptop-code',
            title: 'User interface improvements',
            subtitle:
              'We apply best practices in user interface design to improve the usability and accessibility of your applications.',
          },
          {
            fa_icon: 'fa-sync-alt',
            title: 'Integration & migration',
            subtitle:
              'We seamlessly integrate your re-engineered applications with other systems and migrate them to modern platforms, if needed.',
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
              'Application Re-engineering is essential to ensure that your software applications stay up to date with the latest technological advancements and user expectations. By optimizing, modernizing, and revamping your applications, you can increase efficiency, reduce costs, enhance user experience, and maintain a competitive edge in the market.',
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
    hero_src: 'https://source.unsplash.com/1600x900/?cloud-migration',
    hero_alt: 'Cloud Migration',
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
              'Our team of experts has extensive experience in cloud migration, and we work closely with your organization to develop a tailored migration plan that meets your unique needs. From assessing your existing infrastructure to planning and executing the migration, we provide comprehensive support every step of the way.',
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
              'We work closely with your team, fostering collaboration and knowledge transfer to ensure your organization is fully prepared to manage your new cloud environment.',
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
              'Migrating to the cloud can provide your business with numerous benefits, such as cost savings, increased agility, improved scalability, and enhanced security. It also enables your organization to leverage the latest technologies and innovations, making it easier to stay competitive in the digital landscape.',
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
              'The duration of a cloud migration process varies depending on the size and complexity of your organization\'s infrastructure, as well as the specific cloud solutions being implemented. Our team works closely with your organization to develop a tailored migration plan, providing a clear timeline and roadmap for the transition.',
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
    hero_src: 'https://source.unsplash.com/1600x900/?teamwork',
    hero_alt: 'Teamwork',
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
              'Our team of experts is well-versed in the latest frontend technologies and dashboard development practices, enabling them to tackle even the most complex projects with ease. We work closely with your organization to understand your specific needs and goals, delivering tailor-made solutions that drive results.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'Our Smart Team service offers a range of capabilities, including frontend engineering, dashboard development, and more.',
        items: [
          {
            fa_icon: 'fa-code',
            title: 'Frontend Engineering',
            subtitle:
              'Our frontend engineers are proficient in modern technologies and frameworks, ensuring your user interfaces are responsive, performant, and visually stunning.',
          },
          {
            fa_icon: 'fa-chart-bar',
            title: 'Dashboard Development',
            subtitle:
              'Our dashboard developers create intuitive, data-driven dashboards that provide valuable insights, helping you make informed decisions for your business.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'Dedicated Team',
            subtitle:
              'Our dedicated team works closely with your organization to ensure seamless collaboration, clear communication, and a deep understanding of your project requirements.',
          },
          {
            fa_icon: 'fa-tools',
            title: 'Project Management',
            subtitle:
              'We provide expert project management to keep your development process on track, ensuring that deadlines are met and goals are achieved.',
          },
          {
            fa_icon: 'fa-graduation-cap',
            title: 'Continual Learning',
            subtitle:
              'Our team is committed to staying up-to-date with the latest industry trends and best practices, ensuring that your projects benefit from cutting-edge technologies and techniques.',
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
              'Our dashboard developers create intuitive, data-driven dashboards that provide valuable insights, helping you make informed decisions for your business. We work closely with your organization to understand your data needs and goals, and we use the latest dashboard development tools and best practices to create custom solutions that meet your specific requirements.',
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
              'Our team of experienced data scientists and analysts work closely with your organization to understand your business needs and develop custom solutions that address those needs. From predictive analytics to data visualization and dashboard development, we provide a comprehensive suite of services designed to help you make the most of your data.',
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
              'Our team of experienced data scientists and analysts work closely with your organization to understand your business needs and develop custom solutions that address those needs. We offer a comprehensive suite of data science services, including data analytics, machine learning, dashboard development, data management, and process optimization. By working with us, you can unlock the full potential of your data and drive better decision-making, optimized processes, and improved customer experiences.',
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
    hero_src: 'https://source.unsplash.com/1600x900/?data-analytics',
    hero_alt: 'Data Analytics',
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
              'We believe that data is more than just numbers and statistics. It holds valuable insights that can guide strategic decision-making, optimize processes, and improve customer experiences. Our team of experts combines technical expertise with business acumen to develop tailored data strategies that align with your organizational goals and deliver tangible results.',
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
              'We help establish data governance frameworks to ensure data integrity, privacy, and compliance across your organization.',
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
              'We help foster a data-driven culture within your organization, empowering teams to leverage data in their day-to-day operations and decision-making.',
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
              'By working with our Data Strategy service, you will benefit from our expertise in developing comprehensive data strategies tailored to your business needs. We have a deep understanding of data governance, integration, quality management, and analytics, and we can help you establish a data-driven culture within your organization. Our goal is to empower you to leverage data effectively, optimize processes, and drive growth and innovation.',
          },
          {
            key: 'faqs-3',
            title: 'How do you approach data strategy development?',
            content:
              'We take a holistic approach to data strategy development, starting with a thorough assessment of your current data landscape, business goals, and challenges. Based on this analysis, we collaborate with your team to define a data strategy that aligns with your objectives. Our approach includes establishing data governance frameworks, designing data integration solutions, implementing data quality management processes, leveraging advanced analytics techniques, and creating a data-driven culture within your organization.',
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
  })
})

export const MOCK_SERVICES = {
  GROUP: MOCK_GROUP_SERVICES,
  TECH: MOCK_TECH_SERVICES,
}
