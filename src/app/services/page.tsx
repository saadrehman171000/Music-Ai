import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Music, Wand2, SplitSquareVertical, Mic2, Settings2, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      icon: <Music className="w-12 h-12 text-amber-600" />,
      title: "AI Music Generation",
      description: "Create original music tracks with our advanced AI algorithms."
    },
    {
      icon: <Wand2 className="w-12 h-12 text-amber-600" />,
      title: "Style Transfer",
      description: "Transform your music into different genres and styles instantly."
    },
    {
      icon: <SplitSquareVertical className="w-12 h-12 text-amber-600" />,
      title: "Stem Separation",
      description: "Extract individual instruments and vocals from any track."
    },
    {
      icon: <Mic2 className="w-12 h-12 text-amber-600" />,
      title: "Voice Synthesis",
      description: "Generate realistic vocal tracks with AI technology."
    },
    {
      icon: <Settings2 className="w-12 h-12 text-amber-600" />,
      title: "Custom AI Models",
      description: "Train personalized AI models with your own music style."
    },
    {
      icon: <Sparkles className="w-12 h-12 text-amber-600" />,
      title: "Audio Enhancement",
      description: "Improve sound quality with AI-powered mastering."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="pt-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Our Services
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Transform your musical ideas into reality with our AI-powered tools
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button variant="outline" className="group">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Services?</h2>
              <p className="text-xl text-gray-600">
                Experience the future of music creation with our cutting-edge features
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "State-of-the-art AI technology",
                "Professional-grade output",
                "Easy-to-use interface",
                "Real-time processing",
                "Customizable options",
                "24/7 technical support"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="mb-20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of creators who are already using Nagham AI to produce professional-quality music.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                  Get Started Now
                </Button>
                <Button variant="outline">
                  View Pricing
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

