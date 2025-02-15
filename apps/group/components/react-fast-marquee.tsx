import Marquee, { MarqueeProps } from 'react-fast-marquee';
import { ReactNode } from 'react';
import { ClassNameProp } from '@/src/types/utils';

interface ReactFastMarqueeProps extends Partial<MarqueeProps>, ClassNameProp {
  children: ReactNode | ReactNode[];
  speed?: number;
  autoFill?: boolean;
}

export const ReactFastMarquee = ({
  children,
  className = '',
  autoFill = true,
  ...options
}: ReactFastMarqueeProps) => {
  return (
    <div className={`h-full w-full ${className}`}>
      <Marquee className={className} autoFill={autoFill} {...options}>
        {children}
      </Marquee>
    </div>
  );
};
