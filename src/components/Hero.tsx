import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Download, Linkedin } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-white/60 backdrop-blur-sm">
            Available for Opportunities
          </span>
          
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-[0.9]">
            Ankita <br />
            <span className="text-white/40">Priyadarshini</span> <br />
            Pallai
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-white/60 mb-12 leading-relaxed font-light">
            Data Structures & Algorithms Enthusiast. Proficient in C++, Python, and Java. 
            GSSoc’25 Contributor & Development Enthusiast based in Sambalpur, India.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToExperience}
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all flex items-center gap-2 group"
            >
              View Experience
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <a
              href="#"
              className="px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-md"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/ankita-priyadarshini-pallai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 text-white rounded-full border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/image.png"
              alt="Ankita Priyadarshini Pallai"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-white/20" />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};
