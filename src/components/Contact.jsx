import React, { useState } from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import Button from './ui/Button.jsx';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ExternalLink,
  CheckCircle2,
  Mail,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: business.services.mainItems[0]?.title || '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = business.whatsappNumber
    ? `https://wa.me/${business.whatsappNumber}`
    : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitted(true);
    // If WhatsApp is configured, craft message URL for convenient handoff
    if (business.whatsappNumber) {
      const text = encodeURIComponent(
        `Hi Rahemin's Team, my name is ${formData.name} (${formData.phone}). I am inquiring about: ${formData.service}. ${formData.message ? `Details: ${formData.message}` : ''}`
      );
      window.open(`https://wa.me/${business.whatsappNumber}?text=${text}`, '_blank');
    }
  };

  return (
    <section id="contact" className="site-section bg-surface">
      <div className="site-container">
        <SectionHeading
          eyebrow={business.contact.eyebrow}
          title={business.contact.headline}
          description={business.contact.description}
          align="left"
        />

        <div
          id="contact-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-48)',
            alignItems: 'start',
          }}
          className="contact-grid-responsive"
        >
          {/* Left Column: Business Details & Instant Channels */}
          <div
            id="contact-info-panel"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-24)',
            }}
          >
            {/* Primary Action Card */}
            <div
              style={{
                backgroundColor: 'var(--color-secondary)',
                color: '#FAF8F5',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-32)',
                boxShadow: 'var(--shadow-resting)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  color: '#FFFFFF',
                  marginBottom: 'var(--space-12)',
                }}
              >
                Instant Inquiries & Booking
              </h3>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: '#D4CDC3',
                  marginBottom: 'var(--space-24)',
                  lineHeight: '1.6',
                }}
              >
                For immediate service rates, bridal consultations, or training academy admissions, connect directly with our desk.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-12)',
                }}
              >
                {whatsappUrl && (
                  <Button
                    id="contact-whatsapp-btn"
                    href={whatsappUrl}
                    target="_blank"
                    variant="primary"
                    icon={MessageCircle}
                    iconPosition="left"
                    fullWidth
                  >
                    {business.mainCta.label}
                  </Button>
                )}

                <Button
                  id="contact-phone-btn"
                  href={`tel:${business.phone}`}
                  variant="secondary"
                  icon={Phone}
                  iconPosition="left"
                  fullWidth
                  style={{
                    color: '#FFFFFF',
                    borderColor: 'rgba(255, 255, 255, 0.25)',
                  }}
                >
                  Call {business.phoneFormatted}
                </Button>
              </div>
            </div>

            {/* Address & Hours Info Card */}
            <div
              style={{
                backgroundColor: 'var(--color-surface-card)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-32)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-resting)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-24)',
              }}
            >
              {/* Location Detail */}
              <div style={{ display: 'flex', gap: 'var(--space-16)' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-surface-alt)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={20} color="var(--color-primary-dark)" />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
                      color: 'var(--color-secondary)',
                      marginBottom: '4px',
                    }}
                  >
                    Location
                  </h4>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-ink)', marginBottom: '8px' }}>
                    {business.cityArea}
                  </p>
                  {business.googleMapsUrl && (
                    <a
                      id="contact-directions-link"
                      href={business.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-primary-dark)',
                        fontWeight: '600',
                      }}
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Schedule Detail */}
              <div style={{ display: 'flex', gap: 'var(--space-16)' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-surface-alt)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Clock size={20} color="var(--color-primary-dark)" />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
                      color: 'var(--color-secondary)',
                      marginBottom: '4px',
                    }}
                  >
                    Opening Hours
                  </h4>
                  {business.schedule.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-ink-muted)',
                        display: 'flex',
                        gap: 'var(--space-12)',
                        marginBottom: '4px',
                      }}
                    >
                      <span style={{ fontWeight: '500', minWidth: '130px', color: 'var(--color-ink)' }}>
                        {item.days}:
                      </span>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optional Email if provided */}
              {business.email && (
                <div style={{ display: 'flex', gap: 'var(--space-16)' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--color-surface-alt)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={20} color="var(--color-primary-dark)" />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.05rem',
                        color: 'var(--color-secondary)',
                        marginBottom: '4px',
                      }}
                    >
                      Email Address
                    </h4>
                    <a
                      href={`mailto:${business.email}`}
                      style={{
                        fontSize: 'var(--text-base)',
                        color: 'var(--color-primary-dark)',
                        fontWeight: '500',
                      }}
                    >
                      {business.email}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Styled Usable Contact Form */}
          <div
            id="contact-form-panel"
            style={{
              backgroundColor: 'var(--color-surface-card)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-48)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-resting)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                color: 'var(--color-secondary)',
                marginBottom: 'var(--space-8)',
              }}
            >
              Send an Inquiry
            </h3>
            <p
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-ink-muted)',
                marginBottom: 'var(--space-32)',
              }}
            >
              {business.contact.formNotice}
            </p>

            {submitted ? (
              <div
                id="form-success-message"
                style={{
                  padding: 'var(--space-24)',
                  backgroundColor: 'var(--color-surface-alt)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-primary)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-16)',
                }}
              >
                <CheckCircle2 size={24} color="var(--color-primary-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--color-secondary)', marginBottom: '4px' }}>
                    Inquiry Submitted
                  </h4>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-ink-muted)', margin: 0 }}>
                    Thank you, {formData.name}. We have prepared your request. You can also chat with us directly anytime on WhatsApp.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="ghost"
                    style={{ marginTop: 'var(--space-16)', padding: '6px 12px', fontSize: '0.85rem' }}
                  >
                    Send another inquiry
                  </Button>
                </div>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)' }}>
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontSize: 'var(--text-sm)',
                      fontWeight: '600',
                      color: 'var(--color-secondary)',
                      marginBottom: 'var(--space-8)',
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Ayesha Khan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      backgroundColor: 'var(--color-surface)',
                      color: 'var(--color-ink)',
                      fontSize: 'var(--text-base)',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    style={{
                      display: 'block',
                      fontSize: 'var(--text-sm)',
                      fontWeight: '600',
                      color: 'var(--color-secondary)',
                      marginBottom: 'var(--space-8)',
                    }}
                  >
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    placeholder="e.g. 03XX XXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      backgroundColor: 'var(--color-surface)',
                      color: 'var(--color-ink)',
                      fontSize: 'var(--text-base)',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Service of Interest */}
                <div>
                  <label
                    htmlFor="contact-service"
                    style={{
                      display: 'block',
                      fontSize: 'var(--text-sm)',
                      fontWeight: '600',
                      color: 'var(--color-secondary)',
                      marginBottom: 'var(--space-8)',
                    }}
                  >
                    Service or Course of Interest
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      backgroundColor: 'var(--color-surface)',
                      color: 'var(--color-ink)',
                      fontSize: 'var(--text-base)',
                      outline: 'none',
                    }}
                  >
                    {business.services.mainItems.map((item) => (
                      <option key={item.id} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                    <option value="General Parlour Services">Other Parlour Services / Mehendi / Facials</option>
                    <option value="Training Academy Inquiry">Beautician Training Course Inquiry</option>
                  </select>
                </div>

                {/* Message / Preferred Date */}
                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontSize: 'var(--text-sm)',
                      fontWeight: '600',
                      color: 'var(--color-secondary)',
                      marginBottom: 'var(--space-8)',
                    }}
                  >
                    Message or Preferred Date (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="Tell us about your event date or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      backgroundColor: 'var(--color-surface)',
                      color: 'var(--color-ink)',
                      fontSize: 'var(--text-base)',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <Button
                  id="contact-submit-btn"
                  type="submit"
                  variant="primary"
                  fullWidth
                  icon={MessageCircle}
                  iconPosition="right"
                >
                  Send Inquiry via WhatsApp
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .contact-grid-responsive {
            grid-template-columns: 1fr 1.15fr !important;
          }
        }
      `}</style>
    </section>
  );
}
