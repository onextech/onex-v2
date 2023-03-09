import React from 'react'
import { Box } from '@gravis-os/ui'
import LogoSvg from '@public/logo.svg'

export interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <Box
      sx={{
        width: 95,
        height: 13,
        '& svg': { fill: ({ palette }) => palette.text.primary },
      }}
    >
      <LogoSvg />
    </Box>
  )
}

export default Logo
