import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "@/components/forms/contact-form"

export function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Image src="/logo.png" alt="" width={180} height={50} className="h-24 w-auto mb-6" />
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
        <ContactForm />
      </div>
    </footer>
  )
}

