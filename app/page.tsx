import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Clock, Coffee, CakeSlice, Sandwich, ArrowRight } from 'lucide-react';
import OpenToday from '@/components/OpenToday';
import AnimatedStars from '@/components/AnimatedStars';

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/dir/?api=1&destination=Communal+Market,+949+Glen+Huntly+Rd,+Caulfield+South+VIC+3162';

const hours = [
  { days: 'Monday – Friday', time: '6:30am – 2:00pm' },
  { days: 'Saturday',        time: '8:00am – 2:00pm' },
  { days: 'Sunday',          time: '8:00am – 12:30pm' },
];

const highlights = [
  {
    icon: Coffee,
    title: 'Specialty Coffee',
    description: 'Expertly crafted lattes, long blacks, and iced coffee — brewed to perfection every morning.',
    image: '/assets/images/photo-01.jpg',
    alt: 'Latte art heart in a branded Communal Market cup',
  },
  {
    icon: CakeSlice,
    title: 'Freshly Baked Daily',
    description: 'Our famous cinnamon scrolls with cream cheese frosting, pistachio cookies, and pastries baked fresh each day.',
    image: '/assets/images/photo-09.jpg',
    alt: 'Fresh pastries and baked goods displayed on wooden boards',
  },
  {
    icon: Sandwich,
    title: 'Light Food',
    description: 'Gourmet sandwiches on focaccia, fresh salads, and savoury pastries — made for a proper lunch.',
    image: '/assets/images/photo-04.jpg',
    alt: 'Gourmet focaccia sandwich with rocket and roasted vegetables',
  },
];

const reviews = [
  {
    author: 'Julia Gomes Ribeiro',
    text: 'This has become my favourite coffee spot in the area! The coffee is incredible, the cookie is delicious, and don\'t even get me started on the cinnamon scroll — absolutely divine.',
  },
  {
    author: 'Mike G',
    text: 'A bright and welcoming cafe. The coffee is amazing and definitely worth a visit for this alone. Additionally they make lovely pastries and food.',
  },
  {
    author: 'Steven Jeconiah',
    text: 'It\'s easy to see why this spot has a five-star rating. The cinnamon scroll topped with cream cheese frosting is next level.',
  },
];

const galleryImages = [
  { src: '/assets/images/photo-03.jpg', alt: 'Communal Market interior with globe chandelier and pastry display' },
  { src: '/assets/images/photo-06.jpg', alt: 'Pistachio chocolate chip cookies on a glass stand' },
  { src: '/assets/images/photo-07.jpg', alt: 'Iced coffee with Humbler coffee beans' },
  { src: '/assets/images/photo-08.jpg', alt: 'Display case filled with sandwiches, pastries, and drinks' },
  { src: '/assets/images/photo-02.jpg', alt: 'Retail shelf with local products' },
  { src: '/assets/images/photo-05.jpg', alt: 'Communal Market window view from the street' },
];

