import { BlockItemProps, BlockProps } from '@gravis-os/landing'
import renderGhostButtonBlockItem, {
  RenderGhostButtonBlockItemProps,
} from './renderGhostButtonBlockItem'

export interface RenderLeftHeroWithBackgroundBlockProps
  extends Omit<BlockProps, 'items'> {
  overline?: string
  title: string
  subtitle?: string
  hero_src?: string
  hero_alt?: string
  image_src?: string
  image_alt?: string
  imageProps?: BlockItemProps['titleProps']
  buttonProps?: RenderGhostButtonBlockItemProps
}

const renderLeftHeroWithBackgroundBlock = (
  props: RenderLeftHeroWithBackgroundBlockProps
) => {
  const {
    overline,
    title,
    subtitle,
    hero_src,
    hero_alt,
    image_src,
    image_alt,
    imageProps,
    buttonProps,
    center = false,
    pb,
    ...rest
  } = props

  return {
    key: 'hero-with-background',
    pt: 30,
    pb: 0,
    centerOnMobile: true,
    dark: true,
    center,
    ...(hero_src && { backgroundImageProps: { src: hero_src, alt: hero_alt } }),
    items: [
      {
        type: 'grid',
        gridProps: {
          sx: { position: 'relative' },
          spacing: 2,
        },
        gridItems: [
          {
            xs: 12,
            md: 6,
            sx: { pb },
            items: [
              { type: 'overline', title: overline },
              {
                type: 'h1',
                title,
                titleProps: { gutterBottom: true },
              },
              {
                type: 'subtitle1',
                title: subtitle,
                titleProps: {
                  color: 'text.secondary',
                  sx: { mb: 4 },
                },
              },
              renderGhostButtonBlockItem(buttonProps),
            ],
          },
          {
            xs: 12,
            md: 6,
            sx: {
              display: 'flex',
              justifyContent: { xs: 'flex-start', md: 'center' },
              position: { lg: 'absolute' },
              bottom: -16,
              right: 0,
              width: '100%',
              mb: { xs: -2, md: 0 },
            },
            boxProps: { width: '100%' },
            items: [
              {
                type: 'image',
                title: image_src,
                titleProps: {
                  alt: image_alt,
                  ...imageProps,
                },
              },
            ],
          },
        ],
      },
    ],
    ...rest,
  }
}

export default renderLeftHeroWithBackgroundBlock
