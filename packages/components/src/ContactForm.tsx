import React, { useState } from 'react'
import { Form, FormSections } from '@gravis-os/form'
import { EnquiryTypeEnum, postEnquiry } from '@onex/modules'
import { Alert } from '@gravis-os/ui'
import toast from 'react-hot-toast'

export interface ContactFormProps {
  onSubmit?: (values: any) => void
}

const ContactForm: React.FC<ContactFormProps> = (props) => {
  const { onSubmit } = props

  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false)

  const handleSubmit = async (values) => {
    if (onSubmit) return onSubmit(values)
    toast.loading('Sending...')
    await postEnquiry({
      type: EnquiryTypeEnum.ENQUIRY,
      origin: window.location.href,
      ...values,
    })
    setIsSubmitSuccess(true)
    toast.remove()
    toast.success('Successfully sent')
  }

  return (
    <div>
      {isSubmitSuccess && (
        <Alert onClose={() => setIsSubmitSuccess(false)} sx={{ mb: 2 }}>
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
        }}
        onSubmit={handleSubmit}
        submitButtonProps={{
          title: 'Send Message',
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
                title: 'Contact',
                fields: [
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

export default ContactForm
