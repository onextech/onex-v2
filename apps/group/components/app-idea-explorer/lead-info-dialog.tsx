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
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface LeadInfoDialogProps {
  onDialogClose: () => void
  onOpenChange: (open: boolean) => void
  open: boolean
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
}: LeadInfoDialogProps) {
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
    onDialogClose()
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

        <div className="grid grid-cols-2 gap-4">
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
            <Label className="text-xs font-medium" htmlFor="companySize">
              COMPANY SIZE{' '}
              <span className="text-muted-foreground text-xxs">(Optional)</span>
            </Label>
            <Select
              onValueChange={(value) => handleChange('companySize', value)}
              value={formData.companySize}
            >
              <SelectTrigger
                className={cn(!formData.companySize && 'text-muted-foreground')}
              >
                <SelectValue placeholder="Select your company size" />
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
            MESSAGE
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
        type="submit"
      >
        Download My App Idea Report
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
      <DialogContent className="md:max-w-xl p-0 gap-0 bg-card">
        <div className="p-6 space-y-4">
          {!isSubmitted && (
            <div className="pr-6">
              <h2 className="font-publico-headline tracking-wide text-2xl font-semibold mb-1">
                Ready to Download Your App Idea Report?
              </h2>
              <p className="text-muted-foreground text-sm mb-4">
                Get a comprehensive report analyzing your app's feasibility,
                market potential, and technical requirements. Fill out the form
                below to download your personalized insights.
              </p>
            </div>
          )}

          {/* Horizontal rule or line */}
          <hr className="border-zinc-200 dark:border-zinc-700" />

          {isSubmitted ? renderSuccessState() : renderForm()}
        </div>
      </DialogContent>
    </Dialog>
  )
}
