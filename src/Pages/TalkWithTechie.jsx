

import React, { useState, useEffect } from 'react';
import { MessageSquare, Star, Lightbulb, Rocket, Users, Calendar, Clock, ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const TalkWithTechie = () => {
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
    { value: "500+", label: "Tech Experts" },
    { value: "1000+", label: "Sessions Conducted" },
    { value: "25K+", label: "Students Mentored" }
  ];

  const features = [
    { icon: MessageSquare, title: "1:1 Mentorship", description: "Personal guidance from industry veterans" },
    { icon: Star, title: "Expert Network", description: "Connect with leaders from top tech companies" },
    { icon: Lightbulb, title: "Career Insights", description: "Get insider knowledge about tech careers" },
    { icon: Rocket, title: "Skill Growth", description: "Accelerate your learning journey" }
  ];

  const upcomingSessions = [
    {
      expert: {
        name: "Dr. Suresh Kumar",
        role: "Professor and Head",
        company: "Department of Ophthalmology",
        image: "./acm-assets-2/event2.jpg",
      },
      topic: "Computer Vision Syndrome(COVID Era Perspectives)",
      date: "May 27, 2022",
      spots: 75,
      tags: ["AI", "Machine Learning", "Career"]
    },
    {
      expert: {
        name: "Mr Saurabh Pratap Singh",
        role: "Assistant Commissioner",
        company: "Income Tax, New Delhi",
        image: "./acm-assets-2/event10.jpg",
      },
      topic: "CCET ACM Student Chapter presents Invited Talk 2021",
      date: "AUG. 31, 2021",
      spots: 30,
      tags: ["Architecture", "System Design", "Backend"]
    },
  ];

  return (
    <div className="min-h-screen mt-[120px] lg:mt-0 bg-[#0A0A1F]">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0A0A1F]" />
          {/* Grid background */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(circle at center, transparent 0%, black 100%)'
          }} />
          {/* Floating orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl animate-float-delayed" />
        </div>

        <div className="relative max-w-6xl mx-auto text-center space-y-8 z-10">
          <h1 className="text-6xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Talk with Techies
            </span>
          </h1>
          <div className="h-16">
            <TypeAnimation
              sequence={[
                'Connect with Tech Leaders',
                2000,
                'Learn from the Best',
                2000,
                'Shape Your Tech Future',
                2000
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              className="text-2xl text-gray-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {stats.map((stat, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 relative bg-[#0A0A1F]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Why Talk with Techies?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-blue-500/50 transition-all duration-300">
                  <feature.icon size={32} className="text-blue-400 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Sessions Section */}
      <section id="sessions" className="py-24 px-4 relative bg-[#0A0A1F]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Upcoming Sessions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingSessions.map((session, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={session.expert.image}
                      alt={session.expert.name}
                      className="w-16 h-16 rounded-full ring-2 ring-blue-500/50"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{session.expert.name}</h3>
                      <p className="text-sm text-gray-400">{session.expert.role}</p>
                      <p className="text-sm text-gray-400">{session.expert.company}</p>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-4">{session.topic}</h4>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {session.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 text-gray-400 text-sm">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {session.date}
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-2" />
                      {session.spots} attendees
                    </div>
                  </div>

                  <button className="mt-6 w-full py-2 px-4 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center gap-2 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    See More 
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalkWithTechie;