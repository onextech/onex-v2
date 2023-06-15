import React from 'react'
import {
  Blocks,
  renderFadeToBottomBackgroundImageBlock,
  renderFourColumnGridBlock,
  renderHalfGridBlock,
  renderHeroWithBackgroundBlock,
  Showcase,
  useLayout,
} from '@gravis-os/landing'
import { Page } from '@gravis-os/types'

export interface DataPageProps {
  page: Page
  showcases?: Showcase[]
}

const DataPage: React.FC<DataPageProps> = (props) => {
  const { page } = props
  const { site, routeConfig } = useLayout()
  const { overline, sections } = page || {}
  const { hero, benefits, features, checklist, faqs, cta } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderHeroWithBackgroundBlock({
          ...hero,
          buttonProps: {
            overline: 'What we do',
            title: 'Smarter Businesses',
            size: 'lg',
            href: routeConfig.SERVICES,
          },
          secondaryButtonProps: {
            overline: 'Who we are',
            title: 'Business Software Experts',
            size: 'lg',
            href: routeConfig.CAREERS,
          },
        }),
        // Benefits
        renderFourColumnGridBlock({
          ...benefits,
          sx: { backgroundColor: 'background.paper' },
        }),
        // HalfGrid
        renderHalfGridBlock({
          hero_src: '/images/ecosystem_tech.png',
          hero_alt: 'Data UI Collage',
          fullHeight: true,
          overline: 'What we do',
          title: 'One X Tech',
          subtitle:
            'Maximise business growth through insight driven web data. We put business first in everything we do.',
        }),
        renderHalfGridBlock({
          reverse: true,
          hero_src: '/images/ecosystem_design.png',
          hero_alt: 'Data UI Collage',
          fullHeight: true,
          overline: 'What we do',
          title: 'One X Design',
          subtitle:
            'Maximise business growth through insight driven web data. We put business first in everything we do.',
        }),
        renderHalfGridBlock({
          hero_src: '/images/ecosystem_data.png',
          hero_alt: 'Data UI Collage',
          fullHeight: true,
          overline: 'What we do',
          title: 'One X Data',
          subtitle:
            'Maximise business growth through insight driven web data. We put business first in everything we do.',
        }),
        renderHalfGridBlock({
          reverse: true,
          hero_src: '/images/ecosystem_data.png',
          hero_alt: 'Data UI Collage',
          fullHeight: true,
          overline: 'What we do',
          title: 'One X Digital',
          subtitle:
            'Maximise business growth through insight driven web data. We put business first in everything we do.',
        }),
        renderFadeToBottomBackgroundImageBlock({
          hero_src: '/images/design_men.png',
          hero_alt: 'Two men working',
          titleProps: { type: 'h3', maxWidth: 'xl' },
          subtitleProps: {
            type: 'body1',
            maxWidth: 'xl',
            titleProps: { maxWidth: '72%' },
          },
          buttonProps: {
            overline: 'Contact Us',
            title: 'Get in Touch',
            href: `/${routeConfig.CONTACT}`,
          },
          ...cta,
        }),
      ]}
    />
  )
}

export default DataPage
