import React from 'react'

import {
  Blocks,
  renderClientHighlightsImageMarqueeBlock,
  renderClientLogosImageMarqueeBlock,
  renderClientTestimonialSliderBlock,
  renderCtaBlock,
  renderFaqsAccordionBlock,
  renderFeaturedIndustrysBlock,
  renderFeaturedNewsBlock,
  renderFeaturedPostsBlock,
  renderGhostButtonBlockItem,
  renderHomeSummaryBlock,
  renderShowcasesBlock,
  renderThreeColumnGridBlock,
  useLayout,
} from '@onex/landing'
import { Industry, Page, Post, PressRelease, Showcase } from '@onex/types'
import { routeConfig } from '@onex/common'
import { useRouter } from 'next/router'

export interface DesignPageProps {
  featuredPosts: Post[]
  featuredPressReleases: PressRelease[]
  industrys: Industry[]
  page: Page
  showcases: Showcase[]
}

const DesignPage: React.FC<DesignPageProps> = (props) => {
  const { featuredPosts, featuredPressReleases, industrys, page, showcases } =
    props
  const router = useRouter()
  const { clientHighlights, clientLogos, clientTestimonials, site } =
    useLayout()
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
        {
          id: 'design-impact',
          backgroundImageProps: {
            alt: 'hero',
            src: '/images/design_hero.png',
            sx: { opacity: 0.2 },
          },
          centerOnMobile: true,
          dark: true,
          items: [
            { title: hero.overline, type: 'overline' },
            {
              title: hero.title,
              titleProps: { component: 'h1', gutterBottom: true },
              type: 'h2',
            },
            {
              title: hero.subtitle,
              titleProps: { color: 'text.secondary', maxWidth: '50%' },
              type: 'subtitle1',
            },
            {
              stackItems: [
                {
                  items: [
                    renderGhostButtonBlockItem({
                      title: 'Smarter Businesses',
                      href: routeConfig.SERVICES,
                      overline: 'What we do',
                      size: 'lg',
                    }),
                  ],
                },
                {
                  items: [
                    renderGhostButtonBlockItem({
                      title: 'Enterprise Design Experts',
                      href: routeConfig.CAREERS,
                      overline: 'Who we are',
                      size: 'lg',
                    }),
                  ],
                },
              ],
              stackProps: {
                direction: 'row',
                reverseDirectionOnMobile: true,
                spacing: 0,
              },
              sx: { mt: 3 },
              type: 'stack',
            },
          ],
          pb: { xs: 20, xl: 70 },
          pt: { xs: 20, xl: 20 },
        },
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
        // Marquee
        renderClientHighlightsImageMarqueeBlock({ items: clientHighlights }),
        // Showcases
        renderShowcasesBlock({
          title: <>Crafting Engaging User Experiences</>,
          items: showcases.slice(0, 3),
          pt: { xs: 5, md: 10 },
          subtitle:
            'Transforming digital products through intuitive design and user-centric experiences: Our expertise in UI/UX services and enterprise product designs empowers businesses with captivating interfaces, made with a human-centered mindset.',
        }),
        // Client Testimonials
        renderClientTestimonialSliderBlock({
          title: 'Empowering Design Excellence',
          items: clientTestimonials,
          subtitle:
            'One X Design is the trusted partner for enterprise-level organisations seeking top-notch UI/UX services, transformative product designs, and immersive UX workshops.',
        }),
        // Industry
        renderFeaturedIndustrysBlock({
          title: 'Access Industry Expertise & Best Practices',
          items: industrys,
          subtitle:
            'We are dedicated to providing our clients with solutions that are designed to help them stay ahead of the curve in their industry. We are constantly developing new techniques, and methodologies to ensure that our clients always get access to the most effective and transformative design solutions.',
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
        // News
        renderFeaturedNewsBlock({ items: featuredPressReleases }),
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

export default DesignPage
