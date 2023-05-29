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
      overline: 'What we do',
      title: 'Out {title} Capabilities',
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
              'Our deep industry knowledge and technological expertise make us uniquely positioned to help your organization navigate its digital transformation journey. We build solutions that not only meet your current needs but also scale with your future growth.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
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
            title: 'Why is digital transformation important for finance companies?',
            content:
              'Digital transformation enables finance companies to streamline operations, improve customer experiences, and make data-driven decisions. It can also enhance security, compliance, and scalability, key aspects in the financial sector.',
          },
          {
            key: 'faqs-2',
            title: 'What type of software solutions do you provide for finance companies?',
            content:
              'We offer a wide range of software solutions, including custom software development, data analytics solutions, security and compliance, cloud solutions, AI and Machine Learning integration, and system integration.',
          },
          {
            key: 'faqs-3',
            title: 'How do you ensure the security and compliance of the software you develop?',
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
      'We combine technology and a delivery-focused culture to enable leaders across public sector organizations to turn ambition into action.',
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
        overline: 'What we do',
        title: 'Out {title} Capabilities',
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
              'We help government agencies develop and implement comprehensive digital transformation strategies to modernize operations and deliver citizen-centric services.',
          },
          {
            fa_icon: 'fa-wrench',
            title: 'Legacy Systems Modernization',
            subtitle:
              'We assist in modernizing legacy systems, enabling government agencies to leverage emerging technologies and enhance service delivery.',
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
            title: 'What types of software solutions do you offer for government agencies?',
            content:
              'We offer a range of software solutions tailored to the specific needs of government agencies, including citizen engagement platforms, e-governance systems, data management and analytics solutions, workflow automation tools, and secure government portals.',
          },
          {
            key: 'faqs-3',
            title: 'Do you have experience working with government compliance and regulations?',
            content:
              'Yes, we have extensive experience working with government compliance and regulations. We understand the unique requirements and standards that government agencies must adhere to, and we ensure that our solutions meet the necessary compliance and security standards.',
          },
        ],
      },
    }
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
        overline: 'What we do',
        title: 'Out {title} Capabilities',
        subtitle:
          'With our deep knowledge of the maritime industry and cutting-edge technologies, we offer a range of solutions that help maritime organizations stay ahead in a rapidly evolving digital landscape.',
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
            title: 'Legacy Systems Modernization',
            subtitle:
              'We assist in modernizing legacy systems in the maritime industry, leveraging emerging technologies to enhance efficiency and reduce costs.',
          },
        ],
      },
      faqs: {
        title: 'Frequently Asked Questions',
        subtitle:
          'Learn more about our Maritime Solutions and how they can benefit your organization.',
        items: [
          {
            key: 'faqs-1',
            title: 'What are the key challenges in the maritime industry?',
            content:
              'The maritime industry faces challenges such as regulatory compliance, operational inefficiencies, security threats, environmental sustainability, and optimizing logistics across complex supply chains.',
          },
          {
            key: 'faqs-2',
            title: 'How can technology improve operations in the maritime sector?',
            content:
              'Technology can help improve maritime operations by automating manual processes, enhancing vessel performance monitoring, optimizing route planning, enabling real-time data sharing and collaboration, and providing data-driven insights for better decision-making.',
          },
          {
            key: 'faqs-3',
            title: 'What software solutions do you offer for the maritime industry?',
            content:
              'We offer a range of software solutions tailored to the maritime industry, including fleet management systems, vessel tracking and monitoring solutions, port management software, maritime analytics platforms, supply chain optimization tools, and compliance management systems.',
          },
        ],
      }
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
        overline: 'What we do',
        title: 'Out {title} Capabilities',
        subtitle:
          'With our deep knowledge of the real estate industry and cutting-edge technologies, we offer a range of solutions that help real estate organizations thrive in a digital-first era.',
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
          'Learn more about our Real Estate Solutions and how they can benefit your organization.',
        items: [
          {
            key: 'faqs-1',
            title: 'What are the key challenges in the real estate industry?',
            content:
              'The real estate industry faces challenges such as property management, lease administration, tenant relationship management, investment analysis, regulatory compliance, and adapting to changing market conditions.',
          },
          {
            key: 'faqs-2',
            title: 'How can technology improve operations in the real estate sector?',
            content:
              'Technology can improve real estate operations by automating manual processes, centralizing property and tenant data, streamlining lease administration, enabling online property listings and transactions, facilitating customer self-service, and providing data-driven insights for better decision-making.',
          },
          {
            key: 'faqs-3',
            title: 'What software solutions do you offer for the real estate industry?',
            content:
              'We offer a range of software solutions tailored to the real estate industry, including real estate management systems, property analytics platforms, transaction management software, customer relationship management (CRM) tools, property listing portals, and investment analysis platforms.',
          },
        ],
      }
    }
  },
].map((item, i) => {
  return merge({}, MOCK_INDUSTRY_PAGE, {
    id: i + 1,
    ...item,
    sections: { ...item.sections, checklist: { subtitle: 'Unlocking the potential of enterprise technology through expert consulting and software development services tailored to drive your business growth.' }}
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
        overline: 'What we do',
        title: 'Our {title} Capabilities',
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
            title: 'Why is a high-quality user interface important for my finance business?',
            content:
              'A high-quality user interface is crucial for finance businesses as it enhances user experience, improves productivity, and enables users to make informed financial decisions. It helps streamline complex workflows, visualize financial data effectively, and ensure data accuracy and security.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of working with your company for the finance industry?',
            content:
              'By partnering with our software development company, you can benefit from our expertise in frontend software engineering and dashboard development tailored specifically for the finance industry. We prioritize data security, performance optimization, and scalability to meet the unique demands of finance applications. Our solutions empower your enterprise to make data-driven decisions, enhance operational efficiency, and deliver a superior user experience.',
          },
          {
            key: 'faqs-3',
            title: 'How do we approach frontend software engineering and dashboard development for finance applications?',
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
        'Discover innovative technology solutions for the government sector. We offers expertise in delivering impactful software solutions.',
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
        overline: 'What we do',
        title: 'Our {title} Capabilities',
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
            title: 'Why is a high-quality user interface important for government organizations?',
            content:
              'A high-quality user interface is crucial for government organizations as it enhances citizen experience, promotes transparency, and facilitates access to government services. It improves engagement, fosters trust, and enables efficient interaction with government systems and platforms.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of working with your company for government organizations?',
            content:
              'By partnering with our software development company, government organizations can benefit from our expertise in frontend software engineering and dashboard development tailored specifically for the public sector. We prioritize security, compliance, and accessibility to meet government standards and regulations. Our solutions empower government entities to deliver citizen-centric services, leverage data-driven insights, and enhance overall governance.',
          },
          {
            key: 'faqs-3',
            title: 'How do we approach frontend software engineering and dashboard development for government organizations?',
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
        overline: 'What we do',
        title: 'Our {title} Capabilities',
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
              'We provide advanced data analytics and visualization tools that help maritime organizations gain valuable insights and make data-driven decisions.',
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
              'We help maritime organizations track and measure their performance through comprehensive performance measurement and reporting tools.',
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
            title: 'Why is software development important for the maritime industry?',
            content:
              'Software development plays a crucial role in optimizing maritime operations, enhancing safety, efficiency, and decision-making. It allows for streamlined processes, data analysis, and real-time monitoring, resulting in improved productivity and cost-effectiveness in the maritime industry.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of working with your company for the maritime industry?',
            content:
              'By partnering with our software development company, maritime businesses can leverage our expertise in frontend software engineering and dashboard development to drive digital transformation. Our solutions enable real-time data visualization, predictive analytics, and process automation, resulting in improved operational efficiency, enhanced safety measures, better fleet management, and increased profitability.',
          },
        {
          key: 'faqs-3',
          title: 'How do you ensure the security of maritime data in your software solutions?',
          content:
            'We understand the importance of data security in the maritime industry. We implement robust security measures to protect maritime data from unauthorized access, breaches, and data loss. This includes encryption, access controls, and multi-factor authentication. We also adhere to industry best practices and compliance standards to ensure the highest level of security. Regular security audits and updates are conducted to identify and address any vulnerabilities. Our goal is to provide maritime organizations with secure software solutions that safeguard their data and maintain the integrity of their operations.',
        },
      ],
    },
  },},
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
        overline: 'What we do',
        title: 'Our {title} Capabilities',
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
            title: 'Why is software development important for the real estate industry?',
            content:
              'Software development plays a vital role in the real estate industry by enabling automation, improving efficiency, and enhancing customer experiences. It allows real estate businesses to streamline processes, manage data effectively, and leverage technology to gain a competitive edge in the market.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of working with your company for the real estate industry?',
            content:
              'By partnering with our company, real estate businesses can leverage our expertise in frontend software engineering and dashboard development to unlock the full potential of their operations. Our solutions enable seamless property management, automated workflows, real-time analytics, and personalized tenant experiences. This results in improved operational efficiency, better tenant engagement, optimized resource allocation, and increased profitability.',
          },
        {
          key: 'faqs-3',
          title: 'How do you ensure the security of sensitive real estate data?',
          content:
            'We prioritize the security of sensitive real estate data throughout our software development process. We implement robust security measures, including encryption, access controls, and regular security audits. Additionally, we adhere to industry best practices and comply with relevant data protection regulations to ensure the confidentiality, integrity, and availability of your data.',
        },
      ],
    },},
  }
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
        overline: 'What we do',
        title: 'Our {title} Capabilities',
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
        overline: 'What we do',
        title: 'Our {title} Capabilities',
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
            title: 'What are the benefits of your UX workshops for government teams?',
            content:
              'Our UX workshops are designed to help government teams understand the principles of user experience design. This can enhance their ability to deliver services that meet the public’s needs, improve team collaboration, and drive innovation in public service delivery.',
          },
          {
            key: 'faqs-3',
            title: 'How do you approach product design for government services?',
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
        title: 'Navigating the digital transformation in maritime with user-centric design.',
        items: [
          {
            title:
              'As the maritime industry navigates digital transformation, intuitive user interfaces and effective product designs play a key role. Our UX/UI services are tailored to meet the unique needs of maritime enterprises, enhancing user experience and operational efficiency.',
          },
          {
            title:
              'Through enterprise product design and UX workshops, we enable maritime organizations to improve user engagement, streamline processes, and foster innovation. We bring an understanding of the maritime industry’s specific challenges and opportunities, ensuring our solutions deliver real value.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
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
            title: 'What is your approach to product design for maritime services?',
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
              'Through enterprise product design and UX workshops, we help real estate organizations improve user engagement, streamline processes, and foster innovation. With deep understanding of the specific challenges and opportunities in real estate, we ensure our solutions deliver value.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
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
              'Our UX workshops equip real estate teams with knowledge and skills to adopt user-centric design principles. This helps enhance user satisfaction, streamline processes, and foster digital innovation within the organization.',
          },
          {
            key: 'faqs-3',
            title: 'What is your approach to product design for real estate services?',
            content:
              'We focus on understanding the unique needs and challenges of the real estate industry. Our product designs aim to improve user engagement, process efficiency, and accessibility across all devices.',
          },
        ],
      },
    },
  }
].map((item, i) => {
  return merge({}, MOCK_INDUSTRY_PAGE, {
    id: i + 1,
    ...item,
    sections: { ...item.sections, checklist: { subtitle: 'Unlocking the potential of enterprise technology through expert design services tailored to drive your business growth.' }}
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
        overline: 'What we do',
        title: 'Our {title} Capabilities',
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
            title: 'Why are data science and AI important for the finance industry?',
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
        'This page details our expertise in leveraging data science and AI to create transformative solutions for government organizations.',
    },
    // Sections
    sections: {
      summary: {
        title: 'Empowering the public sector with data and AI.',
        items: [
          {
            title:
              'In the public sector, making data-driven decisions is crucial. Our data science and AI solutions are designed to meet the unique challenges of government organizations, enabling them to uncover valuable insights and drive efficiency and transparency.',
          },
          {
            title:
              'We deliver AI solutions that enhance service delivery, facilitate policy making, and foster innovation. Whether it’s improving decision-making, automating processes, or identifying new opportunities, we help government entities turn their data into actionable insights.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
        subtitle:
          'We offer a wide range of data science and AI solutions tailored to the needs of government organizations.',
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
              'Our predictive analytics solutions enable government organizations to anticipate future trends and make informed policy decisions.',
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
              'We work closely with government organizations to understand their specific needs and deliver tailored AI solutions.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Data Science & AI Solutions for Government and how we can empower your organization.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why are data science and AI important for the public sector?',
            content:
              'Data science and AI have the potential to revolutionize the public sector. They can help government organizations make more informed decisions, improve service delivery, and drive transparency and efficiency. Leveraging these technologies is key to meeting the demands of today’s digital age.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of your Data Science & AI Solutions?',
            content:
              'Our data science and AI solutions help government organizations leverage their data in powerful ways. We provide tools to uncover valuable insights, predict future trends, and automate processes, all while ensuring the highest levels of security and compliance. We strive to deliver solutions that align with your public service objectives and drive meaningful improvement.',
          },
          {
            key: 'faqs-3',
            title: 'How do you approach data science and AI in the public sector?',
            content:
              'We start by understanding your organization’s specific needs and goals. We then design and implement data science and AI solutions tailored to these requirements. This may involve predictive analytics to inform policy decisions, AI automation to improve service delivery, or AI strategy consulting to foster innovation and efficiency.',
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
              'Whether it’s predictive maintenance for vessels, AI-powered logistics management, or data-driven decision-making, we help maritime organizations navigate the complexities of the industry and seize new opportunities.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our {title} Capabilities',
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
              'Our solutions help organizations make data-backed decisions, improving strategic planning and operational performance.',
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
              'We partner with maritime organizations to understand their specific needs and deliver tailored AI solutions.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Data Science & AI Solutions for the Maritime industry and how we can empower your organization.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why are data science and AI important for the maritime industry?',
            content:
              'Data science and AI have the potential to significantly enhance operations in the maritime industry. They can enable predictive maintenance, optimize logistics, improve decision-making, and drive overall operational efficiency. As the maritime industry continues to evolve, these technologies will be key to staying competitive.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of your Data Science & AI Solutions?',
            content:
              'Our solutions are designed to address the specific challenges and needs of the maritime industry. By leveraging our solutions, maritime organizations can increase operational efficiency, improve safety, and innovate faster. Our team of experts collaborates closely with your organization to ensure that our solutions deliver maximum value.',
          },
          {
            key: 'faqs-3',
            title: 'How do you approach data science and AI in the maritime industry?',
            content:
              'We begin by understanding your organization’s unique needs and objectives. We then design and implement tailored data science and AI solutions to meet these needs. This may involve using machine learning for predictive maintenance, AI for logistics management, or data analytics for decision support.',
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
        overline: 'What we do',
        title: 'Our {title} Capabilities',
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
              'Our solutions enable organizations to make data-backed decisions, improving strategic planning and operational performance.',
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
              'We partner with real estate organizations to understand their specific needs and deliver tailored AI solutions.',
          },
        ],
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Learn more about our Data Science & AI Solutions for the Real Estate industry and how we can empower your organization.',
        items: [
          {
            key: 'faqs-1',
            title: 'Why are data science and AI important for the real estate industry?',
            content:
              'Data science and AI provide tools for the real estate industry to make better, data-driven decisions, predict trends, personalize customer experiences, and improve operational efficiency. As the industry becomes increasingly digital, these technologies are becoming essential.',
          },
          {
            key: 'faqs-2',
            title: 'What are the benefits of your Data Science & AI solutions for my real estate business?',
            content:
              'Our solutions can help your real estate business in several ways. This includes generating accurate property valuations, predicting industry trends, creating detailed customer profiles for targeted marketing, improving decision-making, and enhancing overall operational efficiency. We ensure that our solutions meet your specific business needs and objectives.',
          },
          {
            key: 'faqs-3',
            title: 'How do you approach data science and AI in the real estate industry?',
            content:
              'We start by understanding your specific business needs and objectives. Then we design and implement tailored data science and AI solutions to address these needs. This could involve using machine learning for predictive analytics, AI for customer profiling, or data analytics for strategic decision-making. Our team collaborates closely with your organization to ensure our solutions deliver maximum value.',
          },
        ],
      },
    },
  }
].map((item, i) => {
  return merge({}, MOCK_INDUSTRY_PAGE, {
    id: i + 1,
    ...item,
    sections: { ...item.sections, checklist: { subtitle: 'Unlocking the potential of enterprise technology through expert data services tailored to drive your business growth.' }}
  })
})

export const MOCK_INDUSTRYS = {
  GROUP: MOCK_GROUP_INDUSTRYS,
  TECH: MOCK_TECH_INDUSTRYS,
  DESIGN: MOCK_DESIGN_INDUSTRYS,
  DATA: MOCK_DATA_INDUSTRYS
}
