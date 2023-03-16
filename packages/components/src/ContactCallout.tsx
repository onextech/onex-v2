import React from 'react'
import { Block } from '@gravis-os/landing'
import { ContactPage } from '@onex/pages'
import { useLayout } from '@onex/providers'

export interface ContactCalloutProps {}

const ContactCallout: React.FC<ContactCalloutProps> = (props) => {
  const { appConfig, testimonials } = useLayout()

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
            items: [
              {
                type: 'button',
                title: 'Get Started',
                titleProps: {
                  variant: 'contained' as const,
                  color: 'primary' as const,
                  dialogProps: {
                    fullScreen: true,
                    disableTitle: true,
                    transitionVariant: 'fade' as const,
                    children: (
                      <ContactPage testimonials={testimonials} fullScreen />
                    ),
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  }

  return <Block {...footerCalloutBlockProps} />
}

export default ContactCallout
