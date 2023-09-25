import React from 'react'

import {
  Blocks,
  renderClientLogosImageMarqueeBlock,
  renderClientTestimonialSliderBlock,
  renderCtaBlock,
  renderFaqsAccordionBlock,
  renderFeaturedIndustrysBlock,
  renderFeaturedNewsBlock,
  renderFeaturedPostsBlock,
  renderHomeSummaryBlock,
  renderLeftHeroWithBackgroundBlock,
  renderShowcasesBlock,
  renderTechnologysBlock,
  renderThreeColumnGridBlock,
  useLayout,
} from '@gravis-os/landing'
import {
  Industry,
  Page,
  Post,
  PressRelease,
  Showcase,
  Technology,
} from '@gravis-os/types'
import { GetStartedPage } from '@onex/pages'
import { useRouter } from 'next/router'

export interface TechPageProps {
  featuredPosts: Post[]
  featuredPressReleases: PressRelease[]
  industrys: Industry[]
  page: Page
  showcases: Showcase[]
  technologys: Technology[]
}

const TechPage: React.FC<TechPageProps> = (props) => {
  const {
    featuredPosts,
    featuredPressReleases,
    industrys,
    page,
    showcases,
    technologys,
  } = props
  const router = useRouter()
  const { clientLogos, clientTestimonials, site } = useLayout()
  const { cta_button_title, disable_testimonials, locales } = site
  const localeTitle = locales?.find(
    ({ iso_alpha_2 }) => iso_alpha_2 === router.locale
  )?.title
  const { sections } = page || {}
  const { benefits, cta, faqs, features, hero, summary } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderLeftHeroWithBackgroundBlock({
          ...hero,
          buttonProps: {
            title: cta_button_title,
            children: (
              <GetStartedPage
                disableTestimonials={disable_testimonials}
                fullScreen
              />
            ),
            isCta: true,
            overline: 'Get Started',
          },
          hero_alt: 'Black minimalistic background',
          hero_src: '/images/hero_background_black_minimal.svg',
          image_alt: 'Website with trend analysis',
          image_src: '/images/hero_glass_window_ui_grey.png',
          imageProps: { ar: '643:572' },
          pb: { xs: 3, md: 15 },
          pt: { xs: 10, md: 18 },
        }),
        // ClientLogosImageMarquee
        renderClientLogosImageMarqueeBlock({
          items: clientLogos.slice(0, 8),
          sx: { backgroundColor: 'background.paper', position: 'relative' },
        }),
        // Summary
        renderHomeSummaryBlock({
          ...summary,
          pb: { xs: 5, md: 0 },
          sx: { backgroundColor: 'background.paper' },
          titleProps: { maxWidth: '70%' },
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
          items: showcases.slice(0, 3),
          pt: { xs: 5, md: 10 },
          subtitle:
            'Empowering enterprises with high-quality dashboard user interfaces: Our portfolio features a range of dashboard projects that demonstrate our commitment to empowering enterprises with high-quality user interfaces.',
        }),
        // Technologys
        renderTechnologysBlock({ items: technologys }),
        // Client Testimonials
        renderClientTestimonialSliderBlock({
          title: 'Trusted by Frontend Development Teams',
          items: clientTestimonials,
          subtitle:
            "Our focus on excellence, dedication, and commitment to our clients' success has earned us a reputation as a reliable and high-quality provider of frontend development services for enterprise-level organisations.",
        }),
        // Industry
        renderFeaturedIndustrysBlock({
          title: 'Access Industry Expertise & Best Practices',
          items: industrys,
          subtitle:
            'We are dedicated to providing our clients with solutions that are designed to help them stay ahead of the curve in their industry. We are constantly developing new techniques, and methodologies to ensure that our clients always get access to the most effective development solutions in their industry.',
          sx: { backgroundColor: 'background.paper' },
        }),
        // Posts
        renderFeaturedPostsBlock({
          title: localeTitle
            ? `Read our Latest Insights in ${localeTitle}`
            : `Read our Latest Insights`,
          items: featuredPosts,
        }),
        // News
        renderFeaturedNewsBlock({ items: featuredPressReleases }),
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
          pb: 0,
          pt: { xs: 5, md: 10 },
          sx: { backgroundColor: 'background.paper' },
        }),
      ]}
    />
  )
}

export default TechPage
