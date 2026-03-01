import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCTA from '../components/ServiceCTA';

export default function PropertyRepairs() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Property Repairs | Saratoga Springs, NY | Breathtaking Lawn and Maintenance Care"
        description="Professional property repair services in Saratoga Springs, NY. Structural repairs and interior & exterior maintenance. Request a free quote."
        canonicalPath="/services/property-maintenance"
      />

      <Header />

      {/* HEADER SECTION */}
      <section className="pt-48 pb-20 border-b border-stone-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-primary-950">
            Property <span className="italic font-light text-stone-400">Repairs</span>
          </h1>
        </div>
      </section>

      <main className="py-24">
        <div className="container mx-auto px-6">

          {/* ROW 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative">
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="/images/Stall-doors-cell.webp"
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet="/images/Stall-doors-tablet.webp"
                />
                <img
                  src="/images/Stall-doors.webp"
                  alt="Custom wood stall construction and structural property repair work"
                  className="w-full h-auto object-cover shadow-2xl rounded-sm"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 border border-stone-200 translate-x-4 translate-y-4 -z-10" />
            </div>

            <div className="max-w-xl">
              <h2 className="text-3xl font-serif text-primary-950 mb-6">
                Expert Property Repairs
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                From structural fixes and hardware replacements to doors, fencing, and general wear. We handle the repairs that keep your property 
                functional, safe, and looking its best. No job is too difficult, and every repair is done right the first time.
              </p>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 lg:order-1 max-w-xl lg:ml-auto">
              <h2 className="text-3xl font-serif text-primary-950 mb-6">
                Property Restoration
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                We bring rental units back to life. We handle the repairs, cleanup, and finishing touches that make a space look fresh and ready for 
                the next tenant. Reliable work, done the right way.
              </p>
            </div>

            <div className="order-1 lg:order-2 relative">
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="/images/remodeled-kitchen-cell.webp"
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet="/images/remodeled-kitchen-tablet.webp"
                />
                <img
                  src="/images/remodeled-kitchen.webp"
                  alt="Renovated residential kitchen with new cabinets and flooring after property restoration"
                  className="w-full h-auto object-cover shadow-2xl rounded-sm"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 border border-stone-200 -translate-x-4 translate-y-4 -z-10" />
            </div>
          </div>

          {/* ROW 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="/images/Closet-doors-cell.webp"
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet="/images/Closet-doors-tablet.webp"
                />
                <img
                  src="/images/Closet-doors.webp"
                  alt="Interior room renovation with new flooring and finished closet installation"
                  className="w-full h-auto object-cover shadow-2xl rounded-sm"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 border border-stone-200 translate-x-4 translate-y-4 -z-10" />
            </div>

            <div className="max-w-xl">
              <h2 className="text-3xl font-serif text-primary-950 mb-6">
                Work You Can Count On
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                From exterior wear to interior details, we approach every job with high standards and a simple goal. We complete the work the way you envisioned it.
              </p>
            </div>
          </div>

        </div>
      </main>

      <ServiceCTA />
      <Footer />
    </div>
  );
}