
import React from 'react';
import { ExternalLink, Award } from 'lucide-react';

const GoogleBadges = () => {
  // Top 6 Google Cloud badges fetched and saved in code
  const topBadges = [
    {
      title: "Google Cloud Load Balancing",
      description: "Completed the Implement Load Balancing on Compute Engine skill badge to demonstrate skills in the following: write gcloud commands and use Cloud Shell, create and deploy virtual machines in Compute Engine, run containerized applications on Google Kubernetes Engine, and configure network and HTTP load balancers.",
      image: "/cloud/load.png",
      date: "2024",
      category: "Load balancing"
    },
    {
      title: "Cloud Cloud Storage",
      description: "Completed the Store, Process, and Manage Data on Google Cloud - Console skill badge to demonstrate skills in the following: use Cloud Storage to store images, Cloud Functions to process the images, and Cloud Pub/Sub to send the images to another application.",
      image: "/cloud/store.png",
      date: "2024",
      category: "Google Cloud Compute"
    }
    ,
    {
      title: "Google Cloud Web Deployment",
      description: "Completed the introductory Build a Website on Google Cloud skill badge to demonstrate skills in the following: deploy a website on Cloud Run, Host a web app on Compute Engine, Create, deploy, and scale your website on Google Kubernetes Engine, Migrate from a monolithic application to a microservices architecture.s",
      image: "/cloud/website.png",
      date: "2024",
      category: "Web Deployment"
    },
    {
      title: "Google Cloud Analytics",
      description: "Completed the Analyze Sentiment with Natural Language API skill badge to demonstrate skills in the following: how the API derrives sentiment from text.",
      image: "/cloud/analytics.png",
      date: "2024",
      category: "NLP"
    },
    {
      title: "Google Cloud Monitoring",
      description: "Completed the Monitoring in Google Cloud skill badge to demonstrate skills in the following: how to use Cloud Monitoring tools.",
      image: "/cloud/monitor.png",
      date: "2024",
      category: "Monitoring"
    }
    ,
    {
      title: "Google Cloud Basics",
      description: "Completed the Basics of Google Cloud Compute skill badge to demonstrate skills in the following: how to work with virtual machines (VMs), persistent disks, and web servers using Compute Engine.",
      image: "/cloud/Basics.png",
      date: "2024",
      category: "Compute Engines"
    }
  ];

  return (
    <section id="google-badges" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Google Cloud <span className="text-blue-400">Badges</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            My top achievements from Google Cloud Skills Boost platform
          </p>
          <a 
            href="https://www.cloudskillsboost.google/public_profiles/9c57795c-458f-4b2f-806b-39fa66dc35c2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            View Full Profile
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topBadges.map((badge, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={badge.image} 
                  alt={badge.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
                {/* <div className="absolute top-4 left-4">
                  <span className="text-blue-400 text-xs font-bold bg-black/50 px-2 py-1 rounded">
                    {badge.category}
                  </span>
                </div> */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-yellow-400 text-sm font-bold bg-black/50 px-2 py-1 rounded">
                    {badge.date}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{badge.title}</h3>
                <p className="text-gray-300 text-sm">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Cloud Expertise Achievement</h3>
            <p className="text-gray-300 mb-6">
              Continuously expanding my cloud expertise through hands-on labs and real-world scenarios
            </p>
            <div className="flex justify-center items-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400">30+</div>
                <div className="text-gray-300">Badges Earned</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">290+</div>
                <div className="text-gray-300">Labs Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">30+</div>
                <div className="text-gray-300">Courses FInished</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleBadges;
