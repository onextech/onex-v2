import React from 'react'
import { pages as commonPages } from '@onex/common'
import { MOCK_TECH_SERVICES } from '@onex/mocks'
import routeConfig from './routeConfig'

export const services = MOCK_TECH_SERVICES.map((service) => ({
  ...service,
  href: `${routeConfig.SERVICES}/${service.slug}`,
}))

export const technologies = [
  {
    title: 'JavaScript',
    slug: 'javascript',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
  },
  {
    title: 'TypeScript',
    slug: 'typescript',
    subtitle:
      'Build or scale competitive products ready for future growth and millions of users.',
  },
  {
    slug: 'nodejs',
    title: 'Node.js',
    subtitle: 'Let certified engineers kick-start your cloud operations',
  },
  {
    title: 'React',
    slug: 'react',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
  },
  {
    title: 'Next.js',
    slug: 'nextjs',
    subtitle:
      'Reach the software flexibility needed to scale by optimizing your architecture.',
  },
  {
    title: 'Express',
    slug: 'express',
    subtitle:
      'Reach the software flexibility needed to scale by optimizing your architecture.',
  },
  {
    title: 'AWS',
    slug: 'aws',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
  },
  {
    title: 'Serverless',
    slug: 'serverless',
    subtitle:
      'Reach the software flexibility needed to scale by optimizing your architecture.',
  },
  {
    title: 'Micro Services',
    slug: 'micro-services',
    subtitle:
      'Reach the software flexibility needed to scale by optimizing your architecture.',
  },
].map((technology) => ({
  ...technology,
  href: `${routeConfig.TECHNOLOGIES}/${technology.slug}`,
}))

export const pages = commonPages
