import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      { title: 'Our Services - PMC | Cleaning, Maintenance & Facility Management KSA' },
      { name: 'description', content: 'PMC offers comprehensive services including manpower supply, cleaning, building maintenance, facility management, pest control, AC maintenance, MEP services, and more in Saudi Arabia.' },
    ],
  }),
  component: ServicesPage,
})

const services = [
  {
    icon: '👥',
    title: 'Manpower Supply',
    subtitle: 'Skilled Workforce Solutions',
    description: 'PMC provides a reliable and trained workforce for all your operational requirements. We supply skilled, semi-skilled, and unskilled workers for industries including manufacturing, hospitality, retail, construction, and facility management.',
    features: ['Cleaners & Janitors', 'Security Guards', 'Office Boys & Tea Boys', 'Laborers & Helpers', 'Supervisors & Team Leaders', 'Female Cleaning Staff'],
  },
  {
    icon: '🧹',
    title: 'Cleaning Services',
    subtitle: 'Professional Commercial Cleaning',
    description: 'Our professional cleaning teams deliver consistent, high-quality cleaning services for commercial, industrial, and residential properties. We use advanced equipment and eco-friendly, approved cleaning products.',
    features: ['Daily & Periodic Cleaning', 'Office Cleaning', 'Industrial Facility Cleaning', 'Post-Construction Cleaning', 'Carpet & Upholstery Cleaning', 'Female Cleaning Staff Available'],
  },
  {
    icon: '🔧',
    title: 'Building Maintenance',
    subtitle: 'Preventive & Corrective Maintenance',
    description: 'We deliver comprehensive building maintenance services to keep your facility in optimal condition. Our certified technicians handle preventive maintenance programs as well as emergency repair work.',
    features: ['Preventive Maintenance Plans', 'Civil & Structural Repairs', 'Painting & Plastering', 'Flooring & Tiling', 'Carpentry & Joinery', 'Emergency Repair Services'],
  },
  {
    icon: '🏢',
    title: 'Facility Management',
    subtitle: 'Integrated FM Solutions',
    description: 'PMC provides end-to-end integrated facility management services, acting as a single point of contact for all your facility needs. We manage operations, maintenance, cleaning, and support services under one contract.',
    features: ['Single-Point FM Contracts', 'Asset Management', 'Vendor Management', 'CAFM System Integration', 'Energy Management', 'SLA-Based Service Delivery'],
  },
  {
    icon: '☕',
    title: 'Office Boy / Tea Boy Services',
    subtitle: 'Office Support Staff',
    description: 'Our trained office boy and tea boy staff provide professional support for your daily office needs, from serving beverages to maintaining cleanliness in pantry areas and common spaces.',
    features: ['Tea & Coffee Service', 'Pantry Maintenance', 'Mail & Document Handling', 'Reception Support', 'Meeting Room Setup', 'General Office Assistance'],
  },
  {
    icon: '👩',
    title: 'Female Cleaning Staff',
    subtitle: 'Professional Female Cleaners',
    description: 'For environments requiring female staff — such as hospitals, clinics, schools, salons, and women-only areas — PMC provides trained and professional female cleaning personnel.',
    features: ['Hospital & Clinic Cleaning', 'School & University Areas', 'Women\'s Salons & Spas', 'Residential Units', 'Supervised Female Teams', 'Uniform & PPE Provided'],
  },
  {
    icon: '🪟',
    title: 'Glass & Facade Cleaning',
    subtitle: 'High-Rise & Exterior Cleaning',
    description: 'Our specialized facade cleaning teams use rope access techniques, cradles, and water-fed pole systems to clean high-rise buildings, curtain walls, and exterior glass surfaces safely and effectively.',
    features: ['High-Rise Facade Cleaning', 'Curtain Wall Cleaning', 'Rope Access Technicians', 'Water-Fed Pole Systems', 'Cradle & Platform Operations', 'COSHH-Compliant Methods'],
  },
  {
    icon: '🐛',
    title: 'Pest Control',
    subtitle: 'Licensed Pest Management',
    description: 'PMC provides licensed, professional pest control and extermination services for commercial, industrial, and residential properties. We use WHO-approved pesticides and follow strict safety protocols.',
    features: ['Cockroach & Rodent Control', 'Termite Treatment', 'Bed Bug Elimination', 'Fumigation Services', 'Mosquito & Fly Control', 'Annual AMC Contracts'],
  },
  {
    icon: '✨',
    title: 'Deep Cleaning',
    subtitle: 'Thorough Sanitization Services',
    description: 'Our deep cleaning service goes beyond routine cleaning to restore hygiene to the highest standards. Ideal for offices, kitchens, restaurants, warehouses, and any space requiring intensive sanitation.',
    features: ['Kitchen Deep Cleaning', 'Exhaust Hood Degreasing', 'Sanitization & Disinfection', 'Industrial Equipment Cleaning', 'Post-Event Cleaning', 'Anti-Bacterial Treatment'],
  },
  {
    icon: '💎',
    title: 'Marble Polishing',
    subtitle: 'Stone Restoration & Care',
    description: 'Professional marble, granite, and natural stone restoration services that bring back the shine and luster of your flooring and surfaces. We use specialized diamond abrasives and polishing compounds.',
    features: ['Marble Grinding & Honing', 'Crystal Polishing', 'Scratch & Stain Removal', 'Sealing & Protection', 'Granite & Terrazzo Care', 'Periodic Maintenance Contracts'],
  },
  {
    icon: '❄️',
    title: 'AC Maintenance',
    subtitle: 'Air Conditioning Services',
    description: 'Our certified HVAC technicians provide comprehensive air conditioning maintenance, repair, and installation services for all types of systems, ensuring optimal performance and energy efficiency.',
    features: ['Preventive AC Maintenance', 'AC Deep Cleaning', 'Filter & Coil Cleaning', 'Gas Recharging', 'AC Repair & Troubleshooting', 'VRF / Split / Central AC'],
  },
  {
    icon: '⚡',
    title: 'MEP Services',
    subtitle: 'Mechanical, Electrical & Plumbing',
    description: 'PMC\'s MEP division provides expert mechanical, electrical, and plumbing services for commercial and industrial facilities, from installation to maintenance and repair.',
    features: ['Electrical Installations & Repairs', 'Plumbing & Drainage', 'HVAC Mechanical Works', 'Fire Fighting Systems', 'Pump & Generator Maintenance', 'Certifications & Compliance'],
  },
  {
    icon: '📋',
    title: 'HR & Recruitment Support',
    subtitle: 'Workforce Management Solutions',
    description: 'Beyond manpower supply, PMC offers HR and recruitment consultancy services to help businesses build and manage their workforces efficiently in compliance with Saudi labor law.',
    features: ['Recruitment & Screening', 'Visa & Iqama Processing', 'Payroll Management', 'GOSI & HRDF Compliance', 'Saudization (Nitaqat) Advisory', 'Staff Training Programs'],
  },
]

function ServicesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="hero-gradient text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-pmc-green-light font-semibold text-sm uppercase tracking-widest mb-3">What We Do</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Comprehensive facility management, cleaning, maintenance, and manpower solutions for businesses across Saudi Arabia.
          </p>
          <nav className="flex items-center gap-2 text-sm text-blue-300 mt-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Services</span>
          </nav>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden`}
              >
                <div className={`grid md:grid-cols-2 gap-0 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`p-8 md:p-10 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <div className="text-pmc-green text-sm font-semibold uppercase tracking-wide mb-1">{service.subtitle}</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <Link
                      to="/quote"
                      className="inline-flex items-center gap-2 bg-pmc-blue text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-blue-800 transition-colors"
                    >
                      Get a Quote
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </Link>
                  </div>
                  <div className={`bg-gray-50 p-8 md:p-10 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Service Includes</h3>
                    <ul className="space-y-3">
                      {service.features.map(f => (
                        <li key={f} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-pmc-green flex items-center justify-center shrink-0">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                          </div>
                          <span className="text-gray-700 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-pmc-blue text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Service Package?</h2>
          <p className="text-blue-200 mb-8">Contact our team to discuss your specific requirements and get a tailored quotation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="bg-pmc-green text-white font-semibold px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
              Request a Quote
            </Link>
            <Link to="/contact" className="bg-white text-pmc-blue font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
