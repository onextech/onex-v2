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
                'Meet the moment with our technologys and capabilities that help you define your vision for the future and make it happen.',
              titleProps: {
                color: 'text.secondary',
                maxWidth: '50%',
                sx: { mt: 2 },
              },
            },
            {
              type: 'image',
              title: '/images/about_working_in_office.png',
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
              overline: '01',
              title: 'Design a new product',
              subtitle:
                'We create human-centred designs focused on driving conversions and achieving business goals.',
            },
            {
              avatar_src: '/images/about_shape_squares.svg',
              overline: '02',
              title: 'Launch a new company',
              subtitle:
                'We create human-centred designs focused on driving conversions and achieving business goals.',
            },
            {
              avatar_src: '/images/about_shape_square_with_circle.svg',
              overline: '03',
              title: 'Scale up development',
              subtitle:
                'We create human-centred designs focused on driving conversions and achieving business goals.',
            },
            {
              avatar_src: '/images/about_shape_circles.svg',
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
