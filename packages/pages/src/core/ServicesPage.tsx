import React from 'react'
import { Blocks } from '@gravis-os/landing'
import { renderPortfolioCardBlockItem } from '@onex/blocks'
import type { Service } from '@onex/types'

export interface ServicesPageProps {
  services: Service[]
}

const ServicesPage: React.FC<ServicesPageProps> = (props) => {
  const { services } = props
  return (
    <Blocks
      items={[
        {
          key: 'hero',
          maxWidth: 'xl',
          items: [
            { type: 'overline', title: 'Services' },
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

export default ServicesPage
