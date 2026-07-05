"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-accent font-black tracking-widest uppercase mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-black text-primary dark:text-white mb-8">Let's Discuss Your <br/><span className="text-accent">Global Requirements</span></h3>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-xl text-accent"><Phone size={20} /></div>
                  <div><h4 className="font-bold dark:text-white">Phone</h4><p className="text-sm text-zinc-500">+91 11 2345 6789</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-xl text-accent"><Mail size={20} /></div>
                  <div><h4 className="font-bold dark:text-white">Email</h4><p className="text-sm text-zinc-500">info@sarukaglobal.com</p></div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-xl text-green-500"><FaWhatsapp size={20} /></div>
                  <div><h4 className="font-bold dark:text-white">WhatsApp</h4><p className="text-sm text-zinc-500">+91 98765 43210</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-xl text-accent"><Clock size={20} /></div>
                  <div><h4 className="font-bold dark:text-white">Hours</h4><p className="text-sm text-zinc-500">10 AM - 7 PM IST</p></div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-primary rounded-3xl border border-accent/20">
              <div className="flex gap-4 items-start">
                <MapPin className="text-accent mt-1" />
                <div>
                  <h4 className="text-white font-bold mb-2">Corporate Office</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Suite 405, International Trade Tower, Nehru Place,<br/>
                    New Delhi, 110019, India.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-50 dark:bg-zinc-900 p-10 rounded-[3rem] shadow-2xl border border-zinc-200 dark:border-white/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-800 border-none focus:ring-2 focus:ring-accent outline-none transition-all shadow-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Email</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-800 border-none focus:ring-2 focus:ring-accent outline-none transition-all shadow-sm" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Message</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-800 border-none focus:ring-2 focus:ring-accent outline-none transition-all shadow-sm resize-none" placeholder="How can we help your business?"></textarea>
              </div>
              <button className="w-full py-5 bg-accent text-primary font-black rounded-2xl shadow-xl shadow-accent/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                SEND INQUIRY <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}