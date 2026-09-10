import { useState } from 'react'
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form:', form)
    setSubmitted(true)
  }

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-secondary font-semibold text-sm mb-1">GET IN TOUCH</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-muted mt-2">Have questions? We’d love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-semibold">Phone / WhatsApp</p>
                <a href="tel:+919876543210" className="text-primary">+91 98765 43210</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:hello@aarohitravels.com" className="text-primary">hello@aarohitravels.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-semibold">Office</p>
                <p className="text-muted text-sm">123 Travel Plaza, MG Road<br />Bangalore – 560001</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-2xl border p-8 text-center">
                <CheckCircle size={48} className="mx-auto text-green-500 mb-3" />
                <h2 className="font-display text-2xl font-bold mb-2">Message Sent!</h2>
                <p className="text-muted">We’ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Phone *</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full py-3">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
