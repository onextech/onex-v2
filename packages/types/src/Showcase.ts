import { BlockItemProps } from '@gravis-os/landing'
import { CrudItem } from '@gravis-os/types'

export interface Showcase extends CrudItem {
  imageSrc: string
  mode?: BlockItemProps['mode']
  backgroundColor?: string
  reverse?: boolean
}

export default Showcase
