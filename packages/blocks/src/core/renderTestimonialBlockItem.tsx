import React from 'react'
import { Ratings } from '@gravis-os/ui'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import { Testimonial } from '@onex/types'

export interface RenderTestimonialBlockItemProps {
  item: Testimonial
}

const renderTestimonialBlockItem = (props: RenderTestimonialBlockItemProps) => {
  const { item } = props
  const {
    title,
    avatar_src,
    avatar_alt,
    author_title,
    author_job_title,
    author_company_title,
    rating_count,
  } = item || {}
  return [
    {
      type: 'image',
      title: avatar_src,
      titleProps: {
        alt: avatar_alt,
        width: 80,
        height: 80,
        sx: { mb: 2 },
      },
    },
    { type: 'icon', title: FormatQuoteIcon },
    {
      type: 'subtitle2',
      title,
      titleProps: { maxWidth: '70%' },
    },
    {
      type: 'jsx',
      title: <Ratings value={rating_count} disableText sx={{ my: 2 }} />,
    },
    { type: 'subtitle3', title: author_title },
    { type: 'body1', title: `${author_job_title} of ${author_company_title}` },
  ]
}

export default renderTestimonialBlockItem
