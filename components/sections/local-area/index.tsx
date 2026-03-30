'use client';
import { Animate } from '@/components/ui/Animate';
import { SectionLabel } from '@/components/ui/SectionLabel';
import type { SiteContent } from '@/lib/content';

interface Props { content: SiteContent; brand?: any; }

export default function LocalArea({ content }: Props) {
  const biz      = content.business;
  const location = biz.address?.city || biz.location || '';
  const areas    = (content as any).service_areas || [];
  const phone    = biz.phone;

  if (!location && !areas.length) return null;

  return (
    <section className="py-24 lg:py-32" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <Animate variant="fade-up">
              <SectionLabel>Service Area</SectionLabel>
            </Animate>
            <Animate variant="fade-up" delay={0.1}>
              <h2
                className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mt-4 mb-6"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
              >
                Proudly serving{' '}
                <span style={{ color: 'var(--color-accent)' }}>{location}</span>
                {' '}and surrounds
              </h2>
            </Animate>
            <Animate variant="fade-up" delay={0.15}>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-text-muted)' }}>
                We're a locally based team — quick to respond, easy to reach, and invested in our community.
                {phone && ` Call us direct on ${phone}.`}
              </p>
            </Animate>

            {areas.length > 0 && (
              <Animate variant="fade-up" delay={0.2}>
                <div>
                  <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>
                    Areas we cover
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {areas.map((area: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-sm font-medium"
                        style={{
                          background: 'color-mix(in srgb, var(--color-accent) 10%, transparent)',
                          color: 'var(--color-accent)',
                          border: '1px solid color-mix(in srgb, var(--color-accent) 20%, transparent)',
                        }}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </Animate>
            )}

            {phone && (
              <Animate variant="fade-up" delay={0.25}>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
                  style={{ background: 'var(--color-accent)', color: '#fff' }}
                >
                  <span aria-hidden="true">📞</span>
                  Call {phone}
                </a>
              </Animate>
            )}
          </div>

          {/* Map placeholder */}
          <Animate variant="fade-in" delay={0.2}>
            <div
              className="aspect-square rounded-2xl border overflow-hidden flex items-center justify-center"
              style={{ background: 'var(--color-background)', borderColor: 'var(--color-border)' }}
            >
              <div className="text-center p-8">
                <div className="text-6xl mb-4" aria-hidden="true">📍</div>
                <div className="font-bold text-xl mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                  {location}
                </div>
                <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  Local, reliable, and here when you need us
                </div>
              </div>
            </div>
          </Animate>

        </div>
      </div>
    </section>
  );
}
