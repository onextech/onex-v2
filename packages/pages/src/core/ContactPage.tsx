import React from 'react'
import { Blocks } from '@gravis-os/landing'
import { ContactForm } from '@onex/components'
import { useLayout } from '@onex/providers'
import { renderContactLinksBlockItems } from '@onex/blocks'
import { Image } from '@gravis-os/ui'

export interface ContactPageProps {
  fullScreen?: boolean
}

const ContactPage: React.FC<ContactPageProps> = (props) => {
  const { fullScreen } = props

  const { logoProps, site } = useLayout()
  const { office_title, office_address } = site

  const py = fullScreen ? { xs: 5, md: 10 } : { xs: 3, md: 7 }

  return (
    <Blocks
      items={[
        {
          key: 'form',
          py: 0,
          reveal: fullScreen && false,
          sx: {
            position: 'relative',
            backgroundColor: 'background.paper',
          },
          items: [
            {
              type: 'grid',
              boxProps: {
                sx: {
                  backgroundColor: 'background.paper',
                },
              },
              gridProps: {
                spacing: { xs: 0, md: 5 },
                minWidth: '100%',
              },
              gridItems: [
                {
                  md: 7,
                  lg: 8,
                  boxProps: {
                    sx: {
                      py,
                      ...(fullScreen && { minHeight: { md: '100vh' } }),
                    },
                  },
                  items: [
                    ...(logoProps && fullScreen
                      ? [
                          {
                            type: 'jsx',
                            title: <Image {...logoProps} />,
                            boxProps: { sx: { mb: 5 } },
                          },
                        ]
                      : []),
                    { type: 'overline', title: 'Contact' },
                    {
                      type: 'h2',
                      title: 'Get in Touch',
                      titleProps: { mb: 1, component: 'h1' },
                    },
                    {
                      type: 'body1',
                      title:
                        'Thank you for your interest in working with us. Please complete the form below to help us better understand the services you require and we will get back to you as soon as possible. We look forward to embarking on an exciting and fruitful collaboration with you! ',
                      titleProps: {
                        color: 'text.secondary',
                        maxWidth: true,
                        sx: { mb: 3 },
                      },
                    },
                    {
                      type: 'jsx',
                      title: <ContactForm />,
                    },
                  ],
                },
                {
                  md: 5,
                  lg: 4,
                  boxProps: {
                    reveal: true,
                    sx: {
                      width: '100%',
                      height: { md: '100%' },
                      backgroundColor: 'background.default',
                      top: 0,
                      px: { xs: 0, md: 5 },
                      py,
                    },
                  },
                  items: [
                    // Offices
                    {
                      type: 'h5',
                      title: 'Offices',
                      titleProps: { sx: { mb: 2 } },
                    },
                    { type: 'body1', title: office_title },
                    {
                      type: 'body1',
                      title: office_address,
                      titleProps: { color: 'text.secondary' },
                    },
                    ...renderContactLinksBlockItems(),
                  ],
                },
              ],
            },
          ],
        },
      ]}
    />
  )
}

export default ContactPage
