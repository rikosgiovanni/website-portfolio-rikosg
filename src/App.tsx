import { Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { GrainOverlay } from '@/components/GrainOverlay';
import { Navigation } from '@/components/Navigation';
import TargetCursor from '@/components/TargetCursor';
import Home from '@/pages/Home';
import ExperienceDetail from '@/pages/ExperienceDetail';
import Contact from '@/pages/Contact';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  useLenis();

  return (
    <div className="relative">
      <TargetCursor 
        targetSelector="button, a, .cursor-target" 
        spinDuration={2}
      />
      <ScrollToTop />
      <GrainOverlay />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:id" element={<ExperienceDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
