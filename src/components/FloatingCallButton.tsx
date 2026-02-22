import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+15186820033"
      className="md:hidden fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50 flex items-center gap-2"
      aria-label="Call us"
    >
      <Phone size={20} />
      <span className="text-sm font-semibold tracking-wide">
        Call Us
      </span>
    </a>
  );
}
