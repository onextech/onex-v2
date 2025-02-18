import { cn } from '@/lib/utils'

/**
 * Page level Headers
 */

interface PageHeaderProps {
  className?: string
  title: string
}

export const PageHeader = ({ title, className }: PageHeaderProps) => {
  return (
    <p
      className={cn(
        'mt-6 font-publico-headline text-5xl font-light sm:text-6xl',
        className
      )}
    >
      {title}
    </p>
  )
}

export const PageSubHeader = ({ title, className }: PageHeaderProps) => {
  return (
    <h3
      className={cn(
        'mt-6 font-publico-headline text-4xl font-light leading-tight text-foreground',
        className
      )}
    >
      {title}
    </h3>
  )
}

/**
 * Page Section level Headers
 */
interface PageSectionHeaderProps {
  className?: string
  title: string
}

export const PageSectionHeader = ({
  title,
  className,
}: PageSectionHeaderProps) => {
  return (
    <h2 className={cn('font-publico-headline text-5xl font-light', className)}>
      {title}
    </h2>
  )
}

export const PageSectionItemHeader = ({
  title,
  className,
}: PageSectionHeaderProps) => {
  return (
    <h3
      className={cn(
        'mt-3 font-publico-text text-2xl font-normal leading-6 text-foreground',
        className
      )}
    >
      {title}
    </h3>
  )
}
