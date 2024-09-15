import React from 'react'

import { Box, Typography } from '@onex/ui'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined'
import { BlockItemProps } from '../web'
import { BlockProps } from '../web/Block/Block'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, index, value, ...other } = props

  return (
    <div
      aria-labelledby={`vertical-tab-${index}`}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && (
        <Box sx={{ whiteSpace: 'pre-line' }}>
          <Typography sx={{ fontSize: '1.1rem' }}>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

export interface RenderFactsVerticalTabsBlockProps
  extends Omit<BlockProps, 'items'> {
  items?: Array<{ content?: string; id?: string; title: string }>
  subtitle?: BlockItemProps['title']
  title: BlockItemProps['title']
  overline?: BlockItemProps['title']
}

const renderFactsVerticalTabsBlock = (
  props: RenderFactsVerticalTabsBlockProps
) => {
  const { overline, title, items, subtitle, ...rest } = props

  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return {
    id: 'facts-vertical-tabs',
    ...rest,
    items: [
      { title: overline, type: 'overline' },
      {
        title,
        titleProps: { gutterBottom: true, maxWidth: '50%' },
        type: 'h3',
      },
      {
        title: subtitle,
        titleProps: {
          color: 'text.secondary',
          maxWidth: '40%',
        },
        type: 'body1',
      },
      {
        gridItemProps: {
          sx: { mt: { xs: 4, md: 8 }, textAlign: { xs: 'center', md: 'left' } },
        },
        gridItems: [
          // Left
          {
            md: 4,
            items: [
              {
                title: items.map((item, index) => {
                  const { id, title, content } = item
                  const isActive = value === index
                  return {
                    id: id || title,
                    title: (
                      <Box key={id || title} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <span>{title}</span>

                        <KeyboardArrowRightOutlinedIcon sx={{
                          ml: 1,
                          color: isActive ? 'primary.main' : 'text.secondary',
                        }} />
                      </Box>
                    ),
                    sx: {
                      maxWidth: '100%',
                      fontFamily: 'inherit',
                      fontSize: '1.15rem',
                      fontWeight: 'normal',
                      textTransform: 'none',
                      letterSpacing: 0,
                      textAlign: 'left',
                      variant: 'subtitle2' as const,
                      p: 2,
                      borderBottom: 1,
                      borderColor: 'divider',
                      lineHeight: 1.35,
                      color: 'text.primary',
                      '&:hover': { backgroundColor: 'action.hover' },
                    },
                  }
                }),
                titleProps: {
                  indicatorColor: '',
                  onChange: handleChange,
                  orientation: 'vertical',
                  value,
                  sx: { ml: -2,  mt: -2 },
                },
                type: 'tabs',
              },
            ],
          },
          // Right
          {
            md: 8,
            items: [
              {
                title: (
                  <>
                    {items.map((item, index) => {
                      const { id, title, content } = item
                      return (
                        <TabPanel index={index} key={id || title} value={value}>
                          {content}
                        </TabPanel>
                      )
                    })}
                  </>
                ),
                type: 'jsx',
              },
            ],
          },
        ],
        gridProps: { spacing: 8 },
        type: 'grid',
      },
    ],
  }
}

export default renderFactsVerticalTabsBlock
