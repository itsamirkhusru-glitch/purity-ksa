import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About Us - PMC | Purity for Maintenance and Cleaning Saudi Arabia' },
      { name: 'description', content: 'Learn about PMC - Purity for Maintenance and Cleaning. A trusted facility management company in Jeddah, Saudi Arabia with over 10 years of experience serving KSA businesses.' },
    ],
  }),
  component: AboutPage,
})

const values = [
  { icon: '✅', title: 'Integrity', desc: 'We operate with full transparency and honesty in every engagement, building long-term relationships based on trust.' },
  { icon: '⭐', title: 'Excellence', desc: 'We commit to delivering services that consistently exceed client expectations and industry standards.' },
  { icon: '🤝', title: 'Customer Focus', desc: 'Our clients are at the heart of every decision. We listen, adapt, and deliver personalized solutions.' },
  { icon: '🌿', title: 'Sustainability', desc: 'We adopt eco-friendly practices and materials, minimizing environmental impact across all our operations.' },
  { icon: '🔒', title: 'Safety', desc: 'Safety is non-negotiable. Our teams follow strict HSE protocols on every site to protect staff and clients.' },
  { icon: '💡', title: 'Innovation', desc: 'We continuously invest in training, technology, and modern techniques to stay ahead in the industry.' },
]

const team = [
  { role: 'General Manager', dept: 'Management' },
  { role: 'Operations Manager', dept: 'Operations' },
  { role: 'HR & Recruitment Manager', dept: 'Human Resources' },
  { role: 'Technical Services Manager', dept: 'Maintenance' },
  { role: 'Quality Assurance Officer', dept: 'Quality Control' },
  { role: 'Site Supervisors', dept: 'Field Operations' },
]

function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="hero-gradient text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-pmc-green-light font-semibold text-sm uppercase tracking-widest mb-3">Who We Are</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About PMC</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            A proudly Saudi facility management company with a decade of excellence in cleaning, maintenance, and manpower supply services.
          </p>
          <nav className="flex items-center gap-2 text-sm text-blue-300 mt-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">About Us</span>
          </nav>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-pmc-green font-semibold text-sm uppercase tracking-widest mb-3">Company Profile</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Excellence Since Day One</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Purity for Maintenance and Cleaning Co. (PMC) was established in Jeddah, Saudi Arabia with a clear mission: to provide world-class facility management and cleaning services to the growing Saudi market. Our company holds all required licenses and certifications issued by the relevant Saudi authorities.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                PMC specializes in integrated facility management, manpower supply, janitorial services, building maintenance, pest control, and a wide range of support services. We serve clients across multiple sectors including hospitality, education, commercial real estate, healthcare, retail, and industrial facilities.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our growing team of over 200 trained professionals operates across Jeddah and extends services throughout the Kingdom of Saudi Arabia. Each team member undergoes rigorous training to ensure service quality that meets and exceeds client expectations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Founded', value: '2014' },
                  { label: 'Headquarters', value: 'Jeddah, KSA' },
                  { label: 'Staff', value: '200+ Employees' },
                  { label: 'Coverage', value: 'Kingdom-wide' },
                ].map(item => (
                  <div key={item.label} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">{item.label}</div>
                    <div className="font-bold text-gray-900">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {/* Vision */}
              <div className="bg-pmc-blue text-white rounded-2xl p-8">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-blue-100 leading-relaxed">
                  To be the most trusted and preferred integrated facility management and cleaning company in Saudi Arabia, recognized for uncompromising quality, innovative solutions, and exceptional service delivery.
                </p>
              </div>
              {/* Mission */}
              <div className="bg-pmc-green text-white rounded-2xl p-8">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-green-50 leading-relaxed">
                  To deliver comprehensive, reliable, and professional maintenance and cleaning services that enhance the safety, hygiene, and operational efficiency of our clients' facilities — contributing to a cleaner and healthier Saudi Arabia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-pmc-green font-semibold text-sm uppercase tracking-widest mb-3">What We Stand For</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(v => (
              <div key={v.title} className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saudi Market Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '10+', label: 'Years in KSA Market' },
                  { value: '500+', label: 'Projects Delivered' },
                  { value: '50+', label: 'Corporate Clients' },
                  { value: '200+', label: 'Trained Professionals' },
                ].map(stat => (
                  <div key={stat.label} className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-3xl font-extrabold text-pmc-blue">{stat.value}</div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-pmc-green font-semibold text-sm uppercase tracking-widest mb-3">Saudi Market Expertise</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Deep-Rooted Experience in the Kingdom</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                PMC has built an extensive portfolio of projects across Saudi Arabia, operating in full compliance with the Ministry of Human Resources, HRDF, and Saudi Vision 2030 guidelines. We prioritize Saudization (Nitaqat) and maintain a strong blend of Saudi and expatriate professionals.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our understanding of the local business culture, regulatory requirements, and operational environment makes us the ideal partner for businesses seeking dependable facility management solutions in the Kingdom.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We have successfully served clients in Jeddah, Riyadh, Makkah, Madinah, and other cities, building a reputation for reliability and professionalism that sets us apart in the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-pmc-blue text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner with PMC?</h2>
          <p className="text-blue-200 mb-8">Let us put our experience and expertise to work for your business.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="bg-pmc-green text-white font-semibold px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
              Request a Quote
            </Link>
            <Link to="/contact" className="bg-white text-pmc-blue font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
