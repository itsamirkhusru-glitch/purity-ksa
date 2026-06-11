import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/quote')({
  head: () => ({
    meta: [
      { title: 'Request a Quote - PMC | Cleaning & Facility Management Saudi Arabia' },
      { name: 'description', content: 'Request a free quotation from PMC for cleaning, facility management, manpower supply, maintenance, and other services in Saudi Arabia. Fast response guaranteed.' },
    ],
  }),
  component: QuotePage,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

const services = [
  'Manpower Supply',
  'Cleaning Services',
  'Building Maintenance',
  'Facility Management',
  'Office Boy / Tea Boy Services',
  'Female Cleaning Staff',
  'Glass & Facade Cleaning',
  'Pest Control',
  'Deep Cleaning',
  'Marble Polishing',
  'AC Maintenance',
  'MEP Services',
  'HR & Recruitment Support',
  'Multiple Services (Bundle)',
  'Other',
]

function QuotePage() {
  const [fields, setFields] = useState({
    name: '',
    company: '',
    email: '',
    mobile: '',
    service: '',
    location: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await fetch('/quote-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'quote', ...fields }),
      })
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Page Header */}
      <section className="hero-gradient text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-pmc-green-light font-semibold text-sm uppercase tracking-widest mb-3">Free Consultation</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Request a Quote</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Fill in the form below and our team will get back to you within 24 hours with a tailored quotation.
          </p>
          <nav className="flex items-center gap-2 text-sm text-blue-300 mt-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Request a Quote</span>
          </nav>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-pmc-blue text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-3">Why Choose PMC?</h3>
                <ul className="space-y-2 text-sm text-blue-100">
                  {[
                    'Free consultation & quotation',
                    'Response within 24 hours',
                    'Flexible contract options',
                    'Competitive transparent pricing',
                    '24/7 customer support',
                    'Licensed & certified company',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-pmc-green-light shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Prefer to Call?</h3>
                <p className="text-gray-500 text-sm mb-4">Our team is available 7 days a week.</p>
                <a href="tel:+966575588881" className="flex items-center gap-2 text-pmc-blue font-semibold hover:underline">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                  +966 57 558 8881
                </a>
                <a href="https://wa.me/966575588881" className="flex items-center gap-2 text-pmc-green font-semibold hover:underline mt-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✅</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Quote Request Sent!</h2>
                    <p className="text-gray-500 mb-6">Thank you for contacting PMC. Our team will review your request and get back to you within 24 hours.</p>
                    <Link to="/" className="inline-flex items-center gap-2 bg-pmc-blue text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-800 transition-colors">
                      Back to Home
                    </Link>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Fill in Your Details</h2>
                    <form onSubmit={handleSubmit}>
                      <input type="hidden" name="form-name" value="quote" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                          <input
                            type="text" name="name" required value={fields.name} onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pmc-blue focus:border-transparent transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name *</label>
                          <input
                            type="text" name="company" required value={fields.company} onChange={handleChange}
                            placeholder="Your company name"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pmc-blue focus:border-transparent transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                          <input
                            type="email" name="email" required value={fields.email} onChange={handleChange}
                            placeholder="you@company.com"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pmc-blue focus:border-transparent transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Mobile Number *</label>
                          <input
                            type="tel" name="mobile" required value={fields.mobile} onChange={handleChange}
                            placeholder="+966 5X XXX XXXX"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pmc-blue focus:border-transparent transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Required Service *</label>
                          <select
                            name="service" required value={fields.service} onChange={handleChange}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pmc-blue focus:border-transparent transition bg-white"
                          >
                            <option value="">Select a service</option>
                            {services.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Location / City *</label>
                          <input
                            type="text" name="location" required value={fields.location} onChange={handleChange}
                            placeholder="e.g. Jeddah, Riyadh, Makkah"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pmc-blue focus:border-transparent transition"
                          />
                        </div>
                      </div>
                      <div className="mt-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Details / Message</label>
                        <textarea
                          name="message" rows={5} value={fields.message} onChange={handleChange}
                          placeholder="Describe your requirements — property size, frequency, number of staff needed, etc."
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pmc-blue focus:border-transparent transition resize-none"
                        />
                      </div>
                      {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
                      <button
                        type="submit" disabled={loading}
                        className="mt-6 w-full bg-pmc-blue text-white font-semibold py-4 rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? 'Sending...' : 'Submit Quote Request'}
                      </button>
                      <p className="text-gray-400 text-xs mt-3 text-center">We respond within 24 hours. No spam, guaranteed.</p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
