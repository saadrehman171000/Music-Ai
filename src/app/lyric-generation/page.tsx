"use client"

import { FileText, Wand2, Copy, Download, Info, Music2, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Select from 'react-select'

export default function LyricGenerationPage() {
  const genreOptions = [
    { value: 'pop', label: 'Pop' },
    { value: 'rock', label: 'Rock' },
    { value: 'hiphop', label: 'Hip Hop' },
    { value: 'rnb', label: 'R&B' },
    { value: 'country', label: 'Country' },
  ]

  const moodOptions = [
    { value: 'happy', label: 'Happy' },
    { value: 'sad', label: 'Sad' },
    { value: 'energetic', label: 'Energetic' },
    { value: 'romantic', label: 'Romantic' },
    { value: 'angry', label: 'Angry' },
  ]

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      padding: '0.5rem',
      borderRadius: '0.5rem',
      border: '1px solid #e5e7eb',
      fontSize: '1.125rem',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      padding: '0.75rem 1rem',
      backgroundColor: state.isFocused ? '#f9fafb' : 'white',
      fontSize: '1.125rem',
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 to-white">
      <main className="pt-24 container mx-auto px-4 max-w-[90%]">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-amber-500 p-3 rounded-xl">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Lyric Generation</h1>
            <p className="text-gray-600">Create AI-powered song lyrics</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-8">
            {/* Generation Settings */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Lyric Settings</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-gray-700">Genre</label>
                    <Select
                      options={genreOptions}
                      styles={customStyles}
                      placeholder="Select genre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-700">Mood</label>
                    <Select
                      options={moodOptions}
                      styles={customStyles}
                      placeholder="Select mood"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-gray-700">Topic/Theme</label>
                  <textarea 
                    className="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Describe the theme or topic of your lyrics..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-amber-500 hover:bg-amber-600">
                  <Wand2 className="h-4 w-4 mr-2" /> Generate Lyrics
                </Button>
              </div>
            </div>

            {/* Recent Generations */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Recent Generations</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Music2 className="h-5 w-5 text-amber-500" />
                        <div>
                          <h3 className="font-medium">Summer Love Song</h3>
                          <p className="text-sm text-gray-600">Pop • Romantic</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      Under the summer sky, hearts beating in time...
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Credits Info */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Available Credits</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Remaining</span>
                <span className="font-medium">75/100 generations</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-full w-3/4 bg-amber-500 rounded-full" />
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Quick Tips</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-amber-500" />
                  Be specific about themes and emotions
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-500" />
                  Generation takes about 30 seconds
                </li>
                <li className="flex items-center gap-2">
                  <Music2 className="h-4 w-4 text-amber-500" />
                  Mix genres for unique results
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 