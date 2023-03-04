import React from 'react'
import { Typography } from '@gravis-os/ui'
import appConfig from '@app/configs/appConfig'

export interface LogoProps {}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <Typography variant="button" sx={{ lineHeight: 1 }}>
      {appConfig.title}
    </Typography>
  )
}

export default Logo
