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
        imgSrc: '/images/services/1.webp',
      },
      {
        alt: 'SG Pay',
        imgSrc: '/images/services/2.webp',
      },
      {
        alt: 'Photo Wall',
        imgSrc: '/images/services/3.webp',
      },
    ],
    [
      {
        alt: 'Digital Rewards Platform Interface',
        imgSrc: '/images/services/21.webp',
      },
      {
        alt: 'Mobile Payment System Dashboard',
        imgSrc: '/images/services/22.webp',
      },
      {
        alt: 'Interactive Photo Display Technology',
        imgSrc: '/images/services/23.webp',
      },
      {
        alt: 'Social Media Integration Wall',
        imgSrc: '/images/services/24.webp',
      },
    ],
  ],
}
