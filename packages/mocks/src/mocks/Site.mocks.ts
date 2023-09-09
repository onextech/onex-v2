import { Site, DEFAULT_THEME_MODE_ENUM } from '@gravis-os/types'

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
  ],

  // System
  nav_is_open_on_hover: true,
  nav_is_ecosystem_visible: true,

  // Cta
  cta_title: 'Build the future with One X Group',
  cta_button_title: 'Get Started',

  // Address
  office_title: 'Singapore (Asia Pacific)',
  office_address: '71 Robinson Road, Singapore 068895',

  // Default theme mode
  default_theme_mode: DEFAULT_THEME_MODE_ENUM.USER_LOCAL_STORAGE,
}

export const MOCK_GROUP_SITE: Site = {
  ...MOCK_COMMON_SITE,

  // System
  nav_is_ecosystem_visible: false,

  // Seo
  google_tag_manager_id: '',
  logo_alt: 'One X Group logo',

  // Logo
  logo_width: 110,
  logo_height: 13,

  // disable testimonials
  disable_testimonials: true,

  // disable faqs
  disable_faqs_on_home_page: true,

  // App
  title: 'One X Group',
  absolute_url: 'https://www.onexgroup.co',

  // Contact
  general_email: 'info@onexgroup.co',
  general_phone: '+65 8922 8242',
  general_whatsapp: '+65 8808 2673',

  // Socials
  social_media_linkedin_url: 'https://www.linkedin.com/company/one-x-grp',

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
}

export const MOCK_TECH_SITE = {
  ...MOCK_GROUP_SITE,

  disable_testimonials: false,

  disable_faqs_on_home_page: false,

  // System
  nav_is_ecosystem_visible: false,

  logo_alt: 'One X Tech logo',

  // App
  title: 'One X Tech',
  absolute_url: 'https://www.onextech.com',

  // Cta
  cta_title: 'Modernise Enterprise UI with One X Tech.',
  cta_button_title: 'Schedule a Call',

  general_email: 'info@onextech.com',

  // Socials

  social_media_github_url: 'https://github.com/onextech',
  social_media_medium_url: 'https://medium.com/one-x-tech',
  social_media_behance_url: 'https://www.behance.net/onextech',
  social_media_twitter_url: 'https://twitter.com/1XTech',
  social_media_dribbble_url: 'https://dribbble.com/1XT',
  social_media_facebook_url: 'https://www.facebook.com/onextech',
  social_media_linkedin_url: 'https://www.linkedin.com/company/one-x-t',
  social_media_instagram_url: 'https://www.instagram.com/onextech',
  social_media_youtube_url: 'https://www.youtube.com/onextech',

  // Logo
  logo_width: 95,
  logo_height: 13,

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
}

export const MOCK_DESIGN_SITE = {
  ...MOCK_GROUP_SITE,

  disable_testimonials: false,

  disable_faqs_on_home_page: false,

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

  // Socials
  social_media_linkedin_url: 'https://www.linkedin.com/company/one-x-design',

  // Logo
  logo_width: 108,
  logo_height: 13,

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

  default_theme_mode: DEFAULT_THEME_MODE_ENUM.LIGHT,
}

export const MOCK_DATA_SITE = {
  ...MOCK_GROUP_SITE,

  disable_testimonials: false,

  disable_faqs_on_home_page: false,

  // System
  nav_is_ecosystem_visible: false,

  // App
  title: 'One X Data',
  absolute_url: 'https://www.onexdata.com',

  logo_alt: 'One X Data logo',

  // Cta
  cta_title: 'Build Business Intelligence with One X Data',
  cta_button_title: 'Schedule a Call',

  general_email: 'info@onexdata.co',

  // Socials
  social_media_linkedin_url: 'https://www.linkedin.com/company/one-x-data',

  // Logo
  logo_width: 95,
  logo_height: 13,

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
}

