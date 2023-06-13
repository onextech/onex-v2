import React from 'react'
import { Blocks } from '@gravis-os/landing'
import {
  renderFadeToBottomBackgroundImageBlock,
  renderGhostButtonBlockItem,
  renderClientLogoCardBlockItem,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'
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
    hero,
    summary,
    callout,
    features,
    cta,
    gallery,
    stats,
    secondaryHero,
  } = sections || {}

  return (
    <Blocks
      items={[
        {
          dark: true,
          py: 30,
          key: 'hero',
          ...commonBlockProps,
          backgroundImageProps: {
            src: hero.hero_src,
            alt: hero.hero_alt,
          },
          items: [
            { type: 'overline', title: hero.overline },
            { type: 'h2', title: hero.title, titleProps: { component: 'h1' } },
            {
              type: 'stack',
              sx: { mt: 3 },
              stackProps: {
                spacing: 0,
                center: true,
                direction: 'row',
                reverseDirectionOnMobile: true,
              },
              stackItems: hero.buttons?.map((item) => ({
                items: [
                  renderGhostButtonBlockItem({
                    size: 'lg',
                    ...item,
                  }),
                ],
              })),
            },
          ],
        },
        {
          key: 'summary',
          ...commonBlockProps,
          sx: { backgroundColor: 'background.paper' },
          dark: true,
          pt: 5,
          pb: 10,
          items: [
            {
              type: 'h4',
              title: summary.title,
              titleProps: { gutterBottom: true },
            },
            {
              type: 'body1',
              title: summary.subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
              },
            },
            renderGhostButtonBlockItem({
              ...summary.buttons?.[0],
              boxProps: { mt: 4 },
            }),
          ],
        },
        {
          key: 'summary-image',
          ...commonBlockProps,
          dark: true,
          pt: 45,
          pb: 0,
          backgroundImageProps: {
            src: summary.hero_src,
            alt: summary.hero_alt,
          },
        },
        {
          key: 'callout',
          ...commonBlockProps,
          dark: true,
          sx: { backgroundColor: 'background.paper' },
          pt: 12,
          pb: 26,
          backgroundImageProps: {
            src: callout.hero_src,
            alt: callout.hero_alt,
            fixedBackground: true,
            boxSx: { width: '100%', bottom: -8 },
          },
          items: [
            {
              type: 'h4',
              title: callout.title,
              titleProps: { gutterBottom: true },
            },
            {
              type: 'h6',
              title: callout.subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
              },
            },
            renderGhostButtonBlockItem({
              boxProps: { mt: 3 },
              ...callout.buttons?.[0],
            }),
          ],
        },
        {
          key: 'features',
          ...commonBlockProps,
          dark: true,
          backgroundImageProps: {
            src: features.hero_src,
            alt: features.hero_alt,
            fixedBackground: true,
            boxSx: { width: '100%', top: 0 },
          },
          items: [
            { type: 'overline', title: features.overline },
            {
              type: 'h4',
              title: features.title,
              titleProps: { gutterBottom: true },
            },
            {
              type: 'body1',
              title: features.subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
              },
            },
            {
              type: 'grid',
              sx: { mt: { xs: 5, md: 10 } },
              maxWidth: 'xl',
              gridProps: { spacing: 3 },
              gridItemProps: {
                xs: 6,
                md: Math.floor(12 / Math.max(features.items.length, 1)),
                sx: { textAlign: { xs: 'center', md: 'left' } },
              },
              gridItems: features.items?.map((item) => ({
                items: [
                  {
                    type: 'image',
                    title: item.avatar_src,
                    titleProps: {
                      alt: item.avatar_alt,
                      width: 101,
                      height: 101,
                      sx: { mb: 4 },
                    },
                  },
                  {
                    type: 'subtitle2',
                    title: item.overline,
                    titleProps: { color: 'text.secondary', sx: { mb: 3 } },
                  },
                  {
                    type: 'subtitle2',
                    title: item.title,
                    titleProps: { gutterBottom: true },
                  },
                  {
                    type: 'body1',
                    title: item.subtitle,
                    titleProps: { color: 'text.secondary' },
                  },
                ],
              })),
            },
          ],
        },
        cta &&
          renderFadeToBottomBackgroundImageBlock({
            hero_src: cta.hero_src,
            hero_alt: cta.hero_alt,
            title: cta.title,
            subtitle: cta.subtitle,
            buttonProps: cta.buttons?.[0],
          }),
        {
          key: 'gallery',
          ...commonBlockProps,
          dark: true,
          items: [
            { type: 'overline', title: gallery.overline },
            {
              type: 'h4',
              title: gallery.title,
              titleProps: { gutterBottom: true },
            },
            {
              type: 'body1',
              title: gallery.subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
              },
            },
            {
              type: 'grid',
              sx: { mt: { xs: 5, md: 10 } },
              maxWidth: 'xl',
              gridProps: { spacing: 1 },
              gridItemProps: { xs: 6, md: 4 },
              gridItems: clientLogos.map((clientLogo) => {
                const { avatar_src, avatar_alt, avatar_width, avatar_height } =
                  clientLogo
                return renderClientLogoCardBlockItem({
                  title: avatar_src,
                  titleProps: {
                    alt: avatar_alt,
                    width: avatar_width,
                    height: avatar_height,
                  },
                })
              }),
            },
          ],
        },
        {
          key: 'stats',
          ...commonBlockProps,
          dark: true,
          backgroundImageProps: {
            src: stats.hero_src,
            alt: stats.hero_alt,
            fixedBackground: true,
            boxSx: { bottom: 24 },
          },
          sx: { backgroundColor: 'background.paper' },
          items: [
            { type: 'overline', title: stats.overline },
            {
              type: 'h4',
              title: stats.title,
              titleProps: { gutterBottom: true },
            },
            {
              type: 'body1',
              title: stats.subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
              },
            },
            {
              type: 'grid',
              sx: { mt: 6 },
              maxWidth: 'sm',
              gridProps: { spacing: 2 },
              gridItemProps: { xs: 4 },
              gridItems: stats.items?.map((stat) => ({
                items: [
                  {
                    type: 'subtitle1',
                    title: stat.title,
                    titleProps: stat.titleProps,
                  },
                  {
                    type: 'overline',
                    title: stat.overline,
                    titleProps: { color: 'text.secondary' },
                  },
                ],
              })),
            },
            renderGhostButtonBlockItem({
              boxProps: { mt: 16 },
              ...stats.buttons?.[0],
            }),
          ],
        },
        {
          key: 'secondaryHero',
          ...commonBlockProps,
          sx: { backgroundColor: 'background.paper' },
          pt: 5,
          items: [
            {
              type: 'overline',
              title: secondaryHero.overline,
              titleProps: { color: 'text.secondary' },
            },
            {
              type: 'h3',
              title: secondaryHero.title,
            },
            {
              type: 'image',
              title: secondaryHero.hero_src,
              disableContainer: true,
              titleProps: {
                alt: secondaryHero.hero_alt,
                fill: true,
                sx: { my: 3 },
              },
            },
            {
              type: 'body1',
              title: secondaryHero.subtitle,
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
              },
            },
            renderGhostButtonBlockItem({
              boxProps: { mt: 3 },
              ...secondaryHero.buttons?.[0],
            }),
          ],
        },
      ]}
    />
  )
}

export default AboutPage
