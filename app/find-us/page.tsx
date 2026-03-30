import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Clock, Navigation } from 'lucide-react';
import HoursTable from '@/components/HoursTable';

export const metadata: Metadata = {
  title: 'Find Us',
  description: 'Visit Communal Market at 949 Glen Huntly Rd, Caulfield VIC 3162. Open Mon–Fri 6:30am–2pm, Sat 8am–2pm, Sun 8am–12:30pm.',
};

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/dir/?api=1&destination=Communal+Market,+949+Glen+Huntly+Rd,+Caulfield+South+VIC+3162';
const GOOGLE_MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.8!2d145.023!3d-37.882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCommunal+Market!5e0!3m2!1sen!2sau!4v1';


export default function FindUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest mb-3 font-medium" style={{ color: '#c4956a' }}>
            Location & Hours
          </p>
          <h1
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#2c1810', fontWeight: 700 }}
          >
            Find us
          </h1>
          <p className="text-lg max-w-xl" style={{ color: '#8b7355' }}>
            We&apos;re on Glen Huntly Road in Caulfield — a short walk from Caulfield station.
          </p>
        </div>
      </section>

      {/* Map Embed */}
      <section style={{ backgroundColor: '#f5f0e8' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden" style={{ backgroundColor: '#e8d5b0', aspectRatio: '21/9' }}>
            <iframe
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Communal Market location on Google Maps"
            />
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Address & Directions */}
            <div>
              <div className="p-8 rounded-2xl" style={{ backgroundColor: '#ffffff' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e8d5b0' }}>
                    <MapPin size={18} style={{ color: '#2c1810' }} />
                  </div>
                  <h2
                    className="text-xl"
                    style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#2c1810', fontWeight: 700 }}
                  >
                    Address
                  </h2>
                </div>

                <p className="text-base font-semibold mb-1" style={{ color: '#2c1810' }}>
                  Communal Market
                </p>
                <p className="text-sm mb-1" style={{ color: '#8b7355' }}>
                  949 Glen Huntly Rd
                </p>
                <p className="text-sm mb-6" style={{ color: '#8b7355' }}>
                  Caulfield VIC 3162
                </p>

                <div className="flex items-start gap-2 mb-6 p-3 rounded-lg" style={{ backgroundColor: '#f5f0e8' }}>
                  <Navigation size={14} className="mt-0.5 shrink-0" style={{ color: '#c4956a' }} />
                  <p className="text-sm" style={{ color: '#8b7355' }}>
                    A short walk from Caulfield station. Street parking available on Glen Huntly Rd.
                  </p>
                </div>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90 w-full justify-center"
                  style={{ backgroundColor: '#2c1810' }}
                >
                  <MapPin size={16} />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Right: Opening Hours */}
            <div>
              <div className="p-8 rounded-2xl" style={{ backgroundColor: '#ffffff' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e8d5b0' }}>
                    <Clock size={18} style={{ color: '#2c1810' }} />
                  </div>
                  <h2
                    className="text-xl"
                    style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#2c1810', fontWeight: 700 }}
                  >
                    Opening Hours
                  </h2>
                </div>

                <HoursTable />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo of the storefront */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/photo-00.jpg"
                alt="Communal Market storefront on Glen Huntly Road"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/photo-03.jpg"
                alt="Communal Market interior with pastry display and globe chandelier"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <p className="text-center text-sm mt-6" style={{ color: '#8b7355' }}>
            Look for the colourful mural on Glen Huntly Road — you can&apos;t miss us.
          </p>
        </div>
      </section>
    </>
  );
}
