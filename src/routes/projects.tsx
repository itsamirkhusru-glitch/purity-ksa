import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  head: () => ({
    meta: [
      { title: 'Projects & Clients - PMC | Facility Management Saudi Arabia' },
      { name: 'description', content: 'Explore PMC\'s portfolio of completed projects and satisfied clients across Saudi Arabia. Trusted by leading companies for cleaning, maintenance, and facility management services.' },
    ],
  }),
  component: ProjectsPage,
})

const projects = [
  {
    category: 'Facility Management',
    title: 'Integrated FM Contract — Corporate Office Tower',
    location: 'Jeddah, KSA',
    description: 'Full integrated facility management services for a 15-floor corporate office tower, covering daily cleaning, MEP maintenance, pest control, and manpower supply for over 2 years.',
    scope: ['Daily cleaning — 15 floors', 'MEP preventive maintenance', 'Pest control program', '25+ staff deployed'],
    status: 'Ongoing',
  },
  {
    category: 'Manpower Supply',
    title: 'Manpower Supply — Large Retail Mall',
    location: 'Jeddah, KSA',
    description: 'Continuous supply of cleaning and support staff for a major retail shopping mall, including supervisors, cleaners, and restroom attendants across multiple floors and zones.',
    scope: ['50+ cleaners deployed', 'Daily shift coverage', 'Quality supervision', 'Replacement guarantee'],
    status: 'Ongoing',
  },
  {
    category: 'Hotel Services',
    title: 'Housekeeping & Public Area Cleaning — Hotel',
    location: 'Makkah Region, KSA',
    description: 'Comprehensive housekeeping and public area cleaning services for a 200-room hotel during peak Hajj and Umrah seasons, requiring surge capacity and strict hygiene standards.',
    scope: ['200 rooms managed', 'Lobby & corridor cleaning', 'Restaurant sanitation', 'Pest control program'],
    status: 'Completed',
  },
  {
    category: 'Deep Cleaning',
    title: 'Post-Construction Deep Clean — Commercial Complex',
    location: 'Jeddah, KSA',
    description: 'Full post-construction deep cleaning of a newly built commercial complex across 8 floors including offices, restaurants, parking, and retail units before handover.',
    scope: ['8 floors deep cleaned', 'Glass & facade cleaning', 'Floor polishing', 'Final inspection passed'],
    status: 'Completed',
  },
  {
    category: 'Pest Control',
    title: 'Annual Pest Control AMC — Restaurant Chain',
    location: 'Jeddah, KSA',
    description: 'Annual maintenance contract for pest control across a chain of 12 restaurant branches in Jeddah, with monthly treatments and emergency response guarantees.',
    scope: ['12 branches covered', 'Monthly treatments', 'SFDA-compliant methods', 'Emergency response SLA'],
    status: 'Ongoing',
  },
  {
    category: 'Building Maintenance',
    title: 'MEP & Building Maintenance — Residential Compound',
    location: 'Jeddah, KSA',
    description: 'Comprehensive MEP maintenance, plumbing, electrical, and civil repair services for a gated residential compound with 80+ villas and shared facilities.',
    scope: ['80+ villas serviced', 'Pool area maintenance', 'Electrical & plumbing', 'Civil repair works'],
    status: 'Ongoing',
  },
  {
    category: 'Facade Cleaning',
    title: 'High-Rise Glass Facade Cleaning — Office Tower',
    location: 'Jeddah, KSA',
    description: 'Specialized rope-access glass and facade cleaning for a 22-floor commercial tower. Our certified rope-access technicians completed the job safely within schedule.',
    scope: ['22 floors cleaned', 'Rope access team', 'Safe work plan', 'Completed on schedule'],
    status: 'Completed',
  },
  {
    category: 'Education',
    title: 'School Cleaning & Maintenance — International School',
    location: 'Jeddah, KSA',
    description: 'Full-year cleaning and maintenance services for an international school, including classrooms, restrooms, laboratories, sports areas, and administration blocks.',
    scope: ['Full campus coverage', 'Female staff for girls\' areas', 'Pest control included', 'AC maintenance'],
    status: 'Ongoing',
  },
]

const clientCategories = [
  { label: 'Corporate & Commercial', count: '15+' },
  { label: 'Hospitality & Hotels', count: '8+' },
  { label: 'Educational Institutions', count: '10+' },
  { label: 'Retail & Showrooms', count: '12+' },
  { label: 'Industrial & Warehouses', count: '5+' },
  { label: 'Residential & Compounds', count: '7+' },
]

// Placeholder client names — replace with real logo images in public/ when available
const clientLogos = [
  'Client Logo',
  'Client Logo',
  'Client Logo',
  'Client Logo',
  'Client Logo',
  'Client Logo',
  'Client Logo',
  'Client Logo',
  'Client Logo',
  'Client Logo',
]

function ProjectsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="hero-gradient text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-pmc-green-light font-semibold text-sm uppercase tracking-widest mb-3">Our Portfolio</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Projects & Clients</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            A track record of successful project delivery across Saudi Arabia. Our clients trust us for quality, reliability, and professionalism.
          </p>
          <nav className="flex items-center gap-2 text-sm text-blue-300 mt-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Projects</span>
          </nav>
        </div>
      </section>

      {/* Client Categories */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Clients We Serve</h2>
            <p className="text-gray-500 mt-2">Trusted by businesses across all major sectors in Saudi Arabia</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientCategories.map(cat => (
              <div key={cat.label} className="text-center bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div className="text-2xl font-extrabold text-pmc-blue">{cat.count}</div>
                <div className="text-xs text-gray-500 mt-1 leading-tight">{cat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos — sliding marquee */}
      <section className="py-16 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <h2 className="text-xl font-bold text-gray-700">Our Valued Clients</h2>
        </div>
        <div className="logo-marquee">
          <div className="logo-marquee-track">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={i} className="shrink-0 px-4">
                <div className="bg-white border border-gray-200 rounded-xl px-8 flex items-center justify-center h-20 w-44">
                  <span className="text-gray-400 text-sm font-semibold text-center">{logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-400 text-sm mt-6 text-center">Client logos displayed with permission</p>
      </section>

      {/* Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-pmc-green font-semibold text-sm uppercase tracking-widest mb-3">Our Work</div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(project => (
              <div key={project.title} className="card-hover bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-pmc-blue text-xs font-semibold px-3 py-1 rounded-full">{project.category}</span>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${project.status === 'Ongoing' ? 'bg-green-100 text-pmc-green' : 'bg-gray-200 text-gray-600'}`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-400 mb-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                    {project.location}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{project.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {project.scope.map(s => (
                      <div key={s} className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-pmc-green shrink-0"></div>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Placeholder */}
      <section className="py-16 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Gallery</h2>
          <p className="text-gray-500 mb-10">Visual documentation from our completed and ongoing projects across Saudi Arabia.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="bg-gray-200 rounded-xl aspect-square flex items-center justify-center">
                <div className="text-gray-400 text-xs text-center p-4">Project Photo {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-pmc-blue text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Let Your Facility Be Our Next Success Story</h2>
          <p className="text-blue-200 mb-8">Join the growing list of satisfied PMC clients across Saudi Arabia.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="bg-pmc-green text-white font-semibold px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
              Request a Quote
            </Link>
            <Link to="/contact" className="bg-white text-pmc-blue font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
