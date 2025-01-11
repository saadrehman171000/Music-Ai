"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`px-6 lg:px-8 h-20 flex items-center fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-amber-700"
          >
            <path
              d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z"
              fill="url(#paint0_linear)"
            />
            <path
              d="M24 12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"
              fill="url(#paint1_linear)"
            />
            <path
              d="M24 20c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z"
              fill="currentColor"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="4"
                y1="4"
                x2="44"
                y2="44"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F59E0B" />
                <stop offset="1" stopColor="#B45309" />
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="12"
                y1="12"
                x2="36"
                y2="36"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B45309" />
                <stop offset="1" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
          </svg>
        </Link>

        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className={`h-6 w-6 transition-colors duration-300 ${
            scrolled ? 'text-amber-700' : 'text-amber-600'
          }`} />
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {[
            ['Home', '/'],
            ['About Us', '/about'],
            ['Services', '/services'],
            ['Career', '/career'],
            ['Subscription', '/subscription'],
            ['Contact US', '/contact'],
          ].map(([title, url]) => (
            <Link 
              key={title}
              className={`text-base font-medium transition-all duration-300 hover:text-amber-600 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-amber-600 after:left-0 after:-bottom-1 after:rounded-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                scrolled ? 'text-gray-700' : 'text-gray-800'
              }`}
              href={url}
            >
              {title}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button 
            variant="ghost" 
            className={`font-medium transition-colors duration-300 ${
              scrolled 
                ? 'text-amber-700 hover:bg-amber-50' 
                : 'text-amber-600 hover:bg-amber-50/50'
            }`}
            asChild
          >
            <Link href="/signin">Sign in</Link>
          </Button>
          <Button 
            className="bg-gradient-to-r from-amber-500 to-amber-700 text-white hover:from-amber-600 hover:to-amber-800 shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg p-6 lg:hidden animate-in slide-in-from-top">
            <nav className="flex flex-col gap-4">
              {[
                ['Home', '/'],
                ['About Us', '/about'],
                ['Services', '/services'],
                ['Career', '/career'],
                ['Subscription', '/subscription'],
                ['Contact US', '/contact'],
              ].map(([title, url]) => (
                <Link
                  key={title}
                  className="text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium"
                  href={url}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {title}
                </Link>
              ))}
              <hr className="my-4 border-amber-100" />
              <Link
                href="/signin"
                className="text-amber-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </Link>
              <Button 
                className="bg-gradient-to-r from-amber-500 to-amber-700 text-white hover:from-amber-600 hover:to-amber-800 shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export function PageHeader({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="pt-32 pb-12 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          {subtitle && (
            <span className="text-amber-700 text-xl font-semibold">{subtitle}</span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}

