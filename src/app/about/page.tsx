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
      <BookingForm defaultTab="Residential" />
    </div>
  );
}
