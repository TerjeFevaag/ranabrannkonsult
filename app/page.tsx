import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import FAQAccordion from '@/components/FAQAccordion'
import ReviewCard from '@/components/ReviewCard'
import ScrollReveal from '@/components/ScrollReveal'
import ArcticCircleLine from '@/components/ArcticCircleLine'

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
      'Kommunen krever et brannkonsept ved de fleste byggesaker. Vi utarbeider helhetlige brannkonsept som ivaretar brannsikkerheten i ditt prosjekt — fra garasjer til leilighetsbygg.',
    href: '/brannkonsept',
  },
  {
    iconImage: '/images/icon-brannprosjektering.gif',
    title: 'Brannprosjektering',
    description:
      'Vi sørger for at bygget ditt oppfyller alle krav til brannsikkerhet, og finner praktiske løsninger som sparer både tid og kostnader. Fast pris der det er mulig.',
    href: '/brannprosjektering',
  },
  {
    iconImage: '/images/icon-branntilsyn.png',
    title: 'Branntilsyn',
    description:
      'Har du fått pålegg etter branntilsyn, eller ønsker du en grundig gjennomgang av byggets brannsikkerhet? Vi inspiserer hele bygningen og utarbeider tilstandsrapport.',
    href: '/branntilsyn',
  },
  {
    iconImage: '/images/icon-uavhengig-kontroll-brannkonsept.png',
    title: 'Uavhengig kontroll',
    description:
      'I mange byggeprosjekter er det krav om uavhengig kontroll av brannsikkerheten. Vi sikrer at brannkonseptet er i tråd med gjeldende forskrifter.',
    href: '/uavhengig-kontroll',
  },
]

const stats = [
  { number: '1200+', label: 'Prosjekter gjennomført' },
  { number: 'TKL 1+2', label: 'Sentralt godkjent' },
  { number: 'Fast pris', label: 'Der det er mulig' },
  { number: 'Hele landet', label: 'Vi tar oppdrag overalt' },
]

const reviews = [
  {
    quote:
      'Lett å få kontakt med firmaet på ulike spørsmål som dukker opp underveis. Jeg har kun hatt gode opplevelser, selv om ikke alt var helt klart for meg som ufaglært.',
    author: 'Kirsti Andresen',
  },
  {
    quote:
      'Rask og god kommunikasjon. Leverte raskt det vi trengte av dokumentasjon til en fornuftig pris. Ble ikke tilbudt en dyr dokumentasjonspakke som var overdimensjonert i henhold til vårt prosjekt. Veldig fornøyd!',
    author: 'Heidi Spinnangr',
  },
  {
    quote:
      'Ga rask tilbakemelding ved første kontakt. Leverte til avtalt tid og pris. Høy kvalitet på arbeidet. Veldig behjelpelig med å svare på andre spørsmål i ettertid, vederlagsfritt.',
    author: 'Jonathan Steinsvik',
  },
  {
    quote:
      'Svært god service. Trygt med folk som kan faget sitt. Fikk svært god hjelp og mange gode tips og innspill under byggeprosessen.',
    author: 'Torger Vistnes',
  },
]

const faqItems = [
  {
    question: 'Hva koster brannprosjektering i Mo i Rana?',
    answer:
      'Prisen varierer etter omfang og kompleksitet. Et brannkonsept i tiltaksklasse 2 starter hos oss fra ca. 15 000 kr ekskl. mva., inkludert branntegninger. Vi tilbyr alltid fastpris.',
  },
  {
    question: 'Trenger jeg brannprosjektering for mitt prosjekt?',
    answer:
      'De fleste byggesaker krever brannprosjektering — tilbygg, bruksendring, ny boenhet, påbygg. Ta kontakt for en gratis vurdering av ditt prosjekt.',
  },
  {
    question: 'Er befaring nødvendig?',
    answer:
      'For nybygg og enklere saker er det ofte ikke nødvendig. Takket være digitale verktøy og kartdata kan vi i mange tilfeller jobbe uten fysisk befaring.',
  },
  {
    question: 'Er dere sentralt godkjent?',
    answer:
      'Ja, vi har sentral godkjenning for brannprosjektering i tiltaksklasse 1 og 2. Dette er en garanti for at vi er seriøse, godt forsikret og har dokumenterte referanseprosjekter.',
  },
  {
    question: 'Tar dere oppdrag utenfor Rana?',
    answer:
      'Vi hjelper kunder i Rana, på Helgeland og i hele Nordland, og tar oppdrag over hele landet.',
  },
]

const articles = [
  {
    href: '/artikler/pipebrann',
    image: '/images/article-pipebrann.jpg',
    title: 'Forebygg pipebrann med enkle grep',
    excerpt:
      'Er du i faresonen for å kunne få brann i skorsteinen? Les om hva som forårsaker pipebrann og enkle tiltak for å redusere risikoen.',
  },
  {
    href: '/artikler/brannslokker',
    image: '/images/article-brannslukker.jpg',
    title: 'Har du riktig brannslokkeapparat?',
    excerpt:
      'Vet du hvilken type brannslokker du trenger i hjemmet? Vi gjennomgår krav og forskjellen mellom pulver- og skumapparater.',
  },
  {
    href: '/artikler/roykvarsler',
    image: '/images/article-roykvarsler.jpg',
    title: 'Riktig røykvarsler redder liv',
    excerpt:
      'Er du godt nok sikret hvis det oppstår brann om natten? Vi forklarer krav til røykvarslere og riktig plassering.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen lg:min-h-[90vh] bg-brand-dark flex flex-col lg:flex-row">
        <div className="relative z-10 flex flex-col justify-center w-full lg:w-[55%] px-4 sm:px-6 lg:pl-12 xl:pl-20 py-24 lg:py-0">
          <p className="hero-1 uppercase font-bold text-brand-orange text-sm lg:text-base mb-4 tracking-[0.2em]">
            Rana · Helgeland
          </p>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6 max-w-xl">
            Brannprosjektering med industriell presisjon i Mo i Rana
          </h1>
          <p className="hero-3 text-brand-white/70 text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
            Vi hjelper deg med brannprosjektering i Mo i Rana og på Helgeland. Sentralt godkjent
            foretak med over 1200 gjennomførte prosjekter — fast pris, rask levering og
            personlig oppfølging.
          </p>
          <div className="hero-4 flex flex-wrap gap-4 mb-10">
            <Link
              href="/kontakt-oss"
              className="bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 hover:scale-[1.03] transition-all duration-200"
            >
              Få gratis tilbud
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
              Hva kan vi hjelpe deg med?
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
            <p className="uppercase font-bold text-brand-orange text-sm tracking-[0.2em] mb-2">Kundene våre sier</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Hva sier kundene?</h2>
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
              href="/artikler/pipebrann"
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
            Klar for å komme i gang?
          </h2>
          <p className="text-brand-white/70 text-lg mb-8 max-w-xl mx-auto">
            Ta kontakt i dag for et uforpliktende tilbud på brannprosjektering i Rana. Vi svarer
            innen 24 timer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt-oss"
              className="bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 hover:scale-[1.03] transition-all duration-200"
            >
              Få gratis tilbud
            </Link>
            <a
              href="tel:+4740051437"
              className="border-2 border-brand-white text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200 flex items-center gap-2"
            >
              <Phone size={16} /> Ring oss
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
