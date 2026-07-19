import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import ArcticCircleLine from '@/components/ArcticCircleLine'
import JsonLd from '@/components/JsonLd'
import { faqJsonLd, breadcrumbJsonLd } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Brannprosjektering i Rana | Brannkonsult AS',
  description:
    'Brannprosjektering for nybygg, tilbygg og bruksendring i Mo i Rana og på Helgeland. Sentralt godkjent TKL 1+2, fastpris fra ca. 15 000 kr.',
  alternates: { canonical: 'https://www.ranabrannkonsult.no/brannprosjektering' },
  openGraph: {
    title: 'Brannprosjektering i Rana | Brannkonsult AS',
    description:
      'Brannprosjektering for nybygg, tilbygg og bruksendring i Mo i Rana og på Helgeland. Sentralt godkjent TKL 1+2.',
    url: 'https://www.ranabrannkonsult.no/brannprosjektering',
  },
}

const faqItems = [
  {
    question: 'Utløser et tilbygg på huset mitt krav om brannprosjektering?',
    answer:
      'I de fleste tilfeller, ja — sammen med bruksendring, påbygg, ny boenhet i et eksisterende bygg og bytte av vinduer eller dører i brannvegg. Er du usikker, send oss en kort beskrivelse så vurderer vi det gratis.',
  },
  {
    question: 'Hva koster brannprosjektering?',
    answer:
      'Fra ca. 15 000 kr ekskl. mva. i tiltaksklasse 2, inkludert branntegninger, alltid til fastpris. Send tegninger og prosjektbeskrivelse, så får du et konkret tall.',
  },
  {
    question: 'Kommer dere på befaring i Mo i Rana, eller løses det digitalt?',
    answer:
      'De fleste saker løses uten befaring — vi jobber ut fra kartdata, tegningsunderlag og bilder. Gjelder det et eldre bygg med begrenset dokumentasjon fra før, avtaler vi befaring.',
  },
  {
    question: 'Kan dere levere produkter eller utføre selve byggearbeidet?',
    answer:
      'Nei, vi er en nøytral brannrådgiver uten egne produkter eller håndverkertjenester å selge. Det sikrer at anbefalingene er i ditt beste interesse.',
  },
  {
    question: 'Tar dere oppdrag utenfor Mo i Rana sentrum?',
    answer:
      'Ja — blant annet i Hemnes, Nesna og Rødøy, og ellers på Helgeland og i Nordland.',
  },
  {
    question: 'Hva trenger dere fra meg for å regne ut en pris?',
    answer:
      'Adresse, antall etasjer og bruksareal, plantegninger og en kort beskrivelse av tiltaket. Jo mer underlag vi får, desto mer presist blir tilbudet — send det på e-post eller via kontaktskjemaet.',
  },
]

const breadcrumb = [
  { name: 'Hjem', path: '/' },
  { name: 'Brannprosjektering', path: '/brannprosjektering' },
]

export default function BrannprosjekteringPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqItems)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
      <section className="bg-brand-dark py-16 lg:py-24">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Brannprosjektering</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Brannprosjektering for bygget ditt i Rana
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Enten det gjelder et industribygg ved Mo Industripark eller et tilbygg på boligen — vi finner løsningen som oppfyller kravene uten unødvendige kostnader.
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
                  Brannprosjektering er den skriftlige planleggingen av brannsikringen i og rundt et bygg — dokumentasjonen som viser at plan- og bygningsloven og brann- og eksplosjonsvernloven er ivaretatt. Vi utarbeider dette for byggeiere, arkitekter og entreprenører i Rana-regionen, til fastpris.
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

                <h2 className="text-brand-black text-2xl font-black mb-4">Når utløses kravet?</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Nybygg — bolig, næringsbygg eller industribygg',
                    'Tilbygg eller påbygg på et eksisterende bygg',
                    'Bruksendring, for eksempel fra garasje til boenhet',
                    'Ny, selvstendig boenhet i et bygg du allerede eier',
                    'Bytte av vinduer eller dører i en brann- eller seksjoneringsvegg',
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
                <h2 className="text-brand-black text-2xl font-black mb-4">Risiko-, brann- og tiltaksklasse</h2>
                <p className="text-brand-darkgray leading-relaxed mb-4">
                  Bygget klassifiseres først i en risikoklasse (RKL 1–6) ut fra bruksformål og hvor alvorlig konsekvensen av en brann vil være for menneskene der. Risikoklassen, sammen med antall etasjer, gir deretter brannklassen (BKL 1–4), som bestemmer de branntekniske kravene. Tiltaksklassen (TKL 1–3) sier noe om hvor kompleks selve prosjekteringen er — vi er sentralt godkjent for TKL 1 og 2, som dekker de aller fleste byggesaker på Helgeland.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Involver oss før spaden settes i jorda</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Brannkrav som dukker opp sent i prosessen kan kreve dyre endringer i konstruksjonen. Kommer vi inn allerede i skissefasen, kan vi ofte peke på løsninger som er både billigere og enklere å bygge.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Det får du</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Brannkonsept eller brannteknisk notat, avhengig av tiltaket',
                    'Branntegninger med brannceller, rømningsveier og seksjoneringer',
                    'Ansvarsrett overfor kommunen i tiltaksklasse 1 og 2',
                    'Fastpris avtalt på forhånd',
                    'Levering normalt innen 5–10 virkedager',
                    'Oppfølging gjennom resten av byggesaken, uten ekstra kostnad',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Dette trenger vi fra deg</h2>
                <ul className="space-y-3 mb-10">
                  {[
                    'Adresse eller situasjonsplan',
                    'Byggesakstegninger — plan, snitt og fasade',
                    'Kort beskrivelse av tiltaket',
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
                  <h3 className="font-bold text-xl mb-3 text-brand-white">Planlegger du et byggeprosjekt?</h3>
                  <p className="text-brand-white/60 text-sm mb-6 leading-relaxed">
                    Send tegningene dine, så har du et fastpristilbud i hånden innen 24 timer.
                  </p>
                  <Link href="/kontakt-oss" className="block bg-brand-orange text-brand-white font-bold px-6 py-3.5 rounded-[10px] text-center hover:opacity-90 transition-opacity mb-6">
                    Send tegningene
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
                      { href: '/branninspeksjon', label: 'Branninspeksjon' },
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
              La oss se på tegningene dine
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
