import React from 'react'

import { Blocks } from '@onex/landing'
import { routeConfig } from '@onex/common'

import ContactPage from './ContactPage'

export interface ContactSuccessPageProps {
  email?: string
  name?: string
}

const ContactSuccessPage = (props: ContactSuccessPageProps) => {
  const { email, name } = props
  if (!name || !email) return <ContactPage />
  return (
    <Blocks
      items={[
        {
          id: 'hero',
          center: true,
          items: [
            {
              title: `fa-3x fa-thin fa-badge-check`,
              titleProps: { sx: { color: 'success.main', mb: 1 } },
              type: 'fa-icon',
            },
            {
              title: `Registration Success`,
              titleProps: { sx: { color: 'success.main', mb: 1 } },
              type: 'overline',
            },
            {
              title: (
                <>
                  Thank you for contacting us,{' '}
                  <span id="contact-success-form--name">{name}</span>
                </>
              ),
              titleProps: { component: 'h1', mb: 2 },
              type: 'h2',
            },
            {
              title: (
                <>
                  We have received your details and we will reach out to you at{' '}
                  <span id="contact-success-form--email">{email}</span>
                </>
              ),
              type: 'subtitle1',
            },
            {
              title: 'Back to Home',
              titleProps: {
                href: routeConfig.HOME,
                sx: { mt: 4 },
              },
              type: 'button',
            },
          ],
          maxWidth: 'md',
          py: 20,
          reveal: false,
          sx: {
            backgroundColor: 'background.default',
            position: 'relative',
          },
        },
      ]}
    />
  )
}

export default ContactSuccessPage
