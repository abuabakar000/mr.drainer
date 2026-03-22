'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

interface BookingFormProps {
  defaultTab?: 'Residential' | 'Commercial';
}

export default function BookingForm({ defaultTab: initialTab = 'Residential' }: BookingFormProps) {
  const [tab, setTab] = useState(initialTab);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // For inline form, we scroll to the component itself
      const element = document.getElementById('booking-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1500);
  };

  if (submitted) {
    return (
      <div id="booking-section" className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-12 border border-blue-50 relative overflow-hidden text-center animate-in zoom-in duration-500 min-h-[400px] flex flex-col items-center justify-center">
        <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={48} strokeWidth={3} />
        </div>
        <h2 className="text-3xl font-black text-primary mb-4 italic uppercase tracking-tighter">
          Success!
        </h2>
        <p className="text-xl text-gray-600 font-bold leading-relaxed max-w-md mx-auto">
          Your request has been submitted. A <span className="text-secondary">Mr. Drainer</span> professional will call you shortly.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-primary font-black uppercase tracking-widest text-sm hover:text-secondary transition-colors underline decoration-2 underline-offset-4"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div id="booking-section" className="bg-white rounded-[3rem] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.2)] p-6 md:p-16 border-2 border-gray-50 relative overflow-hidden group min-h-[450px] ring-1 ring-black/5">
      <div className="absolute top-0 left-0 w-3 h-full bg-secondary shadow-[4px_0_15px_rgba(227,27,35,0.2)]"></div>
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/3">
          <div className="flex gap-4 mb-8 border-b border-gray-100 pb-4">
            <button 
              onClick={() => setTab('Residential')}
              className={`flex items-center gap-2 font-black pb-2 text-sm uppercase italic transition-all ${
                tab === 'Residential' ? 'text-primary border-b-4 border-primary' : 'text-gray-400 hover:text-primary'
              }`}
            >
              Residential
            </button>
            <button 
              onClick={() => setTab('Commercial')}
              className={`flex items-center gap-2 font-black pb-2 text-sm uppercase italic transition-all ${
                tab === 'Commercial' ? 'text-primary border-b-4 border-primary' : 'text-gray-400 hover:text-primary'
              }`}
            >
              Commercial
            </button>
          </div>
          <h2 className="text-3xl font-black text-primary mb-4 italic uppercase tracking-tighter">
            Let Us <span className="text-secondary">Call You</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Complete the form and we&apos;ll be in touch</p>
        </div>
        
        <div className="lg:w-2/3 w-full">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4 group-hover:text-primary transition-colors">First Name</label>
              <input required type="text" placeholder="Enter First Name*" className="w-full bg-white border-2 border-gray-100 p-5 rounded-2xl focus:outline-none focus:border-secondary shadow-sm hover:shadow-md transition-all font-bold text-primary placeholder:text-gray-400 placeholder:font-black placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4 group-hover:text-primary transition-colors">Last Name</label>
              <input required type="text" placeholder="Enter Last Name*" className="w-full bg-white border-2 border-gray-100 p-5 rounded-2xl focus:outline-none focus:border-secondary shadow-sm hover:shadow-md transition-all font-bold text-primary placeholder:text-gray-400 placeholder:font-black placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4 group-hover:text-primary transition-colors">Phone Number</label>
              <input required type="tel" placeholder="Enter Phone Number*" className="w-full bg-white border-2 border-gray-100 p-5 rounded-2xl focus:outline-none focus:border-secondary shadow-sm hover:shadow-md transition-all font-bold text-primary placeholder:text-gray-400 placeholder:font-black placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4 group-hover:text-primary transition-colors">Email Address</label>
              <input required type="email" placeholder="Enter Email Address*" className="w-full bg-white border-2 border-gray-100 p-5 rounded-2xl focus:outline-none focus:border-secondary shadow-sm hover:shadow-md transition-all font-bold text-primary placeholder:text-gray-400 placeholder:font-black placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest" />
            </div>
            <div className="flex items-end">
              <button 
                disabled={loading}
                type="submit" 
                className="w-full bg-secondary hover:bg-red-700 text-white font-black py-6 px-8 rounded-2xl transition-all shadow-[0_10px_30px_rgba(227,27,35,0.3)] active:scale-95 uppercase italic tracking-widest flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer h-[68px]"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Book Now"}
                {!loading && <ArrowRight size={24} strokeWidth={3} />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
