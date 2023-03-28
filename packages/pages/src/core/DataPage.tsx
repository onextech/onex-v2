import React from 'react'
import { Blocks } from '@gravis-os/landing'
import {
  renderFadeToBottomBackgroundImageBlock,
  renderFourColumnGridBlock,
  renderGhostButtonBlockItem,
  renderHalfGridBlock,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'
import { Page } from '@onex/types'

export interface DataPageProps {
  data: Page
}

const DataPage: React.FC<DataPageProps> = (props) => {
  const { data } = props
  const { appConfig, routeConfig } = useLayout()
  const { overline, sections } = data || {}
  const { summary, benefits, features, checklist, faqs, cta } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        {
          key: 'data-hero',
          dark: true,
          py: 30,
          center: true,
          maxWidth: 'md',
          backgroundImageProps: {
            src: '/images/data_nightsky.png',
            alt: 'hero',
          },
          items: [
            { type: 'overline', title: 'Data' },
            {
              type: 'h2',
              title: 'Get to know our Data',
              titleProps: { gutterBottom: true },
            },
            {
              type: 'subtitle1',
              title:
                'Maximise business growth through insight driven web data. We put business first in everything we do.',
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
          hero_src: '/images/data_tech.png',
          hero_alt: 'Data UI Collage',
          fullHeight: true,
          overline: 'What we do',
          title: 'One X Tech',
          subtitle:
            'Maximise business growth through insight driven web data. We put business first in everything we do.',
        }),
        renderHalfGridBlock({
          reverse: true,
          hero_src: '/images/data_design.png',
          hero_alt: 'Data UI Collage',
          fullHeight: true,
          overline: 'What we do',
          title: 'One X Design',
          subtitle:
            'Maximise business growth through insight driven web data. We put business first in everything we do.',
        }),
        renderHalfGridBlock({
          hero_src: '/images/data_data.png',
          hero_alt: 'Data UI Collage',
          fullHeight: true,
          overline: 'What we do',
          title: 'One X Data',
          subtitle:
            'Maximise business growth through insight driven web data. We put business first in everything we do.',
        }),
        renderHalfGridBlock({
          reverse: true,
          hero_src: '/images/data_data.png',
          hero_alt: 'Data UI Collage',
          fullHeight: true,
          overline: 'What we do',
          title: 'One X Data',
          subtitle:
            'Maximise business growth through insight driven web data. We put business first in everything we do.',
        }),
        renderFadeToBottomBackgroundImageBlock({
          hero_src: '/images/data_men.png',
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
            href: `${appConfig.companyAbsoluteUrl}${routeConfig.CONTACT}`,
          },
          ...cta,
        }),
      ]}
    />
  )
}

export default DataPage
