'use client'

import type React from 'react'
import { useState } from 'react'

import { PageSectionHeader } from '@/components/core/page-headers'
import { PageSectionDescription } from '@/components/core/section'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

interface AppIdeaSample {
  description: string
  formValues: {
    appCategory: string
    appIdea: string
    appType: string
    industry: string
    platform: string
    targetAudience: string
  }
  title: string
}

interface AppIdeaGalleryProps {
  onSelectIdea: (formValues: AppIdeaSample['formValues']) => void
}

const appIdeas: AppIdeaSample[] = [
  {
    title: 'Inventory Management System',
    description: 'Streamline inventory tracking and order management for SMEs',
    formValues: {
      appCategory: 'Productivity',
      appIdea:
        'A cloud-based inventory management system with real-time tracking, automated reordering, and integration with popular e-commerce platforms',
      appType: 'Inventory Management',
      industry: 'retail',
      platform: 'web',
      targetAudience: 'businesses',
    },
  },
  {
    title: 'Employee Scheduling Software',
    description:
      'Optimize staff scheduling and time tracking for small businesses',
    formValues: {
      appCategory: 'Productivity',
      appIdea:
        'An intuitive employee scheduling app with shift management, time tracking, and payroll integration for small to medium-sized businesses',
      appType: 'Workforce Management',
      industry: 'human resources',
      platform: 'cross-platform',
      targetAudience: 'businesses',
    },
  },
  {
    title: 'Business Expense Tracker',
    description: 'Simplify expense reporting and financial management for SMEs',
    formValues: {
      appCategory: 'Finance',
      appIdea:
        'A mobile-first expense tracking app with receipt scanning, automated categorization, and integration with popular accounting software',
      appType: 'Expense Management',
      industry: 'finance',
      platform: 'mobile',
      targetAudience: 'businesses',
    },
  },
  {
    title: 'CRM for Small Businesses',
    description: 'Manage customer relationships and sales pipeline effectively',
    formValues: {
      appCategory: 'Productivity',
      appIdea:
        'A user-friendly CRM system tailored for small businesses, featuring contact management, deal tracking, and email marketing integration',
      appType: 'Customer Relationship Management',
      industry: 'sales',
      platform: 'web',
      targetAudience: 'businesses',
    },
  },
  {
    title: 'Project Management Tool',
    description: 'Streamline project planning and team collaboration for SMEs',
    formValues: {
      appCategory: 'Productivity',
      appIdea:
        'A comprehensive project management platform with task assignment, time tracking, and Gantt charts, designed for small to medium-sized teams',
      appType: 'Project Management',
      industry: 'technology',
      platform: 'cross-platform',
      targetAudience: 'businesses',
    },
  },
  {
    title: 'Supply Chain Management System',
    description: 'Optimize supply chain operations for small manufacturers',
    formValues: {
      appCategory: 'Productivity',
      appIdea:
        'An end-to-end supply chain management solution for small manufacturers, featuring demand forecasting, supplier management, and logistics optimization',
      appType: 'Supply Chain Management',
      industry: 'manufacturing',
      platform: 'web',
      targetAudience: 'businesses',
    },
  },
  {
    title: 'Business Intelligence Dashboard',
    description:
      'Visualize key business metrics and make data-driven decisions',
    formValues: {
      appCategory: 'Productivity',
      appIdea:
        'A customizable business intelligence dashboard that integrates with various data sources to provide real-time insights and analytics for SME owners',
      appType: 'Business Intelligence',
      industry: 'technology',
      platform: 'web',
      targetAudience: 'businesses',
    },
  },
  {
    title: 'Invoicing and Billing Software',
    description:
      'Automate invoicing and payment collection for small businesses',
    formValues: {
      appCategory: 'Finance',
      appIdea:
        'A user-friendly invoicing and billing system with customizable templates, recurring invoices, and integration with payment gateways',
      appType: 'Invoicing',
      industry: 'finance',
      platform: 'web',
      targetAudience: 'businesses',
    },
  },
  {
    title: 'Employee Training Platform',
    description:
      'Facilitate online learning and skill development for SME staff',
    formValues: {
      appCategory: 'Education',
      appIdea:
        'A comprehensive e-learning platform for employee training, featuring course creation tools, progress tracking, and certification management',
      appType: 'E-Learning',
      industry: 'education',
      platform: 'web',
      targetAudience: 'businesses',
    },
  },
  {
    title: 'Customer Support Ticketing System',
    description: 'Improve customer service efficiency for growing businesses',
    formValues: {
      appCategory: 'Productivity',
      appIdea:
        'A scalable customer support ticketing system with automated ticket routing, knowledge base integration, and performance analytics',
      appType: 'Customer Support',
      industry: 'technology',
      platform: 'web',
      targetAudience: 'businesses',
    },
  },
  {
    title: 'Digital Asset Management Tool',
    description: 'Organize and share digital assets across small teams',
    formValues: {
      appCategory: 'Productivity',
      appIdea:
        'A cloud-based digital asset management solution for SMEs, featuring advanced search, version control, and secure sharing capabilities',
      appType: 'Asset Management',
      industry: 'technology',
      platform: 'web',
      targetAudience: 'businesses',
    },
  },
  {
    title: 'Business Process Automation Platform',
    description: 'Streamline and automate repetitive tasks for SMEs',
    formValues: {
      appCategory: 'Productivity',
      appIdea:
        'A no-code business process automation platform that allows SMEs to create custom workflows, automate tasks, and integrate with existing tools',
      appType: 'Process Automation',
      industry: 'technology',
      platform: 'web',
      targetAudience: 'businesses',
    },
  },
]

export const AppIdeaGallery: React.FC<AppIdeaGalleryProps> = ({
  onSelectIdea,
}) => {
  const [visibleIdeas, setVisibleIdeas] = useState(8)

  const loadMoreIdeas = () => {
    setVisibleIdeas((prevVisible) => Math.min(prevVisible + 8, appIdeas.length))
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="mb-4">
        <PageSectionHeader className="text-2xl" title="From the Community" />
        <PageSectionDescription description="Explore app ideas" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {appIdeas.slice(0, visibleIdeas).map((idea, index) => (
          <button
            className="group block text-left overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 ease-in-out hover:shadow-md dark:hover:shadow-zinc-800/30"
            key={index}
            onClick={() => onSelectIdea(idea.formValues)}
          >
            <div className="p-4">
              <h3 className="font-medium text-sm text-zinc-900 dark:text-zinc-100 mb-1 truncate group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                {idea.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2 line-clamp-2 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                {idea.description}
              </p>
              <div className="flex items-center justify-between mt-2">
                <Badge className="text-xs" variant="secondary">
                  {idea.formValues.appCategory}
                </Badge>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                  {idea.formValues.appType}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
      {visibleIdeas < appIdeas.length && (
        <div className="mt-8 text-center">
          <Button
            className="inline-flex items-center"
            onClick={loadMoreIdeas}
            variant="outline"
          >
            Load More
            <ChevronDown className="w-4 h-4 ml-1" />
          </Button>
        </div>
      )}
    </div>
  )
}
