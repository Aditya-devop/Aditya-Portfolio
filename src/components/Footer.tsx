
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Aditya Shriwal</h3>
            <p className="text-gray-300 text-sm">
              Passionate developer creating innovative solutions through code. 
              Always excited to work on challenging projects and learn new technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                About Me
              </a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Projects
              </a>
              <a href="#certifications" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Certifications
              </a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Aditya-devop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group"
              >
                <Github className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-shriwal2132/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="mailto:aditya@example.com"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group"
              >
                <Mail className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Open to collaboration and new opportunities
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by Aditya Shriwal
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              © 2025 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
