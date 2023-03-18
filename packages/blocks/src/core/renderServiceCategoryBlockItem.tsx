import { BlockItemProps } from '@gravis-os/landing'
import { ServiceCategory, Service } from '@onex/types'

export interface RenderServiceCategoryBlockItemProps {
  item: ServiceCategory & { items: Array<Service & { href: string }> } & {
    href: string
  }
}

const renderServiceCategoryBlockItem = (
  props: RenderServiceCategoryBlockItemProps
) => {
  const { item } = props
  const { title, subtitle, href, description, items } = item || {}

  return {
    sm: 12,
    md: 6,
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

export default renderServiceCategoryBlockItem
