"use client";

import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-center bg-[#070b1a] overflow-hidden pt-24 pb-32">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=80"
          alt="Cargo ship at port"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Deep, rich gradient overlay for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b1a]/95 via-[#0a1128]/85 to-[#070b1a]/95" />
        {/* Radial glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent opacity-60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white mt-8 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium tracking-wide text-gray-200 uppercase">Kenyan Freight Partner</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8 drop-shadow-2xl"
        >
          Logistics that quietly powers <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-accent">
            the brands you know.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          A Kenyan freight partner built on a simple belief — logistics should be
          straightforward to work with, accountable for every shipment, and
          genuinely curious about your business.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent text-primary font-bold text-lg hover:bg-white transition-all shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_40px_rgba(0,229,255,0.5)] flex items-center justify-center gap-2 group">
            Partner With Us
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            Explore Services
          </button>
        </motion.div>
      </div>

      {/* Tracking Card - Positioned at the bottom overlapping the next section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="w-full max-w-4xl px-6 relative z-20 absolute -bottom-16"
      >
        <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-2 shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/20">
          <div className="bg-white rounded-xl p-4 md:p-6 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Track your shipment (e.g. BS-8842)"
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all text-primary text-lg font-medium placeholder:text-gray-400"
              />
            </div>
            <button className="w-full md:w-auto px-10 py-4 rounded-lg bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all whitespace-nowrap">
              Track Cargo
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
