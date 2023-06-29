import React from 'react'
import {
  Blocks,
  renderClientLogosImageMarqueeBlock,
  renderShowcasesBlock,
  renderThreeColumnGridBlock,
  renderFeaturedPostsBlock,
  renderFeaturedIndustrysBlock,
  renderFaqsAccordionBlock,
  renderCtaBlock,
  renderClientTestimonialSliderBlock,
  renderGhostButtonBlockItem,
  renderClientHighlightsImageMarqueeBlock,
  useLayout,
} from '@gravis-os/landing'
import { Page, Post, Showcase, Industry } from '@gravis-os/types'
import { useRouter } from 'next/router'
import { routeConfig } from '@onex/common'

export interface DesignPageProps {
  page: Page
  showcases: Showcase[]
  featuredPosts: Post[]
  industrys: Industry[]
}

const DesignPage: React.FC<DesignPageProps> = (props) => {
  const { page, showcases, featuredPosts, industrys } = props
  const router = useRouter()
  const { site, clientLogos, clientTestimonials, clientHighlights } =
    useLayout()
  const { locales } = site
  const localeTitle = locales?.find(
    ({ iso_alpha_2 }) => iso_alpha_2 === router.locale
  )?.title
  const { sections } = page || {}
  const { hero, benefits, features, faqs, cta } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        {
          dark: true,
          key: 'design-impact',
          centerOnMobile: true,
          pt: { xs: 20, xl: 20 },
          pb: { xs: 20, xl: 70 },
          backgroundImageProps: {
            src: '/images/design_hero.png',
            alt: 'hero',
            sx: { opacity: 0.2 },
          },
          items: [
            { type: 'overline', title: hero.overline },
            {
              type: 'h2',
              title: hero.title,
              titleProps: { gutterBottom: true, component: 'h1' },
            },
            {
              type: 'subtitle1',
              title: hero.subtitle,
              titleProps: { color: 'text.secondary', maxWidth: '50%' },
            },
            {
              type: 'stack',
              sx: { mt: 3 },
              stackProps: {
                spacing: 0,
                direction: 'row',
                reverseDirectionOnMobile: true,
              },
              stackItems: [
                {
                  items: [
                    renderGhostButtonBlockItem({
                      overline: 'What we do',
                      title: 'Smarter Businesses',
                      size: 'lg',
                      href: routeConfig.SERVICES,
                    }),
                  ],
                },
                {
                  items: [
                    renderGhostButtonBlockItem({
                      overline: 'Who we are',
                      title: 'Enterprise Design Experts',
                      size: 'lg',
                      href: routeConfig.CAREERS,
                    }),
                  ],
                },
              ],
            },
          ],
        },
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
        // Marquee
        renderClientHighlightsImageMarqueeBlock({ items: clientHighlights }),
        // Showcases
        renderShowcasesBlock({
          title: <>Crafting Engaging User Experiences</>,
          subtitle:
            'Transforming digital products through intuitive design and user-centric experiences: Our expertise in UI/UX services and enterprise product designs empowers businesses with captivating interfaces, made with a human-centered mindset.',
          items: showcases.slice(0, 3),
          pt: { xs: 5, md: 10 },
        }),
        // Client Testimonials
        renderClientTestimonialSliderBlock({
          title: 'Empowering Design Excellence',
          subtitle:
            'One X Design is the trusted partner for enterprise-level organisations seeking top-notch UI/UX services, transformative product designs, and immersive UX workshops.',
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
