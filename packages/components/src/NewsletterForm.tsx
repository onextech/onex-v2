import React, { useState } from 'react'
import { Form, FormSections } from '@gravis-os/form'
import toast from 'react-hot-toast'
import { EnquiryTypeEnum, postEnquiry } from '@onex/modules'
import { Alert } from '@gravis-os/ui'

export interface NewsletterFormProps {
  onSubmit?: (values: any) => void
}

const NewsletterForm: React.FC<NewsletterFormProps> = (props) => {
  const { onSubmit } = props

  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false)

  const handleSubmit = async (values) => {
    if (onSubmit) return onSubmit(values)
    await postEnquiry({
      type: EnquiryTypeEnum.NEWSLETTER,
      origin: window.location.href,
      ...values,
    })
    setIsSubmitSuccess(true)
    toast.success('Success!')
  }

  return (
    <div>
      {isSubmitSuccess && (
        <Alert onClose={() => setIsSubmitSuccess(false)} sx={{ mb: 2 }}>
          Success!
        </Alert>
      )}

      <Form
        resetOnSubmitSuccess
        defaultValues={{
          email: '',
        }}
        onSubmit={handleSubmit}
        submitButtonProps={{
          title: 'Get Started',
          variant: 'paper',
          size: 'large',
          fullWidthOnMobile: true,
          sx: { py: 1.75, px: 3 },
          boxProps: {
            display: 'flex',
            justifyContent: 'flex-end',
            flex: '1 0 auto',
            ml: 1,
          },
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
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
                    key: 'email',
                    name: 'email',
                    type: 'email',
                    placeholder: 'What is your email address?',
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

export default NewsletterForm
