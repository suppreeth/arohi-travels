import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl">
        <p className="text-secondary font-semibold text-sm mb-1">ABOUT US</p>
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-6">
          We Make Travel Simple & Memorable
        </h1>
        <div className="space-y-5 text-dark/80 leading-relaxed">
          <p>
            Aarohi Travels is a Bangalore-based travel company dedicated to creating beautiful, well-planned journeys across India. Whether you’re looking for a relaxing beach holiday, an adventure in the Himalayas, or a cultural heritage tour, we have a package for you.
          </p>
          <p>
            Founded with a passion for travel and a commitment to honest pricing, we have helped over 2000 travelers experience the best of India. Our packages are designed with care — comfortable stays, reliable transport, and thoughtful itineraries.
          </p>
          <p>
            We believe travel should be exciting, not stressful. That’s why we handle the planning so you can focus on making memories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { num: '2000+', label: 'Happy Travelers' },
            { num: '50+', label: 'Destinations' },
            { num: '6+', label: 'Years Experience' },
            { num: '4.8', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 bg-white rounded-xl border border-gray-100">
              <p className="text-2xl md:text-3xl font-bold text-primary">{stat.num}</p>
              <p className="text-xs text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/packages" className="btn-primary">
            Explore Our Packages
          </Link>
        </div>
      </div>
    </div>
  )
}
