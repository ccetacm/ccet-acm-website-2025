import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Award, BookOpen, Users, ExternalLink, Calendar, Download, Star } from 'lucide-react';
import  sudhakarImg from "../acm-assets/mentor-3.jpg";

const SudhakarKumar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample data - replace with actual details from PDF
  const facultyData = {
    name: "Dr. Sudhakar Kumar",
    title: "Professor & Research Scholar",
    department: "Computer Science & Engineering",
    image: sudhakarImg, // Replace with actual image
    email: "sudhakar@ccet.ac.in",
    phone: "+91-7986238352",
    office: "Room 416, CS Department",
    orcid: "0000-0001-7928-4234",
    
    bio: "Dr. Sudhakar Kumar is a distinguished professor with over 15 years of experience in computer science research and education. His research interests span across artificial intelligence, machine learning, and data science.",
    
    qualifications: [
      "Ph.D. in Computer Science - Indian Institute of Technology",
      "M.Tech in Computer Science & Engineering",
      "B.Tech in Computer Science & Engineering"
    ],

    research: [
      "Artificial Intelligence & Machine Learning",
      "Data Mining & Analytics",
      "Computer Vision",
      "Natural Language Processing",
      "Deep Learning Applications"
    ],

    publications: [
      {
        title: "Advanced Machine Learning Techniques in Data Analysis",
        journal: "International Journal of Computer Science",
        year: "2024",
        citations: 45
      },
      {
        title: "Deep Learning Applications in Computer Vision",
        journal: "IEEE Transactions on Neural Networks",
        year: "2023",
        citations: 67
      },
      {
        title: "Natural Language Processing for Information Retrieval",
        journal: "ACM Computing Surveys",
        year: "2023",
        citations: 32
      },
      {
        title: "Optimization Algorithms for Large-Scale Machine Learning",
        journal: "Journal of Machine Learning Research",
        year: "2023",
        citations: 89
      },
      {
        title: "Federated Learning in Healthcare: Privacy and Performance Analysis",
        journal: "IEEE Transactions on Biomedical Engineering",
        year: "2022",
        citations: 124
      },
      {
        title: "Blockchain-based Secure Data Sharing in IoT Networks",
        journal: "IEEE Internet of Things Journal",
        year: "2022",
        citations: 76
      },
      {
        title: "Reinforcement Learning for Autonomous Systems Navigation",
        journal: "Robotics and Autonomous Systems",
        year: "2022",
        citations: 58
      },
      {
        title: "Edge Computing Optimization for Real-time Data Processing",
        journal: "IEEE Transactions on Cloud Computing",
        year: "2021",
        citations: 93
      },
      {
        title: "Quantum Machine Learning: A Comprehensive Survey",
        journal: "Nature Machine Intelligence",
        year: "2021",
        citations: 156
      },
      {
        title: "Explainable AI for Medical Diagnosis Systems",
        journal: "Artificial Intelligence in Medicine",
        year: "2021",
        citations: 87
      },
      {
        title: "Adversarial Attacks and Defenses in Deep Neural Networks",
        journal: "IEEE Transactions on Information Forensics and Security",
        year: "2020",
        citations: 143
      },
      {
        title: "Smart City Infrastructure using Machine Learning and IoT",
        journal: "IEEE Communications Magazine",
        year: "2020",
        citations: 112
      },
      {
        title: "Transfer Learning for Cross-Domain Image Classification",
        journal: "Computer Vision and Image Understanding",
        year: "2020",
        citations: 78
      },
      {
        title: "Privacy-Preserving Data Mining Techniques: A Survey",
        journal: "ACM Computing Surveys",
        year: "2019",
        citations: 201
      },
      {
        title: "Multi-Agent Systems for Distributed Problem Solving",
        journal: "Journal of Artificial Intelligence Research",
        year: "2019",
        citations: 95
      },
      {
        title: "Big Data Analytics in Social Media: Trends and Challenges",
        journal: "Information Sciences",
        year: "2019",
        citations: 167
      },
      {
        title: "Cognitive Computing for Intelligent Decision Support Systems",
        journal: "Expert Systems with Applications",
        year: "2018",
        citations: 134
      },
      {
        title: "Swarm Intelligence Algorithms for Optimization Problems",
        journal: "Swarm and Evolutionary Computation",
        year: "2018",
        citations: 89
      }
    ],

    achievements: [
      "Best Faculty Award 2023",
      "Outstanding Research Publication Award 2022",
      "Excellence in Teaching Award 2021",
      "Young Scientist Award 2020"
    ],

    courses: [
      "Machine Learning",
      "Data Structures & Algorithms",
      "Artificial Intelligence",
      "Computer Vision",
      "Research Methodology"
    ]
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen mt-[100px]"  style={{ backgroundColor: '#0E0C15' }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-purple-500/20">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <img 
                  src={facultyData.image} 
                  alt={facultyData.name}
                  className="relative w-48 h-48 rounded-full object-cover border-4 border-white/10"
                />
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                  {facultyData.name}
                </h1>
                <p className="text-2xl text-purple-300 mb-4">{facultyData.title}</p>
                <p className="text-xl text-gray-300 mb-6">{facultyData.department}</p>
                
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors">
                    <Mail size={20} />
                    <span>{facultyData.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors">
                    <Phone size={20} />
                    <span>{facultyData.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors">
                    <MapPin size={20} />
                    <span>{facultyData.office}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-wrap gap-2 mb-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
            {['about', 'research', 'publications', 'achievements', 'courses'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 capitalize ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* About Section */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <Users className="text-purple-400" />
                  About
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">{facultyData.bio}</p>
              </div>
              
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Award className="text-purple-400" />
                  Qualifications
                </h3>
                <div className="space-y-3">
                  {facultyData.qualifications.map((qual, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors">
                      <Star size={16} className="text-purple-400" />
                      <span>{qual}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Research Section */}
          {activeTab === 'research' && (
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="text-purple-400" />
                Research Interests
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {facultyData.research.map((area, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-4 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <span className="text-white font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Publications Section */}
          {activeTab === 'publications' && (
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="text-purple-400" />
                Recent Publications
              </h2>
              <div className="space-y-4">
                {facultyData.publications.map((pub, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-5 border border-gray-700/50 hover:border-purple-400/40 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-2">{pub.title}</h3>
                    <p className="text-purple-300 mb-2">{pub.journal}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {pub.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star size={14} />
                        {pub.citations} citations
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements Section */}
          {activeTab === 'achievements' && (
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="text-purple-400" />
                Awards & Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {facultyData.achievements.map((achievement, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-5 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-center gap-3">
                      <Award className="text-purple-400" size={20} />
                      <span className="text-white font-medium">{achievement}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeTab === 'courses' && (
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="text-purple-400" />
                Courses Taught
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {facultyData.courses.map((course, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-4 border border-gray-700/50 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <span className="text-white font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ORCID Link */}
        <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mt-8 text-center">
            <a 
              href={`https://orcid.org/${facultyData.orcid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
            >
              <ExternalLink size={20} />
              View ORCID Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SudhakarKumar;