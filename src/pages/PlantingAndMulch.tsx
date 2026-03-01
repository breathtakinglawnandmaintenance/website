import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCTA from '../components/ServiceCTA';

export default function PlantingAndMulch() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Planting and Mulch Services | Saratoga Springs, NY | Breathtaking Lawn and Maintenance Care"
        description="Professional planting and mulch installation in Saratoga Springs, NY. Garden bed design, seasonal plantings, and premium mulch services. Request a free quote."
        canonicalPath="/services/mulch-flower-beds"
      />

      <Header />

      {/* HEADER SECTION */}
      <section className="pt-48 pb-20 border-b border-stone-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-primary-950">
            Planting <span className="italic font-light text-stone-400">& Mulch</span>
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
                  srcSet="/images/planting-flower-bed-cell.webp"
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet="/images/planting-flower-bed-tablet.webp"
                />
                <img
                  src="/images/planting-flower-bed.webp"
                  alt="New residential flower bed installation along home foundation"
                  className="w-full h-auto object-cover shadow-2xl rounded-sm"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 border border-stone-200 translate-x-4 translate-y-4 -z-10" />
            </div>

            <div className="max-w-xl">
              <h2 className="text-3xl font-serif text-primary-950 mb-6">
                Flower Bed Design & Installation
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                We plan and install garden beds that complement your property and give it real curb appeal. The right plants, in the right spots, done 
                cleanly from the start.
              </p>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 lg:order-1 max-w-xl lg:ml-auto">
              <h2 className="text-3xl font-serif text-primary-950 mb-6">
                Mulch Installation
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                A fresh layer of mulch goes a long way. Cleaner beds, healthier plants, and a polished look that ties the whole yard together. We 
                install it right so it looks good and does its job.
              </p>
            </div>

            <div className="order-1 lg:order-2 relative">
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="/images/mulched-brick-flower-bed-cell.webp"
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet="/images/mulched-brick-flower-bed-tablet.webp"
                />
                <img
                  src="/images/mulched-brick-flower-bed.webp"
                  alt="Fresh black mulch installation in landscaped garden bed with stone border"
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
                  srcSet="/images/mulch-beding-cell.webp"
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet="/images/mulch-beding-tablet.webp"
                />
                <img
                  src="/images/mulch-beding.webp"
                  alt="Fresh mulch applied around shrubs in residential landscape bed"
                  className="w-full h-auto object-cover shadow-2xl rounded-sm"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 border border-stone-200 translate-x-4 translate-y-4 -z-10" />
            </div>

            <div className="max-w-xl">
              <h2 className="text-3xl font-serif text-primary-950 mb-6">
                Why Mulch Matters
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                Mulch does more than look good. It protects your plants through summer heat and winter cold, keeps weeds down, and slowly enriches the 
                soil over time. A simple investment that works for your yard all year long.
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