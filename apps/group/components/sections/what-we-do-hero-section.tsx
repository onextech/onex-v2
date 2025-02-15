import { whatWeDoContent } from '@/src/content/what-we-do/hero';

import { PageHeader } from '@/components/core/page-headers';
import { Overline } from '@/components/core/section';
import { ServiceGallery } from '@/components/service-gallery';

const [topSlides, bottomSlides] = whatWeDoContent.slider;

export const WhatWeDoHeroSection = () => {
  return (
    <section className='dark mx-auto w-full'>
      <div className='flex w-full flex-col bg-custom-dark-bg text-white'>
        <div className='mx-auto max-w-[840px] px-5 pb-8 text-center sm:px-12 md:pb-16'>
          <Overline title={whatWeDoContent.hero.title} />
          <PageHeader title={whatWeDoContent.hero.heading} />
        </div>

        <ServiceGallery
          slider={{ topSlides, bottomSlides }}
          services={whatWeDoContent.services}
          sliderPriority={true}
        />
      </div>
    </section>
  );
};
