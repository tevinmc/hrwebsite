import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative flex flex-col md:grid md:grid-cols-2 min-h-[400px] md:h-[600px]">
      <div className="bg-[#005F73] flex flex-col justify-center p-8 md:px-16 text-white order-2 md:order-1">
        <h1 className="text-3xl md:text-5xl font-serif mb-4">
          Helping businesses streamline HR operations, stay compliant, and build strong teams.
        </h1>
        <Button asChild variant="outline" className="w-fit mt-6 text-black border-white hover:bg-white/10">
          <Link href="/services">Explore Services</Link>
        </Button>
      </div>
      <div className="relative h-[300px] md:h-auto order-1 md:order-2">
        <Image 
          src="/hero-main.jpg" 
          alt="Office meeting" 
          fill 
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}

