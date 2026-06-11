import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/industries')({
  head: () => ({
    meta: [
      { title: 'Industries We Serve - PMC | Facility Management Saudi Arabia' },
      { name: 'description', content: 'PMC serves schools, offices, hotels, showrooms, warehouses, restaurants, residential and commercial buildings with professional cleaning and facility management in Saudi Arabia.' },
    ],
  }),
  component: IndustriesPage,
})

const industries = [
  {
    icon: '🏫',
    title: 'Schools & Educational Institutions',
    description: 'Maintaining clean, safe, and hygienic learning environments for students and staff is our priority. PMC serves international schools, universities, training centers, and government educational facilities.',
    services: ['Daily Classroom Cleaning', 'Restroom Sanitation', 'Canteen & Kitchen Cleaning', 'Pest Control', 'Grounds Maintenance', 'Female Cleaning Staff for Girls\' Schools'],
    highlight: 'Trusted by international and private schools across Jeddah',
  },
  {
    icon: '🏢',
    title: 'Corporate Offices',
    description: 'A clean and well-maintained office environment boosts employee productivity and creates a professional impression for clients. We offer flexible daily, weekly, and contract-based office cleaning and maintenance.',
    services: ['Daily Office Cleaning', 'Pantry & Kitchen Services', 'Office Boy Supply', 'Deep Cleaning', 'AC Maintenance', 'Pest Control'],
    highlight: 'Serving corporate offices across Jeddah\'s business districts',
  },
  {
    icon: '🏨',
    title: 'Hotels & Hospitality',
    description: 'The hospitality sector demands the highest standards of cleanliness and presentation. PMC provides specialized housekeeping, public area cleaning, and facility maintenance services for hotels and resorts.',
    services: ['Housekeeping Staff Supply', 'Public Area Cleaning', 'Laundry Area Maintenance', 'Kitchen & Restaurant Cleaning', 'Facade Cleaning', 'Marble Polishing & Restoration'],
    highlight: 'Experienced in 3-star to 5-star hotel operations',
  },
  {
    icon: '🚗',
    title: 'Showrooms',
    description: 'Showrooms require immaculate presentation to impress customers. Whether automotive, furniture, or electronics, PMC delivers spotless cleaning and maintenance solutions that enhance your brand image.',
    services: ['Daily Showroom Cleaning', 'Floor Polishing', 'Glass & Window Cleaning', 'Restroom Maintenance', 'Pest Control', 'Deep Cleaning Programs'],
    highlight: 'Serving automotive, furniture, and lifestyle showrooms',
  },
  {
    icon: '🏭',
    title: 'Warehouses & Industrial Facilities',
    description: 'Industrial environments require specialized cleaning protocols and safety-conscious teams. PMC provides industrial cleaning, waste management, and maintenance services for warehouses and manufacturing plants.',
    services: ['Industrial Floor Cleaning', 'High-Pressure Washing', 'Waste Management Support', 'Safety Compliance Cleaning', 'Pest Control & Fumigation', 'Manpower Supply'],
    highlight: 'Compliant with KSA industrial safety regulations',
  },
  {
    icon: '🍽️',
    title: 'Restaurants & Food Outlets',
    description: 'Food safety and hygiene are paramount in the F&B sector. PMC provides comprehensive kitchen cleaning, pest control, and sanitation services that comply with SFDA and municipal regulations.',
    services: ['Kitchen Deep Cleaning', 'Exhaust Hood Cleaning', 'Pest Control', 'Dining Area Cleaning', 'Grease Trap Cleaning', 'SFDA-Compliant Sanitation'],
    highlight: 'SFDA-compliant cleaning protocols for all food facilities',
  },
  {
    icon: '🏘️',
    title: 'Residential Buildings & Compounds',
    description: 'From luxury compounds to residential towers, PMC provides professional cleaning and maintenance services for common areas, lobbies, pools, and building systems to ensure comfortable living environments.',
    services: ['Lobby & Common Area Cleaning', 'Pool Maintenance Support', 'Elevator Cleaning', 'Landscaping Support', 'Pest Control', 'Building Maintenance'],
    highlight: 'Serving residential compounds and high-rise towers',
  },
  {
    icon: '🏬',
    title: 'Commercial Buildings & Malls',
    description: 'Commercial complexes, shopping malls, and multi-tenant buildings require comprehensive, coordinated facility management. PMC provides integrated solutions for property managers and building owners.',
    services: ['Common Area Management', 'Restroom & Facility Cleaning', 'Facade & Exterior Cleaning', 'MEP Maintenance', 'Waste Management', 'Manpower Supply'],
    highlight: 'Managing complex multi-tenant commercial properties',
  },
]

function IndustriesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="hero-gradient text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-pmc-green-light font-semibold text-sm uppercase tracking-widest mb-3">Sectors We Serve</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Industries We Serve</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            PMC delivers specialized facility management and cleaning solutions across a wide range of industries in Saudi Arabia.
          </p>
          <nav className="flex items-center gap-2 text-sm text-blue-300 mt-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Industries</span>
          </nav>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map(industry => (
              <div key={industry.title} className="card-hover bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-5xl shrink-0">{industry.icon}</div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-1">{industry.title}</h2>
                      <span className="inline-block bg-blue-50 text-pmc-blue text-xs font-medium px-3 py-1 rounded-full">
                        {industry.highlight}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-5 text-sm">{industry.description}</p>
                  <div className="border-t border-gray-100 pt-5">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Services We Provide</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.services.map(s => (
                        <div key={s} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-pmc-green shrink-0"></div>
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
                  <Link
                    to="/quote"
                    className="text-pmc-blue font-semibold text-sm hover:underline flex items-center gap-1"
                  >
                    Request a quote for {industry.title.split(' ')[0]} sector
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-pmc-green text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Industry?</h2>
          <p className="text-green-100 mb-8">PMC works with businesses across all sectors. Contact us to discuss your specific needs and we'll create a tailored solution for you.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="bg-white text-pmc-green font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Request a Quote
            </Link>
            <Link to="/contact" className="bg-pmc-blue text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-800 transition-colors">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
