import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Strands from '../components/Strands';

gsap.registerPlugin(ScrollTrigger);

export function GapSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gap-word-left',
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.gap-word-right',
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.gap-strands-wrapper',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.gap-testimonial',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gap-testimonial',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative px-gutter py-section overflow-hidden bg-transparent">
      <div className="max-w-container mx-auto">
        {/* Headline with Strands animation */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-0 mb-24 relative w-full">
          <h2 className="gap-word-left font-display text-heading text-monolog-text text-center lg:text-right mix-blend-plus-lighter shrink-0 z-20 pointer-events-none">
            I BRIDGE
          </h2>
          
          <div className="gap-strands-wrapper w-full max-w-[400px] lg:max-w-[550px] aspect-[16/9] lg:aspect-[21/9] flex items-center justify-center relative z-[-2] mx-[-40px] lg:mx-[-100px]">
            {/* Radial Mask for Smoothing Edges - increased feathering */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 50%, transparent 5%, rgba(10, 10, 10, 0.2) 30%, #0a0a0a 70%)'
              }}
            />
            
            <div style={{ width: '100%', height: '100%', position: 'relative' }} className="blur-[1.2px]">
              <Strands
                colors={["#F97316","#7C3AED","#06B6D4"]}
                count={4}
                speed={0.4}
                amplitude={0.7}
                waviness={1.4}
                thickness={0.6}
                glow={3.5}
                taper={4}
                spread={2}
                intensity={0.4}
                saturation={1.4}
                opacity={0.9}
                scale={1.6}
                glass={false}
              />
            </div>
          </div>

          <h2 className="gap-word-right font-display text-heading text-monolog-text text-center lg:text-left mix-blend-plus-lighter shrink-0 z-20 pointer-events-none">
            THAT GAP
          </h2>
        </div>

        {/* Testimonial */}
        <div className="gap-testimonial max-w-[800px] mx-auto text-center">
          <blockquote className="font-body text-body-large text-monolog-muted leading-relaxed mb-6">
            &ldquo;The gap between raw data and meaningful action is where I thrive. I build systems that don&apos;t just process information, but empower people and communities to thrive in the AI era.&rdquo;
          </blockquote>
          <cite className="font-body text-subheading uppercase tracking-[0.05em] text-monolog-muted not-italic">
            Riko Satriya Giovanni, Google Student Ambassador & ITB Student
          </cite>
        </div>
      </div>
    </section>
  );
}
