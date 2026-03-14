import React from 'react';
import { motion } from 'motion/react';
import { Code2, Globe, Cpu } from 'lucide-react';

const skillGroups = [
  {
    title: "Top Skills",
    icon: <Cpu className="w-5 h-5" />,
    skills: ["Application Programming Interfaces (API)", "Ingress", "Helm Charts"]
  },
  {
    title: "Technical",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["C", "C++", "Java", "Python", "HTML", "CSS", "JavaScript", "Data Structures", "Web development tools"]
  },
  {
    title: "Languages",
    icon: <Globe className="w-5 h-5" />,
    skills: ["Odia (Native)", "English (Professional)", "Hindi (Working)"]
  }
];

export const Skills: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white/[0.02] backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-white" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.08] transition-all group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-6 tracking-tight">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 hover:text-white hover:border-white/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
