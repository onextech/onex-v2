import React from 'react'
import { Box, Slider, Typography } from '@gravis-os/ui'
import { Blocks, BlockItem } from '@gravis-os/landing'
import {
  renderGhostButtonBlockItem,
  renderFeaturedPostsBlock,
  renderThreeColumnGridBlock,
  renderClientLogosImageMarqueeBlock,
  renderShowcasesBlock,
  renderClientTestimonialCardsBlock,
  renderFeaturedIndustrysBlock,
  renderFaqsAccordionBlock,
  renderFadeToBottomBackgroundImageBlock,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'
import { Industry, Page, Post, Showcase } from '@onex/types'

export interface GroupPageProps {
  page: Page
  posts: Post[]
  showcases: Showcase[]
  industrys: Industry[]
}

const GroupPage: React.FC<GroupPageProps> = (props) => {
  const { page, showcases, posts, industrys } = props
  const { clientLogos, clientTestimonials, routeConfig } = useLayout()
  const { sections } = page || {}
  const { benefits, features, faqs, cta } = sections || {}

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
                  height={{ xs: 600, sm: 700, md: 800, xxl: 820 }}
                  tabs={[
                    ...posts.map((post) => {
                      const { category } = post
                      return category.title
                    }),
                  ]}
                  tabsProps={{ fullWidthOnDesktop: true }}
                  tabProps={{ sx: { p: 3 } }}
                  items={[
                    ...posts.map((post) => {
                      const { title, category } = post
                      return (
                        <Box sx={{ maxWidth: { md: '50%' } }}>
                          <Typography
                            variant="overline"
                            gutterBottom
                            color="text.secondary"
                          >
                            {category.title}
                          </Typography>
                          <Typography variant="h1">{title}</Typography>
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
                        </Box>
                      )
                    }),
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
          title: (
            <>
              Build World-Class <br /> Dashboard User Interfaces
            </>
          ),
          subtitle:
            'Empowering enterprises with high-quality dashboard user interfaces: Our portfolio features a range of dashboard projects that demonstrate our commitment to empowering enterprises with high-quality user interfaces.',
          items: showcases,
          pt: { xs: 5, md: 10 },
        }),
        // Client Testimonials
        renderClientTestimonialCardsBlock({
          title: 'Trusted by Frontend Development Teams',
          subtitle:
            "Our focus on excellence, dedication, and commitment to our clients' success has earned us a reputation as a reliable and high-quality provider of frontend development services for enterprise-level organizations.",
          items: clientTestimonials,
        }),
        // Industry
        renderFeaturedIndustrysBlock({
          title: 'Access Industry Expertise & Best Practices',
          subtitle:
            'We are dedicated to providing our clients with solutions that are designed to help them stay ahead of the curve in their industry. We are constantly developing new techniques, and methodologies to ensure that our clients always get access to the most effective development solutions in their industry.',
          items: industrys,
          sx: { backgroundColor: 'background.paper' },
        }),
        // Posts
        renderFeaturedPostsBlock({ items: posts }),
        // Features
        renderThreeColumnGridBlock(features),
        // Faqs
        renderFaqsAccordionBlock({
          py: { xs: 5, md: 10 },
          ...faqs,
          sx: { backgroundColor: 'background.paper' },
        }),
        // Cta
        renderFadeToBottomBackgroundImageBlock({
          hero_src: cta.hero_src,
          hero_alt: cta.hero_alt,
          title: cta.title,
          subtitle: cta.subtitle,
          buttonProps: cta.buttons?.[0],
        }),
      ]}
    />
  )
}

export default GroupPage
