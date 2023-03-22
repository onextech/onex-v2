import React from 'react'
import { Form, FormSections } from '@gravis-os/form'
import { ServiceCategory } from '@onex/types'

export interface GetStartedFormProps {
  serviceCategorys: ServiceCategory[]
}

const GetStartedForm: React.FC<GetStartedFormProps> = (props) => {
  const { serviceCategorys } = props

  const handleSubmit = (values) => {
    window.alert(`Submitted: ${JSON.stringify(values)}`)
  }

  return (
    <Form
      onSubmit={handleSubmit}
      submitButtonProps={{
        title: 'Get Started',
        variant: 'contained',
        size: 'large',
        sx: { mt: 2 },
        fullWidthOnMobile: true,
        boxProps: { display: 'flex', justifyContent: 'flex-end' },
      }}
      formJsx={
        <FormSections
          disableCard
          sections={[
            {
              key: 'contact',
              fields: [
                serviceCategorys && {
                  key: 'needs',
                  name: 'needs',
                  label: 'What are you looking for today?',
                  type: 'checkbox',
                  required: true,
                  options: serviceCategorys.map(({ title }) => ({
                    key: title,
                    value: title,
                    label: title,
                  })),
                },
                {
                  key: 'name',
                  name: 'name',
                  placeholder: 'How should we address you?',
                  required: true,
                },
                {
                  key: 'email',
                  name: 'email',
                  type: 'email',
                  placeholder: 'What is your email address?',
                  required: true,
                },
                {
                  key: 'mobile',
                  name: 'mobile',
                  type: 'mobile',
                  placeholder: 'What is your mobile number?',
                  required: true,
                },
                {
                  key: 'content',
                  name: 'content',
                  type: 'textarea',
                  label: 'Message',
                  placeholder: 'How may we help you?',
                  required: true,
                },
                {
                  key: 'source',
                  name: 'source',
                  label: 'How did you hear about us?',
                  type: 'checkbox',
                  required: true,
                  options: [
                    { key: '2', value: '2', label: 'Google' },
                    { key: '1', value: '1', label: 'Social Media' },
                    { key: '3', value: '3', label: 'LinkedIn' },
                    { key: '4', value: '4', label: 'Referral' },
                  ],
                },
              ],
            },
          ]}
        />
      }
      {...props}
    />
  )
}

export default GetStartedForm
