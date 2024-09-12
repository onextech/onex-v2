import React from 'react'

import {
  Blocks,
  renderFadeToBottomBackgroundImageBlock,
  renderFourColumnGridBlock,
  renderGhostButtonBlockItem,
  renderHalfGridBlock,
  useLayout,
} from '@onex/landing'
import { Page } from '@onex/types'

export interface EcosystemPageProps {
  ecosystem: Page
}

const EcosystemPage: React.FC<EcosystemPageProps> = (props) => {
  const { ecosystem } = props
  const { routeConfig } = useLayout()
  const { sections } = ecosystem || {}
  const { benefits, cta } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        {
          id: 'ecosystem-hero',
          backgroundImageProps: {
            alt: 'hero',
            src: '/images/ecosystem_nightsky.png',
          },
          center: true,
          dark: true,
          items: [
            { title: 'Ecosystem', type: 'overline' },
            {
              title: 'Get to know our Ecosystem',
              titleProps: { gutterBottom: true },
              type: 'h2',
            },
            {
              title:
                'Maximise business growth through insight driven web ecosystem. We put business first in everything we do.',
              titleProps: { color: 'text.secondary', maxWidth: true },
              type: 'subtitle1',
            },
            {
              stackItems: [
                {
                  items: [
                    renderGhostButtonBlockItem({
                      title: 'Smarter Businesses',
                      href: routeConfig.SERVICES,
                      overline: 'What we do',
                      size: 'lg',
                    }),
                  ],
                },
                {
                  items: [
                    renderGhostButtonBlockItem({
                      title: 'Business Software Experts',
                      href: routeConfig.CAREERS,
                      overline: 'Who we are',
                      size: 'lg',
                    }),
                  ],
                },
              ],
              stackProps: {
                center: true,
                direction: 'row',
                reverseDirectionOnMobile: true,
                spacing: 0,
              },
              sx: { mt: 3 },
              type: 'stack',
            },
          ],
          maxWidth: 'md',
          py: 30,
        },
        // Benefits
        renderFourColumnGridBlock({
          ...benefits,
          sx: { backgroundColor: 'background.paper' },
        }),
        // HalfGrid
        renderHalfGridBlock({
          title: 'One X Tech',
          buttonProps: {
            title: 'Enabling Smarter Businesses',
            href: routeConfig.MISSION,
          },
          fullHeight: true,
          hero_alt: 'Ecosystem UI Collage',
          hero_src: '/images/ecosystem_tech.png',
          overline: 'What we do',
          subtitle:
            'Maximise business growth through insight driven web ecosystem. We put business first in everything we do.',
        }),
        renderHalfGridBlock({
          title: 'One X Design',
          buttonProps: {
            title: 'Enabling Smarter Businesses',
            href: routeConfig.MISSION,
          },
          fullHeight: true,
          hero_alt: 'Ecosystem UI Collage',
          hero_src: '/images/ecosystem_design.png',
          overline: 'What we do',
          reverse: true,
          subtitle:
            'Maximise business growth through insight driven web ecosystem. We put business first in everything we do.',
        }),
        renderHalfGridBlock({
          title: 'One X Data',
          buttonProps: {
            title: 'Enabling Smarter Businesses',
            href: routeConfig.MISSION,
          },
          fullHeight: true,
          hero_alt: 'Ecosystem UI Collage',
          hero_src: '/images/ecosystem_data.png',
          overline: 'What we do',
          subtitle:
            'Maximise business growth through insight driven web ecosystem. We put business first in everything we do.',
        }),
        renderHalfGridBlock({
          title: 'One X Digital',
          buttonProps: {
            title: 'Enabling Smarter Businesses',
            href: routeConfig.MISSION,
          },
          fullHeight: true,
          hero_alt: 'Ecosystem UI Collage',
          hero_src: '/images/ecosystem_digital.png',
          overline: 'What we do',
          reverse: true,
          subtitle:
            'Maximise business growth through insight driven web ecosystem. We put business first in everything we do.',
        }),
        renderFadeToBottomBackgroundImageBlock({
          buttonProps: {
            title: 'Get in Touch',
            href: `/${routeConfig.CONTACT}`,
            overline: 'Contact Us',
          },
          hero_alt: 'Two men working',
          hero_src: '/images/ecosystem_men.png',
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

export default EcosystemPage
