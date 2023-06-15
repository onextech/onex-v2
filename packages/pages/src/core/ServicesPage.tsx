import React from 'react'
import { Blocks, renderServicesBlockItem, useLayout } from '@gravis-os/landing'
import type { Service } from '@gravis-os/types'

export interface ServicesPageProps {
  services: Service[]
}

const ServicesPage: React.FC<ServicesPageProps> = (props) => {
  const { services } = props
  const { routeConfig } = useLayout()

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
              title: 'Services',
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
              title: '/images/about_working_in_office.png',
              disableContainer: true,
              titleProps: {
                alt: 'People working in office',
                background: true,
                backgroundHeight: { xs: 320, md: 450 },
                backgroundSx: { mt: 5 },
              },
            },
            {
              type: 'h4',
              title:
                'We leverage deep insights and global expertise to achieve outcomes that are most important to you. As your trusted advisor, we bring the full depth and breadth of our firm to focus on your unique needs and challenges.',
              titleProps: { maxWidth: true, sx: { mt: { xs: 5, md: 10 } } },
            },
          ],
        },
        {
          key: 'services',
          sx: { backgroundColor: 'background.paper' },
          items: [
            renderServicesBlockItem({
              items: services,
              gridProps: { spacing: 5, rowSpacing: 8 },
            }),
          ],
        },
      ]}
    />
  )
}

export default ServicesPage
