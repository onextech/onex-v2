import React from 'react'
import { Blocks } from '@gravis-os/landing'
import {
  renderFaqsAccordionBlock,
  renderFourColumnGridBlock,
  renderGhostButtonBlockItem,
  renderHalfGridBlock,
  renderHeroWithBackgroundBlock,
  renderRightChecklistBlock,
  renderShowcasesBlock,
  renderThreeColumnGridBlock,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'
import { Page, Showcase } from '@onex/types'

export interface TechPageProps {
  tech: Page
  showcases: Showcase[]
}

const TechPage: React.FC<TechPageProps> = (props) => {
  const { tech, showcases } = props
  const { appConfig, routeConfig } = useLayout()
  const { overline, sections } = tech || {}
  const { hero, benefits, features, cta } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderHeroWithBackgroundBlock({
          ...hero,
          buttonProps: {
            overline: 'What we do',
            title: 'Smarter Businesses',
            size: 'lg',
            href: routeConfig.SERVICES,
          },
          secondaryButtonProps: {
            overline: 'Who we are',
            title: 'Business Software Experts',
            size: 'lg',
            href: routeConfig.CAREERS,
          },
        }),
        // Benefits
        renderThreeColumnGridBlock({
          ...benefits,
          sx: { backgroundColor: 'background.paper' },
        }),
        // Showcases
        renderShowcasesBlock({ items: showcases }),
        // Features
        renderThreeColumnGridBlock(features),
        // Cta
        {
          key: cta.title,
          center: true,
          maxWidth: 'md',
          pt: { xs: 5, md: 10 },
          pb: 0,
          items: [
            { type: 'overline', title: overline },
            {
              type: 'h3',
              title: cta.title,
              titleProps: { type: 'h3', maxWidth: 'xl', gutterBottom: true },
            },
            {
              type: 'body1',
              title: cta.subtitle,
              titleProps: {
                color: 'text.secondary',
              },
            },
            renderGhostButtonBlockItem({
              boxProps: { mt: 3 },
              overline: 'Contact Us',
              title: 'Get in Touch',
              href: `${appConfig.companyAbsoluteUrl}${routeConfig.CONTACT}`,
            }),
            {
              type: 'image',
              title: '/images/tech_men.png',
              disableContainer: true,
              titleProps: {
                alt: 'tech men',
                background: true,
                backgroundHeight: { xs: 480, md: 640 },
                backgroundSx: { mt: { xs: 5, md: 10 } },
              },
            },
          ],
        },
      ]}
    />
  )
}

export default TechPage
