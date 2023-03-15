import { Technology } from '@onex/types'

export interface RenderTechnologyBlockItemProps {
  item: Technology & { href: string }
}

const renderTechnologyBlockItem = (props: RenderTechnologyBlockItemProps) => {
  const { item } = props
  const { title, subtitle, href } = item || {}

  return {
    sm: 6,
    md: 4,
    items: [
      { type: 'link', title, titleProps: { href, variant: 'h5' } },
      {
        type: 'body1',
        title: subtitle,
        titleProps: {
          maxLines: 2,
          maxWidth: true,
          color: 'text.secondary',
          sx: { mt: 1, mb: 2 },
        },
      },
      {
        type: 'link',
        title: 'Learn more',
        titleProps: { href, rightCaret: true },
      },
    ],
  }
}

export default renderTechnologyBlockItem
