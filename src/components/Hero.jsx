import React from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import { MessageCircle, Calendar, Sparkles, MapPin, Clock } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = business.whatsappNumber ? `https://wa.me/${business.whatsappNumber}` : null;

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-height) + var(--space-48))',
        paddingBottom: 'var(--space-64)',
        overflow: 'hidden',
        color: '#FFFFFF',
      }}
    >
      {/* Real full-bleed background image with fixed aspect & cover */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          backgroundColor: '#1A1715',
        }}
      >
        <img
          src={business.hero.backgroundImage}
          alt={business.name}
          loading="eager"
          referrerPolicy="no-referrer"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
            filter: 'brightness(0.85)',
          }}
        />
        {/* Single restrained dark tonal overlay for maximum typography legibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(20, 17, 15, 0.92) 0%, rgba(26, 23, 21, 0.82) 55%, rgba(26, 23, 21, 0.68) 100%)',
          }}
        />
      </div>

      {/* Hero Content Container */}
      <div
        className="site-container"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '920px',
        }}
      >
        {/* Small Eyebrow (city + business type) */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-8)',
            backgroundColor: 'rgba(197, 168, 128, 0.15)',
            border: '1px solid rgba(197, 168, 128, 0.35)',
            borderRadius: 'var(--radius-sm)',
            padding: '6px 14px',
            marginBottom: 'var(--space-24)',
          }}
        >
          <Sparkles size={14} color="var(--color-primary)" />
          <span
            style={{
              fontSize: 'var(--text-xs)',
              fontWeight: '600',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-primary-light)',
            }}
          >
            {business.hero.eyebrow}
          </span>
        </div>

        {/* Large Confident H1 Headline */}
        <h1
          id="hero-headline"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-3xl)',
            lineHeight: '1.14',
            fontWeight: '500',
            letterSpacing: '-0.025em',
            color: '#FFFFFF',
            marginBottom: 'var(--space-24)',
            textWrap: 'balance',
          }}
        >
          {business.hero.headline}
        </h1>

        {/* One Short Supporting Line */}
        <p
          id="hero-support"
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
            lineHeight: '1.65',
            color: '#E6E0D8',
            marginBottom: 'var(--space-48)',
            maxWidth: '58ch',
          }}
        >
          {business.hero.supportText}
        </p>

        {/* Primary CTA + Secondary CTA */}
        <div
          id="hero-ctas"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 'var(--space-16)',
            marginBottom: 'var(--space-48)',
          }}
        >
          {whatsappUrl && (
            <Button
              id="hero-primary-cta"
              href={whatsappUrl}
              target="_blank"
              variant="primary"
              icon={MessageCircle}
              iconPosition="left"
            >
              {business.mainCta.label}
            </Button>
          )}

          <Button
            id="hero-secondary-cta"
            href={business.secondaryCta.href}
            variant="secondary"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.28)',
              color: '#FFFFFF',
            }}
          >
            {business.secondaryCta.label}
          </Button>

          <Button
            id="hero-call-cta"
            href={`tel:${business.phone}`}
            variant="ghost"
            style={{
              color: '#FAF8F5',
            }}
          >
            {business.phoneCta.label}
          </Button>
        </div>

        {/* One Quiet Trust Line Below */}
        <div
          id="hero-trust-bar"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 'var(--space-24)',
            paddingTop: 'var(--space-24)',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#D4CDC3',
            fontSize: 'var(--text-sm)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={16} color="var(--color-primary)" />
            <span>{business.cityArea}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={16} color="var(--color-primary)" />
            <span>{business.openingHours}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={16} color="var(--color-primary)" />
            <span>Private Booking & Inquiries</span>
          </div>
        </div>
      </div>
    </section>
  );
}
