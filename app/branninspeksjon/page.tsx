import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, AlertTriangle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import ArcticCircleLine from '@/components/ArcticCircleLine'
import JsonLd from '@/components/JsonLd'
import { faqJsonLd, breadcrumbJsonLd } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Branntilsyn og branninspeksjon i Rana | Brannkonsult AS',
  description:
    'Har kommunen vært på branntilsyn i Mo i Rana? Vi tilbyr en grundigere branninspeksjon med tilstandsrapport og handlingsplan, for eldre bygg, industribygg og borettslag.',
  alternates: { canonical: 'https://www.ranabrannkonsult.no/branninspeksjon' },
  openGraph: {
    title: 'Branntilsyn og branninspeksjon i Rana | Brannkonsult AS',
    description:
      'Grundig branninspeksjon med tilstandsrapport og handlingsplan for bygg i Mo i Rana og på Helgeland.',
    url: 'https://www.ranabrannkonsult.no/branninspeksjon',
  },
}

const faqItems = [
  {
    question: 'Er branninspeksjon det samme som branntilsyn?',
    answer:
      'Nei. Branntilsyn utføres av kommunens brann- og redningsetat, gjerne som en stikkprøve. Branninspeksjon er noe du bestiller frivillig fra en privat rådgiver som oss, og som går grundigere gjennom bygget med en konkret handlingsplan i etterkant.',
  },
  {
    question: 'Vi har fått pålegg fra brannvesenet — kan dere hjelpe?',
    answer:
      'Ja, det er noe av det vi bistår oftest med. Vi går gjennom hva pålegget faktisk krever, og setter opp en tilstandsrapport og handlingsplan som er tilpasset budsjettet, ikke bare det tekniske minimumskravet.',
  },
  {
    question: 'Hvem har ansvaret i et sameie eller borettslag — styret eller beboerne?',
    answer:
      'Styret svarer for fellesarealene, mens den enkelte beboer har ansvar for egen enhet. Vi hjelper styrer på Helgeland med å kartlegge status i bygget og lage en plan for hva som bør prioriteres.',
  },
  {
    question: 'Hva koster en branninspeksjon?',
    answer:
      'Det avhenger av byggets størrelse og tilstand. Fortell oss litt om bygget, så gir vi et fastpristilbud før vi setter i gang.',
  },
  {
    question: 'Bistår dere også utenfor Mo i Rana?',
    answer:
      'Ja, blant annet i Hemnes, Nesna og Rødøy, og ellers på Helgeland og i Nordland.',
  },
  {
    question: 'Gjelder oppgraderingskravet uansett hvor gammelt bygget er?',
    answer:
      'Ja — alle eksisterende bygninger skal minst tilfredsstille kravene som gjaldt for nybygg i 1985 (BF85). En del av den eldre industribebyggelsen og de eldste bygårdene i Rana har behov for tiltak for å nå dette nivået. Vi vurderer hva som konkret gjelder for ditt bygg.',
  },
]

const breadcrumb = [
  { name: 'Hjem', path: '/' },
  { name: 'Branninspeksjon', path: '/branninspeksjon' },
]

