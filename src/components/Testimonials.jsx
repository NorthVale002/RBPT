import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import { Quote } from 'lucide-react';

/**
 * Testimonials Component
 * RENDERED ONLY IF testimonials exist in business.testimonials.
 * If none provided, returns null cleanly without filler.
 */
export default function Testimonials() {
  if (!business.testimonials || business.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="site-section bg-surface">
      <div className="site-container">
        <SectionHeading
          eyebrow="Client Experiences"
          title="Kind words from our valued clients."
          align="center"
        />

        <div
          id="testimonials-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-32)',
          }}
        >
          {business.testimonials.map((item, index) => (
            <div
              key={index}
              id={`testimonial-${index}`}
              style={{
                backgroundColor: 'var(--color-surface-card)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-32)',
                border: '1px solid var(--color-border-subtle)',
                boxShadow: 'var(--shadow-resting)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <Quote size={24} color="var(--color-primary)" style={{ marginBottom: 'var(--space-16)' }} />
                <p
                  style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-ink)',
                    lineHeight: '1.65',
                    fontStyle: 'italic',
                    marginBottom: 'var(--space-24)',
                  }}
                >
                  "{item.quote}"
                </p>
              </div>

              <div>
                <strong
                  style={{
                    display: 'block',
                    fontSize: '1rem',
                    color: 'var(--color-secondary)',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {item.author}
                </strong>
                {item.occasion && (
                  <span
                    style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-ink-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {item.occasion}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
