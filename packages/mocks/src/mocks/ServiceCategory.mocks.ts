export const MOCK_TECH_SERVICE_CATEGORYS = [
  {
    id: 1,
    title: 'Accelerate Development',
    slug: 'accelerate-development',
    subtitle:
      'Seamlessly streamline your development workflow and accelerate time-to-market.',
    hero_src: 'https://source.unsplash.com/NqOInJ-ttqM/1600x900',
    hero_alt: 'about_nodes',
  },
  {
    id: 2,
    title: 'Modern Frontend Engineering',
    slug: 'modern-frontend-engineering',
    subtitle:
      'Develop rich user interfaces using modern technologies and frameworks.',
    hero_src: 'https://source.unsplash.com/LJ9KY8pIH3E/1600x900',
    hero_alt: 'about_nodes',
  },
  {
    id: 3,
    title: 'Product Team Augmentation',
    slug: 'product-team-augmentation',
    subtitle: 'Reach product goals with engaged software development experts.',
    hero_src: 'https://source.unsplash.com/XkKCui44iM0/1600x900',
    hero_alt: 'about_nodes',
  },
]

export const MOCK_GROUP_SERVICE_CATEGORYS = [
  {
    id: 1,
    title: 'Advisory',
    slug: 'advisory',
    subtitle:
      'Partnering for Progress and Growth.',
    hero_src: '/images/about_nodes.png',
    hero_alt: 'about_nodes',
  },
  {
    id: 2,
    title: 'Engineering',
    slug: 'engineering',
    subtitle:
      'Innovating the Future with Precision and Creativity.',
    hero_src: '/images/about_nodes.png',
    hero_alt: 'about_nodes',
  },
  {
    id: 3,
    title: 'Data',
    slug: 'data',
    subtitle:
      'Transforming data into value.',
    hero_src: '/images/about_working_in_office.png',
    hero_alt: 'about_nodes',
  },
].map((item, i) => ({ id: i + 1, ...item }))

export const MOCK_SERVICE_CATEGORYS = {
  GROUP: MOCK_GROUP_SERVICE_CATEGORYS,
  TECH: MOCK_TECH_SERVICE_CATEGORYS,
}
