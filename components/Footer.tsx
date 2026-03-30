import Link from 'next/link';
import { MapPin, Clock } from 'lucide-react';

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/dir/?api=1&destination=Communal+Market,+949+Glen+Huntly+Rd,+Caulfield+South+VIC+3162';

const navLinks = [
  { href: '/',        label: 'Home' },
  { href: '/menu',    label: 'Menu' },
  { href: '/find-us', label: 'Find Us' },
];

const hours = [
  { days: 'Monday – Friday', time: '6:30am – 2:00pm' },
  { days: 'Saturday',        time: '8:00am – 2:00pm' },
  { days: 'Sunday',          time: '8:00am – 12:30pm' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: '#2c1810' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p
              className="text-xl mb-3"
              style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#f5f0e8', fontWeight: 700 }}
            >
              Communal Market
            </p>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#c4956a' }}>
              Cafe & Bakery in Caulfield.
              <br />
              Gather. Sip. Shop.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm uppercase tracking-widest mb-4 font-semibold" style={{ color: '#f5f0e8' }}>
              Navigate
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map(l => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                    style={{ color: '#c4956a' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Address */}
          <div>
            <p className="text-sm uppercase tracking-widest mb-4 font-semibold" style={{ color: '#f5f0e8' }}>
              Visit Us
            </p>
            <div className="flex items-start gap-2 mb-3">
              <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: '#c4956a' }} />
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-white transition-colors"
                style={{ color: '#c4956a' }}
              >
                949 Glen Huntly Rd<br />
                Caulfield VIC 3162
              </a>
            </div>
            <div className="flex items-start gap-2">
              <Clock size={14} className="mt-0.5 shrink-0" style={{ color: '#c4956a' }} />
              <div className="text-sm" style={{ color: '#c4956a' }}>
                {hours.map(h => (
                  <div key={h.days} className="flex justify-between gap-4">
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'rgba(196,149,106,0.2)' }}>
          <p className="text-xs" style={{ color: 'rgba(196,149,106,0.6)' }}>
            &copy; {year} Communal Market. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(196,149,106,0.6)' }}>
            Built by <a href="https://webbaura.com" className="hover:text-white transition-colors">Webbaura</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
