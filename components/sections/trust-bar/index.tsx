'use client';
import { Animate } from '@/components/ui/Animate';
import type { SiteContent } from '@/lib/content';

interface Props { content: SiteContent; brand?: any; }

export default function TrustBar({ content }: Props) {
  const biz    = content.business as any;
  const rating = (content as any).google_rating || biz.google_rating;
  const reviews = (content as any).review_count || biz.review_count;
  const years  = (content as any).years_in_business;

  const signals = [
    rating   && { icon: '★', value: `${rating}`, label: 'Google Rating' },
    reviews  && { icon: '💬', value: `${reviews}+`, label: 'Customer Reviews' },
    years    && { icon: '◈', value: `${years}yrs`, label: 'In Business' },
    biz.location && { icon: '◉', value: biz.location, label: 'Based In' },
  ].filter(Boolean) as { icon: string; value: string; label: string }[];

  if (!signals.length) return null;

  return (
    <section
      className="py-6 border-b"
      style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Animate variant="fade-in">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {signals.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-lg" style={{ color: 'var(--color-accent)' }} aria-hidden="true">
                  {s.icon}
                </span>
                <div>
                  <div className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>
                    {s.value}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {s.label}
                  </div>
                </div>
                {i < signals.length - 1 && (
                  <div
                    className="hidden sm:block h-6 w-px ml-4"
                    style={{ background: 'var(--color-border)' }}
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </Animate>
      </div>
    </section>
  );
}
