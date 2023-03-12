import React from 'react'
import { pages as commonPages } from '@onex/common'
import routeConfig from './routeConfig'

export const services = [
  {
    title: 'Digital Product Design',
    slug: 'digital-product-design',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
  },
  {
    title: 'Agile Development Teams',
    slug: 'agile-development-teams',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
  },
  {
    title: 'Cloud Engineering & DevOps',
    slug: 'cloud-engineering-devops',
    subtitle: 'Let certified engineers kick-start your cloud operations',
  },
  {
    title: 'Web Development',
    slug: 'web-development',
    subtitle:
      'Build or scale competitive products ready for future growth and millions of users.',
  },
  {
    title: 'Software Architecture',
    slug: 'software-architecture',
    subtitle:
      'Reach the software flexibility needed to scale by optimizing your architecture.',
  },
  {
    title: 'Mobile Development',
    slug: 'mobile-development',
    subtitle:
      'Offer your customers an iOS/Android hybride mobile app they will want to use.',
  },
  {
    title: 'Quality Assurance',
    slug: 'quality-assurance',
    subtitle:
      'Secure the highest ratings for your product by running extensive QA tests.',
  },
  {
    title: 'Project Management',
    slug: 'project-management',
    subtitle:
      'Collect your data, filter it, and take out game-changing insights on your product and team productivity.',
  },
  {
    title: 'App Modernization',
    slug: 'app-modernization',
    subtitle:
      'Make your systems fast, efficient, and scalable to prepare for further product growth.',
  },
].map((service) => ({
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

export const jobs = [
  {
    title: 'Middle Software Engineer',
    subtitle:
      'Learn how we keep our employees happy and see our values, culture, and initiatives.',
    slug: 'business-consultant',
  },
].map((page) => ({
  ...page,
  href: `/${page.slug}`,
}))
