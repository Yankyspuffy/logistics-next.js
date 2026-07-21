"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Package } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#070b1a]/95 backdrop-blur-xl shadow-lg border-b border-white/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50 group">
          <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors">
            <Package size={20} className="stroke-[2.5]" />
          </div>
          <span className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-white'}`}>
            BLUESCALE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 bg-white/5 border border-white/10 backdrop-blur-md px-8 py-3 rounded-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#"
            className="text-sm font-bold px-6 py-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Client Portal
          </Link>
          <Link
            href="#"
            className="text-sm font-bold px-6 py-2.5 rounded-full bg-accent text-primary hover:bg-white transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)]"
          >
            Get a Quote <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-white bg-white/10 p-2 rounded-lg backdrop-blur-sm border border-white/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#070b1a] z-40 flex flex-col pt-28 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-xl font-bold">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-accent transition-colors pb-4 border-b border-white/10"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-4 mt-8">
              <Link
                href="#"
                className="text-center font-bold px-6 py-4 rounded-xl border border-white/20 text-white"
              >
                Client Portal
              </Link>
              <Link
                href="#"
                className="text-center font-bold px-6 py-4 rounded-xl bg-accent text-primary"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
