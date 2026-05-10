import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-primary-950 text-stone-300 py-20 border-t border-white/5">
      <div className="container mx-auto px-6">

        <div
          className="
            grid grid-cols-1
            md:grid-cols-2 md:justify-items-center
            lg:grid-cols-[1.2fr_1fr_1.3fr_0.9fr] lg:justify-items-start
            gap-10 items-start
            text-center md:text-left
          "
        >

          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" onClick={scrollToTop} className="block mb-6">
              <img
                src="/images/Medium2.png"
                alt="Breathtaking Lawn & Maintenance"
                width="550"
                height="550"
                className="h-32 w-auto object-contain brightness-110 contrast-110"
              />
            </Link>
            <p className="text-stone-400 text-[10px] font-light tracking-[0.2em] uppercase">
              Established 2021
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-secondary-500/80">
              Navigation
            </h2>

            <ul className="space-y-4 text-sm font-light">
              <li>
                <button
                  onClick={scrollToTop}
                  className="hover:text-secondary-400 transition-colors cursor-pointer"
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

          {/* Business Info */}
          <div className="space-y-6 md:pr-6 flex flex-col items-center md:items-start">
            <h2 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-secondary-500/80">
              Business Information
            </h2>

            <div className="flex items-start gap-4">
              <Phone size={16} className="text-secondary-400 mt-1" />
              <div>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">Call</p>
                <p className="text-sm text-white font-light">518-682-0033</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail size={16} className="text-secondary-400 mt-1" />
              <div>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">Email</p>
                <a
                  href="mailto:Breathtakinglawnandmaintenance@yahoo.com"
                  className="text-sm text-white font-light hover:text-secondary-400 transition-colors break-words"
                >
                  Breathtakinglawnandmaintenance@yahoo.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin size={16} className="text-secondary-400 mt-1" />
              <div>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">HQ</p>
                <p className="text-sm text-white font-light">Saratoga Springs, NY</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock size={16} className="text-secondary-400 mt-1" />
              <div>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">Hours</p>
                <p className="text-sm text-white font-light">Mon–Sat: 8:00 AM – 4:00 PM</p>
                <p className="text-sm text-white font-light">Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-secondary-500/80">
              Connect With Us
            </h2>

            <div className="flex items-center gap-4 mb-6">
              <a
                href="https://www.instagram.com/breathtakinglawnandmaintenance/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Breathtaking Lawn and Maintenance on Instagram"
                className="p-3 border border-white/10 rounded-full hover:bg-secondary-500 hover:text-primary-950 transition-all duration-300"
              >
                <Instagram size={20} aria-hidden="true" />
              </a>

              <a
                href="https://www.facebook.com/breathtakinglawnandmaintenancecare/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Breathtaking Lawn and Maintenance on Facebook"
                className="p-3 border border-white/10 rounded-full hover:bg-secondary-500 hover:text-primary-950 transition-all duration-300"
              >
                <Facebook size={20} aria-hidden="true" />
              </a>

              <a
                href="https://www.yelp.com/biz/breathtaking-lawn-and-maintenance-care-saratoga-springs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Breathtaking Lawn and Maintenance on Yelp"
                className="p-3 border border-white/10 rounded-full hover:bg-secondary-500 hover:text-primary-950 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12.271 8.561c-.34.031-.627-.252-.641-.633L11.354 2.6c-.025-.691.496-1.107 1.077-.9l4.221 1.528c.562.204.676.813.264 1.258l-3.931 4.308a.617.617 0 0 1-.714.167zm-2.603.944c-.102.326-.458.498-.808.384L4.03 8.24c-.663-.219-.795-.876-.3-1.37l3.52-3.521c.483-.483 1.107-.302 1.22.385l.842 5.048a.617.617 0 0 1-.644.723zm-.459 2.68a.617.617 0 0 1 .269.834l-2.468 4.667c-.328.62-.98.635-1.37.08L3.36 13.81c-.373-.529-.158-1.113.512-1.285l5.09-1.339a.617.617 0 0 1 .247 0zm1.06 2.1c.31-.154.693-.023.863.3l2.32 4.748c.308.631-.025 1.173-.757 1.136l-4.56-.231c-.71-.036-1.011-.609-.7-1.254l2.24-4.518a.617.617 0 0 1 .594-.181zm2.574-1.177a.617.617 0 0 1 .762-.43l5.003 1.63c.648.211.766.85.28 1.32l-3.264 3.15c-.475.459-1.097.271-1.235-.436l-.973-4.832a.617.617 0 0 1 .427-.402zm.546-2.637c-.01-.356.276-.66.637-.682l5.284-.325c.68-.042 1.042.523.762 1.092l-1.93 3.902c-.272.549-.893.64-1.282.2l-3.354-3.577a.617.617 0 0 1-.117-.61z" />
                </svg>
              </a>
            </div>

            {/* Google Map */}
            <div className="w-full rounded-lg overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1509594.812945922!2d-75.10024074071983!3d42.35473057714237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5ac0cd04170d13%3A0x24d2f28471a79ca5!2sBreathtaking%20Lawn%20and%20Maintenance%20Care!5e0!3m2!1sen!2sus!4v1778452901047!5m2!1sen!2sus"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Breathtaking Lawn and Maintenance Care location"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.2em] text-stone-400 font-medium text-center">
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
