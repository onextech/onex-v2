'use client'

import React, { useState } from 'react'

import {
  appCategories,
  appIndustrys,
  appPlatforms,
  appTargetAudiences,
  appTypesByCategory,
} from '@/components/app-idea-explorer/mocks'
import { AppIdeaSettings } from '@/components/app-idea-explorer/types'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Sparkles } from 'lucide-react'
import Link from 'next/link'

import { AppIdeaForm } from './app-idea-form'
import { ErrorGeneration } from './error-generation'
import { HeaderExplorer } from './form-header'
import { PreviewGeneration } from './preview-generation'
import { SampleGallery } from './sample-gallery'
import { Testimonials } from './testimonials'

import '@/styles/marquee.css'

interface AppIdeaResult {
  businessModel: {
    monetizationStrategies: string[]
    revenueStreams: string[]
  }
  competitiveLandscape: string
  estimatedTimeline: string
  feasibility: string
  keyFeatures: string[]
  marketPotential: string
  nextSteps: string[]
  potentialChallenges: string[]
  productScope: {
    integrationAndScalability: string
    mvpFeatures: string[]
    niceToHaveFeatures: string[]
    technicalRequirements: string
  }
  scalabilityPotential: string
  summary: string
  targetUserBase: string
  technicalFeasibility: {
    complexityRating: string
    estimatedEffort: string
    techStack: string[]
  }
}

const defaultSettings: AppIdeaSettings = {
  appCategory: appCategories[0],
  appType: appTypesByCategory[appCategories[0]][0],
  industry: appIndustrys[0],
  platform: appPlatforms[0],
  targetAudience: appTargetAudiences[0],
}

