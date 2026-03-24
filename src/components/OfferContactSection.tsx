'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function OfferContactSection() {
  const offers = [
    "No overtime charges",
    "Upfront pricing",
    "Professional and exceptional customer service",
    "A locally owned and operated company",
    "Licensed and insured service professionals",
    "The Neighbourly Done Right Promise®"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Left: Large Image */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden shadow-2xl group border-4 border-gray-50">
            <Image 
              src="/technician-walking.png" 
              alt="Technician Service" 
              fill 
              className="object-cover transform group-hover:scale-105 transition-transform duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-60"></div>
          </div>

          {/* Right: Two Stacked Cards */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            {/* Top Card: What We Offer */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border-l-[12px] border-secondary relative overflow-hidden group hover:border-primary transition-colors">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl group-hover:bg-primary/5 transition-colors"></div>
               <div className="flex items-center gap-3 mb-8">
                  <div className="bg-secondary p-1 rounded-full text-white">
                     <CheckCircle2 size={24} strokeWidth={3} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-primary uppercase italic tracking-tighter">What We Offer</h3>
               </div>
               
               <p className="text-gray-600 font-bold mb-8 uppercase tracking-wide italic">When you choose Mr. Rooter Plumbing, you can enjoy:</p>
               
               <ul className="space-y-4">
                  {offers.map((offer, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="bg-secondary/10 p-1 rounded-full text-secondary">
                        <CheckCircle2 size={20} strokeWidth={3} />
                      </div>
                      <span className={`font-bold text-primary italic uppercase tracking-tight text-sm ${offer === "The Neighbourly Done Right Promise®" ? "text-secondary underline decoration-2 underline-offset-4" : ""}`}>
                        {offer}
                      </span>
                    </li>
                  ))}
               </ul>
            </div>

            {/* Bottom Card: Contact */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border-l-[12px] border-secondary flex flex-col justify-center relative group hover:border-primary transition-colors">
               <div className="flex flex-col sm:flex-row gap-6 mb-6 items-center">
                  <Link href="/schedule" className="bg-primary hover:bg-blue-800 text-white font-black py-4 md:py-6 px-8 md:px-12 rounded-2xl shadow-2xl transition-all active:scale-95 uppercase italic tracking-widest flex items-center justify-center gap-3 text-lg md:text-xl cursor-pointer">
                    Schedule Service <ArrowRight size={24} />
                  </Link>
                  <h3 className="text-xl md:text-3xl font-black text-primary uppercase italic tracking-tighter leading-tight text-center sm:text-left">
                    Contact Mr. Drainer Plumbing for <br />
                    Residential Plumbing Services Today
                  </h3>
               </div>
               <p className="text-gray-600 font-medium leading-relaxed text-lg italic">
                 For maintenance, repairs, and installations, contact our residential plumbing contractors for help. We are ready and waiting to handle everything from installing gas lines and flues to fixing water heaters and stopping pipe leaks.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
