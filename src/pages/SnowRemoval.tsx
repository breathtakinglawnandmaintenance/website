import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCTA from "../components/ServiceCTA";

export default function SnowRemoval() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Snow Removal Services | Saratoga Springs, NY | Breathtaking Lawn and Maintenance Care"
        description="Professional residential snow removal services in Saratoga Springs, NY. Driveway plowing, de-icing, and winter safety management. Request a free quote."
        canonicalPath="/services/snow-removal"
      />

      <Header />

      {/* HEADER SECTION */}
      <section className="pt-48 pb-20 border-b border-stone-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-primary-950">
            Snow{" "}
            <span className="italic font-light text-stone-400">Removal</span>
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
                  srcSet="/images/unburied-car-cell.webp"
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet="/images/unburied-car-tablet.webp"
                />
                <img
                  src="/images/unburied-car.webp"
                  alt="Snow removed around car"
                  className="w-full h-auto object-cover shadow-2xl rounded-sm"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 border border-stone-200 translate-x-4 translate-y-4 -z-10" />
            </div>

            <div className="max-w-xl">
              <h2 className="text-3xl font-serif text-primary-950 mb-6">
                Timely Winter Response
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                When winter weather strikes, we're ready. Our team is there when
                you need us, clearing snow quickly to keep your property safe
                and accessible throughout the season.
              </p>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 lg:order-1 max-w-xl lg:ml-auto">
              <h2 className="text-3xl font-serif text-primary-950 mb-6">
                De-Icing & Surface Protection
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                Clearing snow is only half the battle. We treat surfaces to
                prevent ice buildup and reduce slip hazards, keeping your
                property safe throughout the winter season.
              </p>
            </div>

            <div className="order-1 lg:order-2 relative">
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="/images/plowed-driveway-cell.webp"
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet="/images/plowed-driveway-tablet.webp"
                />
                <img
                  src="/images/plowed-driveway.webp"
                  alt="Snow plowed driveway"
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
                  srcSet="/images/cleared-driveway-cell.webp"
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet="/images/cleared-driveway-tablet.webp"
                />
                <img
                  src="/images/cleared-driveway.webp"
                  alt="Snow removed from driveway"
                  className="w-full h-auto object-cover shadow-2xl rounded-sm"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 border border-stone-200 translate-x-4 translate-y-4 -z-10" />
            </div>

            <div className="max-w-xl">
              <h2 className="text-3xl font-serif text-primary-950 mb-6">
                Driveways & Walkways
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                We make sure driveways, walkways, and entry points are fully
                cleared and treated after every storm. So your property stays
                accessible and safe no matter what winter brings.
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
