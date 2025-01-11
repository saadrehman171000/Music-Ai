export default function Testimonials() {
  const testimonials = [
    {
      quote: "It Wouldn't Be Possible To Hire So Many Session Vocalists And Have This Same Experience. You Literally Cannot Afford To Hire A Million People And Have Them Do A Bunch Of Different Things This Quickly And Effectively.",
      background: "bg-gray-900"
    },
    {
      quote: "Fastest And Easiest Way To Demo With Any Voice",
      background: "bg-gradient-to-r from-amber-500 to-amber-700"
    },
    {
      quote: "AI Is So High Quality, That We Don't Need To Step Foot In A Recording Studio. You Can Capture Emotion With AI Vocals.",
      background: "bg-white"
    },
    {
      quote: "This Makes It Even Better With The Royalty Free Voices Bc I Now Instantly Have 20 Voices. Royalty Free Models Are Very Helpful When You Want To Layer Your Voices And Use Them As A Chorus.",
      background: "bg-white"
    }
  ]

  return (
    <section className="w-full py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <h2 className="text-4xl font-bold text-white">What Our Users Say</h2>
          <div className="flex gap-12">
            <div className="text-amber-500">
              <div className="text-3xl font-bold">600,000+</div>
              <div className="text-sm">Voices Trained</div>
            </div>
            <div className="text-amber-500">
              <div className="text-3xl font-bold">500,000+</div>
              <div className="text-sm">Hours Of Audio Processed</div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${testimonial.background} ${
                testimonial.background === 'bg-white' ? 'text-black' : 'text-white'
              } p-6 rounded-2xl hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1`}
            >
              <p className="text-lg font-medium leading-relaxed">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

