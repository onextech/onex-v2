import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Technology } from '@onex/types'
import {
  renderHeroBlockItem,
  renderFourColumnGridBlockItem,
  renderThreeColumnGridBlockItem,
  renderFadeToBottomBackgroundImageBlockItem,
  renderFaqsAccordionBlockItem,
} from '@onex/blocks'
import renderRightChecklistBlockItem from '@onex/blocks/src/core/renderRightChecklistBlockItem'
import { useLayout } from '@onex/providers'

export interface TechnologyPageProps {
  technology: Technology
}

const TechnologyPage: React.FC<TechnologyPageProps> = (props) => {
  const { technology } = props
  const { title } = technology || {}
  const { appConfig, routeConfig } = useLayout()

  return (
    <Blocks
      items={[
        renderHeroBlockItem({ item: technology }),
        renderFourColumnGridBlockItem({
          overline: 'What we do',
          title: `Our Suite of ${title} Services`,
          subtitle:
            "Whether designing and developing a new application for an ambitious idea, or upgrading an existing tool, we're the right team to help.",
          items: [
            {
              fa_icon: 'fa-mug-hot',
              title: 'Food & Drinks',
              subtitle:
                'We create human-centred designs focused on driving conversions and achieving business goals.',
            },
            {
              fa_icon: 'fa-puzzle-piece',
              title: 'Live It Up',
              subtitle:
                'Launch your MVP at start-up speed with an expert team of designers and developers.',
            },
            {
              fa_icon: 'fa-guitar',
              title: 'Rewards',
              subtitle:
                'Our team works directly with you to boost your development speed and scale.',
            },
            {
              fa_icon: 'fa-table-tennis',
              title: 'Convenience',
              subtitle:
                "Identify areas for automation and improve efficiency so you can spend more time on what's important.",
            },
          ],
        }),
        renderFadeToBottomBackgroundImageBlockItem({
          hero_src: '/images/about_nodes_above_city.png',
          hero_alt: 'about_nodes_above_city',
          title: 'We Design & Develop Custom Software for Businesses',
          subtitle:
            'Our team of consultants, designers and engineers live and breathe digital services to deliver best-in-class technological solutions.',
        }),
        renderThreeColumnGridBlockItem({
          overline: 'What we do',
          title: `Our Approach to ${title}`,
          subtitle:
            'To deliver products of the highest quality, we follow the best practices that include code review, pair programming, test-driven development, continuous integration, and automated testing.',
          items: [
            {
              fa_icon: 'fa-watch',
              title: 'Scale up development',
              subtitle:
                'Our team works directly with you to boost your development speed and scale.',
            },
            {
              fa_icon: 'fa-hand-holding-seedling',
              title: 'Improve a current system',
              subtitle:
                "Identify areas for automation and improve efficiency so you can spend more time on what's important.",
            },
            {
              fa_icon: 'fa-mug-hot',
              title: 'Food & Drinks',
              subtitle:
                'We create human-centred designs focused on driving conversions and achieving business goals.',
            },
            {
              fa_icon: 'fa-puzzle-piece',
              title: 'Live It Up',
              subtitle:
                'Launch your MVP at start-up speed with an expert team of designers and developers.',
            },
            {
              fa_icon: 'fa-guitar',
              title: 'Rewards',
              subtitle:
                'Our team works directly with you to boost your development speed and scale.',
            },
            {
              fa_icon: 'fa-table-tennis',
              title: 'Convenience',
              subtitle:
                "Identify areas for automation and improve efficiency so you can spend more time on what's important.",
            },
          ],
        }),
        renderRightChecklistBlockItem({
          blockProps: { py: 0 },
          overline: 'What we do',
          title: `Why ${appConfig.title} for ${title}`,
          subtitle:
            'To deliver products of the highest quality, we follow the best practices that include code review, pair programming, test-driven development, continuous integration, and automated testing.',
          items: [
            {
              title: 'How does it work?',
            },
            {
              title: 'How does it work 2?',
            },
            {
              title: 'How does it work 3?',
            },
            {
              title: 'How does it work 4?',
            },
          ],
        }),
        renderFaqsAccordionBlockItem({
          blockProps: { py: { xs: 5, md: 10 } },
          items: [
            {
              key: 'how-it-works',
              title: 'How does it work?',
              content: 'Tell me more',
            },
            {
              key: 'how-it-works-1',
              title: 'How does it work?',
              content: 'Tell me more',
            },
            {
              key: 'how-it-works-2',
              title: 'How does it work?',
              content: 'Tell me more',
            },
            {
              key: 'how-it-works-3',
              title: 'How does it work?',
              content: 'Tell me more',
            },
          ],
        }),
        renderFadeToBottomBackgroundImageBlockItem({
          hero_src: '/images/about_nodes_above_city.png',
          hero_alt: 'about_nodes_above_city',
          overline: 'Built on Strategy',
          title: `Partnering with ${appConfig.title}`,
          titleProps: { type: 'h3', maxWidth: 'lg' },
          subtitle:
            'One X Tech partners with clients from startups to global MNCs to create solutions to the toughest software problems. Focusing on JavaScript as our core technology, we utilize ReactJS, React Native, NodeJS, GraphQL, and the extended JavaScript ecosystem to build web apps, mobile apps, cloud services, open source software, and more. Our approach is tailored to each product, so we will always work with your team to select the technologies best suited to your needs. We excel in web, mobile and cloud platform development and can apply our expertise to your product, no matter where it is in the product lifecycle.',
          subtitleProps: {
            type: 'body1',
            maxWidth: 'lg',
            titleProps: { maxWidth: '72%' },
          },
          buttonProps: {
            overline: 'Contact Us',
            title: 'Get in Touch',
            href: `${appConfig.companyAbsoluteUrl}${routeConfig.CONTACT}`,
          },
        }),
      ]}
    />
  )
}

export default TechnologyPage
