import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ranabrannkonsult.no'),
  title: 'Brannprosjektering i Rana | Rana Brannkonsult',
  description:
    'Rana Brannkonsult tilbyr brannkonsept, brannprosjektering og branntilsyn i Mo i Rana og på Helgeland. Sentralt godkjent foretak. Få uforpliktende tilbud i dag.',
  alternates: {
    canonical: 'https://www.ranabrannkonsult.no',
  },
  openGraph: {
    title: 'Brannprosjektering i Rana | Rana Brannkonsult',
    description:
      'Rana Brannkonsult tilbyr brannkonsept, brannprosjektering og branntilsyn i Mo i Rana og på Helgeland.',
    url: 'https://www.ranabrannkonsult.no',
    siteName: 'Rana Brannkonsult',
    locale: 'nb_NO',
    type: 'website',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Rana Brannkonsult',
      },
    ],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Rana Brannkonsult AS',
  description: 'Brannprosjektering og brannkonsept i Rana',
  telephone: '+47 000 00 000',
  email: 'post@ranabrannkonsult.no',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mo i Rana',
    addressCountry: 'NO',
  },
  url: 'https://www.ranabrannkonsult.no',
  priceRange: 'Fra kr 15 000',
  hasCredential: 'Sentralt godkjent tiltaksklasse 1 og 2',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" className={lato.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={lato.className}>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
