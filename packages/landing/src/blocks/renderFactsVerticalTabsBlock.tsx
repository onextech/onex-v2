import React from 'react'

import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined'
import { Box, Typography } from '@onex/ui'

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
  overline?: BlockItemProps['title']
  subtitle?: BlockItemProps['title']
  title: BlockItemProps['title']
}

const renderFactsVerticalTabsBlock = (
  props: RenderFactsVerticalTabsBlockProps
) => {
  const { title, items, overline, subtitle, ...rest } = props

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
          sx: { mt: { xs: 4, md: 8 }, textAlign: 'left' },
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
                      <Box
                        key={id || title}
                        sx={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: { xs: 'space-between', md: 'center' },
                          gap: 1,
                        }}
                      >
                        <span>{title}</span>

                        <KeyboardArrowRightOutlinedIcon
                          sx={{
                            color: isActive ? 'primary.main' : 'text.secondary',
                            ml: 1,
                            transform: { xs: 'rotate(90deg)', md: 'none' },
                          }}
                        />
                      </Box>
                    ),
                    sx: {
                      '&:hover': { backgroundColor: 'action.hover' },
                      borderBottom: 1,
                      borderColor: 'divider',
                      color: 'text.primary',
                      fontFamily: 'inherit',
                      fontSize: '1.15rem',
                      fontWeight: 'normal',
                      letterSpacing: 0,
                      lineHeight: 1.35,
                      maxWidth: '100%',
                      p: 2,
                      textAlign: 'left',
                      textTransform: 'none',
                      variant: 'subtitle2' as const,
                    },
                  }
                }),
                titleProps: {
                  indicatorColor: '',
                  onChange: handleChange,
                  orientation: 'vertical',
                  sx: { ml: -2, mt: -2 },
                  value,
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
        gridProps: { spacing: { xs: 0, md: 8 } },
        type: 'grid',
      },
    ],
  }
}

export default renderFactsVerticalTabsBlock
