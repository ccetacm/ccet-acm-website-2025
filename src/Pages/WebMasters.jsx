import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram , Code2} from 'lucide-react';
import { 
  SiReact, SiNodedotjs, SiTypescript, SiPython,
  SiVuedotjs,  SiMongodb, SiGraphql,
  SiTailwindcss, SiJavascript, SiGit, SiDocker,SiKnexdotjs
} from 'react-icons/si';
import harshitImg from "../acm-assets-2/Harshit.png";
import japjotImg from "../acm-assets-2/Japjot.png";

const skillIcons = {
  "React": SiReact,
  "Node.js": SiNodedotjs,
  "TypeScript": SiTypescript,
  "Python": SiPython,
  "Vue.js": SiVuedotjs,
  "MongoDB": SiMongodb,
  "GraphQL": SiGraphql,
  "Tailwind": SiTailwindcss,
  "JavaScript": SiJavascript,
  "Git": SiGit,
  "Docker": SiDocker,
  "Next.js":SiKnexdotjs
};

const Webmasters = () => {
  const webmasters = [
    {
      img: japjotImg,
      name: "Japjot Singh Nanda",
      role: "Webmaster at ACM-W",
      skills: ["React", "Node.js", "JavaScript", "Python", "Git", "Tailwind"],
      socials: {
        linkedin: "www.linkedin.com/in/japjot-singh-nanda-374a3a288",
        github: "https://github.com/CoderJap",
        twitter: "https://x.com/CoderJap",
        instagram: ""
      }
    },
    {
      img: harshitImg,
      name: "Harshit Vashisht",
      role: "Webmaster at ACM",
      skills: ["Next.js",  "MongoDB", "TypeScript", "GraphQL", "Docker"],
      socials: {
        linkedin: "https://www.linkedin.com/in/harshit-vashisht-145872257",
        github: "https://github.com/HarshitVashisht11",
        twitter: "",
        instagram: ""
      }
    }
  ];

  return (
    <div className="mt-[100px] relative min-h-screen bg-[#0E0D15] text-white py-16 px-4 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-transparent from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-xy" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5],
              opacity: [0.1, 0.5]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
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

      <div className="max-w-6xl mx-auto relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Meet Our Webmasters
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {webmasters.map((webmaster, index) => (
            <motion.div
              key={webmaster.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/[0.15] transition-all duration-300">
                <div className="flex flex-col items-center">
                  <motion.div 
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={webmaster.img}
                      alt={webmaster.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </motion.div>

                  <h2 className="text-2xl font-bold mt-4 mb-2">{webmaster.name}</h2>
                  <p className="text-gray-400 mb-6">{webmaster.role}</p>

                  <div className="flex gap-6 mb-8">
                    {Object.entries(webmaster.socials).map(([platform, url]) => {
                      if (!url) return null;
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
                          whileHover={{ scale: 1.2, y: -2 }}
                          className="hover:text-blue-400 transition-colors"
                        >
                          <Icon size={24} />
                        </motion.a>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center">
                    {webmaster.skills.map((skill) => {
                      const Icon = skillIcons[skill];
                      return (
                        <motion.div
                          key={skill}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-blue-500/20 transition-all duration-300"
                        >
                          {Icon && <Icon className="w-4 h-4" />}
                          <span>{skill}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
         {/* Credits Section */}
         <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <div className="relative bg-white/5 backdrop-blur-lg rounded-xl p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl" />
            
            <motion.div 
              className="relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Code2 className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Website Crafted By
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                This website was designed and developed with ❤️ by our talented webmasters
                <motion.span
                  className="block mt-4 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
                  whileHover={{ scale: 1.05 }}
                >
                  Harshit Vashisht & Japjot Singh Nanda
                </motion.span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Webmasters;