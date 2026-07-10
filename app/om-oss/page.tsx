import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, Mail, MapPin } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import ArcticCircleLine from '@/components/ArcticCircleLine'

export const metadata: Metadata = {
  title: 'Om Rana Brannkonsult | Sentralt godkjent brannrådgiver',
  description:
    'Rana Brannkonsult er et sentralt godkjent brannrådgiverfirma med over 1200 prosjekter siden 2013. Vi tilbyr brannkonsept, brannprosjektering og branntilsyn i Mo i Rana og på Helgeland.',
  alternates: { canonical: 'https://www.ranabrannkonsult.no/om-oss' },
}

const process = [
  { step: '1', title: 'Kontakt oss', desc: 'Send forespørsel med informasjon om prosjektet.' },
  { step: '2', title: 'Vi sender tilbud', desc: 'Du mottar fastpristilbud innen 24 timer.' },
  { step: '3', title: 'Du aksepterer', desc: 'Bekreft oppdraget — vi starter arbeidet.' },
  { step: '4', title: 'Vi prosjekterer', desc: 'Erfarne brannrådgivere utarbeider dokumentasjonen.' },
  { step: '5', title: 'Dokumentasjon levert', desc: 'Komplett leveranse klar for kommunen.' },
]

export default function OmOssPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-dark py-16 lg:py-24">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Om oss</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Om Rana Brannkonsult
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Sentralt godkjent brannrådgiverfirma med over 1200 prosjekter siden 2013.
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
                Vi er et spesialisert brannprosjekteringsfirma med base i Mo i Rana, og vi tar oppdrag over hele landet. Vår virksomhet har sentral godkjenning for brannprosjektering i tiltaksklasse 1 og 2.
              </p>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Siden oppstart i 2013 har vi vært involvert i over 1200 forskjellige brannprosjekter — fra små garasjer og enkle tilbygg til store leilighetsbygg og næringseiendommer.
              </p>
              <p className="text-brand-darkgray leading-relaxed mb-8">
                Mo i Rana er en industriby med lange tradisjoner innen stål- og metallproduksjon gjennom Mo Industripark, og byen ligger rett ved polarsirkelen — inngangsporten til Svartisen, Norges nest største isbre. Bygningsmassen spenner fra eldre industribebyggelse og trehus i sentrum til moderne bolig- og næringsbygg i vekst rundt industriparken. Vi leverer brannkonsept og brannprosjektering til private, arkitekter, industribedrifter og utbyggere i hele Rana og på Helgeland.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '2013', label: 'Etablert' },
                  { number: '1200+', label: 'Prosjekter' },
                  { number: 'TKL 1+2', label: 'Godkjenning' },
                  { number: '5', label: 'Brannrådgivere' },
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
                  alt="Rana Brannkonsult team"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sentralt godkjent */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <ScrollReveal className="lg:w-1/2">
              <h2 className="text-brand-black text-3xl font-black mb-5">Sentralt godkjent foretak</h2>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Sentral godkjenning fra Direktoratet for byggkvalitet (DiBK) er en frivillig, nasjonal godkjenningsordning som dokumenterer at foretaket har tilstrekkelig kompetanse og kvalitetssystem for å utøve sine oppgaver i byggesaker.
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

      {/* Nøytral rådgiver */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <h2 className="text-brand-black text-3xl font-black mb-5">Nøytral rådgiver</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              Rana Brannkonsult selger ingen produkter og tilbyr ingen håndverkertjenester. Vi er utelukkende en rådgivende part — det sikrer at rådet vi gir alltid er i ditt beste interesse, og ikke påvirket av salgsinteresser.
            </p>
            <p className="text-brand-darkgray leading-relaxed">
              Mange av kundene våre er arkitekter, entreprenører og industribedrifter som setter pris på at vi er lett tilgjengelige og raskt kan svare på spørsmål underveis i prosjektet — uten ekstra kostnad.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
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
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <h2 className="text-brand-black text-3xl font-black mb-5">Dekningsområde</h2>
            <p className="text-brand-darkgray leading-relaxed">
              Vi har base i Mo i Rana og dekker hele Rana-regionen og Helgeland — inkludert Hemnes, Nesna og Rødøy — men tar oppdrag i hele Nordland og over hele landet. Enten prosjektet ditt ligger i sentrum, ute ved Mo Industripark eller lengre ut på Helgeland, er vi tilgjengelige for befaring og rådgivning.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact box */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
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
                    <a href="tel:+4700000000" className="hover:text-brand-orange transition-colors">+47 000 00 000</a>
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
