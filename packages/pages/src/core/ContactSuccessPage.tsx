import React from 'react'
import { Blocks } from '@gravis-os/landing'
import { useRouter } from 'next/router'
import ContactPage from './ContactPage'

export interface ContactSuccessPageProps {
  name?: string
  email?: string
}

const ContactSuccessPage = (props: ContactSuccessPageProps) => {
  const { name, email } = props
  const router = useRouter()
  if (!name || !email) return <ContactPage />
  return (
    <Blocks
      items={[
        {
          key: 'hero',
          reveal: false,
          py: 20,
          center: true,
          maxWidth: 'md',
          sx: {
            position: 'relative',
            backgroundColor: 'background.default',
          },
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
                  We have received your details and we will reach out to you at{' '}
                  <span id="contact-success-form-email">{email}</span>
                </>
              ),
            },
            {
              type: 'button',
              title: 'Back to Home',
              titleProps: {
                href: '/',
                sx: { mt: 4 },
              },
            },
          ],
        },
      ]}
    />
  )
}

export default ContactSuccessPage
