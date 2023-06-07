import { Technology } from '@onex/types'
import merge from 'lodash/merge'

export const MOCK_TECHNOLOGY_PAGE = {
  // Seo
  seo: {
    title: '{title} Technology',
    description: 'This page is all about the technology that we use',
  },
  // Hero
  avatar_src: '/images/about_shape_circle_radial.svg',
  avatar_alt: '{title}',
  hero_src: '/images/about_working_in_office.png',
  hero_alt: 'People working in office',
  overline: 'Technology',
  title: 'React',
  subtitle:
    'Work with product experts with the know-how tested in 7+ industries.',
  // Sections
  sections: {
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
  },
}

export const MOCK_TECH_TECHNOLOGYS: Technology[] = [
  {
    // Hero
    title: 'JavaScript Development',
    slug: 'javascript-development',
    avatar_src: '/images/technology_javascript.png',
    avatar_alt: 'JavaScript logo',
    is_featured: true,
    is_active: true,
    subtitle:
      'Leverage the power of JavaScript to build interactive and dynamic web applications.',
    hero_src: 'https://source.unsplash.com/1IW4HQuauSU/1600x900',
    hero_alt: 'JavaScript codes',
    // Seo
    seo: {
      title: 'JavaScript Development',
      description:
        'Leverage the power of JavaScript to build interactive and dynamic web applications by working with our expert team.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Harness the power of JavaScript for web application development.',
        items: [
          {
            title:
              'JavaScript is a versatile programming language that allows you to build highly interactive and dynamic web applications. At our JavaScript Development Service, we specialize in leveraging the power of JavaScript to create robust and engaging web applications tailored to your business needs.',
          },
          {
            title:
              'Our team of JavaScript experts stays up-to-date with the latest frameworks, libraries, and best practices. Whether you need a single-page application, a responsive user interface, or a data-driven dashboard, we have the expertise to deliver exceptional results. We follow industry standards and utilize modern development techniques to ensure high performance, scalability, and maintainability of your JavaScript applications.',
          },
        ],
      },
      benefits: {
        overline: 'Benefits',
        title: 'JavaScript Development Services',
        subtitle:
          'With our JavaScript development services, we offer a range of capabilities that include frontend development, framework-based development, performance optimization, code refactoring, and third-party integration.',
        items: [    
          {
            fa_icon: 'fa-cogs',
            title: 'Framework-based development',
            subtitle:
              'We specialize in popular JavaScript frameworks like React, Angular, and Vue.js to build scalable and modular web applications.',
          },
          {
            fa_icon: 'fa-tachometer-alt',
            title: 'Performance optimization',
            subtitle:
              'We optimize the performance of your JavaScript applications, ensuring fast load times, smooth animations, and efficient resource utilization.',
          },
          {
            fa_icon: 'fa-database',
            title: 'Database integration',
            subtitle:
              'We integrate JavaScript applications with databases to store and retrieve data efficiently, ensuring seamless data management.',
          },
          {
            fa_icon: 'fa-mobile',
            title: 'Mobile app development',
            subtitle:
              'We leverage JavaScript frameworks like React Native to develop cross-platform mobile applications that run smoothly on iOS and Android devices.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our JavaScript Development Capabilities',
        subtitle:
          'With our JavaScript expertise, we deliver a wide range of capabilities to meet your development needs.',
        items: [
          {
            fa_icon: 'fa-desktop',
            title: 'Frontend web development',
            subtitle:
              'We excel in creating responsive and interactive web interfaces using the latest JavaScript libraries and technologies.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Custom JavaScript development',
            subtitle:
              'We offer tailored JavaScript development solutions to build unique applications according to your specific requirements.',
          },
          {
            fa_icon: 'fa-laptop-code',
            title: 'Full-stack JavaScript development',
            subtitle:
              'We have expertise in developing both frontend and backend components using JavaScript, providing end-to-end web application development.',
          },
          {
            fa_icon: 'fa-code-branch',
            title: 'Code refactoring and optimization',
            subtitle:
              'We refactor and optimize existing JavaScript codebases to improve performance, maintainability, and scalability.',
          },
          {
            fa_icon: 'fa-server',
            title: 'API development and integration',
            subtitle:
              'We build robust and scalable APIs using JavaScript frameworks like Express.js for seamless integration with frontend and backend systems.',
          },
          {
            fa_icon: 'fa-users',
            title: 'User authentication and authorization',
            subtitle:
              'We implement secure user authentication and authorization systems in JavaScript applications to protect sensitive data and restrict access.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our JavaScript Development Service and how it can benefit your web application projects.',
        items: [
          {
            key: 'faqs-1',
            title: 'What is JavaScript?',
            content:
              'JavaScript is a versatile programming language commonly used for web development. It allows developers to add interactivity and dynamic functionality to web pages.',
          },
          {
            key: 'faqs-2',
            title: 'Why should I choose JavaScript for web application development?',
            content:
              'JavaScript is widely adopted and supported by all modern web browsers, making it a reliable choice for building web applications. It offers a wide range of libraries, frameworks, and tools that facilitate rapid development and code reuse. Additionally, JavaScript\'s versatility allows for both frontend and backend development, making it a full-stack solution for building feature-rich web applications.',
          },
          {
            key: 'faqs-3',
            title: 'Which JavaScript frameworks do you specialize in?',
            content:
              'We specialize in popular JavaScript frameworks like React, Angular, and Vue.js. These frameworks provide efficient solutions for building complex and scalable web applications, and our expertise allows us to leverage their capabilities to deliver high-quality results.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'TypeScript',
    slug: 'typescript',
    avatar_src: '/images/technology_typescript.png',
    avatar_alt: 'Typescript logo',
    is_featured: true,
    is_active: true,
    subtitle:
      'Enhance your frontend development with TypeScript.',
    hero_src: 'https://source.unsplash.com/xrVDYZRGdw4/1600x900',
    hero_alt: 'Laptop with codes on a desk',
    // Seo
    seo: {
      title: 'TypeScript',
      description:
        'Discover the benefits of using TypeScript for frontend development and how our team excels in TypeScript-based projects.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Why Choose TypeScript for Frontend Development?',
        items: [
          {
            title:
              'TypeScript is a powerful superset of JavaScript that brings static typing and advanced features to JavaScript development. By adding type annotations, TypeScript provides better code organisation, improved maintainability, and enhanced tooling support. It enables catching errors at compile-time, resulting in more robust and reliable frontend applications.',
          },
          {
            title:
              'At our company, we specialize in leveraging TypeScript to build scalable and maintainable frontend applications. With TypeScript, we can create code that is more predictable, easier to refactor, and less error-prone. Our team has extensive experience in TypeScript-based frameworks like Angular, React, and Vue.js, enabling us to deliver high-quality and efficient solutions for your frontend needs.',
          },
        ],
      },
      benefits: {
        overline: 'Benefits',
        title: '{title} Development Services',
        subtitle:
          'With our TypeScript development services, we offer a range of capabilities that include frontend development, framework-based development, type safety, code scalability, and improved maintainability.',
        items: [
          {
            fa_icon: 'fa-code',
            title: 'Frontend development',
            subtitle:
              'We develop frontend applications using TypeScript, JavaScript, HTML, and CSS to create visually appealing and interactive user interfaces.',
          },
          {
            fa_icon: 'fa-tachometer-alt',
            title: 'Performance optimization',
            subtitle:
              'We optimize the performance of your TypeScript applications, ensuring fast load times, smooth animations, and efficient resource utilization.',
          },
          {
            fa_icon: 'fa-wrench',
            title: 'Code refactoring',
            subtitle:
              'We refactor and optimize existing TypeScript codebases to improve maintainability, readability, and performance.',
          },
          {
            fa_icon: 'fa-check-circle',
            title: 'Type safety',
            subtitle:
              'We utilize TypeScript to enforce type safety and catch potential errors during development, leading to more reliable and bug-free code.',
          },
          {
            fa_icon: 'fa-expand',
            title: 'Code scalability',
            subtitle:
              'We leverage TypeScript features such as interfaces, classes, and modules to build scalable codebases that can evolve with your application needs.',
          },
          {
            fa_icon: 'fa-heart',
            title: 'Improved maintainability',
            subtitle:
              'With TypeScript, we ensure cleaner, more structured code that is easier to understand, maintain, and extend in the long run.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'To create frontend applications of the highest quality, we follow the best practices that include TypeScript usage, modular architecture, performance optimization, testing, and documentation.',
        items: [
          {
            fa_icon: 'fa-pencil-ruler',
            title: 'Type-safe Development',
            subtitle:
              'We harness the power of TypeScript to build type-safe applications that catch errors early and improve code maintainability.',
          },
          {
            fa_icon: 'fa-desktop',
            title: 'Scalable Architecture',
            subtitle:
              "We design and implement scalable architecture patterns to ensure your frontend applications can grow and evolve with your business needs.",
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Performance Optimization',
            subtitle:
              'We optimize the performance of your frontend applications, ensuring fast load times and smooth user experiences.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Testing and Quality Assurance',
            subtitle:
              'We implement comprehensive testing strategies, including unit tests, integration tests, and end-to-end tests, to ensure the quality and reliability of your applications.',
          },
          {
            fa_icon: 'fa-book',
            title: 'Documentation and Knowledge Transfer',
            subtitle:
              'We provide thorough documentation and knowledge transfer to empower your team and ensure long-term maintainability of your applications.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Third-party Integrations',
            subtitle:
              'We seamlessly integrate third-party libraries, APIs, and services into your frontend applications to enhance functionality and connectivity.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our TypeScript development services and how they can benefit your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why should I choose TypeScript for my frontend projects?',
            content:
              'TypeScript brings the advantages of static typing to JavaScript development, improving code quality, catching errors early, and enhancing tooling support. It allows for better code organisation, scalability, and maintainability, making it an excellent choice for building complex frontend applications.',
          },
          {
            key: 'faqs-2',
            title: 'Which frameworks do you use with TypeScript?',
            content:
              'We have expertise in using TypeScript with popular frontend frameworks such as Angular, React, and Vue.js. We choose the framework based on the specific requirements of your project to ensure the best fit and optimal development experience.',
          },
          {
            key: 'faqs-3',
            title: 'Can I migrate an existing JavaScript project to TypeScript?',
            content:
              'Yes, it is possible to migrate an existing JavaScript project to TypeScript. The migration process involves adding type annotations and gradually refactoring the codebase. We can assist you in the migration process, ensuring a smooth transition to TypeScript while minimizing any disruptions to your project.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'React Development',
    slug: 'react-development',
    is_featured: true,
    is_active: true,
    avatar_src: '/images/technology_react.png',
    avatar_alt: 'React logo',
    subtitle:
      'Harness the power of React to build dynamic and interactive user interfaces for your enterprise applications.',
    hero_src: 'https://source.unsplash.com/xkBaqlcqeb4/1600x900',
    hero_alt: 'React Development coding screen',
    // Seo
    seo: {
      title: 'React Development',
      description:
        'Harness the power of React for dynamic and interactive UIs. Our expert React development services offer frontend expertise, responsive design and more.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Building dynamic and interactive user interfaces with React.',
        items: [
          {
            title:
              'In the realm of frontend development, React has become one of the most popular and widely used libraries. With React, we can create highly efficient and reusable UI components that drive engaging user experiences.',
          },
          {
            title:
              'At our React Development Service, we specialize in harnessing the power of React to build dynamic and interactive user interfaces for enterprise clients. Our team of skilled developers are experienced in creating scalable and performant applications that meet the unique needs of your business.',
          },
        ],
      },
      benefits: {
      overline: 'Benefits',
      title: '{title} Development Services',
      subtitle:
        'With our React development services, we offer a range of capabilities that include frontend development, component-based development, state management, code reusability, and responsive design.',
      items: [
        {
          fa_icon: 'fa-code',
          title: 'Frontend development',
          subtitle:
            'We develop frontend applications using React, JavaScript, HTML, and CSS to create visually appealing and interactive user interfaces.',
        },
        {
          fa_icon: 'fa-cogs',
          title: 'Component-based development',
          subtitle:
            'We specialize in building web applications using React, utilizing the power of reusable components to create scalable and maintainable codebases.',
        },
        {
          fa_icon: 'fa-tachometer-alt',
          title: 'State management',
          subtitle:
            'We employ state management libraries such as Redux or React Context API to manage complex application state and ensure seamless data flow throughout your React application.',
        },
        {
          fa_icon: 'fa-wrench',
          title: 'Code refactoring',
          subtitle:
            'We refactor and optimize existing React codebases to improve maintainability, readability, and performance, ensuring clean and efficient code.',
        },
        {
          fa_icon: 'fa-cube',
          title: 'Code reusability',
          subtitle:
            'We leverage React’s component-based architecture and best practices to develop reusable code modules, reducing development time and effort for future enhancements and features.',
        },
        {
          fa_icon: 'fa-desktop',
          title: 'Responsive design',
          subtitle:
            'We design and develop React applications with a mobile-first approach, ensuring a seamless user experience across various devices and screen sizes.',
        },
      ],
    },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'To create exceptional user interfaces with React, we follow best practices in frontend software engineering and adopt modern development workflows.',
        items: [
          {
            fa_icon: 'fa-code',
            title: 'Component-based architecture',
            subtitle:
              'We architect applications with reusable and modular components, enabling efficient development and maintenance.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Scalable and performant solutions',
            subtitle:
              'We optimize React applications for performance and scalability, ensuring smooth and responsive user experiences even with complex functionality.',
          },
          {
            fa_icon: 'fa-mobile-alt',
            title: 'Responsive design',
            subtitle:
              'We create responsive and mobile-friendly interfaces, making your applications accessible across devices and screen sizes.',
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'State management',
            subtitle:
              'We employ state management libraries like Redux or MobX to effectively manage the application state, ensuring data consistency and seamless user interactions.',
          },
          {
            fa_icon: 'fa-bug',
            title: 'Testing and debugging',
            subtitle:
              'We employ comprehensive testing strategies and debugging techniques to deliver reliable and bug-free React applications.',
          },
          {
            fa_icon: 'fa-tools',
            title: 'Integration and deployment',
            subtitle:
              'We integrate React applications with backend APIs and services, and assist in the deployment process to ensure smooth application delivery.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our React Development Service and how it can benefit your enterprise applications.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why should I choose React for my enterprise applications?',
            content:
              'React offers numerous advantages for enterprise applications, including a component-based architecture, reusability, high performance, and a thriving ecosystem. It enables efficient development, scalability, and easy maintenance, making it an ideal choice for building complex and interactive user interfaces.',
          },
          {
            key: 'faqs-2',
            title: 'What is the benefit of using React in frontend software engineering and dashboard development?',
            content:
              'Using React in frontend software engineering and dashboard development brings several benefits. React\'s component-based architecture allows for building reusable UI components, promoting code reusability and maintainability. It also provides a virtual DOM, enabling efficient rendering and optimizing performance. React\'s ecosystem is vast, with a wide range of libraries and tools available for state management, routing, and UI design. Overall, React empowers developers to create scalable, interactive, and responsive dashboards for enterprise clients.',
          },
          {
            key: 'faqs-3',
            title: 'Can I integrate React into my existing enterprise applications?',
            content:
              'Yes, React can be integrated into existing enterprise applications. React is highly flexible and can be gradually introduced into an application without the need for a full rewrite. You can start by integrating React components into specific parts of your application and progressively migrate or refactor other components. This allows for a smooth transition and leveraging React\'s benefits while preserving your existing codebase and functionality.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Next.js Development',
    slug: 'next-js-development',
    avatar_src: '/images/technology_nextjs.png',
    avatar_alt: 'Next.js logo',
    avatar_width: 104,
    avatar_height: 62,
    is_featured: true,
    is_active: true,
    subtitle:
      'Take your frontend software engineering to the next level with Next.js.',
    hero_src: 'https://source.unsplash.com/EUzk9BIEq6M/1600x900',
    hero_alt: 'Next.js Development',
    // Seo
    seo: {
      title: 'Next.js Development',
      description:
        'Learn about our Next.js development services and how we can help you build high-performance web applications.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Unlocking the power of Next.js for frontend development.',
        items: [
          {
            title:
              'Next.js is a powerful framework that combines the simplicity of React with the performance benefits of server-side rendering (SSR). With Next.js, you can build modern, fast, and scalable web applications that deliver exceptional user experiences.',
          },
          {
            title:
              'We specialize in Next.js development and leverage its features to create frontend solutions that meet the unique needs of enterprise clients. Our team of frontend software engineers excels in building intuitive user interfaces and data-driven dashboards using Next.js.',
          },
        ],
      },
      benefits: {
      overline: 'Benefits',
      title: '{title} Development Services',
      subtitle:
        'With our Next.js development services, we offer a range of capabilities that include server-side rendering, static site generation, API integration, code optimization, and seamless navigation.',
      items: [
        {
          fa_icon: 'fa-code',
          title: 'Frontend development',
          subtitle:
            'We develop frontend applications using Next.js, React, JavaScript, HTML, and CSS to create visually appealing and interactive user interfaces.',
        },
        {
          fa_icon: 'fa-cogs',
          title: 'Server-side rendering (SSR)',
          subtitle:
            'We leverage Next.js to implement server-side rendering, enhancing performance and providing optimized initial page load times for improved user experience.',
        },
        {
          fa_icon: 'fa-tachometer-alt',
          title: 'Static site generation (SSG)',
          subtitle:
            'We utilize Next.js static site generation to generate static HTML files for dynamic websites, improving performance, scalability, and SEO friendliness.',
        },
        {
          fa_icon: 'fa-wrench',
          title: 'Code optimization',
          subtitle:
            'We optimize the Next.js codebase to ensure clean, efficient, and scalable code, improving maintainability and reducing loading times.',
        },
        {
          fa_icon: 'fa-cube',
          title: 'API integration',
          subtitle:
            'We seamlessly integrate APIs into your Next.js applications to fetch and display dynamic data, enabling powerful and interactive web experiences.',
        },
        {
          fa_icon: 'fa-link',
          title: 'Seamless navigation',
          subtitle:
            'We implement client-side navigation using Next.js routing, providing smooth transitions and enhanced user experience within your web application.',
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
            title: 'Performance optimization',
            subtitle:
              'We optimize your interface for performance, ensuring fast loading times and smooth user experiences.',
          },
          {
            fa_icon: 'fa-code-branch',
            title: 'Scalable architecture',
            subtitle:
              'We design and implement scalable architectures to handle high-traffic and complex web applications.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about Next.js development and how it can benefit your frontend projects.',
        items: [
          {
            key: 'faqs-1',
            title: 'What are the advantages of using Next.js for frontend development?',
            content:
              'Next.js offers several advantages, including server-side rendering for better performance, optimized SEO capabilities, and a streamlined development experience. It simplifies frontend development and enables the creation of fast, scalable, and maintainable web applications.',
          },
          {
            key: 'faqs-2',
            title: 'Can Next.js be integrated with existing frontend projects?',
            content:
              'Yes, Next.js can be seamlessly integrated with existing frontend projects. It provides an easy migration path by allowing incremental adoption of its features. You can start by adding Next.js to specific pages or sections of your application and gradually expand its usage as needed. This flexibility makes it a great choice for enhancing the performance and functionality of your existing frontend'
          },
          {
            key: 'faqs-3',
            title: 'Is Next.js suitable for enterprise-level frontend development?',
            content:
              'Absolutely! Next.js is highly suitable for enterprise-level frontend development. Its powerful features, such as server-side rendering, optimized performance, and scalability, make it an ideal choice for building robust and high-performance web applications. With Next.js, you can meet the demands of enterprise clients and deliver exceptional user experiences.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Node.js Development',
    slug: 'node-js-development',
    avatar_src: '/images/technology_node.png',
    avatar_alt: 'Node.js logo',
    avatar_width: 50,
    avatar_height: 55,
    is_featured: true,
    is_active: true,
    subtitle:
      'Leverage the power of Node.js to build scalable and efficient backend solutions for your enterprise applications.',
    hero_src: 'https://source.unsplash.com/0qvBNep1Y04/1600x900',
    hero_alt: 'Desk setup with monitor showing codes',
    // Seo
    seo: {
      title: 'Node.js Development',
      description:
        'Experience business transformation with Node.js development services. Harness the power of this versatile technology for high-performance web applications.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Unlocking the potential of backend development with Node.js.',
        items: [
          {
            title:
              'In today\'s fast-paced digital landscape, backend development plays a crucial role in building robust and scalable applications. At our Node.js Development Service, we specialize in leveraging the power of Node.js to create efficient backend solutions that meet the demands of enterprise clients.',
          },
          {
            title:
              'Node.js is a versatile and lightweight runtime environment that allows for building server-side applications using JavaScript. With its event-driven architecture and non-blocking I/O, Node.js enables the creation of high-performance and scalable backend systems.',
          },
        ],
      },
      benefits: {
      overline: 'Benefits',
      title: '{title} Development Services',
      subtitle:
        'With our Node.js development services, we offer a range of capabilities that leverage the power of JavaScript on the server-side, including server-side rendering, API development, database integration, scalability, and real-time applications.',
      items: [
        {
          fa_icon: 'fa-code',
          title: 'Backend development',
          subtitle:
            'We specialize in Node.js to build scalable and efficient backend applications, handling server-side logic, API development, and database integration.',
        },
        {
          fa_icon: 'fa-cogs',
          title: 'Framework-based development',
          subtitle:
            'We utilize popular Node.js frameworks like Express, Nest.js, and Koa to build robust and modular web applications, ensuring scalability and maintainability.',
        },
        {
          fa_icon: 'fa-tachometer-alt',
          title: 'Performance optimization',
          subtitle:
            'We optimize the performance of your Node.js applications, employing best practices like caching, asynchronous programming, and efficient resource utilization.',
        },
        {
          fa_icon: 'fa-wrench',
          title: 'Code refactoring',
          subtitle:
            'We refactor and improve existing Node.js codebases to enhance maintainability, readability, and performance, ensuring clean and scalable code.',
        },
        {
          fa_icon: 'fa-database',
          title: 'Database integration',
          subtitle:
            'We seamlessly integrate databases like MongoDB, MySQL, or PostgreSQL with your Node.js applications, ensuring efficient data storage and retrieval.',
        },
        {
          fa_icon: 'fa-bolt',
          title: 'Scalability and real-time applications',
          subtitle:
            'We architect Node.js applications to handle high traffic, ensuring scalability and building real-time features using technologies like WebSockets or Socket.IO.',
        },
      ],
    },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'To create backend solutions of the highest quality, we follow best practices that include modular architecture, RESTful APIs, database integration, and performance optimization.',
        items: [
          {
            fa_icon: 'fa-laptop-code',
            title: 'API Development',
            subtitle:
              'We design and develop robust and scalable APIs using Node.js, allowing seamless integration of your frontend and backend systems.',
          },
          {
            fa_icon: 'fa-database',
            title: 'Database Integration',
            subtitle:
              'We specialize in integrating databases such as MongoDB, MySQL, and PostgreSQL with Node.js, enabling efficient data storage and retrieval for your applications.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Modular Architecture',
            subtitle:
              'We follow modular architectural patterns such as MVC (Model-View-Controller) and Microservices to ensure maintainability and scalability of your backend codebase.',
          },
          {
            fa_icon: 'fa-bolt',
            title: 'Performance Optimization',
            subtitle:
              'We optimize your Node.js applications for performance, ensuring fast response times and efficient resource utilization.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Security',
            subtitle:
              'We prioritize security in Node.js development, implementing best practices to protect your applications from common vulnerabilities and threats.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Integration & Deployment',
            subtitle:
              'We assist in integrating Node.js applications with other systems and help you deploy them to production environments for seamless operation.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Node.js Development Service and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why choose Node.js for backend development?',
            content:
              'Node.js offers several advantages for backend development, including high scalability, non-blocking I/O, extensive package ecosystem, and the ability to use JavaScript for both frontend and backend development, enabling code reuse and increased developer productivity.',
          },
          {
            key: 'faqs-2',
            title: 'What types of applications can be built with Node.js?',
            content:
              'Node.js can be used to build a wide range of applications, including web applications, real-time chat applications, streaming applications, API servers, microservices, command-line tools, and more. Its flexibility and scalability make it suitable for various use cases.',
          },
          {
            key: 'faqs-3',
            title: 'Is Node.js suitable for enterprise applications?',
            content:
              'Yes, Node.js is well-suited for enterprise applications. Its event-driven, non-blocking architecture allows for handling a large number of concurrent requests efficiently. It also integrates well with other technologies commonly used in enterprise environments, making it an excellent choice for building scalable and robust backend systems.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Webpack',
    slug: 'webpack',
    avatar_src: '/images/technology_webpack.png',
    avatar_alt: 'Webpack logo',
    is_featured: true,
    is_active: true,
    subtitle:
      'Optimize your frontend development workflow with Webpack.',
    hero_src: 'https://source.unsplash.com/EJSaEnVvZcg/1600x900',
    hero_alt: 'Webpack codes',
    // Seo
    seo: {
      title: 'Webpack',
      description:
        'Discover the power of webpack for efficient and optimized web development. Enhance performance and streamline your workflows with our expert solutions.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Optimize your frontend development workflow.',
        items: [
          {
            title:
              'Webpack is a powerful module bundler that helps you manage and optimize your frontend development workflow. With Webpack, you can efficiently bundle and optimize your JavaScript, CSS, and other assets, enabling you to build performant and scalable web applications.',
          },
          {
            title:
              'We specialize in using Webpack to streamline frontend software engineering and dashboard development. Our team of experts can help you leverage the full potential of Webpack to improve your development process and deliver high-quality frontend solutions.',
          },
        ],
      },
      benefits: {
      overline: 'Benefits',
      title: '{title} Development Services',
      subtitle:
        'With our Webpack development services, we offer a range of capabilities that optimize the build process and enhance the performance of your JavaScript applications. We specialize in frontend development, module bundling, code splitting, performance optimization, and seamless integration with modern frameworks.',
      items: [
        {
          fa_icon: 'fa-code',
          title: 'Frontend development',
          subtitle:
            'We develop frontend applications using JavaScript, HTML, and CSS to create visually appealing and interactive user interfaces.',
        },
        {
          fa_icon: 'fa-cogs',
          title: 'Module bundling',
          subtitle:
            'We utilize Webpack to efficiently bundle your application code, manage dependencies, and optimize the overall build process.',
        },
        {
          fa_icon: 'fa-tachometer-alt',
          title: 'Code splitting',
          subtitle:
            'We implement code splitting techniques to optimize performance by loading only the necessary code for each page or component, reducing initial load times.',
        },
        {
          fa_icon: 'fa-wrench',
          title: 'Performance optimization',
          subtitle:
            'We optimize your JavaScript applications using Webpack plugins and optimizations, ensuring fast load times, efficient resource utilization, and smooth user experiences.',
        },
        {
          fa_icon: 'fa-puzzle-piece',
          title: 'Seamless framework integration',
          subtitle:
            'We seamlessly integrate Webpack with popular JavaScript frameworks like React, Angular, and Vue.js, harnessing their full potential and optimizing the development workflow.',
        },
        {
          fa_icon: 'fa-sync',
          title: 'Build process automation',
          subtitle:
            'We automate the build process using Webpack configuration, allowing for easy development and production builds, code transpilation, minification, and asset optimization.',
        },
      ],
    },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'To optimize your frontend development, we leverage the power of Webpack and its extensive range of features and plugins.',
        items: [
          {
            fa_icon: 'fa-code',
            title: 'Module bundling',
            subtitle:
              'We use Webpack to bundle your application modules efficiently, reducing load times and improving performance.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Build optimization',
            subtitle:
              'We optimize your build process using Webpack, eliminating unnecessary code and reducing file sizes for faster load times.',
          },
          {
            fa_icon: 'fa-compress',
            title: 'Asset management',
            subtitle:
              'We leverage Webpack to manage your project assets, including images, fonts, and stylesheets, for streamlined development and optimized delivery.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Code splitting',
            subtitle:
              'We utilize Webpack to split your code into smaller chunks, allowing for lazy loading and improved caching.',
          },
          {
            fa_icon: 'fa-laptop-code',
            title: 'Development server',
            subtitle:
              'We configure Webpack development server to provide you with a fast and reliable local development environment.',
          },
          {
            fa_icon: 'fa-tasks',
            title: 'Custom configurations',
            subtitle:
              'We create custom Webpack configurations tailored to your project requirements, ensuring optimal performance and scalability.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about Webpack and how it can improve your frontend development workflow.',
        items: [
          {
            key: 'faqs-1',
            title: 'What is Webpack?',
            content:
              'Webpack is a popular module bundler for JavaScript applications. It helps you manage and optimize your frontend assets, allowing you to bundle and transform your code and assets for efficient delivery and improved performance.',
          },
          {
            key: 'faqs-2',
            title: 'Why should I use Webpack?',
            content:
              'Webpack offers numerous benefits for frontend development, including efficient module bundling, code splitting, build automation, and asset optimization. It simplifies the development process and improves the performance of your web applications.',
          },
          {
            key: 'faqs-3',
            title: 'Can Webpack be used with other frontend frameworks?',
            content:
              'Yes, Webpack is framework-agnostic and can be used with various frontend frameworks such as React, Angular, Vue.js, and more. It provides a flexible and customizable configuration, allowing you to integrate it seamlessly into your preferred frontend framework.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Module Federation',
    slug: 'module-federation',
    avatar_src: '/images/technology_module_federation.png',
    avatar_alt: 'Module Federation logo',
    is_featured: true,
    is_active: true,
    subtitle:
      'Enhance your frontend architecture with Module Federation and build scalable, modular applications.',
    hero_src: 'https://source.unsplash.com/26MJGnCM0Wc/1600x900',
    hero_alt: 'People writing on a whiteboard',
    // Seo
    seo: {
      title: 'Module Federation',
      description:
        'Learn how Module Federation can help you build scalable and modular applications with enhanced frontend architecture.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Unlock the power of scalable and modular frontend architecture.',
        items: [
          {
            title:
              'In today\'s fast-paced software development landscape, building large-scale applications requires a modular approach. Module Federation enables you to break down your frontend codebase into smaller, decoupled modules that can be independently developed, deployed, and scaled.',
          },
          {
            title:
              'At our Module Federation Service, we specialize in helping enterprise clients leverage this powerful architecture pattern. By adopting Module Federation, you can achieve enhanced flexibility, maintainability, and scalability for your frontend applications.',
          },
        ],
      },
      benefits: {
      overline: 'Benefits',
      title: '{title} Development Services',
      subtitle:
        'With our Module Federation services, we offer a range of capabilities that empower you to build scalable and collaborative web applications. Leveraging the power of Module Federation, we enable seamless integration of micro-frontends, enhance code reuse, and optimize performance across distributed systems.',
      items: [
        {
          fa_icon: 'fa-code',
          title: 'Frontend development',
          subtitle:
            'We develop frontend applications using JavaScript, HTML, and CSS to create visually appealing and interactive user interfaces.',
        },
        {
          fa_icon: 'fa-cogs',
          title: 'Micro-frontend architecture',
          subtitle:
            'We specialize in building scalable and modular web applications using the Micro-frontend architecture enabled by Module Federation. This allows for independent development and deployment of isolated frontend modules.',
        },
        {
          fa_icon: 'fa-puzzle-piece',
          title: 'Code reuse and composition',
          subtitle:
            'We leverage Module Federation to enable code sharing and composition across multiple projects, maximizing code reuse and reducing redundancy, resulting in efficient development and easier maintenance.',
        },
        {
          fa_icon: 'fa-sync',
          title: 'Collaborative development',
          subtitle:
            'Module Federation allows teams to work independently on different frontend modules, promoting collaboration and parallel development while ensuring seamless integration of these modules into a unified application.',
        },
        {
          fa_icon: 'fa-bolt',
          title: 'Performance optimization',
          subtitle:
            'We optimize performance by dynamically loading frontend modules on-demand, reducing initial load times and improving overall application performance.',
        },
        {
          fa_icon: 'fa-cogs',
          title: 'Scalable and distributed systems',
          subtitle:
            'Module Federation enables the creation of scalable and distributed systems, where individual modules can be developed and deployed independently, allowing for greater flexibility and scalability.',
        },
      ],
    },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'To optimize your frontend development, we leverage the power of Module Federation and its extensive capabilities.',
        items: [
          {
            fa_icon: 'fa-puzzle-piece',
            title: 'Microfrontend architecture',
            subtitle:
              'We design and implement microfrontend architectures using Module Federation, enabling independent development and deployment of frontend modules.',
          },
          {
            fa_icon: 'fa-share-alt',
            title: 'Seamless code sharing',
            subtitle:
              'We utilize Module Federation to enable seamless code sharing across multiple frontend applications, improving development efficiency and reducing duplication.',
          },
          {
            fa_icon: 'fa-cloud-download-alt',
            title: 'Dynamic module loading',
            subtitle:
              'We leverage Module Federation to enable dynamic loading of frontend modules, optimizing resource usage and improving application performance.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Version control',
            subtitle:
              'We utilize Module Federation to manage and control versions of shared modules, ensuring consistent and reliable application behavior across multiple projects.',
          },
          {
            fa_icon: 'fa-exchange-alt',
            title: 'Team collaboration',
            subtitle:
              'We enable efficient collaboration across frontend teams by utilizing Module Federation to share and integrate frontend modules seamlessly.',
          },
          {
            fa_icon: 'fa-expand-alt',
            title: 'Scalable architectures',
            subtitle:
              'We design scalable frontend architectures using Module Federation, allowing your application to grow and evolve without compromising performance or maintainability.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about Module Federation and how it can revolutionize your frontend architecture.',
        items: [
          {
            key: 'faqs-1',
            title: 'What is Module Federation?',
            content:
              'Module Federation is an architectural pattern that allows you to build scalable and modular applications by breaking down your frontend codebase into smaller, decoupled modules. These modules can be independently developed, deployed, and composed together to form a cohesive application.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of using Module Federation?',
            content:
              'Module Federation offers several benefits, including enhanced flexibility, maintainability, and scalability. It enables you to build applications using a Micro Frontends approach, where each module can be developed and deployed independently. It also facilitates dynamic module loading, allowing modules to be loaded on-demand, reducing initial load times and improving user experience. Additionally, Module Federation enables seamless communication and data sharing between micro frontends, enabling you to build integrated and cohesive applications. It also provides version control mechanisms for consistent and reliable updates across modules, and supports scalable frontend architecture to accommodate growth and changing business needs.',
          },
          {
            key: 'faqs-3',
            title: 'How can Module Federation benefit my enterprise?',
            content:
              'Module Federation can benefit your enterprise by improving the scalability and maintainability of your frontend applications. It allows for independent development and deployment of modules, facilitating parallel development efforts and faster time-to-market. With its dynamic module loading capabilities, it enables better performance and user experience by loading modules on-demand. Module Federation also promotes modular architecture, making your codebase more manageable and easier to maintain and scale.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Nx Monorepo',
    slug: 'nx-monorepo',
    avatar_src: '/images/technology_nx.png',
    avatar_alt: 'Nx logo',
    is_featured: true,
    is_active: true,
    subtitle:
      'Build scalable and efficient frontend applications using Nx Monorepo.',
    hero_src: 'https://source.unsplash.com/m_HRfLhgABo/1600x900',
    hero_alt: 'Frontend Development',
    // Seo
    seo: {
      title: 'Nx Monorepo',
      description:
        'Learn how to build scalable and efficient frontend applications using Nx Monorepo.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Scalable and efficient frontend development with Nx Monorepo.',
        items: [
          {
            title:
              'Nx Monorepo is a powerful toolset that helps you build scalable and efficient frontend applications. By leveraging the benefits of a monorepo architecture, Nx enables you to manage multiple projects and share code and dependencies across them. With Nx, you can improve development speed, code quality, and maintainability, making it an ideal choice for enterprise frontend software engineering.',
          },
          {
            title:
              'At our Nx Monorepo Service, we specialize in utilizing the full potential of Nx to create robust and scalable frontend applications. Our team of experts can help you set up and configure your Nx workspace, define project structures, and establish best practices for code sharing, testing, and deployment. With Nx, we can streamline your frontend development process, enhance collaboration, and deliver high-quality dashboard solutions.',
          },
        ],
      },
      benefits: {
      overline: 'Benefits',
      title: '{title} Development Services',
      subtitle:
        'With our Nx Monorepo services, we offer a range of capabilities that enable efficient development, code sharing, and scalability. By leveraging the power of Nx Monorepo, we streamline frontend development, optimize performance, ensure code consistency, and facilitate collaborative workflows.',
      items: [
        {
          fa_icon: 'fa-code',
          title: 'Frontend development',
          subtitle:
            'We develop frontend applications using JavaScript, HTML, and CSS to create visually appealing and interactive user interfaces.',
        },
        {
          fa_icon: 'fa-puzzle-piece',
          title: 'Monorepo architecture',
          subtitle:
            'We specialize in leveraging the Nx Monorepo architecture to manage multiple frontend applications, libraries, and shared code within a single repository. This allows for better code organisation, improved collaboration, and efficient development workflows.',
        },
        {
          fa_icon: 'fa-sync',
          title: 'Code sharing and reuse',
          subtitle:
            'With Nx Monorepo, we enable efficient code sharing and reuse across multiple projects. This reduces redundancy, improves maintainability, and accelerates development by leveraging shared libraries and components.',
        },
        {
          fa_icon: 'fa-chart-line',
          title: 'Performance optimization',
          subtitle:
            'We optimize the performance of your applications by leveraging Nx Monorepo tools and best practices. This includes efficient dependency management, build optimization, and code splitting to achieve fast load times and improved user experience.',
        },
        {
          fa_icon: 'fa-cogs',
          title: 'Code consistency and standards',
          subtitle:
            'Using Nx Monorepo, we enforce code consistency, linting rules, and standardized configurations across projects. This ensures a high level of code quality, readability, and maintainability throughout your applications.',
        },
        {
          fa_icon: 'fa-users',
          title: 'Collaborative development',
          subtitle:
            'Nx Monorepo enables seamless collaboration among developers by providing tools for managing shared code, facilitating efficient workflows, and enabling parallel development across multiple projects within the monorepo.',
        },
      ],
    },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'To optimize your frontend software engineering, we leverage the power of Nx Monorepo and its extensive capabilities.',
        items: [
          {
            fa_icon: 'fa-cubes',
            title: 'Monorepo management',
            subtitle:
              'We help you set up and manage your frontend projects as a monorepo using Nx, allowing you to efficiently work with multiple projects in a unified environment.',
          },
          {
            fa_icon: 'fa-share-alt',
            title: 'Code sharing and reuse',
            subtitle:
              'We leverage Nx Monorepo to facilitate code sharing and reuse across multiple frontend applications, reducing duplication and improving development efficiency.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Efficient project configuration',
            subtitle:
              'We utilize Nx Monorepo to streamline project configuration, enabling consistent settings, build processes, and testing across your codebase.',
          },
          {
            fa_icon: 'fa-code-branch',
            title: 'Development scalability',
            subtitle:
              'We help you scale your frontend development process using Nx Monorepo, allowing you to handle large-scale projects and teams with ease.',
          },
          {
            fa_icon: 'fa-clock',
            title: 'Task automation',
            subtitle:
              'We utilize Nx Monorepo to automate repetitive tasks such as linting, testing, and code formatting, freeing up your team to focus on higher-value development tasks.',
          },
          {
            fa_icon: 'fa-collaborate',
            title: 'Collaborative environment',
            subtitle:
              'We create a collaborative development environment with Nx Monorepo, enabling effective teamwork and efficient sharing of code and resources.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about Nx Monorepo and how it can benefit your frontend development.',
        items: [
          {
            key: 'faqs-1',
            title: 'What is Nx Monorepo?',
            content:
              'Nx Monorepo is a set of tools and techniques for managing multiple frontend projects in a single codebase. It allows for code sharing, efficient dependency management, and improved development productivity.',
          },
          {
            key: 'faqs-2',
            title: 'Why should I use Nx Monorepo?',
            content:
              'Nx Monorepo provides several benefits, including code reuse, improved collaboration, streamlined development workflows, and enhanced scalability. By using Nx Monorepo, you can effectively manage and scale your frontend projects, promote code consistency, and optimize development processes.',
          },
          {
            key: 'faqs-3',
            title: 'How does Nx Monorepo improve frontend development?',
            content:
              'Nx Monorepo improves frontend development by enabling code sharing and reusability, facilitating efficient dependency management, providing powerful tooling for testing and quality assurance, and offering streamlined deployment and scalability features.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'AWS',
    slug: 'aws',
    avatar_src: '/images/technology_aws.png',
    avatar_alt: 'AWS logo',
    avatar_width: 90,
    avatar_height: 60,
    subtitle:
      'Reliable infrastructure for building frontend software engineering and dashboard development projects.',
    hero_src: 'https://source.unsplash.com/HIctpU2PA8E/1600x900',
    hero_alt: 'Amazon logo with desk setup',
    // Seo
    seo: {
      title: 'AWS',
      description:
        'Harness the power of AWS to build scalable, reliable, and secure frontend software engineering and dashboard development projects.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Why choose AWS for frontend software engineering and dashboard development?',
        items: [
          {
            title:
              'AWS provides a reliable infrastructure for building frontend software engineering and dashboard development projects. With its scalable and flexible resources, high availability, and extensive security features, AWS offers a solid foundation for developing robust and performant applications.',
          },
          {
            title:
              'By leveraging AWS services, you can benefit from its cost-efficiency, integration capabilities, and extensive ecosystem of tools and technologies. AWS empowers you to focus on your frontend development work while relying on a trusted and proven cloud platform.',
          },
        ],
      },
      benefits: {
      overline: 'Benefits',
      title: '{title} Development Services',
      subtitle:
        'With our AWS Services, we offer a range of capabilities that empower your business with scalable and reliable cloud solutions. By leveraging the power of Amazon Web Services (AWS), we enable secure and cost-effective development, efficient resource management, and seamless integration with AWS services.',
      items: [
        {
          fa_icon: 'fa-cloud',
          title: 'Scalable cloud solutions',
          subtitle:
            'We leverage AWS services to build scalable and elastic cloud solutions that can handle varying workloads and accommodate business growth. This ensures your applications can scale seamlessly and handle increased user demand.',
        },
        {
          fa_icon: 'fa-lock',
          title: 'Secure infrastructure',
          subtitle:
            'With AWS security best practices, we ensure robust security measures to protect your applications and data. We implement identity and access management, encryption, monitoring, and other security features to safeguard your infrastructure.',
        },
        {
          fa_icon: 'fa-cogs',
          title: 'Cost optimization',
          subtitle:
            'We optimize your AWS infrastructure to maximize cost efficiency. By leveraging AWS services like auto-scaling, serverless computing, and cost monitoring tools, we ensure you only pay for the resources you need and minimize unnecessary expenses.',
        },
        {
          fa_icon: 'fa-code-branch',
          title: 'Seamless integration',
          subtitle:
            'We seamlessly integrate your applications with various AWS services such as Amazon S3, DynamoDB, Lambda, and more. This allows for efficient data storage, real-time processing, and enables you to leverage the full power of the AWS ecosystem.',
        },
        {
          fa_icon: 'fa-globe',
          title: 'Global infrastructure',
          subtitle:
            'With AWS global infrastructure, we ensure low latency and high availability for your applications by leveraging AWS regions and content delivery networks (CDNs). This enables you to reach a global audience and deliver exceptional user experiences.',
        },
        {
          fa_icon: 'fa-database',
          title: 'Managed databases',
          subtitle:
            'We leverage AWS managed database services like Amazon RDS, DynamoDB, and Aurora to ensure efficient data storage, high availability, and automatic backups. This allows you to focus on your application logic while leaving database management to AWS.',
        },
      ],
    },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'To deliver scalable and reliable software solutions, we harness the power of Amazon Web Services (AWS) and its extensive set of services.',
        items: [
          {
            fa_icon: 'fa-server',
            title: 'Cloud infrastructure',
            subtitle:
              'We leverage AWS to build and manage scalable and secure cloud infrastructures that provide high availability and fault tolerance for your applications.',
          },
          {
            fa_icon: 'fa-database',
            title: 'Database solutions',
            subtitle:
              'We utilize AWS database services to design and implement efficient and scalable database solutions that ensure data integrity and availability.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Application deployment',
            subtitle:
              'We utilize AWS deployment tools and services to automate application deployment processes, enabling fast and reliable software releases.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Serverless architecture',
            subtitle:
              'We leverage AWS serverless services, such as AWS Lambda, to build highly scalable and cost-effective applications that eliminate the need for infrastructure management.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Security and compliance',
            subtitle:
              'We implement robust security measures and leverage AWS security services to ensure the confidentiality, integrity, and availability of your applications and data.',
          },
          {
            fa_icon: 'fa-globe',
            title: 'Global scalability',
            subtitle:
              'We utilize AWS global infrastructure to design and deploy applications that can scale seamlessly across multiple regions, enabling global reach and high performance.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about AWS and how it can benefit your frontend software engineering and dashboard development projects.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why should I choose AWS for frontend development projects?',
            content:
              'AWS provides a reliable, scalable, and secure infrastructure for frontend software engineering and dashboard development. It offers flexibility, cost optimization, and seamless integration with other services and tools.',
          },
          {
            key: 'faqs-2',
            title: 'What are the key advantages of using AWS for frontend development?',
            content:
              'Some of the key advantages of using AWS for frontend development include scalability, reliability, security, flexibility, cost optimization, and integration capabilities.',
          },
          {
            key: 'faqs-3',
            title: 'Can I use AWS for both frontend software engineering and dashboard development?',
            content:
              'Absolutely! AWS provides a comprehensive suite of services and tools that cater to both frontend software engineering and dashboard development. You can leverage AWS services like Amazon S3 for storage, Amazon DynamoDB for databases, AWS Lambda for serverless functions, and Amazon CloudFront for content delivery, among many others, to build and deploy your frontend applications and dashboards on the AWS platform.',
          },
        ],
      },
    },
  },
  {
    avatar_src: '/images/technology_antd.png',
    avatar_alt: 'Ant Design logo',
    title: 'Ant Design',
    slug: 'ant-design',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
    is_hidden_from_nav: true,
  },
  {
    avatar_src: '/images/technology_mui.png',
    avatar_alt: 'Mui logo',
    title: 'MUI',
    slug: 'mui',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
    is_hidden_from_nav: true,
  },
  {
    avatar_src: '/images/technology_sass.png',
    avatar_alt: 'Sass logo',
    title: 'Sass',
    slug: 'saas',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
    is_hidden_from_nav: true,
  },
  {
    avatar_src: '/images/technology_storybook.png',
    avatar_alt: 'Storybook logo',
    avatar_width: 50,
    title: 'Storybook',
    slug: 'storybook',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
    is_hidden_from_nav: true,
  },
].map((item, i) => {
  return merge({}, MOCK_TECHNOLOGY_PAGE, {
    id: i + 1,
    ...item,
  })
})

export const MOCK_DATA_TECHNOLOGYS: Technology[] = [
  {
    // Hero
    is_featured: true,
    is_active: true,
    title: 'Python',
    slug: 'python',
    subtitle: 'Build robust, scalable, and efficient data and AI solutions with Python.',
    hero_src: 'https://source.unsplash.com/zGuBURGGmdY/1600x900',
    hero_alt: 'Code through spectacle lens',
    // Sections
    sections: {
        benefits: {
          overline: 'Benefits',
          title: '{title} Development Services',
          subtitle:
            'Our Python services offer diverse benefits, from increased productivity to robust data management, and advanced analytics.',
          items: [
            {
              fa_icon: 'fa-tasks',
              title: 'Productivity',
              subtitle:
                'Python’s simplicity and readability can significantly increase programmer productivity, reducing development time.',
            },
            {
              fa_icon: 'fa-search-dollar',
              title: 'Advanced Analytics',
              subtitle:
                'Python provides extensive libraries and frameworks for advanced analytics and data visualization.',
            },
            {
              fa_icon: 'fa-shield-alt',
              title: 'Reliability & Security',
              subtitle:
                'Python has a mature and robust ecosystem, making it a reliable choice for secure application development.',
            },
            {
              fa_icon: 'fa-rocket',
              title: 'Scalability',
              subtitle:
                'Python applications can be easily scaled up or down to match your business requirements.',
            },
          ],
        },
        features: {
          overline: 'What we do',
          title: 'Our {title} Capabilities',
          subtitle:
            'With a deep understanding of Python, we provide versatile solutions, from data analysis to machine learning, for your business needs.',
          items: [
            {
              fa_icon: 'fa-chart-bar',
              title: 'Data Analysis',
              subtitle:
                'We leverage Python’s powerful libraries to perform complex data analysis, helping you make data-driven decisions.',
            },
            {
              fa_icon: 'fa-robot',
              title: 'Machine Learning',
              subtitle:
                'We create predictive models using Python, enabling your enterprise to leverage the power of machine learning.',
            },
            {
              fa_icon: 'fa-cogs',
              title: 'Automation',
              subtitle:
                'Python is excellent for creating efficient automation scripts, and we harness this capability to improve your business processes.',
            },
            {
              fa_icon: 'fa-project-diagram',
              title: 'Integration',
              subtitle:
                'We integrate Python applications with your existing systems to create a cohesive technology environment.',
            },
            {
              fa_icon: 'fa-database',
              title: 'Database Interaction',
              subtitle:
                'We use Python to interact with various databases, allowing for robust and versatile data operations.',
            },
            {
              fa_icon: 'fa-users-cog',
              title: 'Custom Solutions',
              subtitle:
                'We provide custom Python solutions tailored to your specific business needs and objectives.',
            },
          ],
        },
        faqs: {
          title: 'FAQs',
          subtitle:
            'Learn more about our Python Development services and how they can benefit your business.',
          items: [
            {
              key: 'faqs-1',
              title: 'Why is Python a good choice for data and AI applications?',
              content:
                'Python is versatile, easy to use, and has robust libraries and frameworks specifically designed for data analysis, machine learning, and AI. This makes it a popular choice for such applications.',
            },
            {
              key: 'faqs-2',
              title: 'How does your Python development service work?',
              content:
                'Our Python development service begins with understanding your business needs. Then we design a Python solution that meets those needs, whether it\'s data analysis, automation, or AI. We work closely with your team throughout the process, from design to implementation, to ensure the solution is a perfect fit.',
            },
            {
              key: 'faqs-3',
              title: 'Can you integrate Python solutions with our existing systems?',
              content:
                'Yes, we specialize in creating Python solutions that can be integrated with your existing systems for seamless data exchange and workflow automation.',
            },
          ],
        },
    }
  },
  {
    // Hero
    is_featured: true,
    is_active: true,
    title: 'JavaScript',
    slug: 'javascript',
    subtitle: 'Harness the power of a leading web technology to deliver dynamic, efficient, and high-performing enterprise applications.',
    hero_src: 'https://source.unsplash.com/Agx5_TLsIf4/1600x900',
    hero_alt: 'Working on code',
    // Sections
    sections: {
        benefits: {
          overline: "Benefits",
          title: "{title} Development Services",
          subtitle: "With our JavaScript development services, we bring powerful capabilities that span across full-stack development, robust security measures, AI & Data Science integration, microservices architecture, real-time applications, and efficient debugging and code maintenance.",
          items: [
            {
              fa_icon: "fa-code",
              title: "Full-stack development",
              subtitle: "We provide full-stack development with JavaScript, leveraging its power in both frontend and backend to build high-performing, scalable, and maintainable applications."
            },
            {
              fa_icon: "fa-shield-alt",
              title: "Security",
              subtitle: "Our JavaScript development prioritizes security, protecting your applications against common threats and vulnerabilities, and ensuring the integrity and confidentiality of your data."
            },
            {
              fa_icon: "fa-database",
              title: "AI & Data Science Integration",
              subtitle: "We integrate AI and data science capabilities into your JavaScript applications, enabling you to leverage predictive analytics, automation, and other advanced features."
            },
            {
              fa_icon: "fa-cubes",
              title: "Microservices architecture",
              subtitle: "We utilize JavaScript to implement a microservices architecture, enhancing scalability and maintainability, and allowing different teams to work independently on separate services."
            },
            {
              fa_icon: "fa-sync",
              title: "Real-time applications",
              subtitle: "Leveraging technologies like Node.js and WebSocket, we create real-time applications that enable instant communication and updates, improving user engagement."
            },
            {
              fa_icon: "fa-wrench",
              title: "Debugging & Code Maintenance",
              subtitle: "We provide efficient debugging and code maintenance for your JavaScript applications, ensuring that your codebase is clean, error-free, and up-to-date."
            }
          ]
        },
        features: {
          overline: "What we do",
          title: "Our {title} Capabilities",
          subtitle: "We offer a comprehensive suite of JavaScript development services, ensuring an end-to-end solution for your business.",
          items: [
            {
              fa_icon: "fa-code",
              title: "Full-Stack Development",
              subtitle: "We leverage JavaScript for both frontend and backend development, creating seamless, fully integrated applications."
            },
            {
              fa_icon: "fa-cogs",
              title: "Framework Implementation",
              subtitle: "Our expertise extends to a variety of JavaScript frameworks such as React, Angular, and Vue.js, allowing us to create versatile and highly scalable applications."
            },
            {
              fa_icon: "fa-chart-line",
              title: "Performance Optimization",
              subtitle: "We ensure that your JavaScript application runs smoothly, with optimal load times and efficient resource utilization."
            },
            {
              fa_icon: "fa-shield-alt",
              title: "Security Practices",
              subtitle: "We prioritize secure coding practices to protect your applications from threats, and ensure data integrity and privacy."
            },
            {
              fa_icon: "fa-sync-alt",
              title: "Continuous Integration & Deployment",
              subtitle: "We use CI/CD pipelines for automated testing, ensuring quick deployments and consistent updates."
            },
            {
              fa_icon: "fa-hands-helping",
              title: "Support & Maintenance",
              subtitle: "We offer ongoing support and maintenance, ensuring your JavaScript applications remain updated, secure, and optimized."
            }
          ]
        },
        faqs: {
          title: "FAQs",
          subtitle: "Learn more about our JavaScript Development Service and how we can help enhance your business.",
          items: [
            {
              key: "faqs-1",
              title: "Why is JavaScript important for my business?",
              content: "JavaScript is a versatile language that powers many interactive and dynamic elements on the web. It allows for the creation of rich user interfaces, real-time updates, and full-stack applications. By using JavaScript, we can create efficient, scalable, and high-performing applications that boost your business."
            },
            {
              key: "faqs-2",
              title: "What are the benefits of your JavaScript Development Service?",
              content: "Our JavaScript Development Service focuses on delivering high-quality, scalable, and secure applications tailored to your business needs. We have a team of experienced developers who follow industry best practices, ensuring the delivery of robust and efficient solutions. Furthermore, we offer comprehensive support and maintenance, keeping your applications up-to-date and optimized."
            },
            {
              key: "faqs-3",
              title: "How do you ensure the quality of your JavaScript code?",
              content: "We prioritize code quality and follow strict coding standards and conventions. Our development process includes regular code reviews, automated testing, and continuous integration and deployment (CI/CD) practices to ensure the delivery of high-quality, maintainable, and efficient code."
            }
          ]
        }
    }
  },
  {
    // Hero
    is_featured: true,
    is_active: true,
    title: 'SQL',
    slug: 'sql',
    subtitle: 'Leverage the power of SQL for optimized data management and informed decision-making.',
    hero_src: 'https://source.unsplash.com/fPkvU7RDmCo/1600x900',
    hero_alt: 'Code on laptop',
    // Sections
    sections: {
        benefits: {
          overline: 'Benefits',
          title: '{title} Development Services',
          subtitle:
            'Our SQL services offer diverse benefits, including reliable data management, enhanced security, and business intelligence capabilities.',
          items: [
            {
              fa_icon: 'fa-shield-alt',
              title: 'Robust Security',
              subtitle:
                'SQL databases come with robust security features to protect your sensitive data and maintain regulatory compliance.',
            },
            {
              fa_icon: 'fa-search-dollar',
              title: 'Business Intelligence',
              subtitle:
                'SQL is ideal for Business Intelligence applications, providing powerful tools for data analysis and reporting.',
            },
            {
              fa_icon: 'fa-tasks',
              title: 'Consistent Data Management',
              subtitle:
                'SQL provides consistent data management, reducing the risk of data anomalies and ensuring data integrity.',
            },
            {
              fa_icon: 'fa-rocket',
              title: 'Performance',
              subtitle:
                'Optimized SQL databases deliver high performance, ensuring quick and efficient data operations for your business.',
            },
          ],
        },
        features: {
          overline: 'What we do',
          title: 'Our {title} Capabilities',
          subtitle:
            'With extensive expertise in SQL-based solutions, we provide robust and efficient database services for your enterprise needs.',
          items: [
            {
              fa_icon: 'fa-database',
              title: 'Database Design',
              subtitle:
                'We design SQL databases that are robust, secure, and tailored to your specific business requirements.',
            },
            {
              fa_icon: 'fa-chart-bar',
              title: 'Data Analysis',
              subtitle:
                'Leveraging SQL, we perform deep data analysis to glean insights that drive informed business decisions.',
            },
            {
              fa_icon: 'fa-lock',
              title: 'Data Security',
              subtitle:
                'We implement stringent security measures to protect your SQL databases from unauthorized access and data breaches.',
            },
            {
              fa_icon: 'fa-cogs',
              title: 'Database Optimization',
              subtitle:
                'We optimize your SQL databases for high performance, ensuring efficient data retrieval and updates.',
            },
            {
              fa_icon: 'fa-sync',
              title: 'Data Synchronization',
              subtitle:
                'We provide SQL solutions for real-time data synchronization across various platforms and systems.',
            },
            {
              fa_icon: 'fa-project-diagram',
              title: 'Data Integration',
              subtitle:
                'We ensure seamless integration of your SQL databases with other enterprise systems for smooth business operations.',
            },
          ],
        },
        faqs: {
          title: 'FAQs',
          subtitle:
            'Learn more about our SQL Services and how we can help your business become more data-driven.',
          items: [
            {
              key: 'faqs-1',
              title: 'Why is SQL important for my business?',
              content:
                'SQL is a powerful tool for managing and analyzing data. It allows you to efficiently retrieve and manipulate data, derive meaningful insights, and make informed business decisions. With SQL, you can scale your data operations and maintain the integrity and security of your data.',
            },
            {
              key: 'faqs-2',
              title: 'What are the benefits of working with your SQL Services?',
              content:
                'We provide end-to-end SQL services, helping you navigate from database design and data modeling to query optimization and data analysis. Our team of SQL experts follows best practices to ensure the performance, scalability, and security of your databases. We are committed to helping you unlock the full potential of your data and achieve your business goals.',
            },
            {
              key: 'faqs-3',
              title: 'How do you ensure the security of my data?',
              content:
                'We implement robust security measures, including access control, encryption, and regular security audits, to protect your data from threats and unauthorized access. We also adhere to industry standards and regulations to ensure compliance.',
            },
          ],
        },
    }
  },
  {
    // Hero
    is_featured: true,
    is_active: true,
    title: 'NoSQL',
    slug: 'nosql',
    subtitle: 'Harness the power of flexible, scalable, and efficient NoSQL databases for your enterprise data needs.',
    hero_src: 'https://source.unsplash.com/QQ9LainS6tI/1600x900',
    hero_alt: 'Coding with black and white filter',
    // Sections
    sections: {
        benefits: {
          overline: 'Benefits',
          title: '{title} Development Services',
          subtitle:
            'Our NoSQL development services offer a wide range of benefits that include performance efficiency, easy data management, and flexible scalability.',
          items: [
            {
              fa_icon: 'fa-bolt',
              title: 'High Performance',
              subtitle:
                'NoSQL databases enable high-speed read and write operations, significantly improving the performance of your applications.',
            },
            {
              fa_icon: 'fa-expand-arrows-alt',
              title: 'Flexibility',
              subtitle:
                'With NoSQL databases, you can easily adapt to changing data structures and requirements without any downtime.',
            },
            {
              fa_icon: 'fa-cloud-upload-alt',
              title: 'Cloud Compatibility',
              subtitle:
                'NoSQL databases work exceptionally well with cloud-based storage and computing, allowing for cost-effective data management solutions.',
            },
            {
              fa_icon: 'fa-infinity',
              title: 'Unlimited Scalability',
              subtitle:
                'With horizontal scaling capabilities, NoSQL databases can handle immense volumes of data without compromising on performance.',
            },
          ],
        },
        features: {
          overline: 'What we do',
          title: 'Our {title} Capabilities',
          subtitle:
            'To provide top-tier NoSQL solutions, we leverage the power and flexibility of NoSQL databases to tackle complex data challenges.',
          items: [
            {
              fa_icon: 'fa-database',
              title: 'Schema-less Design',
              subtitle:
                'We leverage the schema-less nature of NoSQL databases to handle diverse data types and structures for your unique needs.',
            },
            {
              fa_icon: 'fa-sync',
              title: 'Real-time Performance',
              subtitle:
                'We utilize NoSQL databases to provide real-time data processing capabilities, critical for dynamic and interactive applications.',
            },
            {
              fa_icon: 'fa-sitemap',
              title: 'Scalability',
              subtitle:
                'We ensure your applications can easily scale with data growth using NoSQL databases, perfect for big data applications and high-traffic websites.',
            },
            {
              fa_icon: 'fa-shield-alt',
              title: 'Data Security',
              subtitle:
                'We implement robust security measures in our NoSQL solutions to protect your data integrity and privacy.',
            },
            {
              fa_icon: 'fa-project-diagram',
              title: 'Data Modeling',
              subtitle:
                'We apply effective data modeling techniques for NoSQL databases to support your complex business operations and reporting needs.',
            },
            {
              fa_icon: 'fa-cogs',
              title: 'System Integration',
              subtitle:
                'We ensure seamless integration of NoSQL databases with your existing software systems for smooth operations.',
            },
          ],
        },
        faqs: {
          title: 'FAQs',
          subtitle:
            'Learn more about our NoSQL Services and how we can help your business.',
          items: [
            {
              key: 'faqs-1',
              title: 'Why should my business consider NoSQL databases?',
              content:
                'NoSQL databases are designed to handle large volumes of structured, semi-structured, and unstructured data. They provide flexible schemas, horizontal scalability, and high availability, making them ideal for businesses with large, diverse, and rapidly changing data needs.',
            },
            {
              key: 'faqs-2',
              title: 'What are the benefits of your NoSQL Services?',
              content:
                'Our NoSQL Services provide you with flexible and efficient solutions to manage your dynamic data needs. We offer custom data modeling, database implementation, real-time processing, scalability, security, and continuous support. Our experts are proficient in various types of NoSQL databases, allowing us to choose the best solutions for your specific business needs.',
            },
            {
              key: 'faqs-3',
              title: 'How does your team ensure the security of NoSQL databases?',
              content:
                'We take database security seriously. We implement robust security measures, including data encryption, secure access controls, and regular audits. We also keep ourselves updated with the latest security trends and vulnerabilities to ensure your data is always protected.',
            },
          ],
        },
    }
  },
  {
    // Hero
    is_featured: true,
    is_active: true,
    title: 'ChatGPT',
    slug: 'chatgpt',
    subtitle: 'Leverage the power of ChatGPT to transform enterprise data and AI solutions, providing intelligent conversational agents and advanced natural language processing capabilities.',
    hero_src: 'https://source.unsplash.com/oLthDWAG244/1600x900',
    hero_alt: 'ChatGPT description screen',
    // Sections
    sections: {
        benefits: {
          overline: 'Benefits',
          title: '{title} Development Services',
          subtitle:
            'With our ChatGPT Services, we offer a range of benefits that empower your enterprise with advanced natural language processing and intelligent conversational agents.',
          items: [
            {
              fa_icon: 'fa-brain',
              title: 'Enhanced Customer Engagement',
              subtitle:
                'Our ChatGPT Services enable personalized and interactive conversations, enhancing customer engagement and satisfaction.',
            },
            {
              fa_icon: 'fa-chart-bar',
              title: 'Data-driven Insights',
              subtitle:
                'Leverage the power of ChatGPT to extract valuable insights from unstructured data, empowering data-driven decision-making.',
            },
            {
              fa_icon: 'fa-clock',
              title: '24/7 Availability',
              subtitle:
                'ChatGPT-powered conversational agents provide round-the-clock availability, ensuring continuous support for your customers and users.',
            },
            {
              fa_icon: 'fa-lock',
              title: 'Data Privacy and Security',
              subtitle:
                'We prioritize data privacy and implement robust security measures to protect your enterprise data throughout our ChatGPT Services.',
            },
            {
              fa_icon: 'fa-lightbulb',
              title: 'Intelligent Recommendations',
              subtitle:
                'Leverage ChatGPT\'s capabilities to deliver personalized recommendations to your users, increasing customer satisfaction and driving sales.',
            },
            {
              fa_icon: 'fa-cogs',
              title: 'Efficient Automation',
              subtitle:
                'Streamline business processes and improve operational efficiency through ChatGPT-powered chatbots that automate repetitive tasks.',
            },
          ],
        },
        features: {
          overline: 'What we do',
          title: 'Our {title} Capabilities',
          subtitle:
            'With our ChatGPT Services, we offer a range of capabilities that include natural language processing, conversational AI, knowledge management, personalized recommendations, sentiment analysis, and chatbot development.',
          items: [
            {
              fa_icon: 'fa-comment-alt',
              title: 'Natural Language Processing',
              subtitle:
                'We utilize advanced natural language processing techniques to understand and interpret human language, enabling effective communication and information extraction.',
            },
            {
              fa_icon: 'fa-comments',
              title: 'Conversational AI',
              subtitle:
                'Our ChatGPT services enable the development of intelligent conversational agents that can engage in human-like conversations and provide personalized assistance.',
            },
            {
              fa_icon: 'fa-book',
              title: 'Knowledge Management',
              subtitle:
                'We help organisations manage and leverage their vast knowledge repositories by implementing ChatGPT-powered knowledge management systems for efficient information retrieval and sharing.',
            },
            {
              fa_icon: 'fa-lightbulb',
              title: 'Personalized Recommendations',
              subtitle:
                'Our ChatGPT solutions leverage user data and machine learning algorithms to deliver personalized recommendations, enhancing user experiences and driving engagement.',
            },
            {
              fa_icon: 'fa-smile',
              title: 'Sentiment Analysis',
              subtitle:
                'We employ sentiment analysis techniques to understand and analyze the emotions and attitudes expressed in user interactions, enabling businesses to gain valuable insights.',
            },
            {
              fa_icon: 'fa-robot',
              title: 'Chatbot Development',
              subtitle:
                'Our expertise in ChatGPT enables us to build intelligent chatbots that can handle customer inquiries, provide support, and automate various business processes.',
            },
          ],
        },
        faqs: {
          title: 'FAQs',
          subtitle:
            'Learn more about our ChatGPT Services and how we can help your business.',
          items: [
            {
              key: 'faqs-1',
              title: 'Why are intelligent conversational agents important for enterprise data?',
              content:
                'Intelligent conversational agents play a crucial role in enterprise data solutions. They enable natural language interactions, providing users with personalized assistance, accurate information retrieval, and efficient knowledge sharing.',
            },
            {
              key: 'faqs-2',
              title: 'What are the benefits of using ChatGPT Services for enterprise data?',
              content:
                'By utilizing our ChatGPT Services, your enterprise can leverage advanced natural language processing capabilities to extract insights from unstructured data, enhance customer experiences with intelligent conversational agents, streamline knowledge management, deliver personalized recommendations, analyze user sentiments, and automate various business processes through chatbot development.',
            },
            {
              key: 'faqs-3',
              title: 'How do you ensure data privacy and security in ChatGPT Services?',
              content:
                'Data privacy and security are of utmost importance to us. We adhere to strict data protection measures, implement encryption protocols, and follow industry best practices to ensure the confidentiality and integrity of your enterprise data throughout our ChatGPT Services.',
            },
          ],
        },
    }
  },
  {
    // Hero
    is_featured: true,
    is_active: true,
    title: 'AWS',
    slug: 'aws',
    avatar_width: 70,
    avatar_height: 46,
    subtitle: 'Unlock the potential of your enterprise data and drive AI-driven solutions using AWS.',
    hero_src: 'https://source.unsplash.com/UTw3j_aoIKM/1600x900',
    hero_alt: 'Lady working on phone and laptop',
    // Sections
    sections: {
        benefits: {
          overline: 'Benefits',
          title: 'AWS Development Services',
          subtitle:
            'With our AWS development services, we offer a range of capabilities that empower enterprises to leverage the full potential of AWS for their data and AI solutions.',
          items: [
            {
              fa_icon: 'fa-cogs',
              title: 'Scalability and Flexibility',
              subtitle:
                'AWS provides scalable infrastructure and flexible services, allowing your enterprise to easily adapt and grow as your data and AI needs evolve.',
            },
            {
              fa_icon: 'fa-lock',
              title: 'High Security Standards',
              subtitle:
                'AWS offers robust security features and compliance frameworks, ensuring the confidentiality and integrity of your enterprise data.',
            },
            {
              fa_icon: 'fa-lightbulb',
              title: 'Innovation and Agility',
              subtitle:
                'By leveraging AWS services, you can drive innovation and achieve agility in developing and deploying data-driven solutions, enabling faster time-to-market.',
            },
            {
              fa_icon: 'fa-globe',
              title: 'Global Infrastructure',
              subtitle:
                'AWS has a vast global infrastructure, enabling enterprises to deliver their data and AI solutions to users around the world with low latency and high performance.',
            },
            {
              fa_icon: 'fa-cogs',
              title: 'Integrated Services',
              subtitle:
                'AWS offers a comprehensive suite of integrated services, including storage, analytics, machine learning, and more, streamlining your data and AI workflows.',
            },
            {
              fa_icon: 'fa-users',
              title: 'Enterprise Support and Expertise',
              subtitle:
                'With AWS, you benefit from enterprise-grade support and access to a vast ecosystem of AWS experts and resources, ensuring the success of your data and AI initiatives.',
            },
          ],
        },
        features: {
          overline: 'What we do',
          title: 'Our {title} Capabilities',
          subtitle:
            'We offer a comprehensive range of AWS services to address the unique data and AI needs of enterprise clients.',
          items: [
            {
              fa_icon: 'fa-database',
              title: 'Scalable Data Storage',
              subtitle:
                'Leverage AWS scalable and secure data storage solutions to manage large volumes of enterprise data effectively.',
            },
            {
              fa_icon: 'fa-cogs',
              title: 'Advanced Analytics',
              subtitle:
                'Utilize AWS analytics services to gain actionable insights from your data and make informed business decisions.',
            },
            {
              fa_icon: 'fa-robot',
              title: 'AI and Machine Learning',
              subtitle:
                'Harness the power of AWS AI and machine learning services to build intelligent solutions and automate business processes.',
            },
            {
              fa_icon: 'fa-cloud-upload-alt',
              title: 'Data Integration',
              subtitle:
                'Integrate diverse data sources using AWS services for seamless data flow and consolidation.',
            },
            {
              fa_icon: 'fa-shield-alt',
              title: 'Data Security and Compliance',
              subtitle:
                'Ensure data security and compliance with AWS security services and best practices.',
            },
            {
              fa_icon: 'fa-server',
              title: 'Infrastructure Management',
              subtitle:
                'Efficiently manage your infrastructure with AWS services, ensuring reliability and scalability.',
            },
          ],
        },
        faqs: {
          title: 'FAQs',
          subtitle:
            'Learn more about our AWS services and how they can transform your enterprise.',
          items: [
            {
              key: 'faqs-1',
              title: 'Why should my enterprise choose AWS for data and AI solutions?',
              content:
                'AWS offers a comprehensive suite of services specifically designed for data and AI solutions. It provides scalable and secure infrastructure, advanced analytics capabilities, and AI services to unlock the full potential of your enterprise data and drive innovation.',
            },
            {
              key: 'faqs-2',
              title: 'What are the benefits of leveraging AWS for data science?',
              content:
                'By leveraging AWS, you can achieve cost efficiency, scalability, and reliability for your data science initiatives. AWS services provide flexible storage, powerful analytics, and machine learning capabilities that enable you to extract valuable insights and deliver impactful data-driven solutions.',
            },
            {
              key: 'faqs-3',
              title: 'How can AWS help in data security and compliance?',
              content:
                'AWS offers robust security services and compliance frameworks to ensure the confidentiality, integrity, and availability of your enterprise data. It provides encryption, access controls, auditing, and compliance certifications to meet the highest security standards.',
            },
          ],
        },
    }
  },
  {
    // Hero
    is_featured: true,
    is_active: true,
    title: 'Tableau',
    slug: 'tableau',
    subtitle: 'Harness the power of data visualization with Tableau to gain actionable insights and make informed business decisions.',
    hero_src: 'https://source.unsplash.com/eveI7MOcSmw/1600x900',
    hero_alt: 'Analytics overview report',
    // Sections
    sections: {
        benefits: {
          overline: 'Benefits',
          title: 'Tableau Development Services',
          subtitle:
            'With our Tableau services, we offer a range of benefits that empower you to unlock the full potential of your data and make informed decisions.',
          items: [
            {
              fa_icon: 'fa-chart-line',
              title: 'Actionable Insights',
              subtitle:
                'Tableau enables you to transform complex data into clear and actionable insights, helping you identify patterns, trends, and opportunities for business growth.',
            },
            {
              fa_icon: 'fa-eye',
              title: 'Visual Data Exploration',
              subtitle:
                'Tableau\'s interactive visualizations allow you to explore your data from different angles, empowering you to discover valuable insights and make data-driven decisions.',
            },
            {
              fa_icon: 'fa-cogs',
              title: 'Efficient Data Analysis',
              subtitle:
                'With Tableau, you can analyze large datasets efficiently, saving time and effort in data preparation and analysis processes.',
            },
            {
              fa_icon: 'fa-users',
              title: 'Collaborative Analytics',
              subtitle:
                'Tableau facilitates collaborative data analysis by enabling teams to share insights, collaborate on projects, and make collective data-driven decisions.',
            },
            {
              fa_icon: 'fa-check',
              title: 'Data Accuracy and Consistency',
              subtitle:
                'Tableau ensures data accuracy and consistency by connecting to various data sources, providing a single source of truth for your organisation.',
            },
            {
              fa_icon: 'fa-line-chart',
              title: 'Real-time Data Monitoring',
              subtitle:
                'Tableau allows you to monitor key metrics and KPIs in real time, providing up-to-date information for quick and proactive decision-making.',
            },
          ],
        },
        features: {
          overline: 'What we do',
          title: 'Our {title} Capabilities',
          subtitle:
            'Harnessing the power of Snowflake, we provide cutting-edge cloud data warehousing solutions that cater to the diverse needs of your enterprise.',
          items: [
            {
              fa_icon: 'fa-cloud',
              title: 'Cloud-based Storage',
              subtitle:
                'We leverage Snowflake’s cloud-native architecture to provide flexible, scalable, and secure data storage solutions.',
            },
            {
              fa_icon: 'fa-cogs',
              title: 'Data Engineering',
              subtitle:
                'Our data engineers efficiently utilize Snowflake for processing and transforming large volumes of data, making it ready for analysis.',
            },
            {
              fa_icon: 'fa-shield-alt',
              title: 'Security',
              subtitle:
                'We prioritize data security, using Snowflake’s robust security measures to protect your sensitive business data.',
            },
            {
              fa_icon: 'fa-sync',
              title: 'Data Integration',
              subtitle:
                'We help in seamless data integration with Snowflake, enabling your enterprise to unify various data sources.',
            },
            {
              fa_icon: 'fa-chart-bar',
              title: 'Data Analytics',
              subtitle:
                'Utilizing Snowflake, we deliver advanced data analytics capabilities, providing deeper insights into your business.',
            },
            {
              fa_icon: 'fa-users-cog',
              title: 'Custom Solutions',
              subtitle:
                'We tailor Snowflake solutions to meet your specific business objectives and requirements.',
            },
          ],
        },
        faqs: {
          title: 'FAQs',
          subtitle:
            'Learn more about Tableau and how it can transform your data into actionable insights.',
          items: [
            {
              key: 'faqs-1',
              title: 'What is Tableau?',
              content:
                'Tableau is a powerful data visualization and business intelligence platform that allows users to connect to various data sources, create interactive dashboards, and gain insights through visual analysis.',
            },
            {
              key: 'faqs-2',
              title: 'Why is data visualization important?',
              content:
                'Data visualization is important because it allows individuals and organisations to understand complex data and extract meaningful insights quickly. Visual representations of data can reveal patterns, trends, and relationships that are not easily apparent in raw data.',
            },
            {
              key: 'faqs-3',
              title: 'How can Tableau benefit my business?',
              content:
                'Tableau can benefit your business by enabling you to explore, analyze, and visualize your data in a user-friendly and interactive manner. It empowers data-driven decision-making, helps identify trends and patterns, and enables effective communication of insights to stakeholders.',
            },
          ],
        },
    }
  },
  {
    // Hero
    is_featured: true,
    is_active: true,
    title: 'Snowflake',
    slug: 'snowflake',
    avatar_height: 50,
    avatar_width: 50,
    subtitle: 'Discover the benefits of Snowflake, the leading cloud data platform for enterprise data and AI solutions.',
    hero_src: 'https://source.unsplash.com/hC_796Wu-VY/1600x900',
    hero_alt: 'Person sitting at desk taking notes',
    // Sections
    sections: {
        benefits: {
          overline: 'Benefits',
          title: '{title} Services',
          subtitle:
            'Our Snowflake services offer diverse benefits, including data democratization, real-time analytics, cost-effectiveness, and scalability.',
          items: [
            {
              fa_icon: 'fa-users',
              title: 'Data Democratization',
              subtitle:
                'Snowflake enables data democratization, allowing users across your organisation to access and analyze data as needed.',
            },
            {
              fa_icon: 'fa-clock',
              title: 'Real-time Analytics',
              subtitle:
                'Snowflake’s architecture allows for real-time data analytics, facilitating timely business decision making.',
            },
            {
              fa_icon: 'fa-dollar-sign',
              title: 'Cost-effective',
              subtitle:
                'Snowflake’s pay-per-use model allows for cost-effective data storage and analytics.',
            },
            {
              fa_icon: 'fa-expand-arrows-alt',
              title: 'Scalability',
              subtitle:
                'With Snowflake, we provide scalable solutions that can adapt to your evolving business needs.',
            },
          ],
        },
        features: {
          overline: 'What we do',
          title: 'Our Snowflake Capabilities',
          subtitle:
            'Leverage the power of Snowflake to unlock the value of your enterprise data and drive data-driven decision-making.',
          items: [
            {
              fa_icon: 'fa-database',
              title: 'Unified Data Platform',
              subtitle:
                'Consolidate and integrate your data from multiple sources into a single, scalable, and secure cloud-based data platform.',
            },
            {
              fa_icon: 'fa-cloud',
              title: 'Scalability and Performance',
              subtitle:
                'Snowflake\'s cloud-native architecture provides limitless scalability and high-performance analytics for even the largest datasets.',
            },
            {
              fa_icon: 'fa-lock',
              title: 'Advanced Security',
              subtitle:
                'Ensure the security and privacy of your enterprise data with Snowflake\'s comprehensive security features and built-in encryption.',
            },
            {
              fa_icon: 'fa-cogs',
              title: 'Data Integration',
              subtitle:
                'Seamlessly integrate and analyze structured and semi-structured data from various sources, including data lakes and data warehouses.',
            },
            {
              fa_icon: 'fa-chart-line',
              title: 'Advanced Analytics',
              subtitle:
                'Leverage Snowflake\'s advanced analytics capabilities, including machine learning and AI, to extract valuable insights from your data.',
            },
            {
              fa_icon: 'fa-code',
              title: 'Developer-Friendly',
              subtitle:
                'Snowflake provides a developer-friendly environment with support for multiple programming languages and easy integration with existing tools and workflows.',
            },
          ],
        },
        faqs: {
          title: 'FAQs',
          subtitle:
            'Learn more about Snowflake and how it can transform your enterprise data and AI solutions.',
          items: [
            {
              key: 'faqs-1',
              title: 'What is Snowflake?',
              content:
                'Snowflake is a cloud-native data platform that provides a scalable, secure, and high-performance environment for storing, analyzing, and sharing data across your organisation. It offers advanced features for data integration, analytics, and machine learning, empowering enterprises to unlock the value of their data and make data-driven decisions.',
            },
            {
              key: 'faqs-2',
              title: 'How does Snowflake ensure data security?',
              content:
                'Snowflake prioritizes data security and privacy. It employs various security measures, including encryption at rest and in transit, role-based access controls, data masking, and auditing capabilities. With Snowflake, you can trust that your data is protected.',
            },
            {
              key: 'faqs-3',
              title: 'Can Snowflake handle large-scale data analytics?',
              content:
                'Absolutely! Snowflake\'s cloud-native architecture enables it to handle massive datasets and deliver high-performance analytics. It scales dynamically to meet the demands of your data analytics workloads, ensuring fast query execution and efficient resource utilization.',
            },
          ],
        },
    }
  },
].map((item, i) => {
  return merge({}, MOCK_TECHNOLOGY_PAGE, {
    id: i + 1,
    avatar_src: `/images/technology_${item.slug}.png`,
    avatar_alt: `${item.title} logo`,
    seo: {
      title: item.title,
      description: item.subtitle,
    },
    ...item,
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
    }
  })
})

export const MOCK_TECHNOLOGYS = {
  TECH: MOCK_TECH_TECHNOLOGYS,
  GROUP: [],
  DATA: MOCK_DATA_TECHNOLOGYS,
  DESIGN: [],
  DIGITAL: [],
  FINX: [],
  GOVX: [],
}
