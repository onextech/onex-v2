import React from 'react'
import { Block, Blocks } from '@gravis-os/landing'
import {
  renderFadeToBottomBackgroundImageBlock,
  renderThreeColumnGridBlock,
  renderHalfGridBlock,
  renderHeroWithBackgroundBlock,
  renderRightChecklistBlock,
  renderFaqsAccordionBlock,
  renderClientLogosImageMarqueeBlock,
  renderClientHighlightsImageMarqueeBlock,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'
import { Page } from '@onex/types'
import { Slider } from '@gravis-os/ui'

export interface DigitalPageProps {
  page: Page
}

const DigitalPage: React.FC<DigitalPageProps> = (props) => {
  const { page } = props
  const { site, routeConfig, clientLogos, clientHighlights } = useLayout()
  const { sections } = page || {}
  const { cta, callout, halfGrids, hero, benefits, features, faqs, checklist } =
    sections || {}

  return (
    <Blocks
      items={[
        {
          key: 'hero-with-background-fade-slider',
          dark: true,
          center: true,
          disableContainer: true,
          py: 0,
          items: [
            {
              type: 'jsx',
              title: (
                <Slider
                  autoplay
                  loop
                  arrows
                  fade
                  dots
                  dotProps={{ color: 'secondary.main' }}
                  height={{ xs: 500, md: 800 }}
                  items={[
                    <Block
                      fill
                      {...renderHeroWithBackgroundBlock({
                        title: 'We are the Growth Company',
                        ...hero,
                        backgroundImageProps: {
                          src: '/images/about_hero.png',
                          alt: 'hero',
                        },
                      })}
                    />,
                    <Block
                      fill
                      {...renderHeroWithBackgroundBlock({
                        ...hero,
                        title: 'Unleash your X Factor',
                        backgroundImageProps: {
                          src: '/images/about_nodes_above_city.png',
                          alt: 'hero',
                        },
                      })}
                    />,
                    <Block
                      fill
                      {...renderHeroWithBackgroundBlock({
                        ...hero,
                        title: "Deliver Tomorrow's Innovation Today",
                        backgroundImageProps: {
                          src: '/images/mission_earth.png',
                          alt: 'hero',
                        },
                      })}
                    />,
                  ]}
                />
              ),
            },
          ],
        },
        // Benefits
        renderThreeColumnGridBlock({
          ...benefits,
          sx: { backgroundColor: 'background.paper' },
        }),
        // HalfGrid
        ...halfGrids?.items?.map((halfGrid) => renderHalfGridBlock(halfGrid)),
        // ClientLogosImageMarquee
        renderClientLogosImageMarqueeBlock({ items: clientLogos.slice(0, 8) }),
        // Callout
        renderFadeToBottomBackgroundImageBlock(callout),
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
            href: `/${routeConfig.CONTACT}`,
          },
          ...cta,
        }),
      ]}
    />
  )
}

export default DigitalPage
