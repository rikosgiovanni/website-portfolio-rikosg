import { useEffect, useState } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router';
import { PillButton } from './PillButton';

import { useAudio } from './AudioProvider';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Project', href: '#projects' },
  { label: 'Experience', href: '#work' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { isMuted, toggleMute } = useAudio();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isLanding = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLanding) return null;

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    
    if (location.pathname !== '/home') {
      // If not on home page, navigate home with hash
      navigate('/home' + href);
    } else {
      // If on home page, just scroll
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-monolog-dark/90 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-gutter flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/home" 
            className="flex items-center" 
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <span className="font-display text-xl tracking-tight text-monolog-text">
              Riko Satriya Giovanni
            </span>
          </Link>

          {/* Combined Right Actions & Nav */}
          <div className="flex items-center gap-8">
            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="font-body text-xs uppercase tracking-[0.05em] text-monolog-muted hover:text-monolog-text transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Audio Toggle */}
              <button
                onClick={toggleMute}
                className="w-9 h-9 rounded-full bg-monolog-cream-dark flex items-center justify-center text-monolog-muted hover:text-monolog-text transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              {/* CTA Button */}
              <div className="hidden md:block">
                <PillButton href="mailto:giovanniriko@gmail.com" variant="light">
                  Get in touch
                </PillButton>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden w-9 h-9 flex items-center justify-center text-monolog-text"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-monolog-dark transition-transform duration-500 md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="font-display text-3xl text-monolog-text hover:text-monolog-muted transition-colors"
            >
              {link.label}
            </button>
          ))}
          <PillButton href="mailto:giovanniriko@gmail.com" variant="light">
            Get in touch
          </PillButton>
        </div>
      </div>
    </>
  );
}
