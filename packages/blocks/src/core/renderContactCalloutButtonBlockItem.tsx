import React from 'react'
import { BlockItemProps } from '@gravis-os/landing'
import { GetStartedPage } from '@onex/pages'
import { useLayout } from '@onex/providers'

export interface RenderContactCalloutButtonBlockItemProps
  extends BlockItemProps {
  title?: string
}

const renderContactCalloutButtonBlockItem = (
  props: RenderContactCalloutButtonBlockItemProps = {}
) => {
  const { site } = useLayout()
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
        children: <GetStartedPage fullScreen disableTestimonials={site.disable_testimonials} />,
      },
    },
  }
}

export default renderContactCalloutButtonBlockItem
