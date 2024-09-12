import React from 'react'

import {
  Blocks,
  ContactForm,
  renderContactLinksBlockItems,
  useLayout,
} from '@onex/landing'
import { Image } from '@onex/ui'

export interface ContactPageProps {
  fullScreen?: boolean
}

const ContactPage: React.FC<ContactPageProps> = (props) => {
  const { fullScreen } = props

  const { logoProps, site } = useLayout()
  const { office_address, office_title } = site

  const py = fullScreen ? { xs: 5, md: 10 } : { xs: 3, md: 7 }

  return (
    <Blocks
      items={[
        {
          id: 'form',
          items: [
            {
              boxProps: {
                sx: {
                  backgroundColor: 'background.paper',
                },
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
                            title: <Image {...logoProps} />,
                            boxProps: { sx: { mb: 5 } },
                            type: 'jsx',
                          },
                        ]
                      : []),
                    { title: 'Contact', type: 'overline' },
                    {
                      title: 'Get in Touch',
                      titleProps: { component: 'h1', mb: 1 },
                      type: 'h2',
                    },
                    {
                      title:
                        'Thank you for your interest in working with us. Please complete the form below to help us better understand the services you require and we will get back to you as soon as possible. We look forward to embarking on an exciting and fruitful collaboration with you! ',
                      titleProps: {
                        color: 'text.secondary',
                        maxWidth: true,
                        sx: { mb: 3 },
                      },
                      type: 'body1',
                    },
                    {
                      title: <ContactForm />,
                      type: 'jsx',
                    },
                  ],
                },
                {
                  md: 5,
                  lg: 4,
                  boxProps: {
                    reveal: true,
                    sx: {
                      backgroundColor: 'background.default',
                      height: { md: '100%' },
                      px: { xs: 0, md: 5 },
                      py,
                      top: 0,
                      width: '100%',
                    },
                  },
                  items: [
                    // Offices
                    {
                      title: 'Offices',
                      titleProps: { sx: { mb: 2 } },
                      type: 'h5',
                    },
                    { title: office_title, type: 'body1' },
                    {
                      title: office_address,
                      titleProps: { color: 'text.secondary' },
                      type: 'body1',
                    },
                    ...renderContactLinksBlockItems(),
                  ],
                },
              ],
              gridProps: {
                minWidth: '100%',
                spacing: { xs: 0, md: 5 },
              },
              type: 'grid',
            },
          ],
          py: 0,
          reveal: fullScreen && false,
          sx: {
            backgroundColor: 'background.paper',
            position: 'relative',
          },
        },
      ]}
    />
  )
}

export default ContactPage
