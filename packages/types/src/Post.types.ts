import { CrudItem } from '@gravis-os/types'
import PostCategory from './PostCategory.types'

export interface Post extends CrudItem {
  category_id?: number
  category?: PostCategory
  hero_src?: string
  hero_alt?: string
}

export default Post
