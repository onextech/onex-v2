import React from 'react'
import { Blocks } from '@gravis-os/landing'
import { ContactForm } from '@onex/components'
import { useLayout } from '@onex/providers'

export interface ContactPageProps {
  fullScreen?: boolean
}

const ContactPage: React.FC<ContactPageProps> = (props) => {
  const { fullScreen } = props

  const { logo: Logo, routeConfig, appConfig } = useLayout()
  const {
    generalEmail,
    generalHotline,
    generalWhatsappHotline,
    officeTitle,
    officeAddress,
  } = appConfig

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
                sx: { backgroundColor: 'background.paper' },
              },
              gridProps: { spacing: { xs: 0, md: 5 } },
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
                    ...(Logo && fullScreen
                      ? [
                          {
                            type: 'jsx',
                            title: <Logo href={routeConfig.HOME} />,
                            boxProps: { sx: { mb: 5 } },
                          },
                        ]
                      : []),
                    { type: 'overline', title: 'Contact' },
                    {
                      type: 'h2',
                      title: 'Get in Touch',
                      titleProps: { mb: 1 },
                    },
                    {
                      type: 'body1',
                      title:
                        'Thank you for your interest. So we can help serve you better, please complete the form below. Please note, due to the volume of inquiries, we cannot respond to everyone. Where we can, we will respond as soon as possible.',
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
                      position: { md: 'absolute' },
                    },
                  },
                  items: [
                    // Offices
                    {
                      type: 'h5',
                      title: 'Offices',
                      titleProps: { sx: { mb: 2 } },
                    },
                    { type: 'body1', title: officeTitle },
                    {
                      type: 'body1',
                      title: officeAddress,
                      titleProps: { color: 'text.secondary' },
                    },
                    // Support
                    {
                      type: 'h5',
                      title: 'Support',
                      titleProps: { sx: { mt: 8, mb: 2 } },
                    },
                    ...[
                      {
                        overline: 'Submit a general inquiry',
                        title: generalEmail,
                        href: `mailto:${generalEmail}`,
                      },
                      {
                        overline: 'General hotline',
                        title: generalHotline,
                        href: `tel:${generalHotline}`,
                      },
                      {
                        overline: 'WhatsApp',
                        title: generalWhatsappHotline,
                        href: `https://wa.me/${generalWhatsappHotline}`,
                        titleProps: { targetBlank: true },
                      },
                    ]
                      .map(({ title, titleProps, overline, href }) => {
                        return [
                          {
                            type: 'body1',
                            title: overline,
                            titleProps: { mt: 2 },
                          },
                          {
                            type: 'link',
                            title,
                            titleProps: {
                              href,
                              color: 'text.secondary',
                              ...titleProps,
                            },
                          },
                        ]
                      })
                      .flat(),
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
