import React from 'react'

import {
  Blocks,
  renderClientLogosImageMarqueeBlock,
  renderClientTestimonialSliderBlock,
  renderFactsVerticalTabsBlock,
  renderFadeToBottomBackgroundImageBlock,
  renderFaqsAccordionBlock,
  renderFourColumnGridBlock,
  renderHeroBlock,
  renderLeadFormBlock,
  renderRelatedPostsBlock,
  renderRelatedServicesBlock,
  renderServiceNotFoundCalloutBlock,
  renderShowcaseSlider,
  renderSoftwareLifecycleBlock,
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
  const {
    clientLogos,
    clientTestimonials,
    routeConfig,
    serviceCategorys,
    technologys,
  } = useLayout()
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
        // Callout
        renderServiceNotFoundCalloutBlock(),
        // Showcases
        Boolean(showcases?.length) &&
          renderShowcaseSlider({
            title: showcase.title,
            items: showcases,
            overline: showcase.overline,
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
        // Process
        renderSoftwareLifecycleBlock(),
        // Offerings: From Concept to Completion
        renderThreeColumnGridBlock({
          ...offerings,
          sx: { backgroundColor: 'background.paper' },
          textAlign: 'left',
        }),
        // UniqueSellingPoints
        renderFourColumnGridBlock(usps),
        // Related Posts
        renderRelatedPostsBlock({ items: relatedPosts }),
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
        // Related Services
        renderRelatedServicesBlock({
          items: relatedServices,
        }),
        // Form
        renderLeadFormBlock(),
      ]}
    />
  )
}

export default ServicePage
