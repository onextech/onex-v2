import { useEffect, useRef } from 'react'
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
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [])

  return (
    <div className={cn('space-y-4', showAdditionalFields && 'p-4')}>
      <div className="space-y-2">
        <div
          className={cn(
            'flex justify-between items-center gap-2 transition-opacity opacity-0',
            'opacity-100 delay-100 ease-out'
          )}
        >
          <div className="flex items-center gap-1">
            <MessageCircle className="w-3.5 h-3.5 text-muted-foreground" />
            <label className="text-sm text-muted-foreground font-medium">
              Describe Your App
            </label>
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <InfoIcon className="w-4 h-4 text-zinc-500" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs text-sm">
                <p>
                  Describe your app idea in detail. What problem does it solve?
                  Who is it for? What are its main features?
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <Textarea
          className={cn(
            'w-full min-h-[120px] rounded-lg md:text-md text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:border-zinc-900 dark:focus-visible:border-zinc-100 resize-none',
            showAdditionalFields ? 'bg-zinc-100 dark:bg-zinc-800' : 'bg-card'
          )}
          onChange={(e) => {
            setAppIdea(e.target.value)
            adjustTextareaHeight(e.target as HTMLTextAreaElement)
          }}
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
          placeholder={`Describe your idea and features you'd like your app to have. For example: "An app where employees can..."`}
          ref={textareaRef}
          value={appIdea}
        />
      </div>

      {showAdditionalFields && (
        <SettingsForm onSettingsChange={onSettingsChange} settings={settings} />
      )}
    </div>
  )
}

function adjustTextareaHeight(element: HTMLTextAreaElement) {
  element.style.height = 'auto'
  element.style.height = `${element.scrollHeight}px`
}
