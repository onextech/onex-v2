import React from 'react'
import {
  Blocks,
  renderJobCardBlockItem,
  renderLeftFourColumnGridBlockItem,
} from '@gravis-os/landing'
import type { Job, Page } from '@gravis-os/types'

export interface CareersPageProps {
  jobs: Job[]
  page: Page
}

const commonBlockProps = { center: true, maxWidth: 'xl' }

const CareersPage: React.FC<CareersPageProps> = (props) => {
  const { jobs, page } = props
  const { sections, title, subtitle } = page
  const { hero, summary, benefits, callout } = sections
  return (
    <Blocks
      items={[
        {
          py: { xs: 14, md: 28 },
          dark: true,
          id: 'growth-company',
          ...commonBlockProps,
          backgroundImageProps: {
            src: hero.hero_src,
            alt: hero.hero_alt,
          },
          items: [
            { type: 'overline', title: hero.overline },
            {
              type: 'h2',
              title: hero.title,
              titleProps: {
                mb: { xs: 12, md: 19 },
                component: 'h1',
                maxWidth: 800,
              },
            },
          ],
        },
        {
          id: 'join-the-team',
          ...commonBlockProps,
          pb: { xs: 5, md: 0 },
          items: [
            {
              type: 'h4',
              title: summary.title,
              titleProps: { gutterBottom: true },
              containerProps: { maxWidth: 'sm' },
            },
            {
              type: 'body1',
              title: summary.subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
              },
              containerProps: { maxWidth: 'md' },
            },
            {
              type: 'image',
              title: summary.hero_src,
              maxWidth: false,
              disableContainer: true,
              titleProps: {
                alt: summary.hero_alt,
                background: true,
                backgroundHeight: { xs: 300, md: 500 },
                sx: { my: 3 },
              },
            },
          ],
        },
        renderLeftFourColumnGridBlockItem(benefits),
        {
          id: 'openings',
          ...commonBlockProps,
          center: false,
          items: [
            {
              type: 'h3',
              title: callout.title,
              titleProps: { gutterBottom: true, textAlign: 'left' },
            },
            {
              type: 'subtitle1',
              title: callout.subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: '50%',
              },
            },
            {
              type: 'grid',
              sx: { mt: { xs: 5, md: 10 } },
              gridProps: { spacing: 3 },
              gridItemProps: {
                xs: 12,
                md: 4,
                sx: { textAlign: { xs: 'center', md: 'left' } },
              },
              gridItems: jobs.map((job, i) => {
                return renderJobCardBlockItem({ job, index: i + 1 })
              }),
            },
          ],
        },
      ]}
    />
  )
}

export default CareersPage
