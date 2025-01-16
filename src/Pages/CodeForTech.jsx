import React, { useState, useEffect } from 'react';
import { Code, Laptop, Briefcase, Award, Terminal, Cloud, Server, Cpu, ChevronRight, Users, Calendar, Clock } from 'lucide-react';
import OpenSource from '../components/OpenSource';

const CodeForTech = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "500+", label: "Tech Placements", icon: Briefcase },
    { value: "20+", label: "Partner Companies", icon: Terminal },
    { value: "95%", label: "Success Rate", icon: Award }
  ];

  const techPartners = [
    { name: "Cloud Computing", icon: Cloud, color: "from-sky-400 to-blue-500" },
    { name: "Backend Systems", icon: Server, color: "from-green-400 to-emerald-500" },
    { name: "Infrastructure", icon: Cpu, color: "from-purple-400 to-indigo-500" }
  ];

  const programs = [
    {
      title: "Covid Codathon",
      date: "19 April, 2020",
      attendees: "80",
      image: "./acm-assets-2/event7.jpg",
      description: "ACM Student Chapter CCET alongside the Hackerrank platform, conducted an online codathon 'Covid-Codathon' on 19th April, 2020, to brush the coding skills, algorithmic knowledge, and problem-solving ability."
    },
    {
      title: "International Video Contest",
      date: "10 December, 2021",
      attendees: "50",
      image: "./acm-assets-2/event6.jpg",
      description: "Insights2techinfo is organizing an International Video Contest. If you are a researcher, innovator, or ideator and don't wish to jump into long written articles, using video can enable you to share your ideas, innovation, technology, or any other perspective"
    },
    {
      title: "Code Crusade",
      date: "Nov. 22, 2023",
      attendees: "60",
      image: "./acm-assets-2/event8.png",
      description: "The Code Crusade, a 12-hour hackathon hosted by CCET ACM & ACM-W Student Chapter as part of APRATIM 2023, immersed participants in a realm of coding excellence."
    }
  ];

  return (
    <div className="min-h-screen mt-[120px] lg:mt-0 bg-[#0E0C15] text-white">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0E0C15] from-blue-900/30 to-indigo-900/30" />
          {/* Animated tech pattern background */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: '1px',
                  height: '1px',
                  boxShadow: '0 0 15px 2px rgba(66, 153, 225, 0.6)',
                  animation: `pulse ${2 + Math.random() * 3}s infinite`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-block animate-float">
            <Laptop size={48} className="text-blue-400 mb-6 mx-auto" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent pb-2">
              Code for Technology
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Empowering developers to excel in leading tech giants through advanced coding practices and industry expertise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {stats.map((stat, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300">
                  <stat.icon size={24} className="text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Partners Section */}
      <section id="partners" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technology Focus Areas</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techPartners.map((partner, index) => (
              <div key={index} className="group relative perspective-1000">
                <div className="relative transform transition-all duration-500 group-hover:rotate-y-180">
                  <div className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl" />
                    <partner.icon size={40} className={`mb-4 bg-gradient-to-r ${partner.color} bg-clip-text text-transparent`} />
                    <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                    <div className="flex items-center text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                      <span>Learn More</span>
                      <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Open Source Section */}
      <OpenSource/>


      {/* Programs Section */}
      <section id="programs" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Past Events</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl" />
                <div className="relative rounded-2xl overflow-hidden bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{program.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {program.date}
                      </div>
                      <div className="flex items-center">
                       <Users size={16} className="mr-2" />
                        {program.attendees}
                      </div>
                    </div>
                    <button className="mt-4 w-full py-2 px-4 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center gap-2 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      See More
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CodeForTech;