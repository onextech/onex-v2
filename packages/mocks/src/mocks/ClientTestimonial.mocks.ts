export const MOCK_GROUP_CLIENT_TESTIMONIALS = [
  {
    title:
      "Their team of experts helped us navigate complex technical challenges and provided invaluable guidance throughout the development process. We're so grateful to have them on our side.",
    avatar_src: '/images/about_shape_circle_radial.svg',
    avatar_alt: 'Three circles',
    author_title: 'Paul Sherwin',
    author_job_title: 'Frontend Lead',
    author_company_title: 'Bambu Robo Advisor',
    rating_count: 5,
  },
  {
    title:
      "Working with One X Tech was a game-changer for our company. Their engineering skills are top-notch and they helped us deliver our product on time and within budget. We couldn't be happier with the results.",
    avatar_src: '/images/about_shape_circle_radial.svg',
    avatar_alt: 'Three circles',
    author_title: 'Sally Ong',
    author_job_title: 'Technology Manager',
    author_company_title: 'UOB',
    rating_count: 5,
  },
  {
    title:
      "They have a deep understanding of the latest technologies and trends and are always up for a challenge. We're so happy we found them and look forward to continuing to work with them in the future.",
    avatar_src: '/images/about_shape_circle_radial.svg',
    avatar_alt: 'Three circles',
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

export const MOCK_DATA_CLIENT_TESTIMONIALS = MOCK_GROUP_CLIENT_TESTIMONIALS

export const MOCK_DESIGN_CLIENT_TESTIMONIALS = MOCK_GROUP_CLIENT_TESTIMONIALS

export const MOCK_DIGITAL_CLIENT_TESTIMONIALS = MOCK_GROUP_CLIENT_TESTIMONIALS

export const MOCK_FINX_CLIENT_TESTIMONIALS = MOCK_GROUP_CLIENT_TESTIMONIALS

export const MOCK_GOVX_CLIENT_TESTIMONIALS = MOCK_GROUP_CLIENT_TESTIMONIALS

export const MOCK_CLIENT_TESTIMONIALS = {
  GROUP: MOCK_GROUP_CLIENT_TESTIMONIALS,
  TECH: MOCK_TECH_CLIENT_TESTIMONIALS,
  DATA: MOCK_DATA_CLIENT_TESTIMONIALS,
  DESIGN: MOCK_DESIGN_CLIENT_TESTIMONIALS,
  DIGITAL: MOCK_DIGITAL_CLIENT_TESTIMONIALS,
  FINX: MOCK_FINX_CLIENT_TESTIMONIALS,
  GOVX: MOCK_GOVX_CLIENT_TESTIMONIALS,
}
