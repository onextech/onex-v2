import React from 'react'

import { routeConfig } from '@onex/common'
import {
  Blocks,
  renderClientLogosImageMarqueeBlock,
  renderFadeToBottomBackgroundImageBlock,
  renderFaqsAccordionBlock,
  renderFeaturedIndustrysBlock,
  renderFeaturedNewsBlock,
  renderFeaturedPostsBlock,
  renderFeaturedResourcesBlock,
  renderHeroWithVideoSlider,
  renderHomeSummaryBlock,
  renderShowcaseSlider,
  renderThreeColumnGridBlock,
  useLayout,
} from '@onex/landing'
import {
  Industry,
  Page,
  Post,
  PressRelease,
  Resource,
  Showcase,
} from '@onex/types'

export interface GroupPageProps {
  featuredPosts: Post[]
  featuredPressReleases: PressRelease[]
  heroPosts: Post[]
  industrys: Industry[]
  page: Page
  resources: Resource[]
  showcases: Showcase[]
}

const GroupPage: React.FC<GroupPageProps> = (props) => {
  const {
    featuredPosts,
    featuredPressReleases,
    heroPosts,
    industrys,
    page,
    resources,
    showcases,
  } = props

  const { sections } = page || {}
  const { benefits, cta, faqs, summary } = sections || {}

  const { clientLogos, site } = useLayout()

  return (
    <Blocks
      items={[
        // Hero
        renderHeroWithVideoSlider({
          items: [
            {
              title: 'One X Group',
              buttonProps: {
                title: 'Read More',
                href: routeConfig.SERVICES,
                overline: 'Our Services',
              },
              subtitle: 'We Design & Develop Custom Software',
            },
            ...heroPosts.map((post) => {
              const { title, slug, category } = post
              return {
                title: category.title,
                buttonProps: {
                  title: 'Read More',
                  href: `${routeConfig.POSTS}/${category?.slug}/${slug}`,
                  overline: 'Our Insights',
                },
                subtitle: title,
              }
            }),
          ],
          video_poster_src: '/videos/home_video_poster.jpg',
          video_src: '/videos/home_video.mp4',
        }),
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
        // Showcases
        renderShowcaseSlider({
          title:
            'Elevate Your Business with Our Dedicated Technology Consulting Services',
          items: showcases,
          pt: { xs: 5, md: 10 },
          subtitle:
            'Enhancing enterprise performance through exceptional technology consulting: Explore our portfolio showcasing our dedication to delivering impactful custom software development that drive business success.',
        }),
        // Industry
        renderFeaturedIndustrysBlock({
          title: 'Access Industry Expertise & Best Practices',
          items: industrys,
          subtitle:
            'We are dedicated to providing our clients with solutions that are designed to help them stay ahead of the curve in their industry. We are constantly developing new techniques, and methodologies to ensure that our clients always get access to the most effective development solutions in their industry.',
          sx: { backgroundColor: 'background.paper' },
        }),
        // Posts
        renderFeaturedPostsBlock({
          items: featuredPosts,
          py: { xs: 5, md: 10 },
        }),
        // News
        renderFeaturedNewsBlock({
          items: featuredPressReleases,
          py: 5,
        }),
        // Resources
        renderFeaturedResourcesBlock({
          items: resources,
          py: { xs: 5, md: 10 },
        }),
        // Faqs
        !site.disable_faqs_on_home_page &&
          renderFaqsAccordionBlock({
            py: { xs: 5, md: 10 },
            ...faqs,
            sx: { backgroundColor: 'background.paper' },
          }),
        // Cta
        renderFadeToBottomBackgroundImageBlock({
          title: cta.title,
          buttonProps: cta.buttons?.[0],
          hero_alt: cta.hero_alt,
          hero_src: cta.hero_src,
          subtitle: cta.subtitle,
        }),
      ]}
    />
  )
}

export default GroupPage
