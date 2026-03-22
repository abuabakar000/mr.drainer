'use client';

import { ArrowRight } from 'lucide-react';

interface BookingFormProps {
  defaultTab?: 'Residential' | 'Commercial';
}

export default function BookingForm({ defaultTab = 'Residential' }: BookingFormProps) {
  return (
    <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-12 border border-blue-50 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/3">
          <div className="flex gap-4 mb-8 border-b border-gray-100 pb-4">
            <button className={`flex items-center gap-2 font-black pb-2 text-sm uppercase italic transition-all ${
              defaultTab === 'Residential' ? 'text-primary border-b-4 border-primary' : 'text-gray-400 hover:text-primary'
            }`}>
              Residential
            </button>
            <button className={`flex items-center gap-2 font-black pb-2 text-sm uppercase italic transition-all ${
              defaultTab === 'Commercial' ? 'text-primary border-b-4 border-primary' : 'text-gray-400 hover:text-primary'
            }`}>
              Commercial
            </button>
          </div>
          <h2 className="text-3xl font-black text-primary mb-4 italic uppercase tracking-tighter">
            Let Us <span className="text-secondary">Call You</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Complete the form and we&apos;ll be in touch</p>
        </div>
        
        <div className="lg:w-2/3 w-full">
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <input type="text" placeholder="First Name*" className="bg-gray-50/50 border-2 border-gray-100 p-5 rounded-xl focus:outline-none focus:border-primary/30 focus:bg-white transition-all font-bold placeholder:text-gray-300" />
            <input type="text" placeholder="Last Name*" className="bg-gray-50/50 border-2 border-gray-100 p-5 rounded-xl focus:outline-none focus:border-primary/30 focus:bg-white transition-all font-bold placeholder:text-gray-300" />
            <input type="tel" placeholder="Phone Number*" className="bg-gray-50/50 border-2 border-gray-100 p-5 rounded-xl focus:outline-none focus:border-primary/30 focus:bg-white transition-all font-bold placeholder:text-gray-300" />
            <input type="email" placeholder="Email Address*" className="md:col-span-2 bg-gray-50/50 border-2 border-gray-100 p-5 rounded-xl focus:outline-none focus:border-primary/30 focus:bg-white transition-all font-bold placeholder:text-gray-300" />
            <button className="bg-primary hover:bg-blue-800 text-white font-black py-5 px-8 rounded-xl transition-all shadow-xl active:scale-95 uppercase italic tracking-widest flex items-center justify-center gap-3">
              Book Online <ArrowRight size={20} strokeWidth={3} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
