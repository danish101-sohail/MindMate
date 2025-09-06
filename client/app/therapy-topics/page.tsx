import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"

export default function TherapyTopics() {
  const topics = [
    "Depression",
    "Anxiety",
    "Trauma",
    "Relationship",
    "Stress",
    "Self Esteem",
    "Grief & Loss",
    "Substance Abuse",
    "Eating Disorders",
    "Anger",
    "Life Transitions",
    "Bipolar",
    "OCD",
    "Sleep",
    "Parenting",
    "Body Image",
    "Procrastination",
    "Personality",
    "Childhood",
    "Codependency",
    "Sexual Health",
    "Chronic Pain",
    "Attachment",
    "Existential",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Therapy Topics</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto text-balance">
            Therapy encompasses a large range of topics and addresses different aspects of mental health and personal
            growth. From anxiety and depression to relationship issues and life transitions, counseling to therapy
            provides understanding and healing approaches for the complexities of being human. Explore the right path
            for your healing journey.
          </p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topics.map((topic) => (
              <div
                key={topic}
                className="bg-white text-gray-900 p-6 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h3 className="font-semibold text-sm">{topic}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet MindMate Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Popular Choice</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet MindMate, Your AI Therapist</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Our cutting-edge AI therapist can help analyze and understand your concerns and provide evidence-based
            therapeutic approaches tailored to your specific needs. Available 24/7, always at your fingertips.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">100% Free • AI Therapist</Button>

          {/* AI Therapist Interface Preview */}
          <div className="mt-12 relative">
            <div className="flex justify-center space-x-8 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-500"></div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-red-500"></div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500"></div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500"></div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 max-w-md mx-auto">
              <div className="bg-blue-600 text-white p-3 rounded-lg mb-3">
                <p className="text-sm">How are you feeling today?</p>
              </div>
              <div className="bg-gray-700 text-white p-3 rounded-lg">
                <p className="text-sm">I've been feeling anxious about work lately...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">MindMate</h3>
              <p className="text-gray-600 text-sm">
                Experience round-the-clock support and guidance with a 24/7 AI Therapist, always on your fingertips to
                help you navigate life's challenges.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Crisis Helplines</li>
                <li>More Resources</li>
                <li>Mental Health Articles</li>
                <li>Types of Therapy</li>
                <li>Therapy Topics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Therapy Topics</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Blog</li>
                <li>Our Story</li>
                <li>Media Kit</li>
                <li>Investors</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Healthcare Partners</li>
                <li>Affiliate Program</li>
                <li>Careers</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
