'use client'

import type React from 'react'
import Marquee from 'react-fast-marquee'

import {
  AppIdeaCard,
  type AppIdeaSample,
} from '@/components/app-idea-explorer/app-idea-card'
import { appIdeas } from '@/components/app-idea-explorer/mocks'
import { cn } from '@/lib/utils'

interface IdeaMarqueeProps {
  className?: string
  onSelectIdea: (formValues: AppIdeaSample['formValues']) => void
}

export const IdeaMarquee: React.FC<IdeaMarqueeProps> = ({
  className,
  onSelectIdea,
}) => {
  return (
    <div className={cn('dark', className)}>
      <div className="dark flex items-center justify-between mb-2">
        <h5 className="text-sm text-muted-foreground font-medium">
          Or Try These Ideas
        </h5>
      </div>

      <Marquee
        gradient
        gradientColor="black"
        gradientWidth={100}
        pauseOnHover
        speed={40}
      >
        <div className="flex gap-3">
          {appIdeas.map((idea, index) => (
            <AppIdeaCard
              className="w-[320px]"
              idea={idea}
              key={index}
              onClick={() => onSelectIdea(idea.formValues)}
            />
          ))}
        </div>
      </Marquee>
    </div>
  )
}
