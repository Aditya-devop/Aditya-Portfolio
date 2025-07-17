
import React, { useState } from 'react';
import { Award, Trophy, Medal, Star, Zap,Code  } from 'lucide-react';
import Internships from './Internships';

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState('certification');

  const categories = [
    { id: 'certification', name: 'Certifications', icon: Award },
    { id: 'merit', name: 'Merit Awards', icon: Medal },
    { id: 'Internships', name: 'Internships', icon: Code  },
    { id: 'hackathon', name: 'Hackathons', icon: Zap },
    { id: 'volunteer', name: 'Volunteer', icon: Trophy },
    // { id: 'scholarship', name: 'Scholarships', icon: Trophy },
    { id: 'participation', name: 'Participation', icon: Star },
  ];

  const achievements = {
  certification: [
    {
      title: "Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      image: "/certificates/microsoft.png",
      description: "Certified in foundational AI concepts and Azure services."
    },
     {
      title: "AWS Certified Solutions Architect exam prep",
      issuer: "Amazon Web Services",
      date: "2025",
      image: "/certificates/aws.png",
      description: "Prepared for designing scalable AWS cloud architectures."
    },
    {
      title: "Introduciton to Articial Intelligence",
      issuer: "IBM",
      date: "2025",
      image: "/certificates/ibm.png",
      description: "Learned core AI concepts and real-world IBM use cases."
    },
    {
      title: "Full-Stack Developer",
      issuer: "Udemy",
      date: "2025",
      image: "/certificates/fullstack.png",
      description: "Completed end-to-end web development course."
    },
    {
      title: "AWS Solution Architect Architect",
      issuer: "Udemy",
      date: "2025",
      image: "/certificates/saa.jpg",
      description: "Studied AWS architecture design and deployment practices."
    }
  ],
  merit: [
    {
      title: "Top Rankers List",
      issuer: "VIT University",
      date: "2024-25",
      image: "/certificates/merit.jpg",
      description: "Recognized for academic excellence and top performance."
    },
    {
      title: "Scholarsip Awardee ",
      issuer: "IBS americas",
      date: "2024",
      image: "/certificates/IBS.png",
      description: "Received merit-based scholarship for academic performance."
    }
  ],
  Internships: [
    {
      title: "Junior Frontend Developer",
      issuer: "Valsco Technology",
      date: "2024",
      image: "/certificates/Valsco.png",
      description: "Worked on frontend features and UI improvements."
    },
    {
      title: "Web Developer",
      issuer: "Bharat Intern",
      date: "2024",
      image: "/certificates/Bharat.png",
      description: "Developed and maintained responsive web applications."
    },
    {
      title: "Data Analytics",
      issuer: "Forage",
      date: "2025",
      image: "/certificates/Deloitte.png",
      description: "Completed Deloitte's virtual internship on data tasks."
    }
  ],
  hackathon: [
    {
      title: "Hacksplosion",
      issuer: "Deloitte",
      date: "2025",
      image: "/certificates/Hacksplosion.png",
      description: "Ranked in top 100 at Deloitte's national hackathon."
    },
    {
      title: "Walmart",
      issuer: "Walmart",
      date: "2024",
      image: "/certificates/Walmart.jpg",
      description: "Solved e-commerce logistics challenges in Walmart hackathon."
    },
    {
      title: "Flipkart",
      issuer: "Flipkart",
      date: "2024",
      image: "/certificates/flipkart.png",
      description: "Participated in Flipkart's tech-focused hackathon event."
    },
    {
      title: "Technica",
      issuer: "VIT University",
      date: "2024",
      image: "/certificates/Technica.png",
      description: "Built innovative projects in VIT's annual hackathon."
    },
    
  ],
  volunteer: [
    {
      title: "Event Cordinator",
      issuer: "Vit University",
      date: "2024",
      image: "/certificates/Cordinator.png",
      description: "Led and coordinated technical events and workshops."
    },
    {
      title: "Tech volunteer",  
      issuer: "Vit University",
      date: "2025",
      image: "/certificates/Innovation.jpg",
      description: "Assisted in organizing innovation-focused university events."
    }
  ],
  participation: [
    {
      title: "Isro Geographical Information System",
      issuer: "Isro",
      date: "2024",
      image: "/certificates/Isro.png",
      description: "Completed ISRO's GIS course with A grade."
    },
    {
      title: "Tata crucibele",
      issuer: "Unstop",
      date: "2024",
      image: "/certificates/tata.png",
      description: "Participated in national-level business quiz by Tata."
    },
     {
      title: "Tata Imagination Challenge",
      issuer: "Tata Group",
      date: "2024",
      image: "/certificates/Tataimagination.jpg",
      description: "Proposed innovative ideas in Tata's ideation challenge."
    },
    {
      title: "Clash of Bugs",
      issuer: "VIT University",
      date: "2023",
      image: "/certificates/clash.png",
      description: "Solved debugging challenges in campus coding contest."
    },
    {
      title: "Sourcesprint",
      issuer: "VIT University",
      date: "2023",
      image: "/certificates/sprint.png",
      description: "Contributed in fast-paced open-source sprint event."
    }
  ]
};


  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Achievements & <span className="text-blue-400">Certifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition of my dedication to continuous learning and excellence
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements[activeCategory]?.map((achievement, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {achievement.date}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-blue-400 font-semibold mb-2">{achievement.issuer}</p>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
