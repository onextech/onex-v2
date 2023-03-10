import React from 'react'
import { Blocks } from '@gravis-os/landing'

export interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = (props) => {
  return (
    <Blocks
      items={[
        {
          key: 'hero',
          maxWidth: 'xl',
          sx: { pt: { xs: 3, md: 6 } },
          pb: 0,
          items: [
            { type: 'overline', title: 'Contact Us' },
            {
              type: 'h1',
              title: 'Get in Touch',
              titleProps: { mb: 2, maxWidth: true },
            },
            {
              type: 'subtitle1',
              title: 'Get in Touch',
              titleProps: {
                color: 'text.secondary',
                maxWidth: '60%',
              },
            },
          ],
        },
      ]}
    />
  )
}

export default ContactPage
