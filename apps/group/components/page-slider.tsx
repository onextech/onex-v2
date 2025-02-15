import { ReactFastMarquee } from '@/components/react-fast-marquee';
import Image from 'next/image';
import { ImageSlide } from '@/src/types/utils';
import { cn } from '@/lib/utils';

/**
 * Props for the PageSlider component based on the ReactFastMarquee
 */
interface PageSliderProps {
  /** Array of image slides, each containing imgSrc and alt text */
  slides: ImageSlide[];

  /** Direction of the slider movement. Defaults to 'right' */
  direction?: 'left' | 'right';

  /** Speed of the slider movement in pixels per second. Defaults to 50 */
  speed?: number;

  /** Whether to show gradient overlay on edges. Defaults to false */
  gradient?: boolean;

  /** Width of the container for each slide. Example: '450px' */
  width?: number;

  /** Height of the container for each slide. Example: '225px' */
  height?: number;

  /** Additional classes to apply to the slider container */
  className?: string;

  /** Additional classes to apply to each individual slide */
  slideClassName?: string;

  /** Whether to prioritize the loading of the images. Defaults to false */
  priority?: boolean;
}

export const PageSlider = ({
  slides,
  direction = 'right',
  speed = 50,
  width = 450,
  height = 225,
  className = '',
  slideClassName = '',
  priority = false,
}: PageSliderProps) => {
  return (
    <div className={cn('w-full overflow-hidden', className)} style={{ height }}>
      <ReactFastMarquee className='h-full' direction={direction} speed={speed}>
        {slides.map((slide) => (
          <div
            key={slide.alt}
            className={cn('relative mr-6 overflow-hidden', slideClassName)}
            style={{
              width,
              height,
              minWidth: width,
              minHeight: height,
            }}
          >
            <Image
              priority={priority}
              src={slide.imgSrc}
              alt={slide.alt}
              fill
              sizes={`(max-width: 768px) 100vw, ${width}px`}
              className='object-cover'
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        ))}
      </ReactFastMarquee>
    </div>
  );
};
