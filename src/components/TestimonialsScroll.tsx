export default function TestimonialsScroll() {
  const testimonials = [
    {
      name: "Belinda T.",
      location: "Saratoga Springs Homeowner",
      text:
        "I have used Breathtaking Lawn and Maintenance Care for two years and couldn’t be happier with their service. They maintain my property during the summer and keep my driveway plowed in the winter. Highly recommend.",
    },
    {
      name: "James R.",
      location: "Ballston Spa Resident",
      text:
        "Professional, reliable, and always responsive. The property always looks perfect after every visit. You can tell they take pride in their work.",
    },
    {
      name: "Michelle D.",
      location: "Wilton Homeowner",
      text:
        "From lawn care to snow removal, everything is handled efficiently and on schedule. Extremely dependable team.",
    },
    {
      name: "Robert K.",
      location: "Saratoga County Resident",
      text:
        "Excellent communication and great attention to detail. The best property maintenance service we've used.",
    },
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-stone-500 uppercase tracking-widest text-sm font-semibold mb-4">
            Customer Reviews
          </p>
          <h2 className="text-4xl md:text-6xl font-serif text-primary-950 mb-4">
            What Our Customers Say
          </h2>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-6 md:p-10">
          <div
            className="
              flex gap-6
              overflow-x-auto
              snap-x snap-mandatory
              scroll-smooth
              pb-4
            "
          >
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="
                  snap-center
                  min-w-[85%]
                  md:min-w-[60%]
                  lg:min-w-[520px]
                  bg-white
                  border border-stone-100
                  rounded-xl
                  p-8
                "
              >
                <p className="text-stone-700 italic leading-relaxed mb-8">
                  “{t.text}”
                </p>
                <div>
                  <p className="font-semibold tracking-widest uppercase text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-stone-500 uppercase tracking-widest mt-2">
                    {t.location}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Optional: little hint */}
          <div className="text-center mt-4 text-xs text-stone-400 uppercase tracking-widest">
            Swipe / scroll for more
          </div>
        </div>
      </div>
    </section>
  );
}
