import React, { useEffect, useState } from 'react';
import { 
  Heart, Brain, Apple, Users, 
  Calendar, ChevronDown, Trophy,
  Activity, Target, ArrowRight
} from 'lucide-react';



const HealthyBytesPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const events = [
    {
      title: "Let us C Programming",
      attendees: 150,
      date: "Jan. 05, 2023",
      description: "CCET- ACM and ACM-W student chapter is organizing an event Let us C Programming under AICTE SPICE Scheme.",
      image: "./acm-assets-2/event14.jpg",
    },
    {
      title: "C++ STL",
      attendees: 200,
      date: "Jan. 07, 2023",
      description: "CCET- ACM and ACM-W student chapter is organizing an event C++ STL under AICTE SPICE Scheme",
      image: "./acm-assets-2/event15.jpg",
    },
    {
      title: "Getting Started with Arduino",
      attendees: 175,
      date: "FEB. 13 , 2022",
      description: "The CCET ACM and ACM-W Student Chapter is back with another amazing workshop on  Getting Started with Arduino",
      image: "./acm-assets-2/event16.jpg",
    }
  ];

  return (
    <div className="min-h-screen mt-[120px] lg:mt-0 bg-[#0E0C15] text-white overflow-hidden">
      {/* Interactive Background Effect */}
      <div className="fixed inset-0 z-0">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0E0C15] rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
          <div 
            className="absolute bg-transparent from-[#0E0C15] via-purple-900/5 to-[#0E0C15] w-full h-full"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`
            }}
          ></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent"></div>
        <div className=" mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 rounded-full mb-8 border border-purple-500/20">
              <span className="mr-2 text-purple-400">🚀</span>
              <span className="text-purple-300">Transforming Tech Lives</span>
            </div>
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
              Healthy Bytes
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-2xl">
              Empowering tech professionals with essential skills for a healthier tomorrow
            </p>
            <div className="flex gap-6">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-purple-500/10 rounded-lg font-semibold text-lg border border-purple-500/20 hover:bg-purple-500/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <ChevronDown className="absolute bottom-10 left-1/2 -translate-x-1/2 w-8 h-8 text-purple-400 animate-bounce" />
      </section>

      {/* Stats Section */}
      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "15K+", label: "Active Members", icon: Users },
              { number: "98%", label: "Satisfaction Rate", icon: Trophy },
              { number: "50+", label: "Expert Mentors", icon: Target }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-[#161425] border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-purple-400 mb-4" />
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Why Choose Healthy Bytes?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our comprehensive approach to tech wellness sets us apart
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: Heart, 
                title: "Holistic Wellness", 
                description: "Comprehensive programs designed for tech professionals"
              },
              { 
                icon: Brain, 
                title: "Mental Fitness", 
                description: "Expert-guided sessions for mental well-being"
              },
              { 
                icon: Activity, 
                title: "Active Lifestyle", 
                description: "Balanced approach to physical health"
              },
              { 
                icon: Apple, 
                title: "Nutrition Plans", 
                description: "Customized diet plans for busy developers"
              },
              { 
                icon: Users, 
                title: "Community", 
                description: "Connect with like-minded professionals"
              },
              { 
                icon: Target, 
                title: "Goal Tracking", 
                description: "Monitor and achieve your wellness goals"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-[#161425] p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
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
        <div className=" mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-[#161425] rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161425] to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-gray-300">{event.date}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
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
        <div className=" mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 p-10 border border-purple-500/20">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Ready to Transform Your Life?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our community of tech professionals committed to maintaining a healthy work-life balance.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center mx-auto">
                Join Us <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthyBytesPage;