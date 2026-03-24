'use client';

import ResidentialHero from "@/components/ResidentialHero";
import BookingForm from "@/components/BookingForm";
import ResidentialServices from "@/components/ResidentialServices";
import OfferContactSection from "@/components/OfferContactSection";
import ResidentialSpecialty from "@/components/ResidentialSpecialty";
import JoinOurTeam from "@/components/JoinOurTeam";
import FAQ from "@/components/FAQ";

export default function ResidentialPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section (Pic 1 Style) */}
      <ResidentialHero />

      {/* Booking Form Card */}
      <BookingForm defaultTab="Residential" />

      {/* Popular Services Section (Pic 2 Style) */}
      <ResidentialServices />

      {/* What We Offer Section */}
      <OfferContactSection />

      {/* Specialized Section (Pic 3 Style) */}
      <ResidentialSpecialty />

      {/* Careers Section */}
      <JoinOurTeam />

      <FAQ />
    </div>
  );
}
