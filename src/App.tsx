import React, { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';

const AboutSection = lazy(() => import('./components/sections/AboutSection'));
const ResumeSection = lazy(() => import('./components/sections/ResumeSection'));
const ProjectsSection = lazy(() => import('./components/sections/ProjectsSection'));
const CertificationsSection = lazy(() => import('./components/sections/CertificationsSection'));
const ContactSection = lazy(() => import('./components/sections/ContactSection'));

const Sidebar = lazy(() => import('./components/Sidebar').then(module => ({ default: module.Sidebar })));
const AnimatedBackground = lazy(() => import('./components/AnimatedBackground').then(module => ({ default: module.AnimatedBackground })));

type Tab = 'About' | 'Resume' | 'Projects' | 'Certifications' | 'Contact';

const LoadingSpinner = () => (
  <div className="flex-1 flex items-center justify-center min-h-[400px]">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <Loader2 className="w-8 h-8 text-[#ffdb70]" />
    </motion.div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('About');

  return (
    <div className="min-h-screen p-6 lg:p-12 max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-6 relative">
      <Suspense fallback={null}>
        <AnimatedBackground />
      </Suspense>
      
      <Suspense fallback={<div className="w-full lg:w-[280px] h-[600px] glass-card animate-pulse" />}>
        <Sidebar />
      </Suspense>

      <main className="flex-1 glass-card p-8 lg:p-10 relative overflow-hidden flex flex-col">
        {/* Navigation */}
        <nav className="absolute top-0 right-0 bg-[#2b2b2c] border-b border-l border-[#383838] rounded-bl-3xl px-8 py-4 z-10 hidden md:block">
          <ul className="flex gap-8">
            {(['About', 'Resume', 'Projects', 'Certifications', 'Contact'] as Tab[]).map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm font-medium transition-colors ${activeTab === tab ? 'text-[#ffdb70]' : 'text-white/60 hover:text-white/80'}`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden flex justify-center mb-8">
           <div className="bg-[#2b2b2c] border border-[#383838] rounded-2xl px-4 py-2 flex gap-4 overflow-x-auto max-w-full no-scrollbar">
            {(['About', 'Resume', 'Projects', 'Certifications', 'Contact'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs font-medium transition-colors whitespace-nowrap ${activeTab === tab ? 'text-[#ffdb70]' : 'text-white/60'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <Suspense fallback={<LoadingSpinner />}>
                {activeTab === 'About' && <AboutSection />}
                {activeTab === 'Resume' && <ResumeSection />}
                {activeTab === 'Projects' && <ProjectsSection />}
                {activeTab === 'Certifications' && <CertificationsSection />}
                {activeTab === 'Contact' && <ContactSection />}
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

const AchievementCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="p-6 glass-card flex gap-5 items-start">
    <div className="shrink-0 mt-1">{icon}</div>
    <div>
      <h4 className="text-lg font-bold mb-1">{title}</h4>
      <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const TimelineItem = ({ title, date, desc, subDesc, bullets }: { title: string, date: string, desc: string, subDesc?: string, bullets?: string[] }) => (
  <div className="relative pl-8 pb-2">
    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-[#ffdb70] rounded-full shadow-[0_0_10px_rgba(255,219,112,0.5)]" />
    <h4 className="text-base font-bold mb-1">{title}</h4>
    <p className="text-[#ffdb70] text-sm font-medium mb-2">{date}</p>
    <p className="text-white/80 text-sm mb-2">{desc}</p>
    {subDesc && <p className="text-white/40 text-xs italic mb-2">{subDesc}</p>}
    {bullets && (
      <ul className="space-y-1 ml-4 list-disc text-white/50 text-xs">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    )}
  </div>
);
