import React from 'react'
import {
  Block,
  Blocks,
  renderClientLogosImageMarqueeBlock,
  renderShowcasesBlock,
  renderThreeColumnGridBlock,
  renderFeaturedPostsBlock,
  renderFaqsAccordionBlock,
  renderCtaBlock,
  renderHeroWithBackgroundBlock,
  Showcase,
  useLayout,
} from '@gravis-os/landing'
import { Page, Post, Industry, Technology } from '@gravis-os/types'
import { useRouter } from 'next/router'
import { Slider } from '@gravis-os/ui'

export interface GovxPageProps {
  page: Page
  showcases: Showcase[]
  technologys: Technology[]
  featuredPosts: Post[]
  industrys: Industry[]
}

const GovxPage: React.FC<GovxPageProps> = (props) => {
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
                        title:
                          'Empowering Public Sector Digital Transformation',
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
                        title:
                          'Empowering Public Sector Digital Transformation',
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
          title: <>Empowering the Public Sector through AI-driven Solutions</>,
          subtitle:
            'Empower the public sector with AI-driven solutions from Gov X. Optimize operations, make data-driven decisions, and deliver enhanced public services. Revolutionize governance with our innovative technologies.',
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

export default GovxPage
