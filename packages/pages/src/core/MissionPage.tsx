import React from 'react'
import { Blocks } from '@gravis-os/landing'
import {
  renderFadeToBottomBackgroundImageBlock,
  renderGhostButtonBlockItem,
  renderClientCardBlockItem,
} from '@onex/blocks'
import { routeConfig } from '@onex/common'
import { useLayout } from '@onex/providers'

export interface MissionPageProps {}

const commonBlockProps = { center: true, maxWidth: 'md' }

const MissionPage: React.FC<MissionPageProps> = () => {
  const { appConfig } = useLayout()
  return (
    <Blocks
      items={[
        {
          dark: true,
          pt: { xs: 10, xl: 20 },
          pb: { xs: 50, xl: 70 },
          key: 'mission-hero',
          ...commonBlockProps,
          maxWidth: 'xl',
          backgroundImageProps: {
            src: '/images/mission_earth.png',
            alt: 'mission-earth',
          },
          items: [
            { type: 'overline', title: 'Our Mission' },
            {
              type: 'h2',
              title: 'Software that Means Business',
              titleProps: { gutterBottom: true },
            },
            {
              type: 'h5',
              maxWidth: 'md',
              title: `${appConfig.title} delivers effective, value-driven technological innovations for leading enterprises`,
              titleProps: {
                color: 'text.secondary',
                gutterBottom: true,
                maxWidth: true,
              },
            },
            {
              type: 'body1',
              maxWidth: 'md',
              title:
                'We assist enterprise clients in their digital transformation and we deliver cutting- edge solutions by applying established and emerging technologies into their core business models.',
              titleProps: { color: 'text.secondary', maxWidth: true },
            },
          ],
        },
        {
          key: 'change-with-technology',
          ...commonBlockProps,
          maxWidth: 'sm',
          sx: { backgroundColor: 'background.paper' },
          dark: true,
          py: 10,
          items: [
            {
              type: 'h4',
              title: 'We are on a mission to change the world with technology.',
              titleProps: { gutterBottom: true },
            },
            {
              type: 'body1',
              title:
                'Our team of consultants, designers and engineers live and breathe digital services to deliver best-in-class technological solutions.',
              titleProps: {
                color: 'text.secondary',
              },
            },
            renderGhostButtonBlockItem({
              overline: 'Who we are',
              title: 'Business Software Experts',
              href: routeConfig.CAREERS,
              boxProps: { mt: 4 },
            }),
          ],
        },
        {
          key: 'we-craft-digital',
          ...commonBlockProps,
          dark: true,
          sx: { backgroundColor: 'background.paper' },
          py: 20,
          backgroundImageProps: {
            src: '/images/mission_starry_night_sky.png',
            alt: 'hero',
          },
          items: [
            {
              type: 'h4',
              title: (
                <span>
                  We craft digital products and
                  <br />
                  ecosystems from real-world data.
                </span>
              ),
              titleProps: { gutterBottom: true },
            },
            {
              type: 'body1',
              title:
                'We partner with companies large and small to shape technology that delights users and makes businesses more successful. We believe growth comes from optimising around data – so we continuously test, measure and learn throughout the product lifecycle.',
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
              },
            },
            renderGhostButtonBlockItem({
              overline: 'Our Mission',
              title: 'Enabling Smarter Businesses',
              href: routeConfig.SERVICES,
              boxProps: { mt: 3 },
            }),
          ],
        },
        {
          key: 'find-opportunities',
          ...commonBlockProps,
          maxWidth: 'md',
          dark: true,
          sx: { backgroundColor: 'background.paper' },
          pt: { xs: 15, lg: 30 },
          pb: { xs: 40, lg: 80 },
          backgroundImageProps: {
            src: '/images/mission_singapore_city_nightscape.png',
            alt: 'hero',
          },
          items: [
            {
              type: 'h4',
              title:
                'We find opportunities by diving deep into our clients’ business, users, data & technology.',
              titleProps: { sx: { mb: 4 } },
            },
            {
              type: 'body1',
              title: (
                <span>
                  {appConfig.title} is a business technology partner, focused on
                  building technological innovations for leading enterprises.
                  <br />
                  <br />
                  We use insights to rapidly ideate, architect & prototype. Our
                  team of consultants, designers and engineers work side-by-side
                  to craft distinctive and powerful solutions. We apply
                  established and emerging technologies into core business
                  models to deliver transformational outcomes in a demanding
                  digital world.
                </span>
              ),
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
              },
            },
            renderGhostButtonBlockItem({
              overline: 'Our Mission',
              title: 'Enabling Smarter Businesses',
              href: routeConfig.SERVICES,
              boxProps: { mt: 3 },
            }),
          ],
        },
      ]}
    />
  )
}

export default MissionPage
