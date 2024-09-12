import React from 'react'

import {
  Blocks,
  renderClientLogosImageMarqueeBlock,
  renderCtaBlock,
  renderFaqsAccordionBlock,
  renderFeaturedIndustrysBlock,
  renderFeaturedNewsBlock,
  renderFeaturedPostsBlock,
  renderHeroWithBackgroundBlock,
  renderHomeSummaryBlock,
  renderShowcasesBlock,
  renderThreeColumnGridBlock,
  useLayout,
} from '@onex/landing'
import { Industry, Page, Post, PressRelease, Showcase } from '@onex/types'
import { useRouter } from 'next/router'

export interface DigitalPageProps {
  featuredPosts: Post[]
  featuredPressReleases: PressRelease[]
  industrys: Industry[]
  page: Page
  showcases: Showcase[]
}

const DigitalPage: React.FC<DigitalPageProps> = (props) => {
  const { featuredPosts, featuredPressReleases, industrys, page, showcases } =
    props
  const router = useRouter()
  const { clientLogos, routeConfig, site } = useLayout()
  const { cta_button_title, locales } = site
  const localeTitle = locales?.find(
    ({ iso_alpha_2 }) => iso_alpha_2 === router.locale
  )?.title
  const { sections } = page || {}
  const { benefits, cta, faqs, features, hero, summary } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderHeroWithBackgroundBlock({
          ...hero,
          buttonProps: {
            title: 'Enterprise Marketing',
            href: routeConfig.SERVICES,
            overline: 'What we do',
            size: 'lg',
          },
          secondaryButtonProps: {
            title: 'Digital Marketing Experts',
            href: routeConfig.CAREERS,
            overline: 'Who we are',
            size: 'lg',
          },
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
        renderShowcasesBlock({
          title: (
            <>
              Transform Your Enterprise&apos;s <br /> Marketing Landscape
            </>
          ),
          items: showcases.slice(0, 3),
          pt: { xs: 5, md: 10 },
          subtitle:
            "Our transformative digital marketing solutions redefine your enterprise's marketing approach, unlocking new growth opportunities by harnessing cutting-edge technologies, data-driven strategies, and industry expertise.",
        }),
        // Industry
        renderFeaturedIndustrysBlock({
          title: 'Access Industry Expertise & Best Practices',
          items: industrys,
          subtitle:
            'We are committed to delivering digital marketing solutions that enable our clients to stay at the forefront of their industry. We constantly develop cutting-edge techniques and methodologies, ensuring that our clients always have access to the most effective digital marketing strategies in their field.',
          sx: { backgroundColor: 'background.paper' },
        }),
        // Posts
        renderFeaturedPostsBlock({
          title: localeTitle
            ? `Read our Latest Insights in ${localeTitle}`
            : `Read our Latest Insights`,
          items: featuredPosts,
        }),
        // News
        renderFeaturedNewsBlock({ items: featuredPressReleases }),
        // Features
        renderThreeColumnGridBlock(features),
        // Faqs
        renderFaqsAccordionBlock({
          py: { xs: 5, md: 10 },
          ...faqs,
          sx: { backgroundColor: 'background.paper' },
        }),
        // Cta
        renderCtaBlock({
          item: cta,
          pb: 0,
          pt: { xs: 5, md: 10 },
          sx: { backgroundColor: 'background.paper' },
        }),
      ]}
    />
  )
}

export default DigitalPage
