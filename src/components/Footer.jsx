import React from 'react';
import { business } from '../config/business.js';
import { Phone, MessageCircle, MapPin, Clock, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = business.whatsappNumber ? `https://wa.me/${business.whatsappNumber}` : null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="site-footer"
      style={{
        backgroundColor: 'var(--color-secondary)',
        color: '#FAF8F5',
        paddingTop: 'var(--space-64)',
        paddingBottom: 'var(--space-32)',
        borderTop: '1px solid rgba(197, 168, 128, 0.25)',
      }}
    >
      <div className="site-container">
        {/* Main Footer Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'var(--space-48)',
            marginBottom: 'var(--space-48)',
          }}
        >
          {/* Brand Col */}
          <div style={{ maxWidth: '380px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: '600',
                color: '#FFFFFF',
                marginBottom: 'var(--space-8)',
              }}
            >
              {business.name}
            </h3>
            <p
              style={{
                fontSize: 'var(--text-sm)',
                color: '#D4CDC3',
                lineHeight: '1.6',
                marginBottom: 'var(--space-16)',
              }}
            >
              {business.tagline}
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '0.85rem' }}>
              <MapPin size={16} />
              <span>{business.cityArea}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-primary)',
                marginBottom: 'var(--space-16)',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
              {business.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: '#EFEAE1',
                      transition: 'color var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#EFEAE1')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Schedule */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-primary)',
                marginBottom: 'var(--space-16)',
              }}
            >
              Parlour Hours
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', fontSize: 'var(--text-sm)', color: '#D4CDC3' }}>
              {business.schedule.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                  <span style={{ color: '#FFFFFF' }}>{item.days}:</span>
                  <span>{item.hours}</span>
                </div>
              ))}
              <div style={{ marginTop: 'var(--space-8)', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)' }}>
                <Clock size={14} />
                <span style={{ fontSize: '0.8rem' }}>Appointments Recommended</span>
              </div>
            </div>
          </div>

          {/* Contact Direct */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-primary)',
                marginBottom: 'var(--space-16)',
              }}
            >
              Contact Direct
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
              <a
                href={`tel:${business.phone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#FFFFFF',
                  fontSize: 'var(--text-sm)',
                  fontWeight: '500',
                }}
              >
                <Phone size={16} color="var(--color-primary)" />
                <span>{business.phoneFormatted}</span>
              </a>

              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#FFFFFF',
                    fontSize: 'var(--text-sm)',
                    fontWeight: '500',
                  }}
                >
                  <MessageCircle size={16} color="var(--color-primary)" />
                  <span>WhatsApp Chat</span>
                </a>
              )}

              {business.googleMapsUrl && (
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-primary)',
                    marginTop: 'var(--space-4)',
                    textDecoration: 'underline',
                  }}
                >
                  View on Google Maps →
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: 'var(--space-24)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-16)',
          }}
        >
          <p
            style={{
              fontSize: '0.82rem',
              color: '#A09990',
              margin: 0,
            }}
          >
            © {currentYear} {business.name}. {business.footer.copyrightNotice}
          </p>

          <button
            id="footer-back-to-top"
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-sm)',
              color: '#FAF8F5',
              fontSize: '0.82rem',
              padding: '6px 14px',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              e.currentTarget.style.color = '#1C1917';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.color = '#FAF8F5';
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