export default function BranninspeksjonPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqItems)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
      <section className="bg-brand-dark py-16 lg:py-24">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Branninspeksjon</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Etter branntilsynet — branninspeksjon i Mo i Rana
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Fått pålegg fra brannvesenet, eller vil du vite tilstanden før noen andre finner ut av det?
          </p>
          <div className="hero-4 mt-6 max-w-xl">
            <ArcticCircleLine dark />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-[68%]">
              <ScrollReveal>
                <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
                  Kommunens branntilsyn er stikkprøvebasert og dekker sjelden hele bygget. Vi tilbyr en grundigere gjennomgang for borettslag, sameier, industribygg og næringseiendommer i Mo i Rana — enten det er en eldre bygård i sentrum eller en produksjonshall ved industriparken.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative h-64 lg:h-80 plate-corner-lg overflow-hidden mb-8">
                  <Image
                    src="/images/service-branntilsyn.jpg"
                    alt="Branntilsyn og inspeksjon av brannslukningsutstyr"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 700px"
                  />
                </div>

                <h2 className="text-brand-black text-2xl font-black mb-4">Hvorfor eldre bygg i Rana ofte trenger tiltak</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Regelverket krever at alle bygninger minst holder samme brannsikkerhetsnivå som gjaldt for nybygg i 1985 (BF85). Rana har en god del bygningsmasse eldre enn dette — industribebyggelse fra oppbyggingen av Mo Industripark og trehusbebyggelse i sentrum — der det ofte gjenstår tiltak for å nå kravet.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Stikkprøve fra kommunen, helhet fra oss</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Brann- og redningsetatens tilsyn er som regel en stikkprøve, ikke en full gjennomgang. Et bygg kan derfor ha reelle mangler selv rett etter et tilsyn uten anmerkninger. Vår branninspeksjon går gjennom hele bygget, ikke bare utvalgte punkter.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Slik jobber vi</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { title: 'Befaring', desc: 'Gjennomgang av fellesarealer, rømningsveier, tekniske installasjoner og konstruksjoner.' },
                    { title: 'Tilstandsrapport', desc: 'Skriftlig oversikt over avvik, rangert etter hvor alvorlige de er.' },
                    { title: 'Handlingsplan', desc: 'Konkrete tiltak med kostnadsestimat, prioritert i riktig rekkefølge.' },
                    { title: 'Rutiner videre', desc: 'Forslag til internkontroll, slik at brannsikkerheten følges opp løpende — ikke bare denne ene gangen.' },
                  ].map((item, i) => (
                    <div key={i} className="plate-corner bg-brand-lightgray p-5">
                      <h3 className="font-bold text-brand-black mb-2">{item.title}</h3>
                      <p className="text-brand-darkgray text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Ansvaret er ditt — arbeidet kan være vårt</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Eier eller styret sitter alltid med det juridiske ansvaret for brannsikkerheten. Vår jobb er å gi deg oversikten og prioriteringen som gjør det mulig å ta riktige beslutninger — uten å bruke penger på tiltak som ikke er nødvendige.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="border-l-4 border-brand-orange plate-corner bg-brand-lightgray p-6 mb-8">
                  <div className="flex items-start gap-3">
                    <AlertTriangle size={20} className="text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-brand-black mb-2">Typisk ordlyd i et pålegg fra brannvesenet</h3>
                      <p className="text-brand-darkgray text-sm italic leading-relaxed">
                        «Det er avdekket mangler ved brannsikkerheten i bygget. Eier pålegges å utbedre disse innen [dato]. Dokumentasjon på gjennomførte tiltak skal oversendes brannvesenet.»
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-brand-darkgray leading-relaxed mb-10">
                  Har du fått noe som ligner? Vent ikke — fristene er reelle. Vi hjelper deg med å tolke pålegget og få frem dokumentasjonen brannvesenet ber om.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="plate-corner-lg border border-brand-gray p-8 bg-brand-lightgray">
                  <h2 className="text-brand-black text-2xl font-black mb-6">Ofte stilte spørsmål</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:w-[32%]">
              <ScrollReveal delay={200}>
                <div className="plate-corner border border-brand-gray p-6 bg-brand-dark">
                  <h3 className="font-bold text-xl mb-3 text-brand-white">Fått pålegg fra brannvesenet?</h3>
                  <p className="text-brand-white/60 text-sm mb-6 leading-relaxed">
                    Send oss pålegget, så hjelper vi deg med tilstandsrapport og handlingsplan.
                  </p>
                  <Link href="/kontakt-oss" className="block bg-brand-orange text-brand-white font-bold px-6 py-3.5 rounded-[10px] text-center hover:opacity-90 transition-opacity mb-6">
                    Ta kontakt
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
                      { href: '/brannkonsept', label: 'Brannkonsept' },
                      { href: '/brannprosjektering', label: 'Brannprosjektering' },
                      { href: '/uavhengig-kontroll', label: 'Uavhengig kontroll' },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-brand-darkgray hover:text-brand-orange transition-colors text-sm font-medium">→ {link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal variant="fade">
        <section className="bg-brand-dark py-14">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8 max-w-xl mx-auto">
              <ArcticCircleLine dark />
            </div>
            <h2 className="text-brand-white text-2xl lg:text-3xl font-black mb-6">
              Usikker på tilstanden i bygget ditt?
            </h2>
            <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
              Ta kontakt
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
