'use client'

import type React from 'react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  BarChart2,
  CheckCircle2,
  List,
  Loader2,
  Rocket,
  Target,
  ThumbsDown,
  ThumbsUp,
  TrendingUp,
  Zap,
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
  isLoading: boolean
  onReset: () => void
  result: AppIdeaResult
}

export const PreviewGeneration = ({
  isLoading,
  onReset,
  result,
}: PreviewProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const availableTexts = [
    'Analyzing market trends...',
    'Evaluating technical feasibility...',
    'Assessing user demand...',
  ]
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [progress, setProgress] = useState(0)

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

  const renderSection = (
    title: string,
    icon: React.ReactNode,
    content: React.ReactNode
  ) => (
    <div className="bg-white dark:bg-zinc-800 rounded-lg p-4">
      <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h4>
      {content}
    </div>
  )

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
        <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center">
          {overallScore >= 3 ? (
            <ThumbsUp className="mr-2 w-5 h-5 text-zinc-300" />
          ) : (
            <ThumbsDown className="mr-2 w-5 h-5 text-zinc-300" />
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
            <Loader2 className="w-full h-full animate-spin text-zinc-900 dark:text-zinc-100" />
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
      <div className="grid grid-cols-12">
        <div className="col-span-4 p-4 border-r">
          {renderRecommendation()}
          <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
            {result.summary}
          </p>
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
            <div className="flex justify-between text-sm">
              <span className="text-zinc-500">Competitive Landscape</span>
              <span className="text-zinc-900 dark:text-zinc-100 text-right">
                {result.competitiveLandscape}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-500">Complexity Rating</span>
              <span className="text-zinc-900 dark:text-zinc-100 text-right">
                {result.technicalFeasibility.complexityRating}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-500">Est. Development Effort</span>
              <span className="text-zinc-900 dark:text-zinc-100 text-right">
                {result.technicalFeasibility.estimatedEffort}
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-8">
          {renderSection(
            'MVP Features',
            <CheckCircle2 className="w-5 h-5 text-zinc-300" />,
            <ul className="text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              {result.productScope.mvpFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
          {renderSection(
            'Nice-to-Have Features',
            <Zap className="w-5 h-5 text-zinc-300" />,
            <ul className="text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              {result.productScope.niceToHaveFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
          {renderSection(
            'Technical Requirements',
            <Rocket className="w-5 h-5 text-zinc-300" />,
            <div className="space-y-2">
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                {result.productScope.technicalRequirements}
              </p>
              <h5 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Integration & Scalability
              </h5>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                {result.productScope.integrationAndScalability}
              </p>
              <h5 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mt-4">
                Recommended Tech Stack
              </h5>
              <ul className="text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                {result.technicalFeasibility.techStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
          {renderSection(
            'Next Steps',
            <List className="w-5 h-5 text-zinc-300" />,
            <ul className="text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              {result.nextSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          )}
          {renderSection(
            'Market Analysis',
            <BarChart2 className="w-5 h-5 text-zinc-300" />,
            <div className="space-y-4">
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                The industry shows {result.marketPotential.toLowerCase()}{' '}
                potential for your app idea. With a target user base of{' '}
                {result.targetUserBase}, there's significant room for growth and
                adoption.
              </p>
              <h5 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Key Market Insights:
              </h5>
              <ul className="text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Market Size: Large and growing</li>
                <li>User Demand: High for innovative solutions</li>
                <li>Competition: {result.competitiveLandscape}</li>
                <li>Growth Trajectory: Upward trend expected</li>
              </ul>
            </div>
          )}
          {renderSection(
            'Business Model',
            <TrendingUp className="w-5 h-5 text-zinc-300" />,
            <div className="space-y-4">
              <h5 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Monetization Strategies:
              </h5>
              <ul className="text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                {result.businessModel.monetizationStrategies.map(
                  (strategy, index) => (
                    <li key={index}>{strategy}</li>
                  )
                )}
              </ul>
              <h5 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Potential Revenue Streams:
              </h5>
              <ul className="text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                {result.businessModel.revenueStreams.map((stream, index) => (
                  <li key={index}>{stream}</li>
                ))}
              </ul>
            </div>
          )}
          {renderSection(
            'Risk Assessment',
            <Target className="w-5 h-5 text-zinc-300" />,
            <div className="space-y-4">
              <h5 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Potential Challenges:
              </h5>
              <ul className="text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                {result.potentialChallenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
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
      <LeadInfoDialog onOpenChange={setIsDialogOpen} open={isDialogOpen} />
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
