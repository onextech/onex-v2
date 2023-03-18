import { CrudItem } from '@gravis-os/types'
import PostCategory from './PostCategory.types'

export interface Post extends CrudItem {
  category_id?: number
  category?: PostCategory
  avatar_src?: string
  avatar_alt?: string
  hero_src?: string
  hero_alt?: string
  html?: string
}

export default Post
