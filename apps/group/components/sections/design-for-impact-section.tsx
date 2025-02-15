import Image from 'next/image';

import { designContent } from '@/src/content/what-we-do/design';

import { PageSectionHeader } from '@/components/core/page-headers';
import { Overline, PageSectionDescription } from '@/components/core/section';
import { PageSectionButton } from '@/components/core/section';

import { BlockOverlay } from '@/components/block-overlays';

export const DesignForImpactSection = () => {
  return (
    <section className='dark relative mx-auto flex h-[600px] w-full items-center md:block'>
      <div className='absolute inset-0'>
        <Image
          src={designContent.image.src}
          alt={designContent.image.alt}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <BlockOverlay className='md:opacity-0' />

      <div className='relative z-20 box-content w-full px-5 sm:px-10 md:max-w-sm md:pt-16 lg:px-[60px] xl:px-[90px]'>
        <Overline title={designContent.title} />
        <PageSectionHeader title={designContent.heading} />

        <PageSectionDescription description={designContent.description} className='w-full' />

        <PageSectionButton
          title={designContent.button.title}
          label={designContent.button.label}
          href={designContent.button.href}
          className='mx-auto mt-8 sm:mx-0'
        />
      </div>
    </section>
  );
};
