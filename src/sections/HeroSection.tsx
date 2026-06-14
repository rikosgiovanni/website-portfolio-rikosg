import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { GlobeIcon } from '@/components/GlobeIcon';
import PixelBlast from '@/components/PixelBlast';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const monologRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-globe',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1 }
      )
        .fromTo(
          '.hero-line',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.15 },
          '-=0.5'
        )
        .fromTo(
          monologRef.current,
          { opacity: 0 },
          { opacity: 0.08, duration: 1.5 },
          '-=0.5'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-transparent"
    >
      {/* PixelBlast Background - High Visibility Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#263647"
          patternScale={3}
          patternDensity={1.5}
          pixelSizeJitter={0.5}
          enableRipples={true}
          rippleSpeed={0.4}
          rippleThickness={0.15}
          rippleIntensityScale={2.0}
          liquid={true}
          liquidStrength={0.15}
          liquidRadius={1.5}
          liquidWobbleSpeed={6}
          speed={0.6}
          edgeFade={0.3}
          transparent={true}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-gutter max-w-[600px] mx-auto pt-20">
        {/* Globe Icon */}
        <div className="hero-globe mb-8 opacity-0">
          <GlobeIcon className="w-10 h-10 text-monolog-muted" />
        </div>

        {/* Hero Text */}
        <div ref={textRef} className="space-y-6">
          <p className="hero-line font-body text-body-large text-monolog-text leading-relaxed opacity-0">
            Bridging Data & Creativity to build meaningful digital ecosystems and AI-driven solutions.
          </p>
          <p className="hero-line font-body text-lg text-monolog-muted leading-relaxed opacity-0">
            Riko Satriya Giovanni | Information Systems student at ITB, passionate about Data Analytics, AI, and Creative Execution.
          </p>
        </div>
      </div>

      {/* Massive RIKO text */}
      <div
        ref={monologRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none select-none opacity-0 w-full text-center"
      >
        <span className="font-display text-display text-monolog-text block w-full px-2">
          {/* Desktop - Full Name */}
          <span 
            className="hidden lg:inline"
            style={{ fontSize: 'clamp(120px, 14vw, 260px)' }}
          >
            RIKO GIOVANNI
          </span>
          {/* Tablet - Initials */}
          <span 
            className="hidden md:inline lg:hidden"
            style={{ fontSize: 'clamp(100px, 26vw, 260px)' }}
          >
            RIKO SG
          </span>
          {/* Mobile - First Name */}
          <span 
            className="md:hidden"
            style={{ fontSize: 'clamp(70px, 40vw, 270px)' }}
          >
            RIKO
          </span>
        </span>
      </div>

    </section>
  );
}
