import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-[600px] grid grid-cols-2">
      <div className="bg-[#005F73] flex flex-col justify-center px-16 text-white">
        <h1 className="text-5xl font-serif mb-4">
        Helping businesses streamline HR operations, stay compliant, and build strong teams.
        </h1>
        <Button asChild variant="outline" className="w-fit mt-6 text-black border-white hover:bg-white/10">
          <Link href="/services">Explore Services</Link>
        </Button>
      </div>
      <div className="relative">
        <Image src="/placeholder.svg" alt="Office meeting" fill className="object-cover" />
      </div>
    </section>
  )
}

