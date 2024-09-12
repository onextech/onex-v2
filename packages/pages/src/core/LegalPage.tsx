import React from 'react'

import { Blocks, useLayout } from '@onex/landing'

export interface LegalPageProps {
  html?: string
  title: React.ReactNode
}

const LegalPage: React.FC<LegalPageProps> = (props) => {
  const { title, html } = props
  const { site } = useLayout()

  return (
    <Blocks
      items={[
        {
          id: 'hero',
          items: [
            {
              title: `${site.company_title}`,
              titleProps: { color: 'text.secondary' },
              type: 'overline',
            },
            {
              title,
              titleProps: { component: 'h1' },
              type: 'h2',
            },
            html && {
              title: html,
              titleProps: {
                color: 'text.primary',
                sx: {
                  '& p': {
                    mb: 3,
                    mt: 0,
                  },
                },
              },
              type: 'html',
            },
          ],
          pt: 5,
        },
      ]}
    />
  )
}

export default LegalPage
