import Image from "next/image"

export default function About() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-amber-700 text-xl font-semibold">Welcome</span>
          <h2 className="text-4xl font-bold mt-2">Know About Us</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl p-8 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">Ethical and Artist-forward</h3>
            <p className="text-gray-600 mb-6">
              We are committed to ethical practices in AI, ensuring artist consent and fair use.
            </p>
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Team"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="space-y-8">
            <div className="hover:translate-x-2 transition-transform">
              <p className="text-gray-600 mb-8">
                Nagham AI is an innovative platform for AI-powered music production, targeting
                global markets with a special focus on the Chinese market, and considering the
                Arab market as an opportunity for future expansion. The platform combines
                advanced AI technologies with a deep understanding of global musical diversity.
              </p>
            </div>
            <div className="hover:translate-x-2 transition-transform">
              <h3 className="text-2xl font-bold mb-4 text-amber-700">Vision</h3>
              <p className="text-gray-600">
                To become the world's leading company in AI-powered music production, providing
                innovative solutions that meet the needs of diverse markets.
              </p>
            </div>
            <div className="hover:translate-x-2 transition-transform">
              <h3 className="text-2xl font-bold mb-4 text-amber-700">Mission</h3>
              <p className="text-gray-600">
                Empowering global musical creativity by providing advanced, user-friendly AI
                technologies that combine cultural authenticity with technological innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

