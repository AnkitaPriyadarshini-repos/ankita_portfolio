import React from 'react';
import { Mail, Phone, Calendar, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

export const Sidebar: React.FC = React.memo(() => {
  return (
    <aside className="w-full lg:w-[280px] lg:sticky lg:top-12 h-fit glass-card p-8 flex flex-col items-center">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8 lg:mb-10 w-full">
        <div className="w-32 h-32 bg-[#383838] rounded-[30px] mb-5 flex items-center justify-center overflow-hidden border border-[#383838]">
          <img 
            src="/image.png" 
            alt="Ankita Priyadarshini Pallai" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-xl font-bold text-center mb-3 tracking-tight">Ankita Priyadarshini Pallai</h1>
        <div className="px-4 py-1.5 bg-[#2b2b2c] rounded-lg text-[10px] font-medium text-white/90 uppercase tracking-wider">
          Software Engineer / AI-ML
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#383838] mb-8" />

      {/* Contact Info */}
      <div className="w-full space-y-6">
        <ContactItem 
          icon={<Mail className="w-4 h-4 text-[#ffdb70]" />} 
          label="EMAIL" 
          value="ankitapriyadarshini8600@gmail.com" 
          href="mailto:ankitapriyadarshini8600@gmail.com"
        />
        <ContactItem 
          icon={<Phone className="w-4 h-4 text-[#ffdb70]" />} 
          label="PHONE" 
          value="+91 7978037908" 
          href="tel:+917978037908"
        />
        <ContactItem 
          icon={<Calendar className="w-4 h-4 text-[#ffdb70]" />} 
          label="BIRTHDAY" 
          value="Nov 15, 2004" 
        />
        <ContactItem 
          icon={<MapPin className="w-4 h-4 text-[#ffdb70]" />} 
          label="LOCATION" 
          value="Bhadrak, Odisha, India" 
        />
      </div>

      <div className="w-full h-[1px] bg-[#383838] my-8" />

      <button className="w-full py-4 bg-gradient-to-br from-[#ffdb70] to-[#ffbb33] text-[#121212] rounded-2xl font-bold text-sm shadow-[0_4px_20px_rgba(255,219,112,0.2)] hover:scale-[1.02] transition-transform active:scale-[0.98] mb-8">
        Download CV
      </button>

      {/* Socials */}
      <div className="flex gap-4">
        <SocialLink href="https://linkedin.com/in/ankita-priyadarshini-pallai" icon={<Linkedin className="w-5 h-5" />} />
        <SocialLink href="https://github.com/AnkitaPriyadarshini-repos" icon={<Github className="w-5 h-5" />} />
        <SocialLink href="https://leetcode.com/u/Ankita_Priyadarshini/" icon={<ExternalLink className="w-5 h-5" />} label="LeetCode" />
      </div>
    </aside>
  );
});

const ContactItem = ({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) => (
  <div className="flex items-start sm:items-center gap-4 group">
    <div className="w-10 h-10 rounded-xl sidebar-item-icon flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform mt-1 sm:mt-0">
      {icon}
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-[10px] text-white/40 font-bold tracking-wider uppercase mb-0.5">{label}</p>
      {href ? (
        <a href={href} className="text-[13px] sm:text-sm text-white/90 break-words hover:text-[#ffdb70] transition-colors leading-tight block">{value}</a>
      ) : (
        <p className="text-[13px] sm:text-sm text-white/90 break-words leading-tight">{value}</p>
      )}
    </div>
  </div>
);

const SocialLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label?: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white/40 hover:text-[#ffdb70] transition-all flex items-center gap-2"
    title={label}
  >
    {icon}
    {label && <span className="text-xs font-medium hidden lg:inline">{label}</span>}
  </a>
);
