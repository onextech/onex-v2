'use client'

import React, { useCallback, useEffect, useState } from 'react'

import {
  FeasibilityFactors,
  calculateFeasibilityScore,
  getFeasibilityLabel,
} from '@/components/app-idea-explorer/calculate-feasibility-score'
import { GaugeChart } from '@/components/app-idea-explorer/gauge-chart'
import { appTechstack } from '@/components/app-idea-explorer/mocks'
import { AppIdeaSettings } from '@/components/app-idea-explorer/types'
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
  ThumbsDown,
  ThumbsUp,
  TrendingUp,
} from 'lucide-react'

import { LeadInfoDialog } from './lead-info-dialog'

// Sample mock data
const mockAppIdeaFeasibilityFactors: FeasibilityFactors = {
  techComplexity: 3,
  developmentTime: 3,
  customFrameworksRequired: 3,
  scalabilityNeeds: 3,
  complianceRequirements: 3,
  expertiseRequired: 3,
}

// Run function with mock data
const feasibilityScore = calculateFeasibilityScore(
  mockAppIdeaFeasibilityFactors
)

const isGreyMainCard = true

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

interface PreviewProps {
  appIdea: string
  isDialogOpen: boolean
  isLoading: boolean
  onDialogClose: () => void
  onReset: () => void
  result: AppIdeaResult
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

  const renderRecommendation = () => {
    const marketPotentialScore = getMarketPotentialScore(result.marketPotential)
    const competitiveLandscapeScore = getCompetitiveLandscapeScore(
      result.competitiveLandscape
    )
    const overallScore =
      (feasibilityScore + marketPotentialScore + competitiveLandscapeScore) / 3

    const data = [
      { name: 'Feasibility', value: feasibilityScore },
      { name: 'Market Potential', value: marketPotentialScore },
      { name: 'Competitive Landscape', value: competitiveLandscapeScore },
    ]

    return (
      <div className="bg-white dark:bg-zinc-800 rounded-lg">
        <h4 className="text-lg font-semibold mb-3 flex items-center">
          {overallScore >= 3 ? (
            <ThumbsUp className="mr-2 size-4 text-zinc-300" />
          ) : (
            <ThumbsDown className="mr-2 size-4 text-zinc-300" />
          )}
          Tech Feasibility Score
        </h4>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
          {overallScore >= 3
            ? 'Based on our analysis, your app idea shows promise and could be worth pursuing. Consider the following factors:'
            : 'Your app idea may face some challenges. Consider the following factors before proceeding:'}
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
              CRM for Small Businesses
            </h3>
            <p className="max-w-lg mx-auto">{appIdea}</p>
          </div>
        )}

        {/* Results Grid */}
        <div className="grid grid-cols-12">
          {/* Right */}
          <div className="col-span-12 md:order-2 md:col-span-4 p-4 md:border-l">
            {renderRecommendation()}
            <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
              {result.summary}
            </p>

            <Separator className="my-4" />

