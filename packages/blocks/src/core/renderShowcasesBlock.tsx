import { Showcase } from '@onex/types'
import { BlockProps } from '@gravis-os/landing'
import renderShowcaseCardBlockItem from './renderShowcaseCardBlockItem'

export interface RenderShowcasesBlockProps
  extends Omit<BlockProps, 'items' | 'title'> {
  items: Showcase[]
  title?: React.ReactNode
  subtitle?: React.ReactNode
}

const renderShowcasesBlock = (props: RenderShowcasesBlockProps) => {
  const {
    title = 'Showcase',
    subtitle = 'We stay at the forefront of the latest technology by investing heavily and constantly evaluating the newest emerging technologies and frameworks that enable us to build robust solutions that scale and last.',
    items,
  } = props
  return {
    key: 'showcases',
    maxWidth: 'xl',
    pt: { xs: 5, md: 10 },
    items: [
      {
        type: 'overline',
        title: 'Our Work',
      },
      {
        type: 'h3',
        title,
        titleProps: { gutterBottom: true, maxWidth: '60%' },
      },
      {
        type: 'body1',
        title: subtitle,
        titleProps: {
          color: 'text.secondary',
          maxWidth: '45%',
        },
      },
      ...items.map((item) => renderShowcaseCardBlockItem({ item })),
    ],
  }
}

export default renderShowcasesBlock
