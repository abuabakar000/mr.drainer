'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Calendar, Menu, X, ArrowRight, Clock } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Top Banner / Contact Info */}
      <div className="bg-secondary text-white py-1 px-4 text-center text-sm font-medium">
        Emergency Plumbing? Call Mr. Drainer Now! <span className="hover:underline cursor-pointer italic">(844) 740-8904</span>
      </div>

      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Mr. Drainer Logo" 
            width={240} 
            height={80} 
            className="h-14 md:h-16 w-auto object-contain transition-all hover:scale-105 duration-300"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10 text-sm font-bold text-gray-700 uppercase tracking-widest">
          <Link href="/residential" className={`hover:text-primary transition-all border-b-2 pb-1 ${pathname === '/residential' ? 'border-primary' : 'border-transparent hover:border-primary'}`}>Residential</Link>
          <Link href="/commercial" className={`hover:text-primary transition-all border-b-2 pb-1 ${pathname === '/commercial' ? 'border-primary' : 'border-transparent hover:border-primary'}`}>Commercial</Link>
          <Link href="/emergency" className={`hover:text-primary transition-all text-secondary border-b-2 pb-1 ${pathname === '/emergency' ? 'border-secondary' : 'border-transparent hover:border-secondary'}`}>Emergency Service</Link>
          <Link href="/about" className={`hover:text-primary transition-all border-b-2 pb-1 ${pathname === '/about' ? 'border-primary' : 'border-transparent hover:border-primary'}`}>About Us</Link>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-4">
          <Link href="/schedule" className="hidden md:flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-bold text-sm hover:bg-blue-800 transition-all shadow-lg active:scale-95 uppercase tracking-wider cursor-pointer">
            <Calendar size={18} />
            Schedule Service
          </Link>
          
          <div className="flex flex-col items-end">
            <span className="text-xs font-bold text-gray-500 uppercase">Call Today</span>
            <a href="tel:8447408904" className="text-base md:text-2xl font-black text-primary hover:text-secondary transition-colors leading-none cursor-pointer">
              (844) 740-8904
            </a>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-primary hover:text-secondary transition-colors cursor-pointer"
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-primary/20 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Content (Drawer) */}
        <div 
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-screen bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="p-6 flex items-center justify-between border-b border-gray-100">
            <Image src="/logo.png" alt="Mr. Drainer Logo" width={200} height={70} className="h-10 w-auto object-contain" />
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-400 hover:text-secondary transition-colors cursor-pointer"
            >
              <X size={28} />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto py-8 px-6 space-y-2">
            {[
              { label: 'Home', href: '/' },
              { label: 'Residential', href: '/residential' },
              { label: 'Commercial', href: '/commercial' },
              { label: 'Emergency Service', href: '/emergency', urgent: true },
              { label: 'About Us', href: '/about' },
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between p-4 rounded-xl font-black uppercase italic tracking-tighter transition-all ${
                  pathname === link.href 
                    ? 'bg-primary/5 text-primary' 
                    : link.urgent 
                      ? 'text-secondary hover:bg-secondary/5' 
                      : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
                <ArrowRight size={18} className={pathname === link.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} />
              </Link>
            ))}
          </div>

          {/* Footer / CTA */}
          <div className="p-8 bg-gray-50 border-t border-gray-100 space-y-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Emergency support 24/7</span>
              <a href="tel:8447408904" className="text-2xl font-black text-primary hover:text-secondary transition-colors italic">
                (844) 740-8904
              </a>
            </div>
            
            <Link 
              href="/schedule" 
              className="w-full bg-secondary hover:bg-red-700 text-white font-black py-5 rounded-xl transition-all shadow-xl active:scale-95 uppercase italic tracking-widest flex items-center justify-center gap-3 cursor-pointer"
            >
              <Clock size={20} />
              Book Online
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
