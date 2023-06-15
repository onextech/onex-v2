import React from 'react'
import {
  Block,
  Blocks,
  renderClientLogosImageMarqueeBlock,
  renderShowcasesBlock,
  renderThreeColumnGridBlock,
  renderFeaturedPostsBlock,
  renderFeaturedIndustrysBlock,
  renderFaqsAccordionBlock,
  renderCtaBlock,
  renderHeroWithBackgroundBlock,
  useLayout,
  Showcase,
} from '@gravis-os/landing'
import { Page, Post, Industry, Technology } from '@gravis-os/types'
import { useRouter } from 'next/router'
import { Slider } from '@gravis-os/ui'

export interface FinxPageProps {
  page: Page
  showcases: Showcase[]
  technologys: Technology[]
  featuredPosts: Post[]
  industrys: Industry[]
}

const FinxPage: React.FC<FinxPageProps> = (props) => {
  const { page, showcases, featuredPosts, industrys } = props
  const router = useRouter()
  const { site, clientLogos } = useLayout()
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
                          'Transforming the Future of Financial Industries',
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
                          'Transforming the Future of Financial Industries',
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
          title: <>Empowering the Finance Sector through AI-driven Solutions</>,
          subtitle:
            'At Fin X, we empower the finance sector by harnessing the power of AI-driven solutions. Our innovative technologies and expertise enable financial institutions to streamline operations, optimize decision-making, and drive transformative growth in an increasingly digital landscape',
          items: showcases,
          pt: { xs: 5, md: 10 },
        }),
        // Industry
        renderFeaturedIndustrysBlock({
          title: 'Industries We Serve',
          subtitle:
            'Fin X revolutionizes the finance sector by providing customized digital solutions and consulting services across industries, empowering businesses to thrive in the modern era of finance.',
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
