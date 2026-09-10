import { useState } from 'react'
import PackageCard from '../components/PackageCard'
import { packages, categories } from '../data/packages'

export default function Packages() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? packages
    : packages.filter((p) => p.category === active)

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-secondary font-semibold text-sm mb-1">OUR PACKAGES</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-dark mb-3">
            Explore Our Travel Packages
          </h1>
          <p className="text-muted max-w-xl mx-auto">
            Carefully designed itineraries for every kind of traveler. Transparent pricing, trusted stays.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                active === cat
                  ? 'bg-primary text-white'
                  : 'bg-white border border-gray-200 text-dark/70 hover:border-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </div>
  )
}
