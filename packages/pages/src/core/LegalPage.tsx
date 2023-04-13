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
            },
            html && {
              type: 'html',
              title: html,
              titleProps: { color: 'text.secondary', sx: { mt: 5 } },
            },
          ],
        },
      ]}
    />
  )
}

export default LegalPage
