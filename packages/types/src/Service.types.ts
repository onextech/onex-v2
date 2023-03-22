import { CrudItem } from '@gravis-os/types'
import ServiceCategory from './ServiceCategory.types'

export interface Service extends CrudItem {
  category_id?: number
  category?: ServiceCategory
  hero_src?: string
  hero_alt?: string
  // Tags
  tags?: CrudItem[]
}

export default Service
