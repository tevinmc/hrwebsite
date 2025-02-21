import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
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
        <Button variant="default" className="bg-[#333333] hover:bg-[#262626]">
          Contact
        </Button>
      </div>
    </nav>
  )
}

