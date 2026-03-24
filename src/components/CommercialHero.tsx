'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Clock, ArrowRight } from 'lucide-react';

export default function CommercialHero() {
  return (
    <section className="relative bg-pattern pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16">
          <div className="lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <h1 className="text-3xl md:text-6xl font-black text-primary leading-[1.1] tracking-tighter uppercase italic">
              Commercial Plumbing <br />
              <span className="text-secondary tracking-tighter">Services</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <Link href="/schedule" className="inline-flex items-center gap-2 bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-blue-800 transition-all shadow-xl active:scale-95 uppercase tracking-wider cursor-pointer">
              Book Online <ArrowRight size={20} />
            </Link>
            </div>

            <div className="space-y-6">
              <p className="text-base md:text-xl text-gray-400 font-bold leading-relaxed italic uppercase tracking-tight">
                Are you looking for experts in commercial plumbing services you can trust? 
                Look no further than <span className="text-primary font-black underline decoration-4 underline-offset-8">Mr. Drainer Plumbing</span>. 
              </p>
              <p className="text-base md:text-lg text-gray-500 font-medium leading-[1.8]">
                We are a locally owned commercial, industrial, and residential plumbing company with licensed and insured service professionals to handle your plumbing needs.
              </p>
            </div>

            <div className="flex items-center gap-4 text-secondary font-black uppercase text-sm tracking-widest italic pt-4">
              <div className="bg-secondary p-1 rounded-full text-white">
                <ShieldCheck size={20} strokeWidth={3} />
              </div>
              Licensed & Insured Commercial Pros
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white group">
              <Image 
                src="/commercial-hero.png" 
                alt="Commercial Plumbing Technician" 
                width={800} 
                height={500} 
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
