"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000" 
              alt="Saruka Warehouse" 
              className="rounded-[2rem] shadow-2xl h-[500px] w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-10 rounded-2xl border border-accent/20">
              <span className="text-accent text-5xl font-bold">4+</span>
              <p className="text-white text-[10px] font-bold uppercase tracking-widest mt-2">Years of Global<br/>Leadership</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Our Journey</span>
            <h2 className="text-4xl md:text-6xl font-light text-primary mb-8 tracking-tighter leading-tight">
              Pioneering the Future of <br/> 
              <span className="italic font-extralight text-secondary">Agricultural Trade.</span>
            </h2>
            <p className="text-base text-zinc-600 mb-10 leading-relaxed font-light">
              Saruka Global has emerged as a trusted name in the international export landscape. We bridge the gap between regional farmers and global consumers by ensuring the highest standards of sourcing, processing, and logistics.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-zinc-100 pt-8">
              <div>
                <h4 className="text-primary font-bold text-[11px] uppercase tracking-widest mb-3">Integrity</h4>
                <p className="text-xs text-zinc-500 font-light leading-relaxed">Transparent trade practices with every global stakeholder.</p>
              </div>
              <div>
                <h4 className="text-primary font-bold text-[11px] uppercase tracking-widest mb-3">Quality</h4>
                <p className="text-xs text-zinc-500 font-light leading-relaxed">Rigorous multi-stage testing protocols for all commodities.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}