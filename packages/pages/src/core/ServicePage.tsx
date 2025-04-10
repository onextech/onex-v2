import React from 'react'

import { GalleryMarqueeSection } from '@onex/group/components/sections/gallery-marquee-section'
import {
  Blocks,
  renderClientLogoCardBlockItem,
  renderClientLogosImageMarqueeBlock,
  renderClientTestimonialSliderBlock,
  renderFaqsAccordionBlock,
  renderFourColumnGridBlock,
  renderGhostButtonBlockItem,
  renderHeroBlock,
  renderLeadFormBlock,
  renderRelatedPostsBlock,
  renderRelatedServicesBlock,
  renderShowcasesBlock,
  renderSoftwareLifecycleBlock,
  renderTechnologysBlock,
  renderThreeColumnGridBlock,
  useLayout
} from '@onex/landing'
import { MOCK_PAGES } from '@onex/mocks'
import { Post, Service, ServiceCategory, Showcase } from '@onex/types'
import { useRouter } from 'next/router'
export interface ServicePageProps {
  relatedPosts?: Post[]
  relatedServices?: Service[]
  service: Service
  serviceCategory: ServiceCategory
  showcases?: Showcase[]
}

const ServicePage: React.FC<ServicePageProps> = (props) => {
  const { relatedPosts, relatedServices, service, showcases } = props
  const { site, clientLogos, clientTestimonials, routeConfig, technologys } =
  useLayout()
  const { sections } = service || {}
  const { locale } = useRouter()
  const currentLocale = site?.locales?.find((siteLocale) => siteLocale.key === (locale || ''))

  const {
    challenges,
    cta,
    facts,
    faqs,
    features,
    offerings,
    showcase,
    summary,
    testimonial,
    usps,
    insights,
    stats,
  } = sections || {}

  const { gallery } = (MOCK_PAGES.GROUP.find((page) => page.slug === 'about') as any).sections

  return (
    <Blocks
      items={[
        // Hero
        renderHeroBlock({
          item: {
            ...service,
            title: `${service.title} ${currentLocale?.title}`,
            hero_src: locale === 'ae' ? '/images/three_middleastern_persons_pointing_at_screen.png' : '/images/two_men_pointing_at_screen_rtl.png',
          },
        }),
        // ClientLogosImageMarquee
        renderClientLogosImageMarqueeBlock({
          title: `Trusted by leading ${currentLocale?.alternate_title} brands`,
          items: clientLogos.slice(0, 8),
          sx: { backgroundColor: 'background.paper', position: 'relative' },
        }),
        <GalleryMarqueeSection />,
        // Solution Offering
        renderThreeColumnGridBlock({
          ...features,
          textAlign: 'left',
        }),

        // Logos
        {
          id: 'gallery',
          center: true, maxWidth: 'md',
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
              gridItems: clientLogos.slice(0, 9).map((clientLogo) => {
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
        },
        // Showcases
        Boolean(showcases?.length) &&
          renderShowcasesBlock({
            title: showcase.title,
            items: showcases,
            overline: showcase.overline,
            pt: { xs: 5, md: 10 },
            subtitle: showcase.subtitle,
          }),
        // Technologys
        renderTechnologysBlock({ items: technologys }),
        // Process
        renderSoftwareLifecycleBlock(),
        // Related Posts
        renderRelatedPostsBlock({ ...insights, items: relatedPosts }),
        // Map
        {
          id: 'stats',
          center: true, maxWidth: 'md',
          backgroundImageProps: {
            alt: stats.hero_alt,
            boxSx: { bottom: 24 },
            fixedBackground: true,
            src: stats.hero_src,
          },
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
                    titleProps: stat.titleProps,
                    type: 'subtitle1',
                  },
                  {
                    title: stat.overline,
                    titleProps: { color: 'text.secondary' },
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
          sx: { backgroundColor: 'background.paper' },
        },
        // UniqueSellingPoints
        renderFourColumnGridBlock(usps),
        // Form
        renderLeadFormBlock(),
        renderClientTestimonialSliderBlock({
          title: testimonial.title,
          dark: true,
          items: clientTestimonials,
          subtitle: testimonial.subtitle,
        }),
        // Faqs
        renderFaqsAccordionBlock({
          ...faqs,
        }),
        // Related Services
        renderRelatedServicesBlock({
          items: relatedServices,
        }),
      ]}
    />
  )
}

export default ServicePage
