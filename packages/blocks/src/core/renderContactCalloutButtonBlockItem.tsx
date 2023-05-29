import React from 'react'
import { BlockItemProps } from '@gravis-os/landing'
import { GetStartedPage } from '@onex/pages'

export interface RenderContactCalloutButtonBlockItemProps
  extends BlockItemProps {
  title?: string
}

const renderContactCalloutButtonBlockItem = (
  props: RenderContactCalloutButtonBlockItemProps = {}
) => {
  const { title = 'Get Started' } = props
  return {
    type: 'button',
    title,
    titleProps: {
      variant: 'contained' as const,
      color: 'primary' as const,
      dialogProps: {
        fullScreen: true,
        disableTitle: true,
        transitionVariant: 'fade' as const,
        children: <GetStartedPage fullScreen disableTestimonials />,
      },
    },
  }
}

export default renderContactCalloutButtonBlockItem
