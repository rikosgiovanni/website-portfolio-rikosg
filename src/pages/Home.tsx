import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { StatsManifestoSection } from '@/sections/StatsManifestoSection';
import { GapSection } from '@/sections/GapSection';
import Experience from '@/sections/Experience';
import { ProjectsTimelineSection } from '@/sections/ProjectsTimelineSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { FAQSection } from '@/sections/FAQSection';
import { CTASection } from '@/sections/CTASection';
import { AwardsFooterSection } from '@/sections/AwardsFooterSection';
import LiquidEther from '@/components/LiquidEther';

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <LiquidEther
          colors={[ '#1854b6', '#2d6cd3', '#00618f' ]}
          mouseForce={20}
          cursorSize={100}
          isViscous={true}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <HeroSection />
      <AboutSection />
      <StatsManifestoSection />
      <GapSection />
      <Experience />
      <ProjectsTimelineSection />
      <TestimonialsSection />
      <ServicesSection />
      <FAQSection />
      <CTASection />
      <AwardsFooterSection />
    </>
  );
}
