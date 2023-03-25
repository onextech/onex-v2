import React from 'react'
import { Blocks } from '@gravis-os/landing'
import {
  renderFadeToBottomBackgroundImageBlock,
  renderFaqsAccordionBlock,
  renderFourColumnGridBlock,
  renderGhostButtonBlockItem,
  renderHalfGridBlock,
  renderRightChecklistBlock,
  renderThreeColumnGridBlock,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'

export interface DesignPageProps {
  design: any
}

const DesignPage: React.FC<DesignPageProps> = (props) => {
  const { design } = props
  const { appConfig, routeConfig } = useLayout()
  const { overline, sections } = design || {}
  const { summary, benefits, features, checklist, faqs, cta } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        {
          dark: true,
          py: 30,
          center: true,
          key: 'growth-company',
          maxWidth: 'md',
          backgroundImageProps: {
            src: '/images/about_hero.png',
            alt: 'hero',
          },
          items: [
            { type: 'overline', title: 'Design' },
            {
              type: 'h2',
              title: 'We Design for Impact',
              titleProps: { gutterBottom: true },
            },
            {
              type: 'subtitle1',
              title:
                'Maximise business growth through insight driven web design. We put business first in everything we do.',
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
        // HalfGrid
        renderHalfGridBlock({
          fullHeight: true,
          overline: 'What we do',
          title: 'We Design for Impact 1',
          subtitle:
            'Maximise business growth through insight driven web design. We put business first in everything we do.',
        }),
        renderHalfGridBlock({
          reverse: true,
          fullHeight: true,
          overline: 'What we do',
          title: 'We Design for Impact 2',
          subtitle:
            'Maximise business growth through insight driven web design. We put business first in everything we do.',
        }),
        renderHalfGridBlock({
          fullHeight: true,
          overline: 'What we do',
          title: 'We Design for Impact 3',
          subtitle:
            'Maximise business growth through insight driven web design. We put business first in everything we do.',
        }),
        // Benefits
        renderFourColumnGridBlock({
          ...benefits,
          sx: { backgroundColor: 'background.paper' },
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
        renderFadeToBottomBackgroundImageBlock({
          titleProps: { type: 'h3', maxWidth: 'lg' },
          subtitleProps: {
            type: 'body1',
            maxWidth: 'lg',
            titleProps: { maxWidth: '72%' },
          },
          buttonProps: {
            overline: 'Contact Us',
            title: 'Get in Touch',
            href: `${appConfig.companyAbsoluteUrl}${routeConfig.CONTACT}`,
          },
          ...cta,
        }),
      ]}
    />
  )
}

export default DesignPage
