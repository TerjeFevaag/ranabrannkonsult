import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import ArcticCircleLine from '@/components/ArcticCircleLine'

export const metadata: Metadata = {
  title: 'Brannprosjektering i Rana | Rana Brannkonsult',
  description:
    'Profesjonell brannprosjektering i Mo i Rana og på Helgeland. Sentralt godkjent TKL 1+2. Fast pris fra ca. 15 000 kr. Tilbygg, bruksendring, nybygg.',
  alternates: { canonical: 'https://www.ranabrannkonsult.no/brannprosjektering' },
}

const faqItems = [
  {
    question: 'Hva koster brannprosjektering i Mo i Rana?',
    answer:
      'Et brannkonsept i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva., inkludert branntegninger. Vi tilbyr alltid fastpris. Send oss tegninger og prosjektbeskrivelse for et nøyaktig tilbud.',
  },
  {
    question: 'Trenger jeg brannprosjektering for tilbygg eller bruksendring?',
    answer:
      'Ja, de fleste tiltak som krever søknad til kommunen utløser også krav om brannprosjektering — dette gjelder tilbygg, påbygg, bruksendring, ny boenhet i eksisterende bygg og bytte av vinduer i brannvegg. Ta kontakt for en gratis vurdering.',
  },
  {
    question: 'Er befaring nødvendig?',
    answer:
      'I de fleste saker er befaring ikke nødvendig. Med digitale kartdata, tegningsunderlag og bilder kan vi utarbeide god brannprosjektering uten å besøke bygget. Vi gir beskjed hvis vi ser behov for befaring.',
  },
  {
    question: 'Tilbyr dere håndverkertjenester?',
    answer:
      'Nei — vi er en nøytral brannrådgiver og selger ingen produkter eller håndverkertjenester. Dette sikrer at rådgivningen alltid er i ditt beste interesse.',
  },
  {
    question: 'Hva trengs fra deg for å gi et pristilbud?',
    answer:
      'Vi trenger adresse, antall etasjer og bruksareal, plantegninger og en kort prosjektbeskrivelse. Jo mer informasjon vi får, jo mer presist kan vi prise oppdraget. Send det til oss på e-post eller via kontaktskjemaet.',
  },
]

export default function BrannprosjekteringPage() {
  return (
    <>
      <section className="bg-brand-dark py-16 lg:py-24">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Brannprosjektering</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Brannprosjektering i Mo i Rana
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Vi sørger for at bygget ditt oppfyller alle krav til brannsikkerhet — til fast pris og med rask levering.
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
                  Brannprosjektering betyr skriftlig planlegging av nødvendig brannsikring i og rundt bygningen. Vi sørger for at ditt bygg i Rana oppfyller alle krav i plan- og bygningsloven og brann- og eksplosjonsvernloven — til fast pris.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative h-64 lg:h-80 plate-corner-lg overflow-hidden mb-8">
                  <Image
                    src="/images/service-brannprosjektering.jpg"
                    alt="Brannrådgiver i arbeid med brannprosjektering"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 700px"
                  />
                </div>

                <h2 className="text-brand-black text-2xl font-black mb-4">Når er det behov for brannprosjektering?</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Bytte av vinduer eller dører i brannvegg/seksjoneringsvegg',
                    'Tilbygg eller påbygg på eksisterende bygg',
                    'Bruksendring (f.eks. garasje til boenhet)',
                    'Etablering av ny selvstendig boenhet (utleieenhet)',
                    'Nybygg — boliger, næringsbygg, industribygg',
                    'Rehabilitering av eldre bygg med branntekniske mangler',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Risikoklasser</h2>
                <p className="text-brand-darkgray leading-relaxed mb-4">
                  Alle bygg klassifiseres i en risikoklasse (RKL 1–6) ut fra bruksformål og konsekvensen en brann kan få for personer i bygget. Eksempler: RKL 1 (garasjer, lager), RKL 2 (boliger), RKL 4 (kontor, industri, undervisning), RKL 5 (hotell, overnatting) og RKL 6 (sykehus).
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Brannklasser og tiltaksklasser</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Brannklassen (BKL 1–4) fastsettes ut fra risikoklasse og antall etasjer, og bestemmer hvilke branntekniske krav bygget må oppfylle. Tiltaksklassen (TKL 1–3) sier noe om kompleksiteten i prosjekteringsoppgaven og hvilken kompetanse som kreves av den prosjekterende. Vi er sentralt godkjent for brannprosjektering i TKL 1 og 2.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Start tidlig — spar penger</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Jo tidligere i prosjektet du involverer en brannrådgiver, desto enklere og billigere er det å finne gode løsninger. Brannkrav som oppdages sent i prosessen kan kreve dyre konstruksjonsendringer. Vi anbefaler å ta kontakt allerede i skissefasen.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi tilbyr</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Brannkonsept og brannteknisk notat',
                    'Branntegninger (brannceller, rømningsveier, seksjoneringer)',
                    'Ansvarsrett overfor kommunen i tiltaksklasse 1 og 2',
                    'Fastpris — ingen overraskelser',
                    'Levering innen 5–10 virkedager',
                    'God oppfølging gjennom hele byggesaken',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi trenger fra deg</h2>
                <ul className="space-y-3 mb-10">
                  {[
                    'Situasjonsplan / adresse',
                    'Byggesakstegninger (plan, snitt, fasade)',
                    'Kort prosjektbeskrivelse',
                    'Eventuelle forhåndsuttalelser fra kommunen',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
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
                  <h3 className="font-bold text-xl mb-3 text-brand-white">Be om tilbud</h3>
                  <p className="text-brand-white/60 text-sm mb-6 leading-relaxed">
                    Send oss tegningene og vi sender deg et fastpristilbud innen 24 timer.
                  </p>
                  <Link href="/kontakt-oss" className="block bg-brand-orange text-brand-white font-bold px-6 py-3.5 rounded-[10px] text-center hover:opacity-90 transition-opacity mb-6">
                    Kontakt oss
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
                      { href: '/branntilsyn', label: 'Branntilsyn' },
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
              Be om tilbud på brannprosjektering i Rana
            </h2>
            <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
              Få tilbud nå
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
