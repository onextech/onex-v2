import React from 'react'
import { Box, Slider, Typography } from '@gravis-os/ui'
import { Blocks, Block, BlockItem } from '@gravis-os/landing'
import {
  renderClientHighlightsImageMarqueeBlock,
  renderGhostButtonBlockItem,
  renderHeroWithBackgroundBlock,
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
  const { routeConfig, clientHighlights } = useLayout()
  const { overline, sections } = page || {}
  const { hero, benefits, features, cta } = sections || {}

  return (
    <Blocks
      items={[
        {
          key: 'hero-with-video-slider',
          dark: true,
          py: 0,
          backgroundVideoProps: {
            src: '/videos/home_video.mp4',
            poster: '/videos/home_video_poster.jpg',
          },
          backgroundOverlayOpacity: 0.5,
          items: [
            {
              type: 'jsx',
              title: (
                <Slider
                  autoplay
                  progress
                  disableCenter
                  middle
                  loop
                  height={{ xs: 600, sm: 700, md: 800, xl: 900 }}
                  tabs={[
                    'Enterprise Applications',
                    'Climate Change',
                    'Technology',
                  ]}
                  tabsProps={{ fullWidthOnDesktop: true }}
                  tabProps={{ sx: { p: 3 } }}
                  items={[
                    <Box sx={{ maxWidth: { md: '50%' } }}>
                      <Typography
                        variant="overline"
                        gutterBottom
                        color="text.secondary"
                      >
                        Finance
                      </Typography>
                      <Typography variant="h1">
                        Singapore Market Outlook 2023
                      </Typography>
                      <BlockItem
                        disableContainer
                        {...renderGhostButtonBlockItem({
                          overline: 'What we do',
                          title: 'Smarter Businesses',
                          size: 'lg',
                          href: routeConfig.SERVICES,
                          sx: { mt: { xs: 2, md: 4 } },
                        })}
                      />
                    </Box>,
                    <Box sx={{ maxWidth: { md: '50%' } }}>
                      <Typography
                        variant="overline"
                        gutterBottom
                        color="text.secondary"
                      >
                        Real Estate
                      </Typography>
                      <Typography variant="h1">Singapore Figures Q1</Typography>
                      <BlockItem
                        disableContainer
                        {...renderGhostButtonBlockItem({
                          overline: 'What we do',
                          title: 'Smarter Businesses',
                          size: 'lg',
                          href: routeConfig.SERVICES,
                          sx: { mt: { xs: 2, md: 4 } },
                        })}
                      />
                    </Box>,
                    <Box sx={{ maxWidth: { md: '50%' } }}>
                      <Typography
                        variant="overline"
                        gutterBottom
                        color="text.secondary"
                      >
                        Healthcare
                      </Typography>
                      <Typography variant="h1">
                        Singapore Luxury Residential Report H2
                      </Typography>
                      <BlockItem
                        disableContainer
                        {...renderGhostButtonBlockItem({
                          overline: 'What we do',
                          title: 'Smarter Businesses',
                          size: 'lg',
                          href: routeConfig.SERVICES,
                          sx: { mt: { xs: 2, md: 4 } },
                        })}
                      />
                    </Box>,
                  ]}
                />
              ),
            },
          ],
        },
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
                        ...hero,
                        title: 'We are the Growth Company',
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
                        title: 'Unleash your X Factor',
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
                        title: "Deliver Tomorrow's Innovation Today",
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
