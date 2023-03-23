import { CrudItem } from '@gravis-os/types'

export interface PressRelease extends CrudItem {
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
}

export default PressRelease
