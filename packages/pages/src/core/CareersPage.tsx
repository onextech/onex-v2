import React from 'react'
import { Blocks } from '@gravis-os/landing'
import {
  renderJobCardBlockItem,
  renderLeftFourColumnGridBlockItem,
  renderLeftThreeColumnGridBlockItem,
} from '@onex/blocks'
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
            alt: 'People discussing in white office',
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
              titleProps: { mb: { xs: 12, md: 19 }, component: 'h1' },
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
                alt: 'Office with plants',
                background: true,
                backgroundHeight: { xs: 300, md: 500 },
                sx: { my: 3 },
              },
            },
          ],
        },
        renderLeftThreeColumnGridBlockItem({
          title: 'Great Perks For Everyone.',
          subtitle:
            "The driven people who make up our teams come from all over, with different backgrounds. And they all have one thing in common – the desire to make software more human and friendly. If you are eager to learn or use latest technologies, build strong web applications, work and learn with a team of tech experts, then we are looking for you. Check out some of the benefits of working with us!",
            items: [
              {
                fa_icon: 'fa-dollar-sign',
                title: 'Competitive Compensation',
                subtitle:
                  'We provide competitive compensation packages that reflect your skills, expertise, and contributions, ensuring you are rewarded for your valuable work.',
              },
              {
                fa_icon: 'fa-graduation-cap',
                title: 'Professional Development',
                subtitle:
                  'We encourage and support your professional development through ongoing learning opportunities, conferences, workshops, and access to industry resources.',
              },
              {
                fa_icon: 'fa-briefcase',
                title: 'Flexible Work Arrangements',
                subtitle:
                  'We understand the importance of work-life balance, and we offer flexible work arrangements that enable you to manage your personal and professional commitments effectively.',
              },
              {
                fa_icon: 'fa-users',
                title: 'Collaborative Culture',
                subtitle:
                  'We foster a collaborative and inclusive culture that values teamwork, open communication, and diverse perspectives, creating an environment where everyone can thrive.',
              },
              {
                fa_icon: 'fa-cogs',
                title: 'Cutting-Edge Technology',
                subtitle:
                  'We provide access to the latest tools, technologies, and resources to empower you in delivering high-quality software solutions and staying ahead in the rapidly evolving industry.',
              },
              {
                fa_icon: 'fa-gift',
                title: 'Paid Time Off',
                subtitle:
                  'We offer paid time off, including vacation days, holidays, and personal time off, so you can relax, recharge, and maintain a healthy work-life balance.',
              },
            ],
        }),
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
                alt: 'People working in office',
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
