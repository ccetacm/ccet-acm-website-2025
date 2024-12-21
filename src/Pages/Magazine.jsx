import React, { useState, useMemo } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { 
  FaFilter,
  FaTimes,
  FaLayerGroup, 
  FaDownload, 
  FaEye,
} from 'react-icons/fa';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { magazineData } from '../data/magazines';

const ALL_KEYWORDS = [...new Set(magazineData.flatMap(magazine => magazine.keywords))];

const Magazine = () => {
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);
  
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const filteredMagazines = useMemo(() => {
    if (selectedKeywords.length === 0) return magazineData;
    return magazineData.filter(magazine => 
      selectedKeywords.every(keyword => 
        magazine.keywords.includes(keyword)
      )
    );
  }, [selectedKeywords]);

  const toggleKeyword = (keyword) => {
    setSelectedKeywords(prev => 
      prev.includes(keyword)
        ? prev.filter(k => k !== keyword)
        : [...prev, keyword]
    );
  };

  const handleMagazineSelect = (magazine) => {
    setSelectedPdf(magazine);
    // Scroll to viewer
    const viewer = document.getElementById('pdf-viewer');
    if (viewer) {
      viewer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="">
      <div className="relative w-full min-h-screen bg-[#0E0C15] text-white">
        {/* Hero Section */}
        <div className="relative">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-28 lg:pt-24 pb-20">
            <div className="text-center">
              <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold mb-2 text-white">Our Magazines</h1>
              <p className="text-lg mt-4 max-w-3xl mx-auto px-4 font-light">
                Explore Our Digital Magazine Collection
              </p>
            </div>
          </div>
        </div>

        {/* Keyword Filter Section */}
        <div className="w-full px-4 mb-6">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-2">
            <div className="flex items-center space-x-2 mr-2">
              <FaFilter className="text-purple-400" />
              <span className="text-lg font-semibold">Filter by:</span>
            </div>
            {ALL_KEYWORDS.map((keyword) => (
              <button
                key={keyword}
                onClick={() => toggleKeyword(keyword)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  selectedKeywords.includes(keyword) 
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {keyword}
              </button>
            ))}
            {selectedKeywords.length > 0 && (
              <button
                onClick={() => setSelectedKeywords([])}
                className="text-red-400 hover:text-red-500 flex items-center space-x-1 text-xs ml-2"
              >
                <FaTimes />
                <span>Clear</span>
              </button>
            )}
          </div>
        </div>

        {/* Magazine Grid */}
        <div className="w-full px-4 mb-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMagazines.map((magazine) => (
              <div
                key={magazine.id}
                className="bg-gray-800/60 backdrop-blur-xl rounded-3xl overflow-hidden 
                shadow-2xl border border-gray-700/50 
                transform transition-all duration-300 hover:scale-105
                hover:shadow-xl hover:shadow-purple-500/20 
                hover:border-purple-500/50 cursor-pointer
                group"
              >
                <div className="relative">
                  <img 
                    src={magazine.thumbnail} 
                    alt={`Volume ${magazine.volume} Issue ${magazine.issue}`}
                    className="w-full h-[400px] object-cover 
                    filter brightness-75 group-hover:brightness-100 
                    transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent 
                    group-hover:from-black/90" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-2xl font-bold flex items-center">
                      <FaLayerGroup className="mr-2 text-purple-400" />
                      VOL {magazine.volume} - ISSUE {magazine.issue}
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">{magazine.title}</p>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-gray-400 mb-4 text-sm">{magazine.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {magazine.keywords.map((keyword) => (
                      <span 
                        key={keyword}
                        className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-300"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <button
                      className="flex-1 bg-purple-500 shadow-lg shadow-purple-500/20 text-white py-3 rounded-xl flex items-center justify-center space-x-2 hover:bg-purple-700 transition"
                      onClick={() => handleMagazineSelect(magazine)}
                    >
                      <FaEye className="mr-2" />
                      Preview
                    </button>
                    <a
                      href={magazine.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-600 text-white py-3 rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-800 transition"
                    >
                      <FaDownload className="mr-2" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PDF Viewer Section */}
        {selectedPdf && (
          <div id="pdf-viewer" className="w-full py-8">
            <div className="max-w-6xl mx-auto px-4">
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="h-screen">
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer
                      fileUrl={selectedPdf.pdfLink}
                      plugins={[defaultLayoutPluginInstance]}
                    />
                  </Worker>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Background Decorative Elements */}
        <div className="fixed top-0 left-0 right-0 pointer-events-none z-[-1] overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96  rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Magazine;