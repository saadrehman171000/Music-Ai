import Image from "next/image"
import Link from "next/link"
import { Facebook, Youtube, Instagram, Mail, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Image src="/logo.svg" alt="Nagham AI" width={48} height={48} />
              <span className="font-bold text-xl">Nagham AI</span>
            </Link>
            <p className="text-gray-400">
              Harmonizing Tradition With AI Innovation
            </p>
            <p className="text-gray-400">
              It Wouldn't Be Possible To Hire So Many Session Vocalists And Have This Same Experience. You
              Literally Cannot Afford To Hire A Million People And Have Them Do A Bunch Of Different Things This
              Quickly And Effectively.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="bg-[#B8860B] p-2 rounded-full hover:bg-[#B8860B]/80 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-[#B8860B] p-2 rounded-full hover:bg-[#B8860B]/80 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-[#B8860B] p-2 rounded-full hover:bg-[#B8860B]/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Career', 'Subscription', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link 
                    href={`/${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-[#B8860B] transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all" />
                    <span>{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">CONTACT INFORMATION</h3>
            <div className="flex items-center space-x-3 text-gray-400 hover:text-[#B8860B] transition-colors group cursor-pointer">
              <Mail className="h-5 w-5" />
              <span className="group-hover:translate-x-2 transition-transform">info@naghamai.com</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">EMAIL SUBSCRIPTION</h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter Your Email"
                className="bg-gray-800 border-gray-700 text-white focus:border-[#B8860B] transition-colors"
              />
              <Button className="bg-[#B8860B] hover:bg-[#B8860B]/90 transition-colors">
                Send <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container px-4 md:px-6 py-4 text-center text-gray-400">
          © {new Date().getFullYear()} Nagham AI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

