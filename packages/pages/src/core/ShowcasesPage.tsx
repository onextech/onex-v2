import React from 'react'
import { Blocks } from '@gravis-os/landing'
import { renderShowcasesBlock } from '@onex/blocks'
import type { Showcase } from '@onex/types'

export interface ShowcasesPageProps {
  showcases: Showcase[]
}

const ShowcasesPage: React.FC<ShowcasesPageProps> = (props) => {
  const { showcases } = props
  return (
    <Blocks
      items={[
        {
          key: 'showcase-hero',
          sx: { pt: { xs: 3, md: 6 } },
          pb: 0,
          items: [
            { type: 'overline', title: 'Showcase' },
            {
              type: 'h1',
              title: 'Invest in Digital Transformation with Confidence.',
              titleProps: { mb: 2, maxWidth: '50%' },
            },
            {
              type: 'subtitle1',
              title:
                'We assist enterprise clients in their digital transformation by applying established and emerging technologies into their core business models.',
              titleProps: {
                color: 'text.secondary',
                maxWidth: '60%',
              },
            },
          ],
        },
        renderShowcasesBlock({ items: showcases }),
      ]}
    />
  )
}

export default ShowcasesPage
