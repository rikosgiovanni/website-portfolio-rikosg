import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: '01',
    name: 'OH Architecture',
    description: 'Brand refresh and website for a practice with a decade of crafting high-end homes for Australian families.',
    metric: '$2M+',
    metricLabel: 'In new projects within 3 months of launch',
    image: '/assets/asset_3.jpg',
    href: 'https://www.oharchitecture.com.au/',
  },
  {
    id: '02',
    name: 'Supersolid',
    description: 'Website for a 100% creative-owned Sydney agency built to merge commercial value with cultural impact.',
    metric: '58%',
    metricLabel: 'Increase in average session duration',
    image: '/assets/asset_4.jpg',
    href: '#',
  },
  {
    id: '03',
    name: 'Mammoth Murals',
    description: 'Brand strategy, identity and website for an established mural agency with a decade of large-scale public art behind it.',
    metric: '$100K+',
    metricLabel: 'In new work within 30 days of launch',
    image: '/assets/asset_5.jpg',
    href: '#',
  },
  {
    id: '04',
    name: 'HISS (University of Sydney)',
    description: 'Brand identity and website for a University of Sydney initiative challenging the norms of queer education on a global stage.',
    metric: '15+',
    metricLabel: 'Global universities united on a single platform',
    image: '/assets/asset_6.jpg',
    href: 'https://www.hiss.sydney/',
  },
  {
    id: '05',
    name: 'Backhouse',
    description: 'Website for an embedded production partner behind campaigns for Netflix, A24, HBO, Apple and Google.',
    metric: '4 days',
    metricLabel: 'To launch and reposition the agency',
    image: '/assets/asset_7.jpg',
    href: 'https://www.backhouse.com/',
  },
  {
    id: '06',
    name: 'SLIK',
    description: 'Website for an Australian activation agency pushing creativity further for some of the country\'s most ambitious brands.',
    metric: '',
    metricLabel: '',
    image: '/assets/asset_8.jpg',
    href: '#',
  },
];

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.case-study-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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
    <section id="work" ref={sectionRef} className="relative bg-monolog-cream py-section">
      <div className="max-w-container mx-auto px-gutter">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-body text-xs uppercase tracking-[0.1em] text-monolog-text-dark/50">
            SS
          </span>
          <span className="font-body text-xs uppercase tracking-[0.1em] text-monolog-text-dark/50">
            Success Stories
          </span>
          <span className="font-body text-xs text-monolog-text-dark/50">
            / 06
          </span>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <a
              key={study.id}
              href={study.href}
              target="_blank"
              rel="noopener noreferrer"
              className="case-study-card group block"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-5 bg-monolog-cream-dark/5">
                <img
                  src={study.image}
                  alt={study.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                {/* Overlay badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="font-body text-xs uppercase tracking-[0.1em] text-white/70">SS</span>
                  <span className="font-body text-xs text-white/70">/{study.id}</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="font-body text-xl font-medium text-monolog-text-dark group-hover:opacity-70 transition-opacity">
                  {study.name}
                </h3>
                <p className="font-body text-sm text-monolog-text-dark/60 leading-relaxed max-w-[90%]">
                  {study.description}
                </p>
                {study.metric && (
                  <div className="pt-2">
                    <p className="font-display text-3xl text-monolog-text-dark">{study.metric}</p>
                    <p className="font-body text-xs text-monolog-text-dark/50 mt-1">{study.metricLabel}</p>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
