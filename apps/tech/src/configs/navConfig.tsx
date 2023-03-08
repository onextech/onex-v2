import React from 'react'
import routeConfig from './routeConfig'

export const services = [
  {
    title: 'Digital Product Design',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    slug: 'digital-product-design',
  },
  {
    title: 'Agile Development Teams',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
    slug: 'agile-development-teams',
  },
  {
    title: 'Cloud Engineering & DevOps',
    subtitle: 'Let certified engineers kick-start your cloud operations',
    slug: 'cloud-engineering-devops',
  },
  {
    title: 'Web Development',
    subtitle:
      'Build or scale competitive products ready for future growth and millions of users.',
    slug: 'web-development',
  },
  {
    title: 'Software Architecture',
    subtitle:
      'Reach the software flexibility needed to scale by optimizing your architecture.',
    slug: 'software-architecture',
  },
  {
    title: 'Mobile Development',
    subtitle:
      'Offer your customers an iOS/Android hybride mobile app they will want to use.',
    slug: 'mobile-development',
  },
  {
    title: 'Quality Assurance',
    subtitle:
      'Secure the highest ratings for your product by running extensive QA tests.',
    slug: 'quality-assurance',
  },
  {
    title: 'Project Management',
    subtitle:
      'Collect your data, filter it, and take out game-changing insights on your product and team productivity.',
    slug: 'project-management',
  },
  {
    title: 'App Modernization',
    subtitle:
      'Make your systems fast, efficient, and scalable to prepare for further product growth.',
    slug: 'app-modernization',
  },
].map((service) => ({
  ...service,
  href: `${routeConfig.SERVICES}/${service.slug}`,
}))

export const technologies = [
  {
    title: 'JavaScript',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    slug: 'javascript',
  },
  {
    title: 'TypeScript',
    subtitle:
      'Build or scale competitive products ready for future growth and millions of users.',
    slug: 'typescript',
  },
  {
    title: 'Node.js',
    subtitle: 'Let certified engineers kick-start your cloud operations',
    slug: 'nodejs',
  },
  {
    title: 'React',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
    slug: 'react',
  },
  {
    title: 'Next.js',
    subtitle:
      'Reach the software flexibility needed to scale by optimizing your architecture.',
    slug: 'nextjs',
  },
  {
    title: 'Express',
    subtitle:
      'Reach the software flexibility needed to scale by optimizing your architecture.',
    slug: 'express',
  },
  {
    title: 'AWS',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
    slug: 'aws',
  },
  {
    title: 'Serverless',
    subtitle:
      'Reach the software flexibility needed to scale by optimizing your architecture.',
    slug: 'serverless',
  },
  {
    title: 'Micro Services',
    subtitle:
      'Reach the software flexibility needed to scale by optimizing your architecture.',
    slug: 'micro-services',
  },
].map((technology) => ({
  ...technology,
  href: `${routeConfig.TECHNOLOGIES}/${technology.slug}`,
}))

export const pages = [
  {
    title: 'About Us',
    subtitle:
      'Learn how we keep our employees happy and see our values, culture, and initiatives.',
    slug: 'about',
  },
  {
    title: 'Careers',
    subtitle:
      'Discover the Agile process that makes 98% of tech executives recommend us',
    slug: 'careers',
  },
  {
    title: 'Contact Us',
    subtitle:
      'Discover the Agile process that makes 98% of tech executives recommend us',
    slug: 'contact',
  },
].map((page) => ({
  ...page,
  href: `/${page.slug}`,
}))
