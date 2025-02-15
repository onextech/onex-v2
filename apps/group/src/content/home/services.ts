import { Service, ServiceSlide, ServicesHero } from '@/src/types/service'

export const servicesContent: {
  hero: ServicesHero
  services: Service[]
  slider: ServiceSlide[][]
} = {
  hero: {
    title: 'Services',
    description:
      'We assist enterprise clients in their digital transformation by applying established and emerging technologies into their core business models.',
    heading: 'Build Custom Solutions',
  },
  services: [
    {
      title: 'Web Design',
      description:
        'A conversion centred approach to creating web and product designs that drive action.',
      href: '/',
      iconUrl: '/images/icons/pencil-ruler.svg',
    },
    {
      title: 'Web Development',
      description: 'Build tailor-made websites that drive leads and sales.',
      href: '/',
      iconUrl: '/images/icons/web-code.svg',
    },
    {
      title: 'Application Development',
      description:
        'Accelerate business agility across your organisation with scalable enterprise apps.',
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
