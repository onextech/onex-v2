import Image from 'next/image';

import { customBizContent } from '@/src/content/what-we-do/custom-biz';
import { PageSectionButton } from '@/components/core/section';
import { PageSectionDescription } from '@/components/core/section';
import { PageSubHeader } from '@/components/core/page-headers';

export function CustomBizSoftwareSection() {
  return (
    <section className='dark w-full bg-black pt-16'>
      <div className='relative h-[690px]'>
        <Image
          src={customBizContent.image.src}
          alt={customBizContent.image.alt}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />

        <div className='relative z-20 mx-auto box-content px-5 pt-9 sm:px-10 sm:pt-16 md:max-w-2xl md:pt-10 lg:px-[60px] xl:px-[90px]'>
          <PageSubHeader
            title={customBizContent.heading}
            className='mx-auto w-full text-center md:w-3/5'
          />

          <PageSectionDescription
            className='w-full text-center font-publico-text text-base sm:text-xl'
            description={customBizContent.description}
          />

          <PageSectionButton
            title={customBizContent.button.title}
            label={customBizContent.button.label}
            href={customBizContent.button.href}
            className='mx-auto mt-8'
          />
        </div>
      </div>
    </section>
  );
}
