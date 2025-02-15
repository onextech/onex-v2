import { cn } from '@/lib/utils'

type BlockOverlayProps = {
  className?: string
  type?: number
}

export const BlockOverlay = ({ className, type = 1 }: BlockOverlayProps) => {
  if (type === 1) {
    return <DefaultOverlay className={className} />
  }

  return <DefaultOverlay className={className} />
}

const DefaultOverlay = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 z-10',
        'bg-gradient-to-b from-[rgb(83,84,95)] to-[rgb(16,16,19)] opacity-50',
        'md:from-transparent md:via-[rgba(16,16,19,0.25)] md:to-[rgb(16,16,19)]',
        className
      )}
    />
  )
}
