import { ClientTestimonial } from '@onex/types'
import { BlockProps } from '@gravis-os/landing'
import renderFeaturedIndustryBlockItem from './renderFeaturedIndustryBlockItem'

export interface RenderFeaturedIndustrysBlockProps
  extends Omit<BlockProps, 'items'> {
  items: ClientTestimonial[]
  title?: string
}

const renderFeaturedIndustrysBlock = (
  props: RenderFeaturedIndustrysBlockProps
) => {
  const { title = 'Featured Industries', items, ...rest } = props

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
        title:
          'We stay at the forefront of the latest technology by investing heavily and constantly evaluating the newest emerging technologies and frameworks that enable us to build robust solutions that scale and last.',
        titleProps: {
          color: 'text.secondary',
          maxWidth: true,
        },
      },
      {
        type: 'grid',
        sx: { mt: { xs: 4, md: 8 } },
        // gridProps: { spacing: 3 },
        gridItems: items.map((item) => {
          return {
            xs: 12,
            md: 6,
            items: renderFeaturedIndustryBlockItem({ item }),
          }
        }),
      },
    ],
    ...rest,
  }
}

export default renderFeaturedIndustrysBlock
