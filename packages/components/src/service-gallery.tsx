import { BlockOverlay } from '@onex/components/src/block-overlays'
import { PageSlider } from '@onex/components/src/page-slider'
import { ServiceSlide } from './types/service'
import Image from 'next/image'

interface Service {
  description: string
  href: string
  iconUrl: string
  title: string
}

interface ServiceGalleryProps {
  disableServices?: boolean
  gradientOverlay?: string // pass tailwind gradient utility classes
  services: Service[]
  slider: {
    bottomSlides: ServiceSlide[]
    topSlides: ServiceSlide[]
  }
  sliderPriority?: boolean
}

export const ServiceGallery = ({
  gradientOverlay = 'from-transparent via-[rgba(16,16,19,0.25)] to-[rgb(16,16,19)]',
  services,
  slider,
  sliderPriority = false,
  disableServices,
}: ServiceGalleryProps) => {
  const [topSlides, bottomSlides] = [slider.topSlides, slider.bottomSlides]

  return (
    <>
      <div className="relative flex w-full flex-col gap-4">
        <BlockOverlay className={gradientOverlay} />
        <PageSlider
          direction="right"
          priority={sliderPriority}
          slides={topSlides}
        />
        <PageSlider
          direction="left"
          priority={sliderPriority}
          slides={bottomSlides}
        />
      </div>

      {!disableServices && (
        <div className="grid w-full grid-cols-1 gap-4 px-5 py-12 text-white sm:px-10 md:grid-cols-3 lg:px-[60px] xl:px-[90px]">
          {services.map((service) => (
            <div
              className="mb-[30px] flex flex-col items-center justify-start"
              key={service.title}
            >
              <div className="relative size-[3.125rem]">
                <Image alt={service.title} fill src={service.iconUrl} />
              </div>

              <div className="group mt-5 flex items-center gap-2">
                <h6 className="text-center text-xl font-medium leading-none text-white">
                  {service.title}
                </h6>
              </div>

              <p className="mt-3 text-center text-base font-normal text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
