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
    title: 'JavaScript',
    slug: 'javascript',
    avatar_src: '/images/technology_javascript.png',
    avatar_alt: 'JavaScript',
    is_featured: true,
    subtitle:
      'Leverage the power of JavaScript to build interactive and dynamic web applications.',
    hero_src: 'https://source.unsplash.com/1600x900/?javascript',
    hero_alt: 'JavaScript',
    // Seo
    seo: {
      title: 'JavaScript Development',
      description:
        'This page is all about leveraging the power of JavaScript to build interactive and dynamic web applications.',
    },
    // Sections
    sections: {
      summary: {
        title:
          'Harness the power of JavaScript for web application development.',
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
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'With our JavaScript development services, we offer a range of capabilities that include frontend development, framework-based development, performance optimization, code refactoring, and third-party integration.',
        items: [
          {
            fa_icon: 'fa-code',
            title: 'Frontend development',
            subtitle:
              'We develop frontend applications using JavaScript, HTML, and CSS to create visually appealing and interactive user interfaces.',
          },
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
            fa_icon: 'fa-wrench',
            title: 'Code refactoring',
            subtitle:
              'We refactor and optimize existing JavaScript codebases to improve maintainability, readability, and performance.',
          },
          {
            fa_icon: 'fa-plug',
            title: 'Third-party integration',
            subtitle:
              'We integrate third-party APIs, libraries, and services into your JavaScript applications, enabling enhanced functionality and seamless data exchange.',
          },
          {
            fa_icon: 'fa-rocket',
            title: 'Application deployment',
            subtitle:
              'We assist in deploying your JavaScript applications to various hosting platforms, ensuring smooth and reliable deployment processes.',
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
            title:
              'Why should I choose JavaScript for web application development?',
            content:
              "JavaScript is widely adopted and supported by all modern web browsers, making it a reliable choice for building web applications. It offers a wide range of libraries, frameworks, and tools that facilitate rapid development and code reuse. Additionally, JavaScript's versatility allows for both frontend and backend development, making it a full-stack solution for building feature-rich web applications.",
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
    avatar_alt: 'Typescript',
    is_featured: true,
    subtitle: 'Enhance your frontend development with TypeScript.',
    hero_src: 'https://source.unsplash.com/xrVDYZRGdw4/1600x900',
    hero_alt: 'TypeScript',
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
              'TypeScript is a powerful superset of JavaScript that brings static typing and advanced features to JavaScript development. By adding type annotations, TypeScript provides better code organization, improved maintainability, and enhanced tooling support. It enables catching errors at compile-time, resulting in more robust and reliable frontend applications.',
          },
          {
            title:
              'At our company, we specialize in leveraging TypeScript to build scalable and maintainable frontend applications. With TypeScript, we can create code that is more predictable, easier to refactor, and less error-prone. Our team has extensive experience in TypeScript-based frameworks like Angular, React, and Vue.js, enabling us to deliver high-quality and efficient solutions for your frontend needs.',
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
              'We design and implement scalable architecture patterns to ensure your frontend applications can grow and evolve with your business needs.',
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
              'TypeScript brings the advantages of static typing to JavaScript development, improving code quality, catching errors early, and enhancing tooling support. It allows for better code organization, scalability, and maintainability, making it an excellent choice for building complex frontend applications.',
          },
          {
            key: 'faqs-2',
            title: 'Which frameworks do you use with TypeScript?',
            content:
              'We have expertise in using TypeScript with popular frontend frameworks such as Angular, React, and Vue.js. We choose the framework based on the specific requirements of your project to ensure the best fit and optimal development experience.',
          },
          {
            key: 'faqs-3',
            title:
              'Can I migrate an existing JavaScript project to TypeScript?',
            content:
              'Yes, it is possible to migrate an existing JavaScript project to TypeScript. The migration process involves adding type annotations and gradually refactoring the codebase. We can assist you in the migration process, ensuring a smooth transition to TypeScript while minimizing any disruptions to your project.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'React',
    slug: 'react',
    is_featured: true,
    avatar_src: '/images/technology_react.png',
    avatar_alt: 'React',
    subtitle:
      'Harness the power of React to build dynamic and interactive user interfaces for your enterprise applications.',
    hero_src: 'https://source.unsplash.com/xkBaqlcqeb4/1600x900',
    hero_alt: 'React Development',
    // Seo
    seo: {
      title: 'React Development',
      description:
        'This page is all about leveraging React to build powerful and responsive user interfaces for your enterprise applications.',
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
            title:
              'What is the benefit of using React in frontend software engineering and dashboard development?',
            content:
              "Using React in frontend software engineering and dashboard development brings several benefits. React's component-based architecture allows for building reusable UI components, promoting code reusability and maintainability. It also provides a virtual DOM, enabling efficient rendering and optimizing performance. React's ecosystem is vast, with a wide range of libraries and tools available for state management, routing, and UI design. Overall, React empowers developers to create scalable, interactive, and responsive dashboards for enterprise clients.",
          },
          {
            key: 'faqs-3',
            title:
              'Can I integrate React into my existing enterprise applications?',
            content:
              "Yes, React can be integrated into existing enterprise applications. React is highly flexible and can be gradually introduced into an application without the need for a full rewrite. You can start by integrating React components into specific parts of your application and progressively migrate or refactor other components. This allows for a smooth transition and leveraging React's benefits while preserving your existing codebase and functionality.",
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Next.js',
    slug: 'next-js',
    avatar_src: '/images/technology_nextjs.png',
    avatar_alt: 'Next.js',
    avatar_width: 104,
    avatar_height: 62,
    is_featured: true,
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
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'Our Next.js development services encompass a wide range of capabilities to deliver top-notch frontend solutions.',
        items: [
          {
            fa_icon: 'fa-code',
            title: 'Fast and efficient development',
            subtitle:
              'We utilize the power of Next.js to streamline the frontend development process and deliver results quickly.',
          },
          {
            fa_icon: 'fa-server',
            title: 'Server-side rendering (SSR)',
            subtitle:
              'With Next.js, we enable server-side rendering to enhance performance and provide better user experiences.',
          },
          {
            fa_icon: 'fa-bolt',
            title: 'Optimized performance',
            subtitle:
              'We optimize Next.js applications for speed and performance, ensuring fast page load times and smooth interactions.',
          },
          {
            fa_icon: 'fa-search',
            title: 'SEO-friendly architecture',
            subtitle:
              'Next.js offers built-in support for SEO, making your web application more discoverable by search engines.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Scalable and maintainable codebase',
            subtitle:
              'We follow best practices in Next.js development to create scalable and maintainable codebases for your projects.',
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
            title:
              'What are the advantages of using Next.js for frontend development?',
            content:
              'Next.js offers several advantages, including server-side rendering for better performance, optimized SEO capabilities, and a streamlined development experience. It simplifies frontend development and enables the creation of fast, scalable, and maintainable web applications.',
          },
          {
            key: 'faqs-2',
            title: 'Can Next.js be integrated with existing frontend projects?',
            content:
              'Yes, Next.js can be seamlessly integrated with existing frontend projects. It provides an easy migration path by allowing incremental adoption of its features. You can start by adding Next.js to specific pages or sections of your application and gradually expand its usage as needed. This flexibility makes it a great choice for enhancing the performance and functionality of your existing frontend',
          },
          {
            key: 'faqs-3',
            title:
              'Is Next.js suitable for enterprise-level frontend development?',
            content:
              'Absolutely! Next.js is highly suitable for enterprise-level frontend development. Its powerful features, such as server-side rendering, optimized performance, and scalability, make it an ideal choice for building robust and high-performance web applications. With Next.js, you can meet the demands of enterprise clients and deliver exceptional user experiences.',
          },
        ],
      },
    },
  },
  {
    title: 'Node.js',
    slug: 'node-js',
    avatar_src: '/images/technology_node.png',
    avatar_alt: 'Node.js',
    avatar_width: 50,
    avatar_height: 55,
    is_featured: true,
    subtitle:
      'Leverage the power of Node.js to build scalable and efficient backend solutions for your enterprise applications.',
    hero_src: 'https://source.unsplash.com/0qvBNep1Y04/1600x900',
    hero_alt: 'Node.js Development',
    // Seo
    seo: {
      title: 'Node.js Development',
      description:
        'This page is all about building scalable and efficient backend solutions using Node.js.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Unlocking the potential of backend development with Node.js.',
        items: [
          {
            title:
              "In today's fast-paced digital landscape, backend development plays a crucial role in building robust and scalable applications. At our Node.js Development Service, we specialize in leveraging the power of Node.js to create efficient backend solutions that meet the demands of enterprise clients.",
          },
          {
            title:
              'Node.js is a versatile and lightweight runtime environment that allows for building server-side applications using JavaScript. With its event-driven architecture and non-blocking I/O, Node.js enables the creation of high-performance and scalable backend systems.',
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
    avatar_alt: 'Webpack',
    is_featured: true,
    subtitle: 'Optimize your frontend development workflow with Webpack.',
    hero_src: 'https://source.unsplash.com/EJSaEnVvZcg/1600x900',
    hero_alt: 'Webpack',
    // Seo
    seo: {
      title: 'Webpack',
      description:
        'This page is all about optimizing your frontend development workflow with Webpack.',
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
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'With Webpack, we offer a range of capabilities to enhance your frontend development workflow.',
        items: [
          {
            fa_icon: 'fa-cog',
            title: 'Bundle and optimization',
            subtitle:
              'We utilize Webpack to bundle and optimize your frontend assets, ensuring efficient delivery and improved performance.',
          },
          {
            fa_icon: 'fa-tools',
            title: 'Build automation',
            subtitle:
              'We configure Webpack to automate common development tasks such as code transpilation, minification, and asset management.',
          },
          {
            fa_icon: 'fa-expand-arrows-alt',
            title: 'Code splitting',
            subtitle:
              'We implement code splitting techniques with Webpack to split your JavaScript bundles into smaller chunks, reducing initial load times.',
          },
          {
            fa_icon: 'fa-globe',
            title: 'Global asset management',
            subtitle:
              'We manage and bundle your global assets like fonts, images, and stylesheets using Webpack, ensuring consistent delivery across your application.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Custom configurations',
            subtitle:
              'We provide custom Webpack configurations tailored to your specific project requirements, ensuring optimal performance and developer experience.',
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
    avatar_alt: 'Module Federation',
    is_featured: true,
    subtitle:
      'Enhance your frontend architecture with Module Federation and build scalable, modular applications.',
    hero_src: 'https://source.unsplash.com/26MJGnCM0Wc/1600x900',
    hero_alt: 'Module Federation',
    // Seo
    seo: {
      title: 'Module Federation',
      description:
        'Learn how Module Federation can help you build scalable and modular applications with enhanced frontend architecture.',
    },
    // Sections
    sections: {
      summary: {
        title:
          'Unlock the power of scalable and modular frontend architecture.',
        items: [
          {
            title:
              "In today's fast-paced software development landscape, building large-scale applications requires a modular approach. Module Federation enables you to break down your frontend codebase into smaller, decoupled modules that can be independently developed, deployed, and scaled.",
          },
          {
            title:
              'At our Module Federation Service, we specialize in helping enterprise clients leverage this powerful architecture pattern. By adopting Module Federation, you can achieve enhanced flexibility, maintainability, and scalability for your frontend applications.',
          },
        ],
      },
      features: {
        overline: 'What we offer',
        title: 'Our {title} Capabilities',
        subtitle:
          'We combine our expertise in frontend software engineering with the power of Module Federation to deliver high-quality, modular applications tailored to your business needs.',
        items: [
          {
            fa_icon: 'fa-puzzle-piece',
            title: 'Micro Frontends',
            subtitle:
              'We implement Micro Frontends using Module Federation to break down your application into independent, scalable modules that can be developed and deployed separately.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Dynamic Module Loading',
            subtitle:
              'We leverage the dynamic module loading capabilities of Module Federation to load modules on-demand, reducing initial load times and improving user experience.',
          },
          {
            fa_icon: 'fa-share-alt',
            title: 'Cross-Application Communication',
            subtitle:
              'We enable seamless communication and data sharing between micro frontends, allowing you to build integrated and cohesive applications.',
          },
          {
            fa_icon: 'fa-code-branch',
            title: 'Version Control and Updates',
            subtitle:
              'We implement version control mechanisms to ensure consistent and reliable updates across your application modules, keeping your codebase up-to-date.',
          },
          {
            fa_icon: 'fa-sitemap',
            title: 'Scalable Architecture',
            subtitle:
              'We design and implement scalable frontend architectures using Module Federation, allowing your application to grow and adapt to changing business needs.',
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
    avatar_alt: 'Nx',
    is_featured: true,
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
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We follow industry best practices to build scalable and efficient frontend applications using Nx Monorepo.',
        items: [
          {
            fa_icon: 'fa-cogs',
            title: 'Monorepo architecture',
            subtitle:
              'We create a monorepo architecture using Nx to manage multiple frontend projects and enable code sharing and reuse.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Code sharing and reusability',
            subtitle:
              'We leverage Nx capabilities to share code and dependencies across projects, reducing duplication and improving development efficiency.',
          },
          {
            fa_icon: 'fa-check-double',
            title: 'Testing and quality assurance',
            subtitle:
              'We implement testing strategies and quality assurance processes using Nx tools, ensuring code reliability and maintainability.',
          },
          {
            fa_icon: 'fa-cloud-upload-alt',
            title: 'Deployment and scalability',
            subtitle:
              'We configure deployment pipelines and utilize Nx scalability features to ensure smooth deployment and scalability of your applications.',
          },
          {
            fa_icon: 'fa-tools',
            title: 'Workspace setup and configuration',
            subtitle:
              'We provide expertise in setting up and configuring your Nx workspace, optimizing it for your specific project requirements.',
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
    avatar_alt: 'Aws',
    avatar_width: 90,
    avatar_height: 60,
    subtitle:
      'Reliable infrastructure for building frontend software engineering and dashboard development projects.',
    hero_src: 'https://source.unsplash.com/HIctpU2PA8E/1600x900',
    hero_alt: 'AWS',
    // Seo
    seo: {
      title: 'AWS',
      description:
        'Harness the power of AWS to build scalable, reliable, and secure frontend software engineering and dashboard development projects.',
    },
    // Sections
    sections: {
      summary: {
        title:
          'Why choose AWS for frontend software engineering and dashboard development?',
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
      features: {
        overline: 'What we do',
        title: 'Our AWS Capabilities',
        subtitle:
          'To create frontend software engineering and dashboard development solutions of the highest quality, we utilize various AWS services and best practices.',
        items: [
          {
            fa_icon: 'fa-server',
            title: 'Scalability',
            subtitle:
              'Leverage AWS elastic resources to handle varying workloads and accommodate growth for your applications.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Reliability and Security',
            subtitle:
              "Utilize AWS infrastructure's high availability and built-in security features to ensure the reliability and protection of your applications.",
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Flexibility',
            subtitle:
              'Benefit from the flexibility offered by AWS, allowing you to choose from a wide range of programming languages, frameworks, and services for your frontend projects.',
          },
          {
            fa_icon: 'fa-dollar-sign',
            title: 'Cost Optimization',
            subtitle:
              'Optimize costs with AWS pay-as-you-go pricing models, enabling you to only pay for the resources and services you utilize.',
          },
          {
            fa_icon: 'fa-code-branch',
            title: 'Integration',
            subtitle:
              'Seamlessly integrate AWS with other Amazon services and third-party tools, expanding the capabilities of your frontend applications and dashboards.',
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
            title:
              'What are the key advantages of using AWS for frontend development?',
            content:
              'Some of the key advantages of using AWS for frontend development include scalability, reliability, security, flexibility, cost optimization, and integration capabilities.',
          },
          {
            key: 'faqs-3',
            title:
              'Can I use AWS for both frontend software engineering and dashboard development?',
            content:
              'Absolutely! AWS provides a comprehensive suite of services and tools that cater to both frontend software engineering and dashboard development. You can leverage AWS services like Amazon S3 for storage, Amazon DynamoDB for databases, AWS Lambda for serverless functions, and Amazon CloudFront for content delivery, among many others, to build and deploy your frontend applications and dashboards on the AWS platform.',
          },
        ],
      },
    },
  },
  {
    avatar_src: '/images/technology_antd.png',
    avatar_alt: 'Ant Design',
    title: 'Ant Design',
    slug: 'ant-design',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
    is_hidden_from_nav: true,
    is_draft: true,
  },
  {
    avatar_src: '/images/technology_mui.png',
    avatar_alt: 'Mui',
    title: 'MUI',
    slug: 'mui',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
    is_hidden_from_nav: true,
    is_draft: true,
  },
  {
    avatar_src: '/images/technology_sass.png',
    avatar_alt: 'Sass',
    title: 'Sass',
    slug: 'saas',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
    is_hidden_from_nav: true,
    is_draft: true,
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
    is_draft: true,
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
