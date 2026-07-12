'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      navn: formData.get('navn'),
      epost: formData.get('epost'),
      telefon: formData.get('telefon'),
      prosjekttype: formData.get('prosjekttype'),
      melding: formData.get('melding'),
    }

    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMessage(data.error || 'Noe gikk galt. Prøv igjen senere.')
        return
      }

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMessage('Noe gikk galt. Sjekk internettforbindelsen og prøv igjen.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-start gap-3 bg-green-50 border border-green-200 text-green-800 rounded-[10px] px-5 py-4">
        <CheckCircle size={22} className="shrink-0 mt-0.5" />
        <div>
          <p className="font-bold">Takk for din henvendelse!</p>
          <p className="text-sm mt-1">Meldingen din er sendt. Vi svarer innen 24 timer.</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="navn" className="block text-sm font-bold text-brand-black mb-1.5">
          Navn *
        </label>
        <input
          type="text"
          id="navn"
          name="navn"
          required
          maxLength={100}
          disabled={status === 'submitting'}
          className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors disabled:opacity-60"
          placeholder="Ditt fulle navn"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="epost" className="block text-sm font-bold text-brand-black mb-1.5">
            E-post *
          </label>
          <input
            type="email"
            id="epost"
            name="epost"
            required
            maxLength={200}
            disabled={status === 'submitting'}
            className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors disabled:opacity-60"
            placeholder="din@epost.no"
          />
        </div>
        <div>
          <label htmlFor="telefon" className="block text-sm font-bold text-brand-black mb-1.5">
            Telefon
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            maxLength={30}
            disabled={status === 'submitting'}
            className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors disabled:opacity-60"
            placeholder="+47 000 00 000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="prosjekttype" className="block text-sm font-bold text-brand-black mb-1.5">
          Prosjekttype
        </label>
        <select
          id="prosjekttype"
          name="prosjekttype"
          disabled={status === 'submitting'}
          className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black focus:outline-none focus:border-brand-orange transition-colors bg-brand-white disabled:opacity-60"
        >
          <option value="">Velg type</option>
          <option value="brannkonsept">Brannkonsept</option>
          <option value="brannprosjektering">Brannprosjektering</option>
          <option value="branninspeksjon">Branninspeksjon</option>
          <option value="uavhengig-kontroll">Uavhengig kontroll</option>
          <option value="annet">Annet</option>
        </select>
      </div>

      <div>
        <label htmlFor="melding" className="block text-sm font-bold text-brand-black mb-1.5">
          Melding *
        </label>
        <textarea
          id="melding"
          name="melding"
          required
          maxLength={5000}
          rows={5}
          disabled={status === 'submitting'}
          className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors resize-none disabled:opacity-60"
          placeholder="Beskriv prosjektet ditt kort..."
        />
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-800 rounded-[10px] px-5 py-4">
          <AlertCircle size={20} className="shrink-0 mt-0.5" />
          <p className="text-sm">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-brand-orange text-brand-white font-bold px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sender...' : 'Send forespørsel'}
      </button>
    </form>
  )
}
