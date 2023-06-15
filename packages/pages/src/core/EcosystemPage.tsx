import React from 'react'
import {
  Blocks,
  renderFadeToBottomBackgroundImageBlock,
  renderFourColumnGridBlock,
  renderGhostButtonBlockItem,
  renderHalfGridBlock,
  useLayout,
} from '@gravis-os/landing'
import { Page } from '@gravis-os/types'

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
          key: 'ecosystem-hero',
          dark: true,
          py: 30,
          center: true,
          maxWidth: 'md',
          backgroundImageProps: {
            src: '/images/ecosystem_nightsky.png',
            alt: 'hero',
          },
          items: [
            { type: 'overline', title: 'Ecosystem' },
            {
              type: 'h2',
              title: 'Get to know our Ecosystem',
              titleProps: { gutterBottom: true },
            },
            {
              type: 'subtitle1',
              title:
                'Maximise business growth through insight driven web ecosystem. We put business first in everything we do.',
              titleProps: { color: 'text.secondary', maxWidth: true },
            },
            {
              type: 'stack',
              sx: { mt: 3 },
              stackProps: {
                spacing: 0,
                center: true,
                direction: 'row',
                reverseDirectionOnMobile: true,
              },
              stackItems: [
                {
                  items: [
                    renderGhostButtonBlockItem({
                      overline: 'What we do',
                      title: 'Smarter Businesses',
                      size: 'lg',
                      href: routeConfig.SERVICES,
                    }),
                  ],
                },
                {
                  items: [
                    renderGhostButtonBlockItem({
                      overline: 'Who we are',
                      title: 'Business Software Experts',
                      size: 'lg',
                      href: routeConfig.CAREERS,
                    }),
                  ],
                },
              ],
            },
          ],
        },
        // Benefits
        renderFourColumnGridBlock({
          ...benefits,
          sx: { backgroundColor: 'background.paper' },
        }),
        // HalfGrid
        renderHalfGridBlock({
          hero_src: '/images/ecosystem_tech.png',
          hero_alt: 'Ecosystem UI Collage',
          fullHeight: true,
          overline: 'What we do',
          title: 'One X Tech',
          subtitle:
            'Maximise business growth through insight driven web ecosystem. We put business first in everything we do.',
          buttonProps: {
            title: 'Enabling Smarter Businesses',
            href: routeConfig.MISSION,
          },
        }),
        renderHalfGridBlock({
          reverse: true,
          hero_src: '/images/ecosystem_design.png',
          hero_alt: 'Ecosystem UI Collage',
          fullHeight: true,
          overline: 'What we do',
          title: 'One X Design',
          subtitle:
            'Maximise business growth through insight driven web ecosystem. We put business first in everything we do.',
          buttonProps: {
            title: 'Enabling Smarter Businesses',
            href: routeConfig.MISSION,
          },
        }),
        renderHalfGridBlock({
          hero_src: '/images/ecosystem_data.png',
          hero_alt: 'Ecosystem UI Collage',
          fullHeight: true,
          overline: 'What we do',
          title: 'One X Data',
          subtitle:
            'Maximise business growth through insight driven web ecosystem. We put business first in everything we do.',
          buttonProps: {
            title: 'Enabling Smarter Businesses',
            href: routeConfig.MISSION,
          },
        }),
        renderHalfGridBlock({
          reverse: true,
          hero_src: '/images/ecosystem_digital.png',
          hero_alt: 'Ecosystem UI Collage',
          fullHeight: true,
          overline: 'What we do',
          title: 'One X Digital',
          subtitle:
            'Maximise business growth through insight driven web ecosystem. We put business first in everything we do.',
          buttonProps: {
            title: 'Enabling Smarter Businesses',
            href: routeConfig.MISSION,
          },
        }),
        renderFadeToBottomBackgroundImageBlock({
          hero_src: '/images/ecosystem_men.png',
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

export default EcosystemPage
