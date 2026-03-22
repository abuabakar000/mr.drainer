'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2, Minus, Plus } from 'lucide-react';

const faqData = [
  {
    question: "What is the Advantage Plan?",
    answer: (
      <div className="space-y-4">
        <p className="text-gray-600 font-medium leading-relaxed">
          While our plumbing maintenance services can prevent many emergencies, we know they can still happen. 
          Be prepared by signing up for our <span className="text-primary hover:underline cursor-pointer font-bold">Advantage Plan</span>.
        </p>
        <p className="text-gray-700 font-bold uppercase tracking-tight">Under our Advantage Plan, you can enjoy:</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
          {[
            "Priority scheduling",
            "Preferential pricing",
            "VIP discounts and specials",
            "Personalized records",
            "Transferable agreements",
            "Multi-site protection"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 group">
              <div className="bg-secondary p-1 rounded-full text-white transform group-hover:scale-110 transition-transform">
                <CheckCircle2 size={18} strokeWidth={3} />
              </div>
              <span className="font-bold text-primary italic uppercase tracking-tight text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  },
  {
    question: "Do you offer 24/7 emergency services?",
    answer: "Yes, we are available 24/7, 365 days a year to handle any plumbing emergency. Our team is always ready to take your call and dispatch a professional to your location immediately."
  },
  {
    question: "Are your plumbers licensed and insured?",
    answer: "Absolutely. All our service professionals are fully licensed, background-checked, and insured for your peace of mind and protection."
  },
  {
    question: "How do you handle pricing?",
    answer: "We provide upfront, honest pricing before any work begins. You'll know exactly what to expect, with no hidden fees or overtime charges."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-primary uppercase italic tracking-tighter">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>
          <p className="text-lg text-gray-500 font-bold uppercase tracking-widest">
            Expert answers to your plumbing concerns
          </p>
        </div>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg border-l-[6px] transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'border-secondary shadow-xl' : 'border-gray-100 hover:border-primary'
              }`}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenIndex(openIndex === index ? null : index);
                }}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left group outline-none cursor-pointer"
              >
                <span className={`text-xl md:text-2xl font-black italic uppercase tracking-tight transition-colors ${
                  openIndex === index ? 'text-primary' : 'text-gray-700 group-hover:text-primary'
                }`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-lg transition-all ${
                  openIndex === index ? 'bg-secondary text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-primary group-hover:text-white'
                }`}>
                  {openIndex === index ? <Minus size={24} strokeWidth={3} /> : <Plus size={24} strokeWidth={3} />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-8 pt-0 border-t border-gray-50 bg-gray-50/30">
                  {typeof faq.answer === 'string' ? (
                    <p className="text-gray-600 font-medium leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  ) : (
                    faq.answer
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
