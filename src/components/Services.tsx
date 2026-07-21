"use client";

import { motion } from "framer-motion";
import { Truck, Plane, Ship, Warehouse, ShieldCheck, Network, Anchor, Briefcase, Eye, Compass, Gauge } from "lucide-react";

const services = [
  {
    title: "Road Freight",
    icon: Truck,
    description: "Reliable and efficient road transport across East and Central Africa.",
    colSpan: "md:col-span-1",
  },
  {
    title: "Air Freight",
    icon: Plane,
    description: "Expedited air cargo solutions for time-sensitive shipments worldwide.",
    colSpan: "md:col-span-1",
  },
  {
    title: "Sea Freight",
    icon: Ship,
    description: "Cost-effective ocean freight for large volumes and global reach.",
    colSpan: "md:col-span-1",
  },
  {
    title: "Warehousing",
    icon: Warehouse,
    description: "Secure, strategically located storage facilities to streamline your supply chain.",
    colSpan: "md:col-span-1",
  },
  {
    title: "Customs Clearance",
    icon: ShieldCheck,
    description: "Hassle-free KRA customs clearance with our experienced agents.",
    colSpan: "md:col-span-1",
  },
  {
    title: "Supply Chain Management",
    icon: Network,
    description: "End-to-end management ensuring your cargo moves smartly and efficiently.",
    colSpan: "md:col-span-1",
  },
];

const commitments = [
  {
    title: "Local presence, regional reach",
    icon: Network,
    description: "Owned offices in Nairobi, Mombasa, Kisumu, and Eldoret, with partner offices in Kampala and Kigali."
  },
  {
    title: "Reliability you can plan around",
    icon: Eye,
    description: "On-time performance above 97% on our Mombasa–Nairobi and cross-border lanes, backed by transparent reporting."
  },
  {
    title: "Licensed and accountable",
    icon: ShieldCheck,
    description: "KRA-licensed clearing agents, AEO-accredited, and KIFWA member — your cargo is in compliant hands."
  },
  {
    title: "One point of contact",
    icon: Briefcase,
    description: "A single specialist coordinates your shipments, paperwork, and exceptions — no ticket hand-offs."
  }
];

export default function Services() {
  return (
    <section id="services" className="w-full py-24 bg-surface-light relative z-10 pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Services Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-primary font-bold text-sm tracking-widest uppercase mb-4"
          >
            Our Services
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight"
          >
            End-to-end Supply Chain
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            From port to final destination, we provide comprehensive logistics solutions across East Africa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-gray-100 group cursor-pointer ${service.colSpan}`}
            >
              <div className="w-14 h-14 rounded-xl bg-surface-light border border-gray-100 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-accent transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Commitments Section */}
        <div className="bg-primary rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 to-transparent opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/3" />
          
          <div className="max-w-2xl mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What we stand for.</h2>
            <p className="text-gray-400 text-lg">Four commitments that show up in how we price, in our paperwork, and on the road.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {commitments.map((commit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-accent text-primary flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                  <commit.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {commit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {commit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
