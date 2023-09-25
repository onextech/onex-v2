import React from 'react'

import { Blocks, NewsletterForm, useLayout } from '@gravis-os/landing'

export interface NewsletterPageProps {
  subtitle?: string
  title: string
}

const NewsletterPage: React.FC<NewsletterPageProps> = (props) => {
  const { title, subtitle } = props
  const { site } = useLayout()

  return (
    <Blocks
      items={[
        // Form
        {
          id: 'form',
          backgroundImageProps: {
            alt: 'hero',
            src: '/images/mission_earth.png',
          },
          center: true,
          dark: true,
          items: [
            { title: `${site.title} Newsletter`, type: 'overline' },
            {
              title,
              titleProps: { maxWidth: 'md', sx: { mb: 2 } },
              type: 'h2',
            },
            {
              title:
                subtitle ||
                'Save 2,000+ hours of market research with free 5-minute reports.',
              titleProps: {
                maxWidth: true,
                sx: { mb: 4 },
              },
              type: 'subtitle1',
            },
            {
              title: <NewsletterForm />,
              boxProps: { sx: { maxWidth: { md: '50%' }, mx: 'auto' } },
              titleProps: { sx: { mt: 2 } },
              type: 'jsx',
            },
          ],
          pb: { xs: 40, xl: 60 },
          pt: { xs: 10, xl: 12 },
          sx: {
            backgroundColor: 'background.paper',
            position: 'relative',
          },
        },
      ]}
    />
  )
}

export default NewsletterPage
