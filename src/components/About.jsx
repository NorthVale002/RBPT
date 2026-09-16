import React from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  const whatsappUrl = business.whatsappNumber ? `https://wa.me/${business.whatsappNumber}` : null;

  return (
    <section id="about" className="site-section bg-surface">
      <div className="site-container">
        <div
          id="about-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-64)',
            alignItems: 'center',
          }}
          className="about-grid-responsive"
        >
          {/* Left Column: Refined Image Presentation */}
          <div
            id="about-image-container"
            style={{
              position: 'relative',
            }}
          >
            <div
              className="media-cover"
              style={{
                aspectRatio: '4 / 5',
                boxShadow: 'var(--shadow-resting)',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              <img
                src={business.about.image}
                alt={business.shortName}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Subtle decorative accent pill */}
            <div
              style={{
                position: 'absolute',
                bottom: '-16px',
                right: '24px',
                backgroundColor: 'var(--color-secondary)',
                color: '#FAF8F5',
                padding: '16px 24px',
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'var(--shadow-hover)',
                border: '1px solid rgba(197, 168, 128, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <Sparkles size={20} color="var(--color-primary)" />
              <div>
                <p style={{ fontSize: '0.78rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>
                  Location & Care
                </p>
                <p style={{ fontSize: '0.95rem', fontWeight: '600', margin: 0, color: '#FFFFFF' }}>
                  {business.cityArea}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div id="about-content" style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              className="section-eyebrow"
              style={{
                display: 'inline-block',
                fontSize: 'var(--text-xs)',
                fontWeight: '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-primary-dark)',
                marginBottom: 'var(--space-8)',
              }}
            >
              {business.about.eyebrow}
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-2xl)',
                lineHeight: '1.2',
                color: 'var(--color-secondary)',
                marginBottom: 'var(--space-24)',
                fontWeight: '500',
              }}
            >
              {business.about.headline}
            </h2>

            {business.about.paragraphs.map((para, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-ink-muted)',
                  lineHeight: '1.7',
                  marginBottom: 'var(--space-16)',
                }}
              >
                {para}
              </p>
            ))}

            {/* Pillar highlights */}
            {business.about.stats && business.about.stats.length > 0 && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: 'var(--space-16)',
                  marginTop: 'var(--space-24)',
                  marginBottom: 'var(--space-32)',
                  paddingTop: 'var(--space-24)',
                  borderTop: '1px solid var(--color-border-subtle)',
                }}
              >
                {business.about.stats.map((stat, idx) => (
                  <div key={idx}>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--color-primary-dark)',
                        fontWeight: '600',
                        marginBottom: '4px',
                      }}
                    >
                      {stat.label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.15rem',
                        fontWeight: '600',
                        color: 'var(--color-secondary)',
                      }}
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-16)', marginTop: 'var(--space-8)' }}>
              {whatsappUrl && (
                <Button
                  href={whatsappUrl}
                  target="_blank"
                  variant="primary"
                >
                  Message Our Team
                </Button>
              )}
              <Button
                href={`tel:${business.phone}`}
                variant="secondary"
              >
                Call: {business.phoneFormatted}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .about-grid-responsive {
            grid-template-columns: 1fr 1.15fr !important;
          }
        }
      `}</style>
    </section>
  );
}
