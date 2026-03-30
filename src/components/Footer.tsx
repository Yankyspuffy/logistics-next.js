"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#070b1a] text-gray-300 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-1 mb-6">
              <span className="text-2xl font-black tracking-tighter text-white">
                BLUESCALE
              </span>
              <span className="w-2 h-2 rounded-full bg-accent mt-2" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Next-generation logistics and intelligent freight forwarding across
              East Africa and the globe.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Sustainability</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Press</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span className="text-gray-400">Bluescale Tower, Upper Hill<br />Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span className="text-gray-400">+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span className="text-gray-400">dispatch@bluescale.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Integration Partners Row */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Bluescale Logistics. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 opacity-40 grayscale">
            <span className="text-sm font-bold tracking-widest uppercase">Stripe</span>
            <span className="text-sm font-bold tracking-widest uppercase">FedEx API</span>
            <span className="text-sm font-bold tracking-widest uppercase">Maersk</span>
            <span className="text-sm font-bold tracking-widest uppercase">AWS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
