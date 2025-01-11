import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import ArtistLogos from './artist-logos'

export default function Hero() {
  return (
    <section className="w-full pt-32 pb-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Revolutionizing Music Production With AI
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Experience the future of music creation through AI technology.
          </p>
          <Button 
            className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white h-12 px-8 text-lg rounded-full shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
            asChild
          >
            <Link href="/dashboard">
              Start Creating Music <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="mt-16 relative rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04"
            alt="Music Production"
            width={1200}
            height={600}
            className="w-full object-cover h-[600px]"
            priority
          />
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl">
            We've published over <span className="text-amber-700 font-bold">650</span> episodes, amounting to nearly <span className="text-amber-700 font-bold">16,000 minutes</span> of powerful AI audio music and songs.
          </p>
        </div>
        <ArtistLogos />
      </div>
    </section>
  )
}

