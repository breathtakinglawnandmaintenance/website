import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCTA from '../components/ServiceCTA';

export default function Hardscapes() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Hardscaping & Landscaping Services | Saratoga Springs, NY | Breathtaking Lawn and Maintenance Care"
        description="Custom hardscaping and landscaping in Saratoga Springs, NY. Patios, walkways, retaining walls, and complete landscape transformations. Request a free quote."
        canonicalPath="/services/landscaping-hardscapes"
        preloadImage="https://raw.githubusercontent.com/breathtakinglawnandmaintenance/images/main/hardscaping%20pool.webp"
      />

      <Header />

      {/* HEADER SECTION */}
      <section className="pt-48 pb-20 border-b border-stone-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-primary-950">
            Landscaping <span className="italic font-light text-stone-400">& Hardscapes</span>
          </h1>
        </div>
      </section>

      <main className="py-24">
        <div className="container mx-auto px-6">

          {/* ROW 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://raw.githubusercontent.com/breathtakinglawnandmaintenance/images/main/hardscaping%20pool.webp"
                  alt="Stamped concrete poolside patio and walkway hardscape installation"
                  className="w-full h-[280px] sm:h-[340px] md:h-[420px] lg:h-[500px] object-cover object-[50%_35%] shadow-2xl rounded-sm"
                />
              </div>
            </div>

            <div className="max-w-xl">
              <h2 className="text-3xl font-serif text-primary-950 mb-6">
                Custom Hardscape Design
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                From pool surrounds to patios and walkways, we design and install hardscapes that are built to last and look great doing it. Clean 
                lines, quality materials, and work that holds up season after season.
              </p>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 lg:order-1 max-w-xl lg:ml-auto">
              <h2 className="text-3xl font-serif text-primary-950 mb-6">
                Outdoor Living Spaces
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                We build and install custom outdoor structures using quality brick and stonework designed to enhance your space and built to hold up 
                for years to come.
              </p>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10">
                <img
                  src="https://raw.githubusercontent.com/breathtakinglawnandmaintenance/images/main/brick%20work%20for%20outdoor%20grill.webp"
                  alt="Built-in outdoor grill installed in stone brick hardscape wall"
                  className="w-full h-[280px] sm:h-[340px] md:h-[420px] lg:h-[500px] object-cover object-center shadow-2xl rounded-sm"
                />
              </div>
            </div>
          </div>

          {/* ROW 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://raw.githubusercontent.com/breathtakinglawnandmaintenance/images/main/Hardscaping%20brick.webp"
                  alt="Stone paver hardscape installation set into landscaped ground"
                  className="w-full h-[280px] sm:h-[340px] md:h-[420px] lg:h-[500px] object-cover object-center shadow-2xl rounded-sm"
                />
              </div>
            </div>

            <div className="max-w-xl">
              <h2 className="text-3xl font-serif text-primary-950 mb-6">
                Landscape Transformation
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                Every great outdoor space starts with careful planning and skilled hands. We take the time to do the groundwork right, so the finished 
                result speaks for itself.
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