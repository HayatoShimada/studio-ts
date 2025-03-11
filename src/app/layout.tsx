import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Studio',
    default: 'Small DX, Small IoT, Smart Idea.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>

      </body>
    </html>
  )
}
