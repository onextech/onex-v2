import { ClientTestimonial } from '@onex/types'
import { BlockProps } from '@gravis-os/landing'
import renderClientTestimonialCardBlockItem from './renderClientTestimonialCardBlockItem'

export interface RenderClientTestimonialCardsBlockProps
  extends Omit<BlockProps, 'items' | 'title'> {
  items: ClientTestimonial[]
  title?: React.ReactNode
  subtitle?: React.ReactNode
}

const renderClientTestimonialCardsBlock = (
  props: RenderClientTestimonialCardsBlockProps
) => {
  const {
    title = 'Trusted by Frontend Development Teams',
    subtitle = '',
    items,
    ...rest
  } = props

  return {
    key: 'client-testimonials',
    items: [
      { type: 'overline', title: 'Client Testimonials' },
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
            sm: 6,
            md: 4,
            items: renderClientTestimonialCardBlockItem({ item }),
          }
        }),
      },
    ],
    ...rest,
  }
}

export default renderClientTestimonialCardsBlock
