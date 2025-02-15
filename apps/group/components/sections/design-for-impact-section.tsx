import { BlockOverlay } from '@/components/block-overlays'
import { PageSectionHeader } from '@/components/core/page-headers'
import {
  Overline,
  PageSectionButton,
  PageSectionDescription,
} from '@/components/core/section'
import { designContent } from '@/src/content/what-we-do/design'
import Image from 'next/image'

export const DesignForImpactSection = () => {
  return (
    <section className="dark relative mx-auto flex h-[600px] w-full items-center md:block">
      <div className="absolute inset-0">
        <Image
          alt={designContent.image.alt}
          fill
          priority
          src={designContent.image.src}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <BlockOverlay className="md:opacity-0" />

      <div className="relative z-20 box-content w-full px-5 sm:px-10 md:max-w-sm md:pt-16 lg:px-[60px] xl:px-[90px]">
        <Overline title={designContent.title} />
        <PageSectionHeader title={designContent.heading} />

        <PageSectionDescription
          className="w-full"
          description={designContent.description}
        />

        <PageSectionButton
          className="mx-auto mt-8 sm:mx-0"
          href={designContent.button.href}
          label={designContent.button.label}
          title={designContent.button.title}
        />
      </div>
    </section>
  )
}
