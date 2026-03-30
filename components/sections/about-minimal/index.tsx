'use client';
import { Animate } from '@/components/ui/Animate';
import type { SiteContent } from '@/lib/content';

interface Props { content: SiteContent; brand?: any; }

export default function AboutMinimal({ content }: Props) {
  const about = content.pages?.about;

  return (
    <section className="py-24 lg:py-32" style={{ background: 'var(--color-background)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Animate variant="fade-up">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-6 px-4 py-1.5 rounded-full"
            style={{
              background: 'color-mix(in srgb, var(--color-accent) 12%, transparent)',
              color: 'var(--color-accent)',
              border: '1px solid color-mix(in srgb, var(--color-accent) 25%, transparent)',
            }}
          >
            Our Story
          </div>
        </Animate>
        <Animate variant="fade-up" delay={0.1}>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-8"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
          >
            {about?.headline || content.business.name}
          </h2>
        </Animate>
        <Animate variant="fade-up" delay={0.2}>
          <div
            className="text-lg leading-relaxed space-y-5 text-left max-w-3xl mx-auto"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {(about?.content || '').split('\n\n').filter(Boolean).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Animate>
      </div>
    </section>
  );
}
