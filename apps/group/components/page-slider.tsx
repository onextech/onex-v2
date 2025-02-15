import { ReactFastMarquee } from '@/components/react-fast-marquee'
import { cn } from '@/lib/utils'
import { ImageSlide } from '@/src/types/utils'
import Image from 'next/image'

/**
 * Props for the PageSlider component based on the ReactFastMarquee
 */
interface PageSliderProps {
  /** Additional classes to apply to the slider container */
  className?: string

  /** Direction of the slider movement. Defaults to 'right' */
  direction?: 'left' | 'right'

  /** Whether to show gradient overlay on edges. Defaults to false */
  gradient?: boolean

  /** Height of the container for each slide. Example: '225px' */
  height?: number

  /** Whether to prioritize the loading of the images. Defaults to false */
  priority?: boolean

  /** Additional classes to apply to each individual slide */
  slideClassName?: string

  /** Array of image slides, each containing imgSrc and alt text */
  slides: ImageSlide[]

  /** Speed of the slider movement in pixels per second. Defaults to 50 */
  speed?: number

  /** Width of the container for each slide. Example: '450px' */
  width?: number
}

export const PageSlider = ({
  className = '',
  direction = 'right',
  height = 225,
  priority = false,
  slideClassName = '',
  slides,
  speed = 50,
  width = 450,
}: PageSliderProps) => {
  return (
    <div className={cn('w-full overflow-hidden', className)} style={{ height }}>
      <ReactFastMarquee className="h-full" direction={direction} speed={speed}>
        {slides.map((slide) => (
          <div
            className={cn('relative mr-6 overflow-hidden', slideClassName)}
            key={slide.alt}
            style={{
              height,
              minHeight: height,
              minWidth: width,
              width,
            }}
          >
            <Image
              alt={slide.alt}
              className="object-cover"
              fill
              priority={priority}
              sizes={`(max-width: 768px) 100vw, ${width}px`}
              src={slide.imgSrc}
              style={{
                height: '100%',
                width: '100%',
              }}
            />
          </div>
        ))}
      </ReactFastMarquee>
    </div>
  )
}
