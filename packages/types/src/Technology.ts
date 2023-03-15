import { BlockItemProps } from '@gravis-os/landing'

export interface Technology {
  title: BlockItemProps['title']
  slug?: string
  subtitle: BlockItemProps['title']
  imageSrc: string

  mode?: BlockItemProps['mode']
  backgroundColor?: string

  reverse?: boolean
}

export default Technology
