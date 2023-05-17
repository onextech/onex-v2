import { CrudItem } from '@gravis-os/types'
import PostCategory from './PostCategory.types'

export interface Post extends CrudItem {
  category_id?: number
  category?: PostCategory
  avatar_src?: string
  avatar_alt?: string
  hero_src?: string
  hero_alt?: string
  // Author
  author_avatar_src?: string
  author_avatar_alt?: string
  author_title?: string
  author_job_title?: string
  // Tags
  tags?: CrudItem[]
  // Html
  html?: string
  published_at?: string
  is_featured?: boolean
}

export default Post
