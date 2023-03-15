export const MOCK_TECH_SERVICES = [
  {
    title: 'Digital Product Design',
    slug: 'digital-product-design',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
  },
  {
    title: 'Agile Development Teams',
    slug: 'agile-development-teams',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
  },
  {
    title: 'Cloud Engineering & DevOps',
    slug: 'cloud-engineering-devops',
    subtitle: 'Let certified engineers kick-start your cloud operations',
  },
  {
    title: 'Web Development',
    slug: 'web-development',
    subtitle:
      'Build or scale competitive products ready for future growth and millions of users.',
  },
  {
    title: 'Software Architecture',
    slug: 'software-architecture',
    subtitle:
      'Reach the software flexibility needed to scale by optimizing your architecture.',
  },
  {
    title: 'Mobile Development',
    slug: 'mobile-development',
    subtitle:
      'Offer your customers an iOS/Android hybride mobile app they will want to use.',
  },
  {
    title: 'Quality Assurance',
    slug: 'quality-assurance',
    subtitle:
      'Secure the highest ratings for your product by running extensive QA tests.',
  },
  {
    title: 'Project Management',
    slug: 'project-management',
    subtitle:
      'Collect your data, filter it, and take out game-changing insights on your product and team productivity.',
  },
  {
    title: 'App Modernization',
    slug: 'app-modernization',
    subtitle:
      'Make your systems fast, efficient, and scalable to prepare for further product growth.',
  },
].map((item, i) => ({ id: i, ...item }))

export const MOCK_GROUP_SERVICES = [
  {
    title: 'Enterprise Applications',
    slug: 'enterprise-applications',
    category_id: 1,
  },
  {
    title: 'Managed Applications',
    slug: 'managed-applications',
    category_id: 1,
  },
  {
    title: 'Application Modernization',
    slug: 'application-modernization',
    category_id: 1,
  },
  {
    title: 'Research & Development',
    slug: 'research-development',
    category_id: 2,
  },
  { title: 'API Development', slug: 'api-development', category_id: 2 },
  {
    title: 'Microfrontend Development',
    slug: 'microfrontend-development',
    category_id: 2,
  },
  { title: 'Managed DevOps', slug: 'managed-devops', category_id: 3 },
  {
    title: 'Infrastructure Managed Services',
    slug: 'infrastructure-managed-services',
    category_id: 3,
  },
  {
    title: 'Cloud Strategy & Design',
    slug: 'cloud-strategy-design',
    category_id: 3,
  },
  {
    title: 'Digital Strategy',
    slug: 'digital-strategy',
    category_id: 4,
  },
  {
    title: 'Transformation & Delivery',
    slug: 'transformation-delivery',
    category_id: 4,
  },
  {
    title: 'Architecture Design',
    slug: 'architecture-design',
    category_id: 4,
  },
  {
    title: 'Staff Augmentation',
    slug: 'staff-augmentation',
    category_id: 5,
  },
  {
    title: 'Managed Product Teams',
    slug: 'managed-product-teams',
    category_id: 5,
  },
  {
    title: 'Service Automation',
    slug: 'managed-product-teams',
    category_id: 5,
  },
  {
    title: 'Performance Optimization',
    slug: 'performance-optimization',
    category_id: 6,
  },
  {
    title: 'Production Readiness',
    slug: 'production-readiness',
    category_id: 6,
  },
  {
    title: 'Testing Automation',
    slug: 'testing-automation',
    category_id: 6,
  },
].map((item, i) => ({ id: i, ...item }))
