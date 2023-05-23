import React from 'react'
import { Block } from '@gravis-os/landing'
import { renderContactCalloutButtonBlockItem } from '@onex/blocks'
import { useLayout } from '@onex/providers'

export interface ContactCalloutProps {
  size?: 'default' | 'large'
}

const ContactCallout: React.FC<ContactCalloutProps> = (props) => {
  const { site } = useLayout()
  const { cta_title, cta_button_title } = site
  const { size } = props

  const footerCalloutBlockProps = {
    py: size === 'default' ? 3 : 8,
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
        gridProps: { spacing: size === 'default' ? { xs: 1, md: 2 } : 3 },
        gridItems: [
          {
            md: size === 'default' ? 8 : 12,
            boxProps: {
              sx: {
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: size === 'default' ? { xs: 'center', md: 'flex-start' } : 'center',
              },
            },
            items: [
              {
                type: size === 'default' ? 'h5' : 'h4',
                title: cta_title,
                titleProps: {
                  sx: { textAlign: size === 'default' ? { xs: 'center', md: 'left' } : 'center' },
                  component: 'h5'
                },
              },
            ],
          },
          {
            md: size === 'default' ? 4 : 12,
            boxProps: { sx: { textAlign: size === 'default' ? { xs: 'center', md: 'right' } : 'center' } },
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
