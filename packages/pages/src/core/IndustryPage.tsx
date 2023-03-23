import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Industry, Post } from '@onex/types'
import {
  renderFadeToBottomBackgroundImageBlock,
  renderFaqsAccordionBlock,
  renderFourColumnGridBlock,
  renderHeroBlock,
  renderParagraphBlockItem,
  renderRelatedPostsBlock,
  renderRightChecklistBlock,
  renderThreeColumnGridBlock,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'

export interface IndustryPageProps {
  industry: Industry
  relatedPosts?: Post[]
}

const IndustryPage: React.FC<IndustryPageProps> = (props) => {
  const { industry, relatedPosts } = props
  const { appConfig, routeConfig } = useLayout()
  const { overline, sections } = industry || {}
  const { summary, benefits, features, checklist, faqs, cta } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderHeroBlock({
          overline,
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
        // Benefits
        renderFourColumnGridBlock({
          ...benefits,
          sx: { backgroundColor: 'background.paper' },
        }),
      ]}
    />
  )
}

export default IndustryPage
