'use client'

import type React from 'react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Sparkles } from 'lucide-react'

import { AppIdeaGallery } from './app-idea-gallery'
import { ErrorGeneration } from './error-generation'
import { FormExplorer } from './form-generation'
import { HeaderExplorer } from './header-generation'
import { PreviewGeneration } from './preview-generation'
import { Testimonials } from './testimonials'

import '@/styles/marquee.css'

interface AppIdeaSettings {
  appCategory: string
  appType: string
  industry: string
  platform: string
  targetAudience: string
}

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
  appCategory: 'Productivity',
  appType: '',
  industry: 'technology',
  platform: 'web',
  targetAudience: 'customers',
}

export function AppIdeaExplorer() {
  const [showForm, setShowForm] = useState(true)
  const [showAdditionalFields, setShowAdditionalFields] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [appIdea, setAppIdea] = useState('')
  const [settings, setSettings] = useState<AppIdeaSettings>(defaultSettings)

  const handleSelectIdea = (formValues: {
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
    <div className="min-h-screen space-y-16 bg-muted">
      <div className="py-32 bg-card w-full">
        <div className="mb-4">
          <h1 className="font-publico-headline text-5xl font-bold mb-2 text-center">
            App Idea Explorer
          </h1>
          <p className="text-xl text-muted-foreground text-center">
            Tell us about your app idea, and we'll explore its potential
          </p>
        </div>

        <div
          className={cn(
            `group relative overflow-hidden w-full mx-auto transition-all duration-300 flex flex-col justify-between ${
              showAdditionalFields
                ? 'bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)]'
                : ''
            }`,
            showForm || isLoading ? 'max-w-lg' : 'max-w-5xl'
          )}
        >
          {showAdditionalFields && (
            <HeaderExplorer isLoading={isLoading} onReset={handleReset} />
          )}
          <div className="flex-1 overflow-hidden flex flex-col">
            {error && <ErrorGeneration error={error} />}

            {showForm ? (
              <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <FormExplorer
                  appIdea={appIdea}
                  onSettingsChange={setSettings}
                  setAppIdea={setAppIdea}
                  settings={settings}
                  showAdditionalFields={showAdditionalFields}
                />

                <div className="flex gap-2">
                  <Button
                    className="w-full flex items-center justify-center gap-2"
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
                  isLoading={isLoading}
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
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <AppIdeaGallery onSelectIdea={handleSelectIdea} />

      <Testimonials />

      <footer className="py-8 text-xs text-zinc-400 dark:text-zinc-500 max-w-2xl mx-auto text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} One X App Idea Explorer. All rights
          reserved.
        </p>
        <p>
          Disclaimer: The App Idea Explorer provides automated insights based on
          input data. While we strive for accuracy, all generated ideas,
          assessments, and analyses are for informational purposes only and
          should not be considered as professional advice. Users should conduct
          independent research before making business decisions. By using this
          tool, you acknowledge that any reliance on the provided insights is at
          your own risk.
        </p>
      </footer>
    </div>
  )
}
