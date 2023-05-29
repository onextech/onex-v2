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
            '& h1, & h2, & h3, & h4, & h5, & h6': {
              mt: 0,
              mb: 1,
            },
            '& p': {
              mt: 0,
              mb: 3,
            },
            '& blockquote': { borderLeft: 4, pl: 4, ml: 0, opacity: 0.8 },
            fontSize: {
              xs: 'subtitle2.fontSize',
              md: 'subtitle1.fontSize',
            },
          },
        },
        ...rest,
      },
    ],
  }
}

export default renderHtmlBlockItem
