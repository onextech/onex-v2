import React from 'react'
import { BlockItemProps } from '@gravis-os/landing'
import { Box, Typography } from '@gravis-os/ui'
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined'

const renderGhostButtonBlockItem = (props): BlockItemProps => {
  const { overline, title, boxProps, size = 'md', sx, ...rest } = props

  const isLarge = size === 'lg'

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
        <Typography variant="h6" sx={{ textTransform: 'none' }}>
          {title}
        </Typography>
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
        padding: isLarge ? '1.5em 2.5em' : '1.125em 2.5em',
        minWidth: {
          xs: isLarge ? '25em' : '24em',
          sm: isLarge ? '25em' : '27em',
        },
        ...sx,
      },
      ...rest,
    },
    boxProps,
  }
}

export default renderGhostButtonBlockItem
