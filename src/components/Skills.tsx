
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "ES6+", "React.js", "Next.js", "Redux"]
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express.js", "MongoDB", "REST API"]
    },
    {
      title: "Styling",
      skills: ["Tailwind CSS", "Bootstrap", "MUI", "GSAP"]
    },
    {
      title: "Tools & CMS",
      skills: ["WordPress", "Elementor Pro", "Clerk", "Supabase", "JWT"]
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Proficient in modern web technologies and frameworks
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-bold text-purple-400 mb-4">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-slate-800 text-gray-300 px-3 py-2 rounded-lg text-sm hover:bg-purple-500 hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
