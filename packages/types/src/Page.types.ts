import { CrudItem } from '@gravis-os/types'

export type PageSection =
  | 'summary'
  | 'benefits'
  | 'features'
  | 'howItWorks'
  | 'faqs'
  | 'checklist'
  | 'callout'
  | 'cta'

interface Page extends CrudItem {
  // Seo
  seo: {
    title?: string
    description?: string
  }
  // Hero
  overline?: string
  title: string
  subtitle?: string
  hero_src?: string
  hero_alt?: string
  // Sections
  sections?: {
    [key in PageSection]: {
      overline?: string
      title: string
      subtitle?: string
      hero_src?: string
      hero_alt?: string
      items?: Array<{
        fa_icon?: string
        title: string
        subtitle?: string
        content?: string
      }>
    }
  }
}

export default Page
