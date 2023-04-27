import { ClientTestimonial } from '@onex/types'
import { BlockProps } from '@gravis-os/landing'
import renderClientTestimonialCardBlockItem from './renderClientTestimonialCardBlockItem'

export interface RenderClientTestimonialCardsBlockProps
  extends Omit<BlockProps, 'items'> {
  items: ClientTestimonial[]
  title?: string
}

const renderClientTestimonialCardsBlock = (
  props: RenderClientTestimonialCardsBlockProps
) => {
  const {
    title = 'Trusted by Frontend Development Teams',
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
        title:
          'We stay at the forefront of the latest technology by investing heavily and constantly evaluating the newest emerging technologies and frameworks that enable us to build robust solutions that scale and last.',
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
