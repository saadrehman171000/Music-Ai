"use client"

import Link from 'next/link'
import { 
  Music2, Split, Mic, FileText, Settings2, Sparkles, ArrowRight,
  Plus, Clock, Book, Play, Download, Trophy, Bookmark,
  Scissors,
  Music
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DashboardPage() {
  const tools = [
    {
      icon: Music2,
      title: "Music Generation",
      description: "Create original tracks with AI",
      usage: { used: 15, total: 100, unit: "credits" },
      color: "bg-purple-500"
    },
    {
      icon: Split,
      title: "Stem Splitter",
      description: "Separate vocals and instruments",
      usage: { used: 8, total: 20, unit: "splits" },
      color: "bg-blue-500"
    },
    {
      icon: Mic,
      title: "Voice Synthesis",
      description: "Clone and generate voices",
      usage: { used: 30, total: 60, unit: "minutes" },
      color: "bg-amber-500"
    },
    {
      icon: FileText,
      title: "Lyric Generation",
      description: "AI-powered lyrics creation",
      usage: { used: 45, total: 100, unit: "generations" },
      color: "bg-green-500"
    },
    {
      icon: Settings2,
      title: "Audio Mastering",
      description: "Professional sound enhancement",
      usage: { used: 5, total: 10, unit: "tracks" },
      color: "bg-rose-500"
    },
    {
      icon: Sparkles,
      title: "Coming Soon",
      description: "New features in development",
      isBeta: true,
      color: "bg-gray-500"
    }
  ]

  const recentActivity = [
    {
      title: "Music Generation",
      description: "Created new track 'Summer Vibes'",
      time: "2 hours ago",
      icon: Music2,
    },
    {
      title: "Voice Synthesis",
      description: "Generated 5 minutes of voice content",
      time: "5 hours ago",
      icon: Mic,
    },
    {
      title: "Stem Splitting",
      description: "Split 'Acoustic Session.mp3'",
      time: "1 day ago",
      icon: Split,
    }
  ]

  const resources = [
    {
      title: "Getting Started Guide",
      description: "Learn the basics of AI music creation",
      icon: Book,
      color: "bg-blue-500"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step guides for each tool",
      icon: Play,
      color: "bg-red-500"
    },
    {
      title: "Sample Library",
      description: "Download free AI-generated samples",
      icon: Download,
      color: "bg-green-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 to-white">
      <main className="pt-24 container mx-auto px-4 max-w-[90%]">
        {/* Welcome & Stats Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Welcome back, User!</h1>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Available Credits', value: '500', unit: 'credits' },
              { label: 'Active Projects', value: '3', unit: 'projects' },
              { label: 'Storage Used', value: '2.1', unit: 'GB' },
              { label: 'Generation Minutes', value: '60', unit: 'mins' }
            ].map((stat) => (
              <div key={stat.label} 
                   className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-gray-600 text-sm mb-2">{stat.label}</h3>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <span className="text-gray-500 text-sm">{stat.unit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Quick Actions</h2>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                    <Plus className="h-5 w-5 mr-2" /> Create New
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[280px] p-2">
                  <Link href="/generate-music">
                    <DropdownMenuItem className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-50 rounded-lg">
                      <div className="text-2xl">🎵</div>
                      <span className="text-lg">Generate Music</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/split-audio">
                    <DropdownMenuItem className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-50 rounded-lg">
                      <div className="text-2xl">↗️</div>
                      <span className="text-lg">Split Audio</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/voice-synthesis">
                    <DropdownMenuItem className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-50 rounded-lg">
                      <div className="text-2xl">🎤</div>
                      <span className="text-lg">Voice Synthesis</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/lyric-generation">
                    <DropdownMenuItem className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-50 rounded-lg">
                      <div className="text-2xl">📝</div>
                      <span className="text-lg">Lyric Generation</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/audio-mastering">
                    <DropdownMenuItem className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-50 rounded-lg">
                      <div className="text-2xl">🎧</div>
                      <span className="text-lg">Audio Mastering</span>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {['Recent Projects', 'Templates', 'Tutorials', 'Support'].map((item) => (
                <div key={item} 
                     className="p-4 rounded-lg border border-gray-100 hover:border-amber-200 cursor-pointer transition-colors">
                  <h3 className="font-medium text-gray-900">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Tools Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">AI Tools</h2>
          <div className="grid grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div 
                key={tool.title}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`${tool.color} p-3 rounded-lg text-white`}>
                    <tool.icon className="h-6 w-6" />
                  </div>
                  {tool.isBeta && (
                    <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded">
                      Beta
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {tool.description}
                </p>

                {tool.usage ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-amber-500 transition-all"
                          style={{ width: `${(tool.usage.used / tool.usage.total) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">
                        {tool.usage.used}/{tool.usage.total} {tool.usage.unit}
                      </span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-amber-500 transition-colors" />
                  </div>
                ) : (
                  <div className="flex justify-end">
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-amber-500 transition-colors" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity Section */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          {/* Activity Feed */}
          <div className="col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
              <Button variant="ghost" className="text-gray-500 hover:text-amber-500">
                View All
              </Button>
            </div>
            <div className="space-y-6">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <activity.icon className="h-5 w-5 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{activity.title}</h3>
                    <p className="text-gray-600 text-sm">{activity.description}</p>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Resources & Achievements */}
          <div className="space-y-6">
            {/* Resources */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Resources</h2>
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-amber-50 transition-colors cursor-pointer"
                  >
                    <div className={`${resource.color} p-2 rounded-lg text-white`}>
                      <resource.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{resource.title}</h3>
                      <p className="text-sm text-gray-600">{resource.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Achievements</h2>
                <Trophy className="h-5 w-5 text-amber-500" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Tracks Created</span>
                  <span className="font-medium">12/50</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-full w-1/4 bg-amber-500 rounded-full" />
                </div>
              </div>
            </div>

            {/* Quick Bookmarks */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Quick Access</h2>
                <Bookmark className="h-5 w-5 text-amber-500" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                {['Recent', 'Favorites', 'Shared', 'Archived'].map((item) => (
                  <button 
                    key={item}
                    className="p-2 text-sm text-gray-600 bg-gray-50 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 