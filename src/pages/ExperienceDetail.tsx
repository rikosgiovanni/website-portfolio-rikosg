import { useParams, useNavigate } from 'react-router';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { experiences } from '@/data/experiences';

export default function ExperienceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const experience = experiences.find((exp) => exp.id === id);

  useEffect(() => {
    if (!experience) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: 'power4.inOut' }
      );

      gsap.fromTo(
        '.animate-fade',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.5,
        }
      );
    });

    return () => ctx.revert();
  }, [experience]);

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 border border-white/20 hover:bg-white text-white hover:text-black transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#EDEDED] selection:bg-[#EDEDED] selection:text-[#0a0a0a]">
      {/* Sticky Back Button */}
      <button
        onClick={() => {
          navigate('/#work');
          // Fallback scroll for smooth transition
          setTimeout(() => {
            const el = document.getElementById('work');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        className="fixed top-24 left-8 z-[60] flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all group"
      >
        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        <span className="text-sm font-medium uppercase tracking-widest">Back to Work</span>
      </button>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Image */}
        <div
          ref={imageRef}
          className="w-full lg:w-1/2 h-[50vh] lg:h-screen lg:sticky lg:top-0 overflow-hidden bg-white/5"
        >
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        {/* Right Side - Content */}
        <div
          ref={contentRef}
          className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center"
        >
          <div className="max-w-2xl mx-auto lg:mx-0">
            <header className="mb-12 animate-fade">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-[0.4em] text-white/30">
                  {experience.category}
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4 leading-[0.9]">
                {experience.title}
              </h1>
              <p className="text-xl md:text-2xl font-light text-white/50 uppercase tracking-widest italic">
                {experience.role}
              </p>
              <p className="text-sm font-mono text-white/30 mt-4 tracking-widest">
                {experience.date} — {experience.location}
              </p>
            </header>

            <div className="space-y-12 animate-fade">
              <section>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/20 mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-white/10" /> The Context
                </h4>
                <p className="text-xl md:text-2xl leading-relaxed text-[#EDEDED]/90 font-light">
                  {experience.description}
                </p>
              </section>

              <section>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/20 mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-white/10" /> Key Responsibilities
                </h4>
                <ul className="space-y-6">
                  {experience.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-6 group">
                      <span className="text-white/20 font-mono text-sm mt-1">0{i + 1}</span>
                      <p className="text-lg text-[#EDEDED]/60 leading-relaxed transition-colors group-hover:text-[#EDEDED]">
                        {resp}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="pt-12 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/20 mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-white/10" /> Outcome
                </h4>
                <p className="text-3xl md:text-4xl font-bold text-[#EDEDED] uppercase tracking-tight leading-tight">
                  {experience.results}
                </p>
              </section>

              {experience.documentation && experience.documentation.length > 0 && (
                <section className="pt-12">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/20 mb-6">
                    Documentation
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {experience.documentation.map((doc, i) => (
                      <div key={i} className="group relative overflow-hidden bg-white/5 rounded-sm">
                        <img 
                          src={doc.image} 
                          alt={`Documentation ${i + 1}`} 
                          className="w-full aspect-video object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105"
                        />
                        {doc.link && (
                          <a
                            href={doc.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <div className="flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                              <span>View Source</span>
                              <ExternalLink className="w-3 h-3" />
                            </div>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <footer className="mt-24 pt-12 border-t border-white/5 animate-fade">
               <button
                onClick={() => {
                  navigate('/#work');
                  setTimeout(() => {
                    const el = document.getElementById('work');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="group flex items-center gap-4 text-white/40 hover:text-white transition-colors"
              >
                <div className="w-12 h-px bg-white/20 group-hover:w-20 transition-all duration-500" />
                <span className="text-xs uppercase tracking-[0.4em]">End of project case study</span>
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
