import React from 'react'
import { Block, Blocks } from '@gravis-os/landing'
import {
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
} from '@onex/blocks'
import { useLayout } from '@onex/providers'
import { Page, Post, Showcase, Industry, Technology } from '@onex/types'
import { useRouter } from 'next/router'
import { routeConfig } from '@onex/common'
import { Slider } from '@gravis-os/ui'

export interface FinxPageProps {
  page: Page
  showcases: Showcase[]
  technologys: Technology[]
  featuredPosts: Post[]
  industrys: Industry[]
}

const FinxPage: React.FC<FinxPageProps> = (props) => {
  const { page, showcases, technologys, featuredPosts, industrys } = props
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
        {
            key: 'hero-with-background-fade-slider',
            dark: true,
            center: true,
            disableContainer: true,
            py: 0,
            items: [
              {
                type: 'jsx',
                title: (
                  <Slider
                    autoplay
                    loop
                    arrows
                    fade
                    dots
                    dotProps={{ color: 'secondary.main' }}
                    height={{ xs: 500, md: 800 }}
                    items={[
                      <Block
                        fill
                        {...renderHeroWithBackgroundBlock({
                          title: 'We are the Growth Company',
                          ...hero,
                          backgroundImageProps: {
                            src: '/images/about_hero.png',
                            alt: 'hero',
                          },
                        })}
                      />,
                      <Block
                        fill
                        {...renderHeroWithBackgroundBlock({
                          ...hero,
                          title: 'Unleash your X Factor',
                          backgroundImageProps: {
                            src: '/images/about_nodes_above_city.png',
                            alt: 'hero',
                          },
                        })}
                      />,
                      <Block
                        fill
                        {...renderHeroWithBackgroundBlock({
                          ...hero,
                          title: "Deliver Tomorrow's Innovation Today",
                          backgroundImageProps: {
                            src: '/images/mission_earth.png',
                            alt: 'hero',
                          },
                        })}
                      />,
                    ]}
                  />
                ),
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
        // Technologys
        renderTechnologysBlock({ items: technologys }),
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

export default FinxPage
