"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function Hero() {
  // Main hero section - styling iko sawa hapa
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-primary overflow-hidden pt-20">
      {/* Background Image - Real logistics photo */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1920&q=80"
          alt="Nighttime highway background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#0a0f1e]/85" />
        {/* Subtle Grid overlay */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white mt-12 mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6 drop-shadow-xl"
        >
          Moving the Future. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 drop-shadow-none">
            At Bluescale Speed.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-16 drop-shadow-md font-medium"
        >
          Intelligent freight, real-time visibility, and seamless supply chain
          solutions across East Africa and beyond.
        </motion.p>
      </div>

      {/* Action Area: Tracking Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="w-full max-w-3xl px-6 relative z-20 md:-mb-32 -mb-20"
      >
        {/* TODO: Refactor this tracking API logic later. Front-end only for now. */}
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col md:flex-row gap-4 items-center border border-white/20">
          <div className="relative flex-1 w-full">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={24}
            />
            <input
              type="text"
              placeholder="Enter Waybill Tracking ID (e.g. BS-8842)"
              className="w-full pl-12 pr-4 py-4 md:py-5 rounded-xl bg-surface-light border-2 border-transparent focus:border-accent/50 focus:bg-white focus:outline-none transition-all text-primary text-lg font-medium placeholder:text-gray-400"
            />
          </div>
          <button className="w-full md:w-auto px-8 py-4 md:py-5 rounded-xl bg-accent text-primary font-bold text-lg hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] whitespace-nowrap">
            Track Now
          </button>
        </div>
      </motion.div>
    </section>
  );
}
