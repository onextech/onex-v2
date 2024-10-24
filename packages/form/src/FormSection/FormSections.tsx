import React from 'react'

import { Grid, GridProps } from '@onex/ui'

import FormSection from './FormSection'
import { FormSectionProps } from './types'

export interface FormSectionsProps extends Partial<FormSectionProps> {
  containerProps?: GridProps
  sections: FormSectionProps[]
}

const FormSections: React.FC<FormSectionsProps> = (props) => {
  const { containerProps = {}, sections, ...rest } = props
  if (!sections?.length) return null

  return (
    <Grid container spacing={2} {...containerProps}>
      {sections.map((section) => (
        <FormSection key={section.key} {...section} {...rest} />
      ))}
    </Grid>
  )
}

export default FormSections
