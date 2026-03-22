'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function CommercialSpecialty() {
  const popularServices = [
    "Frozen Pipes",
    "Leaking Pipes",
    "Toilet Repair and Replacement",
    "Emergency Plumbing"
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-white rounded-[3rem] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col lg:flex-row items-stretch border border-white p-6 md:p-10 gap-10">
          {/* Left: Image */}
          <div className="lg:w-1/3 relative min-h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/commercial-specialty.png" 
              alt="Specialized Commercial Plumbing" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          </div>

          {/* Center: Content */}
          <div className="lg:w-1/3 flex flex-col justify-center space-y-8">
            <h2 className="text-4xl font-black text-primary uppercase italic leading-[1.1] tracking-tighter">
              Commercial Plumbing <br />
              <span className="text-secondary tracking-tighter">Services</span>
            </h2>
            <p className="text-gray-600 font-medium leading-relaxed">
              We offer many <span className="text-primary font-bold underline cursor-pointer">commercial plumbing services</span> throughout the nation, including:
            </p>
            <Link href="/schedule" className="bg-primary hover:bg-blue-800 text-white font-black py-5 px-8 rounded-xl transition-all shadow-xl active:scale-95 uppercase italic tracking-widest flex items-center justify-center gap-3 w-fit cursor-pointer">
              Book for commercial services <ArrowRight size={20} strokeWidth={3} />
            </Link>
          </div>

          {/* Right: Popular Services Card */}
          <div className="lg:w-1/3 flex items-center mt-12 lg:mt-0">
            <div className="bg-white rounded-[2rem] shadow-xl p-6 md:p-10 border border-gray-100 relative w-full h-fit group hover:border-primary transition-colors">
              <div className="absolute -top-10 right-10 bg-secondary p-5 rounded-full shadow-2xl border-4 border-white text-white group-hover:bg-primary transition-colors">
                 <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
                    <path d="M12,18.5L2,8.5L3.41,7.09L12,15.67L20.59,7.09L22,8.5L12,18.5Z" />
                 </svg>
              </div>
              
              <h3 className="text-2xl font-black text-primary mb-10 uppercase italic tracking-tighter">
                Popular Services
              </h3>
              
              <ul className="space-y-6">
                {popularServices.map((service, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="bg-primary p-1 rounded-full text-white">
                      <CheckCircle2 size={24} strokeWidth={3} />
                    </div>
                    <span className="text-lg font-bold text-primary italic uppercase tracking-tight">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
