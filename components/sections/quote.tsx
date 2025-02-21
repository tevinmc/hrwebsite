import Image from "next/image"

export function QuoteSection() {
  return (
    <section className="relative h-[400px] bg-black/50 text-white flex items-center">
      <div className="absolute inset-0">
        {/* <Image src="/placeholder.svg" alt="Background" fill className="object-cover opacity-50" /> */}
      </div>
      <div className="relative max-w-4xl mx-auto text-center px-8">
        {/* <blockquote className="text-3xl font-serif leading-relaxed">
          "Surely, in the light of history, it is more intelligent to hope rather than to fear, to try rather than not
          to try. For one thing we know beyond all doubt: Nothing has ever been achieved by the person who says, 'It
          can't be done.'"
        </blockquote> */}
        {/* <cite className="block mt-4">- Eleanor Roosevelt</cite> */}
      </div>
    </section>
  )
}

