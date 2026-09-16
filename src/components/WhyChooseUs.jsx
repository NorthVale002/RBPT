import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="site-section bg-alt">
      <div className="site-container">
        <SectionHeading
          eyebrow={business.whyChooseUs.eyebrow}
          title={business.whyChooseUs.headline}
          align="center"
        />

        <div
          id="why-choose-us-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'var(--space-32)',
          }}
          className="why-us-grid-responsive"
        >
          {business.whyChooseUs.items.map((item, index) => (
            <div
              key={index}
              id={`why-us-item-${index + 1}`}
              style={{
                backgroundColor: 'var(--color-surface-card)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-32)',
                border: '1px solid var(--color-border-subtle)',
                boxShadow: 'var(--shadow-resting)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-resting)';
              }}
            >
              {/* Sequential numeral marker */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: '600',
                  color: 'var(--color-primary)',
                  lineHeight: '1',
                  marginBottom: 'var(--space-16)',
                }}
              >
                {item.number}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  color: 'var(--color-secondary)',
                  marginBottom: 'var(--space-12)',
                  lineHeight: '1.3',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-ink-muted)',
                  lineHeight: '1.6',
                  margin: 0,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .why-us-grid-responsive {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
