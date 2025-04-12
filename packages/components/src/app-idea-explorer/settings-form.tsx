import type React from 'react'

import {
  appCategories,
  appIndustrys,
  appPlatforms,
  appTargetAudiences,
  appTypesByCategory,
} from '@/components/app-idea-explorer/mocks'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import orderBy from 'lodash/orderBy'
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

export const SettingsForm: React.FC<SettingsProps> = ({
  onSettingsChange,
  settings,
}) => {
  const handleSettingChange = (key: keyof AppIdeaSettings, value: string) => {
    onSettingsChange({ ...settings, [key]: value })
  }

  return (
    <div className="space-y-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50">
      {/* App Category Select */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Category className="w-3.5 h-3.5 text-zinc-500" />
          <span className="text-sm text-zinc-500">App Category</span>
        </div>
        <Select
          onValueChange={(value) => {
            const nextSettings = {
              ...settings,
              appCategory: value,
              appType: appTypesByCategory[value]?.[0] || '',
            }
            onSettingsChange(nextSettings)
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
          onValueChange={(value) =>
            value && handleSettingChange('appType', value)
          }
          value={settings.appType}
        >
          <SelectTrigger className="w-[140px] h-8 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {settings.appCategory &&
              orderBy(appTypesByCategory[settings.appCategory])?.map((type) => (
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
            {appTargetAudiences.map((targetAudience) => (
              <SelectItem key={targetAudience} value={targetAudience}>
                {targetAudience}
              </SelectItem>
            ))}
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
            {appPlatforms.map((platform) => (
              <SelectItem key={platform} value={platform}>
                {platform}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

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
            {appIndustrys.map((industry) => (
              <SelectItem key={industry} value={industry}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
