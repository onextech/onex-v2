import { BlockItemProps } from '@gravis-os/landing'
import Page from './Page.types'

export interface Showcase extends Page {
  hero_src: string
  mode?: BlockItemProps['mode']
  backgroundColor?: string
  reverse?: boolean
}

export default Showcase
