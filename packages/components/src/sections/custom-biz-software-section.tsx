import { PageSubHeader } from '@onex/components/src/core/page-headers'
import {
  PageSectionButton,
  PageSectionDescription,
} from '@onex/components/src/core/section'
import { customBizContent } from '@/src/content/what-we-do/custom-biz'
import Image from 'next/image'

export function CustomBizSoftwareSection() {
  return (
    <section className="dark w-full bg-black pt-16">
      <div className="relative h-[690px]">
        <Image
          alt={customBizContent.image.alt}
          fill
          priority
          src={customBizContent.image.src}
          style={{ objectFit: 'cover' }}
        />

        <div className="relative z-20 mx-auto box-content px-5 pt-9 sm:px-10 sm:pt-16 md:max-w-2xl md:pt-10 lg:px-[60px] xl:px-[90px]">
          <PageSubHeader
            className="mx-auto w-full text-center md:w-3/5"
            title={customBizContent.heading}
          />

          <PageSectionDescription
            className="w-full text-center font-publico-text text-base sm:text-xl"
            description={customBizContent.description}
          />

          <PageSectionButton
            className="mx-auto mt-8"
            href={customBizContent.button.href}
            label={customBizContent.button.label}
            title={customBizContent.button.title}
          />
        </div>
      </div>
    </section>
  )
}
