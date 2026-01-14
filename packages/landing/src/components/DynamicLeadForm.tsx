import React from 'react'

import { Box, CircularProgress } from '@onex/ui'
import dynamic from 'next/dynamic'

import type { LeadFormProps } from './LeadForm'

// Dynamically import LeadForm to defer loading of heavy dependencies
// (yup, @hookform/resolvers, awesome-phonenumber, country-list)
const LazyLeadForm = dynamic(
  () => import('./LeadForm').then((mod) => mod.default),
  {
    loading: () => (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <CircularProgress />
      </Box>
    ),
    ssr: true,
  }
)

export const DynamicLeadForm: React.FC<LeadFormProps> = (props) => {
  return <LazyLeadForm {...props} />
}

export default DynamicLeadForm
