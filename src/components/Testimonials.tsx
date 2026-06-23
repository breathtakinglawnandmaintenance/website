import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  text: string;
};

const TESTIMONIALS: Testimonial[] = [
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
    text: "We've been using Crystal and her company for quite some time now. Her dependability and workmanship is outstanding and we have recommended her to many people and they are just as pleased with her. To say that we're happy with her work is an understatement.",
  },
];

// Each review stays on screen for ~5.5s, then performs the dissolve.
const ROTATION_MS = 5500;
// Duration of the fade-and-blur dissolve. Must match the `duration-700` class
// so the data swaps exactly when the text is fully blurred/transparent.
const FADE_MS = 700;

export default function Testimonials() {
  // 1. Sort once on load: longest review first.
  const reviews = useMemo(
    () => [...TESTIMONIALS].sort((a, b) => b.text.length - a.text.length),
    []
  );

  // The longest review (now index 0) doubles as an invisible size template:
  // the box is always reserved at its height, so swapping in shorter reviews
  // never shifts the surrounding layout.
  const tallest = reviews[0];

  // `active` drives what is rendered; `visible` toggles the dissolve.
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  // Refs let the timers read the latest index without stale closures.
  const activeRef = useRef(0);
  const fadeTimer = useRef<number | undefined>(undefined);
  const cycleTimer = useRef<number | undefined>(undefined);

  // 3. Fade out -> swap the data at the midpoint -> fade back in.
  const dissolveTo = useCallback((next: number) => {
    window.clearTimeout(fadeTimer.current);
    setVisible(false); // -> opacity-0 blur-md
    fadeTimer.current = window.setTimeout(() => {
      activeRef.current = next;
      setActive(next);
      setVisible(true); // -> opacity-100 blur-none
    }, FADE_MS);
  }, []);

  // 2. Automatic timer loop advancing to the next review.
  const startCycle = useCallback(() => {
    window.clearInterval(cycleTimer.current);
    cycleTimer.current = window.setInterval(() => {
      dissolveTo((activeRef.current + 1) % reviews.length);
    }, ROTATION_MS);
  }, [dissolveTo, reviews.length]);

  useEffect(() => {
    startCycle();
    return () => {
      window.clearInterval(cycleTimer.current);
      window.clearTimeout(fadeTimer.current);
    };
  }, [startCycle]);

  // Manual selection via the dots; restarts the timer so the picked review
  // gets a full viewing interval before auto-advancing resumes.
  const handleSelect = (index: number) => {
    if (index === activeRef.current) return;
    dissolveTo(index);
    startCycle();
  };

  const current = reviews[active];

  return (
    <div className="space-y-12">
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

      {/* CAROUSEL */}
      <div className="relative" aria-live="polite">
        {/* 4. Invisible template — reserves the height of the longest review so
            the external box never grows or shrinks as reviews rotate. */}
        <div aria-hidden className="invisible mx-auto max-w-3xl text-center">
          <p className="font-serif italic leading-relaxed text-lg md:text-xl mb-8">
            "{tallest.text}"
          </p>
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-sm">
              {tallest.name}
            </p>
            <p className="text-[10px] uppercase tracking-widest mt-1 font-medium">
              {tallest.role}
            </p>
          </div>
        </div>

        {/* Animated review, overlaid on the template and centered within it. */}
        <div
          className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-in-out motion-reduce:transition-none ${
            visible ? 'opacity-100 blur-none' : 'opacity-0 blur-md'
          }`}
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-serif text-stone-700 italic leading-relaxed text-lg md:text-xl mb-8">
              "{current.text}"
            </p>
            <div>
              <p className="text-primary-950 font-bold uppercase tracking-[0.2em] text-sm">
                {current.name}
              </p>
              <p className="text-secondary-700 text-[10px] uppercase tracking-widest mt-1 font-medium">
                {current.role}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DOTS / PROGRESS */}
      <div className="flex justify-center gap-3">
        {reviews.map((review, index) => (
          <button
            key={review.id}
            type="button"
            onClick={() => handleSelect(index)}
            aria-label={`Show review from ${review.name}`}
            aria-current={index === active}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === active
                ? 'w-8 bg-secondary-500'
                : 'w-2 bg-stone-300 hover:bg-stone-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
