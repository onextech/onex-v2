import { Industry } from '@onex/types'

export interface RenderIndustryBlockItemProps {
  item: Industry & { href: string }
}

const renderIndustryBlockItem = (props: RenderIndustryBlockItemProps) => {
  const { item } = props
  const { title, subtitle, href } = item || {}

  return {
    sm: 6,
    md: 4,
    lg: 3,
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

export default renderIndustryBlockItem
