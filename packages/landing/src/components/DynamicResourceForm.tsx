import React from 'react'

import { Box, CircularProgress } from '@onex/ui'
import dynamic from 'next/dynamic'

import type { ResourceFormProps } from './ResourceForm'

// Dynamically import ResourceForm to defer loading of heavy dependencies
// (yup, @hookform/resolvers, awesome-phonenumber, country-list, free-email-domains)
const LazyResourceForm = dynamic(
  () => import('./ResourceForm').then((mod) => mod.default),
  {
    loading: () => (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <CircularProgress />
      </Box>
    ),
    ssr: true,
  }
)

export const DynamicResourceForm: React.FC<ResourceFormProps> = (props) => {
  return <LazyResourceForm {...props} />
}

export default DynamicResourceForm
