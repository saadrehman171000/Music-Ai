"use client"

import { useState, useCallback } from 'react'
import { Upload, Split, Music2, Download, Info } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useDropzone } from 'react-dropzone'

export default function SplitAudioPage() {
  const [files, setFiles] = useState<File[]>([])

  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })))
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'audio/mpeg': ['.mp3'],
      'audio/wav': ['.wav']
    },
    maxSize: 10485760, // 10MB
    multiple: false
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 to-white">
      <main className="pt-24 container mx-auto px-4 max-w-[90%]">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-amber-500 p-3 rounded-xl">
            <Split className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Split Audio</h1>
            <p className="text-gray-600">Separate vocals and instruments</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="col-span-2 space-y-8">
            {/* Upload Area with react-dropzone */}
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
                      <h3 className="text-lg font-semibold text-green-700">File Ready for Upload</h3>
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
                        Support for MP3, WAV up to 10MB
                      </p>
                    </div>
                  )}
                  <Button 
                    className={`bg-amber-500 hover:bg-amber-600 ${files.length > 0 ? 'bg-green-500 hover:bg-green-600' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      if (files.length > 0) {
                        // Handle file processing here
                        console.log('Processing file:', files[0])
                      }
                    }}
                  >
                    {files.length > 0 ? 'Process Audio' : 'Choose File'}
                  </Button>
                </div>
              </div>
            </div>

            {/* Recent Splits */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Recent Splits</h2>
              <div className="space-y-4">
                {[1, 2].map((item) => (
                  <div key={item} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Music2 className="h-5 w-5 text-amber-500" />
                        <h3 className="font-medium">Track_{item}.mp3</h3>
                      </div>
                      <span className="text-sm text-gray-500">2 hours ago</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="w-full">
                        <Download className="h-4 w-4 mr-2" /> Download Vocals
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Download className="h-4 w-4 mr-2" /> Download Instruments
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Available Splits */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Available Splits</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Remaining</span>
                <span className="font-medium">8/20 splits</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-full w-2/5 bg-amber-500 rounded-full" />
              </div>
            </div>

            {/* Information */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Information</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex gap-2">
                  <Info className="h-4 w-4 text-amber-500 flex-shrink-0" />
                  <p>Our AI model separates vocals from instruments with high accuracy</p>
                </div>
                <div className="flex gap-2">
                  <Info className="h-4 w-4 text-amber-500 flex-shrink-0" />
                  <p>Processing usually takes 2-3 minutes per track</p>
                </div>
                <div className="flex gap-2">
                  <Info className="h-4 w-4 text-amber-500 flex-shrink-0" />
                  <p>Download both stems separately or together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 