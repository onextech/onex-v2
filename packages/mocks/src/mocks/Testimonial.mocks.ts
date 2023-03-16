export const MOCK_GROUP_TESTIMONIALS = [
  {
    title:
      'We regard the team as co-founders in our business. The entire team from team has invested an incredible amount of time to truly understand our business, our users and their needs.',
    avatar_src: '/images/about_shape_circle_radial.svg',
    avatar_alt: 'about_shape_circle_radial',
    author_title: 'Jared Palmer',
    author_job_title: 'CEO',
    author_company_title: 'Pet Media Group',
    rating_count: 5,
  },
].map((item, i) => ({
  id: i,
  ...item,
}))
