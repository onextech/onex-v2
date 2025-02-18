import type React from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Briefcase,
  ListIcon as Category,
  Laptop,
  Type,
  Users,
} from 'lucide-react'

interface AppIdeaSettings {
  appCategory: string
  appType: string
  industry: string
  platform: string
  targetAudience: string
}

interface SettingsProps {
  onSettingsChange: (settings: AppIdeaSettings) => void
  settings: AppIdeaSettings
}

const appCategories = [
  'Social Networking',
  'Productivity',
  'Entertainment',
  'Education',
  'Health & Fitness',
  'E-commerce',
  'Travel',
  'Finance',
]

const appTypesByCategory: { [key: string]: string[] } = {
  'E-commerce': ['Marketplace', 'Retail', 'Auction', 'Subscription Box'],
  Education: [
    'Language Learning',
    'Skill Development',
    'Online Courses',
    'Educational Games',
  ],
  Entertainment: [
    'Gaming',
    'Video Streaming',
    'Music Streaming',
    'AR/VR Experiences',
  ],
  Finance: ['Banking', 'Investing', 'Budgeting', 'Cryptocurrency'],
  'Health & Fitness': [
    'Workout Tracking',
    'Nutrition Planning',
    'Mental Health',
    'Medical Reference',
  ],
  Productivity: [
    'Task Management',
    'Note-taking',
    'Time Tracking',
    'Project Management',
  ],
  'Social Networking': [
    'Dating',
    'Professional Networking',
    'Community Building',
    'Photo Sharing',
  ],
  Travel: ['Booking', 'Trip Planning', 'Local Guides', 'Transportation'],
}

export const SettingsExplorer: React.FC<SettingsProps> = ({
  onSettingsChange,
  settings,
}) => {
  const handleSettingChange = (key: keyof AppIdeaSettings, value: string) => {
    onSettingsChange({ ...settings, [key]: value })
  }

  return (
    <div className="space-y-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50">
      {/* Industry Select */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Briefcase className="w-3.5 h-3.5 text-zinc-500" />
          <span className="text-sm text-zinc-500">Industry</span>
        </div>
        <Select
          onValueChange={(value) => handleSettingChange('industry', value)}
          value={settings.industry}
        >
          <SelectTrigger className="w-[140px] h-8 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="healthcare">Healthcare</SelectItem>
            <SelectItem value="education">Education</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="entertainment">Entertainment</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* App Category Select */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Category className="w-3.5 h-3.5 text-zinc-500" />
          <span className="text-sm text-zinc-500">App Category</span>
        </div>
        <Select
          onValueChange={(value) => {
            handleSettingChange('appCategory', value)
            handleSettingChange('appType', '')
          }}
          value={settings.appCategory}
        >
          <SelectTrigger className="w-[140px] h-8 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {appCategories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* App Type Select */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Type className="w-3.5 h-3.5 text-zinc-500" />
          <span className="text-sm text-zinc-500">App Type</span>
        </div>
        <Select
          disabled={!settings.appCategory}
          onValueChange={(value) => handleSettingChange('appType', value)}
          value={settings.appType}
        >
          <SelectTrigger className="w-[140px] h-8 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {settings.appCategory &&
              appTypesByCategory[settings.appCategory]?.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      {/* Target Audience Select */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Users className="w-3.5 h-3.5 text-zinc-500" />
          <span className="text-sm text-zinc-500">Target Audience</span>
        </div>
        <Select
          onValueChange={(value) =>
            handleSettingChange('targetAudience', value)
          }
          value={settings.targetAudience}
        >
          <SelectTrigger className="w-[140px] h-8 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="customers">Customers</SelectItem>
            <SelectItem value="employees">Employees</SelectItem>
            <SelectItem value="businesses">Businesses</SelectItem>
            <SelectItem value="general">General</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Platform Select */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Laptop className="w-3.5 h-3.5 text-zinc-500" />
          <span className="text-sm text-zinc-500">Platform</span>
        </div>
        <Select
          onValueChange={(value) => handleSettingChange('platform', value)}
          value={settings.platform}
        >
          <SelectTrigger className="w-[140px] h-8 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="web">Web</SelectItem>
            <SelectItem value="mobile">Mobile</SelectItem>
            <SelectItem value="desktop">Desktop</SelectItem>
            <SelectItem value="cross-platform">Cross-platform</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
