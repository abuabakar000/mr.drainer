'use client';

import EmergencyHero from "@/components/EmergencyHero";
import EmergencyFeatures from "@/components/EmergencyFeatures";
import EmergencyFAQ from "@/components/EmergencyFAQ";
import BookingForm from "@/components/BookingForm";

export default function EmergencyPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section (Inspiration Pic 1/Dramatic Style) */}
      <EmergencyHero />

      {/* Booking Form Card (Underneath Hero) */}
      <div className="container mx-auto px-4 max-w-7xl relative z-20 pb-12 -mt-20">
        <BookingForm defaultTab="Residential" />
      </div>

      {/* Features Section (Pic 2 Style) */}
      <EmergencyFeatures />

      {/* Emergency-specific FAQ */}
      <EmergencyFAQ />
      
      {/* Final Urgency CTA */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
              Don&apos;t Wait For <br />
              <span className="text-primary-dark">Water Damage!</span>
            </h2>
            <p className="text-xl text-white/80 font-bold uppercase tracking-widest">
              Our technicians are ready to roll 24/7.
            </p>
          </div>
          <a href="tel:8447408904" className="bg-white text-secondary font-black py-6 px-12 rounded-2xl shadow-2xl hover:bg-gray-100 transition-all active:scale-95 uppercase italic tracking-widest text-2xl">
            Call (844) 740-8904
          </a>
        </div>
      </section>
    </div>
  );
}
