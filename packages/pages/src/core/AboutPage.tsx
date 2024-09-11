import React from 'react'

import {
  Blocks,
  renderClientLogoCardBlockItem,
  renderFadeToBottomBackgroundImageBlock,
  renderGhostButtonBlockItem,
  useLayout,
} from '@onex/landing'
import { Page } from '@onex/types'

export interface AboutPageProps {
  page: Page
}

const commonBlockProps = { center: true, maxWidth: 'md' }

const AboutPage: React.FC<AboutPageProps> = (props) => {
  const { page } = props
  const { clientLogos } = useLayout()

  const { sections } = page || {}
  const {
    callout,
    cta,
    features,
    gallery,
    hero,
    secondaryHero,
    stats,
    summary,
  } = sections || {}

  return (
    <Blocks
      items={[
        {
          id: 'hero',
          dark: true,
          py: 30,
          ...commonBlockProps,
          backgroundImageProps: {
            alt: hero.hero_alt,
            src: hero.hero_src,
          },
          items: [
            { title: hero.overline, type: 'overline' },
            { title: hero.title, titleProps: { component: 'h1' }, type: 'h2' },
            hero.subtitle && {
              title: hero.subtitle,
              titleProps: {
                maxWidth: true,
                sx: { mt: 2, opacity: 0.8 },
              },
              type: 'h5',
            },
            {
              stackItems: hero.buttons?.map((item) => ({
                items: [
                  renderGhostButtonBlockItem({
                    size: 'lg',
                    ...item,
                  }),
                ],
              })),
              stackProps: {
                center: true,
                direction: 'row',
                reverseDirectionOnMobile: true,
                spacing: 0,
              },
              sx: { mt: 3 },
              type: 'stack',
            },
          ],
        },
        {
          id: 'summary',
          ...commonBlockProps,
          dark: true,
          items: [
            {
              title: summary.title,
              titleProps: { gutterBottom: true },
              type: 'h4',
            },
            {
              title: summary.subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
              },
              type: 'body1',
            },
            renderGhostButtonBlockItem({
              ...summary.buttons?.[0],
              boxProps: { mt: 4 },
            }),
          ],
          sx: { backgroundColor: 'background.paper' },
        },
        {
          id: 'summary-image',
          ...commonBlockProps,
          backgroundImageProps: {
            alt: summary.hero_alt,
            src: summary.hero_src,
          },
          dark: true,
          pb: 0,
          pt: 45,
        },
        {
          id: 'callout',
          ...commonBlockProps,
          backgroundImageProps: {
            alt: callout.hero_alt,
            boxSx: { bottom: -8, width: '100%' },
            fixedBackground: true,
            src: callout.hero_src,
          },
          dark: true,
          items: [
            {
              title: callout.title,
              titleProps: { gutterBottom: true },
              type: 'h4',
            },
            {
              title: callout.subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
              },
              type: 'h6',
            },
            renderGhostButtonBlockItem({
              boxProps: { mt: 3 },
              ...callout.buttons?.[0],
            }),
          ],
          pb: 26,
          pt: 12,
          sx: { backgroundColor: 'background.paper' },
        },
        {
          id: 'features',
          ...commonBlockProps,
          backgroundImageProps: {
            alt: features.hero_alt,
            boxSx: { top: 0, width: '100%' },
            fixedBackground: true,
            src: features.hero_src,
          },
          dark: true,
          items: [
            { title: features.overline, type: 'overline' },
            {
              title: features.title,
              titleProps: { gutterBottom: true },
              type: 'h4',
            },
            {
              title: features.subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
              },
              type: 'body1',
            },
            {
              gridItemProps: {
                xs: 6,
                md: Math.floor(12 / Math.max(features.items.length, 1)),
                sx: { textAlign: { xs: 'center', md: 'left' } },
              },
              gridItems: features.items?.map((item) => ({
                items: [
                  {
                    title: item.avatar_src,
                    titleProps: {
                      alt: item.avatar_alt,
                      height: 101,
                      sx: { mb: 4 },
                      width: 101,
                    },
                    type: 'image',
                  },
                  {
                    title: item.overline,
                    titleProps: { color: 'text.secondary', sx: { mb: 3 } },
                    type: 'subtitle2',
                  },
                  {
                    title: item.title,
                    titleProps: { gutterBottom: true },
                    type: 'subtitle2',
                  },
                  {
                    title: item.subtitle,
                    titleProps: { color: 'text.secondary' },
                    type: 'body1',
                  },
                ],
              })),
              gridProps: { spacing: 3 },
              maxWidth: 'xl',
              sx: { mt: { xs: 5, md: 10 } },
              type: 'grid',
            },
          ],
        },
        cta &&
          renderFadeToBottomBackgroundImageBlock({
            title: cta.title,
            buttonProps: cta.buttons?.[0],
            hero_alt: cta.hero_alt,
            hero_src: cta.hero_src,
            subtitle: cta.subtitle,
          }),
        {
          id: 'gallery',
          ...commonBlockProps,
          dark: true,
          items: [
            { title: gallery.overline, type: 'overline' },
            {
              title: gallery.title,
              titleProps: { gutterBottom: true },
              type: 'h4',
            },
            {
              title: gallery.subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
              },
              type: 'body1',
            },
            {
              gridItemProps: { xs: 6, md: 4 },
              gridItems: clientLogos.map((clientLogo) => {
                const {
                  avatar_alt,
                  avatar_height,
                  avatar_src,
                  avatar_width,
                  sx,
                } = clientLogo

                return renderClientLogoCardBlockItem({
                  title: avatar_src,
                  titleProps: {
                    alt: avatar_alt,
                    height: avatar_height,
                    sx,
                    width: avatar_width,
                  },
                })
              }),
              gridProps: { spacing: 1 },
              maxWidth: 'xl',
              sx: { mt: { xs: 5, md: 10 } },
              type: 'grid',
            },
          ],
        },
        {
          id: 'stats',
          ...commonBlockProps,
          backgroundImageProps: {
            alt: stats.hero_alt,
            boxSx: { bottom: 24 },
            fixedBackground: true,
            src: stats.hero_src,
          },
          dark: true,
          items: [
            { title: stats.overline, type: 'overline' },
            {
              title: stats.title,
              titleProps: { gutterBottom: true },
              type: 'h4',
            },
            {
              title: stats.subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
              },
              type: 'body1',
            },
            {
              gridItemProps: { xs: 4 },
              gridItems: stats.items?.map((stat) => ({
                items: [
                  {
                    title: stat.title,
                    titleProps: stat.titleProps,
                    type: 'subtitle1',
                  },
                  {
                    title: stat.overline,
                    titleProps: { color: 'text.secondary' },
                    type: 'overline',
                  },
                ],
              })),
              gridProps: { spacing: 2 },
              maxWidth: 'sm',
              sx: { mt: 6 },
              type: 'grid',
            },
            renderGhostButtonBlockItem({
              boxProps: { mt: 16 },
              ...stats.buttons?.[0],
            }),
          ],
          sx: { backgroundColor: 'background.paper' },
        },
        {
          id: 'secondaryHero',
          ...commonBlockProps,
          items: [
            {
              title: secondaryHero.overline,
              titleProps: { color: 'text.secondary' },
              type: 'overline',
            },
            {
              title: secondaryHero.title,
              type: 'h3',
            },
            {
              title: secondaryHero.hero_src,
              disableContainer: true,
              titleProps: {
                alt: secondaryHero.hero_alt,
                fill: true,
                sx: { my: 3 },
              },
              type: 'image',
            },
            {
              title: secondaryHero.subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
              },
              type: 'body1',
            },
            renderGhostButtonBlockItem({
              boxProps: { mt: 3 },
              ...secondaryHero.buttons?.[0],
            }),
          ],
          pt: 5,
          sx: { backgroundColor: 'background.paper' },
        },
      ]}
    />
  )
}

export default AboutPage
