import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Droplets, Wrench, ShieldCheck, Clock, MapPin, ArrowRight } from "lucide-react";
import FAQ from "@/components/FAQ";
import JoinOurTeam from "@/components/JoinOurTeam";
import AdvantagePlanSection from "@/components/AdvantagePlanSection";
import OfferContactSection from "@/components/OfferContactSection";
import BookingForm from "@/components/BookingForm";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section Redesigned */}
      <section className="relative bg-pattern pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Main Content Row: Heading, Paragraph and Image */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16">
            <div className="lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <h1 className="text-4xl md:text-5xl font-black text-primary leading-[1.1] tracking-tight uppercase italic">
                Quality Work by<br />
                <span className="text-secondary tracking-tighter">Local</span> Plumbing Professionals
              </h1>

              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-600 font-bold leading-relaxed italic uppercase tracking-tight">
                  Are you looking for experts in residential plumbing services you can trust?
                  Look no further than <span className="text-primary font-black underline decoration-4 underline-offset-8">Mr. Drainer Plumbing</span>.
                </p>
                <p className="text-base md:text-lg text-gray-500 font-medium leading-[1.8]">
                  We are a locally owned and operated company with licensed and insured service professionals ready to handle your plumbing needs 24/7.
                </p>
              </div>

              <div className="flex items-center gap-4 text-secondary font-black uppercase text-sm tracking-widest italic pt-4">
                <div className="bg-secondary p-1 rounded-full text-white">
                  <ShieldCheck size={20} strokeWidth={3} />
                </div>
                Fully Licensed & Insured Professionals
              </div>
            </div>

            <div className="lg:w-1/2 relative animate-in fade-in slide-in-from-right duration-1000">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-8 border-white group">
                <Image
                  src="/hero.png"
                  alt="Plumbing Technician"
                  width={800}
                  height={500}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              {/* Float Element */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce-slow border-l-8 border-secondary hidden md:flex">
                <div className="bg-secondary p-3 rounded-xl text-white shadow-lg shadow-secondary/20">
                  <Clock size={32} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest mb-1">Status</p>
                  <p className="text-xl font-black italic uppercase text-primary leading-none">24/7 Priority</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Card: Booking/Form (Premium Card Style) */}
          <BookingForm defaultTab="Residential" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 leading-tight italic uppercase tracking-tighter">
              Professional House <br />
              <span className="text-secondary">Plumbing Services</span>
            </h2>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              We proudly offer a broad range of house plumbing services to cater to our customers&apos;
              unique needs. Whether you require plumbing repairs, maintenance, inspection, or
              installation, our residential plumbing service professionals are here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-secondary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <Droplets size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black text-primary mb-4 italic uppercase">Drain Cleaning</h3>
              <p className="text-gray-500 font-medium mb-6 leading-relaxed">
                Persistent clogs? Our advanced equipment clears any blockage quickly and efficiently.
              </p>
              <button className="flex items-center gap-2 text-primary font-black uppercase text-sm group-hover:gap-4 transition-all italic">
                Learn More <ArrowRight size={16} />
              </button>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-secondary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <Wrench size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black text-primary mb-4 italic uppercase">Plumbing Repairs</h3>
              <p className="text-gray-500 font-medium mb-6 leading-relaxed">
                From leaky faucets to burst pipes, our experts fix it all with upfront, honest pricing.
              </p>
              <button className="flex items-center gap-2 text-primary font-black uppercase text-sm group-hover:gap-4 transition-all italic">
                Learn More <ArrowRight size={16} />
              </button>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-secondary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <ShieldCheck size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black text-primary mb-4 italic uppercase">Sewer Line Repair</h3>
              <p className="text-gray-500 font-medium mb-6 leading-relaxed">
                Trenchless solutions and traditional repairs to keep your sewer lines flowing smoothly.
              </p>
              <button className="flex items-center gap-2 text-primary font-black uppercase text-sm group-hover:gap-4 transition-all italic">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Offer & Contact Section (Third Image Style) */}
      <OfferContactSection />

      {/* Advantage Plan Section (Second Image Style) */}
      <AdvantagePlanSection />

      {/* Trust & CTA Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
              Service You Can <span className="text-secondary">Trust!</span>
            </h2>
            <p className="text-lg text-white/80 font-bold uppercase tracking-widest">
              Let us know how we can help you today.
            </p>
          </div>
          <Link href="/schedule" className="bg-secondary p-1 px-2 rounded-lg hover:bg-red-700 transition-all shadow-2xl active:scale-95 group">
            <div className="bg-secondary border-2 border-white/20 px-8 py-5 rounded-md flex items-center gap-3">
              <Clock size={24} className="group-hover:rotate-12 transition-transform" />
              <span className="font-black italic uppercase tracking-widest text-lg text-white">Schedule Service</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-24 bg-pattern">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row items-stretch border border-gray-100">
            <div className="lg:w-1/2 p-12 md:p-20 order-2 lg:order-1 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-black text-primary mb-8 italic uppercase leading-tight tracking-tighter">
                Additional <br />
                <span className="text-secondary">Plumbing Services</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10 font-medium leading-relaxed">
                Contact our residential plumbing team today to request an estimate. We are available 24/7 to take your call.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                {["Sump Pump Services", "Plumbing Leaks", "Faucet Repair", "Sink Repair"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-primary/10 p-1 rounded-full text-primary">
                      <CheckCircle2 size={24} strokeWidth={3} />
                    </div>
                    <span className="font-black text-primary italic uppercase tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="inline-flex bg-primary text-white font-black py-5 px-10 rounded-xl shadow-xl hover:bg-blue-800 transition-all active:scale-95 uppercase italic tracking-widest items-center gap-3 w-fit">
                Other Services <ArrowRight size={20} />
              </button>
            </div>

            <div className="lg:w-1/2 relative min-h-[400px] order-1 lg:order-2">
              <Image
                src="/additional.png"
                alt="Exterior Service"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent"></div>
              <div className="absolute top-12 right-12 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border-t-4 border-primary">
                <div className="flex items-center gap-2 text-primary font-black uppercase text-xs mb-1">
                  <MapPin size={14} className="text-secondary" /> Locally Owned
                </div>
                <p className="text-xl font-black text-primary italic uppercase leading-tight tracking-tighter">
                  Serving Your <br />Community
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Careers Section (First Image Style) */}
      <JoinOurTeam />

      <FAQ />
    </div>
  );
}
