import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Music2, Users2, Trophy, Target, Rocket, Heart, Award, Star, Globe } from 'lucide-react'
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-32">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Know About Us
            </h1>
          </div>
          
          {/* Main Content Section */}
          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-[#FFD580]">
                Revolutionizing Music with AI
              </h2>
              <p className="text-gray-600 text-lg">
                Empowering creators with cutting-edge AI technology. Our journey began with a simple mission: to make professional music production accessible to everyone.
              </p>
              <p className="text-gray-600 text-lg">
                At Nagham AI, we believe in pushing the boundaries of what's possible in music creation. Our state-of-the-art AI technology combines with traditional music principles to create something truly revolutionary.
              </p>
            </div>
            
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
                alt="About Nagham AI"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>

          {/* Vision & Mission Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-[#B8860B]">Our Vision</h3>
              <p className="text-gray-600">
                To revolutionize the music industry by making professional-quality music production accessible to everyone through cutting-edge AI technology.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-[#B8860B]">Our Mission</h3>
              <p className="text-gray-600">
                To empower creators with innovative AI tools that enhance their creative process while maintaining the highest standards of quality and ethical practices.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <h3 className="text-xl font-bold mb-4 text-[#B8860B]">Innovation</h3>
                <p className="text-gray-600">
                  Constantly pushing the boundaries of AI technology in music creation.
                </p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-bold mb-4 text-[#B8860B]">Accessibility</h3>
                <p className="text-gray-600">
                  Making professional music production tools available to everyone.
                </p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-bold mb-4 text-[#B8860B]">Quality</h3>
                <p className="text-gray-600">
                  Delivering exceptional results through advanced AI algorithms.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-12">Our Team</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((member) => (
                <div key={member} className="space-y-4">
                  <img
                    src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300`}
                    alt={`Team Member ${member}`}
                    className="rounded-full w-32 h-32 object-cover mx-auto"
                  />
                  <h3 className="font-semibold">Team Member {member}</h3>
                  <p className="text-gray-600">Position</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

