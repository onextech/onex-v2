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
  renderFeaturedNewsBlock,
  useLayout,
  renderClientLogosGallery,
  renderHomeSummaryBlock,
} from '@gravis-os/landing'
import {
  Page,
  Post,
  Industry,
  Technology,
  Showcase,
  PressRelease,
} from '@gravis-os/types'
import { useRouter } from 'next/router'
import { Slider } from '@gravis-os/ui'

export interface FinxPageProps {
  page: Page
  showcases: Showcase[]
  technologys: Technology[]
  featuredPosts: Post[]
  industrys: Industry[]
  featuredPressReleases: PressRelease[]
}

const FinxPage: React.FC<FinxPageProps> = (props) => {
  const { page, showcases, featuredPosts, industrys, featuredPressReleases } =
    props
  const router = useRouter()
  const { site, clientLogos } = useLayout()
  const { locales } = site
  const localeTitle = locales?.find(
    ({ iso_alpha_2 }) => iso_alpha_2 === router.locale
  )?.title
  const { sections } = page || {}
  const { hero, benefits, features, faqs, cta, summary } = sections || {}

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
                          alt: 'Glass ball',
                        },
                      })}
                    />,
                    <Block
                      fill
                      {...renderHeroWithBackgroundBlock({
                        ...hero,
                        title:
                          'Empowering the Finance Industry with AI Insights and Expertise',
                        subtitle:
                          'Explore our curated collection of articles on the intersection of AI and the finance sector, gaining valuable insights to revolutionize your business and stay ahead of the digital transformation curve.',
                        backgroundImageProps: {
                          src: '/images/home_hero_2.jpeg',
                          alt: 'Old coin',
                        },
                      })}
                    />,
                    <Block
                      fill
                      {...renderHeroWithBackgroundBlock({
                        ...hero,
                        title:
                          'Transforming the Future of Financial Industries',
                        subtitle:
                          'Fin X harnesses the power of artificial intelligence to drive unprecedented growth and efficiency in the financial industry, enabling enterprises to unlock the full potential of AI-driven solutions for unparalleled success.',
                        backgroundImageProps: {
                          src: '/images/home_hero_3.jpeg',
                          alt: 'Black card',
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
        // Summary
        renderHomeSummaryBlock({
          ...summary,
          sx: { backgroundColor: 'background.paper' },
          titleProps: { maxWidth: '70%' },
          pb: { xs: 5, md: 0 },
        }),
        // Benefits
        renderThreeColumnGridBlock({
          ...benefits,
          sx: { backgroundColor: 'background.paper' },
        }),
        // Client logo gallery
        renderClientLogosGallery({
          items: clientLogos,
          title: 'We work with and drive innovation for financial enterprises',
        }),
        // Showcases
        renderShowcasesBlock({
          title: <>Empowering the Finance Sector through AI-driven Solutions</>,
          subtitle:
            'At Fin X, we empower the finance sector by harnessing the power of AI-driven solutions. Our innovative technologies and expertise enable financial institutions to streamline operations, optimize decision-making, and drive transformative growth in an increasingly digital landscape',
          items: showcases.slice(0, 3),
          pt: { xs: 5, md: 10 },
        }),
        // Industry
        renderFeaturedIndustrysBlock({
          title: 'Empowering Industries with AI-Powered Innovations',
          subtitle:
            'Fin X drives the finance sector forward with AI-driven solutions and expert consulting services, revolutionizing industries by harnessing the transformative power of artificial intelligence.',
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
          pt: { xs: 5, md: 10 },
          pb: 0,
          sx: { backgroundColor: 'background.paper' },
        }),
      ]}
    />
  )
}

export default FinxPage
