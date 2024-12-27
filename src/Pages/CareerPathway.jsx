

import React, { useEffect, useState } from 'react';
import { 
  Rocket, Target, Users, 
  Calendar, ChevronDown, Trophy,
  Briefcase, GraduationCap, ArrowRight,
  BookOpen, Star, Laptop
} from 'lucide-react';

const InitiativesPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const events = [
    {
      title: "Google Summer of Code",
      attendees: 200,
      date: "Dec. 28, 2022",
      description: "CCET- ACM and ACM-W student chapter is organizing an event Talk Regarding Google Summer of Code under AICTE SPICE Scheme.",
      image: "./acm-assets-2/event11.jpg"
    },
    {
      title: "Technology Use and Integration",
      attendees: 250,
      date: "Dec. 27, 2022",
      description: "One Day Online Workshop on National Education Policy (NEP-2020) on the Topic - Technology Use and Integration",
      image: "./acm-assets-2/event12.jpg"
    },
    {
      title: "Meet the Mentor",
      attendees: 180,
      date: "FEB. 12 , 2022",
      description: "CASC have organized a meeting with mentors with CCET faculty in order to learn more about the curriculum and technology Why connect with a mentor.",
      image: "./acm-assets-2/event13.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0E0C15] text-white overflow-hidden">
      {/* Interactive Background Effect */}
      <div className="fixed inset-0 z-0">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#994c9c]/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#b76aba]/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
          <div 
            className="absolute bg-transparent from-[#0E0C15] via-[#994c9c]/5 to-[#0E0C15] w-full h-full"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`
            }}
          ></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen  flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-radial from-[#994c9c]/10 via-transparent to-transparent"></div>
        <div className="mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center px-4 py-2 bg-[#994c9c]/10 rounded-full mb-8 border border-[#994c9c]/20">
              <span className="mr-2 text-[#994c9c]">🎯</span>
              <span className="text-[#994c9c]">Building Future Leaders</span>
            </div>
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-[#994c9c] via-[#b76aba] to-[#994c9c] bg-clip-text text-transparent">
              Career Initiatives
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-2xl">
              Empowering students with the skills, knowledge, and connections for successful tech careers
            </p>
            <div className="flex gap-6">
              <button className="px-8 py-4 bg-gradient-to-r from-[#994c9c] to-[#b76aba] rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-[#994c9c]/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center">
                Explore Programs <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-[#994c9c]/10 rounded-lg font-semibold text-lg border border-[#994c9c]/20 hover:bg-[#994c9c]/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <ChevronDown className="absolute bottom-10 left-1/2 -translate-x-1/2 w-8 h-8 text-[#994c9c] animate-bounce" />
      </section>

      {/* Stats Section */}
      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "5K+", label: "Students Placed", icon: Users },
              { number: "95%", label: "Placement Rate", icon: Trophy },
              { number: "100+", label: "Partner Companies", icon: Target }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#994c9c]/20 to-[#b76aba]/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-[#161425] border border-[#994c9c]/20 rounded-xl p-6 hover:border-[#994c9c]/40 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-[#994c9c] mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#994c9c] to-[#b76aba] bg-clip-text text-transparent mb-4">
              Our Programs
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive initiatives designed to launch successful tech careers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: Briefcase, 
                title: "Industry Internships", 
                description: "Gain real-world experience with leading tech companies"
              },
              { 
                icon: GraduationCap, 
                title: "Skill Development", 
                description: "Master in-demand technical and soft skills"
              },
              { 
                icon: Star, 
                title: "Mentorship Program", 
                description: "Learn from experienced industry professionals"
              },
              { 
                icon: Laptop, 
                title: "Technical Training", 
                description: "Hands-on training in cutting-edge technologies"
              },
              { 
                icon: Users, 
                title: "Networking Events", 
                description: "Connect with industry leaders and peers"
              },
              { 
                icon: BookOpen, 
                title: "Career Guidance", 
                description: "Personalized career planning and support"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#994c9c]/10 to-[#b76aba]/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-[#161425] p-6 rounded-xl border border-[#994c9c]/20 hover:border-[#994c9c]/40 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-[#994c9c] mb-4" />
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#994c9c] to-[#b76aba] bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#994c9c] to-[#b76aba] bg-clip-text text-transparent">
            Upcoming Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#994c9c]/10 to-[#b76aba]/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-[#161425] rounded-xl overflow-hidden border border-[#994c9c]/20 hover:border-[#994c9c]/40 transition-all duration-300">
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161425] to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-[#994c9c]" />
                      <span className="text-sm text-gray-300">{event.date}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#994c9c] to-[#b76aba] bg-clip-text text-transparent">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#994c9c]/10 via-[#b76aba]/10 to-[#994c9c]/10 p-10 border border-[#994c9c]/20">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#994c9c]/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#b76aba]/20 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#994c9c] to-[#b76aba] bg-clip-text text-transparent">
                Ready to Start Your Journey?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our comprehensive career development program and take the first step towards your dream tech career.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-[#994c9c] to-[#b76aba] rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-[#994c9c]/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center mx-auto">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InitiativesPage;