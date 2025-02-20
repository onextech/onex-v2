'use client'

import type React from 'react'
import { useState } from 'react'

import { appIdeas } from '@/components/app-idea-explorer/mocks'
import { PageSectionHeader } from '@/components/core/page-headers'
import { PageSectionDescription } from '@/components/core/section'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

interface AppIdeaSample {
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

interface SampleGalleryProps {
  onSelectIdea: (formValues: AppIdeaSample['formValues']) => void
}

export const SampleGallery: React.FC<SampleGalleryProps> = ({
  onSelectIdea,
}) => {
  const [visibleIdeas, setVisibleIdeas] = useState(8)

  const loadMoreIdeas = () => {
    setVisibleIdeas((prevVisible) =>
      Math.min(prevVisible + 16, appIdeas.length)
    )
  }

  return (
    <div className="container">
      <div className="mb-4">
        <PageSectionHeader className="text-2xl" title="From the Community" />
        <PageSectionDescription description="Explore app ideas" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {appIdeas.slice(0, visibleIdeas).map((idea, index) => (
          <button
            className="group block text-left overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 ease-in-out hover:shadow-md dark:hover:shadow-zinc-800/30"
            key={index}
            onClick={() => onSelectIdea(idea.formValues)}
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
        ))}
      </div>
      {visibleIdeas < appIdeas.length && (
        <div className="mt-8 text-center">
          <Button
            className="inline-flex items-center"
            onClick={loadMoreIdeas}
            variant="outline"
          >
            Load More
            <ChevronDown className="w-4 h-4 ml-1" />
          </Button>
        </div>
      )}
    </div>
  )
}
