interface Props {
  className?: string
  dark?: boolean
}

export default function ArcticCircleLine({ className = '', dark = false }: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden="true">
      <div className={`flex-1 h-0 polar-line ${dark ? 'opacity-70' : ''}`} />
      <span
        className={`shrink-0 text-xs font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-[10px] border whitespace-nowrap ${
          dark
            ? 'text-brand-white/80 border-brand-white/30'
            : 'text-brand-darkgray border-brand-gray'
        }`}
      >
        66°33&apos;N — Polarsirkelen
      </span>
      <div className={`flex-1 h-0 polar-line ${dark ? 'opacity-70' : ''}`} />
    </div>
  )
}
