import React from 'react'
import {
  Blocks,
  renderClientLogosImageMarqueeBlock,
  renderShowcasesBlock,
  renderThreeColumnGridBlock,
  renderTechnologysBlock,
  renderFeaturedPostsBlock,
  renderFeaturedIndustrysBlock,
  renderFaqsAccordionBlock,
  renderCtaBlock,
  renderClientTestimonialSliderBlock,
  renderHeroWithBackgroundBlock,
  useLayout,
  renderFeaturedNewsBlock,
  renderHomeSummaryBlock,
} from '@gravis-os/landing'
import {
  Page,
  Post,
  Industry,
  Technology,
  Showcase,
  PressRelease,
} from '@gravis-os/types'
import { useRouter } from 'next/router'
import { routeConfig } from '@onex/common'

export interface DataHomePageProps {
  page: Page
  showcases: Showcase[]
  technologys: Technology[]
  featuredPosts: Post[]
  industrys: Industry[]
  featuredPressReleases: PressRelease[]
}

const DataHomePage: React.FC<DataHomePageProps> = (props) => {
  const {
    page,
    showcases,
    technologys,
    featuredPosts,
    industrys,
    featuredPressReleases,
  } = props
  const router = useRouter()
  const { site, clientLogos, clientTestimonials } = useLayout()
  const { locales } = site
  const localeTitle = locales?.find(
    ({ iso_alpha_2 }) => iso_alpha_2 === router.locale
  )?.title
  const { sections } = page || {}
  const { hero, benefits, features, faqs, cta, summary } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderHeroWithBackgroundBlock({
          ...hero,
          buttonProps: {
            overline: 'What we do',
            title: 'Enterprise Data & AI Solutions',
            size: 'lg',
            href: routeConfig.SERVICES,
          },
          secondaryButtonProps: {
            overline: 'Who we are',
            title: 'Data Science Experts',
            size: 'lg',
            href: routeConfig.CAREERS,
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
          sx: { backgroundColor: 'background.paper' },
          titleProps: { maxWidth: '70%' },
          pb: { xs: 5, md: 0 },
        }),
        // Benefits
        renderThreeColumnGridBlock({
          ...benefits,
          sx: { backgroundColor: 'background.paper' },
        }),
        // Showcases
        renderShowcasesBlock({
          title: <>Intelligent Data Solutions for Modern Enterprises</>,
          subtitle:
            'Revolutionizing enterprises through strategic data insights and AI-driven solutions: Our proficiency in data science and enterprise AI transformations equips businesses with predictive, optimized, and intelligent systems, developed with a data-first approach.',
          items: showcases.slice(0, 3),
          pt: { xs: 5, md: 10 },
        }),
        // Technologys
        renderTechnologysBlock({ items: technologys }),
        // Client Testimonials
        renderClientTestimonialSliderBlock({
          title: 'Powering Data-Driven Success',
          subtitle:
            'One X Data is the preferred choice for enterprises requiring sophisticated data science services, strategic data solutions, and advanced AI implementations.',
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
          pt: { xs: 5, md: 10 },
          pb: 0,
          sx: { backgroundColor: 'background.paper' },
        }),
      ]}
    />
  )
}

export default DataHomePage
