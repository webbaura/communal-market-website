'use client';

const hours = [
  { days: 'Monday',    time: '6:30am – 2:00pm' },
  { days: 'Tuesday',   time: '6:30am – 2:00pm' },
  { days: 'Wednesday', time: '6:30am – 2:00pm' },
  { days: 'Thursday',  time: '6:30am – 2:00pm' },
  { days: 'Friday',    time: '6:30am – 2:00pm' },
  { days: 'Saturday',  time: '8:00am – 2:00pm' },
  { days: 'Sunday',    time: '8:00am – 12:30pm' },
];

export default function HoursTable() {
  const day = new Date().getDay();
  const todayIndex = day === 0 ? 6 : day - 1;

  return (
    <div className="space-y-0">
      {hours.map((h, i) => (
        <div
          key={h.days}
          className={`flex justify-between items-center py-3 text-sm ${i < hours.length - 1 ? 'border-b' : ''}`}
          style={{
            borderColor: '#e8d5b0',
            backgroundColor: i === todayIndex ? '#f5f0e8' : 'transparent',
            marginLeft: i === todayIndex ? '-0.75rem' : 0,
            marginRight: i === todayIndex ? '-0.75rem' : 0,
            paddingLeft: i === todayIndex ? '0.75rem' : 0,
            paddingRight: i === todayIndex ? '0.75rem' : 0,
            borderRadius: i === todayIndex ? '0.5rem' : 0,
          }}
        >
          <span className="font-medium" style={{ color: '#2c1810' }}>
            {h.days}
            {i === todayIndex && (
              <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: '#c4956a', color: '#ffffff' }}>
                Today
              </span>
            )}
          </span>
          <span style={{ color: '#8b7355' }}>{h.time}</span>
        </div>
      ))}
    </div>
  );
}
