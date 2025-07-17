import React from "react";
import { Download, Eye, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Resume</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Download or preview my complete professional resume
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden">
          {/* Resume Preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 min-h-[600px]">
              <div className="bg-white rounded-lg shadow-2xl p-8 h-full">
                {/* Resume Header */}
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Aditya Shriwal
                  </h1>
                  <p className="text-lg text-gray-600 mb-4">
                    Full Stack Developer & AI/ML Engineer
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                    <span>📧 aditya@example.com</span>
                    <span>📱 +91 83083 80977</span>
                    <span>🔗 linkedin.com/in/aditya-shriwal2132</span>
                  </div>
                </div>

                {/* Resume Sections Preview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600">
                      Education
                    </h3>
                    <div className="text-sm text-gray-700">
                      <p className="font-semibold">
                        Bachelor's in Computer Science
                      </p>
                      <p>Your University | CGPA: 8.5/10</p>
                      <p className="text-gray-500">2020 - 2024</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600">
                      Skills
                    </h3>
                    <div className="text-sm text-gray-700">
                      <p>
                        <strong>Languages:</strong> C/C++, Python, Java,
                        JavaScript
                      </p>
                      <p>
                        <strong>Frameworks:</strong> React, Node.js, Express
                      </p>
                      <p>
                        <strong>Databases:</strong> MongoDB, MySQL
                      </p>
                      <p>
                        <strong>Tools:</strong> Git, GCP, AWS
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600">
                      Experience
                    </h3>
                    <div className="text-sm text-gray-700">
                      <div className="mb-4">
                        <p className="font-semibold">
                          Software Developer Intern
                        </p>
                        <p className="text-gray-600">
                          Tech Company XYZ | Jun 2023 - Aug 2023
                        </p>
                        <p>
                          • Developed responsive web applications using React
                          and Node.js
                        </p>
                        <p>
                          • Collaborated with cross-functional teams to deliver
                          features
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center text-gray-500 text-sm">
                  <p>This is a preview. Download for complete resume.</p>
                </div>
              </div>
            </div>

            {/* Overlay for preview effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none"></div>
          </div>

          {/* Action Buttons */}
          <div className="p-8 text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://drive.google.com/uc?export=download&id=1axJjJt_jH9KOsD8xRJBvAecZXtfxKKsn"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>

              <a
                href="https://drive.google.com/file/d/1axJjJt_jH9KOsD8xRJBvAecZXtfxKKsn/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                <Eye className="w-5 h-5" />
                View Full Resume
              </a>
            </div>

            <div className="flex justify-center items-center gap-2 text-gray-300 text-sm">
              <FileText className="w-4 h-4" />
              <span>Last updated: July 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
