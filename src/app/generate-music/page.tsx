"use client"

import { Music2, Wand2, Upload, Clock, Settings, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Select from 'react-select'

export default function GenerateMusicPage() {
  const styleOptions = [
    { value: 'pop', label: 'Pop' },
    { value: 'rock', label: 'Rock' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'classical', label: 'Classical' },
    { value: 'electronic', label: 'Electronic' },
  ]

  const durationOptions = [
    { value: '30', label: '30 seconds' },
    { value: '60', label: '1 minute' },
    { value: '120', label: '2 minutes' },
    { value: '180', label: '3 minutes' },
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
            <Music2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Generate Music</h1>
            <p className="text-gray-600">Create original tracks with AI</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-8">
          {/* Generation Form */}
          <div className="col-span-2 space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Generation Settings</h2>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-gray-700">Style</label>
                  <Select
                    options={styleOptions}
                    styles={customStyles}
                    placeholder="Select style"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-700">Duration</label>
                  <Select
                    options={durationOptions}
                    styles={customStyles}
                    placeholder="Select duration"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-700">Description</label>
                  <textarea 
                    className="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Describe the music you want to generate..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-amber-500 hover:bg-amber-600">
                  <Wand2 className="h-4 w-4 mr-2" /> Generate Music
                </Button>
              </div>
            </div>

            {/* Recent Generations */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Recent Generations</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="bg-amber-100 p-2 rounded-lg">
                        <Music2 className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Generated Track {item}</h3>
                        <p className="text-sm text-gray-600">Pop • 2:30 mins</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Credits Info */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Credits</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Available</span>
                <span className="font-medium">45 credits</span>
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
                  <Wand2 className="h-4 w-4 text-amber-500" />
                  Be specific in your description
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-500" />
                  Longer tracks use more credits
                </li>
                <li className="flex items-center gap-2">
                  <Settings className="h-4 w-4 text-amber-500" />
                  Adjust settings for better results
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 