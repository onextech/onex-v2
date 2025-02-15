import { PageSubHeader } from '@/components/core/page-headers'
import { Overline, PageSectionDescription } from '@/components/core/section'
import { featuresContent } from '@/src/content/home/features'
import Image from 'next/image'

export const FeaturesSection = () => {
  return (
    <section className="mx-auto w-full">
      <div className="w-full">
        <div className="mx-auto max-w-[840px] px-12 py-32 text-center">
          <Overline title={featuresContent.hero.title} />

          <PageSubHeader title={featuresContent.hero.description} />
        </div>

        <div className="grid grid-cols-1 border-t md:grid-cols-3 md:border-b">
          {featuresContent.features.map((feature) => (
            <div
              className="relative flex flex-col items-start border-b px-10 py-12 md:border-b-0 md:px-[60px] md:first:border-r md:last:border-l"
              key={feature.title}
            >
              <div className="relative mb-[4.375rem] size-[70px]">
                <Image
                  alt={feature.title}
                  className="object-contain"
                  fill
                  src={feature.iconUrl}
                />
              </div>

              <Overline title={feature.label} />

              <h3 className="mt-3 font-publico-text text-2xl font-normal leading-6 text-foreground">
                {feature.title}
              </h3>

              <PageSectionDescription
                className="mt-5"
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
