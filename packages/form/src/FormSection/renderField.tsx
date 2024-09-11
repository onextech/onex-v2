import React from 'react'
import { UseFormReturn } from 'react-hook-form'

import get from 'lodash/get'
import dynamic from 'next/dynamic'

import {
  CheckboxGroupProps,
  ControlledTextField,
  RadioGroupProps,
} from '../fields'
import { FormSectionFieldTypeEnum } from './constants'
import getFormSectionFieldBooleanFunction from './getFormSectionFieldBooleanFunction'
import getFormSectionFieldRenderProps from './getFormSectionFieldRenderProps'
import getFormSectionFieldWithFunctionType from './getFormSectionFieldWithFunctionType'
import { FormSectionFieldProps, FormSectionProps } from './types'

export interface RenderFieldProps {
  fieldProps: FormSectionFieldProps
  formContext: UseFormReturn
  sectionProps: FormSectionProps
}

/**
 * Render FormSection Field
 */
const renderField = (props: RenderFieldProps) => {
  const { fieldProps, formContext, sectionProps } = props
  const { control, formState, setValue } = formContext
  const { errors } = formState

  const {
    disabledFields,
    disableEdit,
    isNew,
    isPreview,
    isReadOnly,
    item,
    module: injectedModule,
    readOnlySx,
    renderReadOnly: injectedRenderReadOnly,
  } = sectionProps
  const {
    // These props should be deprecated in favor of `props`
    fieldEffect,
    gridProps,
    key,
    module,
    props: componentProps,
    render,
    renderReadOnly: renderReadOnlyField,
    setTitle,
    type,

    ...rest
  } = fieldProps
  const {
    defaultValue,
    disabled,
    helperText,
    hidden,
    label: injectedLabel,
    multiple,
    name,
    withCreate,
  } = rest

  // ==============================
  // Resolve Props
  // ==============================
  // The set of props available to the end-user when defining a function in the fieldDef
  const renderProps = getFormSectionFieldRenderProps(props)
  const renderReadOnly = renderReadOnlyField ?? injectedRenderReadOnly

  // Calculate if the field is in disabledFields, else fallback to check if the disabled prop is defined
  const isDisabled =
    disabledFields?.includes(name) ||
    getFormSectionFieldBooleanFunction(disabled, renderProps)
  const isHidden = getFormSectionFieldBooleanFunction(hidden, renderProps)
  const nextDefaultValue = getFormSectionFieldWithFunctionType(
    defaultValue,
    renderProps
  )

  // Shared props by all fields
  const commonProps: any = {
    ...rest,
    defaultValue: nextDefaultValue,
    // Resolved values
    disabled: isDisabled,
    error: Boolean(get(errors, name)),
    helperText: get(errors, name)?.message || helperText,
    hidden: isHidden,
    isNew,
    setValue,
    ...componentProps,
  }

  // ==============================
  // Render
  // ==============================
  const getChildrenJsx = () => {
    switch (type) {
      case FormSectionFieldTypeEnum.RADIO: {
        const DynamicControlledRadioGroup = dynamic(() =>
          import('../fields').then((module) => module.ControlledRadioGroup)
        )
        return (
          <DynamicControlledRadioGroup
            control={control}
            {...commonProps}
            options={(commonProps.options || []) as RadioGroupProps['options']}
          />
        )
      }
      case FormSectionFieldTypeEnum.CHECKBOX: {
        const DynamicControlledCheckboxGroup = dynamic(() =>
          import('../fields').then((module) => module.ControlledCheckboxGroup)
        )
        return (
          <DynamicControlledCheckboxGroup
            control={control}
            {...commonProps}
            options={
              (commonProps.options || []) as CheckboxGroupProps['options']
            }
          />
        )
      }
      case FormSectionFieldTypeEnum.EMAIL: {
        return (
          <ControlledTextField
            control={control}
            {...commonProps}
            type="email"
          />
        )
      }
      case FormSectionFieldTypeEnum.MOBILE: {
        return (
          <ControlledTextField
            control={control}
            {...commonProps}
            inputProps={{
              title: 'Please enter numbers only.',
              pattern: '^[0-9]*$',
            }}
            type="tel"
          />
        )
      }
      case FormSectionFieldTypeEnum.TEXTAREA: {
        return (
          <ControlledTextField
            control={control}
            multiline
            rows={4}
            {...commonProps}
          />
        )
      }
      case FormSectionFieldTypeEnum.TEXT:
      case FormSectionFieldTypeEnum.INPUT:
      default: {
        return <ControlledTextField control={control} {...commonProps} />
      }
    }
  }

  const childrenJsx = getChildrenJsx()

  return render ? render({ children: childrenJsx, formContext }) : childrenJsx
}

export default renderField
