import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaFilter,
  FaTimes,
  FaLayerGroup, 
  FaDownload, 
  FaEye
} from 'react-icons/fa';

import Button from '../components/Button';
import janFebCover from "../acm-assets-2/jan-feb-cover.jpg"
import marAprCover from "../acm-assets-2/march-april-cover.jpg"
import mayJunCover from "../acm-assets-2/may-june-cover.jpg"
import sepOctCover from "../acm-assets-2/sep-oct-cover.jpg"
import novDecCover from "../acm-assets-2/nov-dec-cover.jpg"
import julAugCover from "../acm-assets-2/jul-aug-cover.jpg";

const magazineData = [
  {
    id: 'v5i1',
    volume: 5,
    issue: 1,
    title: 'January-February 2024',
    description: '',
    thumbnail: janFebCover,
    pdfLink: "https://drive.google.com/file/d/1RVxUc6YCNxRl7jDBgNtmfqbLdadHG4D6/view?usp=drivesdk",
    keywords: ['blockchain', 'ai', 'technology', 'innovation','machine learning','web3']
  },
  {
    id: 'v5i2',
    volume: 5,
    issue: 2,
    title: 'March-April 2024',
    description: '',
    thumbnail: marAprCover,
    pdfLink: "https://drive.google.com/file/d/1ALPaqVdvQNVLjRtiTEuX2_QV3LCnt8pS/view?usp=drivesdk",
    keywords: ['ai', 'machine learning', 'data science', 'technology','web3']
  },
  {
    id: 'v5i3',
    volume: 5,
    issue: 3,
    title: 'May-June 2024',
    description: '',
    thumbnail: mayJunCover,
    pdfLink: "https://drive.google.com/file/d/1dWspZPHLQ42l8PE99ekXiWxpuBMeiBaq/view?usp=drivesdk",
    keywords: ['blockchain', 'crypto', 'decentralization', 'web3']
  },
  {
    id: 'v5i4',
    volume: 5,
    issue: 4,
    title: 'July-August 2024',
    description: '',
    thumbnail: julAugCover,
    pdfLink: "https://drive.google.com/file/d/1lVH9IXeG0teEukrsVxr7qgYYcNG_BLEx/view?usp=drivesdk",
    keywords: ['blockchain', 'crypto', 'decentralization', 'web3']
  },
  {
    id: 'v5i5',
    volume: 5,
    issue: 5,
    title: 'September-October 2024',
    description: '',
    thumbnail: sepOctCover,
    pdfLink: "https://drive.google.com/file/d/12V4lpS0TRFNNtmO-zfCG5-6nv3jJwPol/view?usp=drivesdk",
    keywords: ['blockchain', 'crypto', 'decentralization', 'web3']
  },
  {
    id: 'v5i6',
    volume: 5,
    issue: 6,
    title: 'November-December 2024',
    description: '',
    thumbnail: novDecCover,
    pdfLink: "https://drive.google.com/file/d/1vBhfkqrb36AIEZt2ME5584IG96JQCphY/view?usp=drivesdk",
    keywords: ['blockchain', 'crypto', 'decentralization', 'web3']
  },
  // ... (previous data with keywords)
];

const ALL_KEYWORDS = [...new Set(magazineData.flatMap(magazine => magazine.keywords))];

const Magazine = () => {
  const [selectedKeywords, setSelectedKeywords] = useState([]);

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
    window.open(magazine.pdfLink, '_blank');
  };

  return (
    <section className=''>
    <div 
      className="relative w-full min-h-screen bg-[#0E0C15] text-white overflow-hidden"
      style={{ 
        // background: 'linear-gradient(135deg, #0E0C15 0%, #1A1A2E 100%)',
        background: 'transparent',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="h-[50vh] flex flex-col items-center justify-center text-center relative"
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold z-10 tracking-tight"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
            Book Outlet
          </span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl mt-4 max-w-3xl px-4 z-10 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Explore Our Digital Magazine Collection
        </motion.p>
      </motion.div>

      {/* Keyword Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full px-4 mb-4"
      >
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-2">
          <div className="flex items-center space-x-2 mr-2">
            <FaFilter className="text-purple-400" />
            <span className="text-lg font-semibold">Filter by:</span>
          </div>
          {ALL_KEYWORDS.map((keyword) => (
            <motion.button
              key={keyword}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleKeyword(keyword)}
              className={`
                px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300
                ${selectedKeywords.includes(keyword) 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}
              `}
            >
              {keyword}
            </motion.button>
          ))}
          {selectedKeywords.length > 0 && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setSelectedKeywords([])}
              className="text-red-400 hover:text-red-500 flex items-center space-x-1 text-xs ml-2"
            >
              <FaTimes />
              <span>Clear</span>
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Magazine Grid */}
      <motion.div 
        className="w-full px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredMagazines.map((magazine) => (
              <motion.div
                key={magazine.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 transform transition-all duration-300"
                onClick={() => handleMagazineSelect(magazine)}
              >
                <div className="relative">
                  <img 
                    src={magazine.thumbnail} 
                    alt={`Volume ${magazine.volume} Issue ${magazine.issue}`}
                    className="w-full h-[400px] object-cover filter brightness-75 group-hover:brightness-100 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
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
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl flex items-center justify-center space-x-2 hover:from-purple-700 hover:to-blue-700 transition"
                      onClick={() => handleMagazineSelect(magazine)}
                    >
                      <FaEye className="mr-2" />
                      Preview
                    </motion.button>
                    <motion.a
                      href={magazine.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 border border-gray-600 text-white py-3 rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-800 transition"
                    >
                      <FaDownload className="mr-2" />
                      Download
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 right-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      </div>
    </div>
    </section>
  );
};

export default Magazine;