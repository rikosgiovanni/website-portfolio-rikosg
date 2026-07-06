import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const manifestoText = "I aim to bridge complex technologies with tangible impact, transforming data and AI tools into insights that empower communities and businesses. The gap between raw data and meaningful action is where I thrive.";



export function StatsManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animation
      gsap.fromTo(
        '.stat-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.stats-row',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Manifesto character reveal
      const chars = manifestoRef.current?.querySelectorAll('.manifesto-char');
      if (chars) {
        gsap.fromTo(
          chars,
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger: 0.02,
            ease: 'none',
            scrollTrigger: {
              trigger: manifestoRef.current,
              start: 'top 85%',
              end: 'bottom 45%',
              scrub: true,
            },
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const manifestoChars = manifestoText.split('');

  return (
    <section ref={sectionRef} className="relative px-gutter py-section">
      <div className="max-w-container mx-auto">
        {/* Stats Row */}
        <div className="stats-row flex flex-wrap gap-12 lg:gap-20 mb-20">
          <div className="stat-item">
            <p className="font-display text-heading text-monolog-text">20+</p>
            <p className="font-body text-subheading uppercase tracking-[0.05em] text-monolog-muted mt-2">
              / Projects & Initiatives
            </p>
          </div>
          <div className="stat-item">
            <p className="font-display text-heading text-monolog-text">03+</p>
            <p className="font-body text-subheading uppercase tracking-[0.05em] text-monolog-muted mt-2">
              Competition Medals
            </p>
            <p className="font-body text-sm text-monolog-muted mt-1">
              (Gold, Silver, Bronze)
            </p>
          </div>
          <div className="stat-item">
            <p className="font-display text-heading text-monolog-text">10+</p>
            <p className="font-body text-subheading uppercase tracking-[0.05em] text-monolog-muted mt-2">
              Technical & Creative Skills
            </p>
          </div>
        </div>

        {/* Manifesto Text */}
        <div ref={manifestoRef} className="mb-20">
          <p className="font-body text-manifesto font-light leading-[1.2] text-monolog-text max-w-[1100px]">
            {manifestoChars.map((char, i) => (
              <span key={i} className="manifesto-char inline" style={{ opacity: 0.2 }}>
                {char}
              </span>
            ))}
          </p>
        </div>


      </div>
    </section>
  );
}
