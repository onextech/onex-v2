'use client'

import React, { useCallback, useEffect, useState } from 'react'

import {
  calculateFeasibilityScore,
  getFeasibilityLabel,
} from '@/components/app-idea-explorer/calculate-feasibility-score'
import { GaugeChart } from '@/components/app-idea-explorer/gauge-chart'
import { appTechstack } from '@/components/app-idea-explorer/mocks'
import {
  AppIdeaResult,
  AppIdeaSettings,
} from '@/components/app-idea-explorer/types'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import startCase from 'lodash/startCase'
import {
  BarChart2,
  Calendar,
  Check,
  Clock,
  DollarSign,
  Link,
  List,
  Loader2,
  Plug,
  Rocket,
  Settings,
  Square,
  ThumbsUp,
  TrendingUp,
} from 'lucide-react'

import { LeadInfoDialog } from './lead-info-dialog'

const isGreyMainCard = true

interface PreviewProps {
  appIdea: string
  isDialogOpen: boolean
  isLoading: boolean
  onDialogClose: () => void
  onReset: () => void
  result?: AppIdeaResult
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
  settings: AppIdeaSettings
}

export const PreviewGeneration = ({
  appIdea,
  isDialogOpen,
  isLoading,
  onDialogClose,
  onReset,
  result,
  setIsDialogOpen,
  settings,
}: PreviewProps) => {
  const availableTexts = [
    'Analyzing market trends...',
    'Evaluating technical feasibility...',
    'Assessing user demand...',
  ]
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  const isExternalFacingApp = ['Clients', 'Consumers'].includes(
    settings.targetAudience
  )

  // Loading state effect
  useEffect(() => {
    if (!isLoading) {
      setProgress(0)
      return
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => clearInterval(interval)
  }, [isLoading])
  useEffect(() => {
    if (!isLoading) return

    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % availableTexts.length)
    }, 1000)

    return () => clearInterval(interval)
  }, [isLoading])

  // Run function with mock data
  const feasibilityScore = calculateFeasibilityScore(result.feasibilityFactors)

  const renderRecommendation = () => {
    return (
      <div className="bg-white dark:bg-zinc-800 rounded-lg">
        <h4 className="text-lg font-semibold mb-3 flex items-center">
          <ThumbsUp className="mr-2 size-4 text-zinc-300" />
          Tech Feasibility Score
        </h4>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
          Based on our analysis, your app idea shows promise and could be worth
          pursuing. Consider the following factors:
        </p>
        <div className="md:w-3/4 mx-auto mb-4">
          <GaugeChart
            content={
              <div className="">
                <h6 className="font-bold uppercase leading-none tracking-wide text-5xl md:text-2xl">
                  {feasibilityScore}%
                </h6>
                <p className="font-medium uppercase leading-none tracking-wide text-muted-foreground md:text-xs mt-1 md:mt-0">
                  {getFeasibilityLabel(feasibilityScore)}
                </p>
              </div>
            }
            value={feasibilityScore}
          />
        </div>
      </div>
    )
  }

  const renderSection = useCallback(
    (
      title: string,
      icon: React.ReactNode,
      overline: string,
      content: React.ReactNode,
      isBlurred?: boolean
    ) => {
      return (
        <div className="relative bg-card rounded-lg p-4">
          <div className="flex items-center gap-1.5 mb-1">
            {icon}
            <span className="text-xs uppercase font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
              {overline}
            </span>
          </div>
          <h4 className="text-lg font-semibold mb-2">{title}</h4>

          <div className={cn('relative', isBlurred && 'border rounded-lg')}>
            {isBlurred && (
              <div className="absolute inset-0 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm flex items-center justify-center rounded-lg">
                <Button
                  className="shadow-md"
                  onClick={() => setIsDialogOpen(true)}
                  size="sm"
                  variant="outline"
                >
                  Download Full Report
                </Button>
              </div>
            )}

            <div className={isBlurred ? 'select-none pointer-events-none' : ''}>
              <div
                className={cn(
                  'border',
                  'space-y-4',
                  'p-4 rounded-xl shadow-sm',
                  isGreyMainCard && 'bg-zinc-50 dark:bg-zinc-800/50'
                )}
              >
                {isBlurred ? (
                  <div>
                    <p className="text-sm">
                      <strong>Key Point 1:</strong> Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Suspendisse varius enim in
                      eros elementum tristique. Duis cursus, mi quis viverra
                      ornare.
                    </p>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li>
                        <strong>Key Point 2:</strong> Placeholder text
                        describing an important feature or insight.
                      </li>
                      <li>
                        <strong>Key Point 3:</strong> Additional details about
                        the topic with structured formatting.
                      </li>
                      <li>
                        <strong>Key Point 4:</strong> More supporting
                        information to illustrate key aspects.
                      </li>
                    </ul>
                  </div>
                ) : (
                  content
                )}
              </div>
            </div>
          </div>
        </div>
      )
    },
    [setIsDialogOpen]
  )

  if (isLoading) {
    return (
      <Card className="w-full max-w-xl mx-auto border-0 shadow-none bg-transparent">
        <CardContent className="flex flex-col items-center gap-4 px-6 py-16">
          <div className="relative w-12 h-12">
            <Loader2 className="w-full h-full animate-spin" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-zinc-500/10 rounded-full animate-spin-slow" />
          </div>
          <div className="space-y-1 text-center">
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {availableTexts[currentTextIndex]}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Analyzing your app idea...
            </p>
          </div>
          <div className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div
      className={`flex flex-col items-start gap-4 w-full ${
        isLoading ? 'max-w-sm' : 'max-w-5xl'
      }`}
    >
      {/* Title */}
      <div>
        {appIdea && (
          <div className="py-6 px-4 border-b w-full text-center">
            <h6 className="mb-2 text-muted-foreground uppercase font-medium tracking-wide text-xs">
              App Idea
            </h6>
            <h3 className="leading-tight text-2xl font-semibold mb-1">
              {result.name}
            </h3>
            <p className="max-w-lg mx-auto italic">"{appIdea}"</p>
          </div>
        )}

        {/* Results Grid */}
        <div className="grid grid-cols-12">
          {/* Right */}
          <div className="col-span-12 md:order-2 md:col-span-4 p-4 md:border-l">
            {renderRecommendation()}

            <Separator className="my-4" />

            <div className="space-y-8">
              {/* Analysis */}
              <div className="space-y-1">
                <h6 className="uppercase font-medium text-xxs tracking-wide">
                  Analysis
                </h6>

                <div className="w-full p-3 space-y-2 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">
                      Compliance Requirements
                    </span>
                    <span className="text-zinc-900 dark:text-zinc-100 text-right">
                      {(() => {
                        switch (
                          result.feasibilityFactors.complianceRequirements
                        ) {
                          case 1: {
                            return 'None'
                          }
                          case 2: {
                            return 'Minimal'
                          }
                          case 3: {
                            return 'Moderate'
                          }
                          case 4: {
                            return 'Strict'
                          }
                          case 5: {
                            return 'Very Strict'
                          }
                          default: {
                            return 'Unknown'
                          }
                        }
                      })()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">
                      Customization Required
                    </span>
                    <span className="text-zinc-900 dark:text-zinc-100 text-right">
                      {(() => {
                        switch (
                          result.feasibilityFactors.customFrameworksRequired
                        ) {
                          case 1: {
                            return 'Many Pre-built Options'
                          }
                          case 2: {
                            return 'Mostly Pre-built'
                          }
                          case 3: {
                            return 'Balanced'
                          }
                          case 4: {
                            return 'Mostly Custom'
                          }
                          case 5: {
                            return 'Fully Custom'
                          }
                          default: {
                            return 'Unknown'
                          }
                        }
                      })()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Development Time</span>
                    <span className="text-zinc-900 dark:text-zinc-100 text-right">
                      {(() => {
                        switch (result.feasibilityFactors.developmentTime) {
                          case 1: {
                            return '<1 month'
                          }
                          case 2: {
                            return '1-3 months'
                          }
                          case 3: {
                            return '3-6 months'
                          }
                          case 4: {
                            return '6-12 months'
                          }
                          case 5: {
                            return '>12 months'
                          }
                          default: {
                            return 'Unknown'
                          }
                        }
                      })()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Expertise Required</span>
                    <span className="text-zinc-900 dark:text-zinc-100 text-right">
                      {(() => {
                        switch (result.feasibilityFactors.expertiseRequired) {
                          case 1: {
                            return 'General Developer'
                          }
                          case 2: {
                            return 'Basic Specialization'
                          }
                          case 3: {
                            return 'Moderate'
                          }
                          case 4: {
                            return 'Specialized'
                          }
                          case 5: {
                            return 'Expert Team'
                          }
                          default: {
                            return 'Unknown'
                          }
                        }
                      })()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Scalability Needs</span>
                    <span className="text-zinc-900 dark:text-zinc-100 text-right">
                      {(() => {
                        switch (result.feasibilityFactors.scalabilityNeeds) {
                          case 1: {
                            return 'Low'
                          }
                          case 2: {
                            return 'Basic'
                          }
                          case 3: {
                            return 'Medium'
                          }
                          case 4: {
                            return 'High'
                          }
                          case 5: {
                            return 'Very High'
                          }
                          default: {
                            return 'Unknown'
                          }
                        }
                      })()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Tech Complexity</span>
                    <span className="text-zinc-900 dark:text-zinc-100 text-right">
                      {(() => {
                        switch (result.feasibilityFactors.techComplexity) {
                          case 1: {
                            return 'Simple'
                          }
                          case 2: {
                            return 'Basic'
                          }
                          case 3: {
                            return 'Moderate'
                          }
                          case 4: {
                            return 'Advanced'
                          }
                          case 5: {
                            return 'Highly Advanced'
                          }
                          default: {
                            return 'Unknown'
                          }
                        }
                      })()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Selected options */}
              {renderFactsCard(
                'Selected Options',
                settings as unknown as Record<string, string>
              )}

              {/* Tech Stack */}
              {renderFactsCard('Recommended Tech Stack', appTechstack)}
            </div>
          </div>

          {/* Left */}
          <div className="col-span-12 md:order-1 md:col-span-8">
            {renderSection(
              'How Much Will It Cost to Develop This App?',
              <DollarSign className="size-4 text-red-300" />,
              'COST ESTIMATES',
              <>
                <p className="text-sm">
                  CRM development costs vary based on features and integrations.
                  A <strong>basic MVP</strong> is cost-effective, while a
                  full-scale solution requires greater investment.
                </p>
                <hr className="border-zinc-200 dark:border-zinc-700" />
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-200 dark:border-zinc-700">
                      <th className="px-2 py-2 text-left font-medium">Stage</th>
                      <th className="px-2 py-2 text-right font-medium">
                        Estimated Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.costEstimates.map((item, index) => (
                      <tr
                        className="border-b border-zinc-200 dark:border-zinc-700"
                        key={index}
                      >
                        <td className="px-2 py-2">{item.stage}</td>
                        <td className="px-2 py-2 text-right text-primary-600">
                          {item.cost}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}

            {renderSection(
              'What Are the Key Features?',
              <List className="size-4 text-blue-300" />,
              'CORE FEATURES',
              <>
                <p className="text-sm">
                  The CRM’s success relies on its core features which drive user
                  engagement and streamline operations. Focus on functionalities
                  that deliver immediate value.
                </p>
                <hr className="border-zinc-200 dark:border-zinc-700 my-4" />
                <ul className="text-sm space-y-2">
                  {result.coreFeatures.map((feature, index) => (
                    <li key={index}>
                      <span
                        aria-label={feature.title}
                        className="mr-2"
                        role="img"
                      >
                        {feature.icon}
                      </span>
                      <strong>{feature.title}:</strong> {feature.description}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {renderSection(
              'How Long Will It Take to Build?',
              <Clock className="size-4 text-blue-300" />,
              'DEVELOPMENT TIMELINE',
              <>
                <p className="text-sm">
                  A basic CRM can be developed in a few months, while custom
                  automation and AI features may extend the timeline. Below is a
                  rough breakdown of each phase.
                </p>
                <hr className="border-zinc-200 dark:border-zinc-700 my-4" />
                <div className="space-y-2">
                  {result.developmentPhases.map((phase, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground mb-1">
                        <span>{phase.label}</span>
                        <span>{phase.duration}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: phase.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  {result.developmentTimelineSteps.map((item, index) => (
                    <li key={index}>
                      <strong>{item.title}:</strong> {item.duration}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {renderSection(
              'What Is the Process for Development and Implementation?',
              <Calendar className="size-4 text-blue-300" />,
              'PROJECT TIMELINE',
              <>
                <p className="text-sm">
                  A well-planned process ensures a smooth rollout from
                  development to deployment. The timeline below shows each phase
                  as a waterfall, with each stage starting sequentially.
                </p>
                <hr className="border-zinc-200 dark:border-zinc-700 my-4" />
                <div className="flex items-center text-xs font-semibold text-zinc-400 pl-32">
                  {Array.from({ length: 6 }, (_, i) => (
                    <div className="flex-1 text-center" key={i}>
                      Mth {i + 1}
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {result.projectTimelinePhases.map((phase, index) => (
                    <div className="flex items-center" key={index}>
                      <div className="w-1/4 text-xs font-bold text-muted-foreground">
                        {phase.label}
                      </div>
                      <div className="w-3/4">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 relative">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{
                              marginLeft: phase.start,
                              width: phase.width,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <ul className="text-sm list-disc pl-5 space-y-1 mt-4">
                  {result.projectTimelineSteps.map((item, index) => (
                    <li key={index}>
                      <strong>{item.title}:</strong> {item.description}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {renderSection(
              'Are There Any Other Cost Considerations?',
              <DollarSign className="size-4 text-red-300" />,
              'ONGOING EXPENSES',
              <>
                <p className="text-sm">
                  Beyond development, long-term costs include{' '}
                  <strong>cloud hosting</strong>,{' '}
                  <strong>third-party integrations</strong>, and continuous{' '}
                  <strong>maintenance</strong> to ensure optimal performance.
                </p>
                <hr className="border-zinc-200 dark:border-zinc-700" />
                <ul className="text-sm list-disc space-y-2">
                  {result.ongoingExpenses.map((item, index) => (
                    <li className="flex items-center" key={index}>
                      <Square className="flex-shrink-0 w-4 h-4 mr-2 text-zinc-400" />
                      <span>
                        <strong>{item.title}:</strong> {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {renderSection(
              'What Processes Will This App Improve?',
              <Settings className="size-4 text-blue-300" />,
              'EFFICIENCY & AUTOMATION',
              <>
                <p className="text-sm">
                  A CRM boosts your operations by{' '}
                  <strong>centralizing customer data</strong> and{' '}
                  <strong>automating repetitive tasks</strong>, leading to more
                  efficient workflows.
                </p>
                <hr className="border-zinc-200 dark:border-zinc-700" />
                <ul className="text-sm space-y-2">
                  {result.efficiencyAutomation.map((item, index) => (
                    <li className="flex items-center" key={index}>
                      <Check className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span>
                        <strong>{item.title}:</strong> {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {renderSection(
              'What Do I Need to Get Started?',
              <Rocket className="size-4 text-green-300" />,
              'PROJECT KICKOFF',
              <>
                <p className="text-sm">
                  A clear roadmap, defined requirements, and budget expectations
                  are essential for a successful CRM development kickoff.
                </p>
                <hr className="border-zinc-200 dark:border-zinc-700 my-4" />
                <div>
                  {result.projectKickoffSteps.map((step) => (
                    <div
                      className="flex items-center space-x-3 border-b py-2 last:border-b-0"
                      key={step.number}
                    >
                      <div className="inline-block py-1 px-1.5 bg-gray-200 rounded-full text-xxs font-bold">
                        {step.number}
                      </div>
                      <div>
                        <span className="text-sm font-semibold">
                          {step.title}
                        </span>
                        <div
                          className="text-xs text-muted-foreground"
                          dangerouslySetInnerHTML={{ __html: step.description }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Horizontal rule or line */}
            <hr className="border-zinc-200 dark:border-zinc-700 my-4" />

            {renderSection(
              'What Are Similar Popular Apps?',
              <BarChart2 className="size-4 text-zinc-300" />,
              'COMPETITOR ANALYSIS',
              <>
                <p className="text-sm">
                  Reviewing popular CRMs like HubSpot, Salesforce, and Zoho CRM
                  reveals the key elements driving their success. Use this
                  information to identify opportunities for{' '}
                  <strong>innovation</strong> in your own solution.
                </p>
                {/* Horizontal rule or line */}
                <hr className="border-zinc-200 dark:border-zinc-700" />
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>
                    <span aria-label="HubSpot" className="mr-1" role="img">
                      🔥
                    </span>
                    <strong>HubSpot:</strong> Excels in{' '}
                    <strong>marketing</strong> and <strong>automation</strong>.
                  </li>
                  <li>
                    <span aria-label="Salesforce" className="mr-1" role="img">
                      ⚡
                    </span>
                    <strong>Salesforce:</strong> Offers extensive{' '}
                    <strong>integrations</strong> for enterprise needs.
                  </li>
                  <li>
                    <span aria-label="Zoho" className="mr-1" role="img">
                      💼
                    </span>
                    <strong>Zoho CRM:</strong> Affordable and scalable, ideal
                    for small businesses.
                  </li>
                </ul>
              </>,
              true
            )}

            {renderSection(
              'Does It Need Any External APIs?',
              <Plug className="size-4 text-zinc-300" />,
              'THIRD-PARTY INTEGRATIONS',
              <>
                {/* Descriptive paragraph */}
                <p className="text-sm">
                  Connecting your CRM with <strong>external APIs</strong> opens
                  up a world of possibilities—whether it’s integrating
                  communication channels, streamlining payment processes, or
                  automating marketing campaigns.
                </p>

                {/* Horizontal rule or line */}
                <hr className="border-zinc-200 dark:border-zinc-700" />

                <div>
                  {/* Table with categories, examples, and benefits */}
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-zinc-200 dark:border-zinc-700">
                        <th className="px-2 py-2 text-left font-semibold text-muted-foreground">
                          Category
                        </th>
                        <th className="px-2 py-2 text-left font-semibold text-muted-foreground">
                          Example Tools
                        </th>
                        <th className="px-2 py-2 text-left font-semibold text-muted-foreground">
                          Key Benefit
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-zinc-200 dark:border-zinc-700">
                        <td className="px-2 py-2 text-muted-foreground font-bold">
                          Email &amp; Messaging
                        </td>
                        <td className="px-2 py-2">Twilio, Gmail, WhatsApp</td>
                        <td className="px-2 py-2">
                          Real-time communication with customers
                        </td>
                      </tr>
                      <tr className="border-b border-zinc-200 dark:border-zinc-700">
                        <td className="px-2 py-2 text-muted-foreground font-bold">
                          Accounting &amp; Payments
                        </td>
                        <td className="px-2 py-2">
                          Stripe, PayPal, QuickBooks
                        </td>
                        <td className="px-2 py-2">
                          Seamless billing and secure transactions
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2 text-muted-foreground font-bold">
                          Marketing Automation
                        </td>
                        <td className="px-2 py-2">HubSpot, Mailchimp</td>
                        <td className="px-2 py-2">
                          Automated campaigns for higher engagement
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>,
              true
            )}

            {renderSection(
              'What Makes This App Difficult to Build?',
              <TrendingUp className="size-4 text-zinc-300" />,
              'CHALLENGES',
              <>
                <p className="text-sm">
                  Building a robust CRM involves complex integrations, advanced
                  data security, and scalable architecture. These factors
                  contribute to higher development complexity and longer
                  timelines.
                </p>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>
                    <strong>Complex Integrations:</strong> Linking with multiple
                    external systems.
                  </li>
                  <li>
                    <strong>Data Security:</strong> Ensuring robust protection
                    for sensitive information.
                  </li>
                  <li>
                    <strong>Scalability:</strong> Building an architecture that
                    grows with your business.
                  </li>
                </ul>
              </>,
              true
            )}

            {renderSection(
              'How Will The App Scale?',
              <TrendingUp className="size-4 text-zinc-300" />,
              'SCALABILITY',
              <>
                <p className="text-sm">
                  A scalable CRM must handle increasing data loads and user
                  counts without performance degradation. Leveraging cloud
                  solutions and optimized databases is key.
                </p>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>
                    <strong>Cloud Hosting:</strong> Automatically adjusts
                    resources based on demand.
                  </li>
                  <li>
                    <strong>Database Optimization:</strong> Ensures fast data
                    retrieval even with large volumes.
                  </li>
                  <li>
                    <strong>Modular Architecture:</strong> Facilitates future
                    feature expansion.
                  </li>
                </ul>
              </>,
              true
            )}

            {renderSection(
              'What Are the Most Important Features to Build First?',
              <List className="size-4 text-zinc-300" />,
              'FEATURE PRIORITIZATION',
              <>
                <p className="text-sm">
                  Prioritizing <strong>core functionalities</strong> ensures a
                  rapid launch and delivers essential value to early adopters.
                </p>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>
                    <strong>Contact & Lead Management:</strong> Centralizes
                    client data and interactions.
                  </li>
                  <li>
                    <strong>Sales Pipeline & Follow-ups:</strong> Visualizes
                    deal progress and automates reminders.
                  </li>
                  <li>
                    <strong>Task & Workflow Automation:</strong> Streamlines
                    repetitive processes for increased productivity.
                  </li>
                </ul>
              </>,
              true
            )}

            {renderSection(
              'How Will The App Work?',
              <Settings className="size-4 text-zinc-300" />,
              'APP WORKFLOW',
              <>
                <p className="text-sm">
                  The CRM centralizes customer data and automates key business
                  processes to streamline operations. It provides an intuitive
                  interface for managing contacts, tracking sales, and
                  generating actionable insights.
                </p>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>
                    <strong>User Interface:</strong> Clean dashboards and
                    real-time reporting.
                  </li>
                  <li>
                    <strong>Data Management:</strong> Secure storage and
                    efficient processing.
                  </li>
                  <li>
                    <strong>Integrations:</strong> Connects seamlessly with
                    essential business tools.
                  </li>
                </ul>
              </>,
              true
            )}

            {renderSection(
              'How Will the App Integrate with Existing Systems?',
              <Link className="size-4 text-zinc-300" />,
              'SYSTEM INTEGRATION',
              <>
                <p className="text-sm">
                  Seamless integration ensures your CRM{' '}
                  <strong>communicates effectively</strong> with existing tools,
                  keeping data consistent and workflows smooth.
                </p>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>
                    <strong>Email & Calendar:</strong> Syncs with Outlook,
                    Gmail, and scheduling apps.
                  </li>
                  <li>
                    <strong>Accounting Software:</strong> Connects to QuickBooks
                    or Xero for streamlined billing.
                  </li>
                  <li>
                    <strong>Marketing Platforms:</strong> Integrates with
                    Mailchimp, HubSpot, and ad networks.
                  </li>
                </ul>
              </>,
              true
            )}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between gap-2 p-4 w-full">
        <Button onClick={onReset} size="lg" variant="outline">
          Start Over
        </Button>
        <Button
          className="w-full"
          onClick={() => setIsDialogOpen(true)}
          size="lg"
        >
          Download Report
        </Button>
      </div>

      <LeadInfoDialog
        onDialogClose={onDialogClose}
        onOpenChange={setIsDialogOpen}
        open={isDialogOpen}
      />
    </div>
  )
}

function renderFactsCard(title: string, settings: Record<string, string>) {
  return (
    <div className="space-y-1">
      <h6 className="uppercase font-medium text-xxs tracking-wide">{title}</h6>
      <div className="w-full p-3 space-y-2 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl mb-4">
        {Object.entries(settings).map(([key, value]) => {
          return (
            <div className="flex justify-between text-sm" key={key}>
              <span className="text-zinc-500">{startCase(key)}</span>
              <span className="text-zinc-900 dark:text-zinc-100 text-right">
                {value}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
