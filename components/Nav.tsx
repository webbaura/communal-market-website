'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

const links = [
  { href: '/',         label: 'Home' },
  { href: '/menu',     label: 'Menu' },
  { href: '/find-us',  label: 'Find Us' },
];

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/dir/?api=1&destination=Communal+Market,+949+Glen+Huntly+Rd,+Caulfield+South+VIC+3162';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(245, 240, 232, 0.97)' : 'rgba(245, 240, 232, 0.92)',
        boxShadow: scrolled ? '0 1px 0 rgba(44,24,16,0.08)' : '0 1px 0 rgba(44,24,16,0.04)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="text-lg tracking-tight hover:opacity-80 transition-opacity"
          style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#2c1810', fontWeight: 700 }}
        >
          Communal Market
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: '#8b7355' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#2c1810')}
                onMouseLeave={e => (e.currentTarget.style.color = '#8b7355')}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#2c1810' }}
          >
            <MapPin size={14} />
            Get Directions
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2"
          style={{ color: '#2c1810' }}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-0.5 transition-all duration-200 ${open ? 'rotate-45 translate-y-1.5' : ''}`} style={{ backgroundColor: '#2c1810' }} />
            <span className={`block h-0.5 transition-all duration-200 ${open ? 'opacity-0' : ''}`} style={{ backgroundColor: '#2c1810' }} />
            <span className={`block h-0.5 transition-all duration-200 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} style={{ backgroundColor: '#2c1810' }} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? '400px' : '0',
          backgroundColor: 'rgba(245, 240, 232, 0.98)',
        }}
      >
        <ul className="px-6 pb-6 pt-2 flex flex-col gap-4">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium transition-colors block py-1"
                style={{ color: '#2c1810' }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold hover:opacity-90 transition-opacity mt-2"
              style={{ backgroundColor: '#2c1810' }}
            >
              <MapPin size={14} />
              Get Directions
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
