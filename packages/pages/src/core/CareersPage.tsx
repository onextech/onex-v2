import type { Job, Page } from '@gravis-os/types'

import React from 'react'

import {
  Blocks,
  renderJobCardBlockItem,
  renderLeftFourColumnGridBlockItem,
} from '@gravis-os/landing'

export interface CareersPageProps {
  jobs: Job[]
  page: Page
}

const commonBlockProps = { center: true, maxWidth: 'xl' }

const CareersPage: React.FC<CareersPageProps> = (props) => {
  const { jobs, page } = props
  const { title, sections, subtitle } = page
  const { benefits, callout, hero, summary } = sections
  return (
    <Blocks
      items={[
        {
          id: 'growth-company',
          dark: true,
          py: { xs: 14, md: 28 },
          ...commonBlockProps,
          backgroundImageProps: {
            alt: hero.hero_alt,
            src: hero.hero_src,
          },
          items: [
            { title: hero.overline, type: 'overline' },
            {
              title: hero.title,
              titleProps: {
                component: 'h1',
                maxWidth: 800,
                mb: { xs: 12, md: 19 },
              },
              type: 'h2',
            },
          ],
        },
        {
          id: 'join-the-team',
          ...commonBlockProps,
          items: [
            {
              title: summary.title,
              containerProps: { maxWidth: 'sm' },
              titleProps: { gutterBottom: true },
              type: 'h4',
            },
            {
              title: summary.subtitle,
              containerProps: { maxWidth: 'md' },
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
              },
              type: 'body1',
            },
            {
              title: summary.hero_src,
              disableContainer: true,
              maxWidth: false,
              titleProps: {
                alt: summary.hero_alt,
                background: true,
                backgroundHeight: { xs: 300, md: 500 },
                sx: { my: 3 },
              },
              type: 'image',
            },
          ],
          pb: { xs: 5, md: 0 },
        },
        renderLeftFourColumnGridBlockItem(benefits),
        {
          id: 'openings',
          ...commonBlockProps,
          center: false,
          items: [
            {
              title: callout.title,
              titleProps: { gutterBottom: true, textAlign: 'left' },
              type: 'h3',
            },
            {
              title: callout.subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: '50%',
              },
              type: 'subtitle1',
            },
            {
              gridItemProps: {
                xs: 12,
                md: 4,
                sx: { textAlign: { xs: 'center', md: 'left' } },
              },
              gridItems: jobs.map((job, i) => {
                return renderJobCardBlockItem({ index: i + 1, job })
              }),
              gridProps: { spacing: 3 },
              sx: { mt: { xs: 5, md: 10 } },
              type: 'grid',
            },
          ],
        },
      ]}
    />
  )
}

export default CareersPage
