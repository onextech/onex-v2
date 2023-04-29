import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Post, Technology } from '@onex/types'
import {
  renderFadeToBottomBackgroundImageBlock,
  renderFaqsAccordionBlock,
  renderFourColumnGridBlock,
  renderHeroBlock,
  renderRelatedPostsBlock,
  renderRightChecklistBlock,
  renderThreeColumnGridBlock,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'

export interface TechnologyPageProps {
  technology: Technology
  relatedPosts?: Post[]
}

const TechnologyPage: React.FC<TechnologyPageProps> = (props) => {
  const { technology, relatedPosts } = props
  const { site, routeConfig } = useLayout()
  const { overline, sections } = technology || {}
  const { benefits, callout, features, checklist, faqs, cta } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderHeroBlock({
          item: technology,
          overline: overline || 'Technology',
        }),
        // Benefits
        renderFourColumnGridBlock(benefits),
        // Related Posts
        renderRelatedPostsBlock({
          items: relatedPosts,
          sx: { backgroundColor: 'background.paper' },
        }),
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
          titleProps: { type: 'h3', maxWidth: 'xl' },
          subtitleProps: {
            type: 'body1',
            maxWidth: 'xl',
            titleProps: { maxWidth: '72%' },
          },
          buttonProps: {
            overline: 'Contact Us',
            title: 'Get in Touch',
            isCta: true,
          },
          ...cta,
        }),
      ]}
    />
  )
}

export default TechnologyPage
