import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { MissionSection } from "@/components/sections/mission"
import { ServicesSection } from "@/components/sections/services"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { QuoteSection } from "@/components/sections/quote"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <ServicesSection />
        <TestimonialsSection />
        {/* <QuoteSection /> */}
      </main>
      <Footer />
    </div>
  )
}

