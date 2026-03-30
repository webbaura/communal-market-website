import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Coffee, CakeSlice, Sandwich, GlassWater, MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Specialty coffee, cinnamon scrolls, pastries, gourmet sandwiches and light food at Communal Market, Caulfield.',
};

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/dir/?api=1&destination=Communal+Market,+949+Glen+Huntly+Rd,+Caulfield+South+VIC+3162';

const categories = [
  {
    icon: Coffee,
    title: 'Coffee',
    description: 'Specialty coffee brewed with care every morning. From silky lattes and flat whites to long blacks and iced coffee — each cup is crafted by hand using premium roasted beans.',
    items: ['Espresso', 'Flat White', 'Latte', 'Cappuccino', 'Long Black', 'Iced Coffee', 'Cold Brew'],
    image: '/assets/images/photo-01.jpg',
    alt: 'Latte art heart in a branded Communal Market red cup',
  },
  {
    icon: CakeSlice,
    title: 'Bakery',
    description: 'Everything is baked fresh daily. Our cinnamon scrolls with cream cheese frosting have become a neighbourhood legend, alongside pistachio cookies, croissants, and seasonal pastries.',
    items: ['Cinnamon Scrolls', 'Pistachio Cookies', 'Croissants', 'Pastries', 'Muffins', 'Slices'],
    image: '/assets/images/photo-09.jpg',
    alt: 'Fresh pastries and baked goods displayed on wooden boards at the counter',
  },
  {
    icon: Sandwich,
    title: 'Light Food',
    description: 'Gourmet sandwiches on house-baked focaccia, fresh salads, savoury pastries, and daily specials. Everything is made in-house with quality ingredients.',
    items: ['Focaccia Sandwiches', 'Fresh Salads', 'Savoury Pastries', 'Toasties', 'Daily Specials'],
    image: '/assets/images/photo-04.jpg',
    alt: 'Gourmet focaccia sandwich with rocket and roasted vegetables on a wooden board',
  },
  {
    icon: GlassWater,
    title: 'Drinks & More',
    description: 'Cold drinks, fresh juices, and a curated selection of retail goods from local makers. Take a piece of Communal Market home with you.',
    items: ['Fresh Juice', 'Iced Drinks', 'Soft Drinks', 'Retail Coffee Beans', 'Local Products'],
    image: '/assets/images/photo-07.jpg',
    alt: 'Iced coffee alongside a bag of Humbler coffee beans',
  },
];

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest mb-3 font-medium" style={{ color: '#c4956a' }}>
            Our Menu
          </p>
          <h1
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#2c1810', fontWeight: 700 }}
          >
            What we serve
          </h1>
          <p className="text-lg max-w-xl" style={{ color: '#8b7355' }}>
            From the first coffee of the morning to a late lunch — everything is made fresh daily with quality ingredients and a lot of care.
          </p>
        </div>
      </section>

      {/* Display case hero image */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 -mt-4">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
            <Image
              src="/assets/images/photo-08.jpg"
              alt="Communal Market display case filled with sandwiches, pastries, salads, and drinks"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              const isReversed = index % 2 === 1;
              return (
                <div
                  key={cat.title}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isReversed ? 'md:[direction:rtl]' : ''}`}
                >
                  <div className={isReversed ? 'md:[direction:ltr]' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#e8d5b0' }}
                      >
                        <Icon size={20} style={{ color: '#2c1810' }} />
                      </div>
                      <h2
                        className="text-2xl md:text-3xl"
                        style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#2c1810', fontWeight: 700 }}
                      >
                        {cat.title}
                      </h2>
                    </div>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: '#8b7355' }}>
                      {cat.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map(item => (
                        <span
                          key={item}
                          className="px-3 py-1.5 rounded-full text-xs font-medium"
                          style={{ backgroundColor: '#ffffff', color: '#2c1810', border: '1px solid #e8d5b0' }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${isReversed ? 'md:[direction:ltr]' : ''}`}>
                    <Image
                      src={cat.image}
                      alt={cat.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl mb-4"
            style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#2c1810', fontWeight: 700 }}
          >
            Come try it for yourself
          </h2>
          <p className="text-sm mb-8" style={{ color: '#8b7355' }}>
            We&apos;re at 949 Glen Huntly Rd, Caulfield — open 7 days a week.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#2c1810' }}
            >
              <MapPin size={16} />
              Get Directions
            </a>
            <Link
              href="/find-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ color: '#2c1810', border: '1px solid #e8d5b0' }}
            >
              Hours & Location
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
