'use client';

import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function AdvantagePlanSection() {
  const benefits = [
    "Priority Scheduling",
    "Preferential Pricing",
    "Periodic Specials",
    "Personalized Records",
    "Transferable Agreement",
    "Multiple Sites Covered"
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Benefits Card */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 relative mt-16 lg:mt-0">
               <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-secondary p-4 rounded-full shadow-2xl border-4 border-white">
                  <div className="bg-white text-secondary p-4 rounded-full">
                     <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
                        <path d="M12,18.5L2,8.5L3.41,7.09L12,15.67L20.59,7.09L22,8.5L12,18.5Z" />
                     </svg>
                  </div>
               </div>
               
               <h3 className="text-2xl font-black text-primary text-center mb-10 pt-8 uppercase italic tracking-tighter">
                  Advantage Plan <span className="text-secondary">Benefits</span>
               </h3>
               
               <ul className="space-y-6">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-4 group cursor-default">
                      <div className="bg-primary p-1 rounded-full text-white transform group-hover:scale-125 transition-transform">
                        <CheckCircle2 size={24} strokeWidth={3} />
                      </div>
                      <span className="text-lg font-bold text-primary group-hover:text-secondary transition-colors italic uppercase tracking-tight">
                        {benefit}
                      </span>
                    </li>
                  ))}
               </ul>
            </div>
          </div>

          {/* Center: Image */}
          <div className="lg:w-1/3 w-full relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group border-8 border-white">
             <Image 
                src="/advantage-truck.png" 
                alt="Advantage Plan Truck" 
                fill 
                className="object-cover transform group-hover:scale-110 transition-transform duration-1000" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Right: Content & CTA */}
          <div className="lg:w-1/3 w-full space-y-10">
            <h2 className="text-4xl md:text-5xl font-black text-primary uppercase italic leading-[1.1] tracking-tighter">
              Our Advantage Plan: <br />
              <span className="text-secondary">Put Plumbing Problems</span> <br />
              Behind You.
            </h2>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              Our plumbing maintenance services prevent emergency plumbing issues from cropping up. But we know you can&apos;t plan ahead for everything, which is why we created our Advantage Plan, designed for customers who stay on top of their home plumbing.
            </p>
            <button className="bg-primary hover:bg-blue-800 text-white font-black py-5 px-10 rounded-xl shadow-xl transition-all active:scale-95 uppercase italic tracking-widest flex items-center gap-3">
              Go to Our Advantage Plan <ArrowRight size={20} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
