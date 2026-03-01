import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCTA from '../components/ServiceCTA';

export default function LawnCare() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Lawn Care and Maintenance | Saratoga Springs, NY | Breathtaking Lawn and Maintenance Care"
        description="Professional lawn care and maintenance in Saratoga Springs, NY..."
        canonicalPath="/services/lawn-care"
       />

      <Header />

      {/* HERO / HEADER */}
      <section className="pt-48 pb-20 border-b border-stone-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-primary-950">
            Lawn Care <span className="italic font-light text-stone-400">& Maintenance</span>
          </h1>
        </div>
      </section>

      <main className="py-24">
        <div className="container mx-auto px-6">

          {/* ROW 1 — OPTIMIZED HERO IMAGE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative">
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="/images/Cut-lawn-cell.webp"
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet="/images/Cut-lawn-tablet.webp"
                />
                <img
                  src="/images/Cut-lawn.webp"
                  alt="Professional mowing services (striped lawn cut pattern)"
                  className="w-full h-auto object-cover shadow-2xl rounded-sm"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 border border-stone-200 translate-x-4 translate-y-4 -z-10" />
            </div>

            <div className="max-w-xl">
              <h2 className="text-3xl font-serif text-primary-950 mb-6">
                Professional Mowing Services
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                Our expert team provides regular mowing services using professional-grade equipment to ensure a perfectly manicured lawn.
                We follow proper mowing techniques, including varying cutting patterns to promote healthy grass growth and prevent soil compaction.
                Each visit includes edging along sidewalks and driveways for a clean, polished look.
              </p>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 lg:order-1 max-w-xl lg:ml-auto">
              <h2 className="text-3xl font-serif text-primary-950 mb-6">
                Edging & Trimming
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                Clean edges and precise trimming make the difference between a mowed lawn and a professionally maintained property. We carefully edge 
                along sidewalks, driveways, and landscape beds, and trim around obstacles to give your lawn a crisp, finished look.
              </p>
            </div>

            <div className="order-1 lg:order-2 relative">
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="/images/trimmed-brush-cell.webp"
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet="/images/trimmed-brush-tablet.webp"
                />
                <img
                  src="/images/trimmed-brush-2.webp"
                  alt="Edging and trimming along roadside hedges"
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
                  srcSet="/images/Fall-leaves-cell.webp"
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet="/images/Fall-leaves-tablet.webp"
                />
                <img
                  src="/images/Fall-leaves.webp"
                  alt="Seasonal cleanup (fall leaf removal)"
                  className="w-full h-auto object-cover shadow-2xl rounded-sm"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 border border-stone-200 translate-x-4 translate-y-4 -z-10" />
            </div>

            <div className="max-w-xl">
              <h2 className="text-3xl font-serif text-primary-950 mb-6">
                Seasonal Cleanup 
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                From spring debris to fall leaf removal, we handle the seasonal work that keeps your property looking its best year-round. Our team 
                clears brush, removes leaves, and tackles seasonal buildup so your landscape stays clean and healthy through every season.
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