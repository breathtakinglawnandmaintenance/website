import { useNavigate } from "react-router-dom";

export default function ServiceCTA() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");

    // Wait for Home to render, then jump to the contact section
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
    }, 50);
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-12 md:p-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-serif text-primary-950 mb-4">
              Ready to Get Started?
            </h2>

            <p className="text-stone-500 uppercase tracking-widest text-sm font-semibold">
              Contact us today for a free consultation and quote.
            </p>

            <div className="w-24 h-px bg-secondary-400 mx-auto mt-6"></div>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleClick}
              className="bg-secondary-500 hover:bg-secondary-400 text-primary-950 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.4em] transition-all shadow-2xl active:scale-95 border border-secondary-600/20"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
