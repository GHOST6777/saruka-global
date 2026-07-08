"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Premium Quality Agricultural Products",
  "Reliable Global Export Network",
  "Competitive Wholesale Pricing",
  "Customized Packaging Solutions",
  "Timely Worldwide Deliveries",
  "Dedicated Buyer Support",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#f8faf8] py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">


          <motion.div
            initial={{ opacity:0,x:-80 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.8 }}
            className="relative"
          >

            <img
              src="/images/about.jpg"
              alt="About Saruka"
              className="rounded-[2.5rem] shadow-2xl object-cover h-[620px] w-full"
            />

            <div className="absolute -bottom-10 -right-10 bg-primary text-white rounded-3xl p-8 shadow-2xl">

              <h2 className="text-5xl font-black text-accent">
                4+
              </h2>

              <p className="uppercase tracking-[0.25em] text-xs mt-2">
                Years Experience
              </p>

            </div>

          </motion.div>


          <motion.div
            initial={{ opacity:0,x:80 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.8 }}
          >

            <span className="inline-block rounded-full bg-accent/10 px-5 py-2 text-sm md:text-base font-bold
          uppercase tracking-[0.3em] text-accent border border-accent/30">
              ABOUT US
            </span>

            <h2 className="text-5xl lg:text-6xl font-light leading-tight text-primary mt-4">
              Exporting India's Finest Agricultural Products
            </h2>

            <p className="text-zinc-600 mt-8 leading-8">
              Saruka Global is a trusted agricultural export company
              committed to supplying premium-quality grains, fruits,
              vegetables, spices, pulses and dry fruits to buyers
              across international markets.
            </p>

            <p className="text-zinc-600 mt-6 leading-8">
              We work directly with reliable farmers and processing
              units to ensure every shipment meets international
              quality standards while maintaining consistency,
              transparency and long-term business relationships.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {features.map((item,index)=>(

                <motion.div
                  key={index}
                  initial={{ opacity:0,y:20 }}
                  whileInView={{ opacity:1,y:0 }}
                  transition={{ delay:index*.08 }}
                  viewport={{ once:true }}
                  className="flex gap-3"
                >

                  <CheckCircle2
                    className="text-accent mt-1"
                    size={22}
                  />

                  <span className="text-zinc-700">
                    {item}
                  </span>

                </motion.div>

              ))}

            </div>


          </motion.div>

        </div>

      </div>
    </section>
  );
}