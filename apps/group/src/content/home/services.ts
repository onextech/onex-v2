import { Service, ServiceSlide, ServicesHero } from '@/src/types/service'

export const servicesContent: {
  hero: ServicesHero
  services: Service[]
  slider: ServiceSlide[][]
} = {
  hero: {
    title: 'Build Custom Solutions',
    description:
      'Streamline operations and unlock new growth for your business with tailored solutions. Create software that empowers your success.',
    heading: 'Software That Works for You, Not Against You',
  },
  services: [
    {
      title: 'Designed for Your Unique Needs',
      description:
        'Built to match your exact workflows, processes, and objectives, ensuring efficiency without compromise.',
      href: '/',
      iconUrl: '/images/icons/pencil-ruler.svg',
    },
    {
      title: 'Grows with Your Business',
      description:
        'Unlike off-the-shelf solutions, custom software evolves with your business, adapting to growth and new challenges.',
      href: '/',
      iconUrl: '/images/icons/web-code.svg',
    },
    {
      title: 'Gives You a Competitive Edge',
      description:
        'Empowers you with unique features, automation, and data-driven insights that help you move faster and outperform competitors.',
      href: '/',
      iconUrl: '/images/icons/laptop.svg',
    },
  ],
  slider: [
    [
      {
        alt: 'New Rewards',
        imgSrc: '/images/services/gallery-work-01.png',
      },
      {
        alt: 'SG Pay',
        imgSrc: '/images/services/gallery-work-02.png',
      },
      {
        alt: 'Photo Wall',
        imgSrc: '/images/services/gallery-work-03.png',
      },
      {
        alt: 'New Rewards',
        imgSrc: '/images/services/gallery-work-04.png',
      },
      {
        alt: 'SG Pay',
        imgSrc: '/images/services/gallery-work-05.png',
      },
      {
        alt: 'Photo Wall',
        imgSrc: '/images/services/gallery-work-06.png',
      },
    ],
    [
      {
        alt: 'Digital Rewards Platform Interface',
        imgSrc: '/images/services/gallery-work-09.png',
      },
      {
        alt: 'Mobile Payment System Dashboard',
        imgSrc: '/images/services/gallery-work-10.png',
      },
      {
        alt: 'Interactive Photo Display Technology',
        imgSrc: '/images/services/gallery-work-11.png',
      },
      {
        alt: 'Social Media Integration Wall',
        imgSrc: '/images/services/gallery-work-12.png',
      },
      {
        alt: 'Interactive Photo Display Technology',
        imgSrc: '/images/services/gallery-work-13.png',
      },
      {
        alt: 'Social Media Integration Wall',
        imgSrc: '/images/services/gallery-work-14.png',
      },
    ],
  ],
}
