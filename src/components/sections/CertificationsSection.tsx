import React from 'react';
import { Trophy, Award } from 'lucide-react';
import { AchievementCard } from '../ui/Shared';

const CertificationsSection = () => (
  <div>
    <h2 className="text-3xl font-bold mb-5 relative inline-block">
      Certifications & Achievements
      <div className="absolute -bottom-2 left-0 w-10 h-1.5 bg-[#ffdb70] rounded-full" />
    </h2>
    
    <div className="mt-12 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AchievementCard 
          icon={<Trophy className="w-6 h-6 text-[#ffdb70]" />}
          title="LeetCode"
          desc="Solved 300+ algorithmic problems across Easy, Medium, and Hard difficulty levels. Earned Knight Badge and Top 50 Badge."
        />
        <AchievementCard 
          icon={<Award className="w-6 h-6 text-[#ffdb70]" />}
          title="GSSoc’25"
          desc="Active contributor to GirlScript Summer of Code 2025."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "Foundational C# with Microsoft",
          "Duelist Certification",
          "Postman API Fundamentals Certified Student Expert",
          "JPMorgan Chase - Investment Banking Job Simulation",
          "Python 101 for Data Science"
        ].map((cert, i) => (
          <div key={i} className="p-6 bg-[#2b2b2c] border border-[#383838] rounded-2xl flex items-center gap-4">
             <div className="w-2 h-2 rounded-full bg-[#ffdb70]" />
             <p className="text-white/80 font-medium">{cert}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CertificationsSection;
