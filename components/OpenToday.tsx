'use client';
import { Clock } from 'lucide-react';

function getTodayHours(): string {
  const day = new Date().getDay();
  if (day === 0) return '8:00am – 12:30pm';
  if (day === 6) return '8:00am – 2:00pm';
  return '6:30am – 2:00pm';
}

export default function OpenToday({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`flex items-center gap-2 ${className || ''}`} style={style}>
      <Clock size={16} style={{ color: '#c4956a' }} />
      <span className="text-sm font-medium" style={{ color: '#e8d5b0' }}>
        Open today {getTodayHours()}
      </span>
    </div>
  );
}
