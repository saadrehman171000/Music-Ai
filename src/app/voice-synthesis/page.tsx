"use client"

import { useState } from 'react'
import { Mic, Wand2, Play, Download, Info, Upload, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Select from 'react-select'

export default function VoiceSynthesisPage() {
  const voiceOptions = [
    { value: 'male1', label: 'Male Voice 1' },
    { value: 'male2', label: 'Male Voice 2' },
    { value: 'female1', label: 'Female Voice 1' },
    { value: 'female2', label: 'Female Voice 2' },
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
            <Mic className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Voice Synthesis</h1>
            <p className="text-gray-600">Clone and generate voices with AI</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-8">
            {/* Voice Settings */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Voice Settings</h2>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-gray-700">Select Voice</label>
                  <Select
                    options={voiceOptions}
                    styles={customStyles}
                    placeholder="Choose a voice"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-700">Text to Speak</label>
                  <textarea 
                    className="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Enter the text you want to convert to speech..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1 bg-amber-500 hover:bg-amber-600">
                    <Wand2 className="h-4 w-4 mr-2" /> Generate Voice
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Upload className="h-4 w-4 mr-2" /> Upload Sample
                  </Button>
                </div>
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
                        <Mic className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Generated Voice {item}</h3>
                        <p className="text-sm text-gray-600">Female Voice 1 • 30 seconds</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Minutes Info */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Available Minutes</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Remaining</span>
                <span className="font-medium">45/60 minutes</span>
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
                  Keep text natural and conversational
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-500" />
                  Generation takes about 10-15 seconds
                </li>
                <li className="flex items-center gap-2">
                  <Upload className="h-4 w-4 text-amber-500" />
                  Upload samples for voice cloning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 