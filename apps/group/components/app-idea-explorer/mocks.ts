export const appCategories = ['Business', 'Productivity', 'Finance']

export const appTypesByCategory: { [key: string]: string[] } = {
  Business: [
    'Marketplace',
    'Retail',
    'Auction',
    'Subscription Box',
    'CRM',
    'Workforce Management',
    'Inventory Management',
    'Supply Chain Management',
    'Business Intelligence',
    'Invoicing',
    'Process Automation',
    'Corporate Training',
    'Customer Support',
    'Others',
  ],
  Finance: [
    'Banking',
    'Investing',
    'Budgeting',
    'Cryptocurrency',
    'Expense Management',
    'Others',
  ],
  Productivity: [
    'Task Management',
    'Note-taking',
    'Time Tracking',
    'Project Management',
    'Digital Asset Management',
    'Others',
  ],
}

export const appIndustrys = [
  'Technology',
  'Healthcare',
  'Education',
  'Finance',
  'Retail',
  'Manufacturing',
  'Entertainment',
  'Hospitality',
  'Real Estate',
  'Transportation',
  'Agriculture',
  'Energy',
  'Legal',
  'Construction',
  'Consumer Goods',
  'Telecommunications',
  'Media',
  'Pharmaceuticals',
  'Automotive',
]

export const appTargetAudiences = ['Employees', 'Clients', 'Consumers']

export const appPlatforms = ['Web', 'Mobile', 'Web & Mobile']

