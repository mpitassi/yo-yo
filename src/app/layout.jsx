import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: 'Miles Pitassi - %s',
    default: 'Miles Pitassi',
  },
  description:
    'I`m Miles, a data analyst and researcher for sports. I`m currently a Research Scientist Intern for the Chicago Blackhawks, developing models using the NHL`s puck and player tracking data.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  openGraph: {
    title: 'Miles Pitassi',
    description:
      'I`m Miles, a data analyst and researcher for sports. I`m currently a Research Scientist Intern for the Chicago Blackhawks.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://miles-pitassi.com',
    images: [
      {
        url: '/social-preview.png',  // Put your preferred image here in /public folder
        width: 1200,
        height: 630,
        alt: 'Miles Pitassi - Data Analyst and Researcher',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miles Pitassi',
    description:
      'I`m Miles, a data analyst and researcher for sports. I`m currently a Research Scientist Intern for the Chicago Blackhawks.',
    images: ['/social-preview.png'],  // Same image for Twitter card
  },
}

