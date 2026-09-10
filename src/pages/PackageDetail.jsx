import { useParams, Link } from 'react-router-dom'
import { Star, Clock, MapPin, Check, X, ArrowLeft } from 'lucide-react'
import { packages } from '../data/packages'

export default function PackageDetail() {
  const { id } = useParams()
  const pkg = packages.find((p) => p.id === id)

  if (!pkg) {
    return (
      <div className="section-padding text-center">
        <h1 className="text-2xl font-bold mb-4">Package not found</h1>
        <Link to="/packages" className="text-primary">Back to packages</Link>
      </div>
    )
  }

  return (
    <div>
      {/* Hero image */}
      <div className="relative h-[45vh] min-h-[320px]">
        <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container-custom">
            <Link to="/packages" className="inline-flex items-center gap-1 text-white/80 text-sm mb-3 hover:text-white">
              <ArrowLeft size={16} /> All Packages
            </Link>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-2">{pkg.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1"><MapPin size={14} /> {pkg.destination}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {pkg.duration}</span>
              <span className="flex items-center gap-1">
                <Star size={14} fill="currentColor" className="text-accent" /> {pkg.rating} ({pkg.reviews} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="font-display text-2xl font-bold mb-4">Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">Itinerary</h2>
              <div className="space-y-4">
                {pkg.itinerary.map((day) => (
                  <div key={day.day} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">
                      {day.day}
                    </div>
                    <div>
                      <h3 className="font-semibold">{day.title}</h3>
                      <p className="text-sm text-muted mt-0.5">{day.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h2 className="font-display text-xl font-bold mb-3">Inclusions</h2>
                <ul className="space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold mb-3">Exclusions</h2>
                <ul className="space-y-2">
                  {pkg.excludes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <X size={16} className="text-red-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="mb-4">
                <p className="text-sm text-muted">Starting from</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">₹{pkg.price.toLocaleString()}</span>
                  {pkg.originalPrice > pkg.price && (
                    <span className="text-muted line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                  )}
                </div>
                <p className="text-xs text-muted">per person</p>
              </div>

              <p className="text-sm text-muted mb-1">Best time to visit</p>
              <p className="font-medium text-sm mb-6">{pkg.bestTime}</p>

              <Link
                to={`/booking/${pkg.id}`}
                className="btn-secondary w-full mb-3"
              >
                Book This Package
              </Link>
              <Link
                to="/contact"
                className="btn-outline w-full"
              >
                Ask a Question
              </Link>

              <div className="mt-6 pt-6 border-t text-sm text-muted">
                <p>Need help? Call us</p>
                <a href="tel:+919876543210" className="text-primary font-semibold text-lg">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
