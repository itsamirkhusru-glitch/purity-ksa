import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'PMC - Purity for Maintenance & Cleaning | Facility Management Jeddah KSA' },
      { name: 'description', content: 'PMC is a leading facility management, manpower supply, and cleaning company in Saudi Arabia. Professional services for offices, hotels, schools, warehouses, and commercial buildings in Jeddah and KSA.' },
    ],
  }),
  component: HomePage,
})

const services = [
  { icon: '👥', title: 'Manpower Supply', desc: 'Skilled and semi-skilled workforce for all your operational needs across KSA.' },
  { icon: '🧹', title: 'Cleaning Services', desc: 'Professional cleaning solutions for commercial, industrial, and residential properties.' },
  { icon: '🔧', title: 'Building Maintenance', desc: 'Comprehensive maintenance programs to keep your facilities in prime condition.' },
  { icon: '🏢', title: 'Facility Management', desc: 'End-to-end facility management ensuring smooth operations 24/7.' },
  { icon: '🪟', title: 'Glass & Facade Cleaning', desc: 'Specialized high-rise and facade cleaning using modern equipment and techniques.' },
  { icon: '🐛', title: 'Pest Control', desc: 'Safe and effective pest management services for all types of premises.' },
  { icon: '✨', title: 'Deep Cleaning', desc: 'Thorough deep cleaning services to restore hygiene to the highest standards.' },
  { icon: '❄️', title: 'AC Maintenance', desc: 'Air conditioning maintenance, repair, and installation for all systems.' },
  { icon: '⚡', title: 'MEP Services', desc: 'Mechanical, electrical, and plumbing services by certified engineers.' },
]

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '200+', label: 'Professional Staff' },
  { value: '50+', label: 'Corporate Clients' },
]

const whyUs = [
  { icon: '🏅', title: 'Licensed & Certified', desc: 'Fully licensed company operating under Saudi regulations with certified professional staff.' },
  { icon: '⏱️', title: '24/7 Availability', desc: 'Round-the-clock support for emergency maintenance and cleaning requirements.' },
  { icon: '💼', title: 'Experienced Team', desc: 'Highly trained professionals with deep expertise in facility management and cleaning.' },
  { icon: '💰', title: 'Competitive Pricing', desc: 'Transparent, competitive pricing with customized packages to suit your budget.' },
  { icon: '🌿', title: 'Eco-Friendly Products', desc: 'We use approved, environmentally safe cleaning materials and modern equipment.' },
  { icon: '📋', title: 'Quality Assurance', desc: 'Strict quality control processes ensure consistent, high-standard service delivery.' },
]

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient section-pattern text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-pmc-green rounded-full animate-pulse"></span>
                Trusted Facility Management in Saudi Arabia
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Professional Cleaning &{' '}
                <span className="text-pmc-green-light">Facility Management</span>{' '}
                Services in KSA
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
                Purity for Maintenance and Cleaning (PMC) delivers comprehensive facility management, manpower supply, cleaning, and maintenance services across Jeddah and the Kingdom of Saudi Arabia.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/quote"
                  className="bg-pmc-green hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-colors text-lg"
                >
                  Request a Quotation
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-colors text-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/pmc-service.png"
                alt="PMC professional cleaning and facility management team at work in a modern commercial building"
                className="rounded-3xl shadow-2xl ring-1 ring-white/20 w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-extrabold text-pmc-blue">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-pmc-green font-semibold text-sm uppercase tracking-widest mb-3">About PMC</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Partner for Facility Excellence in Saudi Arabia
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Purity for Maintenance and Cleaning Co. (PMC) is a fully licensed Saudi facility management company headquartered in Jeddah. With over a decade of experience, we serve a wide range of industries including commercial, hospitality, education, healthcare, and retail.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our team of skilled professionals delivers reliable, high-quality services tailored to the unique demands of the Saudi market. We are committed to delivering cleanliness, safety, and operational excellence for every client we serve.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 bg-pmc-blue text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-800 transition-colors">
                Learn More About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Vision', text: 'To be the leading integrated facility management company in Saudi Arabia, recognized for quality, reliability, and innovation.' },
                { label: 'Mission', text: 'Delivering exceptional cleaning and maintenance services that enhance living and working environments across KSA.' },
                { label: 'Values', text: 'Integrity, professionalism, customer satisfaction, and environmental responsibility guide everything we do.' },
                { label: 'Experience', text: 'Over 10 years operating in the Saudi market with deep knowledge of local regulations and client expectations.' },
              ].map(item => (
                <div key={item.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="text-pmc-blue font-bold text-sm uppercase tracking-wide mb-2">{item.label}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-pmc-green font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Professional Services</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Comprehensive facility management and cleaning solutions designed for businesses of all sizes across Saudi Arabia.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <div key={service.title} className="card-hover bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 bg-pmc-blue text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-800 transition-colors">
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-pmc-green font-semibold text-sm uppercase tracking-widest mb-3">Why PMC</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              We combine local expertise with international standards to deliver superior results every time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="py-20 bg-pmc-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-pmc-green-light font-semibold text-sm uppercase tracking-widest mb-3">Sectors We Serve</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-blue-200 max-w-2xl mx-auto mb-12">
            From corporate offices to industrial warehouses, PMC serves a diverse range of sectors across Saudi Arabia.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Schools & Education', 'Corporate Offices', 'Hotels & Hospitality', 'Showrooms', 'Warehouses', 'Restaurants', 'Residential Buildings', 'Commercial Complexes'].map(ind => (
              <span key={ind} className="bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-default">
                {ind}
              </span>
            ))}
          </div>
          <Link to="/industries" className="inline-flex items-center gap-2 bg-white text-pmc-blue font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
            Explore Industries
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Elevate Your Facility Standards?
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
            Contact PMC today for a free consultation and customized quotation. Our team is ready to support your business 24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="bg-pmc-green text-white font-semibold px-10 py-4 rounded-full hover:bg-green-700 transition-colors text-lg">
              Request Quotation
            </Link>
            <Link to="/contact" className="border-2 border-pmc-blue text-pmc-blue font-semibold px-10 py-4 rounded-full hover:bg-blue-50 transition-colors text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
