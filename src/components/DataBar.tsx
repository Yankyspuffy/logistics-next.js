"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ from = 0, to, duration = 2, suffix = "" }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            // Display decimal if target is decimal
            const displayValue = to % 1 !== 0 ? value.toFixed(1) : Math.round(value);
            nodeRef.current.textContent = `${displayValue}${suffix}`;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, suffix, isInView]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

const stats = [
  { value: 99.8, suffix: "%", label: "On-Time Delivery" },
  { value: 50, suffix: "+", label: "Active Fleet Vehicles" },
  { value: 24, suffix: "/7", label: "AI-Powered Dispatch" },
];

export default function DataBar() {
  return (
    <section className="w-full bg-primary text-white py-20 md:py-28 border-y border-white/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
               {/* Hover Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-5xl mt-2 md:text-6xl font-black text-accent mb-4 drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]"
              >
                <Counter to={stat.value} suffix={stat.suffix} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                className="text-lg md:text-xl font-medium text-gray-300 tracking-wide"
              >
                {stat.label}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
