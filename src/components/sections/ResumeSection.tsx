import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { TimelineItem } from '../ui/Shared';

const ResumeSection = () => (
  <div className="space-y-12">
    <h2 className="text-3xl font-bold mb-5 relative inline-block">
      Resume
      <div className="absolute -bottom-2 left-0 w-10 h-1.5 bg-[#ffdb70] rounded-full" />
    </h2>

    <section>
      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-10 rounded-xl sidebar-item-icon flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-[#ffdb70]" />
        </div>
        <h3 className="text-xl font-bold">Education</h3>
      </div>
      <div className="space-y-8 ml-5 border-l border-[#383838]">
        <TimelineItem 
          title="Sambalpur University Institute of Information Technology (SUIIT)"
          date="2023 - 2027"
          desc="Bachelor of Technology in Computer Science and Engineering"
          subDesc="GPA: 9.10 / 10.00 | Relevant Coursework: DSA, OOP, DBMS, OS, Computer Networks, Compiler Design."
        />
        <TimelineItem 
          title="Mother's Public School"
          date="2020 - 2022"
          desc="Higher Secondary Education"
        />
      </div>
    </section>

    <section>
      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-10 rounded-xl sidebar-item-icon flex items-center justify-center">
          <Award className="w-5 h-5 text-[#ffdb70]" />
        </div>
        <h3 className="text-xl font-bold">Experience</h3>
      </div>
      <div className="space-y-8 ml-5 border-l border-[#383838]">
        <TimelineItem 
          title="Infosys Springboard — Software Engineering / AI-ML Intern"
          date="October 2025 – December 2025"
          desc="Engineered an AI-driven Smart Traffic Management System enabling real-time vehicle detection and classification using custom YOLOv8 models."
          bullets={[
            "Ranked in the top 10% of participants by demonstrating strong software engineering fundamentals.",
            "Optimized data preprocessing and model training pipelines using Python and PyTorch."
          ]}
        />
        <TimelineItem 
          title="Deloitte — Technology Consulting Simulation"
          date="June 2025 – July 2025"
          desc="Designed an AI-driven digital transformation solution for a mock enterprise client, delivering a scalable system architecture."
        />
      </div>
    </section>
  </div>
);

export default ResumeSection;
