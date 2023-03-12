import React from 'react'
import { Box } from '@gravis-os/ui'
import { Block } from '@gravis-os/landing'
import type { Job } from '@onex/types'

export interface RenderJobCardBlockItemProps {
  index: number
  job: Job
}

const renderJobCardBlockItem = (props: RenderJobCardBlockItemProps) => {
  const { job, index } = props
  const { title, subtitle, html, ctaUrl } = job
  return {
    boxProps: {
      sx: {
        backgroundColor: 'background.paper',
        p: 3,
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: 'action.hover',
        },
        '&:active': {
          backgroundColor: 'action.selected',
        },
      },
    },
    dialogProps: {
      maxWidth: 'xl',
      title: 'Careers',
      titleProps: { variant: 'overline', sx: { pl: { xs: 4, md: 5 } } },
      children: (
        <Box sx={{ p: 2 }}>
          <Block
            py={0}
            reveal={false}
            sx={{ backgroundColor: 'background.paper' }}
            items={[
              {
                type: 'grid',
                gridProps: { spacing: 4 },
                gridItems: [
                  {
                    md: 8,
                    items: [
                      {
                        type: 'h4',
                        title,
                        titleProps: { sx: { mb: 1 } },
                      },
                      {
                        type: 'subtitle1',
                        title: subtitle,
                      },
                      {
                        type: 'html',
                        title: html,
                      },
                    ],
                  },
                  {
                    md: 4,
                    boxProps: { sx: { position: 'sticky', top: 16 } },
                    items: [
                      {
                        type: 'body1',
                        title: subtitle,
                        titleProps: { color: 'text.secondary' },
                      },
                      {
                        type: 'button',
                        title: 'Apply',
                        titleProps: {
                          href: ctaUrl,
                          hrefProps: { targetBlank: true },
                          variant: 'contained',
                          color: 'primary',
                          fullWidth: true,
                          size: 'large',
                          sx: { mt: 2 },
                        },
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Box>
      ),
    },
    items: [
      {
        type: 'subtitle2',
        title: index < 10 ? String(index).padStart(2, '0') : index,
        titleProps: { color: 'text.secondary', sx: { mb: 3 } },
      },
      {
        type: 'subtitle2',
        title,
        titleProps: { gutterBottom: true },
      },
      {
        type: 'body1',
        title: subtitle,
        titleProps: { color: 'text.secondary' },
      },
    ],
  }
}

export default renderJobCardBlockItem
