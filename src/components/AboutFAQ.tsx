'use client';

import { useState } from 'react';
import { Plus, Minus, CheckCircle2 } from 'lucide-react';

const faqs = [
  {
    question: "WHAT MAKES MR. ROOTER PLUMBING DIFFERENT?",
    answer: "We are united by a common set of values and a shared belief in providing the best customer service possible. Our professionals are licensed, insured, and committed to transparency with upfront pricing."
  },
  {
    question: "ARE MR. ROOTER LOCATIONS INDEPENDENTLY OWNED?",
    answer: "Yes, Mr. Rooter Plumbing is a large family of independently owned and operated plumbing companies. This allows each location to serve its local community with the support and standards of a national brand."
  },
  {
    question: "WHAT IS THE R.I.C.H. CODE OF VALUES?",
    answer: "R.I.C.H. stands for Respect, Integrity, Customer Focus, and Having Fun in the Process. These core values guide every interaction we have with our clients and each other."
  },
  {
    question: "HOW LONG HAS MR. ROOTER BEEN IN BUSINESS?",
    answer: "Mr. Rooter has been providing top-tier plumbing services for decades, growing into one of the most trusted names in the industry across North America."
  }
];

export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-pattern relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 italic uppercase tracking-tighter">
            Frequent questions about <br />
            <span className="text-secondary">Our Brand</span>
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
                      {["Trusted Since 1970", "Upfront Pricing", "Guaranteed Workmanship", "Licensed Experts"].map((item, i) => (
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
