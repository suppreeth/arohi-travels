import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Packages', path: '/packages' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold text-primary">Aarohi</span>
            <span className="text-2xl font-display font-light text-secondary">Travels</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-primary' : 'text-dark/70 hover:text-primary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-sm font-medium text-primary">
              <Phone size={16} />
              +91 98765 43210
            </a>
            <Link to="/booking" className="btn-secondary text-sm py-2.5 px-5">
              Book Now
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4 flex flex-col gap-3">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 text-base font-medium ${isActive ? 'text-primary' : 'text-dark/70'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="btn-secondary text-center mt-2"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
