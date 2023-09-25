import type { Technology } from '@gravis-os/types'

import React from 'react'

import { Blocks, renderTechnologysBlock } from '@gravis-os/landing'

export interface TechnologysPageProps {
  technologys: Technology[]
}

const TechnologysPage: React.FC<TechnologysPageProps> = (props) => {
  const { technologys } = props

  return (
    <Blocks
      items={[
        {
          id: 'hero',
          items: [
            { title: 'Technologies', type: 'overline' },
            {
              title: 'Technologies',
              type: 'h1',
            },
            {
              title:
                'Explore the innovative technologies and frameworks we leverage to deliver modern and seamless digital experiences.',
              titleProps: {
                color: 'text.secondary',
                maxWidth: '50%',
                sx: { mt: 2 },
              },
              type: 'subtitle1',
            },
            {
              title: 'https://source.unsplash.com/Q1p7bh3SHj8/1600x900',
              disableContainer: true,
              titleProps: {
                alt: 'People working in office',
                background: true,
                backgroundHeight: { xs: 320, md: 450 },
                backgroundSx: { mt: 5 },
              },
              type: 'image',
            },
          ],
          pb: 0,
          pt: { xs: 5, md: 10 },
          sx: { backgroundColor: 'background.paper' },
        },
        renderTechnologysBlock({ items: technologys }),
      ]}
    />
  )
}

export default TechnologysPage
