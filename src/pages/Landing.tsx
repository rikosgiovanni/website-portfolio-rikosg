import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router';
import { GlobeIcon } from '@/components/GlobeIcon';
import { useAudio } from '@/components/AudioProvider';

export default function Landing() {
  const sectionRef = useRef<HTMLElement>(null);
  const monologRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { playBackgroundMusic } = useAudio();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-globe',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1 }
      )
        .fromTo(
          monologRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1.2 },
          '-=0.5'
        )
        .fromTo(
          '.hero-line',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.15 },
          '-=0.8'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleProceed = () => {
    playBackgroundMusic(); // Explicitly start the website music
    navigate('/home');
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-monolog-dark"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-gutter w-full max-w-[1400px] mx-auto">
        {/* Globe Icon */}
        <div className="hero-globe mb-12 opacity-0">
          <GlobeIcon className="w-10 h-10 text-monolog-muted" />
        </div>

        {/* Name Button */}
        <button 
          onClick={handleProceed}
          className="group relative cursor-pointer select-none"
        >
          <div ref={monologRef} className="opacity-0 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
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
          
          <div className="hero-line mt-8 opacity-0">
            <p className="font-body text-xs md:text-sm uppercase tracking-[0.4em] text-monolog-muted transition-colors duration-500 group-hover:text-monolog-text">
              CLICK RIKO TO PROCEED
            </p>
          </div>
        </button>
      </div>
    </section>
  );
}
