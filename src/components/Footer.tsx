import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div>
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <Image 
              src="/logo.png" 
              alt="Mr. Drainer Logo" 
              width={180} 
              height={60} 
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed font-medium">
            Providing reliable and professional plumbing and HVAC services for residential and commercial clients across the nation.
          </p>
        </div>

        {/* Links Column 1 */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-primary pb-2 text-primary uppercase tracking-wider">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400 font-bold uppercase transition-all tracking-wide">
            <li><Link href="#" className="hover:text-primary">Drain Cleaning</Link></li>
            <li><Link href="#" className="hover:text-primary">Sewer Line Repair</Link></li>
            <li><Link href="#" className="hover:text-primary">Water Heaters</Link></li>
            <li><Link href="#" className="hover:text-primary">Emergency Service</Link></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-primary pb-2 text-primary uppercase tracking-wider">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400 font-bold uppercase transition-all tracking-wide">
            <li><Link href="#" className="hover:text-primary">About Us</Link></li>
            <li><Link href="#" className="hover:text-primary">Why Choose Us</Link></li>
            <li><Link href="#" className="hover:text-primary">FAQ</Link></li>
            <li><Link href="#" className="hover:text-primary">Blog</Link></li>
          </ul>
        </div>

        {/* Contact/Emergency */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-secondary pb-2 text-secondary uppercase tracking-wider">Emergency</h3>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-gray-500 uppercase">Call 24/7/365</span>
            <a href="tel:8447408904" className="text-2xl font-black text-secondary hover:underline transition-all">
              (844) 740-8904
            </a>
            <Link href="/schedule" className="mt-4 bg-primary text-white px-6 py-3 rounded-md font-bold text-sm hover:bg-blue-800 transition-all shadow-md active:scale-95 uppercase tracking-wider text-center">
              Schedule Service
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">
        &copy; {new Date().getFullYear()} Mr. Drainer Plumbing. All Rights Reserved.
      </div>
    </footer>
  );
}
