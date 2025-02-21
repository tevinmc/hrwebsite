import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <Image src="/placeholder.svg" alt="UncommonHR Logo" width={180} height={50} className="h-12 w-auto" />
        <div className="flex gap-6">
          <Link href="#" className="text-neutral-700 hover:text-neutral-900">
            Home
          </Link>
          <Link href="#" className="text-neutral-700 hover:text-neutral-900">
            About
          </Link>
          <Link href="#" className="text-neutral-700 hover:text-neutral-900">
            Services
          </Link>
          <Link href="#" className="text-neutral-700 hover:text-neutral-900">
            Projects
          </Link>
          <Button variant="default" className="bg-[#333333] hover:bg-[#262626]">
            Contact
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] grid grid-cols-2">
        <div className="bg-[#005F73] flex flex-col justify-center px-16 text-white">
          <h1 className="text-5xl font-serif mb-4">
            People focused.
            <br />
            Business minded.
          </h1>
          <Button variant="outline" className="w-fit mt-6 text-white border-white hover:bg-white/10">
            Explore Services
          </Button>
        </div>
        <div className="relative">
          <Image src="/placeholder.svg" alt="Office meeting" fill className="object-cover" />
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-[#005F73] text-white py-16 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg leading-relaxed">
            UnCommon HR was created to tackle all those challenging HR issues so you can focus on achieving your
            business and organizational goals. UHR builds solutions that support your culture, yield engaged employees
            and drive strong business results.
          </p>
          <Button variant="outline" className="mt-8 text-white border-white hover:bg-white/10">
            Meet Dale
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-serif text-center mb-12">Our Services</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-[#333333] text-white">
            <CardHeader>
              <CardTitle>HR Infrastructure and Upgrades</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                UHR serves as fresh eyes, creating client-centered, pragmatic, creative and effective solutions for your
                HR needs.
              </p>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                See examples
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#333333] text-white">
            <CardHeader>
              <CardTitle>Strategic Review of Current Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                UHR audit current HR practices for compliance, while establishing best practices and setting a plan for
                the future.
              </p>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Explore Projects
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#333333] text-white">
            <CardHeader>
              <CardTitle>Contribute to the Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                UHR work as part of your HR team to help you complete time sensitive projects and add proven resources.
              </p>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Learn more
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <Button variant="default" className="bg-[#333333] hover:bg-[#262626]">
            See All HR Services
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#005F73] text-white py-16 px-8">
        <h2 className="text-3xl font-serif text-center mb-12">What Our Clients Say</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial cards would go here */}
        </div>
      </section>

      {/* Quote Section */}
      {/* <section className="relative h-[400px] bg-black/50 text-white flex items-center">
        <div className="absolute inset-0">
          <Image src="/placeholder.svg" alt="Background" fill className="object-cover opacity-50" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-8">
          <blockquote className="text-3xl font-serif leading-relaxed">
            "Surely, in the light of history, it is more intelligent to hope rather than to fear, to try rather than not
            to try. For one thing we know beyond all doubt: Nothing has ever been achieved by the person who says, 'It
            can't be done.'"
          </blockquote>
          <cite className="block mt-4">- Eleanor Roosevelt</cite>
        </div>
      </section> */}

      {/* Footer/Contact Form */}
      <footer className="bg-[#333333] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Image src="/placeholder.svg" alt="UncommonHR Logo" width={180} height={50} className="h-12 w-auto mb-6" />
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-gray-300">
                LinkedIn
              </Link>
              <span>|</span>
              <Link href="#" className="text-white hover:text-gray-300">
                Twitter
              </Link>
            </div>
          </div>
          <div className="bg-[#005F73] p-6 rounded-lg">
            <form className="grid gap-4">
              <Input placeholder="First Name" className="bg-white" />
              <Input placeholder="Last Name" className="bg-white" />
              <Input placeholder="Email" type="email" className="bg-white" />
              <Textarea placeholder="Let your request here" className="bg-white" />
              <Button className="bg-[#333333] hover:bg-[#262626] w-full">Get Started</Button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  )
}

