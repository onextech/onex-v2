import sampleSize from 'lodash/sampleSize'
import { MOCK_TECH_TAGS } from './Tag.mocks'

export const MOCK_COMMON_RESOURCE = {
  // Sections
  sections: {
    features: {
      overline: 'What We Do',
      title: 'In this guide, we cover:',
      subtitle:
        'Dive into a comprehensive guide that takes you from introduction to custom software, its construction basics, initiation processes, solution definition, through to implementation methodologies, all the way to efficient review and management strategies for your custom software development journey.',
      items: [
        {
          fa_icon: 'fa-laptop-code',
          title: 'Why Build Custom Software',
          subtitle:
            'An introduction to the realm of custom software solutions, and how it provides a competitive edge, aligns with unique business needs, and fosters innovation.',
        },
        {
          fa_icon: 'fa-rocket',
          title: 'Getting Started with Your Custom Software',
          subtitle:
            'Learn about the crucial initial steps to embarking on a custom software development project, including setting goals, defining requirements, and aligning stakeholders.',
        },
        {
          fa_icon: 'fa-hammer',
          title: 'Crafting Your Solutions',
          subtitle:
            'Dive into the intricate process of designing and planning custom software, and how our team tailors these to perfectly fit your business needs and objectives.',
        },
        {
          fa_icon: 'fa-cogs',
          title: 'Implementation Process',
          subtitle:
            'Uncover the step-by-step process of bringing your custom software to life, from coding and testing to deploying, ensuring seamless integration into your business operations.',
        },
        {
          fa_icon: 'fa-search-plus',
          title: 'Review and Managing',
          subtitle:
            'Master the art of continual improvement with ongoing software reviews, updates, and management, ensuring your custom software remains a powerful tool for your business success.',
        },
        {
          fa_icon: 'fa-lightbulb',
          title: 'Our Distinct Approach to Software',
          subtitle:
            "Discover One X Group's unique path to crafting impactful custom software solutions.",
        },
      ],
    },
    benefits: {
      overline: 'Why Us',
      title: 'What you will learn',
      subtitle:
        'Embrace the potential of bespoke software to streamline operations, drive innovation, enhance value delivery, and ensure a sustainable tech evolution tailored to your unique business environment.',
      items: [
        {
          fa_icon: 'fa-chart-line',
          title: 'Streamlined Business Operations',
          subtitle:
            'Discover how custom software can optimize your business processes for better efficiency.',
        },
        {
          fa_icon: 'fa-puzzle-piece',
          title: 'Customized Technological Assets',
          subtitle:
            'Explore the potential of technology designed uniquely for your business, driving innovation and growth.',
        },
        {
          fa_icon: 'fa-sitemap',
          title: 'Effective Deployment Strategy',
          subtitle:
            'Acquire knowledge on strategic execution, enhancing the value delivered by your tailored software.',
        },
        {
          fa_icon: 'fa-sync-alt',
          title: 'Sustainable Tech Evolution',
          subtitle:
            'Understand how to ensure your technological assets remain future-proof, keeping pace with the dynamic business environment.',
        },
      ],
    },
  },
  // Images
  avatar_src: '/resources/resource_book.png',
  avatar_alt: 'Resource_book',
  hero_src: '/resources/resource_book.png',
  hero_alt: 'Resource Book',
  // Author
  author_avatar_src: '/images/author_joel_koh.png',
  author_avatar_alt: 'about_shape_circle_radial',
  author_title: 'Joel Koh',
  author_job_title: 'Digital Lead',
  // Tags
  tags: sampleSize(MOCK_TECH_TAGS, 3),
  // Html
  html:
    '<h4>Innovation that drives real impact.</h4>\n' +
    '\n' +
    '<p>In the past decade, digital transformation and innovation completely changed the way the world does business. In the decade ahead, technological, social and environmental forces will make strategic innovation essential for the survival of any business operating at scale. For many organisations, however, innovation can feel like fumbling in the dark, leading to new products and posts that don&rsquo;t contribute to the health and longevity of the business. In an increasingly complex world, strategy and creativity are the keys to successful, impactful innovation.</p>\n' +
    '\n' +
    '<p>Strategic innovation requires organisations to have a deep understanding of the fundamental value propositions, offerings and objectives of their core business. From that foundation, they must identify the most valuable and viable paths for innovation based on their market position and internal capabilities. By aligning internal systems and stakeholders behind an innovation strategy crafted to achieve specific business impacts, organisations can empower growth and innovation from the inside out.</p>\n',
}

