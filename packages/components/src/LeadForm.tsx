import React, { useState } from 'react'
import { Form, FormSections } from '@gravis-os/form'
import { ServiceCategory } from '@onex/types'
import { EnquiryTypeEnum, postEnquiry } from '@onex/modules'
import { Alert } from '@gravis-os/ui'
import toast from 'react-hot-toast'
import { useLayout } from '@onex/providers'

export interface LeadFormProps {
  serviceCategorys: ServiceCategory[]
  onSubmit?: (values: any) => void
}

const LeadForm: React.FC<LeadFormProps> = (props) => {
  const { serviceCategorys, onSubmit } = props

  const { site } = useLayout()
  const { cta_button_title } = site

  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false)

  const handleSubmit = async (values) => {
    if (onSubmit) return onSubmit(values)
    setIsLoading(true)
    await postEnquiry({
      type: EnquiryTypeEnum.LEAD,
      origin: window.location.href,
      ...values,
    })
    setIsLoading(false)
    setIsSubmitSuccess(true)
    toast.success('Successfully sent')
  }

  return (
    <div>
      {isSubmitSuccess && (
        <Alert onClose={() => setIsSubmitSuccess(false)} sx={{ my: 2 }}>
          Successfully sent
        </Alert>
      )}

      <Form
        resetOnSubmitSuccess
        defaultValues={{
          name: '',
          email: '',
          mobile: '',
          message: '',
          source: '',
          needs: [],
        }}
        onSubmit={handleSubmit}
        submitButtonProps={{
          title: cta_button_title,
          variant: 'contained',
          size: 'large',
          sx: { mt: 2 },
          fullWidthOnMobile: true,
          boxProps: { display: 'flex', justifyContent: 'flex-end' },
          loading: isLoading
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
                    key: 'message',
                    name: 'message',
                    type: 'textarea',
                    label: 'Message',
                    placeholder: 'How may we help you?',
                    required: true,
                  },
                  {
                    key: 'source',
                    name: 'source',
                    label: 'How did you hear about us?',
                    type: 'radio',
                    required: true,
                    options: [
                      {
                        key: 'social-media',
                        value: 'Social Media',
                        label: 'Social Media',
                      },
                      { key: 'google', value: 'Google', label: 'Google' },
                      { key: 'linkedin', value: 'LinkedIn', label: 'LinkedIn' },
                      { key: 'referral', value: 'Referral', label: 'Referral' },
                    ],
                  },
                ],
              },
            ]}
          />
        }
        {...props}
      />
    </div>
  )
}

export default LeadForm
