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
  renderFaqsAccordionBlock,
  renderCtaBlock,
  renderClientTestimonialSliderBlock,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'
import { Page, Post, Showcase, Industry } from '@onex/types'
import { useRouter } from 'next/router'

export interface DataHomePageProps {
  page: Page
  showcases: Showcase[]
  featuredPosts: Post[]
  industrys: Industry[]
}

const DataHomePage: React.FC<DataHomePageProps> = (props) => {
  const { page, showcases, featuredPosts, industrys } = props
  const router = useRouter()
  const { site, clientLogos, clientTestimonials } = useLayout()
  const { locales, cta_button_title } = site
  const localeTitle = locales?.find(
    ({ iso_alpha_2 }) => iso_alpha_2 === router.locale
  )?.title
  const { sections } = page || {}
  const { hero, benefits, features, faqs, cta } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderLeftHeroWithBackgroundBlock({
          ...hero,
          pt: { xs: 10, md: 18 },
          pb: { xs: 3, md: 15 },
          hero_src: '/images/hero_background_black_minimal.svg',
          hero_alt: 'Black minimalistic background',
          image_src: '/images/hero_glass_window_ui_grey.png',
          image_alt: 'Website with trend analysis',
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
              Intelligent Data Solutions for Modern Enterprises
            </>
          ),
          subtitle:
            'Revolutionizing enterprises through strategic data insights and AI-driven solutions: Our proficiency in data science and enterprise AI transformations equips businesses with predictive, optimized, and intelligent systems, developed with a data-first approach.',
          items: showcases,
          pt: { xs: 5, md: 10 },
        }),
        // Client Testimonials
        renderClientTestimonialSliderBlock({
          title: 'Powering Data-Driven Success',
          subtitle:
            "One X Data is the preferred choice for enterprises requiring sophisticated data science services, strategic data solutions, and advanced AI implementations.",
          items: clientTestimonials,
        }),
        // Industry
        renderFeaturedIndustrysBlock({
          title: 'Access Industry Expertise & Best Practices',
          subtitle:
            'We are committed to equipping businesses with superior data science services and state-of-the-art AI solutions. We constantly innovate and refine our methodologies to ensure our clients stay at the forefront of their industry with actionable data insights and transformative AI capabilities.',
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
        // Features
        renderThreeColumnGridBlock(features),
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

export default DataHomePage