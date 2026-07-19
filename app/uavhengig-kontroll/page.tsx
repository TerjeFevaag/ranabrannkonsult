import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, CheckCircle, ShieldCheck } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import ArcticCircleLine from '@/components/ArcticCircleLine'
import JsonLd from '@/components/JsonLd'
import { faqJsonLd, breadcrumbJsonLd } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Uavhengig kontroll av brann i Rana | Brannkonsult AS',
  description:
    'Uavhengig kontroll (UK) av brannkonsept for byggesaker i Mo i Rana og på Helgeland. Vi kontrollerer branntegninger og løsningsvalg mot TEK17, til fastpris.',
  alternates: { canonical: 'https://www.ranabrannkonsult.no/uavhengig-kontroll' },
  openGraph: {
    title: 'Uavhengig kontroll av brann i Rana | Brannkonsult AS',
    description:
      'Uavhengig kontroll (UK) av brannkonsept for byggesaker i Mo i Rana og på Helgeland, kontrollert mot TEK17.',
    url: 'https://www.ranabrannkonsult.no/uavhengig-kontroll',
  },
}

const faqItems = [
  {
    question: 'Hva innebærer uavhengig kontroll av brann, konkret?',
    answer:
      'En kontrollør uten tilknytning til den som har prosjektert går gjennom brannkonseptet og sjekker at det holder mål opp mot gjeldende forskrifter. Det er en lovpålagt kvalitetssikring, ikke en frivillig ekstra sjekk.',
  },
  {
    question: 'Må jeg ha uavhengig kontroll på prosjektet mitt i Rana?',
    answer:
      'Er brannprosjekteringen i tiltaksklasse 2 (TKL 2) eller høyere, ja — i henhold til SAK10. Det gjelder de fleste næringsbygg, industribygg, boligblokker og bygg med mer enn to etasjer.',
  },
  {
    question: 'Hva koster det?',
    answer:
      'Prisen avhenger av brannkonseptets omfang og kompleksitet. Send oss dokumentasjonen, så gir vi et fastpristilbud før vi starter.',
  },
  {
    question: 'Vi har fått brannkonseptet laget av en annen rådgiver — kan dere likevel gjennomføre kontrollen?',
    answer:
      'Ja, og det er faktisk et krav — den som utfører kontrollen kan ikke være den samme som har prosjektert. Vi tar oppdrag med uavhengig kontroll av brannkonsept utarbeidet av andre.',
  },
  {
    question: 'Dekker dere uavhengig kontroll utenfor Mo i Rana?',
    answer:
      'Ja — blant annet i Hemnes, Nesna og Rødøy, og ellers på Helgeland og i Nordland.',
  },
]

const breadcrumb = [
  { name: 'Hjem', path: '/' },
  { name: 'Uavhengig kontroll', path: '/uavhengig-kontroll' },
]

export default function UavhengigKontrollPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqItems)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
      <section className="bg-brand-dark py-16 lg:py-24">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Uavhengig kontroll</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Uavhengig kontroll (UK) for byggesaker i Rana
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Skal brannkonseptet kontrolleres av noen andre enn den som prosjekterte det? Vi tar oppdraget, uansett hvem som har laget konseptet.
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
                  For en del byggeprosjekter i Rana er uavhengig kontroll av brannsikkerheten ikke valgfritt — det er et krav for at byggesaken skal gå videre. Kontrollen fanger opp feil før de blir dyre å rette, og gir kommunen trygghet for at prosjekteringen faktisk holder mål.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative h-64 lg:h-80 plate-corner-lg overflow-hidden mb-8">
                  <Image
                    src="/images/service-uavhengig-kontroll.jpg"
                    alt="Uavhengig kontroll av brannkonsept på byggeplass"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 700px"
                  />
                </div>

                <h2 className="text-brand-black text-2xl font-black mb-4">Når utløses kravet?</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  SAK10 § 14-2 krever uavhengig kontroll av brannprosjektering fra og med tiltaksklasse 2 (TKL 2). I praksis treffer dette de fleste næringsbygg, industribygg, boligblokker og andre bygg med skjerpede krav til brannsikkerhet — en betydelig andel av byggesakene på Helgeland.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Dette går vi gjennom</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Om brannkonseptet er i tråd med TEK17 og veiledningen til TEK17',
                    'Valgt risikoklasse og brannklasse',
                    'Branncelleinndeling og eventuelle seksjoneringer',
                    'Rømningsveier og røykventilasjon',
                    'Krav til branntekniske installasjoner',
                    'At branntegningene er nøyaktige og komplette',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Slik gjennomfører vi kontrollen</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: ShieldCheck, title: 'Uavhengig gjennomgang', desc: 'En erfaren brannrådgiver går grundig gjennom hele brannkonseptet.' },
                    { icon: CheckCircle, title: 'Skriftlig kontrollrapport', desc: 'Funn, avvik og anbefalinger dokumentert i én rapport.' },
                    { icon: ShieldCheck, title: 'Erklæring om ansvarsrett', desc: 'Vi erklærer ansvarsrett som uavhengig kontrollerende for brann.' },
                    { icon: CheckCircle, title: 'Fastpris', desc: 'Avtalt før vi starter, basert på brannkonseptets omfang.' },
                  ].map((item, i) => (
                    <div key={i} className="plate-corner bg-brand-lightgray p-5 flex items-start gap-3">
                      <item.icon size={20} className="text-brand-orange shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-brand-black mb-1 text-sm">{item.title}</h3>
                        <p className="text-brand-darkgray text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Ingen produkter å selge inn</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Vi har ingen brannvarer, byggevarer eller håndverkertjenester i sortimentet — bare rådgivning. Det er nettopp derfor vi kan kontrollere andres prosjektering uten bindinger som svekker objektiviteten.
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
                  <h3 className="font-bold text-xl mb-3 text-brand-white">Trenger prosjektet ditt UK brann?</h3>
                  <p className="text-brand-white/60 text-sm mb-6 leading-relaxed">
                    Send oss brannkonseptet, så gir vi et fastpristilbud på kontrollen.
                  </p>
                  <Link href="/kontakt-oss" className="block bg-brand-orange text-brand-white font-bold px-6 py-3.5 rounded-[10px] text-center hover:opacity-90 transition-opacity mb-6">
                    Send brannkonseptet
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
                      { href: '/branninspeksjon', label: 'Branninspeksjon' },
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
              Klar for uavhengig kontroll?
            </h2>
            <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
              Send brannkonseptet
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
