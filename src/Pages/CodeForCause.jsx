import React, { useState, useEffect } from 'react';
import { Calendar, Users, Code, Heart, Globe, BookOpen, Trophy, ArrowRight } from 'lucide-react';
import event1 from '../acm-assets-2/event4.jpg';
import event2 from '../acm-assets-2/event4.png';
import event3 from '../acm-assets-2/event5.jpg';


const CodeForCause = () => {
  const [activeSection, setActiveSection] = useState('about');
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
    { value: "1000+", label: "Students Impacted" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Partner Organizations" }
  ];

  const features = [
    { icon: Heart, title: "Social Impact", description: "Creating technology solutions for social causes" },
    { icon: Globe, title: "Global Community", description: "Connect with developers worldwide" },
    { icon: BookOpen, title: "Learning Resources", description: "Access to workshops and mentorship" },
    { icon: Trophy, title: "Recognition", description: "Awards and certificates for contributions" }
  ];

  const events = [
    {
      title: "Hour of Code",
      date: "Dec. 09, 2023",
      attendees: 80,
      type: "Workshop",
      image: event1,
      description: "On December 9th, 2023, CCET ACM and ACM-W orchestrated an Hour of Code event, a compelling initiative coinciding with Computer Science Education Week."
    },
    {
      title: "Azadi Ke Rang",
      date: "14 August, 2022",
      attendees: 100,
      type: "Competition",
      image: event3,
      description: "CCET ACM & ACM-W student chapter on occasion of Azadi ka amrit mahotsav is conducting a poster design contest Azadi Ke Rang to gear up the students on this INDEPENDENCE DAY"
    },
    {
      title: "Hackoberfest",
      date: "Oct. 06, 2023",
      attendees: 75,
      type: "Workshop",
      image: event2,
      description: "On October 6, 2023, the CCET ACM and ACM-W student chapters hosted a highly informative event title - Introduction to Hacktoberfest 2023." 
    }
  ];

  return (
    <div className="min-h-screen bg-[#0E0C15]">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#0E0C15] from-blue-900/30 to-purple-900/30" />
          <div className="absolute -left-1/4 top-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute -right-1/4 bottom-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <Code size={48} className="text-blue-400 mb-6 mx-auto" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent pb-2">
              Code for Cause
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Empowering students through coding education and social impact projects. Join us in making a difference through technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {stats.map((stat, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300">
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
      <section id="features" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Code for Cause?</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} 
                className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <div className="relative p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 group-hover:border-blue-500/30 transition-all duration-500">
                  <feature.icon size={32} className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Past Events</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl" />
                <div className="relative rounded-2xl overflow-hidden bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-500/80 backdrop-blur-sm text-sm text-white">
                      {event.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{event.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-2" />
                        {event.attendees}
                      </div>
                    </div>
                    <button className="mt-4 w-full py-2 px-4 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center gap-2 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      Learn More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
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

export default CodeForCause;