import React from 'react'
import { Blocks } from '@gravis-os/landing'
import { ContactForm } from '@onex/components'
import { Ratings } from '@gravis-os/ui'
import { appConfig } from '@onex/common'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

export interface ContactPageProps {
  fullScreen?: boolean
}

const ContactPage: React.FC<ContactPageProps> = (props) => {
  const { fullScreen } = props
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
                      py: { xs: 5, md: 10 },
                      ...(fullScreen && { height: { md: '100vh' } }),
                    },
                  },
                  items: [
                    { type: 'overline', title: 'Get Started' },
                    {
                      type: 'h2',
                      title: 'Contact Us',
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
                      backgroundColor: 'background.default',
                      top: 0,
                      px: 5,
                      py: { xs: 5, md: 10 },
                      position: { md: 'absolute' },
                      height: { md: '100%' },
                    },
                  },
                  items: [
                    { type: 'icon', title: FormatQuoteIcon },
                    {
                      type: 'subtitle2',
                      title: `We regard the ${appConfig.title} team as co-founders in our business. The entire team from ${appConfig.title} has invested an incredible amount of time to truly understand our business, our users and their needs.`,
                      titleProps: { maxWidth: '70%' },
                    },
                    {
                      type: 'jsx',
                      title: <Ratings value={5} disableText sx={{ my: 2 }} />,
                    },
                    { type: 'subtitle3', title: 'Jared Palmer' },
                    { type: 'body1', title: 'CEO of Pet Media Group' },
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
