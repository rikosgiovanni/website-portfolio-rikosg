import { motion } from 'framer-motion';
import { experiences } from '@/data/experiences';
import { Github } from 'lucide-react';

export function ProjectsTimelineSection() {
  // Filter only Tech & Systems projects
  const techProjects = experiences
    .filter(exp => exp.category === 'Tech & Systems')
    // They are already sorted by ID (most recent first) from our previous task
    .sort((a, b) => parseInt(a.id) - parseInt(b.id));

  return (
    <section id="projects" className="relative px-gutter py-section bg-transparent border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-32">
           <h2 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] font-bold uppercase tracking-tighter mb-8">
            <span className="block text-white">Projects</span>
          </h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-20 pl-10 md:pl-24 space-y-32">
          {techProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[calc(2.5rem+1px)] md:-left-[calc(6rem+1px)] top-3 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-white/20 group-hover:border-white transition-colors duration-500 z-10" />
              
              <div className="flex flex-col xl:flex-row gap-12 lg:items-start justify-between">
                <div className="flex-1">
                  <span className="font-mono text-xs text-white/30 uppercase tracking-[0.2em] block mb-6">
                    {project.date}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6 group-hover:text-white transition-colors leading-none">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-white/40 uppercase tracking-[0.2em] mb-8">
                    {project.role}
                  </p>
                  <p className="text-lg md:text-xl text-[#EDEDED]/60 leading-relaxed mb-10 max-w-2xl font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.responsibilities.slice(0, 4).map((resp, i) => (
                      <span key={i} className="px-4 py-2 rounded-full border border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/20 group-hover:border-white/10 group-hover:text-white/40 transition-all">
                        {resp.split(' ')[0]} {/* Simple tag extraction */}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href={project.link || "https://github.com/rikosgiovanni"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full xl:w-[500px] aspect-[16/10] rounded-sm overflow-hidden border border-white/5 group-hover:border-white/10 transition-all duration-700 relative cursor-target"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                  />
                  
                  {/* GitHub Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-monolog-dark/20 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* View on GitHub Hover Text */}
                  <div className="absolute inset-0 flex items-center justify-center bg-monolog-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                        <Github className="w-8 h-8 text-monolog-dark" />
                      </div>
                      <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-white">
                        View on GitHub
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
