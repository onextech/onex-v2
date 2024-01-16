import { DEFAULT_THEME_MODE_ENUM, Site } from '@gravis-os/types'

export const MOCK_COMMON_SITE = {
  company_absolute_url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://www.onexgroup.co',
  // Company
  company_title: 'One X Group Pte. Ltd.',

  cta_button_title: 'Get Started',
  // Cta
  cta_title: 'Build the future with One X Group',

  // Default theme mode
  default_theme_mode: DEFAULT_THEME_MODE_ENUM.USER_LOCAL_STORAGE,

  // Locale
  locales: [
    { title: 'Singapore', iso_alpha_2: 'sg', key: 'sg' },
    { title: 'United States', iso_alpha_2: 'us', key: 'us' },
    { title: 'Australia', iso_alpha_2: 'au', key: 'au' },
    { title: 'Japan', iso_alpha_2: 'jp', key: 'jp' },
  ],
  logo_alt: 'One X Tech logo',

  // Logo
  logo_src: '/logo.svg',
  nav_is_ecosystem_visible: true,

  // System
  nav_is_open_on_hover: true,
  office_address: '71 Robinson Road, Singapore 068895',

  // Address
  office_title: 'Singapore (Asia Pacific)',
}

export const MOCK_GROUP_SITE: Site = {
  ...MOCK_COMMON_SITE,

  // App
  title: 'One X Group',

  absolute_url: 'https://www.onexgroup.co',
  // disable faqs
  disable_faqs_on_home_page: true,

  // disable testimonials
  disable_testimonials: true,
  // Contact
  general_email: 'info@onexgroup.co',

  general_phone: '+65 8922 8242',

  general_whatsapp: '+65 8808 2673',

  // Seo
  google_tag_manager_id: '',
  logo_alt: 'One X Group logo',

  logo_height: 13,
  // Logo
  logo_width: 110,
  // System
  nav_is_ecosystem_visible: false,

  nav_items: [
    {
      id: 'services',
      title: 'Our Services',
      subtitle:
        'Explore our comprehensive services focused on empowering enterprises through custom software development',
    },
    {
      id: 'insights',
      title: 'Insights',
      subtitle:
        'Discover the key to software development success with the latest best practices and techniques',
    },
    {
      id: 'industries',
      title: 'Industries We Serve',
      subtitle:
        "Your new team's cross-industry knowledge will level up your project",
    },
    {
      id: 'ecosystem',
      title: 'Our Ecosystem',
      subtitle: 'Learn more about our other functions',
    },
    {
      id: 'company',
      title: 'Get to Know us Better',
      subtitle:
        'Learn more about the core values that drive our business and people to success',
    },
  ],

  // Socials
  social_media_linkedin_url: 'https://www.linkedin.com/company/one-x-grp',
}

export const MOCK_TECH_SITE = {
  ...MOCK_GROUP_SITE,

  // App
  title: 'One X Tech',

  absolute_url: 'https://www.onextech.com',

  cta_button_title: 'Schedule a Call',

  // Cta
  cta_title: 'Modernise Enterprise UI with One X Tech.',

  disable_faqs_on_home_page: false,
  disable_testimonials: false,

  general_email: 'info@onextech.com',
  logo_alt: 'One X Tech logo',

  logo_height: 13,

  // Socials

  // Logo
  logo_width: 95,
  // System
  nav_is_ecosystem_visible: false,
  nav_items: [
    {
      id: 'services',
      title: 'Our Services',
      subtitle:
        'Explore our comprehensive services focused on empowering enterprises through frontend development',
    },
    {
      id: 'insights',
      title: 'Insights',
      subtitle:
        'Discover the key to frontend development success with the latest best practices and techniques',
    },
    {
      id: 'industries',
      title: 'Industries We Serve',
      subtitle:
        "Your new team's cross-industry knowledge will level up your project.",
    },
    {
      id: 'technologies',
      title: 'Our Technologies',
      subtitle: 'Bet on technologies that will work even years from now.',
    },
    {
      id: 'company',
      title: 'Get to Know us Better',
      subtitle:
        'Learn more about the core values that drive our business and people to success.',
    },
  ],
  social_media_behance_url: 'https://www.behance.net/onextech',
  social_media_dribbble_url: 'https://dribbble.com/1XT',
  social_media_facebook_url: 'https://www.facebook.com/onextech',
  social_media_github_url: 'https://github.com/onextech',
  social_media_instagram_url: 'https://www.instagram.com/onextech',
  social_media_linkedin_url: 'https://www.linkedin.com/company/one-x-t',

  social_media_medium_url: 'https://medium.com/one-x-tech',
  social_media_twitter_url: 'https://twitter.com/1XTech',

  social_media_youtube_url: 'https://www.youtube.com/onextech',
}

