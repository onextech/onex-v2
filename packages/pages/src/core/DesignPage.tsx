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

export interface DesignPageProps {
  page: Page
  showcases: Showcase[]
  featuredPosts: Post[]
  industrys: Industry[]
}

const DesignPage: React.FC<DesignPageProps> = (props) => {
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
              Crafting Engaging User Experiences
            </>
          ),
          subtitle:
            'Transforming digital products through intuitive design and user-centric experiences: Our expertise in UI/UX services and enterprise product designs empowers businesses with captivating interfaces, made with a human-centered mindset.',
          items: showcases,
          pt: { xs: 5, md: 10 },
        }),
        // Client Testimonials
        renderClientTestimonialSliderBlock({
          title: 'Empowering Design Excellence',
          subtitle:
            "One X Design is the trusted partner for enterprise-level organizations seeking top-notch UI/UX services, transformative product designs, and immersive UX workshops.",
          items: clientTestimonials,
        }),
        // Industry
        renderFeaturedIndustrysBlock({
          title: 'Access Industry Expertise & Best Practices',
          subtitle:
            'We are dedicated to providing our clients with solutions that are designed to help them stay ahead of the curve in their industry. We are constantly developing new techniques, and methodologies to ensure that our clients always get access to the most effective and transformative design solutions.',
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

export default DesignPage
