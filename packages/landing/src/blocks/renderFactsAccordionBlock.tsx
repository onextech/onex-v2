import { BlockItemProps } from '../web'
import { BlockProps } from '../web/Block/Block'

export interface RenderFactsAccordionBlockProps
  extends Omit<BlockProps, 'items'> {
  items?: Array<{ content?: string; id?: string; title: string }>
  subtitle?: BlockItemProps['title']
  title: BlockItemProps['title']
}

const renderFactsAccordionBlock = (props: RenderFactsAccordionBlockProps) => {
  const { title, items, subtitle, ...rest } = props

  return {
    id: 'facts-accordion',
    ...rest,
    items: [
      {
        gridItemProps: {
          sx: { textAlign: { xs: 'center', md: 'left' } },
        },
        gridItems: [
          {
            md: 4,
            items: [
              {
                title,
                maxWidth: 'md',
                titleProps: { gutterBottom: true },
                type: 'h4',
              },
              {
                title: subtitle,
                maxWidth: 'md',
                titleProps: {
                  color: 'text.secondary',
                  maxWidth: '70%',
                },
                type: 'body1',
              },
            ],
          },
          {
            md: 8,
            items: [
              {
                title: items.map((item) => {
                  const { id, title, content } = item
                  return {
                    id: id || title,
                    title,
                    content,
                  }
                }),
                titleProps: {
                  sx: { textAlign: 'left' },
                  titleProps: { variant: 'subtitle2' as const, sx: { fontSize: '1.35rem' } },
                  defaultExpandedKeys: [items[0].title],
                  contentProps: { sx: { whiteSpace: 'pre-line' } },
                },
                type: 'accordion',
              },
            ],
          },
        ],
        gridProps: { spacing: 4 },
        type: 'grid',
      },
    ],
  }
}

export default renderFactsAccordionBlock
