import React from 'react'

import { BlockItemProps } from '../web/Block/BlockItem'

export interface RenderContactCalloutButtonBlockItemProps
  extends BlockItemProps {
  children?: JSX.Element
  subtitle?: string
  title?: string
}

const renderContactCalloutButtonBlockItem = (
  props: RenderContactCalloutButtonBlockItemProps = {}
) => {
  const {
    title = 'Get Started',
    children = <></>,
    subtitle = '',
    titleProps,
    ...rest
  } = props

  return {
    title,
    titleProps: {
      color: 'primary' as const,
      dialogProps: {
        children,
        disableTitle: true,
        fullScreen: true,
        transitionVariant: 'fade' as const,
      },
      subtitle,
      variant: 'contained' as const,
      ...titleProps,
    },
    type: 'button',
    ...rest,
  }
}

export default renderContactCalloutButtonBlockItem
