import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import ServiceCard from './ui/ServiceCard.jsx';
import Button from './ui/Button.jsx';
import { Sparkles, MessageCircle } from 'lucide-react';

export default function Services() {
  const whatsappUrl = business.whatsappNumber ? `https://wa.me/${business.whatsappNumber}` : null;

  return (
    <section id="services" className="site-section bg-alt">
      <div className="site-container">
        {/* Section Heading */}
        <SectionHeading
          eyebrow={business.services.eyebrow}
          title={business.services.headline}
          description={business.services.description}
          align="left"
        />

        {/* Elevated Services Grid */}
        <div
          id="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-32)',
            marginBottom: 'var(--space-64)',
          }}
          className="services-grid-responsive"
        >
          {business.services.mainItems.map((item) => (
            <ServiceCard
              key={item.id}
              id={`service-card-${item.id}`}
              title={item.title}
              description={item.description}
              image={item.image}
              tag={item.tag}
            />
          ))}
        </div>

        {/* Secondary & Parlour Care Services List */}
        {business.services.secondaryList && business.services.secondaryList.length > 0 && (
          <div
            id="secondary-services-panel"
            style={{
              backgroundColor: 'var(--color-surface-card)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-32)',
              border: '1px solid var(--color-border-subtle)',
              boxShadow: 'var(--shadow-resting)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-24)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 'var(--space-16)',
                borderBottom: '1px solid var(--color-border-subtle)',
                paddingBottom: 'var(--space-16)',
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-xl)',
                    fontWeight: '500',
                    color: 'var(--color-secondary)',
                    marginBottom: '4px',
                  }}
                >
                  Also Available at Our Parlour
                </h3>
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-ink-muted)',
                    margin: 0,
                  }}
                >
                  Essential personal grooming and traditional celebratory treatments
                </p>
              </div>

              {whatsappUrl && (
                <Button
                  href={whatsappUrl}
                  target="_blank"
                  variant="gold-outline"
                  icon={MessageCircle}
                >
                  Inquire Rates on WhatsApp
                </Button>
              )}
            </div>

            {/* Pills of secondary treatments */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-12)',
              }}
            >
              {business.services.secondaryList.map((service, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'var(--color-surface-alt)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '8px 16px',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-ink)',
                    fontWeight: '500',
                  }}
                >
                  <Sparkles size={14} color="var(--color-primary-dark)" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 900px) {
          .services-grid-responsive {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1100px) {
          .services-grid-responsive {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
