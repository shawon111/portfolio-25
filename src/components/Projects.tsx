
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Anur",
      description: "Practice project built with React.js showcasing modern frontend development skills",
      tech: ["React.js"],
      liveLink: "https://anur.netlify.app/",
      category: "Practice",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    },
    {
      title: "Archite",
      description: "Professional HTML template for Themeforest featuring architecture and interior design showcase with modern aesthetics and responsive layout.",
      tech: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://themeforest.net/item/archite-html-template-for-architecture-and-interior-designer/45799015",
      category: "Themeforest",
      status: "Live on Themeforest",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      features: ["Architecture Design", "Portfolio Showcase", "Responsive Layout", "Modern Aesthetics"]
    },
    {
      title: "CreDesign", 
      description: "Personal portfolio template for Themeforest featuring creative design elements, smooth animations, and customizable sections.",
      tech: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://themeforest.net/item/credesign-personal-portfolio-template/46331736",
      category: "Themeforest",
      status: "Live on Themeforest",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      features: ["Portfolio Template", "Creative Design", "Smooth Animations", "Easy Customization"]
    },
    {
      title: "Prayer Time", 
      description: "Ecommerce project built with React.js and PayPal SDK for payment integration",
      tech: ["React.js", "PayPal SDK"],
      liveLink: "https://my-prayer-time.netlify.app/",
      category: "Client",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
    },
    {
      title: "Memory Mate",
      description: "Personal SAAS application built with Next.js full-stack architecture",
      tech: ["Next.js", "Full-stack"],
      liveLink: "https://mate.fabbythemes.com/",
      category: "SAAS",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop"
    },
    {
      title: "Mogecoin",
      description: "Cryptocurrency landing page built with vanilla JavaScript and modern CSS",
      tech: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://www.mogecoin.com/",
      category: "Client",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work spanning client projects, SAAS applications, and practice builds
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group backdrop-blur-sm"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.category === 'Client' ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white' :
                    project.category === 'SAAS' ? 'bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white' :
                    'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 text-cyan-300 px-2 py-1 rounded text-sm border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300 shadow-lg shadow-cyan-500/25"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
