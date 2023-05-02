import React from 'react'
import { BlockItemProps } from '@gravis-os/landing'
import { Box, Typography, ButtonProps } from '@gravis-os/ui'
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined'
import { GetStartedPage } from '@onex/pages'
import { withPaletteMode } from '@gravis-os/theme'
import { useTheme } from '@mui/material'

export interface RenderGhostButtonBlockItemProps
  extends Omit<ButtonProps, 'size'> {
  overline?: React.ReactNode
  title?: ButtonProps['title']
  boxProps?: BlockItemProps['boxProps']
  size?: 'sm' | 'md' | 'lg' | ButtonProps['size']
  isCta?: boolean
}

const renderGhostButtonBlockItem = (
  props: RenderGhostButtonBlockItemProps
): BlockItemProps => {
  const { isCta, overline, title, boxProps, sx, size = 'md', ...rest } = props

  const isLarge = size === 'lg'

  const theme = useTheme()
  const dialogChildrenJsx = withPaletteMode({ mode: theme.palette.mode })(
    <GetStartedPage fullScreen />
  )

  return {
    type: 'button',
    title: (
      <Box sx={{ width: '100%' }}>
        <Typography
          variant="overline2"
          lineHeight={1.75}
          color="text.secondary"
        >
          {overline}
        </Typography>
        <Typography variant="button2">{title}</Typography>
      </Box>
    ),
    titleProps: {
      variant: 'ghost',
      size: 'large',
      fullWidthOnMobile: isLarge,
      disableBorderRadius: true,
      disableRipple: true,
      endIcon: <TrendingFlatOutlinedIcon sx={{ color: 'text.secondary' }} />,
      sx: {
        textAlign: 'left',
        padding: {
          xs: isLarge ? '1.5em 2.5em' : '0.95em 2em',
          sm: isLarge ? '1.5em 2.5em' : '1.125em 2.5em',
        },
        minWidth: {
          xs: isLarge ? '25em' : '20em',
          sm: isLarge ? '25em' : '27em',
        },
        ...sx,
      },
      ...(isCta && {
        dialogProps: {
          fullScreen: true,
          disableTitle: true,
          transitionVariant: 'fade' as const,
          children: dialogChildrenJsx,
        },
      }),
      ...rest,
    },
    boxProps,
  }
}

export default renderGhostButtonBlockItem
