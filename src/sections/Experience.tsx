import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Plus } from 'lucide-react';
import { useNavigate } from 'react-router';
import type { Category } from '../types/experience';
import { experiences, categories } from '@/data/experiences';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();
  
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [isAnimating, setIsAnimating] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Filter out Tech & Systems and get by active category
  const filteredExperiences = (activeCategory === 'All' 
    ? experiences 
    : experiences.filter((exp) => exp.category === activeCategory)
  ).filter(exp => exp.category !== 'Tech & Systems');

  const displayedExperiences = showAll ? filteredExperiences : filteredExperiences.slice(0, 3);

  const handleCategoryChange = (category: Category | 'All') => {
    if (category === activeCategory || isAnimating) return;
    
    setIsAnimating(true);
    setShowAll(false); // Reset showAll when category changes
    
    gsap.to(".experience-row", {
      opacity: 0,
      y: 20,
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.inOut",
      onComplete: () => {
        setActiveCategory(category);
        gsap.fromTo(
          ".experience-row",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: "power3.out",
            onComplete: () => setIsAnimating(false),
          }
        );
      },
    });
  };

  const handleExperienceClick = (id: string) => {
    navigate(`/work/${id}`);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: "100%",
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      gsap.from(".experience-row", {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory, showAll]);

  return (
    <div className="bg-transparent text-[#EDEDED] font-sans selection:bg-[#EDEDED] selection:text-[#0a0a0a]">
      <section
        id="work"
        ref={sectionRef}
        className="relative min-h-section w-full py-24 lg:py-40"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Header Section */}
          <div className="mb-24">
            <div className="overflow-hidden mb-12">
              <h2 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] font-bold uppercase tracking-tighter">
                <span className="block reveal-text">Experience</span>
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCategoryChange('All')}
                className={`px-6 py-2 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${
                  activeCategory === 'All'
                    ? "bg-[#EDEDED] border-[#EDEDED] text-[#0a0a0a]"
                    : "bg-transparent border-white/20 text-[#EDEDED]/50 hover:border-white/60 hover:text-[#EDEDED]"
                }`}
              >
                All
              </button>
              {categories.filter(c => c.name !== 'Tech & Systems').map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => handleCategoryChange(cat.name)}
                  className={`px-6 py-2 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${
                    activeCategory === cat.name
                      ? "bg-[#EDEDED] border-[#EDEDED] text-[#0a0a0a]"
                      : "bg-transparent border-white/20 text-[#EDEDED]/50 hover:border-white/60 hover:text-[#EDEDED]"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Table-like List Layout */}
          <div ref={containerRef} className="border-t border-white/10">
            {displayedExperiences.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => { rowsRef.current[index] = el; }}
                onClick={() => handleExperienceClick(exp.id)}
                className="experience-row cursor-target group relative overflow-hidden flex flex-col md:flex-row items-start md:items-center py-10 md:py-16 border-b border-white/10 cursor-pointer transition-colors duration-500 hover:bg-white/[0.04]"
              >
                {/* Index */}
                <div className="relative z-10 text-xs font-mono text-white/30 mb-4 md:mb-0 md:w-20 shrink-0 uppercase tracking-widest">
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                {/* Main Info: Title & Role */}
                <div className="flex-1 relative z-10">
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500 flex items-center gap-4">
                    {exp.title}
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-white/40" />
                  </h3>
                  <p className="text-sm md:text-base font-medium text-white/40 uppercase tracking-[0.2em] mt-2 group-hover:translate-x-4 transition-transform duration-500 delay-75">
                    {exp.role}
                  </p>
                </div>

                {/* Right Side Info: Date & Impact */}
                <div className="relative z-10 mt-8 md:mt-0 md:text-right flex flex-col items-start md:items-end gap-2 shrink-0 md:ml-12">
                  <div className="text-sm font-mono text-white/40 uppercase tracking-widest">
                    {exp.date}
                  </div>
                  <div className="max-w-[200px] text-xs font-semibold text-[#EDEDED] uppercase tracking-tighter leading-tight opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {exp.results}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          {!showAll && filteredExperiences.length > 3 && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setShowAll(true)}
                className="group flex items-center gap-4 py-8 px-12 border border-white/10 rounded-full hover:bg-white hover:text-[#0a0a0a] transition-all duration-500"
              >
                <span className="font-body text-xs font-bold uppercase tracking-[0.3em]">
                  View More
                </span>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#0a0a0a] transition-colors">
                  <Plus className="w-4 h-4 text-white group-hover:text-white" />
                </div>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
