import { CrudItem } from '@gravis-os/types'

export interface Client extends CrudItem {
  avatar_src?: string
  avatar_alt?: string
  avatar_width?: number
  avatar_height?: number
}

export default Client
