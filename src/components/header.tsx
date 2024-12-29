import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function Header() {
  return (
    <header className="px-6 lg:px-8 h-20 flex items-center fixed w-full bg-white z-50">
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Nagham AI" width={60} height={60} className="rounded-full" />
        </Link>
        <span className="text-sm text-gray-600 mt-2 ml-2">Harmonizing Tradition With AI Innovation</span>
      </div>
      <nav className="ml-auto flex items-center gap-8">
        <Link className="text-gray-600 hover:text-[#B8860B]" href="/">
          Home
        </Link>
        <Link className="text-gray-600 hover:text-[#B8860B]" href="/about">
          About Us
        </Link>
        <Link className="text-gray-600 hover:text-[#B8860B]" href="/services">
          Services
        </Link>
        <Link className="text-gray-600 hover:text-[#B8860B]" href="/career">
          Career
        </Link>
        <Link className="text-gray-600 hover:text-[#B8860B]" href="/subscription">
          Subscription
        </Link>
        <Link className="text-gray-600 hover:text-[#B8860B]" href="/contact">
          Contact US
        </Link>
        <Button className="bg-[#B8860B] text-white hover:bg-[#B8860B]/90">
          Sign in
        </Button>
        <Button variant="outline" className="border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B]/10">
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </nav>
    </header>
  )
}

