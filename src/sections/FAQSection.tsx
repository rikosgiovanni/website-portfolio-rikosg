import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import { PillButton } from '@/components/PillButton';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'Who is Riko Satriya Giovanni?',
    answer:
      "I am an Information Systems student at ITB (Institut Teknologi Bandung) passionate about building meaningful data ecosystems and exploring the real-world applications of Artificial Intelligence. I thrive at the intersection of analytical rigor and creative execution.",
  },
  {
    question: 'What technical expertise do you bring to projects?',
    answer:
      'My technical focus spans Data Analytics, Machine Learning, and system development using Python, SQL, and Java. I am particularly curious about generative AI and its potential to augment productivity, creativity, and decision-making.',
  },
  {
    question: 'What does your role as a Google Student Ambassador involve?',
    answer:
      "As a GSA, I serve as a key 'tech connector' between Google and the student ecosystem. I lead campus-wide adoption of AI tools, design high-impact workshops focused on AI literacy, and mentor students to leverage digital tools for innovation.",
  },
  {
    question: 'How does your creative background influence your technical work?',
    answer:
      "With a foundation in photography, videography, and digital branding (Vice CMO at Inkubator IT), I approach technical problems with a creative lens. This ensures that the systems and data solutions I build are not only functional but also engaging and well-communicated.",
  },
  {
    question: 'What kind of collaborations are you open to?',
    answer:
      "I'm always looking for opportunities to apply my skills in Data Analytics, AI research, or creative direction. Whether it's an internship, a technical project, or a community-driven initiative, I value collaborations that aim for tangible social impact and technological growth.",
  },
  {
    question: 'How do you manage your time across multiple leadership roles?',
    answer:
      "Leading units like SLIME (Band) and Rohkris (Christian Unit) has taught me the importance of structured systems and team-driven execution. I use tools like Notion and Google Workspace to maintain organizational discipline while fostering a collaborative environment.",
  },
];

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.faq-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.faq-list',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative px-gutter py-section">
      <div className="max-w-container mx-auto">
        {/* Header */}
        <div className="faq-header mb-12">
          <p className="font-body text-subheading uppercase tracking-[0.05em] text-monolog-muted mb-4">
            FAQs
          </p>
          <h2 className="font-display text-heading text-monolog-text max-w-[700px]">
            Bridging technical depth with creative vision. Here&apos;s how I work.
          </h2>
        </div>

        {/* Accordion */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item border-b border-monolog-text/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="font-body text-body-large text-monolog-text group-hover:text-white transition-colors pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-monolog-muted flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[500px] pb-6' : 'max-h-0'
                }`}
              >
                <p className="font-body text-base text-monolog-muted leading-relaxed max-w-[800px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <p className="font-body text-base text-monolog-muted">
            Interested in collaborating? Let&apos;s talk.
          </p>
          <PillButton href="https://linkedin.com/in/rikosatriyagiovanni">
            Connect on LinkedIn
          </PillButton>
        </div>
      </div>
    </section>
  );
}