export const MOCK_DIGITAL_SITE = {
  ...MOCK_GROUP_SITE,

  disable_testimonials: false,

  disable_faqs_on_home_page: false,

  // System
  nav_is_ecosystem_visible: false,

  logo_alt: 'One X Digital logo',

  // App
  title: 'One X Digital',
  absolute_url: 'https://www.onexdigital.co',

  // Cta
  cta_title: 'Modernise Enterprise Marketing with One X Digital.',
  cta_button_title: 'Schedule a Call',

  general_email: 'info@onexdigital.co',

  // Socials

  social_media_github_url: 'https://github.com/onextech',
  social_media_medium_url: 'https://medium.com/one-x-tech',
  social_media_behance_url: 'https://www.behance.net/onextech',
  social_media_twitter_url: 'https://twitter.com/1XTech',
  social_media_dribbble_url: 'https://dribbble.com/1XT',
  social_media_facebook_url: 'https://www.facebook.com/onextech',
  social_media_linkedin_url: 'https://www.linkedin.com/company/one-x-digital',
  social_media_instagram_url: 'https://www.instagram.com/onextech',
  social_media_youtube_url: 'https://www.youtube.com/onextech',

  // Logo
  logo_width: 120,
  logo_height: 13,

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
}

export const MOCK_FINX_SITE = {
  ...MOCK_GROUP_SITE,

  disable_testimonials: false,

  disable_faqs_on_home_page: false,

  // System
  nav_is_ecosystem_visible: false,

  logo_alt: 'FinX logo',

  // App
  title: 'Fin X',
  absolute_url: 'https://www.finx.ai',

  // Cta
  cta_title: 'Drive Financial Excellence with Fin X',
  cta_button_title: 'Schedule a Call',

  general_email: 'info@finx.ai',

  // Socials

  social_media_github_url: 'https://github.com/onextech',
  social_media_medium_url: 'https://medium.com/one-x-tech',
  social_media_behance_url: 'https://www.behance.net/onextech',
  social_media_twitter_url: 'https://twitter.com/1XTech',
  social_media_dribbble_url: 'https://dribbble.com/1XT',
  social_media_facebook_url: 'https://www.facebook.com/onextech',
  social_media_linkedin_url: 'https://www.linkedin.com/company/finx-ai',
  social_media_instagram_url: 'https://www.instagram.com/onextech',
  social_media_youtube_url: 'https://www.youtube.com/onextech',

  // Logo
  logo_width: 60,
  logo_height: 13,

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
}

export const MOCK_GOVX_SITE = {
  ...MOCK_GROUP_SITE,

  disable_testimonials: false,

  disable_faqs_on_home_page: false,

  // System
  nav_is_ecosystem_visible: false,

  logo_alt: 'GovX logo',

  // App
  title: 'Gov X',
  absolute_url: 'https://www.govx.ai',

  // Cta
  cta_title: 'Transform Public Sectors with AI-Driven Innovation by Gov X.',
  cta_button_title: 'Schedule a Call',

  general_email: 'info@govx.ai',

  // Socials

  social_media_github_url: 'https://github.com/onextech',
  social_media_medium_url: 'https://medium.com/one-x-tech',
  social_media_behance_url: 'https://www.behance.net/onextech',
  social_media_twitter_url: 'https://twitter.com/1XTech',
  social_media_dribbble_url: 'https://dribbble.com/1XT',
  social_media_facebook_url: 'https://www.facebook.com/onextech',
  social_media_linkedin_url: 'https://www.linkedin.com/company/govx-ai',
  social_media_instagram_url: 'https://www.instagram.com/onextech',
  social_media_youtube_url: 'https://www.youtube.com/onextech',

  // Logo
  logo_width: 60,
  logo_height: 13,

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
}

