import React from 'react'
import { Blocks } from '@gravis-os/landing'
import {
  renderClientLogosImageMarqueeBlock,
  renderHeroWithBackgroundBlock,
  renderShowcasesBlock,
  renderFourColumnGridBlock,
  renderTechnologysBlock,
  renderFeaturedPostsBlock,
  renderFeaturedIndustrysBlock,
  renderClientTestimonialCardsBlock,
  renderFaqsAccordionBlock,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'
import { Page, Post, Showcase, Technology, Industry } from '@onex/types'
import { useRouter } from 'next/router'

export interface TechPageProps {
  page: Page
  showcases: Showcase[]
  technologys: Technology[]
  posts: Post[]
  industrys: Industry[]
}

const TechPage: React.FC<TechPageProps> = (props) => {
  const { page, showcases, technologys, posts, industrys } = props
  const router = useRouter()
  const { site, clientLogos, clientTestimonials } = useLayout()
  const { locales, cta_button_title } = site
  const localeTitle = locales?.find(
    ({ iso_alpha_2 }) => iso_alpha_2 === router.locale
  )?.title
  const { sections } = page || {}
  const { hero, benefits, faqs } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderHeroWithBackgroundBlock({
          ...hero,
          center: false,
          dark: false,
          centerOnMobile: true,
          py: 20,
          maxWidth: 'xl',
          sx: { backgroundColor: 'background.paper' },
          buttonProps: {
            overline: 'Get Started',
            title: cta_button_title,
            size: 'lg',
            isCta: true,
          },
        }),
        // ClientLogosImageMarquee
        renderClientLogosImageMarqueeBlock({
          items: clientLogos.slice(0, 8),
          sx: { backgroundColor: 'background.paper' },
        }),
        // Benefits
        renderFourColumnGridBlock({
          ...benefits,
          sx: { backgroundColor: 'background.paper' },
        }),
        // Showcases
        renderShowcasesBlock({
          title: (
            <>
              Build World-Class <br /> Dashboard User Interfaces
            </>
          ),
          items: showcases,
        }),
        // Technologys
        renderTechnologysBlock({ items: technologys }),
        // Client Testimonials
        renderClientTestimonialCardsBlock({
          title: 'Trusted by Frontend Development Teams',
          items: clientTestimonials,
        }),
        // Industry
        renderFeaturedIndustrysBlock({
          title: 'Access Industry Expertise & Best Practices',
          items: industrys,
          sx: { backgroundColor: 'background.paper' },
        }),
        // Posts
        renderFeaturedPostsBlock({
          title: localeTitle
            ? `Read our Latest Insights in ${localeTitle}`
            : `Read our Latest Insights`,
          items: posts,
        }),
        // Faqs
        renderFaqsAccordionBlock({
          py: { xs: 5, md: 10 },
          ...faqs,
        }),
      ]}
    />
  )
}

export default TechPage
