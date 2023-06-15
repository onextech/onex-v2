import React from 'react'
import { Blocks } from '@gravis-os/landing'
import ContactPage from './ContactPage'

export interface ContactSuccessPageProps {
  name?: string
  email?: string
}

const ContactSuccessPage = (props: ContactSuccessPageProps) => {
  const { name, email } = props
  if (!name || !email) return <ContactPage />
  return (
    <Blocks
      items={[
        {
          key: 'hero',
          reveal: false,
          py: 5,
          sx: {
            position: 'relative',
            backgroundColor: 'background.default',
          },
          items: [
            {
              type: 'grid',
              gridProps: { spacing: { xs: 0, md: 5 }, py: 8 },
              gridItems: [
                {
                  sm: 7,
                  md: 8,
                  lg: 9,
                  items: [
                    {
                      type: 'fa-icon',
                      title: `fa-3x fa-thin fa-badge-check`,
                      titleProps: { sx: { mb: 1, color: 'success.main' } },
                    },
                    {
                      type: 'overline',
                      title: `Registration Success`,
                      titleProps: { sx: { mb: 1, color: 'success.main' } },
                    },
                    {
                      type: 'h2',
                      title: (
                        <>
                          Thank you for contacting us,{' '}
                          <span id="contact-success-form-name">{name}</span>
                        </>
                      ),
                      titleProps: { mb: 2, component: 'h1' },
                    },
                    {
                      type: 'subtitle1',
                      title: (
                        <>
                          We have received your details and we will reach out to
                          you immediately at{' '}
                          <span id="contact-success-form-email">{email}</span>
                        </>
                      ),
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          key: 'background-nodes',
          py: 0,
          backgroundImageProps: {
            src: 'https://source.unsplash.com/Q1p7bh3SHj8/1600x900',
            alt: 'Planet image',
            backgroundHeight: { xs: 240, md: 320 },
          },
        },
      ]}
    />
  )
}

export default ContactSuccessPage
