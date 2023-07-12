import React from 'react'
import {
  Blocks,
  renderLeftHeroWithBackgroundBlock,
  renderShowcasesBlock,
  useLayout,
} from '@gravis-os/landing'
import { Page, Showcase } from '@gravis-os/types'

export interface AtlasHomePageProps {
  page: Page
  showcases: Showcase[]
}

const AtlasHomePage: React.FC<AtlasHomePageProps> = (props) => {
  const { routeConfig } = useLayout()
  const { page, showcases } = props
  const { sections } = page || {}
  const { hero } = sections || {}

  const buttonProps = {
    sx: {
      width: '100%',
      justifyContent: 'start',
      textTransform: 'none',
      fontFamily: 'inherit',
      fontWeight: 'normal',
      fontSize: '2rem',
      borderBottom: '1px solid',
      borderColor: 'divider',
      py: 2,
    },
  }

  return (
    <Blocks
      items={[
        renderLeftHeroWithBackgroundBlock(hero),
        {
          key: 'service-list',
          items: [
            {
              type: 'button',
              title: <span>Our Work</span>,
              titleProps: { ...buttonProps, href: routeConfig.SHOWCASES },
            },
            {
              type: 'button',
              title: <span>What We Do</span>,
              titleProps: { ...buttonProps, href: routeConfig.SERVICES },
            },
            {
              type: 'button',
              title: <span>About Us</span>,
              titleProps: { ...buttonProps, href: routeConfig.ABOUT },
            },
            {
              type: 'button',
              title: <span>Contact</span>,
              titleProps: { ...buttonProps, href: routeConfig.CONTACT },
            },
          ],
        },
        renderShowcasesBlock({
          items: showcases.slice(0, 3),
          pt: 0,
        }),
      ]}
    />
  )
}

export default AtlasHomePage
