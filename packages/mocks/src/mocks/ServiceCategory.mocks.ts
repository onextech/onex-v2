export const MOCK_TECH_SERVICE_CATEGORYS = [
  {
    id: 1,
    title: 'Accelerate Development',
    slug: 'accelerate-development',
    subtitle:
      'Lead your business toward a long-term vision for holistic prosperity.',
    hero_src: '/images/about_nodes.png',
    hero_alt: 'about_nodes',
  },
  {
    id: 2,
    title: 'API Integrations',
    slug: 'api-integrations',
    subtitle:
      'Intrigue customers and capture the market with captivating brand narratives.',
    hero_src: '/images/about_nodes.png',
    hero_alt: 'about_nodes',
  },
  {
    id: 3,
    title: 'User Experience',
    slug: 'user-experience',
    subtitle:
      'Design and build products, services and experiences that your customers will love.',
    hero_src: '/images/about_working_in_office.png',
    hero_alt: 'about_nodes',
  },
  {
    id: 4,
    title: 'Software Advisory',
    slug: 'software-advisory',
    subtitle:
      'Cultivate engagement through insightful content that speaks to customer needs.',
    hero_src: '/images/about_nodes.png',
    hero_alt: 'about_nodes',
  },
  {
    id: 5,
    title: 'Staff Augmentation',
    slug: 'staff-augmentation',
    subtitle:
      'Grow critical design capabilities and a culture of innovation from within your organization.',
    hero_src: '/images/about_nodes.png',
    hero_alt: 'about_nodes',
  },
  {
    id: 6,
    title: 'Frontend Development',
    slug: 'front-end-development',
    subtitle:
      'Design and build customer-focused organizations, processes and platforms for the future.',
    hero_src: '/images/about_nodes.png',
    hero_alt: 'about_nodes',
  },
].map((item, i) => ({ id: i + 1, ...item }))

export const MOCK_GROUP_SERVICE_CATEGORYS = [
  {
    id: 1,
    title: 'Drive Circular Purpose',
    slug: 'drive-circular-purpose',
    subtitle:
      'Lead your business toward a long-term vision for holistic prosperity.',
    hero_src: '/images/about_nodes.png',
    hero_alt: 'about_nodes',
  },
  {
    id: 2,
    title: 'Craft Unique Stories',
    slug: 'craft-unique-stories',
    subtitle:
      'Intrigue customers and capture the market with captivating brand narratives.',
    hero_src: '/images/about_nodes.png',
    hero_alt: 'about_nodes',
  },
  {
    id: 3,
    title: 'Build Better Products',
    slug: 'build-better-products',
    subtitle:
      'Design and build products, services and experiences that your customers will love.',
    hero_src: '/images/about_working_in_office.png',
    hero_alt: 'about_nodes',
  },
  {
    id: 4,
    title: 'Nurture Lasting Relationships',
    slug: 'nurture-lasting-relationships',
    subtitle:
      'Cultivate engagement through insightful content that speaks to customer needs.',
    hero_src: '/images/about_nodes.png',
    hero_alt: 'about_nodes',
  },
  {
    id: 5,
    title: 'Form Stronger Teams',
    slug: 'form-stronger-teams',
    subtitle:
      'Grow critical design capabilities and a culture of innovation from within your organization.',
    hero_src: '/images/about_nodes.png',
    hero_alt: 'about_nodes',
  },
  {
    id: 6,
    title: 'Master Scalable Operations',
    slug: 'master-scalable-operations',
    subtitle:
      'Design and build customer-focused organizations, processes and platforms for the future.',
    hero_src: '/images/about_nodes.png',
    hero_alt: 'about_nodes',
  },
].map((item, i) => ({ id: i + 1, ...item }))

export const MOCK_SERVICE_CATEGORYS = {
  GROUP: MOCK_GROUP_SERVICE_CATEGORYS,
  TECH: MOCK_TECH_SERVICE_CATEGORYS,
}
