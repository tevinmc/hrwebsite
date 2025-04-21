"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative p-4 max-w-7xl mx-auto bg-epiphanyBg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Image
            src="/logo.png"
            alt="Epiphany Enterprises International Logo"
            width={100}
            height={100}
            className="h-16 w-auto md:h-24"
          />
          <h3 className="text-sm md:text-xl font-bold text-epiphanyGray">
            Epiphany Enterprises International
          </h3>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
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
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-neutral-700" />
          ) : (
            <Menu className="h-6 w-6 text-neutral-700" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-white z-50 shadow-lg p-4 flex flex-col gap-4">
          <Link 
            href="#" 
            className="text-neutral-700 hover:text-neutral-900 py-2 border-b"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="#" 
            className="text-neutral-700 hover:text-neutral-900 py-2 border-b"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="#" 
            className="text-neutral-700 hover:text-neutral-900 py-2 border-b"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Button 
            variant="default" 
            className="bg-[#333333] hover:bg-[#262626] w-full mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Button>
        </div>
      )}
    </nav>
  );
}
