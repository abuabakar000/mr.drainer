'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const values = [
  {
    letter: "R",
    title: "Respect",
    image: "/value-respect.png",
    points: [
      "Treating others as we would like to be treated.",
      "Listening with the intent to understand what is being said and acknowledging that what is said is important to the speaker.",
      "Responding in a timely fashion.",
      "Speaking calmly and respectfully, without profanity or sarcasm.",
      "Acknowledging everyone as right from their own perspective."
    ]
  },
  {
    letter: "I",
    title: "Integrity",
    image: "/value-integrity.png",
    points: [
      "Making only agreements we are willing, able and intend to keep.",
      "Communicating any potentially broken agreements at the first appropriate opportunity to all parties to the agreement.",
      "Operating in a responsible manner: 'above the line'.",
      "Operating in a way that is consistent with our values and the needs of our clients."
    ]
  },
  {
    letter: "C",
    title: "Customer Focus",
    image: "/value-customer.png",
    points: [
      "Continuously striving to maximize customer loyalty.",
      "Making our best effort to understand and appreciate the customer's needs in every situation.",
      "Delivering high-quality service and results that exceed expectations."
    ]
  },
  {
    letter: "H",
    title: "Having Fun",
    image: "/value-fun.png",
    points: [
      "In the process!",
      "Nurturing a positive and energetic workplace environment.",
      "Encouraging enthusiasm and a smile in every customer interaction."
    ]
  }
];

export default function AboutValues() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-secondary leading-tight italic uppercase tracking-tighter">
            We Live Our Code of Values by R.I.C.H.
          </h2>
          <div className="w-full max-w-2xl h-1 bg-secondary mx-auto mt-6"></div>
        </div>

        <div className="space-y-32">
          {values.map((value, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Left: Image with Letter Overlay */}
              <div className="lg:w-1/2 relative group">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-primary/10">
                  <Image 
                    src={value.image} 
                    alt={value.title} 
                    width={800} 
                    height={500} 
                    className="object-cover w-full h-[400px] group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"></div>
                </div>
                
                {/* Large Letter Block */}
                <div className={`absolute top-1/2 ${idx % 2 === 1 ? '-left-12' : '-right-12'} -translate-y-1/2 bg-white p-2 rounded-[2rem] shadow-2xl border-4 border-blue-100 hidden md:block`}>
                  <div className="bg-primary w-24 h-24 rounded-[1.5rem] flex items-center justify-center text-white text-6xl font-black italic tracking-tighter">
                    {value.letter}
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="lg:w-1/2 space-y-8">
                <h3 className="text-4xl md:text-5xl font-black text-secondary italic uppercase tracking-tighter">
                  {value.title}
                </h3>
                
                <ul className="space-y-6">
                  {value.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-4 group">
                      <div className="bg-secondary p-1 rounded-full text-white mt-1 group-hover:scale-125 transition-transform">
                        <CheckCircle2 size={24} strokeWidth={3} />
                      </div>
                      <span className="text-lg md:text-xl font-bold text-gray-700 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
