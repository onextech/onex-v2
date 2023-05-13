import React from 'react'
import { Blocks } from '@gravis-os/landing'
import {
  renderShowcaseCardBlockItem,
  renderShowcaseStickyGridBlockItem,
  renderOtherShowcasesBlock,
} from '@onex/blocks'
import type { Showcase } from '@onex/types'

export interface ShowcasePageProps {
  showcase: Showcase
  otherShowcases?: Showcase[]
}

const ShowcasePage: React.FC<ShowcasePageProps> = (props) => {
  const { showcase, otherShowcases } = props
  const { backgroundColor, sections } = showcase || {}
  const { leftGridSticky, rightGridSticky, gallery } = sections || {}

  return (
    <Blocks
      items={[
        {
          key: 'showcase-hero',
          py: 0,
          sx: { backgroundColor },
          items: [
            renderShowcaseCardBlockItem({ item: showcase, isHero: true }),
          ],
        },
        {
          key: 'showcase-sticky-grid-left',
          pt: 10,
          items: [
            renderShowcaseStickyGridBlockItem({
              reverse: true,
              ...leftGridSticky,
            }),
          ],
        },
        {
          key: 'showcase-gallery',
          py: 5,
          items: [
            gallery.overline && { type: 'overline', title: gallery.overline },
            {
              type: 'h3',
              title: gallery.title,
              titleProps: { gutterBottom: true },
            },
            {
              type: 'subtitle1',
              title: gallery.subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: '50%',
              },
            },
            {
              type: 'grid',
              sx: { mt: { xs: 4, md: 8 } },
              gridProps: { spacing: 6 },
              gridItemProps: {
                xs: 12,
                md: 6,
                sx: { textAlign: { xs: 'center', md: 'left' } },
              },
              gridItems: gallery.items.map((item) => ({
                items: [
                  {
                    ...item,
                    type: 'image',
                    titleProps: {
                      ...item?.titleProps,
                      fill: true,
                      zoom: true,
                    },
                  },
                ],
              })),
            },
          ],
        },
        {
          key: 'showcase-sticky-grid-right',
          items: [
            renderShowcaseStickyGridBlockItem({
              ...rightGridSticky,
            }),
          ],
        },
        renderOtherShowcasesBlock({
          items: otherShowcases,
          py: { xs: 5, md: 10 },
        }),
      ]}
    />
  )
}

export default ShowcasePage
