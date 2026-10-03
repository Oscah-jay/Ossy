import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Oscah Juma — Graphic & UI/UX Designer',
  description: 'Oscah Juma is an independent graphic and UI/UX designer creating useful things with feeling.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f1ea',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
