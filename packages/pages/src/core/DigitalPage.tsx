import React from 'react'
import { Blocks } from '@gravis-os/landing'
import {
  renderFadeToBottomBackgroundImageBlock,
  renderThreeColumnGridBlock,
  renderHalfGridBlock,
  renderHeroWithBackgroundBlock,
} from '@onex/blocks'
import { useLayout } from '@onex/providers'
import { Page } from '@onex/types'

export interface DigitalPageProps {
  digital: Page
}

const DigitalPage: React.FC<DigitalPageProps> = (props) => {
  const { digital } = props
  const { routeConfig } = useLayout()
  const { sections } = digital || {}
  const { callout, halfGrids, hero, benefits } = sections || {}

  return (
    <Blocks
      items={[
        // Hero
        renderHeroWithBackgroundBlock({
          ...hero,
          buttonProps: {
            overline: 'What we do',
            title: 'Smarter Businesses',
            size: 'lg',
            href: routeConfig.SERVICES,
          },
          secondaryButtonProps: {
            overline: 'Who we are',
            title: 'Business Software Experts',
            size: 'lg',
            href: routeConfig.CAREERS,
          },
        }),
        // Benefits
        renderThreeColumnGridBlock({
          ...benefits,
          sx: { backgroundColor: 'background.paper' },
        }),
        // HalfGrid
        ...halfGrids?.items?.map((halfGrid) => renderHalfGridBlock(halfGrid)),
        // Callout
        renderFadeToBottomBackgroundImageBlock(callout),
      ]}
    />
  )
}

export default DigitalPage
