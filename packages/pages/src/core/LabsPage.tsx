import React from 'react'
import {
  Blocks,
  renderFadeToBottomBackgroundImageBlock,
  renderThreeColumnGridBlock,
  renderHalfGridBlock,
  renderRightChecklistBlock,
  renderFaqsAccordionBlock,
  renderClientLogosImageMarqueeBlock,
  renderHeroWithVideoBackgroundBlock,
  useLayout,
} from '@gravis-os/landing'
import { Page } from '@gravis-os/types'

export interface LabsPageProps {
  page: Page
}

const LabsPage: React.FC<LabsPageProps> = (props) => {
  const { page } = props
  const { routeConfig, clientLogos } = useLayout()
  const { sections } = page || {}
  const { cta, callout, halfGrids, hero, benefits, features, faqs, checklist } =
    sections || {}

  return (
    <Blocks
      items={[
        renderHeroWithVideoBackgroundBlock({
          ...hero,
          video_src: '/videos/home_video.mp4',
          video_poster_src: '/videos/home_video_poster.jpg',
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

export default LabsPage
