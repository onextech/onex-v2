import React, { useState } from 'react'
import toast from 'react-hot-toast'

import { Form, FormSections } from '@onex/form'
import { FormCategoryEnum, ServiceCategory } from '@onex/types'
import { Alert } from '@onex/ui'
import { useRouter } from 'next/router'

import { EnquiryTypeEnum } from '../enquiries/common/constants'
import { postEnquiry } from '../enquiries/common/postEnquiry'
import { useLayout } from '../providers/LayoutProvider'

export interface LeadFormProps {
  alignButtonLeft?: boolean
  onSubmit?: (values: any) => void
  serviceCategorys?: ServiceCategory[]
}

const LeadForm: React.FC<LeadFormProps> = (props) => {
  const { alignButtonLeft, onSubmit, serviceCategorys } = props

  const { routeConfig, site } = useLayout()
  const { cta_button_title } = site

  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false)
  const router = useRouter()

  const handleSubmit = async (values) => {
    if (onSubmit) return onSubmit(values)
    setIsLoading(true)
    await postEnquiry({
      origin: window.location.href,
      type: EnquiryTypeEnum.LEAD,
      ...values,
    })
    setIsLoading(false)
    setIsSubmitSuccess(true)
    toast.success('Successfully sent')
    router.push(
      `/${routeConfig?.CONTACT_SUCCESS}?name=${values.name}&email=${values.email}`
    )
  }

  return (
    <div>
      {isSubmitSuccess && (
        <Alert onClose={() => setIsSubmitSuccess(false)} sx={{ my: 2 }}>
          Successfully sent
        </Alert>
      )}

      <Form
        defaultValues={{
          email: '',
          message: '',
          mobile: '',
          name: '',
          needs: [],
          source: '',
        }}
        formJsx={
          <FormSections
            disableCard
            sections={[
              {
                fields: [
                  serviceCategorys && {
                    key: 'needs',
                    label: 'What are you looking for today?',
                    name: 'needs',
                    options: serviceCategorys.map(({ title }) => ({
                      key: title,
                      label: title,
                      value: title,
                    })),
                    required: true,
                    type: 'checkbox',
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
                    placeholder: 'What is your email address?',
                    required: true,
                    type: 'email',
                  },
                  {
                    key: 'mobile',
                    name: 'mobile',
                    placeholder: 'What is your mobile number?',
                    required: true,
                    type: 'mobile',
                  },
                  {
                    key: 'message',
                    label: 'Message',
                    name: 'message',
                    placeholder: 'How may we help you?',
                    required: true,
                    type: 'textarea',
                  },
                  {
                    disableFirstOptionAsDefaultValue: true,
                    key: 'source',
                    label: 'How did you hear about us?',
                    name: 'source',
                    options: [
                      { key: 'google', label: 'Google', value: 'Google' },
                      { key: 'facebook', label: 'Facebook', value: 'Facebook' },
                      {
                        key: 'instagram',
                        label: 'Instagram',
                        value: 'Instagram',
                      },
                      { key: 'linkedin', label: 'LinkedIn', value: 'LinkedIn' },
                      { key: 'referral', label: 'Referral', value: 'Referral' },
                    ],
                    required: true,
                  } as any,
                ],
                key: 'contact',
              },
            ]}
          />
        }
        id={FormCategoryEnum.LEAD}
        onSubmit={handleSubmit}
        resetOnSubmitSuccess
        submitButtonProps={{
          title: cta_button_title,
          boxProps: {
            display: 'flex',
            justifyContent: alignButtonLeft ? 'flex-start' : 'flex-end',
          },
          fullWidthOnMobile: true,
          loading: isLoading,
          size: 'large',
          sx: { mt: 4 },
          variant: 'contained',
        }}
        {...props}
      />
    </div>
  )
}

export default LeadForm
