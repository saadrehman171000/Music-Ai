import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"

export default function CTA() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-amber-50 to-amber-100/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get Started, Free. <span className="text-amber-700">No Credit Card</span> Required.
          </h2>
          <Button 
            className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white px-8 py-6 text-lg shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
            asChild
          >
            <Link href="/dashboard">
              Start Creating Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

