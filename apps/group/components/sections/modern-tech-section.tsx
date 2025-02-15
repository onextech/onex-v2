import Image from 'next/image';

import { Overline, PageSectionDescription } from '@/components/core/section';
import { PageSectionHeader } from '@/components/core/page-headers';

import { techContent } from '@/src/content/what-we-do/tech';
import { PageSectionButton } from '@/components/core/section';

export const ModernTechSection = () => {
  return (
    <section className='dark mx-auto w-full'>
      <div className='flex w-full flex-row bg-custom-dark-bg py-20 md:pb-0 md:pt-24'>
        <div className='relative hidden h-[610px] w-[760px] md:block 2xl:flex-shrink-0'>
          <Image
            src={techContent.image.src}
            alt={techContent.image.alt}
            fill
            sizes='(min-width: 1024px) 33vw, 760px'
            className='object-contain'
            priority
          />
        </div>

        <div className='mx-5 flex w-full flex-col sm:mx-10 md:ml-20 md:max-w-md'>
          <Overline title={techContent.title} />
          <PageSectionHeader title={techContent.heading} />
          <PageSectionDescription className='w-5/6' description={techContent.description} />

          <div className='mt-10 flex flex-row gap-5'>
            {techContent.techstack.map((tech) => (
              <div key={tech.alt} className='relative size-12'>
                <Image src={tech.src} alt={tech.alt} fill className='object-contain' />
              </div>
            ))}
          </div>

          <PageSectionButton
            title={techContent.button.title}
            label={techContent.button.label}
            href={techContent.button.href}
            className='mx-auto mt-8 sm:mx-0'
          />
        </div>
      </div>
    </section>
  );
};
