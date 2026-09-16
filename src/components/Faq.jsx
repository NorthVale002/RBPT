import React, { useState } from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  if (!business.faq || !business.faq.items || business.faq.items.length === 0) {
    return null;
  }

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="site-section bg-alt">
      <div className="site-container" style={{ maxWidth: '840px' }}>
        <SectionHeading
          eyebrow={business.faq.eyebrow}
          title={business.faq.headline}
          align="center"
        />

        <div
          id="faq-accordion-list"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-16)',
          }}
        >
          {business.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                style={{
                  backgroundColor: 'var(--color-surface-card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  transition: 'border-color var(--transition-fast)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: 'var(--space-24) var(--space-32)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 'var(--space-16)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--color-secondary)',
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      fontWeight: '500',
                      lineHeight: '1.35',
                    }}
                  >
                    {item.question}
                  </span>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform var(--transition-fast)',
                      color: 'var(--color-primary-dark)',
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 var(--space-32) var(--space-24) var(--space-32)',
                    }}
                  >
                    <p
                      style={{
                        fontSize: 'var(--text-base)',
                        color: 'var(--color-ink-muted)',
                        lineHeight: '1.65',
                        margin: 0,
                        borderTop: '1px solid var(--color-border-subtle)',
                        paddingTop: 'var(--space-16)',
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
