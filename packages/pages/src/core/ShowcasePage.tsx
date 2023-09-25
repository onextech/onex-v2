import React from 'react'

import {
  Blocks,
  renderShowcaseCardBlockItem,
  renderShowcaseSlider,
  renderShowcaseStickyGridBlockItem,
} from '@gravis-os/landing'
import { Showcase } from '@gravis-os/types'

export interface ShowcasePageProps {
  otherShowcases?: Showcase[]
  showcase: Showcase
}

const ShowcasePage: React.FC<ShowcasePageProps> = (props) => {
  const { otherShowcases, showcase } = props
  const { backgroundColor, sections } = showcase || {}
  const { gallery, leftGridSticky, rightGridSticky } = sections || {}

  return (
    <Blocks
      items={[
        {
          id: 'showcase-hero',
          items: [
            renderShowcaseCardBlockItem({ isHero: true, item: showcase }),
          ],
          py: 0,
          sx: { backgroundColor },
        },
        {
          id: 'showcase-sticky-grid-left',
          items: [
            renderShowcaseStickyGridBlockItem({
              reverse: true,
              ...leftGridSticky,
            }),
          ],
          pt: 10,
        },
        {
          id: 'showcase-gallery',
          items: [
            gallery.overline && { title: gallery.overline, type: 'overline' },
            {
              title: gallery.title,
              titleProps: { gutterBottom: true },
              type: 'h3',
            },
            {
              title: gallery.subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: '50%',
              },
              type: 'subtitle1',
            },
            {
              gridItemProps: {
                xs: 12,
                md: 6,
                sx: { textAlign: { xs: 'center', md: 'left' } },
              },
              gridItems: gallery.items.map((item) => ({
                items: [
                  {
                    ...item,
                    titleProps: {
                      ...item?.titleProps,
                      fill: true,
                    },
                    type: 'image',
                  },
                ],
              })),
              gridProps: { spacing: 6 },
              sx: { mt: { xs: 4, md: 8 } },
              type: 'grid',
            },
          ],
          py: 5,
        },
        {
          id: 'showcase-sticky-grid-right',
          items: [
            renderShowcaseStickyGridBlockItem({
              ...rightGridSticky,
            }),
          ],
        },
        renderShowcaseSlider({
          title: 'Other Showcases',
          items: otherShowcases,
          py: { xs: 5, md: 10 },
          sx: { backgroundColor: 'background.paper' },
        }),
      ]}
    />
  )
}

export default ShowcasePage
