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
  renderShowcasesBlock,
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
import { GalleryMarqueeSection } from '@onex/group/components/sections/gallery-marquee-section'

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
          center: true,
          pt: { xs: 10, md: 16 },
          pb: { xs: 10, md: 10 },
          sx: { backgroundColor: 'background.paper' },
          titleProps: { maxWidth: '70%' },
        }),
        
        <GalleryMarqueeSection title="Build Custom Solutions" subtitle="From ideation to implementation, we specialize in crafting customized software solutions that empower businesses to drive innovation, optimize processes, and achieve their strategic objectives." disableOverline disableServices />,
      
        // Posts
        renderFeaturedPostsBlock({
          items: featuredPosts,
          py: { xs: 5, md: 10 },
        }),

        // Showcases
        Boolean(showcases?.length) &&
          renderShowcasesBlock({
            overline: 'Driving Business Innovation',
            title: (
              <>
              Custom Software & <br /> AI Solutions for Growth
              </>
            ),
            items: showcases,
            pt: { xs: 5, md: 10 },
            subtitle: 'We help ambitious companies build smarter systems, unlock efficiency, and stay ahead in a fast-changing world.',
          }),

        // News
        renderFeaturedNewsBlock({
          items: featuredPressReleases,
          pt: 8,
          pb: { xs: 10, md: 20 },
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
