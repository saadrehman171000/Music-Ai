import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"

const voiceTypes = [
  {
    type: "Female",
    genre: "Traditional Pop",
    color: "bg-amber-700",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81"
  },
  {
    type: "Male",
    genre: "Alternative Rock",
    color: "bg-amber-700/90",
    image: "https://images.unsplash.com/photo-1549834125-82d3c48159a3"
  },
  {
    type: "Female",
    genre: "French Pop",
    color: "bg-amber-700/80",
    image: "https://images.unsplash.com/photo-1583795128727-6ec3642408f8"
  },
  {
    type: "Male",
    genre: "Classic Pop Punk",
    color: "bg-amber-700/70",
    image: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3"
  },
  {
    type: "Male",
    genre: "Afro Beat",
    color: "bg-amber-700/60",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
  }
]

export default function Career() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-4">
            <div className="rounded-2xl overflow-hidden h-[300px] relative hover:shadow-xl transition-shadow">
              <Image
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81"
                alt="Female Singer"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-[300px] relative hover:shadow-xl transition-shadow">
              <Image
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81"
                alt="Male Singer"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-6">Opportunity</h3>
              <div className="space-y-3">
                {voiceTypes.map((voice, index) => (
                  <div
                    key={index}
                    className={`${voice.color} text-white p-4 rounded-xl flex items-center gap-4 hover:-translate-x-2 transition-transform cursor-pointer`}
                  >
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={voice.image}
                        alt={`${voice.type} ${voice.genre}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{voice.type}</div>
                      <div className="text-sm opacity-90">{voice.genre}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5 space-y-6">
            <h2 className="text-5xl font-bold">Career Opportunity</h2>
            <p className="text-xl text-gray-600">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore
              Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo
              Consequat.
            </p>
            <div>
              <h3 className="text-2xl font-bold mb-4">Find Your Career Options</h3>
              <Button className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white px-8 transition-colors shadow-lg hover:shadow-amber-500/25">
                View Career <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

