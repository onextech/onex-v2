import React from 'react'
import {
  Blocks,
  renderFeaturedPostsBlock,
  renderClientLogosImageMarqueeBlock,
  renderShowcasesBlock,
  renderFeaturedIndustrysBlock,
  useLayout,
  renderHeroWithVideoBackgroundBlock,
  renderClientLogosGallery,
  renderFeaturedNewsBlock,
} from '@gravis-os/landing'
import { Industry, Page, Post, Showcase, PressRelease } from '@gravis-os/types'
import { routeConfig } from '@onex/common'

export interface AelPageProps {
  page: Page
  featuredPosts: Post[]
  showcases: Showcase[]
  industrys: Industry[]
  featuredPressReleases: PressRelease[]
}

const buttonProps = {
  sx: {
    width: '100%',
    justifyContent: 'start',
    textTransform: 'none',
    fontFamily: 'inherit',
    fontWeight: 'normal',
    fontSize: '2rem',
    borderBottom: '1px solid',
    borderColor: 'divider',
    py: 2,
  },
}

const AelPage: React.FC<AelPageProps> = (props) => {
  const { page, showcases, featuredPosts, industrys, featuredPressReleases } =
    props

  const { sections } = page || {}
  const { hero, benefits, faqs, cta, summary } = sections || {}

  const { clientLogos, site } = useLayout()

  return (
    <Blocks
      items={[
        // Hero
        renderHeroWithVideoBackgroundBlock({
          maxWidth: 'lg',
          video_src: '/videos/home_video.mp4',
          video_poster_src: '/videos/home_video_poster.jpg',
          title: 'Advancing creativity with artificial intelligence.',
          subtitle:
            'Aether Labs is an applied AI research company shaping the next era of medical innovation.',
          buttonProps: {
            overline: 'Our Services',
            title: 'Schedule a Demo',
            href: routeConfig.SERVICES,
            size: 'large',
          },
        }),
        // ClientLogosImageMarquee
        renderClientLogosImageMarqueeBlock({
          items: clientLogos.slice(0, 8),
          sx: { backgroundColor: 'background.paper', position: 'relative' },
        }),
        // Services
        {
          key: 'services',
          sx: { backgroundColor: 'background.paper' },
          pt: { xs: 3, md: 6 },
          items: [
            { type: 'overline', title: 'Trusted By' },
            {
              type: 'h2',
              title:
                'We build transformative digital health products with amazing healthcare companies.',
              titleProps: { gutterBottom: true },
            },
            {
              type: 'button',
              title: <span>Our Work</span>,
              titleProps: { ...buttonProps, href: routeConfig.SHOWCASES },
            },
            {
              type: 'button',
              title: <span>What We Do</span>,
              titleProps: { ...buttonProps, href: routeConfig.SERVICES },
            },
            {
              type: 'button',
              title: <span>About Us</span>,
              titleProps: { ...buttonProps, href: routeConfig.ABOUT },
            },
            {
              type: 'button',
              title: <span>Contact</span>,
              titleProps: { ...buttonProps, href: routeConfig.CONTACT },
            },
          ],
        },
        // Client Logos Gallery
        {
          key: 'gallery-title',
          dark: true,
          pb: 3,
          items: [
            { type: 'overline', title: 'Trusted By' },
            {
              type: 'h3',
              title:
                'We unite AI and cutting-edge science to discover and develop new solutions for healthcare.',
              titleProps: { gutterBottom: true },
            },
          ],
        },
        renderClientLogosGallery({
          pt: 0,
          items: clientLogos,
          dark: true,
        }),
        // Industry
        renderFeaturedIndustrysBlock({
          title: 'In-Depth Industry Expertise',
          titleType: 'h2',
          items: industrys,
          sx: { backgroundColor: 'background.paper' },
        }),
        // Showcases
        renderShowcasesBlock({
          title: 'Elevating Healthcare with Dedicated AI Technology',
          items: showcases,
          pt: { xs: 5, md: 10 },
        }),
        // Posts
        renderFeaturedPostsBlock({
          items: featuredPosts,
          pt: { xs: 3, md: 6 },
        }),
        // News
        renderFeaturedNewsBlock({ items: featuredPressReleases }),
      ]}
    />
  )
}

export default AelPage
