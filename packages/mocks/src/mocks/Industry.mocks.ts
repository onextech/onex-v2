import merge from 'lodash/merge'

export const MOCK_INDUSTRY_PAGE = {
  title: 'React',
  avatar_alt: 'Three circles',
  // Hero
  avatar_src: '/images/about_shape_circle_radial.svg',
  hero_alt: 'People working in office',
  hero_src: '/images/about_working_in_office.png',
  overline: 'Industry',
  // Sections
  sections: {
    benefits: {
      title: 'Our Suite of {title} Services',
      items: [
        {
          title: 'Design a new product',
          avatar_alt: 'Three circles',
          avatar_src: '/images/about_shape_circle_radial.svg',
          overline: '01',
          subtitle:
            'We create human-centred designs focused on driving conversions and achieving business goals.',
        },
        {
          title: 'Launch a new company',
          avatar_alt: 'Three squares',
          avatar_src: '/images/about_shape_squares.svg',
          overline: '02',
          subtitle:
            'We create human-centred designs focused on driving conversions and achieving business goals.',
        },
        {
          title: 'Scale up development',
          avatar_alt: 'Square with two circles',
          avatar_src: '/images/about_shape_square_with_circle.svg',
          overline: '03',
          subtitle:
            'We create human-centred designs focused on driving conversions and achieving business goals.',
        },
        {
          title: 'Improve a current system',
          avatar_alt: 'Three circles',
          avatar_src: '/images/about_shape_circles.svg',
          overline: '04',
          subtitle:
            'We create human-centred designs focused on driving conversions and achieving business goals.',
        },
      ],
      overline: 'What we do',
      subtitle:
        "Whether designing and developing a new application for an ambitious idea, or upgrading an existing tool, we're the right team to help.",
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
            '{title} components allows to really embrace agile approach to ever-changing business requirements. It takes care of the inner workings of updating the browser and allows us to focus on developing the application’s features.',
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
      title: 'Empowering the {title} Sector',
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
      overline: 'Our Solutions',
      subtitle:
        'To deliver products of the highest quality, we follow the best practices that include code review, pair programming, test-driven development, continuous integration, and automated testing.',
    },
    howItWorks: { title: '', items: [], overline: '', subtitle: '' },
    summary: {
      title: 'Innovation that drives real impact.',
    },
  },
  // Seo
  seo: {
    title: '{title} Industry',
    description: 'This page is all about the technology that we use',
  },
  subtitle:
    'Work with product experts with the know-how tested in 7+ industries.',
}