const mapResourceWithCommonResource = (resource, i) => ({
  ...MOCK_COMMON_RESOURCE,
  id: i + 1,
  seo: { title: resource.title, description: resource.subtitle },
  ...resource,
})

export const MOCK_TECH_RESOURCES = [
  {
    title:
      'The Modern Frontend: React & Module Federation - Essential Microservice Capabilities for Enterprise Applications',
    slug: 'the-modern-frontend-react-and-module-federation',
    filename:
      'One X Tech - The Modern Frontend_ React & Module Federation - Essential Microservice Capabilities for Enterprise Applications.pdf',
    subtitle:
      'A comprehensive guide to leveraging React and Module Federation for scalable and efficient enterprise application development.',
    avatar_src: '/resources/modern_frontend_react_module_federation_avatar.png',
    avatar_alt: 'React & Module Federation Guide for Enterprise Applications',
    hero_src: '/resources/modern_frontend_react_module_federation_avatar.png',
    hero_alt: 'React & Module Federation Guide for Enterprise Applications',
    sections: {
      features: {
        overline: 'What We Cover',
        title: 'In this guide, we delve into:',
        subtitle:
          "Uncover the modern tools and techniques in frontend development. From understanding React's capabilities to leveraging Module Federation for microservices, this guide equips you to build cutting-edge enterprise applications.",
        items: [
          {
            fa_icon: 'fa-react',
            title: 'Understanding React',
            subtitle:
              'Explore the core concepts and advantages of using React in frontend development.',
          },
          {
            fa_icon: 'fa-cubes',
            title: 'Module Federation Explained',
            subtitle:
              'Dive into the power of Module Federation for managing microservices efficiently.',
          },
          {
            fa_icon: 'fa-layer-group',
            title: 'Building Micro Frontends',
            subtitle:
              'Learn how to structure and build micro frontends that promote scalability and maintainability.',
          },
          {
            fa_icon: 'fa-sync-alt',
            title: 'Seamless Integration Strategies',
            subtitle:
              'Master the techniques for integrating React and Module Federation in existing enterprise applications.',
          },
          {
            fa_icon: 'fa-tools',
            title: 'Development and Debugging Tips',
            subtitle:
              'Gain insights into best practices for development, debugging, and optimizing performance.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Security and Compliance',
            subtitle:
              'Understand the security considerations and compliance requirements for modern frontend development.',
          },
        ],
      },
      benefits: {
        overline: 'Why This Guide',
        title: 'What you will learn',
        subtitle:
          'This guide offers practical insights into modern frontend development, focusing on React and Module Federation. Equip yourself with the skills to create robust, scalable, and responsive enterprise applications.',
        items: [
          {
            fa_icon: 'fa-ruler-combined',
            title: 'Scalable Architecture',
            subtitle:
              'Discover how to design a scalable frontend architecture that aligns with modern business needs.',
          },
          {
            fa_icon: 'fa-cloud',
            title: 'Efficient Microservices',
            subtitle:
              'Learn how Module Federation enables efficient microservice management and collaboration.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Coding Best Practices',
            subtitle:
              'Master the coding standards and best practices in React for maintainable code.',
          },
          {
            fa_icon: 'fa-user-check',
            title: 'Enhanced User Experience',
            subtitle:
              'Understand how to leverage React for creating intuitive and responsive user interfaces.',
          },
        ],
      },
    },
  },
].map(mapResourceWithCommonResource)
export const MOCK_GROUP_RESOURCES = [
  {
    title:
      'The Manager’s Guide to Implementing Custom Software Applications for Businesses',
    slug: 'the-managers-guide-to-implementing-custom-software-applications-for-businesses',
    filename:
      'One X Group - The Manager’s Guide to Implementing Custom Software Applications for Businesses.pdf',
    subtitle:
      'A step-by-step manual for business managers to understand, plan, execute, and manage custom software projects tailored for specific business needs.',
    avatar_src: '/resources/getting_started_custom_software_avatar.png',
    avatar_alt:
      'The Manager’s Guide to Implementing Custom Software Applications for Businesses',
    hero_src: '/resources/getting_started_custom_software_avatar.png',
    hero_alt:
      'The Manager’s Guide to Implementing Custom Software Applications for Businesses',
    sections: {
      features: {
        overline: 'What We Cover',
        title: 'In this guide, we explore:',
        subtitle:
          'Navigate through an insightful journey from understanding the need for custom software, to planning, development, deployment, and ongoing management. Tailored to empower managers in making informed decisions.',
        items: [
          {
            fa_icon: 'fa-laptop-code',
            title: 'Understanding Custom Software',
            subtitle:
              'Learn why custom software is essential and how it can be aligned with your business goals.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'Planning and Requirement Gathering',
            subtitle:
              'Dive into the process of defining requirements, aligning stakeholders, and setting clear project goals.',
          },
          {
            fa_icon: 'fa-drafting-compass',
            title: 'Design and Development',
            subtitle:
              'Explore the methodologies and best practices in crafting tailored software solutions.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Deployment and Integration',
            subtitle:
              'Understand the strategies to ensure seamless integration of custom software into existing workflows.',
          },
          {
            fa_icon: 'fa-wrench',
            title: 'Ongoing Management and Support',
            subtitle:
              'Master the aspects of continuous improvement, updates, and support to maintain software efficacy.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Security and Compliance',
            subtitle:
              'Grasp the essential security measures and compliance requirements specific to your industry.',
          },
        ],
      },
      benefits: {
        overline: 'Why This Guide',
        title: 'What you will learn',
        subtitle:
          'Equip yourself with the knowledge and strategies to successfully lead custom software initiatives, enhancing operational efficiency, innovation, and business value.',
        items: [
          {
            fa_icon: 'fa-chart-line',
            title: 'Tailored Solutions',
            subtitle:
              'Discover how custom software can be designed to meet the unique needs and objectives of your business.',
          },
          {
            fa_icon: 'fa-puzzle-piece',
            title: 'Strategic Execution',
            subtitle:
              'Learn the importance of a well-thought execution plan and how it aligns with business growth.',
          },
          {
            fa_icon: 'fa-sitemap',
            title: 'Seamless Integration',
            subtitle:
              'Understand how custom software integrates into your existing infrastructure.',
          },
          {
            fa_icon: 'fa-sync-alt',
            title: 'Long-term Sustainability',
            subtitle:
              'Gain insights into maintaining and scaling your custom software for long-term success.',
          },
        ],
      },
    },
  },
].map(mapResourceWithCommonResource)
export const MOCK_DATA_RESOURCES = [
  {
    title: 'The Business Guide to Generative AI Implementation',
    slug: 'the-business-guide-to-generative-ai-implementation',
    filename:
      'One X Data - The Business Guide to Generative AI Implementation.pdf',
    subtitle:
      'A hands-on guide for business leaders and managers to understand, strategize, and deploy Generative AI in their organizations.',
    avatar_src:
      '/resources/business_guide_generative_ai_implementation_avatar.png',
    avatar_alt: 'The Business Guide to Generative AI Implementation',
    hero_src:
      '/resources/business_guide_generative_ai_implementation_avatar.png',
    hero_alt: 'The Business Guide to Generative AI Implementation',
    sections: {
      features: {
        overline: 'What We Cover',
        title: 'In this guide, we explore:',
        subtitle:
          "From understanding Generative AI to strategizing its implementation, this guide equips business professionals with the insights needed to harness AI's creative potential within their organizations.",
        items: [
          {
            fa_icon: 'fa-brain',
            title: 'Understanding Generative AI',
            subtitle:
              "Explore the core concepts and applications of Generative AI in today's business environment.",
          },
          {
            fa_icon: 'fa-business-time',
            title: 'Strategic Planning for AI Implementation',
            subtitle:
              'Learn how to devise a strategic plan for implementing Generative AI that aligns with your business goals.',
          },
          {
            fa_icon: 'fa-users-cog',
            title: 'Team Collaboration & Skills Development',
            subtitle:
              'Discover how to foster collaboration and develop the necessary skills within your team for Generative AI success.',
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Measuring Impact & ROI',
            subtitle:
              'Understand how to measure the impact of Generative AI on your business and calculate the return on investment.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Ongoing Management & Optimization',
            subtitle:
              'Gain insights into managing and optimizing Generative AI models for continuous improvement and alignment with business needs.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Compliance, Ethics, and Security',
            subtitle:
              'Learn about the critical considerations for ensuring compliance, ethics, and security in your Generative AI projects.',
          },
        ],
      },
      benefits: {
        overline: 'Why This Guide',
        title: 'What you will gain',
        subtitle:
          'This guide offers a practical roadmap to Generative AI implementation in business. From strategic planning to ethical considerations, it provides the tools needed to leverage Generative AI effectively.',
        items: [
          {
            fa_icon: 'fa-directions',
            title: 'Clear Roadmap for Implementation',
            subtitle:
              'Follow a clear and structured path to implementing Generative AI within your business.',
          },
          {
            fa_icon: 'fa-dollar-sign',
            title: 'Cost Efficiency & Maximizing ROI',
            subtitle:
              'Learn how to implement Generative AI in a cost-effective manner and maximize the return on your investment.',
          },
          {
            fa_icon: 'fa-balance-scale',
            title: 'Navigating Legal & Ethical Considerations',
            subtitle:
              'Understand the legal and ethical aspects of implementing Generative AI in a business context.',
          },
          {
            fa_icon: 'fa-user-check',
            title: 'Enhancing Customer Experience',
            subtitle:
              'Discover how Generative AI can be leveraged to enhance customer experience and engagement.',
          },
        ],
      },
    },
  },
].map(mapResourceWithCommonResource)
export const MOCK_DESIGN_RESOURCES = [
  {
    title:
      'The Enterprise Guide to Unifying UI/UX with Enterprise Design Systems',
    slug: 'the-enterprise-guide-to-unifying-ui-ux-with-enterprise-design-systems',
    filename:
      'One X Design - The Enterprise Guide to Unifying UI_UX with Enterprise Design Systems.pdf',
    subtitle:
      'A comprehensive handbook for enterprise leaders and developers to seamlessly integrate UI/UX design into cohesive and scalable design systems.',
    avatar_src: '/resources/enterprise_guide_ui_ux_design_systems_avatar.png',
    avatar_alt:
      'The Enterprise Guide to Unifying UI/UX with Enterprise Design Systems',
    hero_src: '/resources/enterprise_guide_ui_ux_design_systems_avatar.png',
    hero_alt:
      'The Enterprise Guide to Unifying UI/UX with Enterprise Design Systems',
    sections: {
      features: {
        overline: 'What We Cover',
        title: 'In this guide, we explore:',
        subtitle:
          'From understanding the fundamentals of UI/UX design to building a cohesive enterprise design system, this guide offers the insights and tools needed for a unified design experience.',
        items: [
          {
            fa_icon: 'fa-palette',
            title: 'UI/UX Design Fundamentals',
            subtitle:
              'Learn the core principles of user interface and user experience design that drive engagement and satisfaction.',
          },
          {
            fa_icon: 'fa-sitemap',
            title: 'Building Enterprise Design Systems',
            subtitle:
              'Explore the process of creating and scaling design systems that align with enterprise goals and brand identity.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Collaborative Design Process',
            subtitle:
              'Discover how to foster collaboration between designers, developers, and stakeholders for a cohesive design process.',
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Measuring Design Impact',
            subtitle:
              'Understand how to assess the effectiveness of UI/UX design through key metrics and user feedback.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Integration & Maintenance',
            subtitle:
              'Gain insights into integrating and maintaining a design system within an enterprise environment for consistent user experiences.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Compliance & Accessibility',
            subtitle:
              'Learn about ensuring design compliance with regulations and enhancing accessibility for diverse user needs.',
          },
        ],
      },
      benefits: {
        overline: 'Why This Guide',
        title: 'What you will gain',
        subtitle:
          'Embrace the strategies and practical insights needed to create a unified UI/UX design system tailored to the enterprise landscape.',
        items: [
          {
            fa_icon: 'fa-tools',
            title: 'Tools & Best Practices',
            subtitle:
              'Uncover the tools, techniques, and best practices for implementing and managing enterprise design systems.',
          },
          {
            fa_icon: 'fa-sync-alt',
            title: 'Alignment with Business Goals',
            subtitle:
              'Learn how to align your design system with broader business objectives to drive value and brand consistency.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Enhanced Collaboration',
            subtitle:
              'Foster collaboration across teams and roles to ensure a unified design approach.',
          },
          {
            fa_icon: 'fa-universal-access',
            title: 'Accessibility & Inclusion',
            subtitle:
              'Understand how to create accessible designs that cater to the diverse needs of all users.',
          },
        ],
      },
    },
  },
].map(mapResourceWithCommonResource)
export const MOCK_DIGITAL_RESOURCES = []
export const MOCK_FINX_RESOURCES = [
  {
    title: 'The Top Applications of Generative AI in Finance',
    slug: 'the-top-applications-of-generative-ai-in-finance',
    filename: 'Fin X - The Top Applications of Generative AI in Finance.pdf',
    subtitle:
      'A comprehensive guide for financial firms to leverage generative AI for enhanced decision making, improved efficiency, and transformational workflows.',
    avatar_src:
      '/resources/the_top_applications_of_generative_ai_in_finance_avatar.png',
    avatar_alt: 'The Top Applications of Generative AI in Finance Report',
    hero_src:
      '/resources/the_top_applications_of_generative_ai_in_finance_avatar.png',
    hero_alt: 'The Top Applications of Generative AI in Finance Report',
    sections: {
      features: {
        overline: 'What We Cover',
        title: 'In this guide, we explore:',
        subtitle:
          'Dive into an exhaustive guide that takes you from the basics of Generative AI, its financial applications, strategic implementations, through to review and management strategies for your Generative AI integration journey.',
        items: [
          {
            fa_icon: 'fa-brain',
            title: 'The Power of Generative AI',
            subtitle:
              'An introduction to the realm of generative AI, and how it provides a competitive edge, aligns with financial modeling, and fosters innovation.',
          },
          {
            fa_icon: 'fa-money-check-alt',
            title: 'Generative AI in Finance',
            subtitle:
              'Explore the critical financial applications of generative AI, including risk assessment, fraud detection, and portfolio optimization.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Strategic Implementations',
            subtitle:
              "Dive into the process of strategizing and implementing generative AI tools, tailored to fit your financial firm's needs and objectives.",
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Quantifying the Impact',
            subtitle:
              'Learn about the metrics and indicators to assess the effectiveness of Generative AI on your financial operations.',
          },
          {
            fa_icon: 'fa-tools',
            title: 'Review and Management',
            subtitle:
              'Master the art of continual improvement with ongoing AI model reviews, updates, and management, ensuring your generative AI remains a powerful tool for your business success.',
          },
          {
            fa_icon: 'fa-comments-dollar',
            title: 'Transforming Customer Experience',
            subtitle:
              'Discover how Generative AI can revolutionize customer experience in finance, from personalized advisory services to striking a balance between customization and data privacy.',
          },
        ],
      },
      benefits: {
        overline: 'Why This Guide',
        title: 'What you will learn',
        subtitle:
          'Embrace the potential of Generative AI to streamline operations, drive innovation, enhance decision-making, and ensure a sustainable tech evolution tailored to your financial environment.',
        items: [
          {
            fa_icon: 'fa-chart-line',
            title: 'Improved Financial Decisions',
            subtitle:
              'Discover how Generative AI can optimize your financial decisions for better performance.',
          },
          {
            fa_icon: 'fa-robot',
            title: 'Innovative AI Tools',
            subtitle:
              'Explore the potential of AI tools designed uniquely for your financial needs, driving innovation and growth.',
          },
          {
            fa_icon: 'fa-sitemap',
            title: 'Effective Deployment Strategy',
            subtitle:
              'Acquire knowledge on strategic execution, enhancing the value delivered by your AI tools.',
          },
          {
            fa_icon: 'fa-sync-alt',
            title: 'Sustainable Tech Evolution',
            subtitle:
              'Understand how to ensure your technological assets remain future-proof, keeping pace with the dynamic financial environment.',
          },
        ],
      },
    },
  },
].map(mapResourceWithCommonResource)
export const MOCK_GOVX_RESOURCES = []

export const MOCK_AEL_RESOURCES = []
export const MOCK_SRI_RESOURCES = []
export const MOCK_GVS_RESOURCES = []
export const MOCK_COASTAL_RESOURCES = []

export const MOCK_RESOURCES = {
  GROUP: MOCK_GROUP_RESOURCES,
  TECH: MOCK_TECH_RESOURCES,
  DATA: MOCK_DATA_RESOURCES,
  DESIGN: MOCK_DESIGN_RESOURCES,
  DIGITAL: MOCK_DIGITAL_RESOURCES,
  FINX: MOCK_FINX_RESOURCES,
  GOVX: MOCK_GOVX_RESOURCES,
  AEL: MOCK_AEL_RESOURCES,
  SRI: MOCK_SRI_RESOURCES,
  GVS: MOCK_GVS_RESOURCES,
  COASTAL: MOCK_COASTAL_RESOURCES,
}
