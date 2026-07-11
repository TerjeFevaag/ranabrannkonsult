import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import ArcticCircleLine from '@/components/ArcticCircleLine'

export const metadata: Metadata = {
  title: 'Siden finnes ikke | Brannkonsult AS',
  robots: { index: false, follow: true },
}

const services = [
  { href: '/brannkonsept', label: 'Brannkonsept' },
  { href: '/brannprosjektering', label: 'Brannprosjektering' },
  { href: '/branninspeksjon', label: 'Branninspeksjon' },
  { href: '/uavhengig-kontroll', label: 'Uavhengig kontroll' },
]

export default function NotFound() {
  return (
    <section className="bg-brand-dark py-24 lg:py-32">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="uppercase font-bold text-brand-orange text-sm tracking-[0.2em] mb-4">404</p>
        <h1 className="text-brand-white text-3xl lg:text-5xl font-black mb-6 max-w-2xl mx-auto">
          Siden finnes ikke
        </h1>
        <p className="text-brand-white/70 text-lg mb-10 max-w-xl mx-auto">
          Siden du leter etter kan ha blitt flyttet eller finnes ikke lenger. Her er en vei videre:
        </p>
        <div className="mb-10 max-w-xl mx-auto">
          <ArcticCircleLine dark />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="border-2 border-brand-white text-brand-white font-bold px-6 py-3 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200"
            >
              {s.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 hover:scale-[1.03] transition-all duration-200"
          >
            Til forsiden
          </Link>
          <a
            href="tel:+4740051437"
            className="border-2 border-brand-white text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200 flex items-center gap-2"
          >
            <Phone size={16} /> Ring oss
          </a>
        </div>
      </div>
    </section>
  )
}
