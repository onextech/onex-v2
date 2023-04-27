import React from 'react'
import { Block } from '@gravis-os/landing'
import { renderContactCalloutButtonBlockItem } from '@onex/blocks'
import { useLayout } from '@onex/providers'

export interface ContactCalloutProps {}

const ContactCallout: React.FC<ContactCalloutProps> = (props) => {
  const { site } = useLayout()
  const { cta_title, cta_button_title } = site

  const footerCalloutBlockProps = {
    py: 3,
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
        gridProps: { spacing: { xs: 1, md: 2 } },
        gridItems: [
          {
            md: 8,
            boxProps: {
              sx: {
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
              },
            },
            items: [
              {
                type: 'h5',
                title: cta_title,
                titleProps: {
                  sx: { textAlign: { xs: 'center', md: 'left' } },
                },
              },
            ],
          },
          {
            md: 4,
            boxProps: { sx: { textAlign: { xs: 'center', md: 'right' } } },
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
