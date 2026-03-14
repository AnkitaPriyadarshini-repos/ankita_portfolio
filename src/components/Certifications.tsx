import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Trophy } from 'lucide-react';

const certs = [
  "Foundational C# with Microsoft",
  "Duelist",
  "Postman API Fundamentals Student Expert",
  "JPMorgan Chase - Investment Banking Job Simulation",
  "Python 101 for Data Science"
];

const achievements = [
  { title: "GSSoc’25 Contributor", desc: "Open Source Contribution" },
  { title: "Leetcode", desc: "DSA Problem Solving" }
];

export const Certifications: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-white/10 rounded-2xl">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Certifications</h2>
          </div>
          
          <div className="space-y-4">
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 group hover:border-white/30 transition-all"
              >
                <div className="w-2 h-2 bg-white/20 rounded-full group-hover:bg-white transition-colors" />
                <span className="text-white/70 font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-white/10 rounded-2xl">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Achievements</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-3xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Trophy className="w-24 h-24" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/40 uppercase tracking-widest text-xs font-bold">{item.desc}</p>
              </motion.div>
            ))}
            
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
              <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">Additional Info</h4>
              <ul className="space-y-2">
                <li className="text-white/60 text-sm">• Development Enthusiast</li>
                <li className="text-white/60 text-sm">• Sambalpur, Odisha, India</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
