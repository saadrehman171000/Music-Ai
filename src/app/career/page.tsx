"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Rocket, Users, Star, Briefcase, GraduationCap, Heart } from 'lucide-react'
import Image from "next/image"

export default function CareerPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section with proper spacing */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-amber-50/50 to-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <span className="text-amber-700 text-xl font-semibold">Join Our Team</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Career Opportunities
            </h1>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-nagham-gold">
                Join Our Creative Journey
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                At Nagham AI, we're building the future of music creation. Join our community of innovators, creators, and music enthusiasts to shape the next generation of AI-powered music tools.
              </p>
              <Button className="bg-gradient-to-r from-amber-500 to-nagham-gold hover:from-amber-600 hover:to-amber-700">
                Get Started Today
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Nagham AI Community"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-nagham-gold">
            Why Join Nagham AI?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Innovation First",
                description: "Be part of groundbreaking AI technology that's transforming the music industry."
              },
              {
                icon: Users,
                title: "Global Community",
                description: "Connect with creators worldwide and share your passion for music and technology."
              },
              {
                icon: Star,
                title: "Creative Freedom",
                description: "Express yourself freely with our suite of AI-powered music creation tools."
              }
            ].map((benefit, index) => (
              <Card key={index} className="form-container hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <benefit.icon className="w-12 h-12 mx-auto text-nagham-gold mb-4" />
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-nagham-gold">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Learning Resources",
                description: "Access tutorials, guides, and workshops to master AI music creation."
              },
              {
                icon: Heart,
                title: "Supportive Environment",
                description: "Join a welcoming community that celebrates creativity and innovation."
              },
              {
                icon: Briefcase,
                title: "Professional Tools",
                description: "Use cutting-edge AI technology to create professional-quality music."
              }
            ].map((offer, index) => (
              <div key={index} className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300">
                <offer.icon className="w-10 h-10 text-nagham-gold mb-4" />
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-gray-600">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <Card className="form-container max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center mb-6">Get Started Today</h2>
              <p className="text-center text-gray-600 mb-8">
                Ready to join the Nagham AI community? Reach out to us and start your journey in AI-powered music creation!
              </p>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <Input type="text" id="name" name="name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" id="email" name="email" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input type="text" id="subject" name="subject" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea id="message" name="message" rows={5} required />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-nagham-gold hover:from-amber-600 hover:to-amber-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}