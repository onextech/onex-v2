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

export const MOCK_GROUP_INDUSTRYS = [
  {
    title: 'Capital Markets',
    slug: 'capital-markets',
    subtitle:
      'We help investment banks, wealth and asset management firms, and other market infrastructure firms prepare for tomorrow.',
    fa_icon: 'fa-chart-mixed-up-circle-dollar',
    is_featured: true,
    hero_src: 'https://source.unsplash.com/NDfqqq_7QWM/1600x900',
    hero_alt: 'Man monitoring graph',
    sections: {
      summary: {
        title: 'Driving success in the Capital Markets industry.',
        items: [
          {
            title:
              'We understand the critical role that technology plays in driving success for enterprises in the capital markets industry. With our specialized technology consulting services and expertise in enterprise software development, we are dedicated to helping businesses in the capital markets sector achieve their goals and gain a competitive edge.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our Approach to {title}',
        subtitle:
          'With our expertise in enterprise software development, we offer a range of solutions tailored to address the specific needs and challenges of the Capital Markets industry.',
        items: [
          {
            fa_icon: 'fa-cogs',
            title: 'Custom Software Development',
            subtitle:
              'We develop custom software solutions that are designed to streamline your Capital Markets business processes and drive efficiency.',
          },
          {
            fa_icon: 'fa-database',
            title: 'Data Analytics and Insights',
            subtitle:
              'Our data analytics services enable you to gain valuable insights from your Capital Markets business data, empowering you to make informed decisions.',
          },
          {
            fa_icon: 'fa-users',
            title: 'CRM Solutions',
            subtitle:
              'We provide CRM (Customer Relationship Management) solutions that help you effectively manage customer relationships and enhance customer satisfaction.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Security and Compliance',
            subtitle:
              'Our expertise in security and compliance ensures that your Capital Markets business is protected against potential threats and meets industry regulations.',
          },
          {
            fa_icon: 'fa-globe',
            title: 'Integration and Scalability',
            subtitle:
              'We offer integration services to connect and streamline your Capital Markets business systems, as well as scalable solutions to support your growth.',
          },
          {
            fa_icon: 'fa-wrench',
            title: 'Legacy Systems Modernization',
            subtitle:
              'We assist in modernizing and upgrading your legacy systems, enabling your Capital Markets business to leverage the latest technologies and stay competitive.',
          },
        ],
      },
      faqs: {
        title: 'Frequently Asked Questions',
        subtitle:
          'Learn more about our Capital Markets Solutions and how they can benefit your business.',
        items: [
          {
            key: 'faqs-1',
            title: 'What are the key challenges in capital markets operations?',
            content:
              'Capital markets operations face challenges such as complex regulatory requirements, high transaction volumes, market volatility, and the need for real-time data analysis. Our solutions are designed to address these challenges and help you navigate the ever-changing landscape of the capital markets industry.',
          },
          {
            key: 'faqs-2',
            title: 'How can your software solutions improve trading processes?',
            content:
              'Our software solutions leverage advanced technologies and automation to streamline trading processes, reduce manual errors, and improve operational efficiency. We provide features such as order management, trade execution, risk assessment, and real-time market data analysis to enhance decision-making and optimize trading strategies.',
          },
          {
            key: 'faqs-3',
            title: 'Do you offer customization options for capital markets solutions?',
            content:
              'Yes, we understand that every capital markets firm has unique requirements. We offer customized software development services to tailor our solutions to your specific needs. Our team works closely with you to understand your business processes and objectives, ensuring that our solutions align with your strategic goals.',
          },
        ],
      }
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
        title: 'Our Approach to {title}',
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
        title: 'Our Approach to {title}',
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
        title: 'Our Approach to {title}',
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
  {
    title: 'Banking',
    slug: 'banking',
    subtitle:
      'We help banks challenge their conventions; capitalize on the full potential of technology, and become better at change.',
    fa_icon: 'fa-coins',
    is_featured: true,
    hero_src: 'https://source.unsplash.com/XvS-uKUoUao/1600x900',
    hero_alt: 'G Pay being used',
    sections: {
      summary: {
        title: 'Driving innovation in the banking industry.',
        items: [
          {
            title:
              'We understand the evolving needs and challenges faced by banks, and our expertise in enterprise software development enables us to deliver innovative solutions that enhance operational efficiency, improve customer experiences, and ensure regulatory compliance.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our Approach to {title}',
        subtitle:
          'With our deep industry knowledge and cutting-edge technologies, we offer a range of solutions that empower banks to thrive in a digital banking era.',
        items: [
          {
            fa_icon: 'fa-money-check-alt',
            title: 'Core Banking Systems',
            subtitle:
              'We develop robust and scalable core banking systems that streamline banking processes, including account management, transaction processing, and customer data management.',
          },
          {
            fa_icon: 'fa-mobile-alt',
            title: 'Mobile Banking Applications',
            subtitle:
              'Our mobile banking applications enable customers to conveniently perform banking transactions, manage accounts, and access personalized financial services on their mobile devices.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Security and Fraud Prevention',
            subtitle:
              'We implement advanced security measures and fraud prevention solutions to safeguard banking systems, customer data, and financial transactions from cyber threats.',
          },
          {
            fa_icon: 'fa-chart-pie',
            title: 'Data Analytics and Insights',
            subtitle:
              'Our data analytics solutions leverage big data technologies to provide banks with valuable insights, enabling data-driven decision-making, risk management, and personalized customer experiences.',
          },
          {
            fa_icon: 'fa-briefcase',
            title: 'Corporate Banking Solutions',
            subtitle:
              'We develop comprehensive corporate banking solutions that facilitate corporate account management, treasury services, trade finance, and cash management for corporate clients.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Integration and Middleware',
            subtitle:
              'We provide integration and middleware solutions that enable seamless connectivity between banking systems, third-party applications, and external APIs, enhancing operational efficiency and enabling innovation.',
          },
        ],
      },
      faqs: {
        title: 'Frequently Asked Questions',
        subtitle:
          'Learn more about our Banking Solutions and how they can benefit your institution.',
        items: [
          {
            key: 'faqs-1',
            title: 'What are the key challenges in the banking industry?',
            content:
              'The banking industry faces challenges such as cybersecurity threats, regulatory compliance, legacy system integration, digital transformation, customer experience enhancement, and data management.',
          },
          {
            key: 'faqs-2',
            title: 'How can technology drive innovation in the banking sector?',
            content:
              'Technology can drive innovation in the banking sector by enabling digital banking services, enhancing security and fraud detection, streamlining processes, enabling personalized customer experiences, facilitating data-driven decision-making, and promoting financial inclusion.',
          },
          {
            key: 'faqs-3',
            title: 'What software solutions do you offer for the banking industry?',
            content:
              'We offer a range of software solutions tailored to the banking industry, including core banking system integration, digital banking platforms, risk and compliance solutions, fraud detection systems, data analytics tools, customer relationship management (CRM) systems, and mobile banking applications.',
          },
        ],
      }
    },
  },
  {
    title: 'Insurance',
    slug: 'insurance',
    subtitle:
      "Insurance is going digital. Whether it's streamlining business processes or enabling new models, we're helping our clients transform.",
    fa_icon: 'fa-shield-cross',
    hero_src: 'https://source.unsplash.com/OQMZwNd3ThU/1600x900',
    hero_alt: 'Person writing on paper',
    sections: {
      summary: {
        title: 'Driving innovation in the insurance industry.',
        items: [
          {
            title:
              'The insurance industry is undergoing rapid digital transformation, driven by changing customer expectations, regulatory requirements, and emerging technologies. At One X Group, we help insurance enterprises navigate these challenges and unlock the full potential of technology to achieve their business goals.',
          },
        ],
      },
      features: {
        overline: 'What we do',
        title: 'Our Approach to {title}',
        subtitle:
          'With our deep industry knowledge and cutting-edge technologies, we offer a range of solutions that empower insurance companies to thrive in a digital era.',
        items: [
          {
            fa_icon: 'fa-shield-alt',
            title: 'Policy Management Systems',
            subtitle:
              'We develop comprehensive policy management systems that automate policy administration, underwriting, claims processing, and policyholder management.',
          },
          {
            fa_icon: 'fa-mobile-alt',
            title: 'Mobile Claims Applications',
            subtitle:
              'Our mobile claims applications enable policyholders to conveniently submit and track insurance claims, upload documents, and communicate with claims adjusters.',
          },
          {
            fa_icon: 'fa-chart-pie',
            title: 'Data Analytics and Insights',
            subtitle:
              'We leverage advanced analytics and big data technologies to help insurance companies extract valuable insights from data, enhance risk assessment, optimize pricing strategies, and improve fraud detection.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Integration and Interoperability',
            subtitle:
              'We provide integration and interoperability solutions that enable seamless connectivity between insurance systems, external data sources, and third-party services, facilitating data exchange, process automation, and collaboration.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Customer Relationship Management (CRM)',
            subtitle:
              'Our CRM solutions help insurance companies effectively manage customer relationships, improve customer service, and enable personalized engagement through targeted marketing campaigns.',
          },
          {
            fa_icon: 'fa-lock',
            title: 'Cybersecurity and Data Protection',
            subtitle:
              'We implement robust cybersecurity measures and data protection solutions to safeguard sensitive insurance data, prevent data breaches, and ensure compliance with regulatory requirements.',
          },
        ],
      },
      faqs: {
        title: 'Frequently Asked Questions',
        subtitle:
          'Learn more about our Insurance Solutions and how they can benefit your organization.',
        items: [
          {
            key: 'faqs-1',
            title: 'What are the key challenges in the insurance industry?',
            content:
              'The insurance industry faces challenges such as digital disruption, legacy system integration, regulatory compliance, customer experience enhancement, fraud detection, risk assessment, and leveraging data insights.',
          },
          {
            key: 'faqs-2',
            title: 'How can technology drive innovation in the insurance sector?',
            content:
              'Technology can drive innovation in the insurance sector by enabling digital insurance platforms, enhancing underwriting processes, automating claims management, improving customer engagement through self-service portals, leveraging data analytics for risk assessment and personalized offerings, and facilitating seamless integration with partner ecosystems.',
          },
          {
            key: 'faqs-3',
            title: 'What software solutions do you offer for the insurance industry?',
            content:
              'We offer a range of software solutions tailored to the insurance industry, including policy management systems, claims processing platforms, customer portals, fraud detection systems, data analytics tools, underwriting automation, and digital transformation consulting services.',
          },
        ],
      }
    },
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
    fa_icon: 'fa-coins',
    is_featured: true,
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

export const MOCK_DATA_INDUSTRYS = MOCK_GROUP_INDUSTRYS

export const MOCK_DESIGN_INDUSTRYS = MOCK_GROUP_INDUSTRYS

export const MOCK_INDUSTRYS = {
  GROUP: MOCK_GROUP_INDUSTRYS,
  TECH: MOCK_TECH_INDUSTRYS,
  DESIGN: MOCK_DESIGN_INDUSTRYS,
  DATA: MOCK_DATA_INDUSTRYS
}
