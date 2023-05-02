import { routeConfig } from '@onex/common'
import { Showcase } from '@onex/types'
import renderGhostButtonBlockItem from './renderGhostButtonBlockItem'

export interface RenderShowcaseCardBlockItemProps {
  item: Showcase
}

const renderShowcaseCardBlockItem = (
  props: RenderShowcaseCardBlockItemProps
) => {
  const { item } = props
  const { slug, backgroundColor, mode, imageSrc, title, subtitle, reverse } =
    item || {}

  const gridItems = [
    {
      md: 6,
      lg: 7,
      sx: {
        height: { xs: 300, md: 500 },
        position: 'relative',
        overflow: 'hidden',
      },
      items: [
        {
          type: 'image',
          title: imageSrc,
          boxProps: { sx: { display: 'flex', justifyContent: 'center' } },
          titleProps: {
            alt: 'image-src',
            background: true,
            fixedBackground: true,
            scaleOnHover: true,
            boxSx: {
              width: { xs: '60%', sm: '65%' },
              height: '100%',
              bottom: -8,
            },
          },
        },
      ],
    },
    {
      md: 6,
      lg: 5,
      boxProps: {
        sx: {
          mt: { xs: 2, md: 4, lg: 5 },
          mx: { xs: 3, md: 0, lg: 0 },
          [reverse ? 'ml' : 'mr']: { xs: 3, md: 9, lg: 12 },
        },
      },
      items: [
        {
          type: 'h3',
          title,
          titleProps: {
            color: 'text.primary',
            gutterBottom: true,
          },
        },
        {
          type: 'subtitle3',
          title: subtitle,
          titleProps: {
            color: 'text.secondary',
          },
        },
        renderGhostButtonBlockItem({
          overline: 'Showcase',
          title: 'Read more',
          boxProps: { mt: 5, mb: { xs: 5, md: 0 } },
          href: `${routeConfig.SHOWCASES}/${slug || ''}`,
        }),
      ],
    },
  ]

  const nextGridItems = reverse ? gridItems.slice().reverse() : gridItems

  return {
    type: 'grid',
    maxWidth: 'xl',
    sx: { mt: { xs: 6, md: 10 } },
    mode,
    boxProps: { sx: { backgroundColor, borderRadius: 1 } },
    gridProps: {
      reverse: { xs: !reverse, md: reverse },
      spacing: 3,
      sx: { textAlign: { xs: 'center', md: 'left' } },
    },
    gridItems: nextGridItems,
  }
}

export default renderShowcaseCardBlockItem
