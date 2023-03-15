import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Industry } from '@onex/types'

export interface IndustrysPageProps {
  industrys: Industry[]
}

const IndustrysPage: React.FC<IndustrysPageProps> = (props) => {
  const { industrys } = props
  return (
    <Blocks
      items={[
        {
          key: 'hero',
          maxWidth: 'xl',
          sx: { pt: { xs: 3, md: 6 } },
          pb: 0,
          items: [
            { type: 'overline', title: 'Industries' },
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

export default IndustrysPage
