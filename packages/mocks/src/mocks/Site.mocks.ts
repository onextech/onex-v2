import { Site } from '@onex/types'

export const MOCK_COMMON_SITE = {
  // Company
  company_title: 'One X Group Pte. Ltd.',
  company_absolute_url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://onexgroup.co',

  // Logo
  logo_src: '/logo.svg',
  logo_alt: 'One X Tech logo',

  // Locale
  locales: [
    { key: 'sg', iso_alpha_2: 'sg', title: 'Singapore' },
    { key: 'us', iso_alpha_2: 'us', title: 'United States' },
    { key: 'au', iso_alpha_2: 'au', title: 'Australia' },
    { key: 'jp', iso_alpha_2: 'jp', title: 'Japan' },
    { key: 'id', iso_alpha_2: 'id', title: 'Indonesia' },
    { key: 'th', iso_alpha_2: 'th', title: 'Thailand' },
  ],

  // System
  nav_is_open_on_hover: true,
  nav_is_ecosystem_visible: true,

  // Cta
  cta_title: 'Build the future with One X Group',
  cta_button_title: 'Get Started',

  // Social Media
  social_media_github_url: 'https://github.com/onextech',
  social_media_medium_url: 'https://medium.com/one-x-tech',
  social_media_behance_url: 'https://www.behance.net/onextech',
  social_media_twitter_url: 'https://twitter.com/1XTech',
  social_media_dribbble_url: 'https://dribbble.com/1XT',
  social_media_facebook_url: 'https://www.facebook.com/onextech',
  social_media_linkedin_url: 'https://www.linkedin.com/company/one-x-tech',
  social_media_instagram_url: 'https://www.instagram.com/onextech',
  social_media_youtube_url: 'https://www.youtube.com/onextech',

  // Address
  office_title: 'Singapore (Asia Pacific)',
  office_address: '71 Robinson Road WeWork #13-159 Singapore 068895',
}

export const MOCK_GROUP_SITE: Site = {
  ...MOCK_COMMON_SITE,

  // System
  nav_is_ecosystem_visible: true,

  // Seo
  google_tag_manager_id: '',
  logo_alt: 'One X Group logo',

  // Logo
  logo_width: 110,
  logo_height: 13,

  // disable testimonials
  disable_testimonials: true,

  // App
  title: 'One X Group',
  absolute_url: 'https://onexgroup.co',

  // Contact
  general_email: 'info@onexgroup.co',
  general_phone: '+65 8922 8242',
  general_whatsapp: '+65 8922 8242',

  nav_items: [
    { key: 'services', title: 'Our Services', subtitle: 'Explore our comprehensive services focused on empowering enterprises through custom software development' },
    { key: 'insights', title: 'Insights', subtitle: 'Discover the key to software development success with the latest best practices and techniques' },
    { key: 'industries', title: 'Industries We Serve', subtitle: 'Your new team\'s cross-industry knowledge will level up your project' },
    { key: 'ecosystem', title: 'Our Ecosystem', subtitle: 'Learn more about our other functions' },
    { key: 'company', title: 'Get to Know us Better', subtitle: 'Learn more about the core values that drive our business and people to success' },
  ]

}

export const MOCK_TECH_SITE = {
  ...MOCK_GROUP_SITE,

  disable_testimonials: false,

  // System
  nav_is_ecosystem_visible: false,

  logo_alt: 'One X Tech logo',

  // App
  title: 'One X Tech',
  absolute_url: 'https://www.onextech.com',

  // Cta
  cta_title: 'Modernize Enterprise UI with One X Tech.',
  cta_button_title: 'Schedule a Call',

  general_email: 'info@onextech.com',

  // Logo
  logo_width: 95,
  logo_height: 13,

  nav_items: [
    { key: 'services', title: 'Our Services', subtitle: 'Explore our comprehensive services focused on empowering enterprises through frontend development' },
    { key: 'insights', title: 'Insights', subtitle: 'Discover the key to frontend development success with the latest best practices and techniques' },
    { key: 'industries', title: 'Industries We Serve', subtitle: 'Your new team\'s cross-industry knowledge will level up your project.' },
    { key: 'technologies', title: 'Our Technologies', subtitle: 'Bet on technologies that will work even years from now.' },
    { key: 'company', title: 'Get to Know us Better', subtitle: 'Learn more about the core values that drive our business and people to success.' },
  ]

}

export const MOCK_DESIGN_SITE = {
  ...MOCK_GROUP_SITE,

  disable_testimonials: false,

  // System
  nav_is_ecosystem_visible: false,

  logo_alt: 'One X Design logo',

  // App
  title: 'One X Design',
  absolute_url: 'https://www.onexdesign.com',

  // Cta
  cta_title: 'Transform the Enterprise Experience with One X Design.',
  cta_button_title: 'Schedule a Call',

  general_email: 'info@onexdesign.com',

  // Logo
  logo_width: 120,
  logo_height: 13,

  nav_items: [
    { key: 'services', title: 'Our Services', subtitle: 'Explore our comprehensive services focused on empowering enterprises through quality designing' },
    { key: 'insights', title: 'Insights', subtitle: 'Discover the key to custom design success with the latest best practices and techniques' },
    { key: 'industries', title: 'Industries We Serve', subtitle: 'Your new team\'s cross-industry knowledge will level up your project' },
    { key: 'ecosystem', title: 'Our Ecosystem', subtitle: 'Learn more about our other functions' },
    { key: 'company', title: 'Get to Know us Better', subtitle: 'Learn more about the core values that drive our business and people to success' },
  ]

}

export const MOCK_DATA_SITE = {
  ...MOCK_GROUP_SITE,

  disable_testimonials: false,

  // System
  nav_is_ecosystem_visible: false,

  // App
  title: 'One X Data',
  absolute_url: 'https://www.onexdata.com',

  logo_alt: 'One X Data logo',

  // Cta
  cta_title: 'Lead the Digital Revolution with One X Data',
  cta_button_title: 'Schedule a Call',

  general_email: 'info@onexdata.co',

  // Logo
  logo_width: 95,
  logo_height: 13,

  nav_items: [
    { key: 'services', title: 'Our Services', subtitle: 'Explore our comprehensive services focused on empowering enterprises using advanced AI and data solutions' },
    { key: 'insights', title: 'Insights', subtitle: 'Discover the key to custom design success with the latest best practices and techniques' },
    { key: 'industries', title: 'Industries We Serve', subtitle: 'Your new team\'s cross-industry knowledge will level up your project' },
    { key: 'ecosystem', title: 'Our Ecosystem', subtitle: 'Learn more about our other functions' },
    { key: 'technologies', title: 'Our Technologies', subtitle: 'Bet on technologies that will work even years from now.' },
    { key: 'company', title: 'Get to Know us Better', subtitle: 'Learn more about the core values that drive our business and people to success' },
  ]
  
}

export const MOCK_SITE = {
  GROUP: MOCK_GROUP_SITE,
  TECH: MOCK_TECH_SITE,
  DATA: MOCK_DATA_SITE,
  DESIGN: MOCK_DESIGN_SITE
}
