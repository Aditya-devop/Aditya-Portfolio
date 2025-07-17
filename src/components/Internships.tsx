
import React from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';

const Internships = () => {
  const internships = [
    {
      id: 1,
      company: "Valsco Technology",
      position: "Junior Frotend Developer Intern",
      duration: "April 2024 - June 2024",
      location: "Remote",
      description: "Spearheaded immersive training sessions on Advanced HTML, CSS, and JavaScript, empowering students with in-demand frontend development skills. Designed and delivered hands-on workshops focused on crafting pixel-perfect, production-grade UIs, bridging the gap between theory and real-world application. Guided learners through industry-level projects like responsive Apple and Netflix website clones, with a strong focus on accessibility, modern design systems, and semantic coding standards.",
      technologies: ["Advance HTML", "CSS", "JavaScript","Github","Vercel"],
      achievements: [
        "Designed and delivered 2 full-scale responsive web clones (Apple & Netflix), enhancing learners’ practical understanding of real-world UI/UX design.",
        "Increased student engagement by 40% through interactive, project-based teaching modules.",
        "Simplified complex frontend topics, making them easier to understand and apply."
      ]
    },
    {
      id: 2,
      company: "Bharat Intern",
      position: "Web Development Intern",
      duration: "February 2024 - March 2024",
      location: "Remote",
      description: "During my Web Development Internship at Bharat Intern (Feb–Mar 2024), I enhanced my skills in building responsive, user-friendly web interfaces using HTML, CSS, and JavaScript. I gained hands-on experience with modern design systems like Flexbox and Grid, dynamic DOM manipulation, and API integration, strengthening my foundation in real-world frontend development.",
      technologies: ["HTML","CSS","Javascript"],
      achievements: [
        "Recreated the Netflix Homepage UI with advanced CSS layouts and design precision.",
        "Developed a Weather App that displays real-time data using API integration and JavaScript.",
        "Built a responsive Portfolio Website using semantic HTML and CSS to showcase personal branding."
      ]
    }
  ];

  return (
    <section id="internships" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hands-on experience gained through internships and professional opportunities
          </p>
        </div>

        <div className="space-y-8">
          {internships.map((internship) => (
            <div
              key={internship.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Company Info */}
                <div className="lg:col-span-1 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Building className="w-6 h-6 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white">{internship.company}</h3>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-blue-400">{internship.position}</h4>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <MapPin className="w-4 h-4" />
                      <span>{internship.location}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6">
                    <h5 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description and Achievements */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3">Description</h5>
                    <p className="text-gray-300 leading-relaxed">{internship.description}</p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3">Key Achievements</h5>
                    <ul className="space-y-2">
                      {internship.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
