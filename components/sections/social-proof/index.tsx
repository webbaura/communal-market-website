'use client';
import { Animate } from '@/components/ui/Animate';
import { SectionLabel } from '@/components/ui/SectionLabel';
import type { SiteContent } from '@/lib/content';

interface Review { author: string; text: string; rating?: number; }
interface Props { content: SiteContent; brand?: any; }

export default function SocialProof({ content }: Props) {
  const reviews: Review[] = (content as any).reviews || [];
  const rating  = (content as any).google_rating;
  const count   = (content as any).review_count;

  // Build placeholder reviews from content if no real ones
  const displayReviews = reviews.length > 0 ? reviews.slice(0, 3) : [];
  if (!displayReviews.length && !rating) return null;

  return (
    <section className="py-24 lg:py-32" style={{ background: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <Animate variant="fade-up">
            <SectionLabel>What Clients Say</SectionLabel>
          </Animate>
          {rating && (
            <Animate variant="fade-up" delay={0.1}>
              <div className="mt-4 flex items-center justify-center gap-3">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(n => (
                    <span
                      key={n}
                      className="text-2xl"
                      style={{ color: n <= Math.round(rating) ? '#FBBF24' : 'var(--color-border)' }}
                    >★</span>
                  ))}
                </div>
                <span className="text-3xl font-bold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>
                  {rating}
                </span>
                {count && (
                  <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                    ({count} Google reviews)
                  </span>
                )}
              </div>
            </Animate>
          )}
        </div>

        {displayReviews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayReviews.map((r, i) => (
              <Animate key={i} variant="fade-up" delay={i * 0.1}>
                <div
                  className="p-7 rounded-2xl border h-full flex flex-col"
                  style={{
                    background: 'var(--color-surface)',
                    borderColor: 'var(--color-border)',
                  }}
                >
                  <div className="flex gap-0.5 mb-4">
                    {[1,2,3,4,5].map(n => (
                      <span key={n} style={{ color: n <= (r.rating || 5) ? '#FBBF24' : 'var(--color-border)', fontSize: '14px' }}>★</span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed flex-1 mb-5 italic" style={{ color: 'var(--color-text-muted)' }}>
                    "{r.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: 'var(--color-accent)', color: '#fff' }}
                    >
                      {r.author?.[0]?.toUpperCase() || '?'}
                    </div>
                    <span className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
                      {r.author}
                    </span>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