export const appIdeas = [
  {
    title: 'Inventory Management System',
    description: 'Streamline inventory tracking and order management for SMEs',
    formValues: {
      appCategory: 'Business',
      appIdea:
        'A cloud-based inventory management system with real-time tracking, automated reordering, and integration with popular e-commerce platforms',
      appType: 'Inventory Management',
      industry: 'Retail',
      platform: 'Web',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'Employee Scheduling Software',
    description:
      'Optimize staff scheduling and time tracking for small businesses',
    formValues: {
      appCategory: 'Business',
      appIdea:
        'An intuitive employee scheduling app with shift management, time tracking, and payroll integration for small to medium-sized businesses',
      appType: 'Workforce Management',
      industry: 'Hospitality',
      platform: 'Web & Mobile',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'Business Expense Tracker',
    description: 'Simplify expense reporting and financial management for SMEs',
    formValues: {
      appCategory: 'Finance',
      appIdea:
        'A mobile-first expense tracking app with receipt scanning, automated categorization, and integration with popular accounting software',
      appType: 'Expense Management',
      industry: 'Finance',
      platform: 'Mobile',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'CRM for Small Businesses',
    description: 'Manage customer relationships and sales pipeline effectively',
    formValues: {
      appCategory: 'Business',
      appIdea:
        'A user-friendly CRM system tailored for small businesses, featuring contact management, deal tracking, and email marketing integration',
      appType: 'CRM',
      industry: 'Technology',
      platform: 'Web',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'Project Management Tool',
    description: 'Streamline project planning and team collaboration for SMEs',
    formValues: {
      appCategory: 'Productivity',
      appIdea:
        'A comprehensive project management platform with task assignment, time tracking, and Gantt charts, designed for small to medium-sized teams',
      appType: 'Project Management',
      industry: 'Technology',
      platform: 'Web & Mobile',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'Supply Chain Management System',
    description: 'Optimize supply chain operations for small manufacturers',
    formValues: {
      appCategory: 'Business',
      appIdea:
        'An end-to-end supply chain management solution for small manufacturers, featuring demand forecasting, supplier management, and logistics optimization',
      appType: 'Supply Chain Management',
      industry: 'Manufacturing',
      platform: 'Web',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'Business Intelligence Dashboard',
    description:
      'Visualize key business metrics and make data-driven decisions',
    formValues: {
      appCategory: 'Business',
      appIdea:
        'A customizable business intelligence dashboard that integrates with various data sources to provide real-time insights and analytics for SME owners',
      appType: 'Business Intelligence',
      industry: 'Technology',
      platform: 'Web',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'Invoicing and Billing Software',
    description:
      'Automate invoicing and payment collection for small businesses',
    formValues: {
      appCategory: 'Finance',
      appIdea:
        'A user-friendly invoicing and billing system with customizable templates, recurring invoices, and integration with payment gateways',
      appType: 'Others',
      industry: 'Finance',
      platform: 'Web',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'Employee Training Platform',
    description:
      'Facilitate online learning and skill development for SME staff',
    formValues: {
      appCategory: 'Business',
      appIdea:
        'A comprehensive e-learning platform for employee training, featuring course creation tools, progress tracking, and certification management',
      appType: 'Corporate Training',
      industry: 'Education',
      platform: 'Web',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'Customer Support Ticketing System',
    description: 'Improve customer service efficiency for growing businesses',
    formValues: {
      appCategory: 'Business',
      appIdea:
        'A scalable customer support ticketing system with automated ticket routing, knowledge base integration, and performance analytics',
      appType: 'Customer Support',
      industry: 'Technology',
      platform: 'Web',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'Digital Asset Management Tool',
    description: 'Organize and share digital assets across small teams',
    formValues: {
      appCategory: 'Productivity',
      appIdea:
        'A cloud-based digital asset management solution for SMEs, featuring advanced search, version control, and secure sharing capabilities',
      appType: 'Digital Asset Management',
      industry: 'Technology',
      platform: 'Web',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'Business Process Automation Platform',
    description: 'Streamline and automate repetitive tasks for SMEs',
    formValues: {
      appCategory: 'Business',
      appIdea:
        'A no-code business process automation platform that allows SMEs to create custom workflows, automate tasks, and integrate with existing tools',
      appType: 'Process Automation',
      industry: 'Technology',
      platform: 'Web',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'Customer Feedback Collection Tool',
    description: 'Gather and analyze customer feedback to improve services',
    formValues: {
      appCategory: 'Business',
      appIdea:
        'A user-friendly tool for collecting customer feedback through surveys and polls, with analytics features to track sentiments and trends',
      appType: 'Feedback Management',
      industry: 'Retail',
      platform: 'Web & Mobile',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'Social Media Management Platform',
    description:
      'Manage and schedule social media posts across multiple channels',
    formValues: {
      appCategory: 'Marketing',
      appIdea:
        'An integrated platform for scheduling, managing, and analyzing social media content across various platforms like Facebook, Twitter, and Instagram',
      appType: 'Social Media Management',
      industry: 'Marketing',
      platform: 'Web',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'E-commerce Store Builder',
    description: 'Create and manage online stores with ease',
    formValues: {
      appCategory: 'E-commerce',
      appIdea:
        'A drag-and-drop website builder specifically designed for small businesses to create and manage their e-commerce stores without coding',
      appType: 'E-commerce',
      industry: 'Retail',
      platform: 'Web',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'Virtual Meeting Scheduler',
    description: 'Simplify scheduling for virtual meetings and appointments',
    formValues: {
      appCategory: 'Productivity',
      appIdea:
        'A scheduling tool that integrates with calendars to automate meeting bookings, send reminders, and manage availability',
      appType: 'Scheduling',
      industry: 'Business Services',
      platform: 'Web & Mobile',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'Freelancer Management System',
    description: 'Manage freelance projects and payments efficiently',
    formValues: {
      appCategory: 'Business',
      appIdea:
        'A platform for businesses to manage freelance work, including project tracking, payment processing, and communication tools',
      appType: 'Project Management',
      industry: 'Creative Services',
      platform: 'Web',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'Marketing Automation Tool',
    description: 'Automate marketing campaigns and customer engagement',
    formValues: {
      appCategory: 'Marketing',
      appIdea:
        'An all-in-one marketing automation platform that allows businesses to create, execute, and analyze multi-channel marketing campaigns',
      appType: 'Marketing Automation',
      industry: 'Marketing',
      platform: 'Web',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'Customer Loyalty Program App',
    description: 'Enhance customer retention through loyalty rewards',
    formValues: {
      appCategory: 'Business',
      appIdea:
        'A mobile app for businesses to create and manage customer loyalty programs, offering rewards and tracking customer engagement',
      appType: 'Loyalty Program',
      industry: 'Retail',
      platform: 'Mobile',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'Document Signing Solution',
    description: 'Facilitate secure electronic signatures for contracts',
    formValues: {
      appCategory: 'Business',
      appIdea:
        'A secure document signing platform that allows users to send, sign, and manage contracts electronically, ensuring compliance and security',
      appType: 'Document Management',
      industry: 'Legal',
      platform: 'Web',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'Online Course Marketplace',
    description: 'Create and sell online courses to a global audience',
    formValues: {
      appCategory: 'Education',
      appIdea:
        'A platform that allows instructors to create and market their online courses while providing learners with diverse educational content',
      appType: 'E-learning',
      industry: 'Education',
      platform: 'Web',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'Real Estate Listing Platform',
    description: 'Connect buyers and sellers in the real estate market',
    formValues: {
      appCategory: 'Real Estate',
      appIdea:
        'An online platform for listing properties, connecting buyers with sellers, and providing tools for virtual tours and price comparisons',
      appType: 'Real Estate',
      industry: 'Real Estate',
      platform: 'Web & Mobile',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'Health and Safety Compliance Tracker',
    description: 'Ensure workplace safety and compliance with regulations',
    formValues: {
      appCategory: 'Business',
      appIdea:
        'A compliance tracking tool that helps businesses monitor health and safety regulations, conduct audits, and manage incident reports',
      appType: 'Compliance Management',
      industry: 'Manufacturing',
      platform: 'Web',
      targetAudience: 'Clients',
    },
  },
  {
    title: 'Personal Finance Management App',
    description: 'Help users manage personal finances and budgeting',
    formValues: {
      appCategory: 'Finance',
      appIdea:
        'A mobile app for individuals to track expenses, set budgets, and manage savings with personalized financial advice',
      appType: 'Budgeting',
      industry: 'Finance',
      platform: 'Mobile',
      targetAudience: 'Clients',
    },
  },
]

export const appTechstack = {
  frontend: 'React',
  framework: 'Next.js',
  backend: 'AWS/Serverless',
  database: 'PostgreSQL',
  language: 'Javascript',
}
