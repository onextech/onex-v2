import React from 'react'
import {
  Blocks,
  renderFadeToBottomBackgroundImageBlock,
  renderFaqsAccordionBlock,
  renderHeroBlock,
  renderParagraphBlockItem,
  renderRelatedPostsBlock,
  renderRightChecklistBlock,
  renderThreeColumnGridBlock,
} from '@gravis-os/landing'
import type { Industry, Post } from '@gravis-os/types'
import GetStartedPage from './GetStartedPage'

export interface IndustryPageProps {
  industry: Industry
  relatedPosts?: Post[]
}

const IndustryPage: React.FC<IndustryPageProps> = (props) => {
  const { industry, relatedPosts } = props
  const { sections } = industry || {}
  const { summary, features, checklist, faqs, cta } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderHeroBlock({
          item: industry,
        }),
        // Summary
        renderParagraphBlockItem({
          pt: { xs: 5, md: 10 },
          pb: 0,
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
            children: <GetStartedPage fullScreen disableTestimonials />,
          },
          ...cta,
        }),
      ]}
    />
  )
}

export default IndustryPage