            <div className="space-y-8">
              {/* Analysis */}
              <div className="space-y-1">
                <h6 className="uppercase font-medium text-xxs">Analysis</h6>
                <div className="w-full p-3 space-y-2 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Feasibility</span>
                    <span className="text-zinc-900 dark:text-zinc-100 text-right">
                      {result.feasibility}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Market Potential</span>
                    <span className="text-zinc-900 dark:text-zinc-100 text-right">
                      {result.marketPotential}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Scalability Potential</span>
                    <span className="text-zinc-900 dark:text-zinc-100 text-right">
                      {result.scalabilityPotential}
                    </span>
                  </div>
                  {isExternalFacingApp && (
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-500">
                        Competitive Landscape
                      </span>
                      <span className="text-zinc-900 dark:text-zinc-100 text-right">
                        {result.competitiveLandscape}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Complexity Rating</span>
                    <span className="text-zinc-900 dark:text-zinc-100 text-right">
                      {result.technicalFeasibility.complexityRating}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">
                      Est. Development Effort
                    </span>
                    <span className="text-zinc-900 dark:text-zinc-100 text-right">
                      {result.technicalFeasibility.estimatedEffort}
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
                {/* Short paragraph explaining cost overview */}
                <p className="text-sm">
                  CRM development costs vary based on features and integrations.
                  A <strong>basic MVP</strong> is cost-effective, while a
                  full-scale solution requires greater investment.
                </p>

                {/* Horizontal rule or line */}
                <hr className="border-zinc-200 dark:border-zinc-700" />

                {/* Table matching the reference style */}
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
                    <tr className="border-b border-zinc-200 dark:border-zinc-700">
                      <td className="px-2 py-2">MVP Development</td>
                      <td className="px-2 py-2 text-right text-primary-600">
                        From ${Number(5000).toLocaleString()}
                      </td>
                    </tr>
                    <tr className="border-b border-zinc-200 dark:border-zinc-700">
                      <td className="px-2 py-2">
                        Hosting &amp; Infrastructure
                      </td>
                      <td className="px-2 py-2 text-right text-primary-600">
                        Cloud-based costs vary
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2">Maintenance &amp; Updates</td>
                      <td className="px-2 py-2 text-right text-primary-600">
                        Ongoing
                      </td>
                    </tr>
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
                {/* Horizontal rule or line */}
                <hr className="border-zinc-200 dark:border-zinc-700 my-4" />
                <ul className="text-sm space-y-2">
                  <li>
                    <span aria-label="HubSpot" className="mr-2" role="img">
                      🔥
                    </span>
                    <strong>Contact Management:</strong> Organize and manage
                    customer data efficiently.
                  </li>
                  <li>
                    <span aria-label="Salesforce" className="mr-2" role="img">
                      ⚡
                    </span>
                    <strong>Sales Pipeline:</strong> Track deals and forecast
                    revenue.
                  </li>
                  <li>
                    <span aria-label="Zoho" className="mr-2" role="img">
                      💼
                    </span>
                    <strong>Automated Follow-ups:</strong> Ensure timely
                    communications with prospects.
                  </li>
                </ul>
              </>
            )}

