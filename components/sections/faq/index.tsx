'use client';
import { useState } from 'react';
import { Animate } from '@/components/ui/Animate';
import { SectionLabel } from '@/components/ui/SectionLabel';
import type { SiteContent } from '@/lib/content';

interface FaqItem { question: string; answer: string; }
interface Props { content: SiteContent; brand?: any; }

export default function FaqSection({ content }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  const faqs: FaqItem[] = (content as any).faqs || [];

  if (!faqs.length) return null;

  return (
    <section className="py-24 lg:py-32" style={{ background: 'var(--color-background)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <Animate variant="fade-up">
            <SectionLabel>FAQ</SectionLabel>
          </Animate>
          <Animate variant="fade-up" delay={0.1}>
            <h2
              className="text-4xl sm:text-5xl font-bold tracking-tight mt-4"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
            >
              Common questions
            </h2>
          </Animate>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <Animate key={i} variant="fade-up" delay={i * 0.06}>
              <div
                className="rounded-xl border overflow-hidden"
                style={{ borderColor: open === i ? 'var(--color-accent)' : 'var(--color-border)', transition: 'border-color 0.2s' }}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  style={{ background: 'var(--color-surface)' }}
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span
                    className="font-semibold text-sm pr-4"
                    style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-200"
                    style={{
                      background: 'color-mix(in srgb, var(--color-accent) 15%, transparent)',
                      color: 'var(--color-accent)',
                      transform: open === i ? 'rotate(45deg)' : 'none',
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <div
                    className="px-5 pb-5 text-sm leading-relaxed"
                    style={{ color: 'var(--color-text-muted)', background: 'var(--color-surface)' }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            </Animate>
          ))}
        </div>

      </div>
    </section>
  );
}
