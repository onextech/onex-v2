import React from 'react'

import { BlockItemProps, LeadForm } from '@onex/landing'

import { useLayout } from '../providers/LayoutProvider'
import { BlockProps } from '../web/Block/Block'

export interface RenderLeadFormBlockProps extends Omit<BlockProps, 'items'> {
  overline?: BlockItemProps['title']
  subtitle?: BlockItemProps['title']
  title?: BlockItemProps['title']
}

const renderLeadFormBlock = (props: RenderLeadFormBlockProps = {}) => {
  const {
    title = 'Schedule a Consultation with a One X Specialist',
    overline = 'Get Started',
    subtitle = 'Thank you for your interest. We’d like to ask a few questions to better understand your project needs.',
    ...rest
  } = props

  const { serviceCategorys } = useLayout()

  return {
    id: 'lead-form-block',
    items: [
      {
        gridItemProps: {
          sx: { textAlign: { xs: 'center', md: 'left' } },
        },
        gridItems: [
          {
            md: 5,
            items: [
              { title: overline, type: 'overline' },
              {
                title,
                titleProps: { gutterBottom: true },
                type: 'h3',
              },
              {
                title: subtitle,
                titleProps: {
                  color: 'text.secondary',
                  maxWidth: true,
                },
                type: 'body1',
              },
            ],
          },
          {
            md: 7,
            items: [
              {
                title: (
                  <LeadForm
                    alignButtonLeft
                    serviceCategorys={serviceCategorys}
                  />
                ),
                type: 'jsx',
              },
            ],
          },
        ],
        gridProps: { spacing: 4 },
        type: 'grid',
      },
    ],
    sx: { backgroundColor: 'background.paper' },
    ...rest,
  }
}

export default renderLeadFormBlock
