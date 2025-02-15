import { Feature, FeatureHero } from '@/src/types/feature'

export const featuresContent: { features: Feature[]; hero: FeatureHero } = {
  features: [
    {
      title: 'Fully-managed service',
      description:
        'Back-end infrastructure for integrating, managing, and securing data of any kind, from any source, at massive scale.',
      iconUrl: '/images/icons/managed-service-svg-icon.svg',
      label: 'RELIABLE',
    },
    {
      title: 'Direct ownership',
      description:
        'Work with a dedicated team that is committed to delivering effective and value-driven innovations.',
      iconUrl: '/images/icons/direct-ownership-svg-icon.svg',
      label: 'OPEN COMMUNICATION',
    },
    {
      title: 'Built to order',
      description:
        'Custom-made for businesses according to the specific challenges and goals of the company in order to ensure accurate, quality delivery.',
      iconUrl: '/images/icons/build-to-order-svg-icon.svg',
      label: 'QUALITY',
    },
  ],
  hero: {
    title: 'GREETINGS, WE ARE ONE X',
    description:
      "People don't want software, they want results. And so we do software differently - simply by paying attention to quality, design and your business.",
  },
}
