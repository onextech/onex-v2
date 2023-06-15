import { BlockProps } from '@gravis-os/landing'

export interface RenderHtmlBlockItemProps extends Omit<BlockProps, 'items'> {
  html: string
}

const renderHtmlBlockItem = (props: RenderHtmlBlockItemProps) => {
  const { html, ...rest } = props
  return {
    items: [
      {
        type: 'html',
        title: html,
        titleProps: {
          sx: {
            '& p': {
              mt: 0,
              mb: 3,
            },
          },
        },
        ...rest,
      },
    ],
  }
}

export default renderHtmlBlockItem
