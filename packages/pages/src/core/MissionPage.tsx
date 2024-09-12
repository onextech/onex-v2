import React from 'react'

import {
  Blocks,
  renderGhostButtonBlockItem,
  useLayout,
} from '@onex/landing'
import { routeConfig } from '@onex/common'

export interface MissionPageProps {}

const commonBlockProps = { center: true, maxWidth: 'md' }

const MissionPage: React.FC<MissionPageProps> = () => {
  const { site } = useLayout()
  return (
    <Blocks
      items={[
        {
          id: 'mission-hero',
          dark: true,
          pb: { xs: 50, xl: 70 },
          pt: { xs: 10, xl: 20 },
          ...commonBlockProps,
          backgroundImageProps: {
            alt: 'mission-earth',
            src: '/images/mission_earth.png',
          },
          items: [
            { title: 'Our Mission', type: 'overline' },
            {
              title: 'Software that Matters',
              titleProps: { component: 'h1', gutterBottom: true },
              type: 'h2',
            },
            {
              title: `${site.title} delivers effective, value-driven technological innovations for leading enterprises`,
              maxWidth: 'md',
              titleProps: {
                color: 'text.secondary',
                gutterBottom: true,
                maxWidth: true,
              },
              type: 'h5',
            },
            {
              title:
                'We revolutionize enterprise software solutions, enabling businesses to thrive in the digital era through strategic technology consulting and cutting-edge software development.',
              maxWidth: 'md',
              titleProps: { color: 'text.secondary', maxWidth: true },
              type: 'body1',
            },
          ],
          maxWidth: 'xl',
        },
        {
          id: 'change-with-technology',
          ...commonBlockProps,
          dark: true,
          items: [
            {
              title: 'We are on a mission to change the world with technology.',
              titleProps: { gutterBottom: true },
              type: 'h4',
            },
            {
              title:
                'Our team of consultants, designers and engineers live and breathe digital services to deliver best-in-class technological solutions targeted at enterprise growth and digitalization.',
              titleProps: {
                color: 'text.secondary',
              },
              type: 'body1',
            },
            renderGhostButtonBlockItem({
              title: 'Business Software Experts',
              boxProps: { mt: 4 },
              href: routeConfig.CAREERS,
              overline: 'Who we are',
            }),
          ],
          maxWidth: 'sm',
          py: 10,
          sx: { backgroundColor: 'background.paper' },
        },
        {
          id: 'we-craft-digital',
          ...commonBlockProps,
          backgroundImageProps: {
            alt: 'hero',
            src: '/images/mission_starry_night_sky.png',
          },
          dark: true,
          items: [
            {
              title: (
                <span>
                  We craft digital products and
                  <br />
                  ecosystems from real-world data.
                </span>
              ),
              titleProps: { gutterBottom: true },
              type: 'h4',
            },
            {
              title:
                'We partner with companies large and small to shape technology that delights users and makes businesses more successful. We believe growth comes from optimising around data – so we continuously test, measure and learn throughout the product lifecycle.',
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
              },
              type: 'body1',
            },
            renderGhostButtonBlockItem({
              title: 'Enabling Smarter Businesses',
              boxProps: { mt: 3 },
              href: routeConfig.SERVICES,
              overline: 'Our Mission',
            }),
          ],
          py: 20,
          sx: { backgroundColor: 'background.paper' },
        },
        {
          id: 'find-opportunities',
          ...commonBlockProps,
          backgroundImageProps: {
            alt: 'hero',
            src: '/images/mission_singapore_city_nightscape.png',
          },
          dark: true,
          items: [
            {
              title:
                'We find opportunities by diving deep into our clients’ business, users, data & technology.',
              titleProps: { sx: { mb: 4 } },
              type: 'h4',
            },
            {
              title: (
                <span>
                  {site.title} is a business technology partner, focused on
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
              type: 'body1',
            },
            renderGhostButtonBlockItem({
              title: 'Enabling Smarter Businesses',
              boxProps: { mt: 3 },
              href: routeConfig.SERVICES,
              overline: 'Our Mission',
            }),
          ],
          maxWidth: 'md',
          pb: { xs: 40, lg: 80 },
          pt: { xs: 15, lg: 30 },
          sx: { backgroundColor: 'background.paper' },
        },
      ]}
    />
  )
}

export default MissionPage
