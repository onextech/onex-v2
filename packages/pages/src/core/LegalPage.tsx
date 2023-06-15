import React from 'react'
import { Blocks, useLayout } from '@gravis-os/landing'

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
                color: 'text.primary',
                sx: {
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
