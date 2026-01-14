import React from 'react'

import { Box, CircularProgress } from '@onex/ui'
import dynamic from 'next/dynamic'

import type { ContactFormProps } from './ContactForm'

// Dynamically import ContactForm to defer loading of heavy dependencies
// (yup, @hookform/resolvers, awesome-phonenumber)
const LazyContactForm = dynamic(
  () => import('./ContactForm').then((mod) => mod.default),
  {
    loading: () => (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <CircularProgress />
      </Box>
    ),
    ssr: true,
  }
)

export const DynamicContactForm: React.FC<ContactFormProps> = (props) => {
  return <LazyContactForm {...props} />
}

export default DynamicContactForm
