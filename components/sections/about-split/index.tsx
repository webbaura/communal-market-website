'use client';
import { Animate } from '@/components/ui/Animate';
import { SectionLabel } from '@/components/ui/SectionLabel';
import type { SiteContent } from '@/lib/content';

interface Props { content: SiteContent; brand?: any; }

export default function AboutSplit({ content }: Props) {
  const about  = content.pages?.about;
  const values = about?.values || [];
  const biz    = content.business;

  return (
    <section className="py-24 lg:py-32" style={{ background: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — text */}
          <div>
            <Animate variant="fade-up">
              <SectionLabel>About Us</SectionLabel>
            </Animate>
            <Animate variant="fade-up" delay={0.1}>
              <h2
                className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mt-4 mb-6"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
              >
                {about?.headline || `Who We Are`}
              </h2>
            </Animate>
            <Animate variant="fade-up" delay={0.15}>
              <div
                className="text-base leading-relaxed space-y-4"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {(about?.content || '').split('\n\n').filter(Boolean).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Animate>
          </div>

          {/* Right — values */}
          {values.length > 0 && (
            <div className="space-y-6">
              {values.map((v: { title: string; body: string }, i: number) => (
                <Animate key={i} variant="slide-right" delay={i * 0.1}>
                  <div
                    className="p-6 rounded-2xl border"
                    style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-1.5 h-5 rounded-full"
                        style={{ background: 'var(--color-accent)' }}
                        aria-hidden="true"
                      />
                      <h3
                        className="font-bold text-base"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
                      >
                        {v.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed pl-4" style={{ color: 'var(--color-text-muted)' }}>
                      {v.body}
                    </p>
                  </div>
                </Animate>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
