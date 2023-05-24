import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Technology } from '@onex/types'
import { renderFourColumnGridBlock, renderTechnologysBlock } from '@onex/blocks'

export interface TechnologysPageProps {
  technologys: Technology[]
}

const TechnologysPage: React.FC<TechnologysPageProps> = (props) => {
  const { technologys } = props

  return (
    <Blocks
      items={[
        {
          key: 'hero',
          pt: { xs: 5, md: 10 },
          pb: 0,
          sx: { backgroundColor: 'background.paper' },
          items: [
            { type: 'overline', title: 'Technologies' },
            {
              type: 'h1',
              title: 'Technologies',
            },
            {
              type: 'subtitle1',
              title:
                'Explore the innovative technologies and frameworks we leverage to deliver modern and seamless digital experiences.',
              titleProps: {
                color: 'text.secondary',
                maxWidth: '50%',
                sx: { mt: 2 },
              },
            },
            {
              type: 'image',
              title: 'https://source.unsplash.com/Q1p7bh3SHj8/1600x900',
              disableContainer: true,
              titleProps: {
                alt: 'People working in office',
                background: true,
                backgroundHeight: { xs: 320, md: 450 },
                backgroundSx: { mt: 5 },
              },
            },
          ],
        },
        renderFourColumnGridBlock({
          overline: 'What we do',
          title: (
            <span>
              Applications That Matter
              <br />
              At Startup Speed
            </span>
          ),
          subtitle:
            'Speed in the digital arena is key. Our process is focused around delivering high quality work quickly. Whether you are looking for stunning app designs or a highly customised enterprise system, our process is here to support you.',
          items: [
            {
              avatar_src: '/images/about_shape_circle_radial.svg',
              avatar_alt: 'Three circles',
              overline: '01',
              title: 'Design a new product',
              subtitle:
                'We create human-centred designs focused on driving conversions and achieving business goals.',
            },
            {
              avatar_src: '/images/about_shape_squares.svg',
              avatar_alt: 'Three squares',
              overline: '02',
              title: 'Launch a new company',
              subtitle:
                'We create human-centred designs focused on driving conversions and achieving business goals.',
            },
            {
              avatar_src: '/images/about_shape_square_with_circle.svg',
              avatar_alt: 'Square with two circles',
              overline: '03',
              title: 'Scale up development',
              subtitle:
                'We create human-centred designs focused on driving conversions and achieving business goals.',
            },
            {
              avatar_src: '/images/about_shape_circles.svg',
              avatar_alt: 'Three circles',
              overline: '04',
              title: 'Improve a current system',
              subtitle:
                'We create human-centred designs focused on driving conversions and achieving business goals.',
            },
          ],
        }),
        renderTechnologysBlock({ items: technologys }),
      ]}
    />
  )
}

export default TechnologysPage
