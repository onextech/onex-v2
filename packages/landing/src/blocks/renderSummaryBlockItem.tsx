import { BlockProps } from '../web/Block/Block'
import { BlockItemProps } from '../web'

export interface RenderSummaryBlockItemProps extends Omit<BlockProps, 'items'> {
  items?: Array<{ title: string }>
  overline?: BlockItemProps['title']
  title: string
}

const renderSummaryBlockItem = (props: RenderSummaryBlockItemProps) => {
  const { overline, title, items, ...rest } = props
  return {
    id: 'summary',
    center: true,
    ...rest,
    items: [
      { title: overline, type: 'overline' },
      {
        title,
        maxWidth: 'md',
        titleProps: { sx: { mb: 4 } },
        type: 'h3',
      },
      ...items?.map(({ title }) => ({
        title,
        titleProps: { maxWidth: 'sm', sx: { fontSize:'1.15rem', mb: 3, textAlign: 'left' } },
        type: 'body1',
      })),
    ],
  }
}

export default renderSummaryBlockItem
