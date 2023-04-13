import React from 'react'
import { Blocks } from '@gravis-os/landing'
import { NewsletterForm } from '@onex/components'
import { useLayout } from '@onex/providers'

export interface NewsletterPageProps {
  title: string
  subtitle?: string
}

const NewsletterPage: React.FC<NewsletterPageProps> = (props) => {
  const { title, subtitle } = props
  const { site } = useLayout()

  return (
    <Blocks
      items={[
        // Form
        {
          key: 'form',
          sx: {
            position: 'relative',
            backgroundColor: 'background.paper',
          },
          dark: true,
          center: true,
          pt: { xs: 10, xl: 12 },
          pb: { xs: 40, xl: 60 },
          backgroundImageProps: {
            src: '/images/mission_earth.png',
            alt: 'hero',
          },
          items: [
            { type: 'overline', title: `${site.title} Newsletter` },
            {
              type: 'h2',
              title,
              titleProps: { sx: { mb: 2 }, maxWidth: 'md' },
            },
            {
              type: 'subtitle1',
              title:
                subtitle ||
                'Save 2,000+ hours of market research with free 5-minute reports.',
              titleProps: {
                maxWidth: true,
                sx: { mb: 4 },
              },
            },
            {
              type: 'jsx',
              title: <NewsletterForm />,
              boxProps: { sx: { mx: 'auto', maxWidth: { md: '50%' } } },
              titleProps: { sx: { mt: 2 } },
            },
          ],
        },
      ]}
    />
  )
}

export default NewsletterPage
