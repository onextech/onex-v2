import React from 'react'

import {
  Blocks,
  renderClientLogosGallery,
  renderClientLogosImageMarqueeBlock,
  renderFeaturedIndustrysBlock,
  renderFeaturedNewsBlock,
  renderHeroWithVideoBackgroundBlock,
  useLayout,
} from '@onex/landing'
import { Industry, Page, Post, PressRelease, Showcase } from '@onex/types'
import { routeConfig } from '@onex/common'

export interface AelPageProps {
  featuredPosts: Post[]
  featuredPressReleases: PressRelease[]
  industrys: Industry[]
  page: Page
  showcases: Showcase[]
}

const buttonProps = {
  sx: {
    borderBottom: '1px solid',
    borderColor: 'divider',
    fontFamily: 'inherit',
    fontSize: '2rem',
    fontWeight: 'normal',
    justifyContent: 'start',
    py: 2,
    textTransform: 'none',
    width: '100%',
  },
}

const AelPage: React.FC<AelPageProps> = (props) => {
  const { featuredPosts, featuredPressReleases, industrys, page, showcases } =
    props

  const { sections } = page || {}
  const { benefits, cta, faqs, hero, summary } = sections || {}

  const { clientLogos, site } = useLayout()

  return (
    <Blocks
      items={[
        // Hero
        renderHeroWithVideoBackgroundBlock({
          title: 'Advancing healthcare with artificial intelligence.',
          buttonProps: {
            title: 'Schedule a Demo',
            href: routeConfig.SERVICES,
            overline: 'Our Services',
            size: 'large',
          },
          maxWidth: 'lg',
          subtitle:
            'Aether Labs is an applied AI research and technology consultancy shaping the next era of healthcare innovation.',
          subtitleProps: {
            sx: { color: 'text.primary', fontWeight: 500, opacity: 0.8 },
          },
          video_poster_src: '/videos/home_video_poster.jpg',
          video_src: '/videos/home_video.mp4',
        }) as any,
        // ClientLogosImageMarquee
        renderClientLogosImageMarqueeBlock({
          items: clientLogos.slice(0, 8),
          sx: { backgroundColor: 'background.paper', position: 'relative' },
        }),
        // Services
        {
          id: 'services',
          items: [
            { title: 'Our Services', type: 'overline' },
            {
              title:
                'We build transformative AI-driven products with amazing healthcare companies.',
              titleProps: { gutterBottom: true },
              type: 'h2',
            },
            {
              title: <span>Our Work</span>,
              titleProps: { ...buttonProps, href: routeConfig.SHOWCASES },
              type: 'button',
            },
            {
              title: <span>What We Do</span>,
              titleProps: { ...buttonProps, href: routeConfig.SERVICES },
              type: 'button',
            },
            {
              title: <span>About Us</span>,
              titleProps: { ...buttonProps, href: routeConfig.ABOUT },
              type: 'button',
            },
            {
              title: <span>Contact</span>,
              titleProps: { ...buttonProps, href: routeConfig.CONTACT },
              type: 'button',
            },
          ],
          pt: { xs: 3, md: 6 },
          sx: { backgroundColor: 'background.paper' },
        },
        // Client Logos Gallery
        {
          id: 'gallery-title',
          dark: true,
          items: [
            { title: 'Trusted By', type: 'overline' },
            {
              title:
                'We unite technology and cutting-edge research to discover and develop new AI solutions for our healthcare partners.',
              titleProps: { gutterBottom: true },
              type: 'h3',
            },
          ],
          pb: 3,
        },
        renderClientLogosGallery({
          dark: true,
          items: clientLogos,
          pt: 0,
        }),
        // Industry
        renderFeaturedIndustrysBlock({
          title: 'In-Depth Industry Expertise',
          items: industrys,
          sx: { backgroundColor: 'background.paper' },
          titleType: 'h2',
          disableHref: true,
        }),
        // News
        renderFeaturedNewsBlock({ items: featuredPressReleases }),
      ]}
    />
  )
}

export default AelPage
