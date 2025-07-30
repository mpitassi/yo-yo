import { Layout } from '@/components/Layout'
import { Providers } from '@/app/providers'
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: 'Miles Pitassi - %s',
    default: 'Miles Pitassi',
  },
  description:
    "I'm Miles, a data analyst and researcher for sports. I'm currently a Research Scientist Intern for the Chicago Blackhawks, developing models using the NHL's puck and player tracking data.",
  openGraph: {
    title: 'Miles Pitassi',
    description: "I'm Miles, a data analyst and researcher for sports. I'm currently a Research Scientist Intern for the Chicago Blackhawks, developing models using the NHL's puck and player tracking data.",
    url: 'https://miles-pitassi.com',
    siteName: 'Miles Pitassi',
    images: [
      {
        url: 'https://miles-pitassi.com/social-preview.png',
        width: 1200,
        height: 630,
        alt: 'Miles Pitassi preview image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miles Pitassi',
    description: "I'm Miles, a data analyst and researcher for sports. I'm currently a Research Scientist Intern for the Chicago Blackhawks, developing models using the NHL's puck and player tracking data.",
    images: ['https://miles-pitassi.com/social-preview.png'],
    creator: '@your_twitter_username', // Replace as needed, or remove this line
  },
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}

