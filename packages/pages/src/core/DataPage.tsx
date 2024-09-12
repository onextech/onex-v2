import React from 'react'

import {
  Blocks,
  renderFadeToBottomBackgroundImageBlock,
  renderFourColumnGridBlock,
  renderHalfGridBlock,
  renderHeroWithBackgroundBlock,
  useLayout,
} from '@onex/landing'
import { Page, Showcase } from '@onex/types'

export interface DataPageProps {
  page: Page
  showcases?: Showcase[]
}

const DataPage: React.FC<DataPageProps> = (props) => {
  const { page } = props
  const { routeConfig, site } = useLayout()
  const { overline, sections } = page || {}
  const { benefits, checklist, cta, faqs, features, hero } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderHeroWithBackgroundBlock({
          ...hero,
          buttonProps: {
            title: 'Smarter Businesses',
            href: routeConfig.SERVICES,
            overline: 'What we do',
            size: 'lg',
          },
          secondaryButtonProps: {
            title: 'Business Software Experts',
            href: routeConfig.CAREERS,
            overline: 'Who we are',
            size: 'lg',
          },
        }),
        // Benefits
        renderFourColumnGridBlock({
          ...benefits,
          sx: { backgroundColor: 'background.paper' },
        }),
        // HalfGrid
        renderHalfGridBlock({
          title: 'One X Tech',
          fullHeight: true,
          hero_alt: 'Data UI Collage',
          hero_src: '/images/ecosystem_tech.png',
          overline: 'What we do',
          subtitle:
            'Maximise business growth through insight driven web data. We put business first in everything we do.',
        }),
        renderHalfGridBlock({
          title: 'One X Design',
          fullHeight: true,
          hero_alt: 'Data UI Collage',
          hero_src: '/images/ecosystem_design.png',
          overline: 'What we do',
          reverse: true,
          subtitle:
            'Maximise business growth through insight driven web data. We put business first in everything we do.',
        }),
        renderHalfGridBlock({
          title: 'One X Data',
          fullHeight: true,
          hero_alt: 'Data UI Collage',
          hero_src: '/images/ecosystem_data.png',
          overline: 'What we do',
          subtitle:
            'Maximise business growth through insight driven web data. We put business first in everything we do.',
        }),
        renderHalfGridBlock({
          title: 'One X Digital',
          fullHeight: true,
          hero_alt: 'Data UI Collage',
          hero_src: '/images/ecosystem_data.png',
          overline: 'What we do',
          reverse: true,
          subtitle:
            'Maximise business growth through insight driven web data. We put business first in everything we do.',
        }),
        renderFadeToBottomBackgroundImageBlock({
          buttonProps: {
            title: 'Get in Touch',
            href: `/${routeConfig.CONTACT}`,
            overline: 'Contact Us',
          },
          hero_alt: 'Two men working',
          hero_src: '/images/design_men.png',
          subtitleProps: {
            maxWidth: 'xl',
            titleProps: { maxWidth: '72%' },
            type: 'body1',
          },
          titleProps: { maxWidth: 'xl', type: 'h3' },
          ...cta,
        }),
      ]}
    />
  )
}

export default DataPage
