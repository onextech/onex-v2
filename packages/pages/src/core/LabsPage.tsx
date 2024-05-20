import React from 'react'

import {
  Blocks,
  renderClientLogosImageMarqueeBlock,
  renderFadeToBottomBackgroundImageBlock,
  renderFaqsAccordionBlock,
  renderHalfGridBlock,
  renderHeroWithVideoBackgroundBlock,
  renderRightChecklistBlock,
  renderThreeColumnGridBlock,
  useLayout,
} from '@gravis-os/landing'
import { Page } from '@gravis-os/types'

export interface LabsPageProps {
  page: Page
}

const LabsPage: React.FC<LabsPageProps> = (props) => {
  const { page } = props
  const { clientLogos, routeConfig } = useLayout()
  const { sections } = page || {}
  const { benefits, callout, checklist, cta, faqs, features, halfGrids, hero } =
    sections || {}

  return (
    <Blocks
      items={[
        // @ts-ignore
        renderHeroWithVideoBackgroundBlock({
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
          video_poster_src: '/videos/home_video_poster.jpg',
          video_src: '/videos/home_video.mp4',
        }),
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
          buttonProps: {
            title: 'Get in Touch',
            href: `/${routeConfig.CONTACT}`,
            overline: 'Contact Us',
          },
          hero_alt: 'Two men working',
          hero_src: '/images/data_men.png',
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

export default LabsPage
