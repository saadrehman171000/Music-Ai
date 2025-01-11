import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Features() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Simplifying Music Workflows For <span className="text-amber-700">5,000,000+</span> Creators
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="bg-amber-50 rounded-2xl p-8 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-20 h-20 bg-gradient-to-r from-amber-500 to-amber-700 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
                  alt="Original audio"
                  fill
                  className="object-cover mix-blend-overlay"
                />
              </div>
              <div className="relative w-20 h-20 bg-black rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce"
                  alt="AI Voice"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Every conversion supports artists</h3>
            <p className="text-gray-600 mb-6">
              Use our library of high-quality, royalty-free AI voices with the knowledge that each use contributes to artist compensation.
            </p>
            <Button 
              className="w-full bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
              asChild
            >
              <Link href="/dashboard">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="bg-gradient-to-r from-amber-500 to-amber-700 rounded-2xl p-8 text-white hover:shadow-xl hover:shadow-amber-500/25 transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-4">Your creativity, accelerated</h3>
            <p className="mb-6">
              Streamline editing, tuning, harmonization, and effects processing with AI tools.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl mb-2">AI</div>
                  <div className="text-sm">Mastering</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-sm">Stem</div>
                  <div className="font-bold">Splitter</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-sm">Vocal</div>
                  <div className="font-bold">Remover</div>
                </div>
              </div>
            </div>
            <Button 
              variant="secondary" 
              className="w-full bg-white text-amber-700 hover:bg-white/90 transition-colors"
              asChild
            >
              <Link href="/dashboard">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="bg-black rounded-2xl p-8 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-4">Precision vocal cloning</h3>
            <p className="mb-6">
              Use our library of high-quality, royalty-free AI voices with the knowledge that each use contributes to artist compensation.
            </p>
            <Button 
              variant="secondary" 
              className="w-full bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
              asChild
            >
              <Link href="/dashboard">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}