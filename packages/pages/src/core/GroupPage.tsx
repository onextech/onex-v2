import React from 'react'
import { Blocks } from '@gravis-os/landing'
import {
  renderClientHighlightsImageMarqueeBlock,
  renderGhostButtonBlockItem,
  renderHeroWithVideoBackgroundBlock,
  renderFeaturedPostsBlock,
  renderThreeColumnGridBlock,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'
import { Page, Post } from '@onex/types'

export interface GroupPageProps {
  page: Page
  posts: Post[]
}

const GroupPage: React.FC<GroupPageProps> = (props) => {
  const { page, posts } = props
  const { site, routeConfig, clientHighlights } = useLayout()
  const { overline, sections } = page || {}
  const { hero, benefits, features, cta } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderHeroWithVideoBackgroundBlock({
          ...hero,
          video_src: '/videos/home_video.mp4',
          video_poster_src: '/videos/home_video_poster.jpg',
          buttonProps: {
            overline: 'What we do',
            title: 'Smarter Businesses',
            size: 'lg',
            href: routeConfig.SERVICES,
          },
          secondaryButtonProps: {
            overline: 'Who we are',
            title: 'Business Software Experts',
            size: 'lg',
            href: routeConfig.CAREERS,
          },
        }),
        // Marquee
        renderClientHighlightsImageMarqueeBlock({ items: clientHighlights }),
        // Benefits
        renderThreeColumnGridBlock({
          ...benefits,
          sx: { backgroundColor: 'background.paper' },
        }),
        // Posts
        renderFeaturedPostsBlock({ items: posts }),
        // Features
        renderThreeColumnGridBlock(features),
        // Cta
        {
          key: cta.title,
          center: true,
          maxWidth: 'md',
          pt: { xs: 5, md: 10 },
          pb: 0,
          items: [
            { type: 'overline', title: overline },
            {
              type: 'h3',
              title: cta.title,
              titleProps: { type: 'h3', maxWidth: 'xl', gutterBottom: true },
            },
            {
              type: 'body1',
              title: cta.subtitle,
              titleProps: {
                color: 'text.secondary',
              },
            },
            renderGhostButtonBlockItem({
              boxProps: { mt: 3 },
              overline: 'Contact Us',
              title: 'Get in Touch',
              href: `/${routeConfig.CONTACT}`,
            }),
            {
              type: 'image',
              title: '/images/design_men.png',
              disableContainer: true,
              titleProps: {
                alt: 'tech men',
                background: true,
                backgroundHeight: { xs: 480, md: 640 },
                backgroundSx: { mt: { xs: 5, md: 10 } },
              },
            },
          ],
        },
      ]}
    />
  )
}

export default GroupPage
