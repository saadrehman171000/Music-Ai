export default function ArtistLogos() {
  const artists = ['STEVE AOKI', '3LAU', 'DISCO FRIES', 'STEVE AOKI', '3LAU']

  return (
    <div className="w-full bg-white py-8 overflow-hidden">
      <div className="flex justify-between items-center animate-scroll">
        {artists.map((artist, index) => (
          <span key={index} className="text-3xl font-bold text-gray-300 whitespace-nowrap mx-8">
            {artist}
          </span>
        ))}
      </div>
    </div>
  )
}

