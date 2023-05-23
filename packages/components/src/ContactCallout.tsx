import React from 'react'
import { Block } from '@gravis-os/landing'
import { renderContactCalloutButtonBlockItem } from '@onex/blocks'
import { useLayout } from '@onex/providers'

export interface ContactCalloutProps {
  isSubtle?: boolean
}

const ContactCallout: React.FC<ContactCalloutProps> = (props) => {
  const { site } = useLayout()
  const { cta_title, cta_button_title } = site
  const { isSubtle } = props

  const footerCalloutBlockProps = {
    py: isSubtle ? 3 : 8,
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
        gridProps: { spacing: isSubtle ? { xs: 1, md: 2 } : 3 },
        gridItems: [
          {
            md: isSubtle ? 8 : 12,
            boxProps: {
              sx: {
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: isSubtle ? { xs: 'center', md: 'flex-start' } : 'center',
              },
            },
            items: [
              {
                type: isSubtle ? 'h5' : 'h4',
                title: cta_title,
                titleProps: {
                  sx: { textAlign: isSubtle ? { xs: 'center', md: 'left' } : 'center' },
                  component: 'h5'
                },
              },
            ],
          },
          {
            md: isSubtle ? 4 : 12,
            boxProps: { sx: { textAlign: isSubtle ? { xs: 'center', md: 'right' } : 'center' } },
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
