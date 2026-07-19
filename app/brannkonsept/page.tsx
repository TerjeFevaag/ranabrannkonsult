import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FileText, Phone, Mail, CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import ArcticCircleLine from '@/components/ArcticCircleLine'
import JsonLd from '@/components/JsonLd'
import { faqJsonLd, breadcrumbJsonLd } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Brannkonsept i Rana | Brannkonsult AS',
  description:
    'Brannkonsept for byggesaker i Mo i Rana og på Helgeland — fra industribygg til borettslag. Sentralt godkjent TKL 1+2, fastpris fra ca. 15 000 kr inkl. branntegninger.',
  alternates: { canonical: 'https://www.ranabrannkonsult.no/brannkonsept' },
  openGraph: {
    title: 'Brannkonsept i Rana | Brannkonsult AS',
    description:
      'Brannkonsept for byggesaker i Mo i Rana og på Helgeland. Sentralt godkjent TKL 1+2, alltid fastpris.',
    url: 'https://www.ranabrannkonsult.no/brannkonsept',
  },
}

const faqItems = [
  {
    question: 'Holder det med et brannteknisk notat, eller trenger jeg et fullt brannkonsept?',
    answer:
      'Et brannteknisk notat er tilstrekkelig for mindre, avgrensede tiltak. Skal kommunen vurdere brannsikkerheten for hele byggverket — for eksempel ved bruksendring eller et større tilbygg — kreves som regel et fullt brannkonsept. Send oss en kort beskrivelse, så avklarer vi hva som gjelder for ditt prosjekt.',
  },
  {
    question: 'Må dere befare bygget i Mo i Rana før dere kan starte?',
    answer:
      'Sjelden. De fleste brannkonsept lar seg utarbeide fra situasjonsplan, plantegninger og bilder du sender oss. Gjelder det en eldre bygård eller et bygg med uklar branntegningshistorikk, avtaler vi befaring.',
  },
  {
    question: 'Hva koster et brannkonsept?',
    answer:
      'Fra ca. 15 000 kr ekskl. mva. i tiltaksklasse 2, inkludert branntegninger — alltid til fastpris. Send oss adresse, arealer og en kort prosjektbeskrivelse, så får du et konkret tall innen 24 timer.',
  },
  {
    question: 'Selger dere også brannteknisk utstyr eller håndverkertjenester?',
    answer:
      'Nei. Vi leverer utelukkende rådgivning og dokumentasjon, uten å selge produkter eller utføre selve arbeidet. Det holder anbefalingene våre uavhengige av hva som er mest lønnsomt å selge.',
  },
  {
    question: 'Jeg har ikke tegninger klare ennå — kan dere hjelpe likevel?',
    answer:
      'Ja, i en tidlig fase holder det ofte med en skisse og en beskrivelse av tiltaket. Vi sier fra hvis vi trenger mer underlag før vi kan gi et bindende tilbud.',
  },
  {
    question: 'Bistår dere også utenfor Mo i Rana sentrum?',
    answer:
      'Ja — vi tar oppdrag i hele Rana-regionen, på Helgeland (blant annet Hemnes, Nesna og Rødøy) og ellers i Nordland.',
  },
  {
    question: 'Hvor raskt er et brannkonsept klart?',
    answer:
      'Normalt 5–10 virkedager etter at vi har mottatt bestilling og komplett underlag, avhengig av prosjektets omfang. Har du en søknadsfrist, si fra i forespørselen så prioriterer vi deretter.',
  },
]

const breadcrumb = [
  { name: 'Hjem', path: '/' },
  { name: 'Brannkonsept', path: '/brannkonsept' },
]