export const MOCK_GROUP_INDUSTRYS = [
  {
    // Hero
    title: 'Finance',
    slug: 'finance',
    fa_icon: 'fa-coins',
    hero_alt: 'Financial Building',
    hero_src: '/unsplash/6Pv4LtEw9GM.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is digital transformation important for finance companies?',
            content:
              'Digital transformation enables finance companies to streamline operations, improve customer experiences, and make data-driven decisions. It can also enhance security, compliance, and scalability, key aspects in the financial sector.',
          },
          {
            id: 'faqs-2',
            title:
              'What type of software solutions do you provide for finance companies?',
            content:
              'We offer a wide range of software solutions, including custom software development, data analytics solutions, security and compliance, cloud solutions, AI and Machine Learning integration, and system integration.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure the security and compliance of the software you develop?',
            content:
              'We follow stringent security protocols and best practices in software development. We also ensure our software solutions comply with all relevant regulations and standards in the financial industry.',
          },
        ],
        subtitle:
          'Learn more about our enterprise software development services for the financial industry.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Custom software development',
            fa_icon: 'fa-code',
            subtitle:
              'We develop tailor-made software solutions that align with your business objectives and cater to your unique operational needs.',
          },
          {
            title: 'Data analytics solutions',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We build robust data analytics solutions to help you derive actionable insights from your data and drive informed decision-making.',
          },
          {
            title: 'Security & Compliance',
            fa_icon: 'fa-lock',
            subtitle:
              'We prioritize security and regulatory compliance in every solution we build, to protect your data and maintain trust with your clients.',
          },
          {
            title: 'Cloud solutions',
            fa_icon: 'fa-cloud',
            subtitle:
              'We enable smooth migration to the cloud and develop cloud-native applications, to enhance scalability and operational efficiency.',
          },
          {
            title: 'AI & Machine Learning',
            fa_icon: 'fa-robot',
            subtitle:
              'We integrate AI and Machine Learning capabilities into your systems to automate processes, reduce errors and improve customer experiences.',
          },
          {
            title: 'System Integration',
            fa_icon: 'fa-sync-alt',
            subtitle:
              'We ensure your systems work together seamlessly, improving data flow, operational efficiency, and overall business performance.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'Leveraging the latest technologies, we provide comprehensive software development services for the finance industry.',
      },
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
    },
    // Seo
    seo: {
      title: 'Finance',
      description:
        'Providing expertly crafted enterprise software solutions to drive digital transformation in the financial sector.',
    },
    subtitle:
      'Empowering finance firms with tailor-made enterprise software solutions to drive business success.',
  },
  {
    title: 'Government',
    slug: 'government',
    fa_icon: 'fa-landmark-flag',
    hero_alt: 'Circular seating area',
    hero_src: '/unsplash/x_0hW-KaCgI.jpg',
    is_featured: true,
    sections: {
      faqs: {
        title: 'Frequently Asked Questions',
        items: [
          {
            id: 'faqs-1',
            title: 'How can technology solutions benefit government agencies?',
            content:
              'Technology solutions can help government agencies streamline operations, enhance citizen services, improve data management and security, enable data-driven decision-making, and drive digital transformation to meet the evolving needs of citizens.',
          },
          {
            id: 'faqs-2',
            title:
              'What types of software solutions do you offer for government agencies?',
            content:
              'We offer a range of software solutions tailored to the specific needs of government agencies, including citizen engagement platforms, e-governance systems, data management and analytics solutions, workflow automation tools, and secure government portals.',
          },
          {
            id: 'faqs-3',
            title:
              'Do you have experience working with government compliance and regulations?',
            content:
              'Yes, we have extensive experience working with government compliance and regulations. We understand the unique requirements and standards that government agencies must adhere to, and we ensure that our solutions meet the necessary compliance and security standards.',
          },
        ],
        subtitle:
          'Learn more about our Government Solutions and how they can benefit your agency.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Custom Software Development',
            fa_icon: 'fa-cogs',
            subtitle:
              'We develop custom software solutions that address the unique needs and processes of government agencies, streamlining operations and improving efficiency.',
          },
          {
            title: 'Data Management and Analytics',
            fa_icon: 'fa-database',
            subtitle:
              'Our data management and analytics solutions enable government agencies to leverage data effectively, gain insights, and make data-driven decisions.',
          },
          {
            title: 'Cybersecurity and Compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We provide robust cybersecurity solutions and ensure compliance with regulations to protect sensitive government data and systems.',
          },
          {
            title: 'Citizen Engagement Platforms',
            fa_icon: 'fa-users',
            subtitle:
              'Our citizen engagement platforms facilitate seamless communication and interaction between government agencies and citizens, enhancing public participation and satisfaction.',
          },
          {
            title: 'Digital Transformation Strategy',
            fa_icon: 'fa-globe',
            subtitle:
              'We help government agencies develop and implement comprehensive digital transformation strategies to modernise operations and deliver citizen-centric services.',
          },
          {
            title: 'Legacy Systems Modernisation',
            fa_icon: 'fa-wrench',
            subtitle:
              'We assist in modernising legacy systems, enabling government agencies to leverage emerging technologies and enhance service delivery.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'With our deep understanding of government operations and regulations, we offer a range of solutions that help government agencies achieve their goals and deliver exceptional services.',
      },
      summary: {
        title: 'Driving digital transformation in government agencies.',
        items: [
          {
            title:
              'We understand the critical role of technology in improving public services, increasing efficiency, and enhancing transparency in government operations. Our expertise in enterprise software development enables us to deliver innovative solutions that drive digital transformation and empower government agencies to better serve their constituents.',
          },
        ],
      },
    },
    subtitle:
      'We combine technology and a delivery-focused culture to enable leaders across public sector organisations to turn ambition into action.',
  },
  {
    title: 'Maritime',
    slug: 'maritime',
    fa_icon: 'fa-ship',
    hero_alt: 'Ship in the ocean',
    hero_src: '/unsplash/sfjS-FglvU4.jpg',
    is_featured: true,
    sections: {
      faqs: {
        title: 'Frequently Asked Questions',
        items: [
          {
            id: 'faqs-1',
            title: 'What are the key challenges in the maritime industry?',
            content:
              'The maritime industry faces challenges such as regulatory compliance, operational inefficiencies, security threats, environmental sustainability, and optimizing logistics across complex supply chains.',
          },
          {
            id: 'faqs-2',
            title:
              'How can technology improve operations in the maritime sector?',
            content:
              'Technology can help improve maritime operations by automating manual processes, enhancing vessel performance monitoring, optimizing route planning, enabling real-time data sharing and collaboration, and providing data-driven insights for better decision-making.',
          },
          {
            id: 'faqs-3',
            title:
              'What software solutions do you offer for the maritime industry?',
            content:
              'We offer a range of software solutions tailored to the maritime industry, including fleet management systems, vessel tracking and monitoring solutions, port management software, maritime analytics platforms, supply chain optimization tools, and compliance management systems.',
          },
        ],
        subtitle:
          'Learn more about our Maritime Solutions and how they can benefit your organisation.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Vessel Management Systems',
            fa_icon: 'fa-cogs',
            subtitle:
              'We develop advanced vessel management systems that optimize operations, improve vessel performance, and enhance crew efficiency.',
          },
          {
            title: 'Data Analytics for Maritime',
            fa_icon: 'fa-database',
            subtitle:
              'Our data analytics solutions provide actionable insights for vessel performance, fuel efficiency, predictive maintenance, and more.',
          },
          {
            title: 'Maritime Cybersecurity',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We implement robust cybersecurity measures to protect maritime systems, data, and infrastructure from cyber threats.',
          },
          {
            title: 'Crew Management Systems',
            fa_icon: 'fa-users',
            subtitle:
              'Our crew management systems streamline crew operations, rostering, training management, and compliance with regulatory requirements.',
          },
          {
            title: 'Maritime Digital Platforms',
            fa_icon: 'fa-globe',
            subtitle:
              'We develop digital platforms that connect various stakeholders in the maritime ecosystem, enabling collaboration, data sharing, and improved decision-making.',
          },
          {
            title: 'Legacy Systems Modernisation',
            fa_icon: 'fa-wrench',
            subtitle:
              'We assist in modernising legacy systems in the maritime industry, leveraging emerging technologies to enhance efficiency and reduce costs.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'With our deep knowledge of the maritime industry and cutting-edge technologies, we offer a range of solutions that help maritime organisations stay ahead in a rapidly evolving digital landscape.',
      },
      summary: {
        title: 'Driving innovation in the maritime industry.',
        items: [
          {
            title:
              'We understand the intricate workings of maritime operations, including vessel management, logistics, supply chain, port operations, and regulatory compliance. Leveraging our expertise, we work closely with maritime enterprises to identify their pain points and develop strategic technology solutions that address their specific needs.',
          },
        ],
      },
    },
    subtitle:
      'We help maritime product teams drive efficiencies, unlock new value, and create new business models.',
  },
  {
    title: 'Real Estate',
    slug: 'real-estate',
    fa_icon: 'fa-map',
    hero_alt: 'Buildings being constructed',
    hero_src: '/unsplash/qyzo7TDSVQs.jpg',
    is_featured: true,
    sections: {
      faqs: {
        title: 'Frequently Asked Questions',
        items: [
          {
            id: 'faqs-1',
            title: 'What are the key challenges in the real estate industry?',
            content:
              'The real estate industry faces challenges such as property management, lease administration, tenant relationship management, investment analysis, regulatory compliance, and adapting to changing market conditions.',
          },
          {
            id: 'faqs-2',
            title:
              'How can technology improve operations in the real estate sector?',
            content:
              'Technology can improve real estate operations by automating manual processes, centralizing property and tenant data, streamlining lease administration, enabling online property listings and transactions, facilitating customer self-service, and providing data-driven insights for better decision-making.',
          },
          {
            id: 'faqs-3',
            title:
              'What software solutions do you offer for the real estate industry?',
            content:
              'We offer a range of software solutions tailored to the real estate industry, including real estate management systems, property analytics platforms, transaction management software, customer relationship management (CRM) tools, property listing portals, and investment analysis platforms.',
          },
        ],
        subtitle:
          'Learn more about our Real Estate Solutions and how they can benefit your organisation.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Property Management Systems',
            fa_icon: 'fa-building',
            subtitle:
              'We develop comprehensive property management systems that automate and optimize property leasing, maintenance, tenant management, and financial processes.',
          },
          {
            title: 'Real Estate Financial Software',
            fa_icon: 'fa-money-bill-wave',
            subtitle:
              'Our real estate financial software solutions simplify complex financial calculations, reporting, budgeting, and forecasting for real estate portfolios.',
          },
          {
            title: 'Customer Relationship Management (CRM)',
            fa_icon: 'fa-users',
            subtitle:
              'We implement CRM systems tailored for real estate businesses, enabling efficient lead management, sales tracking, and customer engagement.',
          },
          {
            title: 'Geospatial Analytics',
            fa_icon: 'fa-map-marked-alt',
            subtitle:
              'Our geospatial analytics solutions provide valuable insights for site selection, market analysis, spatial planning, and property valuation.',
          },
          {
            title: 'Cloud-Based Document Management',
            fa_icon: 'fa-cloud-upload-alt',
            subtitle:
              'We develop secure cloud-based document management systems that streamline document storage, retrieval, collaboration, and compliance for real estate companies.',
          },
          {
            title: 'Workflow Automation',
            fa_icon: 'fa-cogs',
            subtitle:
              'We automate real estate workflows, reducing manual tasks and improving efficiency in processes such as property transactions, approvals, and document generation.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'With our deep knowledge of the real estate industry and cutting-edge technologies, we offer a range of solutions that help real estate organisations thrive in a digital-first era.',
      },
      summary: {
        title: 'Driving innovation in the real estate industry.',
        items: [
          {
            title:
              'The real estate industry relies heavily on effective management, streamlined processes, and the ability to adapt to changing market conditions. Our team of experienced professionals combines industry knowledge with technical excellence to deliver innovative solutions tailored specifically for the real estate industry.',
          },
        ],
      },
    },
    subtitle:
      'Unlock the value in every dimension of your real estate with integrated, data-led services that support your overall product strategy.',
  },
  {
    title: 'Capital Markets',
    slug: 'capital-markets',
    fa_icon: 'fa-coins',
    hero_alt: 'US dollar bills',
    hero_src: '/unsplash/8lnbXtxFGZw.jpg',
    is_featured: true,
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why do I need custom software solutions for my capital markets business?',
            content:
              'Custom software solutions can significantly enhance your business operations by catering to your unique requirements, improving efficiency, mitigating risk, and ensuring regulatory compliance. They can also offer better scalability and flexibility compared to off-the-shelf products.',
          },
          {
            id: 'faqs-2',
            title:
              'What types of software solutions do you develop for the capital markets sector?',
            content:
              'We develop a wide range of software solutions for the capital markets sector, including risk management systems, transaction processing systems, automation tools, compliance solutions, and data management systems. Our solutions are tailor-made to meet your specific business needs and objectives.',
          },
          {
            id: 'faqs-3',
            title:
              'Can you integrate your software solutions with my existing systems?',
            content:
              'Yes, we design our software solutions to seamlessly integrate with your existing systems, ensuring minimal disruption to your business operations.',
          },
        ],
        subtitle:
          'Learn more about our Capital Markets Software Development Services and how we can help your business.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Robust Risk Management',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We develop software solutions that facilitate robust risk management, enabling you to monitor, manage and mitigate market, credit and operational risks effectively.',
          },
          {
            title: 'Seamless Transactions',
            fa_icon: 'fa-dollar-sign',
            subtitle:
              'We create software solutions that streamline transactions, enhance payment processing, and ensure secure and efficient transfer of funds.',
          },
          {
            title: 'Process Automation',
            fa_icon: 'fa-cogs',
            subtitle:
              'We deliver automation solutions that streamline workflows, increase operational efficiency, and reduce manual intervention in the capital market operations.',
          },
          {
            title: 'Compliance Assurance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Our software solutions ensure compliance with regulations, providing automated compliance checks and reporting.',
          },
          {
            title: 'Data Management',
            fa_icon: 'fa-database',
            subtitle:
              'We provide advanced data management solutions, ensuring accurate, timely, and secure access to critical market data.',
          },
          {
            title: 'Collaboration',
            fa_icon: 'fa-users-cog',
            subtitle:
              'Our team works closely with yours to deliver software solutions that meet your business objectives and deliver value to your stakeholders.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'Our bespoke software solutions are designed to tackle the unique challenges faced by the capital markets sector.',
      },
      summary: {
        title:
          'Driving innovation in the capital markets with custom software solutions.',
        items: [
          {
            title:
              'In the dynamic and complex world of capital markets, having reliable, robust and efficient software systems is crucial. Our team of experienced developers understands the intricacies of capital markets and creates solutions that enhance your operational efficiency, mitigate risk, and streamline processes.',
          },
          {
            title:
              'Our solutions are designed with the user in mind, ensuring they are intuitive and easy to use.',
          },
        ],
      },
    },
    subtitle:
      'Transform your financial services with bespoke software solutions to navigate complex capital market challenges.',
  },
  {
    title: 'Banking',
    slug: 'banking',
    fa_icon: 'fa-money-bill-trend-up',
    faqs: {
      title: 'Frequently Asked Questions',
      items: [
        {
          id: 'faqs-1',
          title: 'What are the key challenges in the banking industry?',
          content:
            'The banking industry faces challenges such as cybersecurity threats, regulatory compliance, legacy system integration, digital transformation, customer experience enhancement, and data management.',
        },
        {
          id: 'faqs-2',
          title: 'How can technology drive innovation in the banking sector?',
          content:
            'Technology can drive innovation in the banking sector by enabling digital banking services, enhancing security and fraud detection, streamlining processes, enabling personalized customer experiences, facilitating data-driven decision-making, and promoting financial inclusion.',
        },
        {
          id: 'faqs-3',
          title:
            'What software solutions do you offer for the banking industry?',
          content:
            'We offer a range of software solutions tailored to the banking industry, including core banking system integration, digital banking platforms, risk and compliance solutions, fraud detection systems, data analytics tools, customer relationship management (CRM) systems, and mobile banking applications.',
        },
      ],
      subtitle:
        'Learn more about our Banking Solutions and how they can benefit your institution.',
    },
    hero_alt: 'G pay being used',
    hero_src: '/unsplash/XvS-uKUoUao.jpg',
    is_featured: true,
    sections: {
      features: {
        title: 'Our Approach to {title}',
        items: [
          {
            title: 'Core Banking Systems',
            fa_icon: 'fa-money-check-alt',
            subtitle:
              'We develop robust and scalable core banking systems that streamline banking processes, including account management, transaction processing, and customer data management.',
          },
          {
            title: 'Mobile Banking Applications',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'Our mobile banking applications enable customers to conveniently perform banking transactions, manage accounts, and access personalized financial services on their mobile devices.',
          },
          {
            title: 'Security and Fraud Prevention',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We implement advanced security measures and fraud prevention solutions to safeguard banking systems, customer data, and financial transactions from cyber threats.',
          },
          {
            title: 'Data Analytics and Insights',
            fa_icon: 'fa-chart-pie',
            subtitle:
              'Our data analytics solutions leverage big data technologies to provide banks with valuable insights, enabling data-driven decision-making, risk management, and personalized customer experiences.',
          },
          {
            title: 'Corporate Banking Solutions',
            fa_icon: 'fa-briefcase',
            subtitle:
              'We develop comprehensive corporate banking solutions that facilitate corporate account management, treasury services, trade finance, and cash management for corporate clients.',
          },
          {
            title: 'Integration and Middleware',
            fa_icon: 'fa-cogs',
            subtitle:
              'We provide integration and middleware solutions that enable seamless connectivity between banking systems, third-party applications, and external APIs, enhancing operational efficiency and enabling innovation.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'With our deep industry knowledge and cutting-edge technologies, we offer a range of solutions that empower banks to thrive in a digital banking era.',
      },
      summary: {
        title: 'Driving innovation in the banking industry.',
        items: [
          {
            title:
              'At our Banking Solutions, we specialize in providing technology consulting services and enterprise software development solutions to the banking industry.',
          },
          {
            title:
              'We understand the evolving needs and challenges faced by banks, and our expertise in enterprise software development enables us to deliver innovative solutions that enhance operational efficiency, improve customer experiences, and ensure regulatory compliance.',
          },
        ],
      },
    },

    subtitle:
      'Boosting banking with custom, secure, and efficient software solutions.',
  },
  {
    title: 'Aerospace & Defense',
    slug: 'aerospace-defense',
    fa_icon: 'fa-plane-departure',
    hero_alt: 'Artist depiction of hypersonic passenger aircraft.',
    hero_src: '/unsplash/8atxWjBYzGI.jpg',
    is_featured: true,
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why are custom software solutions important for the aerospace and defense industry?',
            content:
              'Custom software solutions can significantly enhance the efficiency and effectiveness of aerospace and defense operations. They offer tailored functionality, seamless integration with existing systems, and the ability to adapt to changing requirements. These solutions can also improve decision-making, streamline processes, and enhance security.',
          },
          {
            id: 'faqs-2',
            title:
              'How can your solutions benefit my aerospace or defense business?',
            content:
              'Our solutions can help you automate processes, improve data management, ensure system security, and make better decisions based on real-time data. By leveraging our software solutions, your business can increase operational efficiency, ensure regulatory compliance, and gain a competitive edge.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure security and compliance in your software solutions?',
            content:
              'We prioritize security and compliance in all our software development projects for the Aerospace and Defense industry. Our team follows industry best practices, implements robust security measures, and adheres to relevant regulations and standards. We conduct thorough testing and auditing to ensure the confidentiality, integrity, and availability of data.',
          },
        ],
        subtitle:
          'Learn more about our Aerospace and Defense Solutions and how we can elevate your operations.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Process Automation',
            fa_icon: 'fa-cogs',
            subtitle:
              'Automate routine processes, enhance accuracy, and save valuable time with our advanced automation solutions.',
          },
          {
            title: 'Cybersecurity',
            fa_icon: 'fa-user-shield',
            subtitle:
              'We implement cutting-edge cybersecurity measures to protect your sensitive data and systems from potential threats.',
          },
          {
            title: 'Aerospace Software Solutions',
            fa_icon: 'fa-rocket',
            subtitle:
              'From flight control to maintenance and logistics, we develop tailored software solutions that address the unique needs of the aerospace sector.',
          },
          {
            title: 'Defense Systems Integration',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We ensure seamless integration of various defense systems, enhancing collaboration and data exchange across platforms.',
          },
          {
            title: 'Cloud Integration',
            fa_icon: 'fa-cloud',
            subtitle:
              'Leverage the power of cloud technology for enhanced data accessibility, scalability, and cost-effectiveness.',
          },
          {
            title: 'Data Analytics',
            fa_icon: 'fa-database',
            subtitle:
              'Make informed decisions with our powerful data analytics solutions, providing you with valuable insights and forecasts.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'We deliver comprehensive solutions that adhere to rigorous standards and incorporate the latest technologies to drive success.',
      },
      summary: {
        title:
          'Boosting operational efficiency in the aerospace and defense sector.',
        items: [
          {
            title:
              'In the critical industries of aerospace and defense, optimized operations can be a game-changer. Our custom software solutions are designed to address the specific needs of these sectors, enhancing efficiency, reliability, and safety. We understand the complexities involved in aerospace and defense operations. Our expert team can help you navigate these challenges by developing robust, secure, and intuitive software systems that streamline processes, facilitate decision-making, and ensure regulatory compliance.',
          },
        ],
      },
    },
    subtitle:
      'Propel your aerospace and defense operations to new heights with our industry-leading custom software solutions.',
  },
  {
    title: 'Healthcare',
    slug: 'healthcare',
    fa_icon: 'fa-kit-medical',
    hero_alt: 'Surgery procedure',
    hero_src: '/unsplash/6aomTW8ojbo.jpg',
    is_featured: true,
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why are custom software solutions important for the healthcare industry?',
            content:
              'Custom software solutions can significantly improve healthcare operations by offering tailored functionality, seamless integration with existing systems, and the ability to adapt to changing requirements. These solutions can streamline processes, improve patient care, facilitate compliance with healthcare regulations, and enhance data security.',
          },
          {
            id: 'faqs-2',
            title: 'How can your solutions benefit my healthcare organization?',
            content:
              'Our solutions can help you automate processes, improve patient management, enhance remote healthcare services, and make better decisions based on real-time data. By leveraging our software solutions, your healthcare organization can increase operational efficiency, improve patient outcomes, and ensure regulatory compliance.',
          },
          {
            id: 'faqs-3',
            title: 'What kind of support do you provide post-deployment?',
            content:
              'We offer comprehensive support post-deployment, including regular software updates, maintenance, and troubleshooting. We also provide training to your staff to ensure they can effectively use the software. Our team is always ready to assist with any concerns or issues you may have.',
          },
        ],
        subtitle:
          'Learn more about our Healthcare Solutions and how they can benefit your organization.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Patient Management Systems',
            fa_icon: 'fa-notes-medical',
            subtitle:
              'We design intuitive systems to manage patient data efficiently and securely.',
          },
          {
            title: 'Telemedicine Platforms',
            fa_icon: 'fa-stethoscope',
            subtitle:
              'Our telemedicine solutions help you deliver remote healthcare services effectively.',
          },
          {
            title: 'Electronic Health Records',
            fa_icon: 'fa-file-medical',
            subtitle:
              'We create systems that streamline the process of managing electronic health records.',
          },
          {
            title: 'Healthcare Data Analysis',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'Leverage data to improve patient outcomes with our advanced analytics solutions.',
          },
          {
            title: 'Data Security',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Protect patient data with our robust security measures in compliance with healthcare regulations.',
          },
          {
            title: 'Healthcare IT Consulting',
            fa_icon: 'fa-laptop-medical',
            subtitle:
              'Our experienced consultants provide strategic advice to help you maximize the use of IT in healthcare.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'We focus on delivering comprehensive software solutions that meet the unique needs of the healthcare industry.',
      },
      summary: {
        title: 'Elevating healthcare services through technology.',
        items: [
          {
            title:
              "The healthcare industry is complex and always evolving. Our mission is to help healthcare organizations navigate these changes and transform their operations through custom software solutions. We leverage advanced technologies to build applications that improve patient care, optimize workflows, and ensure data security. Whether it's a patient management system, telemedicine platform, or data analysis tool, we deliver solutions that bring value to your organization.",
          },
        ],
      },
    },
    subtitle:
      'Leverage technology to deliver superior patient care and optimize medical operations with our custom healthcare software solutions.',
  },
  {
    title: 'Life Sciences',
    slug: 'life-sciences',
    fa_icon: 'fa-flask-vial',
    hero_alt: 'Woman in laboratory',
    hero_src: '/unsplash/oCLuFi9GYNA.jpg',
    is_featured: true,
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why are custom software solutions important for the life sciences industry?',
            content:
              'Custom software solutions play a crucial role in the life sciences industry by offering tailored functionality and the flexibility to adapt to changing needs. These solutions can enhance efficiency, facilitate collaboration, support compliance, and enable the analysis and visualization of complex data.',
          },
          {
            id: 'faqs-2',
            title:
              'How can your solutions benefit my life sciences organization?',
            content:
              'Our solutions can help automate repetitive tasks, enhance data management, support the analysis and visualization of complex data, and facilitate collaboration. They can also assist with regulatory compliance and data security. All of these benefits contribute to increased efficiency, better decision-making, and ultimately, advancements in life sciences research and innovation.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure the security and compliance of your software?',
            content:
              'We place a high priority on security and compliance. Our solutions are designed with industry-standard security measures and are built to meet regulatory requirements specific to the life sciences industry. We also provide ongoing support and updates to ensure that your software remains secure and compliant.',
          },
        ],
        subtitle:
          'Learn more about our Life Sciences Service and how we can help your organization in the life sciences industry.',
      },
      features: {
        title: 'Empowering the Life Sciences Sector',
        items: [
          {
            title: 'Laboratory Management Systems',
            fa_icon: 'fa-dna',
            subtitle:
              'We develop custom laboratory management systems that optimize research processes, track experiments, manage samples, and ensure compliance with regulatory standards.',
          },
          {
            title: 'Scientific Data Analysis',
            fa_icon: 'fa-microscope',
            subtitle:
              'We create software solutions for scientific data analysis, including data visualization, statistical analysis, and machine learning algorithms to derive meaningful insights from complex datasets.',
          },
          {
            title: 'Clinical Trial Management',
            fa_icon: 'fa-medkit',
            subtitle:
              'We build software solutions to streamline clinical trial management, from patient recruitment and enrollment to data collection, monitoring, and reporting.',
          },
          {
            title: 'Experiment Tracking and Documentation',
            fa_icon: 'fa-flask',
            subtitle:
              'We develop software solutions that enable researchers to track and document experiments, protocols, and results, ensuring data integrity and facilitating collaboration.',
          },
          {
            title: 'Collaboration Tools',
            fa_icon: 'fa-users-cog',
            subtitle:
              'Our tools enhance collaboration among teams, facilitating knowledge sharing and innovation.',
          },
          {
            title: 'Compliance and Security',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We ensure our software meets industry regulations and protects sensitive data.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'To develop custom software solutions for the life sciences industry, we follow best practices that include in-depth requirements gathering, rigorous testing, and compliance with industry standards.',
      },
      summary: {
        title: 'Accelerating innovation in life sciences through technology.',
        items: [
          {
            title:
              'The life sciences sector is at the forefront of innovation and research, contributing significantly to our understanding of life and health. Our life sciences software solutions are designed to support this vital work by enhancing efficiency, data analysis, and collaboration. We understand the unique challenges faced by life sciences organizations and tailor our solutions to meet these needs. Whether it’s data management, research automation, or collaboration tools, we deliver software that empowers your organization to achieve its goals.',
          },
        ],
      },
    },
    subtitle:
      'Empowering life sciences organizations with custom software solutions that advance research, drive innovation, and enhance patient care.',
  },
  {
    title: 'Software & Platforms',
    slug: 'software-platforms',
    fa_icon: 'fa-code-branch',
    hero_alt: 'People coding',
    hero_src: '/unsplash/uv5_bsypFUM.jpg',
    is_featured: true,
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why are custom software solutions important for my business?',
            content:
              'Custom software solutions are tailored to meet the specific needs of your business. They can help enhance your operations, increase productivity, and provide a competitive edge by offering features and capabilities that off-the-shelf software solutions may not provide.',
          },
          {
            id: 'faqs-2',
            title: 'What kind of software and platforms can you develop?',
            content:
              'We can develop a wide range of software and platforms, including but not limited to business management systems, data analytics platforms, customer relationship management (CRM) systems, and mobile applications. We work with a variety of technologies to deliver solutions that meet your specific needs.',
          },
          {
            id: 'faqs-3',
            title: 'What is your development process?',
            content:
              'We follow an agile development process, which allows for flexibility and iterative improvements. This process includes stages like requirements gathering, design, development, testing, and deployment. We also provide ongoing support and maintenance after the software is deployed.',
          },
        ],
        subtitle:
          'Learn more about our Software and Platforms Solutions and how they can benefit your business.',
      },
      features: {
        title: 'Empowering the Software and Platforms Sector',
        items: [
          {
            title: 'Enterprise Application Development',
            fa_icon: 'fa-cogs',
            subtitle:
              'We specialize in developing scalable and secure enterprise applications that optimize business processes, improve collaboration, and drive efficiency.',
          },
          {
            title: 'Cloud Infrastructure and Deployment',
            fa_icon: 'fa-server',
            subtitle:
              'We help businesses leverage the power of cloud computing by designing and implementing scalable, reliable, and cost-effective cloud infrastructure solutions.',
          },
          {
            title: 'Database Management Systems',
            fa_icon: 'fa-database',
            subtitle:
              'We design and implement robust database management systems that enable businesses to efficiently store, manage, and analyze large volumes of data.',
          },
          {
            title: 'Cybersecurity Solutions',
            fa_icon: 'fa-lock',
            subtitle:
              'We prioritize data security and develop comprehensive cybersecurity solutions to protect sensitive business information from threats and breaches.',
          },
          {
            title: 'Integration and API Development',
            fa_icon: 'fa-network-wired',
            subtitle:
              'We specialize in integrating disparate systems and developing APIs to facilitate seamless data exchange and streamline business processes.',
          },
          {
            title: 'Business Intelligence and Analytics',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We help businesses harness the power of data by developing business intelligence and analytics solutions that provide valuable insights and drive informed decision-making.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'To develop custom software solutions for enterprise clients, we follow best practices that include thorough requirements gathering, agile development methodologies, and rigorous quality assurance processes.',
      },
      summary: {
        title: 'Driving business growth with custom software and platforms.',
        items: [
          {
            title:
              'In the rapidly evolving software and platforms industry, having the right technology solutions can be a game-changer. Our software development services are designed to meet your unique needs, delivering custom software and platforms that enhance your operations, boost productivity, and help you stay ahead of the competition. Our team of experienced developers is skilled in the latest technologies and best practices to deliver high-quality, scalable, and secure software solutions.',
          },
        ],
      },
    },
    subtitle:
      'Creating innovative, robust, and scalable software solutions and platforms that power your business.',
  },
  {
    title: 'Automotive',
    slug: 'automotive',
    fa_icon: 'fa-car',
    hero_alt: 'Mercedes benz in monaco',
    hero_src: '/unsplash/MaraDXSaTho.jpg',
    is_featured: true,
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why do I need custom software solutions for my automotive business?',
            content:
              'Custom software solutions can greatly enhance the efficiency and productivity of your automotive business. These solutions are designed to cater to your specific needs and can be seamlessly integrated with your existing systems. They can also provide valuable insights that can help you make informed business decisions.',
          },
          {
            id: 'faqs-2',
            title:
              'How can your software solutions benefit my automotive business?',
            content:
              'Our software solutions can streamline your operations, improve your supply chain management, enhance your customer service, and ensure the security of your data. We develop solutions that are tailored to your business needs, helping you gain a competitive edge in the industry.',
          },
          {
            id: 'faqs-3',
            title: 'What kind of support do you offer post-deployment?',
            content:
              'We provide comprehensive support post-deployment, including regular maintenance, updates, and troubleshooting. We also offer training to your staff to ensure they can effectively use the software. Our team is always ready to assist with any issues or concerns you may have.',
          },
        ],
        subtitle:
          'Learn more about our Automotive Industry Solutions and how we can drive your business forward.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Custom Software Development',
            fa_icon: 'fa-code',
            subtitle:
              'We create bespoke software solutions that align with your business goals and cater to your specific needs.',
          },
          {
            title: 'Database Management',
            fa_icon: 'fa-database',
            subtitle:
              'We develop robust database systems to help you manage and analyze large volumes of data efficiently.',
          },
          {
            title: 'Supply Chain Optimization',
            fa_icon: 'fa-warehouse',
            subtitle:
              'We create solutions to optimize your supply chain, ensuring smooth operations and timely delivery.',
          },
          {
            title: 'Cybersecurity',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We ensure the security of your data and systems by implementing state-of-the-art cybersecurity measures.',
          },
          {
            title: 'Cloud Integration',
            fa_icon: 'fa-cloud',
            subtitle:
              'We facilitate seamless cloud integration to enhance collaboration and data accessibility.',
          },
          {
            title: 'Process Automation',
            fa_icon: 'fa-cogs',
            subtitle:
              'We automate routine tasks to reduce errors and increase operational efficiency.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'To provide top-notch software solutions, we follow the best practices that include meticulous planning, thorough testing, and continuous improvement.',
      },
      summary: {
        title: 'Revving up technology for the automotive industry.',
        items: [
          {
            title:
              'In the fast-paced automotive industry, the right software solutions can give your business the edge it needs. Our custom software development service specializes in creating innovative solutions tailored to the unique needs of automotive companies. We understand that automotive businesses require complex, integrated systems to manage all aspects of their operations. We can help you streamline processes, improve efficiency, and deliver a better experience to your customers. Whether you need a solution for inventory management, supply chain logistics, or customer relationship management, our team of experts is ready to assist.',
          },
        ],
      },
    },
    subtitle:
      'Drive innovation and performance in your automotive business with our custom software solutions.',
  },
  {
    title: 'Communications & Media',
    slug: 'communications-media',
    fa_icon: 'fa-comment',
    hero_alt: 'Production director with headset',
    hero_src: '/unsplash/_xJqCQgkpLc.jpg',
    is_featured: true,
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why are custom software solutions important for my business in the communications and media industry?',
            content:
              'Custom software solutions can help you address the unique challenges of the communications and media industry. They can improve your workflows, streamline your operations, enhance service delivery, and help you keep up with the rapid pace of the industry.',
          },
          {
            id: 'faqs-2',
            title:
              'What kind of software solutions can you develop for the communications and media industry?',
            content:
              'We can develop a wide range of software solutions, including media distribution systems, cloud-based platforms for media storage and streaming, automated workflow systems, media-centric mobile applications, and more.',
          },
          {
            id: 'faqs-3',
            title: 'What is your development process?',
            content:
              'Our development process begins with understanding your needs and the challenges you face. We then design and develop a solution that addresses these needs. We follow an agile development process, which allows for flexibility and iterative improvements. The process includes stages like requirements gathering, design, development, testing, and deployment, with ongoing support and maintenance after the software is deployed.',
          },
        ],
        subtitle:
          'Learn more about our Communications and Media Solutions and how they can benefit your business.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Media Distribution Systems',
            fa_icon: 'fa-broadcast-tower',
            subtitle:
              'We design and develop software solutions for efficient media distribution, helping you reach your audience seamlessly.',
          },
          {
            title: 'Cloud-Based Platforms',
            fa_icon: 'fa-cloud',
            subtitle:
              'We build robust and scalable cloud-based platforms for media storage and streaming.',
          },
          {
            title: 'Automated Workflow Systems',
            fa_icon: 'fa-cogs',
            subtitle:
              'We create systems that automate your workflows, boosting efficiency and productivity.',
          },
          {
            title: 'Mobile Applications',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'We develop media-centric mobile applications that deliver superior user experiences.',
          },
          {
            title: 'Security and Compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Our software solutions prioritize security and compliance, protecting your data and your brand.',
          },
          {
            title: 'Consulting Services',
            fa_icon: 'fa-users-cog',
            subtitle:
              'Our consulting services can help you identify opportunities to use software to improve your business.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'Our custom software solutions are designed to meet the unique needs of the communications and media industry.',
      },
      summary: {
        title:
          'Powering the communications and media industry with custom software.',
        items: [
          {
            title:
              'The communications and media industry is one that evolves rapidly. To keep up, you need innovative, robust, and scalable software solutions that can accommodate your growing needs. Our custom software development services are designed to help you stay ahead of the curve, transforming your operations and fueling your growth. We design and develop bespoke software solutions that streamline your operations, enhance your service delivery, and ultimately, drive your business forward.',
          },
        ],
      },
    },
    subtitle:
      'Developing custom software solutions that fuel the growth of the communications and media industry.',
  },
  {
    title: 'Industrial',
    slug: 'industrial',
    fa_icon: 'fa-industry-windows',
    hero_alt: 'Industrial site',
    hero_src: '/unsplash/SLIFI67jv5k.jpg',
    is_featured: true,
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'How can your software solutions benefit my Industrial business?',
            content:
              'Our custom software solutions can help improve operational efficiency, enhance productivity, reduce costs, ensure safety compliance, and foster informed decision-making. This is achieved through various ways such as automating repetitive tasks, anticipating equipment failures, monitoring performance in real time, managing industrial assets effectively, ensuring safety compliance, and analyzing industrial data.',
          },
          {
            id: 'faqs-2',
            title:
              'What kind of software solutions can you develop for the Industrial sector?',
            content:
              'We can develop a variety of software solutions for the Industrial sector, including process automation systems, predictive maintenance software, performance monitoring systems, asset management software, safety compliance systems, and data analytics solutions. We work closely with you to understand your unique needs and develop solutions that are tailored to your business.',
          },
          {
            id: 'faqs-3',
            title: 'What is your development process?',
            content:
              'Our development process starts with understanding your business needs and challenges. We then design and develop a solution that addresses these needs. Our agile development process allows for flexibility and iterative improvements. The process includes stages like requirements gathering, design, development, testing, and deployment, with ongoing support and maintenance after the software is deployed.',
          },
        ],
        subtitle:
          'Learn more about our Industrial Solutions and how they can benefit your business.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Process Automation',
            fa_icon: 'fa-cogs',
            subtitle:
              'We develop software solutions that automate repetitive tasks, enhancing operational efficiency and reducing human error.',
          },
          {
            title: 'Predictive Maintenance',
            fa_icon: 'fa-wrench',
            subtitle:
              'Our predictive maintenance solutions help you anticipate equipment failures and schedule maintenance proactively, minimizing downtime and costs.',
          },
          {
            title: 'Performance Monitoring',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We create systems that monitor the performance of your industrial equipment in real time, helping you identify and address inefficiencies quickly.',
          },
          {
            title: 'Asset Management',
            fa_icon: 'fa-tasks',
            subtitle:
              'Our asset management software helps you track and manage your industrial assets effectively, leading to improved utilization and reduced costs.',
          },
          {
            title: 'Safety Compliance',
            fa_icon: 'fa-user-shield',
            subtitle:
              'We develop software that helps ensure compliance with safety regulations and standards, fostering a safe work environment.',
          },
          {
            title: 'Data Analytics',
            fa_icon: 'fa-chart-line',
            subtitle:
              'Our data analytics solutions help you gain actionable insights from your industrial data, enabling informed decision-making and strategic planning.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'Our custom software solutions are designed to address the unique needs and challenges of the Industrial sector.',
      },
      summary: {
        title: 'Streamlining industrial operations with technology.',
        items: [
          {
            title:
              'In the industrial sector, efficiency, safety, and reliability are paramount. We specialize in developing custom software solutions that address these aspects, helping industrial enterprises optimize their operations, enhance productivity, and reduce costs. Our experienced team is adept at developing advanced systems for equipment monitoring, process automation, asset management, and predictive maintenance, among other areas.',
          },
        ],
      },
    },
    subtitle: 'Building custom software solutions for the industrial sector.',
  },
  {
    title: 'Energy',
    slug: 'energy',
    fa_icon: 'fa-circle-bolt',
    hero_alt: 'Offshore wind farm',
    hero_src: '/unsplash/pONBhDyOFoM.jpg',
    is_featured: true,
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'How can your software solutions benefit my Energy business?',
            content:
              'Our custom software solutions can improve operational efficiency, enhance productivity, reduce costs, and facilitate informed decision-making. This is achieved through efficient energy management, anticipating equipment failures, tracking and managing energy assets effectively, analyzing energy data, automating repetitive tasks, and implementing strong security measures.',
          },
          {
            id: 'faqs-2',
            title:
              'What kind of software solutions can you develop for the Energy sector?',
            content:
              'We can develop a wide range of software solutions for the Energy sector, including energy management systems, predictive maintenance software, asset tracking systems, data analysis tools, process automation software, and security measures. Our solutions are custom designed to meet your unique needs and challenges.',
          },
          {
            id: 'faqs-3',
            title:
              'Can your solutions be integrated with our existing systems?',
            content:
              'Yes, we understand the importance of seamless integration with your existing systems. We take an API-first approach to ensure that our software can be easily integrated into your existing tech infrastructure without causing disruptions to your ongoing operations.',
          },
        ],
        subtitle:
          'Learn more about our Energy Solutions and how they can benefit your business.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Energy Management',
            fa_icon: 'fa-solar-panel',
            subtitle:
              'We develop software solutions that facilitate efficient management and utilization of energy resources, contributing to sustainability.',
          },
          {
            title: 'Predictive Maintenance',
            fa_icon: 'fa-wrench',
            subtitle:
              'Our predictive maintenance solutions help anticipate equipment failures and schedule maintenance proactively, minimizing downtime and costs.',
          },
          {
            title: 'Asset Tracking',
            fa_icon: 'fa-tasks',
            subtitle:
              'Our asset tracking software helps you track and manage your energy assets effectively, leading to improved utilization and reduced costs.',
          },
          {
            title: 'Data Analysis',
            fa_icon: 'fa-chart-line',
            subtitle:
              'Our data analysis solutions provide actionable insights from your energy data, enabling informed decision-making and strategic planning.',
          },
          {
            title: 'Process Automation',
            fa_icon: 'fa-cogs',
            subtitle:
              'We develop software solutions that automate repetitive tasks, enhancing operational efficiency and reducing human error.',
          },
          {
            title: 'Security',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We develop robust security measures within our solutions to protect sensitive energy data and systems from potential threats.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'Our custom software solutions are designed to address the unique needs and challenges of the Energy sector.',
      },
      summary: {
        title: 'Custom software solutions for the energy sector.',
        items: [
          {
            title:
              'In the energy sector, technology can greatly enhance efficiency, reliability, and sustainability. We specialize in developing custom software solutions that address these aspects, helping energy enterprises to optimize their operations, enhance productivity, and reduce costs. Our proficient team is skilled in developing advanced systems for energy management, predictive maintenance, asset tracking, data analysis, and automation, among other areas. Leveraging technology, we empower energy businesses to achieve their operational and strategic goals.',
          },
        ],
      },
    },
    subtitle: 'Transforming the energy sector with cutting-edge technologies.',
  },
  {
    title: 'Insurance',
    slug: 'insurance',
    fa_icon: 'fa-hospitals',
    hero_alt: 'Person writing on paper',
    hero_src: '/unsplash/OQMZwNd3ThU.jpg',
    is_featured: true,
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why do insurance companies need custom software solutions?',
            content:
              'Insurance companies deal with complex processes, large volumes of data, and regulatory compliance. Custom software solutions can help automate and streamline these processes, improve data management and analysis, and ensure compliance, thereby improving efficiency and decision-making.',
          },
          {
            id: 'faqs-2',
            title:
              'What kind of software solutions do you provide for the insurance industry?',
            content:
              'We provide a range of solutions tailored to the specific needs of the insurance industry. This includes, but is not limited to, policy management systems, claims processing and management software, underwriting and risk management tools, and customer service portals.',
          },
          {
            id: 'faqs-3',
            title: 'Do your solutions support cloud integration?',
            content:
              'Yes, we leverage cloud technology to deliver secure, scalable, and flexible software solutions. Our solutions can be deployed on the cloud, facilitating easy access from anywhere and easy integration with other cloud-based systems.',
          },
        ],
        subtitle:
          'Discover more about our custom software solutions for the Insurance industry.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Automation',
            fa_icon: 'fa-cogs',
            subtitle:
              'We leverage automation to streamline complex processes, boosting efficiency and accuracy.',
          },
          {
            title: 'Security',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize data security, adhering to industry standards for data protection.',
          },
          {
            title: 'Cloud Integration',
            fa_icon: 'fa-cloud',
            subtitle:
              'We harness the power of cloud technology for secure, scalable, and flexible solutions.',
          },
          {
            title: 'Analytics',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We incorporate analytics to provide valuable insights, driving data-driven decisions.',
          },
          {
            title: 'Customer-centric Approach',
            fa_icon: 'fa-user-tie',
            subtitle:
              'Our solutions are designed with the end-user in mind, enhancing customer experience.',
          },
          {
            title: 'Integration',
            fa_icon: 'fa-code-branch',
            subtitle:
              'We ensure our solutions integrate seamlessly with your existing systems and software.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'We build software that addresses the unique challenges and opportunities within the Insurance industry.',
      },
      summary: {
        title: 'Custom software solutions for the insurance industry.',
        items: [
          {
            title:
              'In the ever-evolving insurance industry, leveraging technology is crucial. Our custom software solutions aim to transform your business, optimizing operations and enhancing customer service. From underwriting to claims management, our team of skilled developers designs software that seamlessly integrates with your existing systems, supports your team, and serves your customers.',
          },
        ],
      },
    },
    subtitle:
      'Tailored software solutions for the insurance industry, driving efficiency and innovation.',
  },
  {
    title: 'Retail',
    slug: 'retail',
    fa_icon: 'fa-store',
    hero_alt: 'Marina Bay Sands shops',
    hero_src: '/unsplash/LJyAzs5HJvI.jpg',
    is_featured: true,
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why do retail businesses need custom software solutions?',
            content:
              'Retail businesses handle complex processes, vast amounts of data, and face intense competition. Custom software solutions can help automate processes, manage inventory effectively, offer insights through data analysis, and enhance customer engagement, thereby improving efficiency and increasing profitability.',
          },
          {
            id: 'faqs-2',
            title:
              'What type of software solutions do you provide for the retail industry?',
            content:
              'We provide a range of solutions tailored to the specific needs of the retail industry. This includes, but is not limited to, e-commerce solutions, inventory management systems, data analysis tools, and customer engagement platforms.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure your software meets our retail business needs?',
            content:
              'We follow a consultative approach, understanding your specific business needs and challenges, and then designing software solutions to address them. Our solutions are scalable and adaptable to align with your evolving business needs.',
          },
        ],
        subtitle:
          'Discover more about our custom software solutions for the Retail industry.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'E-commerce Solutions',
            fa_icon: 'fa-shopping-cart',
            subtitle:
              'We provide robust e-commerce solutions to enhance your online sales and customer engagement.',
          },
          {
            title: 'Data Analysis',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We utilize data analysis to provide valuable insights, driving strategic business decisions.',
          },
          {
            title: 'Cloud Integration',
            fa_icon: 'fa-cloud',
            subtitle:
              'We leverage the power of cloud technology for secure, scalable, and flexible solutions.',
          },
          {
            title: 'Inventory Management',
            fa_icon: 'fa-warehouse',
            subtitle:
              'Our solutions streamline your inventory management, improving efficiency and reducing errors.',
          },
          {
            title: 'Process Automation',
            fa_icon: 'fa-cogs',
            subtitle:
              'We incorporate automation to streamline complex retail processes, enhancing accuracy and efficiency.',
          },
          {
            title: 'Mobile Solutions',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'We design mobile solutions to enhance your customer engagement and enable shopping on-the-go.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'We build software that addresses the unique challenges and opportunities within the Retail industry.',
      },
      summary: {
        title:
          'Helping retail businesses enhance efficiency, engagement and drive innovation.',
        items: [
          {
            title:
              'In the highly competitive retail industry, implementing custom software solutions is key. Our offerings aim to transform your retail operations, improving efficiencies and enhancing customer engagement. From inventory management to e-commerce solutions, our team of skilled developers designs software that seamlessly integrates with your existing systems, supports your team, and serves your customers.',
          },
        ],
      },
    },
    subtitle:
      'Creating bespoke software solutions for the retail industry, driving business growth and customer engagement.',
  },
  {
    title: 'Utilities',
    slug: 'utilities',
    fa_icon: 'fa-lamp-street',
    hero_alt: 'Power lines',
    hero_src: '/unsplash/0LqtbRIFlVQ.jpg',
    is_featured: true,
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'How can custom software solutions benefit utilities?',
            content:
              'Custom software solutions tailored for utilities help automate manual processes, optimize grid management, improve customer service, enhance decision-making with data insights, and increase overall operational efficiency.',
          },
          {
            id: 'faqs-2',
            title:
              'Are your software solutions scalable to accommodate future growth?',
            content:
              'Yes, our software solutions are designed to be scalable, allowing utilities to accommodate future growth and evolving industry needs. We ensure that the solutions can handle increasing data volumes, user demands, and emerging technologies.',
          },
          {
            id: 'faqs-3',
            title:
              'How do your software solutions integrate with existing utility systems?',
            content:
              'Our custom software solutions are designed to seamlessly integrate with existing utility systems. We analyze your current systems, identify integration points, and develop solutions that ensure smooth data flow and interoperability.',
          },
        ],
        subtitle:
          'Explore common questions about our custom software solutions for the Utilities industry.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Smart Grid Management',
            fa_icon: 'fa-bolt',
            subtitle:
              'Our solutions leverage advanced technologies to optimize grid management, enhance reliability, and enable efficient energy distribution.',
          },
          {
            title: 'Billing and Customer Management',
            fa_icon: 'fa-money-bill-alt',
            subtitle:
              'We develop comprehensive billing and customer management systems to streamline operations and improve customer satisfaction.',
          },
          {
            title: 'Data Analytics and Visualization',
            fa_icon: 'fa-bar-chart',
            subtitle:
              'We harness the power of data analytics and visualization to provide utilities with actionable insights for better decision-making and resource optimization.',
          },
          {
            title: 'Asset Management',
            fa_icon: 'fa-cogs',
            subtitle:
              'Our solutions help utilities effectively manage their assets, including infrastructure, equipment, and maintenance, to enhance efficiency and reduce downtime.',
          },
          {
            title: 'Cloud-Based Solutions',
            fa_icon: 'fa-cloud',
            subtitle:
              'We design and implement secure, scalable cloud-based solutions that enable utilities to optimize their operations, improve collaboration, and reduce costs.',
          },
          {
            title: 'Field Service Management',
            fa_icon: 'fa-wrench',
            subtitle:
              'Our software streamlines field service management processes, improving scheduling, workforce coordination, and service efficiency.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'We deliver innovative software solutions tailored to meet the specific needs of the Utilities sector.',
      },
      summary: {
        title:
          'Bringing state-of-the-art technologies to the utilities industry.',
        items: [
          {
            title:
              'The utilities industry faces unique challenges in delivering products and services to customers. Our custom software solutions are designed to address these challenges, enabling streamlined operations and superior customer experiences. From grid management to customer billing, our software development expertise empowers utilities to optimize processes, enhance decision-making, and leverage data-driven insights.',
          },
        ],
      },
    },
    subtitle:
      'Unlock the power of custom software solutions tailored for the utilities industry.',
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
        title: 'Partnering with {appTitle}',
        hero_alt: 'Laser net over city',
        hero_src: '/images/about_nodes_above_city.png',
        overline: 'Get Started',
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
    fa_icon: 'fa-coins',
    hero_alt: 'Finance laptop',
    hero_src: '/unsplash/amLfrL8LGls.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is a high-quality user interface important for my finance business?',
            content:
              'A high-quality user interface is crucial for finance businesses as it enhances user experience, improves productivity, and enables users to make informed financial decisions. It helps streamline complex workflows, visualize financial data effectively, and ensure data accuracy and security.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your company for the finance industry?',
            content:
              'By partnering with our software development company, you can benefit from our expertise in frontend software engineering and dashboard development tailored specifically for the finance industry. We prioritize data security, performance optimization, and scalability to meet the unique demands of finance applications. Our solutions empower your enterprise to make data-driven decisions, enhance operational efficiency, and deliver a superior user experience.',
          },
          {
            id: 'faqs-3',
            title:
              'How do we approach frontend software engineering and dashboard development for finance applications?',
            content:
              'Our approach involves a deep understanding of finance domain knowledge, collaboration with stakeholders, and leveraging the latest frontend technologies. We conduct thorough user research to identify user needs and pain points, develop intuitive interfaces with seamless navigation and responsive design, implement robust data visualization techniques, and ensure compliance with industry standards and regulations. Throughout the development process, we prioritize user testing and feedback to deliver user interfaces that align with your business objectives and drive financial success.',
          },
        ],
        subtitle:
          'Learn more about our Finance Service and how we can help optimize your business processes.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Financial analysis',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We provide comprehensive financial analysis services to help you gain valuable insights into your business performance and make informed decisions.',
          },
          {
            title: 'Budgeting and forecasting',
            fa_icon: 'fa-money-bill-wave',
            subtitle:
              'We assist in developing effective budgeting and forecasting strategies to optimize your financial resources and plan for future growth.',
          },
          {
            title: 'Risk management',
            fa_icon: 'fa-exchange-alt',
            subtitle:
              'We help identify and mitigate financial risks by implementing robust risk management strategies and frameworks.',
          },
          {
            title: 'Compliance and regulations',
            fa_icon: 'fa-balance-scale',
            subtitle:
              'We ensure that your business adheres to financial regulations and compliance standards, providing guidance and support throughout the process.',
          },
          {
            title: 'Strategic planning',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We assist in developing strategic financial plans that align with your business goals and drive sustainable growth.',
          },
          {
            title: 'Performance measurement',
            fa_icon: 'fa-chart-pie',
            subtitle:
              'We help you track and evaluate your financial performance through effective performance measurement and reporting.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'We offer a range of finance services that are tailored to meet the specific needs of your business and industry.',
      },
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
    },
    // Seo
    seo: {
      title: 'Finance',
      description:
        'Optimize your business processes with expert finance solutions. Streamline operations, make data-driven decisions, and drive sustainable growth.',
    },
    subtitle:
      'Partner with finance experts to optimize your business processes and make data-driven decisions.',
  },
  {
    // Hero
    title: 'Government',
    slug: 'government',
    fa_icon: 'fa-landmark-flag',
    hero_alt: 'Greek temple',
    hero_src: '/unsplash/o0kbc907i20.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is a high-quality user interface important for government organisations?',
            content:
              'A high-quality user interface is crucial for government organisations as it enhances citizen experience, promotes transparency, and facilitates access to government services. It improves engagement, fosters trust, and enables efficient interaction with government systems and platforms.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your company for government organisations?',
            content:
              'By partnering with our software development company, government organisations can benefit from our expertise in frontend software engineering and dashboard development tailored specifically for the public sector. We prioritize security, compliance, and accessibility to meet government standards and regulations. Our solutions empower government entities to deliver citizen-centric services, leverage data-driven insights, and enhance overall governance.',
          },
          {
            id: 'faqs-3',
            title:
              'How do we approach frontend software engineering and dashboard development for government organisations?',
            content:
              'Our approach involves in-depth collaboration with government stakeholders to understand their unique requirements and objectives. We prioritize usability, accessibility, and data visualization to create user interfaces and dashboards that cater to diverse user groups. We follow industry best practices, adhere to government standards, conduct thorough security assessments, and ensure compliance with relevant regulations. Our solutions focus on enhancing service delivery, promoting open data initiatives, and driving digital transformation in the government sector.',
          },
        ],
        subtitle:
          'Learn more about our Software Development Service for Government and how we can assist government agencies.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Custom software solutions',
            fa_icon: 'fa-cogs',
            subtitle:
              'We develop custom software solutions that address the unique requirements of government agencies, improving efficiency and effectiveness.',
          },
          {
            title: 'Data management and analytics',
            fa_icon: 'fa-line-chart',
            subtitle:
              'We provide robust data management and analytics solutions to help government agencies make data-driven decisions and enhance service delivery.',
          },
          {
            title: 'Security and compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize security and compliance in our software solutions to ensure the protection of sensitive government data and adherence to regulations.',
          },
          {
            title: 'Citizen engagement platforms',
            fa_icon: 'fa-users',
            subtitle:
              'We develop citizen engagement platforms that facilitate communication, collaboration, and interaction between government agencies and citizens.',
          },
          {
            title: 'Performance measurement',
            fa_icon: 'fa-chart-pie',
            subtitle:
              'We help government agencies track and measure their performance through effective data analysis and reporting tools.',
          },
          {
            title: 'Integration and interoperability',
            fa_icon: 'fa-code',
            subtitle:
              'We specialize in integrating diverse systems and ensuring interoperability to enable seamless information exchange across government agencies.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'We offer a range of software development services tailored to meet the specific needs of government agencies.',
      },
      summary: {
        title: 'Efficient solutions for government agencies.',
        items: [
          {
            title:
              'We understand the unique challenges faced by government agencies, from complex data management to citizen engagement. Our team of experts is equipped with the knowledge and experience to develop custom software solutions that streamline processes, enhance transparency, and enable data-driven decision-making.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Government',
      description:
        'Discover innovative technology solutions for the government sector. We offer expertise in delivering impactful software solutions.',
    },
    subtitle:
      'Partner with software development experts to create efficient solutions for government agencies.',
  },
  {
    // Hero
    title: 'Maritime',
    slug: 'maritime',
    fa_icon: 'fa-ship',
    hero_alt: 'Port with shipping containers',
    hero_src: '/unsplash/xewrfLD8emE.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is software development important for the maritime industry?',
            content:
              'Software development plays a crucial role in optimizing maritime operations, enhancing safety, efficiency, and decision-making. It allows for streamlined processes, data analysis, and real-time monitoring, resulting in improved productivity and cost-effectiveness in the maritime industry.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your company for the maritime industry?',
            content:
              'By partnering with our software development company, maritime businesses can leverage our expertise in frontend software engineering and dashboard development to drive digital transformation. Our solutions enable real-time data visualization, predictive analytics, and process automation, resulting in improved operational efficiency, enhanced safety measures, better fleet management, and increased profitability.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure the security of maritime data in your software solutions?',
            content:
              'We understand the importance of data security in the maritime industry. We implement robust security measures to protect maritime data from unauthorized access, breaches, and data loss. This includes encryption, access controls, and multi-factor authentication. We also adhere to industry best practices and compliance standards to ensure the highest level of security. Regular security audits and updates are conducted to identify and address any vulnerabilities. Our goal is to provide maritime organisations with secure software solutions that safeguard their data and maintain the integrity of their operations.',
          },
        ],
        subtitle:
          'Learn more about our Software Development Service for Maritime and how we can optimize your maritime operations.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Fleet management solutions',
            fa_icon: 'fa-cogs',
            subtitle:
              'We develop software solutions that enable efficient fleet management, including vessel tracking, maintenance scheduling, and performance monitoring.',
          },
          {
            title: 'Data analytics and visualization',
            fa_icon: 'fa-line-chart',
            subtitle:
              'We provide advanced data analytics and visualization tools that help maritime organisations gain valuable insights and make data-driven decisions.',
          },
          {
            title: 'Navigation and route optimization',
            fa_icon: 'fa-map-marked-alt',
            subtitle:
              'We develop navigation and route optimization solutions that enhance maritime safety, efficiency, and fuel consumption.',
          },
          {
            title: 'Security and risk management',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize security and risk management in our software solutions to ensure the protection of maritime assets and compliance with industry regulations.',
          },
          {
            title: 'Logistics and supply chain management',
            fa_icon: 'fa-truck-moving',
            subtitle:
              'We offer software solutions that optimize logistics and supply chain management in the maritime industry, facilitating seamless operations and inventory control.',
          },
          {
            title: 'Performance measurement and reporting',
            fa_icon: 'fa-chart-pie',
            subtitle:
              'We help maritime organisations track and measure their performance through comprehensive performance measurement and reporting tools.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'We offer a range of software development services tailored to meet the specific needs of the maritime industry.',
      },
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
    },
    // Seo
    seo: {
      title: 'Maritime',
      description:
        'Optimize maritime operations with tailored software solutions. Streamline processes, improve decision-making, and ensure compliance with our expert team.',
    },
    subtitle:
      'Partner with software development experts to optimize maritime operations and enhance efficiency.',
  },
  {
    // Hero
    title: 'Real Estate',
    slug: 'real-estate',
    fa_icon: 'fa-map',
    hero_alt: 'Glass buildings',
    hero_src: '/unsplash/w3eFhqXjkZE.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is software development important for the real estate industry?',
            content:
              'Software development plays a vital role in the real estate industry by enabling automation, improving efficiency, and enhancing customer experiences. It allows real estate businesses to streamline processes, manage data effectively, and leverage technology to gain a competitive edge in the market.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of working with your company for the real estate industry?',
            content:
              'By partnering with our company, real estate businesses can leverage our expertise in frontend software engineering and dashboard development to unlock the full potential of their operations. Our solutions enable seamless property management, automated workflows, real-time analytics, and personalized tenant experiences. This results in improved operational efficiency, better tenant engagement, optimized resource allocation, and increased profitability.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure the security of sensitive real estate data?',
            content:
              'We prioritize the security of sensitive real estate data throughout our software development process. We implement robust security measures, including encryption, access controls, and regular security audits. Additionally, we adhere to industry best practices and comply with relevant data protection regulations to ensure the confidentiality, integrity, and availability of your data.',
          },
        ],
        subtitle:
          'Learn more about our Software Development Service for Real Estate and how we can transform your real estate business.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Property management systems',
            fa_icon: 'fa-home',
            subtitle:
              'We develop comprehensive property management systems that automate tasks, streamline workflows, and enhance operational efficiency.',
          },
          {
            title: 'Listing and search platforms',
            fa_icon: 'fa-search-dollar',
            subtitle:
              'We create intuitive listing and search platforms that help users find their ideal properties and enable real estate agents to showcase properties effectively.',
          },
          {
            title: 'Construction project management',
            fa_icon: 'fa-building',
            subtitle:
              'We provide software solutions for construction project management, facilitating collaboration, document management, and progress tracking.',
          },
          {
            title: 'Real estate analytics',
            fa_icon: 'fa-chart-area',
            subtitle:
              'We develop analytics tools that leverage data to provide valuable insights into market trends, property performance, and investment opportunities.',
          },
          {
            title: 'Customer relationship management',
            fa_icon: 'fa-comments',
            subtitle:
              'We offer customized CRM systems for real estate businesses to manage customer interactions, track leads, and nurture client relationships.',
          },
          {
            title: 'Transaction management',
            fa_icon: 'fa-file-invoice-dollar',
            subtitle:
              'We create transaction management systems that automate paperwork, facilitate secure transactions, and improve compliance.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'We offer a range of software development services tailored to meet the specific needs of the real estate industry.',
      },
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
    },
    // Seo
    seo: {
      title: 'Real Estate',
      description:
        'Empower your real estate business with innovative software solutions operations streamlined for success.',
    },
    subtitle:
      'Transform your real estate business with innovative software solutions and intuitive user interfaces.',
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
    slug: 'finance',
    fa_icon: 'fa-coins',
    hero_alt: 'Wall street sign',
    hero_src: '/unsplash/4fsCBcZt9H8.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is UX/UI important in the finance industry?',
            content:
              'A well-designed user interface can significantly enhance user experience, leading to improved customer satisfaction and retention. In the finance industry, where services can be complex, an intuitive and user-friendly interface is crucial for customer engagement.',
          },
          {
            id: 'faqs-2',
            title: 'What do your UX workshops involve?',
            content:
              'Our UX workshops are designed to educate your team on the principles of user experience design. We cover a range of topics, from understanding user needs and behaviours to creating user journeys and prototypes.',
          },
          {
            id: 'faqs-3',
            title: 'How do you approach product design for financial services?',
            content:
              'Our product design process is user-centric. We start by understanding your users’ needs and behaviours, then design products that meet those needs effectively. We also conduct usability testing to ensure our designs are intuitive and user-friendly.',
          },
        ],
        subtitle:
          'Learn more about our UX/UI services for the financial industry.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Bespoke UX/UI design',
            fa_icon: 'fa-pencil-ruler',
            subtitle:
              'We design user interfaces tailored to the needs of your financial enterprise, enhancing usability and customer engagement.',
          },
          {
            title: 'UX Workshops',
            fa_icon: 'fa-users',
            subtitle:
              'We conduct UX workshops to help your team understand and implement best practices in user experience design.',
          },
          {
            title: 'Product Design',
            fa_icon: 'fa-file-alt',
            subtitle:
              'We design financial products with a focus on user experience, helping your customers interact with your services more efficiently.',
          },
          {
            title: 'Accessibility',
            fa_icon: 'fa-universal-access',
            subtitle:
              'We prioritize accessibility in our designs, ensuring that your services are usable by everyone, regardless of their abilities.',
          },
          {
            title: 'Mobile-first design',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'We follow a mobile-first approach to design, ensuring your financial services are easily accessible on all devices.',
          },
          {
            title: 'Collaborative approach',
            fa_icon: 'fa-handshake',
            subtitle:
              'We work in close collaboration with your team to ensure our designs align with your business objectives and meet your users’ needs.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'We offer a comprehensive suite of UX/UI services to transform your financial enterprise.',
      },
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
    },
    // Seo
    seo: {
      title: 'Finance',
      description:
        'Delivering specialized UX/UI design and workshops for financial enterprises to improve user experiences.',
    },
    subtitle:
      'Helping financial enterprises enhance user experiences with tailor-made UX/UI solutions.',
  },
  {
    // Hero
    title: 'Government',
    slug: 'government',
    fa_icon: 'fa-landmark-flag',
    hero_alt: 'Marble building',
    hero_src: '/unsplash/ICXMkhRdquA.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is UX/UI important for government agencies?',
            content:
              'User experience plays a crucial role in how the public interacts with government services. A well-designed user interface can improve efficiency, accessibility, and public satisfaction by making services more intuitive and easy to use.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of your UX workshops for government teams?',
            content:
              'Our UX workshops are designed to help government teams understand the principles of user experience design. This can enhance their ability to deliver services that meet the public’s needs, improve team collaboration, and drive innovation in public service delivery.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you approach product design for government services?',
            content:
              'Our approach to product design is user-centric. We start by understanding the specific needs and behaviours of the target user group, then design products that effectively meet those needs. Our designs focus on enhancing user engagement, efficiency, and accessibility.',
          },
        ],
        subtitle:
          'Learn more about our UX/UI services for the government sector.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Tailored UX/UI design',
            fa_icon: 'fa-pencil-ruler',
            subtitle:
              'We create bespoke user interfaces tailored to the needs of government agencies and their users.',
          },
          {
            title: 'UX Workshops',
            fa_icon: 'fa-users',
            subtitle:
              'We conduct specialized UX workshops that enable government teams to understand and implement best UX practices.',
          },
          {
            title: 'Government Product Design',
            fa_icon: 'fa-file-alt',
            subtitle:
              'We design government products with a focus on user experience, improving efficiency and accessibility of public services.',
          },
          {
            title: 'Accessibility',
            fa_icon: 'fa-universal-access',
            subtitle:
              'Our designs prioritize accessibility, ensuring that public services are usable by everyone, regardless of their abilities.',
          },
          {
            title: 'Mobile-first design',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'We follow a mobile-first approach, ensuring government services are easily accessible on all devices.',
          },
          {
            title: 'Collaborative approach',
            fa_icon: 'fa-handshake',
            subtitle:
              'We work in close collaboration with government teams to align our designs with public service objectives and user needs.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'We offer comprehensive UX/UI services, including product design and UX workshops specifically for government agencies.',
      },
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
    },
    // Seo
    seo: {
      title: 'Government',
      description:
        'This page highlights our specialized UX/UI services for government enterprises, aiming to improve user experiences and accessibility.',
    },
    subtitle:
      'Specializing in delivering user-centric product design and UX workshops for government enterprises.',
  },
  {
    // Hero
    title: 'Maritime',
    slug: 'maritime',
    fa_icon: 'fa-ship',
    hero_alt: 'Captain controlling ship',
    hero_src: '/unsplash/XdIrwH98K_E.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is UX/UI important for the maritime industry?',
            content:
              'In the digital age, user experience plays a crucial role in how services are perceived and utilized. For the maritime industry, an intuitive user interface can enhance operational efficiency, improve user engagement, and facilitate the adoption of digital solutions.',
          },
          {
            id: 'faqs-2',
            title: 'How do your UX workshops benefit maritime teams?',
            content:
              'Our UX workshops aim to impart understanding and application of best UX practices. For maritime teams, this can lead to the development of more user-centric solutions, fostering innovation and increasing user satisfaction.',
          },
          {
            id: 'faqs-3',
            title:
              'What is your approach to product design for maritime services?',
            content:
              'Our approach to product design is anchored in understanding the unique needs of the maritime industry and its users. We design products that streamline maritime operations, enhance user engagement, and are accessible across devices.',
          },
        ],
        subtitle:
          'Find out more about our specialized UX/UI services for the maritime industry.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Maritime-focused Design',
            fa_icon: 'fa-pencil-ruler',
            subtitle:
              'We design user interfaces tailored to maritime operations and users, delivering both functionality and aesthetic appeal.',
          },
          {
            title: 'UX Workshops',
            fa_icon: 'fa-users',
            subtitle:
              'Our workshops equip maritime teams with knowledge and tools to implement best UX practices, promoting user-centric innovation.',
          },
          {
            title: 'Maritime Product Design',
            fa_icon: 'fa-ship',
            subtitle:
              'We design maritime products with a focus on user experience, streamlining processes and enhancing accessibility.',
          },
          {
            title: 'Accessibility',
            fa_icon: 'fa-universal-access',
            subtitle:
              'We ensure that our designs are accessible to all users, enhancing the inclusivity and reach of your maritime services.',
          },
          {
            title: 'Mobile-First Design',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'Our mobile-first approach ensures maritime services are easily accessible across devices, catering to the mobile-dominated user behaviour.',
          },
          {
            title: 'Collaborative Approach',
            fa_icon: 'fa-handshake',
            subtitle:
              'We work collaboratively with your team, aligning our designs with your maritime business objectives and user needs.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'From UX workshops to product design, we provide comprehensive UX/UI services specifically for the maritime industry.',
      },
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
    },
    // Seo
    seo: {
      title: 'Maritime',
      description:
        'This page outlines our specialized UX/UI services for maritime enterprises, aiming to transform user experiences.',
    },
    subtitle:
      'Expertise in enterprise product design and UX workshops focused on the maritime industry.',
  },
  {
    // Hero
    title: 'Real Estate',
    slug: 'real-estate',
    fa_icon: 'fa-map',
    hero_alt: 'Housing area',
    hero_src: '/unsplash/b3H9CbDZqrs.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why is UX/UI important for the real estate industry?',
            content:
              'In the era of digital transformation, user experience plays a significant role in how services are perceived and utilized. For real estate, an intuitive user interface can enhance business efficiency, improve user engagement, and facilitate the adoption of digital solutions.',
          },
          {
            id: 'faqs-2',
            title: 'How do your UX workshops benefit real estate teams?',
            content:
              'Our UX workshops equip real estate teams with knowledge and skills to adopt user-centric design principles. This helps enhance user satisfaction, streamline processes, and foster digital innovation within the organisation.',
          },
          {
            id: 'faqs-3',
            title:
              'What is your approach to product design for real estate services?',
            content:
              'We focus on understanding the unique needs and challenges of the real estate industry. Our product designs aim to improve user engagement, process efficiency, and accessibility across all devices.',
          },
        ],
        subtitle:
          'Find out more about our specialized UX/UI services for the real estate industry.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Real Estate-focused Design',
            fa_icon: 'fa-pencil-ruler',
            subtitle:
              'We design user interfaces tailored to the needs of the real estate industry, ensuring both functionality and aesthetic appeal.',
          },
          {
            title: 'UX Workshops',
            fa_icon: 'fa-users',
            subtitle:
              'Our workshops provide real estate teams with the tools and knowledge to implement best UX practices, fostering user-centric innovation.',
          },
          {
            title: 'Real Estate Product Design',
            fa_icon: 'fa-building',
            subtitle:
              'We design products specifically for real estate, focusing on user experience, process efficiency, and accessibility.',
          },
          {
            title: 'Accessibility',
            fa_icon: 'fa-universal-access',
            subtitle:
              'We prioritize accessibility in our designs, ensuring your real estate services are inclusive and accessible to all users.',
          },
          {
            title: 'Mobile-First Design',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'Recognizing the prominence of mobile users in real estate, we adopt a mobile-first approach to our designs.',
          },
          {
            title: 'Collaborative Approach',
            fa_icon: 'fa-handshake',
            subtitle:
              'We work closely with your team, aligning our designs with your real estate business goals and user needs.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'From UX workshops to product design, we provide comprehensive UX/UI services designed for the real estate industry.',
      },
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
    },
    // Seo
    seo: {
      title: 'Real Estate',
      description:
        'This page outlines our tailored UX/UI services for real estate enterprises, aiming to transform user experiences.',
    },
    subtitle:
      'Specialized in enterprise product design and UX workshops for the real estate industry.',
  },
].map((item, i) => {
  return merge({}, MOCK_INDUSTRY_PAGE, {
    id: i + 1,
    ...item,
    sections: {
      ...item.sections,
      checklist: {
        subtitle:
          'Unlocking the potential of enterprise technology through expert design services tailored to drive your business growth.',
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
  })
})

export const MOCK_DATA_INDUSTRYS = [
  {
    // Hero
    title: 'Finance',
    slug: 'finance',
    fa_icon: 'fa-coins',
    hero_alt: 'City buildings',
    hero_src: '/unsplash/p_cHW1REBWc.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why are data science and AI important for the finance industry?',
            content:
              'Data science and AI are transforming the finance industry. They enable enterprises to uncover insights, improve decision-making, automate processes, manage risks, and drive innovation. Leveraging these technologies is key to staying competitive in today’s digital age.',
          },
          {
            id: 'faqs-2',
            title: 'What are the benefits of your Data Science & AI Solutions?',
            content:
              'We provide tailored solutions that can help finance enterprises enhance efficiency, reduce risk, and drive innovation. Our expertise in data science and AI, coupled with a deep understanding of the finance industry, allows us to deliver solutions that align with your business goals and deliver real value.',
          },
          {
            id: 'faqs-3',
            title: 'How do you approach data science and AI in finance?',
            content:
              'We start by understanding your business goals and challenges. From there, we leverage data science and AI to design and implement solutions tailored to your needs. This could involve using predictive analytics to forecast trends, automating processes with AI, or implementing AI strategies to drive business growth and innovation.',
          },
        ],
        subtitle:
          'Learn more about our Data Science & AI Solutions for Finance and how we can help your business.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'AI Strategy',
            fa_icon: 'fa-brain',
            subtitle:
              'We provide strategic guidance on leveraging AI to drive business growth and innovation in the finance industry.',
          },
          {
            title: 'Predictive Analytics',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'Our predictive analytics solutions help finance enterprises forecast future events and trends with improved accuracy.',
          },
          {
            title: 'AI Automation',
            fa_icon: 'fa-robot',
            subtitle:
              'We automate labor-intensive processes using AI, enhancing efficiency and reducing operational costs for finance enterprises.',
          },
          {
            title: 'Risk Management',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Our AI solutions can identify potential risks and anomalies, helping enterprises mitigate risks and ensure regulatory compliance.',
          },
          {
            title: 'AI Implementation',
            fa_icon: 'fa-cogs',
            subtitle:
              'We implement AI solutions seamlessly into existing finance processes, ensuring they align with business goals and deliver value.',
          },
          {
            title: 'Collaborative Approach',
            fa_icon: 'fa-users-cog',
            subtitle:
              'We work closely with finance enterprises to understand their specific needs and deliver tailored AI solutions.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'We offer a comprehensive suite of data science and AI solutions tailored to the finance industry.',
      },
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
    },
    // Seo
    seo: {
      title: 'Finance',
      description:
        'This page focuses on how we employ data science and AI to provide transformative solutions for finance enterprises.',
    },
    subtitle:
      'Leveraging data and AI to drive transformative solutions for the finance industry.',
  },
  {
    // Hero
    title: 'Government',
    slug: 'government',
    fa_icon: 'fa-landmark-flag',
    hero_alt: 'Swiss government cabinet',
    hero_src: '/unsplash/GAfoU0t8tsg.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why are data science and AI important for the public sector?',
            content:
              'Data science and AI have the potential to revolutionize the public sector. They can help government organisations make more informed decisions, improve service delivery, and drive transparency and efficiency. Leveraging these technologies is key to meeting the demands of today’s digital age.',
          },
          {
            id: 'faqs-2',
            title: 'What are the benefits of your Data Science & AI Solutions?',
            content:
              'Our data science and AI solutions help government organisations leverage their data in powerful ways. We provide tools to uncover valuable insights, predict future trends, and automate processes, all while ensuring the highest levels of security and compliance. We strive to deliver solutions that align with your public service objectives and drive meaningful improvement.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you approach data science and AI in the public sector?',
            content:
              'We start by understanding your organisation’s specific needs and goals. We then design and implement data science and AI solutions tailored to these requirements. This may involve predictive analytics to inform policy decisions, AI automation to improve service delivery, or AI strategy consulting to foster innovation and efficiency.',
          },
        ],
        subtitle:
          'Learn more about our Data Science & AI Solutions for Government and how we can empower your organisation.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'AI Strategy',
            fa_icon: 'fa-brain',
            subtitle:
              'We provide strategic guidance on leveraging AI to drive efficiency, transparency, and innovation in the public sector.',
          },
          {
            title: 'Predictive Analytics',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'Our predictive analytics solutions enable government organisations to anticipate future trends and make informed policy decisions.',
          },
          {
            title: 'AI Automation',
            fa_icon: 'fa-robot',
            subtitle:
              'We automate labor-intensive processes using AI, enhancing service delivery and reducing operational costs in the public sector.',
          },
          {
            title: 'Security & Compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We prioritize security and compliance in our AI solutions, ensuring that government data is protected and regulations are met.',
          },
          {
            title: 'AI Implementation',
            fa_icon: 'fa-cogs',
            subtitle:
              'We seamlessly integrate AI solutions into existing governmental processes, ensuring alignment with public service goals.',
          },
          {
            title: 'Collaborative Approach',
            fa_icon: 'fa-users-cog',
            subtitle:
              'We work closely with government organisations to understand their specific needs and deliver tailored AI solutions.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'We offer a wide range of data science and AI solutions tailored to the needs of government organisations.',
      },
      summary: {
        title: 'Empowering the public sector with data and AI.',
        items: [
          {
            title:
              'In the public sector, making data-driven decisions is crucial. Our data science and AI solutions are designed to meet the unique challenges of government organisations, enabling them to uncover valuable insights and drive efficiency and transparency.',
          },
          {
            title:
              'We deliver AI solutions that enhance service delivery, facilitate policymaking, and foster innovation. Whether it’s improving decision-making, automating processes, or identifying new opportunities, we help government entities turn their data into actionable insights.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Government',
      description:
        'This page details our expertise in leveraging data science and AI to create transformative solutions for government organisations.',
    },
    subtitle:
      'Harnessing data and AI to drive efficiency, transparency, and innovation in the public sector.',
  },
  {
    // Hero
    title: 'Maritime',
    slug: 'maritime',
    fa_icon: 'fa-ship',
    hero_alt: 'Cargo port',
    hero_src: '/unsplash/eqwFWHfQipg.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why are data science and AI important for the maritime industry?',
            content:
              'Data science and AI have the potential to significantly enhance operations in the maritime industry. They can enable predictive maintenance, optimize logistics, improve decision-making, and drive overall operational efficiency. As the maritime industry continues to evolve, these technologies will be key to staying competitive.',
          },
          {
            id: 'faqs-2',
            title: 'What are the benefits of your Data Science & AI Solutions?',
            content:
              'Our solutions are designed to address the specific challenges and needs of the maritime industry. By leveraging our solutions, maritime organisations can increase operational efficiency, improve safety, and innovate faster. Our team of experts collaborates closely with your organisation to ensure that our solutions deliver maximum value.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you approach data science and AI in the maritime industry?',
            content:
              'We begin by understanding your organisation’s unique needs and objectives. We then design and implement tailored data science and AI solutions to meet these needs. This may involve using machine learning for predictive maintenance, AI for logistics management, or data analytics for decision support.',
          },
        ],
        subtitle:
          'Learn more about our Data Science & AI Solutions for the Maritime industry and how we can empower your organisation.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Predictive Maintenance',
            fa_icon: 'fa-ship',
            subtitle:
              'We utilize AI and machine learning to anticipate maintenance needs, improving vessel efficiency and minimizing downtime.',
          },
          {
            title: 'Logistics Management',
            fa_icon: 'fa-chart-network',
            subtitle:
              'We leverage AI to optimize logistics and supply chain processes, enhancing operational efficiency in the maritime industry.',
          },
          {
            title: 'Data-Driven Decision Making',
            fa_icon: 'fa-analytics',
            subtitle:
              'Our solutions help organisations make data-backed decisions, improving strategic planning and operational performance.',
          },
          {
            title: 'Security & Compliance',
            fa_icon: 'fa-user-shield',
            subtitle:
              'We ensure our solutions meet the rigorous security standards and regulatory requirements of the maritime industry.',
          },
          {
            title: 'AI Integration',
            fa_icon: 'fa-cogs',
            subtitle:
              'We seamlessly integrate AI capabilities into existing maritime processes, creating a smarter, more efficient operating environment.',
          },
          {
            title: 'Collaborative Approach',
            fa_icon: 'fa-users-cog',
            subtitle:
              'We partner with maritime organisations to understand their specific needs and deliver tailored AI solutions.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'We offer a comprehensive suite of data science and AI solutions tailored to the unique needs of the maritime industry.',
      },
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
    },
    // Seo
    seo: {
      title: 'Maritime',
      description:
        'This page showcases our expertise in applying data science and AI solutions to address challenges in the maritime industry.',
    },
    subtitle:
      'Empowering the maritime industry with advanced data analytics and AI solutions.',
  },
  {
    // Hero
    title: 'Real Estate',
    slug: 'real-estate',
    fa_icon: 'fa-map',
    hero_alt: 'Waterfront property',
    hero_src: '/unsplash/Ch3WwM6PcsA.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why are data science and AI important for the real estate industry?',
            content:
              'Data science and AI provide tools for the real estate industry to make better, data-driven decisions, predict trends, personalize customer experiences, and improve operational efficiency. As the industry becomes increasingly digital, these technologies are becoming essential.',
          },
          {
            id: 'faqs-2',
            title:
              'What are the benefits of your Data Science & AI solutions for my real estate business?',
            content:
              'Our solutions can help your real estate business in several ways. This includes generating accurate property valuations, predicting industry trends, creating detailed customer profiles for targeted marketing, improving decision-making, and enhancing overall operational efficiency. We ensure that our solutions meet your specific business needs and objectives.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you approach data science and AI in the real estate industry?',
            content:
              'We start by understanding your specific business needs and objectives. Then we design and implement tailored data science and AI solutions to address these needs. This could involve using machine learning for predictive analytics, AI for customer profiling, or data analytics for strategic decision-making. Our team collaborates closely with your organisation to ensure our solutions deliver maximum value.',
          },
        ],
        subtitle:
          'Learn more about our Data Science & AI Solutions for the Real Estate industry and how we can empower your organisation.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Predictive Analytics',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We leverage AI and machine learning to generate accurate property valuations and trend predictions, helping businesses make strategic decisions.',
          },
          {
            title: 'Customer Profiling',
            fa_icon: 'fa-user-tag',
            subtitle:
              'We use AI to analyse customer data and generate detailed customer profiles, helping real estate businesses deliver personalized experiences.',
          },
          {
            title: 'Data-Driven Decision Making',
            fa_icon: 'fa-analytics',
            subtitle:
              'Our solutions enable organisations to make data-backed decisions, improving strategic planning and operational performance.',
          },
          {
            title: 'Security & Compliance',
            fa_icon: 'fa-user-shield',
            subtitle:
              'We ensure our solutions meet the rigorous security standards and regulatory requirements of the real estate industry.',
          },
          {
            title: 'AI Integration',
            fa_icon: 'fa-cogs',
            subtitle:
              'We seamlessly integrate AI capabilities into existing real estate processes, creating a smarter, more efficient operating environment.',
          },
          {
            title: 'Collaborative Approach',
            fa_icon: 'fa-users-cog',
            subtitle:
              'We partner with real estate organisations to understand their specific needs and deliver tailored AI solutions.',
          },
        ],
        overline: 'Our Solutions',
        subtitle:
          'We offer a comprehensive suite of data science and AI solutions tailored to the unique needs of the real estate industry.',
      },
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
    },
    // Seo
    seo: {
      title: 'Real Estate',
      description:
        'This page showcases our expertise in applying data science and AI solutions to address challenges in the real estate industry.',
    },
    subtitle:
      'Empowering the real estate industry with advanced data analytics and AI solutions.',
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
        title: 'Partnering with {appTitle}',
        hero_alt: 'Laser net over city',
        hero_src: '/images/about_nodes_above_city.png',
        overline: 'Get Started',
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
    hero_alt: 'Finance',
    hero_src: '/unsplash/M_S7pim3Hwg.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is a comprehensive digital strategy important for finance businesses?',
            content:
              'A comprehensive digital strategy is crucial for finance businesses to stay competitive and meet the evolving needs of customers. It helps in establishing a strong digital presence, targeting the right audience, driving leads and conversions, and optimizing business operations for better efficiency and growth.',
          },
          {
            id: 'faqs-2',
            title:
              'What benefits can B2B Digital Marketing bring to finance businesses?',
            content:
              'B2B Digital Marketing enables finance businesses to reach and engage their target audience effectively. It helps in generating high-quality leads, building brand awareness and credibility, nurturing client relationships, and driving business growth through strategic digital campaigns tailored for B2B audiences.',
          },
          {
            id: 'faqs-3',
            title:
              'How can advanced web development and analytics benefit finance businesses?',
            content:
              'Advanced web development and analytics provide finance businesses with powerful tools to create exceptional online experiences, optimize processes, and gain valuable insights from data. It allows for the development of secure, scalable, and user-friendly web solutions, while analytics helps in measuring performance, identifying trends, and making data-driven decisions for continuous improvement and competitive advantage.',
          },
        ],
        subtitle:
          'Learn more about our Finance Industry Services and how we can help your finance business succeed in the digital world.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Enterprise digital strategy',
            fa_icon: 'fa-briefcase',
            subtitle:
              'We develop comprehensive digital strategies that align with your business objectives and drive growth in the finance industry.',
          },
          {
            title: 'B2B Digital Marketing',
            fa_icon: 'fa-bullhorn',
            subtitle:
              'We execute targeted digital marketing campaigns to reach and engage your B2B audience, driving leads and conversions for your finance business.',
          },
          {
            title: 'Advanced web development',
            fa_icon: 'fa-code',
            subtitle:
              'We build robust and scalable web solutions tailored to the unique requirements of the finance industry, delivering exceptional user experiences and functionality.',
          },
          {
            title: 'Analytics and insights',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We provide advanced analytics and data-driven insights to help you make informed decisions and optimize your digital presence in the finance industry.',
          },
          {
            title: 'Personalization and customer experience',
            fa_icon: 'fa-users',
            subtitle:
              'We help you create personalized experiences for your customers, leveraging data and technology to deliver relevant and engaging interactions at every touchpoint.',
          },
          {
            title: 'Technology integration',
            fa_icon: 'fa-cogs',
            subtitle:
              'We integrate and optimize digital technologies within your finance operations, streamlining processes and enhancing efficiency.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We leverage our deep understanding of the finance industry and cutting-edge digital technologies to help you succeed in the digital landscape.',
      },
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
    },
    // Seo
    seo: {
      title: 'Finance',
      description:
        'This page is all about enterprise digital strategy, B2B Digital Marketing, and advanced web development & analytics services for the finance industry.',
    },
    subtitle:
      'Partner with us for enterprise digital strategy, B2B Digital Marketing, and advanced web development & analytics services tailored to the finance industry.',
  },
  {
    // Hero
    title: 'Government',
    slug: 'government',
    fa_icon: 'fa-landmark-flag',
    hero_alt: 'Government Building',
    hero_src: '/unsplash/TELAb4duebI.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is digital transformation important for government organisations?',
            content:
              'Digital transformation is crucial for government organisations to enhance citizen services, improve operational efficiency, and drive innovation. It enables streamlined processes, data-driven decision-making, and effective engagement with citizens and businesses.',
          },
          {
            id: 'faqs-2',
            title:
              'How can your Government services support our digital transformation journey?',
            content:
              'Our Government services provide specialized expertise in enterprise digital strategy, B2B Digital Marketing, and advanced web development & analytics. We collaborate closely with government organisations to develop tailored solutions that address their unique challenges and goals, enabling successful digital transformation.',
          },
          {
            id: 'faqs-3',
            title: 'What approach do you follow for citizen-centric solutions?',
            content:
              'We adopt a user-centered design approach for citizen-centric solutions. Our process involves extensive user research and engagement to understand citizen needs and preferences. We then design and develop intuitive digital platforms that prioritize accessibility, convenience, and satisfaction.',
          },
        ],
        subtitle:
          'Learn more about our Government services and how we can assist your organisation in achieving digital transformation.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Enterprise digital strategy',
            fa_icon: 'fa-briefcase',
            subtitle:
              "We develop comprehensive digital strategies that align with government organisations' objectives, ensuring effective utilization of digital technologies and resources.",
          },
          {
            title: 'B2B Digital Marketing',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We help government agencies establish strong digital presences, build effective partnerships, and leverage digital marketing techniques to engage with businesses and stakeholders.',
          },
          {
            title: 'Advanced web development & analytics',
            fa_icon: 'fa-laptop-code',
            subtitle:
              'We deliver sophisticated web development solutions and utilize advanced analytics to drive data-driven decision-making and optimize government websites and applications.',
          },
          {
            title: 'Citizen-centric solutions',
            fa_icon: 'fa-users',
            subtitle:
              'We prioritize the needs and expectations of citizens, designing and developing user-friendly digital solutions that enhance accessibility, convenience, and satisfaction.',
          },
          {
            title: 'Security and compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We ensure that government digital platforms comply with stringent security and privacy regulations, safeguarding sensitive data and maintaining trust with citizens.',
          },
          {
            title: 'Integration and interoperability',
            fa_icon: 'fa-cogs',
            subtitle:
              'We facilitate seamless integration and interoperability of digital systems and applications, enabling efficient data sharing and collaboration across government agencies.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We leverage our expertise in enterprise digital strategy, B2B Digital Marketing, and advanced web development & analytics to support government organisations in their digital transformation journey.',
      },
      summary: {
        title: 'Driving digital transformation in the government sector.',
        items: [
          {
            title:
              'In the modern era, government organisations face unique challenges in adopting digital technologies and providing efficient services to citizens. At our Government service, we specialize in assisting government agencies with their digital transformation initiatives and helping them navigate the complexities of the public sector.',
          },
          {
            title:
              'We understand the importance of citizen-centric solutions and the need for secure and accessible digital platforms. Our team of experts combines industry knowledge and technical expertise to deliver innovative strategies and solutions that enhance citizen services, improve operational efficiency, and drive digital innovation in the government sector.',
          },
        ],
      },
    },
    // Seo
    seo: {
      title: 'Government',
      description:
        'This page focuses on helping government organisations achieve digital transformation and enhance citizen services.',
    },
    subtitle:
      'Partner with our experts to navigate the complexities of digital transformation in the government sector.',
  },
  {
    // Hero
    title: 'Maritime',
    slug: 'maritime',
    fa_icon: 'fa-ship',
    hero_alt: 'Maritime',
    hero_src: '/unsplash/sFq7vyCSFbM.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is digital marketing important for the maritime industry?',
            content:
              'Digital marketing plays a crucial role in the maritime industry as it enables businesses to expand their reach, engage with key stakeholders, and drive business growth. It allows maritime companies to showcase their expertise, build brand awareness, and connect with potential customers and partners in a highly competitive digital landscape.',
          },
          {
            id: 'faqs-2',
            title:
              'How can B2B Digital Marketing benefit my maritime business?',
            content:
              'B2B Digital Marketing is essential for maritime businesses as it helps establish strong relationships with industry partners, suppliers, and other key stakeholders. It enables you to effectively communicate your value proposition, generate qualified leads, and nurture business opportunities in the B2B space. With targeted B2B marketing strategies, you can enhance brand reputation, increase market visibility, and drive revenue growth in the maritime industry.',
          },
          {
            id: 'faqs-3',
            title:
              'What are the advantages of advanced web development for the maritime industry?',
            content:
              'Advanced web development provides numerous advantages for the maritime industry. It allows you to create immersive digital experiences, streamline business processes, and enhance customer engagement. With responsive and user-friendly web interfaces, you can attract and retain customers, facilitate seamless transactions, and showcase your services and solutions effectively. Advanced web development also enables integration with other systems and platforms, optimizing operational efficiency and enhancing overall business performance in the maritime industry.',
          },
        ],
        subtitle:
          'Learn more about our services for the maritime industry and how we can help your business thrive.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Enterprise digital strategy',
            fa_icon: 'fa-briefcase',
            subtitle:
              'We develop comprehensive digital strategies that align with your business objectives and drive growth in the maritime industry.',
          },
          {
            title: 'B2B Digital Marketing',
            fa_icon: 'fa-bullhorn',
            subtitle:
              'We implement targeted B2B marketing campaigns to help you connect with key stakeholders and decision-makers in the maritime industry.',
          },
          {
            title: 'Advanced web development',
            fa_icon: 'fa-code',
            subtitle:
              'We leverage cutting-edge web development technologies to create robust and scalable digital solutions tailored to the maritime industry.',
          },
          {
            title: 'Analytics-driven insights',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We utilize advanced analytics tools to gather actionable insights and optimize your digital presence in the maritime industry.',
          },
          {
            title: 'Technology integration',
            fa_icon: 'fa-cogs',
            subtitle:
              'We integrate the latest technological advancements into your digital ecosystem to streamline operations and enhance efficiency in the maritime industry.',
          },
          {
            title: 'Collaboration',
            fa_icon: 'fa-users',
            subtitle:
              'We work closely with your enterprise team to understand your specific needs and develop tailored solutions that deliver measurable results in the maritime industry.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We employ industry best practices and cutting-edge technologies to deliver exceptional digital solutions for the maritime industry.',
      },
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
    },
    // Seo
    seo: {
      title: 'Maritime',
      description:
        'Thrive with our digital marketing expertise. Enterprise strategy, B2B marketing, advanced web development & analytics. Boost your maritime business.',
    },
    subtitle:
      'Unlock the potential of the maritime industry with our enterprise digital strategy, B2B Digital Marketing, and advanced web development & analytics services.',
  },
  {
    // Hero
    title: 'Real Estate',
    slug: 'real-estate',
    fa_icon: 'fa-map',
    hero_alt: 'Real Estate',
    hero_src: '/unsplash/w3eFhqXjkZE.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is digital marketing important for real estate professionals?',
            content:
              'Digital marketing plays a critical role in the real estate industry by helping professionals reach a wider audience, generate leads, and build brand awareness. It enables targeted marketing campaigns, enhances customer engagement, and provides valuable insights for informed decision-making.',
          },
          {
            id: 'faqs-2',
            title: 'How can your Real Estate Service benefit my business?',
            content:
              'Our Real Estate Service offers a comprehensive range of specialized digital marketing solutions tailored to the unique needs of the industry. By partnering with us, you can leverage our expertise to enhance your online presence, attract qualified leads, and stay ahead in a competitive market. We focus on driving measurable results and delivering a strong return on investment for our clients.',
          },
          {
            id: 'faqs-3',
            title: 'What sets your B2B Digital Marketing apart?',
            content:
              'Our B2B Digital Marketing services are specifically designed to target key stakeholders in the real estate industry, such as developers, investors, and property managers. We employ a data-driven approach to create customized strategies that effectively reach and engage these audiences. Our team has extensive experience in B2B marketing, allowing us to deliver impactful campaigns that drive meaningful business outcomes.',
          },
        ],
        subtitle:
          'Find answers to commonly asked questions about our Real Estate Service.',
      },
      features: {
        title: 'Empowering the {title} Sector',
        items: [
          {
            title: 'Enterprise digital strategy',
            fa_icon: 'fa-briefcase',
            subtitle:
              'We develop customized digital strategies that align with your business objectives and help you navigate the competitive real estate landscape.',
          },
          {
            title: 'B2B Digital Marketing',
            fa_icon: 'fa-chart-line',
            subtitle:
              'We specialize in B2B digital marketing strategies that target key stakeholders in the real estate industry, including developers, investors, and property managers.',
          },
          {
            title: 'Advanced web development & analytics',
            fa_icon: 'fa-laptop-code',
            subtitle:
              'Our team of skilled developers and analysts create cutting-edge websites and provide advanced analytics solutions to track performance and optimize your online presence.',
          },
          {
            title: 'Lead generation',
            fa_icon: 'fa-users',
            subtitle:
              'We employ targeted lead generation strategies to attract potential buyers, sellers, and investors, helping you expand your client base and increase sales.',
          },
          {
            title: 'Brand management',
            fa_icon: 'fa-bullhorn',
            subtitle:
              'We develop and execute comprehensive brand management strategies that enhance your reputation, increase brand visibility, and differentiate you from competitors.',
          },
          {
            title: 'Marketing automation',
            fa_icon: 'fa-cogs',
            subtitle:
              'We implement marketing automation tools and processes to streamline your marketing efforts, improve efficiency, and increase ROI.',
          },
        ],
        overline: 'What we do',
        subtitle:
          'We offer a range of specialized services designed to meet the unique needs of the real estate industry.',
      },
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
    },
    // Seo
    seo: {
      title: 'Real Estate',
      description:
        'This page is dedicated to helping you maximize your real estate opportunities and drive growth.',
    },
    subtitle:
      'Partner with industry experts to maximize your real estate opportunities and drive growth.',
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
        title: 'Partnering with {appTitle}',
        hero_alt: 'Laser net over city',
        hero_src: '/images/about_nodes_above_city.png',
        overline: 'Get Started',
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
    hero_alt: 'Regtech',
    hero_src: '/unsplash/9lpSbMgYm0Q.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why should businesses invest in regtech solutions?',
            content:
              'Regtech solutions offer numerous benefits for businesses, including streamlined regulatory compliance processes, enhanced risk management capabilities, improved data governance and privacy, accurate compliance reporting, efficient KYC/AML processes, and robust identity verification. By leveraging regtech solutions, businesses can ensure adherence to regulatory requirements, reduce compliance costs, mitigate risks, and maintain trust with stakeholders.',
          },
          {
            id: 'faqs-2',
            title:
              'How can your Regulatory Compliance Automation solutions help businesses?',
            content:
              'Our Regulatory Compliance Automation solutions utilize advanced technologies such as artificial intelligence and machine learning to automate compliance processes. By automating repetitive tasks, ensuring data accuracy, and providing real-time monitoring and alerts, our solutions enable businesses to streamline compliance efforts, reduce manual errors, and stay up to date with regulatory changes.',
          },
          {
            id: 'faqs-3',
            title: 'What makes your KYC/AML Solutions stand out?',
            content:
              'Our KYC/AML Solutions are designed to help businesses simplify and strengthen their customer due diligence and anti-money laundering processes. We offer advanced identity verification techniques, intelligent risk scoring, and comprehensive compliance checks. Our solutions leverage data analytics and machine learning algorithms to identify potential risks and suspicious activities, enabling businesses to meet regulatory requirements and combat financial crimes effectively.',
          },
        ],
        subtitle:
          'Find answers to common questions about our Regtech Solutions and how they can benefit businesses.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Regulatory Compliance Automation',
            fa_icon: 'fa-cogs',
            subtitle:
              'Automate compliance processes and ensure adherence to regulatory requirements with our advanced regtech solutions.',
          },
          {
            title: 'Risk Management Solutions',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Identify and mitigate risks with our robust risk management solutions tailored to your business needs.',
          },
          {
            title: 'Data Governance and Privacy',
            fa_icon: 'fa-database',
            subtitle:
              'Ensure data integrity, privacy, and security in compliance with regulatory guidelines using our data governance solutions.',
          },
          {
            title: 'Compliance Reporting and Analytics',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'Generate accurate compliance reports and gain valuable insights into regulatory trends with our reporting and analytics solutions.',
          },
          {
            title: 'KYC/AML Solutions',
            fa_icon: 'fa-check-double',
            subtitle:
              'Streamline customer due diligence and anti-money laundering processes with our KYC/AML solutions.',
          },
          {
            title: 'Identity Verification',
            fa_icon: 'fa-user-shield',
            subtitle:
              'Verify customer identities and prevent fraud with our secure and efficient identity verification solutions.',
          },
        ],
        overline: 'What we offer',
        subtitle:
          'Optimize regulatory compliance and risk management with our comprehensive regtech solutions.',
      },
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
    },
    // Seo
    seo: {
      title: 'Regtech',
      description:
        'Discover how our regtech solutions can help businesses streamline regulatory compliance and risk management.',
    },
    subtitle:
      'Streamline regulatory compliance and risk management with our advanced regtech solutions.',
  },
  {
    // Hero
    title: 'Insurtech',
    slug: 'insurtech',
    fa_icon: 'fa-file-contract',
    hero_alt: 'Insurance',
    hero_src: '/unsplash/mCqi3MljC4E.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'Frequently Asked Questions',
        items: [
          {
            id: 'faqs-1',
            title: 'How can digital solutions benefit the insurance industry?',
            content:
              'Digital solutions can greatly benefit the insurance industry by improving operational efficiency, enhancing customer experiences, enabling data-driven decision-making, and streamlining processes for faster claims processing and underwriting.',
          },
          {
            id: 'faqs-2',
            title: 'What makes your Insurtech Solutions unique?',
            content:
              'Our Insurtech Solutions are tailored to the specific needs of insurance companies, combining industry expertise with cutting-edge technology. We provide end-to-end digital transformation support, encompassing everything from operational efficiency improvements to advanced analytics and customer experience enhancements.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure data security and privacy in your solutions?',
            content:
              'Data security and privacy are paramount in our solutions. We adhere to industry best practices and implement robust security measures to protect sensitive information. We also comply with relevant data protection regulations to ensure privacy and confidentiality.',
          },
        ],
        subtitle:
          'Learn more about our Insurtech Solutions and how they can drive digital transformation in the insurance industry.',
      },
      features: {
        title: 'Our Insurtech Solutions',
        items: [
          {
            title: 'End-to-end digital transformation',
            fa_icon: 'fa-puzzle-piece',
            subtitle:
              'We help insurance companies undergo a comprehensive digital transformation journey, from process optimization to customer engagement and data analytics.',
          },
          {
            title: 'Operational efficiency',
            fa_icon: 'fa-cogs',
            subtitle:
              'We identify opportunities to streamline and automate operations, allowing insurance companies to improve efficiency, reduce costs, and enhance customer service.',
          },
          {
            title: 'Data analytics and insights',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We leverage advanced analytics and data science techniques to extract valuable insights from vast amounts of insurance data, enabling data-driven decision-making and risk assessment.',
          },
          {
            title: 'Risk management and fraud detection',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We implement robust risk management systems and employ cutting-edge technologies to detect and prevent fraudulent activities, safeguarding insurance companies and their customers.',
          },
          {
            title: 'Integration and interoperability',
            fa_icon: 'fa-exchange-alt',
            subtitle:
              'We enable seamless integration of systems and data across different platforms and stakeholders, facilitating collaboration and enhancing operational efficiency.',
          },
          {
            title: 'Enhanced customer experience',
            fa_icon: 'fa-users',
            subtitle:
              'We design and implement customer-centric digital solutions, such as self-service portals and personalized interactions, to improve customer satisfaction and retention.',
          },
        ],
        overline: 'What we offer',
        subtitle:
          'We combine cutting-edge technology, data-driven insights, and industry expertise to provide tailored digital solutions and consulting services for insurance companies.',
      },
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
    },
    // Seo
    seo: {
      title: 'Insurtech',
      description:
        'Discover how our digital solutions and consulting services can revolutionize the insurance industry.',
    },
    subtitle:
      'Transform your insurance business with our digital solutions and consulting services tailored to the insurtech industry.',
  },
  {
    // Hero
    title: 'Wealthtech',
    slug: 'wealthtech',
    fa_icon: 'fa-hand-holding-usd',
    hero_alt: 'Wealthtech',
    hero_src: '/unsplash/3PyBkxgTiL0.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why should banks and asset firms invest in wealthtech solutions?',
            content:
              'Wealthtech solutions offer numerous benefits for banks and asset firms, including increased operational efficiency, improved customer experiences, enhanced risk management, and better compliance with regulatory requirements. By embracing wealthtech, banks and asset firms can stay competitive, drive innovation, and deliver superior financial services to their clients.',
          },
          {
            id: 'faqs-2',
            title:
              'How can your Digital Transformation Consulting services help banks and asset firms?',
            content:
              'Our Digital Transformation Consulting services empower banks and asset firms to navigate the complexities of digital disruption. We help identify strategic goals, assess existing systems and processes, and design customized digital solutions that streamline operations, improve customer engagement, and drive business growth. Our expertise in technology adoption and change management ensures a smooth and successful digital transformation journey.',
          },
          {
            id: 'faqs-3',
            title: 'What makes your Regulatory Compliance solutions stand out?',
            content:
              'Our Regulatory Compliance solutions are designed to address the unique regulatory challenges faced by banks and asset firms. We provide comprehensive solutions that automate compliance processes, monitor regulatory changes, and ensure adherence to regulatory requirements. Our solutions leverage advanced technologies, such as artificial intelligence and machine learning, to enhance accuracy, efficiency, and effectiveness in regulatory compliance.',
          },
        ],
        subtitle:
          'Find answers to common questions about our Wealthtech Solutions and how they can benefit banks and asset firms.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Digital Transformation Consulting',
            fa_icon: 'fa-cogs',
            subtitle:
              'Partner with us to navigate the complexities of digital transformation and leverage technology to achieve strategic goals.',
          },
          {
            title: 'Investment Analysis & Management',
            fa_icon: 'fa-line-chart',
            subtitle:
              'Make informed investment decisions and optimize your portfolio with our advanced analysis and management solutions.',
          },
          {
            title: 'Regulatory Compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Ensure compliance with regulatory requirements and automate compliance processes with our comprehensive solutions.',
          },
          {
            title: 'Robo-Advisory Services',
            fa_icon: 'fa-people-carry',
            subtitle:
              'Leverage AI-driven robo-advisory services to deliver personalized investment advice and improve client engagement.',
          },
          {
            title: 'Risk Management',
            fa_icon: 'fa-exclamation-triangle',
            subtitle:
              'Mitigate risks and optimize risk management strategies with our data-driven risk management solutions.',
          },
          {
            title: 'Mobile Banking Solutions',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'Enhance customer experiences and enable seamless mobile banking with our user-friendly mobile banking solutions.',
          },
        ],
        overline: 'What we offer',
        subtitle:
          'Unlock new opportunities and improve operational efficiency with our comprehensive wealthtech solutions.',
      },
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
    },
    // Seo
    seo: {
      title: 'Wealthtech',
      description:
        'Discover how our wealthtech solutions can revolutionize your banking and asset management operations.',
    },
    subtitle:
      'Transform your banking and asset management operations with our innovative wealthtech solutions.',
  },
  {
    // Hero
    title: 'Paytech',
    slug: 'paytech',
    fa_icon: 'fa-credit-card',
    hero_alt: 'Paytech',
    hero_src: '/unsplash/XvS-uKUoUao.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why should banks and asset firms invest in paytech solutions?',
            content:
              'Paytech solutions offer numerous benefits for banks and asset firms, including improved payment processing efficiency, enhanced security and fraud prevention, seamless mobile payments, expanded global reach, and valuable payment insights. By embracing paytech, banks and asset firms can stay competitive, drive innovation, and deliver superior financial services to their customers.',
          },
          {
            id: 'faqs-2',
            title:
              'How can your Digital Transformation Consulting services help banks and asset firms?',
            content:
              'Our Digital Transformation Consulting services empower banks and asset firms to navigate the complex landscape of digital transformation. We provide strategic guidance, technology expertise, and change management support to help organisations embrace digital technologies, optimize processes, and enhance customer experiences. With our consulting services, banks and asset firms can unlock new growth opportunities and achieve sustainable success in the digital era.',
          },
          {
            id: 'faqs-3',
            title: 'What sets your Payment Processing Solutions apart?',
            content:
              'Our Payment Processing Solutions are designed to meet the specific needs of banks and asset firms. We offer advanced payment processing capabilities that enable secure and seamless transactions. Our solutions leverage cutting-edge technologies, such as artificial intelligence and machine learning, to optimize payment processes, reduce transaction costs, and enhance customer satisfaction. With our payment processing solutions, banks and asset firms can improve operational efficiency, drive revenue growth, and deliver exceptional payment experiences.',
          },
        ],
        subtitle:
          'Find answers to common questions about our Paytech Solutions and how they can benefit banks and asset firms.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Digital Transformation Consulting',
            fa_icon: 'fa-cogs',
            subtitle:
              'Partner with us to navigate the complexities of digital transformation and leverage technology to achieve strategic goals.',
          },
          {
            title: 'Payment Processing Solutions',
            fa_icon: 'fa-money-check-alt',
            subtitle:
              'Optimize payment processing and enable secure and seamless transactions with our advanced payment solutions.',
          },
          {
            title: 'Fraud Prevention and Security',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Protect your payment systems and customer data with our robust fraud prevention and security solutions.',
          },
          {
            title: 'Mobile Payment Solutions',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'Enable convenient and secure mobile payments with our user-friendly mobile payment solutions.',
          },
          {
            title: 'Cross-Border Payment Solutions',
            fa_icon: 'fa-exchange-alt',
            subtitle:
              'Facilitate cross-border transactions and expand your global reach with our efficient cross-border payment solutions.',
          },
          {
            title: 'Payment Analytics and Insights',
            fa_icon: 'fa-analytics',
            subtitle:
              'Gain valuable insights into payment trends, customer behaviour, and business performance with our payment analytics solutions.',
          },
        ],
        overline: 'What we offer',
        subtitle:
          'Unlock new opportunities and improve operational efficiency with our comprehensive paytech solutions.',
      },
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
    },
    // Seo
    seo: {
      title: 'Paytech Solutions',
      description:
        'Discover how our paytech solutions can revolutionize your payment systems and financial operations.',
    },
    subtitle:
      'Transform your payment systems and financial operations with our innovative paytech solutions.',
  },
  {
    // Hero
    title: 'Fintech',
    slug: 'fintech',
    fa_icon: 'fa-money-bill-wave',
    hero_alt: 'Fintech',
    hero_src: '/unsplash/RYWEyXopmM4.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why is digital transformation important for banks and asset firms?',
            content:
              'Digital transformation is essential for banks and asset firms to stay competitive and meet the evolving needs of customers. It enables organisations to streamline operations, enhance customer experiences, and leverage data-driven insights for informed decision-making. By embracing digital technologies, banks and asset firms can unlock new growth opportunities, improve operational efficiency, and drive innovation in the financial industry.',
          },
          {
            id: 'faqs-2',
            title: 'What makes our Fintech Solutions unique?',
            content:
              "Our Fintech Solutions are designed specifically for the banking and asset management industry, addressing the industry's unique challenges and requirements. We combine industry expertise with technological innovation to deliver comprehensive solutions that drive digital transformation and enable organisations to thrive in the digital era. Our solutions are scalable, secure, and customizable, ensuring they align with the specific needs and objectives of each client.",
          },
          {
            id: 'faqs-3',
            title:
              'How can our Fintech Solutions benefit banks and asset firms?',
            content:
              'Our Fintech Solutions offer numerous benefits for banks and asset firms. They streamline operations, automate processes, enhance customer experiences, improve data analysis capabilities, and strengthen risk management and compliance efforts. By leveraging our fintech solutions, banks and asset firms can gain a competitive edge, drive business growth, and adapt to the changing demands of the digital financial landscape.',
          },
        ],
        subtitle:
          'Find answers to common questions about our Fintech Solutions and how they can drive digital transformation in the banking and asset management industry.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Digital Banking Solutions',
            fa_icon: 'fa-cogs',
            subtitle:
              'Transform traditional banking processes and deliver seamless digital experiences to customers with our digital banking solutions.',
          },
          {
            title: 'Investment Management Systems',
            fa_icon: 'fa-chart-line',
            subtitle:
              'Optimize asset management processes and make data-driven investment decisions with our advanced investment management systems.',
          },
          {
            title: 'Payment and Transaction Solutions',
            fa_icon: 'fa-money-check-alt',
            subtitle:
              'Simplify payment processes, enable secure transactions, and support multiple payment channels with our payment and transaction solutions.',
          },
          {
            title: 'Wealth Management Platforms',
            fa_icon: 'fa-user-tie',
            subtitle:
              'Empower wealth managers and financial advisors with our integrated wealth management platforms for efficient client management and portfolio analysis.',
          },
          {
            title: 'Risk and Compliance Solutions',
            fa_icon: 'fa-chart-pie',
            subtitle:
              'Mitigate risks and ensure regulatory compliance with our robust risk management and compliance solutions tailored to the banking and asset management industry.',
          },
          {
            title: 'Mobile Banking Applications',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'Deliver seamless mobile banking experiences and empower customers to access banking services anytime, anywhere through our mobile banking applications.',
          },
        ],
        overline: 'What we offer',
        subtitle:
          'Empower your organisation with our comprehensive fintech solutions tailored to the needs of the banking and asset management industry.',
      },
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
    },
    // Seo
    seo: {
      title: 'Fintech Solutions',
      description:
        'Discover how our fintech solutions can revolutionize the banking and asset management industry through digital transformation.',
    },
    subtitle:
      'Unlock the power of digital transformation in the banking and asset management industry with our fintech solutions.',
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
        title: 'Partnering with {appTitle}',
        hero_alt: 'Laser net over city',
        hero_src: '/images/about_nodes_above_city.png',
        overline: 'Get Started',
        subtitle:
          "{appTitle} collaborates with enterprises to leverage data and AI for competitive advantage. Utilising future-proof technologies such as Python, JavaScript, SQL, ChatGPT, and Tableau, we provide customized data science services and AI solutions. Transforming raw data into actionable insights and automating complex processes, our expertise in data science and AI helps you unlock your data's potential and excel in the digital landscape.",
      },
    },
  })
})

