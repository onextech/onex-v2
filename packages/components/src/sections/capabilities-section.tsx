import { PageSectionHeader } from '@onex/components/core/page-headers'
import { Overline, PageSectionDescription } from '@onex/components/core/section'
import { capabilitiesContent } from '@/src/content/what-we-do/capabilities'
import Image from 'next/image'

export const CapabilitiesSection = () => {
  return (
    <section className="dark mx-auto w-full">
      <div className="flex w-full flex-row bg-custom-dark-bg py-20 md:pb-28 md:pt-16">
        <div className="relative hidden h-[550px] w-[493px] md:block 2xl:flex-shrink-0">
          <Image
            alt={capabilitiesContent.image.alt}
            className="object-contain"
            fill
            priority
            sizes="(min-width: 1024px) 33vw, 493px"
            src={capabilitiesContent.image.src}
          />
        </div>

        <div className="mx-5 flex w-full flex-col justify-center sm:mx-10 md:ml-32 md:max-w-3xl">
          <Overline title={capabilitiesContent.title} />
          <PageSectionHeader title={capabilitiesContent.heading} />
          <PageSectionDescription
            className="w-5/6 font-publico-text text-xl"
            description={capabilitiesContent.description}
          />

          <div className="mt-12 flex w-full flex-col space-y-12 md:mt-20 md:w-5/6 md:flex-row md:space-x-16 md:space-y-0">
            {capabilitiesContent.capabilities.map((capability) => (
              <div className="" key={capability.title}>
                <Overline title={capability.title} />

                <ul className="mt-6 space-y-1 text-gray-400">
                  {capability.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
