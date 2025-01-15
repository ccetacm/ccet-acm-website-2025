import WorldMapDemo from '../components/WorldMap';
import Timeline from '../components/Timeline';
import ResearchPublications from '../components/ResearchPublications';
// import WorldMap from '../components/ui/WorldMap';

import React, { useEffect, useState } from 'react';
import { 
  Globe2, 
  Rocket, 
  Users, 
  ChevronDown,
  ArrowRight,
  Building2,
  GraduationCap,
  Network,
  LibraryBig,
  Target,
  Award
} from 'lucide-react';

import FacultySection from '../components/FacultySection';

const Research = () => {
  // Smooth scroll function
  const scrollToBottom = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const projects = [
    {
      title: "Blockchain Technology",
      duration: "Sept. 7, 2022",
      description: "CASC Under AICTE SPICES is glad to announce a session on the blockchain. The session will focus on concepts, principles, and applications of blockchain, starting with the basics of hashing and scaling up to cover the topics of proof of work, steak, etc.s",
      image: "./acm-assets-2/event1.jpg",
    },
    {
      title: "Computer Vision Syndrome(COVID Era Perspectives)",
      duration: "May 27, 2022",
      description: "CASC is back with another amazing Session on Computer Vision Syndrome - COVID Era Perspectives. Where you will be given insights about caring yourself from computers and measures to improve our health.",
      image: "./acm-assets-2/event2.jpg",
    },
    {
      title: "Robotics and Embedded Systems",
      duration: "April 19, 2022",
      description: "The CCET ACM and ACM-W Student Chapter is back with another amazing workshop on Robotics and Embedded Systems where you will be given an insight on Arduino and Embedded Systems",
      image: "./acm-assets-2/event3.jpg",
    }
  ];


  return (
    <div className="min-h-screen mt-[100px] lg:mt-0 bg-[#0E0C15] text-white">
       <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-[#0E0C15] from-blue-500/10 via-transparent to-transparent"></div>
          <div className="mx-auto max-w-6xl relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full mb-8 border border-blue-500/20">
                <Globe2 className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-blue-300">Global Research Initiative</span>
              </div>
              <h1 className="lg:text-7xl text-4xl  font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-400 bg-clip-text text-transparent">
                International Research & Sponsored Projects
              </h1>
              <p className="text-2xl text-gray-300 mb-12 max-w-3xl">
                Fostering Global Innovation and Collaboration through groundbreaking research initiatives
              </p>
              <div className="flex gap-6">
                <a href="/events" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center">
                  See Our Past Events <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="/contact" className="px-8 py-4 bg-blue-500/10 rounded-lg font-semibold text-lg border border-blue-500/20 hover:bg-blue-500/20 transition-all duration-300">
                  Join Us
                </a>
              </div>
            </div>
          </div>
          <button 
            onClick={scrollToBottom}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-8 h-8 text-blue-400 animate-bounce cursor-pointer hover:text-blue-300 transition-colors duration-300"
          >
            <ChevronDown className="w-full h-full" />
          </button>
        </section>

        {/* Research Group Component */}
    <section className="relative py-24 bg-[#0E0C15] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Animated background gradients */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        </div>

        <div className="relative">
          {/* Initiative Title with floating animation */}
          <div className="text-center mb-16 relative">
            <div className="inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl animate-pulse"></div>
                <span className="relative inline-block px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-xl text-blue-400 text-lg font-medium border border-blue-500/20">
                  A CCET INITIATIVE
                </span>
              </div>
            </div>
            <h2 className="text-4xl font-bold mt-8 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-400 bg-clip-text text-transparent">
              Intelligent Computing and Research Group
            </h2>
            <span className="text-2xl font-semibold text-gray-400">(ICRG)</span>
          </div>

          {/* Main content with glass morphism effect */}
          <div className="relative backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 bg-gradient-to-b from-blue-600/5 to-indigo-600/5">
            {/* CCET ACM Description */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-8">
                CCET ACM Student
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg text-center max-w-4xl mx-auto">
                There is a wide range of topics we investigate, including data mining, neural networks, fuzzy systems, 
                evolutionary optimization, machine learning, pattern recognition, user-adaptive systems, computer graphics, 
                computer vision, and bioinformatics, all under the common denominator of intelligent, nature-inspired methods 
                and approaches to studying, modeling, and simulating complex systems that improve learnability, adaptability, 
                and efficiency, these develop capabilities to study, model, and simulate complex systems that enhance their 
                efficiency, adaptability, and learnability.
              </p>
            </div>

            {/* Research Objectives with modern card design */}
            <div className="relative">
              <h3 className="text-2xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Objectives of Research
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  "Conducting research of global acclaim and world-class quality in the analysis, design, and application of CI techniques.",
                  "To provide excellent instruction in CI disciplines.",
                  "Bringing our knowledge and experience to the industry, and raising funds through research initiatives"
                ].map((objective, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="relative h-full bg-[#161425]/80 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:transform hover:-translate-y-2">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {objective}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


{/* 
        World Map Section */}

        <div className='bg-[#0E0C15]'>
          <div>
             <h2 className="text-3xl text-[#9B78F7] text-center pb-5">
              Our Global Research Network
             </h2>
          </div>
          <div className=' w-[80vw] border-2 border-[#1A274A] m-auto rounded-md'>
          <WorldMapDemo/>
          </div>
        </div>

        <FacultySection/>

        <Timeline/>

        <h2 className='bg-transparent text-center text-1xl text-white'>"This section is currently under maintenance"</h2>

       {/* Rest of the sections remain the same - Stats, Research Areas, Featured Projects, and CTA */}
        {/* Stats Section */}
        <section className="relative py-16 bg-[#0E0C15]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "100+", label: "Active Projects", icon: Target },
                { number: "10+", label: "Partner Countries", icon: Globe2 },
                { number: "$25M+", label: "Research Funding", icon: Award }
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative bg-[#161425] border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        


        {/* Research Areas */}
        <section className="relative py-16 bg-[#0E0C15]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-4">
                Research Focus Areas
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Driving innovation across multiple disciplines
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  icon: Rocket, 
                  title: "Innovation & Technology", 
                  description: "Pioneering research in emerging technologies"
                },
                { 
                  icon: GraduationCap, 
                  title: "Academic Excellence", 
                  description: "Fostering scholarly research and publications"
                },
                { 
                  icon: Network, 
                  title: "Global Networking", 
                  description: "Building international research partnerships"
                },
                { 
                  icon: LibraryBig, 
                  title: "Knowledge Exchange", 
                  description: "Facilitating cross-cultural academic dialogue"
                },
                { 
                  icon: Building2, 
                  title: "Infrastructure", 
                  description: "Developing world-class research facilities"
                },
                { 
                  icon: Users, 
                  title: "Collaborative Projects", 
                  description: "Supporting multi-institutional initiatives"
                }
              ].map((area, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative bg-[#161425] p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                    <area.icon className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                      {area.title}
                    </h3>
                    <p className="text-gray-400">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ResearchPublications/>

        {/* Featured Projects */}
        <section className="relative py-16 bg-[#0E0C15]">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
          Events Organized By The Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative bg-[#161425] rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161425] to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <Globe2 className="w-4 h-4 text-blue-400" />
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 line-clamp-4">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

        {/* CTA Section */}
        <section className="relative py-16 bg-[#0E0C15]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 p-10 border border-blue-500/20">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10 text-center">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  Join Our Research Community
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Connect with researchers worldwide and contribute to groundbreaking innovations.
                </p>
                <a href="/contact"><button className="px-8  py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center mx-auto">
                  Join US <ArrowRight className="ml-2 w-5 h-5" />
                </button></a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Research;