'use client'

import React, { useEffect, useState } from 'react'

import { appTechstack } from '@/components/app-idea-explorer/mocks'
import { AppIdeaSettings } from '@/components/app-idea-explorer/types'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
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
  TrendingDown,
  TrendingUp,
} from 'lucide-react'

import { LeadInfoDialog } from './lead-info-dialog'

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
    const feasibilityScore = getFeasibilityScore(result.feasibility)
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

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

    return (
      <div className="bg-white dark:bg-zinc-800 rounded-lg">
        <h4 className="text-lg font-semibold mb-3 flex items-center">
          {overallScore >= 3 ? (
            <ThumbsUp className="mr-2 size-4 text-zinc-300" />
          ) : (
            <ThumbsDown className="mr-2 size-4 text-zinc-300" />
          )}
          Recommendation
        </h4>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
          {overallScore >= 3
            ? 'Based on our analysis, your app idea shows promise and could be worth pursuing. Consider the following factors:'
            : 'Your app idea may face some challenges. Consider the following factors before proceeding:'}
        </p>
        <div className="h-36 mb-4">{/*  TODO@Joel: Add Chart here */}</div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <Card className="w-full max-w-lg border-0 shadow-none bg-transparent">
        <CardContent className="flex flex-col items-center gap-4 p-6">
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
          <div className="p-4 border-b w-full">
            <h6 className="mb-2 text-muted-foreground uppercase font-medium text-xxs">
              App Idea
            </h6>
            <h3 className="leading-tight text-lg font-semibold flex items-center">
              CRM for Small Businesses
            </h3>
            <p>{appIdea}</p>
          </div>
        )}

        {/* Results Grid */}
        <div className="grid grid-cols-12">
          {/* Left */}
          <div className="col-span-8">
            {renderSection(
              'What Processes Will This App Improve?',
              <Settings className="w-5 h-5 text-zinc-300" />,
              'EFFICIENCY & AUTOMATION',
              <div className="space-y-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                <p className="text-sm">
                  A CRM boosts your operations by{' '}
                  <strong>centralizing customer data</strong> and{' '}
                  <strong>automating repetitive tasks</strong>, leading to more
                  efficient workflows.
                </p>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>
                    <strong>Sales Pipeline:</strong> Automates lead tracking and
                    follow-ups.
                  </li>
                  <li>
                    <strong>Customer Support:</strong> Unifies client
                    interactions for improved service.
                  </li>
                  <li>
                    <strong>Task Automation:</strong> Minimizes manual processes
                    and boosts productivity.
                  </li>
                </ul>
              </div>
            )}

            {renderSection(
              'How Will the App Integrate with Existing Systems?',
              <Link className="w-5 h-5 text-zinc-300" />,
              'SYSTEM INTEGRATION',
              <div className="space-y-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
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
              </div>
            )}

            {renderSection(
              'How Much Will It Cost to Develop This App?',
              <DollarSign className="w-5 h-5 text-zinc-300" />,
              'COST ESTIMATES',
              <div className="space-y-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                <p className="text-sm">
                  CRM development costs depend on feature complexity and
                  integration requirements. A <strong>basic MVP</strong> is
                  affordable, but extensive automation increases the investment.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs">
                    <thead>
                      <tr>
                        <th className="px-2 py-1 text-left font-bold text-zinc-600">
                          Category
                        </th>
                        <th className="px-2 py-1 text-right font-bold text-zinc-600">
                          Estimated Cost
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-2 py-1 text-zinc-600">
                          MVP Development
                        </td>
                        <td className="px-2 py-1 text-right font-semibold text-green-600">
                          $30K - $80K
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-1 text-zinc-600">
                          Hosting & Infrastructure
                        </td>
                        <td className="px-2 py-1 text-right font-semibold text-green-600">
                          Variable
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-1 text-zinc-600">
                          Maintenance & Updates
                        </td>
                        <td className="px-2 py-1 text-right font-semibold text-green-600">
                          Ongoing
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {renderSection(
              'How Much Will It Cost to Develop This App?',
              <DollarSign className="w-5 h-5 text-zinc-300" />,
              'COST ESTIMATES',
              <div className="space-y-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
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
                      <th className="px-2 py-2 text-left font-semibold text-zinc-600">
                        Stage
                      </th>
                      <th className="px-2 py-2 text-right font-semibold text-zinc-600">
                        Estimated Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-200 dark:border-zinc-700">
                      <td className="px-2 py-2 text-zinc-600">
                        MVP Development
                      </td>
                      <td className="px-2 py-2 text-right font-semibold text-green-600">
                        $30,000 - $80,000
                      </td>
                    </tr>
                    <tr className="border-b border-zinc-200 dark:border-zinc-700">
                      <td className="px-2 py-2 text-zinc-600">
                        Hosting &amp; Infrastructure
                      </td>
                      <td className="px-2 py-2 text-right font-semibold text-green-600">
                        Cloud-based costs vary
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-zinc-600">
                        Maintenance &amp; Updates
                      </td>
                      <td className="px-2 py-2 text-right font-semibold text-green-600">
                        Ongoing
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {renderSection(
              'What is the Cheapest Way to Build It?',
              <TrendingDown className="w-5 h-5 text-zinc-300" />,
              'BUDGET-FRIENDLY DEV',
              <div className="space-y-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                <p className="text-sm">
                  Choose a solution that balances cost and customization.
                  Consider your business needs and technical capabilities to
                  decide between different development approaches.
                </p>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>
                    <strong>No-Code:</strong> Fast and affordable, with some
                    limitations.
                  </li>
                  <li>
                    <strong>Open-Source:</strong> Lower upfront cost but may
                    require integration work.
                  </li>
                  <li>
                    <strong>Custom MVP:</strong> More tailored but with higher
                    initial investment.
                  </li>
                </ul>
              </div>
            )}

            <div className="pl-16 space-y-4 rounded-xl">
              {/* Variation 2: Progress Bar Visualization */}
              {renderSection(
                'Option 1: What is the Cheapest Way to Build It?',
                <TrendingDown className="w-5 h-5 text-zinc-300" />,
                'BUDGET-FRIENDLY DEV',
                <div className="space-y-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                  <p className="text-sm">
                    Compare development approaches using progress bars that
                    illustrate cost efficiency.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold">No-Code</span>
                      <span className="text-xs">30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: '30%' }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold">Open-Source</span>
                      <span className="text-xs">50%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: '50%' }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold">Custom MVP</span>
                      <span className="text-xs">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: '80%' }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Variation 3: Card-Based Layout with Emojis */}
              {renderSection(
                'Option 2: What is the Cheapest Way to Build It?',
                <TrendingDown className="w-5 h-5 text-zinc-300" />,
                'BUDGET-FRIENDLY DEV',
                <div className="space-y-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                  <p className="text-sm">
                    Choose the development approach that aligns with your budget
                    and goals.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center p-4 bg-white dark:bg-zinc-700 rounded shadow">
                      <span
                        aria-label="no-code"
                        className="text-2xl"
                        role="img"
                      >
                        💡
                      </span>
                      <p className="text-xs font-bold">No-Code</p>
                      <p className="text-xs">Fast & cheap</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white dark:bg-zinc-700 rounded shadow">
                      <span
                        aria-label="open-source"
                        className="text-2xl"
                        role="img"
                      >
                        🛠️
                      </span>
                      <p className="text-xs font-bold">Open-Source</p>
                      <p className="text-xs">Low cost, needs setup</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white dark:bg-zinc-700 rounded shadow">
                      <span aria-label="custom" className="text-2xl" role="img">
                        🚀
                      </span>
                      <p className="text-xs font-bold">Custom MVP</p>
                      <p className="text-xs">Tailored, higher cost</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Compare */}
              {renderSection(
                'Option 3: What is the Cheapest Way to Build It?',
                <TrendingDown className="w-5 h-5 text-zinc-300" />,
                'BUDGET-FRIENDLY DEV',
                <div className="space-y-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                  <p className="text-sm">
                    For cost efficiency, explore{' '}
                    <strong>no-code platforms</strong>,{' '}
                    <strong>open-source solutions</strong>, or a{' '}
                    <strong>custom MVP</strong> that focuses on core features.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                      <thead>
                        <tr>
                          <th className="px-2 py-1 text-left font-bold text-zinc-600">
                            Solution
                          </th>
                          <th className="px-2 py-1 text-right font-bold text-zinc-600">
                            Pros
                          </th>
                          <th className="px-2 py-1 text-right font-bold text-zinc-600">
                            Cons
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-2 py-1 text-zinc-600">
                            No-Code/Low-Code
                          </td>
                          <td className="px-2 py-1 text-right font-semibold text-green-600">
                            Fast, low cost
                          </td>
                          <td className="px-2 py-1 text-right font-semibold text-red-600">
                            Limited customization
                          </td>
                        </tr>
                        <tr>
                          <td className="px-2 py-1 text-zinc-600">
                            Open-Source CRM
                          </td>
                          <td className="px-2 py-1 text-right font-semibold text-green-600">
                            Low cost, flexible
                          </td>
                          <td className="px-2 py-1 text-right font-semibold text-red-600">
                            Requires technical expertise
                          </td>
                        </tr>
                        <tr>
                          <td className="px-2 py-1 text-zinc-600">
                            Custom MVP
                          </td>
                          <td className="px-2 py-1 text-right font-semibold text-green-600">
                            Tailored solution
                          </td>
                          <td className="px-2 py-1 text-right font-semibold text-red-600">
                            Higher upfront cost
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>
                      <strong>No-Code:</strong> Low cost and rapid deployment.
                    </li>
                    <li>
                      <strong>Open-Source:</strong> Economical with flexible
                      integration.
                    </li>
                    <li>
                      <strong>Custom MVP:</strong> Fully tailored, though with a
                      higher initial cost.
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {renderSection(
              'Are There Any Other Cost Considerations?',
              <DollarSign className="w-5 h-5 text-zinc-300" />,
              'ONGOING EXPENSES',
              <div className="space-y-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                <p className="text-sm">
                  Beyond development, long-term costs include{' '}
                  <strong>cloud hosting</strong>,{' '}
                  <strong>third-party integrations</strong>, and continuous{' '}
                  <strong>maintenance</strong> to ensure optimal performance.
                </p>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>
                    <strong>Hosting & API Usage:</strong> Costs vary based on
                    data volume and requests.
                  </li>
                  <li>
                    <strong>Security & Compliance:</strong> Regular updates are
                    required for data protection.
                  </li>
                  <li>
                    <strong>Support & Scalability:</strong> Expenses increase as
                    your user base grows.
                  </li>
                </ul>
              </div>
            )}

            {renderSection(
              'How Long Will It Take to Build?',
              <Clock className="w-5 h-5 text-zinc-300" />,
              'DEVELOPMENT TIMELINE',
              <div className="space-y-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                {/* Paragraph describing timeline overview */}
                <p className="text-sm">
                  A basic CRM can be developed in a few months, while custom
                  automation and AI features may extend the timeline. Below is a
                  rough breakdown of each phase.
                </p>

                {/* Timeline segment for MVP Development */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-zinc-600">
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
              </div>
            )}

            {renderSection(
              'What Is the Process for Development and Implementation?',
              <Calendar className="w-5 h-5 text-zinc-300" />,
              'PROJECT TIMELINE',
              <div className="space-y-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                <p className="text-sm">
                  A well-planned process ensures a smooth rollout from
                  development to deployment. The timeline below shows each phase
                  as a waterfall, with each stage starting sequentially.
                </p>
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
                    <div className="w-1/4 text-xs font-bold text-zinc-600">
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
                    <div className="w-1/4 text-xs font-bold text-zinc-600">
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
                    <div className="w-1/4 text-xs font-bold text-zinc-600">
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
              </div>
            )}

            {renderSection(
              'How Will It Work?',
              <Settings className="w-5 h-5 text-zinc-300" />,
              'APP WORKFLOW',
              <div className="space-y-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
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
              </div>
            )}

            {renderSection(
              'What Makes This App Difficult to Build?',
              <TrendingUp className="w-5 h-5 text-zinc-300" />,
              'CHALLENGES',
              <div className="space-y-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
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
              </div>
            )}

            {renderSection(
              'What Are the Key Features?',
              <List className="w-5 h-5 text-zinc-300" />,
              'CORE FEATURES',
              <div className="space-y-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                <p className="text-sm">
                  The CRM’s success relies on its core features which drive user
                  engagement and streamline operations. Focus on functionalities
                  that deliver immediate value.
                </p>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>
                    <strong>Contact Management:</strong> Organize and manage
                    customer data efficiently.
                  </li>
                  <li>
                    <strong>Sales Pipeline:</strong> Track deals and forecast
                    revenue.
                  </li>
                  <li>
                    <strong>Automated Follow-ups:</strong> Ensure timely
                    communications with prospects.
                  </li>
                </ul>
              </div>
            )}

            {renderSection(
              'Can It Scale?',
              <TrendingUp className="w-5 h-5 text-zinc-300" />,
              'SCALABILITY',
              <div className="space-y-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
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
              </div>
            )}

            {renderSection(
              'What Are the Most Important Features to Build First?',
              <List className="w-5 h-5 text-zinc-300" />,
              'FEATURE PRIORITIZATION',
              <div className="space-y-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
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
              </div>
            )}

            {renderSection(
              'Does It Need Any External APIs?',
              <Plug className="w-5 h-5 text-zinc-300" />,
              'THIRD-PARTY INTEGRATIONS',
              <div className="space-y-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                {/* Descriptive paragraph */}
                <p className="text-sm">
                  Connecting your CRM with <strong>external APIs</strong> opens
                  up a world of possibilities—whether it’s integrating
                  communication channels, streamlining payment processes, or
                  automating marketing campaigns.
                </p>

                {/* Table with categories, examples, and benefits */}
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-200 dark:border-zinc-700">
                      <th className="px-2 py-2 text-left font-semibold text-zinc-600">
                        Category
                      </th>
                      <th className="px-2 py-2 text-left font-semibold text-zinc-600">
                        Example Tools
                      </th>
                      <th className="px-2 py-2 text-left font-semibold text-zinc-600">
                        Key Benefit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-200 dark:border-zinc-700">
                      <td className="px-2 py-2 text-zinc-600 font-bold">
                        Email &amp; Messaging
                      </td>
                      <td className="px-2 py-2">Twilio, Gmail, WhatsApp</td>
                      <td className="px-2 py-2">
                        Real-time communication with customers
                      </td>
                    </tr>
                    <tr className="border-b border-zinc-200 dark:border-zinc-700">
                      <td className="px-2 py-2 text-zinc-600 font-bold">
                        Accounting &amp; Payments
                      </td>
                      <td className="px-2 py-2">Stripe, PayPal, QuickBooks</td>
                      <td className="px-2 py-2">
                        Seamless billing and secure transactions
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-zinc-600 font-bold">
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
            )}

            {renderSection(
              'Does It Need Any External APIs?',
              <Plug className="w-5 h-5 text-zinc-300" />,
              'THIRD-PARTY INTEGRATIONS',
              <div className="space-y-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                <p className="text-sm">
                  Integrating external APIs enhances the CRM by connecting it to
                  vital business tools and services.
                </p>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>
                    <strong>Email & Messaging:</strong> Connect with Twilio,
                    Gmail, or WhatsApp.
                  </li>
                  <li>
                    <strong>Accounting & Payments:</strong> Integrate with
                    Stripe, PayPal, or QuickBooks.
                  </li>
                  <li>
                    <strong>Marketing Automation:</strong> Sync with HubSpot or
                    Mailchimp for streamlined campaigns.
                  </li>
                </ul>
              </div>
            )}
            <div className="pl-16 space-y-4 rounded-xl">
              {/* Variation 1: Table Layout for API Integrations */}
              {renderSection(
                'Does It Need Any External APIs?',
                <Plug className="w-5 h-5 text-zinc-300" />,
                'THIRD-PARTY INTEGRATIONS',
                <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                  <p className="text-sm">
                    Integrating external APIs <strong>enhances the CRM</strong>{' '}
                    by linking it with vital business tools and services.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                      <thead>
                        <tr>
                          <th className="px-2 py-1 text-left font-bold text-zinc-600">
                            Category
                          </th>
                          <th className="px-2 py-1 text-left font-bold text-zinc-600">
                            Examples
                          </th>
                          <th className="px-2 py-1 text-left font-bold text-zinc-600">
                            Benefit
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-2 py-1 text-zinc-600">
                            <strong>Email & Messaging</strong>
                          </td>
                          <td className="px-2 py-1">Twilio, Gmail, WhatsApp</td>
                          <td className="px-2 py-1">Improved communication</td>
                        </tr>
                        <tr>
                          <td className="px-2 py-1 text-zinc-600">
                            <strong>Accounting & Payments</strong>
                          </td>
                          <td className="px-2 py-1">
                            Stripe, PayPal, QuickBooks
                          </td>
                          <td className="px-2 py-1">
                            Streamlined transactions
                          </td>
                        </tr>
                        <tr>
                          <td className="px-2 py-1 text-zinc-600">
                            <strong>Marketing Automation</strong>
                          </td>
                          <td className="px-2 py-1">HubSpot, Mailchimp</td>
                          <td className="px-2 py-1">
                            Efficient campaign management
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Variation 2: Grid of Cards for API Integrations */}
              {renderSection(
                'Does It Need Any External APIs?',
                <Plug className="w-5 h-5 text-zinc-300" />,
                'THIRD-PARTY INTEGRATIONS',
                <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm space-y-4">
                  <p className="text-sm">
                    Connecting your CRM with external APIs provides{' '}
                    <strong>real-time data</strong> and seamless integration
                    with essential tools.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-3 bg-white dark:bg-zinc-700 rounded-lg shadow">
                      <p className="text-xs font-bold">Email & Messaging</p>
                      <p className="text-xs">Twilio, Gmail, WhatsApp</p>
                      <p className="text-xs">Enhances communication</p>
                    </div>
                    <div className="p-3 bg-white dark:bg-zinc-700 rounded-lg shadow">
                      <p className="text-xs font-bold">Accounting & Payments</p>
                      <p className="text-xs">Stripe, PayPal, QuickBooks</p>
                      <p className="text-xs">Simplifies transactions</p>
                    </div>
                    <div className="p-3 bg-white dark:bg-zinc-700 rounded-lg shadow">
                      <p className="text-xs font-bold">Marketing Automation</p>
                      <p className="text-xs">HubSpot, Mailchimp</p>
                      <p className="text-xs">Boosts campaign efficiency</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Variation 3: Shadcn Table Style */}
              {renderSection(
                'Does It Need Any External APIs? (Table Style)',
                <Plug className="w-5 h-5 text-zinc-300" />,
                'THIRD-PARTY INTEGRATIONS',
                <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                  <p className="text-sm mb-4">
                    A robust CRM leverages external APIs to connect with vital
                    services. These integrations enhance functionality, improve
                    data flow, and streamline operations.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-zinc-200 dark:border-zinc-700">
                          <th className="px-3 py-2 text-left font-semibold text-zinc-600">
                            Integration
                          </th>
                          <th className="px-3 py-2 text-left font-semibold text-zinc-600">
                            Tools
                          </th>
                          <th className="px-3 py-2 text-left font-semibold text-zinc-600">
                            Benefit
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-zinc-200 dark:border-zinc-700">
                          <td className="px-3 py-2 text-zinc-600 font-bold">
                            Email & Messaging
                          </td>
                          <td className="px-3 py-2">Twilio, Gmail, WhatsApp</td>
                          <td className="px-3 py-2">
                            Streamlines communication
                          </td>
                        </tr>
                        <tr className="border-b border-zinc-200 dark:border-zinc-700">
                          <td className="px-3 py-2 text-zinc-600 font-bold">
                            Accounting & Payments
                          </td>
                          <td className="px-3 py-2">
                            Stripe, PayPal, QuickBooks
                          </td>
                          <td className="px-3 py-2">
                            Ensures secure transactions
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 text-zinc-600 font-bold">
                            Marketing Automation
                          </td>
                          <td className="px-3 py-2">HubSpot, Mailchimp</td>
                          <td className="px-3 py-2">
                            Optimizes campaign management
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {renderSection(
              'What Are Similar Popular Apps?',
              <BarChart2 className="w-5 h-5 text-zinc-300" />,
              'COMPETITOR ANALYSIS',
              <div className="space-y-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                <p className="text-sm">
                  Benchmarking against industry leaders helps pinpoint key
                  features and opportunities to differentiate your CRM.
                </p>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>
                    <strong>HubSpot:</strong> Excels in marketing and
                    automation.
                  </li>
                  <li>
                    <strong>Salesforce:</strong> Offers extensive integrations
                    for enterprise needs.
                  </li>
                  <li>
                    <strong>Zoho CRM:</strong> Affordable and scalable for small
                    businesses.
                  </li>
                </ul>
              </div>
            )}
            <div className="pl-16 space-y-4 rounded-xl">
              {/* Variation 1: Table Layout for Competitor Analysis */}
              {renderSection(
                'What Are Similar Popular Apps? (Table View)',
                <BarChart2 className="w-5 h-5 text-zinc-300" />,
                'COMPETITOR ANALYSIS',
                <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                  <p className="text-sm">
                    Benchmarking against <strong>industry leaders</strong> such
                    as HubSpot, Salesforce, and Zoho CRM helps you understand
                    what features and strategies make them successful. This
                    analysis will <strong>highlight key differentiators</strong>{' '}
                    and identify areas where your CRM can excel.
                  </p>
                  <table className="min-w-full text-xs">
                    <thead>
                      <tr>
                        <th className="px-2 py-1 text-left font-bold text-zinc-600">
                          App
                        </th>
                        <th className="px-2 py-1 text-left font-bold text-zinc-600">
                          Strengths
                        </th>
                        <th className="px-2 py-1 text-left font-bold text-zinc-600">
                          Weaknesses
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-2 py-1 text-zinc-600">HubSpot</td>
                        <td className="px-2 py-1">
                          Excels in <strong>marketing</strong> and{' '}
                          <strong>automation</strong>
                        </td>
                        <td className="px-2 py-1">
                          Can be <strong>complex</strong> for small teams
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-1 text-zinc-600">Salesforce</td>
                        <td className="px-2 py-1">
                          Offers <strong>extensive integrations</strong> and
                          enterprise-grade features
                        </td>
                        <td className="px-2 py-1">
                          High cost and a steep learning curve
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-1 text-zinc-600">Zoho CRM</td>
                        <td className="px-2 py-1">
                          Affordable and <strong>scalable</strong> for small
                          businesses
                        </td>
                        <td className="px-2 py-1">
                          May lack some <strong>advanced features</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Variation 2: Grid of Cards for Competitor Overview */}
              {renderSection(
                'What Are Similar Popular Apps? (Card View)',
                <BarChart2 className="w-5 h-5 text-zinc-300" />,
                'COMPETITOR ANALYSIS',
                <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm space-y-4">
                  <p className="text-sm">
                    Analyzing <strong>market leaders</strong> provides insight
                    into the strengths and weaknesses that define success. This
                    overview allows you to spot opportunities for{' '}
                    <strong>differentiation</strong> in your own CRM.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-3 bg-white dark:bg-zinc-700 rounded-lg shadow">
                      <p className="text-xs font-bold">HubSpot</p>
                      <p className="text-xs">
                        Known for <strong>marketing</strong> and automation
                        excellence.
                      </p>
                    </div>
                    <div className="p-3 bg-white dark:bg-zinc-700 rounded-lg shadow">
                      <p className="text-xs font-bold">Salesforce</p>
                      <p className="text-xs">
                        Robust with extensive <strong>integrations</strong> for
                        enterprises.
                      </p>
                    </div>
                    <div className="p-3 bg-white dark:bg-zinc-700 rounded-lg shadow">
                      <p className="text-xs font-bold">Zoho CRM</p>
                      <p className="text-xs">
                        Affordable and <strong>scalable</strong> for small
                        businesses.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Variation 3: Minimalist List with Emoji Badges */}
              {renderSection(
                'What Are Similar Popular Apps? (Emoji List)',
                <BarChart2 className="w-5 h-5 text-zinc-300" />,
                'COMPETITOR ANALYSIS',
                <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm space-y-4">
                  <p className="text-sm">
                    Reviewing popular CRMs like HubSpot, Salesforce, and Zoho
                    CRM reveals the key elements driving their success. Use this
                    information to identify opportunities for{' '}
                    <strong>innovation</strong> in your own solution.
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>
                      <span aria-label="HubSpot" className="mr-1" role="img">
                        🔥
                      </span>
                      <strong>HubSpot:</strong> Excels in{' '}
                      <strong>marketing</strong> and <strong>automation</strong>
                      .
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
                </div>
              )}
            </div>

            {renderSection(
              'What Do I Need to Get Started?',
              <Rocket className="w-5 h-5 text-zinc-300" />,
              'PROJECT KICKOFF',
              <div className="space-y-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                <p className="text-sm">
                  A clear roadmap, defined requirements, and budget expectations
                  are essential for a successful CRM development kickoff.
                </p>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>
                    <strong>Feature Definition:</strong> Distinguish between
                    must-have and nice-to-have functionalities.
                  </li>
                  <li>
                    <strong>Integration Needs:</strong> Identify target tools
                    (e.g., email, accounting, marketing).
                  </li>
                  <li>
                    <strong>Budget & User Base:</strong> Establish cost
                    expectations and projected scale.
                  </li>
                </ul>
              </div>
            )}

            <div className="pl-16 space-y-4 rounded-xl">
              {/* Variation 1: Step-by-Step Timeline */}
              {renderSection(
                'What Do I Need to Get Started? (Step-by-Step)',
                <Rocket className="w-5 h-5 text-zinc-300" />,
                'PROJECT KICKOFF',
                <div className="space-y-6 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                  <p className="text-sm">
                    A clear roadmap is essential. Begin by outlining your{' '}
                    <strong>feature priorities</strong>, identifying key{' '}
                    <strong>integration needs</strong>, and establishing your{' '}
                    <strong>budget and user expectations</strong>.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="inline-block px-2 py-1 bg-gray-200 rounded-full text-xs font-bold">
                        1
                      </span>
                      <span className="text-xs font-semibold">
                        Feature Definition
                      </span>
                    </div>
                    <div className="pl-8 text-xs text-zinc-600">
                      Define which features are <strong>must-have</strong> and
                      which are <strong>nice-to-have</strong>.
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="inline-block px-2 py-1 bg-gray-200 rounded-full text-xs font-bold">
                        2
                      </span>
                      <span className="text-xs font-semibold">
                        Integration Needs
                      </span>
                    </div>
                    <div className="pl-8 text-xs text-zinc-600">
                      Identify the essential tools (e.g., email, accounting,
                      marketing) to integrate.
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="inline-block px-2 py-1 bg-gray-200 rounded-full text-xs font-bold">
                        3
                      </span>
                      <span className="text-xs font-semibold">
                        Budget & User Base
                      </span>
                    </div>
                    <div className="pl-8 text-xs text-zinc-600">
                      Set clear cost expectations and forecast your user growth.
                    </div>
                  </div>
                </div>
              )}

              {/* Variation 2: Checklist with Checkbox Icons */}
              {renderSection(
                'What Do I Need to Get Started? (Checklist)',
                <Rocket className="w-5 h-5 text-zinc-300" />,
                'PROJECT KICKOFF',
                <div className="space-y-6 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                  <p className="text-sm">
                    Kick off your CRM project with a focused checklist. Verify
                    that all key elements are in place for a successful launch.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 mr-2 text-green-600" />
                      <span>
                        <strong>Feature Definition:</strong> Clearly distinguish
                        must-have from optional features.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 mr-2 text-green-600" />
                      <span>
                        <strong>Integration Needs:</strong> List essential tools
                        (e.g., email, accounting, marketing).
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 mr-2 text-green-600" />
                      <span>
                        <strong>Budget & User Base:</strong> Establish cost
                        parameters and projected scale.
                      </span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Variation 3: Card-Based Overview */}
              {renderSection(
                'What Do I Need to Get Started? (Todo List)',
                <Rocket className="w-5 h-5 text-zinc-300" />,
                'PROJECT KICKOFF',
                <div className="space-y-6 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                  <p className="text-sm">
                    Begin your CRM journey by ticking off these essential steps.
                    Completing these tasks will ensure a smooth project kickoff
                    and clear development direction.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center">
                      <Square className="flex-shrink-0 w-4 h-4 mr-2 text-zinc-400" />
                      <span>
                        <strong>Feature Definition:</strong> Clearly outline
                        must-have versus optional functionalities.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Square className="flex-shrink-0 w-4 h-4 mr-2 text-zinc-400" />
                      <span>
                        <strong>Integration Needs:</strong> Identify critical
                        tools (e.g., email, accounting, marketing) for seamless
                        connectivity.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Square className="flex-shrink-0 w-4 h-4 mr-2 text-zinc-400" />
                      <span>
                        <strong>Budget & User Base:</strong> Establish clear
                        cost expectations and forecast your target scale.
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right */}
          <div className="col-span-4 p-4 border-l">
            {renderRecommendation()}
            <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
              {result.summary}
            </p>

            <div className="space-y-4">
              {/* Selected options */}
              {renderFactsCard(
                'Selected Options',
                settings as unknown as Record<string, string>
              )}

              {/* Analysis */}
              <div className="space-y-1">
                <h6 className="text-muted-foreground uppercase font-medium text-xxs">
                  Analysis
                </h6>
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

              {/* Tech Stack */}
              {renderFactsCard('Tech Stack', appTechstack)}
            </div>
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

function renderSection(
  title: string,
  icon: React.ReactNode,
  overline: string,
  content: React.ReactNode
) {
  return (
    <div className="bg-card dark:bg-zinc-800 rounded-lg p-4">
      <div className="flex items-center gap-1.5 mb-1">
        {icon}
        <span className="text-xs uppercase font-medium text-zinc-500 dark:text-zinc-400">
          {overline}
        </span>
      </div>
      <h4 className="text-lg font-semibold mb-3">{title}</h4>
      {content}
    </div>
  )
}

function getFeasibilityScore(feasibility: string): number {
  switch (feasibility.toLowerCase()) {
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
