import React from 'react';
import { Terminal, Layers, Server, Globe } from 'lucide-react';
import { SkillCard } from '../ui/Shared';

const AboutSection = () => (
  <div className="space-y-12">
    <div>
      <h2 className="text-3xl font-bold mb-5 relative inline-block">
        About Me
        <div className="absolute -bottom-2 left-0 w-10 h-1.5 bg-[#ffdb70] rounded-full" />
      </h2>
      <div className="space-y-4 text-white/70 leading-relaxed mt-8">
        <p>
          Data-driven Computer Science undergraduate skilled in SQL, analytics, and dashboard development. 
          Experienced in handling large datasets (25k+ records) and deriving actionable insights to support strategic decision-making.
        </p>
        <p>
          Proven ability to build complex monitoring systems with a focus on metrics, KPIs, and operational efficiency. 
          Currently pursuing B.Tech at SUIIT, Burla (2023-2027) with a CGPA of 9.18/10.00.
        </p>
      </div>
    </div>

    <div>
      <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillCard 
          icon={<Terminal className="w-6 h-6 text-[#ffdb70]" />}
          title="Languages"
          skills={["C++", "Java", "Python", "JavaScript (ES6+)", "SQL", "HTML", "CSS"]}
        />
        <SkillCard 
          icon={<Layers className="w-6 h-6 text-[#ffdb70]" />}
          title="Frameworks & Backend"
          skills={["Node.js", "Express.js", "React.js", "Tailwind CSS", "PyTorch", "MongoDB", "Firebase"]}
        />
        <SkillCard 
          icon={<Server className="w-6 h-6 text-[#ffdb70]" />}
          title="Tools & Cloud"
          skills={["Git", "GitHub", "VS Code", "Postman API", "Linux/Unix", "Docker", "Kubernetes", "Helm Charts", "Ingress", "AWS (S3, EC2)"]}
        />
        <SkillCard 
          icon={<Globe className="w-6 h-6 text-[#ffdb70]" />}
          title="Spoken Languages"
          skills={["Odia (Native)", "English (Professional)", "Hindi (Working)"]}
        />
      </div>
    </div>
  </div>
);

export default AboutSection;
