import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    institution: "Sambalpur University Institute of Information Technology (SUIIT)",
    degree: "Bachelor of Technology - BTech, Computer Science",
    dates: "2023 - 2027",
    location: "Burla, Odisha"
  },
  {
    institution: "Mother's Public School",
    degree: "Higher Secondary Education",
    dates: "2020 - 2022",
    location: "Odisha"
  },
  {
    institution: "Happy Home School Bhadrak Odisha",
    degree: "Primary & Secondary Education",
    dates: "2007 - 2020",
    location: "Bhadrak, Odisha"
  }
];

const contributorWork = [
  {
    role: "Contributor",
    company: "GSSoc’25 (GirlScript Summer of Code)",
    dates: "2025",
    bullets: ["Actively contributing to open-source projects", "Collaborating with diverse developers globally"]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Experience & Education</h2>
        <div className="h-1 w-20 bg-white" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-bold text-white/40 uppercase tracking-widest mb-8 flex items-center gap-3">
            <Award className="w-5 h-5" /> Experience
          </h3>
          <div className="space-y-8">
            {contributorWork.map((work, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md"
              >
                <span className="text-xs font-bold text-white/40 mb-2 block">{work.dates}</span>
                <h4 className="text-xl font-bold text-white mb-1">{work.role}</h4>
                <p className="text-white/60 mb-4">{work.company}</p>
                <ul className="space-y-2">
                  {work.bullets.map((bullet, j) => (
                    <li key={j} className="text-sm text-white/40 flex gap-2">
                      <span className="text-white/20">•</span> {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white/40 uppercase tracking-widest mb-8 flex items-center gap-3">
            <GraduationCap className="w-5 h-5" /> Education
          </h3>
          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <span className="text-xs font-bold text-white/40 mb-2 block">{edu.dates}</span>
                <h4 className="text-lg font-bold text-white mb-1">{edu.institution}</h4>
                <p className="text-sm text-white/60">{edu.degree}</p>
                <p className="text-xs text-white/30 mt-1 italic">{edu.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
