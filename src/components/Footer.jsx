import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-custom section-padding !py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-display font-bold">Aarohi</span>
              <span className="text-2xl font-display font-light text-secondary">Travels</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Making your travel dreams come true with carefully crafted packages across India. Trusted by 2000+ happy travelers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/packages" className="hover:text-white transition">Packages</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link to="/booking" className="hover:text-white transition">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Popular Packages</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/packages/goa-beach-escape" className="hover:text-white transition">Goa Beach Escape</Link></li>
              <li><Link to="/packages/kerala-backwaters" className="hover:text-white transition">Kerala Backwaters</Link></li>
              <li><Link to="/packages/ladakh-expedition" className="hover:text-white transition">Ladakh Expedition</Link></li>
              <li><Link to="/packages/rajasthan-royal" className="hover:text-white transition">Royal Rajasthan</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <a href="mailto:hello@aarohitravels.com" className="hover:text-white">hello@aarohitravels.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>123 Travel Plaza, MG Road, Bangalore – 560001</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition"><Instagram size={16} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition"><Facebook size={16} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition"><Youtube size={16} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-white/40">
          <p>© 2026 Aarohi Travels. All rights reserved.</p>
          <p>Designed for seamless travel experiences.</p>
        </div>
      </div>
    </footer>
  )
}
