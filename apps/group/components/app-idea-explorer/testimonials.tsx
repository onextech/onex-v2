'use client'

import type React from 'react'
import { useEffect, useRef } from 'react'

import { PageSectionHeader } from '@/components/core/page-headers'
import { PageSectionDescription } from '@/components/core/section'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

interface Testimonial {
  avatar: string
  company: string
  content: string
  id: number
  name: string
  rating: number
  role: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    avatar: '/placeholder.svg?height=40&width=40',
    company: 'TechStart Solutions',
    content:
      "The App Idea Explorer was instrumental in helping us refine our initial concept. It provided valuable insights that we hadn't considered, ultimately leading to a more robust and marketable product.",
    name: 'Sarah Johnson',
    rating: 5,
    role: 'Founder & CEO',
  },
  {
    id: 2,
    avatar: '/placeholder.svg?height=40&width=40',
    company: 'InnovateTech',
    content:
      'As a technical co-founder, I was impressed by the depth of analysis provided by this tool. It helped us identify potential challenges early on and guided our development roadmap.',
    name: 'Michael Chen',
    rating: 4,
    role: 'CTO',
  },
  {
    id: 3,
    avatar: '/placeholder.svg?height=40&width=40',
    company: 'AppLaunch Inc.',
    content:
      "The App Idea Explorer gave us a comprehensive overview of our app's potential. It's like having a team of consultants at your fingertips. Highly recommended for any aspiring app entrepreneur!",
    name: 'Emily Rodriguez',
    rating: 5,
    role: 'Product Manager',
  },
  {
    id: 4,
    avatar: '/placeholder.svg?height=40&width=40',
    company: 'NextGen Apps',
    content:
      "This tool streamlined our ideation process and helped us validate our app concept quickly. It's an essential resource for anyone in the early stages of app development.",
    name: 'David Lee',
    rating: 5,
    role: 'Startup Founder',
  },
  {
    id: 5,
    avatar: '/placeholder.svg?height=40&width=40',
    company: 'Creative Digital',
    content:
      "The insights from App Idea Explorer helped us focus on the most critical features for our MVP. It's a great tool for aligning the team's vision and priorities.",
    name: 'Lisa Thompson',
    rating: 4,
    role: 'UX Designer',
  },
  {
    id: 6,
    avatar: '/placeholder.svg?height=40&width=40',
    company: 'GrowthHack Solutions',
    content:
      'The market analysis provided by this tool was spot-on. It helped us identify our target audience and potential competitors, giving us a head start in our marketing strategy.',
    name: 'Alex Patel',
    rating: 5,
    role: 'Marketing Director',
  },
]

export const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (scrollElement) {
      const { scrollWidth } = scrollElement
      const animationDuration = scrollWidth / 50 // Adjust speed here

      scrollElement.style.animationDuration = `${animationDuration}s`
    }
  }, [])

  return (
    <section className="container py-8">
      <div className="mb-4">
        <PageSectionHeader
          className="text-2xl"
          title="What business owners say"
        />
        <PageSectionDescription description="Testimonials from business owners" />
      </div>
      <div className="overflow-hidden">
        <div
          className="flex animate-marquee"
          ref={scrollRef}
          style={{
            width: `calc(250px * ${testimonials.length})`,
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card
              className="flex-shrink-0 w-[250px] mr-4 bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
              key={`${testimonial.id}-${index}`}
            >
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage
                      alt={testimonial.name}
                      src={testimonial.avatar}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 mb-2 line-clamp-4">
                  {testimonial.content}
                </p>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      className={`w-3 h-3 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-zinc-300 dark:text-zinc-600'
                      }`}
                      key={i}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
