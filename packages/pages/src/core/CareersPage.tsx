import React from 'react'
import { Blocks } from '@gravis-os/landing'
import renderJobCardBlockItem from '@onex/blocks/src/core/renderJobCardBlockItem'
import type { Job } from '@onex/types'

export interface CareersPageProps {
  jobs: Job[]
}

const commonBlockProps = { center: true, maxWidth: 'xl' }

const CareersPage: React.FC<CareersPageProps> = (props) => {
  const { jobs } = props
  return (
    <Blocks
      items={[
        {
          py: { xs: 14, md: 28 },
          dark: true,
          key: 'growth-company',
          ...commonBlockProps,
          backgroundImageProps: {
            src: '/images/careers_hero.png',
            alt: 'hero',
          },
          items: [
            { type: 'overline', title: 'Careers' },
            {
              type: 'h2',
              title: (
                <span>
                  Help Bring Great <br /> Software to More People.
                </span>
              ),
              titleProps: { mb: { xs: 12, md: 19 } },
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
              title:
                "Join The Team That's Building Tomorrow's Technology Today.",
              titleProps: { gutterBottom: true },
              containerProps: { maxWidth: 'sm' },
            },
            {
              type: 'body1',
              title:
                'We’re driven by our goal of improving lives through the products we design and build. We look for people with a commitment to excellence who take initiative to make products great.',
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
                alt: 'about_working_in_office',
                background: true,
                backgroundHeight: { xs: 300, md: 500 },
                sx: { my: 3 },
              },
            },
          ],
        },
        {
          key: 'perks',
          ...commonBlockProps,
          center: false,
          items: [
            {
              type: 'h3',
              title: 'Great Perks For Everyone.',
              titleProps: { gutterBottom: true, textAlign: 'left' },
            },
            {
              type: 'subtitle1',
              title:
                " The driven people who make up One X Tech's teams come from all over, with different backgrounds. And they all have one thing in common – the desire to make software more human and friendly. If you are eager to learn or use latest technologies, build strong web applications, work and learn with a team of tech experts, then we are looking for you. Ready to build software? Check out our job openings.",
              titleProps: {
                color: 'text.secondary',
                maxWidth: '70%',
              },
            },
            {
              type: 'grid',
              sx: { mt: { xs: 5, md: 10 } },
              gridProps: { spacing: 6 },
              gridItemProps: {
                xs: 6,
                md: 3,
                sx: { textAlign: { xs: 'center', md: 'left' } },
              },
              gridItems: [
                {
                  items: [
                    {
                      type: 'fa-icon',
                      title: 'fa-4x fa-thin fa-cake-candles',
                    },
                    {
                      type: 'subtitle2',
                      title: '01',
                      titleProps: {
                        color: 'text.secondary',
                        sx: { mt: 4, mb: 3 },
                      },
                    },
                    {
                      type: 'subtitle2',
                      title: 'Collaborative',
                      titleProps: { gutterBottom: true },
                    },
                    {
                      type: 'body1',
                      title:
                        'We create human-centred designs focused on driving conversions and achieving business goals.',
                      titleProps: { color: 'text.secondary' },
                    },
                  ],
                },
                {
                  items: [
                    {
                      type: 'fa-icon',
                      title: 'fa-4x fa-thin fa-gingerbread-man',
                    },
                    {
                      type: 'subtitle2',
                      title: '02',
                      titleProps: {
                        color: 'text.secondary',
                        sx: { mt: 4, mb: 3 },
                      },
                    },
                    {
                      type: 'subtitle2',
                      title: 'Launch a new company',
                      titleProps: { gutterBottom: true },
                    },
                    {
                      type: 'body1',
                      title:
                        'Launch your MVP at start-up speed with an expert team of designers and developers.',
                      titleProps: { color: 'text.secondary' },
                    },
                  ],
                },
                {
                  items: [
                    {
                      type: 'fa-icon',
                      title: 'fa-4x fa-thin fa-watch',
                    },
                    {
                      type: 'subtitle2',
                      title: '03',
                      titleProps: {
                        color: 'text.secondary',
                        sx: { mt: 4, mb: 3 },
                      },
                    },
                    {
                      type: 'subtitle2',
                      title: 'Scale up development',
                      titleProps: { gutterBottom: true },
                    },
                    {
                      type: 'body1',
                      title:
                        'Our team works directly with you to boost your development speed and scale.',
                      titleProps: { color: 'text.secondary' },
                    },
                  ],
                },
                {
                  items: [
                    {
                      type: 'fa-icon',
                      title: 'fa-4x fa-thin fa-hand-holding-seedling',
                    },
                    {
                      type: 'subtitle2',
                      title: '04',
                      titleProps: {
                        color: 'text.secondary',
                        sx: { mt: 4, mb: 3 },
                      },
                    },
                    {
                      type: 'subtitle2',
                      title: 'Improve a current system',
                      titleProps: { gutterBottom: true },
                    },
                    {
                      type: 'body1',
                      title:
                        "Identify areas for automation and improve efficiency so you can spend more time on what's important.",
                      titleProps: { color: 'text.secondary' },
                    },
                  ],
                },
                {
                  items: [
                    {
                      type: 'fa-icon',
                      title: 'fa-4x fa-thin fa-mug-hot',
                    },
                    {
                      type: 'subtitle2',
                      title: '05',
                      titleProps: {
                        color: 'text.secondary',
                        sx: { mt: 4, mb: 3 },
                      },
                    },
                    {
                      type: 'subtitle2',
                      title: 'Food & Drinks',
                      titleProps: { gutterBottom: true },
                    },
                    {
                      type: 'body1',
                      title:
                        'We create human-centred designs focused on driving conversions and achieving business goals.',
                      titleProps: { color: 'text.secondary' },
                    },
                  ],
                },
                {
                  items: [
                    {
                      type: 'fa-icon',
                      title: 'fa-4x fa-thin fa-puzzle-piece',
                    },
                    {
                      type: 'subtitle2',
                      title: '06',
                      titleProps: {
                        color: 'text.secondary',
                        sx: { mt: 4, mb: 3 },
                      },
                    },
                    {
                      type: 'subtitle2',
                      title: 'Live It Up',
                      titleProps: { gutterBottom: true },
                    },
                    {
                      type: 'body1',
                      title:
                        'Launch your MVP at start-up speed with an expert team of designers and developers.',
                      titleProps: { color: 'text.secondary' },
                    },
                  ],
                },
                {
                  items: [
                    {
                      type: 'fa-icon',
                      title: 'fa-4x fa-thin fa-guitar',
                    },
                    {
                      type: 'subtitle2',
                      title: '07',
                      titleProps: {
                        color: 'text.secondary',
                        sx: { mt: 4, mb: 3 },
                      },
                    },
                    {
                      type: 'subtitle2',
                      title: 'Rewards',
                      titleProps: { gutterBottom: true },
                    },
                    {
                      type: 'body1',
                      title:
                        'Our team works directly with you to boost your development speed and scale.',
                      titleProps: { color: 'text.secondary' },
                    },
                  ],
                },
                {
                  items: [
                    {
                      type: 'fa-icon',
                      title: 'fa-4x fa-thin fa-table-tennis',
                    },
                    {
                      type: 'subtitle2',
                      title: '08',
                      titleProps: {
                        color: 'text.secondary',
                        sx: { mt: 4, mb: 3 },
                      },
                    },
                    {
                      type: 'subtitle2',
                      title: 'Convenience',
                      titleProps: { gutterBottom: true },
                    },
                    {
                      type: 'body1',
                      title:
                        "Identify areas for automation and improve efficiency so you can spend more time on what's important.",
                      titleProps: { color: 'text.secondary' },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          key: 'careers',
          ...commonBlockProps,
          sx: { backgroundColor: 'background.paper' },
          pt: 5,
          pb: 0,
          items: [
            {
              type: 'overline',
              title: 'Careers',
              titleProps: { color: 'text.secondary' },
            },
            {
              type: 'h3',
              title: (
                <span>
                  Thinkers & Tinkerers <br /> Coming Together
                </span>
              ),
            },
            {
              type: 'image',
              title: '/images/about_working_in_office.png',
              disableContainer: true,
              titleProps: {
                alt: 'about_working_in_office',
                fill: true,
                sx: { mt: 7 },
              },
            },
          ],
        },
        {
          key: 'openings',
          ...commonBlockProps,
          center: false,
          items: [
            {
              type: 'h3',
              title: 'Openings.',
              titleProps: { gutterBottom: true, textAlign: 'left' },
            },
            {
              type: 'subtitle1',
              title:
                'We are always interested in meeting new people who can help us create new and unique meaningful experiences. If you don’t see a role that suits but you believe you have a lot to offer, we’d love to hear from you.',
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
