import { Post } from '@onex/types'

export interface RenderPostBlockItemProps {
  item: Post & { href: string }
}

const renderPostBlockItem = (props: RenderPostBlockItemProps) => {
  const { item } = props
  const { title, subtitle, href, avatar_src, avatar_alt } = item || {}

  return {
    xs: 12,
    sm: 6,
    md: 4,
    items: [
      {
        type: 'image',
        title: avatar_src,
        titleProps: {
          alt: avatar_alt,
          ar: '16:9',
          scaleOnHover: true,
          boxProps: { sx: { mb: 2 }, href },
        },
      },
      { type: 'link', title, titleProps: { href, variant: 'h5' } },
      {
        type: 'body1',
        title: subtitle,
        titleProps: {
          maxLines: 2,
          color: 'text.secondary',
          sx: { mt: 1, mb: 2 },
        },
      },
      {
        type: 'link',
        title: 'Read more',
        titleProps: { href, rightCaret: true, variant: 'body2' },
      },
    ],
  }
}

export default renderPostBlockItem