function RatingBadge() {
  return (
    <Link
      href="/find-us"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full transition-shadow hover:shadow-lg"
      style={{ backgroundColor: 'rgba(255,255,255,0.95)', boxShadow: '0 2px 12px rgba(44,24,16,0.1)' }}
    >
      <AnimatedStars count={5} size={16} color="#c4956a" delayMs={100} />
      <span className="text-sm font-semibold" style={{ color: '#2c1810' }}>5.0</span>
      <span className="text-sm" style={{ color: '#8b7355' }}>· 118 reviews</span>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-end">
        <Image
          src="/assets/images/photo-00.jpg"
          alt="Communal Market storefront on Glen Huntly Road, Caulfield — white building with colourful mural and outdoor seating"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(44,24,16,0.85) 0%, rgba(44,24,16,0.3) 40%, rgba(44,24,16,0.05) 100%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full">
          <div className="max-w-2xl">
            <RatingBadge />
            <h1
              className="text-5xl md:text-7xl mt-6 mb-4"
              style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#f5f0e8', fontWeight: 700, lineHeight: 1.1 }}
            >
              Communal Market
            </h1>
            <p className="text-lg md:text-xl mb-2" style={{ color: '#e8d5b0' }}>
              Cafe & Bakery · Caulfield
            </p>
            <p className="text-base md:text-lg mb-8 max-w-lg" style={{ color: 'rgba(232,213,176,0.8)' }}>
              Your neighbourhood spot for specialty coffee, freshly baked pastries, and light food — made with care, served with warmth.
            </p>

            {/* Open today badge */}
            <OpenToday className="mb-6" />

            <div className="flex flex-wrap gap-4">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#f5f0e8', color: '#2c1810' }}
              >
                <MapPin size={16} />
                Get Directions
              </a>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#f5f0e8', border: '1px solid rgba(232,213,176,0.3)' }}
              >
                See Our Menu
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ────────────────────────────────────────────────────── */}
      <section className="py-6 border-b" style={{ backgroundColor: '#ffffff', borderColor: '#e8d5b0' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm" style={{ color: '#8b7355' }}>
          <span className="flex items-center gap-1.5">
            <Star size={14} fill="#c4956a" color="#c4956a" /> 5.0 on Google
          </span>
          <span className="hidden sm:inline" style={{ color: '#e8d5b0' }}>|</span>
          <span>118 Reviews</span>
          <span className="hidden sm:inline" style={{ color: '#e8d5b0' }}>|</span>
          <span>Open 7 Days</span>
          <span className="hidden sm:inline" style={{ color: '#e8d5b0' }}>|</span>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} /> Caulfield, VIC
          </span>
        </div>
      </section>

      {/* ── What We're Known For ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest mb-3 font-medium" style={{ color: '#c4956a' }}>
              What We Serve
            </p>
            <h2
              className="text-3xl md:text-4xl"
              style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#2c1810', fontWeight: 700 }}
            >
              Made fresh, served with warmth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e8d5b0' }}>
                      <Icon size={18} style={{ color: '#2c1810' }} />
                    </div>
                    <h3
                      className="text-lg"
                      style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#2c1810', fontWeight: 600 }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#8b7355' }}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: '#2c1810' }}
            >
              View full menu
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Customer Reviews ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest mb-3 font-medium" style={{ color: '#c4956a' }}>
              What Our Customers Say
            </p>
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#2c1810', fontWeight: 700 }}
            >
              Perfect 5-star rating
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="#c4956a" color="#c4956a" />
              ))}
            </div>
            <p className="text-sm" style={{ color: '#8b7355' }}>
              Based on 118 Google reviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.author}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: '#f5f0e8' }}
              >
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#c4956a" color="#c4956a" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#2c1810' }}>
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-sm font-semibold" style={{ color: '#2c1810' }}>
                  {review.author}
                </p>
                <p className="text-xs" style={{ color: '#8b7355' }}>Google Review</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest mb-3 font-medium" style={{ color: '#c4956a' }}>
              Gallery
            </p>
            <h2
              className="text-3xl md:text-4xl"
              style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#2c1810', fontWeight: 700 }}
            >
              A look inside
            </h2>
          </div>

          <div style={{ columns: '2', columnGap: '10px' }} className="md:[columns:3]">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                style={{ breakInside: 'avoid', marginBottom: '10px', borderRadius: '14px', overflow: 'hidden', display: 'block' }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto block"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visit Us CTA ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest mb-3 font-medium" style={{ color: '#c4956a' }}>
                Visit Us
              </p>
              <h2
                className="text-3xl md:text-4xl mb-6"
                style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#2c1810', fontWeight: 700 }}
              >
                Come say hello
              </h2>

              <div className="flex items-start gap-3 mb-6">
                <MapPin size={18} className="mt-0.5 shrink-0" style={{ color: '#c4956a' }} />
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#2c1810' }}>
                    949 Glen Huntly Rd, Caulfield VIC 3162
                  </p>
                  <p className="text-sm" style={{ color: '#8b7355' }}>
                    A short walk from Caulfield station
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-8">
                <Clock size={18} className="mt-0.5 shrink-0" style={{ color: '#c4956a' }} />
                <div className="text-sm" style={{ color: '#2c1810' }}>
                  {hours.map(h => (
                    <div key={h.days} className="flex gap-6 py-1">
                      <span className="w-40 font-medium">{h.days}</span>
                      <span style={{ color: '#8b7355' }}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

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
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/photo-05.jpg"
                alt="Communal Market window view from the street"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