export const MOCK_AEL_SITE: Site = {
  ...MOCK_GROUP_SITE,

  // Logo
  logo_src: '/logo.png',
  logo_alt: 'AetherLabs logo',
  logo_width: 148,
  logo_height: 20,
  logo_offset_y: 2,

  // disable testimonials
  disable_testimonials: true,

  // disable faqs
  disable_faqs_on_home_page: true,

  // App
  company_title: 'Aether Labs Inc.',
  title: 'Aether Labs',
  absolute_url: 'https://www.aetherlabs.ai',

  // Contact
  general_email: 'info@aetherlabs.ai',
  general_phone: '+1 8922 8242',
  general_whatsapp: '+1 8922 8242',

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

  // Locale
  locales: [
    { key: 'us', iso_alpha_2: 'us', title: 'United States' },
    { key: 'sg', iso_alpha_2: 'sg', title: 'Singapore' },
  ],

  // Cta
  cta_title: 'Advance Health with Aether Labs',
  cta_button_title: 'Get Started',
}
export const MOCK_SRI_SITE = {
  ...MOCK_GROUP_SITE,

  disable_testimonials: false,

  disable_faqs_on_home_page: false,

  // System
  nav_is_ecosystem_visible: false,

  logo_alt: 'GovX logo',

  // App
  title: 'Gov X',
  absolute_url: 'https://www.govx.ai',

  // Cta
  cta_title: 'Transform Public Sectors with AI-Driven Innovation by Gov X.',
  cta_button_title: 'Schedule a Call',

  general_email: 'info@govx.ai',

  // Socials

  social_media_github_url: 'https://github.com/onextech',
  social_media_medium_url: 'https://medium.com/one-x-tech',
  social_media_behance_url: 'https://www.behance.net/onextech',
  social_media_twitter_url: 'https://twitter.com/1XTech',
  social_media_dribbble_url: 'https://dribbble.com/1XT',
  social_media_facebook_url: 'https://www.facebook.com/onextech',
  social_media_linkedin_url: 'https://www.linkedin.com/company/govx-ai',
  social_media_instagram_url: 'https://www.instagram.com/onextech',
  social_media_youtube_url: 'https://www.youtube.com/onextech',

  // Logo
  logo_width: 60,
  logo_height: 13,

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
}
export const MOCK_GVS_SITE = {
  ...MOCK_GROUP_SITE,

  disable_testimonials: false,

  disable_faqs_on_home_page: false,

  // System
  nav_is_ecosystem_visible: false,

  logo_alt: 'GovX logo',

  // App
  title: 'Gov X',
  absolute_url: 'https://www.govx.ai',

  // Cta
  cta_title: 'Transform Public Sectors with AI-Driven Innovation by Gov X.',
  cta_button_title: 'Schedule a Call',

  general_email: 'info@govx.ai',

  // Socials

  social_media_github_url: 'https://github.com/onextech',
  social_media_medium_url: 'https://medium.com/one-x-tech',
  social_media_behance_url: 'https://www.behance.net/onextech',
  social_media_twitter_url: 'https://twitter.com/1XTech',
  social_media_dribbble_url: 'https://dribbble.com/1XT',
  social_media_facebook_url: 'https://www.facebook.com/onextech',
  social_media_linkedin_url: 'https://www.linkedin.com/company/govx-ai',
  social_media_instagram_url: 'https://www.instagram.com/onextech',
  social_media_youtube_url: 'https://www.youtube.com/onextech',

  // Logo
  logo_width: 60,
  logo_height: 13,

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
}
export const MOCK_COASTAL_SITE = {
  ...MOCK_GROUP_SITE,

  disable_testimonials: false,

  disable_faqs_on_home_page: false,

  // System
  nav_is_ecosystem_visible: false,

  logo_alt: 'GovX logo',

  // App
  title: 'Gov X',
  absolute_url: 'https://www.govx.ai',

  // Cta
  cta_title: 'Transform Public Sectors with AI-Driven Innovation by Gov X.',
  cta_button_title: 'Schedule a Call',

  general_email: 'info@govx.ai',

  // Socials

  social_media_github_url: 'https://github.com/onextech',
  social_media_medium_url: 'https://medium.com/one-x-tech',
  social_media_behance_url: 'https://www.behance.net/onextech',
  social_media_twitter_url: 'https://twitter.com/1XTech',
  social_media_dribbble_url: 'https://dribbble.com/1XT',
  social_media_facebook_url: 'https://www.facebook.com/onextech',
  social_media_linkedin_url: 'https://www.linkedin.com/company/govx-ai',
  social_media_instagram_url: 'https://www.instagram.com/onextech',
  social_media_youtube_url: 'https://www.youtube.com/onextech',

  // Logo
  logo_width: 60,
  logo_height: 13,

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
}

export const MOCK_SITE = {
  GROUP: MOCK_GROUP_SITE,
  TECH: MOCK_TECH_SITE,
  DATA: MOCK_DATA_SITE,
  DESIGN: MOCK_DESIGN_SITE,
  DIGITAL: MOCK_DIGITAL_SITE,
  FINX: MOCK_FINX_SITE,
  GOVX: MOCK_GOVX_SITE,
  AEL: MOCK_AEL_SITE,
  SRI: MOCK_SRI_SITE,
  GVS: MOCK_GVS_SITE,
  COASTAL: MOCK_COASTAL_SITE,
}
