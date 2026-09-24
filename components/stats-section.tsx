// export function StatsSection() {
//   return (
//     <section className="bg-[#2A2B66] py-16 md:py-24">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-white/10">
//           <div className="flex flex-col items-center justify-center space-y-2">
//             <span className="text-4xl md:text-5xl font-serif text-slate-200">100K<span className="text-slate-400 font-sans font-light">+</span></span>
//             <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Patients Managed</span>
//           </div>
//           <div className="flex flex-col items-center justify-center space-y-2">
//             <span className="text-4xl md:text-5xl font-serif text-slate-200">500<span className="text-slate-400 font-sans font-light">+</span></span>
//             <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Medical Centers</span>
//           </div>
//           <div className="flex flex-col items-center justify-center space-y-2">
//             <span className="text-4xl md:text-5xl font-serif text-slate-200">1.2M</span>
//             <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Daily Syncs</span>
//           </div>
//           <div className="flex flex-col items-center justify-center space-y-2">
//             <span className="text-4xl md:text-5xl font-serif text-slate-200">24/7</span>
//             <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Expert Support</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Building2, Activity, HeadphonesIcon } from "lucide-react";

const stats = [
  {
    value: 100,
    suffix: "K+",
    label: "Patients Managed",
    icon: Users,
    color: "from-sky-400 to-blue-500",
  },
  {
    value: 500,
    suffix: "+",
    label: "Medical Centers",
    icon: Building2,
    color: "from-emerald-400 to-teal-500",
  },
  {
    value: 1.2,
    suffix: "M",
    label: "Daily Syncs",
    icon: Activity,
    color: "from-amber-400 to-orange-500",
    isDecimal: true,
  },
  {
    value: 24,
    suffix: "/7",
    label: "Expert Support",
    icon: HeadphonesIcon,
    color: "from-rose-400 to-pink-500",
  },
];

function AnimatedCounter({
  target,
  suffix,
  isDecimal,
  isVisible,
}: {
  target: number;
  suffix: string;
  isDecimal?: boolean;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = start + (target - start) * easeOut;

      if (isDecimal) {
        setCount(parseFloat(current.toFixed(1)));
      } else {
        setCount(Math.floor(current));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, isDecimal]);

  return (
    <span className="tabular-nums">
      {isDecimal ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#1A1053] py-8 md:py-12 lg:py-16"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-white/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-white/[0.02] rounded-full blur-[80px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-5 md:px-8 lg:px-12 max-w-7xl">
        {/* Section header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-5 py-2 text-sm font-semibold text-white/80 mb-6 backdrop-blur-sm">
            <TrendingUp className="h-4 w-4" />
            Trusted by Healthcare Leaders
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`group relative flex flex-col items-center text-center p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm transition-all duration-700 ease-out hover:bg-white/[0.06] hover:border-white/[0.12] hover:-translate-y-1 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                {/* Top gradient line */}
                <div
                  className={`absolute top-0 left-8 right-8 h-[2px] rounded-b-full bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} p-0.5`}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-[#1A1053]">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Number */}
                <div className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight mb-3">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    isDecimal={stat.isDecimal}
                    isVisible={isVisible}
                  />
                </div>

                {/* Label */}
                <span className="text-xs md:text-sm font-semibold tracking-[0.15em] text-white/50 uppercase">
                  {stat.label}
                </span>

                {/* Decorative corner glow */}
                <div
                  className={`absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br ${stat.color} opacity-0 blur-3xl group-hover:opacity-20 transition-opacity duration-700`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}