export const MOCK_DESIGN_SITE = {
  ...MOCK_GROUP_SITE,

  // App
  title: 'One X Design',

  absolute_url: 'https://www.onexdesign.com',

  cta_button_title: 'Schedule a Call',

  // Cta
  cta_title: 'Transform the Enterprise Experience with One X Design.',

  default_theme_mode: DEFAULT_THEME_MODE_ENUM.LIGHT,
  disable_faqs_on_home_page: false,

  disable_testimonials: false,
  general_email: 'info@onexdesign.com',

  logo_alt: 'One X Design logo',

  logo_height: 13,

  // Logo
  logo_width: 108,
  // System
  nav_is_ecosystem_visible: false,

  nav_items: [
    {
      id: 'services',
      title: 'Our Services',
      subtitle:
        'Explore our comprehensive services focused on empowering enterprises through quality designing',
    },
    {
      id: 'insights',
      title: 'Insights',
      subtitle:
        'Discover the key to custom design success with the latest best practices and techniques',
    },
    {
      id: 'industries',
      title: 'Industries We Serve',
      subtitle:
        "Your new team's cross-industry knowledge will level up your project",
    },
    {
      id: 'ecosystem',
      title: 'Our Ecosystem',
      subtitle: 'Learn more about our other functions',
    },
    {
      id: 'company',
      title: 'Get to Know us Better',
      subtitle:
        'Learn more about the core values that drive our business and people to success',
    },
  ],

  // Socials
  social_media_linkedin_url: 'https://www.linkedin.com/company/one-x-design',
}

export const MOCK_DATA_SITE = {
  ...MOCK_GROUP_SITE,

  // App
  title: 'One X Data',

  absolute_url: 'https://www.onexdata.co',

  cta_button_title: 'Schedule a Call',

  // Cta
  cta_title: 'Build Business Intelligence with One X Data',
  disable_faqs_on_home_page: false,

  disable_testimonials: false,

  general_email: 'info@onexdata.co',
  logo_alt: 'One X Data logo',

  logo_height: 13,

  // Logo
  logo_width: 95,

  // System
  nav_is_ecosystem_visible: false,
  nav_items: [
    {
      id: 'services',
      title: 'Our Services',
      subtitle:
        'Explore our comprehensive services focused on empowering enterprises using advanced AI and data solutions',
    },
    {
      id: 'insights',
      title: 'Insights',
      subtitle:
        'Discover the key to custom design success with the latest best practices and techniques',
    },
    {
      id: 'industries',
      title: 'Industries We Serve',
      subtitle:
        "Your new team's cross-industry knowledge will level up your project",
    },
    {
      id: 'ecosystem',
      title: 'Our Ecosystem',
      subtitle: 'Learn more about our other functions',
    },
    {
      id: 'technologies',
      title: 'Our Technologies',
      subtitle: 'Bet on technologies that will work even years from now.',
    },
    {
      id: 'company',
      title: 'Get to Know us Better',
      subtitle:
        'Learn more about the core values that drive our business and people to success',
    },
  ],

  // Socials
  social_media_linkedin_url: 'https://www.linkedin.com/company/one-x-data',
}

