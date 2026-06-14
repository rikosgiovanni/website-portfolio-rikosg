import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  'Data Science & Analytics',
  'Machine Learning',
  'System Programming',
  'Database Engineering',
  'Professional Videography',
  'Stage Performance',
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-item',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative px-gutter py-section">
      <div className="max-w-container mx-auto">
        {/* Label */}
        <p className="font-body text-subheading uppercase tracking-[0.05em] text-monolog-muted mb-12">
          What I can help with
        </p>

        {/* Services List */}
        <div className="relative">
          <div className="space-y-0">
            {services.map((service) => (
              <div
                key={service}
                className="service-item group border-b border-monolog-text/10 py-6 cursor-default"
              >
                <div className="flex items-center gap-4 transition-transform duration-500 group-hover:translate-x-5">
                  <div className="w-0 h-px bg-monolog-text transition-all duration-500 group-hover:w-6" />
                  <h3 className="font-display text-heading text-monolog-text transition-colors duration-300 group-hover:text-white">
                    {service}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Floating side images */}
          <div className="hidden lg:block absolute -right-4 top-10 w-[200px] opacity-40 pointer-events-none">
            <div className="rotate-3">
              <img
                src="/assets/asset_4.jpg"
                alt=""
                className="w-full rounded-md"
                loading="lazy"
              />
            </div>
          </div>
          <div className="hidden lg:block absolute -right-8 bottom-20 w-[180px] opacity-30 pointer-events-none">
            <div className="-rotate-2">
              <img
                src="/assets/asset_5.jpg"
                alt=""
                className="w-full rounded-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
