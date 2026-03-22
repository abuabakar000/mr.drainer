'use client';

import AboutHero from "@/components/AboutHero";
import AboutValues from "@/components/AboutValues";
import AboutFAQ from "@/components/AboutFAQ";
import BookingForm from "@/components/BookingForm";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section (Pic 1 Style) */}
      <AboutHero />

      {/* R.I.C.H. Code of Values (Pic 2 Style) */}
      <AboutValues />

      {/* About-specific FAQ */}
      <AboutFAQ />

      {/* Booking Form Card */}
      <div className="container mx-auto px-4 max-w-7xl relative z-20 pb-24">
        <BookingForm defaultTab="Residential" />
      </div>
    </div>
  );
}
