import ArrowRightSVGIcon from '../svg-icons/arrow-right'
import { cn } from '@onex/utils'
import { SectionButton } from '../types/section'
import Link from 'next/link'

/**
 * Primitives for all the UI contained inside a section
 */

interface OverlineProps {
  className?: string
  title: string
}

export const Overline = ({ title, className }: OverlineProps) => {
  return (
    <p
      className={cn(
        'text-xs font-bold uppercase leading-none tracking-2px text-title-gray',
        className
      )}
    >
      {title}
    </p>
  )
}

interface PageSectionDescriptionProps {
  className?: string
  description: string
}

export const PageSectionDescription = ({
  className,
  description,
}: PageSectionDescriptionProps) => {
  return <p className={cn('text-muted-foreground', className)}>{description}</p>
}

interface PageSectionButtonProps extends SectionButton {
  className?: string
}

export const PageSectionButton = ({
  title,
  className,
  href,
  label,
}: PageSectionButtonProps) => {
  return (
    <Link
      className={cn(
        'group mt-8 flex w-full flex-col justify-between border border-slate-700 px-10 py-6 hover:border-white sm:mt-9 sm:max-w-[25rem]',
        className
      )}
      href={href}
    >
      <p className="font-roboto text-xxs font-black uppercase tracking-2px text-gray-500">
        {title}
      </p>
      <div className="mt-2 flex w-full flex-row items-center justify-between">
        <p className="font-publico-text text-base font-normal leading-4 sm:text-xl sm:leading-5">
          {label}
        </p>
        <ArrowRightSVGIcon
          className="text-gray-500 group-hover:text-white"
          size={20}
        />
      </div>
    </Link>
  )
}
