import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Technology } from '@onex/types'

export interface TechnologysPageProps {
  technologys: Technology[]
}

const TechnologysPage: React.FC<TechnologysPageProps> = (props) => {
  const { technologys } = props
  return (
    <Blocks
      items={[
        {
          key: 'hero',
          maxWidth: 'xl',
          items: [
            { type: 'overline', title: 'Technologies' },
            {
              type: 'h1',
              title: 'Invest in Digital Transformation with Confidence.',
              titleProps: { mb: 2, maxWidth: true },
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
      ]}
    />
  )
}

export default TechnologysPage
