'use client';
import { Animate } from '@/components/ui/Animate';
import type { SiteContent } from '@/lib/content';

interface Props { content: SiteContent; brand?: any; }

export default function StatsBar({ content }: Props) {
  const stats = (content as any).stats || content.pages?.home?.stats || [];
  if (!stats.length) return null;

  return (
    <section
      className="py-20"
      style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.slice(0, 4).map((stat: { value: string; label: string }, i: number) => (
            <Animate key={i} variant="fade-up" delay={i * 0.1}>
              <div className="text-center">
                <div
                  className="text-4xl lg:text-5xl font-black tracking-tight mb-2"
                  style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-heading)' }}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-medium uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
                  {stat.label}
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
