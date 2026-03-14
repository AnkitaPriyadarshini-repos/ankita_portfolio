import React from 'react';
import { 
  Terminal, Layers, Server, Globe, GraduationCap, Award, Trophy, 
  Github, Lock, FileCode, Map as MapIcon, Image as ImageIcon, 
  Mic, MessageSquare, Activity, Database
} from 'lucide-react';
import { 
  SiNodedotjs, SiReact, SiMongodb, SiExpress, SiPython, SiPytorch, 
  SiOpenai, SiMapbox, SiCloudinary, SiStreamlit, SiJavascript, 
  SiCplusplus, SiPostman, SiDocker, SiKubernetes, SiLinux, 
  SiGithub, SiGit 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

export const getTechIcon = (tech: string) => {
  const t = tech.toLowerCase();
  
  if (t.includes('node')) return <SiNodedotjs size={14} />;
  if (t.includes('react')) return <SiReact size={14} />;
  if (t.includes('mongo')) return <SiMongodb size={14} />;
  if (t.includes('express')) return <SiExpress size={14} />;
  if (t.includes('python')) return <SiPython size={14} />;
  if (t.includes('pytorch')) return <SiPytorch size={14} />;
  if (t.includes('openai')) return <SiOpenai size={14} />;
  if (t.includes('mapbox')) return <SiMapbox size={14} />;
  if (t.includes('cloudinary')) return <SiCloudinary size={14} />;
  if (t.includes('streamlit')) return <SiStreamlit size={14} />;
  if (t.includes('javascript')) return <SiJavascript size={14} />;
  if (t.includes('c++')) return <SiCplusplus size={14} />;
  if (t.includes('postman')) return <SiPostman size={14} />;
  if (t.includes('docker')) return <SiDocker size={14} />;
  if (t.includes('kubernetes')) return <SiKubernetes size={14} />;
  if (t.includes('aws')) return <FaAws size={14} />;
  if (t.includes('linux')) return <SiLinux size={14} />;
  if (t.includes('github')) return <SiGithub size={14} />;
  if (t.includes('git')) return <SiGit size={14} />;

  if (t.includes('cryptography') || t.includes('secure')) return <Lock className="w-3.5 h-3.5" />;
  if (t.includes('file system')) return <FileCode className="w-3.5 h-3.5" />;
  if (t.includes('map')) return <MapIcon className="w-3.5 h-3.5" />;
  if (t.includes('image')) return <ImageIcon className="w-3.5 h-3.5" />;
  if (t.includes('speech') || t.includes('voice')) return <Mic className="w-3.5 h-3.5" />;
  if (t.includes('chat') || t.includes('message')) return <MessageSquare className="w-3.5 h-3.5" />;
  if (t.includes('traffic') || t.includes('detection')) return <Activity className="w-3.5 h-3.5" />;
  if (t.includes('sql') || t.includes('database')) return <Database className="w-3.5 h-3.5" />;
  if (t.includes('api')) return <Globe className="w-3.5 h-3.5" />;
  
  return <Layers className="w-3.5 h-3.5" />;
};

export const SkillCard = ({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string[] }) => (
  <div className="p-6 glass-card hover:border-[#ffdb70]/30 transition-all">
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h4 className="text-lg font-bold">{title}</h4>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span key={i} className="px-2 py-1.5 bg-[#2b2b2c] border border-[#383838] rounded-md text-[10px] font-medium text-white/70 flex items-center gap-1.5">
          {getTechIcon(skill)}
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export const ProjectCard = ({ title, tech, desc, bullets, github }: { title: string, tech: string[], desc: string, bullets?: string[], github: string }) => (
  <div className="p-8 glass-card group hover:border-[#ffdb70]/30 transition-all">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-white group-hover:text-[#ffdb70] transition-colors">{title}</h3>
      <a href={github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white">
        <Github className="w-5 h-5" />
      </a>
    </div>
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((t, i) => (
        <span key={i} className="px-2 py-1 bg-[#2b2b2c] border border-[#383838] rounded-md text-[10px] font-bold text-[#ffdb70] uppercase tracking-wider flex items-center gap-1.5">
          {getTechIcon(t)}
          {t}
        </span>
      ))}
    </div>
    <p className="text-white/70 text-sm mb-4 leading-relaxed">{desc}</p>
    {bullets && (
      <ul className="space-y-2 ml-4 list-disc text-white/50 text-xs">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    )}
  </div>
);

export const AchievementCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="p-6 glass-card flex gap-5 items-start">
    <div className="shrink-0 mt-1">{icon}</div>
    <div>
      <h4 className="text-lg font-bold mb-1">{title}</h4>
      <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export const TimelineItem = ({ title, date, desc, subDesc, bullets }: { title: string, date: string, desc: string, subDesc?: string, bullets?: string[] }) => (
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
