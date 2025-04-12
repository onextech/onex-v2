import type React from 'react'

import { ShareButton } from '@/components/app-idea-explorer/share-button'
import { Button } from '@/components/ui/button'
import { cn } from '@onex/utils'
import { RotateCcwIcon, Sparkles } from 'lucide-react'

interface HeaderExplorerProps {
  isLoading: boolean
  onReset: () => void
  onRetry: () => void
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
  showForm: boolean
}

export const HeaderExplorer: React.FC<HeaderExplorerProps> = ({
  isLoading,
  onReset,
  onRetry,
  setIsDialogOpen,
  showForm,
}) => {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center gap-3">
        <Sparkles className="w-5 h-5 text-zinc-500" />
        <div>
          <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            App Idea Explorer
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Check if your app idea is feasible
          </p>
        </div>
      </div>
      {!isLoading && (
        <div className="flex items-center md:justify-end gap-1">
          <Button
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 bg-transparent transition-colors"
            onClick={onReset}
            size="sm"
            variant="link"
          >
            Reset
          </Button>

          <Button onClick={onRetry} size="sm" variant="ghost">
            <RotateCcwIcon className="w-4 h-4" />
          </Button>

          {/* Share button with icon */}
          <ShareButton
            className={cn(showForm && 'hidden')}
            size="sm"
            variant="outline"
          />

          <Button
            className={cn('flex-1 md:flex-0', showForm && 'hidden')}
            onClick={() => setIsDialogOpen(true)}
            size="sm"
          >
            Download Report
          </Button>
        </div>
      )}
    </div>
  )
}