export function AppIdeaExplorer() {
  const [showForm, setShowForm] = useState(true)
  const [showAdditionalFields, setShowAdditionalFields] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [appIdea, setAppIdea] = useState('')
  const [settings, setSettings] = useState<AppIdeaSettings>(defaultSettings)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSelectIdeaSample = (formValues: {
    appCategory: string
    appIdea: string
    appType: string
    industry: string
    platform: string
    targetAudience: string
  }) => {
    setAppIdea(formValues.appIdea)
    setSettings({
      appCategory: formValues.appCategory,
      appType: formValues.appType,
      industry: formValues.industry,
      platform: formValues.platform,
      targetAudience: formValues.targetAudience,
    })
    setShowAdditionalFields(true)
    setShowForm(true)
    setIsLoading(false)
    setError(null)
    // Scroll to the top of the page
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!showAdditionalFields) {
      setShowAdditionalFields(true)
      return
    }
    setShowForm(false)
    setIsLoading(true)
    setError(null)

    try {
      // TODO@Joel: Add LLM call here. Run useObject call here with stream
      await new Promise((resolve) => setTimeout(resolve, 3000))
      setShowForm(false)
    } catch {
      setError('Failed to generate analysis. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setAppIdea('')
    setSettings(defaultSettings)
    setShowAdditionalFields(false)
    setShowForm(true)
    setError(null)
  }

  return (
    <div className="min-h-screen bg-muted">
      {/* Hero */}
      <div className="pt-32 pb-16 w-full dark:bg-black bg-zinc-50 dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
        {/* Card */}
        <div className="container relative">
          <div className="max-h-[300px] absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_0%,_rgba(0,0,0,0)_70%)]" />
          <div className="relative md:px-8">
            <div>
              {/* Title */}
              <div className="max-w-xl mx-auto mb-8">
                <div className="text-center mb-6">
                  <Link href="/">
                    <Logo className="w-[120px] inline-block" />
                  </Link>
                </div>
                <h1 className="font-publico-headline text-5xl font-bold mb-4 text-center">
                  App Idea Explorer
                </h1>
                <p className="text-xl text-muted-foreground text-center">
                  Describe your app idea and find out if it can be built
                  instantly. Get access to an in-depth breakdown of what’s
                  required and actionable steps to bring your idea to life.
                </p>
              </div>

              {/* Form */}
              <div
                className={cn(
                  `group relative overflow-hidden w-full mx-auto transition-all duration-300 ease-in-out flex flex-col justify-between ${
                    showAdditionalFields
                      ? 'max-h-[800px] bg-card dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)]'
                      : 'max-h-[300px]'
                  }`,
                  showForm || isLoading ? 'max-w-xl' : 'max-w-5xl',
                  !showForm && 'max-h-auto'
                )}
              >
                {showAdditionalFields && (
                  <HeaderExplorer
                    isLoading={isLoading}
                    onReset={handleReset}
                    setIsDialogOpen={setIsDialogOpen}
                    showForm={showForm}
                  />
                )}
                <div className="flex-1 overflow-hidden flex flex-col">
                  {error && <ErrorGeneration error={error} />}

                  {showForm ? (
                    <form
                      className="flex flex-col gap-4"
                      onSubmit={handleSubmit}
                    >
                      <AppIdeaForm
                        appIdea={appIdea}
                        onSettingsChange={setSettings}
                        setAppIdea={setAppIdea}
                        settings={settings}
                        showAdditionalFields={showAdditionalFields}
                      />

                      <div
                        className={cn(
                          'flex gap-2 opacity-0 invisible transition-opacity',
                          showAdditionalFields && 'pb-4 px-4',
                          appIdea &&
                            'visible opacity-100 delay-200 duration-1000 ease-in-out'
                        )}
                      >
                        <Button
                          className="h-11 rounded-full w-full flex items-center justify-center gap-2"
                          size="lg"
                          type="submit"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          Explore Idea
                        </Button>
                      </div>
                    </form>
                  ) : (
                    // Preview/Results
                    <div>
                      <PreviewGeneration
                        appIdea={appIdea}
                        isDialogOpen={isDialogOpen}
                        isLoading={isLoading}
                        onDialogClose={() => {
                          handleReset()
                        }}
                        onReset={handleReset}
                        result={
                          isLoading
                            ? {
                                businessModel: {
                                  monetizationStrategies: [],
                                  revenueStreams: [],
                                },
                                competitiveLandscape: '',
                                estimatedTimeline: '',
                                feasibility: '',
                                keyFeatures: [],
                                marketPotential: '',
                                nextSteps: [],
                                potentialChallenges: [],
                                productScope: {
                                  integrationAndScalability: '',
                                  mvpFeatures: [],
                                  niceToHaveFeatures: [],
                                  technicalRequirements: '',
                                },
                                scalabilityPotential: '',
                                summary: '',
                                targetUserBase: '',
                                technicalFeasibility: {
                                  complexityRating: '',
                                  estimatedEffort: '',
                                  techStack: [],
                                },
                              }
                            : {
                                businessModel: {
                                  monetizationStrategies: [
                                    'Freemium model',
                                    'In-app purchases',
                                    'Sponsored content',
                                  ],
                                  revenueStreams: [
                                    'Premium subscriptions',
                                    'Marketplace commission',
                                    'Targeted advertising',
                                  ],
                                },
                                competitiveLandscape: 'Moderate',
                                estimatedTimeline: '6-8 months',
                                feasibility: 'High',
                                keyFeatures: [
                                  'User profiles for pet owners',
                                  'Social feed for pet updates',
                                  'Event organization for pet meetups',
                                  'Marketplace for pet products',
                                ],
                                marketPotential: 'Medium-High',
                                nextSteps: [
                                  'Conduct user research',
                                  'Create a detailed product roadmap',
                                  'Develop a prototype',
                                  'Seek initial funding or bootstrap',
                                ],
                                potentialChallenges: [
                                  'User acquisition and retention',
                                  'Content moderation',
                                  'Monetization strategy',
                                ],
                                productScope: {
                                  integrationAndScalability:
                                    'Scalable cloud architecture, potential integration with existing pet service APIs',
                                  mvpFeatures: [
                                    'User profiles',
                                    'Social feed',
                                    'Basic event creation',
                                  ],
                                  niceToHaveFeatures: [
                                    'AI-powered pet recommendations',
                                    'Virtual pet playdates',
                                  ],
                                  technicalRequirements:
                                    'Mobile app development, cloud infrastructure, database management',
                                },
                                scalabilityPotential: 'High',
                                summary:
                                  "Your app idea for a social media platform for pet owners shows promise. Here's a comprehensive analysis:",
                                targetUserBase: '1M+ pet owners',
                                technicalFeasibility: {
                                  complexityRating: 'Medium',
                                  estimatedEffort: '4-6 months',
                                  techStack: [
                                    'React Native',
                                    'Node.js',
                                    'MongoDB',
                                    'AWS',
                                  ],
                                },
                              }
                        }
                        setIsDialogOpen={setIsDialogOpen}
                        settings={settings}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SampleGallery onSelectIdea={handleSelectIdeaSample} />

      <Testimonials />

      <footer className="py-8">
        <div className="container">
          <div className="text-xs text-zinc-400 dark:text-zinc-500 max-w-2xl mx-auto text-center">
            <p className="mb-2">
              © {new Date().getFullYear()} One X App Idea Explorer. All rights
              reserved.
            </p>
            <p>
              Disclaimer: The App Idea Explorer provides automated insights
              based on input data. While we strive for accuracy, all generated
              ideas, assessments, and analyses are for informational purposes
              only and should not be considered as professional advice. Users
              should conduct independent research before making business
              decisions. By using this tool, you acknowledge that any reliance
              on the provided insights is at your own risk.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
