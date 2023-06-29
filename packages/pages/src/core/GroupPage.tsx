import React from 'react'
import { Box, Slider, Typography } from '@gravis-os/ui'
import {
  Blocks,
  BlockItem,
  renderGhostButtonBlockItem,
  renderFeaturedPostsBlock,
  renderThreeColumnGridBlock,
  renderClientLogosImageMarqueeBlock,
  renderShowcaseSlider,
  renderFeaturedIndustrysBlock,
  renderFaqsAccordionBlock,
  renderFadeToBottomBackgroundImageBlock,
  useLayout,
} from '@gravis-os/landing'
import { Industry, Page, Post, Showcase } from '@gravis-os/types'

export interface GroupPageProps {
  page: Page
  featuredPosts: Post[]
  heroPosts: Post[]
  showcases: Showcase[]
  industrys: Industry[]
}

const GroupPage: React.FC<GroupPageProps> = (props) => {
  const { page, showcases, featuredPosts, heroPosts, industrys } = props
  const { clientLogos, site } = useLayout()
  const { sections } = page || {}
  const { benefits, faqs, cta } = sections || {}

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
                    ...heroPosts.map((post) => {
                      const { category } = post
                      return category.title
                    }),
                  ]}
                  tabsProps={{ fullWidthOnDesktop: true }}
                  tabProps={{ sx: { p: 3 } }}
                  items={[
                    ...heroPosts.map((post) => {
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
                          <Typography variant="h2">{title}</Typography>
                          <BlockItem
                            disableContainer
                            {...renderGhostButtonBlockItem({
                              overline: 'Our Insights',
                              title: 'Read More',
                              size: 'lg',
                              href: `/insights/${post.category.slug}/${post.slug}`,
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
        renderShowcaseSlider({
          title: (
            <>
              Elevate Your Business with Our Dedicated Technology Consulting
              Services
            </>
          ),
          subtitle:
            'Enhancing enterprise performance through exceptional technology consulting: Explore our portfolio showcasing our dedication to delivering impactful custom software development that drive business success.',
          items: showcases.slice(0, 3),
          pt: { xs: 5, md: 10 },
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
        renderFeaturedPostsBlock({ items: featuredPosts }),
        // Faqs
        site.disable_faqs_on_home_page
          ? {}
          : renderFaqsAccordionBlock({
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
