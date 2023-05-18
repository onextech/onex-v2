import React from 'react'
import { Blocks } from '@gravis-os/landing'
import {
  renderClientLogosImageMarqueeBlock,
  renderLeftHeroWithBackgroundBlock,
  renderShowcasesBlock,
  renderThreeColumnGridBlock,
  renderTechnologysBlock,
  renderFeaturedPostsBlock,
  renderFeaturedIndustrysBlock,
  renderClientTestimonialCardsBlock,
  renderFaqsAccordionBlock,
  renderCtaBlock,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'
import { Page, Post, Showcase, Technology, Industry } from '@onex/types'
import { useRouter } from 'next/router'

export interface TechPageProps {
  page: Page
  showcases: Showcase[]
  technologys: Technology[]
  featuredPosts: Post[]
  industrys: Industry[]
}

const TechPage: React.FC<TechPageProps> = (props) => {
  const { page, showcases, technologys, featuredPosts, industrys } = props
  const router = useRouter()
  const { site, clientLogos, clientTestimonials } = useLayout()
  const { locales, cta_button_title } = site
  const localeTitle = locales?.find(
    ({ iso_alpha_2 }) => iso_alpha_2 === router.locale
  )?.title
  const { sections } = page || {}
  const { hero, benefits, faqs, cta } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderLeftHeroWithBackgroundBlock({
          ...hero,
          pt: { xs: 10, md: 18 },
          pb: { xs: 3, md: 15 },
          hero_src: '/images/hero_background_black_minimal.svg',
          hero_alt: 'hero background',
          image_src: '/images/hero_glass_window_ui_grey.png',
          image_alt: 'glass window ui',
          // image_src dimensions
          imageProps: { ar: '643:572' } as any,
          buttonProps: {
            overline: 'Get Started',
            title: cta_button_title,
            isCta: true,
          },
        }),
        // ClientLogosImageMarquee
        renderClientLogosImageMarqueeBlock({
          items: clientLogos.slice(0, 8),
          sx: { backgroundColor: 'background.paper', position: 'relative' },
        }),
        // Benefits
        renderThreeColumnGridBlock({
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
          subtitle:
            'Empowering enterprises with high-quality dashboard user interfaces: Our portfolio features a range of dashboard projects that demonstrate our commitment to empowering enterprises with high-quality user interfaces.',
          items: showcases,
          pt: { xs: 5, md: 10 },
        }),
        // Technologys
        renderTechnologysBlock({ items: technologys }),
        // Client Testimonials
        renderClientTestimonialCardsBlock({
          title: 'Trusted by Frontend Development Teams',
          subtitle:
            "Our focus on excellence, dedication, and commitment to our clients' success has earned us a reputation as a reliable and high-quality provider of frontend development services for enterprise-level organizations.",
          items: clientTestimonials,
        }),
        // Industry
        renderFeaturedIndustrysBlock({
          title: 'Access Industry Expertise & Best Practices',
          subtitle:
            'We are dedicated to providing our clients with solutions that are designed to help them stay ahead of the curve in their industry. We are constantly developing new techniques, and methodologies to ensure that our clients always get access to the most effective development solutions in their industry.',
          items: industrys,
          sx: { backgroundColor: 'background.paper' },
        }),
        // Posts
        renderFeaturedPostsBlock({
          title: localeTitle
            ? `Read our Latest Insights in ${localeTitle}`
            : `Read our Latest Insights`,
          items: featuredPosts,
        }),
        // Faqs
        renderFaqsAccordionBlock({
          py: { xs: 5, md: 10 },
          ...faqs,
          sx: { backgroundColor: 'background.paper' },
        }),
        // Cta
        renderCtaBlock({
          item: cta,
          pt: { xs: 5, md: 10 },
          pb: 0,
          sx: { backgroundColor: 'background.paper' },
        }),
      ]}
    />
  )
}

export default TechPage
