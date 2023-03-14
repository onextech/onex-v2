import { BlockItemProps } from '@gravis-os/landing'

export interface Showcase {
  title: BlockItemProps['title']
  slug?: string
  subtitle: BlockItemProps['title']
  imageSrc: string

  mode?: BlockItemProps['mode']
  backgroundColor?: string

  reverse?: boolean
}

export default Showcase
