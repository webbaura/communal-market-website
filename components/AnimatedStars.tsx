'use client';

import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

interface AnimatedStarsProps {
  count?: number;
  size?: number;
  color?: string;
  delayMs?: number;
}

export default function AnimatedStars({
  count = 5,
  size = 16,
  color = '#c4956a',
  delayMs = 120
}: AnimatedStarsProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1)' : 'scale(0.5)',
            transition: `opacity 400ms ease-out, transform 400ms ease-out`,
            transitionDelay: `${i * delayMs}ms`,
          }}
        >
          <Star size={size} fill={color} color={color} />
        </span>
      ))}
    </div>
  );
}