export const MOCK_GOVX_INDUSTRYS = []

export const MOCK_AEL_INDUSTRYS = [
  {
    title: 'Pharma and Medical Device',
    slug: 'pharma-and-medical-device',
    fa_icon: 'fa-shield-alt',
    hero_alt: 'pharma-and-medical-device',
    hero_src: '/unsplash/9lpSbMgYm0Q.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why should businesses invest in regtech solutions?',
            content:
              'Regtech solutions offer numerous benefits for businesses, including streamlined regulatory compliance processes, enhanced risk management capabilities, improved data governance and privacy, accurate compliance reporting, efficient KYC/AML processes, and robust identity verification. By leveraging regtech solutions, businesses can ensure adherence to regulatory requirements, reduce compliance costs, mitigate risks, and maintain trust with stakeholders.',
          },
          {
            id: 'faqs-2',
            title:
              'How can your Regulatory Compliance Automation solutions help businesses?',
            content:
              'Our Regulatory Compliance Automation solutions utilize advanced technologies such as artificial intelligence and machine learning to automate compliance processes. By automating repetitive tasks, ensuring data accuracy, and providing real-time monitoring and alerts, our solutions enable businesses to streamline compliance efforts, reduce manual errors, and stay up to date with regulatory changes.',
          },
          {
            id: 'faqs-3',
            title: 'What makes your KYC/AML Solutions stand out?',
            content:
              'Our KYC/AML Solutions are designed to help businesses simplify and strengthen their customer due diligence and anti-money laundering processes. We offer advanced identity verification techniques, intelligent risk scoring, and comprehensive compliance checks. Our solutions leverage data analytics and machine learning algorithms to identify potential risks and suspicious activities, enabling businesses to meet regulatory requirements and combat financial crimes effectively.',
          },
        ],
        subtitle:
          'Find answers to common questions about our Regtech Solutions and how they can benefit businesses.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Regulatory Compliance Automation',
            fa_icon: 'fa-cogs',
            subtitle:
              'Automate compliance processes and ensure adherence to regulatory requirements with our advanced regtech solutions.',
          },
          {
            title: 'Risk Management Solutions',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Identify and mitigate risks with our robust risk management solutions tailored to your business needs.',
          },
          {
            title: 'Data Governance and Privacy',
            fa_icon: 'fa-database',
            subtitle:
              'Ensure data integrity, privacy, and security in compliance with regulatory guidelines using our data governance solutions.',
          },
          {
            title: 'Compliance Reporting and Analytics',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'Generate accurate compliance reports and gain valuable insights into regulatory trends with our reporting and analytics solutions.',
          },
          {
            title: 'KYC/AML Solutions',
            fa_icon: 'fa-check-double',
            subtitle:
              'Streamline customer due diligence and anti-money laundering processes with our KYC/AML solutions.',
          },
          {
            title: 'Identity Verification',
            fa_icon: 'fa-user-shield',
            subtitle:
              'Verify customer identities and prevent fraud with our secure and efficient identity verification solutions.',
          },
        ],
        overline: 'What we offer',
        subtitle:
          'Optimize regulatory compliance and risk management with our comprehensive regtech solutions.',
      },
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
    },
    // Seo
    seo: {
      title: 'Pharma and Medical Device',
      description:
        'Discover how our pharma solutions can help businesses streamline regulatory compliance and risk management.',
    },
    subtitle:
      'Transform operations with our consulting services tailored to the pharma and med tech industry.',
  },
  {
    // Hero
    title: 'Providers',
    slug: 'providers',
    fa_icon: 'fa-file-contract',
    hero_alt: 'Insurance',
    hero_src: '/unsplash/mCqi3MljC4E.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'Frequently Asked Questions',
        items: [
          {
            id: 'faqs-1',
            title: 'How can digital solutions benefit the insurance industry?',
            content:
              'Digital solutions can greatly benefit the insurance industry by improving operational efficiency, enhancing customer experiences, enabling data-driven decision-making, and streamlining processes for faster claims processing and underwriting.',
          },
          {
            id: 'faqs-2',
            title: 'What makes your Insurtech Solutions unique?',
            content:
              'Our Insurtech Solutions are tailored to the specific needs of insurance companies, combining industry expertise with cutting-edge technology. We provide end-to-end digital transformation support, encompassing everything from operational efficiency improvements to advanced analytics and customer experience enhancements.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure data security and privacy in your solutions?',
            content:
              'Data security and privacy are paramount in our solutions. We adhere to industry best practices and implement robust security measures to protect sensitive information. We also comply with relevant data protection regulations to ensure privacy and confidentiality.',
          },
        ],
        subtitle:
          'Learn more about our Insurtech Solutions and how they can drive digital transformation in the insurance industry.',
      },
      features: {
        title: 'Our Insurtech Solutions',
        items: [
          {
            title: 'End-to-end digital transformation',
            fa_icon: 'fa-puzzle-piece',
            subtitle:
              'We help insurance companies undergo a comprehensive digital transformation journey, from process optimization to customer engagement and data analytics.',
          },
          {
            title: 'Operational efficiency',
            fa_icon: 'fa-cogs',
            subtitle:
              'We identify opportunities to streamline and automate operations, allowing insurance companies to improve efficiency, reduce costs, and enhance customer service.',
          },
          {
            title: 'Data analytics and insights',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We leverage advanced analytics and data science techniques to extract valuable insights from vast amounts of insurance data, enabling data-driven decision-making and risk assessment.',
          },
          {
            title: 'Risk management and fraud detection',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We implement robust risk management systems and employ cutting-edge technologies to detect and prevent fraudulent activities, safeguarding insurance companies and their customers.',
          },
          {
            title: 'Integration and interoperability',
            fa_icon: 'fa-exchange-alt',
            subtitle:
              'We enable seamless integration of systems and data across different platforms and stakeholders, facilitating collaboration and enhancing operational efficiency.',
          },
          {
            title: 'Enhanced customer experience',
            fa_icon: 'fa-users',
            subtitle:
              'We design and implement customer-centric digital solutions, such as self-service portals and personalized interactions, to improve customer satisfaction and retention.',
          },
        ],
        overline: 'What we offer',
        subtitle:
          'We combine cutting-edge technology, data-driven insights, and industry expertise to provide tailored digital solutions and consulting services for insurance companies.',
      },
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
    },
    // Seo
    seo: {
      title: 'Insurtech',
      description:
        'Discover how our digital solutions and consulting services can revolutionize the insurance industry.',
    },
    subtitle: 'Reduce administrative burden and burnout.',
  },
  {
    // Hero
    title: 'Technology Companies',
    slug: 'technology-companies',
    fa_icon: 'fa-mobile-alt',
    hero_alt: 'Wealthtech',
    hero_src: '/unsplash/3PyBkxgTiL0.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why should banks and asset firms invest in wealthtech solutions?',
            content:
              'Wealthtech solutions offer numerous benefits for banks and asset firms, including increased operational efficiency, improved customer experiences, enhanced risk management, and better compliance with regulatory requirements. By embracing wealthtech, banks and asset firms can stay competitive, drive innovation, and deliver superior financial services to their clients.',
          },
          {
            id: 'faqs-2',
            title:
              'How can your Digital Transformation Consulting services help banks and asset firms?',
            content:
              'Our Digital Transformation Consulting services empower banks and asset firms to navigate the complexities of digital disruption. We help identify strategic goals, assess existing systems and processes, and design customized digital solutions that streamline operations, improve customer engagement, and drive business growth. Our expertise in technology adoption and change management ensures a smooth and successful digital transformation journey.',
          },
          {
            id: 'faqs-3',
            title: 'What makes your Regulatory Compliance solutions stand out?',
            content:
              'Our Regulatory Compliance solutions are designed to address the unique regulatory challenges faced by banks and asset firms. We provide comprehensive solutions that automate compliance processes, monitor regulatory changes, and ensure adherence to regulatory requirements. Our solutions leverage advanced technologies, such as artificial intelligence and machine learning, to enhance accuracy, efficiency, and effectiveness in regulatory compliance.',
          },
        ],
        subtitle:
          'Find answers to common questions about our Wealthtech Solutions and how they can benefit banks and asset firms.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Digital Transformation Consulting',
            fa_icon: 'fa-cogs',
            subtitle:
              'Partner with us to navigate the complexities of digital transformation and leverage technology to achieve strategic goals.',
          },
          {
            title: 'Investment Analysis & Management',
            fa_icon: 'fa-line-chart',
            subtitle:
              'Make informed investment decisions and optimize your portfolio with our advanced analysis and management solutions.',
          },
          {
            title: 'Regulatory Compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Ensure compliance with regulatory requirements and automate compliance processes with our comprehensive solutions.',
          },
          {
            title: 'Robo-Advisory Services',
            fa_icon: 'fa-people-carry',
            subtitle:
              'Leverage AI-driven robo-advisory services to deliver personalized investment advice and improve client engagement.',
          },
          {
            title: 'Risk Management',
            fa_icon: 'fa-exclamation-triangle',
            subtitle:
              'Mitigate risks and optimize risk management strategies with our data-driven risk management solutions.',
          },
          {
            title: 'Mobile Banking Solutions',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'Enhance customer experiences and enable seamless mobile banking with our user-friendly mobile banking solutions.',
          },
        ],
        overline: 'What we offer',
        subtitle:
          'Unlock new opportunities and improve operational efficiency with our comprehensive wealthtech solutions.',
      },
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
    },
    // Seo
    seo: {
      title: 'Wealthtech',
      description:
        'Discover how our wealthtech solutions can revolutionize your banking and asset management operations.',
    },
    subtitle:
      'Leverage our clinical expertise to generate the right evidence quickly and robustly for your AI product.',
  },
  {
    title: 'Hospital',
    slug: 'hospital',
    fa_icon: 'fa-shield-alt',
    hero_alt: 'Regtech',
    hero_src: '/unsplash/9lpSbMgYm0Q.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title: 'Why should businesses invest in regtech solutions?',
            content:
              'Regtech solutions offer numerous benefits for businesses, including streamlined regulatory compliance processes, enhanced risk management capabilities, improved data governance and privacy, accurate compliance reporting, efficient KYC/AML processes, and robust identity verification. By leveraging regtech solutions, businesses can ensure adherence to regulatory requirements, reduce compliance costs, mitigate risks, and maintain trust with stakeholders.',
          },
          {
            id: 'faqs-2',
            title:
              'How can your Regulatory Compliance Automation solutions help businesses?',
            content:
              'Our Regulatory Compliance Automation solutions utilize advanced technologies such as artificial intelligence and machine learning to automate compliance processes. By automating repetitive tasks, ensuring data accuracy, and providing real-time monitoring and alerts, our solutions enable businesses to streamline compliance efforts, reduce manual errors, and stay up to date with regulatory changes.',
          },
          {
            id: 'faqs-3',
            title: 'What makes your KYC/AML Solutions stand out?',
            content:
              'Our KYC/AML Solutions are designed to help businesses simplify and strengthen their customer due diligence and anti-money laundering processes. We offer advanced identity verification techniques, intelligent risk scoring, and comprehensive compliance checks. Our solutions leverage data analytics and machine learning algorithms to identify potential risks and suspicious activities, enabling businesses to meet regulatory requirements and combat financial crimes effectively.',
          },
        ],
        subtitle:
          'Find answers to common questions about our Regtech Solutions and how they can benefit businesses.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Regulatory Compliance Automation',
            fa_icon: 'fa-cogs',
            subtitle:
              'Automate compliance processes and ensure adherence to regulatory requirements with our advanced regtech solutions.',
          },
          {
            title: 'Risk Management Solutions',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Identify and mitigate risks with our robust risk management solutions tailored to your business needs.',
          },
          {
            title: 'Data Governance and Privacy',
            fa_icon: 'fa-database',
            subtitle:
              'Ensure data integrity, privacy, and security in compliance with regulatory guidelines using our data governance solutions.',
          },
          {
            title: 'Compliance Reporting and Analytics',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'Generate accurate compliance reports and gain valuable insights into regulatory trends with our reporting and analytics solutions.',
          },
          {
            title: 'KYC/AML Solutions',
            fa_icon: 'fa-check-double',
            subtitle:
              'Streamline customer due diligence and anti-money laundering processes with our KYC/AML solutions.',
          },
          {
            title: 'Identity Verification',
            fa_icon: 'fa-user-shield',
            subtitle:
              'Verify customer identities and prevent fraud with our secure and efficient identity verification solutions.',
          },
        ],
        overline: 'What we offer',
        subtitle:
          'Optimize regulatory compliance and risk management with our comprehensive regtech solutions.',
      },
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
    },
    // Seo
    seo: {
      title: 'Regtech',
      description:
        'Discover how our regtech solutions can help businesses streamline regulatory compliance and risk management.',
    },
    subtitle:
      'Streamline regulatory compliance and risk management with our advanced regtech solutions.',
  },
  {
    // Hero
    title: 'Life Sciences',
    slug: 'life-sciences',
    fa_icon: 'fa-file-contract',
    hero_alt: 'Insurance',
    hero_src: '/unsplash/mCqi3MljC4E.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'Frequently Asked Questions',
        items: [
          {
            id: 'faqs-1',
            title: 'How can digital solutions benefit the insurance industry?',
            content:
              'Digital solutions can greatly benefit the insurance industry by improving operational efficiency, enhancing customer experiences, enabling data-driven decision-making, and streamlining processes for faster claims processing and underwriting.',
          },
          {
            id: 'faqs-2',
            title: 'What makes your Insurtech Solutions unique?',
            content:
              'Our Insurtech Solutions are tailored to the specific needs of insurance companies, combining industry expertise with cutting-edge technology. We provide end-to-end digital transformation support, encompassing everything from operational efficiency improvements to advanced analytics and customer experience enhancements.',
          },
          {
            id: 'faqs-3',
            title:
              'How do you ensure data security and privacy in your solutions?',
            content:
              'Data security and privacy are paramount in our solutions. We adhere to industry best practices and implement robust security measures to protect sensitive information. We also comply with relevant data protection regulations to ensure privacy and confidentiality.',
          },
        ],
        subtitle:
          'Learn more about our Insurtech Solutions and how they can drive digital transformation in the insurance industry.',
      },
      features: {
        title: 'Our Insurtech Solutions',
        items: [
          {
            title: 'End-to-end digital transformation',
            fa_icon: 'fa-puzzle-piece',
            subtitle:
              'We help insurance companies undergo a comprehensive digital transformation journey, from process optimization to customer engagement and data analytics.',
          },
          {
            title: 'Operational efficiency',
            fa_icon: 'fa-cogs',
            subtitle:
              'We identify opportunities to streamline and automate operations, allowing insurance companies to improve efficiency, reduce costs, and enhance customer service.',
          },
          {
            title: 'Data analytics and insights',
            fa_icon: 'fa-chart-bar',
            subtitle:
              'We leverage advanced analytics and data science techniques to extract valuable insights from vast amounts of insurance data, enabling data-driven decision-making and risk assessment.',
          },
          {
            title: 'Risk management and fraud detection',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'We implement robust risk management systems and employ cutting-edge technologies to detect and prevent fraudulent activities, safeguarding insurance companies and their customers.',
          },
          {
            title: 'Integration and interoperability',
            fa_icon: 'fa-exchange-alt',
            subtitle:
              'We enable seamless integration of systems and data across different platforms and stakeholders, facilitating collaboration and enhancing operational efficiency.',
          },
          {
            title: 'Enhanced customer experience',
            fa_icon: 'fa-users',
            subtitle:
              'We design and implement customer-centric digital solutions, such as self-service portals and personalized interactions, to improve customer satisfaction and retention.',
          },
        ],
        overline: 'What we offer',
        subtitle:
          'We combine cutting-edge technology, data-driven insights, and industry expertise to provide tailored digital solutions and consulting services for insurance companies.',
      },
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
    },
    // Seo
    seo: {
      title: 'Insurtech',
      description:
        'Discover how our digital solutions and consulting services can revolutionize the insurance industry.',
    },
    subtitle:
      'Transform your insurance business with our digital solutions and consulting services tailored to the insurtech industry.',
  },
  {
    // Hero
    title: 'Biology',
    slug: 'biology',
    fa_icon: 'fa-hand-holding-usd',
    hero_alt: 'Wealthtech',
    hero_src: '/unsplash/3PyBkxgTiL0.jpg',
    is_featured: true,
    // Sections
    sections: {
      faqs: {
        title: 'FAQs',
        items: [
          {
            id: 'faqs-1',
            title:
              'Why should banks and asset firms invest in wealthtech solutions?',
            content:
              'Wealthtech solutions offer numerous benefits for banks and asset firms, including increased operational efficiency, improved customer experiences, enhanced risk management, and better compliance with regulatory requirements. By embracing wealthtech, banks and asset firms can stay competitive, drive innovation, and deliver superior financial services to their clients.',
          },
          {
            id: 'faqs-2',
            title:
              'How can your Digital Transformation Consulting services help banks and asset firms?',
            content:
              'Our Digital Transformation Consulting services empower banks and asset firms to navigate the complexities of digital disruption. We help identify strategic goals, assess existing systems and processes, and design customized digital solutions that streamline operations, improve customer engagement, and drive business growth. Our expertise in technology adoption and change management ensures a smooth and successful digital transformation journey.',
          },
          {
            id: 'faqs-3',
            title: 'What makes your Regulatory Compliance solutions stand out?',
            content:
              'Our Regulatory Compliance solutions are designed to address the unique regulatory challenges faced by banks and asset firms. We provide comprehensive solutions that automate compliance processes, monitor regulatory changes, and ensure adherence to regulatory requirements. Our solutions leverage advanced technologies, such as artificial intelligence and machine learning, to enhance accuracy, efficiency, and effectiveness in regulatory compliance.',
          },
        ],
        subtitle:
          'Find answers to common questions about our Wealthtech Solutions and how they can benefit banks and asset firms.',
      },
      features: {
        title: 'Our {title} Capabilities',
        items: [
          {
            title: 'Digital Transformation Consulting',
            fa_icon: 'fa-cogs',
            subtitle:
              'Partner with us to navigate the complexities of digital transformation and leverage technology to achieve strategic goals.',
          },
          {
            title: 'Investment Analysis & Management',
            fa_icon: 'fa-line-chart',
            subtitle:
              'Make informed investment decisions and optimize your portfolio with our advanced analysis and management solutions.',
          },
          {
            title: 'Regulatory Compliance',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Ensure compliance with regulatory requirements and automate compliance processes with our comprehensive solutions.',
          },
          {
            title: 'Robo-Advisory Services',
            fa_icon: 'fa-people-carry',
            subtitle:
              'Leverage AI-driven robo-advisory services to deliver personalized investment advice and improve client engagement.',
          },
          {
            title: 'Risk Management',
            fa_icon: 'fa-exclamation-triangle',
            subtitle:
              'Mitigate risks and optimize risk management strategies with our data-driven risk management solutions.',
          },
          {
            title: 'Mobile Banking Solutions',
            fa_icon: 'fa-mobile-alt',
            subtitle:
              'Enhance customer experiences and enable seamless mobile banking with our user-friendly mobile banking solutions.',
          },
        ],
        overline: 'What we offer',
        subtitle:
          'Unlock new opportunities and improve operational efficiency with our comprehensive wealthtech solutions.',
      },
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
    },
    // Seo
    seo: {
      title: 'Wealthtech',
      description:
        'Discover how our wealthtech solutions can revolutionize your banking and asset management operations.',
    },
    subtitle:
      'Transform your banking and asset management operations with our innovative wealthtech solutions.',
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
        title: 'Partnering with {appTitle}',
        hero_alt: 'Laser net over city',
        hero_src: '/images/about_nodes_above_city.png',
        overline: 'Get Started',
        subtitle:
          "{appTitle} collaborates with enterprises to leverage data and AI for competitive advantage. Utilising future-proof technologies such as Python, JavaScript, SQL, ChatGPT, and Tableau, we provide customized data science services and AI solutions. Transforming raw data into actionable insights and automating complex processes, our expertise in data science and AI helps you unlock your data's potential and excel in the digital landscape.",
      },
    },
  })
})
export const MOCK_SRI_INDUSTRYS = []
export const MOCK_GVS_INDUSTRYS = []
export const MOCK_COASTAL_INDUSTRYS = []

export const MOCK_INDUSTRYS = {
  AEL: MOCK_AEL_INDUSTRYS,
  COASTAL: MOCK_COASTAL_INDUSTRYS,
  DATA: MOCK_DATA_INDUSTRYS,
  DESIGN: MOCK_DESIGN_INDUSTRYS,
  DIGITAL: MOCK_DIGITAL_INDUSTRYS,
  FINX: MOCK_FINX_INDUSTRYS,
  GOVX: MOCK_GOVX_INDUSTRYS,
  GROUP: MOCK_GROUP_INDUSTRYS,
  GVS: MOCK_GVS_INDUSTRYS,
  SRI: MOCK_SRI_INDUSTRYS,
  TECH: MOCK_TECH_INDUSTRYS,
}
