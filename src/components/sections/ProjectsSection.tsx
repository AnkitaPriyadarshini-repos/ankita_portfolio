import React from 'react';
import { ProjectCard } from '../ui/Shared';

const ProjectsSection = () => (
  <div className="space-y-12">
    <h2 className="text-3xl font-bold mb-5 relative inline-block">
      Projects
      <div className="absolute -bottom-2 left-0 w-10 h-1.5 bg-[#ffdb70] rounded-full" />
    </h2>

    <div className="grid grid-cols-1 gap-8 mt-8">
      <ProjectCard 
        title="CodeHarbourX – Git-like Version Control Engine"
        tech={["Node.js", "File System", "Cryptography"]}
        desc="Developed a custom version control engine implementing core Git functionalities such as init, commit, push, and pull using a blob–tree–commit object model."
        bullets={[
          "Implemented secure SHA-1 hashing and staging mechanisms to ensure data integrity.",
          "Designed a modular backend system following the Single Responsibility Principle."
        ]}
        github="https://github.com/AnkitaPriyadarshini-repos"
      />
      <ProjectCard 
        title="Trippa – Stay Finder (Airbnb Clone)"
        tech={["MERN Stack", "Mapbox", "Cloudinary"]}
        desc="Architected a full-stack booking platform using MVC architecture and RESTful APIs, enabling geospatial search and location-based discovery."
        bullets={[
          "Designed optimized MongoDB schemas with relational consistency.",
          "Implemented JWT-based authentication and role-based access control."
        ]}
        github="https://github.com/AnkitaPriyadarshini-repos"
      />
      <ProjectCard 
        title="Apex Stratos AI – ChatGPT Clone"
        tech={["React", "Node.js", "OpenAI API", "Web Speech API"]}
        desc="Built a generative AI interface with real-time message streaming and contextual responses using OpenAI GPT models."
        bullets={[
          "Implemented backend API rate limiting and token management.",
          "Integrated Web Speech API for bidirectional voice interaction."
        ]}
        github="https://github.com/AnkitaPriyadarshini-repos"
      />
      <ProjectCard 
        title="Smart Traffic Management System"
        tech={["Python", "YOLOv8", "PyTorch", "Streamlit"]}
        desc="Trained and deployed custom YOLO models for ANPR and ATCC using 25,000+ labeled images, achieving high detection accuracy."
        github="https://github.com/AnkitaPriyadarshini-repos"
      />
    </div>
  </div>
);

export default ProjectsSection;