            {renderSection(
              'How Long Will It Take to Build?',
              <Clock className="size-4 text-blue-300" />,
              'DEVELOPMENT TIMELINE',
              <>
                {/* Paragraph describing timeline overview */}
                <p className="text-sm">
                  A basic CRM can be developed in a few months, while custom
                  automation and AI features may extend the timeline. Below is a
                  rough breakdown of each phase.
                </p>

                {/* Horizontal rule or line */}
                <hr className="border-zinc-200 dark:border-zinc-700 my-4" />

                {/* Timeline segment for MVP Development */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                    <span>MVP DEVELOPMENT</span>
                    <span>4-6 MONTHS</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: '70%' }} // Approx. progress representation
                    />
                  </div>
                </div>

                {/* Additional phases as a list */}
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>
                    <strong>Beta Testing:</strong> 2 months for optimization and
                    feedback.
                  </li>
                  <li>
                    <strong>Full Launch:</strong> 1 month for deployment and
                    onboarding.
                  </li>
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
                {/* Horizontal rule or line */}
                <hr className="border-zinc-200 dark:border-zinc-700 my-4" />
                {/* Header Row with Month Labels */}
                <div className="flex items-center text-xs font-semibold text-zinc-400 pl-32">
                  {Array.from({ length: 6 }, (_, i) => (
                    <div className="flex-1 text-center" key={i}>
                      Mth {i + 1}
                    </div>
                  ))}
                </div>
                {/* Waterfall-style Gantt Chart */}
                <div className="space-y-3">
                  {/* Planning Phase: starts at 0, lasts 1 month */}
                  <div className="flex items-center">
                    <div className="w-1/4 text-xs font-bold text-muted-foreground">
                      Planning
                    </div>
                    <div className="w-3/4">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 relative">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: '11.11%' }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Development Phase: starts at 1 mo, lasts 5 months */}
                  <div className="flex items-center">
                    <div className="w-1/4 text-xs font-bold text-muted-foreground">
                      Development
                    </div>
                    <div className="w-3/4">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 relative">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ marginLeft: '11.11%', width: '55.55%' }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Implementation Phase: starts at 6 mo, lasts 2 months */}
                  <div className="flex items-center">
                    <div className="w-1/4 text-xs font-bold text-muted-foreground">
                      Implementation
                    </div>
                    <div className="w-3/4">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 relative">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ marginLeft: '66.66%', width: '22.22%' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="text-sm list-disc pl-5 space-y-1 mt-4">
                  <li>
                    <strong>Planning:</strong> 1 month for scoping and
                    requirements.
                  </li>
                  <li>
                    <strong>Development:</strong> 4-6 months for core CRM
                    functionality.
                  </li>
                  <li>
                    <strong>Implementation:</strong> 1-2 months for data
                    migration and team training.
                  </li>
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
                {/* Horizontal rule or line */}
                <hr className="border-zinc-200 dark:border-zinc-700" />
                <ul className="text-sm list-disc space-y-2">
                  {[
                    {
                      title: 'Hosting & API Usage',
                      description:
                        'Costs vary based on data volume and requests.',
                    },
                    {
                      title: 'Security & Compliance',
                      description:
                        'Regular updates are required for data protection.',
                    },
                    {
                      title: 'Support & Scalability',
                      description: 'Expenses increase as your user base grows.',
                    },
                  ].map((item, index) => (
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
                {/* Horizontal rule or line */}
                <hr className="border-zinc-200 dark:border-zinc-700" />

                <ul className="text-sm space-y-2">
                  {[
                    {
                      title: 'Sales Pipeline',
                      description: 'Automates lead tracking and follow-ups.',
                    },
                    {
                      title: 'Customer Support',
                      description:
                        'Unifies client interactions for improved service.',
                    },
                    {
                      title: 'Task Automation',
                      description:
                        'Minimizes manual processes and boosts productivity.',
                    },
                  ].map((item, index) => (
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
                {/* Horizontal rule or line */}
                <hr className="border-zinc-200 dark:border-zinc-700 my-4" />
                {/* Numbered */}
                <div>
                  {[
                    {
                      number: 1,
                      title: 'Feature Definition',
                      description:
                        'Define which features are <strong>must-have</strong> and which are <strong>nice-to-have</strong>.',
                    },
                    {
                      number: 2,
                      title: 'Integration Needs',
                      description:
                        'Identify the essential tools (e.g., email, accounting, marketing) to integrate.',
                    },
                    {
                      number: 3,
                      title: 'Budget & User Base',
                      description:
                        'Set clear cost expectations and forecast your user growth.',
                    },
                  ].map((step) => (
                    <div
                      className="flex items-center space-x-3 border-b py-2 last:border-b-0"
                      key={step.number}
                    >
                      {/* Number */}
                      <div className="inline-block py-1 px-1.5 bg-gray-200 rounded-full text-xxs font-bold">
                        {step.number}
                      </div>

                      {/* Text */}
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
      <h6 className="uppercase font-medium text-xxs">{title}</h6>
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

function getMarketPotentialScore(marketPotential: string): number {
  switch (marketPotential.toLowerCase()) {
    case 'high': {
      return 5
    }
    case 'medium-high': {
      return 4
    }
    case 'medium': {
      return 3
    }
    case 'medium-low': {
      return 2
    }
    case 'low': {
      return 1
    }
    default: {
      return 0
    }
  }
}

function getCompetitiveLandscapeScore(competitiveLandscape: string): number {
  switch (competitiveLandscape.toLowerCase()) {
    case 'low': {
      return 5
    }
    case 'medium-low': {
      return 4
    }
    case 'medium': {
      return 3
    }
    case 'medium-high': {
      return 2
    }
    case 'high': {
      return 1
    }
    default: {
      return 0
    }
  }
}
