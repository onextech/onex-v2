export interface SiteLocale {
  key: string
  iso_alpha_2: string
  title: string
}

interface Site {
  // Seo
  meta_title?: string
  meta_description?: string
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

  // Contact
  general_email?: string
  general_phone?: string
  general_whatsapp?: string

  // Address
  office_title?: string
  office_address?: string

  // Legal
  terms_absolute_url?: string
  privacy_absolute_url?: string
  cookies_absolute_url?: string

  // Locale
  locales?: SiteLocale[]

  // System
  nav_is_open_on_hover?: boolean

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
