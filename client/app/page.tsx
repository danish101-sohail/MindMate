import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation />

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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">What People Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "MindMate has been incredibly helpful during my difficult times. Having someone to talk to 24/7 has made
                such a difference."
              </p>
              <p className="font-semibold text-gray-900">- Sarah M.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The anonymity and judgment-free environment made it easy for me to open up about my struggles."
              </p>
              <p className="font-semibold text-gray-900">- Michael R.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "MindMate provides practical advice and emotional support whenever I need it. It's like having a therapist
                in my pocket."
              </p>
              <p className="font-semibold text-gray-900">- Jessica L.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Is MindMate a replacement for professional therapy?
              </h3>
              <p className="text-gray-600">
                MindMate is designed to provide support and guidance, but it's not a replacement for professional mental
                health care. If you're experiencing severe mental health issues, we recommend consulting with a licensed
                therapist or counselor.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Is my conversation with MindMate private?</h3>
              <p className="text-gray-600">
                Yes, your conversations are completely private and anonymous. We don't store personal information or
                share your conversations with anyone.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How much does MindMate cost?</h3>
              <p className="text-gray-600">
                MindMate offers both free and premium plans. The free plan includes basic chat functionality, while premium
                plans offer additional features and unlimited conversations.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What types of issues can I discuss with MindMate?
              </h3>
              <p className="text-gray-600">
                You can discuss a wide range of everyday problems including stress, relationships, work issues, anxiety,
                and general life challenges. MindMate is here to listen and provide supportive guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">MindMate</h3>
              <p className="text-gray-400 mb-4">AI Therapy in your pocket. Available 24/7 for support and guidance.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/types-of-therapy" className="hover:text-white">
                    Types of Therapy
                  </a>
                </li>
                <li>
                  <a href="/therapy-topics" className="hover:text-white">
                    Therapy Topics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Common Struggles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Crisis Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MindMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