export default function BrannkonseptPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqItems)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
      {/* Header */}
      <section className="bg-brand-dark py-16 lg:py-24">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Brannkonsept</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Brannkonsept for byggesaker i Rana
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Fra industribygg ved Mo Industripark til garasjer og tilbygg i boligstrøkene — vi setter opp brannkonseptet kommunen krever, til fastpris.
          </p>
          <div className="hero-4 mt-6 max-w-xl">
            <ArcticCircleLine dark />
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content */}
            <div className="lg:w-[68%]">
              <ScrollReveal>
                <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
                  Et brannkonsept er en skriftlig rapport som dokumenterer bygningens brannsikkerhetsnivå — som regel det kommunen ber om når prosjekteringsdokumentasjonen skal vise at både tiltaket og den øvrige bygningsmassen ivaretas. Vi utarbeider dette for alt fra garasjer og eneboliger til industrihaller og eldre bygårder i Mo i Rana, og bistår private, arkitekter og utbyggere på hele Helgeland.
                </p>
              </ScrollReveal>

              <ScrollReveal variant="scale" className="mb-8">
                <div className="relative h-64 lg:h-80 plate-corner-lg overflow-hidden">
                  <Image
                    src="/images/service-brannkonsept.jpg"
                    alt="Brannkonsept og branntegninger under utarbeidelse"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 700px"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Dette dokumenterer vi</h2>
                <p className="text-brand-darkgray leading-relaxed mb-6">
                  Et brannkonsept fra oss dekker alltid:
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Fastsettelse av risikoklasse (RKL) og brannklasse (BKL) for bygningen',
                    'Oppdeling i brannceller og eventuelle brannseksjoner',
                    'Rømningsveier og røykventilasjon',
                    'Vurdering av bærende og skillende konstruksjoner',
                    'Krav til branntekniske installasjoner',
                    'Branntekniske tegninger — plantegninger med brannceller og rømningsveier',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Risikoklasse og brannklasse</h2>
                <p className="text-brand-darkgray leading-relaxed mb-4">
                  Risikoklassen (RKL 1–6) bestemmes av hva bygget skal brukes til og hvilke konsekvenser en eventuell brann kan få for menneskene i det. Brannklassen (BKL 1–4) fastsettes deretter ut fra risikoklasse og antall etasjer. I Rana ser vi hele spekteret — fra lagerbygg ved industriparken til boligblokker i sentrum.
                </p>
                <div className="plate-corner bg-brand-lightgray p-6 mb-8">
                  <h3 className="font-bold text-brand-black mb-3">Noen eksempler:</h3>
                  <ul className="space-y-2 text-brand-darkgray text-sm">
                    <li><strong>RKL 1:</strong> Garasjer, lagerhaller — ingen fast personopphold</li>
                    <li><strong>RKL 2:</strong> Boliger med egen rømningsvei fra hver enhet</li>
                    <li><strong>RKL 4:</strong> Kontor- og undervisningsbygg</li>
                    <li><strong>RKL 5:</strong> Hoteller og sykehjem, der beboere sover</li>
                    <li><strong>RKL 6:</strong> Sykehus, der beboere har redusert evne til å evakuere selv</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Slik jobber vi</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Komplett brannkonsept med tilhørende branntegninger',
                    'Ansvarsrett overfor kommunen i tiltaksklasse 1 og 2',
                    'Fastpris avtalt før vi starter — ingen tilleggsregninger',
                    'Levering normalt innen 5–10 virkedager',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <div className="plate-corner bg-brand-lightgray p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <FileText size={32} className="text-brand-orange shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-brand-black text-lg mb-2">Hva koster det?</h3>
                      <p className="text-brand-darkgray">
                        Fra ca. <strong className="text-brand-black">15 000 kr</strong> ekskl. mva. i tiltaksklasse 2, inkludert branntegninger. Prisen avhenger av byggets størrelse og kompleksitet — du får et konkret tall før du bestemmer deg.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="plate-corner-lg border border-brand-gray p-8 bg-brand-lightgray">
                  <h2 className="text-brand-black text-2xl font-black mb-6">Ofte stilte spørsmål</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:w-[32%]">
              <ScrollReveal delay={200}>
                <div className="plate-corner border border-brand-gray p-6 bg-brand-dark">
                  <h3 className="font-bold text-xl mb-3 text-brand-white">Trenger du brannkonsept?</h3>
                  <p className="text-brand-white/60 text-sm mb-6 leading-relaxed">
                    Send oss tegningene, så vurderer vi prosjektet kostnadsfritt og svarer innen 24 timer.
                  </p>
                  <Link
                    href="/kontakt-oss"
                    className="block bg-brand-orange text-brand-white font-bold px-6 py-3.5 rounded-[10px] text-center hover:opacity-90 transition-opacity mb-6"
                  >
                    Send prosjektet
                  </Link>
                  <div className="space-y-3 pt-4 border-t border-brand-white/10">
                    <a href="tel:+4740051437" className="flex items-center gap-2 text-brand-white/60 hover:text-brand-orange transition-colors text-sm">
                      <Phone size={14} /> +47 400 51 437
                    </a>
                    <a href="mailto:post@ranabrannkonsult.no" className="flex items-center gap-2 text-brand-white/60 hover:text-brand-orange transition-colors text-sm">
                      <Mail size={14} /> post@ranabrannkonsult.no
                    </a>
                  </div>
                </div>

                <div className="mt-6 plate-corner border border-brand-gray p-6 bg-brand-lightgray">
                  <h3 className="font-bold text-brand-black text-lg mb-4">Andre tjenester</h3>
                  <ul className="space-y-3">
                    {[
                      { href: '/brannprosjektering', label: 'Brannprosjektering' },
                      { href: '/branninspeksjon', label: 'Branninspeksjon' },
                      { href: '/uavhengig-kontroll', label: 'Uavhengig kontroll' },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-brand-darkgray hover:text-brand-orange transition-colors text-sm font-medium">
                          → {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <ScrollReveal variant="fade">
        <section className="bg-brand-dark py-14">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8 max-w-xl mx-auto">
              <ArcticCircleLine dark />
            </div>
            <h2 className="text-brand-white text-2xl lg:text-3xl font-black mb-6">
              Skal du søke om et byggetiltak i Rana?
            </h2>
            <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
              Send prosjektet
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
