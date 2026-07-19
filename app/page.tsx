import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import FAQAccordion from '@/components/FAQAccordion'
import ReviewCard from '@/components/ReviewCard'
import ScrollReveal from '@/components/ScrollReveal'
import ArcticCircleLine from '@/components/ArcticCircleLine'
import JsonLd from '@/components/JsonLd'
import { faqJsonLd } from '@/lib/schema'
import { articles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Brannprosjektering i Rana | Brannkonsult AS',
  description:
    'Brannkonsult AS tilbyr brannkonsept, brannprosjektering og branntilsyn i Mo i Rana og på Helgeland. Sentralt godkjent foretak. Få uforpliktende tilbud i dag.',
  alternates: { canonical: 'https://www.ranabrannkonsult.no' },
}

const services = [
  {
    iconImage: '/images/icon-brannkonsept.gif',
    title: 'Brannkonsept',
    description:
      'De fleste byggesaker i Rana kommune krever et brannkonsept før søknaden kan behandles. Vi setter opp konseptet slik at det dekker både tiltaket og bygningsmassen rundt.',
    href: '/brannkonsept',
  },
  {
    iconImage: '/images/icon-brannprosjektering.gif',
    title: 'Brannprosjektering',
    description:
      'Skal bygget oppfylle brannkravene uten at det går på bekostning av budsjettet? Vi finner løsninger som holder mål, uten unødvendig fordyrende tiltak.',
    href: '/brannprosjektering',
  },
  {
    iconImage: '/images/icon-branntilsyn.png',
    title: 'Branninspeksjon',
    description:
      'Har brannvesenet vært på besøk, eller lurer du på tilstanden i en eldre bygård eller industrihall? Vi går gjennom bygget og dokumenterer hva som eventuelt må utbedres.',
    href: '/branninspeksjon',
  },
  {
    iconImage: '/images/icon-uavhengig-kontroll-brannkonsept.png',
    title: 'Uavhengig kontroll',
    description:
      'Bygger du i tiltaksklasse 2 eller høyere, er uavhengig kontroll av brannkonseptet et lovkrav. Vi kontrollerer at prosjekteringen holder mål før søknaden går videre.',
    href: '/uavhengig-kontroll',
  },
]

const stats = [
  { number: 'TKL 1+2', label: 'Sentralt godkjent' },
  { number: 'Fastpris', label: 'Ingen skjulte kostnader' },
  { number: '5–10 dager', label: 'Typisk leveringstid' },
  { number: 'Nordland', label: 'Helgeland og resten av fylket' },
]

const reviews = [
  {
    quote:
      'Lett å få kontakt med firmaet på ulike spørsmål som dukker opp underveis. Jeg har kun hatt gode opplevelser, selv om ikke alt var helt klart for meg som ufaglært.',
    author: 'Kirsti Andresen',
    rating: 4,
  },
  {
    quote:
      'På spørsmål om brannkonsept, og ansvarsrett for fagområdet, fikk vi raskt og proffesjonelt svar. Hyggelig, ryddig og konstruktiv oppfølging.',
    author: 'Sivilarkitekt Sverre Krefting',
    rating: 5,
  },
  {
    quote:
      'Raskt svar, relevant og grundig rapport, kommunen likte måten det var gjort på. Måtte endre noe i rapporten pga ny planløsning. Ny oppdatert rapport innen kort tid. Alt til bra priser.',
    author: 'Vegard Hals',
    rating: 5,
  },
  {
    quote:
      'Informasjonen og visualiseringen i tilsendte rapporter har vært meget bra. I tillegg har Brannkonsult vært imøtekommende for ytterligere spørsmål, og behjelpelig med også andre korte spørsmål om andre ting.',
    author: 'Magne Sjømark',
    company: 'Sjusjø AS',
    rating: 5,
  },
]

