import React from 'react'

import {
  BlockItemProps,
  renderContactCalloutButtonBlockItem,
} from '@onex/landing'
import { GetStartedPage } from '@onex/pages'

import { useLayout } from '../providers/LayoutProvider'
import { BlockProps } from '../web/Block/Block'

export interface RenderServiceNotFoundCalloutBlockProps
  extends Omit<BlockProps, 'items'> {
  cta?: BlockItemProps['title']
  overline?: BlockItemProps['title']
  size?: 'large' | 'medium'
  subtitle?: BlockItemProps['title']
  title?: BlockItemProps['title']
}

const renderServiceNotFoundCalloutBlock = (
  props: RenderServiceNotFoundCalloutBlockProps = {}
) => {
  const {
    title = 'Looking for a Solution Not Included Here?',
    cta = 'Schedule a Call',
    size = 'medium',
    subtitle = 'A One X Specialist is available to discuss custom solutions tailored to your specific needs. Reach out to find out more.',
    ...rest
  } = props

  const { site } = useLayout()
  const { cta_button_title } = site || {}

  return {
    id: 'lead-form-block',
    items: [
      {
        gridItems: [
          {
            md: 8,
            items: [
              {
                title,
                titleProps: {
                  component: 'h5',
                  gutterBottom: true,
                  sx: {
                    maxWidth: { md: '90%' },
                    textAlign:
                      size === 'medium'
                        ? { xs: 'center', md: 'left' }
                        : 'center',
                  },
                },
                type: 'h5',
              },
              {
                title: subtitle,
                titleProps: {
                  sx: {
                    color: 'text.secondary',
                    maxWidth: { md: '80%' },
                    textAlign: { xs: 'center', md: 'left' },
                  },
                },
                type: 'body1',
              },
            ],
          },
          {
            md: 4,
            boxProps: {
              sx: {
                textAlign:
                  size === 'medium' ? { xs: 'center', md: 'right' } : 'center',
              },
            },
            items: [
              renderContactCalloutButtonBlockItem({
                title: cta || cta_button_title,
                children: <GetStartedPage />,
                subtitle: 'Schedule a non-obligatory 30-min consultation',
              }),
            ],
          },
        ],
        gridProps: { spacing: { xs: 2, md: 4 }, sx: { alignItems: 'center' } },
        type: 'grid',
      },
    ],
    py: 4,
    reveal: false,
    sx: {
      borderBottom: 1,
      borderBottomColor: 'divider',
      borderColor: 'divider',
      borderTop: 1,
      borderTopColor: 'divider',
    },
    ...rest,
  }
}

export default renderServiceNotFoundCalloutBlock
