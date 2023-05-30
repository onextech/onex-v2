import React from 'react'
import { Blocks } from '@gravis-os/landing'
import {
  renderJobCardBlockItem,
  renderLeftFourColumnGridBlockItem,
  renderLeftThreeColumnGridBlockItem,
} from '@onex/blocks'
import type { Job, Page } from '@onex/types'

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
          key: 'growth-company',
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
              titleProps: { mb: { xs: 12, md: 19 }, component: 'h1', maxWidth: 800 },
            },
          ],
        },
        {
          key: 'join-the-team',
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
              title: '/images/careers_office.jpg',
              maxWidth: false,
              disableContainer: true,
              titleProps: {
                alt: 'Office with plants',
                background: true,
                backgroundHeight: { xs: 300, md: 500 },
                sx: { my: 3 },
              },
            },
          ],
        },
        renderLeftThreeColumnGridBlockItem({
          title: benefits.title,
          subtitle: benefits.subtitle,
          items: benefits.items.map(item => ({
            fa_icon: item.fa_icon || '',
            title: item.title || '',
            subtitle: item.subtitle || ''
          }))
        }),
        {
          key: 'openings',
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
