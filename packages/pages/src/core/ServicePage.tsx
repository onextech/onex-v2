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
  renderRelatedServicesBlock,
  useLayout,
} from '@gravis-os/landing'
import type { Post, Service, ServiceCategory } from '@gravis-os/types'

export interface ServicePageProps {
  service: Service
  serviceCategory: ServiceCategory
  relatedServices?: Service[]
  relatedPosts?: Post[]
}

const ServicePage: React.FC<ServicePageProps> = (props) => {
  const { service, relatedServices, relatedPosts } = props
  const { routeConfig } = useLayout()
  const { sections } = service || {}
  const { summary, benefits, features, checklist, faqs, cta } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderHeroBlock({
          item: service,
        }),
        // Summary
        renderParagraphBlockItem({
          pt: { xs: 5, md: 10 },
          pb: 0,
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
