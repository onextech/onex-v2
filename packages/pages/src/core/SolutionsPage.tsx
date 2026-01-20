import type { Solution } from '@onex/types'

import React from 'react'

import { Blocks, useLayout } from '@onex/landing'

export interface SolutionsPageProps {
  solutions: Solution[]
}

const renderSolutionBlockItem = (item: Solution & { href: string }) => {
  const { title, href, subtitle } = item || {}

  return {
    sm: 6,
    md: 4,
    items: [
      { title, titleProps: { href, variant: 'h5' }, type: 'link' },
      {
        title: subtitle,
        titleProps: {
          color: 'text.secondary',
          maxLines: 2,
          maxWidth: true,
          sx: { mb: 2, mt: 1 },
        },
        type: 'body1',
      },
      {
        title: 'Learn more',
        titleProps: { href, rightCaret: true, variant: 'body2' },
        type: 'link',
      },
    ],
  }
}

const SolutionsPage: React.FC<SolutionsPageProps> = (props) => {
  const { solutions } = props
  const { routeConfig } = useLayout()

  return (
    <Blocks
      items={[
        {
          id: 'hero',
          items: [
            { title: 'Solutions', type: 'overline' },
            {
              title: 'Solutions',
              type: 'h1',
            },
            {
              title:
                'Discover our innovative solutions designed to transform your business operations and enhance customer experiences.',
              titleProps: {
                color: 'text.secondary',
                maxWidth: '50%',
                sx: { mt: 2 },
              },
              type: 'subtitle1',
            },
            {
              title: '/unsplash/0fc4a4c35e18.jpg',
              disableContainer: true,
              titleProps: {
                alt: 'AI technology solutions',
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
        {
          id: 'solutions',
          items: [
            {
              gridItems: solutions.map((solution) =>
                renderSolutionBlockItem({
                  ...solution,
                  href: `${routeConfig.SOLUTIONS}/${solution.slug}`,
                })
              ),
              gridProps: { rowSpacing: 8, spacing: 5 },
              type: 'grid',
            },
          ],
          sx: { backgroundColor: 'background.paper' },
        },
      ]}
    />
  )
}

export default SolutionsPage
