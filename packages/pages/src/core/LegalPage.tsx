import React from 'react'
import { Blocks } from '@gravis-os/landing'
import { useLayout } from '@onex/providers'

export interface LegalPageProps {
  title: React.ReactNode
  html?: string
}

const LegalPage: React.FC<LegalPageProps> = (props) => {
  const { title, html } = props
  const { appConfig } = useLayout()
  const { companyTitle } = appConfig

  return (
    <Blocks
      items={[
        {
          key: 'hero',
          pt: 5,
          items: [
            {
              type: 'overline',
              title: `${companyTitle}`,
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
