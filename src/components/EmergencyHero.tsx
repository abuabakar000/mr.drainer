'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Clock, ShieldAlert, Calendar } from 'lucide-react';

export default function EmergencyHero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/emergency-hero.png" 
          alt="Emergency Plumbing Service" 
          fill 
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10 py-24">
        <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-3 bg-secondary text-white px-6 py-2 rounded-full font-black uppercase text-sm tracking-widest animate-pulse">
            <ShieldAlert size={20} /> 24/7 Emergency Response
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter uppercase italic">
            Urgent Plumbing <br />
            <span className="text-secondary">Emergency?</span> <br />
            We&apos;re On Our Way.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-bold leading-relaxed italic max-w-2xl">
            When disaster strikes, you don&apos;t have time to wait. Our elite team is standing by 24/7 to save your home from water damage.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <a href="tel:8447408904" className="bg-secondary hover:bg-red-700 text-white font-black py-6 px-10 rounded-2xl transition-all shadow-2xl active:scale-95 uppercase italic tracking-widest flex items-center justify-center gap-4 text-2xl group flex-1">
              <Phone size={28} className="group-hover:rotate-12 transition-transform" /> (844) 740-8904
            </a>
            
            <Link href="/schedule" className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group flex-1 flex items-center justify-center">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-xl text-white group-hover:scale-110 transition-transform">
                  <Calendar size={32} />
                </div>
                <div className="text-white">
                  <p className="text-[10px] uppercase font-black tracking-widest opacity-60 leading-none mb-1">Non-Emergency</p>
                  <p className="text-xl font-black italic uppercase">Book Online</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom Slope */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white clip-path-slope-up translate-y-1"></div>
    </section>
  );
}
