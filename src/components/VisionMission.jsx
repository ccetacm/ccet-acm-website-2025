import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VisionMission = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const missions = [
    "To provide high quality and value based technical education.",
    "To establish a center of excellence in emerging and cutting edge technologies by encouraging research and consultancy in collaboration with industry and organizations of repute.",
    "To foster a transformative learning environment for technocrats focused on inter-disciplinary knowledge; problem-solving; leadership, communication, and interpersonal skills.",
    "To imbibe spirit of entrepreneurship and innovation for development of enterprising leaders for contributing to Nation progress and Humanity."
  ];

  return (
    <div className="bg-[#0E0C15] lg:mt-[-170px] py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-transparent from-blue-500/10 to-purple-500/10" />
      
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-4"
      >
        {/* Vision Section */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              className="w-16 h-1 bg-blue-500 rounded-full mb-4"
              variants={{
                hidden: { width: 0 },
                visible: { width: 64 }
              }}
              transition={{ duration: 0.8 }}
            />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Vision</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                Chandigarh College of Engineering and Technology aims to be a center of excellence for imparting technical education and serving the society with self-motivated and highly competent technocrats.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col items-center mb-8">
            <motion.div
              className="w-16 h-1 bg-purple-500 rounded-full mb-4"
              variants={{
                hidden: { width: 0 },
                visible: { width: 64 }
              }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Mission</h2>
          </div>
          
          <div className="grid gap-4">
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold text-sm min-w-[20px]">
                    {index + 1}
                  </span>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {mission}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
    </div>
  );
};

export default VisionMission;