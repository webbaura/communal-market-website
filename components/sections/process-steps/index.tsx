'use client';
import { Animate } from '@/components/ui/Animate';
import { SectionLabel } from '@/components/ui/SectionLabel';
import type { SiteContent } from '@/lib/content';

interface Step { title: string; description: string; }
interface Props { content: SiteContent; brand?: any; }

const DEFAULT_STEPS: Step[] = [
  { title: 'Get in Touch',    description: 'Tell us about your project — we respond within 24 hours.' },
  { title: 'We Assess',       description: 'We review your requirements and provide a clear scope and quote.' },
  { title: 'We Deliver',      description: 'Skilled, on-time, and done right — with full communication throughout.' },
  { title: 'You\'re Sorted',  description: 'Quality guaranteed. We stand behind every job we complete.' },
];

export default function ProcessSteps({ content }: Props) {
  const steps: Step[] = (content as any).process_steps || DEFAULT_STEPS;

  return (
    <section className="py-24 lg:py-32" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl mb-16">
          <Animate variant="fade-up">
            <SectionLabel>How We Work</SectionLabel>
          </Animate>
          <Animate variant="fade-up" delay={0.1}>
            <h2
              className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mt-4"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
            >
              Simple process, <br />
              <span style={{ color: 'var(--color-accent)' }}>great results</span>
            </h2>
          </Animate>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute top-8 left-8 right-8 h-px hidden lg:block"
            style={{ background: 'linear-gradient(to right, var(--color-accent), var(--color-border))' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <Animate key={i} variant="fade-up" delay={i * 0.12}>
                <div className="relative">
                  {/* Step number */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black mb-6 relative z-10"
                    style={{
                      background: i === 0
                        ? 'var(--color-accent)'
                        : 'color-mix(in srgb, var(--color-accent) 10%, transparent)',
                      color: i === 0 ? '#fff' : 'var(--color-accent)',
                      border: i !== 0 ? '1px solid color-mix(in srgb, var(--color-accent) 30%, transparent)' : 'none',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    {step.description}
                  </p>
                </div>
              </Animate>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
