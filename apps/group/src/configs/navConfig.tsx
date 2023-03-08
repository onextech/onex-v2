import React from 'react'
import routeConfig from './routeConfig'

export const services = [
  {
    title: 'Applications',
    items: [
      {
        title: 'Enterprise Applications',
        href: routeConfig.ABOUT,
      },
      { title: 'Managed Applications' },
      { title: 'Application Modernization' },
    ],
    slug: 'applications',
  },
  {
    title: 'Engineering',
    items: [
      { title: 'Research & Development' },
      { title: 'API Development' },
      { title: 'Microfrontend Development' },
    ],
    slug: 'engineering',
  },
  {
    title: 'Infrastructure & Cloud',
    items: [
      { title: 'Managed DevOps' },
      { title: 'Infrastructure Managed Services' },
      { title: 'Cloud Strategy & Design' },
    ],
    slug: 'infrastructure-cloud',
  },
  {
    title: 'Advisory',
    items: [
      { title: 'Digital Strategy' },
      { title: 'Transformation & Delivery' },
      { title: 'Architecture Design' },
    ],
    slug: 'advisory',
  },
  {
    title: 'Modern Workplace',
    items: [
      { title: 'Staff Augmentation' },
      { title: 'Managed Product Teams' },
      { title: 'Service Automation' },
    ],
    slug: 'modern-workplace',
  },
  {
    title: 'Quality Assurance',
    items: [
      { title: 'Performance Optimization' },
      { title: 'Production Readiness' },
      { title: 'Testing Automation' },
    ],
    slug: 'quality-assurance',
  },
].map((service) => ({
  ...service,
  href: `${routeConfig.SERVICES}/${service.slug}`,
}))

export const industries = [
  {
    title: 'Financial Services',
    subtitle:
      'Support in cloud adoption and automation for startups and finance institutions.',
    slug: 'financial-services',
  },
  {
    title: 'Government',
    subtitle:
      'Support in cloud adoption and automation for startups and finance institutions.',
    slug: 'government-public-sectors',
  },
  {
    title: 'Maritime',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
    slug: 'maritime',
  },
  {
    title: 'Real Estate',
    subtitle: 'Let certified engineers kick-start your cloud operations',
    slug: 'real-estate',
  },
].map((industry) => ({
  ...industry,
  href: `${routeConfig.INDUSTRIES}/${industry.slug}`,
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

export const brands = [
  {
    title: 'One X Tech',
    subtitle:
      'Learn how we keep our employees happy and see our values, culture, and initiatives.',
    href: 'https://onextech.com',
  },
  {
    title: 'One X Design',
    subtitle:
      'Discover the Agile process that makes 98% of tech executives recommend us',
    href: 'https://onexdesign.com',
  },
  {
    title: 'One X Data',
    subtitle:
      'Discover the Agile process that makes 98% of tech executives recommend us',
    href: 'https://onexdata.com',
  },
  {
    title: 'One X Digital',
    subtitle:
      'Learn how we keep our employees happy and see our values, culture, and initiatives.',
    href: 'https://onexdigital.com',
  },
  {
    title: 'One X Studio',
    subtitle:
      'Discover the Agile process that makes 98% of tech executives recommend us',
    href: 'https://onexstudio.com',
  },
  {
    title: 'One X Labs',
    subtitle:
      'Discover the Agile process that makes 98% of tech executives recommend us',
    href: 'https://onexlabs.com',
  },
  {
    title: 'One X Ventures',
    subtitle:
      'Learn how we keep our employees happy and see our values, culture, and initiatives.',
    href: 'https://onexventures.com',
  },
  {
    title: 'Fin X',
    subtitle:
      'Discover the Agile process that makes 98% of tech executives recommend us',
    href: 'https://finx.com',
  },
  {
    title: 'Gov X',
    subtitle:
      'Discover the Agile process that makes 98% of tech executives recommend us',
    href: 'https://govx.com',
  },
].map((brand) => ({
  ...brand,
  hrefProps: { targetBlank: true },
}))
