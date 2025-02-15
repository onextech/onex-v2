import { ReactNode } from 'react'
import Marquee, { MarqueeProps } from 'react-fast-marquee'

import { ClassNameProp } from '@/src/types/utils'

interface ReactFastMarqueeProps extends Partial<MarqueeProps>, ClassNameProp {
  autoFill?: boolean
  children: ReactNode | ReactNode[]
  speed?: number
}

export const ReactFastMarquee = ({
  autoFill = true,
  children,
  className = '',
  ...options
}: ReactFastMarqueeProps) => {
  return (
    <div className={`h-full w-full ${className}`}>
      <Marquee autoFill={autoFill} className={className} {...options}>
        {children}
      </Marquee>
    </div>
  )
}
