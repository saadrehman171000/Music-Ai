export default function Stats() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            We've published over <span className="text-amber-600">650</span> episodes, amounting to nearly <span className="text-amber-600">16,000</span> minutes of powerful AI audio music and songs.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {['STEVE AOKI', '3LAU', 'DISCO FRIES', 'STEVE AOKI', '3LAU'].map((artist, index) => (
            <div key={index} className="text-2xl font-bold text-gray-400">
              {artist}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

