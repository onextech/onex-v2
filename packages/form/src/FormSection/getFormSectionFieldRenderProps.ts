import { RenderFieldProps } from './renderField'

export interface FormSectionFieldRenderProps {
  formContext: RenderFieldProps['formContext']
  isDetail: boolean
  isNew: RenderFieldProps['sectionProps']['isNew']
  isPreview: RenderFieldProps['sectionProps']['isPreview']
}

// Standard renderProp used in all function types in the fieldDef object
const getFormSectionFieldRenderProps = (
  props: RenderFieldProps
): FormSectionFieldRenderProps => {
  const { formContext, sectionProps } = props
  const { isNew, isPreview } = sectionProps

  return {
    formContext,
    isDetail: !isNew && !isPreview,
    isNew,
    isPreview,
  }
}

export default getFormSectionFieldRenderProps
