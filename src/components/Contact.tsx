
import { Mail, MapPin, ExternalLink, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const languages = [
    { name: "English", level: "Proficient", dots: 4 },
    { name: "Bangla", level: "Native", dots: 5 }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <a 
                    href="mailto:shawonahmmed19@gmail.com"
                    className="text-purple-300 hover:text-purple-400 transition-colors"
                  >
                    shawonahmmed19@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Location</div>
                  <div className="text-gray-300">Satkhira, Bangladesh</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">LinkedIn</div>
                  <a 
                    href="https://www.linkedin.com/in/shawon-ahmmed-987a68226/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-purple-400 transition-colors"
                  >
                    https://www.linkedin.com
                  </a>
                </div>
              </div>
            </div>
            
            {/* Languages */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Languages</h4>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <span className="text-white font-semibold">{lang.name}</span>
                      <span className="text-gray-400 ml-2">({lang.level})</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i}
                          className={`w-3 h-3 rounded-full ${
                            i < lang.dots ? 'bg-purple-500' : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🚀</div>
                    <div className="text-white font-bold">Ready to Start?</div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                Let's Build Something Great
              </h3>
              
              <p className="text-gray-300 mb-8 max-w-md">
                Whether you need a modern website, web application, or custom solution, 
                I'm here to help bring your vision to reality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:shawonahmmed19@gmail.com"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Start a Project
                </a>
                <Link 
                  to="/portfolio"
                  rel="noopener noreferrer"
                  className="border-2 border-purple-500 text-purple-300 px-8 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  View More Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
