export interface SiteLocale {
  key: string
  iso_alpha_2: string
  title: string
}

interface Site {
  // Seo
  seo_title?: string
  seo_description?: string
  google_tag_manager_id?: string

  // Logo
  logo_src?: string
  logo_alt?: string
  logo_width?: number
  logo_height?: number

  // App
  title?: string
  absolute_url?: string

  // Company
  company_title?: string
  company_absolute_url?: string

  // Cta
  cta_title?: string
  cta_button_title?: string

  // Contact
  general_email?: string
  general_phone?: string
  general_whatsapp?: string

  // Address
  office_title?: string
  office_address?: string

  // Locale
  locales?: SiteLocale[]

  // System
  nav_is_open_on_hover?: boolean
  nav_is_ecosystem_visible?: boolean

  // Social Media
  social_media_github_url?: string
  social_media_medium_url?: string
  social_media_behance_url?: string
  social_media_twitter_url?: string
  social_media_dribbble_url?: string
  social_media_facebook_url?: string
  social_media_linkedin_url?: string
  social_media_instagram_url?: string
  social_media_youtube_url?: string
}

export default Site
