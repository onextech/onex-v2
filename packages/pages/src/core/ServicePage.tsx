import type { Post, Service, ServiceCategory } from '@gravis-os/types'

import React from 'react'

import {
  Blocks,
  renderFadeToBottomBackgroundImageBlock,
  renderFaqsAccordionBlock,
  renderHeroBlock,
  renderParagraphBlockItem,
  renderRelatedPostsBlock,
  renderRelatedServicesBlock,
  renderRightChecklistBlock,
  renderThreeColumnGridBlock,
  useLayout,
} from '@gravis-os/landing'

export interface ServicePageProps {
  relatedPosts?: Post[]
  relatedServices?: Service[]
  service: Service
  serviceCategory: ServiceCategory
}

const ServicePage: React.FC<ServicePageProps> = (props) => {
  const { relatedPosts, relatedServices, service } = props
  const { routeConfig } = useLayout()
  const { sections } = service || {}
  const { benefits, checklist, cta, faqs, features, summary } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderHeroBlock({
          item: service,
        }),
        // Summary
        renderParagraphBlockItem({
          pb: 0,
          pt: { xs: 5, md: 10 },
          ...summary,
        }),
        // Features
        renderThreeColumnGridBlock({
          ...features,
          textAlign: 'left',
        }),
        // Related Posts
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
            href: `/${routeConfig.CONTACT}`,
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
        // Benefits
        renderThreeColumnGridBlock({
          ...benefits,
          sx: { backgroundColor: 'background.paper' },
        }),
        // Related Services
        renderRelatedServicesBlock({
          items: relatedServices,
          py: { xs: 5, md: 10 },
        }),
      ]}
    />
  )
}

export default ServicePage
