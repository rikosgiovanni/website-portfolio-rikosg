import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DecryptedText from '@/components/DecryptedText';
import LogoLoop from '@/components/LogoLoop';
import { PillButton } from '@/components/PillButton';
import { 
  SiPython, 
  SiMysql, 
  SiOpenjdk, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer, 
  SiGithub, 
  SiC
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const keywords = ['analyze', 'code', 'capture', 'create'];

const techLogos = [
  { node: <SiPython />, title: "Python" },
  { node: <SiMysql />, title: "MySQL" },
  { node: <SiOpenjdk />, title: "Java" },
  { node: <SiC />, title: "C" },
  { node: <SiReact />, title: "React" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiFramer />, title: "Framer Motion" },
  { node: <SiGithub />, title: "GitHub" },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative px-gutter py-section"
    >
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-12 lg:gap-20">
          {/* Sticky Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start space-y-8">
            {/* Label */}
            <p className="font-body text-subheading uppercase tracking-[0.05em] text-monolog-muted">
              About the developer
            </p>


            {/* Studio Info */}
            <div className="space-y-1">
              <p className="font-body text-subheading uppercase tracking-[0.05em] text-monolog-muted">
                BASED IN JAKARTA, INDONESIA
              </p>
            </div>

            {/* CV Button */}
            <div className="pt-2 pb-4">
              <PillButton href="https://drive.google.com/file/d/1MRTxsifG18qunxVNeqPGD72Exi7l8aui/view?usp=sharing">
                View My CV
              </PillButton>
            </div>

            {/* Keywords */}
            <div className="space-y-1">
              {keywords.map((word) => (
                <p
                  key={word}
                  className="font-body text-xs uppercase tracking-[0.15em] text-monolog-muted hover:text-monolog-text transition-colors duration-500 cursor-default"
                >
                  {word}
                </p>
              ))}
            </div>

            {/* Founder Image */}
            <div className="pt-4 hidden lg:block">
              <img
                src="/assets/profile.jpg"
                alt="Riko Satriya Giovanni"
                className="w-full max-w-[280px] aspect-[3/4] object-cover rounded-lg border border-monolog-text/10"
                loading="lazy"
              />
            </div>
          </div>

          {/* Scrolling Content */}
          <div className="about-content space-y-24 lg:space-y-32">
            {/* Main Bio */}
            <div className="space-y-6 max-w-[800px]">
              <p className="font-body text-2xl lg:text-3xl text-monolog-text leading-relaxed">
                Hey, I&apos;m Riko. I am an Information Systems and Technology student at ITB passionate about building 
                meaningful data ecosystems and exploring the real-world applications of Artificial Intelligence. 
              </p>
              <p className="font-body text-lg lg:text-l text-monolog-muted leading-relaxed">
                I aim to bridge complex technologies with tangible impact, transforming data and AI tools into 
                insights that empower communities and businesses. The gap between raw data and meaningful action is 
                where I thrive, building not only intelligent systems, but communities that grow together in the AI era.
              </p>
            </div>

            <div className="space-y-12 lg:space-y-20">
               <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-display text-heading text-monolog-text">
                    <DecryptedText 
                      text="Technical Focus" 
                      animateOn="view" 
                      revealDirection="center" 
                      speed={40}
                      maxIterations={15}
                    />
                  </h3>
                  <p className="font-body text-lg text-monolog-muted leading-relaxed">
                    My focus spans Data Analytics, Machine Learning, and system development using Python, SQL, and Java. 
                    I am particularly curious about generative AI and its potential to augment productivity, 
                    creativity, and decision-making.
                  </p>
                </div>

                {/* Technical Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-4">
                    <p className="font-body text-xs uppercase tracking-[0.2em] text-monolog-muted">Technical Expertise</p>
                    <ul className="space-y-2">
                      {[
                        'Data Science & Analytics (Python, SQL)',
                        'System Programming (Java, C)',
                        'Database Normalization',
                        'Web Development (Basic HTML)',
                        'Version Control (GitHub)',
                      ].map((item) => (
                        <li key={item} className="font-body text-sm text-monolog-text/80 flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-monolog-muted mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <p className="font-body text-xs uppercase tracking-[0.2em] text-monolog-muted">Languages</p>
                    <ul className="space-y-2">
                      {[
                        'Indonesian (Native)',
                        'English (Proficient; IELTS 6.5)',
                      ].map((item) => (
                        <li key={item} className="font-body text-sm text-monolog-text/80 flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-monolog-muted mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tools Logo Loop - Integrated Parent Width with Premium Masking */}
              <div className="pt-8 pb-12 relative overflow-hidden opacity-50 hover:opacity-100 transition-opacity duration-700 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <LogoLoop 
                  logos={techLogos} 
                  speed={40} 
                  logoHeight={32} 
                  gap={80}
                  scaleOnHover
                  fadeOut={false}
                />
              </div>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-display text-heading text-monolog-text">
                    <DecryptedText 
                      text="Creative" 
                      animateOn="view" 
                      revealDirection="center" 
                      speed={40}
                      maxIterations={15}
                      delay={600}
                    />
                  </h3>
                  <p className="font-body text-lg text-monolog-muted leading-relaxed">
                    Beyond data, I bring a creative foundation in photography, videography, and post-production. 
                    This dual expertise allows me to approach technical problems with a creative lens, ensuring 
                    solutions are not only functional but also engaging.
                  </p>
                </div>

                {/* Creative Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-4">
                    <p className="font-body text-xs uppercase tracking-[0.2em] text-monolog-muted">Creative Mastery</p>
                    <ul className="space-y-2">
                      {[
                        'Professional Video Production',
                        'Music Production & Engineering',
                        'Digital Branding & CMO Strategy',
                        'Adobe Premiere Pro & Final Cut',
                        'Logic Pro X Mastery',
                      ].map((item) => (
                        <li key={item} className="font-body text-sm text-monolog-text/80 flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-monolog-muted mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <p className="font-body text-xs uppercase tracking-[0.2em] text-monolog-muted">Leadership & Impact</p>
                    <ul className="space-y-2">
                      {[
                        'Strategic Leadership (Unit Head)',
                        'Public Speaking & Performance',
                        'Coaching & Mentoring',
                        'Community Collaboration',
                      ].map((item) => (
                        <li key={item} className="font-body text-sm text-monolog-text/80 flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-monolog-muted mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-h-[20vh]" />
          </div>
        </div>
      </div>
    </section>
  );
}
