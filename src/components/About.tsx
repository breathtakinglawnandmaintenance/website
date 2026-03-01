export default function About() {
  return (
    <section id="about" className="py-24 bg-stone-100/50">
      <div className="container mx-auto px-6">
        <div className="bg-white shadow-[0_50px_100px_-30px_rgba(0,0,0,0.12)] p-8 md:p-16 relative z-10 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
            {/* IMAGE */}
            <div className="relative">
              <div className="rounded-sm overflow-hidden shadow-2xl">
                <div className="h-[420px] sm:h-[480px] lg:h-[600px] xl:h-[520px]">
                  <picture>
                      <source
                        media="(max-width: 640px)"
                        srcSet="/images/workers-doing-cement-work-cell.webp"
                      />
                      <source
                        media="(max-width: 1023px)"
                        srcSet="/images/workers-doing-cement-work-tablet.webp"
                      />
                      <source
                        media="(min-width: 1024px) and (max-width: 1024px)"
                        srcSet="/images/workers-doing-cement-work-cell.webp"
                      />
                      <img
                        src="/images/workers-doing-cement-work.webp"
                        alt="The crew performing property maintenance and concrete walkway work at a commercial building entrance"
                        className="w-full h-full object-cover object-[center_80%]"
                        loading="lazy"
                      />
                    </picture>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <h2 className="text-4xl md:text-6xl mb-8 font-serif leading-tight text-primary-950 text-center lg:text-left">
                Why Property Owners
                <span className="block italic lg:text-center">Choose Us</span>
              </h2>

              <div className="space-y-6 text-stone-500 text-lg leading-relaxed font-light text-center lg:text-left">
                <p>
                  We treat every property like it&apos;s our own. Whether it&apos;s
                  maintaining a private home or managing small multi-unit properties, our
                  approach stays the same: thorough, reliable, and built to last.
                </p>
                <p>
                  From seasonal landscaping to routine maintenance and repairs, we bring
                  the same attention to detail across every job. Clients trust us because
                  we show up, do the work right, and keep communication clear from start
                  to finish.
                </p>
              </div>

              {/* SERVICE AREA */}
              <div className="mt-8 text-center">
                <p className="text-[11px] text-stone-500 uppercase tracking-[0.25em] font-medium mb-2">
                  Service Area
                </p>
                <p className="text-stone-600 text-base font-light leading-relaxed">
                  Proudly serving{' '}
                  <span className="text-primary-950 font-normal">Saratoga County, New York </span>{' '}
                  including Saratoga Springs, Ballston Spa, Malta, Wilton, Halfmoon, and
                  Clifton Park.
                </p>
              </div>

              {/* BADGES */}
              <div className="mt-10 border-t border-stone-100 pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center max-w-xl mx-auto">
                  <div>
                    <p className="text-primary-950 font-serif text-2xl">Fully Insured</p>
                  </div>
                  <div>
                    <p className="text-primary-950 font-serif text-2xl">
                      Year-Round Service
                    </p>
                  </div>
                </div>
              </div>
              {/* /BADGES */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}