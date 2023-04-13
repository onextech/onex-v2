import React from 'react'
import { Blocks } from '@gravis-os/landing'
import {
  renderClientLogosImageMarqueeBlock,
  renderFaqsAccordionBlock,
  renderFourColumnGridBlock,
  renderGhostButtonBlockItem,
  renderHalfGridBlock,
  renderRightChecklistBlock,
  renderThreeColumnGridBlock,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'
import { Page, Showcase } from '@onex/types'

export interface DesignPageProps {
  design: Page
  showcases?: Showcase[]
}

const DesignPage: React.FC<DesignPageProps> = (props) => {
  const { design } = props
  const { site, routeConfig, clientLogos } = useLayout()
  const { overline, sections } = design || {}
  const { hero, benefits, features, checklist, faqs, cta } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        {
          dark: true,
          key: 'design-impact',
          centerOnMobile: true,
          pt: { xs: 20, xl: 20 },
          pb: { xs: 20, xl: 70 },
          backgroundImageProps: {
            src: '/images/design_hero.png',
            alt: 'hero',
            sx: { opacity: 0.2 },
          },
          items: [
            { type: 'overline', title: hero.overline },
            {
              type: 'h2',
              title: hero.title,
              titleProps: { gutterBottom: true },
            },
            {
              type: 'subtitle1',
              title: hero.subtitle,
              titleProps: { color: 'text.secondary', maxWidth: '50%' },
            },
            {
              type: 'stack',
              sx: { mt: 3 },
              stackProps: {
                spacing: 0,
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
        // ClientLogosImageMarquee
        renderClientLogosImageMarqueeBlock({ items: clientLogos.slice(0, 8) }),
        // Benefits
        renderFourColumnGridBlock({
          ...benefits,
          sx: { backgroundColor: 'background.paper' },
        }),
        // HalfGrid
        renderHalfGridBlock({
          hero_src: '/images/design_collage.png',
          hero_alt: 'Design UI Collage',
          fullHeight: true,
          overline: 'What we do',
          title: 'We Design for Impact 1',
          subtitle:
            'Maximise business growth through insight driven web design. We put business first in everything we do.',
        }),
        // Features
        renderThreeColumnGridBlock(features),
        // Checklist
        renderRightChecklistBlock({
          py: 0,
          ...checklist,
        }),
        // Faqs
        renderFaqsAccordionBlock({
          py: { xs: 5, md: 10 },
          ...faqs,
        }),
        // Cta
        {
          key: cta.title,
          center: true,
          maxWidth: 'md',
          pt: { xs: 5, md: 10 },
          pb: 0,
          items: [
            { type: 'overline', title: overline },
            {
              type: 'h3',
              title: cta.title,
              titleProps: { type: 'h3', maxWidth: 'xl', gutterBottom: true },
            },
            {
              type: 'body1',
              title: cta.subtitle,
              titleProps: {
                color: 'text.secondary',
              },
            },
            renderGhostButtonBlockItem({
              boxProps: { mt: 3 },
              overline: 'Contact Us',
              title: 'Get in Touch',
              href: `${site.company_absolute_url}${routeConfig.CONTACT}`,
            }),
            {
              type: 'image',
              title: '/images/design_men.png',
              disableContainer: true,
              titleProps: {
                alt: 'design men',
                background: true,
                backgroundHeight: { xs: 480, md: 640 },
                backgroundSx: { mt: { xs: 5, md: 10 } },
              },
            },
          ],
        },
      ]}
    />
  )
}

export default DesignPage
