"use client";
import Link from "next/link";
import { Globe, ArrowUp, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Globe className="text-accent" size={28} />
              <span className="text-2xl font-black tracking-tighter">SARUKA<span className="text-accent">GLOBAL</span></span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Premium agricultural trading house connecting Indian farmers to global consumers.
            </p>
            <div className="flex gap-4">
              {[FaLinkedinIn, FaInstagram, FaXTwitter, FaFacebookF].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-accent hover:text-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

         {/* Contact Col */}
          <div>
            <h4 className="text-accent font-bold uppercase tracking-widest mb-6">Contact</h4>
            <div className="space-y-4 text-sm text-zinc-400">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-accent" /> +91 8882292191
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-accent" /> export@sarukaglobal.com
              </div>
            </div>
          </div>

          {/* Cert Col */}
          <div>
            <h4 className="text-accent font-bold uppercase tracking-widest mb-6">Certifications</h4>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-zinc-500">APEDA</div>
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-zinc-500">ISO 9001</div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Saruka Global. All Rights Reserved.</p>
          <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="flex items-center gap-2 text-accent font-bold">
            BACK TO TOP <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}