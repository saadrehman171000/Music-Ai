"use client"

import { useState } from 'react'
import { Settings2, Upload, Download, Info, Music2, Clock, Wand2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Select from 'react-select'
import { useDropzone } from 'react-dropzone'

export default function AudioMasteringPage() {
  const [files, setFiles] = useState<File[]>([])

  const presetOptions = [
    { value: 'balanced', label: 'Balanced Mix' },
    { value: 'loud', label: 'Loud and Punchy' },
    { value: 'warm', label: 'Warm and Smooth' },
    { value: 'bright', label: 'Bright and Clear' },
    { value: 'custom', label: 'Custom Settings' },
  ]

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      padding: '0.5rem',
      borderRadius: '0.5rem',
      border: '1px solid #e5e7eb',
      fontSize: '1.125rem',
    }),
    option: (provided: any, state: any ) => ({
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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: acceptedFiles => setFiles(acceptedFiles),
    accept: {
      'audio/mpeg': ['.mp3'],
      'audio/wav': ['.wav']
    },
    maxSize: 20971520, // 20MB
    multiple: false
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 to-white">
      <main className="pt-24 container mx-auto px-4 max-w-[90%]">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-amber-500 p-3 rounded-xl">
            <Settings2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Audio Mastering</h1>
            <p className="text-gray-600">Professional sound enhancement</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-8">
            {/* Upload and Settings */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div 
                {...getRootProps()} 
                className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors
                  ${isDragActive ? 'border-amber-500 bg-amber-50' : 'border-gray-200'}
                  ${files.length > 0 ? 'border-green-500 bg-green-50' : ''}
                `}
              >
                <input {...getInputProps()} />
                <div className="max-w-sm mx-auto space-y-6">
                  <div className="bg-amber-50 p-4 rounded-full w-fit mx-auto">
                    <Upload className="h-6 w-6 text-amber-500" />
                  </div>
                  {files.length > 0 ? (
                    <div>
                      <h3 className="text-lg font-semibold text-green-700">File Ready for Mastering</h3>
                      <p className="text-green-600 text-sm mt-2">
                        {files[0].name} ({(files[0].size / (1024 * 1024)).toFixed(2)} MB)
                      </p>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-lg font-semibold">
                        {isDragActive ? 'Drop your file here' : 'Drop your audio file here'}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2">
                        Support for MP3, WAV up to 20MB
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-gray-700">Mastering Preset</label>
                  <Select
                    options={presetOptions}
                    styles={customStyles}
                    placeholder="Select mastering preset"
                  />
                </div>

                <Button 
                  className={`w-full ${files.length > 0 ? 'bg-green-500 hover:bg-green-600' : 'bg-amber-500 hover:bg-amber-600'}`}
                >
                  <Wand2 className="h-4 w-4 mr-2" /> 
                  {files.length > 0 ? 'Start Mastering' : 'Choose File'}
                </Button>
              </div>
            </div>

            {/* Recent Masters */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Recent Masters</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="bg-amber-100 p-2 rounded-lg">
                        <Music2 className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Track_{item}_mastered.wav</h3>
                        <p className="text-sm text-gray-600">Balanced Mix • 5:30 mins</p>
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
              <h3 className="font-semibold mb-4">Available Credits</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Remaining</span>
                <span className="font-medium">8/10 tracks</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-full w-4/5 bg-amber-500 rounded-full" />
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Quick Tips</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-amber-500" />
                  Use high-quality source files
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-500" />
                  Processing takes 3-5 minutes
                </li>
                <li className="flex items-center gap-2">
                  <Settings2 className="h-4 w-4 text-amber-500" />
                  Try different presets for best results
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 