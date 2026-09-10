import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import { packages } from '../data/packages'

export default function Booking() {
  const { id } = useParams()
  const selectedPackage = packages.find((p) => p.id === id)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    packageId: id || '',
    travelers: '2',
    travelDate: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Later you can connect this to your backend / database / WhatsApp / email
    console.log('Booking request:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="section-padding">
        <div className="container-custom max-w-lg mx-auto text-center">
          <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
          <h1 className="font-display text-3xl font-bold mb-3">Booking Request Received!</h1>
          <p className="text-muted mb-6">
            Thank you, {form.name}. Our team will contact you within 24 hours on {form.phone} to confirm your booking.
          </p>
          <Link to="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="section-padding">
      <div className="container-custom max-w-2xl">
        <div className="text-center mb-10">
          <p className="text-secondary font-semibold text-sm mb-1">BOOK YOUR TRIP</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold">
            {selectedPackage ? `Book: ${selectedPackage.name}` : 'Booking Enquiry'}
          </h1>
          <p className="text-muted mt-2">Fill the form below and we’ll get back to you shortly.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-1.5">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Select Package *</label>
            <select
              name="packageId"
              required
              value={form.packageId}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            >
              <option value="">Choose a package</option>
              {packages.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} — ₹{p.price.toLocaleString()}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-1.5">Number of Travelers *</label>
              <select
                name="travelers"
                value={form.travelers}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'Persons'}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Preferred Travel Date</label>
              <input
                type="date"
                name="travelDate"
                value={form.travelDate}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Message / Special Requests</label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
              placeholder="Any special requirements, hotel preferences, etc."
            />
          </div>

          <button type="submit" className="btn-secondary w-full py-3.5 text-base">
            Submit Booking Request
          </button>

          <p className="text-xs text-muted text-center">
            By submitting, you agree to be contacted by Aarohi Travels regarding your booking.
          </p>
        </form>
      </div>
    </div>
  )
}
