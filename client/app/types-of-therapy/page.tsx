import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"

export default function TypesOfTherapy() {
  const therapyTypes = [
    { name: "Cognitive Behavioral Therapy (CBT)", id: "cbt" },
    { name: "Dialectical Behavior Therapy (DBT)", id: "dbt" },
    { name: "Interpersonal Therapy (IPT)", id: "ipt" },
    { name: "Acceptance and Commitment Therapy (ACT)", id: "act" },
    { name: "Psychodynamic Therapy", id: "psychodynamic" },
    { name: "Humanistic Therapy", id: "humanistic" },
    { name: "Exposure Therapy", id: "exposure" },
    { name: "Gestalt Therapy", id: "gestalt" },
    { name: "Adlerian Therapy", id: "adlerian" },
    { name: "Jungian Therapy", id: "jungian" },
    { name: "Somatic Therapy", id: "somatic" },
    { name: "Relational Therapy", id: "relational" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Types of Therapy</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto text-balance">
            Therapy is a valuable tool for addressing a wide range of mental health issues, personal challenges, and
            life transitions. With numerous therapeutic approaches available, from cognitive to alternative routes,
            understanding the nuances can empower you to find the right fit for your unique situation.
          </p>
        </div>
      </section>

      {/* Therapy Types Grid */}
      <section className="py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {therapyTypes.map((therapy) => (
              <div
                key={therapy.id}
                className="bg-white text-gray-900 p-6 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h3 className="font-semibold text-sm">{therapy.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Abby Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Popular Choice</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Abby, Your AI Therapist</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Our cutting-edge AI therapist can help analyze and understand your concerns and provide evidence-based
            therapeutic approaches tailored to your specific needs. Available 24/7, always at your fingertips.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">100% Free • AI Therapist</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Abby</h3>
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
