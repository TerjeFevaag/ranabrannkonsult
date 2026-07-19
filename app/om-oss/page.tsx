import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, Mail, MapPin } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import ArcticCircleLine from '@/components/ArcticCircleLine'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Om Brannkonsult AS | Sentralt godkjent brannrådgiver i Rana',
  description:
    'Brannkonsult AS er representert i Mo i Rana med sentral godkjenning for brannprosjektering i tiltaksklasse 1 og 2. Vi kjenner bygningsmassen fra Mo Industripark til Helgelandskysten.',
  alternates: { canonical: 'https://www.ranabrannkonsult.no/om-oss' },
  openGraph: {
    title: 'Om Brannkonsult AS | Sentralt godkjent brannrådgiver i Rana',
    description:
      'Representert i Mo i Rana, sentralt godkjent for brannprosjektering i tiltaksklasse 1 og 2 — med lokalkunnskap fra Mo Industripark til Helgelandskysten.',
    url: 'https://www.ranabrannkonsult.no/om-oss',
  },
}

const process = [
  { step: '1', title: 'Du sender underlag', desc: 'Situasjonsplan, tegninger og en kort beskrivelse av tiltaket.' },
  { step: '2', title: 'Fastpris innen 24 timer', desc: 'Du vet kostnaden før du bestemmer deg.' },
  { step: '3', title: 'Vi går i gang', desc: 'Ingen befaring nødvendig i de fleste saker.' },
  { step: '4', title: 'Dokumentasjon klar', desc: 'Levert innen 5–10 virkedager, klar for byggesøknaden.' },
]

const breadcrumb = [
  { name: 'Hjem', path: '/' },
  { name: 'Om oss', path: '/om-oss' },
]

export default function OmOssPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
      {/* Header */}
      <section className="bg-brand-dark py-16 lg:py-24">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Om oss</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Brannrådgiveren for industribyen ved polarsirkelen
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Sentralt godkjent for brannprosjektering i tiltaksklasse 1 og 2, representert i Mo i Rana siden 2013.
          </p>
          <div className="hero-4 mt-6 max-w-xl">
            <ArcticCircleLine dark />
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <ScrollReveal className="lg:w-1/2">
              <h2 className="text-brand-black text-3xl font-black mb-6">Vår bakgrunn</h2>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Mo i Rana er ingen typisk norsk småby. Mo Industripark preger fortsatt bybildet med store industrihaller og tunge næringsbygg, mens sentrum har en blanding av eldre trehusbebyggelse, etterkrigsbygårder og nyere boligfelt som har vokst frem rundt industrien. Det gir et bredere spenn av branntekniske problemstillinger enn i en ren boligby — fra brannceller i produksjonshaller til rømningsveier i eldre leiegårder.
              </p>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Vi er representert i Mo i Rana og har sentral godkjenning for brannprosjektering i tiltaksklasse 1 og 2. Oppdragene spenner fra garasjer og tilbygg til borettslag, industribygg og nybygg i Rana-regionen og på Helgeland.
              </p>
              <p className="text-brand-darkgray leading-relaxed mb-8">
                Byen ligger rett ved polarsirkelen, med Svartisen — Norges nest største isbre — som nærmeste nabo i vest. Vi kjenner igjen både de branntekniske utfordringene ved verneverdige bygg i sentrum og kravene som stilles til nye næringsbygg ved industriparken og havneområdet.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '2013', label: 'Etablert' },
                  { number: 'TKL 1+2', label: 'Godkjenning' },
                  { number: '5–10 dager', label: 'Levering' },
                  { number: 'Fastpris', label: 'Alltid' },
                ].map((stat, i) => (
                  <div key={i} className="plate-corner bg-brand-lightgray p-5 text-center">
                    <div className="text-brand-orange font-black text-2xl mb-1">{stat.number}</div>
                    <div className="text-brand-darkgray text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} className="lg:w-1/2">
              <div className="relative plate-corner-lg overflow-hidden h-80 lg:h-96">
                <Image
                  src="/images/om-oss.jpg"
                  alt="Brannkonsult AS team"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Uavhengig og sentralt godkjent */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <ScrollReveal className="lg:w-1/2">
              <h2 className="text-brand-black text-3xl font-black mb-5">Uavhengig og sentralt godkjent</h2>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Vi selger ingen produkter, byggevarer eller håndverkertjenester. Anbefalingene våre styres ikke av salgsinteresser — noe arkitekter, byggmestere og borettslagsstyrer på Helgeland setter pris på når de trenger et raskt svar på et fagspørsmål underveis i prosjektet.
              </p>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Sentral godkjenning fra Direktoratet for byggkvalitet (DiBK) dokumenterer at vi har kompetansen og kvalitetssystemet som kreves for å utøve oppgavene i byggesaker.
              </p>
              <ul className="space-y-3">
                {[
                  'Dokumentert faglig kompetanse innen brannprosjektering',
                  'Ansvarsforsikring som gir deg trygghet',
                  'Godkjent kvalitetssystem',
                  'Referanseprosjekter evaluert av DiBK',
                  'Kan erklære ansvarsrett overfor kommunen',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                    <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={150} variant="scale" className="lg:w-1/2 flex justify-center">
              <Image
                src="/images/sentralt-godkjent.png"
                alt="Sentralt godkjent"
                width={250}
                height={100}
                className="object-contain"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-brand-black text-3xl font-black">Vår prosess</h2>
          </ScrollReveal>
          <div className="flex flex-col lg:flex-row gap-0">
            {process.map((p, i) => (
              <ScrollReveal key={i} delay={i * 100} className="flex-1 flex flex-col items-center text-center relative">
                <div className="w-12 h-12 bg-brand-orange text-brand-white font-black text-lg flex items-center justify-center mb-4 z-10 plate-corner">
                  {p.step}
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] right-[-24px] h-0.5 bg-brand-gray" />
                )}
                <h3 className="font-bold text-brand-black mb-2">{p.title}</h3>
                <p className="text-brand-darkgray text-sm leading-relaxed px-4">{p.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dekningsområde */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <h2 className="text-brand-black text-3xl font-black mb-5">Hvor tar vi oppdrag?</h2>
            <p className="text-brand-darkgray leading-relaxed">
              Rana-regionen og Helgeland er kjernen — inkludert Hemnes, Nesna og Rødøy — men vi bistår også ellers i Nordland. Enten prosjektet ligger midt i sentrum, ute ved industriparken eller lengre ut langs Helgelandskysten, kan du sende oss tegningene og få svar.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact box */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-brand-dark plate-corner-lg p-10 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <h2 className="text-brand-white text-2xl lg:text-3xl font-black mb-3">
                  Ta kontakt med oss
                </h2>
                <div className="space-y-2 text-brand-white/60 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone size={14} />
                    <a href="tel:+4740051437" className="hover:text-brand-orange transition-colors">+47 400 51 437</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={14} />
                    <a href="mailto:post@ranabrannkonsult.no" className="hover:text-brand-orange transition-colors">post@ranabrannkonsult.no</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>Mo i Rana, Helgeland</span>
                  </div>
                </div>
              </div>
              <Link
                href="/kontakt-oss"
                className="bg-brand-orange text-brand-white font-bold px-8 py-4 rounded-[10px] hover:opacity-90 hover:scale-[1.03] transition-all duration-200 whitespace-nowrap"
              >
                Send forespørsel
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
