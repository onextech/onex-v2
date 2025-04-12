'use client'

import React, { useEffect, useRef, useState } from 'react'

import { IdeaMarquee } from '@/components/app-idea-explorer/idea-marquee'
import {
  appCategories,
  appIndustrys,
  appPlatforms,
  appTargetAudiences,
  appTypesByCategory,
} from '@/components/app-idea-explorer/mocks'
import { appIdeaResultSchema } from '@/components/app-idea-explorer/schema'
import { AppIdeaSettings } from '@/components/app-idea-explorer/types'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { cn } from '@onex/utils'
import { experimental_useObject as useObject } from '@ai-sdk/react'
import { sendGTMEvent } from '@next/third-parties/google'
import { Sparkles } from 'lucide-react'
import Link from 'next/link'

import { AppIdeaForm } from './app-idea-form'
import { ErrorGeneration } from './error-generation'
import { HeaderExplorer } from './form-header'
import { PreviewGeneration } from './preview-generation'
import { SampleGallery } from './sample-gallery'
import { Testimonials } from './testimonials'

import '@/styles/marquee.css'

const defaultSettings: AppIdeaSettings = {
  appCategory: appCategories[0],
  appType: appTypesByCategory[appCategories[0]][0],
  industry: '',
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [delayedMousePosition, setDelayedMousePosition] = useState({
    x: 0,
    y: 0,
  })

  const {
    submit,
    object: generatedObject,
    isLoading: isGenerating,
    stop,
  } = useObject({
    api: '/api/use-object',
    schema: appIdeaResultSchema,
  })

  const handleGenerate = () => submit({ appIdea, appSettings: settings })

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
      // Fire LLM call
      handleGenerate()

      // Send Google Tag Manager event using Next.js third-party integration
      sendGTMEvent({
        event: 'app_idea_explorer_submission',
        value: JSON.stringify({
          app_idea: appIdea,
          app_category: settings.appCategory,
          app_type: settings.appType,
          industry: settings.industry,
          platform: settings.platform,
          target_audience: settings.targetAudience,
        }),
      })

      setShowForm(false)
    } catch {
      setError('Failed to generate analysis. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleClear = () => {
    setShowAdditionalFields(false)
    setShowForm(true)
    setError(null)
    // Scroll to the top of the page
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }

  const handleReset = () => {
    setAppIdea('')
    setSettings(defaultSettings)
    handleClear()
  }

  const handleRetry = () => {
    handleClear()
  }

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  // Add smooth delay effect to mouse movement
  useEffect(() => {
    const smoothFactor = 0.15 // Adjust this value to control the smoothness (lower = more delay)

    const animatePosition = () => {
      setDelayedMousePosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * smoothFactor,
        y: prev.y + (mousePosition.y - prev.y) * smoothFactor,
      }))

      requestAnimationFrame(animatePosition)
    }

    const animationId = requestAnimationFrame(animatePosition)
    return () => cancelAnimationFrame(animationId)
  }, [mousePosition])

  return (
    <div className="min-h-screen bg-muted">
      {/* Hero */}
      <div
        className={cn(
          'pt-16 md:pt-20 pb-16 w-full relative flex items-center justify-center before:absolute before:inset-0 before:bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] before:bg-[size:4rem_4rem] before:pointer-events-none before:opacity-20 overflow-hidden',
          showAdditionalFields
            ? 'bg-zinc-900'
            : 'bg-gradient-to-b to-black from-zinc-800'
        )}
      >
        {/* Mouse-following gradient overlay */}
        {showForm && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle 800px at ${delayedMousePosition.x}px ${delayedMousePosition.y}px, rgba(125, 90, 255, 0.8) 0%, rgba(45, 212, 191, 0.5) 25%, transparent 70%)`,
              opacity: 0.2,
              filter: 'blur(80px)',
              zIndex: 0,
            }}
          />
        )}
        <div className="container relative">
          <div className="md:px-8">
            {/* Title */}
            <div className="dark max-w-xl mx-auto mb-8">
              <div className="text-center mb-12">
                <Link href="/">
                  <Logo className="w-[120px] inline-block fill-white" />
                </Link>
              </div>
              <h1 className="font-publico-headline text-foreground text-5xl mb-4 text-center">
                App Idea Explorer
              </h1>
              <p className="text-xl text-muted-foreground text-center">
                Describe your app idea and find out if it can be built
                instantly. Get access to an in-depth breakdown of what's
                required and actionable steps to bring your idea to life.
              </p>
            </div>

            {/* Form */}
            <section
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
                  onRetry={handleRetry}
                  setIsDialogOpen={setIsDialogOpen}
                  showForm={showForm}
                />
              )}

              <div className="flex-1 overflow-hidden flex flex-col">
                {error && <ErrorGeneration error={error} />}

                {showForm ? (
                  <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                        showAdditionalFields ? 'pb-4 px-4' : 'dark',
                        appIdea &&
                          'visible opacity-100 delay-200 duration-1000 ease-in-out'
                      )}
                    >
                      <Button
                        className="h-11 rounded-full w-full flex items-center justify-center gap-2"
                        size="lg"
                        type="submit"
                        variant={showAdditionalFields ? 'default' : 'secondary'}
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
                      onDialogClose={handleReset}
                      onReset={handleReset}
                      result={generatedObject}
                      setIsDialogOpen={setIsDialogOpen}
                      settings={settings}
                    />
                  </div>
                )}
              </div>
            </section>

            <IdeaMarquee
              className="mt-10 md:mt-14"
              onSelectIdea={handleSelectIdeaSample}
            />
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
