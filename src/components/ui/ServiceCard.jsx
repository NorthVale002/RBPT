import React, { useState } from 'react';

/**
 * Elevated Service Card Component
 * - 16px outer radius (var(--radius-lg))
 * - Image filling the top with fixed aspect ratio (16:10)
 * - Tonal hover zoom with smooth transition
 * - Title, subtle tag pill, and concise description
 * - Two shadow levels (resting -> hover)
 */
export default function ServiceCard({
  title,
  description,
  image,
  tag,
  id,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      id={id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: 'var(--color-surface-card)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1px solid var(--color-border-subtle)',
        boxShadow: isHovered ? 'var(--shadow-hover)' : 'var(--shadow-resting)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 240ms cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* Image container with fixed aspect ratio */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 10',
          overflow: 'hidden',
          backgroundColor: 'var(--color-surface-alt)',
        }}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          referrerPolicy="no-referrer"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
        {/* Subtle warm tonal gradient at the base of the image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(26, 23, 21, 0.35) 0%, transparent 40%)',
            pointerEvents: 'none',
          }}
        />
        {tag && (
          <span
            style={{
              position: 'absolute',
              top: 'var(--space-16)',
              left: 'var(--space-16)',
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(4px)',
              color: 'var(--color-secondary)',
              fontSize: 'var(--text-xs)',
              fontWeight: '600',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}
          >
            {tag}
          </span>
        )}
      </div>

      {/* Content block with generous padding */}
      <div
        style={{
          padding: 'var(--space-32)',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xl)',
              color: 'var(--color-secondary)',
              marginBottom: 'var(--space-16)',
              fontWeight: '500',
              lineHeight: '1.25',
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: 'var(--text-base)',
              color: 'var(--color-ink-muted)',
              lineHeight: '1.6',
              margin: 0,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
