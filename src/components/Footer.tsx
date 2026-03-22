import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div>
          <Link href="/" className="inline-flex items-center gap-2 mb-4 cursor-pointer">
            <Image 
              src="/logo.png" 
              alt="Mr. Drainer Logo" 
              width={220} 
              height={70} 
              className="h-12 w-auto object-contain cursor-pointer"
            />
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed font-medium">
            Providing reliable and professional plumbing and HVAC services for residential and commercial clients across the nation.
          </p>
        </div>

        {/* Links Column 1 */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-primary pb-2 text-primary uppercase tracking-wider">Services</h3>
          <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-1 text-xs text-gray-400 font-bold uppercase transition-all tracking-wide">
            <li className="italic">Drain Cleaning</li>
            <li className="italic">Sewer Line Repair</li>
            <li className="italic">Water Heaters</li>
            <li className="italic">Emergency Service</li>
            <li className="italic">Sumppump Services</li>
            <li className="italic">Leaky Pipe Repair</li>
            <li className="italic">Hydro Jetting</li>
            <li className="italic">Pipe Shield®</li>
            <li className="italic">Septic Tank Service</li>
            <li className="italic">Gas Line Services</li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-primary pb-2 text-primary uppercase tracking-wider">Resources</h3>
          <ul className="space-y-1 text-xs text-gray-400 font-bold uppercase transition-all tracking-wide">
            <li><Link href="/" className="hover:text-primary transition-colors italic cursor-pointer">Home</Link></li>
            <li><Link href="/residential" className="hover:text-primary transition-colors italic cursor-pointer">Residential</Link></li>
            <li><Link href="/commercial" className="hover:text-primary transition-colors italic cursor-pointer">Commercial</Link></li>
            <li><Link href="/emergency" className="hover:text-primary transition-colors italic cursor-pointer">Emergency</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors italic cursor-pointer">About Us</Link></li>
            <li><Link href="/schedule" className="hover:text-primary transition-colors italic cursor-pointer">Book Online</Link></li>
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
            <Link href="/schedule" className="mt-4 bg-primary text-white px-6 py-3 rounded-md font-bold text-sm hover:bg-blue-800 transition-all shadow-md active:scale-95 uppercase tracking-wider text-center cursor-pointer">
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
