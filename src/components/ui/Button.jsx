import React from 'react';

/**
 * Reusable Button Component adhering strictly to design tokens
 * - Border-radius: 8px (var(--radius-sm))
 * - Horizontal padding: exactly 2x vertical padding (14px 28px)
 * - Single-line label without text truncation
 * - Gentle lift & color shift transition
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  target,
  rel,
  className = '',
  id,
  fullWidth = false,
  ...rest
}) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--color-primary)',
          color: '#1C1917',
          border: '1px solid #B8976C',
          fontWeight: '600',
        };
      case 'secondary':
        return {
          backgroundColor: 'transparent',
          color: 'var(--color-ink)',
          border: '1px solid var(--color-border)',
          fontWeight: '500',
        };
      case 'dark':
        return {
          backgroundColor: 'var(--color-secondary)',
          color: '#FAF8F5',
          border: '1px solid var(--color-secondary)',
          fontWeight: '500',
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: 'var(--color-ink)',
          border: '1px solid transparent',
          fontWeight: '500',
        };
      case 'gold-outline':
        return {
          backgroundColor: 'rgba(197, 168, 128, 0.08)',
          color: 'var(--color-primary-dark)',
          border: '1px solid var(--color-primary)',
          fontWeight: '600',
        };
      default:
        return {
          backgroundColor: 'var(--color-primary)',
          color: '#1C1917',
          border: '1px solid var(--color-primary)',
          fontWeight: '600',
        };
    }
  };

  const baseStyle = {
    display: fullWidth ? 'flex' : 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-8)',
    padding: '14px 28px', // 2x horizontal padding rule
    borderRadius: 'var(--radius-sm)',
    fontSize: 'var(--text-sm)',
    lineHeight: '1.2',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    textDecoration: 'none',
    boxShadow: variant === 'primary' || variant === 'dark' ? 'var(--shadow-resting)' : 'none',
    transition: 'all var(--transition-fast)',
    width: fullWidth ? '100%' : 'auto',
    letterSpacing: '0.01em',
    ...getVariantStyles(),
  };

  const hoverHandlers = {
    onMouseEnter: (e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      if (variant === 'primary') {
        e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
        e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
      } else if (variant === 'secondary') {
        e.currentTarget.style.backgroundColor = 'var(--color-surface-alt)';
        e.currentTarget.style.borderColor = 'var(--color-ink-muted)';
      } else if (variant === 'dark') {
        e.currentTarget.style.backgroundColor = '#292420';
        e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
      } else if (variant === 'gold-outline') {
        e.currentTarget.style.backgroundColor = 'var(--color-primary)';
        e.currentTarget.style.color = '#1C1917';
      }
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      const orig = getVariantStyles();
      e.currentTarget.style.backgroundColor = orig.backgroundColor;
      e.currentTarget.style.color = orig.color;
      e.currentTarget.style.borderColor = orig.border.split(' ')[2];
      e.currentTarget.style.boxShadow = variant === 'primary' || variant === 'dark' ? 'var(--shadow-resting)' : 'none';
    }
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} strokeWidth={2} style={{ flexShrink: 0 }} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={18} strokeWidth={2} style={{ flexShrink: 0 }} />}
    </>
  );

  if (href) {
    return (
      <a
        id={id}
        href={href}
        style={baseStyle}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        className={className}
        {...hoverHandlers}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      style={baseStyle}
      className={className}
      {...hoverHandlers}
      {...rest}
    >
      {content}
    </button>
  );
}
