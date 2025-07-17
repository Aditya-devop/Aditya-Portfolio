
import React, { useState, useEffect } from 'react';
import { ChevronDown, Linkedin, Calendar } from 'lucide-react';

const Hero = () => {
  const titles = [
    "Web Developer",
    "AI/ML Innovator", 
    "Problem Solver",
    "Full Stack Developer",
    "Tech Enthusiast",
    "Software Engineer"
  ];

  const profilePhotos = [
    "/photo1.png",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    // "/certificates/aws.png",
    // "/certificates/clash.png"
  ];

  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isPhotoTransitioning, setIsPhotoTransitioning] = useState(false);

  // Title typing animation effect
  useEffect(() => {
    const currentTitleText = titles[currentTitle];
    
    if (isTyping) {
      if (displayedText.length < currentTitleText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentTitleText.slice(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentTitle((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentTitle, titles]);

  // Improved photo rotation effect with smoother transitions
  useEffect(() => {
    const photoRotationInterval = setInterval(() => {
      setIsPhotoTransitioning(true);
      
      setTimeout(() => {
        setCurrentPhotoIndex((prev) => (prev + 1) % profilePhotos.length);
        
        // Smoother transition back
        setTimeout(() => {
          setIsPhotoTransitioning(false);
        }, 100); // Reduced delay for smoother transition
      }, 400); // Slightly longer fade out
    }, 5000); // Change photo every 5 seconds

    return () => clearInterval(photoRotationInterval);
  }, [profilePhotos.length]);

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/aditya-shriwal2132/', '_blank');
  };

  const handleScheduleMeet = () => {
    window.open('https://calendly.com/your-profile', '_blank');
  };

  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="text-white space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Hi, I'm <span className="text-blue-400">Aditya</span>
            </h1>
            <div className="h-16 flex items-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300">
                I am a{' '}
                <span className="text-blue-400">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </span>
              </h2>
            </div>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Passionate about creating innovative solutions through code. 
            Specializing in web development, AI/ML, and turning complex problems into elegant solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-6">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
            </a>
            <button
              onClick={handleLinkedInClick}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              Connect
            </button>
            <a 
              href="#projects" 
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right Side - Rotating Photo with smoother transitions */}
        <div className="flex justify-center animate-scale-in">
          <div className="relative">
            <div className={`w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl hover:scale-105 transition-all duration-700 ease-in-out ${
              isPhotoTransitioning ? 'opacity-20 scale-90' : 'opacity-100 scale-100'
            }`}>
              <img 
                src={profilePhotos[currentPhotoIndex]}
                alt="Aditya Shriwal" 
                className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-lg animate-pulse" style={{ animationDuration: '4s' }}></div>
            
            {/* Photo indicator dots */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
              {profilePhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsPhotoTransitioning(true);
                    setTimeout(() => {
                      setCurrentPhotoIndex(index);
                      setTimeout(() => {
                        setIsPhotoTransitioning(false);
                      }, 100);
                    }, 400);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPhotoIndex 
                      ? 'bg-blue-400 scale-125' 
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={handleScrollDown} className="text-blue-400 hover:text-blue-300 transition-colors focus:outline-none">
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;