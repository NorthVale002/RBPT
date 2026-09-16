/**
 * Business Configuration File
 * 
 * ALL business text, colors, contact details, services, and image URLs
 * are defined in this single configuration file.
 * A non-technical owner can edit this file to update the entire website.
 */

export const business = {
  name: "Rahemin's Beauty Parlour or Training Center",
  shortName: "Rahemin's",
  tagline: "Dedicated Beauty Care & Professional Training in Hyderabad",
  type: "Beauty Salon & Training Academy",
  cityArea: "Hyderabad, Sindh",
  address: "Hyderabad, Sindh, Pakistan",
  phone: "03162708962",
  phoneFormatted: "0316 2708962",
  whatsappNumber: "923162708962",
  email: "", // Omitted cleanly if not provided
  googleMapsUrl: "https://www.google.com/maps/place/Rahemin's+Beauty+Parlour+or+Training+Center/@25.4021161,68.3800318,17z/data=!3m1!4b1!4m6!3m5!1s0x394c7124f3d54111:0xc738e7cb28eadcea!8m2!3d25.4021161!4d68.3800318!16s%2Fg%2F11nvf49x5m?entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D",
  
  brandStyle: "Luxury",
  
  // Design Tokens & Palette (Restrained, elegant warm luxury)
  colors: {
    primary: "#C5A880",       // Champagne Gold
    primaryHover: "#B3956B",
    primaryDark: "#8C6D3B",
    primaryLight: "#F5EFE6",
    secondary: "#1A1715",     // Deep Warm Espresso Ink
    surface: "#FAF8F5",       // Soft Off-White Background
    surfaceAlt: "#F4EFEA",    // Subtle Alternating Section Neutral
    surfaceCard: "#FFFFFF",   // Crisp Card Surface
    ink: "#1C1917",          // Near-black text
    inkMuted: "#615A52",     // Legible secondary text (WCAG AA compliant)
    border: "#E7DFD5",       // Delicate warm hairline border
    borderSubtle: "#EFEAE1",
  },

  // Opening schedule
  openingHours: "Monday – Saturday: 11:00 AM – 8:00 PM",
  schedule: [
    { days: "Monday – Saturday", hours: "11:00 AM – 8:00 PM" },
    { days: "Sunday", hours: "By Advance Appointment" }
  ],

  // CTAs
  mainCta: {
    label: "Message on WhatsApp",
    action: "whatsapp"
  },
  secondaryCta: {
    label: "View Services",
    href: "#services"
  },
  phoneCta: {
    label: "Call 0316 2708962",
    href: "tel:03162708962"
  },

  // Navigation Links
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  // Hero Section
  hero: {
    eyebrow: "Hyderabad, Sindh • Beauty Salon & Academy",
    headline: "Refined beauty care and certified professional training.",
    supportText: "Providing personalized bridal styling, restorative skin therapies, and hands-on vocational courses in a welcoming, private environment.",
    trustBadge: "Women-Only Sanctuary • Certified Instructors • Central Hyderabad",
    backgroundImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80",
  },

  // Core Services
  services: {
    eyebrow: "Our Expertise",
    headline: "Thoughtfully crafted beauty and vocational services.",
    description: "Every service is delivered with strict attention to hygiene, premium formulations, and individualized consultation.",
    mainItems: [
      {
        id: "bridal-makeup",
        title: "Bridal & Special Occasion Makeup",
        description: "Tailored bridal and festive makeup artistry created to highlight your natural elegance with flawless long-wear finish.",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=80",
        tag: "Bespoke Artistry"
      },
      {
        id: "hair-treatments",
        title: "Hair Styling & Restorative Treatments",
        description: "Custom haircuts, bridal updos, keratin smoothing, and deep conditioning treatments to restore shine and strength.",
        image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1600&q=80",
        tag: "Hair Therapy"
      },
      {
        id: "skincare-facials",
        title: "Skincare Therapies & Organic Facials",
        description: "Deep cleansing, herbal polishing, hydration masks, and targeted facials formulated for glowing, healthy skin.",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=80",
        tag: "Skin Wellness"
      },
      {
        id: "training-courses",
        title: "Professional Beautician Certification",
        description: "Structured, hands-on training courses covering bridal makeup, hair design, skin treatments, and salon management.",
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1600&q=80",
        tag: "Vocational Academy"
      }
    ],
    secondaryList: [
      "Traditional Bridal Mehendi (Henna) Design",
      "Relaxing Manicure & Pedicure Spa",
      "Gentle Waxing & Precision Eyebrow Threading",
      "Skin Glow & Polish Treatments",
      "Party Hair Styling & Blowouts",
      "Beautician Masterclass Modules"
    ]
  },

  // About Section
  about: {
    eyebrow: "Our Story",
    headline: "A welcoming local space for beauty and skill development.",
    paragraphs: [
      "Rahemin's Beauty Parlour or Training Center was founded in Hyderabad, Sindh, to offer local women a respectful, comfortable space for both personal beauty care and professional career education.",
      "We believe true beauty care starts with listening. Whether you visit for a bride-to-be transformation or enroll in our vocational training to start your own business, you receive calm, attentive guidance every step of the way."
    ],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { label: "Environment", value: "Private & Safe" },
      { label: "Focus", value: "Hair, Skin & Bridal" },
      { label: "Academy", value: "Hands-on Training" }
    ]
  },

  // Why Choose Us
  whyChooseUs: {
    eyebrow: "Why Choose Us",
    headline: "A salon experience built on trust, craft, and care.",
    items: [
      {
        number: "01",
        title: "Private Women-Only Environment",
        description: "A comfortable, fully private setting in Hyderabad designed for your complete relaxation and discretion."
      },
      {
        number: "02",
        title: "Certified Hands-On Training",
        description: "Practical curriculum covering makeup, hair styling, and client hygiene with verifiable completion certificates."
      },
      {
        number: "03",
        title: "Individualized Consultation",
        description: "We listen carefully to your preferences before every treatment, ensuring results that match your personal style."
      },
      {
        number: "04",
        title: "Central Hyderabad Location",
        description: "Centrally positioned in Hyderabad with fast WhatsApp booking and accessible parking."
      }
    ]
  },

  // Testimonials (kept strictly empty when not provided, component will self-omit)
  testimonials: [],

  // FAQ Section
  faq: {
    eyebrow: "Frequently Asked Questions",
    headline: "Helpful details before booking or enrolling.",
    items: [
      {
        question: "How do I book an appointment or inquire about bridal packages?",
        answer: "Simply tap the 'Message on WhatsApp' button or call 03162708962. We recommend booking bridal and party dates 1 to 2 weeks in advance to secure your preferred time."
      },
      {
        question: "What courses are offered at the Training Center?",
        answer: "We offer both comprehensive beautician diplomas and focused short courses in bridal makeup, hair styling, skin treatments, and hygiene practices. All courses include practical hands-on training."
      },
      {
        question: "Is the salon private and women-only?",
        answer: "Yes, our parlour is an exclusively women-only space where clients can relax in complete comfort and privacy."
      },
      {
        question: "Where are you located in Hyderabad?",
        answer: "We are located in Hyderabad, Sindh. You can view our exact location on Google Maps using the Directions button on this page."
      }
    ]
  },

  // Contact Section
  contact: {
    eyebrow: "Visit & Inquire",
    headline: "We look forward to welcoming you.",
    description: "Get in touch via WhatsApp or phone call for immediate appointments, bridal package quotes, or academy inquiries.",
    directLineLabel: "Direct Phone Call",
    whatsappLabel: "Chat on WhatsApp",
    directionsLabel: "View on Google Maps",
    formNotice: "Send us a quick inquiry and our team will get back to you shortly via WhatsApp or call."
  },

  // Footer
  footer: {
    copyrightNotice: "All rights reserved. Dedicated to women's beauty care and vocational empowerment in Hyderabad, Sindh."
  }
};