export const MOCK_DIGITAL_SITE = {
  ...MOCK_GROUP_SITE,

  // App
  title: 'One X Digital',

  absolute_url: 'https://www.onexdigital.co',

  cta_button_title: 'Schedule a Call',

  // Cta
  cta_title: 'Modernise Enterprise Marketing with One X Digital.',

  disable_faqs_on_home_page: false,
  disable_testimonials: false,

  general_email: 'info@onexdigital.co',
  logo_alt: 'One X Digital logo',

  logo_height: 13,

  // Socials

  // Logo
  logo_width: 120,
  // System
  nav_is_ecosystem_visible: false,
  nav_items: [
    {
      id: 'services',
      title: 'Our Services',
      subtitle:
        'Explore our comprehensive services focused on empowering enterprises through expert digital development',
    },
    {
      id: 'insights',
      title: 'Insights',
      subtitle:
        'Discover the key to frontend development success with the latest best practices and techniques',
    },
    {
      id: 'industries',
      title: 'Industries We Serve',
      subtitle:
        "Your new team's cross-industry knowledge will level up your project.",
    },
    {
      id: 'technologies',
      title: 'Our Technologies',
      subtitle: 'Bet on technologies that will work even years from now.',
    },
    {
      id: 'company',
      title: 'Get to Know us Better',
      subtitle:
        'Learn more about the core values that drive our business and people to success.',
    },
  ],
  social_media_behance_url: 'https://www.behance.net/onextech',
  social_media_dribbble_url: 'https://dribbble.com/1XT',
  social_media_facebook_url: 'https://www.facebook.com/onextech',
  social_media_github_url: 'https://github.com/onextech',
  social_media_instagram_url: 'https://www.instagram.com/onextech',
  social_media_linkedin_url: 'https://www.linkedin.com/company/one-x-digital',

  social_media_medium_url: 'https://medium.com/one-x-tech',
  social_media_twitter_url: 'https://twitter.com/1XTech',

  social_media_youtube_url: 'https://www.youtube.com/onextech',
}

export const MOCK_FINX_SITE = {
  ...MOCK_GROUP_SITE,

  // App
  title: 'Fin X',

  absolute_url: 'https://www.finx.ai',

  cta_button_title: 'Schedule a Call',

  // Cta
  cta_title: 'Drive Financial Excellence with Fin X',

  disable_faqs_on_home_page: false,
  disable_testimonials: false,

  general_email: 'info@finx.ai',
  logo_alt: 'FinX logo',

  logo_height: 13,

  // Socials

  // Logo
  logo_width: 60,
  // System
  nav_is_ecosystem_visible: false,
  nav_items: [
    {
      id: 'services',
      title: 'Our Services',
      subtitle:
        'Explore our comprehensive services focused on transforming financial enterprises through digital innovation',
    },
    {
      id: 'insights',
      title: 'Insights',
      subtitle:
        'Discover the key to frontend development success with the latest best practices and techniques',
    },
    {
      id: 'industries',
      title: 'Industries We Serve',
      subtitle:
        "Your new team's cross-industry knowledge will level up your project.",
    },
    {
      id: 'technologies',
      title: 'Our Technologies',
      subtitle: 'Bet on technologies that will work even years from now.',
    },
    {
      id: 'company',
      title: 'Get to Know us Better',
      subtitle:
        'Learn more about the core values that drive our business and people to success.',
    },
  ],
  social_media_behance_url: 'https://www.behance.net/onextech',
  social_media_dribbble_url: 'https://dribbble.com/1XT',
  social_media_facebook_url: 'https://www.facebook.com/onextech',
  social_media_github_url: 'https://github.com/onextech',
  social_media_instagram_url: 'https://www.instagram.com/onextech',
  social_media_linkedin_url: 'https://www.linkedin.com/company/finx-ai',

  social_media_medium_url: 'https://medium.com/one-x-tech',
  social_media_twitter_url: 'https://twitter.com/1XTech',

  social_media_youtube_url: 'https://www.youtube.com/onextech',
}

export const MOCK_GOVX_SITE = {
  ...MOCK_GROUP_SITE,

  // App
  title: 'Gov X',

  absolute_url: 'https://www.govx.ai',

  cta_button_title: 'Schedule a Call',

  // Cta
  cta_title: 'Transform Public Sectors with AI-Driven Innovation by Gov X.',

  disable_faqs_on_home_page: false,
  disable_testimonials: false,

  general_email: 'info@govx.ai',
  logo_alt: 'GovX logo',

  logo_height: 13,

  // Socials

  // Logo
  logo_width: 60,
  // System
  nav_is_ecosystem_visible: false,
  nav_items: [
    {
      id: 'services',
      title: 'Our Services',
      subtitle:
        'Explore our comprehensive services focused on transforming public sector enterprises through digital innovation',
    },
    {
      id: 'insights',
      title: 'Insights',
      subtitle:
        'Discover the key to frontend development success with the latest best practices and techniques',
    },
    {
      id: 'industries',
      title: 'Industries We Serve',
      subtitle:
        "Your new team's cross-industry knowledge will level up your project.",
    },
    {
      id: 'technologies',
      title: 'Our Technologies',
      subtitle: 'Bet on technologies that will work even years from now.',
    },
    {
      id: 'company',
      title: 'Get to Know us Better',
      subtitle:
        'Learn more about the core values that drive our business and people to success.',
    },
  ],
  social_media_behance_url: 'https://www.behance.net/onextech',
  social_media_dribbble_url: 'https://dribbble.com/1XT',
  social_media_facebook_url: 'https://www.facebook.com/onextech',
  social_media_github_url: 'https://github.com/onextech',
  social_media_instagram_url: 'https://www.instagram.com/onextech',
  social_media_linkedin_url: 'https://www.linkedin.com/company/govx-ai',

  social_media_medium_url: 'https://medium.com/one-x-tech',
  social_media_twitter_url: 'https://twitter.com/1XTech',

  social_media_youtube_url: 'https://www.youtube.com/onextech',
}

