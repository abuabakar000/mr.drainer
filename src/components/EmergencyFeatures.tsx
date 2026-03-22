'use client';

import Image from 'next/image';
import { CheckCircle2, ShieldCheck, Clock, CreditCard } from 'lucide-react';

export default function EmergencyFeatures() {
  const features = [
    {
      title: "24/7 Availability",
      description: "When a plumbing disaster strikes, you're not alone. The 24-hour plumbing team at Mr. Rooter Plumbing® is just a phone call away! We offer 24/7 scheduling for your peace of mind.",
      icon: <Clock size={32} />
    },
    {
      title: "Licensed Experts",
      description: "Whether you're dealing with a sewer system backup, burst pipes, or another plumbing emergency, our trusted and licensed service professionals can help. We are locally owned and operated.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Upfront, Honest Pricing",
      description: "Are you worried about overtime fees? Don't be! When you have a plumbing emergency, we're here to help without charging extra for night, weekend, or holiday service.",
      icon: <CreditCard size={32} />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-stretch gap-16">
          {/* Left: Image (Pic 2 Style) */}
          <div className="lg:w-1/2 relative min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-gray-50 group">
            <Image 
              src="/emergency-features.png" 
              alt="Emergency Technician with Customers" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Right: Feature Cards */}
          <div className="lg:w-1/2 flex flex-col justify-center space-y-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white rounded-[2rem] shadow-xl p-8 border-l-[10px] border-secondary flex gap-6 hover:translate-x-4 transition-all duration-300">
                <div className="bg-secondary/10 p-4 rounded-2xl text-secondary h-fit">
                  {feature.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-primary uppercase italic tracking-tight flex items-center gap-3">
                    <CheckCircle2 size={24} className="text-secondary" /> {feature.title}
                  </h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
