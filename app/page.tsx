import { Button } from "@/components/ui/button"
import { ChevronDown, Globe, Check } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-semibold">Abby</h1>
            <nav className="hidden md:flex items-center space-x-6">
              <button className="flex items-center space-x-1 text-sm hover:text-gray-300">
                <span>Types of Therapy</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center space-x-1 text-sm hover:text-gray-300">
                <span>Myths</span>
                <ChevronDown className="w-4 h-4" />
              </button>
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
            <button className="text-sm hover:text-gray-300">Login</button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/blurred-background-image-of-person-using-phone-for.jpg')`,
            filter: "blur(2px)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white max-w-2xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            AI Therapy
            <br />
            In Your Pocket
          </h1>
          <p className="text-lg md:text-xl mb-8 text-balance opacity-90">
            Experience round-the-clock support and guidance with a 24/7 AI Therapist, always on your fingertips to help
            you navigate life's challenges.
          </p>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg mb-8">
            Start Chatting Now
          </Button>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>Free Internet Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured On Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-8 text-sm">Featured On:</p>
          <div className="flex flex-wrap items-center justify-center space-x-8 space-y-4 opacity-60">
            <img src="/nbc-news-logo.jpg" alt="NBC News" className="h-8" />
            <img src="/usa-today-logo.png" alt="USA Today" className="h-8" />
            <img src="/cbs-news-logo.png" alt="CBS News" className="h-8" />
            <img src="/fox-news-logo.png" alt="Fox News" className="h-8" />
          </div>
        </div>
      </section>

      {/* Secondary Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            A Judgement Free
            <br />
            Place to Discuss
            <br />
            Everyday Problems.
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-balance">
            Whether it's stress at work, relationship struggles, or just needing someone to listen, our AI Therapist is
            here to help. You can share as freely and honestly as you need to, without fear of judgment. We're here to
            listen, understand, and guide you through whatever you're facing, offering guidance and support when you
            need it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm mb-8">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Get Unbiased Advice</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Fully Anonymous</span>
            </div>
          </div>

          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg">Talk Now</Button>
        </div>
      </section>
    </div>
  )
}
