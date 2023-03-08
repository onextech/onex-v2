import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { Blocks } from '@gravis-os/landing'

export interface TechnologiesPageProps {}

const TechnologiesPage: React.FC<TechnologiesPageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Technologies' }}>
      <Blocks
        items={[
          {
            key: 'hero',
            maxWidth: 'xl',
            sx: { pt: { xs: 3, md: 6 } },
            pb: 0,
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
    </LandingLayout>
  )
}

export default TechnologiesPage
