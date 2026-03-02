import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+15186820033"
      aria-label="Call us"
      className="
        md:hidden
        fixed bottom-6 right-6
        bg-green-700
        text-white
        px-5 py-3
        rounded-full
        shadow-lg
        hover:bg-green-800
        focus-visible:ring-2
        focus-visible:ring-white
        focus-visible:ring-offset-2
        focus-visible:ring-offset-primary-950
        transition-colors
        z-50
        flex items-center gap-2
      "
    >
      <Phone size={20} aria-hidden="true" />
      <span className="text-sm font-semibold tracking-wide">
        Call Us
      </span>
    </a>
  );
}
