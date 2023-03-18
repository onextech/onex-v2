import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Service, ServiceCategory } from '@onex/types'
import {
  renderFadeToBottomBackgroundImageBlockItem,
  renderFaqsAccordionBlockItem,
  renderHeroBlockItem,
  renderParagraphBlockItem,
  renderThreeColumnGridBlockItem,
  renderRightChecklistBlockItem,
  renderPostBlockItem,
  RenderPostBlockItemProps,
  renderServiceBlockItem,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'

const commonBlockProps = {
  maxWidth: 'xl',
}

export interface ServicePageProps {
  service: Service
  serviceCategory: ServiceCategory
  relatedServices?: Service[]
}

const ServicePage: React.FC<ServicePageProps> = (props) => {
  const { service, serviceCategory, relatedServices } = props
  const { title, subtitle } = service || {}
  const { appConfig, routeConfig } = useLayout()

  return (
    <Blocks
      items={[
        renderHeroBlockItem({
          item: service,
          overline: 'Service',
          ...commonBlockProps,
        }),
        renderParagraphBlockItem({
          pt: { xs: 5, md: 10 },
          pb: 0,
          ...commonBlockProps,
          title: 'Innovation that drives real impact.',
          items: [
            'In the past decade, digital transformation and innovation completely changed the way the world does business. In the decade ahead, technological, social and environmental forces will make strategic innovation essential for the survival of any business operating at scale. For many organizations, however, innovation can feel like fumbling in the dark, leading to new products and services that don’t contribute to the health and longevity of the business. In an increasingly complex world, strategy and creativity are the keys to successful, impactful innovation.',
            'Strategic innovation requires organizations to have a deep understanding of the fundamental value propositions, offerings and objectives of their core business. From that foundation, they must identify the most valuable and viable paths for innovation based on their market position and internal capabilities. By aligning internal systems and stakeholders behind an innovation strategy crafted to achieve specific business impacts, organizations can empower growth and innovation from the inside out.',
          ],
        }),
        {
          key: 'technology',
          ...commonBlockProps,
          items: [
            { type: 'overline', title: 'What We Do' },
            {
              type: 'h3',
              title: `Our Capabilities`,
              titleProps: { maxWidth: '50%', gutterBottom: true },
            },
            {
              type: 'body1',
              title:
                'To deliver products of the highest quality, we follow the best practices that include code review, pair programming, test-driven development, continuous integration, and automated testing.',
              titleProps: {
                color: 'text.secondary',
                maxWidth: '40%',
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
        {
          key: 'benefits',
          sx: { backgroundColor: 'background.paper' },
          items: [
            {
              type: 'h4',
              title,
              titleProps: { gutterBottom: true },
            },
            {
              type: 'subtitle1',
              title: subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
              },
            },
            {
              type: 'grid',
              sx: { mt: { xs: 4, md: 8 } },
              gridProps: { spacing: 3 },
              gridItemProps: {
                xs: 6,
                md: 3,
                sx: { textAlign: { xs: 'center', md: 'left' } },
              },
              gridItems: [
                {
                  items: [
                    {
                      type: 'image',
                      title: '/images/about_shape_circle_radial.svg',
                      titleProps: {
                        alt: 'about_shape_circle_radial',
                        width: 101,
                        height: 101,
                        sx: { mb: 4 },
                      },
                    },
                    {
                      type: 'subtitle2',
                      title: '01',
                      titleProps: { color: 'text.secondary', sx: { mb: 3 } },
                    },
                    {
                      type: 'subtitle2',
                      title: 'Design a new product',
                      titleProps: { gutterBottom: true },
                    },
                    {
                      type: 'body1',
                      title:
                        'We create human-centred designs focused on driving conversions and achieving business goals.',
                      titleProps: { color: 'text.secondary' },
                    },
                  ],
                },
                {
                  items: [
                    {
                      type: 'image',
                      title: '/images/about_shape_squares.svg',
                      titleProps: {
                        alt: 'about_shape_squares',

                        width: 101,
                        height: 101,
                        sx: { mb: 4 },
                      },
                    },
                    {
                      type: 'subtitle2',
                      title: '02',
                      titleProps: { color: 'text.secondary', sx: { mb: 3 } },
                    },
                    {
                      type: 'subtitle2',
                      title: 'Launch a new company',
                      titleProps: { gutterBottom: true },
                    },
                    {
                      type: 'body1',
                      title:
                        'Launch your MVP at start-up speed with an expert team of designers and developers.',
                      titleProps: { color: 'text.secondary' },
                    },
                  ],
                },
                {
                  items: [
                    {
                      type: 'image',
                      title: '/images/about_shape_square_with_circle.svg',
                      titleProps: {
                        alt: 'about_shape_square_with_circle',

                        width: 101,
                        height: 101,
                        sx: { mb: 4 },
                      },
                    },
                    {
                      type: 'subtitle2',
                      title: '03',
                      titleProps: { color: 'text.secondary', sx: { mb: 3 } },
                    },
                    {
                      type: 'subtitle2',
                      title: 'Scale up development',
                      titleProps: { gutterBottom: true },
                    },
                    {
                      type: 'body1',
                      title:
                        'Our team works directly with you to boost your development speed and scale.',
                      titleProps: { color: 'text.secondary' },
                    },
                  ],
                },
                {
                  items: [
                    {
                      type: 'image',
                      title: '/images/about_shape_circles.svg',
                      titleProps: {
                        alt: 'about_shape_circles',
                        width: 101,
                        height: 101,
                        sx: { mb: 4 },
                      },
                    },
                    {
                      type: 'subtitle2',
                      title: '04',
                      titleProps: { color: 'text.secondary', sx: { mb: 3 } },
                    },
                    {
                      type: 'subtitle2',
                      title: 'Improve a current system',
                      titleProps: { gutterBottom: true },
                    },
                    {
                      type: 'body1',
                      title:
                        "Identify areas for automation and improve efficiency so you can spend more time on what's important.",
                      titleProps: { color: 'text.secondary' },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          key: 'related-by-category',
          py: { xs: 5, md: 10 },
          items: [
            {
              type: 'h4',
              title: 'Related Services',
              titleProps: { sx: { mb: { xs: 3, md: 5 } } },
            },
            {
              type: 'grid',
              gridItems: relatedServices?.map((relatedService) =>
                renderServiceBlockItem({
                  item: {
                    href: `${routeConfig.SERVICES}/${serviceCategory.slug}/${relatedService.slug}`,
                    ...(relatedService as RenderPostBlockItemProps['item']),
                  },
                })
              ),
            },
          ],
        },
      ]}
    />
  )
}

export default ServicePage
