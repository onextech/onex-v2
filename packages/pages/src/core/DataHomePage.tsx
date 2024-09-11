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
  renderHeroWithBackgroundBlock,
  renderHomeSummaryBlock,
  renderShowcasesBlock,
  renderTechnologysBlock,
  renderThreeColumnGridBlock,
  useLayout,
} from '@onex/landing'
import {
  Industry,
  Page,
  Post,
  PressRelease,
  Showcase,
  Technology,
} from '@onex/types'
import { routeConfig } from '@onex/common'
import { useRouter } from 'next/router'

export interface DataHomePageProps {
  featuredPosts: Post[]
  featuredPressReleases: PressRelease[]
  industrys: Industry[]
  page: Page
  showcases: Showcase[]
  technologys: Technology[]
}

const DataHomePage: React.FC<DataHomePageProps> = (props) => {
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
  const { locales } = site
  const localeTitle = locales?.find(
    ({ iso_alpha_2 }) => iso_alpha_2 === router.locale
  )?.title
  const { sections } = page || {}
  const { benefits, cta, faqs, features, hero, summary } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderHeroWithBackgroundBlock({
          ...hero,
          buttonProps: {
            title: 'Enterprise Data & AI Solutions',
            href: routeConfig.SERVICES,
            overline: 'What we do',
            size: 'lg',
          },
          secondaryButtonProps: {
            title: 'Data Science Experts',
            href: routeConfig.CAREERS,
            overline: 'Who we are',
            size: 'lg',
          },
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
          title: <>Intelligent Data Solutions for Modern Enterprises</>,
          items: showcases.slice(0, 3),
          pt: { xs: 5, md: 10 },
          subtitle:
            'Revolutionizing enterprises through strategic data insights and AI-driven solutions: Our proficiency in data science and enterprise AI transformations equips businesses with predictive, optimized, and intelligent systems, developed with a data-first approach.',
        }),
        // Technologys
        renderTechnologysBlock({ items: technologys }),
        // Client Testimonials
        renderClientTestimonialSliderBlock({
          title: 'Powering Data-Driven Success',
          items: clientTestimonials,
          subtitle:
            'One X Data is the preferred choice for enterprises requiring sophisticated data science services, strategic data solutions, and advanced AI implementations.',
        }),
        // Industry
        renderFeaturedIndustrysBlock({
          title: 'Access Industry Expertise & Best Practices',
          items: industrys,
          subtitle:
            'We are committed to equipping businesses with superior data science services and state-of-the-art AI solutions. We constantly innovate and refine our methodologies to ensure our clients stay at the forefront of their industry with actionable data insights and transformative AI capabilities.',
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

export default DataHomePage
