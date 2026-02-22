import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['services', 'testimonials', 'about', 'contact'] as const;

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="container mx-auto px-6 py-12 md:py-10">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="block" onClick={() => setIsOpen(false)}>
            <img
              src="https://raw.githubusercontent.com/breathtakinglawnandmaintenance/images/main/business%20logo.png"
              alt="Breathtaking Lawn & Maintenance"
              className="h-32 md:h-36 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,1)] md:drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
            />
          </Link>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={36} /> : <Menu size={36} />}
          </button>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/#${item}`}
                onClick={handleNavClick}
                className="text-xs uppercase tracking-[0.4em] font-bold text-white hover:text-secondary-400 transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden mt-6 p-8 bg-black/95 backdrop-blur-md rounded-xl border border-white/10 flex flex-col gap-8 shadow-2xl">
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/#${item}`}
                onClick={handleNavClick}
                className="text-left text-xs uppercase tracking-[0.3em] font-bold text-white hover:text-secondary-400"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}