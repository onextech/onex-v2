'use client'

import type React from 'react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

export interface AppIdeaSample {
  description: string
  formValues: {
    appCategory: string
    appIdea: string
    appType: string
    industry: string
    platform: string
    targetAudience: string
  }
  title: string
}

interface AppIdeaCardProps {
  idea: AppIdeaSample
  onClick: () => void
  className?: string
}

export const AppIdeaCard: React.FC<AppIdeaCardProps> = ({
  idea,
  onClick,
  className,
}) => {
  return (
    <button
      className={cn(
        "group block text-left overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 ease-in-out hover:shadow-md dark:hover:shadow-zinc-800/30",
        className
      )}
      onClick={onClick}
    >
      <div className="p-4">
        <h3 className="font-medium text-sm text-zinc-900 dark:text-zinc-100 mb-1 truncate group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
          {idea.title}
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2 line-clamp-2 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
          {idea.description}
        </p>
        <div className="flex items-center justify-between mt-2">
          <Badge className="text-xs" variant="secondary">
            {idea.formValues.appCategory}
          </Badge>
          <span className="text-xs text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
            {idea.formValues.appType}
          </span>
        </div>
      </div>
    </button>
  )
} 