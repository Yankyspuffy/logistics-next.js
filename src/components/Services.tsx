"use client";

import { motion } from "framer-motion";
import { Truck, MapPin, Database } from "lucide-react";

const services = [
  {
    title: "The Smart Layer",
    icon: Database,
    description: "AI-driven analytics and predictive routing for complete supply chain visibility.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Active Fleet",
    icon: Truck,
    description: "10,000+ modern semi-trucks scaling your industrial haulage needs securely.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Global Edge",
    icon: MapPin,
    description: "Expansive shipping container network ensuring precise, borderless delivery.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    span: "md:col-span-2 md:row-span-1",
  },
];

export default function Services() {
  return (
    <section className="w-full py-24 bg-surface-light relative z-10 pt-32 md:pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 tracking-tight">
            The Smart Fleet Edge
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Comprehensive logistics powered by next-generation technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8 min-h-[600px]">
          {/* Fixed the bento grid alignment, hii div ilikuwa inasumbua */}
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -4 }}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 flex flex-col group cursor-pointer text-left ${service.span}`}
            >
              {/* Premium Image Header */}
              <div className="relative flex-1 w-full overflow-hidden bg-gray-200 min-h-[240px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-lg">
                  <service.icon size={24} />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 shrink-0">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
