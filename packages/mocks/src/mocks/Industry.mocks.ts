import merge from 'lodash/merge'

export const MOCK_INDUSTRY_PAGE = {
  // Seo
  seo: {
    title: '{title} Industry',
    description: 'This page is all about the technology that we use',
  },
  // Hero
  avatar_src: '/images/about_shape_circle_radial.svg',
  avatar_alt: 'Three circles',
  hero_src: '/images/about_working_in_office.png',
  hero_alt: 'People working in office',
  overline: 'Industry',
  title: 'React',
  subtitle:
    'Work with product experts with the know-how tested in 7+ industries.',
  // Sections
  sections: {
    summary: {
      title: 'Innovation that drives real impact.',
    },
    benefits: {
      overline: 'What we do',
      title: 'Our Suite of {title} Services',
      subtitle:
        "Whether designing and developing a new application for an ambitious idea, or upgrading an existing tool, we're the right team to help.",
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
            'We create human-centred designs focused on driving conversions and achieving business goals.',
        },
        {
          avatar_src: '/images/about_shape_square_with_circle.svg',
          avatar_alt: 'Square with two circles',
          overline: '03',
          title: 'Scale up development',
          subtitle:
            'We create human-centred designs focused on driving conversions and achieving business goals.',
        },
        {
          avatar_src: '/images/about_shape_circles.svg',
          avatar_alt: 'Three circles',
          overline: '04',
          title: 'Improve a current system',
          subtitle:
            'We create human-centred designs focused on driving conversions and achieving business goals.',
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
      overline: 'Our Solutions',
      title: 'Empowering the {title} Sector',
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

export const MOCK_GROUP_INDUSTRYS = [
  {
    // Hero
    title: 'Finance',
    slug: 'finance',
    fa_icon: 'fa-coins',
    is_featured: true,
    subtitle:
      'Empowering finance firms with tailor-made enterprise software solutions to drive business success.',
    hero_src: 'https://source.unsplash.com/6Pv4LtEw9GM/1600x900',
    hero_alt: 'Financial Building',
    // Seo
    seo: {
      title: 'Finance',
      description:
        'Providing expertly crafted enterprise software solutions to drive digital transformation in the financial sector.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Driving digital transformation in finance.',
        items: [
          {
            title:
              'In the rapidly evolving world of finance, enterprise software solutions are key to staying ahead. We specialize in developing bespoke software solutions that drive efficiency, security, and scalability in financial enterprises.',
          },
          {
            title:
              'Our deep industry knowledge and technological expertise make us uniquely positioned to help your organisation navigate its digital transformation journey. We build solutions that not only meet your current needs but also scale with your future growth.',
          },
        ],
      },
      features: {
        overline: 'Our Solutions',
        title: 'Empowering the {title} Sector',
        subtitle:
          'Leveraging the latest technologies, we provide comprehensive software development services for the finance industry.',
        items: [
          {
            fa_icon: 'fa-code',
            title: 'Custom software development',
            subtitle:
              'We develop tailor-made software solutions that align with your business objectives and cater to your unique operational needs.',
          },
          {
            fa_icon: 'fa-chart-bar',
            title: 'Data analytics solutions',
            subtitle:
              'We build robust data analytics solutions to help you derive actionable insights from your data and drive informed decision-making.',
          },
          {
            fa_icon: 'fa-lock',
            title: 'Security & Compliance',
            subtitle:
              'We prioritize security and regulatory compliance in every solution we build, to protect your data and maintain trust with your clients.',
          },
          {
            fa_icon: 'fa-cloud',
            title: 'Cloud solutions',
            subtitle:
              'We enable smooth migration to the cloud and develop cloud-native applications, to enhance scalability and operational efficiency.',
          },
          {
            fa_icon: 'fa-robot',
            title: 'AI & Machine Learning',
            subtitle:
              'We integrate AI and Machine Learning capabilities into your systems to automate processes, reduce errors and improve customer experiences.',
          },
          {
            fa_icon: 'fa-sync-alt',
            title: 'System Integration',
            subtitle:
              'We ensure your systems work together seamlessly, improving data flow, operational efficiency, and overall business performance.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our enterprise software development services for the financial industry.',
        items: [
          {
            key: 'faqs-1',
            title:
              'Why is digital transformation important for finance companies?',
            content:
              'Digital transformation enables finance companies to streamline operations, improve customer experiences, and make data-driven decisions. It can also enhance security, compliance, and scalability, key aspects in the financial sector.',
          },
          {
            key: 'faqs-2',
            title:
              'What type of software solutions do you provide for finance companies?',
            content:
              'We offer a wide range of software solutions, including custom software development, data analytics solutions, security and compliance, cloud solutions, AI and Machine Learning integration, and system integration.',
          },
          {
            key: 'faqs-3',
            title:
              'How do you ensure the security and compliance of the software you develop?',
            content:
              'We follow stringent security protocols and best practices in software development. We also ensure our software solutions comply with all relevant regulations and standards in the financial industry.',
          },
        ],
      },
    },
  },
  {
    title: 'Government',
    subtitle:
      'We combine technology and a delivery-focused culture to enable leaders across public sector organisations to turn ambition into action.',
    slug: 'government',
    fa_icon: 'fa-landmark-flag',
    is_featured: true,
    hero_src: 'https://source.unsplash.com/x_0hW-KaCgI/1600x900',
    hero_alt: 'Circular seating area',
    sections: {
      summary: {
        title: 'Driving digital transformation in government agencies.',
        items: [
          {
            title:
              'We understand the critical role of technology in improving public services, increasing efficiency, and enhancing transparency in government operations. Our expertise in enterprise software development enables us to deliver innovative solutions that drive digital transformation and empower government agencies to better serve their constituents.',
          },
        ],
      },
      features: {
        overline: 'Our Solutions',
        title: 'Empowering the {title} Sector',
        subtitle:
          'With our deep understanding of government operations and regulations, we offer a range of solutions that help government agencies achieve their goals and deliver exceptional services.',
        items: [
          {
            fa_icon: 'fa-cogs',
            title: 'Custom Software Development',
            subtitle:
              'We develop custom software solutions that address the unique needs and processes of government agencies, streamlining operations and improving efficiency.',
          },
          {
            fa_icon: 'fa-database',
            title: 'Data Management and Analytics',
            subtitle:
              'Our data management and analytics solutions enable government agencies to leverage data effectively, gain insights, and make data-driven decisions.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Cybersecurity and Compliance',
            subtitle:
              'We provide robust cybersecurity solutions and ensure compliance with regulations to protect sensitive government data and systems.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Citizen Engagement Platforms',
            subtitle:
              'Our citizen engagement platforms facilitate seamless communication and interaction between government agencies and citizens, enhancing public participation and satisfaction.',
          },
          {
            fa_icon: 'fa-globe',
            title: 'Digital Transformation Strategy',
            subtitle:
              'We help government agencies develop and implement comprehensive digital transformation strategies to modernise operations and deliver citizen-centric services.',
          },
          {
            fa_icon: 'fa-wrench',
            title: 'Legacy Systems Modernisation',
            subtitle:
              'We assist in modernising legacy systems, enabling government agencies to leverage emerging technologies and enhance service delivery.',
          },
        ],
      },
      faqs: {
        title: 'Frequently Asked Questions',
        subtitle:
          'Learn more about our Government Solutions and how they can benefit your agency.',
        items: [
          {
            key: 'faqs-1',
            title: 'How can technology solutions benefit government agencies?',
            content:
              'Technology solutions can help government agencies streamline operations, enhance citizen services, improve data management and security, enable data-driven decision-making, and drive digital transformation to meet the evolving needs of citizens.',
          },
          {
            key: 'faqs-2',
            title:
              'What types of software solutions do you offer for government agencies?',
            content:
              'We offer a range of software solutions tailored to the specific needs of government agencies, including citizen engagement platforms, e-governance systems, data management and analytics solutions, workflow automation tools, and secure government portals.',
          },
          {
            key: 'faqs-3',
            title:
              'Do you have experience working with government compliance and regulations?',
            content:
              'Yes, we have extensive experience working with government compliance and regulations. We understand the unique requirements and standards that government agencies must adhere to, and we ensure that our solutions meet the necessary compliance and security standards.',
          },
        ],
      },
    },
  },
  {
    title: 'Maritime',
    is_featured: true,
    subtitle:
      'We help maritime product teams drive efficiencies, unlock new value, and create new business models.',
    slug: 'maritime',
    fa_icon: 'fa-ship',
    hero_src: 'https://source.unsplash.com/sfjS-FglvU4/1600x900',
    hero_alt: 'Ship in the ocean',
    sections: {
      summary: {
        title: 'Driving innovation in the maritime industry.',
        items: [
          {
            title:
              'We understand the intricate workings of maritime operations, including vessel management, logistics, supply chain, port operations, and regulatory compliance. Leveraging our expertise, we work closely with maritime enterprises to identify their pain points and develop strategic technology solutions that address their specific needs.',
          },
        ],
      },
      features: {
        overline: 'Our Solutions',
        title: 'Empowering the {title} Sector',
        subtitle:
          'With our deep knowledge of the maritime industry and cutting-edge technologies, we offer a range of solutions that help maritime organisations stay ahead in a rapidly evolving digital landscape.',
        items: [
          {
            fa_icon: 'fa-cogs',
            title: 'Vessel Management Systems',
            subtitle:
              'We develop advanced vessel management systems that optimize operations, improve vessel performance, and enhance crew efficiency.',
          },
          {
            fa_icon: 'fa-database',
            title: 'Data Analytics for Maritime',
            subtitle:
              'Our data analytics solutions provide actionable insights for vessel performance, fuel efficiency, predictive maintenance, and more.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Maritime Cybersecurity',
            subtitle:
              'We implement robust cybersecurity measures to protect maritime systems, data, and infrastructure from cyber threats.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Crew Management Systems',
            subtitle:
              'Our crew management systems streamline crew operations, rostering, training management, and compliance with regulatory requirements.',
          },
          {
            fa_icon: 'fa-globe',
            title: 'Maritime Digital Platforms',
            subtitle:
              'We develop digital platforms that connect various stakeholders in the maritime ecosystem, enabling collaboration, data sharing, and improved decision-making.',
          },
          {
            fa_icon: 'fa-wrench',
            title: 'Legacy Systems Modernisation',
            subtitle:
              'We assist in modernising legacy systems in the maritime industry, leveraging emerging technologies to enhance efficiency and reduce costs.',
          },
        ],
      },
      faqs: {
        title: 'Frequently Asked Questions',
        subtitle:
          'Learn more about our Maritime Solutions and how they can benefit your organisation.',
        items: [
          {
            key: 'faqs-1',
            title: 'What are the key challenges in the maritime industry?',
            content:
              'The maritime industry faces challenges such as regulatory compliance, operational inefficiencies, security threats, environmental sustainability, and optimizing logistics across complex supply chains.',
          },
          {
            key: 'faqs-2',
            title:
              'How can technology improve operations in the maritime sector?',
            content:
              'Technology can help improve maritime operations by automating manual processes, enhancing vessel performance monitoring, optimizing route planning, enabling real-time data sharing and collaboration, and providing data-driven insights for better decision-making.',
          },
          {
            key: 'faqs-3',
            title:
              'What software solutions do you offer for the maritime industry?',
            content:
              'We offer a range of software solutions tailored to the maritime industry, including fleet management systems, vessel tracking and monitoring solutions, port management software, maritime analytics platforms, supply chain optimization tools, and compliance management systems.',
          },
        ],
      },
    },
  },
  {
    title: 'Real Estate',
    subtitle:
      'Unlock the value in every dimension of your real estate with integrated, data-led services that support your overall product strategy.',
    slug: 'real-estate',
    fa_icon: 'fa-map',
    is_featured: true,
    hero_src: 'https://source.unsplash.com/qyzo7TDSVQs/1600x900',
    hero_alt: 'Buildings being constructed',
    sections: {
      summary: {
        title: 'Driving innovation in the real estate industry.',
        items: [
          {
            title:
              'The real estate industry relies heavily on effective management, streamlined processes, and the ability to adapt to changing market conditions. Our team of experienced professionals combines industry knowledge with technical excellence to deliver innovative solutions tailored specifically for the real estate industry.',
          },
        ],
      },
      features: {
        overline: 'Our Solutions',
        title: 'Empowering the {title} Sector',
        subtitle:
          'With our deep knowledge of the real estate industry and cutting-edge technologies, we offer a range of solutions that help real estate organisations thrive in a digital-first era.',
        items: [
          {
            fa_icon: 'fa-building',
            title: 'Property Management Systems',
            subtitle:
              'We develop comprehensive property management systems that automate and optimize property leasing, maintenance, tenant management, and financial processes.',
          },
          {
            fa_icon: 'fa-money-bill-wave',
            title: 'Real Estate Financial Software',
            subtitle:
              'Our real estate financial software solutions simplify complex financial calculations, reporting, budgeting, and forecasting for real estate portfolios.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Customer Relationship Management (CRM)',
            subtitle:
              'We implement CRM systems tailored for real estate businesses, enabling efficient lead management, sales tracking, and customer engagement.',
          },
          {
            fa_icon: 'fa-map-marked-alt',
            title: 'Geospatial Analytics',
            subtitle:
              'Our geospatial analytics solutions provide valuable insights for site selection, market analysis, spatial planning, and property valuation.',
          },
          {
            fa_icon: 'fa-cloud-upload-alt',
            title: 'Cloud-Based Document Management',
            subtitle:
              'We develop secure cloud-based document management systems that streamline document storage, retrieval, collaboration, and compliance for real estate companies.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Workflow Automation',
            subtitle:
              'We automate real estate workflows, reducing manual tasks and improving efficiency in processes such as property transactions, approvals, and document generation.',
          },
        ],
      },
      faqs: {
        title: 'Frequently Asked Questions',
        subtitle:
          'Learn more about our Real Estate Solutions and how they can benefit your organisation.',
        items: [
          {
            key: 'faqs-1',
            title: 'What are the key challenges in the real estate industry?',
            content:
              'The real estate industry faces challenges such as property management, lease administration, tenant relationship management, investment analysis, regulatory compliance, and adapting to changing market conditions.',
          },
          {
            key: 'faqs-2',
            title:
              'How can technology improve operations in the real estate sector?',
            content:
              'Technology can improve real estate operations by automating manual processes, centralizing property and tenant data, streamlining lease administration, enabling online property listings and transactions, facilitating customer self-service, and providing data-driven insights for better decision-making.',
          },
          {
            key: 'faqs-3',
            title:
              'What software solutions do you offer for the real estate industry?',
            content:
              'We offer a range of software solutions tailored to the real estate industry, including real estate management systems, property analytics platforms, transaction management software, customer relationship management (CRM) tools, property listing portals, and investment analysis platforms.',
          },
        ],
      },
    },
  },
].map((item, i) => {
  return merge({}, MOCK_INDUSTRY_PAGE, {
    id: i + 1,
    ...item,
    sections: {
      ...item.sections,
      checklist: {
        subtitle:
          'Unlocking the potential of enterprise technology through expert consulting and software development services tailored to drive your business growth.',
      },
      cta: {
        hero_src: '/images/about_nodes_above_city.png',
        hero_alt: 'Laser net over city',
        overline: 'Get Started',
        title: 'Partnering with {appTitle}',
        subtitle:
          '{appTitle} partners with enterprise clients to tackle the most challenging software hurdles. With a keen focus on bespoke enterprise software development, we leverage leading technologies and methodologies tailored to your business requirements. Our approach is meticulously customized for each project, promising seamless collaboration with your team to choose the most suitable technologies. We shine in enterprise software development and consulting, and we are equipped to apply our knowledge and skills to your project, no matter its current stage in the product lifecycle.',
      },
    },
  })
})

export const MOCK_TECH_INDUSTRYS = [
  {
    // Hero
    title: 'Finance',
    slug: 'finance',
    is_featured: true,
    fa_icon: 'fa-coins',
    subtitle:
      'Partner with finance experts to optimize your business processes and make data-driven decisions.',
    hero_src: 'https://source.unsplash.com/amLfrL8LGls/1600x900',
    hero_alt: 'Finance laptop',
    // Seo
    seo: {
      title: 'Finance',
      description:
        'Optimize your business processes with expert finance solutions. Streamline operations, make data-driven decisions, and drive sustainable growth.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Optimize your business processes with finance expertise.',
        items: [
          {
            title:
              "In today's competitive business landscape, finance plays a crucial role in driving growth and success. At our Finance Service, we specialize in providing finance solutions that help you optimize your business processes, streamline operations, and make data-driven decisions.",
          },
          {
            title:
              'We understand the unique challenges faced by businesses in the finance industry, and our team of experts is equipped with the knowledge and experience to address them. Whether you need assistance with financial analysis, budgeting, risk management, or strategic planning, we have the expertise to guide you towards financial success.',
          },
        ],
      },
      features: {
        overline: 'Our Solutions',
        title: 'Empowering the {title} Sector',
        subtitle:
          'We offer a range of finance services that are tailored to meet the specific needs of your business and industry.',
        items: [
          {
            fa_icon: 'fa-chart-bar',
            title: 'Financial analysis',
            subtitle:
              'We provide comprehensive financial analysis services to help you gain valuable insights into your business performance and make informed decisions.',
          },
          {
            fa_icon: 'fa-money-bill-wave',
            title: 'Budgeting and forecasting',
            subtitle:
              'We assist in developing effective budgeting and forecasting strategies to optimize your financial resources and plan for future growth.',
          },
          {
            fa_icon: 'fa-exchange-alt',
            title: 'Risk management',
            subtitle:
              'We help identify and mitigate financial risks by implementing robust risk management strategies and frameworks.',
          },
          {
            fa_icon: 'fa-balance-scale',
            title: 'Compliance and regulations',
            subtitle:
              'We ensure that your business adheres to financial regulations and compliance standards, providing guidance and support throughout the process.',
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Strategic planning',
            subtitle:
              'We assist in developing strategic financial plans that align with your business goals and drive sustainable growth.',
          },
          {
            fa_icon: 'fa-chart-pie',
            title: 'Performance measurement',
            subtitle:
              'We help you track and evaluate your financial performance through effective performance measurement and reporting.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Finance Service and how we can help optimize your business processes.',
        items: [
          {
            key: 'faqs-1',
            title:
              'Why is a high-quality user interface important for my finance business?',
            content:
              'A high-quality user interface is crucial for finance businesses as it enhances user experience, improves productivity, and enables users to make informed financial decisions. It helps streamline complex workflows, visualize financial data effectively, and ensure data accuracy and security.',
          },
          {
            key: 'faqs-2',
            title:
              'What are the benefits of working with your company for the finance industry?',
            content:
              'By partnering with our software development company, you can benefit from our expertise in frontend software engineering and dashboard development tailored specifically for the finance industry. We prioritize data security, performance optimization, and scalability to meet the unique demands of finance applications. Our solutions empower your enterprise to make data-driven decisions, enhance operational efficiency, and deliver a superior user experience.',
          },
          {
            key: 'faqs-3',
            title:
              'How do we approach frontend software engineering and dashboard development for finance applications?',
            content:
              'Our approach involves a deep understanding of finance domain knowledge, collaboration with stakeholders, and leveraging the latest frontend technologies. We conduct thorough user research to identify user needs and pain points, develop intuitive interfaces with seamless navigation and responsive design, implement robust data visualization techniques, and ensure compliance with industry standards and regulations. Throughout the development process, we prioritize user testing and feedback to deliver user interfaces that align with your business objectives and drive financial success.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Government',
    slug: 'government',
    subtitle:
      'Partner with software development experts to create efficient solutions for government agencies.',
    hero_src: 'https://source.unsplash.com/o0kbc907i20/1600x900',
    hero_alt: 'Greek temple',
    fa_icon: 'fa-landmark-flag',
    is_featured: true,
    // Seo
    seo: {
      title: 'Government',
      description:
        'Discover innovative technology solutions for the government sector. We offer expertise in delivering impactful software solutions.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Efficient solutions for government agencies.',
        items: [
          {
            title:
              'We understand the unique challenges faced by government agencies, from complex data management to citizen engagement. Our team of experts is equipped with the knowledge and experience to develop custom software solutions that streamline processes, enhance transparency, and enable data-driven decision-making.',
          },
        ],
      },
      features: {
        overline: 'Our Solutions',
        title: 'Empowering the {title} Sector',
        subtitle:
          'We offer a range of software development services tailored to meet the specific needs of government agencies.',
        items: [
          {
            fa_icon: 'fa-cogs',
            title: 'Custom software solutions',
            subtitle:
              'We develop custom software solutions that address the unique requirements of government agencies, improving efficiency and effectiveness.',
          },
          {
            fa_icon: 'fa-line-chart',
            title: 'Data management and analytics',
            subtitle:
              'We provide robust data management and analytics solutions to help government agencies make data-driven decisions and enhance service delivery.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Security and compliance',
            subtitle:
              'We prioritize security and compliance in our software solutions to ensure the protection of sensitive government data and adherence to regulations.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Citizen engagement platforms',
            subtitle:
              'We develop citizen engagement platforms that facilitate communication, collaboration, and interaction between government agencies and citizens.',
          },
          {
            fa_icon: 'fa-chart-pie',
            title: 'Performance measurement',
            subtitle:
              'We help government agencies track and measure their performance through effective data analysis and reporting tools.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Integration and interoperability',
            subtitle:
              'We specialize in integrating diverse systems and ensuring interoperability to enable seamless information exchange across government agencies.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Software Development Service for Government and how we can assist government agencies.',
        items: [
          {
            key: 'faqs-1',
            title:
              'Why is a high-quality user interface important for government organisations?',
            content:
              'A high-quality user interface is crucial for government organisations as it enhances citizen experience, promotes transparency, and facilitates access to government services. It improves engagement, fosters trust, and enables efficient interaction with government systems and platforms.',
          },
          {
            key: 'faqs-2',
            title:
              'What are the benefits of working with your company for government organisations?',
            content:
              'By partnering with our software development company, government organisations can benefit from our expertise in frontend software engineering and dashboard development tailored specifically for the public sector. We prioritize security, compliance, and accessibility to meet government standards and regulations. Our solutions empower government entities to deliver citizen-centric services, leverage data-driven insights, and enhance overall governance.',
          },
          {
            key: 'faqs-3',
            title:
              'How do we approach frontend software engineering and dashboard development for government organisations?',
            content:
              'Our approach involves in-depth collaboration with government stakeholders to understand their unique requirements and objectives. We prioritize usability, accessibility, and data visualization to create user interfaces and dashboards that cater to diverse user groups. We follow industry best practices, adhere to government standards, conduct thorough security assessments, and ensure compliance with relevant regulations. Our solutions focus on enhancing service delivery, promoting open data initiatives, and driving digital transformation in the government sector.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Maritime',
    slug: 'maritime',
    is_featured: true,
    subtitle:
      'Partner with software development experts to optimize maritime operations and enhance efficiency.',
    hero_src: 'https://source.unsplash.com/xewrfLD8emE/1600x900',
    hero_alt: 'Port with shipping containers',
    fa_icon: 'fa-ship',
    // Seo
    seo: {
      title: 'Maritime',
      description:
        'Optimize maritime operations with tailored software solutions. Streamline processes, improve decision-making, and ensure compliance with our expert team.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Optimize maritime operations with software solutions.',
        items: [
          {
            title:
              'In the maritime industry, efficiency and effectiveness are crucial for successful operations. At our Software Development Service for Maritime, we specialize in creating software solutions that optimize maritime processes, enhance decision-making, and improve overall efficiency.',
          },
          {
            title:
              'We understand the unique challenges faced by the maritime industry, from fleet management to logistics. Our team of experts is equipped with the knowledge and experience to develop customized software solutions that streamline operations, increase productivity, and ensure compliance with industry regulations.',
          },
        ],
      },
      features: {
        overline: 'Our Solutions',
        title: 'Empowering the {title} Sector',
        subtitle:
          'We offer a range of software development services tailored to meet the specific needs of the maritime industry.',
        items: [
          {
            fa_icon: 'fa-cogs',
            title: 'Fleet management solutions',
            subtitle:
              'We develop software solutions that enable efficient fleet management, including vessel tracking, maintenance scheduling, and performance monitoring.',
          },
          {
            fa_icon: 'fa-line-chart',
            title: 'Data analytics and visualization',
            subtitle:
              'We provide advanced data analytics and visualization tools that help maritime organisations gain valuable insights and make data-driven decisions.',
          },
          {
            fa_icon: 'fa-map-marked-alt',
            title: 'Navigation and route optimization',
            subtitle:
              'We develop navigation and route optimization solutions that enhance maritime safety, efficiency, and fuel consumption.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Security and risk management',
            subtitle:
              'We prioritize security and risk management in our software solutions to ensure the protection of maritime assets and compliance with industry regulations.',
          },
          {
            fa_icon: 'fa-truck-moving',
            title: 'Logistics and supply chain management',
            subtitle:
              'We offer software solutions that optimize logistics and supply chain management in the maritime industry, facilitating seamless operations and inventory control.',
          },
          {
            fa_icon: 'fa-chart-pie',
            title: 'Performance measurement and reporting',
            subtitle:
              'We help maritime organisations track and measure their performance through comprehensive performance measurement and reporting tools.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Software Development Service for Maritime and how we can optimize your maritime operations.',
        items: [
          {
            key: 'faqs-1',
            title:
              'Why is software development important for the maritime industry?',
            content:
              'Software development plays a crucial role in optimizing maritime operations, enhancing safety, efficiency, and decision-making. It allows for streamlined processes, data analysis, and real-time monitoring, resulting in improved productivity and cost-effectiveness in the maritime industry.',
          },
          {
            key: 'faqs-2',
            title:
              'What are the benefits of working with your company for the maritime industry?',
            content:
              'By partnering with our software development company, maritime businesses can leverage our expertise in frontend software engineering and dashboard development to drive digital transformation. Our solutions enable real-time data visualization, predictive analytics, and process automation, resulting in improved operational efficiency, enhanced safety measures, better fleet management, and increased profitability.',
          },
          {
            key: 'faqs-3',
            title:
              'How do you ensure the security of maritime data in your software solutions?',
            content:
              'We understand the importance of data security in the maritime industry. We implement robust security measures to protect maritime data from unauthorized access, breaches, and data loss. This includes encryption, access controls, and multi-factor authentication. We also adhere to industry best practices and compliance standards to ensure the highest level of security. Regular security audits and updates are conducted to identify and address any vulnerabilities. Our goal is to provide maritime organisations with secure software solutions that safeguard their data and maintain the integrity of their operations.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Real Estate',
    slug: 'real-estate',
    subtitle:
      'Transform your real estate business with innovative software solutions and intuitive user interfaces.',
    fa_icon: 'fa-map',
    is_featured: true,
    hero_src: 'https://source.unsplash.com/w3eFhqXjkZE/1600x900',
    hero_alt: 'Glass buildings',
    // Seo
    seo: {
      title: 'Real Estate',
      description:
        'Empower your real estate business with innovative software solutions operations streamlined for success.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Unlock the potential of your real estate business.',
        items: [
          {
            title:
              'The real estate industry is highly competitive, and staying ahead requires modern technology solutions. At our Software Development Service for Real Estate, we specialize in creating innovative software solutions and intuitive user interfaces that empower real estate businesses to succeed.',
          },
          {
            title:
              'We understand the unique challenges faced by the real estate industry, from property management to sales and marketing. Our team of experts leverages cutting-edge technologies to develop customized software solutions that streamline processes, improve efficiency, and enhance customer experiences.',
          },
        ],
      },
      features: {
        overline: 'Our Solutions',
        title: 'Empowering the {title} Sector',
        subtitle:
          'We offer a range of software development services tailored to meet the specific needs of the real estate industry.',
        items: [
          {
            fa_icon: 'fa-home',
            title: 'Property management systems',
            subtitle:
              'We develop comprehensive property management systems that automate tasks, streamline workflows, and enhance operational efficiency.',
          },
          {
            fa_icon: 'fa-search-dollar',
            title: 'Listing and search platforms',
            subtitle:
              'We create intuitive listing and search platforms that help users find their ideal properties and enable real estate agents to showcase properties effectively.',
          },
          {
            fa_icon: 'fa-building',
            title: 'Construction project management',
            subtitle:
              'We provide software solutions for construction project management, facilitating collaboration, document management, and progress tracking.',
          },
          {
            fa_icon: 'fa-chart-area',
            title: 'Real estate analytics',
            subtitle:
              'We develop analytics tools that leverage data to provide valuable insights into market trends, property performance, and investment opportunities.',
          },
          {
            fa_icon: 'fa-comments',
            title: 'Customer relationship management',
            subtitle:
              'We offer customized CRM systems for real estate businesses to manage customer interactions, track leads, and nurture client relationships.',
          },
          {
            fa_icon: 'fa-file-invoice-dollar',
            title: 'Transaction management',
            subtitle:
              'We create transaction management systems that automate paperwork, facilitate secure transactions, and improve compliance.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Software Development Service for Real Estate and how we can transform your real estate business.',
        items: [
          {
            key: 'faqs-1',
            title:
              'Why is software development important for the real estate industry?',
            content:
              'Software development plays a vital role in the real estate industry by enabling automation, improving efficiency, and enhancing customer experiences. It allows real estate businesses to streamline processes, manage data effectively, and leverage technology to gain a competitive edge in the market.',
          },
          {
            key: 'faqs-2',
            title:
              'What are the benefits of working with your company for the real estate industry?',
            content:
              'By partnering with our company, real estate businesses can leverage our expertise in frontend software engineering and dashboard development to unlock the full potential of their operations. Our solutions enable seamless property management, automated workflows, real-time analytics, and personalized tenant experiences. This results in improved operational efficiency, better tenant engagement, optimized resource allocation, and increased profitability.',
          },
          {
            key: 'faqs-3',
            title:
              'How do you ensure the security of sensitive real estate data?',
            content:
              'We prioritize the security of sensitive real estate data throughout our software development process. We implement robust security measures, including encryption, access controls, and regular security audits. Additionally, we adhere to industry best practices and comply with relevant data protection regulations to ensure the confidentiality, integrity, and availability of your data.',
          },
        ],
      },
    },
  },
].map((item, i) => {
  return merge({}, MOCK_INDUSTRY_PAGE, {
    id: i + 1,
    ...item,
  })
})

export const MOCK_DESIGN_INDUSTRYS = [
  {
    // Hero
    title: 'Finance',
    is_featured: true,
    slug: 'finance',
    fa_icon: 'fa-coins',
    subtitle:
      'Helping financial enterprises enhance user experiences with tailor-made UX/UI solutions.',
    hero_src: 'https://source.unsplash.com/4fsCBcZt9H8/1600x900',
    hero_alt: 'Wall street sign',
    // Seo
    seo: {
      title: 'Finance',
      description:
        'Delivering specialized UX/UI design and workshops for financial enterprises to improve user experiences.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Enhancing user experiences in the finance industry.',
        items: [
          {
            title:
              'In the competitive world of finance, superior user experience can set your business apart. We specialize in delivering UX/UI solutions that are not only visually pleasing but also intuitive and user-friendly, enhancing customer satisfaction and business success.',
          },
          {
            title:
              'Our team of UX/UI experts understand the unique needs and challenges of the finance industry. We are dedicated to helping you improve user engagement and retention through expertly crafted UX/UI designs and workshops.',
          },
        ],
      },
      features: {
        overline: 'Our Solutions',
        title: 'Empowering the {title} Sector',
        subtitle:
          'We offer a comprehensive suite of UX/UI services to transform your financial enterprise.',
        items: [
          {
            fa_icon: 'fa-pencil-ruler',
            title: 'Bespoke UX/UI design',
            subtitle:
              'We design user interfaces tailored to the needs of your financial enterprise, enhancing usability and customer engagement.',
          },
          {
            fa_icon: 'fa-users',
            title: 'UX Workshops',
            subtitle:
              'We conduct UX workshops to help your team understand and implement best practices in user experience design.',
          },
          {
            fa_icon: 'fa-file-alt',
            title: 'Product Design',
            subtitle:
              'We design financial products with a focus on user experience, helping your customers interact with your services more efficiently.',
          },
          {
            fa_icon: 'fa-universal-access',
            title: 'Accessibility',
            subtitle:
              'We prioritize accessibility in our designs, ensuring that your services are usable by everyone, regardless of their abilities.',
          },
          {
            fa_icon: 'fa-mobile-alt',
            title: 'Mobile-first design',
            subtitle:
              'We follow a mobile-first approach to design, ensuring your financial services are easily accessible on all devices.',
          },
          {
            fa_icon: 'fa-handshake',
            title: 'Collaborative approach',
            subtitle:
              'We work in close collaboration with your team to ensure our designs align with your business objectives and meet your users’ needs.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our UX/UI services for the financial industry.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is UX/UI important in the finance industry?',
            content:
              'A well-designed user interface can significantly enhance user experience, leading to improved customer satisfaction and retention. In the finance industry, where services can be complex, an intuitive and user-friendly interface is crucial for customer engagement.',
          },
          {
            key: 'faqs-2',
            title: 'What do your UX workshops involve?',
            content:
              'Our UX workshops are designed to educate your team on the principles of user experience design. We cover a range of topics, from understanding user needs and behaviors to creating user journeys and prototypes.',
          },
          {
            key: 'faqs-3',
            title: 'How do you approach product design for financial services?',
            content:
              'Our product design process is user-centric. We start by understanding your users’ needs and behaviors, then design products that meet those needs effectively. We also conduct usability testing to ensure our designs are intuitive and user-friendly.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Government',
    is_featured: true,
    fa_icon: 'fa-landmark-flag',
    slug: 'government',
    subtitle:
      'Specializing in delivering user-centric product design and UX workshops for government enterprises.',
    hero_src: 'https://source.unsplash.com/ICXMkhRdquA/1600x900',
    hero_alt: 'Marble building',
    // Seo
    seo: {
      title: 'Government',
      description:
        'This page highlights our specialized UX/UI services for government enterprises, aiming to improve user experiences and accessibility.',
    },
    // Sections
    sections: {
      summary: {
        title: 'User-focused design solutions for government agencies.',
        items: [
          {
            title:
              'Government enterprises are increasingly recognizing the importance of excellent user experience in delivering efficient public services. Our UX/UI services are designed to create intuitive, user-friendly interfaces that facilitate seamless interactions between government agencies and the public.',
          },
          {
            title:
              'Our team of UX/UI experts bring an in-depth understanding of the specific needs and challenges faced by government agencies. Through tailor-made UX workshops and product design, we help government agencies improve user engagement, efficiency, and accessibility.',
          },
        ],
      },
      features: {
        overline: 'Our Solutions',
        title: 'Empowering the {title} Sector',
        subtitle:
          'We offer comprehensive UX/UI services, including product design and UX workshops specifically for government agencies.',
        items: [
          {
            fa_icon: 'fa-pencil-ruler',
            title: 'Tailored UX/UI design',
            subtitle:
              'We create bespoke user interfaces tailored to the needs of government agencies and their users.',
          },
          {
            fa_icon: 'fa-users',
            title: 'UX Workshops',
            subtitle:
              'We conduct specialized UX workshops that enable government teams to understand and implement best UX practices.',
          },
          {
            fa_icon: 'fa-file-alt',
            title: 'Government Product Design',
            subtitle:
              'We design government products with a focus on user experience, improving efficiency and accessibility of public services.',
          },
          {
            fa_icon: 'fa-universal-access',
            title: 'Accessibility',
            subtitle:
              'Our designs prioritize accessibility, ensuring that public services are usable by everyone, regardless of their abilities.',
          },
          {
            fa_icon: 'fa-mobile-alt',
            title: 'Mobile-first design',
            subtitle:
              'We follow a mobile-first approach, ensuring government services are easily accessible on all devices.',
          },
          {
            fa_icon: 'fa-handshake',
            title: 'Collaborative approach',
            subtitle:
              'We work in close collaboration with government teams to align our designs with public service objectives and user needs.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our UX/UI services for the government sector.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is UX/UI important for government agencies?',
            content:
              'User experience plays a crucial role in how the public interacts with government services. A well-designed user interface can improve efficiency, accessibility, and public satisfaction by making services more intuitive and easy to use.',
          },
          {
            key: 'faqs-2',
            title:
              'What are the benefits of your UX workshops for government teams?',
            content:
              'Our UX workshops are designed to help government teams understand the principles of user experience design. This can enhance their ability to deliver services that meet the public’s needs, improve team collaboration, and drive innovation in public service delivery.',
          },
          {
            key: 'faqs-3',
            title:
              'How do you approach product design for government services?',
            content:
              'Our approach to product design is user-centric. We start by understanding the specific needs and behaviors of the target user group, then design products that effectively meet those needs. Our designs focus on enhancing user engagement, efficiency, and accessibility.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Maritime',
    slug: 'maritime',
    is_featured: true,
    fa_icon: 'fa-ship',
    subtitle:
      'Expertise in enterprise product design and UX workshops focused on the maritime industry.',
    hero_src: 'https://source.unsplash.com/XdIrwH98K_E/1600x900',
    hero_alt: 'Captain controlling ship',
    // Seo
    seo: {
      title: 'Maritime',
      description:
        'This page outlines our specialized UX/UI services for maritime enterprises, aiming to transform user experiences.',
    },
    // Sections
    sections: {
      summary: {
        title:
          'Navigating the digital transformation in maritime with user-centric design.',
        items: [
          {
            title:
              'As the maritime industry navigates digital transformation, intuitive user interfaces and effective product designs play a key role. Our UX/UI services are tailored to meet the unique needs of maritime enterprises, enhancing user experience and operational efficiency.',
          },
          {
            title:
              'Through enterprise product design and UX workshops, we enable maritime organisations to improve user engagement, streamline processes, and foster innovation. We bring an understanding of the maritime industry’s specific challenges and opportunities, ensuring our solutions deliver real value.',
          },
        ],
      },
      features: {
        overline: 'Our Solutions',
        title: 'Empowering the {title} Sector',
        subtitle:
          'From UX workshops to product design, we provide comprehensive UX/UI services specifically for the maritime industry.',
        items: [
          {
            fa_icon: 'fa-pencil-ruler',
            title: 'Maritime-focused Design',
            subtitle:
              'We design user interfaces tailored to maritime operations and users, delivering both functionality and aesthetic appeal.',
          },
          {
            fa_icon: 'fa-users',
            title: 'UX Workshops',
            subtitle:
              'Our workshops equip maritime teams with knowledge and tools to implement best UX practices, promoting user-centric innovation.',
          },
          {
            fa_icon: 'fa-ship',
            title: 'Maritime Product Design',
            subtitle:
              'We design maritime products with a focus on user experience, streamlining processes and enhancing accessibility.',
          },
          {
            fa_icon: 'fa-universal-access',
            title: 'Accessibility',
            subtitle:
              'We ensure that our designs are accessible to all users, enhancing the inclusivity and reach of your maritime services.',
          },
          {
            fa_icon: 'fa-mobile-alt',
            title: 'Mobile-First Design',
            subtitle:
              'Our mobile-first approach ensures maritime services are easily accessible across devices, catering to the mobile-dominated user behavior.',
          },
          {
            fa_icon: 'fa-handshake',
            title: 'Collaborative Approach',
            subtitle:
              'We work collaboratively with your team, aligning our designs with your maritime business objectives and user needs.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Find out more about our specialized UX/UI services for the maritime industry.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is UX/UI important for the maritime industry?',
            content:
              'In the digital age, user experience plays a crucial role in how services are perceived and utilized. For the maritime industry, an intuitive user interface can enhance operational efficiency, improve user engagement, and facilitate the adoption of digital solutions.',
          },
          {
            key: 'faqs-2',
            title: 'How do your UX workshops benefit maritime teams?',
            content:
              'Our UX workshops aim to impart understanding and application of best UX practices. For maritime teams, this can lead to the development of more user-centric solutions, fostering innovation and increasing user satisfaction.',
          },
          {
            key: 'faqs-3',
            title:
              'What is your approach to product design for maritime services?',
            content:
              'Our approach to product design is anchored in understanding the unique needs of the maritime industry and its users. We design products that streamline maritime operations, enhance user engagement, and are accessible across devices.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Real Estate',
    slug: 'real-estate',
    fa_icon: 'fa-map',
    is_featured: true,
    subtitle:
      'Specialized in enterprise product design and UX workshops for the real estate industry.',
    hero_src: 'https://source.unsplash.com/b3H9CbDZqrs/1600x900',
    hero_alt: 'Housing area',
    // Seo
    seo: {
      title: 'Real Estate',
      description:
        'This page outlines our tailored UX/UI services for real estate enterprises, aiming to transform user experiences.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Enhancing real estate experiences with user-centric design.',
        items: [
          {
            title:
              'The real estate industry is rapidly digitalizing, making effective user interfaces and product designs critical for business success. We offer tailored UX/UI services for real estate enterprises, improving user experiences and process efficiency.',
          },
          {
            title:
              'Through enterprise product design and UX workshops, we help real estate organisations improve user engagement, streamline processes, and foster innovation. With deep understanding of the specific challenges and opportunities in real estate, we ensure our solutions deliver value.',
          },
        ],
      },
      features: {
        overline: 'Our Solutions',
        title: 'Empowering the {title} Sector',
        subtitle:
          'From UX workshops to product design, we provide comprehensive UX/UI services designed for the real estate industry.',
        items: [
          {
            fa_icon: 'fa-pencil-ruler',
            title: 'Real Estate-focused Design',
            subtitle:
              'We design user interfaces tailored to the needs of the real estate industry, ensuring both functionality and aesthetic appeal.',
          },
          {
            fa_icon: 'fa-users',
            title: 'UX Workshops',
            subtitle:
              'Our workshops provide real estate teams with the tools and knowledge to implement best UX practices, fostering user-centric innovation.',
          },
          {
            fa_icon: 'fa-building',
            title: 'Real Estate Product Design',
            subtitle:
              'We design products specifically for real estate, focusing on user experience, process efficiency, and accessibility.',
          },
          {
            fa_icon: 'fa-universal-access',
            title: 'Accessibility',
            subtitle:
              'We prioritize accessibility in our designs, ensuring your real estate services are inclusive and accessible to all users.',
          },
          {
            fa_icon: 'fa-mobile-alt',
            title: 'Mobile-First Design',
            subtitle:
              'Recognizing the prominence of mobile users in real estate, we adopt a mobile-first approach to our designs.',
          },
          {
            fa_icon: 'fa-handshake',
            title: 'Collaborative Approach',
            subtitle:
              'We work closely with your team, aligning our designs with your real estate business goals and user needs.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Find out more about our specialized UX/UI services for the real estate industry.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why is UX/UI important for the real estate industry?',
            content:
              'In the era of digital transformation, user experience plays a significant role in how services are perceived and utilized. For real estate, an intuitive user interface can enhance business efficiency, improve user engagement, and facilitate the adoption of digital solutions.',
          },
          {
            key: 'faqs-2',
            title: 'How do your UX workshops benefit real estate teams?',
            content:
              'Our UX workshops equip real estate teams with knowledge and skills to adopt user-centric design principles. This helps enhance user satisfaction, streamline processes, and foster digital innovation within the organisation.',
          },
          {
            key: 'faqs-3',
            title:
              'What is your approach to product design for real estate services?',
            content:
              'We focus on understanding the unique needs and challenges of the real estate industry. Our product designs aim to improve user engagement, process efficiency, and accessibility across all devices.',
          },
        ],
      },
    },
  },
].map((item, i) => {
  return merge({}, MOCK_INDUSTRY_PAGE, {
    id: i + 1,
    ...item,
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
      checklist: {
        subtitle:
          'Unlocking the potential of enterprise technology through expert design services tailored to drive your business growth.',
      },
    },
  })
})

export const MOCK_DATA_INDUSTRYS = [
  {
    // Hero
    title: 'Finance',
    slug: 'finance',
    fa_icon: 'fa-coins',
    is_featured: true,
    subtitle:
      'Leveraging data and AI to drive transformative solutions for the finance industry.',
    hero_src: 'https://source.unsplash.com/p_cHW1REBWc/1600x900',
    hero_alt: 'City buildings',
    // Seo
    seo: {
      title: 'Finance',
      description:
        'This page focuses on how we employ data science and AI to provide transformative solutions for finance enterprises.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Unlock the power of data with AI in Finance.',
        items: [
          {
            title:
              'In the finance industry, making data-driven decisions is paramount. Our data science and AI solutions are specifically designed to meet the unique needs and challenges of finance enterprises, enabling them to uncover valuable insights and make better, more informed decisions.',
          },
          {
            title:
              'We focus on delivering cutting-edge AI solutions that enhance efficiency, reduce risk, and drive innovation. Whether it’s improving predictive accuracy, automating processes, or identifying new opportunities, we help finance companies turn their data into a competitive advantage.',
          },
        ],
      },
      features: {
        overline: 'Our Solutions',
        title: 'Empowering the {title} Sector',
        subtitle:
          'We offer a comprehensive suite of data science and AI solutions tailored to the finance industry.',
        items: [
          {
            fa_icon: 'fa-brain',
            title: 'AI Strategy',
            subtitle:
              'We provide strategic guidance on leveraging AI to drive business growth and innovation in the finance industry.',
          },
          {
            fa_icon: 'fa-chart-bar',
            title: 'Predictive Analytics',
            subtitle:
              'Our predictive analytics solutions help finance enterprises forecast future events and trends with improved accuracy.',
          },
          {
            fa_icon: 'fa-robot',
            title: 'AI Automation',
            subtitle:
              'We automate labor-intensive processes using AI, enhancing efficiency and reducing operational costs for finance enterprises.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Risk Management',
            subtitle:
              'Our AI solutions can identify potential risks and anomalies, helping enterprises mitigate risks and ensure regulatory compliance.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'AI Implementation',
            subtitle:
              'We implement AI solutions seamlessly into existing finance processes, ensuring they align with business goals and deliver value.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'Collaborative Approach',
            subtitle:
              'We work closely with finance enterprises to understand their specific needs and deliver tailored AI solutions.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Data Science & AI Solutions for Finance and how we can help your business.',
        items: [
          {
            key: 'faqs-1',
            title:
              'Why are data science and AI important for the finance industry?',
            content:
              'Data science and AI are transforming the finance industry. They enable enterprises to uncover insights, improve decision-making, automate processes, manage risks, and drive innovation. Leveraging these technologies is key to staying competitive in today’s digital age.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of your Data Science & AI Solutions?',
            content:
              'We provide tailored solutions that can help finance enterprises enhance efficiency, reduce risk, and drive innovation. Our expertise in data science and AI, coupled with a deep understanding of the finance industry, allows us to deliver solutions that align with your business goals and deliver real value.',
          },
          {
            key: 'faqs-3',
            title: 'How do you approach data science and AI in finance?',
            content:
              'We start by understanding your business goals and challenges. From there, we leverage data science and AI to design and implement solutions tailored to your needs. This could involve using predictive analytics to forecast trends, automating processes with AI, or implementing AI strategies to drive business growth and innovation.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Government',
    slug: 'government',
    fa_icon: 'fa-landmark-flag',
    is_featured: true,
    subtitle:
      'Harnessing data and AI to drive efficiency, transparency, and innovation in the public sector.',
    hero_src: 'https://source.unsplash.com/GAfoU0t8tsg/1600x900',
    hero_alt: 'Swiss government cabinet',
    // Seo
    seo: {
      title: 'Government',
      description:
        'This page details our expertise in leveraging data science and AI to create transformative solutions for government organisations.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Empowering the public sector with data and AI.',
        items: [
          {
            title:
              'In the public sector, making data-driven decisions is crucial. Our data science and AI solutions are designed to meet the unique challenges of government organisations, enabling them to uncover valuable insights and drive efficiency and transparency.',
          },
          {
            title:
              'We deliver AI solutions that enhance service delivery, facilitate policy making, and foster innovation. Whether it’s improving decision-making, automating processes, or identifying new opportunities, we help government entities turn their data into actionable insights.',
          },
        ],
      },
      features: {
        overline: 'Our Solutions',
        title: 'Empowering the {title} Sector',
        subtitle:
          'We offer a wide range of data science and AI solutions tailored to the needs of government organisations.',
        items: [
          {
            fa_icon: 'fa-brain',
            title: 'AI Strategy',
            subtitle:
              'We provide strategic guidance on leveraging AI to drive efficiency, transparency, and innovation in the public sector.',
          },
          {
            fa_icon: 'fa-chart-bar',
            title: 'Predictive Analytics',
            subtitle:
              'Our predictive analytics solutions enable government organisations to anticipate future trends and make informed policy decisions.',
          },
          {
            fa_icon: 'fa-robot',
            title: 'AI Automation',
            subtitle:
              'We automate labor-intensive processes using AI, enhancing service delivery and reducing operational costs in the public sector.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Security & Compliance',
            subtitle:
              'We prioritize security and compliance in our AI solutions, ensuring that government data is protected and regulations are met.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'AI Implementation',
            subtitle:
              'We seamlessly integrate AI solutions into existing governmental processes, ensuring alignment with public service goals.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'Collaborative Approach',
            subtitle:
              'We work closely with government organisations to understand their specific needs and deliver tailored AI solutions.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Data Science & AI Solutions for Government and how we can empower your organisation.',
        items: [
          {
            key: 'faqs-1',
            title:
              'Why are data science and AI important for the public sector?',
            content:
              'Data science and AI have the potential to revolutionize the public sector. They can help government organisations make more informed decisions, improve service delivery, and drive transparency and efficiency. Leveraging these technologies is key to meeting the demands of today’s digital age.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of your Data Science & AI Solutions?',
            content:
              'Our data science and AI solutions help government organisations leverage their data in powerful ways. We provide tools to uncover valuable insights, predict future trends, and automate processes, all while ensuring the highest levels of security and compliance. We strive to deliver solutions that align with your public service objectives and drive meaningful improvement.',
          },
          {
            key: 'faqs-3',
            title:
              'How do you approach data science and AI in the public sector?',
            content:
              'We start by understanding your organisation’s specific needs and goals. We then design and implement data science and AI solutions tailored to these requirements. This may involve predictive analytics to inform policy decisions, AI automation to improve service delivery, or AI strategy consulting to foster innovation and efficiency.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Maritime',
    slug: 'maritime',
    fa_icon: 'fa-ship',
    is_featured: true,
    subtitle:
      'Empowering the maritime industry with advanced data analytics and AI solutions.',
    hero_src: 'https://source.unsplash.com/eqwFWHfQipg/1600x900',
    hero_alt: 'Cargo port',
    // Seo
    seo: {
      title: 'Maritime',
      description:
        'This page showcases our expertise in applying data science and AI solutions to address challenges in the maritime industry.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Navigating the future with data and AI.',
        items: [
          {
            title:
              'The maritime industry is at a critical point in its digital transformation journey. Leveraging data science and AI is key to increasing operational efficiency, improving safety, and driving innovation. Our solutions are designed to meet these needs and more, setting your maritime business on course for the future.',
          },
          {
            title:
              'Whether it’s predictive maintenance for vessels, AI-powered logistics management, or data-driven decision-making, we help maritime organisations navigate the complexities of the industry and seize new opportunities.',
          },
        ],
      },
      features: {
        overline: 'Our Solutions',
        title: 'Empowering the {title} Sector',
        subtitle:
          'We offer a comprehensive suite of data science and AI solutions tailored to the unique needs of the maritime industry.',
        items: [
          {
            fa_icon: 'fa-ship',
            title: 'Predictive Maintenance',
            subtitle:
              'We utilize AI and machine learning to anticipate maintenance needs, improving vessel efficiency and minimizing downtime.',
          },
          {
            fa_icon: 'fa-chart-network',
            title: 'Logistics Management',
            subtitle:
              'We leverage AI to optimize logistics and supply chain processes, enhancing operational efficiency in the maritime industry.',
          },
          {
            fa_icon: 'fa-analytics',
            title: 'Data-Driven Decision Making',
            subtitle:
              'Our solutions help organisations make data-backed decisions, improving strategic planning and operational performance.',
          },
          {
            fa_icon: 'fa-user-shield',
            title: 'Security & Compliance',
            subtitle:
              'We ensure our solutions meet the rigorous security standards and regulatory requirements of the maritime industry.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'AI Integration',
            subtitle:
              'We seamlessly integrate AI capabilities into existing maritime processes, creating a smarter, more efficient operating environment.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'Collaborative Approach',
            subtitle:
              'We partner with maritime organisations to understand their specific needs and deliver tailored AI solutions.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Data Science & AI Solutions for the Maritime industry and how we can empower your organisation.',
        items: [
          {
            key: 'faqs-1',
            title:
              'Why are data science and AI important for the maritime industry?',
            content:
              'Data science and AI have the potential to significantly enhance operations in the maritime industry. They can enable predictive maintenance, optimize logistics, improve decision-making, and drive overall operational efficiency. As the maritime industry continues to evolve, these technologies will be key to staying competitive.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of your Data Science & AI Solutions?',
            content:
              'Our solutions are designed to address the specific challenges and needs of the maritime industry. By leveraging our solutions, maritime organisations can increase operational efficiency, improve safety, and innovate faster. Our team of experts collaborates closely with your organisation to ensure that our solutions deliver maximum value.',
          },
          {
            key: 'faqs-3',
            title:
              'How do you approach data science and AI in the maritime industry?',
            content:
              'We begin by understanding your organisation’s unique needs and objectives. We then design and implement tailored data science and AI solutions to meet these needs. This may involve using machine learning for predictive maintenance, AI for logistics management, or data analytics for decision support.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Real Estate',
    slug: 'real-estate',
    fa_icon: 'fa-map',
    is_featured: true,
    subtitle:
      'Empowering the real estate industry with advanced data analytics and AI solutions.',
    hero_src: 'https://source.unsplash.com/Ch3WwM6PcsA/1600x900',
    hero_alt: 'Waterfront property',
    // Seo
    seo: {
      title: 'Real Estate',
      description:
        'This page showcases our expertise in applying data science and AI solutions to address challenges in the real estate industry.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Transforming real estate with data and AI.',
        items: [
          {
            title:
              'The real estate industry is experiencing a digital revolution. Data science and AI are now essential tools in making informed decisions, driving efficiency, and improving customer experiences. Our solutions are designed to empower real estate businesses to navigate this new landscape effectively.',
          },
          {
            title:
              'Whether it’s predictive analytics for property valuation, AI-powered customer profiling, or data-driven decision-making, we help real estate businesses unlock the power of data and AI.',
          },
        ],
      },
      features: {
        overline: 'Our Solutions',
        title: 'Empowering the {title} Sector',
        subtitle:
          'We offer a comprehensive suite of data science and AI solutions tailored to the unique needs of the real estate industry.',
        items: [
          {
            fa_icon: 'fa-chart-line',
            title: 'Predictive Analytics',
            subtitle:
              'We leverage AI and machine learning to generate accurate property valuations and trend predictions, helping businesses make strategic decisions.',
          },
          {
            fa_icon: 'fa-user-tag',
            title: 'Customer Profiling',
            subtitle:
              'We use AI to analyze customer data and generate detailed customer profiles, helping real estate businesses deliver personalized experiences.',
          },
          {
            fa_icon: 'fa-analytics',
            title: 'Data-Driven Decision Making',
            subtitle:
              'Our solutions enable organisations to make data-backed decisions, improving strategic planning and operational performance.',
          },
          {
            fa_icon: 'fa-user-shield',
            title: 'Security & Compliance',
            subtitle:
              'We ensure our solutions meet the rigorous security standards and regulatory requirements of the real estate industry.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'AI Integration',
            subtitle:
              'We seamlessly integrate AI capabilities into existing real estate processes, creating a smarter, more efficient operating environment.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'Collaborative Approach',
            subtitle:
              'We partner with real estate organisations to understand their specific needs and deliver tailored AI solutions.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Data Science & AI Solutions for the Real Estate industry and how we can empower your organisation.',
        items: [
          {
            key: 'faqs-1',
            title:
              'Why are data science and AI important for the real estate industry?',
            content:
              'Data science and AI provide tools for the real estate industry to make better, data-driven decisions, predict trends, personalize customer experiences, and improve operational efficiency. As the industry becomes increasingly digital, these technologies are becoming essential.',
          },
          {
            key: 'faqs-2',
            title:
              'What are the benefits of your Data Science & AI solutions for my real estate business?',
            content:
              'Our solutions can help your real estate business in several ways. This includes generating accurate property valuations, predicting industry trends, creating detailed customer profiles for targeted marketing, improving decision-making, and enhancing overall operational efficiency. We ensure that our solutions meet your specific business needs and objectives.',
          },
          {
            key: 'faqs-3',
            title:
              'How do you approach data science and AI in the real estate industry?',
            content:
              'We start by understanding your specific business needs and objectives. Then we design and implement tailored data science and AI solutions to address these needs. This could involve using machine learning for predictive analytics, AI for customer profiling, or data analytics for strategic decision-making. Our team collaborates closely with your organisation to ensure our solutions deliver maximum value.',
          },
        ],
      },
    },
  },
].map((item, i) => {
  return merge({}, MOCK_INDUSTRY_PAGE, {
    id: i + 1,
    ...item,
    sections: {
      ...item.sections,
      checklist: {
        subtitle:
          'Unlocking the potential of enterprise technology through expert data services tailored to drive your business growth.',
      },
      cta: {
        hero_src: '/images/about_nodes_above_city.png',
        hero_alt: 'Laser net over city',
        overline: 'Get Started',
        title: 'Partnering with {appTitle}',
        subtitle:
          "{appTitle} collaborates with enterprises to leverage data and AI for competitive advantage. Utilising future-proof technologies such as Python, JavaScript, SQL, ChatGPT, and Tableau, we provide customized data science services and AI solutions. Transforming raw data into actionable insights and automating complex processes, our expertise in data science and AI helps you unlock your data's potential and excel in the digital landscape.",
      },
    },
  })
})

export const MOCK_DIGITAL_INDUSTRYS = [
  {
    // Hero
    title: 'Finance',
    slug: 'finance',
    fa_icon: 'fa-coins',
    is_featured: true,
    subtitle:
      'Partner with us for enterprise digital strategy, B2B Digital Marketing, and advanced web development & analytics services tailored to the finance industry.',
    hero_src: 'https://source.unsplash.com/M_S7pim3Hwg/1600x900/',
    hero_alt: 'Finance',
    // Seo
    seo: {
      title: 'Finance',
      description:
        'This page is all about enterprise digital strategy, B2B Digital Marketing, and advanced web development & analytics services for the finance industry.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Your Partner in Finance Industry Digital Success',
        items: [
          {
            title:
              'In the fast-paced world of finance, digital success is crucial for staying competitive and meeting the needs of your customers. At our Finance Industry Services, we specialize in providing enterprise digital strategy, B2B Digital Marketing, and advanced web development & analytics solutions tailored specifically for the finance industry.',
          },
          {
            title:
              'We understand the unique challenges and opportunities that the finance industry presents, and our team of experts is ready to partner with you to achieve your digital goals. Whether you need a comprehensive digital strategy, targeted B2B marketing campaigns, or advanced web development and analytics solutions, we have the expertise and experience to deliver results.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Empowering the {title} Sector',
        subtitle:
          'We leverage our deep understanding of the finance industry and cutting-edge digital technologies to help you succeed in the digital landscape.',
        items: [
          {
            fa_icon: 'fa-briefcase',
            title: 'Enterprise digital strategy',
            subtitle:
              'We develop comprehensive digital strategies that align with your business objectives and drive growth in the finance industry.',
          },
          {
            fa_icon: 'fa-bullhorn',
            title: 'B2B Digital Marketing',
            subtitle:
              'We execute targeted digital marketing campaigns to reach and engage your B2B audience, driving leads and conversions for your finance business.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Advanced web development',
            subtitle:
              'We build robust and scalable web solutions tailored to the unique requirements of the finance industry, delivering exceptional user experiences and functionality.',
          },
          {
            fa_icon: 'fa-chart-bar',
            title: 'Analytics and insights',
            subtitle:
              'We provide advanced analytics and data-driven insights to help you make informed decisions and optimize your digital presence in the finance industry.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Personalization and customer experience',
            subtitle:
              'We help you create personalized experiences for your customers, leveraging data and technology to deliver relevant and engaging interactions at every touchpoint.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Technology integration',
            subtitle:
              'We integrate and optimize digital technologies within your finance operations, streamlining processes and enhancing efficiency.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Finance Industry Services and how we can help your finance business succeed in the digital world.',
        items: [
          {
            key: 'faqs-1',
            title:
              'Why is a comprehensive digital strategy important for finance businesses?',
            content:
              'A comprehensive digital strategy is crucial for finance businesses to stay competitive and meet the evolving needs of customers. It helps in establishing a strong digital presence, targeting the right audience, driving leads and conversions, and optimizing business operations for better efficiency and growth.',
          },
          {
            key: 'faqs-2',
            title:
              'What benefits can B2B Digital Marketing bring to finance businesses?',
            content:
              'B2B Digital Marketing enables finance businesses to reach and engage their target audience effectively. It helps in generating high-quality leads, building brand awareness and credibility, nurturing client relationships, and driving business growth through strategic digital campaigns tailored for B2B audiences.',
          },
          {
            key: 'faqs-3',
            title:
              'How can advanced web development and analytics benefit finance businesses?',
            content:
              'Advanced web development and analytics provide finance businesses with powerful tools to create exceptional online experiences, optimize processes, and gain valuable insights from data. It allows for the development of secure, scalable, and user-friendly web solutions, while analytics helps in measuring performance, identifying trends, and making data-driven decisions for continuous improvement and competitive advantage.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Government',
    slug: 'government',
    fa_icon: 'fa-landmark-flag',
    is_featured: true,
    subtitle:
      'Partner with our experts to navigate the complexities of digital transformation in the government sector.',
    hero_src: 'https://source.unsplash.com/TELAb4duebI/1600x900/',
    hero_alt: 'Government Building',
    // Seo
    seo: {
      title: 'Government',
      description:
        'This page focuses on helping government organizations achieve digital transformation and enhance citizen services.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Driving digital transformation in the government sector.',
        items: [
          {
            title:
              'In the modern era, government organizations face unique challenges in adopting digital technologies and providing efficient services to citizens. At our Government service, we specialize in assisting government agencies with their digital transformation initiatives and helping them navigate the complexities of the public sector.',
          },
          {
            title:
              'We understand the importance of citizen-centric solutions and the need for secure and accessible digital platforms. Our team of experts combines industry knowledge and technical expertise to deliver innovative strategies and solutions that enhance citizen services, improve operational efficiency, and drive digital innovation in the government sector.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Empowering the {title} Sector',
        subtitle:
          'We leverage our expertise in enterprise digital strategy, B2B Digital Marketing, and advanced web development & analytics to support government organizations in their digital transformation journey.',
        items: [
          {
            fa_icon: 'fa-briefcase',
            title: 'Enterprise digital strategy',
            subtitle:
              "We develop comprehensive digital strategies that align with government organizations' objectives, ensuring effective utilization of digital technologies and resources.",
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'B2B Digital Marketing',
            subtitle:
              'We help government agencies establish strong digital presences, build effective partnerships, and leverage digital marketing techniques to engage with businesses and stakeholders.',
          },
          {
            fa_icon: 'fa-laptop-code',
            title: 'Advanced web development & analytics',
            subtitle:
              'We deliver sophisticated web development solutions and utilize advanced analytics to drive data-driven decision-making and optimize government websites and applications.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Citizen-centric solutions',
            subtitle:
              'We prioritize the needs and expectations of citizens, designing and developing user-friendly digital solutions that enhance accessibility, convenience, and satisfaction.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Security and compliance',
            subtitle:
              'We ensure that government digital platforms comply with stringent security and privacy regulations, safeguarding sensitive data and maintaining trust with citizens.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Integration and interoperability',
            subtitle:
              'We facilitate seamless integration and interoperability of digital systems and applications, enabling efficient data sharing and collaboration across government agencies.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Government services and how we can assist your organization in achieving digital transformation.',
        items: [
          {
            key: 'faqs-1',
            title:
              'Why is digital transformation important for government organizations?',
            content:
              'Digital transformation is crucial for government organizations to enhance citizen services, improve operational efficiency, and drive innovation. It enables streamlined processes, data-driven decision-making, and effective engagement with citizens and businesses.',
          },
          {
            key: 'faqs-2',
            title:
              'How can your Government services support our digital transformation journey?',
            content:
              'Our Government services provide specialized expertise in enterprise digital strategy, B2B Digital Marketing, and advanced web development & analytics. We collaborate closely with government organizations to develop tailored solutions that address their unique challenges and goals, enabling successful digital transformation.',
          },
          {
            key: 'faqs-3',
            title: 'What approach do you follow for citizen-centric solutions?',
            content:
              'We adopt a user-centered design approach for citizen-centric solutions. Our process involves extensive user research and engagement to understand citizen needs and preferences. We then design and develop intuitive digital platforms that prioritize accessibility, convenience, and satisfaction.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Maritime',
    slug: 'maritime',
    fa_icon: 'fa-ship',
    is_featured: true,
    subtitle:
      'Unlock the potential of the maritime industry with our enterprise digital strategy, B2B Digital Marketing, and advanced web development & analytics services.',
    hero_src: 'https://source.unsplash.com/sFq7vyCSFbM/1600x900/',
    hero_alt: 'Maritime',
    // Seo
    seo: {
      title: 'Maritime',
      description:
        'Discover how our digital marketing company can help your maritime business thrive with our enterprise digital strategy, B2B Digital Marketing, and advanced web development & analytics services.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Unlock the potential of the maritime industry.',
        items: [
          {
            title:
              'The maritime industry holds vast opportunities for growth and success. At our company, we specialize in helping maritime businesses unlock their potential through our enterprise digital strategy, B2B Digital Marketing, and advanced web development & analytics services.',
          },
          {
            title:
              'We understand the unique challenges and demands of the maritime industry, and we have the expertise and experience to develop tailored digital solutions that drive results. Whether you need assistance in optimizing your digital strategy, reaching B2B clients effectively, or leveraging advanced web development and analytics tools, our team of experts is here to help you achieve your goals.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Empowering the {title} Sector',
        subtitle:
          'We employ industry best practices and cutting-edge technologies to deliver exceptional digital solutions for the maritime industry.',
        items: [
          {
            fa_icon: 'fa-briefcase',
            title: 'Enterprise digital strategy',
            subtitle:
              'We develop comprehensive digital strategies that align with your business objectives and drive growth in the maritime industry.',
          },
          {
            fa_icon: 'fa-bullhorn',
            title: 'B2B Digital Marketing',
            subtitle:
              'We implement targeted B2B marketing campaigns to help you connect with key stakeholders and decision-makers in the maritime industry.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Advanced web development',
            subtitle:
              'We leverage cutting-edge web development technologies to create robust and scalable digital solutions tailored to the maritime industry.',
          },
          {
            fa_icon: 'fa-chart-bar',
            title: 'Analytics-driven insights',
            subtitle:
              'We utilize advanced analytics tools to gather actionable insights and optimize your digital presence in the maritime industry.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Technology integration',
            subtitle:
              'We integrate the latest technological advancements into your digital ecosystem to streamline operations and enhance efficiency in the maritime industry.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Collaboration',
            subtitle:
              'We work closely with your enterprise team to understand your specific needs and develop tailored solutions that deliver measurable results in the maritime industry.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our services for the maritime industry and how we can help your business thrive.',
        items: [
          {
            key: 'faqs-1',
            title:
              'Why is digital marketing important for the maritime industry?',
            content:
              'Digital marketing plays a crucial role in the maritime industry as it enables businesses to expand their reach, engage with key stakeholders, and drive business growth. It allows maritime companies to showcase their expertise, build brand awareness, and connect with potential customers and partners in a highly competitive digital landscape.',
          },
          {
            key: 'faqs-2',
            title:
              'How can B2B Digital Marketing benefit my maritime business?',
            content:
              'B2B Digital Marketing is essential for maritime businesses as it helps establish strong relationships with industry partners, suppliers, and other key stakeholders. It enables you to effectively communicate your value proposition, generate qualified leads, and nurture business opportunities in the B2B space. With targeted B2B marketing strategies, you can enhance brand reputation, increase market visibility, and drive revenue growth in the maritime industry.',
          },
          {
            key: 'faqs-3',
            title:
              'What are the advantages of advanced web development for the maritime industry?',
            content:
              'Advanced web development provides numerous advantages for the maritime industry. It allows you to create immersive digital experiences, streamline business processes, and enhance customer engagement. With responsive and user-friendly web interfaces, you can attract and retain customers, facilitate seamless transactions, and showcase your services and solutions effectively. Advanced web development also enables integration with other systems and platforms, optimizing operational efficiency and enhancing overall business performance in the maritime industry.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Real Estate',
    slug: 'real-estate',
    fa_icon: 'fa-map',
    is_featured: true,
    subtitle:
      'Partner with industry experts to maximize your real estate opportunities and drive growth.',
    hero_src: 'https://source.unsplash.com/w3eFhqXjkZE/1600x900/',
    hero_alt: 'Real Estate',
    // Seo
    seo: {
      title: 'Real Estate',
      description:
        'This page is dedicated to helping you maximize your real estate opportunities and drive growth.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Maximize your real estate opportunities with our expertise.',
        items: [
          {
            title:
              'In the competitive real estate industry, having a strategic digital presence is crucial for success. At our Real Estate Service, we specialize in partnering with real estate professionals to develop and execute effective digital strategies that drive growth and maximize opportunities.',
          },
          {
            title:
              'We understand the unique challenges and opportunities that the real estate market presents. Our team of experts combines industry knowledge with digital expertise to provide tailored solutions that help you reach your goals. Whether you are a real estate agent, developer, or investor, we can help you leverage the power of digital marketing to generate leads, enhance your brand, and build a strong online presence.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Empowering the {title} Sector',
        subtitle:
          'We offer a range of specialized services designed to meet the unique needs of the real estate industry.',
        items: [
          {
            fa_icon: 'fa-briefcase',
            title: 'Enterprise digital strategy',
            subtitle:
              'We develop customized digital strategies that align with your business objectives and help you navigate the competitive real estate landscape.',
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'B2B Digital Marketing',
            subtitle:
              'We specialize in B2B digital marketing strategies that target key stakeholders in the real estate industry, including developers, investors, and property managers.',
          },
          {
            fa_icon: 'fa-laptop-code',
            title: 'Advanced web development & analytics',
            subtitle:
              'Our team of skilled developers and analysts create cutting-edge websites and provide advanced analytics solutions to track performance and optimize your online presence.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Lead generation',
            subtitle:
              'We employ targeted lead generation strategies to attract potential buyers, sellers, and investors, helping you expand your client base and increase sales.',
          },
          {
            fa_icon: 'fa-bullhorn',
            title: 'Brand management',
            subtitle:
              'We develop and execute comprehensive brand management strategies that enhance your reputation, increase brand visibility, and differentiate you from competitors.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Marketing automation',
            subtitle:
              'We implement marketing automation tools and processes to streamline your marketing efforts, improve efficiency, and increase ROI.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Find answers to commonly asked questions about our Real Estate Service.',
        items: [
          {
            key: 'faqs-1',
            title:
              'Why is digital marketing important for real estate professionals?',
            content:
              'Digital marketing plays a critical role in the real estate industry by helping professionals reach a wider audience, generate leads, and build brand awareness. It enables targeted marketing campaigns, enhances customer engagement, and provides valuable insights for informed decision-making.',
          },
          {
            key: 'faqs-2',
            title: 'How can your Real Estate Service benefit my business?',
            content:
              'Our Real Estate Service offers a comprehensive range of specialized digital marketing solutions tailored to the unique needs of the industry. By partnering with us, you can leverage our expertise to enhance your online presence, attract qualified leads, and stay ahead in a competitive market. We focus on driving measurable results and delivering a strong return on investment for our clients.',
          },
          {
            key: 'faqs-3',
            title: 'What sets your B2B Digital Marketing apart?',
            content:
              'Our B2B Digital Marketing services are specifically designed to target key stakeholders in the real estate industry, such as developers, investors, and property managers. We employ a data-driven approach to create customized strategies that effectively reach and engage these audiences. Our team has extensive experience in B2B marketing, allowing us to deliver impactful campaigns that drive meaningful business outcomes.',
          },
        ],
      },
    },
  },
].map((item, i) => {
  return merge({}, MOCK_INDUSTRY_PAGE, {
    id: i + 1,
    ...item,
    sections: {
      ...item.sections,
      checklist: {
        subtitle:
          'Unlocking the potential of enterprise technology through expert consulting and software development services tailored to drive your business growth.',
      },
      cta: {
        hero_src: '/images/about_nodes_above_city.png',
        hero_alt: 'Laser net over city',
        overline: 'Get Started',
        title: 'Partnering with {appTitle}',
        subtitle:
          '{appTitle} partners with enterprise clients to tackle the most challenging software hurdles. With a keen focus on bespoke enterprise software development, we leverage leading technologies and methodologies tailored to your business requirements. Our approach is meticulously customized for each project, promising seamless collaboration with your team to choose the most suitable technologies. We shine in enterprise software development and consulting, and we are equipped to apply our knowledge and skills to your project, no matter its current stage in the product lifecycle.',
      },
    },
  })
})

export const MOCK_FINX_INDUSTRYS = [
  {
    title: 'Regtech',
    slug: 'regtech',
    fa_icon: 'fa-shield-alt',
    is_featured: true,
    subtitle:
      'Streamline regulatory compliance and risk management with our advanced regtech solutions.',
    hero_src: 'https://source.unsplash.com/9lpSbMgYm0Q/1600x900/',
    hero_alt: 'Regtech',
    // Seo
    seo: {
      title: 'Regtech',
      description:
        'Discover how our regtech solutions can help businesses streamline regulatory compliance and risk management.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Transform Regulatory Compliance with Regtech Solutions.',
        items: [
          {
            title:
              'In the highly regulated business landscape, regulatory compliance and risk management are of utmost importance. At our Regtech Solutions, we specialize in providing digital solutions and consulting services to help businesses navigate the complexities of regulatory requirements and streamline compliance processes.',
          },
          {
            title:
              'We understand the unique challenges faced by businesses in adhering to regulations, and we leverage advanced technologies to deliver innovative regtech solutions that enhance compliance efficiency and reduce risks. Our team of experts combines regulatory knowledge with digital expertise to develop comprehensive regtech solutions that address the specific compliance needs of our clients.',
          },
        ],
      },
      features: {
        overline: 'What we offer',
        title: 'Our {title} Capabilities',
        subtitle:
          'Optimize regulatory compliance and risk management with our comprehensive regtech solutions.',
        items: [
          {
            fa_icon: 'fa-cogs',
            title: 'Regulatory Compliance Automation',
            subtitle:
              'Automate compliance processes and ensure adherence to regulatory requirements with our advanced regtech solutions.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Risk Management Solutions',
            subtitle:
              'Identify and mitigate risks with our robust risk management solutions tailored to your business needs.',
          },
          {
            fa_icon: 'fa-database',
            title: 'Data Governance and Privacy',
            subtitle:
              'Ensure data integrity, privacy, and security in compliance with regulatory guidelines using our data governance solutions.',
          },
          {
            fa_icon: 'fa-chart-bar',
            title: 'Compliance Reporting and Analytics',
            subtitle:
              'Generate accurate compliance reports and gain valuable insights into regulatory trends with our reporting and analytics solutions.',
          },
          {
            fa_icon: 'fa-check-double',
            title: 'KYC/AML Solutions',
            subtitle:
              'Streamline customer due diligence and anti-money laundering processes with our KYC/AML solutions.',
          },
          {
            fa_icon: 'fa-user-shield',
            title: 'Identity Verification',
            subtitle:
              'Verify customer identities and prevent fraud with our secure and efficient identity verification solutions.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Find answers to common questions about our Regtech Solutions and how they can benefit businesses.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why should businesses invest in regtech solutions?',
            content:
              'Regtech solutions offer numerous benefits for businesses, including streamlined regulatory compliance processes, enhanced risk management capabilities, improved data governance and privacy, accurate compliance reporting, efficient KYC/AML processes, and robust identity verification. By leveraging regtech solutions, businesses can ensure adherence to regulatory requirements, reduce compliance costs, mitigate risks, and maintain trust with stakeholders.',
          },
          {
            key: 'faqs-2',
            title:
              'How can your Regulatory Compliance Automation solutions help businesses?',
            content:
              'Our Regulatory Compliance Automation solutions utilize advanced technologies such as artificial intelligence and machine learning to automate compliance processes. By automating repetitive tasks, ensuring data accuracy, and providing real-time monitoring and alerts, our solutions enable businesses to streamline compliance efforts, reduce manual errors, and stay up to date with regulatory changes.',
          },
          {
            key: 'faqs-3',
            title: 'What makes your KYC/AML Solutions stand out?',
            content:
              'Our KYC/AML Solutions are designed to help businesses simplify and strengthen their customer due diligence and anti-money laundering processes. We offer advanced identity verification techniques, intelligent risk scoring, and comprehensive compliance checks. Our solutions leverage data analytics and machine learning algorithms to identify potential risks and suspicious activities, enabling businesses to meet regulatory requirements and combat financial crimes effectively.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Insurtech',
    slug: 'insurtech',
    fa_icon: 'fa-file-contract',
    is_featured: true,
    subtitle:
      'Transform your insurance business with our digital solutions and consulting services tailored to the insurtech industry.',
    hero_src: 'https://source.unsplash.com/mCqi3MljC4E/1600x900/',
    hero_alt: 'Insurance',
    // Seo
    seo: {
      title: 'Insurtech',
      description:
        'Discover how our digital solutions and consulting services can revolutionize the insurance industry.',
    },
    // Sections
    sections: {
      summary: {
        title:
          'Revolutionizing the Insurance Industry through Digital Transformation.',
        items: [
          {
            title:
              'At our Insurtech Service, we specialize in helping insurance companies navigate the digital landscape and leverage technology to drive innovation and deliver enhanced customer experiences.',
          },
          {
            title:
              'With our digital solutions and consulting services, we empower insurance businesses to streamline operations, improve efficiency, and stay competitive in the fast-paced insurtech industry.',
          },
        ],
      },
      features: {
        overline: 'What we offer',
        title: 'Our Insurtech Solutions',
        subtitle:
          'We combine cutting-edge technology, data-driven insights, and industry expertise to provide tailored digital solutions and consulting services for insurance companies.',
        items: [
          {
            fa_icon: 'fa-puzzle-piece',
            title: 'End-to-end digital transformation',
            subtitle:
              'We help insurance companies undergo a comprehensive digital transformation journey, from process optimization to customer engagement and data analytics.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Operational efficiency',
            subtitle:
              'We identify opportunities to streamline and automate operations, allowing insurance companies to improve efficiency, reduce costs, and enhance customer service.',
          },
          {
            fa_icon: 'fa-chart-bar',
            title: 'Data analytics and insights',
            subtitle:
              'We leverage advanced analytics and data science techniques to extract valuable insights from vast amounts of insurance data, enabling data-driven decision-making and risk assessment.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Risk management and fraud detection',
            subtitle:
              'We implement robust risk management systems and employ cutting-edge technologies to detect and prevent fraudulent activities, safeguarding insurance companies and their customers.',
          },
          {
            fa_icon: 'fa-exchange-alt',
            title: 'Integration and interoperability',
            subtitle:
              'We enable seamless integration of systems and data across different platforms and stakeholders, facilitating collaboration and enhancing operational efficiency.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Enhanced customer experience',
            subtitle:
              'We design and implement customer-centric digital solutions, such as self-service portals and personalized interactions, to improve customer satisfaction and retention.',
          },
        ],
      },
      faqs: {
        title: 'Frequently Asked Questions',
        subtitle:
          'Learn more about our Insurtech Solutions and how they can drive digital transformation in the insurance industry.',
        items: [
          {
            key: 'faqs-1',
            title: 'How can digital solutions benefit the insurance industry?',
            content:
              'Digital solutions can greatly benefit the insurance industry by improving operational efficiency, enhancing customer experiences, enabling data-driven decision-making, and streamlining processes for faster claims processing and underwriting.',
          },
          {
            key: 'faqs-2',
            title: 'What makes your Insurtech Solutions unique?',
            content:
              'Our Insurtech Solutions are tailored to the specific needs of insurance companies, combining industry expertise with cutting-edge technology. We provide end-to-end digital transformation support, encompassing everything from operational efficiency improvements to advanced analytics and customer experience enhancements.',
          },
          {
            key: 'faqs-3',
            title:
              'How do you ensure data security and privacy in your solutions?',
            content:
              'Data security and privacy are paramount in our solutions. We adhere to industry best practices and implement robust security measures to protect sensitive information. We also comply with relevant data protection regulations to ensure privacy and confidentiality.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Wealthtech',
    slug: 'wealthtech',
    fa_icon: 'fa-hand-holding-usd',
    is_featured: true,
    subtitle:
      'Transform your banking and asset management operations with our innovative wealthtech solutions.',
    hero_src: 'https://source.unsplash.com/3PyBkxgTiL0/1600x900/',
    hero_alt: 'Wealthtech',
    // Seo
    seo: {
      title: 'Wealthtech',
      description:
        'Discover how our wealthtech solutions can revolutionize your banking and asset management operations.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Empowering Banks and Asset Firms with Wealthtech Solutions.',
        items: [
          {
            title:
              'At our Wealthtech Solutions, we specialize in providing digital solutions and consulting services to banks and asset firms. Our wealthtech solutions are designed to streamline operations, enhance customer experiences, and drive growth in the financial industry.',
          },
          {
            title:
              'We understand the unique challenges faced by banks and asset firms, and we leverage advanced technologies to deliver innovative solutions that meet their specific needs. Our team of experts combines industry knowledge with digital expertise to transform traditional banking and asset management processes.',
          },
        ],
      },
      features: {
        overline: 'What we offer',
        title: 'Our {title} Capabilities',
        subtitle:
          'Unlock new opportunities and improve operational efficiency with our comprehensive wealthtech solutions.',
        items: [
          {
            fa_icon: 'fa-cogs',
            title: 'Digital Transformation Consulting',
            subtitle:
              'Partner with us to navigate the complexities of digital transformation and leverage technology to achieve strategic goals.',
          },
          {
            fa_icon: 'fa-line-chart',
            title: 'Investment Analysis & Management',
            subtitle:
              'Make informed investment decisions and optimize your portfolio with our advanced analysis and management solutions.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Regulatory Compliance',
            subtitle:
              'Ensure compliance with regulatory requirements and automate compliance processes with our comprehensive solutions.',
          },
          {
            fa_icon: 'fa-people-carry',
            title: 'Robo-Advisory Services',
            subtitle:
              'Leverage AI-driven robo-advisory services to deliver personalized investment advice and improve client engagement.',
          },
          {
            fa_icon: 'fa-exclamation-triangle',
            title: 'Risk Management',
            subtitle:
              'Mitigate risks and optimize risk management strategies with our data-driven risk management solutions.',
          },
          {
            fa_icon: 'fa-mobile-alt',
            title: 'Mobile Banking Solutions',
            subtitle:
              'Enhance customer experiences and enable seamless mobile banking with our user-friendly mobile banking solutions.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Find answers to common questions about our Wealthtech Solutions and how they can benefit banks and asset firms.',
        items: [
          {
            key: 'faqs-1',
            title:
              'Why should banks and asset firms invest in wealthtech solutions?',
            content:
              'Wealthtech solutions offer numerous benefits for banks and asset firms, including increased operational efficiency, improved customer experiences, enhanced risk management, and better compliance with regulatory requirements. By embracing wealthtech, banks and asset firms can stay competitive, drive innovation, and deliver superior financial services to their clients.',
          },
          {
            key: 'faqs-2',
            title:
              'How can your Digital Transformation Consulting services help banks and asset firms?',
            content:
              'Our Digital Transformation Consulting services empower banks and asset firms to navigate the complexities of digital disruption. We help identify strategic goals, assess existing systems and processes, and design customized digital solutions that streamline operations, improve customer engagement, and drive business growth. Our expertise in technology adoption and change management ensures a smooth and successful digital transformation journey.',
          },
          {
            key: 'faqs-3',
            title: 'What makes your Regulatory Compliance solutions stand out?',
            content:
              'Our Regulatory Compliance solutions are designed to address the unique regulatory challenges faced by banks and asset firms. We provide comprehensive solutions that automate compliance processes, monitor regulatory changes, and ensure adherence to regulatory requirements. Our solutions leverage advanced technologies, such as artificial intelligence and machine learning, to enhance accuracy, efficiency, and effectiveness in regulatory compliance.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Paytech',
    slug: 'paytech',
    fa_icon: 'fa-credit-card',
    is_featured: true,
    subtitle:
      'Transform your payment systems and financial operations with our innovative paytech solutions.',
    hero_src: 'https://source.unsplash.com/XvS-uKUoUao/1600x900/',
    hero_alt: 'Paytech',
    // Seo
    seo: {
      title: 'Paytech Solutions',
      description:
        'Discover how our paytech solutions can revolutionize your payment systems and financial operations.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Empowering Banks and Asset Firms with Paytech Solutions.',
        items: [
          {
            title:
              'At our Paytech Solutions, we specialize in providing digital solutions and consulting services to banks and asset firms. Our paytech solutions are designed to transform payment systems, improve financial operations, and enhance customer experiences in the financial industry.',
          },
          {
            title:
              'We understand the unique challenges faced by banks and asset firms in the payments landscape, and we leverage advanced technologies to deliver innovative paytech solutions that meet their specific needs. Our team of experts combines industry knowledge with digital expertise to streamline payment processes and optimize financial operations.',
          },
        ],
      },
      features: {
        overline: 'What we offer',
        title: 'Our {title} Capabilities',
        subtitle:
          'Unlock new opportunities and improve operational efficiency with our comprehensive paytech solutions.',
        items: [
          {
            fa_icon: 'fa-cogs',
            title: 'Digital Transformation Consulting',
            subtitle:
              'Partner with us to navigate the complexities of digital transformation and leverage technology to achieve strategic goals.',
          },
          {
            fa_icon: 'fa-money-check-alt',
            title: 'Payment Processing Solutions',
            subtitle:
              'Optimize payment processing and enable secure and seamless transactions with our advanced payment solutions.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Fraud Prevention and Security',
            subtitle:
              'Protect your payment systems and customer data with our robust fraud prevention and security solutions.',
          },
          {
            fa_icon: 'fa-mobile-alt',
            title: 'Mobile Payment Solutions',
            subtitle:
              'Enable convenient and secure mobile payments with our user-friendly mobile payment solutions.',
          },
          {
            fa_icon: 'fa-exchange-alt',
            title: 'Cross-Border Payment Solutions',
            subtitle:
              'Facilitate cross-border transactions and expand your global reach with our efficient cross-border payment solutions.',
          },
          {
            fa_icon: 'fa-analytics',
            title: 'Payment Analytics and Insights',
            subtitle:
              'Gain valuable insights into payment trends, customer behavior, and business performance with our payment analytics solutions.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Find answers to common questions about our Paytech Solutions and how they can benefit banks and asset firms.',
        items: [
          {
            key: 'faqs-1',
            title:
              'Why should banks and asset firms invest in paytech solutions?',
            content:
              'Paytech solutions offer numerous benefits for banks and asset firms, including improved payment processing efficiency, enhanced security and fraud prevention, seamless mobile payments, expanded global reach, and valuable payment insights. By embracing paytech, banks and asset firms can stay competitive, drive innovation, and deliver superior financial services to their customers.',
          },
          {
            key: 'faqs-2',
            title:
              'How can your Digital Transformation Consulting services help banks and asset firms?',
            content:
              'Our Digital Transformation Consulting services empower banks and asset firms to navigate the complex landscape of digital transformation. We provide strategic guidance, technology expertise, and change management support to help organizations embrace digital technologies, optimize processes, and enhance customer experiences. With our consulting services, banks and asset firms can unlock new growth opportunities and achieve sustainable success in the digital era.',
          },
          {
            key: 'faqs-3',
            title: 'What sets your Payment Processing Solutions apart?',
            content:
              'Our Payment Processing Solutions are designed to meet the specific needs of banks and asset firms. We offer advanced payment processing capabilities that enable secure and seamless transactions. Our solutions leverage cutting-edge technologies, such as artificial intelligence and machine learning, to optimize payment processes, reduce transaction costs, and enhance customer satisfaction. With our payment processing solutions, banks and asset firms can improve operational efficiency, drive revenue growth, and deliver exceptional payment experiences.',
          },
        ],
      },
    },
  },
  {
    // Hero
    title: 'Fintech',
    slug: 'fintech',
    fa_icon: 'fa-money-bill-wave',
    is_featured: true,
    subtitle:
      'Unlock the power of digital transformation in the banking and asset management industry with our fintech solutions.',
    hero_src: 'https://source.unsplash.com/RYWEyXopmM4/1600x900/',
    hero_alt: 'Fintech',
    // Seo
    seo: {
      title: 'Fintech Solutions',
      description:
        'Discover how our fintech solutions can revolutionize the banking and asset management industry through digital transformation.',
    },
    // Sections
    sections: {
      summary: {
        title:
          'Drive Digital Transformation in the Banking and Asset Management Industry.',
        items: [
          {
            title:
              'In the rapidly evolving landscape of the banking and asset management industry, digital transformation is crucial for staying competitive. At our Fintech Solutions, we specialize in providing cutting-edge digital solutions and consulting services to help banks and asset firms unlock new opportunities and drive growth through technology.',
          },
          {
            title:
              'We understand the unique challenges faced by banks and asset firms in adopting digital technologies and staying compliant with regulations. Our team of experts combines deep industry knowledge with digital expertise to develop innovative fintech solutions that streamline operations, enhance customer experiences, and improve overall business performance.',
          },
        ],
      },
      features: {
        overline: 'What we offer',
        title: 'Our {title} Capabilities',
        subtitle:
          'Empower your organization with our comprehensive fintech solutions tailored to the needs of the banking and asset management industry.',
        items: [
          {
            fa_icon: 'fa-cogs',
            title: 'Digital Banking Solutions',
            subtitle:
              'Transform traditional banking processes and deliver seamless digital experiences to customers with our digital banking solutions.',
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Investment Management Systems',
            subtitle:
              'Optimize asset management processes and make data-driven investment decisions with our advanced investment management systems.',
          },
          {
            fa_icon: 'fa-money-check-alt',
            title: 'Payment and Transaction Solutions',
            subtitle:
              'Simplify payment processes, enable secure transactions, and support multiple payment channels with our payment and transaction solutions.',
          },
          {
            fa_icon: 'fa-user-tie',
            title: 'Wealth Management Platforms',
            subtitle:
              'Empower wealth managers and financial advisors with our integrated wealth management platforms for efficient client management and portfolio analysis.',
          },
          {
            fa_icon: 'fa-chart-pie',
            title: 'Risk and Compliance Solutions',
            subtitle:
              'Mitigate risks and ensure regulatory compliance with our robust risk management and compliance solutions tailored to the banking and asset management industry.',
          },
          {
            fa_icon: 'fa-mobile-alt',
            title: 'Mobile Banking Applications',
            subtitle:
              'Deliver seamless mobile banking experiences and empower customers to access banking services anytime, anywhere through our mobile banking applications.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Find answers to common questions about our Fintech Solutions and how they can drive digital transformation in the banking and asset management industry.',
        items: [
          {
            key: 'faqs-1',
            title:
              'Why is digital transformation important for banks and asset firms?',
            content:
              'Digital transformation is essential for banks and asset firms to stay competitive and meet the evolving needs of customers. It enables organizations to streamline operations, enhance customer experiences, and leverage data-driven insights for informed decision-making. By embracing digital technologies, banks and asset firms can unlock new growth opportunities, improve operational efficiency, and drive innovation in the financial industry.',
          },
          {
            key: 'faqs-2',
            title: 'What makes our Fintech Solutions unique?',
            content:
              "Our Fintech Solutions are designed specifically for the banking and asset management industry, addressing the industry's unique challenges and requirements. We combine industry expertise with technological innovation to deliver comprehensive solutions that drive digital transformation and enable organizations to thrive in the digital era. Our solutions are scalable, secure, and customizable, ensuring they align with the specific needs and objectives of each client.",
          },
          {
            key: 'faqs-3',
            title:
              'How can our Fintech Solutions benefit banks and asset firms?',
            content:
              'Our Fintech Solutions offer numerous benefits for banks and asset firms. They streamline operations, automate processes, enhance customer experiences, improve data analysis capabilities, and strengthen risk management and compliance efforts. By leveraging our fintech solutions, banks and asset firms can gain a competitive edge, drive business growth, and adapt to the changing demands of the digital financial landscape.',
          },
        ],
      },
    },
  },
].map((item, i) => {
  return merge({}, MOCK_INDUSTRY_PAGE, {
    id: i + 1,
    ...item,
    sections: {
      ...item.sections,
      checklist: {
        subtitle:
          'Unlocking the potential of enterprise technology through expert data services tailored to drive your business growth.',
      },
      cta: {
        hero_src: '/images/about_nodes_above_city.png',
        hero_alt: 'Laser net over city',
        overline: 'Get Started',
        title: 'Partnering with {appTitle}',
        subtitle:
          "{appTitle} collaborates with enterprises to leverage data and AI for competitive advantage. Utilising future-proof technologies such as Python, JavaScript, SQL, ChatGPT, and Tableau, we provide customized data science services and AI solutions. Transforming raw data into actionable insights and automating complex processes, our expertise in data science and AI helps you unlock your data's potential and excel in the digital landscape.",
      },
    },
  })
})

export const MOCK_GOVX_INDUSTRYS = []

export const MOCK_INDUSTRYS = {
  GROUP: MOCK_GROUP_INDUSTRYS,
  TECH: MOCK_TECH_INDUSTRYS,
  DESIGN: MOCK_DESIGN_INDUSTRYS,
  DATA: MOCK_DATA_INDUSTRYS,
  DIGITAL: MOCK_DIGITAL_INDUSTRYS,
  FINX: MOCK_FINX_INDUSTRYS,
  GOVX: MOCK_GOVX_INDUSTRYS,
}
