"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Globe } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <header className="bg-gray-900 text-white px-4 py-3 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-xl font-semibold">
            Abby
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-sm hover:text-gray-300"
                onClick={() => handleDropdownToggle("therapy")}
              >
                <span>Types of Therapy</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "therapy" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg z-50">
                  <Link href="/types-of-therapy" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    All Types of Therapy
                  </Link>
                  <Link href="/types-of-therapy#cbt" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Cognitive Behavioral Therapy
                  </Link>
                  <Link href="/types-of-therapy#dbt" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Dialectical Behavior Therapy
                  </Link>
                  <Link href="/types-of-therapy#humanistic" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Humanistic Therapy
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-sm hover:text-gray-300"
                onClick={() => handleDropdownToggle("topics")}
              >
                <span>Therapy Topics</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "topics" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg z-50">
                  <Link href="/therapy-topics" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    All Topics
                  </Link>
                  <Link href="/therapy-topics#depression" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Depression
                  </Link>
                  <Link href="/therapy-topics#anxiety" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Anxiety
                  </Link>
                  <Link href="/therapy-topics#relationships" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Relationships
                  </Link>
                </div>
              )}
            </div>
            <button className="flex items-center space-x-1 text-sm hover:text-gray-300">
              <span>Common Struggles</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="text-sm hover:text-gray-300">Enterprise</button>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 text-sm hover:text-gray-300">
            <Globe className="w-4 h-4" />
            <span>English</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <Link href="/login" className="text-sm hover:text-gray-300">
            Login
          </Link>
          <Link href="/register">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
