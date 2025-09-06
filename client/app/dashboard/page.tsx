"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar, Clock, BarChart3, Heart } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const recentChats = [
    { id: 1, title: "Dealing with work stress", date: "2024-01-15", duration: "25 min" },
    { id: 2, title: "Relationship concerns", date: "2024-01-12", duration: "18 min" },
    { id: 3, title: "Anxiety management", date: "2024-01-10", duration: "32 min" },
  ]

  const moodData = [
    { date: "Mon", mood: 7 },
    { date: "Tue", mood: 6 },
    { date: "Wed", mood: 8 },
    { date: "Thu", mood: 5 },
    { date: "Fri", mood: 7 },
    { date: "Sat", mood: 9 },
    { date: "Sun", mood: 8 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Dashboard</h1>
          <p className="text-gray-600">Track your mental health journey and progress</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Sessions</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
              <MessageCircle className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Week</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Time</p>
                <p className="text-2xl font-bold text-gray-900">12.5h</p>
              </div>
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Mood</p>
                <p className="text-2xl font-bold text-gray-900">7.2</p>
              </div>
              <Heart className="w-8 h-8 text-red-600" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Chats */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Sessions</h2>
              <Link href="/chat">
                <Button className="bg-blue-600 hover:bg-blue-700">Start New Chat</Button>
              </Link>
            </div>

            <div className="space-y-4">
              {recentChats.map((chat) => (
                <div key={chat.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">{chat.title}</p>
                      <p className="text-sm text-gray-500">{chat.date}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{chat.duration}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mood Tracking */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Weekly Mood Tracker</h2>
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </div>

            <div className="space-y-4">
              {moodData.map((day) => (
                <div key={day.date} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600 w-12">{day.date}</span>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(day.mood / 10) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-8">{day.mood}/10</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Insights Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Progress Highlight</h3>
              <p className="text-sm text-blue-800">
                You've been consistently engaging in therapy sessions this week. Your mood scores show improvement over
                the past month.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-medium text-green-900 mb-2">Recommendation</h3>
              <p className="text-sm text-green-800">
                Consider exploring mindfulness techniques in your next session to help manage stress levels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
