import { Technology } from '@onex/types'

export interface RenderTechnologyBlockItemProps {
  item: Technology & { href: string }
}

const renderTechnologyBlockItem = (props: RenderTechnologyBlockItemProps) => {
  const { item } = props
  const {
    title,
    subtitle,
    href,
    avatar_src,
    avatar_alt,
    avatar_width = 60,
    avatar_height = 60,
  } = item || {}

  return {
    sm: 6,
    md: 4,
    items: [
      {
        type: 'image',
        title: avatar_src,
        titleProps: {
          alt: avatar_alt,
          width: avatar_width,
          height: avatar_height,
          sx: { mb: 3 },
        },
      },
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
