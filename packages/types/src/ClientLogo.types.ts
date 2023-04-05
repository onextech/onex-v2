import { CrudItem } from '@gravis-os/types'

export interface ClientLogo extends Omit<CrudItem, 'title'> {
  avatar_src?: string
  avatar_alt?: string
  avatar_width?: number
  avatar_height?: number
}

export default ClientLogo
