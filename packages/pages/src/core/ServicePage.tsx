import React from 'react'

import {
  Blocks,
  renderClientLogosImageMarqueeBlock,
  renderClientTestimonialSliderBlock,
  renderFactsAccordionBlock,
  renderFactsVerticalTabsBlock,
  renderFadeToBottomBackgroundImageBlock,
  renderFaqsAccordionBlock,
  renderFourColumnGridBlock,
  renderHeroBlock,
  renderRelatedPostsBlock,
  renderRelatedServicesBlock,
  renderRightChecklistBlock,
  renderShowcaseSlider,
  renderSummaryBlockItem,
  renderTechnologysBlock,
  renderThreeColumnGridBlock,
  useLayout,
} from '@onex/landing'
import { Post, Service, ServiceCategory, Showcase } from '@onex/types'

export interface ServicePageProps {
  relatedPosts?: Post[]
  relatedServices?: Service[]
  service: Service
  serviceCategory: ServiceCategory
  showcases?: Showcase[]
}

const ServicePage: React.FC<ServicePageProps> = (props) => {
  const { relatedPosts, relatedServices, service, showcases } = props
  const { clientLogos, clientTestimonials, routeConfig, technologys } =
    useLayout()
  const { sections } = service || {}

  const {
    benefits,
    challenges,
    checklist,
    cta,
    facts,
    faqs,
    features,
    offerings,
    showcase,
    summary,
    testimonial,
    usps,
  } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderHeroBlock({
          item: service,
        }),
        // ClientLogosImageMarquee
        renderClientLogosImageMarqueeBlock({
          items: clientLogos.slice(0, 8),
          sx: { backgroundColor: 'background.paper', position: 'relative' },
        }),
        // Facts
        facts &&
        renderFactsVerticalTabsBlock({
          ...facts,
        }),
        // Challenges
        challenges &&
          renderThreeColumnGridBlock({
            ...challenges,
          }),
        // Summary
        renderSummaryBlockItem({
          ...summary,
        }),
        // Features
        renderThreeColumnGridBlock({
          ...features,
          textAlign: 'left',
        }),
        // Showcases
        Boolean(showcases?.length) &&
          renderShowcaseSlider({
            overline: showcase.overline,
            title: showcase.title,
            items: showcases,
            pt: { xs: 5, md: 10 },
            subtitle: showcase.subtitle,
          }),
        renderClientTestimonialSliderBlock({
          title: testimonial.title,
          items: clientTestimonials,
          subtitle: testimonial.subtitle,
        }),
        // Technologys
        renderTechnologysBlock({ items: technologys }),
        // Offerings: From Concept to Completion
        renderThreeColumnGridBlock({
          ...offerings,
          textAlign: 'left',
        }),
        // UniqueSellingPoints
        renderFourColumnGridBlock(usps),
        // Related Posts
        renderRelatedPostsBlock({ items: relatedPosts }),
        // Checklist
        renderRightChecklistBlock({
          ...checklist,
        }),
        // Faqs
        renderFaqsAccordionBlock({
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
        }),
      ]}
    />
  )
}

export default ServicePage
