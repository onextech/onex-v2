import { CrudItem } from '@gravis-os/types'

export type PageSection =
  | 'hero'
  | 'summary'
  | 'benefits'
  | 'features'
  | 'howItWorks'
  | 'faqs'
  | 'checklist'
  | 'callout'
  | 'cta'
  | 'halfGrids'
  | 'leftGridSticky'
  | 'rightGridSticky'
  | 'gallery'
  | 'stats'
  | 'secondaryHero'

interface Page extends CrudItem {
  // Seo
  seo_title?: string
  seo_description?: string
  seo?: {
    title?: string
    description?: string
  }

  // Hero
  overline?: string
  title: string
  subtitle?: string
  hero_src?: string
  hero_alt?: string
  html?: string

  // Display
  is_featured?: boolean
  is_hidden_from_nav?: boolean
  is_active?: boolean

  // Sections
  sections?: {
    [key in PageSection]?: {
      overline?: string
      title: string
      subtitle?: string
      hero_src?: string
      hero_alt?: string
      buttons?: Array<{
        overline?: string
        title?: string
        href?: string
      }>
      items?: Array<{
        avatar_src?: string
        avatar_alt?: string
        fa_icon?: string
        title: string
        titleProps?: any
        subtitle?: string
        overline?: string
        href?: string
        content?: string
      }>
    }
  }
}

export default Page
