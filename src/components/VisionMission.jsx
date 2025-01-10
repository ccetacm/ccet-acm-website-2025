import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ChevronDown, Target, Compass, GraduationCap } from 'lucide-react';

const AnimatedCard = ({ children, delay = 0 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

const VisionMission = () => {
  const [activeTab, setActiveTab] = useState('college');
  const [expandedPO, setExpandedPO] = useState(null);
  const { scrollY } = useScroll();
  
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '100%']);
  const spring = useSpring(backgroundY, { stiffness: 100, damping: 30 });

  const programOutcomes = [
    "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
    "Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
    "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
    "Conduct Investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
    "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
    "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
    "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
    "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
    "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
    "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
    "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
    "Life-long Learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long earning in the broadest context of technological change."
  ];

  return (
    <div className="relative min-h-screen bg-[#0F0C15] text-gray-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          style={{ y: spring }}
          className="w-full h-full"
        >
          <div className="absolute inset-0 bg-transparent from-blue-500/20 via-purple-500/20 to-pink-500/20" />
          <div className="absolute inset-0 backdrop-blur-3xl" />
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Floating Navigation */}
        <div className="sticky top-4 z-50 mb-12">
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex justify-center gap-4 mx-auto max-w-md bg-gray-900/80 p-2 rounded-full backdrop-blur-lg border border-gray-700/50 shadow-xl"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                activeTab === 'college' 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg shadow-blue-500/30' 
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('college')}
            >
              <GraduationCap size={20} />
              College
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                activeTab === 'department' 
                  ? 'bg-gradient-to-r from-purple-600 to-purple-400 shadow-lg shadow-purple-500/30' 
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('department')}
            >
              <Target size={20} />
              Department
            </motion.button>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'college' ? (
            <div className="space-y-16">
              <AnimatedCard delay={0.2}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative bg-gray-900 p-8 rounded-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-blue-500/10 rounded-lg">
                        <Target className="w-8 h-8 text-blue-400" />
                      </div>
                      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Vision</h2>
                    </div>
                    <p className="text-xl leading-relaxed text-gray-300">
                      Chandigarh College of Engineering and Technology aims to be a center of excellence for imparting technical education and serving the society with self-motivated and highly competent technocrats.
                    </p>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.4}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative bg-gray-900 p-8 rounded-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-purple-500/10 rounded-lg">
                        <Compass className="w-8 h-8 text-purple-400" />
                      </div>
                      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Mission</h2>
                    </div>
                    <ul className="space-y-6">
                      {[
                        "To provide high quality and value based technical education.",
                        "To establish a center of excellence in emerging and cutting edge technologies by encouraging research and consultancy in collaboration with industry and organizations of repute.",
                        "To foster a transformative learning environment for technocrats focused on inter-disciplinary knowledge; problem-solving; leadership, communication, and interpersonal skills.",
                        "To imbibe spirit of entrepreneurship and innovation for development of enterprising leaders for contributing to Nation progress and Humanity."
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="flex items-start gap-4 text-lg text-gray-300"
                        >
                          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-purple-500/10 rounded-full text-purple-400 font-bold">
                            {index + 1}
                          </span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          ) : (
            <div className="space-y-16">
              <AnimatedCard delay={0.2}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative bg-gray-900 p-8 rounded-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-blue-500/10 rounded-lg">
                        <Target className="w-8 h-8 text-blue-400" />
                      </div>
                      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Vision</h2>
                    </div>
                    <p className="text-xl leading-relaxed text-gray-300">
                      To produce self-motivated and globally competent technocrats equipped with computing, innovation, and human values for ever changing world and shape them towards serving the society.
                    </p>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.4}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative bg-gray-900 p-8 rounded-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-purple-500/10 rounded-lg">
                        <Compass className="w-8 h-8 text-purple-400" />
                      </div>
                      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Mission</h2>
                    </div>
                    <ul className="space-y-6">
                      {[
                        "To make the department a smart centre for learning, innovation and research, creativity, and entrepreneurship for the stakeholders (students/scholar, faculty, and staff).",
                        "To inculcate a strong background in mathematical, theoretical, analytical, and practical knowledge in computer science and engineering.",
                        "To promote interaction with institutions, industries and research organizations to enable them to develop as technocrats, entrepreneurs, and business leaders of the future.",
                        "To provide a friendly environment while developing interpersonal skills to bring out technocrat's inherent talents for their all-round growth."
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="flex items-start gap-4 text-lg text-gray-300"
                        >
                          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-purple-500/10 rounded-full text-purple-400 font-bold">
                            M{index + 1}
                          </span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          )}

          {/* Program Outcomes */}
          <div className="mt-24">
            <AnimatedCard>
              <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Program Outcomes (POs)
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {programOutcomes.map((outcome, index) => (
                  <AnimatedCard key={index} delay={index * 0.1}>
                    <motion.div
                      className="relative group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                      <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                        <button
                          onClick={() => setExpandedPO(expandedPO === index ? null : index)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors"
                        >
                          <span className="font-medium flex items-center gap-2">
                            <span className="w-8 h-8 flex items-center justify-center bg-blue-500/10 rounded-lg text-blue-400 font-bold">
                              {index + 1}
                            </span>
                            <span className="text-gray-200">PO{index + 1}</span>
                          </span>
                          <ChevronDown
                            className={`transform transition-transform duration-300 text-gray-400 ${
                              expandedPO === index ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {expandedPO === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 py-4 border-t border-gray-800 text-gray-300"
                          >
                            {outcome}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  </AnimatedCard>
                ))}
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;