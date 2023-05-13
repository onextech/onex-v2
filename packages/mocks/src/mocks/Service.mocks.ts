import merge from 'lodash/merge'
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
      overline: 'Built on Strategy',
      title: 'Partnering with {appTitle}',
      subtitle:
        '{appTitle} partners with clients from startups to global MNCs to create solutions to the toughest software problems. Focusing on JavaScript as our core technology, we utilize {title}, React Native, NodeJS, GraphQL, and the extended JavaScript ecosystem to build web apps, mobile apps, cloud services, open source software, and more. Our approach is tailored to each product, so we will always work with your team to select the technologies best suited to your needs. We excel in web, mobile and cloud platform development and can apply our expertise to your product, no matter where it is in the product lifecycle.',
    },
  },
}

export const MOCK_TECH_SERVICES = [
  {
    category_id: 1,
    // Hero
    hero_src: 'https://source.unsplash.com/Nzmyp6LsgNM/1600x900',
    hero_alt: 'user interface development',
    title: 'User Interface Development',
    slug: 'user-interface-development',
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
    category_id: 1,
    // Hero
    hero_src: 'https://source.unsplash.com/pREq0ns_p_E/1600x900',
    hero_alt: 'api integration development',
    title: 'API Integration Development',
    slug: 'api-integration-development',
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
    hero_src: '/images/about_working_in_office.png',
    hero_alt: 'working in office',
    // Category
    category: getCategoryFromCrudItem(item, MOCK_TECH_SERVICE_CATEGORYS),
    ...item,
  })
})

export const MOCK_GROUP_SERVICES = [
  {
    title: 'Chirashi Don Making',
    slug: 'chirashi-don-making',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 1,
    exclusive_locales: ['jp'],
  },
  {
    title: 'Growth Strategy',
    slug: 'growth-strategy',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 1,
  },
  {
    title: 'Innovation Strategy',
    slug: 'innovation-strategy',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 1,
  },
  {
    title: 'Commerce in a Digital World',
    slug: 'commerce-in-a-digital-world',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 1,
  },
  {
    title: 'Startup Growth',
    slug: 'startup-growth',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 2,
  },
  {
    title: 'Corporate Venture Building',
    slug: 'corporate-venture-building',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 2,
  },
  {
    title: 'Bring Purpose to Life',
    slug: 'bring-purpose-to-life',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 3,
  },
  {
    title: 'Sustainability',
    slug: 'sustainability',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 3,
  },
  {
    title: 'Brand Strategy, Design & Performance',
    slug: 'brand-strategy-design-performance',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 4,
  },
  {
    title: 'Content & Communication Strategy',
    slug: 'content-communication-strategy',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 4,
  },
  {
    title: 'Customer Research & Insights',
    slug: 'customer-research-insights',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 4,
  },
  {
    title: 'CX Strategy',
    slug: 'cx-strategy',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 5,
  },
  {
    title: 'Product Design & Build',
    slug: 'product-design-build',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 5,
  },
  {
    title: 'Service Design',
    slug: 'service-design',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 5,
  },
  {
    title: 'Marketing Strategy & Performance',
    slug: 'marketing-strategy-performance',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 6,
  },
  {
    title: 'Content & Asset Management',
    slug: 'content-asset-management',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 6,
  },
  {
    title: 'Membership & Loyalty',
    slug: 'membership-loyalty',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 6,
  },
  {
    title: 'Modern Workplace',
    slug: 'modern workplace',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 6,
  },
].map((item, i) => {
  return merge({}, MOCK_SERVICE_PAGE, {
    id: i + 1,
    hero_src: '/images/about_working_in_office.png',
    hero_alt: 'working in office',
    // Category
    category: getCategoryFromCrudItem(item, MOCK_GROUP_SERVICE_CATEGORYS),
    ...item,
  })
})

export const MOCK_SERVICES = {
  GROUP: MOCK_GROUP_SERVICES,
  TECH: MOCK_TECH_SERVICES,
}
