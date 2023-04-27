export const MOCK_GROUP_CLIENT_TESTIMONIALS = [
  {
    title:
      'We regard the team as co-founders in our business. The entire team from team has invested an incredible amount of time to truly understand our business, our users and their needs.',
    avatar_src: '/images/about_shape_circle_radial.svg',
    avatar_alt: 'about_shape_circle_radial',
    author_title: 'Paul Sherwin',
    author_job_title: 'Frontend Lead',
    author_company_title: 'Bambu Robo Advisor',
    rating_count: 5,
  },
  {
    title:
      'We regard the team as co-founders in our business. The entire team from team has invested an incredible amount of time to truly understand our business, our users and their needs.',
    avatar_src: '/images/about_shape_circle_radial.svg',
    avatar_alt: 'about_shape_circle_radial',
    author_title: 'Sally Ong',
    author_job_title: 'Technology Manager',
    author_company_title: 'UOB',
    rating_count: 5,
  },
  {
    title:
      'We regard the team as co-founders in our business. The entire team from team has invested an incredible amount of time to truly understand our business, our users and their needs.',
    avatar_src: '/images/about_shape_circle_radial.svg',
    avatar_alt: 'about_shape_circle_radial',
    author_title: 'Minerva Lee',
    author_job_title: 'Manager (International)',
    author_company_title: 'Maritime Port Authority',
    rating_count: 5,
  },
].map((item, i) => ({
  id: i + 1,
  ...item,
}))

export const MOCK_TECH_CLIENT_TESTIMONIALS = MOCK_GROUP_CLIENT_TESTIMONIALS

export const MOCK_CLIENT_TESTIMONIALS = {
  GROUP: MOCK_GROUP_CLIENT_TESTIMONIALS,
  TECH: MOCK_TECH_CLIENT_TESTIMONIALS,
}
