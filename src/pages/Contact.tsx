import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import profileImg from '@/assets/profile.jpg';

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-[#1c1c1c] text-white font-sans overflow-x-hidden">
      {/* Main Split Layout */}
      <div className="flex flex-col lg:flex-row h-screen">
        
        {/* Left Column: Content */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-gutter pt-32 pb-16 lg:pt-0 lg:pb-0 overflow-y-auto custom-scrollbar">
          <div className="max-w-[500px] mx-auto lg:ml-0 lg:mr-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-12"
            >
              Contact
            </motion.h1>

            {/* Profile Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12 flex items-center gap-6"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/20">
                <img src={profileImg} alt="Riko" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm md:text-base leading-relaxed text-gray-300">
                Hi 👋🏼 I&apos;m Riko and I&apos;m happy to help you with your project request. 
                Just send me an email to <a href="mailto:giovanniriko@gmail.com" className="text-white underline underline-offset-4 hover:text-monolog-muted transition-colors">giovanniriko@gmail.com</a>
              </p>
            </motion.div>

            {/* Quick Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex gap-4 mb-12"
            >
       
            </motion.div>

            {/* Contact Info Blocks */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="space-y-4"
            >
              <div className="bg-[#2d2d2d] rounded-xl p-6">
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 block mb-1">Email</span>
                <p className="text-lg md:text-xl font-medium">giovanniriko@gmail.com</p>
              </div>
              <div className="bg-[#2d2d2d] rounded-xl p-6">
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 block mb-1">Address</span>
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  Bandung, West Java<br />Indonesia
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="hidden lg:block w-1/2 h-full relative overflow-hidden bg-gradient-to-b from-[#1854b6] via-[#2d6cd3] to-[#00618f]">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-20">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full h-full border-[20px] border-white/10 rounded-[40px] flex items-center justify-center overflow-hidden mix-blend-overlay opacity-50"
            >
               {/* Pattern / Visual element */}
               <div className="text-[10rem] font-black uppercase leading-none text-white tracking-tighter transform -rotate-12 select-none opacity-20">
                Let&apos;s<br />Talk
               </div>
            </motion.div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-9xl font-black uppercase text-white tracking-tighter drop-shadow-2xl">
                Let&apos;s<br />Talk
              </h2>
            </div>
          </div>
        </div>

      </div>

      {/* Back button for mobile if needed */}
      <Link 
        to="/" 
        className="fixed bottom-8 left-8 lg:hidden bg-white text-black p-4 rounded-full shadow-2xl z-50 flex items-center gap-2 font-bold uppercase text-xs"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>
    </div>
  );
}