const faqItems = [
  {
    question: 'Hvordan foregår en brannprosjektering når dere ikke har kontor i Rana?',
    answer:
      'Det aller meste løses digitalt. Vi jobber ut fra situasjonsplan, tegninger og kartdata du sender oss, og trenger sjelden å reise ut for befaring. Ved større eller uoversiktlige prosjekter avtaler vi det.',
  },
  {
    question: 'Når holder det med et brannteknisk notat, og når må jeg ha et fullt brannkonsept?',
    answer:
      'Mindre tiltak, som enkle bruksendringer eller mindre tilbygg, kan ofte løses med et enklere notat. Større eller mer komplekse prosjekter krever et fullstendig brannkonsept. Vi vurderer dette gratis før vi gir tilbud.',
  },
  {
    question: 'Hva koster et brannkonsept?',
    answer:
      'Et brannkonsept i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva., inkludert branntegninger — alltid til fastpris, uten overraskelser underveis.',
  },
  {
    question: 'Er Brannkonsult AS sentralt godkjent?',
    answer:
      'Ja, for brannprosjektering i tiltaksklasse 1 og 2. Godkjenningen fra DiBK dokumenterer kompetanse, ansvarsforsikring og et godkjent kvalitetssystem.',
  },
  {
    question: 'Dekker dere hele Nordland, eller bare Mo i Rana?',
    answer:
      'Vi tar oppdrag i hele Rana-regionen og Helgeland — blant annet Hemnes, Nesna og Rødøy — og ellers i Nordland. Ta kontakt uansett hvor i fylket prosjektet ditt ligger.',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqItems)} />
      {/* ── HERO ── */}
      <section className="relative min-h-screen lg:min-h-[90vh] bg-brand-dark flex flex-col lg:flex-row">
        <div className="relative z-10 flex flex-col justify-center w-full lg:w-[55%] px-4 sm:px-6 lg:pl-12 xl:pl-20 py-24 lg:py-0">
          <p className="hero-1 uppercase font-bold text-brand-orange text-sm lg:text-base mb-4 tracking-[0.2em]">
            Rana · Helgeland
          </p>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6 max-w-xl">
            Brannkonsept og brannprosjektering for industribyen ved polarsirkelen
          </h1>
          <p className="hero-3 text-brand-white/70 text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
            Fra industribygg ved Mo Industripark til hytter og eneboliger langs Helgelandskysten —
            vi utarbeider brannkonsept og brannprosjektering tilpasset bygningene som faktisk står
            i Nordland. Sentralt godkjent, fastpris, svar innen 24 timer.
          </p>
          <div className="hero-4 flex flex-wrap gap-4 mb-10">
            <Link
              href="/kontakt-oss"
              className="bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 hover:scale-[1.03] transition-all duration-200"
            >
              Send oss prosjektet
            </Link>
            <Link
              href="/om-oss"
              className="border-2 border-brand-white text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200"
            >
              Om oss
            </Link>
          </div>
          <div className="hero-5 max-w-lg">
            <ArcticCircleLine dark />
          </div>
        </div>
        <div className="relative w-full lg:w-[45%] h-72 lg:h-auto">
          <Image
            src="/images/hero.jpg"
            alt="Mo i Rana by og industripark"
            fill
            priority
            className="object-cover plate-corner-lg"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-black/30 plate-corner-lg" />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="uppercase font-bold text-brand-orange text-sm tracking-[0.2em] mb-2">Våre tjenester</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">
              Fra søknad til ferdig dokumentasjon
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.href} delay={i * 80}>
                <div className="plate-corner bg-brand-white border border-brand-gray">
                  <ServiceCard {...service} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="bg-brand-dark py-12 lg:py-16">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10">
            <ArcticCircleLine dark />
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x divide-brand-white/20">
            {stats.map((stat, i) => (
              <ScrollReveal
                key={i}
                delay={i * 80}
                variant="scale"
                className="text-center px-4 py-4 lg:py-0"
              >
                <div className="text-brand-orange font-black text-3xl lg:text-4xl mb-2">
                  {stat.number}
                </div>
                <div className="text-brand-white text-sm lg:text-base">{stat.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="uppercase font-bold text-brand-orange text-sm tracking-[0.2em] mb-2">Tilbakemeldinger</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Dette sier oppdragsgiverne våre</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="plate-corner border border-brand-gray">
                  <ReviewCard {...r} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black mb-10">
              Ofte stilte spørsmål
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80} variant="fade">
            <div className="plate-corner-lg border border-brand-gray p-8 bg-brand-white">
              <FAQAccordion items={faqItems} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex items-end justify-between mb-10">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Nyttige artikler</h2>
            <Link
              href="/artikler"
              className="text-brand-orange font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
            >
              Se alle <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
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
                    <h3 className="font-bold text-brand-black text-lg mb-2 group-hover:text-brand-orange transition-colors duration-200">
                      {a.title}
                    </h3>
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

      {/* ── FINAL CTA ── */}
      <section className="bg-brand-dark py-16 lg:py-20">
        <ScrollReveal variant="fade" className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-10 max-w-2xl mx-auto">
            <ArcticCircleLine dark />
          </div>
          <h2 className="text-brand-white text-3xl lg:text-4xl font-black mb-4">
            Har du et byggeprosjekt i Nordland?
          </h2>
          <p className="text-brand-white/70 text-lg mb-8 max-w-xl mx-auto">
            Send oss situasjonsplan og tegninger, så vurderer vi prosjektet ditt kostnadsfritt.
            Fastpristilbud innen 24 timer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt-oss"
              className="bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 hover:scale-[1.03] transition-all duration-200"
            >
              Send oss prosjektet
            </Link>
            <a
              href="tel:+4740051437"
              className="border-2 border-brand-white text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200 flex items-center gap-2"
            >
              <Phone size={16} /> Ring oss direkte
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
