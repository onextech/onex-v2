import { PageSectionHeader } from '@onex/components/core/page-headers'
import {
  Overline,
  PageSectionButton,
  PageSectionDescription,
} from '@onex/components/core/section'
import { techContent } from '@/src/content/what-we-do/tech'
import Image from 'next/image'

export const ModernTechSection = () => {
  return (
    <section className="dark mx-auto w-full">
      <div className="flex w-full flex-row bg-custom-dark-bg py-20 md:pb-0 md:pt-24">
        <div className="relative hidden h-[610px] w-[760px] md:block 2xl:flex-shrink-0">
          <Image
            alt={techContent.image.alt}
            className="object-contain"
            fill
            priority
            sizes="(min-width: 1024px) 33vw, 760px"
            src={techContent.image.src}
          />
        </div>

        <div className="mx-5 flex w-full flex-col sm:mx-10 md:ml-20 md:max-w-md">
          <Overline title={techContent.title} />
          <PageSectionHeader title={techContent.heading} />
          <PageSectionDescription
            className="w-5/6"
            description={techContent.description}
          />

          <div className="mt-10 flex flex-row gap-5">
            {techContent.techstack.map((tech) => (
              <div className="relative size-12" key={tech.alt}>
                <Image
                  alt={tech.alt}
                  className="object-contain"
                  fill
                  src={tech.src}
                />
              </div>
            ))}
          </div>

          <PageSectionButton
            className="mx-auto mt-8 sm:mx-0"
            href={techContent.button.href}
            label={techContent.button.label}
            title={techContent.button.title}
          />
        </div>
      </div>
    </section>
  )
}
