import React from 'react'
import {
  Blocks,
  renderClientLogosImageMarqueeBlock,
  renderShowcasesBlock,
  renderThreeColumnGridBlock,
  renderFeaturedPostsBlock,
  renderFeaturedIndustrysBlock,
  renderFaqsAccordionBlock,
  renderHeroWithBackgroundBlock,
  renderCtaBlock,
  useLayout,
} from '@gravis-os/landing'
import { Page, Post, Industry, Showcase } from '@gravis-os/types'
import { useRouter } from 'next/router'

export interface DigitalPageProps {
  page: Page
  showcases: Showcase[]
  featuredPosts: Post[]
  industrys: Industry[]
}

const DigitalPage: React.FC<DigitalPageProps> = (props) => {
  const { page, showcases, featuredPosts, industrys } = props
  const router = useRouter()
  const { site, clientLogos, routeConfig } = useLayout()
  const { locales, cta_button_title } = site
  const localeTitle = locales?.find(
    ({ iso_alpha_2 }) => iso_alpha_2 === router.locale
  )?.title
  const { sections } = page || {}
  const { hero, benefits, features, faqs, cta } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderHeroWithBackgroundBlock({
          ...hero,
          buttonProps: {
            overline: 'What we do',
            title: 'Enterprise Marketing',
            size: 'lg',
            href: routeConfig.SERVICES,
          },
          secondaryButtonProps: {
            overline: 'Who we are',
            title: 'Digital Marketing Experts',
            size: 'lg',
            href: routeConfig.CAREERS,
          },
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
        renderShowcasesBlock({
          title: (
            <>
              Transform Your Enterprise&apos;s <br /> Marketing Landscape
            </>
          ),
          subtitle:
            "Our transformative digital marketing solutions redefine your enterprise's marketing approach, unlocking new growth opportunities by harnessing cutting-edge technologies, data-driven strategies, and industry expertise.",
          items: showcases,
          pt: { xs: 5, md: 10 },
        }),
        // Industry
        renderFeaturedIndustrysBlock({
          title: 'Access Industry Expertise & Best Practices',
          subtitle:
            'We are committed to delivering digital marketing solutions that enable our clients to stay at the forefront of their industry. We constantly develop cutting-edge techniques and methodologies, ensuring that our clients always have access to the most effective digital marketing strategies in their field.',
          items: industrys,
          sx: { backgroundColor: 'background.paper' },
        }),
        // Posts
        renderFeaturedPostsBlock({
          title: localeTitle
            ? `Read our Latest Insights in ${localeTitle}`
            : `Read our Latest Insights`,
          items: featuredPosts,
        }),
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
          pt: { xs: 5, md: 10 },
          pb: 0,
          sx: { backgroundColor: 'background.paper' },
        }),
      ]}
    />
  )
}

export default DigitalPage
