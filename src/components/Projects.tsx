
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Brain, Smartphone, Settings , Globe } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('web');

  const categories = [
    { id: 'web', name: 'Web Development', icon: Globe },
    { id: 'datascience', name: 'Data Science', icon: Brain },
    { id: 'dataengineering', name: 'Data Engineering', icon: Settings  },
    { id: 'other', name: 'Other Projects', icon: Code }
  ];

const projects = {
  web: [
    {
      title: "VIHARA - AI TOUR PLANNER",
      description: "AI-powered tour planner that generates personalized travel itineraries using Gemini API and Google Maps.",
      image: "https://media.istockphoto.com/id/1014974702/photo/travel-planning.jpg?s=612x612&w=0&k=20&c=0Pnw7thfRm-Iw_1Wu7nLKWnGJal4MBXt6UjG3OP0AoE=",
      tech: ["React", "Gemini API", "Firebase Firestore", "Google Maps API", "Authentication"],
      github: "https://github.com/Aditya-devop/AI-Tour-Planner",
      live: "https://vihara-ai-tour-planner.vercel.app/"
    },
    {
      title: "EXQUISITE DINING",
      description: "Modern and interactive restaurant website featuring chatbot integration, dynamic UI, and responsive design.",
      image: "/project/exquisite.png",
      tech: ["React", "Tailwind CSS", "Botpress", "Google Workspace API"],
      github: "https://github.com/Aditya-devop/Exquisite-Dinning",
      live: "https://exquisite-dinning.vercel.app/"
    },
    {
      title: "CPU Scheduling Simulator",
      description: "Simulates CPU scheduling algorithms like FCFS, SJF, Priority & Round Robin with interactive Gantt charts.",
      image: "https://media.istockphoto.com/id/1712298526/photo/software-development-technology-and-innovation-gears-on-smartphone-screen.jpg?s=612x612&w=0&k=20&c=MjRNRXeimB5YZph0rJYfZqkynVHuW-tNHWcdjorUXro=",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Aditya-devop/CPU-Scheduling-Simulator",
      live: "https://cpu-scheduling-simulator-nine.vercel.app/"
    },
    {
      title: "Weather App",
      description: "Real-time weather forecasting app using external API with auto-fetching location and responsive visuals.",
      image: "https://media.istockphoto.com/id/2217129626/photo/weather-forecast.jpg?s=612x612&w=0&k=20&c=-uI6svDkLa5i8GgINrVkQ7iXuWrNEIfxJ2R083bGNNc=",
      tech: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
      github: "https://github.com/Aditya-devop/My_Weather_App",
      live: "https://my-weather-app-kohl-five.vercel.app/"
    },
    {
      title: "Netflix UI Clone",
      description: "UI clone of Netflix homepage replicating layout, scroll effects, and responsive design using React.",
      image: "https://media.istockphoto.com/id/1303344250/photo/television-streaming-multimedia-wall-concept.jpg?s=612x612&w=0&k=20&c=o442CgMi86DNO7TjmPWSVxl98AgL9NXcrOiqyz-FskA=",
      tech: ["React", "CSS", "Javascript"],
      github: "https://github.com/Aditya-devop/aditya-s-Netflix-Clone",
      live: "https://aditya-s-netflix-clone.vercel.app/"
    },
    {
      title: "Apple UI Clone",
      description: "Pixel-perfect clone of Apple’s homepage showcasing animation, smooth transitions, and product layout.",
      image: "https://media.istockphoto.com/id/1472811836/photo/apple-with-lighting-and-usb-c-cable-charger-on-eu-try-to-forced-phone-to-use-usb-c-instead-of.jpg?s=612x612&w=0&k=20&c=37JtMRK9cZFx-pSgIgjFD_Dz3na0Z7t9Kr3FAUBIvS8=",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Aditya-devop/Apple-UI-clone",
      live: "https://apple-ui-clone-fawn.vercel.app/"
    }
  ],
  datascience: [
    {
      title: "Movie Recommender",
      description: "Semantic-based movie recommender using BERT embeddings, TMDB metadata, and Streamlit frontend.",
      image: "https://media.istockphoto.com/id/2165287570/photo/media-concept-multiple-television-screens-digital-data-streaming-concept.jpg?s=612x612&w=0&k=20&c=0QnZZVYA7LYc5KqTzr_wn-9tjQWDCia3jsyL42G-iTA=",
      tech: ["Python", "Sentence Transformers", "Pandas", "Streamlit", "TMDB API"],
      github: "https://github.com/Aditya-devop/Movie-Recommender-BERT",
      live: "https://movie-recommender-bert-ffcoffrk4pusbajb3dfy6u.streamlit.app/"
    },
    {
      title: "Electronics Product Recommendation",
      description: "Built a recommendation system based on user behavior and semantic similarity of electronic products.",
      image: "https://media.istockphoto.com/id/1675579652/photo/stylish-japanese-young-woman-interacting-with-augmented-reality-platform-in-a-technologically.jpg?s=612x612&w=0&k=20&c=CRiHmo_nQgebjWJa_3Eqh3CQLr9LQx7BWVTEFfOjGCw=",
      tech: ["Python", "Pandas", "Scikit-learn", "Sentence Transformers"],
      github: "https://github.com/Aditya-devop/Ecommerce-product-recommendation-app",
      live: "https://ecommerce-appuct-recommendation-app-kna7aymmbmvnzdvj3jmr9x.streamlit.app/"
    },
    {
      title: "Delhi Pollution Analysis",
      description: "Analyzed air pollution levels across Delhi using visualization and time-series trend analysis.",
      image: "https://media.istockphoto.com/id/1294597903/photo/smoke-from-the-car-exhaust.jpg?s=612x612&w=0&k=20&c=YtwZF3h84RzD9bBTZTgd1X0x1lCbhDfe3VtgT5y7b4A=",
      tech: ["Python", "Pandas", "Google Colab"],
      github: "https://github.com/Aditya-devop/Delhi_Pollution_Data_analysis",
      live: "https://github.com/Aditya-devop/Delhi_Pollution_Data_analysis"
    },
    {
      title: "Urban Traffic Analysis",
      description: "Explored traffic congestion patterns using public datasets and visualized with charts and heatmaps.",
      image: "https://media.istockphoto.com/id/1437737518/photo/driverless-car-with-environment-sensors.jpg?s=612x612&w=0&k=20&c=Pj9wkDmf30wpin_ibPp7HLaoQK5QgfI-B-7v3xxFm_w=",
      tech: ["Python", "NumPy", "Pandas", "Google Colab"],
      github: "https://github.com/Aditya-devop/Urban_Traffic_Analysis_Flow_Optimisation",
      live: "https://github.com/Aditya-devop/Urban_Traffic_Analysis_Flow_Optimisation"
    }
  ],
  dataengineering: [
    {
      title: "STOCKSTREAM",
      description: "Kafka-based data pipeline that streams, processes, and analyzes real-time stock events on AWS.",
      image: "https://media.istockphoto.com/id/1479759169/photo/data-science-and-big-data-technology-data-scientist-computing-analysing-and-visualizing.jpg?s=612x612&w=0&k=20&c=m5CzwqrVWCfTfYE7klKKth7CJ98uy0CBEiQGIKp-_X0=",
      tech: ["Apache Kafka", "Zookeeper", "AWS Glue", "Amazon Athena", "AWS S3", "SQL", "Python"],
      github: "https://github.com/Aditya-devop/Kafka-Ecommerce-data-analysis",
      live: "https://github.com/Aditya-devop/Kafka-Ecommerce-data-analysis"
    }
  ],
  other: [
    {
      title: "Lead Tracker",
      description: "Chrome extension that saves leads and URLs locally for later use, with a clean and simple interface.",
      image: "https://media.istockphoto.com/id/2086436211/photo/crm-customer-relationship-management-concept-graphic-illustration-of-customer-profiles.jpg?s=612x612&w=0&k=20&c=VCFqjFRhHeaxFg57goKbe-67_iL5tyArqv20bH_PUIY=",
      tech: ["JavaScript", "Chrome Extension API", "HTML", "CSS", "LocalStorage"],
      github: "https://github.com/Aditya-devop/Lead-Tracker--Chrome-Extension",
      live: "https://github.com/Aditya-devop/Lead-Tracker--Chrome-Extension"
    }
  ]
  // ai: [
  //   {
  //     title: "Image Classification Model",
  //     description: "CNN model for image classification with 95% accuracy",
  //     image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500",
  //     tech: ["Python", "TensorFlow", "OpenCV"],
  //     github: "#",
  //     live: "#"
  //   },
  //   {
  //     title: "Chatbot Assistant",
  //     description: "AI-powered chatbot using NLP and machine learning",
  //     image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500",
  //     tech: ["Python", "NLTK", "Flask"],
  //     github: "#",
  //     live: "#"
  //   }
  // ],
  // mobile: [
  //   {
  //     title: "Task Management App",
  //     description: "Cross-platform mobile app for task management",
  //     image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500",
  //     tech: ["React Native", "Firebase"],
  //     github: "#",
  //     live: "#"
  //   }
  // ],
  // {
  //   title: "Data Visualization Tool",
  //   description: "Interactive dashboard for data analysis and visualization",
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
  //   tech: ["D3.js", "Python", "Flask"],
  //   github: "#",
  //   live: "#"
  // }
};



  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcase of my technical skills and creative solutions across different domains
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
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[activeCategory]?.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
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
