import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PillButton } from '@/components/PillButton';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-label',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.cta-line',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.cta-button',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/asset_10.jpg"
          className="w-full h-full object-cover"
        >
          <source src="src/assets/cta_video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-monolog-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-gutter text-center max-w-[900px] mx-auto">
        <p className="cta-label font-body text-subheading uppercase tracking-[0.05em] text-monolog-muted mb-8">
          Ready to bridge the gap between data and impact?
        </p>

        <div className="space-y-2 mb-10">
          <h2 className="cta-line font-display text-heading text-monolog-text">
            Let&apos;s build
          </h2>
          <h2 className="cta-line font-display text-heading text-monolog-text">
            something
          </h2>
          <div className="cta-line flex items-center justify-center gap-3">
            <h2 className="font-display text-heading text-monolog-text">
              meaningful
            </h2>
            <ArrowRight className="w-8 h-8 lg:w-12 lg:h-12 text-monolog-text" />
          </div>
          <h2 className="cta-line font-display text-heading text-monolog-text">
            together
          </h2>
        </div>

        <div className="cta-button">
          <PillButton href="https://linkedin.com/in/rikosgiovani">
            Connect with Riko
          </PillButton>
        </div>
      </div>
    </section>
  );
}
