export const MOCK_GROUP_CLIENT_TESTIMONIALS = [
  {
    title:
      "One X Tech delivered our vessel tracking system 2 weeks ahead of schedule. The solution now processes 50,000+ data points daily and reduced our manual reporting time by 70%. Their deep understanding of maritime technologies made them the perfect partner.",
    avatar_src: '/images/about_shape_circle_radial.svg',
    avatar_alt: 'Three circles',
    author_title: 'Mandy Lim',
    author_job_title: 'Digital Transformation Manager',
    author_company_title: 'Maritime Port Authority',
    rating_count: 5,
  },
  {
    title:
      "Our loan origination platform was delivered 3 weeks ahead of schedule, processing 10,000+ applications in the first month. We reduced manual processing time by 60% and improved approval accuracy. Their expertise in fintech development is exceptional.",
    avatar_src: '/images/about_shape_circle_radial.svg',
    avatar_alt: 'Three circles',
    author_title: 'Allen Lim',
    author_job_title: 'Technical Lead',
    author_company_title: 'Robo Advisor',
    rating_count: 5,
  },
  {
    title:
      "One X Tech built our internal workflow automation system that now saves our team 200+ hours per month. The project was delivered on time and 15% under budget. Their engineering skills and commitment to quality exceeded our expectations.",
    avatar_src: '/images/about_shape_circle_radial.svg',
    avatar_alt: 'Three circles',
    author_title: 'Sarah Tan',
    author_job_title: 'Technology Manager',
    author_company_title: 'UOB',
    rating_count: 5,
  },
].map((item, i) => ({
  id: i + 1,
  ...item,
})) 

// Austalian names
const MOCK_GROUP_AU_AUTHOR_TITLES = ['Christopher Brown', 'Olivia Wilson', 'Daniel Moore']
const MOCK_GROUP_AU_AUTHOR_COMPANY_TITLES = ['Canon', 'Bose', 'Sunny Coast Collective']
export const MOCK_GROUP_AU_CLIENT_TESTIMONIALS = MOCK_GROUP_CLIENT_TESTIMONIALS.map((item, i) => ({
  ...item,
  author_title: MOCK_GROUP_AU_AUTHOR_TITLES[i],
  author_company_title: MOCK_GROUP_AU_AUTHOR_COMPANY_TITLES[i],
}))

// UAE names
const MOCK_GROUP_AE_AUTHOR_TITLES = ['Ahmed Al-Khattab', 'Fatima Al-Khattab', 'Mohammed Al-Khattab']
const MOCK_GROUP_AE_AUTHOR_COMPANY_TITLES = ['Adalfi', 'TVS Motors', 'Kava & Chai']
export const MOCK_GROUP_AE_CLIENT_TESTIMONIALS = MOCK_GROUP_CLIENT_TESTIMONIALS.map((item, i) => ({
  ...item,
  author_title: MOCK_GROUP_AE_AUTHOR_TITLES[i],
  author_company_title: MOCK_GROUP_AE_AUTHOR_COMPANY_TITLES[i],
}))

export const MOCK_TECH_CLIENT_TESTIMONIALS = MOCK_GROUP_CLIENT_TESTIMONIALS

export const MOCK_DATA_CLIENT_TESTIMONIALS = MOCK_GROUP_CLIENT_TESTIMONIALS

export const MOCK_DESIGN_CLIENT_TESTIMONIALS = MOCK_GROUP_CLIENT_TESTIMONIALS

export const MOCK_DIGITAL_CLIENT_TESTIMONIALS = MOCK_GROUP_CLIENT_TESTIMONIALS

export const MOCK_FINX_CLIENT_TESTIMONIALS = MOCK_GROUP_CLIENT_TESTIMONIALS

export const MOCK_GOVX_CLIENT_TESTIMONIALS = MOCK_GROUP_CLIENT_TESTIMONIALS

export const MOCK_AEL_CLIENT_TESTIMONIALS = MOCK_GROUP_CLIENT_TESTIMONIALS
export const MOCK_SRI_CLIENT_TESTIMONIALS = MOCK_GROUP_CLIENT_TESTIMONIALS
export const MOCK_GVS_CLIENT_TESTIMONIALS = MOCK_GROUP_CLIENT_TESTIMONIALS
export const MOCK_COASTAL_CLIENT_TESTIMONIALS = MOCK_GROUP_CLIENT_TESTIMONIALS

export const MOCK_CLIENT_TESTIMONIALS = {
  GROUP: MOCK_GROUP_CLIENT_TESTIMONIALS,
  GROUP_AU: MOCK_GROUP_AU_CLIENT_TESTIMONIALS,
  GROUP_AE: MOCK_GROUP_AE_CLIENT_TESTIMONIALS,
  TECH: MOCK_TECH_CLIENT_TESTIMONIALS,
  DATA: MOCK_DATA_CLIENT_TESTIMONIALS,
  DESIGN: MOCK_DESIGN_CLIENT_TESTIMONIALS,
  DIGITAL: MOCK_DIGITAL_CLIENT_TESTIMONIALS,
  FINX: MOCK_FINX_CLIENT_TESTIMONIALS,
  GOVX: MOCK_GOVX_CLIENT_TESTIMONIALS,
  AEL: MOCK_AEL_CLIENT_TESTIMONIALS,
  SRI: MOCK_SRI_CLIENT_TESTIMONIALS,
  GVS: MOCK_GVS_CLIENT_TESTIMONIALS,
  COASTAL: MOCK_COASTAL_CLIENT_TESTIMONIALS,
}
