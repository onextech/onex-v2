import React from 'react'
import { Block } from '@gravis-os/landing'
import { renderContactCalloutButtonBlockItem } from '@onex/blocks'
import { useLayout } from '@onex/providers'

export interface ContactCalloutProps {}

const ContactCallout: React.FC<ContactCalloutProps> = (props) => {
  const { appConfig } = useLayout()

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
            items: [
              {
                type: 'h5',
                title: `Build the future with ${appConfig.title}.`,
                titleProps: {
                  sx: { textAlign: { xs: 'center', md: 'left' } },
                },
              },
            ],
          },
          {
            md: 4,
            boxProps: { sx: { textAlign: { xs: 'center', md: 'right' } } },
            items: [renderContactCalloutButtonBlockItem()],
          },
        ],
      },
    ],
  }

  return <Block {...footerCalloutBlockProps} />
}

export default ContactCallout
