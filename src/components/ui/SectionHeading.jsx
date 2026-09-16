import React from 'react';

/**
 * Standardized Section Heading Component
 * - Eyebrow label in accent gold, uppercase, letter-spacing 0.12em
 * - Balanced H2 heading using Fraunces display serif
 * - Optional descriptive paragraph constrained to 65ch
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left', // 'left' or 'center'
  className = '',
  id,
}) {
  const isCenter = align === 'center';

  return (
    <div
      id={id}
      className={`section-header ${isCenter ? 'centered' : ''} ${className}`.trim()}
      style={{
        textAlign: isCenter ? 'center' : 'left',
        maxWidth: isCenter ? '800px' : '720px',
        marginLeft: isCenter ? 'auto' : 0,
        marginRight: isCenter ? 'auto' : 0,
        marginBottom: 'var(--space-48)',
      }}
    >
      {eyebrow && (
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
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          className="section-title"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-2xl)',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            color: 'var(--color-secondary)',
            marginBottom: description ? 'var(--space-16)' : '0',
            fontWeight: '500',
          }}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className="section-description"
          style={{
            fontSize: 'var(--text-base)',
            color: 'var(--color-ink-muted)',
            lineHeight: '1.65',
            maxWidth: '65ch',
            marginLeft: isCenter ? 'auto' : 0,
            marginRight: isCenter ? 'auto' : 0,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
