import { Star } from 'lucide-react'

interface ReviewCardProps {
  quote: string
  author: string
  company?: string
  date?: string
  rating?: number
}

export default function ReviewCard({ quote, author, company, date, rating }: ReviewCardProps) {
  return (
    <div className="bg-brand-white rounded-[30px] p-8 border border-brand-gray shadow-sm">
      {rating && (
        <div className="flex items-center gap-1 mb-3" aria-label={`${rating} av 5 stjerner`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? 'text-brand-orange fill-brand-orange' : 'text-brand-gray fill-brand-gray'}
            />
          ))}
        </div>
      )}
      <div className="text-brand-orange text-5xl font-serif leading-none mb-4 select-none">&ldquo;</div>
      <p className="text-brand-darkgray italic leading-relaxed mb-6">{quote}</p>
      <div className="border-t border-brand-gray pt-4">
        <p className="font-bold text-brand-black">{author}</p>
        {company && <p className="text-brand-darkgray text-sm">{company}</p>}
        {date && <p className="text-brand-darkgray text-xs mt-1">{date}</p>}
      </div>
    </div>
  )
}