export const MOCK_AEL_SITE: Site = {
  ...MOCK_GROUP_SITE,

  title: 'Aether Labs',
  absolute_url: 'https://www.aetherlabs.ai',
  // App
  company_title: 'Aether Labs Inc.',
  cta_button_title: 'Get Started',
  // Cta
  cta_title: 'We’d love to hear from you.',

  // disable faqs
  disable_faqs_on_home_page: true,
  // TODO@Joel: Type this in GVS
  // @ts-ignore
  disable_service_categorys: true,

  // disable testimonials
  disable_testimonials: true,

  // Contact
  general_email: 'info@aetherlabs.ai',
  general_phone: '+1 (650) 294-3882',
  general_whatsapp: '+1 (650) 294-3882',

  // Locale
  locales: [{ title: 'United States', iso_alpha_2: 'us', key: 'us' }],
  logo_alt: 'AetherLabs logo',
  logo_height: 20,

  logo_offset_y: 2,

  // Logo
  logo_src: '/logo.png',

  logo_width: 148,
  nav_items: [
    {
      id: 'services',
      title: 'Our Services',
      subtitle:
        'Explore our comprehensive services focused on empowering enterprises through custom software development',
    },
    {
      id: 'insights',
      title: 'Insights',
      subtitle:
        'Discover the key to software development success with the latest best practices and techniques',
    },
    {
      id: 'industries',
      title: 'Industries We Serve',
      subtitle:
        "Your new team's cross-industry knowledge will level up your project",
    },
    {
      id: 'company',
      title: 'Get to Know us Better',
      subtitle:
        'Learn more about the core values that drive our business and people to success',
    },
  ],
}
export const MOCK_SRI_SITE = {
  ...MOCK_GROUP_SITE,

  // App
  title: 'Gov X',

  absolute_url: 'https://www.govx.ai',

  cta_button_title: 'Schedule a Call',

  // Cta
  cta_title: 'Transform Public Sectors with AI-Driven Innovation by Gov X.',

  disable_faqs_on_home_page: false,
  disable_testimonials: false,

  general_email: 'info@govx.ai',
  logo_alt: 'GovX logo',

  logo_height: 13,

  // Socials

  // Logo
  logo_width: 60,
  // System
  nav_is_ecosystem_visible: false,
  nav_items: [
    {
      id: 'services',
      title: 'Our Services',
      subtitle:
        'Explore our comprehensive services focused on transforming public sector enterprises through digital innovation',
    },
    {
      id: 'insights',
      title: 'Insights',
      subtitle:
        'Discover the key to frontend development success with the latest best practices and techniques',
    },
    {
      id: 'industries',
      title: 'Industries We Serve',
      subtitle:
        "Your new team's cross-industry knowledge will level up your project.",
    },
    {
      id: 'technologies',
      title: 'Our Technologies',
      subtitle: 'Bet on technologies that will work even years from now.',
    },
    {
      id: 'company',
      title: 'Get to Know us Better',
      subtitle:
        'Learn more about the core values that drive our business and people to success.',
    },
  ],
  social_media_behance_url: 'https://www.behance.net/onextech',
  social_media_dribbble_url: 'https://dribbble.com/1XT',
  social_media_facebook_url: 'https://www.facebook.com/onextech',
  social_media_github_url: 'https://github.com/onextech',
  social_media_instagram_url: 'https://www.instagram.com/onextech',
  social_media_linkedin_url: 'https://www.linkedin.com/company/govx-ai',

  social_media_medium_url: 'https://medium.com/one-x-tech',
  social_media_twitter_url: 'https://twitter.com/1XTech',

  social_media_youtube_url: 'https://www.youtube.com/onextech',
}
export const MOCK_GVS_SITE = {
  ...MOCK_GROUP_SITE,

  // App
  title: 'Gov X',

  absolute_url: 'https://www.govx.ai',

  cta_button_title: 'Schedule a Call',

  // Cta
  cta_title: 'Transform Public Sectors with AI-Driven Innovation by Gov X.',

  disable_faqs_on_home_page: false,
  disable_testimonials: false,

  general_email: 'info@govx.ai',
  logo_alt: 'GovX logo',

  logo_height: 13,

  // Socials

  // Logo
  logo_width: 60,
  // System
  nav_is_ecosystem_visible: false,
  nav_items: [
    {
      id: 'services',
      title: 'Our Services',
      subtitle:
        'Explore our comprehensive services focused on transforming public sector enterprises through digital innovation',
    },
    {
      id: 'insights',
      title: 'Insights',
      subtitle:
        'Discover the key to frontend development success with the latest best practices and techniques',
    },
    {
      id: 'industries',
      title: 'Industries We Serve',
      subtitle:
        "Your new team's cross-industry knowledge will level up your project.",
    },
    {
      id: 'technologies',
      title: 'Our Technologies',
      subtitle: 'Bet on technologies that will work even years from now.',
    },
    {
      id: 'company',
      title: 'Get to Know us Better',
      subtitle:
        'Learn more about the core values that drive our business and people to success.',
    },
  ],
  social_media_behance_url: 'https://www.behance.net/onextech',
  social_media_dribbble_url: 'https://dribbble.com/1XT',
  social_media_facebook_url: 'https://www.facebook.com/onextech',
  social_media_github_url: 'https://github.com/onextech',
  social_media_instagram_url: 'https://www.instagram.com/onextech',
  social_media_linkedin_url: 'https://www.linkedin.com/company/govx-ai',

  social_media_medium_url: 'https://medium.com/one-x-tech',
  social_media_twitter_url: 'https://twitter.com/1XTech',

  social_media_youtube_url: 'https://www.youtube.com/onextech',
}
export const MOCK_COASTAL_SITE = {
  ...MOCK_GROUP_SITE,

  // App
  title: 'Gov X',

  absolute_url: 'https://www.govx.ai',

  cta_button_title: 'Schedule a Call',

  // Cta
  cta_title: 'Transform Public Sectors with AI-Driven Innovation by Gov X.',

  disable_faqs_on_home_page: false,
  disable_testimonials: false,

  general_email: 'info@govx.ai',
  logo_alt: 'GovX logo',

  logo_height: 13,

  // Socials

  // Logo
  logo_width: 60,
  // System
  nav_is_ecosystem_visible: false,
  nav_items: [
    {
      id: 'services',
      title: 'Our Services',
      subtitle:
        'Explore our comprehensive services focused on transforming public sector enterprises through digital innovation',
    },
    {
      id: 'insights',
      title: 'Insights',
      subtitle:
        'Discover the key to frontend development success with the latest best practices and techniques',
    },
    {
      id: 'industries',
      title: 'Industries We Serve',
      subtitle:
        "Your new team's cross-industry knowledge will level up your project.",
    },
    {
      id: 'technologies',
      title: 'Our Technologies',
      subtitle: 'Bet on technologies that will work even years from now.',
    },
    {
      id: 'company',
      title: 'Get to Know us Better',
      subtitle:
        'Learn more about the core values that drive our business and people to success.',
    },
  ],
  social_media_behance_url: 'https://www.behance.net/onextech',
  social_media_dribbble_url: 'https://dribbble.com/1XT',
  social_media_facebook_url: 'https://www.facebook.com/onextech',
  social_media_github_url: 'https://github.com/onextech',
  social_media_instagram_url: 'https://www.instagram.com/onextech',
  social_media_linkedin_url: 'https://www.linkedin.com/company/govx-ai',

  social_media_medium_url: 'https://medium.com/one-x-tech',
  social_media_twitter_url: 'https://twitter.com/1XTech',

  social_media_youtube_url: 'https://www.youtube.com/onextech',
}

export const MOCK_SITE = {
  AEL: MOCK_AEL_SITE,
  COASTAL: MOCK_COASTAL_SITE,
  DATA: MOCK_DATA_SITE,
  DESIGN: MOCK_DESIGN_SITE,
  DIGITAL: MOCK_DIGITAL_SITE,
  FINX: MOCK_FINX_SITE,
  GOVX: MOCK_GOVX_SITE,
  GROUP: MOCK_GROUP_SITE,
  GVS: MOCK_GVS_SITE,
  SRI: MOCK_SRI_SITE,
  TECH: MOCK_TECH_SITE,
}
