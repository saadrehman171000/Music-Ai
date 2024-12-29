"use client"
import { Mic2, FileAudio, MessageSquare, Wand2, SplitSquareVertical, Sliders, Library, DollarSign, Terminal, Waves, Mic, Users2 } from 'lucide-react'
import { motion } from "framer-motion"

const services = [
  {
    icon: <Mic2 className="h-8 w-8 text-white" />,
    title: "AI Singing Generators",
    description: "Select from a library of 75+ royalty-free artists."
  },
  {
      icon: <FileAudio className="h-8 w-8 text-white" />,
      title: "AI Voice Cloning",
      description: "Create digital clones of any voices"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      title: "Text-to-speech",
      description: "Generate realistic audio from text with any voice."
    },
    {
      icon: <Wand2 className="h-8 w-8 text-white" />,
      title: "Prompt to Speech",
      description: "Combine two Prompt to create your own AI Speech"
    },
    {
      icon: <SplitSquareVertical className="h-8 w-8 text-white" />,
      title: "Stem Splitter",
      description: "Isolate vocals, drums, bass, and instruments"
    },
    {
      icon: <Sliders className="h-8 w-8 text-white" />,
      title: "AI Mastering",
      description: "Master your music, stems, or samples."
    },
    {
      icon: <Library className="h-8 w-8 text-white" />,
      title: "AI Instrument Library",
      description: "Sketch ideas with studio-quality session instruments"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      title: "Nagham AI Earn",
      description: "Create a voice model and start earning passive income."
    },
    {
      icon: <Terminal className="h-8 w-8 text-white" />,
      title: "API",
      description: "Build on top of Nagham AI audio models"
    },
    {
      icon: <Waves className="h-8 w-8 text-white" />,
      title: "Harmonies",
      description: "Transform your audio into vocal harmonies."
    },
    {
      icon: <Mic className="h-8 w-8 text-white" />,
      title: "Vocal Remover",
      description: "Isolate vocals, de-echo, de-reverb, and more."
    },
    {
      icon: <Users2 className="h-8 w-8 text-white" />,
      title: "Voice Designer",
      description: "Select traits to design a unique voice."
    }
  ]

export default function Services() {
  return (
    <section className="w-full py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center mb-24"
        >
          <span className="text-[#B8860B] text-xl font-semibold tracking-wider uppercase">Services</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Spend Less Time In The Studio<br />And More Time Creating
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="bg-[#B8860B] rounded-2xl w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#B8860B] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

