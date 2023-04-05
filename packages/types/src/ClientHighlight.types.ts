import { CrudItem } from '@gravis-os/types'

export interface ClientHighlight extends Omit<CrudItem, 'title'> {
  src?: string
  alt?: string
  width?: number
  height?: number
}

export default ClientHighlight
