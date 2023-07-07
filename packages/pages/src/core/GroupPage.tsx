import React from 'react'
import {
  Blocks,
  renderFeaturedPostsBlock,
  renderThreeColumnGridBlock,
  renderClientLogosImageMarqueeBlock,
  renderShowcaseSlider,
  renderFeaturedIndustrysBlock,
  renderFaqsAccordionBlock,
  renderFadeToBottomBackgroundImageBlock,
  renderHeroWithVideoSlider,
  useLayout,
} from '@gravis-os/landing'
import { Industry, Page, Post, Showcase } from '@gravis-os/types'
import { routeConfig } from '@onex/common'

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
        renderHeroWithVideoSlider({
          video_src: '/videos/home_video.mp4',
          video_poster_src: '/videos/home_video_poster.jpg',
          items: [
            {
              title: 'Introduction',
              subtitle: 'We Design & Develop Custom Software',
              buttonProps: {
                overline: 'Our Services',
                title: 'Read More',
                href: routeConfig.SERVICES,
              },
            },
            ...heroPosts.map((post) => {
              const { category, title } = post
              return {
                title: category.title,
                subtitle: title,
                buttonProps: {
                  overline: 'Our Insights',
                  title: 'Read More',
                  href: `${routeConfig.POSTS}/${post.category.slug}/${post.slug}`,
                },
              }
            }),
          ],
        }),
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
          title:
            'Elevate Your Business with Our Dedicated Technology Consulting Services',
          subtitle:
            'Enhancing enterprise performance through exceptional technology consulting: Explore our portfolio showcasing our dedication to delivering impactful custom software development that drive business success.',
          items: showcases,
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
