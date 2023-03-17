import { CrudItem } from '@gravis-os/types'

export interface PostCategory extends CrudItem {
  description?: string
  hero_src?: string
  hero_alt?: string
}

export default PostCategory
