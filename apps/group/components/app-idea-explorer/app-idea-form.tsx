import { useState } from 'react'
import type React from 'react'

import { Textarea } from '@/components/ui/textarea'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { InfoIcon, MessageCircle } from 'lucide-react'

import { SettingsForm } from './settings-form'

interface AppIdeaSettings {
  appCategory: string
  appType: string
  industry: string
  platform: string
  targetAudience: string
}

interface FormProps {
  appIdea: string
  onSettingsChange: (settings: AppIdeaSettings) => void
  setAppIdea: (idea: string) => void
  settings: AppIdeaSettings
  showAdditionalFields: boolean
}

export const AppIdeaForm: React.FC<FormProps> = ({
  appIdea,
  onSettingsChange,
  setAppIdea,
  settings,
  showAdditionalFields,
}) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={cn('space-y-4', showAdditionalFields && 'p-4')}>
      <div className="space-y-2">
        <div
          className={cn(
            'flex items-center gap-2 transition-opacity opacity-0',
            (isFocused || showAdditionalFields) &&
              'opacity-100 delay-100 ease-out'
          )}
        >
          <MessageCircle className="w-3.5 h-3.5 text-zinc-500" />
          <span className="text-sm text-zinc-500">App Idea</span>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="relative">
                <Textarea
                  className={cn(
                    'w-full text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 rounded-xl focus:outline-none focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:border-zinc-900 dark:focus-visible:border-zinc-100 min-h-[80px] resize-none',
                    showAdditionalFields
                      ? 'bg-zinc-100 dark:bg-zinc-800'
                      : 'bg-card'
                  )}
                  onBlur={() => setIsFocused(false)}
                  onChange={(e) => {
                    setAppIdea(e.target.value)
                    adjustTextareaHeight(e.target as HTMLTextAreaElement)
                  }}
                  onFocus={() => setIsFocused(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.shiftKey) {
                      e.preventDefault()
                      const textarea = e.target as HTMLTextAreaElement
                      const { selectionEnd, selectionStart, value } = textarea
                      const newValue = `${value.slice(
                        0,
                        Math.max(0, selectionStart)
                      )}\n${value.slice(Math.max(0, selectionEnd))}`
                      textarea.value = newValue
                      textarea.selectionStart = textarea.selectionEnd =
                        selectionStart + 1
                      adjustTextareaHeight(textarea)
                    }
                  }}
                  placeholder="Describe your app idea..."
                  value={appIdea}
                />
                <InfoIcon className="w-4 h-4 text-zinc-500 absolute top-2 right-2" />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                Describe your app idea in detail. What problem does it solve?
                Who is it for? What are its main features?
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {showAdditionalFields && (
        <SettingsForm
          onSettingsChange={onSettingsChange}
          settings={settings}
        />
      )}
    </div>
  )
}

function adjustTextareaHeight(element: HTMLTextAreaElement) {
  element.style.height = 'auto'
  element.style.height = `${element.scrollHeight}px`
}
