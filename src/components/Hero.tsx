
import React from 'react';
import { Github, ExternalLink, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-40 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-3000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/20">
              <img 
                src="/shawon.jpg"
                alt="Shawon Ahmed"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent mb-4 animate-fade-in">
            SHAWON AHMED
          </h1>
          
          <div className="text-xl md:text-2xl bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent mb-6 animate-fade-in delay-300">
            Frontend Engineer
          </div>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in delay-500">
            Passionate Frontend Engineer specializing in React.js, Next.js, and modern web technologies. 
            Creating beautiful, responsive, and user-friendly web applications with cutting-edge design.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in delay-700">
            <div className="flex items-center gap-2 text-gray-300 bg-slate-800/50 px-4 py-2 rounded-full border border-cyan-500/20">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>shawonahmmed19@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 bg-slate-800/50 px-4 py-2 rounded-full border border-fuchsia-500/20">
              <MapPin className="w-5 h-5 text-fuchsia-400" />
              <span>Satkhira, Bangladesh</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 animate-fade-in delay-1000">
            <Link 
              to="/portfolio"
              className="bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-violet-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/25"
            >
              <ExternalLink className="w-5 h-5" />
              View Portfolio
            </Link>
            <a 
              href="mailto:shawonahmmed19@gmail.com"
              className="border-2 border-gradient-to-r border-cyan-500 text-cyan-300 px-8 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-fuchsia-500/10 hover:text-white transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
