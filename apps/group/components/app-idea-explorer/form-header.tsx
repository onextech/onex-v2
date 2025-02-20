import type React from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Sparkles } from 'lucide-react'

interface HeaderExplorerProps {
  isLoading: boolean
  onReset: () => void
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
  showForm: boolean
}

export const HeaderExplorer: React.FC<HeaderExplorerProps> = ({
  isLoading,
  onReset,
  setIsDialogOpen,
  showForm,
}) => {
  return (
    <div className="p-4 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800">
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
        <div className="flex items-center justify-end gap-1">
          <Button
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            onClick={onReset}
            size="sm"
            variant="link"
          >
            Reset
          </Button>
          <Button
            className={cn(showForm && 'hidden')}
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
