"use client";

import { motion } from "framer-motion";
import { Search, ArrowRight, ShieldCheck, Clock, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=80"
          alt="Cargo ship at port"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
        />
        {/* Deep gradient overlay for premium feel and text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#04060d]/90 via-[#04060d]/80 to-[#04060d]/95" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Glow effect */}
        <div className="absolute left-0 right-0 top-0 m-auto h-[310px] w-[310px] rounded-full bg-accent opacity-20 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-gray-300">Fast-moving stock, on the next flight out of China.</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 max-w-5xl leading-[1.1]"
        >
          Stock up from China, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
            the easy way.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
        >
          Smart import solutions for Kenyan shops and online sellers. We clear your cargo at the port and deliver countrywide — Nairobi, Eldoret, Kisumu, and Mombasa.
        </motion.p>

        {/* Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-2xl flex flex-col sm:flex-row items-center gap-4 bg-white/5 p-2 rounded-2xl md:rounded-full border border-white/10 backdrop-blur-md shadow-2xl"
        >
          <div className="flex items-center w-full bg-white/5 rounded-xl md:rounded-full px-4 py-3">
            <Search className="text-gray-400 mr-3 shrink-0" size={20} />
            <input 
              type="text" 
              placeholder="Track your shipment (e.g. BLU-12345)" 
              className="bg-transparent border-none outline-none text-white w-full placeholder:text-gray-500"
            />
          </div>
          <button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-[#070b1a] font-bold px-8 py-3.5 rounded-xl md:rounded-full transition-all flex items-center justify-center gap-2 shrink-0">
            Track Cargo
            <ArrowRight size={18} />
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 items-center"
        >
          <div className="flex items-center justify-center gap-3 text-gray-400">
            <ShieldCheck className="text-accent" />
            <span className="text-sm font-medium">KRA Licensed</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-400">
            <Clock className="text-accent" />
            <span className="text-sm font-medium">97% On-Time</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-400">
            <MapPin className="text-accent" />
            <span className="text-sm font-medium">Countrywide Delivery</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
