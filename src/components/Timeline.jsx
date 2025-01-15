import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const timelineData = [
    {
      year: '2024',
      amount: '$15,000',
      description: 'Largest funding round to date. Major investments in AI workshops and hackathon events.',
      highlights: ['AI Workshop Series', 'Annual Hackathon', 'Research Grants']
    },
    {
      year: '2023',
      amount: '$12,000',
      description: 'Expanded technical workshop program and introduced mentorship initiatives.',
      highlights: ['Technical Workshops', 'Mentorship Program']
    },
    {
      year: '2022',
      amount: '$8,000',
      description: 'Initial major funding round focused on establishing core programs.',
      highlights: ['Community Events', 'Learning Resources']
    }
  ];

  return (
    <div className="min-h-screen bg-[#0E0C15] py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          ACM Funding Timeline
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-indigo-900 md:left-1/2" />

          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex md:items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-4 sm:left-8 w-4 h-4 rounded-full bg-indigo-500 shadow-glow md:left-1/2 md:-ml-2 mt-2 md:mt-0">
                <div className="w-4 h-4 rounded-full bg-indigo-500 animate-ping opacity-75" />
              </div>

              {/* Content */}
              <div className={`pl-12 sm:pl-24 md:pl-0 w-full md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? 'md:pr-24' : 'md:pl-24'
              }`}>
                <div className="bg-indigo-900/20 p-6 rounded-lg border border-indigo-800/50 backdrop-blur-sm hover:bg-indigo-900/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <span className="text-2xl font-bold text-indigo-400">
                      {item.year}
                    </span>
                    <span className="text-xl font-semibold text-green-400">
                      {item.amount}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;