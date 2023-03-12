import React from 'react'
import { Form, FormSections } from '@gravis-os/form'

export interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = (props) => {
  const handleSubmit = (values) => {
    window.alert(`Submitted: ${JSON.stringify(values)}`)
  }
  return (
    <Form
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
              title: 'what',
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
                  key: 'content',
                  name: 'content',
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
  )
}

export default ContactForm
