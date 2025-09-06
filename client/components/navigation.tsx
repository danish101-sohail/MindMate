"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Globe } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState("English")

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी" },
    { code: "ta", name: "தமிழ்" },
    { code: "ml", name: "മലയാളം" },
    { code: "kn", name: "ಕನ್ನಡ" },
  ]

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language)
    setActiveDropdown(null)
  }

  return (
    <header className="bg-gray-900 text-white px-4 py-3 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-xl font-semibold">
            MindMate
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
            <Link href="/dashboard" className="text-sm hover:text-gray-300">
              Dashboard
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              className="flex items-center space-x-1 text-sm hover:text-gray-300"
              onClick={() => handleDropdownToggle("language")}
            >
              <Globe className="w-4 h-4" />
              <span>{selectedLanguage}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === "language" && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-white text-gray-900 rounded-md shadow-lg z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => handleLanguageChange(lang.name)}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
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
