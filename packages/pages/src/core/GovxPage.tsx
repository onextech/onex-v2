import React from 'react'

import {
  Block,
  Blocks,
  renderClientLogosGallery,
  renderClientLogosImageMarqueeBlock,
  renderCtaBlock,
  renderFaqsAccordionBlock,
  renderFeaturedNewsBlock,
  renderFeaturedPostsBlock,
  renderHeroWithBackgroundBlock,
  renderHomeSummaryBlock,
  renderShowcasesBlock,
  renderThreeColumnGridBlock,
  useLayout,
} from '@onex/landing'
import {
  Industry,
  Page,
  Post,
  PressRelease,
  Showcase,
  Technology,
} from '@onex/types'
import { Slider } from '@onex/ui'
import { useRouter } from 'next/router'

export interface GovxPageProps {
  featuredPosts: Post[]
  featuredPressReleases: PressRelease[]
  industrys: Industry[]
  page: Page
  showcases: Showcase[]
  technologys: Technology[]
}

const GovxPage: React.FC<GovxPageProps> = (props) => {
  const { featuredPosts, featuredPressReleases, page, showcases } = props
  const router = useRouter()
  const { clientLogos, site } = useLayout()
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
          id: 'hero-with-background-fade-slider',
          center: true,
          dark: true,
          disableContainer: true,
          items: [
            {
              title: (
                <Slider
                  arrows
                  autoplay
                  dotProps={{ color: 'secondary.main' }}
                  dots
                  fade
                  height={{ xs: 500, md: 800 }}
                  items={[
                    <Block
                      fill
                      {...renderHeroWithBackgroundBlock({
                        title: 'We are the Growth Company',
                        ...hero,
                        backgroundImageProps: {
                          alt: 'stars building',
                          src: '/images/home_hero_1.jpeg',
                        },
                      })}
                    />,
                    <Block
                      fill
                      {...renderHeroWithBackgroundBlock({
                        ...hero,
                        title:
                          'Unlocking Public Sector Innovation: Explore our AI Insights',
                        backgroundImageProps: {
                          alt: 'train station',
                          src: '/images/home_hero_2.jpeg',
                        },
                        subtitle:
                          'Dive into our curated collection of articles, exploring the intersection of AI solutions and the public sector, as we uncover the transformative potential and latest advancements in technologies that can be harnessed for public enterprises.',
                      })}
                    />,
                    <Block
                      fill
                      {...renderHeroWithBackgroundBlock({
                        ...hero,
                        title:
                          'Digitalizing the Public Sector: Discover our Vision',
                        backgroundImageProps: {
                          alt: 'cool library',
                          src: '/images/home_hero_3.jpeg',
                        },
                        subtitle:
                          'Bringing revolutionary change to the public sector. Learn more about our values, culture, and vision and how we look to unleash the potential of AI to drive transformation in the public sector.',
                      })}
                    />,
                  ]}
                  loop
                />
              ),
              type: 'jsx',
            },
          ],
          py: 0,
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
        // Client Logos Gallery
        renderClientLogosGallery({
          title:
            'We Transform Public Sector Enterprises Across Industries for the Future of Governance',
          items: clientLogos,
        }),
        // Showcases
        renderShowcasesBlock({
          title: <>Empowering the Public Sector through AI-driven Solutions</>,
          items: showcases.slice(0, 3),
          pt: { xs: 5, md: 10 },
          subtitle:
            'Empower the public sector with AI-driven solutions from Gov X. Optimize operations, make data-driven decisions, and deliver enhanced public services. Revolutionize governance with our innovative technologies.',
        }),
        // Posts
        renderFeaturedPostsBlock({
          title: localeTitle
            ? `Read our Latest Insights in ${localeTitle}`
            : `Read our Latest Insights`,
          items: featuredPosts,
        }),
        // News
        renderFeaturedNewsBlock({ items: featuredPressReleases }),
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
          pb: 0,
          pt: { xs: 5, md: 10 },
          sx: { backgroundColor: 'background.paper' },
        }),
      ]}
    />
  )
}

export default GovxPage
