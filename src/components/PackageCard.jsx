import { Link } from 'react-router-dom'
import { Star, Clock, MapPin } from 'lucide-react'

export default function PackageCard({ pkg }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
          {pkg.category}
        </span>
        {pkg.originalPrice > pkg.price && (
          <span className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1 text-accent mb-2">
          <Star size={14} fill="currentColor" />
          <span className="text-sm font-medium text-dark">{pkg.rating}</span>
          <span className="text-xs text-muted">({pkg.reviews} reviews)</span>
        </div>

        <h3 className="font-display text-xl font-semibold text-dark mb-1 group-hover:text-primary transition-colors">
          {pkg.name}
        </h3>

        <div className="flex items-center gap-4 text-sm text-muted mb-3">
          <span className="flex items-center gap-1">
            <MapPin size={14} /> {pkg.destination}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} /> {pkg.duration}
          </span>
        </div>

        <div className="flex items-end justify-between mt-4 pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-muted">Starting from</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary">₹{pkg.price.toLocaleString()}</span>
              {pkg.originalPrice > pkg.price && (
                <span className="text-sm text-muted line-through">₹{pkg.originalPrice.toLocaleString()}</span>
              )}
            </div>
            <p className="text-xs text-muted">per person</p>
          </div>
          <Link
            to={`/packages/${pkg.id}`}
            className="btn-primary text-sm py-2.5 px-4"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}
