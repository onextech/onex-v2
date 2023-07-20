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
  useLayout,
  renderClientLogosGallery,
} from '@gravis-os/landing'
import { Page, Post, Industry, Technology, Showcase } from '@gravis-os/types'
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
  const { page, showcases, featuredPosts } = props
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
                          src: '/images/home_hero_1.jpeg',
                          alt: 'stars building',
                        },
                      })}
                    />,
                    <Block
                      fill
                      {...renderHeroWithBackgroundBlock({
                        ...hero,
                        title:
                          'Unlocking Public Sector Innovation: Explore our AI Insights',
                        subtitle:
                          'Dive into our curated collection of articles, exploring the intersection of AI solutions and the public sector, as we uncover the transformative potential and latest advancements in technologies that can be harnessed for public enterprises.',
                        backgroundImageProps: {
                          src: '/images/home_hero_2.jpeg',
                          alt: 'train station',
                        },
                      })}
                    />,
                    <Block
                      fill
                      {...renderHeroWithBackgroundBlock({
                        ...hero,
                        title:
                          'Digitalizing the Public Sector: Discover our Vision',
                        subtitle:
                          'Bringing revolutionary change to the public sector. Learn more about our values, culture, and vision and how we look to unleash the potential of AI to drive transformation in the public sector.',
                        backgroundImageProps: {
                          src: '/images/home_hero_3.jpeg',
                          alt: 'cool library',
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
        // Client Logos Gallery
        renderClientLogosGallery({
          items: clientLogos,
          title:
            'We Transform Public Sector Enterprises Across Industries for the Future of Governance',
        }),
        // Showcases
        renderShowcasesBlock({
          title: <>Empowering the Public Sector through AI-driven Solutions</>,
          subtitle:
            'Empower the public sector with AI-driven solutions from Gov X. Optimize operations, make data-driven decisions, and deliver enhanced public services. Revolutionize governance with our innovative technologies.',
          items: showcases.slice(0, 3),
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
