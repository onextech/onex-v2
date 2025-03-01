'use client'

import type React from 'react'
import { cn } from '@/lib/utils'
import Marquee from 'react-fast-marquee'

import { appIdeas } from '@/components/app-idea-explorer/mocks'
import { AppIdeaCard, type AppIdeaSample } from '@/components/app-idea-explorer/app-idea-card'

interface IdeaMarqueeProps {
  className?: string
  onSelectIdea: (formValues: AppIdeaSample['formValues']) => void
}

export const IdeaMarquee: React.FC<IdeaMarqueeProps> = ({
  className,
  onSelectIdea,
}) => {
  return (
    <div className={cn("dark", className)}>
      <div className="dark flex items-center justify-between mb-2">
        <h5 className="text-sm text-muted-foreground font-medium">Or Try These Ideas</h5>
      </div>
      
      <Marquee
        pauseOnHover
        speed={40}
        gradient
        gradientColor="black"
        gradientWidth={100}
      >
        <div className="flex gap-3">
          {appIdeas.map((idea, index) => (
            <AppIdeaCard
              className='w-[320px]'
              key={index}
              idea={idea}
              onClick={() => onSelectIdea(idea.formValues)}
            />
          ))}
        </div>
      </Marquee>
    </div>
  )
}