'use client'

import React, { useState } from 'react'

import { AppIdeaSettings } from '@/components/app-idea-explorer/types'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { EnquiryTypeEnum, postEnquiry } from '@onex/landing'
import { Check, ExternalLinkIcon } from 'lucide-react'
import Link from 'next/link'

interface LeadInfoDialogProps {
  appIdea: string
  onDialogClose: () => void
  onOpenChange: (open: boolean) => void
  open: boolean
  settings: AppIdeaSettings
}

const defaultFormData = {
  additionalMessage: '',
  apiAccess: true,
  businessEmail: '',
  companyName: '',
  companySize: '',
  firstName: '',
  jobTitle: '',
  lastName: '',
  marketingConsent: true,
  phoneNumber: '',
}

export function LeadInfoDialog({
  onDialogClose,
  onOpenChange,
  open,
  appIdea,
  settings,
}: LeadInfoDialogProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState(defaultFormData)

  const handleChange = (field: string, value: boolean | string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const payload = {
      email: formData.businessEmail,
      message: `Message: ${
        formData.additionalMessage
      }. App Idea: ${appIdea}. App Settings: ${JSON.stringify(
        settings,
        null,
        2
      ).replaceAll('"', '')}.`,
      mobile: formData.phoneNumber,
      name: `${formData.firstName} ${formData.lastName}`,
      company: formData.companyName,
      job_role: formData.jobTitle,
      origin: window.location.href,
      source: 'One X App Idea Explorer',
      type: EnquiryTypeEnum.LEAD,
    }

    try {
      await postEnquiry(payload)
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsSubmitted(false)
    setFormData(defaultFormData)
    onOpenChange(false)
    onDialogClose()
  }

  const renderForm = () => (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label className="text-xs font-medium" htmlFor="firstName">
              FIRST NAME<span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              onChange={(e) => handleChange('firstName', e.target.value)}
              placeholder="First name"
              required
              value={formData.firstName}
            />
          </div>
          <div className="space-y-1">
            <Label className="text-xs font-medium" htmlFor="lastName">
              LAST NAME<span className="text-red-500">*</span>
            </Label>
            <Input
              id="lastName"
              onChange={(e) => handleChange('lastName', e.target.value)}
              placeholder="Last name"
              required
              value={formData.lastName}
            />
          </div>
        </div>

        <div className="space-y-1">
          <Label
            className="uppercase text-xs font-medium"
            htmlFor="businessEmail"
          >
            Business Email<span className="text-red-500">*</span>
          </Label>
          <Input
            id="businessEmail"
            onChange={(e) => handleChange('businessEmail', e.target.value)}
            placeholder="Business Email"
            required
            type="email"
            value={formData.businessEmail}
          />
        </div>

        <div className="space-y-1">
          <Label className="text-xs font-medium" htmlFor="phoneNumber">
            PHONE NUMBER<span className="text-red-500">*</span>
          </Label>
          <div className="flex">
            <div className="flex-shrink-0">
              <Select>
                <SelectTrigger className="w-[80px] rounded-r-none">
                  <SelectValue placeholder="+65" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+65">+65</SelectItem>
                  <Separator />
                  <SelectItem value="+1">+1</SelectItem>
                  <SelectItem value="+44">+44</SelectItem>
                  <SelectItem value="+61">+61</SelectItem>
                  <SelectItem value="+852">+852</SelectItem>
                  <SelectItem value="+971">+971</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input
              className=" rounded-l-none"
              id="phoneNumber"
              inputMode="numeric"
              minLength={8}
              onChange={(e) => handleChange('phoneNumber', e.target.value)}
              pattern="[0-9]*"
              placeholder="Phone number"
              required
              type="tel"
              value={formData.phoneNumber}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label className="text-xs font-medium" htmlFor="companyName">
              COMPANY NAME{' '}
              <span className="text-muted-foreground text-xxs">(Optional)</span>
            </Label>
            <Input
              id="companyName"
              onChange={(e) => handleChange('companyName', e.target.value)}
              placeholder="Company name"
              value={formData.companyName}
            />
          </div>
          <div className="space-y-1">
            <Label className="text-xs font-medium" htmlFor="jobTitle">
              JOB TITLE{' '}
              <span className="text-muted-foreground text-xxs">(Optional)</span>
            </Label>
            <Input
              id="jobTitle"
              onChange={(e) => handleChange('jobTitle', e.target.value)}
              placeholder="Job title"
              value={formData.jobTitle}
            />
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-xs font-medium" htmlFor="additionalMessage">
            MESSAGE{' '}
            <span className="text-muted-foreground text-xxs">(Optional)</span>
          </Label>
          <Textarea
            id="additionalMessage"
            onChange={(e) => handleChange('additionalMessage', e.target.value)}
            placeholder="Any additional requests or information you'd like to share?"
            rows={4}
            value={formData.additionalMessage}
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <Checkbox
              checked={formData.marketingConsent}
              className="mt-1"
              id="marketingConsent"
              onCheckedChange={(checked) =>
                handleChange('marketingConsent', checked as boolean)
              }
              required
            />
            <Label className="text-sm text-zinc-600" htmlFor="marketingConsent">
              <p className="leading-tight">
                Yes, I want to learn how to develop and scale my app with
                industry insights and expert strategies to help me succeed{' '}
                <span className="text-muted-foreground text-xxs">
                  (Optional)
                </span>
              </p>
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              checked={formData.apiAccess}
              id="apiAccess"
              onCheckedChange={(checked) =>
                handleChange('apiAccess', checked as boolean)
              }
              required
            />
            <Label className="text-sm text-zinc-600" htmlFor="apiAccess">
              <p className="leading-tight">
                Yes, I’d like to explore a consultation to bring my app idea to
                life{' '}
                <span className="text-muted-foreground text-xxs">
                  (Optional)
                </span>
              </p>
            </Label>
          </div>
        </div>
      </div>

      <Button
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? 'Submitting...' : 'Download My App Idea Report'}
      </Button>
    </form>
  )

  const renderSuccessState = () => (
    <div className="text-center space-y-6 pt-6 pb-10 px-10">
      <div className="space-y-3">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto">
          <Check className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="font-publico-headline text-3xl">
          Your App Idea Report is Being Prepared
        </h3>
        <p className="text-zinc-700 text-lg">
          Our team is carefully reviewing your app idea to ensure you receive
          valuable insights. We'll notify you via email once your analysis is
          ready.
        </p>
      </div>
      <div className="bg-zinc-100 p-4 rounded-lg text-left">
        <h4 className="font-publico-text text-zinc-800 text-lg mb-2">
          Here's what happens next:
        </h4>
        {[
          {
            number: 1,
            title: 'Get a refined project scope tailored to your idea.',
          },
          {
            number: 2,
            title: 'Get a detailed cost estimate and development roadmap.',
          },
          {
            number: 3,
            title:
              'Get strategic recommendations for building and launching your app.',
          },
        ].map((step) => (
          <div className="flex items-center space-x-3 py-2" key={step.number}>
            <div className="inline-block py-1 px-1.5 bg-gray-200 rounded-full text-xxs font-bold">
              {step.number}
            </div>
            <div>
              <h6 className="text-sm">{step.title}</h6>
            </div>
          </div>
        ))}
      </div>
      <p className="text-zinc-600 text-sm">
        In the meantime, feel free to{' '}
        <Link
          className="underline hover:text-primary"
          href="/contact"
          target="_blank"
        >
          get in touch
          <ExternalLinkIcon className="size-3.5 -mt-0.5 underline ml-1 inline-block" />
        </Link>{' '}
        with a One X Digital Specialist to discuss your project.
      </p>

      <Button className="w-full" onClick={handleClose}>
        Return to App Idea Explorer
      </Button>
    </div>
  )

  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogContent className="md:max-w-xl p-0 gap-0 bg-card overflow-y-auto max-h-screen">
        <div className="p-6 space-y-4">
          {!isSubmitted && (
            <>
              <div className="pr-6">
                <h2 className="font-publico-headline tracking-wide text-2xl font-semibold mb-1">
                  Ready to Download Your App Idea Report?
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  Get a comprehensive report analyzing your app's feasibility,
                  market potential, and technical requirements. Fill out the
                  form below to receive your personalized insights.
                </p>
              </div>
              <hr className="border-zinc-200 dark:border-zinc-700" />
            </>
          )}

          {isSubmitted ? renderSuccessState() : renderForm()}
        </div>
      </DialogContent>
    </Dialog>
  )
}
