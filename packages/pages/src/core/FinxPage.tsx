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
                          title: 'Transforming the Future of Financial Industries',
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
                          title: "Transforming the Future of Financial Industries",
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
              Empowering the Finance Sector through AI-driven Solutions
            </>
          ),
          subtitle:
            'At Fin X, we empower the finance sector by harnessing the power of AI-driven solutions. Our innovative technologies and expertise enable financial institutions to streamline operations, optimize decision-making, and drive transformative growth in an increasingly digital landscape',
          items: showcases,
          pt: { xs: 5, md: 10 },
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
