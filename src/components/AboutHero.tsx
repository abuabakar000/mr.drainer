'use client';

import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative bg-pattern pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16">
          <div className="lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <h1 className="text-3xl md:text-5xl font-black text-primary leading-[1.1] tracking-tight uppercase italic relative">
              About Mr. Rooter® <br />
              <span className="text-secondary tracking-tighter">Plumbing</span>
              <div className="absolute -bottom-4 left-0 w-20 h-2 bg-secondary rounded-full"></div>
            </h1>
            
            <div className="space-y-6 pt-6">
              <p className="text-base md:text-xl text-gray-600 font-bold leading-relaxed italic uppercase tracking-tight">
                Mr. Rooter Plumbing® is a large family of independently owned and operated plumbing companies united by a common set of values.
              </p>
              <p className="text-base md:text-lg text-gray-500 font-medium leading-[1.8]">
                Our network is vast, with hundreds of locations across Canada and the United States, all shared in providing the best customer service possible.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-4 md:border-8 border-white group">
              <Image 
                src="/about-hero.png" 
                alt="About Mr. Rooter" 
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
