interface TestimonialCardProps {
  name: string
  role: string
  quote: string
}

export function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <div className="text-center">
      <h3 className="font-semibold mb-2">{name}</h3>
      <p className="text-sm text-gray-300 mb-2">{role}</p>
      <p className="text-sm leading-relaxed">{quote}</p>
    </div>
  )
}

