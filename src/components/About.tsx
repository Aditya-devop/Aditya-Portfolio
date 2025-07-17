import React from 'react';
import { Clock ,GraduationCap, Code, Brain, Coffee } from 'lucide-react';

const About = () => {
  const skill = [
    "JavaScript", "Python", "React", "Node.js", "Machine Learning", 
    "TensorFlow", "MongoDB", "Express.js", "AI/ML", "Problem Solving",
    "Apache Kafka", "Firebase", "C/C++", "Java", "Data Science"
  ];
  const skills = [
    "C/C++", "Java", "Python" ,"JavaScript","SQL" ,"React", "Node.js", "Express.js", "MongoDB", "AI/ML","Apache Kafka" ,"Data Science", "Firebase","Problem Solving", "DSA","Vibe coding"
  ];
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer with a strong academic background and hands-on experience in cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Academic Background */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Academic Background</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-400 pl-6">
                <h4 className="text-xl font-semibold text-white mb-2">Bachelor's in Computer Science and Engineering</h4>
                <p className="text-gray-300">VIT University, Vellore</p>
                <p className="text-blue-400 font-semibold">CGPA: 9.83/10</p>
                <p className="text-gray-400 text-sm">2022 - 2026</p>
              </div>
              
              <div className="border-l-4 border-purple-400 pl-6">
                <h4 className="text-xl font-semibold text-white mb-2">Higher Secondary</h4>
                <p className="text-gray-300">Brahma Valley, Nashik</p>
                <p className="text-purple-400 font-semibold">Percentage: 87.83%</p>
                <p className="text-gray-400 text-sm">2019 - 2021</p>
              </div>

              <div className="border-l-4 border-green-400 pl-6">
                <h4 className="text-xl font-semibold text-white mb-2">Secondary School</h4>
                <p className="text-gray-300">Sacred Heart Convent High School, Nashik</p>
                <p className="text-green-400 font-semibold">Percentage: 87.20%</p>
                <p className="text-gray-400 text-sm">2012 - 2019</p>
              </div>
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Code className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Skills & Expertise</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg px-4 py-2 text-center text-white font-medium hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 hover:scale-105"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <Brain className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h4 className="text-3xl font-bold text-white mb-2">80+</h4>
              <p className="text-gray-300">Crazy Ideas</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              
              <Coffee className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h4 className="text-3xl font-bold text-white mb-2">150+</h4>
              <p className="text-gray-300">Coffee cups</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <Clock  className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h4 className="text-3xl font-bold text-white mb-2">720+</h4>
              <p className="text-gray-300">Hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
