import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import ArcticCircleLine from '@/components/ArcticCircleLine'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/schema'
import { articles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Artikler om brannsikkerhet | Brannkonsult AS',
  description:
    'Råd om brannsikkerhet i bolig og bygg — pipebrann, brannslokkeapparat og røykvarsler. Fra sentralt godkjente brannrådgivere i Mo i Rana.',
  alternates: { canonical: 'https://www.ranabrannkonsult.no/artikler' },
  openGraph: {
    title: 'Artikler om brannsikkerhet | Brannkonsult AS',
    description: 'Råd om brannsikkerhet i bolig og bygg, fra sentralt godkjente brannrådgivere i Mo i Rana.',
    url: 'https://www.ranabrannkonsult.no/artikler',
  },
}

const breadcrumb = [
  { name: 'Hjem', path: '/' },
  { name: 'Artikler', path: '/artikler' },
]

export default function ArtiklerPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
      <section className="bg-brand-dark py-16 lg:py-24">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Artikler</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Artikler om brannsikkerhet
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Praktiske råd om brannsikkerhet i bolig og bygg, fra våre sentralt godkjente brannrådgivere.
          </p>
          <div className="hero-4 mt-6 max-w-xl">
            <ArcticCircleLine dark />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <ScrollReveal key={a.href} delay={i * 80}>
                <Link
                  href={a.href}
                  className="group plate-corner bg-brand-white border border-brand-gray hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="font-bold text-brand-black text-lg mb-2 group-hover:text-brand-orange transition-colors duration-200">
                      {a.title}
                    </h2>
                    <p className="text-brand-darkgray text-sm leading-relaxed mb-4 flex-1">{a.excerpt}</p>
                    <span className="text-brand-orange font-bold text-sm flex items-center gap-1">
                      Les mer <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
