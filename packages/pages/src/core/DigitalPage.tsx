import React from 'react'
import { Blocks } from '@gravis-os/landing'
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

export interface DigitalPageProps {
  digital: Page
}

const DigitalPage: React.FC<DigitalPageProps> = (props) => {
  const { digital } = props
  const { site, routeConfig, clientLogos, clientHighlights } = useLayout()
  const { sections } = digital || {}
  const { cta, callout, halfGrids, hero, benefits, features, faqs, checklist } =
    sections || {}

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
        // Marquee
        renderClientHighlightsImageMarqueeBlock({ items: clientHighlights }),
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
            href: `${site.company_absolute_url}${routeConfig.CONTACT}`,
          },
          ...cta,
        }),
      ]}
    />
  )
}

export default DigitalPage
