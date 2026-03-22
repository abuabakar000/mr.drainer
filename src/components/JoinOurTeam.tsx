'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function JoinOurTeam() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col lg:flex-row items-stretch border border-gray-100 p-4 md:p-8">
          <div className="lg:w-1/2 p-6 md:p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-black text-primary mb-8 italic uppercase tracking-tighter">
              Join Our <span className="text-secondary">Team</span>
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600 font-medium leading-[1.8] text-lg">
                Plumbing isn&apos;t just about leaks, pipes, and gaskets — it&apos;s about people. Mr. Drainer Plumbing franchisees offer you a career path for growth, and will treat you with the same respect and integrity that they treat their own friends and family, because at the end of the day, you can&apos;t serve customers well without a happy, motivated, and committed team.
              </p>
              <p className="text-gray-600 font-medium leading-[1.8] text-lg">
                Creating a culture with an exemplary work ethic is just as important as plumbing, and it&apos;s part of everything Mr. Drainer Plumbing does.
              </p>
              <div className="w-1/2 h-0.5 bg-gray-100 my-8"></div>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm leading-relaxed">
                Start your career with us today. We offer exciting opportunities for growth and success in an important space.
              </p>
            </div>
            <div className="mt-12">
              <button className="bg-primary hover:bg-blue-800 text-white font-black py-5 px-10 rounded-xl transition-all shadow-xl active:scale-95 uppercase italic tracking-widest flex items-center gap-3 w-fit cursor-pointer">
                View All Open Positions <ArrowRight size={20} strokeWidth={3} />
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/join-team.png" 
              alt="Join Our Team" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
