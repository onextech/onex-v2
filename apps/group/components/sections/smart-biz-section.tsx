import Image from 'next/image';

import { smartBizContent } from '@/src/content/what-we-do/smart-biz';
import { PageSectionButton } from '@/components/core/section';
import { PageSectionDescription } from '@/components/core/section';
import { PageSubHeader } from '@/components/core/page-headers';

export function SmartBizSection() {
  return (
    <section className='dark relative flex w-full flex-col bg-custom-dark-bg'>
      <div className='z-20 mx-auto w-full px-5 pb-8 pt-20 sm:px-10 md:max-w-3xl md:pt-40 lg:px-[60px] xl:px-[90px]'>
        <PageSubHeader title={smartBizContent.heading} className='mx-auto w-full text-center' />

        <PageSectionDescription
          className='mt-20 w-full text-center'
          description={smartBizContent.description[0]}
        />

        <PageSectionDescription
          className='mt-5 w-full text-center'
          description={smartBizContent.description[1]}
        />

        <PageSectionButton
          title={smartBizContent.button.title}
          label={smartBizContent.button.label}
          href={smartBizContent.button.href}
          className='mx-auto mt-8'
        />
      </div>

      {/* TODO: revisit this code when other sections are added in the page BELOW this section to test the layout */}
      <div className='absolute bottom-0 left-0 right-0 mx-auto aspect-square w-full translate-y-[65%] 2xl:translate-y-[75%]'>
        <Image
          src={smartBizContent.image.src}
          alt={smartBizContent.image.alt}
          fill
          style={{ objectFit: 'cover', objectPosition: 'bottom' }}
          priority
        />
      </div>
    </section>
  );
}
