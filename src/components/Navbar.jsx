import React, { useState, useEffect } from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const whatsappUrl = business.whatsappNumber ? `https://wa.me/${business.whatsappNumber}` : null;

  return (
    <header
      id="main-navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 'var(--nav-height)',
        backgroundColor: scrolled
          ? 'rgba(26, 23, 21, 0.95)'
          : 'rgba(26, 23, 21, 0.88)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: scrolled
          ? '1px solid rgba(197, 168, 128, 0.25)'
          : '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all var(--transition-base)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="site-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Wordmark */}
        <a
          id="navbar-brand"
          href="#"
          onClick={closeMobileMenu}
          style={{
            display: 'flex',
            flexDirection: 'column',
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.35rem',
              fontWeight: '600',
              letterSpacing: '0.02em',
              color: '#FFFFFF',
              lineHeight: '1.2',
            }}
          >
            {business.shortName}
          </span>
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: '500',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              lineHeight: '1',
              marginTop: '3px',
            }}
          >
            Beauty Parlour & Academy
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          id="desktop-nav"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: 'var(--space-32)',
          }}
          className="desktop-nav-container"
        >
          {business.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: '#EFEAE1',
                fontSize: '0.95rem',
                fontWeight: '500',
                letterSpacing: '0.02em',
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#EFEAE1';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div
          id="navbar-actions-desktop"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: 'var(--space-16)',
          }}
          className="desktop-actions-container"
        >
          <a
            href={`tel:${business.phone}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#FAF8F5',
              fontSize: '0.9rem',
              fontWeight: '500',
              padding: '8px 12px',
              transition: 'color var(--transition-fast)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#FAF8F5';
            }}
          >
            <Phone size={15} color="var(--color-primary)" />
            <span>{business.phoneFormatted}</span>
          </a>

          {whatsappUrl && (
            <Button
              id="navbar-cta-button"
              href={whatsappUrl}
              target="_blank"
              variant="primary"
              icon={MessageCircle}
              iconPosition="left"
            >
              WhatsApp
            </Button>
          )}
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          id="mobile-menu-toggle"
          type="button"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            background: 'none',
            border: '1px solid rgba(197, 168, 128, 0.3)',
            borderRadius: 'var(--radius-sm)',
            color: '#FFFFFF',
            cursor: 'pointer',
          }}
          className="mobile-toggle-btn"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Panel */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          style={{
            position: 'absolute',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            backgroundColor: 'var(--color-secondary)',
            borderBottom: '1px solid rgba(197, 168, 128, 0.25)',
            padding: 'var(--space-24)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-16)',
            boxShadow: '0 16px 32px rgba(0, 0, 0, 0.4)',
          }}
        >
          {business.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              style={{
                color: '#FAF8F5',
                fontSize: '1.1rem',
                fontWeight: '500',
                padding: 'var(--space-8) 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              {link.label}
            </a>
          ))}

          <div
            style={{
              paddingTop: 'var(--space-16)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-12)',
            }}
          >
            <a
              href={`tel:${business.phone}`}
              onClick={closeMobileMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-8)',
                color: 'var(--color-primary)',
                fontSize: '1rem',
                fontWeight: '600',
                padding: 'var(--space-8) 0',
              }}
            >
              <Phone size={18} />
              <span>Call: {business.phoneFormatted}</span>
            </a>

            {whatsappUrl && (
              <Button
                href={whatsappUrl}
                target="_blank"
                variant="primary"
                fullWidth
                icon={MessageCircle}
                onClick={closeMobileMenu}
              >
                {business.mainCta.label}
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Responsive layout helper style for desktop navbar */}
      <style>{`
        @media (min-width: 860px) {
          .desktop-nav-container {
            display: flex !important;
          }
          .desktop-actions-container {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
