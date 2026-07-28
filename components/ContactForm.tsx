'use client'

import { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { upload } from '@vercel/blob/client'
import { CheckCircle, AlertCircle, Upload, X, Paperclip } from 'lucide-react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const MAX_FILES = 4
const MAX_SIZE_BYTES = 20 * 1024 * 1024
const ALLOWED_EXTENSIONS = ['pdf', 'jpg', 'jpeg', 'png', 'gif', 'webp', 'dwg', 'dxf', 'doc', 'docx']
const ACCEPT_ATTR = ALLOWED_EXTENSIONS.map((ext) => `.${ext}`).join(',')

function formatSize(bytes: number) {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function getExtension(filename: string) {
  return filename.split('.').pop()?.toLowerCase() ?? ''
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const [fileError, setFileError] = useState('')
  const [uploadProgress, setUploadProgress] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleFileSelect(e: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files ?? [])
    e.target.value = ''
    if (selected.length === 0) return

    setFileError('')
    const accepted: File[] = []
    const rejected: string[] = []

    for (const file of selected) {
      if (!ALLOWED_EXTENSIONS.includes(getExtension(file.name))) {
        rejected.push(`${file.name} (filtype ikke støttet)`)
        continue
      }
      if (file.size > MAX_SIZE_BYTES) {
        rejected.push(`${file.name} (over 20 MB)`)
        continue
      }
      accepted.push(file)
    }

    setFiles((prev) => {
      const combined = [...prev, ...accepted]
      if (combined.length > MAX_FILES) {
        rejected.push(`${combined.length - MAX_FILES} fil(er) forbigått — maks ${MAX_FILES} vedlegg`)
        return combined.slice(0, MAX_FILES)
      }
      return combined
    })

    if (rejected.length > 0) {
      setFileError(`Kunne ikke legge til: ${rejected.join(', ')}`)
    }
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const attachments: { name: string; url: string; size: number }[] = []
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        setUploadProgress(`Laster opp fil ${i + 1} av ${files.length}…`)
        const pathname = `kontaktskjema/${Date.now()}-${file.name.replace(/\s+/g, '-')}`
        const blob = await upload(pathname, file, {
          access: 'public',
          handleUploadUrl: '/api/upload',
        })
        attachments.push({ name: file.name, url: blob.url, size: file.size })
      }
      setUploadProgress('')

      const payload = {
        navn: formData.get('navn'),
        epost: formData.get('epost'),
        telefon: formData.get('telefon'),
        prosjekttype: formData.get('prosjekttype'),
        melding: formData.get('melding'),
        vedlegg: attachments,
      }

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
      setFiles([])
      form.reset()
    } catch {
      setUploadProgress('')
      setStatus('error')
      setErrorMessage('Noe gikk galt under opplasting. Sjekk internettforbindelsen og prøv igjen.')
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

      <div>
        <label className="block text-sm font-bold text-brand-black mb-1.5">Vedlegg</label>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={ACCEPT_ATTR}
          onChange={handleFileSelect}
          disabled={status === 'submitting' || files.length >= MAX_FILES}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={status === 'submitting' || files.length >= MAX_FILES}
          className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-brand-gray rounded-[10px] px-4 py-4 text-brand-darkgray hover:border-brand-orange hover:text-brand-orange transition-colors disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:border-brand-gray disabled:hover:text-brand-darkgray"
        >
          <Upload size={18} />
          <span className="text-sm font-bold">Legg til filer</span>
        </button>
        <p className="text-brand-darkgray text-xs mt-2">
          PDF, JPG, PNG, DWG, DXF, DOC, DOCX — maks 20 MB per fil, opptil 4 filer
        </p>

        {files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((file, i) => (
              <li
                key={`${file.name}-${i}`}
                className="flex items-center justify-between gap-3 bg-brand-lightgray rounded-[10px] px-4 py-2.5"
              >
                <span className="flex items-center gap-2 min-w-0 text-sm text-brand-black">
                  <Paperclip size={14} className="shrink-0 text-brand-darkgray" />
                  <span className="truncate">{file.name}</span>
                  <span className="text-brand-darkgray text-xs shrink-0">({formatSize(file.size)})</span>
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  disabled={status === 'submitting'}
                  aria-label={`Fjern ${file.name}`}
                  className="shrink-0 text-brand-darkgray hover:text-brand-orange transition-colors disabled:opacity-60"
                >
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>
        )}

        {fileError && <p className="text-red-700 text-xs mt-2">{fileError}</p>}
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
        {status === 'submitting' ? uploadProgress || 'Sender...' : 'Send forespørsel'}
      </button>
    </form>
  )
}
