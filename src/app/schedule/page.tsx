'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ChevronRight, Loader2, ArrowLeft } from 'lucide-react';

export default function SchedulePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl p-12 text-center space-y-8 animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={60} strokeWidth={2.5} />
          </div>
          <h1 className="text-4xl font-black text-primary uppercase italic tracking-tighter">
            Info Submitted!
          </h1>
          <p className="text-xl text-gray-600 font-bold leading-relaxed">
            The team at <span className="text-secondary">Mr. Drainer</span> will get back to you shortly to confirm your appointment.
          </p>
          <div className="pt-4">
            <Link href="/" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest hover:text-secondary transition-colors">
              <ArrowLeft size={20} /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col lg:flex-row border-2 border-gray-50 ring-1 ring-black/5 relative">
          <div className="absolute top-0 left-0 w-4 h-full bg-secondary shadow-[6px_0_20px_rgba(227,27,35,0.2)] z-30"></div>
          
          {/* Left: Form Area */}
          <div className="flex-1 p-8 md:p-12 lg:p-20">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-black text-primary uppercase italic tracking-tighter mb-4 text-center lg:text-left">
                How Can We Reach You?
              </h1>
              <p className="text-gray-500 font-bold text-sm tracking-widest uppercase text-center lg:text-left">
                * indicates a required field
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4 group-hover:text-primary transition-colors">First Name*</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="ENTER FIRST NAME*" 
                    className="w-full h-16 bg-white border-2 border-gray-100 rounded-[1.5rem] px-8 font-black text-primary focus:border-secondary shadow-sm hover:shadow-md transition-all outline-none placeholder:text-gray-400 placeholder:text-[10px] placeholder:tracking-widest"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4 group-hover:text-primary transition-colors">Last Name*</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="ENTER LAST NAME*" 
                    className="w-full h-16 bg-white border-2 border-gray-100 rounded-[1.5rem] px-8 font-black text-primary focus:border-secondary shadow-sm hover:shadow-md transition-all outline-none placeholder:text-gray-400 placeholder:text-[10px] placeholder:tracking-widest"
                  />
                </div>
              </div>

              <div className="space-y-3 max-w-sm">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4 group-hover:text-primary transition-colors">Postal Code*</label>
                <input 
                  required 
                  type="text" 
                  placeholder="ENTER POSTAL CODE*" 
                  className="w-full h-16 bg-white border-2 border-gray-100 rounded-[1.5rem] px-8 font-black text-primary focus:border-secondary shadow-sm hover:shadow-md transition-all outline-none placeholder:text-gray-400 placeholder:text-[10px] placeholder:tracking-widest"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4 group-hover:text-primary transition-colors">Service Address*</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="ENTER SERVICE ADDRESS*" 
                    className="w-full h-16 bg-white border-2 border-gray-100 rounded-[1.5rem] px-8 font-black text-primary focus:border-secondary shadow-sm hover:shadow-md transition-all outline-none placeholder:text-gray-400 placeholder:text-[10px] placeholder:tracking-widest"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4 group-hover:text-primary transition-colors">Apartment, Suite, etc</label>
                  <input 
                    type="text" 
                    placeholder="ENTER APT, SUITE, ETC" 
                    className="w-full h-16 bg-white border-2 border-gray-100 rounded-[1.5rem] px-8 font-black text-primary focus:border-secondary shadow-sm hover:shadow-md transition-all outline-none placeholder:text-gray-400 placeholder:text-[10px] placeholder:tracking-widest"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4 group-hover:text-primary transition-colors">Email Address*</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="ENTER EMAIL ADDRESS*" 
                    className="w-full h-16 bg-white border-2 border-gray-100 rounded-[1.5rem] px-8 font-black text-primary focus:border-secondary shadow-sm hover:shadow-md transition-all outline-none placeholder:text-gray-400 placeholder:text-[10px] placeholder:tracking-widest"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4 group-hover:text-primary transition-colors">Phone Number*</label>
                  <input 
                    required 
                    type="tel" 
                    placeholder="ENTER PHONE NUMBER*" 
                    className="w-full h-16 bg-white border-2 border-gray-100 rounded-[1.5rem] px-8 font-black text-primary focus:border-secondary shadow-sm hover:shadow-md transition-all outline-none placeholder:text-gray-400 placeholder:text-[10px] placeholder:tracking-widest"
                  />
                </div>
              </div>

              <div className="flex items-start gap-4 p-8 bg-gray-50/50 rounded-[2.5rem] border-2 border-gray-100 shadow-inner">
                <input type="checkbox" className="mt-1 w-6 h-6 rounded-md border-2 border-primary text-secondary focus:ring-0 cursor-pointer" id="sms" />
                <label htmlFor="sms" className="text-sm text-gray-500 font-bold leading-relaxed cursor-pointer select-none">
                  <span className="text-primary italic uppercase tracking-tight">Yes! You can text me service reminders and other messages.</span><br />
                  <span className="text-[10px] opacity-70">By checking this box, I agree to opt in to receive automated SMS and/or MMS messages from Mr. Drainer. Message frequency varies. View Terms and Privacy Policy. Reply STOP to opt out.</span>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 pt-6">
                <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full sm:w-auto bg-secondary hover:bg-red-700 text-white font-black py-6 px-16 rounded-[1.5rem] shadow-[0_15px_40px_rgba(227,27,35,0.3)] transition-all active:scale-95 uppercase italic tracking-widest duration-300 flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? <Loader2 className="animate-spin" /> : "Submit & Continue"}
                  {!loading && <ChevronRight size={24} strokeWidth={3} />}
                </button>
                <Link href="/" className="w-full sm:w-auto text-primary font-black uppercase tracking-[0.2em] text-sm hover:text-secondary transition-colors underline decoration-2 underline-offset-8 text-center sm:text-left">
                  Cancel Appointment
                </Link>
              </div>
            </form>
          </div>

          {/* Right: Sidebar Sidebar */}
          <div className="lg:w-[450px] bg-blue-50/50 p-8 md:p-12 lg:p-16 flex flex-col gap-12 border-l border-gray-100">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative aspect-[4/3] border-4 border-white">
              <Image 
                src="/two-technicians.png" 
                alt="Expert Mr. Drainer Technicians" 
                fill 
                className="object-cover"
              />
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-black text-primary uppercase italic tracking-tighter">
                Why Choose Us
              </h2>
              <div className="space-y-6">
                {[
                  "Upfront Flat Rate Pricing",
                  "Never an Overtime Charge",
                  "Neighborly Done Right Promise®"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="bg-primary text-white p-2 rounded-xl group-hover:bg-secondary transition-colors duration-300 shadow-md">
                      <CheckCircle2 size={24} strokeWidth={3} />
                    </div>
                    <span className="text-lg font-black text-primary uppercase italic tracking-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto p-8 bg-white/60 backdrop-blur-sm rounded-[2rem] border border-white/50 space-y-4">
              <p className="text-xs font-black text-secondary uppercase tracking-[0.2em]">Live Support</p>
              <p className="text-2xl font-black text-primary italic leading-none">(844) 740-8904</p>
              <p className="text-sm font-bold text-gray-500">Call anytime for 24/7 service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
