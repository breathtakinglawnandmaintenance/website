export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Rachel D.',
      role: 'Saratoga Springs Homeowner',
      text: "Crystal and her team at Breathtaking Lawn and Maintenance have been taking care of our rental properties in the Capital Region for about five years. They remove snow and clear walkways in the winter, they take care of lawn maintenance in the warmer months, they do spring clean ups in our yards, they perform building maintenance all year long (anything from fixing leaking faucets to changing door locks to replacing old toilets), and they have renovated many of our apartments and made them modern and beautiful. Crystal's team is hard-working, efficient, and very capable. They do great work for us and we feel so grateful to work with them. Crystal herself is honest, reliable, kind, and a lovely person to work with. She is a good communicator, responds promptly, and she is committed to finding a way to help us every time. I highly recommend Crystal and her team for any and all jobs.",
    },
    {
      id: 2,
      name: 'Belinda T.',
      role: 'Saratoga Springs Homeowner',
      text: "I have used Breathtaking Lawn and Maintenance Care for two years and couldn't be happier with their service. They maintain my property during the summer and keep my driveway plowed in the winter, consistently doing an excellent job. The owner, Crystal, is very professional and always available to answer questions, and her crew are hardworking, reliable, and truly take pride in their work. If you're looking for a company that goes the extra mile to make your property look beautiful year-round, I highly recommend Breathtaking Lawn and Maintenance Care.",
    },
    {
      id: 3,
      name: 'Maureen and John B.',
      role: 'Ballston Spa Homeowners',
      text: 'Breathtaking Lawn and Maintenance does our mowing and snow removal. We have been extremely pleased with both services. They are responsive to specific requests, and are reliable and detailed in their work. They edge all our walkways and gardens beautifully and clear every inch of snow right to the landing at the front door! We have had them maintain our property for four years and will continue. We have referred them to family and friends who are also satisfied with their services.',
    },
    {
      id: 4,
      name: 'Carl D.',
      role: 'Gansevoort Homeowner',
      text: "We've been using Chrystal and her company for quite some time now. Her dependability and workmanship is outstanding and we have recommended her to many people and they are just as pleased with her. To say that we're happy with her work is an understatement.",
    },
  ];

  const featured = testimonials[0];
  const others = testimonials.slice(1);

  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-primary-950 mb-4">
            What <span className="italic">Our Customers</span> Say
          </h2>

          <p className="text-stone-500 uppercase tracking-widest text-sm font-semibold">
            Customer Reviews
          </p>

          <div className="w-24 h-px bg-secondary-400 mx-auto mt-6"></div>
        </div>

        {/* FEATURED TESTIMONIAL */}
        <div className="bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 md:p-12">
          <p className="font-serif text-stone-700 italic leading-relaxed text-lg md:text-xl mb-8">
            "{featured.text}"
          </p>

          <div>
            <p className="text-primary-950 font-bold uppercase tracking-[0.2em] text-sm">
              {featured.name}
            </p>
            <p className="text-secondary-700 text-[10px] uppercase tracking-widest mt-1 font-medium">
              {featured.role}
            </p>
          </div>
        </div>

        {/* OTHER TESTIMONIALS GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((t, index) => {
            const isLastOdd =
              others.length % 2 === 1 && index === others.length - 1;

            return (
              <div
                key={t.id}
                className={`
                  bg-white
                  rounded-xl
                  p-6
                  shadow-[0_15px_40px_rgba(0,0,0,0.06)]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  transition-shadow duration-300
                  ${
                    isLastOdd
                      ? 'sm:col-span-2 sm:max-w-md sm:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0'
                      : ''
                  }
                `}
              >
                <p className="text-stone-700 italic leading-relaxed mb-6">
                  "{t.text}"
                </p>

                <div>
                  <p className="text-primary-950 font-bold uppercase tracking-[0.2em] text-xs">
                    {t.name}
                  </p>
                  <p className="text-secondary-700 text-[10px] uppercase tracking-widest mt-1 font-medium">
                    {t.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}