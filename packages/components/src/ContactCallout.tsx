import React from 'react'
import { Block } from '@gravis-os/landing'
import { renderContactCalloutButtonBlockItem } from '@onex/blocks'
import { useLayout } from '@onex/providers'

export interface ContactCalloutProps {
  size?: 'medium' | 'large'
}

const ContactCallout: React.FC<ContactCalloutProps> = (props) => {
  const { site } = useLayout()
  const { cta_title, cta_button_title } = site
  const { size } = props

  const footerCalloutBlockProps = {
    py: size === 'medium' ? 3 : 8,
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
        gridProps: { spacing: size === 'medium' ? { xs: 1, md: 2 } : 3 },
        gridItems: [
          {
            md: size === 'medium' ? 8 : 12,
            boxProps: {
              sx: {
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: size === 'medium' ? { xs: 'center', md: 'flex-start' } : 'center',
              },
            },
            items: [
              {
                type: size === 'medium' ? 'h5' : 'h4',
                title: cta_title,
                titleProps: {
                  sx: { textAlign: size === 'medium' ? { xs: 'center', md: 'left' } : 'center' },
                  component: 'h5'
                },
              },
            ],
          },
          {
            md: size === 'medium' ? 4 : 12,
            boxProps: { sx: { textAlign: size === 'medium' ? { xs: 'center', md: 'right' } : 'center' } },
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
