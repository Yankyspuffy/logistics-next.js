export default function StatsMarquee() {
  const stats = [
    "99.9% Uptime",
    "10k+ Active Fleet",
    "Global Reach",
    "Real-Time Tracking",
    "24/7 Monitoring",
    "99.9% Uptime",
    "10k+ Active Fleet",
    "Global Reach",
    "Real-Time Tracking",
    "24/7 Monitoring",
  ];

  return (
    <div className="w-full bg-[#0a0f1e] overflow-hidden flex relative z-10 py-6 border-b border-white/5">
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center">
            <span className="text-white/60 font-semibold text-sm md:text-base mx-8 uppercase tracking-widest">
              {stat}
            </span>
            <span className="text-accent/30 text-xs mx-4">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
