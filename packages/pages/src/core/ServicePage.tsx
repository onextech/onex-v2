import React from 'react'

import { FeaturesSection } from '@onex/group/components/sections/features-section'
import { GalleryMarqueeSection } from '@onex/group/components/sections/gallery-marquee-section'
import {
  Blocks,
  renderClientLogosImageMarqueeBlock,
  renderClientTestimonialSliderBlock,
  renderFadeToBottomBackgroundImageBlock,
  renderFaqsAccordionBlock,
  renderFourColumnGridBlock,
  renderHeroBlock,
  renderLeadFormBlock,
  renderRelatedPostsBlock,
  renderRelatedServicesBlock,
  renderServiceNotFoundCalloutBlock,
  renderShowcasesBlock,
  renderSoftwareLifecycleBlock,
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
    challenges,
    cta,
    facts,
    faqs,
    features,
    offerings,
    showcase,
    summary,
    testimonial,
    usps,
    insights,
  } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderHeroBlock({
          item: service,
        }),
        <GalleryMarqueeSection />,
        // ClientLogosImageMarquee
        renderClientLogosImageMarqueeBlock({
          items: clientLogos.slice(0, 8),
          sx: { backgroundColor: 'background.paper', position: 'relative' },
        }),
        // Solution Offering
        renderThreeColumnGridBlock({
          ...features,
          textAlign: 'left',
        }),
        // Showcases
        Boolean(showcases?.length) &&
          renderShowcasesBlock({
            title: showcase.title,
            items: showcases,
            overline: showcase.overline,
            pt: { xs: 5, md: 10 },
            subtitle: showcase.subtitle,
          }),
        // Technologys
        renderTechnologysBlock({ items: technologys }),
        // Process
        renderSoftwareLifecycleBlock(),
        // Related Posts
        renderRelatedPostsBlock({ ...insights, items: relatedPosts }),
        // UniqueSellingPoints
        renderFourColumnGridBlock(usps),
        // Form
        renderLeadFormBlock(),
        renderClientTestimonialSliderBlock({
          title: testimonial.title,
          dark: true,
          items: clientTestimonials,
          subtitle: testimonial.subtitle,
        }),
        // Faqs
        renderFaqsAccordionBlock({
          ...faqs,
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
