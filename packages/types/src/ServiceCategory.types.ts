import { CrudItem } from '@gravis-os/types'

export interface ServiceCategory extends CrudItem {
  description?: string
  hero_src?: string
  hero_alt?: string
}

export default ServiceCategory
