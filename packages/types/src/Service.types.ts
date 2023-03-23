import { CrudItem } from '@gravis-os/types'
import ServiceCategory from './ServiceCategory.types'
import Page from './Page.types'

interface Service extends Page {
  category_id?: number
  category?: ServiceCategory
  hero_src?: string
  hero_alt?: string
  // Tags
  tags?: CrudItem[]
}

export default Service
