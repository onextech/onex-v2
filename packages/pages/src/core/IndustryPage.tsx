import type { Industry, Post } from '@onex/types'

import React from 'react'

import {
  Blocks,
  renderFadeToBottomBackgroundImageBlock,
  renderFaqsAccordionBlock,
  renderHeroBlock,
  renderSummaryBlockItem,
  renderRelatedPostsBlock,
  renderRightChecklistBlock,
  renderThreeColumnGridBlock,
} from '@onex/landing'

import GetStartedPage from './GetStartedPage'

export interface IndustryPageProps {
  industry: Industry
  relatedPosts?: Post[]
}

const IndustryPage: React.FC<IndustryPageProps> = (props) => {
  const { industry, relatedPosts } = props
  const { sections } = industry || {}
  const { checklist, cta, faqs, features, summary } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderHeroBlock({
          item: industry,
        }),
        // Summary
        renderSummaryBlockItem({
          pb: 0,
          pt: { xs: 5, md: 10 },
          ...summary,
        }),
        // Features
        renderThreeColumnGridBlock(features),
        // Posts
        renderRelatedPostsBlock({ items: relatedPosts }),
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

export default IndustryPage
