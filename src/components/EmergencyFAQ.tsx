'use client';

import { useState } from 'react';
import { Plus, Minus, CheckCircle2 } from 'lucide-react';

const faqs = [
  {
    question: "WHAT COUNTS AS A PLUMBING EMERGENCY?",
    answer: "A plumbing emergency is any situation that risks immediate water damage, health hazards, or loss of essential services. This includes burst pipes, severe sewer backups, overflowing toilets, and major water leaks."
  },
  {
    question: "HOW FAST CAN YOU GET HERE?",
    answer: "We prioritize emergency calls and typically aim to have a technician dispatched within 60 minutes. Because our professionals are locally owned and operated, we are often right around the corner."
  },
  {
    question: "DO YOU CHARGE EXTRA FOR NIGHTS OR WEEKENDS?",
    answer: "No! At Mr. Rooter Plumbing®, we believe in upfront, honest pricing. We do not charge extra for night, weekend, or holiday emergency services. You get the same fair price 24/7."
  },
  {
    question: "WHAT SHOULD I DO WHILE WAITING FOR THE PLUMBER?",
    answer: "The first step in most emergencies is to shut off the main water valve to prevent further damage. If it's a gas leak, evacuate immediately and call from a safe distance."
  }
];

export default function EmergencyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-pattern relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 italic uppercase tracking-tighter">
            Emergency <br />
            <span className="text-secondary">Common Questions</span>
          </h2>
          <div className="w-24 h-2 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl shadow-xl overflow-hidden border-l-8 border-secondary group transition-all duration-300"
            >
              <button
                type="button"
                className="w-full p-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenIndex(openIndex === index ? null : index);
                }}
              >
                <span className={`text-xl font-black italic uppercase tracking-tight transition-colors ${openIndex === index ? 'text-secondary' : 'text-primary'}`}>
                  {faq.question}
                </span>
                <div className={`p-3 rounded-2xl transition-all duration-300 ${openIndex === index ? 'bg-secondary text-white' : 'bg-gray-100 text-primary'}`}>
                  {openIndex === index ? <Minus size={24} strokeWidth={3} /> : <Plus size={24} strokeWidth={3} />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-8 pb-8">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-lg text-gray-600 font-medium leading-relaxed mb-6">
                      {faq.answer}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {["24/7 Fast Dispatch", "No Overtime Fees", "Water Damage Mitigation", "Licensed & Insured"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 size={20} className="text-secondary" strokeWidth={3} />
                          <span className="font-bold text-primary uppercase text-sm tracking-widest">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
