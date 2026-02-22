import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import About from '../components/About';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-stone-50">
      <SEO
        title="Breathtaking Lawn and Maintenance Care | Property Care in Saratoga Springs, NY"
        description="Breathtaking Lawn and Maintenance Care provides lawn care, property repairs, hardscaping, planting & mulch, and snow removal in Saratoga Springs, NY. Request a free quote."
        canonicalPath="/"
      />

      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[800px] flex flex-col justify-between overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage:
              'url(https://raw.githubusercontent.com/breathtakinglawnandmaintenance/images/main/Site%20background.webp)',
          }}
        />

        {/* TOP/MIDDLE CONTENT */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto pt-48 md:pt-64">
          <h1 className="sr-only">
            Breathtaking Lawn and Maintenance Care | Property Management, Repairs &
            Landscaping in Saratoga Springs, NY
          </h1>

          <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight tracking-[0.05em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] md:drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Breathtaking <br />
            <span className="italic text-stone-200 font-light tracking-normal">
              Property Care
            </span>
          </h2>

          <p className="text-lg md:text-xl text-stone-100 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] md:drop-shadow-md opacity-90">
            From stunning landscapes to reliable property maintenance.
            Comprehensive property care you can count on.
          </p>
        </div>

        {/* BOTTOM CONTENT — DIRECT ANCHOR JUMP */}
        <div className="relative z-10 w-full pb-20 md:pb-32 flex justify-center">
          <a
            href="#contact"
            className="bg-secondary-500 hover:bg-secondary-400 text-primary-950 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.4em] transition-all shadow-2xl active:scale-95 border border-secondary-600/20 inline-flex items-center justify-center"
          >
            Get A Quote
          </a>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="services" className="py-24 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif mb-4 text-primary-950">
            Our Services
          </h2>
          <p className="text-stone-500 uppercase tracking-widest text-sm font-semibold">
            Property Solutions
          </p>
          <div className="w-24 h-px bg-secondary-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <ServiceCard
            title="Professional Lawn Services"
            description="Regular mowing, edging, and seasonal care that keeps lawns healthy and properties looking their best."
            image="https://raw.githubusercontent.com/breathtakinglawnandmaintenance/images/main/lawn%20service%20card.webp"
            link="/services/lawn-care"
          />
          <ServiceCard
            title="Property Repair"
            description="Expert repairs and renovations for properties. From quick fixes to complete transformations."
            image="https://raw.githubusercontent.com/breathtakinglawnandmaintenance/images/main/property%20reair%20card.webp"
            link="/services/property-maintenance"
          />
          <ServiceCard
            title="Hardscaping"
            description="Custom patios, walkways, and stone features built with precision. Durable hardscaping that adds lasting value."
            image="https://raw.githubusercontent.com/breathtakinglawnandmaintenance/images/main/stone%20walkway%20card.webp"
            link="/services/landscaping-hardscapes"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="w-full md:w-[calc(33.333%-1.33rem)]">
            <ServiceCard
              title="Planting & Mulch"
              description="Seasonal plantings, mulch installation, and bed maintenance. We keep your landscape beds looking well maintained."
              image="https://raw.githubusercontent.com/breathtakinglawnandmaintenance/images/main/after-front-walk%20service%20card.webp"
              link="/services/mulch-flower-beds"
            />
          </div>
          <div className="w-full md:w-[calc(33.333%-1.33rem)]">
            <ServiceCard
              title="Snow Removal"
              description="Reliable snow plowing and ice management available 24/7. We keep driveways, walkways, and lots clear throughout winter."
              image="https://raw.githubusercontent.com/breathtakinglawnandmaintenance/images/main/car%20buried%20in%20snow%20card.webp"
              link="/services/snow-removal"
            />
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-12 md:p-16">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION */}
      <About />

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-12 md:p-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-serif text-primary-950 mb-4">
                Get In <span className="italic">Touch</span>
              </h2>

              <p className="text-stone-500 uppercase tracking-widest text-sm font-semibold">
                Consultation
              </p>

              <div className="w-24 h-px bg-secondary-400 mx-auto mt-6"></div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}