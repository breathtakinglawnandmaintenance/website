import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Belinda T.',
    role: 'Saratoga Springs Homeowner',
    text: 'I have used Breathtaking Lawn and Maintenance Care for two years and couldn’t be happier with their service. They maintain my property during the summer and keep my driveway plowed in the winter, consistently doing an excellent job.The owner, Crystal, is very professional and always available to answer questions, and her crew are hardworking, reliable, and truly take pride in their work. If you’re looking for a company that goes the extra mile to make your property look beautiful year-round, I highly recommend Breathtaking Lawn and Maintenance Care',
  },
  {
    id: 2,
    name: 'Maureen and John B.',
    role: 'Ballston Spa Homeowners',
    text: 'Breathtaking Lawn and Maintenance does our mowing and snow removal. We have been extremely pleased with both services. They are responsive to specific requests, and are reliable and detailed in their work. They edge all our walkways and gardens beautifully and clear every inch of snow right to the landing at the front door! We have had them maintain our property for four years and will continue. We have referred them to family and friends who are also satisfied with their services.',
  },
  {
    id: 3,
    name: 'Carl D.',
    role: 'Gansevoort Homeowner',
    text: 'We’ve been using Chrystal and her company for quite some time now. Her dependability and workmanship is outstanding and we have recommended her to many people and they are just as pleased with her. To say that we’re happy with her work is an understatement.',
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      {/* SECTION HEADER — MATCHES "OUR SERVICES" */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-serif text-primary-950 mb-4">
          What <span className="italic">Our Customers</span> Say
        </h2>

        <p className="text-stone-500 uppercase tracking-widest text-sm font-semibold">
          Customer Reviews
        </p>

        <div className="w-24 h-px bg-secondary-400 mx-auto mt-6"></div>
      </div>

      {/* TESTIMONIAL CONTENT (fixed height = no flexing / no shifting) */}
      <div className="text-center min-h-[520px] flex flex-col justify-center py-8">
        <p className="text-2xl md:text-3xl font-serif text-stone-700 italic leading-relaxed mb-8 transition-opacity duration-500">
          "{testimonials[current].text}"
        </p>

        <div>
          <p className="text-primary-950 font-bold uppercase tracking-[0.2em] text-sm">
            {testimonials[current].name}
          </p>
          <p className="text-secondary-600 text-[10px] uppercase tracking-widest mt-1 font-medium">
            {testimonials[current].role}
          </p>
        </div>
      </div>

      {/* NAV CONTROLS */}
      <div className="flex items-center justify-center gap-12 mt-12">
        <button
          onClick={prev}
          className="group flex items-center gap-2 text-stone-400 hover:text-primary-950 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold hidden sm:block">
            Prev
          </span>
        </button>

        <div className="flex gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1 transition-all duration-300 ${
                index === current ? 'w-8 bg-secondary-500' : 'w-2 bg-stone-200'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="group flex items-center gap-2 text-stone-400 hover:text-primary-950 transition-colors"
          aria-label="Next testimonial"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold hidden sm:block">
            Next
          </span>
          <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
