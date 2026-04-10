import type { Metadata, Viewport } from 'next'
import { Inter, Outfit, Sora } from 'next/font/google'

import './globals.css'

const inter = Sora({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Lulemar Materiais de Construção | Desde 1992 em Saquarema - RJ',
  description: 'Loja de materiais de construção em Saquarema - RJ. Cimento, areia, materiais elétricos, hidráulicos, ferramentas e acabamentos. Tradição e qualidade desde 1992.',
  keywords: ['materiais de construção', 'Saquarema', 'cimento', 'areia', 'ferramentas', 'materiais elétricos', 'materiais hidráulicos', 'construção', 'reforma'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Lulemar Materiais de Construção',
    description: 'Tudo para sua construção em um só lugar. Tradição e qualidade desde 1992 em Saquarema - RJ.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#b91c1c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR"  className={`${inter.className} ${outfit.variable}`}>
      <body className="font-sans antialiased">
        {children}
       
      </body>
    </html>
  )
}
