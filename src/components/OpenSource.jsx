import React, { useState } from 'react';
import { ChevronDown, Code, Database, Brain, Network, Terminal, Monitor, FileText, Cpu, Book, ExternalLink } from 'lucide-react';


const CategoryIcon = ({ category }) => {
  const icons = {
    'Web Technologies': <Monitor className="w-5 h-5" />,
    'Software Engineering': <Code className="w-5 h-5" />,
    'Natural Language Processing (NLP)': <FileText className="w-5 h-5" />,
    'Operating Systems': <Terminal className="w-5 h-5" />,
    'Database Systems': <Database className="w-5 h-5" />,
    'Computer Networks': <Network className="w-5 h-5" />,
    'Artificial Intelligence (AI) and Machine Learning': <Brain className="w-5 h-5" />,
    'Compilers': <Cpu className="w-5 h-5" />,
  };
  return icons[category] || <Book className="w-5 h-5" />;
};


const OpenSource = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);


  const resources = {
    'Web Technologies': [
      { name: 'Firefox', description: 'Firefox Source Code Documentation', link: '#' },
      { name: 'Chromium', description: 'Chromium Projects', link: '#' },
      { name: 'VS Code', description: 'Visual Studio Code', link: '#' }
    ],
    'Software Engineering': [
      { name: 'Git', description: 'Git Source Code - Version control system', link: '#' },
      { name: 'Eclipse IDE', description: 'Eclipse Foundation - Open-source IDE for software development', link: '#' },
      { name: 'Draw.io', description: 'Diagramming tool for UML and flowcharts', link: '#' }
    ],
    'Natural Language Processing (NLP)': [
      { name: 'NLTK', description: 'Natural Language Toolkit - A suite of libraries for NLP', link: '#' },
      { name: 'SpaCy', description: 'Industrial-strength NLP library', link: '#' },
      { name: 'Hugging Face Transformers', description: 'Pre-trained models for NLP tasks', link: '#' },
      { name: 'Google Colab', description: 'Free cloud service for ML/NLP tasks', link: '#' }
    ],
    'Operating Systems': [
      { name: 'Linux Kernel', description: 'The core of the Linux operating system', link: '#' }
    ],
    'Database Systems': [
      { name: 'PostgreSQL', description: 'Advanced object-relational database', link: '#' },
      { name: 'SQLite', description: 'Lightweight database library', link: '#' },
      { name: 'MySQL', description: 'Popular relational database management system', link: '#' }
    ],
    'Computer Networks': [
      { name: 'Nmap', description: 'Network scanning tool', link: '#' },
      { name: 'OpenVPN', description: 'Virtual private network software', link: '#' },
      { name: 'ns-3', description: 'Network Simulator', link: '#' }
    ],
    'Artificial Intelligence (AI) and Machine Learning': [
      { name: 'TensorFlow', description: 'ML framework by Google', link: '#' },
      { name: 'PyTorch', description: 'ML framework by Meta', link: '#' },
      { name: 'Keras', description: 'High-level neural networks API', link: '#' }
    ],
    'Compilers': [
      { name: 'GCC', description: 'GNU Compiler Collection - Compiler for C, C++, and other languages', link: '#' },
      { name: 'LLVM', description: 'LLVM Project - Compiler infrastructure', link: '#' },
      { name: '8085 Simulator', description: 'Microprocessor simulation tool', link: '#' }
    ]
  };


  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };


  return (
    <div className="p-4 sm:p-6 bg-transparent from-[#0E0C15] to-[#1a1825]">
      <div className="max-w-4xl mx-auto relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl pointer-events-none" />
       
        {/* Main content */}
        <div className="relative">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Open Source Resources
          </h1>
         
          <div className="space-y-4">
            {Object.entries(resources).map(([category, items]) => (
              <div
                key={category}
                className="group relative"
              >
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
               
                <div className="relative bg-[#0E0C15] rounded-lg overflow-hidden border border-white/10">
                  <button
                    onClick={() => toggleCategory(category)}
                    className="w-full p-4 flex items-center justify-between text-white hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-1.5 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                        <CategoryIcon category={category} />
                      </div>
                      <span className="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                        {category}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-500 ${
                        expandedCategories[category] ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                 
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      expandedCategories[category] ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="p-4 grid grid-cols-1 gap-3">
                      {items.map((item, index) => (
                        <a
                          key={index}
                          href={item.link}
                          className="relative group/item block"
                          onMouseEnter={() => setHoveredItem(`${category}-${index}`)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 blur" />
                          <div className="relative p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10">
                            <div className="flex justify-between items-start">
                              <div className="text-white font-medium text-sm">{item.name}</div>
                              <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="text-gray-400 text-xs mt-1">{item.description}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default OpenSource;