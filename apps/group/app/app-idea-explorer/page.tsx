import type { Metadata } from 'next'

import { AppIdeaExplorer } from '@/components/app-idea-explorer/ai-card-generation'

export const metadata: Metadata = {
  title: 'One X App Idea Explorer',
  description:
    'Instantly assess the feasibility of your app idea. Get a structured breakdown of technical requirements, estimated complexity, and actionable next steps to bring your vision to life.',
  keywords: [
    'App Idea Explorer',
    'App Feasibility Analysis',
    'App Development Estimation',
    'Startup App Validation',
    'Build an App',
    'Software Development Planning',
    'One X Group',
  ],
  openGraph: {
    title: 'One X App Idea Explorer',
    description:
      'Validate and refine your app idea with an in-depth breakdown of technical feasibility, estimated complexity, and actionable next steps.',
    images: [
      {
        alt: 'One X App Idea Explorer Preview',
        height: 630,
        url: 'https://www.onexgroup.co/app-idea-explorer-og-image.jpg',
        width: 1200,
      },
    ],
    siteName: 'One X Group',
    type: 'website',
    url: 'https://www.onexgroup.co/app-idea-explorer',
  },
  twitter: {
    title: 'One X App Idea Explorer',
    card: 'summary_large_image',
    description:
      'Discover if your app idea can be built instantly with an in-depth technical breakdown and execution roadmap.',
    images: ['https://www.onexgroup.co/app-idea-explorer-twitter-image.jpg'], // Replace with actual image URL
  },
}

export default function Page() {
  return <AppIdeaExplorer />
}
