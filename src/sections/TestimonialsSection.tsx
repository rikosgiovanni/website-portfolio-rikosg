import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Trophy, Medal, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const recognitions = [
  {
    title: "Top 150 National Finalists",
    description: "Selected as a Google Student Ambassador from over 81,000 applicants, earning an exclusive Google Indonesia office tour and inauguration invitation.",
    attribution: "GOOGLE INDONESIA",
    icon: Star
  },
  {
    title: "Most Dedicated Award",
    description: "Represented ITBJazz at the 48th Jazz Goes To Campus before a national-scale audience, highlighting commitment to excellence and high-impact results.",
    attribution: "JGTC 2025, UNIVERSITAS INDONESIA",
    icon: Award
  },
  {
    title: "Best Staff of the Month",
    description: "Awarded for exceptional performance as Documentation Staff in the STEI-K 2024 Batch Representative Board in February 2025.",
    attribution: "STEI-K 2024 BATCH REPRESENTATIVE BOARD",
    icon: Award
  },
  {
    title: "1st Place in Band Arts",
    description: "Winner of the Band Arts Competition at Jatinangor Olympics 2024, organized by Jatinangor Olympics Committee.",
    attribution: "JATINANGOR OLYMPICS 2024",
    icon: Trophy
  },
  {
    title: "Gold Medalist",
    description: "Achieved the highest award category in a provincial-scale choral competition at PESPARAWI XIV Central Java 2024.",
    attribution: "PESPARAWI XIV CENTRAL JAVA",
    icon: Medal
  }
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.recognition-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
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
    <section ref={sectionRef} className="relative px-gutter py-section bg-transparent overflow-hidden">
      <div className="max-w-container mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-20">
          <span className="font-body text-xs text-monolog-muted uppercase tracking-[0.2em]">Recognition & Impact</span>
          <div className="h-[1px] flex-1 bg-monolog-text/10" />
        </div>

        {/* Recognitions Grid */}
        <div className="space-y-32 lg:space-y-48">
          {recognitions.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div 
                key={index}
                className={`recognition-item flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-start`}
              >
                {/* Icon & Index */}
                <div className="flex items-center gap-6 shrink-0">
                  <div className="w-16 h-16 rounded-full border border-monolog-text/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-monolog-text" />
                  </div>
                  <span className="font-mono text-xs text-monolog-muted">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className={`max-w-[700px] ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                  <h3 className="font-display text-4xl lg:text-5xl text-monolog-text mb-6 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <blockquote className="font-body text-xl lg:text-2xl text-monolog-muted leading-relaxed mb-8">
                    &ldquo;{item.description}&rdquo;
                  </blockquote>
                  <cite className="font-body text-xs uppercase tracking-[0.2em] text-monolog-text/40 not-italic">
                    {item.attribution}
                  </cite>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
