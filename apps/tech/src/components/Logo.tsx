import React from 'react'
import { Box, BoxProps } from '@gravis-os/ui'
import LogoSvg from '@public/logo.svg'

export interface LogoProps extends BoxProps {}

const Logo: React.FC<LogoProps> = (props) => {
  const { sx, ...rest } = props
  return (
    <Box
      sx={{
        width: 95,
        height: 13,
        '& svg': { fill: ({ palette }) => palette.text.primary },
        ...sx,
      }}
      {...rest}
    >
      <LogoSvg />
    </Box>
  )
}

export default Logo
