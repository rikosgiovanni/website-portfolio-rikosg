import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollVelocity from '@/components/ScrollVelocity';
import { Link } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#work' },
  { label: 'Project', href: '#projects' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: 'mailto:giovanniriko@gmail.com' },
];

const expertise = [
  'Data Analytics',
  'Machine Learning',
  'AI Solutions',
  'System Development',
  'Creative Direction',
  'Digital Branding',
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rikosgiovanni' },
  { label: 'GitHub', href: 'https://github.com/rikosgiovanni' },
  { label: 'Instagram', href: 'https://instagram.com/rikosgiovanni' },
  { label: 'TikTok', href: 'https://tiktok.com/@rikosgiovanni' },
];

function useBandungTime() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => {
      setTime(new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Jakarta',
      }).format(new Date()));
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);
  return time;
}

export function AwardsFooterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const time = useBandungTime();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-col',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={sectionRef} 
      className="bg-[#171717] pt-24 pb-0 overflow-hidden font-sans selection:bg-white selection:text-black"
    >
      <div className="max-w-container mx-auto px-gutter">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-24">
          
          {/* Column 1: Logo */}
          <div className="footer-col lg:col-span-1">
            <span className="text-xl font-bold text-white uppercase tracking-tighter">
              RIKO SG™
            </span>
          </div>

          {/* Column 2: Contact */}
          <div className="footer-col space-y-6">
            <h4 className="text-white font-medium uppercase text-xs tracking-widest">Contact</h4>
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>Bandung, West Java<br />Indonesia</p>
              <a href="mailto:giovanniriko@gmail.com" className="block hover:text-white transition-colors">
                giovanniriko@gmail.com
              </a>
              <p className="text-xs opacity-50 uppercase tracking-widest">
                Local Time: {time} (GMT+7)
              </p>
            </div>
          </div>

          {/* Column 3: Pages */}
          <div className="footer-col space-y-6">
            <h4 className="text-white font-medium uppercase text-xs tracking-widest">Pages</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="text-gray-400 text-sm hover:text-white transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 4: Expertise */}
          <div className="footer-col space-y-6">
            <h4 className="text-white font-medium uppercase text-xs tracking-widest">Expertise</h4>
            <ul className="flex flex-col gap-3">
              {expertise.map((item) => (
                <li key={item} className="text-gray-400 text-sm cursor-default">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Links */}
          <div className="footer-col space-y-6">
            <h4 className="text-white font-medium uppercase text-xs tracking-widest">Links</h4>
            <nav className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-white transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Middle Section: Legal */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-8 border-t border-white/5 gap-4">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">
            All rights reserved 2026 © Riko Satriya Giovanni
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-gray-500 uppercase tracking-widest hover:text-white transition-colors">
              Data Protection
            </a>
            <a href="#" className="text-[10px] text-gray-500 uppercase tracking-widest hover:text-white transition-colors">
              Imprint
            </a>
          </div>
        </div>
      </div>

      {/* Oversized Bottom Text with Scroll Velocity */}
      <Link 
        to="/contact" 
        className="block relative pointer-events-auto cursor-pointer group mt-12 mb-[-2%] hover:opacity-80 transition-opacity overflow-hidden"
      >
        <ScrollVelocity
          texts={['Get in Contact', 'Get in Contact']}
          velocity={50}
          className="text-[clamp(5rem,15vw,22rem)] font-bold text-white leading-none tracking-tighter opacity-100 group-hover:text-monolog-muted transition-colors duration-500"
          numCopies={3}
        />
      </Link>
    </footer>
  );
}
