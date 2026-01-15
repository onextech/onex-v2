import React from 'react'

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import { IconButton } from '@mui/material'

export interface ToggleDarkModeButtonProps {
  isDarkMode: boolean
  onClick: () => void
}

export const ToggleDarkModeButton: React.FC<ToggleDarkModeButtonProps> = ({
  isDarkMode,
  onClick,
}) => {
  return (
    <IconButton
      aria-label="toggle color mode"
      color="inherit"
      onClick={onClick}
    >
      {isDarkMode ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
    </IconButton>
  )
}
