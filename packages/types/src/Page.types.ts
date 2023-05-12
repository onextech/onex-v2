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
  is_draft?: boolean

  // Sections
  sections?: {
    [key in PageSection]?: {
      overline?: string
      title: string
      subtitle?: string
      hero_src?: string
      hero_alt?: string
      items?: Array<{
        fa_icon?: string
        title: string
        titleProps?: any
        subtitle?: string
        content?: string
      }>
    }
  }
}

export default Page
