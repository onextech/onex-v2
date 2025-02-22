import { PageSectionHeader } from '@/components/core/page-headers'
import { Overline, PageSectionDescription } from '@/components/core/section'
import { ServiceGallery } from '@/components/service-gallery'
import { servicesContent } from '@/src/content/home/services'

const [topSlides, bottomSlides] = servicesContent.slider

export const GalleryMarqueeSection = () => {
  return (
    <section className="dark mx-auto w-full">
      <div className="flex w-full flex-col bg-custom-dark-bg text-white">
        <div className="mx-auto max-w-3xl px-12 pb-8 pt-16 text-center md:pb-16 md:pt-32">
          <Overline title={servicesContent.hero.title} />
          <PageSectionHeader
            className="mt-6 mb-3"
            title={servicesContent.hero.heading}
          />
          <PageSectionDescription
            className="mx-auto max-w-2xl text-xl text-gray-400"
            description={servicesContent.hero.description}
          />
        </div>

        <ServiceGallery
          services={servicesContent.services}
          slider={{ bottomSlides, topSlides }}
        />
      </div>
    </section>
  )
}
