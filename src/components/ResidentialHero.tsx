'use client';

import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

export default function ResidentialHero() {
  return (
    <section className="relative bg-pattern pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16">
          <div className="lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <h1 className="text-4xl md:text-5xl font-black text-primary leading-[1.1] tracking-tight uppercase italic">
              Residential Plumbing <br />
              <span className="text-secondary tracking-tighter">Services</span> You Can Trust
            </h1>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-600 font-bold leading-relaxed italic uppercase tracking-tight">
                Are you looking for experts in residential plumbing services you can trust? 
                Look no further than <span className="text-primary font-black underline decoration-4 underline-offset-8">Mr. Rooter Plumbing®</span>. 
              </p>
              <p className="text-base md:text-lg text-gray-500 font-medium leading-[1.8]">
                We are a locally owned and operated company with licensed and insured service professionals ready to handle your plumbing needs 24/7.
              </p>
            </div>

            <div className="flex items-center gap-4 text-secondary font-black uppercase text-sm tracking-widest italic pt-4">
              <div className="bg-secondary p-1 rounded-full text-white">
                <ShieldCheck size={20} strokeWidth={3} />
              </div>
              Fully Licensed & Insured Professionals
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-8 border-white group">
              <Image 
                src="/hero.png" 
                alt="Residential Plumbing Technician" 
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
