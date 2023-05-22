import React from 'react'
import { Block } from '@gravis-os/landing'
import { renderContactCalloutButtonBlockItem } from '@onex/blocks'
import { useLayout } from '@onex/providers'

export interface ContactCalloutProps {}

const ContactCallout: React.FC<ContactCalloutProps> = (props) => {
  const { site } = useLayout()
  const { cta_title, cta_button_title } = site

  const footerCalloutBlockProps = {
    py: 8,
    sx: {
      backgroundColor: 'background.paper',
      borderTop: 1,
      borderBottom: 1,
      borderColor: 'divider',
    },
    reveal: false,
    items: [
      {
        type: 'grid',
        gridProps: { spacing: 3 },
        gridItems: [
          {
            md: 12,
            boxProps: {
              sx: {
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
            },
            items: [
              {
                type: 'h4',
                title: cta_title,
                titleProps: {
                  sx: { textAlign: 'center' },
                  component: 'h5'
                },
              },
            ],
          },
          {
            md: 12,
            boxProps: { sx: { textAlign: 'center' } },
            items: [
              renderContactCalloutButtonBlockItem({ title: cta_button_title }),
            ],
          },
        ],
      },
    ],
  }

  return <Block {...footerCalloutBlockProps} />
}

export default ContactCallout
