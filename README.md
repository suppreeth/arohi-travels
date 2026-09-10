# Aarohi Travels — Travel Business Website

A clean, professional website for a travel agency business. Showcase packages, accept booking enquiries, and let customers contact you online.

## Features

- Homepage with featured packages & testimonials
- Packages listing with category filters
- Detailed package pages (itinerary, inclusions, pricing)
- Booking / Enquiry form
- Contact page
- About page
- Fully responsive (mobile + desktop)
- Easy to connect to a real database later

## Sample Business Details (Change these)

- **Business Name:** Aarohi Travels
- **Phone:** +91 98765 43210
- **Email:** hello@aarohitravels.com
- **Address:** 123 Travel Plaza, MG Road, Bangalore

## How to Run

```bash
npm install
npm run dev
```

Open http://localhost:5173

## How to Customize

1. **Packages** → Edit `src/data/packages.js`
2. **Business name / phone / email** → Search & replace in components
3. **Colors** → Edit `tailwind.config.js`

## Later: Connect Database

The booking form currently logs data to console.  
You can connect it to:
- Firebase / Supabase
- Your own backend API
- WhatsApp API
- Email service (EmailJS, Formspree, etc.)

## Tech Stack

- React + Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide Icons
