'use client'

import type React from 'react'
import { useState } from 'react'

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
import { Textarea } from '@/components/ui/textarea'
import { Check, X } from 'lucide-react'

interface LeadInfoDialogProps {
  onOpenChange: (open: boolean) => void
  open: boolean
}

const defaultFormData = {
  additionalMessage: '',
  apiAccess: false,
  businessEmail: '',
  companyName: '',
  companySize: '',
  firstName: '',
  jobTitle: '',
  lastName: '',
  marketingConsent: false,
  phoneNumber: '',
}

export function LeadInfoDialog({ onOpenChange, open }: LeadInfoDialogProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState(defaultFormData)

  const handleChange = (field: string, value: boolean | string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    setIsSubmitted(true)
  }

  const handleClose = () => {
    setIsSubmitted(false)
    setFormData(defaultFormData)
    onOpenChange(false)
  }

  const renderStepper = () => (
    <div className="flex items-center justify-center gap-2 my-6">
      {[1, 2, 3].map((i) => (
        <div className="flex items-center" key={i}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
            <Check className="w-5 h-5" />
          </div>
          {i < 3 && <div className="h-[2px] w-16 bg-primary" />}
        </div>
      ))}
    </div>
  )

  const renderForm = () => (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label className="text-xs font-medium" htmlFor="firstName">
            FIRST NAME*
          </Label>
          <Input
            className="border-zinc-300"
            id="firstName"
            onChange={(e) => handleChange('firstName', e.target.value)}
            placeholder="First name"
            required
            value={formData.firstName}
          />
        </div>
        <div className="space-y-1">
          <Label className="text-xs font-medium" htmlFor="lastName">
            LAST NAME*
          </Label>
          <Input
            className="border-zinc-300"
            id="lastName"
            onChange={(e) => handleChange('lastName', e.target.value)}
            placeholder="Last name"
            required
            value={formData.lastName}
          />
        </div>
      </div>

      <div className="space-y-1">
        <Label className="text-xs font-medium" htmlFor="businessEmail">
          BUSINESS EMAIL*
        </Label>
        <Input
          className="border-zinc-300"
          id="businessEmail"
          onChange={(e) => handleChange('businessEmail', e.target.value)}
          placeholder="Business email"
          required
          type="email"
          value={formData.businessEmail}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label className="text-xs font-medium" htmlFor="phoneNumber">
            PHONE NUMBER*
          </Label>
          <div className="flex">
            <div className="flex-shrink-0">
              <Select>
                <SelectTrigger className="w-[100px] border-zinc-300 rounded-r-none">
                  <SelectValue placeholder="+65" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+65">+65</SelectItem>
                  <SelectItem value="+1">+1</SelectItem>
                  <SelectItem value="+44">+44</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input
              className="border-zinc-300 rounded-l-none"
              id="phoneNumber"
              onChange={(e) => handleChange('phoneNumber', e.target.value)}
              placeholder="Phone number"
              required
              type="tel"
              value={formData.phoneNumber}
            />
          </div>
        </div>
        <div className="space-y-1">
          <Label className="text-xs font-medium" htmlFor="jobTitle">
            JOB TITLE (Optional)
          </Label>
          <Input
            className="border-zinc-300"
            id="jobTitle"
            onChange={(e) => handleChange('jobTitle', e.target.value)}
            placeholder="Job title"
            value={formData.jobTitle}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label className="text-xs font-medium" htmlFor="companyName">
            COMPANY NAME (Optional)
          </Label>
          <Input
            className="border-zinc-300"
            id="companyName"
            onChange={(e) => handleChange('companyName', e.target.value)}
            placeholder="Company name"
            value={formData.companyName}
          />
        </div>
        <div className="space-y-1">
          <Label className="text-xs font-medium" htmlFor="companySize">
            COMPANY SIZE (Optional)
          </Label>
          <Select
            onValueChange={(value) => handleChange('companySize', value)}
            value={formData.companySize}
          >
            <SelectTrigger className="border-zinc-300">
              <SelectValue placeholder="Please select your company size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1-10 employees</SelectItem>
              <SelectItem value="11-50">11-50 employees</SelectItem>
              <SelectItem value="51-200">51-200 employees</SelectItem>
              <SelectItem value="201-500">201-500 employees</SelectItem>
              <SelectItem value="501+">501+ employees</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-1">
        <Label className="text-xs font-medium" htmlFor="additionalMessage">
          ADDITIONAL REQUESTS/MESSAGE
        </Label>
        <Textarea
          className="border-zinc-300"
          id="additionalMessage"
          onChange={(e) => handleChange('additionalMessage', e.target.value)}
          placeholder="Any additional requests or message"
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
          />
          <Label className="text-sm text-zinc-600" htmlFor="marketingConsent">
            I agree to receive app development insights, market trends, and
            other valuable resources from App Idea Explorer.
          </Label>
        </div>
        <div className="flex items-start space-x-2">
          <Checkbox
            checked={formData.apiAccess}
            className="mt-1"
            id="apiAccess"
            onCheckedChange={(checked) =>
              handleChange('apiAccess', checked as boolean)
            }
          />
          <Label className="text-sm text-zinc-600" htmlFor="apiAccess">
            I am interested in receiving a consultation about developing my app
            idea with expert developers.
          </Label>
        </div>
      </div>

      <Button
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        type="submit"
      >
        Submit
      </Button>
    </form>
  )

  const renderSuccessState = () => (
    <div className="text-center space-y-4">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
        <Check className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-zinc-900">Thank You!</h3>
      <p className="text-zinc-600">
        Your submission was successful. We'll analyze your request and your
        app's features and get back to you within one or two business days.
      </p>
      {renderStepper()}
      <div className="text-left space-y-2">
        <h4 className="font-semibold text-zinc-800">Next Steps:</h4>
        <ol className="list-decimal list-inside text-sm text-zinc-600">
          <li>Our team will review your app idea and requirements</li>
          <li>
            We'll prepare a detailed analysis of your app's feasibility and
            market potential
          </li>
          <li>
            You'll receive an email with your personalized report and further
            recommendations
          </li>
          <li>
            If requested, we'll schedule a consultation to discuss your app idea
            in more detail
          </li>
        </ol>
      </div>
      <Button
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        onClick={handleClose}
      >
        Close
      </Button>
    </div>
  )

  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogContent className="sm:max-w-[600px] p-0 gap-0 bg-white">
        <button
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-zinc-100 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 dark:data-[state=open]:bg-zinc-800"
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        <div className="p-6 pt-8">
          {!isSubmitted && (
            <>
              <h2 className="text-2xl font-semibold text-zinc-900 mb-2">
                Ready to receive your detailed app idea analysis?
              </h2>
              <p className="text-zinc-600 mb-6">
                Get a comprehensive report analyzing your app's feasibility,
                market potential, and technical requirements. Fill out the form
                below to download your personalized insights.
              </p>
            </>
          )}

          {isSubmitted ? renderSuccessState() : renderForm()}
        </div>
      </DialogContent>
    </Dialog>
  )
}
