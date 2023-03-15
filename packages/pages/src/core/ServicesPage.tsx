import React from 'react'
import { Blocks } from '@gravis-os/landing'
import type { Service } from '@onex/types'

export interface ServicesPageProps {
  services: Service[]
}

const ServicesPage: React.FC<ServicesPageProps> = (props) => {
  const { services } = props

  return (
    <Blocks
      items={[
        {
          key: 'hero',
          pt: { xs: 5, md: 10 },
          pb: 0,
          sx: { backgroundColor: 'background.paper' },
          items: [
            { type: 'overline', title: 'Services' },
            {
              type: 'h1',
              title: 'Craft experiences that touch hearts and move markets.',
            },
            {
              type: 'subtitle1',
              title:
                'Meet the moment with our services and capabilities that help you define your vision for the future and make it happen.',
              titleProps: {
                color: 'text.secondary',
                maxWidth: true,
                sx: { mt: 2 },
              },
            },
            {
              type: 'image',
              title: '/images/about_nodes.png',
              disableContainer: true,
              titleProps: {
                alt: 'service-hero',
                background: true,
                backgroundHeight: { xs: 240, md: 320 },
                backgroundSx: { mt: 5 },
              },
            },
          ],
        },
      ]}
    />
  )
}

export default ServicesPage
