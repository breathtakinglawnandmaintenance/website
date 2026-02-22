import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-primary-950 text-stone-300 py-20 border-t border-white/5">
      <div className="container mx-auto px-6">

        {/* GRID */}
        <div
          className="
            grid grid-cols-1
            md:grid-cols-2 md:justify-items-center
            lg:grid-cols-[1.2fr_1fr_1.3fr_0.9fr] lg:justify-items-start
            gap-10 items-start
            text-center md:text-left
          "
        >
          {/* 1. LEFT: Business Logo & Branding */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" onClick={scrollToTop} className="block mb-6">
              <img
                src="https://raw.githubusercontent.com/breathtakinglawnandmaintenance/images/main/business%20logo.png"
                alt="Breathtaking Lawn & Maintenance"
                className="h-20 w-auto object-contain brightness-110 contrast-110"
              />
            </Link>
            <p className="text-stone-500 text-[10px] font-light tracking-[0.2em] uppercase">
              Established 2021
            </p>
          </div>

          {/* 2. Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-secondary-500/80">
              Navigation
            </h4>

            <ul className="space-y-4 text-sm font-light">
              <li>
                <button
                  onClick={scrollToTop}
                  className="hover:text-secondary-400 transition-colors cursor-pointer outline-none"
                >
                  Home
                </button>
              </li>

              <li>
                <a href="/#services" className="hover:text-secondary-400 transition-colors">
                  Services
                </a>
              </li>

              <li>
                <a href="/#about" className="hover:text-secondary-400 transition-colors">
                  About Us
                </a>
              </li>

              <li>
                <a href="/#testimonials" className="hover:text-secondary-400 transition-colors">
                  Testimonials
                </a>
              </li>

              <li>
                <Link to="/privacy-policy" className="hover:text-secondary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Business Information */}
          <div className="space-y-6 md:pr-6 flex flex-col items-center md:items-start">
            <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-secondary-500/80">
              Business Information
            </h4>

            <div className="flex items-start gap-4 justify-center md:justify-start">
              <Phone size={16} className="text-secondary-400 mt-1" />
              <div className="text-center md:text-left">
                <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">Call</p>
                <p className="text-sm text-white font-light">518-682-0033</p>
              </div>
            </div>

            <div className="flex items-start gap-4 justify-center md:justify-start">
              <Mail size={16} className="text-secondary-400 mt-1" />
              <div className="text-center md:text-left">
                <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">Email</p>
                <a
                  href="mailto:Breathtakinglawnandmaintenance@yahoo.com"
                  className="text-sm text-white font-light hover:text-secondary-400 transition-colors break-words"
                >
                  Breathtakinglawnandmaintenance@yahoo.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 justify-center md:justify-start">
              <MapPin size={16} className="text-secondary-400 mt-1" />
              <div className="text-center md:text-left">
                <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">HQ</p>
                <p className="text-sm text-white font-light">Saratoga Springs, NY</p>
              </div>
            </div>

            <div className="flex items-start gap-4 justify-center md:justify-start">
              <Clock size={16} className="text-secondary-400 mt-1" />
              <div className="text-center md:text-left">
                <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">Hours</p>
                <p className="text-sm text-white font-light">Mon–Sat: 8:00 AM – 4:00 PM</p>
                <p className="text-sm text-white font-light">Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* 4. Social */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-secondary-500/80">
              Connect With Us
            </h4>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-white/10 rounded-full hover:bg-secondary-500 hover:text-primary-950 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>

              <span className="text-xs font-light text-stone-500 uppercase tracking-widest">
                Follow our work
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.2em] text-stone-600 font-medium text-center">
          <p>&copy; 2026 Breathtaking Lawn and Maintenance Care, LLC. All Rights Reserved.</p>

          <a
            href="https://hmmarketingdesigns.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 text-amber-400 hover:text-amber-300 transition-colors duration-300 font-normal"
          >
            Designed by HM Marketing Designs
          </a>
        </div>
      </div>
    </footer>
  );
}
