import { BlockItemProps } from '@gravis-os/landing'
import { PostCategory, Post } from '@onex/types'

export interface RenderPostCategoryBlockItemProps {
  item: PostCategory & { items: Array<Post & { href: string }> } & {
    href: string
  }
}

const renderPostCategoryBlockItem = (
  props: RenderPostCategoryBlockItemProps
) => {
  const { item } = props
  const { title, href, subtitle, description, items } = item || {}

  return {
    sm: 12,
    md: 12,
    items: [
      {
        type: 'link',
        title,
        titleProps: { variant: 'overline' as const, href },
      },
      { type: 'h3', title: description },
      {
        type: 'subtitle1',
        title: subtitle,
        titleProps: {
          maxLines: 2,
          color: 'text.secondary',
          maxWidth: true,
          sx: { mt: 1, mb: 2 },
        },
      },
      ...(items.map((item) => ({
        type: 'link',
        title: item.title,
        titleProps: {
          href: item.href,
          variant: 'h6',
          rightCaretFullWidth: true,
          underline: 'none',
          sx: {
            py: 2.5,
            px: 2,
            borderBottom: 1,
            borderColor: 'divider',
            '&:hover': { backgroundColor: 'action.hover' },
          },
        },
        ...item,
      })) as BlockItemProps[]),
    ],
  }
}

export default renderPostCategoryBlockItem
