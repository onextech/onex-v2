import { CrudItem } from '@gravis-os/types'
import ServiceCategory from './ServiceCategory'

export interface Service extends CrudItem {
  category_id?: number
  category?: ServiceCategory
  hero_src?: string
  hero_alt?: string
}

export default Service
