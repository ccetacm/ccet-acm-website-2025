import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import harshitImg from "../acm-assets-2/Harshit.png";
import japjotImg from "../acm-assets-2/Japjot.png";
import sahilImg from "../acm-assets-2/Sahil - 1.png"
import jasjeetImg from "../acm-assets-2/Jasjeet - 1.png";
import sakshamImg from "../acm-assets-2/Saksham - 1.png";
import deependraImg from "../acm-assets-2/Deependra - 1.png";
import divyanshImg from "../acm-assets-2/Divyansh - 1.png";



const Webmasters= () => {
  const members = [
    {
      img: harshitImg,
      name: "Harshit Vashisht",
      position: "Webmaster at ACM",
      socials: {
        linkedin: "https://www.linkedin.com/in/harshit-vashisht-145872257",
        github: "https://github.com/HarshitVashisht11",
        instagram:"https://www.instagram.com/harshittvashisht/",
      }
    },
    {
      img: japjotImg,
      name: "Japjot Singh Nanda",
      position: "Webmaster at ACM-W",
      socials: {
        linkedin: "www.linkedin.com/in/japjot-singh-nanda-374a3a288",
        github: "https://github.com/CoderJap",
        twitter: "https://x.com/CoderJap",
      }
    },
    {
      img: sahilImg,
      name: "Sahil Garg",
      position: "ACM Chairperson",
      socials: {
        linkedin: "https://www.linkedin.com/in/sahil2004",
        github: "https://github.com/Sahil2004",
        instagram: "https://www.instagram.com/__sahil.garg_/"
      }
    },
    {
      img: sakshamImg,
      name: "Saksham Arora",
      position: "Vice Chairperson at ACM",
      socials: {
        linkedin: "https://www.linkedin.com/in/saksham-arora-81b344291/",
        github: "https://github.com/sakshamaroraccet",
        instagram:"https://www.instagram.com/sakshamarora18/"
      }
    },
    {
      img: divyanshImg,
      name: "Divyansh Manro",
      position: "Treasurer at ACM",
      socials: {
        linkedin: "https://www.linkedin.com/in/divyansh-manro",
        github: "https://github.com/divyansh-manro",
        instagram: "https://www.instagram.com/divyanshmanro/",
      }
    },
    {
      img: deependraImg,
      name: "Deependra Singh",
      position: "Event Manager at ACM-W",
      socials: {
        github: "https://github.com/deependrasaharan",
        linkedin: "https://www.linkedin.com/in/deependra-singh-721252296",
        instagram:"#",
      }
    },
    {
      img: jasjeetImg,
      name: "Jasjeet Singh",
      position: "Event Manager at ACM",
      socials: {
        linkedin: "https://www.linkedin.com/in/jasjeet-singh-8832ba27b",
        github: "https://github.com/Jasjeet-Singh-S",
        instagram:"https://www.instagram.com/jasjeet_s_s/",
      }
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-transparent from-gray-900 to-black py-16 px-4">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
            animate={{
              x: [0, Math.random() * 400 - 200],
              y: [0, Math.random() * 400 - 200],
              scale: [1, Math.random() * 3],
              opacity: [0.3, 0.6]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mt-[100px] mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
        >
          Our Team
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <motion.div 
                  className="relative w-full pt-[100%] mb-6 rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-blue-400 transition-colors">
                  {member.name}
                </h3>
                
                <p className="text-gray-400 text-sm text-center mb-4">
                  {member.position}
                </p>

                <div className="flex justify-center gap-4">
                  {Object.entries(member.socials).map(([platform, url]) => {
                    const Icon = {
                      github: Github,
                      linkedin: Linkedin,
                      twitter: Twitter,
                      instagram: Instagram
                    }[platform];
                    return (
                      <motion.a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Webmasters;