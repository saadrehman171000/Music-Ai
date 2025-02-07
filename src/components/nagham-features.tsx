import { FileText, RefreshCw, Users } from 'lucide-react'

export default function NaghamFeatures() {
  const features = [
    {
      icon: <FileText className="h-8 w-8 text-amber-700" />,
      title: "Responsible Dataset Sourcing",
      description: "Use our library of high-quality, royalty-free AI voices with the knowledge that each use contributes to artist compensation."
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-amber-700" />,
      title: "Fair Artist Compensation",
      description: "Use our library of high-quality, royalty-free AI voices with the knowledge that each use contributes to artist compensation."
    },
    {
      icon: <Users className="h-8 w-8 text-amber-700" />,
      title: "Empowering Creators",
      description: "Use our library of high-quality, royalty-free AI voices with the knowledge that each use contributes to artist compensation."
    }
  ]

  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Nagham Features <span className="text-amber-700">↗</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-amber-50 rounded-2xl p-6 inline-block mb-6 group-hover:bg-amber-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-amber-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

