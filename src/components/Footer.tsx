"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Package } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#04060d] text-gray-300 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors">
                <Package size={20} className="stroke-[2.5]" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                BLUESCALE
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A Kenyan transport and logistics company helping shops and brands import smarter from China and move freight across East Africa.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="#industries" className="hover:text-accent transition-colors">Industries</Link></li>
              <li><Link href="#blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-accent transition-colors">Road Freight</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Air & Sea Freight</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Warehousing</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Customs Clearance</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Supply Chain Management</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span className="text-gray-400">Mombasa Road, Next to Diesel Automotive Solutions<br />Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <div className="flex flex-col text-gray-400">
                  <span>0700 454 494</span>
                  <span>0700 454 464</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span className="text-gray-400">info@bluescalelogistics.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Bluescale Logistics Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
