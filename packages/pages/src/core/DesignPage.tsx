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
import { GalleryMarqueeSection } from '@onex/components/sections/gallery-marquee-section'

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
              titleProps: { component: 'h1', gutterBottom: true, sx: { maxWidth: { md: '60%' } }  },
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
                      title: 'Future-Ready Design',
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
          center: true,
          pt: { xs: 10, md: 16 },
          pb: { xs: 10, md: 10 },
          sx: { backgroundColor: 'background.paper' },
          titleProps: { maxWidth: '70%' },
        }),
        // Benefits
        renderThreeColumnGridBlock({
          ...benefits,
          sx: { backgroundColor: 'background.paper' },
        }),
        // Design
        <GalleryMarqueeSection title="Design Systems that Scale" subtitle="One X Design empowers enterprises with unified design systems that deliver consistent, delightful user experiences." disableOverline disableServices />,
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
