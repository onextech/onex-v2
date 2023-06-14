import React from 'react'
import { Blocks } from '@gravis-os/landing'
import { useLayout } from '@onex/providers'

export interface LegalPageProps {
  title: React.ReactNode
  html?: string
}

const LegalPage: React.FC<LegalPageProps> = (props) => {
  const { title, html } = props
  const { site } = useLayout()

  return (
    <Blocks
      items={[
        {
          key: 'hero',
          pt: 5,
          items: [
            {
              type: 'overline',
              title: `${site.company_title}`,
              titleProps: { color: 'text.secondary' },
            },
            {
              type: 'h2',
              title,
              titleProps: { component: 'h1' },
            },
            html && {
              type: 'html',
              title: html,
              titleProps: {
                color: 'text.primary', sx: {
                  '& h1, & h2, & h3, & h4, & h5, & h6': {
                    mt: 0,
                    mb: 1,
                  },
                  '& h1': {
                    fontFamily: 'h1.fontFamily',
                  },
                  '& h2': {
                    fontFamily: 'h2.fontFamily',
                  },
                  '& h3': {
                    fontFamily: 'h3.fontFamily',
                  },
                  '& h4': {
                    fontFamily: 'h4.fontFamily',
                  },
                  '& h5': {
                    fontFamily: 'h5.fontFamily',
                  },
                  '& h6': {
                    fontFamily: 'h6.fontFamily',
                  },
                  '& p': {
                    mt: 0,
                    mb: 3,
                  },
                },
              },
            },
          ],
        },
      ]}
    />
  )
}

export default LegalPage
