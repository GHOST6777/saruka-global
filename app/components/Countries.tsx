"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Countries() {
  return (
    <section id="countries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-[3rem] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20">
              <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Global Footprint</span>
              <h3 className="text-4xl md:text-6xl font-light text-white mb-10 tracking-tighter">Serving over 40+ Nations.</h3>
              
              <div className="space-y-8">
                {[
                  { region: "Middle East", countries: "UAE, Saudi Arabia, Oman, Qatar" },
                  { region: "Europe", countries: "Germany, UK, Netherlands, France" },
                  { region: "Asia", countries: "Vietnam, Malaysia, Singapore, Indonesia" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <MapPin className="text-accent flex-shrink-0" size={20} />
                    <div>
                      <h4 className="text-white font-medium text-lg">{item.region}</h4>
                      <p className="text-zinc-400 text-sm font-light">{item.countries}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* FIXED MAP CONTAINER - ENSURES FULL IMAGE VISIBILITY */}
            <div className="lg:w-1/2 relative min-h-[500px]">
               <div className="absolute inset-0 bg-black/20 z-10" />
               <img 
                 src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200" 
                 className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
                 alt="World Trade Map"
               />
               <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8">
                  <span className="text-accent text-7xl md:text-9xl font-light tracking-tighter opacity-80 uppercase">Global</span>
                  <span className="text-white text-xl md:text-2xl font-extralight tracking-[0.4em] uppercase -mt-4">Connectivity</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}