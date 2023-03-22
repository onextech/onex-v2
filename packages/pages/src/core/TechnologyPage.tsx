import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Post, Technology } from '@onex/types'
import {
  renderHeroBlockItem,
  renderFourColumnGridBlockItem,
  renderThreeColumnGridBlockItem,
  renderFadeToBottomBackgroundImageBlockItem,
  renderFaqsAccordionBlockItem,
  renderRelatedPostsBlock,
  renderRightChecklistBlockItem,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'

export interface TechnologyPageProps {
  technology: Technology
  relatedPosts?: Post[]
}

const TechnologyPage: React.FC<TechnologyPageProps> = (props) => {
  const { technology, relatedPosts } = props
  const { title } = technology || {}
  const { appConfig, routeConfig } = useLayout()

  return (
    <Blocks
      items={[
        renderHeroBlockItem({ item: technology, overline: 'Technology' }),
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
        renderRelatedPostsBlock({
          items: relatedPosts,
          sx: { backgroundColor: 'background.paper' },
        }),
        renderFadeToBottomBackgroundImageBlockItem({
          hero_src: '/images/about_nodes_above_city.png',
          hero_alt: 'about_nodes_above_city',
          title: 'We Design & Develop Custom Software for Businesses',
          subtitle:
            'Our team of consultants, designers and engineers live and breathe digital services to deliver best-in-class technological solutions.',
        }),
        {
          key: 'technology',
          center: true,
          items: [
            { type: 'overline', title: 'What We Do' },
            {
              type: 'h3',
              title: `Our Approach to ${title}`,
              maxWidth: 'md',
              titleProps: { gutterBottom: true },
            },
            {
              type: 'body1',
              title:
                'To deliver products of the highest quality, we follow the best practices that include code review, pair programming, test-driven development, continuous integration, and automated testing.',
              maxWidth: 'md',
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
              },
            },
            renderThreeColumnGridBlockItem({
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
          ],
        },
        renderRightChecklistBlockItem({
          blockProps: { py: 0 },
          overline: 'What we do',
          title: `Why ${appConfig.title} for ${title}`,
          subtitle:
            'To deliver products of the highest quality, we follow the best practices that include code review, pair programming, test-driven development, continuous integration, and automated testing.',
          items: [
            {
              title: 'Full suite of services',
            },
            {
              title: 'Unrivaled ReactJS knowledge',
            },
            {
              title: 'Quality and best practices baked in',
            },
            {
              title: 'Deep ReactJS community involvement',
            },
            {
              title: 'Support for ReactJS ongoing development',
            },
            {
              title: 'Hired by Fortune 500 brands',
            },
          ],
        }),
        renderFaqsAccordionBlockItem({
          blockProps: { py: { xs: 5, md: 10 } },
          items: [
            {
              key: 'how-it-works',
              title:
                'What are the advantages of developing web apps with ReactJS?',
              content:
                'ReactJS components allows to really embrace agile approach to ever-changing business requirements. It takes care of the inner workings of updating the browser and allows us to focus on developing the application’s features.',
            },
            {
              key: 'how-it-works-1',
              title: 'How can ReactJS development benefit my existing system?',
              content:
                "ReactJS's sophisticated algorithms will help to boost system performance and improve user experience.",
            },
            {
              key: 'how-it-works-2',
              title: 'What is the future of ReactJS?',
              content:
                'ReactJS is the fastest growing library used to create user interface in modern single-page applications. It is the driving force behind products of the most successful companies like Airbnb, Instagram and Netflix.',
            },
            {
              key: 'how-it-works-3',
              title: 'How much does it cost to hire ReactJS developers?',
              content:
                "ReactJS's sophisticated algorithms will help to boost system performance and improve user experience.",
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
