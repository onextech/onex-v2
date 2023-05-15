import React from 'react'
import { Box, Slider, Typography } from '@gravis-os/ui'
import { Blocks, BlockItem } from '@gravis-os/landing'
import {
  renderGhostButtonBlockItem,
  renderFeaturedPostsBlock,
  renderThreeColumnGridBlock,
  renderCtaBlock,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'
import { Page, Post } from '@onex/types'

export interface GroupPageProps {
  page: Page
  posts: Post[]
}

const GroupPage: React.FC<GroupPageProps> = (props) => {
  const { page, posts } = props
  const { routeConfig } = useLayout()
  const { sections } = page || {}
  const { hero, benefits, features, cta } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
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
                  height={{ xs: 600, sm: 700, md: 800, xxl: 900 }}
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
        renderCtaBlock({ item: cta, pt: { xs: 5, md: 10 }, pb: 0 }),
      ]}
    />
  )
}

export default GroupPage
