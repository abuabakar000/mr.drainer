import Link from 'next/link';
import Image from 'next/image';
import { Phone, Calendar, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Top Banner / Contact Info */}
      <div className="bg-secondary text-white py-1 px-4 text-center text-sm font-medium">
        Emergency Plumbing? Call Mr. Drainer Now! <span className="hover:underline cursor-pointer italic">(844) 740-8904</span>
      </div>

      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Mr. Drainer Logo" 
            width={280} 
            height={90} 
            className="h-16 md:h-20 w-auto object-contain transition-all hover:scale-105 duration-300"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10 text-sm font-bold text-gray-700 uppercase tracking-widest">
          <Link href="/residential" className="hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">Residential</Link>
          <Link href="/commercial" className="hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">Commercial</Link>
          <Link href="/emergency" className="hover:text-primary transition-all text-secondary border-b-2 border-transparent hover:border-secondary pb-1">Emergency Service</Link>
          <Link href="/about" className="hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">About Us</Link>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-4">
          <Link href="/schedule" className="hidden md:flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-bold text-sm hover:bg-blue-800 transition-all shadow-lg active:scale-95 uppercase tracking-wider">
            <Calendar size={18} />
            Schedule Service
          </Link>
          
          <div className="flex flex-col items-end">
            <span className="text-xs font-bold text-gray-500 uppercase">Call Today</span>
            <a href="tel:8447408904" className="text-lg md:text-2xl font-black text-primary hover:text-secondary transition-colors leading-none">
              (844) 740-8904
            </a>
          </div>

          <button className="lg:hidden p-2 text-gray-700">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
