import { Cpu, MessageSquare, Waves, Cloud } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

export default function Technology() {
  const technologies = [
    {
      icon: <Cpu className="h-8 w-8 text-[#B8860B]" />,
      title: "Advanced AI and deep learning models for music generation",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-[#B8860B]" />,
      title: "Natural Language Processing (NLP) for lyric generation",
    },
    {
      icon: <Waves className="h-8 w-8 text-[#B8860B]" />,
      title: "Advanced audio processing techniques (DSP) for high-quality sound",
    },
    {
      icon: <Cloud className="h-8 w-8 text-[#B8860B]" />,
      title: "Cloud computing using AWS and Alibaba Cloud",
    }
  ]

  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-[#B8860B] text-xl font-semibold">Our Technology</span>
          <h2 className="text-4xl font-bold mt-2">Our Cutting-Edge Technology</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 flex items-center gap-6 group hover:bg-[#B8860B]/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-[#B8860B]/10 rounded-2xl p-4 group-hover:bg-[#B8860B]/20 transition-colors">
                {tech.icon}
              </div>
              <div className="flex-1">
                <p className="font-semibold group-hover:text-[#B8860B] transition-colors">{tech.title}</p>
              </div>
              <ArrowRight className="h-6 w-6 text-[#B8860B] opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

