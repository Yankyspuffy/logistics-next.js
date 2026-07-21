"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Ship } from "lucide-react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only show preloader once per session
    const hasVisited = sessionStorage.getItem("bluescale_visited");
    
    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("bluescale_visited", "true");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#04060d] overflow-hidden"
        >
          {/* Animated Ship */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            <div className="relative mb-8">
              <Ship size={80} className="text-accent relative z-10 drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]" />
              {/* Water ripple effect */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-accent/50 z-0"
              />
            </div>
            
            {/* Branding */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-2"
            >
              <h1 className="text-3xl font-black tracking-tighter text-white">
                BLUESCALE
              </h1>
            </motion.div>
            
            {/* Loading Bar */}
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "200px", opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="h-1 bg-white/10 rounded-full mt-6 overflow-hidden relative"
            >
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-accent rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
