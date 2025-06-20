
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Web Developer",
      company: "Fiverr",
      period: "2021 – Present",
      location: "Remote",
      description: "Building custom websites and web applications for clients worldwide. Specializing in React.js, WordPress, and modern frontend technologies.",
      highlights: ["Custom web development", "Client consultation", "Project management"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
    },
    {
      title: "Full Stack Developer", 
      company: "ROOBNET",
      period: "04/2022 – 08/2022",
      location: "Remote",
      description: "Developed full-stack web applications using modern technologies. Collaborated with team members on various client projects.",
      highlights: ["Full-stack development", "Team collaboration", "Client projects"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop"
    }
  ];

  const education = [
    {
      degree: "B.Sc. in Mathematics",
      institution: "Satkhira Govt. College", 
      period: "2021 – Present",
      status: "Ongoing"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Satkhira Govt. College",
      period: "2017 – 2019", 
      status: "Completed"
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-8">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                      <div className="flex items-center gap-2 text-purple-300">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-purple-400 font-semibold">{exp.company}</span>
                      <div className="flex items-center gap-1 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <span 
                          key={hIndex}
                          className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      edu.status === 'Ongoing' 
                        ? 'bg-yellow-500 text-yellow-900' 
                        : 'bg-green-500 text-green-900'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <div className="text-purple-400 font-semibold mb-2">{edu.institution}</div>
                  
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Certifications */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-white mb-4">Certifications</h4>
              <div className="space-y-3">
                <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                  <span className="text-purple-400">Complete Web Development Course</span>
                  <div className="text-gray-400 text-sm">Programming Hero</div>
                </div>
                <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                  <span className="text-purple-400">WordPress Pro: From Beginner to Expert</span>
                  <div className="text-gray-400 text-sm">Coders Foundation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
