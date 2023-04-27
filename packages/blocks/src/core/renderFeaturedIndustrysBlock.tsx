import { ClientTestimonial } from '@onex/types'
import { BlockProps } from '@gravis-os/landing'
import { useLayout } from '@onex/providers'
import renderFeaturedIndustryBlockItem from './renderFeaturedIndustryBlockItem'

export interface RenderFeaturedIndustrysBlockProps
  extends Omit<BlockProps, 'items'> {
  items: ClientTestimonial[]
  title?: React.ReactNode
  subtitle?: React.ReactNode
}

const renderFeaturedIndustrysBlock = (
  props: RenderFeaturedIndustrysBlockProps
) => {
  const { title = 'Featured Industries', subtitle = '', items, ...rest } = props
  const { routeConfig } = useLayout()

  return {
    key: 'featured-industrys',
    items: [
      { type: 'overline', title: 'Industries' },
      {
        type: 'h3',
        title,
        titleProps: { gutterBottom: true },
      },
      {
        type: 'body1',
        title: subtitle,
        titleProps: {
          color: 'text.secondary',
          maxWidth: '50%',
        },
      },
      {
        type: 'grid',
        sx: { mt: { xs: 4, md: 8 } },
        gridItems: items.map((item) => {
          return {
            xs: 12,
            md: 6,
            items: renderFeaturedIndustryBlockItem({
              item: {
                href: `${routeConfig.INDUSTRYS}/${item.slug}`,
                ...item,
              },
            }),
          }
        }),
      },
    ],
    ...rest,
  }
}

export default renderFeaturedIndustrysBlock
