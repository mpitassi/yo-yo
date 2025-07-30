app.layout.jsx: import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: 'Miles Pitassi - %s',
    default:
      'Miles Pitassi',
  },
  description:
    'Im Miles, a data analyst and researcher for sports. Im currently a Research Scientist Intern for the Chicago Blackhawks, developing models using the NHLs puck and player tracking data.',
  alternates: {
    types: {
      'application/rss+xml': ${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml,
    },
  },
}

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
