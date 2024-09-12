import type { Post, Technology } from '@onex/types'

import React from 'react'

import {
  Blocks,
  renderFadeToBottomBackgroundImageBlock,
  renderFaqsAccordionBlock,
  renderFourColumnGridBlock,
  renderHeroBlock,
  renderRelatedPostsBlock,
  renderRightChecklistBlock,
  renderThreeColumnGridBlock,
} from '@onex/landing'

import GetStartedPage from './GetStartedPage'

export interface TechnologyPageProps {
  relatedPosts?: Post[]
  technology: Technology
}

const TechnologyPage: React.FC<TechnologyPageProps> = (props) => {
  const { relatedPosts, technology } = props
  const { sections } = technology || {}
  const { benefits, callout, checklist, cta, faqs, features } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderHeroBlock({
          item: technology,
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
          buttonProps: {
            title: 'Get in Touch',
            children: <GetStartedPage disableTestimonials fullScreen />,
            isCta: true,
            overline: 'Contact Us',
          },
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

export default TechnologyPage
