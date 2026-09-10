import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Headphones, Map, Star } from 'lucide-react'
import PackageCard from '../components/PackageCard'
import { packages, testimonials } from '../data/packages'

export default function Home() {
  const featured = packages.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[560px] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=2000&q=80"
          alt="Travel destination"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/50 to-transparent" />
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-secondary font-semibold tracking-wide mb-3">YOUR TRUSTED TRAVEL PARTNER</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5">
              Discover India with Handcrafted Packages
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-xl">
              From beaches to mountains, we design memorable journeys at transparent prices. Book your next adventure today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/packages" className="btn-secondary">
                Explore Packages <ArrowRight size={18} />
              </Link>
              <Link to="/booking" className="btn-outline border-white text-white hover:bg-white hover:text-dark">
                Book Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="bg-white border-b">
        <div className="container-custom py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Shield, label: 'Secure Booking', sub: '100% Safe payments' },
            { icon: Headphones, label: '24/7 Support', sub: 'Always here to help' },
            { icon: Map, label: '50+ Destinations', sub: 'Across India' },
            { icon: Star, label: '4.8 Rating', sub: 'From 2000+ travelers' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <item.icon size={22} />
              </div>
              <div>
                <p className="font-semibold text-sm">{item.label}</p>
                <p className="text-xs text-muted">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Packages */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-secondary font-semibold text-sm mb-1">POPULAR CHOICES</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark">Featured Packages</h2>
            </div>
            <Link to="/packages" className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
              View all packages <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold text-sm mb-1">WHY AAROHI TRAVELS</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Why Travel With Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Best Price Guarantee', desc: 'We offer transparent pricing with no hidden charges. Best deals on every package.' },
              { title: 'Handpicked Stays', desc: 'Carefully selected hotels and camps so you stay comfortable throughout the trip.' },
              { title: 'Expert Local Support', desc: 'Our team and local partners ensure smooth experiences even in remote destinations.' },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold text-sm mb-1">TESTIMONIALS</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">What Our Travelers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex gap-1 text-accent mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-dark/80 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted">{t.place}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center text-white">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready for Your Next Journey?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Tell us your preferred destination and dates. We’ll create the perfect package for you.
          </p>
          <Link to="/booking" className="inline-flex items-center gap-2 bg-white text-secondary font-semibold px-8 py-3.5 rounded-lg hover:bg-light transition">
            Book Your Trip Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
