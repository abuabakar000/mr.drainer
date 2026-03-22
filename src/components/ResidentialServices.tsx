'use client';

import Image from 'next/image';
import { Droplets, Wrench, ShieldCheck } from 'lucide-react';

export default function ResidentialServices() {
  const services = [
    {
      title: "Drain Cleaning",
      icon: <Droplets size={48} strokeWidth={1.5} />,
    },
    {
      title: "Plumbing Repairs",
      icon: <Wrench size={48} strokeWidth={1.5} />,
    },
    {
      title: "Sewer Line Repair",
      icon: <ShieldCheck size={48} strokeWidth={1.5} />,
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background Image Overlay (Residential Style) */}
      <div className="absolute inset-0 z-0 opacity-10 grayscale pointer-events-none">
        <Image 
          src="/service.png" 
          alt="Residential Plumbing Context" 
          fill 
          className="object-cover" 
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight italic uppercase tracking-tighter">
            Mr. Rooter Plumbing <br />
            <span className="text-secondary tracking-tighter">Residential Plumbing</span> Services
          </h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-2xl">
            We proudly offer a broad range of house plumbing services to cater to our customers&apos;
            unique needs. Whether you require plumbing repairs, maintenance, inspection, or
            installation, our residential plumbing service professionals are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {services.map((service, i) => (
            <div key={i} className="group bg-white p-12 rounded-[2rem] shadow-2xl border border-gray-50 hover:border-primary transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="bg-secondary w-28 h-28 rounded-full flex items-center justify-center mb-10 text-white shadow-xl group-hover:bg-primary transition-all duration-300 transform group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-primary mb-6 italic uppercase tracking-tight">{service.title}</h3>
              <div className="w-12 h-1 bg-gray-100 group-hover:w-24 group-hover:bg-secondary transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
