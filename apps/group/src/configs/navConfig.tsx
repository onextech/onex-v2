import React from 'react'
import { pages as commonPages } from '@onex/common'
import routeConfig from './routeConfig'

export const services = [
  {
    title: 'Applications',
    slug: 'applications',
    items: [
      {
        title: 'Enterprise Applications',
        slug: 'enterprise-applications',
      },
      { title: 'Managed Applications', slug: 'managed-applications' },
      { title: 'Application Modernization', slug: 'application-modernization' },
    ],
  },
  {
    title: 'Engineering',
    slug: 'engineering',
    items: [
      { title: 'Research & Development', slug: 'research-development' },
      { title: 'API Development', slug: 'api-development' },
      { title: 'Microfrontend Development', slug: 'microfrontend-development' },
    ],
  },
  {
    title: 'Infrastructure & Cloud',
    slug: 'infrastructure-cloud',
    items: [
      { title: 'Managed DevOps', slug: 'managed-devops' },
      {
        title: 'Infrastructure Managed Services',
        slug: 'infrastructure-managed-services',
      },
      { title: 'Cloud Strategy & Design', slug: 'cloud-strategy-design' },
    ],
  },
  {
    slug: 'advisory',
    title: 'Advisory',
    items: [
      { title: 'Digital Strategy', slug: 'digital-strategy' },
      { title: 'Transformation & Delivery', slug: 'transformation-delivery' },
      { title: 'Architecture Design', slug: 'architecture-design' },
    ],
  },
  {
    slug: 'modern-workplace',
    title: 'Modern Workplace',
    items: [
      { title: 'Staff Augmentation', slug: 'staff-augmentation' },
      { title: 'Managed Product Teams', slug: 'managed-product-teams' },
      { title: 'Service Automation', slug: 'managed-product-teams' },
    ],
  },
  {
    title: 'Quality Assurance',
    slug: 'quality-assurance',
    items: [
      { title: 'Performance Optimization', slug: 'performance-optimization' },
      { title: 'Production Readiness', slug: 'production-readiness' },
      { title: 'Testing Automation', slug: 'testing-automation' },
    ],
  },
].map((service) => ({
  ...service,
  href: `${routeConfig.SERVICES}/${service.slug}`,
  items: service.items.map((item) => ({
    ...item,
    href: `${routeConfig.SERVICES}/${item.slug}`,
  })),
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

export const pages = commonPages
