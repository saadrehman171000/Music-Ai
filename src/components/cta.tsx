import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Get Started, Free. <span className="text-[#B8860B]">No Credit Card</span> Required.
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Our Free Plan Lets You See How Nagham AI Can Help Streamline Your Vocal And Audio Workflow. When You Are
          Ready To Take The Next Step, Paid Plans Start At $14.99 / Month.
        </p>
        <Button className="bg-[#B8860B] hover:bg-[#B8860B]/90 text-white text-lg px-8 py-6 rounded-full transform hover:scale-105 transition-all duration-300">
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}

