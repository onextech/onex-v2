import type { Post, Solution } from '@onex/types'

import React from 'react'

import {
  Blocks,
  GalleryMarqueeSection,
  LazyBlock,
  LazyClientTestimonialSlider,
  LazyFaqsAccordion,
  LazyRelatedPosts,
  renderClientLogoCardBlockItem,
  renderClientLogosImageMarqueeBlock,
  renderFourColumnGridBlock,
  renderGhostButtonBlockItem,
  renderHeroBlock,
  renderLeadFormBlock,
  renderSoftwareLifecycleBlock,
  renderTechnologysBlock,
  renderThreeColumnGridBlock,
  useLayout,
} from '@onex/landing'
import { MOCK_PAGES } from '@onex/mocks'
import { useRouter } from 'next/router'

export interface SolutionPageProps {
  relatedPosts?: Post[]
  relatedSolutions?: Solution[]
  solution: Solution
}

const SolutionPage: React.FC<SolutionPageProps> = (props) => {
  const { relatedPosts, relatedSolutions, solution } = props
  const { clientLogos, clientTestimonials, site, technologys } = useLayout()
  const { sections } = solution || {}
  const { locale } = useRouter()
  const currentLocale = site?.locales?.find(
    (siteLocale) => siteLocale.key === (locale || '')
  )

  const {
    // Generic service page sections
    faqs,
    features,
    insights,
    solutionBenefits,
    solutionFaqs,
    // Solution-specific sections
    solutionFeatures,
    stats,
    testimonial,
    usps,
  } = sections || {}

  const { gallery } =
    (MOCK_PAGES.GROUP.find((page) => page.slug === 'about') as any)?.sections ||
    {}

  return (
    <Blocks
      items={[
        // Hero
        renderHeroBlock({
          item: {
            ...solution,
            // Page title includes locale (e.g., "AI Chatbot Singapore")
            title: `${solution.title} ${currentLocale?.title || ''}`.trim(),
          },
        }),
        // ClientLogosImageMarquee
        renderClientLogosImageMarqueeBlock({
          title: `Trusted by leading ${currentLocale?.alternate_title} brands`,
          items: clientLogos.slice(0, 8),
          sx: { backgroundColor: 'background.paper', position: 'relative' },
        }),
        // Solution Benefits (Your Customer Service, Transformed)
        solutionBenefits && renderFourColumnGridBlock(solutionBenefits),
        // Solution Features (AI Chatbot Capabilities)
        solutionFeatures &&
          renderThreeColumnGridBlock({
            ...solutionFeatures,
            textAlign: 'left',
          }),
        // Solution-specific Faqs (AI Chatbot FAQs)
        solutionFaqs && (
          <LazyBlock minHeight={400} rootMargin="200px">
            <LazyFaqsAccordion {...solutionFaqs} />
          </LazyBlock>
        ),
        <LazyBlock minHeight={600} rootMargin="100px">
          <GalleryMarqueeSection />
        </LazyBlock>,
        // Solution Features
        renderThreeColumnGridBlock({
          ...features,
          textAlign: 'left',
        }),
        // Logos
        gallery && {
          id: 'gallery',
          center: true,
          dark: true,
          items: [
            { title: gallery.overline, type: 'overline' },
            {
              title: gallery.title,
              titleProps: { gutterBottom: true },
              type: 'h4',
            },
            {
              title: gallery.subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
              },
              type: 'body1',
            },
            {
              gridItemProps: { xs: 6, md: 4 },
              gridItems: clientLogos.slice(0, 12).map((clientLogo) => {
                const {
                  avatar_alt,
                  avatar_height,
                  avatar_src,
                  avatar_width,
                  sx,
                } = clientLogo

                return renderClientLogoCardBlockItem({
                  title: avatar_src,
                  titleProps: {
                    alt: avatar_alt,
                    height: avatar_height,
                    sx,
                    width: avatar_width,
                  },
                })
              }),
              gridProps: { spacing: 1 },
              maxWidth: 'xl',
              sx: { mt: { xs: 5, md: 10 } },
              type: 'grid',
            },
          ],
          maxWidth: 'md',
        },
        // Technologys
        technologys?.length > 0 &&
          renderTechnologysBlock({ items: technologys }),
        // Process
        renderSoftwareLifecycleBlock(),
        // Related Posts
        <LazyBlock minHeight={400} rootMargin="200px">
          <LazyRelatedPosts {...insights} items={relatedPosts} />
        </LazyBlock>,
        // Map
        stats && {
          id: 'stats',
          backgroundImageProps: {
            alt: stats.hero_alt,
            boxSx: { bottom: 24 },
            fixedBackground: true,
            src: stats.hero_src,
          },
          center: true,
          dark: true,
          items: [
            { title: stats.overline, type: 'overline' },
            {
              title: `${stats.title} based in ${currentLocale?.title}`,
              titleProps: { gutterBottom: true },
              type: 'h4',
            },
            {
              title: stats.subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
              },
              type: 'body1',
            },
            {
              gridItemProps: { xs: 4 },
              gridItems: stats.items?.map((stat) => ({
                items: [
                  {
                    title: stat.title,
                    titleProps: {
                      ...stat.titleProps,
                      sx: { lineHeight: 1, ...stat.titleProps?.sx },
                    },
                    type: 'subtitle1',
                  },
                  {
                    title: stat.overline,
                    titleProps: {
                      color: 'text.secondary',
                      sx: { lineHeight: 1.2 },
                    },
                    type: 'overline',
                  },
                ],
              })),
              gridProps: { spacing: 2 },
              maxWidth: 'sm',
              sx: { mt: 6 },
              type: 'grid',
            },
            renderGhostButtonBlockItem({
              boxProps: { mt: 16 },
              ...stats.buttons?.[0],
            }),
          ],
          maxWidth: 'md',
          sx: { backgroundColor: 'background.paper' },
        },
        // UniqueSellingPoints
        renderFourColumnGridBlock(usps),
        // Form
        renderLeadFormBlock(),
        // Testimonials
        testimonial && (
          <LazyBlock minHeight={500} rootMargin="200px">
            <LazyClientTestimonialSlider
              dark
              items={clientTestimonials}
              subtitle={testimonial.subtitle}
              title={testimonial.title}
            />
          </LazyBlock>
        ),
        // Generic Faqs
        <LazyBlock minHeight={400} rootMargin="200px">
          <LazyFaqsAccordion {...faqs} />
        </LazyBlock>,
        // Related Solutions
        relatedSolutions?.length > 0 && (
          <LazyBlock minHeight={300} rootMargin="200px">
            {/* TODO: Add LazyRelatedSolutions component */}
          </LazyBlock>
        ),
      ]}
    />
  )
}

export default SolutionPage
