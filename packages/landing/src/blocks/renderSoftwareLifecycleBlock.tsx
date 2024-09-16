import {BlockItemProps, renderContactCalloutButtonBlockItem} from '@onex/landing'

import { GetStartedPage } from '@onex/pages'

import { useLayout } from '../providers/LayoutProvider'
import { BlockProps } from '../web/Block/Block'
import React from "react";

const commonIconProps = 'fa-2x fa-thin'
const PROCESS_DATA = [
  {
    title: 'Planning & Consulting',
    fa_icon: 'fa-chart-line',
  },
  {
    title: 'Visual & Technical Design',
    fa_icon: 'fa-pencil-ruler',
  },
  {
    title: 'Development',
    fa_icon: 'fa-cogs',
  },
  {
    title: 'Testing',
    fa_icon: 'fa-bug',
  },
  {
    title: 'Deployment',
    fa_icon: 'fa-rocket',
  },
  {
    title: 'Maintenance',
    fa_icon: 'fa-wrench',
  },
]

export interface RenderSoftwareLifecycleBlockProps
  extends Omit<BlockProps, 'items'> {
  overline?: BlockItemProps['title']
  subtitle?: BlockItemProps['title']
  title?: BlockItemProps['title']
}

const renderSoftwareLifecycleBlock = (
  props: RenderSoftwareLifecycleBlockProps = {}
) => {
  const {
    title = 'Full-cycle Custom Software Development Process',
    overline = 'Our Process',
    subtitle = 'Complete custom software development, from planning to maintenance, tailored to meet your unique business requirements.',
    ...rest
  } = props

  const { site } = useLayout()
  const { cta_button_title } = site || {}

  return {
    id: 'software-lifecycle',
    items: [
      {
        title: overline,
        titleProps: { sx: { textAlign: 'center' } },
        type: 'overline',
      },
      {
        title,
        maxWidth: 'md',
        titleProps: {
          gutterBottom: true,
          sx: { textAlign: 'center' },
        },
        type: 'h3',
      },
      {
        title: subtitle,
        maxWidth: 'md',
        titleProps: {
          color: 'text.secondary',
          sx: { maxWidth: '70%', mx: 'auto', textAlign: 'center' },
        },
        type: 'body1',
      },
      {
        stackItemProps: {
          sx: { flexShrink: { md: 0 }, textAlign: 'center' },
        },
        stackItems: PROCESS_DATA.flatMap((datum, i) => {
          const isLast = PROCESS_DATA.length - 1 === i
          return [
            {
              items: [
                {
                  title: `${commonIconProps} ${datum.fa_icon}`,
                  titleProps: { fontSize: '2.5em' },
                  type: 'fa-icon',
                },
                {
                  title: datum.title,
                  titleProps: { sx: { mt: 1 } },
                  type: 'body1',
                },
              ],
            },
            !isLast && {
              items: [
                {
                  title: `${commonIconProps} fa-arrow-right`,
                  titleProps: { sx: { color: 'text.secondary', opacity: 0.5 } },
                  type: 'fa-icon',
                },
              ],
            },
          ].filter(Boolean)
        }),
        stackProps: {
          direction: 'row' as const,
          justifyContent: { md: 'center' },
          maxWidth: '100%',
          mt: { xs: 4, md: 6 },
          spacing: 4,
          width: '100%',
        },
        sx: { overflowX: 'scroll' },
        type: 'stack',
      },
      renderContactCalloutButtonBlockItem({
        title: cta_button_title,
        children: <GetStartedPage />,
        subtitle: 'Schedule a non-obligatory 30-min consultation',
        boxProps: { sx: { textAlign: 'center', mx: 'auto', mt: { xs: 4, md: 6 } } },
      }),
    ],
    ...rest,
  }
}

export default renderSoftwareLifecycleBlock
