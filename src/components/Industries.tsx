"use client";

import { motion } from "framer-motion";
import { ShoppingBag, HeartPulse, Store, Factory, HardHat, Boxes, MapPin } from "lucide-react";

const industries = [
  {
    title: "E-commerce",
    icon: ShoppingBag,
    description: "Fulfilment, last-mile, and returns management built for direct-to-consumer growth across Kenyan towns."
  },
  {
    title: "Pharmaceutical & Health",
    icon: HeartPulse,
    description: "GDP-compliant cold-chain logistics for pharma distributors, NGOs, and donor health programmes."
  },
  {
    title: "FMCG",
    icon: Store,
    description: "High-velocity replenishment and seasonal peak support for fast-moving consumer goods brands."
  },
  {
    title: "Manufacturing",
    icon: Factory,
    description: "Inbound raw materials, plant-line feeding, and finished-goods distribution for manufacturers."
  },
  {
    title: "Construction & Energy",
    icon: HardHat,
    description: "Project cargo, heavy haulage, and equipment handling for infrastructure and mining projects."
  },
  {
    title: "Retail Distribution",
    icon: Boxes,
    description: "Reliable replenishment and multi-outlet distribution for retailers, supermarkets, and wholesalers."
  }
];

const coverage = ["Nairobi", "Mombasa", "Kisumu", "Eldoret", "Kampala", "Kigali"];

export default function Industries() {
  return (
    <section id="industries" className="w-full py-24 bg-white relative z-10 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-primary font-bold text-sm tracking-widest uppercase mb-4"
            >
              Industries We Serve
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-primary tracking-tight"
            >
              Tuned to the businesses that move Kenya.
            </motion.h2>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-start gap-4 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-surface-light text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-accent transition-colors duration-300">
                <industry.icon size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coverage Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-surface-light rounded-3xl p-8 md:p-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Offices on every major East African corridor.</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our offices and bonded facilities sit on East Africa's busiest trade routes — from Mombasa port to the Malaba and Busia borders — giving you direct access to local expertise wherever your cargo lands.
            </p>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {coverage.map((city, index) => (
                <div key={index} className="flex items-center gap-3 text-primary font-semibold">
                  <MapPin size={18} className="text-accent" />
                  {city}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl relative"
          >
            {/* Using an Unsplash placeholder for the map since we can't load the real one */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80" 
              alt="East Africa Map" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
