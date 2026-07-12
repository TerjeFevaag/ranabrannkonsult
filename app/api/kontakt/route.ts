import { NextResponse } from 'next/server'

const SENDER_EMAIL = 'post@ranabrannkonsult.no'
const SENDER_NAME = 'Brannkonsult AS'
const RECIPIENT_EMAIL = 'post@ranabrannkonsult.no'

const PROSJEKTTYPE_LABELS: Record<string, string> = {
  brannkonsept: 'Brannkonsept',
  brannprosjektering: 'Brannprosjektering',
  branninspeksjon: 'Branninspeksjon',
  'uavhengig-kontroll': 'Uavhengig kontroll',
  annet: 'Annet',
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Ugyldig forespørsel.' }, { status: 400 })
  }

  if (typeof body !== 'object' || body === null) {
    return NextResponse.json({ error: 'Ugyldig forespørsel.' }, { status: 400 })
  }

  const { navn, epost, telefon, prosjekttype, melding } = body as Record<string, unknown>

  const errors: string[] = []

  const trimmedNavn = typeof navn === 'string' ? navn.trim() : ''
  if (!trimmedNavn) errors.push('Navn er påkrevd.')
  if (trimmedNavn.length > 100) errors.push('Navn er for langt.')

  const trimmedEpost = typeof epost === 'string' ? epost.trim() : ''
  if (!trimmedEpost) errors.push('E-post er påkrevd.')
  else if (!EMAIL_REGEX.test(trimmedEpost) || trimmedEpost.length > 200) errors.push('E-postadressen er ugyldig.')

  const trimmedTelefon = typeof telefon === 'string' ? telefon.trim().slice(0, 30) : ''

  const trimmedProsjekttype = typeof prosjekttype === 'string' ? prosjekttype.trim() : ''
  if (trimmedProsjekttype && !(trimmedProsjekttype in PROSJEKTTYPE_LABELS)) {
    errors.push('Ugyldig prosjekttype.')
  }

  const trimmedMelding = typeof melding === 'string' ? melding.trim() : ''
  if (!trimmedMelding) errors.push('Melding er påkrevd.')
  if (trimmedMelding.length > 5000) errors.push('Meldingen er for lang.')

  if (errors.length > 0) {
    return NextResponse.json({ error: errors[0] }, { status: 400 })
  }

  const apiKey = process.env.MAILERSEND_API_KEY
  if (!apiKey) {
    console.error('MAILERSEND_API_KEY er ikke satt.')
    return NextResponse.json(
      { error: 'Kunne ikke sende meldingen akkurat nå. Prøv igjen senere, eller ring oss direkte.' },
      { status: 500 }
    )
  }

  const prosjekttypeLabel = trimmedProsjekttype ? PROSJEKTTYPE_LABELS[trimmedProsjekttype] : 'Ikke oppgitt'

  const textBody = [
    `Ny henvendelse fra kontaktskjemaet på ranabrannkonsult.no`,
    ``,
    `Navn: ${trimmedNavn}`,
    `E-post: ${trimmedEpost}`,
    `Telefon: ${trimmedTelefon || 'Ikke oppgitt'}`,
    `Prosjekttype: ${prosjekttypeLabel}`,
    ``,
    `Melding:`,
    trimmedMelding,
  ].join('\n')

  const htmlBody = `
    <h2>Ny henvendelse fra kontaktskjemaet</h2>
    <p><strong>Navn:</strong> ${escapeHtml(trimmedNavn)}</p>
    <p><strong>E-post:</strong> ${escapeHtml(trimmedEpost)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(trimmedTelefon || 'Ikke oppgitt')}</p>
    <p><strong>Prosjekttype:</strong> ${escapeHtml(prosjekttypeLabel)}</p>
    <p><strong>Melding:</strong></p>
    <p>${escapeHtml(trimmedMelding).replace(/\n/g, '<br />')}</p>
  `

  try {
    const response = await fetch('https://api.mailersend.com/v1/email', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: { email: SENDER_EMAIL, name: SENDER_NAME },
        to: [{ email: RECIPIENT_EMAIL, name: SENDER_NAME }],
        reply_to: { email: trimmedEpost, name: trimmedNavn },
        subject: `Ny henvendelse fra ${trimmedNavn} (${prosjekttypeLabel})`,
        text: textBody,
        html: htmlBody,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('MailerSend-feil:', response.status, errorText)
      return NextResponse.json(
        { error: 'Kunne ikke sende meldingen akkurat nå. Prøv igjen senere, eller ring oss direkte.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Feil ved sending til MailerSend:', err)
    return NextResponse.json(
      { error: 'Kunne ikke sende meldingen akkurat nå. Prøv igjen senere, eller ring oss direkte.' },
      { status: 500 }
    )
  }
}
