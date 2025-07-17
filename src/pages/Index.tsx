
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import GoogleBadges from '../components/GoogleBadges';
import Internships from '../components/Internships';
import CodingJourney from '../components/CodingJourney';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="certifications">
        <Certifications />
      </div>
      <GoogleBadges />
      <div id="internships">
        <Internships />
      </div>
      <div id="coding-journey">
        <CodingJourney />
      </div>
      <Resume />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
