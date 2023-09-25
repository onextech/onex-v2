import React from 'react'

import {
  Block,
  Blocks,
  renderClientLogosGallery,
  renderClientLogosImageMarqueeBlock,
  renderCtaBlock,
  renderFaqsAccordionBlock,
  renderFeaturedIndustrysBlock,
  renderFeaturedNewsBlock,
  renderFeaturedPostsBlock,
  renderHeroWithBackgroundBlock,
  renderHomeSummaryBlock,
  renderShowcasesBlock,
  renderThreeColumnGridBlock,
  useLayout,
} from '@gravis-os/landing'
import {
  Industry,
  Page,
  Post,
  PressRelease,
  Showcase,
  Technology,
} from '@gravis-os/types'
import { Slider } from '@gravis-os/ui'
import { useRouter } from 'next/router'

export interface FinxPageProps {
  featuredPosts: Post[]
  featuredPressReleases: PressRelease[]
  industrys: Industry[]
  page: Page
  showcases: Showcase[]
  technologys: Technology[]
}

const FinxPage: React.FC<FinxPageProps> = (props) => {
  const { featuredPosts, featuredPressReleases, industrys, page, showcases } =
    props
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
                          alt: 'Glass ball',
                          src: '/images/home_hero_1.jpeg',
                        },
                      })}
                    />,
                    <Block
                      fill
                      {...renderHeroWithBackgroundBlock({
                        ...hero,
                        title:
                          'Empowering the Finance Industry with AI Insights and Expertise',
                        backgroundImageProps: {
                          alt: 'Old coin',
                          src: '/images/home_hero_2.jpeg',
                        },
                        subtitle:
                          'Explore our curated collection of articles on the intersection of AI and the finance sector, gaining valuable insights to revolutionize your business and stay ahead of the digital transformation curve.',
                      })}
                    />,
                    <Block
                      fill
                      {...renderHeroWithBackgroundBlock({
                        ...hero,
                        title:
                          'Transforming the Future of Financial Industries',
                        backgroundImageProps: {
                          alt: 'Black card',
                          src: '/images/home_hero_3.jpeg',
                        },
                        subtitle:
                          'Fin X harnesses the power of artificial intelligence to drive unprecedented growth and efficiency in the financial industry, enabling enterprises to unlock the full potential of AI-driven solutions for unparalleled success.',
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
        // Client logo gallery
        renderClientLogosGallery({
          title: 'We work with and drive innovation for financial enterprises',
          items: clientLogos,
        }),
        // Showcases
        renderShowcasesBlock({
          title: <>Empowering the Finance Sector through AI-driven Solutions</>,
          items: showcases.slice(0, 3),
          pt: { xs: 5, md: 10 },
          subtitle:
            'At Fin X, we empower the finance sector by harnessing the power of AI-driven solutions. Our innovative technologies and expertise enable financial institutions to streamline operations, optimize decision-making, and drive transformative growth in an increasingly digital landscape',
        }),
        // Industry
        renderFeaturedIndustrysBlock({
          title: 'Empowering Industries with AI-Powered Innovations',
          items: industrys,
          subtitle:
            'Fin X drives the finance sector forward with AI-driven solutions and expert consulting services, revolutionizing industries by harnessing the transformative power of artificial intelligence.',
          sx: { backgroundColor: 'background.paper' },
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

export default FinxPage
