import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { Blocks } from '@gravis-os/landing'
import { renderPortfolioCardBlockItem } from '@onex/blocks'

export interface PortfolioPageProps {}

const PortfolioPage: React.FC<PortfolioPageProps> = () => {
  return (
    <LandingLayout seo={{ title: 'Portfolio' }}>
      <Blocks
        items={[
          {
            key: 'portfolio-hero',
            maxWidth: 'xl',
            sx: { pt: { xs: 3, md: 6 } },
            pb: 0,
            items: [
              { type: 'overline', title: 'Portfolio' },
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
          {
            key: 'portfolio-card-list',
            center: true,
            maxWidth: 'xl',
            pt: 0,
            items: [
              // Cards
              renderPortfolioCardBlockItem({
                backgroundColor: '#c6dcc0',
                mode: 'light',
                title: 'Preparing the future of home-made meals with Phillips.',
                subtitle:
                  'Promoting science by building the largest online conference platform.',
                imageSrc: '/images/portfolio_cover_3.png',
                slug: 'canon',
              }),

              renderPortfolioCardBlockItem({
                backgroundColor: '#202941',
                mode: 'dark',
                title: 'Preparing the future of home-made meals with Phillips.',
                subtitle:
                  'Promoting science by building the largest online conference platform.',
                imageSrc: '/images/portfolio_cover_4.png',
                reverse: true,
                slug: 'canon',
              }),

              renderPortfolioCardBlockItem({
                backgroundColor: '#2b698a',
                mode: 'dark',
                title: 'Preparing the future of home-made meals with Phillips.',
                subtitle:
                  'Promoting science by building the largest online conference platform.',
                imageSrc: '/images/portfolio_cover_2.jpg',
                slug: 'canon',
              }),

              renderPortfolioCardBlockItem({
                mode: 'dark',
                backgroundColor: '#111',
                title: 'Preparing the future of home-made meals with Canon.',
                subtitle:
                  'Promoting science by building the largest online conference platform.',
                imageSrc: '/images/portfolio_cover_1.png',
                reverse: true,
                slug: 'canon',
              }),
            ],
          },
        ]}
      />
    </LandingLayout>
  )
}

export default PortfolioPage
