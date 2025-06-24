
import React from 'react';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: "Anur",
      description: "Practice project built with React.js showcasing modern frontend development skills and component architecture. Features responsive design and clean code implementation.",
      tech: ["React.js"],
      liveLink: "https://anur.netlify.app/",
      category: "Practice",
      status: "Live",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      features: ["React Components", "Responsive Design", "Modern JavaScript", "Clean Architecture"]
    },
    {
      title: "Prayer Time", 
      description: "Professional client project built with React.js. Ecommerce platform selling prayer mats with PayPal SDK integration for secure payments.",
      tech: ["React.js", "PayPal SDK"],
      liveLink: "https://my-prayer-time.netlify.app/",
      category: "Client",
      status: "Live",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      features: ["E-commerce Functionality", "Payment Integration", "Responsive Design"]
    },
    {
      title: "Memory Mate",
      description: "Personal SAAS application built with Next.js featuring full-stack architecture, user management, and subscription-based features.",
      tech: ["Next.js", "Full-stack", "MongoDB"],
      liveLink: "https://mate.fabbythemes.com/",
      category: "SAAS",
      status: "Live",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      features: ["Full-stack Architecture", "User Management", "Subscription Model", "Database Integration"]
    },
    {
      title: "Luxury Drip",
      description: "Premium client project featuring luxury e-commerce platform with Next.js, advanced product showcase, and seamless user experience.",
      tech: ["Next.js", "Full-stack"],
      liveLink: "https://luxury-drip.it/",
      category: "Client",
      status: "Live",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      features: ["E-commerce Platform", "Luxury Design", "Product Management"]
    },
    {
      title: "Mogecoin",
      description: "Cryptocurrency landing page built with vanilla JavaScript and modern CSS techniques. Features responsive design, and interactive elements.",
      tech: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://www.mogecoin.com/",
      category: "Client",
      status: "Live",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      features: ["Responsive Design", "Modern JavaScript"]
    },
    {
      title: "Desi Takeout",
      description: "Restaurant website built with Next.js full-stack architecture featuring  menu management and food showcase.",
      tech: ["Next.js", "Full-stack"],
      liveLink: "https://desitakeout.net/",
      category: "Client",
      status: "Live",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      features: ["Full-stack Architecture", "Menu Management", "Food Showcase", "Responsive Design"]
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
      title: "Pera Implant",
      description: "Medical website built with WordPress and Elementor.",
      tech: ["WordPress", "Elementor"],
      liveLink: "https://pera-implant.com/en/",
      category: "WordPress",
      status: "Live",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      features: ["Medical Website", "Service Showcase", "Multilingual Support"]
    },
    {
      title: "Has Plomberie",
      description: "Plumbing services website built with WordPress and Elementor featuring contact forms, and professional presentation.",
      tech: ["WordPress", "Elementor"],
      liveLink: "https://hasplomberie.com/",
      category: "WordPress",
      status: "Live",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      features: ["Service Listings", "Contact Forms", "Professional Design", "Mobile Responsive"]
    },
    {
      title: "Brainy Future",
      description: "Educational platform built with WordPress and Elementor.",
      tech: ["WordPress", "Elementor"],
      liveLink: "http://brainyfuture.com/",
      category: "WordPress",
      status: "Live",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      features: ["Educational Platform", "Appointment Booking"]
    },
    {
      title: "Zar Agency",
      description: "Digital agency website built with WordPress and Elementor showcasing services, portfolio, and team information with modern design.",
      tech: ["WordPress", "Elementor"],
      liveLink: "https://zaragency.com/",
      category: "WordPress",
      status: "Live",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      features: ["Agency Website", "Portfolio Showcase", "Service Pages", "Team Information"]
    }
  ];

  const categories = ["All", "Client", "SAAS", "Practice", "Themeforest", "WordPress"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-indigo-900">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              My Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive showcase of my web development projects, from client solutions to SAAS applications and premium themes
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white border border-slate-700/50 hover:border-cyan-500/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group backdrop-blur-sm"
            >
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.category === 'Client' ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white' :
                    project.category === 'SAAS' ? 'bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white' :
                    project.category === 'Practice' ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' :
                    project.category === 'Theme' ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' :
                    'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  }`}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded text-xs border border-slate-600/50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-fuchsia-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gradient-to-r from-violet-900/30 to-fuchsia-900/30 text-violet-300 px-2 py-1 rounded text-sm border border-violet-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300 flex-1 justify-center shadow-lg shadow-cyan-500/25"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 py-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects. 
            Let's create something amazing together!
          </p>
          <Link 
            to="/#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-violet-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/25"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
