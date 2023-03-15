import { CrudItem } from '@gravis-os/types'
import ServiceCategory from './ServiceCategory'

export interface Service extends CrudItem {
  category_id?: number
  category?: ServiceCategory
}

export default Service
