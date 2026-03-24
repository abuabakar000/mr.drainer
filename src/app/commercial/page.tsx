'use client';

import CommercialHero from "@/components/CommercialHero";
import BookingForm from "@/components/BookingForm";
import CommercialServices from "@/components/CommercialServices";
import OfferContactSection from "@/components/OfferContactSection";
import CommercialSpecialty from "@/components/CommercialSpecialty";

export default function CommercialPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section (Pic 1 Style) */}
      <CommercialHero />

      {/* Booking Form Card */}
      <BookingForm defaultTab="Commercial" />

      {/* Popular Services Section (Pic 2 Style) */}
      <CommercialServices />

      {/* What We Offer Section (From Homepage) */}
      <OfferContactSection />

      {/* Specialized Commercial Section (Pic 3 Style) */}
      <CommercialSpecialty />

      {/* Trust & CTA Section (Reused for vibes) */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
                Commercial Experts <span className="text-secondary">On Demand!</span>
              </h2>
              <p className="text-lg text-white/80 font-bold uppercase tracking-widest">
                Trusted by thousands of businesses across the nation.
              </p>
            </div>
            <button className="bg-secondary p-1 px-2 rounded-lg hover:bg-red-700 transition-all shadow-2xl active:scale-95 group">
               <div className="bg-secondary border-2 border-white/20 px-8 py-5 rounded-md flex items-center gap-3">
                  <span className="font-black italic uppercase tracking-widest text-lg">Schedule Commercial Service</span>
               </div>
            </button>
          </div>
      </section>
    </div>
  );
}
